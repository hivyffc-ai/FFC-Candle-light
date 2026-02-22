import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | Friends Factory Cafe Vadodara',
  description: 'Get in touch with Friends Factory Cafe Vadodara. Book your romantic celebration, ask questions, or visit us. Call +91 74878 88730.',
  keywords: 'contact friends factory cafe, book celebration vadodara, romantic venue contact, couple cafe vadodara contact',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <FFCContactPage />;
}
