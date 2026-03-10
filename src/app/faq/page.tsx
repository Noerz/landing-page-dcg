import { Header, FAQ, Footer, FloatingWhatsApp } from "@/components/organisms";

export const metadata = {
  title: "FAQ - Digital Company Group",
  description: "Pertanyaan yang sering ditanyakan seputar layanan IT Digital Company Group",
};

export default function FAQPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* Spacer for fixed header */}
      <div className="pt-20" />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
