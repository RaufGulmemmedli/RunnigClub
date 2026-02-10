"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Trophy,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Newspaper
} from "lucide-react";
import Link from "next/link";

const newsCategories = [
  { id: "all", label: "Hamısı" },
  { id: "marathon", label: "Marafonlar" },
  { id: "event", label: "Tədbirlər" },
  { id: "achievement", label: "Nailiyyətlər" },
  { id: "announcement", label: "Elanlar" },
];

const newsArticles = [
  {
    id: 1,
    title: "Bakı Marafonu 2025: 5000+ İştirakçı ilə Rekord",
    excerpt: "Bu il keçirilən Bakı Marafonunda 5000-dən çox iştirakçı qatıldı. Yarışda MegaPlus Running Club üzvləri 15 medal qazandı.",
    image: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=800",
    category: "marathon",
    date: "2025-11-15",
    readTime: "5 dəq",
    featured: true,
    stats: {
      participants: "5,234",
      finishers: "4,891",
      clubMembers: "127"
    }
  },
  {
    id: 2,
    title: "Şamaxı Dağ Marafonu Uğurla Başa Çatdı",
    excerpt: "Şamaxının sərin dağ havası və mənzərəli trasında keçirilən marafonda 800+ qaçışçı iştirak etdi.",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
    category: "marathon",
    date: "2025-10-22",
    readTime: "4 dəq",
    featured: false
  },
  {
    id: 3,
    title: "Klub Üzvümüz Beynəlxalq Yarışda 3-cü Oldu",
    excerpt: "MegaPlus Running Club üzvü Rəşad Hüseynov Dubai Marafonunda 3-cü yeri tutaraq ölkəmizi layiqincə təmsil etdi.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
    category: "achievement",
    date: "2025-10-10",
    readTime: "3 dəq",
    featured: true
  },
  {
    id: 4,
    title: "2026 Təqvimi Açıqlandı: 12 Marafon Planlaşdırılır",
    excerpt: "Gələn il üçün 12 marafon və 20+ qaçış tədbirinin keçirilməsi planlaşdırılır. Qeydiyyat tezliklə başlayır.",
    image: "https://images.unsplash.com/photo-1461896836934- voices-511a2e33-4e89-8bdc-a9c7b57f0a6e?w=800",
    category: "announcement",
    date: "2025-09-28",
    readTime: "6 dəq",
    featured: false
  },
  {
    id: 5,
    title: "Quba Yarım Marafonu: Təbiətin Qoynunda Qaçış",
    excerpt: "Quba rayonunun yaşıl meşələri arasında keçirilən yarım marafonda 450 nəfər iştirak etdi.",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800",
    category: "marathon",
    date: "2025-09-15",
    readTime: "4 dəq",
    featured: false
  },
  {
    id: 6,
    title: "Yay Qaçış Düşərgəsi Uğurla Keçdi",
    excerpt: "2 həftəlik yay düşərgəsində 60 gənc qaçışçı professional məşqçilərdən təlim aldı.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800",
    category: "event",
    date: "2025-08-20",
    readTime: "5 dəq",
    featured: false
  },
  {
    id: 7,
    title: "Lənkəran Çimərlik Qaçışı: Günəş və Dəniz",
    excerpt: "Xəzər dənizi sahilində keçirilən 10K qaçışında 300+ iştirakçı qum üzərində yarışdı.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    category: "marathon",
    date: "2025-07-30",
    readTime: "3 dəq",
    featured: false
  },
  {
    id: 8,
    title: "Klub 1000-ci Üzvünü Qeyd Etdi",
    excerpt: "MegaPlus Running Club ailəsi böyüyür! 1000-ci üzvümüzü xüsusi hədiyyələrlə qarşıladıq.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800",
    category: "event",
    date: "2025-07-15",
    readTime: "4 dəq",
    featured: true
  },
  {
    id: 9,
    title: "Gəncə Şəhər Marafonu Tarixə Düşdü",
    excerpt: "İlk dəfə Gəncə şəhərində keçirilən marafon böyük maraqla qarşılandı. 600+ qaçışçı iştirak etdi.",
    image: "https://images.unsplash.com/photo-1530137073365-5c5e5b5c5c5b?w=800",
    category: "marathon",
    date: "2025-06-22",
    readTime: "5 dəq",
    featured: false
  },
  {
    id: 10,
    title: "Uşaq Qaçış Festivalı: Gələcəyin Çempionları",
    excerpt: "6-14 yaş arası 200+ uşaq ilk yarış təcrübəsini yaşadı. Bütün iştirakçılar medal aldı.",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800",
    category: "event",
    date: "2025-06-01",
    readTime: "4 dəq",
    featured: false
  },
  {
    id: 11,
    title: "Bahar 5K Səhər Qaçışları Başladı",
    excerpt: "Hər həftə sonu Dənizkənarı Parkda keçirilən pulsuz 5K qaçışları başladı. Hamı dəvətlidir!",
    image: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?w=800",
    category: "announcement",
    date: "2025-04-10",
    readTime: "2 dəq",
    featured: false
  },
  {
    id: 12,
    title: "Novruz Marafonu: Bayram Ruhu ilə Qaçış",
    excerpt: "Novruz bayramına həsr olunmuş xüsusi marafonda iştirakçılar milli geyimlərdə yarışdı.",
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800",
    category: "marathon",
    date: "2025-03-21",
    readTime: "4 dəq",
    featured: false
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "marathon":
      return "bg-megaplus-orange text-white";
    case "event":
      return "bg-megaplus-blue text-white";
    case "achievement":
      return "bg-megaplus-green text-white";
    case "announcement":
      return "bg-megaplus-yellow text-megaplus-navy";
    default:
      return "bg-gray-500 text-white";
  }
};

