import Image, { StaticImageData } from "next/image";
import icone_orange from "@/public/images/logo/icone_orange.png";
import icone_blanc from "@/public/images/logo/icone_blanc.png";
import icone_bleu from "@/public/images/logo/icone_bleu.png";

interface IconeProps {
  type?: "icone_orange" | "icone_blanc" | "icone_bleu";
  className?: string;
}

export default function Icone({
  type = "icone_orange",
  className,
}: IconeProps) {
  let logo_link: StaticImageData;
  switch (type) {
    case "icone_orange":
      logo_link = icone_orange;
      break;
    case "icone_blanc":
      logo_link = icone_blanc;
      break;
    case "icone_bleu":
      logo_link = icone_bleu;
      break;
  }

  return (
    <Image
      src={logo_link}
      alt="Logo"
      className={className}
      width={1042}
      height={1042}
    />
  );
}
