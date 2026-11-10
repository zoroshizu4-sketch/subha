export interface ProductItem {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Kids' | 'Traditional';
  subCategory: string;
  image: string;
  description: string;
  highlights: string[];
  sampleTag?: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  itemCountDescription: string;
  popularItems: string[];
}

export const STORE_INFO = {
  name: "SUBHA GARMENTS",
  tagline: "BUY MORE & PAY LESS",
  taglineSub: "Complete Family Fashion Destination in Coimbatore",
  category: "Clothing Store",
  address: "1, KM Colony Road, KM Colony, Aathupalam, Coimbatore, Tamil Nadu 641023, India",
  shortAddress: "Aathupalam, Coimbatore, Tamil Nadu",
  landmark: "Near Aathupalam Junction / KM Colony Road",
  phone: "+91 7395952206",
  phoneClean: "+917395952206",
  whatsappNumber: "917395952206",
  instagramHandle: "@subhagarments",
  instagramUrl: "https://www.instagram.com/subhagarments/",
  googleRating: 4.8,
  totalReviews: 6,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=1,+KM+Colony+Road,+KM+Colony,+Aathupalam,+Coimbatore,+Tamil+Nadu+641023",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.634027732684!2d76.9592473!3d10.9850239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a2283a0f7b%3A0xd68925206263884!2sAathupalam%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  description: "A complete wear shop offering affordable and stylish clothing for men, women and kids. Established to bring trendy fashion and dependable quality at prices every family can celebrate.",
};

