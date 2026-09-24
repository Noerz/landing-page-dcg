import { lazy, Suspense } from "react";
import { Header, FAQ, Footer } from "@/components/organisms";

const FloatingWhatsApp = lazy(() => import("@/components/organisms/FloatingWhatsApp"));

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
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </main>
  );
}
