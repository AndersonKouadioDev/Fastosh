import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] z-[1]">
      <Image src="/images/background/bg_2.jpg" alt="Hôtel de rêve" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 drop-shadow-md">
          Trouvez l&apos;hôtel de vos rêves dès aujourd&apos;hui
        </h1>
      </div>
    </div>
  )
}
