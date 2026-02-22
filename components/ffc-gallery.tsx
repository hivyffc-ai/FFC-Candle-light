'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items with actual package images
export const galleryItems: GalleryItem[] = [
  // Featured Images - Best shots from packages
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/2.png', alt: 'Romantic rooftop candlelight dinner setup Vadodara', title: 'Romantic Rooftop', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/21.png', alt: 'Eternal love rooftop celebration Vadodara', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/52.png', alt: 'Golden promise glass house dinner Vadodara', title: 'Glass House', featured: false },
  { type: 'video', src: '/images/gallery/1000330060.mp4', alt: 'Romantic celebration video Vadodara', title: 'Celebration Video', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/5.png', alt: 'Candlelight dinner setup Vadodara', title: 'Evening Romance', featured: false },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/25.png', alt: 'Anniversary celebration Vadodara', title: 'Anniversary Special', featured: false },
  { type: 'video', src: '/images/gallery/VID_20241205_201217.mp4', alt: 'Anniversary celebration video Vadodara', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/55.png', alt: 'Romantic table decoration Vadodara', title: 'Table Decor', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/8.png', alt: 'Balloon decoration Vadodara', title: 'Balloon Setup', featured: false },
  { type: 'image', src: '/packages/moonlit-romance-experience/images/24.png', alt: 'Moonlit dinner setup Vadodara', title: 'Moonlit Romance', featured: false },
  { type: 'video', src: '/images/gallery/VID_20251108_200434508.mp4', alt: 'Rooftop celebration reel Vadodara', title: 'Rooftop Vibes', featured: false },
  { type: 'image', src: '/packages/the-promise-creative-area/images/2.png', alt: 'Creative area celebration Vadodara', title: 'Creative Setup', featured: false },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/30.png', alt: 'Couple celebration Vadodara', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/10.png', alt: 'Evening romantic celebration Vadodara', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/images/gallery/VID-20250512-WA0007.mp4', alt: 'Birthday reel Vadodara', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/60.png', alt: 'Glass house dinner Vadodara', title: 'Glass House', featured: false },
  { type: 'image', src: '/packages/moonlit-romance-experience/images/28.png', alt: 'Night romantic setup Vadodara', title: 'Night Setup', featured: false },
  { type: 'image', src: '/packages/the-promise-creative-area/images/6.png', alt: 'Proposal setup Vadodara', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/35.png', alt: 'Day celebration Vadodara', title: 'Day Celebration', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/12.png', alt: 'Surprise party Vadodara', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/65.png', alt: 'Romantic dinner date Vadodara', title: 'Dinner Date', featured: false },
  { type: 'image', src: '/packages/moonlit-romance-experience/images/32.png', alt: 'Valentine setup Vadodara', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/packages/the-promise-creative-area/images/10.png', alt: 'Valentine dinner Vadodara', title: 'Valentine Dinner', featured: false },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/40.png', alt: 'Valentine romance Vadodara', title: 'Valentine Romance', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/15.png', alt: 'Girlfriend surprise Vadodara', title: 'Surprise Setup', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/70.png', alt: 'Boyfriend surprise Vadodara', title: 'Special Moment', featured: false },
  { type: 'image', src: '/packages/moonlit-romance-experience/images/35.png', alt: 'Room decoration Vadodara', title: 'Room Decoration', featured: false },
  { type: 'image', src: '/packages/the-promise-creative-area/images/14.png', alt: 'Birthday party Vadodara', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/45.png', alt: 'Surprise date Vadodara', title: 'Surprise Date', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/18.png', alt: 'Couple moment Vadodara', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/58.png', alt: 'Candlelight dinner for couples Vadodara', title: 'Couple Dinner', featured: false },
  { type: 'image', src: '/packages/the-promise-creative-area/images/18.png', alt: 'Rooftop dinner Vadodara', title: 'Rooftop Dinner', featured: false },
  { type: 'image', src: '/packages/eternal-love-rooftop-celebration/images/28.png', alt: 'Private dining Vadodara', title: 'Private Dining', featured: false },
  { type: 'image', src: '/packages/moonlit-romance-experience/images/30.png', alt: 'Romantic venue Vadodara', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/packages/golden-promise-glass-house/images/68.png', alt: 'Celebration venue Vadodara', title: 'Celebration Venue', featured: false },
  { type: 'image', src: '/packages/forever-us-loveframe-rooftop/images/7.png', alt: 'Fairy lights decoration Vadodara', title: 'Fairy Lights', featured: false },
];

// Hero images for keyword and area pages
export const birthdayHeroImages = galleryItems.filter(i => i.type === 'image').slice(0, 6).map(i => i.src);

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Our Gallery", 
  subtitle = "Real celebrations, real memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-rose-50 via-white to-pink-50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic celebrations in Vadodara
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-rose-500 hover:bg-rose-800 text-white' 
                : 'border-rose-300 text-rose-900 hover:bg-rose-50'}
            >
              All ({photoCount + videoCount})
            </Button>
            <Button 
              variant={activeFilter === 'photos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('photos')}
              className={activeFilter === 'photos' 
                ? 'bg-rose-500 hover:bg-rose-800 text-white' 
                : 'border-rose-300 text-rose-900 hover:bg-rose-50'}
            >
              <ImageIcon className="h-4 w-4 mr-2" />
              Photos ({photoCount})
            </Button>
            <Button 
              variant={activeFilter === 'videos' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('videos')}
              className={activeFilter === 'videos' 
                ? 'bg-rose-500 hover:bg-rose-800 text-white' 
                : 'border-rose-300 text-rose-900 hover:bg-rose-50'}
            >
              <Play className="h-4 w-4 mr-2" />
              Videos ({videoCount})
            </Button>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-rose-800 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