const getCategoryLabel = (category: string) => {
  const cat = newsCategories.find(c => c.id === category);
  return cat ? cat.label : category;
};

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const featuredArticles = newsArticles.filter(article => article.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-megaplus-navy via-megaplus-blue to-megaplus-green" />
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
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white/10 text-white border-white/20 mb-6">
            <Newspaper className="w-4 h-4 mr-2" />
            Ən Son Xəbərlər
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Xəbərlər və Yeniliklər
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Marafonlar, tədbirlər, nailiyyətlər və klub yenilikləri haqqında 
            ən son məlumatlar burada.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-megaplus-orange" />
            Önə Çıxan Xəbərlər
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className={`border-0 shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="relative h-full">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? "h-full min-h-[400px]" : "h-48"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className={`${getCategoryColor(article.category)} mb-3`}>
                      {getCategoryLabel(article.category)}
                    </Badge>
                    <h3 className={`font-bold text-white mb-2 group-hover:text-megaplus-orange transition-colors ${
                      index === 0 ? "text-2xl" : "text-lg"
                    }`}>
                      {article.title}
                    </h3>
                    {index === 0 && (
                      <p className="text-white/80 mb-4 line-clamp-2">{article.excerpt}</p>
                    )}
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString('az-AZ', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-megaplus-orange to-megaplus-yellow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">12+</div>
              <div className="text-white/80">Marafon Keçirildi</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">8,500+</div>
              <div className="text-white/80">İştirakçı</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">45+</div>
              <div className="text-white/80">Medal Qazanıldı</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1,000+</div>
              <div className="text-white/80">Klub Üzvü</div>
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Xəbər axtar..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={selectedCategory === category.id 
                    ? "bg-megaplus-orange hover:bg-megaplus-orange/90" 
                    : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedArticles.map((article) => (
              <Card 
                key={article.id} 
                className="border-0 shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 left-4 ${getCategoryColor(article.category)}`}>
                    {getCategoryLabel(article.category)}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-megaplus-orange transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('az-AZ', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {paginatedArticles.length === 0 && (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Xəbər tapılmadı</h3>
              <p className="text-muted-foreground">
                Axtarış kriteriyalarınıza uyğun xəbər yoxdur.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "bg-megaplus-orange hover:bg-megaplus-orange/90" : ""}
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-megaplus-navy to-megaplus-blue overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Xəbərlərdən Xəbərdar Olun
                  </h2>
                  <p className="text-white/80 mb-6">
                    Ən son marafon xəbərləri, yarış nəticələri və klub yenilikləri 
                    birbaşa email-inizə gəlsin.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Email ünvanınız"
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1"
                  />
                  <Button 
                    size="lg"
                    className="h-14 bg-megaplus-orange hover:bg-megaplus-orange/90 text-white px-8"
                  >
                    Abunə Ol
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
