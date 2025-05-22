"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { Tabs, Tab, Select, SelectItem, cn } from "@heroui/react";

type Section = {
  id: string;
  label: string;
  content?: ReactNode;
};

type StickyTabsProps = {
  sections: Section[];
  extras?: {
    fromIndex?: number;
    toIndex?: number; // -1 = affichage infini
    render: (activeIndex: number) => ReactNode;
  };
  hideOnScroll?: boolean;
  children?: ReactNode;
};

type StickyTabsContextProps = {
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const StickyTabsContext = createContext<StickyTabsContextProps | null>(null);

export const useStickyTabs = (): StickyTabsContextProps => {
  const context = useContext(StickyTabsContext);
  if (!context) {
    throw new Error("useStickyTabs must be used within StickyTabs");
  }
  return context;
};

export default function StickyTabs({
  sections,
  extras,
  hideOnScroll = false,
  children,
}: StickyTabsProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [isMobile, setIsMobile] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    const navHeight = navRef.current?.offsetHeight ?? 0;
    if (el) {
      const offsetTop =
        el.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const onSelectionChange = (key: string) => {
    setActiveSection(key);
    scrollToSection(key);
    setTimeout(() => {
      const tab = document.querySelector(`[data-key="${key}"]`);
      if (tab && tabListRef.current && !isMobile) {
        tabListRef.current.scrollTo({
          left:
            tab.getBoundingClientRect().left -
            tabListRef.current.getBoundingClientRect().left +
            tabListRef.current.scrollLeft,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  useEffect(() => {
    const els: HTMLElement[] = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    observer.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            window.history.replaceState(null, "", `#${id}`);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.current?.observe(el));
    return () => {
      els.forEach((el) => observer.current?.unobserve(el));
    };
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentY;
    };

    const onResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // 🔁 Scroll horizontal automatique lors du scroll vertical
  useEffect(() => {
    if (isMobile) return;

    const tab = document.querySelector(`[data-key="${activeSection}"]`);
    if (tab && tabListRef.current) {
      tabListRef.current.scrollTo({
        left:
          tab.getBoundingClientRect().left -
          tabListRef.current.getBoundingClientRect().left +
          tabListRef.current.scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeSection, isMobile]);

  const activeIndex = sections.findIndex((s) => s.id === activeSection);
  const from = extras?.fromIndex ?? Infinity;
  const to = extras?.toIndex ?? -1;
  const showExtras =
    extras && activeIndex >= from && (to === -1 || activeIndex <= to);

  return (
    <StickyTabsContext.Provider value={{ activeSection, scrollToSection }}>
      <div
        ref={navRef}
        className={cn(
          `sticky top-0 z-50 bg-background transition-all duration-500 ease-in-out
          ${
            hideOnScroll
              ? scrollDir === "down"
                ? "-translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
              : ""
          }`
        )}
      >
        <div className="flex items-center justify-between px-2 md:px-4 py-2">
          {isMobile ? (
            <Select
              selectedKeys={[activeSection]}
              onSelectionChange={(key) => onSelectionChange(key as string)}
              className="flex-1"
            >
              {sections.map((section) => (
                <SelectItem key={section.id}>{section.label}</SelectItem>
              ))}
            </Select>
          ) : (
            <div
              ref={tabListRef}
              className="overflow-x-auto scrollbar-hide flex-1"
            >
              <Tabs
                selectedKey={activeSection}
                onSelectionChange={(key) => onSelectionChange(key as string)}
                variant="underlined"
                size="lg"
                classNames={{
                  tabList: "gap-8 w-full p-0 border-b-2 border-border flex",
                  cursor: "w-full bg-primary h-0.5",
                  tab: "max-w-fit px-0 h-14 data-[hover=true]:opacity-80 transition-all",
                  tabContent:
                    "group-data-[selected=true]:text-primary font-medium text-muted-foreground text-sm whitespace-nowrap",
                }}
              >
                {sections.map((section) => (
                  <Tab
                    key={section.id}
                    title={<span className="text-sm">{section.label}</span>}
                  />
                ))}
              </Tabs>
            </div>
          )}

          {extras?.render && (
            <div
              className={`ml-2 md:ml-4 transition-all duration-500 ease-in-out ${
                showExtras
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4 pointer-events-none"
              }`}
            >
              {extras.render(activeIndex)}
            </div>
          )}
        </div>
      </div>
      {children && (
        <main>
          {sections.map(({ id, content }) => (
            <section
              key={id}
              id={id}
              className="min-h-screen px-4 md:px-6 py-16 border-b border-border"
            >
              {content}
            </section>
          ))}
          {children}
        </main>
      )}
    </StickyTabsContext.Provider>
  );
}
