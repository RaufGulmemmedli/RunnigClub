"use client";

import { products } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export function ProductsSection() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <Badge className="mb-4 bg-megaplus-green/10 text-megaplus-green border-megaplus-green/20">
              Mağaza
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-megaplus-blue dark:text-white">Professional </span>
              <span className="bg-gradient-to-r from-megaplus-green to-megaplus-yellow bg-clip-text text-transparent">
                Qaçış Geyimləri
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              MegaPlus brendinin yüksək keyfiyyətli, rahat və şık qaçış geyimləri 
              ilə performansınızı artırın.
            </p>
          </div>
          <Button 
            variant="outline"
            className="border-megaplus-green text-megaplus-green hover:bg-megaplus-green hover:text-white self-start lg:self-auto"
            asChild
          >
            <Link href="/shop">
              Bütün Məhsullar
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border border-border/50 hover:border-megaplus-orange/50 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                
                {/* Discount Badge */}
                {product.originalPrice && (
                  <Badge className="absolute top-3 left-3 bg-megaplus-orange text-white border-0">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button 
                    size="icon" 
                    variant="secondary"
                    className="w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md"
                  >
                    <Heart className="w-4 h-4 text-megaplus-orange" />
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button className="w-full bg-megaplus-orange hover:bg-megaplus-orange/90 text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Səbətə Əlavə Et
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Category */}
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category === 'tshirt' && 'Köynək'}
                  {product.category === 'shorts' && 'Şort'}
                  {product.category === 'shoes' && 'Ayaqqabı'}
                  {product.category === 'accessories' && 'Aksesuar'}
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-megaplus-orange transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-megaplus-yellow text-megaplus-yellow' 
                            : 'fill-muted text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-megaplus-orange">
                    {product.price}₼
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}₼
                    </span>
                  )}
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-xs text-muted-foreground">Rənglər:</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, i) => (
                      <div 
                        key={i}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ 
                          backgroundColor: 
                            color.includes('Sarı') ? '#F7C948' :
                            color.includes('Yaşıl') ? '#2E8B57' :
                            color.includes('Qara') ? '#1B1B1B' :
                            color.includes('Ağ') ? '#FFFFFF' :
                            color.includes('Narıncı') ? '#FF6B35' :
                            color.includes('Mavi') ? '#1B4965' :
                            '#888888'
                        }}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{product.colors.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-megaplus-navy via-megaplus-blue to-megaplus-green" />
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200')" }}
            />
          </div>
          
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-megaplus-yellow text-megaplus-navy border-0">
                Xüsusi Təklif
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Klub Üzvlərinə 20% Endirim
              </h3>
              <p className="text-white/80 mb-6">
                MegaPlus Running Club üzvü olun və bütün məhsullarda 20% endirimdən faydalanın. 
                Üstəlik, marafon qeydiyyatlarında da xüsusi qiymətlər.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-megaplus-yellow text-megaplus-navy hover:bg-megaplus-yellow/90"
                >
                  İndi Üzv Ol
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10  text-megaplus-navy"
                >
                  Daha Ətraflı
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
