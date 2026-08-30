import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Candlelight Dinner Packages Vadodara | Starting ₹4,700',
  description: 'Explore 8 romantic candlelight dinner packages in Vadodara. Private rooftop & glass house settings with gourmet dining, decorations & stunning views. Book now!',
  keywords: 'candlelight dinner packages vadodara, candlelight dinner price vadodara, romantic dinner packages, private candlelight dinner vadodara, rooftop candlelight dinner packages',
  alternates: {
    canonical: '/packages',
  },
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
