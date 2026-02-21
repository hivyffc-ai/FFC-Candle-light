/**
 * MAIN PAGE - FRIENDS FACTORY CAFE VADODARA
 * The main home page for Candlelight Dinner - Friends Factory Cafe Vadodara
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for Candlelight Dinner Vadodara
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Candlelight Dinner Vadodara | Best Romantic Dining | ${siteConfig.name}`,
    description: `${siteConfig.tagline}. Experience the best candlelight dinner in Vadodara with private rooftop dining, stunning city views, gourmet cuisine & romantic ambiance. Book now!`,
    keywords: [
      'candlelight dinner vadodara',
      'best candlelight dinner vadodara',
      'candlelight dinner for couples vadodara',
      'romantic candlelight dinner vadodara',
      'candlelight dinner restaurants vadodara',
      'candlelight dinner near me vadodara',
      'private candlelight dinner vadodara',
      'rooftop candlelight dinner vadodara',
      'candlelight dinner packages vadodara',
      'candlelight dinner price vadodara',
      'friends factory cafe vadodara'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `Candlelight Dinner Vadodara | ${siteConfig.name}`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}