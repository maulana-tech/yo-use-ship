"use client";

import React from "react";
import { Button } from "@/src/components/ui/button";
import HeroSection from "@/src/components/HeroSection";
import ProductCarouselSection from "@/src/components/ProductCarouselSection";
import AboutSection from "@/src/components/AboutSection";
import PricingSection from "@/src/components/PricingSection";
import FooterSection from "@/src/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <HeroSection />
      {/* Product Carousel */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <ProductCarouselSection />
        </div>
      </section>
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <AboutSection />
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto">
          <PricingSection />
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to manage your SaaS business?</h2>
        <p className="text-lg text-muted-foreground mb-8">Sign in to the admin dashboard to get started.</p>
        <Button asChild size="lg" className="text-lg px-8 py-4">
          <a href="/admin">Go to Admin Dashboard</a>
        </Button>
      </section>
      {/* Footer */}
      <FooterSection />
    </main>
  );
}
