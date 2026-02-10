"use client";

import { useState } from "react";
import { products } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  X
} from "lucide-react";

type Category = 'all' | 'tshirt' | 'shorts' | 'shoes' | 'accessories';

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'Bütün Kateqoriyalar' },
  { value: 'tshirt', label: 'Köynəklər' },
  { value: 'shorts', label: 'Şortlar' },
  { value: 'shoes', label: 'Ayaqqabılar' },
  { value: 'accessories', label: 'Aksesuarlar' },
];

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === "featured") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviews - a.reviews;
      return 0;
    });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-megaplus-green/10 via-megaplus-yellow/5 to-megaplus-orange/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-megaplus-green text-white border-0">
              Yeni Kolleksiya
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-megaplus-blue dark:text-white">Professional </span>
              <span className="bg-gradient-to-r from-megaplus-green to-megaplus-yellow bg-clip-text text-transparent">
                Qaçış Geyimləri
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              MegaPlus brendinin yüksək keyfiyyətli, rahat və şık qaçış geyimləri.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Məhsul axtar..."
                className="pl-12 pr-4 py-6 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 space-y-8">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Kateqoriyalar
                  </h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <label 
                        key={cat.value}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <Checkbox 
                          checked={selectedCategory === cat.value}
                          onCheckedChange={() => setSelectedCategory(cat.value)}
                        />
                        <span className={`group-hover:text-megaplus-orange transition-colors ${
                          selectedCategory === cat.value ? 'text-megaplus-orange font-medium' : ''
                        }`}>
                          {cat.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-4">Qiymət Aralığı</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={200}
                    step={10}
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0]}₼</span>
                    <span>{priceRange[1]}₼</span>
                  </div>
                </div>

                {/* Sale Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-megaplus-orange to-megaplus-yellow text-white">
                  <div className="text-3xl font-bold mb-2">20%</div>
                  <div className="font-semibold mb-1">Klub Üzvlərinə Endirim</div>
                  <p className="text-sm text-white/80 mb-4">Bütün məhsullarda keçərlidir</p>
                  <Button 
                    size="sm" 
                    className="bg-white text-megaplus-orange hover:bg-white/90 w-full"
                  >
                    Üzv Ol
                  </Button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 p-4 bg-muted/50 rounded-xl">
                <div className="flex items-center gap-4">
                  {/* Mobile filter button */}
                  <Button 
                    variant="outline" 
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filtr
                  </Button>
                  
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">{filteredProducts.length}</span> məhsul
                  </span>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Sırala" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Populyar</SelectItem>
                      <SelectItem value="price-asc">Qiymət: Aşağıdan</SelectItem>
                      <SelectItem value="price-desc">Qiymət: Yuxarıdan</SelectItem>
                      <SelectItem value="rating">Reytinq</SelectItem>
                      <SelectItem value="reviews">Rəylər</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden sm:flex items-center gap-1 border rounded-lg p-1">
                    <Button 
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Filters */}
              {showFilters && (
                <div className="lg:hidden mb-8 p-6 bg-muted/50 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filtrlər</h3>
                    <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">Kateqoriya</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <Badge 
                            key={cat.value}
                            variant={selectedCategory === cat.value ? "default" : "outline"}
                            className={`cursor-pointer ${
                              selectedCategory === cat.value 
                                ? 'bg-megaplus-orange text-white' 
                                : 'hover:bg-megaplus-orange/10'
                            }`}
                            onClick={() => setSelectedCategory(cat.value)}
                          >
                            {cat.label}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-3">Qiymət: {priceRange[0]}₼ - {priceRange[1]}₼</h4>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        min={0}
                        max={200}
                        step={10}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? 'sm:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <Card 
                    key={product.id}
                    className={`group overflow-hidden border border-border/50 hover:border-megaplus-orange/50 hover:shadow-xl transition-all duration-300 ${
                      viewMode === "list" ? 'flex' : ''
                    }`}
                  >
                    {/* Image Container */}
                    <div className={`relative overflow-hidden bg-muted ${
                      viewMode === "list" ? 'w-48 flex-shrink-0' : 'aspect-square'
                    }`}>
                      <div 
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 ${
                          viewMode === "list" ? 'aspect-square' : ''
                        }`}
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                      
                      {product.originalPrice && (
                        <Badge className="absolute top-3 left-3 bg-megaplus-orange text-white border-0">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </Badge>
                      )}

                      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          size="icon" 
                          variant="secondary"
                          className="w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md"
                        >
                          <Heart className="w-4 h-4 text-megaplus-orange" />
                        </Button>
                      </div>

                      {viewMode === "grid" && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <Button className="w-full bg-megaplus-orange hover:bg-megaplus-orange/90 text-white">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Səbətə Əlavə Et
                          </Button>
                        </div>
                      )}
                    </div>

                    <CardContent className={`p-4 ${viewMode === "list" ? 'flex-1 flex flex-col' : ''}`}>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        {product.category === 'tshirt' && 'Köynək'}
                        {product.category === 'shorts' && 'Şort'}
                        {product.category === 'shoes' && 'Ayaqqabı'}
                        {product.category === 'accessories' && 'Aksesuar'}
                      </div>

                      <h3 className={`font-semibold mb-2 group-hover:text-megaplus-orange transition-colors ${
                        viewMode === "list" ? 'text-lg' : 'line-clamp-2'
                      }`}>
                        {product.name}
                      </h3>

                      {viewMode === "list" && (
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}

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

                      <div className={`flex items-center gap-2 ${viewMode === "list" ? 'mt-auto' : ''}`}>
                        <span className="text-xl font-bold text-megaplus-orange">
                          {product.price}₼
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}₼
                          </span>
                        )}
                        
                        {viewMode === "list" && (
                          <Button className="ml-auto bg-megaplus-orange hover:bg-megaplus-orange/90 text-white">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Səbətə Əlavə Et
                          </Button>
                        )}
                      </div>

                      {viewMode === "grid" && (
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
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Məhsul tapılmadı</h3>
                  <p className="text-muted-foreground">
                    Axtarış parametrlərini dəyişməyə çalışın
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
