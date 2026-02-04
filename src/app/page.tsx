import { Suspense, lazy } from 'react'
import Header from "@/components/shipfast/Header";
import Hero from "@/components/shipfast/Hero";
import About from "@/components/shipfast/About";
import Results from "@/components/shipfast/Results";
import FAQ from "@/components/shipfast/FAQ";
import TrustGuarantees from "@/components/shipfast/TrustGuarantees";
import CTA from "@/components/shipfast/CTA";
import Footer from "@/components/shipfast/Footer";

// Lazy load TestimonialsCarousel for better performance
const TestimonialsCarousel = lazy(() => import("@/components/shipfast/TestimonialsCarousel"));

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <About />
        <Results />
        <Suspense fallback={
          <section className="py-24 bg-neutral text-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </section>
        }>
          <TestimonialsCarousel />
        </Suspense>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
