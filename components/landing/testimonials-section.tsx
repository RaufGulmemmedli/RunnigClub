"use client";

import { testimonials, statistics } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Trophy, MapPin, Calendar } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  trophy: Trophy,
  'map-pin': MapPin,
  calendar: Calendar,
};

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-megaplus-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-megaplus-green/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {statistics.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted border border-border/50 hover:border-megaplus-orange/30 transition-colors group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-megaplus-orange to-megaplus-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-megaplus-orange to-megaplus-yellow bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-megaplus-yellow/10 text-megaplus-yellow border-megaplus-yellow/20">
            Rəylər
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-megaplus-blue dark:text-white">Qaçışçılarımız </span>
            <span className="bg-gradient-to-r from-megaplus-yellow to-megaplus-orange bg-clip-text text-transparent">
              Nə Deyir?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MegaPlus Running Club üzvlərinin təcrübə və fikirləri.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-megaplus-orange/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 relative">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-megaplus-orange/20 group-hover:text-megaplus-orange/40 transition-colors" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating 
                          ? 'fill-megaplus-yellow text-megaplus-yellow' 
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-megaplus-orange/20"
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
