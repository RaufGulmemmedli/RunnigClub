"use client";

import { galleryImages } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Camera, ZoomIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function GallerySection() {
  const previewImages = galleryImages.slice(0, 8);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-megaplus-blue/10 text-megaplus-blue border-megaplus-blue/20">
            Qalereya
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-megaplus-blue dark:text-white">Anlarımız </span>
            <span className="bg-gradient-to-r from-megaplus-orange via-megaplus-yellow to-megaplus-green bg-clip-text text-transparent">
              Şəkillərdə
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keçmiş marafonlardan, təlimlərdən və klub tədbirlərindən ən yaddaqalan anlar.
          </p>
        </div>

        {/* Gallery Grid - Masonry Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {previewImages.map((image, index) => (
            <div 
              key={image.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              } ${index === 5 ? 'col-span-2' : ''}`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className={`${index === 0 ? 'aspect-square' : 'aspect-[4/3]'} bg-cover bg-center transition-transform duration-700 group-hover:scale-110`}
                style={{ backgroundImage: `url(${image.src})` }}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                hoveredId === image.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-white/90 text-sm mb-1">
                    <Camera className="w-4 h-4" />
                    <span>{image.event}</span>
                  </div>
                  <p className="text-white/70 text-xs">
                    {new Date(image.date).toLocaleDateString('az-AZ', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-megaplus-blue text-megaplus-blue hover:bg-megaplus-blue hover:text-white rounded-full px-8"
            asChild
          >
            <Link href="/gallery">
              Bütün Şəkillərə Bax
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
