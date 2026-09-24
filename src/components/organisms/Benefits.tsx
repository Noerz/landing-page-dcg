import {
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Container, Heading, Section } from "../atoms";
import { BenefitCard } from "../molecules";

const benefits = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Dikerjakan Teknisi Sendiri",
    description:
      "Teknisi yang survei juga terlibat saat instalasi. Informasi tidak terputus di tengah pengerjaan.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Ruang Lingkup Jelas",
    description:
      "Spesifikasi perangkat, jalur kabel, biaya, dan jadwal tertulis sebelum pekerjaan dimulai.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Garansi Dapat Ditelusuri",
    description:
      "Nomor seri perangkat dan masa garansi dicatat dalam dokumen serah terima.",
  },
  {
    icon: DocumentTextIcon,
    title: "Dokumentasi Teknis",
    description:
      "Klien menerima catatan konfigurasi dasar dan dokumentasi instalasi untuk kebutuhan perawatan berikutnya.",
  },
];

export default function Benefits() {
  return (
    <Section bgColor="white" py="xl" id="benefits">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Cara Kerja
          </p>
          <Heading level={2} color="dark" className="mt-2 tracking-tight">
            Pengerjaan yang bisa diperiksa
          </Heading>
          <p className="mt-4 text-base text-gray-600">
            Setiap proyek punya ruang lingkup, catatan teknis, dan penanggung jawab yang jelas.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
