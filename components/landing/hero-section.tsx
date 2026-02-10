"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-megaplus-navy/95 via-megaplus-navy/80 to-megaplus-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-megaplus-navy via-transparent to-transparent" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-megaplus-orange/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-megaplus-green/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-megaplus-yellow/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-megaplus-orange rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Növbəti marafon 45 gün sonra</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Qaçış ilə</span>
              <span className="block bg-gradient-to-r from-megaplus-orange via-megaplus-yellow to-megaplus-green bg-clip-text text-transparent">
                Həyatını Dəyiş
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-lg">
              Azərbaycanın ən böyük qaçış icmasına qoşul. Professional marafonlar, 
              yüksək keyfiyyətli geyimlər və minlərlə həmfikir qaçışçı.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-megaplus-orange hover:bg-megaplus-orange/90 text-white text-lg px-8 py-6 rounded-full group"
                asChild
              >
                <Link href="/marathons">
                  Marafonlara Bax
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-megaplus-orange hover:bg-white/10 text-lg px-8 py-6 rounded-full group"
              >
                <Play className="mr-2 w-5 h-5 text-megaplus-orange" />
                Videoya Bax
              </Button>
            </div>

            {/* Stats preview */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-megaplus-yellow">15K+</div>
                <div className="text-white/60 text-sm">İştirakçı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-megaplus-green">50+</div>
                <div className="text-white/60 text-sm">Marafon</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-megaplus-orange">12</div>
                <div className="text-white/60 text-sm">Şəhər</div>
              </div>
            </div>
          </div>

          {/* Right content - Next event card */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-megaplus-orange via-megaplus-yellow to-megaplus-green rounded-3xl blur-2xl opacity-30" />
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="absolute -top-4 left-8 bg-megaplus-orange px-4 py-1 rounded-full text-white text-sm font-semibold">
                  Növbəti Yarış
                </div>
                
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Bakı Bahar Marafonu 2026
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white/80">
                      <Calendar className="w-5 h-5 text-megaplus-yellow" />
                      <span>15 Aprel 2026, 09:00</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <MapPin className="w-5 h-5 text-megaplus-green" />
                      <span>Bakı, Dənizkənarı Milli Park</span>
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { value: "45", label: "Gün" },
                      { value: "12", label: "Saat" },
                      { value: "34", label: "Dəq" },
                      { value: "56", label: "San" },
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="bg-white/10 rounded-xl p-3 text-center"
                      >
                        <div className="text-2xl font-bold text-megaplus-yellow">
                          {item.value}
                        </div>
                        <div className="text-xs text-white/60">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/60 text-sm">Qeydiyyat</div>
                      <div className="text-white font-semibold">3,245 / 5,000</div>
                    </div>
                    <Button className="bg-megaplus-green hover:bg-megaplus-green/90 text-white rounded-full px-6">
                      İndi Qeydiyyatdan Keç
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-sm">Aşağı sürüşdür</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
