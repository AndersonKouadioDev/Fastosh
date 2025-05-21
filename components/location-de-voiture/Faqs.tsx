"use client";

import { faqs } from "@/lib/data";
import { Accordion, AccordionItem } from "@heroui/react";

import React from "react";

export default function Faqs() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand text-secondary">
        Trouver votre véhicule avec nous : FAQ
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <Accordion
          itemClasses={{
            title: "font-bold text-base sm:text-xl",
          }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={`${faq}-${index}`}
              aria-label={`Accordion ${index + 1}`}
              title={faq.title}
            >
              {faq.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
