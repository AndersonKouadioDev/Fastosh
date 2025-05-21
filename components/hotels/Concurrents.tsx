"use client";

import Image from "next/image";

const conccurents = [
  "https://www.skyscanner.fr/images/websites/h_bc.png",
  "https://www.skyscanner.fr/images/websites/d_ct.png",
  "https://www.skyscanner.fr/images/websites/h_hc.png",
  "https://www.skyscanner.fr/images/websites/220x80/h_hy.png",
  "https://www.skyscanner.fr/images/websites/h_xp.png",
  "https://www.skyscanner.fr/images/websites/h_ic.png",
];
export default function ContentSection() {
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl md:text-4xl font-bold font-ibrand text-secondary">
        Comparez les hôtels de vos enseignes préférées{" "}
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 items-center gap-4">
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
