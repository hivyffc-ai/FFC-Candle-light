'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Gift, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { ServiceCategory, ServiceKeyword, packages, vadodaraAreas, siteConfig, formatPrice } from '@/lib/ffc-config';
import { generateKeywordPageContent } from '@/lib/ffc-unique-content';
import { getKeywordContent, UniqueKeywordContent } from '@/lib/ffc-keyword-content';

interface KeywordPageProps {
  service: ServiceCategory;
  keyword: ServiceKeyword;
}

export default function FFCKeywordPage({ service, keyword }: KeywordPageProps) {
  // Get related packages
  const relatedPackages = packages.slice(0, 4);

  // Get related keywords (excluding current)
  const relatedKeywords = service.keywords.filter(k => k.slug !== keyword.slug).slice(0, 6);

  // TRY to get truly unique handcrafted content first
  const handcraftedContent = getKeywordContent(keyword.slug);
  
  // Fall back to generated content if no handcrafted content exists
  const generatedContent = generateKeywordPageContent(service, keyword);

  // Use handcrafted content if available, otherwise use generated
  const hasUniqueContent = !!handcraftedContent;

  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-rose-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-rose-800">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/candlelight-dinner" className="text-gray-500 hover:text-rose-800">Candlelight Dinner</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-800 font-medium">{keyword.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-800 via-pink-500 to-rose-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                🕯️ Candlelight Dinner Vadodara
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                {keyword.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                {hasUniqueContent ? handcraftedContent!.heroSubtitle : `Experience the best ${keyword.title.toLowerCase()} at Friends Factory Cafe. Private rooftop candlelight dining with stunning city views and romantic ambiance.`}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={keyword.title} 
                  className="bg-white text-rose-800 hover:bg-rose-50 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[7rem]">{service.emoji}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {keyword.title} at Friends Factory Cafe
                </h2>
                
                {/* Introduction - from unique content */}
                <div className="text-gray-600 mb-6 whitespace-pre-line">
                  {hasUniqueContent ? handcraftedContent!.introduction : generatedContent.introduction}
                </div>

                <div className="bg-rose-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-rose-800" />
                    What's Included in Your {keyword.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {(hasUniqueContent ? handcraftedContent!.features : [
                      "3 Mesmerizing Hours of Private Celebration",
                      "Welcome Drink & Celebration Cake",
                      "Romantic Decorations & Setup",
                      "Candle-Lit Ambiance",
                      "Soft Romantic Music",
                      "Photo-Ready Backdrop",
                      "Delicious Café-Style Food",
                      "Panoramic City Views"
                    ]).map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-800 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dynamic content sections */}
                {(hasUniqueContent ? handcraftedContent!.sections : generatedContent.sections).map((section, idx) => (
                  <div key={idx} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{section.heading}</h3>
                    <div className="text-gray-600 whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}

                {/* Process Section - only for handcrafted content */}
                {hasUniqueContent && handcraftedContent!.process && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">How to Book Your {keyword.title}</h3>
                    <div className="space-y-4">
                      {handcraftedContent!.process.map((step, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-rose-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{step.step}</h4>
                            <p className="text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-4">
                  Why Choose Friends Factory Cafe for {keyword.title}?
                </h3>
                
                <ul className="space-y-3 mb-8">
                  {(hasUniqueContent ? handcraftedContent!.whyChooseUs : generatedContent.whyChooseUs).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-rose-800 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-rose-800" />
                    Available Time Slots
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Lunch</p>
                      <p className="text-gray-600 text-sm">12:00 PM - 3:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Evening</p>
                      <p className="text-gray-600 text-sm">4:00 PM - 7:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Dinner</p>
                      <p className="text-gray-600 text-sm">7:00 PM - 10:00 PM</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="font-semibold">Late Night</p>
                      <p className="text-gray-600 text-sm">10:00 PM - 1:00 AM</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-rose-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4">💬 What Couples Say About {keyword.title}</h3>
                  {hasUniqueContent ? (
                    <div className="space-y-3">
                      <p className="text-gray-600 italic">"{handcraftedContent!.testimonial.text}"</p>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900">— {handcraftedContent!.testimonial.name}</span>
                        <span className="text-gray-500">|</span>
                        <span className="text-gray-600 text-sm">{handcraftedContent!.testimonial.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-rose-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-gray-600 italic whitespace-pre-line">
                      {generatedContent.testimonialContent}
                    </div>
                  )}
                </div>
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  {keyword.title} Packages
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPackages.map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-rose-100 group overflow-hidden">
                        <div className="aspect-video relative">
                          <Image
                            src={pkg.thumbnail}
                            alt={pkg.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-rose-800 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-rose-800">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button variant="outline" className="border-rose-800 text-rose-800 hover:bg-rose-50">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={keyword.title} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Related {service.name} Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {relatedKeywords.map((kw) => (
              <Link 
                key={kw.slug}
                href={`/${kw.slug}`}
              >
                <Card className="border-rose-100 hover:border-rose-300 hover:shadow-md transition-all group">
                  <CardContent className="p-4">
                    <h3 className="font-medium group-hover:text-rose-800 transition-colors flex items-center justify-between">
                      {kw.title}
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-rose-800" />
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-rose-100 text-rose-900 border-rose-200">
              <MapPin className="h-4 w-4 mr-2" /> Service Areas
            </Badge>
            <h2 className="text-2xl font-bold mb-4 font-serif">
              {keyword.title} Across Vadodara
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {vadodaraAreas.slice(0, 12).map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-rose-50 rounded-full text-gray-700 hover:bg-rose-800 hover:text-white transition-colors border border-rose-200 text-sm"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs about {keyword.title}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {(hasUniqueContent ? handcraftedContent!.faqs : generatedContent.faqContent).map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-rose-100 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-rose-800 to-rose-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
            Ready for Your {keyword.title}?
          </h2>
          <p className="text-white/90 mb-8 whitespace-pre-line">
            {hasUniqueContent ? handcraftedContent!.closingText : generatedContent.closingCta}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton 
              pageTitle={keyword.title} 
              className="bg-white text-rose-800 hover:bg-rose-50 text-lg px-8 py-6" 
            />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`${keyword.title} Gallery`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
