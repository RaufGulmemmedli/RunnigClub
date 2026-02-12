"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Bütün marafonlarda prioritet qeydiyyat",
  "Məhsullarda 20% daimi endirim",
  "Həftəlik qrup məşqləri",
  "Professional məşqçi dəstəyi",
  "Ekskluziv klub tədbirləri",
  "Fərdi hazırlıq proqramı"
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-megaplus-navy via-megaplus-blue to-megaplus-green" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-megaplus-orange/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MegaPlus Ailəsinə
              <span className="block bg-gradient-to-r from-megaplus-yellow to-megaplus-orange bg-clip-text text-transparent">
                Qoşulun
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Azərbaycanın ən böyük qaçış icmasının üzvü olun. 
              Birlikdə daha güclü, daha sürətli, daha sağlam olaq.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-megaplus-yellow flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-megaplus-orange hover:bg-megaplus-orange/90 text-white text-lg px-8 rounded-full group"
              >
                Üzv Ol - 15₼/ay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 rounded-full text-megaplus-orange"
                asChild
              >
                <Link href="/about" className="text-megaplus-navy">
                  Daha Ətraflı
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Membership Card */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[450px]">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-megaplus-orange via-megaplus-yellow to-megaplus-green rounded-3xl blur-2xl opacity-40" />
              
              <div className="relative w-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-center gap-3">
                  <img 
                    src="/ChatGPT Image Feb 9, 2026, 01_00_51 PM.png" 
                    alt="MegaPlus Running Club Logo" 
                    className="h-12 sm:h-14 w-auto object-contain"
                  />
                  <span className="font-bold text-base sm:text-lg tracking-tight text-center sm:text-left">
                    <span className="text-megaplus-orange">MegaPlus</span>{" "}
                    <span className="text-white">Running Club</span>
                  </span>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">
                    Üzvlük Kartı
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-widest">
                    •••• •••• •••• 2026
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white/60 text-[10px] sm:text-xs uppercase mb-1">Kart Sahibi</div>
                    <div className="text-white font-semibold text-sm sm:text-base">AD SOYAD</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-[10px] sm:text-xs uppercase mb-1">Üzvlük</div>
                    <div className="text-megaplus-yellow font-bold text-sm sm:text-base">PREMIUM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
