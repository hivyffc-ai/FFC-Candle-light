import { Metadata } from 'next';
import FFCAboutPage from '@/components/ffc-about-page';

export const metadata: Metadata = {
  title: 'About Us | Friends Factory Cafe Vadodara',
  description: 'Learn about Friends Factory Cafe - Vadodara\'s premier romantic celebration venue for couples. Our story, mission, and commitment to creating unforgettable moments.',
  keywords: 'about friends factory cafe, romantic cafe vadodara, couple cafe story, celebration venue vadodara',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <FFCAboutPage />;
}
