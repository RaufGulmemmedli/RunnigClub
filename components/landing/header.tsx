"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Ana Səhifə", href: "/az" },
  { label: "Marafonlar", href: "/marathons" },
  { label: "Məhsullar", href: "/shop" },
  { label: "Qalereya", href: "/gallery" },
  { label: "Xəbərlər", href: "/news" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Əlaqə", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the landing page (just locale path like /az, /en, /ru)
  const isLandingPage = /^\/[a-z]{2}$/.test(pathname);
  
  // Use transparent header only on landing page when not scrolled
  const useTransparentHeader = isLandingPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useTransparentHeader
          ? "bg-transparent"
          : "bg-background/95 backdrop-blur-md shadow-lg"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/az" className="flex items-center gap-3">
            <img 
              src={useTransparentHeader 
                ? "/ChatGPT Image Feb 10, 2026, 11_42_08 AM.png" 
                : "/ChatGPT Image Feb 9, 2026, 01_00_51 PM.png"
              }
              alt="MegaPlus Running Club Logo" 
              className="h-14 w-auto object-contain"
            />
            <span className="font-bold text-lg tracking-tight">
              <span className="text-megaplus-orange">MegaPlus</span>{" "}
              <span className={cn(
                "transition-colors",
                useTransparentHeader ? "text-white" : "text-foreground"
              )}>Running Club</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-megaplus-orange transition-colors relative group",
                  useTransparentHeader ? "text-white" : "text-foreground/80"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-megaplus-orange transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className={cn("relative", useTransparentHeader && "text-white hover:text-white/80")}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-megaplus-orange text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn("hidden sm:flex", useTransparentHeader && "text-white hover:text-white/80")}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button className="hidden sm:flex bg-megaplus-orange hover:bg-megaplus-orange/90 text-white">
              Qeydiyyat
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden", useTransparentHeader && "text-white hover:text-white/80")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b shadow-lg">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground/80 hover:text-megaplus-orange transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4 bg-megaplus-orange hover:bg-megaplus-orange/90 text-white w-full">
                Qeydiyyat
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
