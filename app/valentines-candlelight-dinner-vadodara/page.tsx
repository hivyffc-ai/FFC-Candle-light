import { Metadata } from 'next';
import FFCKeywordPage from '@/components/ffc-keyword-page';
import { getServiceBySlug, getKeywordBySlug } from '@/lib/ffc-config';

const service = getServiceBySlug('valentines-week');
const keyword = getKeywordBySlug('valentines-week', 'valentines-candlelight-dinner-vadodara');

export const metadata: Metadata = {
  title: keyword?.metaTitle || 'Friends Factory Cafe',
  description: keyword?.metaDescription || '',
  alternates: {
    canonical: '/valentines-candlelight-dinner-vadodara',
  },
};

export default function Page() {
  if (!service || !keyword) return null;
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
