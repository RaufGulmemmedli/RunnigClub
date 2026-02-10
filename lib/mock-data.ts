// MegaPlus Running Club Mock Data

export interface Marathon {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  distance: string;
  registrationDeadline: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  image: string;
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'tshirt' | 'shorts' | 'shoes' | 'accessories';
  sizes: string[];
  colors: string[];
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  event: string;
  date: string;
  photographer?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  content: string;
  rating: number;
}

export interface Statistic {
  label: string;
  value: string;
  icon: string;
}

// Mock Marathons Data
export const marathons: Marathon[] = [
  {
    id: '1',
    title: 'Bakı Bahar Marafonu 2026',
    description: 'Bakının ən gözəl yerlərindən keçən möhtəşəm bahar marafonu. İştirakçılar Dənizkənarı Milli Parkdan başlayaraq şəhərin tarixi mərkəzindən keçəcəklər.',
    date: '2026-04-15T09:00:00',
    location: 'Bakı, Azərbaycan',
    distance: '42.2 km',
    registrationDeadline: '2026-04-01',
    price: 50,
    maxParticipants: 5000,
    currentParticipants: 3245,
    image: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Yarım Marafon - Gəncə',
    description: 'Gəncənin yaşıl parkları və tarixi məkanlarından keçən 21 km-lik yarım marafon. Ailəvi şərait və hər yaş qrupu üçün münasib.',
    date: '2026-05-20T08:00:00',
    location: 'Gəncə, Azərbaycan',
    distance: '21.1 km',
    registrationDeadline: '2026-05-10',
    price: 35,
    maxParticipants: 2000,
    currentParticipants: 1456,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
    featured: true
  },
  {
    id: '3',
    title: 'Şəki Dağ Qaçışı',
    description: 'Şəkinin dağ yollarında keçirilən ən çətin və ən maraqlı qaçış yarışı. Təbiətin qoynunda unudulmaz təcrübə.',
    date: '2026-06-10T07:00:00',
    location: 'Şəki, Azərbaycan',
    distance: '15 km',
    registrationDeadline: '2026-06-01',
    price: 40,
    maxParticipants: 500,
    currentParticipants: 312,
    image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800',
    featured: false
  },
  {
    id: '4',
    title: 'Xəzər Sahil Qaçışı',
    description: 'Xəzər dənizi sahilində gün doğuşu ilə başlayan möhtəşəm 10 km qaçış. Yeni başlayanlar üçün ideal.',
    date: '2026-07-05T06:00:00',
    location: 'Bakı, Azərbaycan',
    distance: '10 km',
    registrationDeadline: '2026-06-25',
    price: 25,
    maxParticipants: 3000,
    currentParticipants: 1890,
    image: 'https://images.unsplash.com/photo-1544899489-a083461b088c?w=800',
    featured: true
  },
  {
    id: '5',
    title: 'Qəbələ Ultra Marafonu',
    description: '100 km-lik ultra marafon - yalnız ən güclü qaçışçılar üçün. Qəbələnin füsunkar təbiətində sınaqdan keçin.',
    date: '2026-08-15T05:00:00',
    location: 'Qəbələ, Azərbaycan',
    distance: '100 km',
    registrationDeadline: '2026-08-01',
    price: 100,
    maxParticipants: 200,
    currentParticipants: 87,
    image: 'https://images.unsplash.com/photo-1461896836934- voices-trail-running?w=800',
    featured: false
  },
  {
    id: '6',
    title: 'Gecə Qaçışı - Bakı',
    description: 'Bakının işıqlandırılmış küçələrində keçirilən unikal gecə qaçışı. LED işıqlar və musiqi ilə müşayiət olunur.',
    date: '2026-09-01T21:00:00',
    location: 'Bakı, Azərbaycan',
    distance: '5 km',
    registrationDeadline: '2026-08-25',
    price: 20,
    maxParticipants: 4000,
    currentParticipants: 2567,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
    featured: true
  }
];

