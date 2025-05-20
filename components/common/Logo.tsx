import Image, { StaticImageData } from "next/image";
import logo_blanc_bleu from "@/public/images/logo/logo_blanc_bleu.png";
import logo_bleu_blanc from "@/public/images/logo/logo_bleu_blanc.png";
import logo_blanc_orange from "@/public/images/logo/logo_blanc_orange.png";
import logo_orange_blanc from "@/public/images/logo/logo_orange_blanc.png";

interface LogoProps {
  type?: "blanc_bleu" | "bleu_blanc" | "blanc_orange" | "orange_blanc";
  className?: string;
}

export default function Logo({ type = "blanc_bleu", className }: LogoProps) {
  let logo_link: StaticImageData;
  switch (type) {
    case "blanc_bleu":
      logo_link = logo_blanc_bleu;
      break;
    case "bleu_blanc":
      logo_link = logo_bleu_blanc;
      break;
    case "blanc_orange":
      logo_link = logo_blanc_orange;
      break;
    case "orange_blanc":
      logo_link = logo_orange_blanc;
      break;
  }

  return (
    <Image
      src={logo_link}
      alt="Logo"
      className={className}
      width={1042}
      height={320}
    />
  );
}
