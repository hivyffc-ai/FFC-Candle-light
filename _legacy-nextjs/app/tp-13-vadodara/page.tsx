import { Metadata } from 'next';
import FFCAreaPage from '@/components/ffc-area-page';
import { getAreaBySlug } from '@/lib/ffc-config';

const area = getAreaBySlug('tp-13-vadodara');

export const metadata: Metadata = {
  title: area ? `Candlelight Dinner in ${area.name} | Friends Factory Cafe Vadodara` : 'Friends Factory Cafe',
  description: area ? `Book romantic candlelight dinner in ${area.name}, Vadodara. Premium rooftop celebrations, birthday surprises, anniversary dinners & proposals at Friends Factory Cafe.` : '',
  alternates: {
    canonical: '/tp-13-vadodara',
  },
};

export default function Page() {
  if (!area) return null;
  return <FFCAreaPage area={area} />;
}