// Mock Products Data
export const products: Product[] = [
  {
    id: '1',
    name: 'MegaPlus DryFit Qaçış Köynəyi',
    description: 'Nəfəs alan DryFit texnologiyası ilə hazırlanmış professional qaçış köynəyi. Tər absorbsiyası və hava sirkulyasiyası ilə sərin saxlayır.',
    price: 45,
    originalPrice: 60,
    category: 'tshirt',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Narıncı', 'Qara', 'Ağ', 'Yaşıl'],
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true
  },
  // {
  //   id: '2',
  //   name: 'MegaPlus Sprint Şort',
  //   description: 'Yüngül və elastik qaçış şortu. Daxili mesh astarlı, cib ilə təchiz olunmuş. Uzun məsafə qaçışları üçün ideal.',
  //   price: 35,
  //   category: 'shorts',
  //   sizes: ['S', 'M', 'L', 'XL'],
  //   colors: ['Qara', 'Tünd Mavi', 'Boz'],
  //   image: '',
  //   rating: 4.6,
  //   reviews: 156,
  //   inStock: true,
  //   featured: true
  // },
  {
    id: '3',
    name: 'MegaPlus AirBoost Qaçış Ayaqqabısı',
    description: 'Karbon lifli orta altlıq ilə enerji qaytarması təmin edən professional marafon ayaqqabısı. Ultra yüngül - cəmi 220 qram.',
    price: 189,
    originalPrice: 229,
    category: 'shoes',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    colors: ['Narıncı/Qara', 'Ağ/Yaşıl', 'Qara/Sarı'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    rating: 4.9,
    reviews: 412,
    inStock: true,
    featured: true
  },
  // {
  //   id: '4',
  //   name: 'MegaPlus Hidrasyon Bel Çantası',
  //   description: '500ml su qabı tutuculu və telefon cibli qaçış kəməri. Reflektor zolaqları ilə gecə qaçışları üçün təhlükəsiz.',
  //   price: 38,
  //   category: 'accessories',
  //   sizes: ['Universal'],
  //   colors: ['Qara', 'Narıncı'],
  //   image: '',
  //   rating: 4.5,
  //   reviews: 89,
  //   inStock: true,
  //   featured: false
  // },
  {
    id: '5',
    name: 'MegaPlus Kompression Tayt',
    description: 'Əzələ dəstəyi və qan dövranını artıran kompression tayt. Qaçışdan sonra bərpa prosesini 40% sürətləndirir.',
    price: 65,
    originalPrice: 85,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Qara', 'Tünd Yaşıl', 'Göy'],
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800',
    rating: 4.7,
    reviews: 178,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'MegaPlus UltraLight Qaçış Papağı',
    description: 'UV50+ günəşdən qoruyan yüngül qaçış papağı. Tər çəkən bantlı və hava keçirən mesh panelli.',
    price: 22,
    category: 'accessories',
    sizes: ['Universal'],
    colors: ['Narıncı', 'Qara', 'Ağ', 'Yaşıl'],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800',
    rating: 4.4,
    reviews: 67,
    inStock: true,
    featured: false
  },
  {
    id: '7',
    name: 'MegaPlus TrailMaster Ayaqqabı',
    description: 'Dağ və çətin ərazi qaçışları üçün xüsusi dizayn. Vibram altlıq, suya davamlı Gore-Tex material, güclü tutma.',
    price: 175,
    category: 'shoes',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Yaşıl/Qəhvəyi', 'Qara/Narıncı', 'Boz/Mavi'],
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '8',
    name: 'MegaPlus StormShield Gödəkçə',
    description: 'Yüngül və sukeçirməz qaçış gödəkçəsi. Paketlənə bilən dizayn, reflektor detalları. Soyuq və yağışlı havalar üçün.',
    price: 85,
    originalPrice: 110,
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Narıncı', 'Qara', 'Yaşıl'],
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    featured: true
  },
  // {
  //   id: '9',
  //   name: 'MegaPlus Performance Corab Dəsti (3 cüt)',
  //   description: 'Anatomik dizaynlı qaçış corabları. Anti-blister texnologiya, arch dəstəyi və nəmlik idarəetməsi.',
  //   price: 28,
  //   category: 'accessories',
  //   sizes: ['36-39', '40-43', '44-47'],
  //   colors: ['Qara', 'Ağ', 'Boz'],
  //   image: 'https://images.unsplash.com/photo-1631006235310-8e7ffec96b78?w=800',
  //   rating: 4.7,
  //   reviews: 198,
  //   inStock: true,
  //   featured: false
  // },
  {
    id: '10',
    name: 'MegaPlus ThermoRun Uzunqol Köynək',
    description: 'Soyuq hava üçün termal qaçış köynəyi. Bədən istiliyini saxlayır, nəmliyi kənarlaşdırır. -5°C-yə qədər rahat.',
    price: 55,
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Qara', 'Tünd Mavi', 'Boz'],
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800',
    rating: 4.6,
    reviews: 123,
    inStock: true,
    featured: false
  },
  {
    id: '11',
    name: 'MegaPlus LED Qaçış Qolbağı',
    description: 'Gecə qaçışları üçün yüksək görünürlük LED qolbağı. 3 işıq rejimi, şarj edilə bilən batareya, 8 saat iş müddəti.',
    price: 15,
    category: 'accessories',
    sizes: ['Universal'],
    colors: ['Yaşıl', 'Qırmızı', 'Mavi', 'Sarı'],
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800',
    rating: 4.3,
    reviews: 87,
    inStock: true,
    featured: false
  },
  {
    id: '12',
    name: 'MegaPlus 2-in-1 Qaçış Şortu',
    description: 'Daxili kompression şort ilə xarici yüngül şort. Telefon cibi, açar tutucusu. Uzun məsafə qaçışları üçün mükəmməl.',
    price: 48,
    category: 'shorts',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Qara/Qara', 'Boz/Qara', 'Göy/Qara'],
    image: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800',
    rating: 4.8,
    reviews: 267,
    inStock: true,
    featured: true
  },
  {
    id: '13',
    name: 'MegaPlus SpeedLite Yarış Ayaqqabısı',
    description: '5K-10K yarışları üçün ultra yüngül ayaqqabı. Karbon plaka, responsiv köpük, cəmi 185 qram. Sürət üçün yaradılıb.',
    price: 210,
    originalPrice: 250,
    category: 'shoes',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    colors: ['Narıncı/Sarı', 'Yaşıl/Ağ', 'Qara/Qırmızı'],
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    featured: true
  },
  // {
  //   id: '14',
  //   name: 'MegaPlus Qaçış Əlcəyi',
  //   description: 'Toxunaqlı ekran uyğun yüngül qaçış əlcəyi. Soyuq havalarda əlləri isti saxlayır, telefon istifadəsinə imkan verir.',
  //   price: 18,
  //   category: 'accessories',
  //   sizes: ['S/M', 'L/XL'],
  //   colors: ['Qara', 'Boz'],
  //   image: 'https://images.unsplash.com/photo-1584735422949-6943eb090de2?w=800',
  //   rating: 4.4,
  //   reviews: 54,
  //   inStock: true,
  //   featured: false
  // },
  {
    id: '15',
    name: 'MegaPlus Mesh Qaçış Köynəyi',
    description: 'Tam mesh konstruksiya ilə maksimum havalandırma. İsti yay qaçışları üçün ən yaxşı seçim. Ultra yüngül.',
    price: 38,
    category: 'tshirt',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ağ', 'Açıq Mavi', 'Açıq Yaşıl'],
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
    rating: 4.5,
    reviews: 98,
    inStock: true,
    featured: false
  },
  {
    id: '16',
    name: 'MegaPlus Baş Bandı',
    description: 'Elastik və tər çəkən qaçış baş bandı. Saçı və təri gözdən uzaq tutur. 4 rəng seçimi.',
    price: 12,
    category: 'accessories',
    sizes: ['Universal'],
    colors: ['Narıncı', 'Qara', 'Ağ', 'Yaşıl'],
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800',
    rating: 4.6,
    reviews: 145,
    inStock: true,
    featured: false
  }
];

// Mock Gallery Images
export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800',
    alt: 'Marafon başlanğıcı',
    event: 'Bakı Marafonu 2025',
    date: '2025-04-15',
    photographer: 'Əli Həsənov'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800',
    alt: 'Qaçışçılar qrupda',
    event: 'Bakı Marafonu 2025',
    date: '2025-04-15',
    photographer: 'Leyla Məmmədova'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800',
    alt: 'Finiş xətti',
    event: 'Şəki Dağ Qaçışı 2025',
    date: '2025-06-10',
    photographer: 'Rəşad Əliyev'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1544899489-a083461b088c?w=800',
    alt: 'Sahil qaçışı',
    event: 'Xəzər Sahil Qaçışı 2025',
    date: '2025-07-05'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800',
    alt: 'Gecə qaçışı',
    event: 'Gecə Qaçışı 2025',
    date: '2025-09-01',
    photographer: 'Kamran Nəzərli'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800',
    alt: 'Mükafatlandırma mərasimi',
    event: 'Bakı Marafonu 2025',
    date: '2025-04-15'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800',
    alt: 'İstirahət zonası',
    event: 'Qəbələ Ultra Marafonu 2025',
    date: '2025-08-15',
    photographer: 'Nigar Əlizadə'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1530143311094-34d807799e8f?w=800',
    alt: 'Qaçış anı',
    event: 'Gəncə Yarım Marafonu 2025',
    date: '2025-05-20'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=800',
    alt: 'Komanda fotosu',
    event: 'MegaPlus Klub Toplanışı',
    date: '2025-03-01',
    photographer: 'Orxan Cəfərov'
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1486218119243-13883505764c?w=800',
    alt: 'Təlim sessiyası',
    event: 'MegaPlus Təlim Kampı',
    date: '2025-02-15'
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800',
    alt: 'Medal verilişi',
    event: 'Bakı Marafonu 2025',
    date: '2025-04-15',
    photographer: 'Əli Həsənov'
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800',
    alt: 'Su stansiyası',
    event: 'Xəzər Sahil Qaçışı 2025',
    date: '2025-07-05'
  }
];

