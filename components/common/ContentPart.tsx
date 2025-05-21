"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

interface ContentSectionProps {
  items: {
    content: string;
    icon: React.ReactNode;
  }[];
  itemsBreadcrumb: {
    href: string;
    label: string;
  }[];
}

export default function ContentPart({
  items,
  itemsBreadcrumb,
}: ContentSectionProps) {
  return (
    <div className="flex flex-col gap-12">
      <Breadcrumbs size="lg">
        {itemsBreadcrumb.map((item, index) => (
          <BreadcrumbItem key={index} href={item.href}>
            {item.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">{item.icon}</div>
            <p className="font-bold text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
