"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-megaplus-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Yeniliklərdən xəbərdar olun
              </h3>
              <p className="text-white/70">
                Marafonlar, endirimlər və xüsusi təkliflər haqqında məlumat alın
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="E-poçt ünvanınız"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full lg:w-80"
              />
              <Button className="bg-megaplus-orange hover:bg-megaplus-orange/90 text-white whitespace-nowrap">
                Abunə ol
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="mb-6">
              <img 
                src="/ChatGPT Image Feb 10, 2026, 11_42_08 AM.png" 
                alt="MegaPlus Running Club Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 mb-6">
              Azərbaycanın ən böyük qaçış icması. 2018-ci ildən bəri minlərlə qaçışçını bir araya gətiririk.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-megaplus-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-megaplus-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-megaplus-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-megaplus-orange transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-megaplus-yellow">
              Sürətli Keçidlər
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/marathons" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Marafonlar
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Məhsullar
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Qalereya
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-megaplus-yellow">
              Xidmətlər
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Marafon Qeydiyyatı
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Korporativ Yarışlar
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Şəxsi Məşqçi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Klub Üzvlüyü
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  Sponsorluq
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-megaplus-yellow">
              Əlaqə
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-megaplus-orange flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  Bakı şəhəri, Nəsimi rayonu, Azadlıq prospekti 45
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-megaplus-orange flex-shrink-0" />
                <a href="tel:+994501234567" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  +994 50 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-megaplus-orange flex-shrink-0" />
                <a href="mailto:info@megaplus.az" className="text-white/70 hover:text-megaplus-orange transition-colors">
                  info@megaplus.az
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © 2026 MegaPlus Running Club. Bütün hüquqlar qorunur.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 text-sm hover:text-megaplus-orange transition-colors">
                Məxfilik Siyasəti
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-megaplus-orange transition-colors">
                İstifadə Şərtləri
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