// Mock Testimonials
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Əhməd Məmmədov',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    role: 'Marafon Qaçışçısı',
    content: 'MegaPlus Running Club mənim qaçış həyatımı tamamilə dəyişdi. Mükəmməl təşkilatçılıq və dəstək!',
    rating: 5
  },
  {
    id: '2',
    name: 'Günay Əliyeva',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    role: 'Yarım Marafon İştirakçısı',
    content: 'İlk yarım marafonumu MegaPlus ilə qaçdım. Heç unutmayacağam bu təcrübəni!',
    rating: 5
  },
  {
    id: '3',
    name: 'Rəşad Hüseynov',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
    role: 'Ultra Marafon Qaçışçısı',
    content: 'Peşəkar təlimçilər və yüksək keyfiyyətli geyimlər. MegaPlus ən yaxşısıdır!',
    rating: 5
  },
  {
    id: '4',
    name: 'Leyla Nəzərli',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    role: 'Yeni Başlayan',
    content: 'Qaçışa yeni başlayanlar üçün mükəmməl icma. Hər kəs çox dəstəkləyicidir.',
    rating: 4
  }
];

// Statistics
export const statistics: Statistic[] = [
  { label: 'İştirakçı', value: '15,000+', icon: 'users' },
  { label: 'Marafon', value: '50+', icon: 'trophy' },
  { label: 'Şəhər', value: '12', icon: 'map-pin' },
  { label: 'İl Təcrübə', value: '8', icon: 'calendar' }
];

// Navigation items
export const navItems = [
  { label: 'Ana Səhifə', href: '/' },
  { label: 'Marafonlar', href: '/marathons' },
  { label: 'Mağaza', href: '/shop' },
  { label: 'Qalereya', href: '/gallery' },
  { label: 'Haqqımızda', href: '/about' },
  { label: 'Əlaqə', href: '/contact' },
];
