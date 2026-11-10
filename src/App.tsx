import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { FeaturedCollection } from './components/FeaturedCollection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { CustomerReviews } from './components/CustomerReviews';
import { InstagramSection } from './components/InstagramSection';
import { StoreQRSection, StoreQRCodeModal } from './components/StoreQRCode';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProductModal } from './components/ProductModal';
import { ProductItem } from './data/storeData';

export default function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleOpenQR = () => setIsQRModalOpen(true);
  const handleCloseQR = () => setIsQRModalOpen(false);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#141414] font-sans flex flex-col selection:bg-[#C5A059]/20 selection:text-black">
      {/* Navigation Bar */}
      <Navbar onOpenQR={handleOpenQR} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQR={handleOpenQR} />

        {/* 2. Shop By Category */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 3. Featured Collection */}
        <FeaturedCollection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onOpenProduct={(product) => setSelectedProduct(product)}
        />

        {/* 4. Unique Website QR Code Banner */}
        <StoreQRSection onOpenModal={handleOpenQR} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. About Us */}
        <AboutUs />

        {/* 7. Customer Reviews (Google Rating 4.8/5) */}
        <CustomerReviews />

        {/* 8. Instagram Section */}
        <InstagramSection />

        {/* 9. Contact & Google Maps */}
        <ContactSection />
      </main>

      {/* 10. Footer */}
      <Footer onOpenQR={handleOpenQR} />

      {/* Mobile Sticky Floating Actions */}
      <FloatingActions onOpenQR={handleOpenQR} />

      {/* Interactive Modals */}
      <StoreQRCodeModal isOpen={isQRModalOpen} onClose={handleCloseQR} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
