"use client";

import { useState } from "react";
import { marathons } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  Timer, 
  Search,
  Filter,
  SlidersHorizontal
} from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "@/components/landing/countdown-timer";

export default function MarathonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  const filteredMarathons = marathons
    .filter(m => {
      const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           m.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistance = distanceFilter === "all" || 
                              (distanceFilter === "5-10" && parseFloat(m.distance) <= 10) ||
                              (distanceFilter === "21" && m.distance.includes("21")) ||
                              (distanceFilter === "42" && m.distance.includes("42")) ||
                              (distanceFilter === "100+" && parseFloat(m.distance) >= 100);
      return matchesSearch && matchesDistance;
    })
    .sort((a, b) => {
      if (sortBy === "date") return new Date(a.date).getTime() - new Date(b.date).getTime();
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "participants") return b.currentParticipants - a.currentParticipants;
      return 0;
    });

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-megaplus-navy via-megaplus-blue to-megaplus-green opacity-95" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1920')" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-megaplus-orange text-white border-0">
              2026 Mövsümü
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Qarşıdakı Marafonlar
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Azərbaycanın müxtəlif şəhərlərində keçirilən marafonları kəşf edin 
              və qaçış səyahətinizə başlayın.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Marafon və ya şəhər axtar..."
                className="pl-12 pr-4 py-6 rounded-full bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-muted/50 rounded-2xl">
            <div className="flex items-center gap-2 text-muted-foreground">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium">Filtr:</span>
            </div>
            
            <Select value={distanceFilter} onValueChange={setDistanceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Məsafə" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Bütün Məsafələr</SelectItem>
                <SelectItem value="5-10">5-10 km</SelectItem>
                <SelectItem value="21">Yarım Marafon (21 km)</SelectItem>
                <SelectItem value="42">Marafon (42 km)</SelectItem>
                <SelectItem value="100+">Ultra (100+ km)</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sırala" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Tarix üzrə</SelectItem>
                <SelectItem value="price">Qiymət üzrə</SelectItem>
                <SelectItem value="participants">Populyarlıq üzrə</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1" />
            
            <div className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredMarathons.length}</span> marafon tapıldı
            </div>
          </div>

          {/* Marathon Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMarathons.map((marathon, index) => (
              <Card 
                key={marathon.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${marathon.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Distance Badge */}
                  <Badge className="absolute top-4 left-4 bg-megaplus-green text-white border-0">
                    {marathon.distance}
                  </Badge>
                  
                  {marathon.featured && (
                    <Badge className="absolute top-4 right-4 bg-megaplus-orange text-white border-0">
                      Populyar
                    </Badge>
                  )}
                  
                  {/* Countdown overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <Timer className="w-4 h-4" />
                      <span>Yarışa qalan:</span>
                    </div>
                    <CountdownTimer 
                      targetDate={marathon.date} 
                      variant="compact"
                      className="text-white font-semibold"
                    />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-megaplus-orange transition-colors">
                    {marathon.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {marathon.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-megaplus-orange" />
                      <span>
                        {new Date(marathon.date).toLocaleDateString('az-AZ', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-megaplus-green" />
                      <span>{marathon.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-megaplus-blue" />
                      <span>{marathon.currentParticipants} / {marathon.maxParticipants} iştirakçı</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Qeydiyyat</span>
                      <span>{Math.round((marathon.currentParticipants / marathon.maxParticipants) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-megaplus-orange to-megaplus-yellow rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(marathon.currentParticipants / marathon.maxParticipants) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-2xl font-bold text-megaplus-orange">
                        {marathon.price}₼
                      </span>
                    </div>
                    <Button 
                      className="bg-megaplus-orange hover:bg-megaplus-orange/90 text-white group/btn"
                    >
                      Qeydiyyat
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMarathons.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marafon tapılmadı</h3>
              <p className="text-muted-foreground">
                Axtarış parametrlərini dəyişməyə çalışın
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
