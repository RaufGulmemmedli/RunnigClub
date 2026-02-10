import { HeroSection } from "@/components/landing/hero-section";
import { MarathonsSection } from "@/components/landing/marathons-section";
import { ProductsSection } from "@/components/landing/products-section";
import { GallerySection } from "@/components/landing/gallery-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CTASection } from "@/components/landing/cta-section";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <MarathonsSection />
      <ProductsSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
