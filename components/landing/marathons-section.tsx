"use client";

import { marathons } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, Timer } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "./countdown-timer";

export function MarathonsSection() {
  const featuredMarathons = marathons.filter(m => m.featured).slice(0, 3);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-megaplus-orange/10 text-megaplus-orange border-megaplus-orange/20">
            Qarşıdakı Yarışlar
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-megaplus-blue dark:text-white">Növbəti </span>
            <span className="bg-gradient-to-r from-megaplus-orange to-megaplus-yellow bg-clip-text text-transparent">
              Marafonlar
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Azərbaycanın müxtəlif şəhərlərində keçirilən marafonlara qeydiyyatdan keçin 
            və qaçış macəranıza başlayın.
          </p>
        </div>

        {/* Marathon Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredMarathons.map((marathon, index) => (
            <Card 
              key={marathon.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${marathon.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Distance Badge */}
                <Badge className="absolute top-4 right-4 bg-megaplus-green text-white border-0">
                  {marathon.distance}
                </Badge>
                
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
                        year: 'numeric'
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
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-megaplus-orange to-megaplus-yellow rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${(marathon.currentParticipants / marathon.maxParticipants) * 100}%` 
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-megaplus-orange">
                      {marathon.price}₼
                    </span>
                  </div>
                  <Button 
                    className="bg-megaplus-orange hover:bg-megaplus-orange/90 text-white group/btn"
                    asChild
                  >
                    <Link href={`/marathons/${marathon.id}`}>
                      Qeydiyyat
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-megaplus-orange text-megaplus-orange hover:bg-megaplus-orange hover:text-white rounded-full px-8"
            asChild
          >
            <Link href="/marathons">
              Bütün Marafonlara Bax
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
