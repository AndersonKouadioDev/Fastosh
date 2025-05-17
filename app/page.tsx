"use client";

import ThemeSwitcher from "@/components/common/ThemeSwitcher";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <ThemeSwitcher />
      <p className="font-ibrand text-9xl text-gray">Hello World</p>
    </div>
  );
}
