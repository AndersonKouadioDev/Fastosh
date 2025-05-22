"use client";

import { Button } from "@heroui/react";
import StickyTabs from "../ui/sticky-tabs";

interface NavigationItem {
  id: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: "car-offers",
    label: "Offres de location de voiture à partir de 38,485F",
  },
  {
    id: "providers",
    label: "Abidjan : les meilleurs prestataires de location de voiture",
  },
  { id: "quick-info", label: "Infos rapides" },
  { id: "best-offer", label: "Comment trouver la meilleure offre" },
  { id: "faq", label: "Questions fréquentes" },
];

export default function StickyNavigation() {
  return (
    <StickyTabs
      sections={navigationItems}
      hideItemsInMobile
      extras={{
        fromIndex: 2,
        toIndex: -1,
        render: () => (
          <Button
            color="primary"
            variant="solid"
            size="sm"
            className="font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-shadow"
          >
            Réserver
          </Button>
        ),
      }}
    />
  );
}

// export default function StickyNavigation() {
//   const [activeSection, setActiveSection] = useState<string>("car-offers");
//   const observer = useRef<IntersectionObserver | null>(null);
//   const navRef = useRef<HTMLDivElement>(null);
//   const tabListContainerRef = useRef<HTMLDivElement>(null);

//   const shouldShowReserveButton = () => {
//     const currentIndex = navigationItems.findIndex(
//       (item) => item.id === activeSection
//     );
//     return currentIndex >= 2;
//   };

//   useEffect(() => {
//     const sectionElements: HTMLElement[] = [];

//     navigationItems.forEach((item) => {
//       const element = document.getElementById(item.id);
//       if (element) sectionElements.push(element);
//     });

//     observer.current = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.id;
//             setActiveSection(id);

//             // 👉 Scroll horizontal auto vers l’onglet actif
//             const tab = document.querySelector(`[data-key="${id}"]`);
//             if (tab && tabListContainerRef.current) {
//               tabListContainerRef.current.scrollTo({
//                 left: tab.getBoundingClientRect().left - tabListContainerRef.current.getBoundingClientRect().left,
//                 behavior: "smooth",
//               });
//             }
//           }
//         });
//       },
//       {
//         rootMargin: "-80px 0px -80% 0px",
//         threshold: 0,
//       }
//     );

//     sectionElements.forEach((element) => {
//       if (observer.current) observer.current.observe(element);
//     });

//     return () => {
//       if (observer.current) {
//         sectionElements.forEach((element) => {
//           observer.current?.unobserve(element);
//         });
//       }
//     };
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const navHeight = navRef.current?.offsetHeight || 0;
//       const elementPosition =
//         element.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = elementPosition - navHeight - 20;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleSelectionChange = (key: React.Key) => {
//     const selectedId = key as string;
//     setActiveSection(selectedId);
//     scrollToSection(selectedId);

//     // Scroll horizontal vers le tab actif
//     setTimeout(() => {
//       const tab = document.querySelector(`[data-key="${selectedId}"]`);
//       if (tab && tabListContainerRef.current) {
//         tabListContainerRef.current.scrollTo({
//           left:
//             tab.getBoundingClientRect().left -
//             tabListContainerRef.current.getBoundingClientRect().left,
//           behavior: "smooth",
//         });
//       }
//     }, 50);
//   };

//   return (
//     <div
//       ref={navRef}
//       className="sticky top-0 z-50 bg-background border-b border-foreground/20 shadow-sm"
//     >
//       <div className="flex items-center justify-between">
//         <div
//           ref={tabListContainerRef}
//           className="flex-1 overflow-x-auto scrollbar-hide"
//         >
//           <Tabs
//             selectedKey={activeSection}
//             onSelectionChange={handleSelectionChange}
//             variant="underlined"
//             size="lg"
//             classNames={{
//               tabList:
//                 "gap-8 w-full relative rounded-none p-0 border-b-2 border-foreground/20 flex",
//               cursor:
//                 "w-full bg-gradient-to-r from-primary to-primary-300 dark:from-secondary dark:to-secondary-300 h-0.5",
//               tab: "max-w-fit px-0 h-14 data-[hover=true]:opacity-80 transition-all duration-200",
//               tabContent:
//                 "group-data-[selected=true]:text-primary dark:group-data-[selected=true]:text-secondary group-data-[selected=true]:font-semibold text-foreground/60 hover:text-foreground/80 text-sm whitespace-nowrap",
//             }}
//           >
//             {navigationItems.map((item) => (
//               <Tab
//                 key={item.id}
//                 title={
//                   <span className="text-sm font-medium">{item.label}</span>
//                 }
//               />
//             ))}
//           </Tabs>
//         </div>

//         <div
//           className={`ml-4 pr-4 transition-all duration-300 ease-in-out ${
//             shouldShowReserveButton()
//               ? "opacity-100 translate-x-0"
//               : "opacity-0 translate-x-4 pointer-events-none"
//           }`}
//         >
//           <Button
//             color="primary"
//             variant="solid"
//             size="sm"
//             className="font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-shadow"
//           >
//             Réserver
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
