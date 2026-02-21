#!/usr/bin/env python3
"""
Script to update ffc-config.ts to keep only candlelight-dinner category
"""

import re

config_path = "/Applications/CAFE BUSINESS ALL WEBSITES/FRIENDS FACTORY/FFC Candle light/lib/ffc-config.ts"

# Read the original file
with open(config_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of serviceCategories section
start_marker = "// ==================== SERVICE CATEGORIES ===================="
start_idx = content.find(start_marker)

# Find the end - where VADODARA AREAS starts
end_marker = "// ==================== VADODARA AREAS ===================="
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find markers!")
    exit(1)

# Extract the before and after parts
before = content[:start_idx]
after = content[end_idx:]

# Create new candlelight-only section
new_section = '''// ==================== SERVICE CATEGORIES ====================
// Pure Candlelight Dinner Focus - Updated January 2026
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "candlelight-dinner",
    name: "Candlelight Dinner",
    emoji: "🕯️",
    description: "Experience romantic dining with candlelight ambiance, gourmet cuisine, and an exclusive setting designed for couples.",
    metaTitle: "Candlelight Dinner in Vadodara | Friends Factory Cafe",
    metaDescription: "Book a romantic candlelight dinner in Vadodara at Friends Factory Cafe. Private rooftop dining, delicious food, and intimate ambiance for couples.",
    keywords: [
      { slug: "candlelight-dinner-for-couples-vadodara", title: "Candlelight Dinner for Couples", h1: "Candlelight Dinner for Couples in Vadodara", metaTitle: "Candlelight Dinner for Couples Vadodara | Romantic Dining", metaDescription: "Book a romantic candlelight dinner for couples in Vadodara at Friends Factory Cafe rooftop." },
      { slug: "rooftop-candlelight-dinner-vadodara", title: "Rooftop Candlelight Dinner", h1: "Rooftop Candlelight Dinner in Vadodara", metaTitle: "Rooftop Candlelight Dinner Vadodara | City Views", metaDescription: "Experience rooftop candlelight dinner in Vadodara with stunning city views at Friends Factory Cafe." },
      { slug: "romantic-dinner-vadodara", title: "Romantic Dinner", h1: "Romantic Dinner in Vadodara", metaTitle: "Romantic Dinner Vadodara | Perfect Evening", metaDescription: "Plan a romantic dinner in Vadodara with candlelight and beautiful decorations at Friends Factory Cafe." },
      { slug: "candlelight-dinner-restaurants-vadodara", title: "Candlelight Dinner Restaurants", h1: "Best Candlelight Dinner Restaurants in Vadodara", metaTitle: "Candlelight Dinner Restaurants Vadodara | Top Picks", metaDescription: "Find the best candlelight dinner restaurants in Vadodara. Friends Factory Cafe offers private rooftop dining." },
      { slug: "private-dinner-vadodara", title: "Private Dinner", h1: "Private Dinner for Couples in Vadodara", metaTitle: "Private Dinner Vadodara | Intimate Setting", metaDescription: "Book a private dinner for couples in Vadodara with intimate setting at Friends Factory Cafe." },
      { slug: "romantic-restaurants-vadodara", title: "Romantic Restaurants", h1: "Best Romantic Restaurants in Vadodara", metaTitle: "Romantic Restaurants Vadodara | Couple-Friendly", metaDescription: "Discover the best romantic restaurants in Vadodara for couples. Friends Factory Cafe offers candlelight dinners." },
      { slug: "dinner-date-vadodara", title: "Dinner Date", h1: "Perfect Dinner Date in Vadodara", metaTitle: "Dinner Date Vadodara | Romantic Evening", metaDescription: "Plan a perfect dinner date in Vadodara with romantic setup and delicious food at Friends Factory Cafe." },
      { slug: "couple-dinner-vadodara", title: "Couple Dinner", h1: "Couple Dinner Experience in Vadodara", metaTitle: "Couple Dinner Vadodara | Special Moments", metaDescription: "Enjoy a special couple dinner experience in Vadodara with candlelight and music at Friends Factory Cafe." },
      { slug: "candlelight-dinner-date-vadodara", title: "Candlelight Dinner Date", h1: "Candlelight Dinner Date in Vadodara", metaTitle: "Candlelight Dinner Date Vadodara | Romantic Night", metaDescription: "Book a candlelight dinner date in Vadodara for a romantic night at Friends Factory Cafe rooftop." },
      { slug: "outdoor-candlelight-dinner-vadodara", title: "Outdoor Candlelight Dinner", h1: "Outdoor Candlelight Dinner in Vadodara", metaTitle: "Outdoor Candlelight Dinner Vadodara | Under the Stars", metaDescription: "Experience outdoor candlelight dinner in Vadodara under the stars at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-packages-vadodara", title: "Candlelight Dinner Packages", h1: "Candlelight Dinner Packages in Vadodara", metaTitle: "Candlelight Dinner Packages Vadodara | All Inclusive", metaDescription: "Explore candlelight dinner packages in Vadodara with food, decorations, and music at Friends Factory Cafe." },
      { slug: "candlelight-dinner-places-vadodara", title: "Candlelight Dinner Places", h1: "Best Candlelight Dinner Places in Vadodara", metaTitle: "Candlelight Dinner Places Vadodara | Romantic Spots", metaDescription: "Find the best candlelight dinner places in Vadodara. Friends Factory Cafe offers private rooftop settings." },
      { slug: "candlelight-dinner-near-me-vadodara", title: "Candlelight Dinner Near Me", h1: "Candlelight Dinner Near Me in Vadodara", metaTitle: "Candlelight Dinner Near Me Vadodara | Local Options", metaDescription: "Find candlelight dinner near you in Vadodara. Friends Factory Cafe offers convenient rooftop dining." },
      { slug: "best-candlelight-dinner-vadodara", title: "Best Candlelight Dinner", h1: "Best Candlelight Dinner in Vadodara", metaTitle: "Best Candlelight Dinner Vadodara 2026 | Top Romantic Venue", metaDescription: "Experience the best candlelight dinner in Vadodara at Friends Factory Cafe. Private rooftop, romantic ambiance, stunning views." },
      { slug: "candlelight-dinner-price-vadodara", title: "Candlelight Dinner Price", h1: "Candlelight Dinner Price in Vadodara", metaTitle: "Candlelight Dinner Price Vadodara | Affordable Packages", metaDescription: "Check candlelight dinner prices in Vadodara starting ₹4700. All-inclusive packages at Friends Factory Cafe." },
      { slug: "candlelight-dinner-booking-vadodara", title: "Candlelight Dinner Booking", h1: "Book Candlelight Dinner in Vadodara", metaTitle: "Candlelight Dinner Booking Vadodara | Easy Online Booking", metaDescription: "Book your candlelight dinner in Vadodara online. Same day booking available at Friends Factory Cafe rooftop." },
      { slug: "cheap-candlelight-dinner-vadodara", title: "Cheap Candlelight Dinner", h1: "Affordable Candlelight Dinner in Vadodara", metaTitle: "Cheap Candlelight Dinner Vadodara | Budget Friendly", metaDescription: "Affordable candlelight dinner in Vadodara without compromising quality. Budget packages at Friends Factory Cafe." },
      { slug: "luxury-candlelight-dinner-vadodara", title: "Luxury Candlelight Dinner", h1: "Luxury Candlelight Dinner Experience in Vadodara", metaTitle: "Luxury Candlelight Dinner Vadodara | Premium Experience", metaDescription: "Indulge in luxury candlelight dinner in Vadodara with premium decor, gourmet food at Friends Factory Cafe." },
      { slug: "private-candlelight-dinner-vadodara", title: "Private Candlelight Dinner", h1: "Private Candlelight Dinner in Vadodara", metaTitle: "Private Candlelight Dinner Vadodara | Exclusive Venue", metaDescription: "Book a private candlelight dinner in Vadodara with exclusive rooftop setting at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-cake-vadodara", title: "Candlelight Dinner with Cake", h1: "Candlelight Dinner with Cake in Vadodara", metaTitle: "Candlelight Dinner with Cake Vadodara | Celebration Package", metaDescription: "Candlelight dinner with complimentary cake in Vadodara. Perfect for celebrations at Friends Factory Cafe." },
      { slug: "candlelight-dinner-decoration-vadodara", title: "Candlelight Dinner Decoration", h1: "Candlelight Dinner Decoration in Vadodara", metaTitle: "Candlelight Dinner Decoration Vadodara | Romantic Setup", metaDescription: "Beautiful candlelight dinner decoration in Vadodara with flowers, balloons, fairy lights at Friends Factory Cafe." },
      { slug: "candlelight-dinner-under-stars-vadodara", title: "Candlelight Dinner Under Stars", h1: "Candlelight Dinner Under the Stars in Vadodara", metaTitle: "Candlelight Dinner Under Stars Vadodara | Open Sky Dining", metaDescription: "Romantic candlelight dinner under the stars in Vadodara. Open-air rooftop experience at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-music-vadodara", title: "Candlelight Dinner with Music", h1: "Candlelight Dinner with Live Music in Vadodara", metaTitle: "Candlelight Dinner with Music Vadodara | Romantic Ambiance", metaDescription: "Candlelight dinner with romantic music in Vadodara. Soothing ambiance at Friends Factory Cafe rooftop." },
      { slug: "surprise-candlelight-dinner-vadodara", title: "Surprise Candlelight Dinner", h1: "Surprise Candlelight Dinner Setup in Vadodara", metaTitle: "Surprise Candlelight Dinner Vadodara | Secret Planning", metaDescription: "Plan a surprise candlelight dinner in Vadodara. We help you create the perfect surprise at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-birthday-vadodara", title: "Candlelight Dinner for Birthday", h1: "Candlelight Dinner for Birthday in Vadodara", metaTitle: "Candlelight Dinner Birthday Vadodara | Special Celebration", metaDescription: "Celebrate birthday with candlelight dinner in Vadodara. Special decorations and cake at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-anniversary-vadodara", title: "Candlelight Dinner for Anniversary", h1: "Candlelight Dinner for Anniversary in Vadodara", metaTitle: "Candlelight Dinner Anniversary Vadodara | Romantic Celebration", metaDescription: "Celebrate anniversary with candlelight dinner in Vadodara. Romantic setup at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-for-proposal-vadodara", title: "Candlelight Dinner for Proposal", h1: "Candlelight Dinner for Proposal in Vadodara", metaTitle: "Candlelight Dinner Proposal Vadodara | Perfect Setup", metaDescription: "Plan your proposal with candlelight dinner in Vadodara. Private romantic setting at Friends Factory Cafe." },
      { slug: "weekend-candlelight-dinner-vadodara", title: "Weekend Candlelight Dinner", h1: "Weekend Candlelight Dinner in Vadodara", metaTitle: "Weekend Candlelight Dinner Vadodara | Saturday Sunday", metaDescription: "Book weekend candlelight dinner in Vadodara. Perfect Saturday or Sunday date at Friends Factory Cafe." },
      { slug: "candlelight-dinner-gotri-vadodara", title: "Candlelight Dinner Gotri", h1: "Candlelight Dinner in Gotri Vadodara", metaTitle: "Candlelight Dinner Gotri Vadodara | Local Venue", metaDescription: "Best candlelight dinner in Gotri, Vadodara. Rooftop venue at Friends Factory Cafe near Sevasi Canal Road." },
      { slug: "candlelight-dinner-alkapuri-vadodara", title: "Candlelight Dinner Alkapuri", h1: "Candlelight Dinner near Alkapuri Vadodara", metaTitle: "Candlelight Dinner Alkapuri Vadodara | Nearby Options", metaDescription: "Candlelight dinner near Alkapuri Vadodara. Short drive to Friends Factory Cafe rooftop venue." },
      { slug: "candlelight-dinner-race-course-vadodara", title: "Candlelight Dinner Race Course", h1: "Candlelight Dinner near Race Course Vadodara", metaTitle: "Candlelight Dinner Race Course Vadodara | Central Location", metaDescription: "Candlelight dinner near Race Course Vadodara. Premium rooftop dining at Friends Factory Cafe." },
      { slug: "couple-friendly-candlelight-dinner-vadodara", title: "Couple Friendly Candlelight Dinner", h1: "Couple Friendly Candlelight Dinner in Vadodara", metaTitle: "Couple Friendly Candlelight Dinner Vadodara | Private Space", metaDescription: "Couple-friendly candlelight dinner in Vadodara with complete privacy at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-with-city-view-vadodara", title: "Candlelight Dinner with City View", h1: "Candlelight Dinner with City View in Vadodara", metaTitle: "Candlelight Dinner City View Vadodara | Skyline Dining", metaDescription: "Candlelight dinner with stunning city view in Vadodara. Panoramic skyline at Friends Factory Cafe rooftop." },
      { slug: "valentines-candlelight-dinner-vadodara", title: "Valentine's Candlelight Dinner", h1: "Valentine's Day Candlelight Dinner in Vadodara", metaTitle: "Valentine's Candlelight Dinner Vadodara 2026 | Romantic Valentine", metaDescription: "Book Valentine's Day candlelight dinner in Vadodara. Most romantic Valentine's celebration at Friends Factory Cafe." }
    ]
  }
];

'''

# Combine the parts
new_content = before + new_section + after

# Write the updated file
with open(config_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated ffc-config.ts with candlelight-only categories!")
print(f"File size: {len(new_content)} characters")
