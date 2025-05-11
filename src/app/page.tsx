import { Suspense } from 'react'
import Header from "@/components/shipfast/Header";
import Hero from "@/components/shipfast/Hero";
import Problem from "@/components/shipfast/Problem";
import FeaturesListicle from "@/components/shipfast/FeaturesListicle";
import Pricing from "@/components/shipfast/Pricing";
import FAQ from "@/components/shipfast/FAQ";
import CTA from "@/components/shipfast/CTA";
import Footer from "@/components/shipfast/Footer";
import TestimonialsCarousel from "@/components/shipfast/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesListicle />
        <Pricing />
        <TestimonialsCarousel />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