export const CATEGORIES: CategoryItem[] = [
  {
    id: "mens",
    title: "Men's Collection",
    subtitle: "Modern Cuts, Casual Comfort & Formals",
    badge: "Trending For Men",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80",
    description: "From breathable everyday cotton t-shirts and checked casual shirts to sharp trousers and rugged denims.",
    itemCountDescription: "T-Shirts • Shirts • Jeans • Trousers",
    popularItems: ["Cotton Polos & Tees", "Casual & Formal Shirts", "Stretch Comfort Denims", "Smart Chinos"]
  },
  {
    id: "womens",
    title: "Women's Collection",
    subtitle: "Graceful Daily Wear, Kurtis & Contemporary Styles",
    badge: "Most Loved",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
    description: "Chic tops, comfortable cotton kurtis, casual bottom wear, and versatile everyday ethnic clothing crafted for effortless elegance.",
    itemCountDescription: "Kurtis • Tops • Traditional • Casuals",
    popularItems: ["Cotton Daily Kurtis", "Casual Tops & Tunic Sets", "Festive Traditional Wear", "Comfort Bottoms"]
  },
  {
    id: "kids",
    title: "Kids' Collection",
    subtitle: "Vibrant, Durable & Play-Ready Outfits",
    badge: "Pure Comfort",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
    description: "Soft, skin-friendly fabrics with lively colors and durable stitching designed to keep your little ones smiling and comfy all day.",
    itemCountDescription: "Boys Wear • Girls Wear • Toddler Sets",
    popularItems: ["Boys Graphic T-Shirts", "Party Wear Frocks & Sets", "Cotton Play Sets", "Festive Kidswear"]
  }
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "prod-tshirts",
    name: "Cotton Casual & Polo T-Shirts",
    category: "Men",
    subCategory: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    description: "Super-combed breathable cotton t-shirts in classic crew necks, polo collars, and trendy printed graphics. Perfect for Coimbatore's sunny weather.",
    highlights: ["100% Breathable Cotton", "Pre-shrunk Fabric", "Sizes S to 3XL Available in Store"],
    sampleTag: "Daily Essential"
  },
  {
    id: "prod-shirts",
    name: "Classic & Casual Checked Shirts",
    category: "Men",
    subCategory: "Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "Crisp cotton shirts in timeless tartan checks, subtle micro-patterns, and formal solid colors suitable for office or weekend outings.",
    highlights: ["Smart Regular & Slim Fits", "Wrinkle-Resistant Finish", "Single & Dual Chest Pockets"],
    sampleTag: "Bestseller"
  },
  {
    id: "prod-jeans",
    name: "Stretch Comfort Denim Jeans",
    category: "Men",
    subCategory: "Jeans",
    image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    description: "Durable stretch denims in deep indigo, stone wash, and classic black with flexible elastane for all-day freedom of movement.",
    highlights: ["Durable 12oz Denim", "Comfort Stretch Waist", "Fade-Resistant Washes"],
    sampleTag: "High Durability"
  },
  {
    id: "prod-trousers",
    name: "Smart Chinos & Formal Trousers",
    category: "Men",
    subCategory: "Trousers",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    description: "Tailored cotton chino trousers and pleated formal pants designed for polished appearances and durable everyday office or casual wear.",
    highlights: ["Twill Cotton Weave", "Tailored Clean Silhouette", "Versatile Khaki, Navy & Black"],
    sampleTag: "Versatile Wear"
  },
  {
    id: "prod-casual-wear",
    name: "All-Day Casuals & Lounge Wear",
    category: "Women",
    subCategory: "Casual Wear",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    description: "Relaxed tops, breathable co-ord sets, track pants, and comfortable daily wear thoughtfully curated for ease and effortless modern charm.",
    highlights: ["Feather-light Viscose & Cotton", "Easy Care & Wash", "Soft Elasticated Waistbands"],
    sampleTag: "Relaxed Fit"
  },
  {
    id: "prod-traditional",
    name: "Festive & Traditional Wear",
    category: "Traditional",
    subCategory: "Traditional Wear",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    description: "Authentic South Indian festival attire including dhotis with zari borders, traditional cotton kurtas, and festive family ensembles.",
    highlights: ["Rich Traditional Weaves", "Festive Tamil Nadu Styling", "Perfect for Weddings & Pongal"],
    sampleTag: "Festive Special"
  },
  {
    id: "prod-kids-wear",
    name: "Fun & Durable Kids' Clothing",
    category: "Kids",
    subCategory: "Kids' Clothing",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
    description: "Delightful outfits for boys and girls made from gentle, non-irritating fabrics that easily withstand active playground adventures.",
    highlights: ["Hypoallergenic Soft Cotton", "Sturdy Reinforced Seams", "Vibrant Non-toxic Dyes"],
    sampleTag: "Kids Favorite"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Affordable Fashion",
    description: "High style does not have to mean high prices. We source directly to pass great savings straight to your wardrobe.",
    iconName: "BadgePercent"
  },
  {
    title: "Clothing for the Whole Family",
    description: "A complete one-stop shop in Aathupalam stocking thoughtful selections for Men, Women, and Kids all under one roof.",
    iconName: "Users"
  },
  {
    title: "Stylish & Trendy Collections",
    description: "Fresh arrivals featuring contemporary patterns, comfortable modern fits, and vibrant seasonal colorways.",
    iconName: "Sparkles"
  },
  {
    title: "Great Value for Money",
    description: "True to our motto 'BUY MORE & PAY LESS', discover premium quality stitching and durable fabrics without overpaying.",
    iconName: "ShieldCheck"
  },
  {
    title: "Friendly Shopping Experience",
    description: "Warm local hospitality, personalized size guidance, and attentive service whenever you visit our Coimbatore store.",
    iconName: "HeartHandshake"
  }
];

// Customer reviews as strictly supplied by the user prompt
export const CUSTOMER_REVIEWS = [
  {
    quote: "Cheap n best shopping",
    rating: 5,
    source: "Google Verified Review",
    location: "Coimbatore"
  },
  {
    quote: "Cheap and best shop clothing for men, women & kids.",
    rating: 5,
    source: "Google Verified Review",
    location: "Coimbatore"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
    caption: "Fresh men's casual shirts in store now! Perfect fit, pocket-friendly prices. #SubhaGarments #CoimbatoreFashion",
    likes: "128"
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
    caption: "Styling everyday elegance with comfortable cotton kurtis and tops. Visit us at Aathupalam! #BuyMorePayLess",
    likes: "194"
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80",
    caption: "Bright smiles and adorable outfits for your little rockstars! Kids festive & casual wear available. #KidsWearCoimbatore",
    likes: "152"
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    caption: "Smart formal wear and tailored chinos ready for your work week. #MensWear #CoimbatoreStyle",
    likes: "140"
  }
];
