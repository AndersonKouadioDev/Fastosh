"use client";

import { siteInternationaux } from "@/lib/data";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function SiteInternationaux() {
  return (
    <div className="mt-4 ">
      <Accordion
        itemClasses={{
          title: "font-bold",
        }}
      >
        <AccordionItem
          aria-label={`Accordion sites internationaux`}
          title="Nos sites internationaux"
          classNames={{
            title: "font-bold lg:text-2xl text-lg",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteInternationaux.map((site, index) => (
              <Link
                key={`${site}-${index}`}
                href={site.url}
                className="flex items-center gap-2"
              >
                <Image
                  src={site.image_url}
                  alt={site.labelText}
                  className="w-6 h-6 rounded-full object-cover"
                  width={50}
                  height={50}
                />
                <span>{site.labelText}</span>
              </Link>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
      <div className="h-[1px] bg-gray-200"></div>
    </div>
  );
}
