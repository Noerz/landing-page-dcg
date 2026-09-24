import { lazy, Suspense } from "react";
import { Header, Hero, About, Services, Benefits, CTA, Footer } from "@/components/organisms";

const FloatingWhatsApp = lazy(() => import("@/components/organisms/FloatingWhatsApp"));

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <CTA />
      <Footer />
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
}
