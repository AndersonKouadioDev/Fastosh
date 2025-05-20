import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://js.skyscnr.com/images/country/flag/header/**"),
      new URL("https://www.skyscanner.fr/images/websites/**"),
    ],
  },
};

export default nextConfig;
