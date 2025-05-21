"use client";

import Image from "next/image";

const conccurents = [
  "https://logos.skyscnr.com/images/carhire/vendors/663.png",
  "https://logos.skyscnr.com/images/carhire/vendors/368.png",
  "https://logos.skyscnr.com/images/carhire/vendors/686.png",
  "https://logos.skyscnr.com/images/carhire/vendors/774.png",
  "https://logos.skyscnr.com/images/carhire/vendors/640.png",
];
export default function EntrepriseCar() {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand text-secondary">
        Vos entreprises fiables de location de voiture, au même endroit
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-10 items-center gap-4 pt-4">
        {conccurents.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt=""
            width={220}
            height={80}
            className="w-full h-auto shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
