import { ChevronRight } from "lucide-react";
import { JSX } from "react";
import Link from "next/link";

interface ServiceNavigationProps {
  title: string;
  items: {
    icon: JSX.Element;
    label: string;
    href: string;
  }[];
}

export default function ServiceNavigation({
  title,
  items,
}: ServiceNavigationProps) {
  return (
    <div className="flex flex-col gap-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand">{title}</h2>
      <div>
        {items.map((item, index) => (
          <div key={index} className="border-b border-foreground/20">
            <Link
              href={item.href}
              className="flex items-center justify-between w-full py-4 text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-center">
                {item.icon}
                <span className="text-lg md:text-xl font-bold">
                  {item.label}
                </span>
              </div>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
