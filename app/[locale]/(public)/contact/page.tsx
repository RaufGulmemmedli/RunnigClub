"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  CheckCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ünvan",
    details: ["Sabunçu rayonu, Bakıxanov qəsəbəsi, Bəşir Bünyadov küçəsi 134, Baku 1132"],
    color: "text-megaplus-orange"
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+994 12 345 67 89", "+994 50 123 45 67"],
    color: "text-megaplus-green"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@megaplusrc.az", "support@megaplusrc.az"],
    color: "text-megaplus-blue"
  },
  {
    icon: Clock,
    title: "İş saatları",
    details: ["Bazar ertəsi - Cümə: 09:00 - 18:00", "Şənbə: 10:00 - 15:00"],
    color: "text-megaplus-yellow"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <MessageSquare className="w-4 h-4 mr-2" />
            Bizimlə Əlaqə
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Əlaqə Saxlayın
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Suallarınız, təklifləriniz və ya əməkdaşlıq istəkləriniz üçün bizimlə əlaqə saxlayın. 
            Sizə kömək etməkdən məmnun olarıq!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Bizim Məkan</h2>
                <p className="text-muted-foreground">
                  Ofisimizi ziyarət edin və ya aşağıdakı xəritədən yerımızı tapın.
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4!2d49.939363!3d40.427394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzM4LjYiTiA0OcKwNTYnMjEuNyJF!5e0!3m2!1saz!2saz!4v1707500000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MegaPlus Running Club Location"
                />
              </div>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-megaplus-orange to-megaplus-yellow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">Təcili əlaqə üçün</p>
                      <p className="text-white font-bold text-xl">+994 50 123 45 67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Mesaj Göndərin</h2>
                <p className="text-muted-foreground">
                  Formu doldurun, ən qısa zamanda sizinlə əlaqə saxlayacağıq.
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">
                        Mesajınız göndərildi!
                      </h3>
                      <p className="text-muted-foreground">
                        Ən qısa zamanda sizinlə əlaqə saxlayacağıq.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ad Soyad *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Adınızı daxil edin"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email ünvanınız"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+994 XX XXX XX XX"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Mövzu *</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Mesajın mövzusu"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mesaj *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Mesajınızı yazın..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-megaplus-orange hover:bg-megaplus-orange/90 text-white h-14 text-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Göndərilir...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Mesaj Göndər
                          </span>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sosial Şəbəkələrdə Bizi İzləyin</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ən son xəbərlər, yarışlar və icma tədbirləri haqqında məlumat almaq üçün sosial şəbəkələrdə bizi izləyin.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="rounded-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Twitter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
