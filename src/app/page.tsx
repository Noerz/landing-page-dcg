import { Header, Hero, About, Services, Benefits, CTA, Footer, FloatingWhatsApp } from "@/components/organisms";

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
      <FloatingWhatsApp />
    </main>
  );
}
