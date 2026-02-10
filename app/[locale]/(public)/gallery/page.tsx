"use client";

import { useState } from "react";
import { galleryImages } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  User,
  ZoomIn,
  Download
} from "lucide-react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string>("all");

  const events = ["all", ...new Set(galleryImages.map(img => img.event))];
  
  const filteredImages = selectedEvent === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.event === selectedEvent);

  const currentIndex = selectedImage 
    ? filteredImages.findIndex(img => img.id === selectedImage.id) 
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-megaplus-blue/10 via-megaplus-green/5 to-megaplus-yellow/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-megaplus-blue text-white border-0">
              Foto Qalereya
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-megaplus-blue dark:text-white">Anlarımız </span>
              <span className="bg-gradient-to-r from-megaplus-orange via-megaplus-yellow to-megaplus-green bg-clip-text text-transparent">
                Şəkillərdə
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Keçmiş marafonlardan, təlimlərdən və klub tədbirlərindən ən yaddaqalan anlar.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-20 z-30 backdrop-blur-sm border-y">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-muted-foreground flex-shrink-0">Filtr:</span>
            {events.map((event) => (
              <Badge 
                key={event}
                variant={selectedEvent === event ? "default" : "outline"}
                className={`cursor-pointer flex-shrink-0 transition-colors ${
                  selectedEvent === event 
                    ? 'bg-megaplus-orange text-white hover:bg-megaplus-orange/90' 
                    : 'hover:bg-megaplus-orange/10 hover:text-megaplus-orange'
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                {event === "all" ? "Hamısı" : event}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Camera className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Şəkil tapılmadı</h3>
              <p className="text-muted-foreground">
                Bu tədbir üçün şəkil yoxdur
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-0">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navigation buttons */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 w-12 h-12"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 w-12 h-12"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Image */}
            {selectedImage && (
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            )}

            {/* Info bar */}
            {selectedImage && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <div className="container mx-auto flex items-center justify-between">
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {selectedImage.event}
                    </h3>
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(selectedImage.date).toLocaleDateString('az-AZ', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      {selectedImage.photographer && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{selectedImage.photographer}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-white/50 text-sm">
                      {currentIndex + 1} / {filteredImages.length}
                    </span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-white hover:bg-white/20"
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
