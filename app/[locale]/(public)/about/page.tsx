"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Trophy, 
  MapPin, 
  Calendar,
  Heart,
  Target,
  Zap,
  Award,
  ArrowRight,
  Mail,
  Phone,
  Clock
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Birlik",
    description: "Hər bir qaçışçı bizim ailəmizin üzvüdür. Birlikdə daha güclüyük."
  },
  {
    icon: Target,
    title: "Məqsəd",
    description: "Hər bir məqsədə çatmaq üçün dəstək veririk. Kiçik addımlar böyük nailiyyətlərə aparır."
  },
  {
    icon: Zap,
    title: "Enerji",
    description: "Pozitiv enerji ilə dolu icmamızda hər gün motivasiya tapacaqsınız."
  },
  {
    icon: Award,
    title: "Keyfiyyət",
    description: "Təşkil etdiyimiz hər yarışda və istehsal etdiyimiz hər məhsulda keyfiyyət prioritetimizdir."
  }
];

const team = [
  {
    name: "Əli Məmmədov",
    role: "Təsisçi & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "20+ il qaçış təcrübəsi, 15 marafon bitirmiş"
  },
  {
    name: "Leyla Həsənova",
    role: "Baş Məşqçi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Beynəlxalq sertifikatlı atletizm məşqçisi"
  },
  {
    name: "Rəşad Əliyev",
    role: "Tədbirlər Meneceri",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "50+ uğurlu marafon təşkil etmiş"
  },
  {
    name: "Günay Nəzərli",
    role: "Marketinq Direktoru",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "İdman marketinqi sahəsində 10 il təcrübə"
  }
];

const milestones = [
  { year: "2018", title: "Təsisimiz", description: "10 nəfərlik kiçik qrup kimi başladıq" },
  { year: "2019", title: "İlk Marafon", description: "Bakı şəhərində ilk rəsmi marafonumuzu təşkil etdik" },
  { year: "2020", title: "Online Platforma", description: "Pandemiya dövründə virtual qaçış yarışlarına keçdik" },
  { year: "2021", title: "1000 Üzv", description: "Klub üzvlərimizin sayı 1000-i keçdi" },
  { year: "2022", title: "Mağaza Açılışı", description: "MegaPlus brendi altında geyim satışına başladıq" },
  { year: "2023", title: "Regional Genişlənmə", description: "Bütün Azərbaycan üzrə marafonlar təşkil etməyə başladıq" },
  { year: "2024", title: "10,000 Üzv", description: "İcmamız 10,000 aktiv üzvə çatdı" },
  { year: "2025", title: "Beynəlxalq Tərəfdaşlıq", description: "Beynəlxalq qaçış federasiyalarına qoşulduq" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-megaplus-navy via-megaplus-blue to-megaplus-green" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1920')" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-megaplus-orange text-white border-0">
              Haqqımızda
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              MegaPlus
              <span className="block bg-gradient-to-r from-megaplus-yellow to-megaplus-orange bg-clip-text text-transparent">
                Running Club
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              2018-ci ildən bəri Azərbaycanın ən böyük qaçış icmasını qururuq. 
              Missiyamız hər kəsə sağlam həyat tərzi aşılamaq və qaçışın gücünü göstərməkdir.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-megaplus-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15K+</div>
                <div className="text-white/60 text-sm">İştirakçı</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Trophy className="w-8 h-8 text-megaplus-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-white/60 text-sm">Marafon</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <MapPin className="w-8 h-8 text-megaplus-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-white/60 text-sm">Şəhər</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Calendar className="w-8 h-8 text-megaplus-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">8</div>
                <div className="text-white/60 text-sm">İl Təcrübə</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-megaplus-green/10 text-megaplus-green border-megaplus-green/20">
              Dəyərlərimiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-megaplus-blue dark:text-white">Bizi Fərqli </span>
              <span className="bg-gradient-to-r from-megaplus-green to-megaplus-yellow bg-clip-text text-transparent">
                Edən Nədir?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group text-center border-border/50 hover:border-megaplus-orange/50 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-megaplus-orange to-megaplus-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-megaplus-orange/10 text-megaplus-orange border-megaplus-orange/20">
              Tariximiz
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-megaplus-blue dark:text-white">Böyümə </span>
              <span className="bg-gradient-to-r from-megaplus-orange to-megaplus-yellow bg-clip-text text-transparent">
                Yolumuz
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="inline-block max-w-md border-border/50 hover:border-megaplus-orange/30 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="text-megaplus-orange font-bold text-lg mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Center dot */}
                  <div className="w-4 h-4 rounded-full bg-megaplus-orange flex-shrink-0 hidden md:block" />
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-megaplus-blue/10 text-megaplus-blue border-megaplus-blue/20">
              Komandamız
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-megaplus-blue dark:text-white">Arxasında Duran </span>
              <span className="bg-gradient-to-r from-megaplus-blue to-megaplus-green bg-clip-text text-transparent">
                İnsanlar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Peşəkar və həvəsli komandamız MegaPlus-u Azərbaycanın ən böyük qaçış icmasına çevirir.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border/50 hover:border-megaplus-orange/30 hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <p className="text-megaplus-yellow font-medium">{member.role}</p>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-megaplus-navy via-megaplus-blue to-megaplus-green">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-megaplus-yellow text-megaplus-navy border-0">
                Əlaqə
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Bizimlə Əlaqə Saxlayın
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Suallarınız var? Təklifləriniz var? Bizə yazın, 
                24 saat ərzində cavab verəcəyik.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Ünvan</div>
                    <div>Bakı şəhəri, Nəsimi rayonu, Azadlıq prospekti 45</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Telefon</div>
                    <div>+994 50 123 45 67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">E-poçt</div>
                    <div>info@megaplus.az</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">İş Saatları</div>
                    <div>Bazar ertəsi - Şənbə: 09:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Mesaj Göndərin</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/80 text-sm mb-2 block">Ad</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-megaplus-orange"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label className="text-white/80 text-sm mb-2 block">Soyad</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-megaplus-orange"
                        placeholder="Soyadınız"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/80 text-sm mb-2 block">E-poçt</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-megaplus-orange"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm mb-2 block">Mesaj</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-megaplus-orange resize-none"
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-megaplus-orange hover:bg-megaplus-orange/90 text-white py-6"
                  >
                    Göndər
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
