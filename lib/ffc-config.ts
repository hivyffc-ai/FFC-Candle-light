// Friends Factory Cafe - Vadodara Configuration
// Main configuration file for the FFC website

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  // NEW: Unique content fields for each page
  uniqueContent?: {
    heroSubtitle: string;
    introduction: string;
    whyChooseUs: string[];
    features: string[];
    process: { step: string; description: string }[];
    faqs: { question: string; answer: string }[];
    testimonial: { name: string; text: string; rating: number };
    closingText: string;
  };
}

export interface AreaConfig {
  slug: string;
  name: string;
  // NEW: Unique content fields for each area page
  uniqueContent?: {
    heroSubtitle: string;
    introduction: string;
    aboutArea: string;
    whyChooseUs: string[];
    servicesDescription: string;
    locationAdvantage: string;
    faqs: { question: string; answer: string }[];
    testimonial: { name: string; location: string; text: string; rating: number };
    nearbyLandmarks: string[];
    closingText: string;
  };
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "Friends Factory Cafe",
  tagline: "Vadodara's Most Romantic Candlelight Dinner Experience",
  description: "Experience the best candlelight dinner in Vadodara. Private rooftop dining with stunning city views, flickering candles, gourmet cuisine, and romantic ambiance for couples.",
  phone: "+91 7487888730",
  whatsapp: "917487888730",
  email: "hello@candlelightdinnervadodara.com",
  address: "424, OneWest, Asopalav W, 4th Floor, Priya Talkies Road, Besides Adventuraa, Sevasi - Canal Rd, Gotri, Vadodara, Gujarat 391101",
  city: "Vadodara",
  website: "https://candlelightdinnervadodara.com",
  colors: {
    primary: "#722F37", // Burgundy/Wine Red
    secondary: "#8B0000",
    accent: "#D4AF37", // Gold
    gradient: "from-rose-900 to-red-900",
    gradientHover: "from-rose-950 to-red-950",
    lightBg: "bg-rose-50",
    darkBg: "bg-rose-950",
    text: "text-rose-900"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/friendsfactorycafe/",
    facebook: "https://www.facebook.com/friendsfactorycafe/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (8 Setups) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "forever-us-loveframe-rooftop",
    name: "Forever Us LoveFrame Rooftop",
    emoji: "",
    shortDescription: "Celebrate love in a space where every glance, laugh, and memory is framed against the stunning skyline",
    fullDescription: `Forever Us LoveFrame Rooftop - where every moment is a memory, every glance is a story, and love is beautifully framed under the stars.

Celebrate love in a space where every glance, laugh, and memory is framed against the stunning Vadodara skyline. Forever Us LoveFrame Rooftop is thoughtfully designed for couples and families seeking intimate, romantic, and unforgettable moments at the best rooftop cafe in Vadodara.

Experience Highlights:

- Private Rooftop Celebration (3 Hours)
An exclusive, cozy setting perfect for birthday surprises, anniversary celebrations, romantic proposals, candlelight dinners, and delightful surprises.

- Curated Treats & Welcome Drink + Complimentary Celebration Cake
Enjoy specially prepared refreshments and a FREE celebration cake, ideal for baby moments, pregnancy announcements, and heartfelt occasions.

- Elegant Rooftop Decor & Ambient Lighting
Romantic accents, twinkling lights, and a warm atmosphere create a perfect backdrop for pre-wedding shoots and timeless memories.

- Candle-Lit Seating & Skyline Views
Comfortable seating for meaningful conversations, shared smiles, and unforgettable moments under the stars.

- Delicious Snacks & Soft Music
Tasty treats and gentle melodies enhance the mood for love, laughter, and celebration.

Perfect For:
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Shoot Venue | Baby Moments (Pregnancy Announcement)

📍 Best romantic rooftop cafe in Vadodara for couples | Private celebration venue Vadodara | Couple-friendly cafe Gotri`,
    price: 6900,
    cakeIncluded: true,
    features: [
      "3 Hours Private Rooftop Celebration",
      "Welcome Drink & Complimentary Celebration Cake",
      "Elegant Photo Frame Setup with romantic decorations",
      "Candle-Lit Seating with premium decor & props",
      "Panoramic Skyline Views of Vadodara",
      "Ambient Lighting & Twinkling Fairy Lights",
      "Delicious Snacks & Soft Romantic Music"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Shoot", "Baby Moments"],
    thumbnail: "/packages/6900/Cover.webp",
    images: [
      "/packages/6900/Cover.webp",
      "/packages/6900/2.webp",
      "/packages/6900/3.webp",
      "/packages/6900/4.webp",
      "/packages/6900/5.webp",
      "/packages/6900/6.webp",
      "/packages/6900/7.webp",
      "/packages/6900/8.webp",
      "/packages/6900/9.webp",
      "/packages/6900/10.webp",
      "/packages/6900/11.webp",
      "/packages/6900/12.webp",
      "/packages/6900/13.webp",
      "/packages/6900/14.webp",
      "/packages/6900/15.webp",
      "/packages/6900/16.webp",
      "/packages/6900/17.webp"
    ]
  },
  {
    id: "setup-2",
    slug: "eternal-love-rooftop-celebration",
    name: "Eternal Love Rooftop Celebration",
    emoji: "💖✨🌙",
    shortDescription: "Celebrate moments that matter in a rooftop setting where emotions shine as brightly as the city lights below 🌆💫",
    fullDescription: `💖✨🌙 Eternal Love Rooftop Celebration — where every emotion feels deeper, every moment feels special, and love is celebrated under the open sky

Celebrate moments that matter in a rooftop setting where emotions shine as brightly as the city lights below 🌆💫. Eternal Love Rooftop Celebration is a beautifully curated experience for those who want to turn special occasions into lifelong memories, surrounded by romance, elegance, and a magical open-sky ambiance at the best couple-friendly cafe in Vadodara.

✨ Experience Highlights

• Exclusive Private Rooftop Time (3 Hours) ✨
A serene and intimate rooftop escape, ideal for heartfelt birthdays, anniversary surprises, romantic proposals, and candlelight dinners 💕🕯️

• Thoughtfully Curated Refreshments 🥂 + Complimentary Celebration Cake 🍰
Enjoy a warm welcome drink, delightful treats, and a FREE celebration cake—perfect for surprises, baby announcements, and joyful milestones 🎉

• Stylish Canopy & Romantic Décor 🎈💡
Graceful curtains, glowing lights, and elegant accents create a stunning setting for pre-wedding shoots, proposals, and picture-perfect moments 📸

• Soft Candle Glow Seating 🕯️🌅
Comfortable seating with premium décor and panoramic skyline views, designed for intimate conversations and meaningful celebrations 💑

• Tasty Bites & Gentle Music 🍽️🎶
A soothing soundtrack and delicious snacks to elevate the mood and complete the experience ✨

🎉 Ideal For
Birthday Celebration Vadodara | Anniversary Surprise | Romantic Proposal Venue | Candlelight Dinner | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best rooftop celebration venue Vadodara | Private romantic dinner Vadodara | Couple cafe near Gotri`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Exclusive Private Rooftop Celebration ✨",
      "Welcome Drink & Complimentary Celebration Cake 🍰",
      "Stylish Canopy Setup with elegant curtains",
      "Heart-shaped Balloons & Rose Petals 🎈",
      "Soft Candle Glow Seating with premium décor",
      "Panoramic City Views & Starlit Ambiance 🌆",
      "Tasty Bites & Gentle Romantic Music 🎶"
    ],
    perfectFor: ["Birthday Celebration", "Anniversary Surprise", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/6500/Cover.webp",
    images: [
      "/packages/6500/Cover.webp",
      "/packages/6500/2.webp",
      "/packages/6500/3.webp",
      "/packages/6500/4.webp",
      "/packages/6500/5.webp",
      "/packages/6500/6.webp",
      "/packages/6500/7.webp",
      "/packages/6500/8.webp",
      "/packages/6500/9.webp",
      "/packages/6500/10.webp",
      "/packages/6500/11.webp",
      "/packages/6500/12.webp",
      "/packages/6500/13.webp"
    ]
  },
  {
    id: "setup-3",
    slug: "golden-promise-glass-house",
    name: "Golden Promise Glass House",
    emoji: "✨💛🏡",
    shortDescription: "Step into a radiant space where every moment glows with love, warmth, and elegance ✨",
    fullDescription: `✨💛🏡 Golden Promise Glass House — where love shines brighter, moments feel magical, and every celebration turns golden

Step into a radiant space where every moment glows with love, warmth, and elegance ✨. Golden Promise Glass House is designed for couples and families to celebrate milestones in a luxurious, intimate, and unforgettable setting at the best glass house cafe in Vadodara.

✨ Experience Highlights

• Exclusive Glass House Celebration (3 Hours) ✨
An elegant and private space, perfect for birthday surprises, anniversary celebrations, romantic proposals, candlelight dinners, and special surprises 💖🕯️

• Curated Treats & Welcome Drink 🥂 + Complimentary Celebration Cake 🍰
Hand-selected refreshments and a FREE celebration cake, ideal for baby moments, pregnancy announcements, and meaningful celebrations 🎉

• Luxurious Décor with Soft Golden Glow 💡🌿
Warm lighting, stylish accents, and thoughtful décor create the perfect backdrop for pre-wedding shoots and timeless photographs 📸

• Candle-Lit Seating & Panoramic Views 🕯️💑
Comfortable seating designed for deep conversations, cherished moments, and intimate celebrations 🌅

• Delicious Snacks & Soothing Music 🍽️🎶
A delightful culinary experience paired with gentle music to set the perfect mood for love and joy ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot Venue | Baby Moments (Pregnancy Announcement)

📍 Best glass house cafe Vadodara | Private celebration venue | Romantic dinner place Gotri`,
    price: 6000,
    cakeIncluded: true,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Complimentary Celebration Cake 🍰",
      "Elegant Golden Fairy Lights & Décor 💡",
      "Flower Decorations & Premium Props 🌸",
      "Candle-Lit Seating with Panoramic Views",
      "Climate Controlled Environment",
      "Delicious Snacks & Soothing Music 🎶"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/6000/Cover.webp",
    images: [
      "/packages/6000/Cover.webp",
      "/packages/6000/2.webp",
      "/packages/6000/3.webp",
      "/packages/6000/4.webp",
      "/packages/6000/5.webp",
      "/packages/6000/6.webp",
      "/packages/6000/7.webp",
      "/packages/6000/8.webp",
      "/packages/6000/9.webp",
      "/packages/6000/10.webp",
      "/packages/6000/11.webp",
      "/packages/6000/12.webp",
      "/packages/6000/13.webp",
      "/packages/6000/14.webp",
      "/packages/6000/15.webp",
      "/packages/6000/16.webp"
    ]
  },
  {
    id: "setup-4",
    slug: "moonlit-romance-experience",
    name: "Moonlit Romance Experience",
    emoji: "🌙💞",
    shortDescription: "Step into a serene night where love unfolds beneath a glowing moon and shimmering city lights ✨🌌",
    fullDescription: `🌙💞 Moonlit Romance Experience — where every glance feels warmer, every moment feels closer, and love glows softly under the night sky ✨

Step into a serene night where love unfolds beneath a glowing moon and shimmering city lights ✨🌌. Moonlit Romance Experience is thoughtfully designed for couples seeking a calm, intimate, and deeply romantic celebration away from the noise of the world at the best romantic cafe in Vadodara.

✨ Experience Highlights

• Private Rooftop Ambience (3 Hours) 🌙
A peaceful, candle-kissed setting perfect for romantic proposals, anniversary dinners, candlelight dinners, and romantic surprises 💕🕯️

• Elegant Welcome Treats 🥂🍰
Delight in hand-picked refreshments and curated treats, ideal for special moments and heartfelt announcements 🎉
💡 Celebration Cake available at extra cost (₹500)

• Dreamy Moonlight Décor ✨💡
Soft drapes, glowing lights, and subtle romantic details create a stunning backdrop for pre-wedding shoots and timeless photos 📸

• Cozy Candle-Lit Seating 🕯️🌆
Comfortable seating with skyline views, crafted for quiet conversations, deep connections, and shared smiles 💑

• Gentle Music & Tasty Bites 🎶🍽️
A soothing playlist paired with delicious snacks to set the perfect mood for the evening 💫

🎉 Perfect For
Romantic Proposal Vadodara | Anniversary Dinner | Candlelight Dinner for Couples | Surprise Date Night | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best moonlit rooftop cafe Vadodara | Romantic night celebration venue | Couple-friendly cafe Gotri`,
    price: 5100,
    cakeIncluded: false,
    features: [
      "3 Hours Private Moonlit Rooftop Celebration 🌙",
      "Welcome Drink & Curated Treats 🥂",
      "Dreamy Moon-themed Décor with silver accents ✨",
      "Candle Pathway & Romantic Seating 🕯️",
      "Panoramic Skyline Views & Starlit Ambiance 🌆",
      "Gentle Music & Delicious Snacks 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Dinner", "Candlelight Dinner", "Surprise Date Night", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/5100/Cover.webp",
    images: [
      "/packages/5100/Cover.webp",
      "/packages/5100/2.webp",
      "/packages/5100/3.webp",
      "/packages/5100/4.webp",
      "/packages/5100/5.webp",
      "/packages/5100/6.webp",
      "/packages/5100/7.webp",
      "/packages/5100/8.webp",
      "/packages/5100/9.webp"
    ]
  },
  {
    id: "setup-5",
    slug: "the-promise-creative-area",
    name: "The Promise Creative Area",
    emoji: "💍",
    shortDescription: "Ignite joy under the stars at The Promise Creative Area — a magical rooftop space designed for unforgettable celebrations 🎉🌌",
    fullDescription: `💍 The Promise Creative Area — where every occasion turns into a forever memory under the stars ✨🌙

Ignite joy under the stars at The Promise Creative Area — a magical rooftop space designed for Birthdays, Anniversaries, Proposals, Candlelight Dinners, Surprises, Pre-Wedding Shoots, and Baby Moments (Pregnancy Announcements) at the best celebration cafe in Vadodara.

Celebrate love and life with breathtaking city views, warm candlelight, and unforgettable décor 🎉🌌

✨ What's Included

• 3 Mesmerizing Hours of Private Rooftop Celebration ✨
Perfect for Birthday Surprises, Anniversary Celebrations, Romantic Proposals & Candlelight Dinners 💖🕯️

• Curated Treats with Welcome Drink 🥂
Ideal for special occasions and heartfelt celebrations
💡 Celebration Cake available at extra cost (₹500) 🍰

• Festive Tent Setup with elegant curtains, balloons 🎈 & twinkling lights 💡
A dreamy backdrop for Pre-Wedding Shoots, Proposals & Romantic Moments 📸

• Candle-Lit Seating with props, premium décor & panoramic skyline views 🌅
Crafted for Anniversaries, Candlelight Dinners & Intimate Surprises 💑

• Delicious Snacks 🍽️ & Soft, Joyful Music 🎶
Creating the perfect mood for Every Celebration & Love Story ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best rooftop celebration venue Vadodara | Private party place Gotri | Couple-friendly cafe`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Rooftop Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Festive Tent Setup with curtains & balloons 🎈",
      "Twinkling Lights & Romantic Décor 💡",
      "Candle-Lit Seating with premium props 🕯️",
      "Panoramic Skyline Views of Vadodara 🌅",
      "Delicious Snacks & Joyful Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/the-promise-creative-area.webp",
    images: [
      "/packages/thumbnails/the-promise-creative-area.webp",
      "/packages/the-promise-creative-area/images/2.webp",
      "/packages/the-promise-creative-area/images/3.webp",
      "/packages/the-promise-creative-area/images/4.webp",
      "/packages/the-promise-creative-area/images/5.webp",
      "/packages/the-promise-creative-area/images/8.webp",
      "/packages/the-promise-creative-area/images/9.webp",
      "/packages/the-promise-creative-area/images/13.webp",
      "/packages/the-promise-creative-area/images/14.webp",
      "/packages/the-promise-creative-area/images/17.webp",
      "/packages/the-promise-creative-area/images/18.webp",
      "/packages/the-promise-creative-area/images/20.webp",
      "/packages/the-promise-creative-area/images/22.webp"
    ]
  },
  {
    id: "setup-6",
    slug: "timeless-bond-glass-house",
    name: "Timeless Bond Glass House",
    emoji: "♾️💞🏡",
    shortDescription: "Step into an elegant glass house where love feels calm, pure, and everlasting ✨",
    fullDescription: `♾️💞🏡 Timeless Bond Glass House — where love stands still, moments feel eternal, and every celebration becomes a beautiful memory

Step into an elegant glass house where love feels calm, pure, and everlasting ✨. Timeless Bond Glass House is designed for couples and families who want to celebrate meaningful milestones in a serene, light-filled space that beautifully frames every emotion at the best glass house cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
An intimate and peaceful setting, ideal for anniversary surprises, romantic proposals, birthday celebrations, candlelight dinners, and heartfelt surprises 💖🕯️

• Warm Welcome with Curated Treats 🥂🍰
Thoughtfully arranged refreshments, perfect for baby moments, pregnancy announcements, and special occasions 🎉
💡 Celebration Cake available at extra cost (₹500)

• Elegant Glass Décor & Soft Lighting 💡🌿
Minimal yet romantic décor with glowing lights creates a stunning atmosphere for pre-wedding shoots and timeless photographs 📸

• Comfortable Candle-Lit Seating 🕯️💑
Cozy seating designed for deep conversations, shared smiles, and unforgettable memories 🌸

• Delicious Bites & Soothing Music 🍽️🎶
Gentle melodies and tasty snacks complete the experience with warmth and charm ✨

🎉 Perfect For
Birthday Celebration Vadodara | Anniversary Surprise | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best glass house celebration venue Vadodara | Private romantic cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Minimalist Elegant White Theme Décor",
      "Flower Arrangements & Candle Setup 🌸",
      "Soft Lighting & Instagram-worthy Spots 📸",
      "Delicious Snacks & Soothing Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Celebration", "Anniversary Surprise", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/timeless-bond-glass-house.webp",
    images: [
      "/packages/thumbnails/timeless-bond-glass-house.webp",
      "/packages/timeless-bond-glass-house/images/112.webp",
      "/packages/timeless-bond-glass-house/images/113.webp",
      "/packages/timeless-bond-glass-house/images/114.webp",
      "/packages/timeless-bond-glass-house/images/115.webp",
      "/packages/timeless-bond-glass-house/images/116.webp",
      "/packages/timeless-bond-glass-house/images/120.webp",
      "/packages/timeless-bond-glass-house/images/121.webp",
      "/packages/timeless-bond-glass-house/images/122.webp",
      "/packages/timeless-bond-glass-house/images/123.webp",
      "/packages/timeless-bond-glass-house/images/124.webp",
      "/packages/timeless-bond-glass-house/images/125.webp",
      "/packages/timeless-bond-glass-house/images/126.webp",
      "/packages/timeless-bond-glass-house/images/128.webp",
      "/packages/timeless-bond-glass-house/images/129.webp"
    ]
  },
  {
    id: "setup-7",
    slug: "sweet-together-glass-house",
    name: "Sweet Together Glass House",
    emoji: "🍯💖",
    shortDescription: "Step into a charming space where love feels cozy, laughter is shared, and every moment is sweeter than the last ✨",
    fullDescription: `🍯💖 Sweet Together Glass House — where love is warm, moments are sweeter, and memories last forever 🏡

Step into a charming space where love feels cozy, laughter is shared, and every moment is sweeter than the last ✨. Sweet Together Glass House is designed for couples and families to celebrate life's precious memories in a warm, intimate, and beautifully decorated setting at the best couple cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
A delightful, intimate space perfect for birthday surprises, anniversary dinners, romantic proposals, candlelight dinners, and sweet surprises 💕🕯️

• Curated Treats & Welcome Drink 🥂🍰
Enjoy handpicked refreshments, ideal for baby moments, pregnancy announcements, and special celebrations 🎉
💡 Celebration Cake available at extra cost (₹500)

• Romantic & Cozy Décor 💡🌸
Soft lighting, elegant décor, and thoughtful details create a perfect backdrop for pre-wedding shoots and picture-perfect moments 📸

• Candle-Lit Seating & Cozy Corners 🕯️💑
Comfortable seating designed for shared smiles, heart-to-heart conversations, and memorable experiences 🌿

• Delicious Snacks & Gentle Music 🍽️🎶
Tasty bites paired with a soft playlist to set the mood for love and laughter ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Dinner | Romantic Proposal | Candlelight Dinner for Couples | Surprise Date | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best cozy glass house cafe Vadodara | Private celebration venue Gotri | Romantic couple cafe`,
    price: 5500,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Sweet & Cozy Theme with warm décor 🌸",
      "Balloon Arrangements & Romantic Props 🎈",
      "Candle-Lit Seating & Cozy Corners 🕯️",
      "Delicious Snacks & Gentle Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Dinner", "Romantic Proposal", "Candlelight Dinner", "Surprise Date", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/sweet-together-glass-house.webp",
    images: [
      "/packages/thumbnails/sweet-together-glass-house.webp",
      "/packages/sweet-together-glass-house/images/75.webp",
      "/packages/sweet-together-glass-house/images/76.webp",
      "/packages/sweet-together-glass-house/images/78.webp",
      "/packages/sweet-together-glass-house/images/79.webp",
      "/packages/sweet-together-glass-house/images/81.webp",
      "/packages/sweet-together-glass-house/images/83.webp",
      "/packages/sweet-together-glass-house/images/84.webp",
      "/packages/sweet-together-glass-house/images/87.webp",
      "/packages/sweet-together-glass-house/images/88.webp",
      "/packages/sweet-together-glass-house/images/89.webp",
      "/packages/sweet-together-glass-house/images/91.webp",
      "/packages/sweet-together-glass-house/images/92.webp",
      "/packages/sweet-together-glass-house/images/93.webp"
    ]
  },
  {
    id: "setup-8",
    slug: "pure-love-glass-house",
    name: "Pure Love Glass House",
    emoji: "🤍💍🏡",
    shortDescription: "Welcome to a serene glass house where emotions are honest, moments are gentle, and love is beautifully pure ✨",
    fullDescription: `🤍💍🏡 Pure Love Glass House — where simplicity meets romance, and every moment is wrapped in love ✨

Welcome to a serene glass house where emotions are honest, moments are gentle, and love is beautifully pure ✨. Pure Love Glass House is a thoughtfully designed space for celebrating heartfelt milestones in an elegant, calm, and romantic atmosphere at the best romantic cafe in Vadodara.

✨ Experience Highlights

• Private Glass House Celebration (3 Hours) ✨
A peaceful and intimate setting, perfect for anniversary celebrations, romantic proposals, birthday surprises, candlelight dinners, and meaningful surprises 🤍🕯️

• Warm Welcome with Curated Treats 🥂🍰
Delightful refreshments, ideal for baby moments, pregnancy announcements, and joyful occasions 🎉
💡 Celebration Cake available at extra cost (₹500)

• Minimal Romantic Décor with Soft Lights 💡🌿
A clean, elegant setup that enhances emotions and creates a stunning backdrop for pre-wedding shoots and timeless photos 📸

• Cozy Candle-Lit Seating 🕯️💑
Comfortable seating designed for quiet conversations, deep connections, and unforgettable moments 💞

• Tasty Bites & Gentle Music 🍽️🎶
Soft music and delicious snacks to complete a calm, love-filled experience ✨

🎉 Perfect For
Birthday Surprise Vadodara | Anniversary Celebration | Romantic Proposal | Candlelight Dinner for Couples | Surprise Party | Pre-Wedding Photoshoot | Baby Moments (Pregnancy Announcement)

📍 Best pure romantic glass house Vadodara | Private celebration venue Gotri | Couple-friendly cafe`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Glass House Celebration ✨",
      "Welcome Drink & Curated Treats 🥂",
      "Pure White Theme with elegant simplicity 🤍",
      "Rose Petals & Candle Pathway 🌹",
      "Minimal Romantic Décor & Soft Lights 💡",
      "Delicious Snacks & Gentle Music 🎶",
      "Celebration Cake available (+₹500) 🍰"
    ],
    perfectFor: ["Birthday Surprise", "Anniversary Celebration", "Romantic Proposal", "Candlelight Dinner", "Surprise Party", "Pre-Wedding Photoshoot", "Baby Moments"],
    thumbnail: "/packages/thumbnails/pure-love-glass-house.webp",
    images: [
      "/packages/thumbnails/pure-love-glass-house.webp",
      "/packages/pure-love-glass-house/images/95.webp",
      "/packages/pure-love-glass-house/images/96.webp",
      "/packages/pure-love-glass-house/images/98.webp",
      "/packages/pure-love-glass-house/images/99.webp",
      "/packages/pure-love-glass-house/images/100.webp",
      "/packages/pure-love-glass-house/images/105.webp",
      "/packages/pure-love-glass-house/images/106.webp",
      "/packages/pure-love-glass-house/images/107.webp",
      "/packages/pure-love-glass-house/images/108.webp",
      "/packages/pure-love-glass-house/images/110.webp"
    ]
  }
];

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic experience", emoji: "🥤" },
    { name: "Cheese Fondue", description: "A rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and the chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A sweet ending with rich chocolate indulgence", emoji: "🍫" }
  ],
  addOns: [
    { name: "Cake", description: "Complimentary celebration cake", price: "Free", emoji: "🍰" },
    { name: "Champagne", description: "Non-Alcoholic Fruit Flavour", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES ====================
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
      { slug: "valentines-candlelight-dinner-vadodara", title: "Valentine's Candlelight Dinner", h1: "Valentine's Day Candlelight Dinner in Vadodara", metaTitle: "Valentine's Candlelight Dinner Vadodara 2026 | Romantic Valentine", metaDescription: "Book Valentine's Day candlelight dinner in Vadodara. Most romantic Valentine's celebration at Friends Factory Cafe." },
      // ==================== NEW COUPLE-FOCUSED CANDLELIGHT PAGES ====================
      { slug: "candlelight-dinner-for-husband-vadodara", title: "Candlelight Dinner for Husband", h1: "Candlelight Dinner for Husband in Vadodara", metaTitle: "Candlelight Dinner for Husband Vadodara | Special Evening", metaDescription: "Plan a romantic candlelight dinner for your husband in Vadodara. Private rooftop setting with elegant decorations at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-wife-vadodara", title: "Candlelight Dinner for Wife", h1: "Candlelight Dinner for Wife in Vadodara", metaTitle: "Candlelight Dinner for Wife Vadodara | Make Her Day Special", metaDescription: "Create a beautiful candlelight dinner for your wife in Vadodara. Flowers, romantic music, and intimate dining at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-boyfriend-vadodara", title: "Candlelight Dinner for Boyfriend", h1: "Candlelight Dinner for Boyfriend in Vadodara", metaTitle: "Candlelight Dinner for Boyfriend Vadodara | Surprise Him", metaDescription: "Surprise your boyfriend with a candlelight dinner in Vadodara. Romantic setting and memorable evening at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-girlfriend-vadodara", title: "Candlelight Dinner for Girlfriend", h1: "Candlelight Dinner for Girlfriend in Vadodara", metaTitle: "Candlelight Dinner for Girlfriend Vadodara | Impress Her", metaDescription: "Impress your girlfriend with a candlelight dinner in Vadodara. Beautiful decorations, romantic music, and cozy ambiance at Friends Factory Cafe." },
      { slug: "first-date-candlelight-dinner-vadodara", title: "First Date Candlelight Dinner", h1: "First Date Candlelight Dinner in Vadodara", metaTitle: "First Date Candlelight Dinner Vadodara | Perfect Start", metaDescription: "Make your first date special with a candlelight dinner in Vadodara. Romantic ambiance and intimate setting at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-flowers-vadodara", title: "Candlelight Dinner with Flowers", h1: "Candlelight Dinner with Flowers in Vadodara", metaTitle: "Candlelight Dinner Flowers Vadodara | Floral Romance", metaDescription: "Enjoy candlelight dinner with fresh flowers in Vadodara. Rose petals, bouquets, and floral decorations at Friends Factory Cafe." },
      { slug: "candlelight-dinner-ideas-couples-vadodara", title: "Candlelight Dinner Ideas for Couples", h1: "Candlelight Dinner Ideas for Couples in Vadodara", metaTitle: "Candlelight Dinner Ideas Couples Vadodara | Romantic Plans", metaDescription: "Find the best candlelight dinner ideas for couples in Vadodara. From rooftop dining to themed setups at Friends Factory Cafe." },
      { slug: "intimate-candlelight-dinner-vadodara", title: "Intimate Candlelight Dinner", h1: "Intimate Candlelight Dinner in Vadodara", metaTitle: "Intimate Candlelight Dinner Vadodara | Private Setting", metaDescription: "Book an intimate candlelight dinner in Vadodara with private setting and romantic ambiance at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-for-two-vadodara", title: "Candlelight Dinner for Two", h1: "Candlelight Dinner for Two in Vadodara", metaTitle: "Candlelight Dinner for Two Vadodara | Couple Table", metaDescription: "Reserve a candlelight dinner for two in Vadodara. Exclusive couple table with romantic setup at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-skyline-view-vadodara", title: "Candlelight Dinner with Skyline View", h1: "Candlelight Dinner with Skyline View in Vadodara", metaTitle: "Candlelight Dinner Skyline View Vadodara | Panoramic Dining", metaDescription: "Experience candlelight dinner with panoramic skyline views in Vadodara at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-special-occasion-vadodara", title: "Candlelight Dinner for Special Occasion", h1: "Candlelight Dinner for Special Occasion in Vadodara", metaTitle: "Candlelight Dinner Special Occasion Vadodara | Celebrate Love", metaDescription: "Celebrate any special occasion with candlelight dinner in Vadodara. Perfect for anniversaries, proposals, and milestones at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-roses-vadodara", title: "Candlelight Dinner with Roses", h1: "Candlelight Dinner with Roses in Vadodara", metaTitle: "Candlelight Dinner Roses Vadodara | Rose Petal Setup", metaDescription: "Romantic candlelight dinner with roses in Vadodara. Rose petal pathway, bouquets, and romantic setup at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-newlyweds-vadodara", title: "Candlelight Dinner for Newlyweds", h1: "Candlelight Dinner for Newlyweds in Vadodara", metaTitle: "Candlelight Dinner Newlyweds Vadodara | Just Married Dining", metaDescription: "Celebrate your new marriage with candlelight dinner in Vadodara. Special newlywed setup at Friends Factory Cafe." },
      { slug: "monthly-date-candlelight-dinner-vadodara", title: "Monthly Date Candlelight Dinner", h1: "Monthly Date Candlelight Dinner in Vadodara", metaTitle: "Monthly Date Candlelight Dinner Vadodara | Regular Romance", metaDescription: "Make every month special with monthly candlelight dinner dates in Vadodara at Friends Factory Cafe. Keep the romance alive." },
      { slug: "candlelight-dinner-honeymoon-vadodara", title: "Candlelight Dinner for Honeymoon", h1: "Candlelight Dinner for Honeymoon in Vadodara", metaTitle: "Candlelight Dinner Honeymoon Vadodara | Romantic Start", metaDescription: "Start your honeymoon with a romantic candlelight dinner in Vadodara. Intimate setting and beautiful ambiance at Friends Factory Cafe." },
      { slug: "candlelight-dinner-surprise-partner-vadodara", title: "Candlelight Dinner Surprise for Partner", h1: "Candlelight Dinner Surprise for Partner in Vadodara", metaTitle: "Candlelight Dinner Surprise Partner Vadodara | Secret Plan", metaDescription: "Plan a secret candlelight dinner surprise for your partner in Vadodara. We handle everything at Friends Factory Cafe." },
      { slug: "candlelight-dinner-experience-vadodara", title: "Candlelight Dinner Experience", h1: "Candlelight Dinner Experience in Vadodara", metaTitle: "Candlelight Dinner Experience Vadodara | Premium Dining", metaDescription: "Enjoy a premium candlelight dinner experience in Vadodara with curated food, music, and romantic ambiance at Friends Factory Cafe." },
      { slug: "candle-lit-evening-vadodara", title: "Candle Lit Evening", h1: "Candle Lit Evening for Couples in Vadodara", metaTitle: "Candle Lit Evening Vadodara | Romantic Night Out", metaDescription: "Spend a beautiful candle lit evening in Vadodara with your partner. Warm ambiance and intimate setting at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-fiance-vadodara", title: "Candlelight Dinner for Fiance", h1: "Candlelight Dinner for Fiance in Vadodara", metaTitle: "Candlelight Dinner Fiance Vadodara | Pre-Wedding Romance", metaDescription: "Treat your fiance to a romantic candlelight dinner in Vadodara. Perfect pre-wedding date at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-balloons-vadodara", title: "Candlelight Dinner with Balloons", h1: "Candlelight Dinner with Balloons in Vadodara", metaTitle: "Candlelight Dinner Balloons Vadodara | Festive Setup", metaDescription: "Enjoy candlelight dinner with balloon decorations in Vadodara. Heart-shaped balloons and romantic setup at Friends Factory Cafe." },
      { slug: "candlelight-dinner-at-rooftop-vadodara", title: "Candlelight Dinner at Rooftop", h1: "Candlelight Dinner at Rooftop in Vadodara", metaTitle: "Candlelight Dinner Rooftop Vadodara | Sky-High Romance", metaDescription: "Experience candlelight dinner at a rooftop venue in Vadodara. City views, starlit sky, and romance at Friends Factory Cafe." },
      { slug: "private-candlelight-date-vadodara", title: "Private Candlelight Date", h1: "Private Candlelight Date in Vadodara", metaTitle: "Private Candlelight Date Vadodara | Just the Two of You", metaDescription: "Book a private candlelight date in Vadodara for just the two of you. Exclusive venue and romantic ambiance at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-fairy-lights-vadodara", title: "Candlelight Dinner with Fairy Lights", h1: "Candlelight Dinner with Fairy Lights in Vadodara", metaTitle: "Candlelight Dinner Fairy Lights Vadodara | Magical Setup", metaDescription: "Experience a magical candlelight dinner with fairy lights in Vadodara. Twinkling ambiance at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-date-plan-vadodara", title: "Candlelight Dinner Date Plan", h1: "Perfect Candlelight Dinner Date Plan in Vadodara", metaTitle: "Candlelight Dinner Date Plan Vadodara | Step by Step", metaDescription: "Plan the perfect candlelight dinner date in Vadodara. Complete setup with food, music, and decorations at Friends Factory Cafe." },
      { slug: "candlelight-dinner-themes-vadodara", title: "Candlelight Dinner Themes", h1: "Candlelight Dinner Themes in Vadodara", metaTitle: "Candlelight Dinner Themes Vadodara | Unique Setups", metaDescription: "Explore unique candlelight dinner themes in Vadodara. From vintage romance to modern elegance at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-dessert-vadodara", title: "Candlelight Dinner with Dessert", h1: "Candlelight Dinner with Dessert in Vadodara", metaTitle: "Candlelight Dinner Dessert Vadodara | Sweet Romance", metaDescription: "Enjoy candlelight dinner with sweet desserts in Vadodara. Cake, pastries, and romantic treats at Friends Factory Cafe." },
      { slug: "candlelight-dinner-for-love-vadodara", title: "Candlelight Dinner for Love", h1: "Candlelight Dinner for Love in Vadodara", metaTitle: "Candlelight Dinner Love Vadodara | Celebrate Your Bond", metaDescription: "Celebrate your love with a candlelight dinner in Vadodara. Romantic setting perfect for couples at Friends Factory Cafe." },
      { slug: "couple-dinner-date-vadodara", title: "Couple Dinner Date", h1: "Couple Dinner Date in Vadodara", metaTitle: "Couple Dinner Date Vadodara | Romantic Evening Out", metaDescription: "Enjoy a romantic couple dinner date in Vadodara with candlelight and beautiful decorations at Friends Factory Cafe." },
      { slug: "candlelight-dinner-stargazing-vadodara", title: "Candlelight Dinner with Stargazing", h1: "Candlelight Dinner with Stargazing in Vadodara", metaTitle: "Candlelight Dinner Stargazing Vadodara | Under the Stars", metaDescription: "Combine candlelight dinner with stargazing in Vadodara. Open-air rooftop dining experience at Friends Factory Cafe." },
      { slug: "candlelight-dinner-with-wine-vadodara", title: "Candlelight Dinner with Wine", h1: "Candlelight Dinner with Wine in Vadodara", metaTitle: "Candlelight Dinner Wine Vadodara | Classic Romance", metaDescription: "Experience a classic candlelight dinner with wine in Vadodara. Premium dining experience at Friends Factory Cafe rooftop." },
      { slug: "candlelight-dinner-romantic-setup-vadodara", title: "Candlelight Dinner Romantic Setup", h1: "Candlelight Dinner with Romantic Setup in Vadodara", metaTitle: "Candlelight Dinner Romantic Setup Vadodara | Beautiful Decor", metaDescription: "Get a candlelight dinner with romantic setup in Vadodara. Beautiful decor, flowers, and candles at Friends Factory Cafe." },
      { slug: "candlelight-dinner-love-celebration-vadodara", title: "Candlelight Dinner Love Celebration", h1: "Candlelight Dinner Love Celebration in Vadodara", metaTitle: "Candlelight Dinner Celebration Vadodara | Memorable Night", metaDescription: "Celebrate your love with a candlelight dinner in Vadodara. Create new memories with your partner at Friends Factory Cafe." }
    ]
  }
];

// ==================== VADODARA AREAS ====================
export const vadodaraAreas: AreaConfig[] = [
  { slug: "alkapuri-vadodara", name: "Alkapuri" },
  { slug: "akota-vadodara", name: "Akota" },
  { slug: "fatehgunj-vadodara", name: "Fatehgunj" },
  { slug: "sayajigunj-vadodara", name: "Sayajigunj" },
  { slug: "vasna-vadodara", name: "Vasna" },
  { slug: "manjalpur-vadodara", name: "Manjalpur" },
  { slug: "waghodia-road-vadodara", name: "Waghodia Road" },
  { slug: "gotri-vadodara", name: "Gotri" },
  { slug: "sama-vadodara", name: "Sama" },
  { slug: "karelibaug-vadodara", name: "Karelibaug" },
  { slug: "nizampura-vadodara", name: "Nizampura" },
  { slug: "subhanpura-vadodara", name: "Subhanpura" },
  { slug: "ajwa-road-vadodara", name: "Ajwa Road" },
  { slug: "old-padra-road-vadodara", name: "Old Padra Road" },
  { slug: "race-course-vadodara", name: "Race Course" },
  { slug: "ellora-park-vadodara", name: "Ellora Park" },
  { slug: "harni-vadodara", name: "Harni" },
  { slug: "tandalja-vadodara", name: "Tandalja" },
  { slug: "bhayli-vadodara", name: "Bhayli" },
  { slug: "sevasi-vadodara", name: "Sevasi" },
  { slug: "chhani-vadodara", name: "Chhani" },
  { slug: "makarpura-vadodara", name: "Makarpura" },
  { slug: "gorwa-vadodara", name: "Gorwa" },
  { slug: "tarsali-vadodara", name: "Tarsali" },
  { slug: "diwalipura-vadodara", name: "Diwalipura" },
  { slug: "maneja-vadodara", name: "Maneja" },
  { slug: "raopura-vadodara", name: "Raopura" },
  { slug: "mandvi-vadodara", name: "Mandvi" },
  { slug: "nyay-mandir-vadodara", name: "Nyay Mandir" },
  { slug: "jetalpur-vadodara", name: "Jetalpur" },
  { slug: "kalali-vadodara", name: "Kalali" },
  { slug: "undera-vadodara", name: "Undera" },
  { slug: "bil-vadodara", name: "Bil" },
  { slug: "karodiya-vadodara", name: "Karodiya" },
  { slug: "dabhoi-road-vadodara", name: "Dabhoi Road" },
  { slug: "sama-savli-road-vadodara", name: "Sama Savli Road" },
  { slug: "atladra-vadodara", name: "Atladra" },
  { slug: "tp-13-vadodara", name: "TP 13" },
  { slug: "koyali-vadodara", name: "Koyali" },
  { slug: "ranoli-vadodara", name: "Ranoli" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  return packages.find(p => p.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return vadodaraAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-10-birthday-surprise-ideas-vadodara",
    title: "Top 10 Birthday Surprise Ideas in Vadodara",
    excerpt: "Discover creative and romantic birthday surprise ideas to make your loved one's special day unforgettable in Vadodara.",
    metaTitle: "Top 10 Birthday Surprise Ideas in Vadodara 2026 | Best Ideas",
    metaDescription: "Looking for birthday surprise ideas in Vadodara? Discover 10 creative ways to surprise your partner, from rooftop dinners to midnight celebrations.",
    coverImage: "/images/gallery/romantic-rooftop-candlelight-dinner-vadodara-1.jpg",
    publishedAt: "2026-01-15",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "surprise", "vadodara", "celebration"]
  },
  {
    slug: "how-to-plan-perfect-proposal-vadodara",
    title: "How to Plan a Perfect Proposal in Vadodara",
    excerpt: "A complete guide to planning a romantic and memorable marriage proposal in Vadodara that she'll never forget.",
    metaTitle: "How to Plan a Perfect Proposal in Vadodara | Complete Guide",
    metaDescription: "Planning to propose in Vadodara? Learn how to plan the perfect proposal with our step-by-step guide. Best locations, timing & decoration ideas.",
    coverImage: "/images/gallery/romantic-table-decoration-vadodara-1.jpg",
    publishedAt: "2026-01-12",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "engagement", "romantic", "vadodara"]
  },
  {
    slug: "best-candlelight-dinner-spots-vadodara",
    title: "Best Candlelight Dinner Spots in Vadodara 2026",
    excerpt: "Explore the most romantic candlelight dinner restaurants and cafes in Vadodara for an unforgettable date night.",
    metaTitle: "Best Candlelight Dinner Spots in Vadodara 2026 | Top Picks",
    metaDescription: "Find the best candlelight dinner spots in Vadodara. Romantic restaurants, rooftop cafes & private dining options for couples.",
    coverImage: "/images/gallery/birthday-balloon-decoration-vadodara-1.jpg",
    publishedAt: "2026-01-10",
    readTime: "6 min",
    category: "Date Night",
    tags: ["candlelight dinner", "romantic", "restaurants", "vadodara"]
  },
  {
    slug: "anniversary-celebration-ideas-couples",
    title: "Anniversary Celebration Ideas for Couples in Vadodara",
    excerpt: "Creative and romantic ways to celebrate your wedding anniversary in Vadodara and make it truly special.",
    metaTitle: "Anniversary Celebration Ideas Vadodara | Romantic Ideas",
    metaDescription: "Looking for anniversary celebration ideas in Vadodara? From intimate dinners to surprise parties, discover the best ways to celebrate your love.",
    coverImage: "/images/gallery/anniversary-dinner-setup-vadodara-1.jpg",
    publishedAt: "2026-01-08",
    readTime: "6 min",
    category: "Anniversary",
    tags: ["anniversary", "couples", "celebration", "vadodara"]
  },
  {
    slug: "romantic-date-night-ideas-vadodara",
    title: "Romantic Date Night Ideas in Vadodara",
    excerpt: "Spice up your relationship with these creative and romantic date night ideas perfect for Vadodara couples.",
    metaTitle: "Romantic Date Night Ideas in Vadodara 2026 | Best Dates",
    metaDescription: "Need date night inspiration in Vadodara? Discover romantic ideas from rooftop dinners to stargazing experiences for couples.",
    coverImage: "/images/gallery/romantic-ambiance-cafe-vadodara-1.jpg",
    publishedAt: "2026-01-05",
    readTime: "5 min",
    category: "Date Night",
    tags: ["date night", "romantic", "couples", "vadodara"]
  },
  {
    slug: "best-rooftop-restaurants-vadodara-couples",
    title: "Best Rooftop Restaurants in Vadodara for Couples",
    excerpt: "Discover the most romantic rooftop restaurants in Vadodara perfect for date nights and special celebrations.",
    metaTitle: "Best Rooftop Restaurants in Vadodara for Couples 2026",
    metaDescription: "Looking for rooftop restaurants in Vadodara? Find the best sky-high dining spots for romantic dinners and couple celebrations.",
    coverImage: "/images/gallery/couple-celebration-vadodara-1.jpg",
    publishedAt: "2026-01-03",
    readTime: "5 min",
    category: "Restaurants",
    tags: ["rooftop", "restaurants", "couples", "vadodara"]
  },
  {
    slug: "surprise-birthday-party-wife-guide",
    title: "How to Plan a Surprise Birthday Party for Your Wife",
    excerpt: "A complete guide to planning the perfect surprise birthday party that will make your wife feel truly special.",
    metaTitle: "Surprise Birthday Party for Wife | Complete Planning Guide",
    metaDescription: "Want to surprise your wife on her birthday? Learn how to plan a memorable surprise party with decorations, cake & romantic setup.",
    coverImage: "/images/gallery/evening-romantic-celebration-vadodara-1.jpg",
    publishedAt: "2025-12-28",
    readTime: "8 min",
    category: "Birthday",
    tags: ["birthday", "wife", "surprise party", "planning"]
  },
  {
    slug: "creative-anniversary-gift-ideas-experiences",
    title: "Creative Anniversary Gift Ideas: Experience Over Things",
    excerpt: "Why experience gifts make the best anniversary presents and how to create lasting memories together.",
    metaTitle: "Anniversary Gift Ideas | Why Experiences Beat Material Gifts",
    metaDescription: "Looking for unique anniversary gifts? Discover why experience gifts like romantic dinners create better memories than material presents.",
    coverImage: "/images/gallery/glass-house-dinner-vadodara-1.jpg",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "gifts", "experiences", "couples"]
  },
  {
    slug: "pre-wedding-photoshoot-locations-vadodara",
    title: "Best Pre-Wedding Photoshoot Locations in Vadodara",
    excerpt: "Stunning pre-wedding photoshoot locations in Vadodara including rooftops, gardens, and heritage sites.",
    metaTitle: "Best Pre-Wedding Photoshoot Locations Vadodara 2026",
    metaDescription: "Planning your pre-wedding shoot in Vadodara? Discover the best locations from rooftops to heritage sites for stunning photos.",
    coverImage: "/images/gallery/rooftop-romantic-setup-vadodara-1.jpg",
    publishedAt: "2025-12-22",
    readTime: "6 min",
    category: "Pre-Wedding",
    tags: ["pre-wedding", "photoshoot", "locations", "vadodara"]
  },
  {
    slug: "baby-shower-planning-guide-vadodara",
    title: "Baby Shower Planning Guide for Vadodara Moms",
    excerpt: "Everything you need to know about planning the perfect baby shower in Vadodara, from venues to themes.",
    metaTitle: "Baby Shower Planning Guide Vadodara | Complete Checklist",
    metaDescription: "Planning a baby shower in Vadodara? Get our complete guide with venue ideas, themes, decorations & checklist for a perfect celebration.",
    coverImage: "/images/gallery/night-romantic-setup-vadodara-1.jpg",
    publishedAt: "2025-12-20",
    readTime: "7 min",
    category: "Baby Shower",
    tags: ["baby shower", "planning", "vadodara", "celebration"]
  },
  {
    slug: "valentines-day-date-ideas-vadodara",
    title: "Valentine's Day Date Ideas in Vadodara",
    excerpt: "Make Valentine's Day special with these romantic date ideas perfect for couples in Vadodara.",
    metaTitle: "Valentine's Day Date Ideas Vadodara 2026 | Romantic Plans",
    metaDescription: "Looking for Valentine's Day ideas in Vadodara? Discover romantic date plans from candlelight dinners to rooftop surprises.",
    coverImage: "/images/gallery/proposal-setup-vadodara-1.jpg",
    publishedAt: "2025-12-18",
    readTime: "5 min",
    category: "Valentine's Day",
    tags: ["valentines day", "date ideas", "romantic", "vadodara"]
  },
  {
    slug: "corporate-team-lunch-ideas-vadodara",
    title: "How to Organize a Corporate Team Lunch in Vadodara",
    excerpt: "Tips and venue ideas for organizing successful corporate team lunches and office celebrations in Vadodara.",
    metaTitle: "Corporate Team Lunch Vadodara | Venue & Planning Guide",
    metaDescription: "Planning a corporate team lunch in Vadodara? Find the best venues and get tips for organizing a successful office gathering.",
    coverImage: "/images/gallery/day-celebration-vadodara-1.jpg",
    publishedAt: "2025-12-15",
    readTime: "5 min",
    category: "Corporate",
    tags: ["corporate", "team lunch", "office party", "vadodara"]
  },
  {
    slug: "kitty-party-ideas-venues-vadodara",
    title: "Kitty Party Ideas and Venues in Vadodara",
    excerpt: "Fun kitty party themes, games, and the best venues in Vadodara for your ladies' get-together.",
    metaTitle: "Kitty Party Ideas & Venues Vadodara 2026 | Best Places",
    metaDescription: "Planning a kitty party in Vadodara? Discover fun themes, games, and the best venues for your next ladies' gathering.",
    coverImage: "/images/gallery/surprise-party-vadodara-1.jpg",
    publishedAt: "2025-12-12",
    readTime: "6 min",
    category: "Kitty Party",
    tags: ["kitty party", "venues", "ladies", "vadodara"]
  },
  {
    slug: "private-dining-experiences-vadodara",
    title: "Best Places for Private Dining in Vadodara",
    excerpt: "Exclusive private dining venues in Vadodara for intimate celebrations and special occasions.",
    metaTitle: "Private Dining Vadodara | Exclusive Restaurant Experiences",
    metaDescription: "Looking for private dining in Vadodara? Discover exclusive venues for intimate dinners, proposals & special celebrations.",
    coverImage: "/images/gallery/romantic-dinner-date-vadodara-1.jpg",
    publishedAt: "2025-12-10",
    readTime: "5 min",
    category: "Dining",
    tags: ["private dining", "exclusive", "restaurants", "vadodara"]
  },
  {
    slug: "memorable-farewell-party-planning",
    title: "How to Plan a Memorable Farewell Party",
    excerpt: "Create lasting memories with our guide to planning the perfect farewell party for colleagues or friends.",
    metaTitle: "Farewell Party Planning Guide | Memorable Send-Off Ideas",
    metaDescription: "Planning a farewell party? Learn how to organize a memorable send-off with venue ideas, activities & emotional touches.",
    coverImage: "/images/gallery/valentines-day-celebration-vadodara-1.jpg",
    publishedAt: "2025-12-08",
    readTime: "6 min",
    category: "Farewell",
    tags: ["farewell", "party planning", "office", "celebration"]
  },
  {
    slug: "birthday-decoration-ideas-budget",
    title: "Birthday Party Decoration Ideas on a Budget",
    excerpt: "Creative and affordable birthday decoration ideas that look expensive but won't break the bank.",
    metaTitle: "Budget Birthday Decoration Ideas | Affordable Party Decor",
    metaDescription: "Want stunning birthday decorations on a budget? Discover creative DIY ideas and affordable decoration tips for memorable parties.",
    coverImage: "/images/gallery/valentines-dinner-vadodara-1.jpg",
    publishedAt: "2025-12-05",
    readTime: "5 min",
    category: "Birthday",
    tags: ["birthday", "decoration", "budget", "diy"]
  },
  {
    slug: "romantic-proposal-ideas-say-yes",
    title: "Romantic Proposal Ideas That Will Make Her Say Yes",
    excerpt: "Creative and heartfelt proposal ideas that are sure to get a 'YES!' from your special someone.",
    metaTitle: "Romantic Proposal Ideas | Creative Ways to Propose",
    metaDescription: "Looking for proposal inspiration? Discover romantic and creative proposal ideas guaranteed to make her say yes.",
    coverImage: "/images/gallery/valentines-romantic-setup-vadodara-1.jpg",
    publishedAt: "2025-12-02",
    readTime: "7 min",
    category: "Proposal",
    tags: ["proposal", "romantic", "engagement", "ideas"]
  },
  {
    slug: "gender-reveal-party-ideas-vadodara",
    title: "Gender Reveal Party Ideas in Vadodara",
    excerpt: "Creative and exciting gender reveal party ideas to announce your baby's gender in style.",
    metaTitle: "Gender Reveal Party Ideas Vadodara | Creative Announcements",
    metaDescription: "Planning a gender reveal party in Vadodara? Discover creative reveal ideas, decorations & venues for the big announcement.",
    coverImage: "/images/gallery/birthday-surprise-for-girlfriend-vadodara-1.jpg",
    publishedAt: "2025-11-28",
    readTime: "6 min",
    category: "Baby",
    tags: ["gender reveal", "baby", "party", "vadodara"]
  },
  {
    slug: "best-anniversary-restaurants-vadodara",
    title: "Best Anniversary Restaurants in Vadodara",
    excerpt: "Top restaurants in Vadodara perfect for celebrating your wedding anniversary with your partner.",
    metaTitle: "Best Anniversary Restaurants Vadodara 2026 | Top Picks",
    metaDescription: "Celebrating your anniversary in Vadodara? Find the best restaurants for romantic anniversary dinners with your partner.",
    coverImage: "/images/gallery/birthday-surprise-for-boyfriend-vadodara-1.jpg",
    publishedAt: "2025-11-25",
    readTime: "5 min",
    category: "Anniversary",
    tags: ["anniversary", "restaurants", "romantic", "vadodara"]
  },
  {
    slug: "surprise-date-night-planning-guide",
    title: "How to Plan a Surprise Date Night",
    excerpt: "Step-by-step guide to planning a romantic surprise date night that your partner will love.",
    metaTitle: "Surprise Date Night Planning | Complete Guide for Couples",
    metaDescription: "Want to surprise your partner with a romantic date night? Get our complete planning guide with ideas, tips & checklist.",
    coverImage: "/images/gallery/birthday-room-decoration-vadodara-1.jpg",
    publishedAt: "2025-11-22",
    readTime: "6 min",
    category: "Date Night",
    tags: ["date night", "surprise", "romantic", "planning"]
  },
  {
    slug: "maternity-photoshoot-ideas-vadodara",
    title: "Maternity Photoshoot Ideas for Expecting Mothers",
    excerpt: "Beautiful maternity photoshoot ideas and locations in Vadodara to capture your pregnancy journey.",
    metaTitle: "Maternity Photoshoot Ideas Vadodara | Pregnancy Photos",
    metaDescription: "Planning a maternity photoshoot in Vadodara? Discover poses, outfits & location ideas for stunning pregnancy photos.",
    coverImage: "/images/gallery/couple-birthday-party-vadodara-1.jpg",
    publishedAt: "2025-11-18",
    readTime: "6 min",
    category: "Maternity",
    tags: ["maternity", "photoshoot", "pregnancy", "vadodara"]
  },
  {
    slug: "bachelor-bachelorette-party-ideas-vadodara",
    title: "Bachelor and Bachelorette Party Ideas in Vadodara",
    excerpt: "Fun and memorable bachelor/bachelorette party ideas and venues for the bride and groom-to-be.",
    metaTitle: "Bachelor & Bachelorette Party Ideas Vadodara 2026",
    metaDescription: "Planning a bachelor or bachelorette party in Vadodara? Discover fun ideas, themes & venues for an unforgettable celebration.",
    coverImage: "/images/gallery/pre-wedding-photoshoot-vadodara-1.jpg",
    publishedAt: "2025-11-15",
    readTime: "7 min",
    category: "Pre-Wedding",
    tags: ["bachelor party", "bachelorette", "pre-wedding", "vadodara"]
  },
  {
    slug: "new-year-celebration-ideas-vadodara",
    title: "Best Places to Celebrate New Year in Vadodara",
    excerpt: "Top venues and ideas for celebrating New Year's Eve in Vadodara with your loved ones.",
    metaTitle: "New Year Celebration Vadodara 2026 | Best Places & Ideas",
    metaDescription: "Looking for New Year celebration venues in Vadodara? Find the best places to ring in the new year with parties & dinners.",
    coverImage: "/images/gallery/pre-wedding-shoot-vadodara-1.jpg",
    publishedAt: "2025-11-12",
    readTime: "5 min",
    category: "New Year",
    tags: ["new year", "celebration", "venues", "vadodara"]
  },
  {
    slug: "couple-photoshoot-locations-vadodara",
    title: "Couple Photoshoot Locations in Vadodara",
    excerpt: "Romantic and scenic locations in Vadodara perfect for couple photoshoots and engagement shoots.",
    metaTitle: "Couple Photoshoot Locations Vadodara | Romantic Spots",
    metaDescription: "Planning a couple photoshoot in Vadodara? Discover the most romantic locations for stunning couple photos.",
    coverImage: "/images/gallery/candlelight-dinner-for-couples-vadodara-1.jpg",
    publishedAt: "2025-11-08",
    readTime: "6 min",
    category: "Photoshoot",
    tags: ["couple", "photoshoot", "locations", "vadodara"]
  },
  {
    slug: "intimate-wedding-planning-guide",
    title: "Intimate Wedding Planning Guide for Vadodara Couples",
    excerpt: "Everything you need to know about planning a beautiful small wedding in Vadodara.",
    metaTitle: "Intimate Wedding Planning Vadodara | Small Wedding Guide",
    metaDescription: "Planning an intimate wedding in Vadodara? Get our complete guide with venue ideas, tips & checklist for a perfect small wedding.",
    coverImage: "/images/gallery/rooftop-dinner-vadodara-1.jpg",
    publishedAt: "2025-11-05",
    readTime: "8 min",
    category: "Wedding",
    tags: ["wedding", "intimate", "small wedding", "vadodara"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
