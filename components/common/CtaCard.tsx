"use client";

import { Button } from "@heroui/react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export default function CtaCard({
  image,
  title,
  subtitle,
  description,
}: {
  image: StaticImageData;
  title: ReactNode;
  subtitle?: string;
  description?: string;
}) {
  return (
    <div className="relative mt-4 min-h-[450px] md:h-[360px] lg:h-[460px] w-full overflow-hidden rounded-2xl mx-auto container px-4">
      <Image
        src={image}
        alt="Vue panoramique sur l'océan au coucher du soleil"
        fill
        className="object-cover rounded-2xl"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
      {/* Text Overlay */}
      <div className="absolute max-w-md z-1 inset-0 flex flex-col sm:justify-center p-8 md:p-16">
        {subtitle && (
          <p className="text-white text-sm font-bold mb-2">{subtitle}</p>
        )}
        <h1 className="text-white text-3xl md:text-5xl font-ibrand font-bold max-w-md">
          {title}
        </h1>
        {description && (
          <p className="text-white text-sm font-bold mb-2">{description}</p>
        )}
        <Button
          variant="solid"
          color="secondary"
          size="sm"
          className="mt-8 px-4 py-2 hidden sm:block rounded-lg text-base font-bold w-fit"
        >
          Chercher des vols dans le monde entier
        </Button>
      </div>
    </div>
  );
}
