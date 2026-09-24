import { CheckIcon } from "@heroicons/react/24/outline";
import { Container, Heading, Section } from "../atoms";

const highlights = [
  "Survei lokasi gratis untuk area Kota Bandung",
  "Rekomendasi perangkat sesuai kebutuhan dan anggaran",
  "Instalasi rapi dengan dokumentasi jalur kabel",
  "Garansi pemasangan dan pendampingan pascainstalasi",
];

const pillars = [
  {
    title: "Teknisi Internal",
    description: "Semua pengerjaan ditangani teknisi kami langsung, bukan diserahkan ke subkontraktor.",
  },
  {
    title: "Perangkat Bergaransi",
    description: "Menggunakan hardware resmi dengan garansi pabrikan yang jelas.",
  },
  {
    title: "Transparan",
    description: "Rincian biaya, spesifikasi teknis, dan timeline disepakati sebelum mulai bekerja.",
  },
];

export default function About() {
  return (
    <Section bgColor="white" py="xl" id="about">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Tentang Kami
            </p>
            <Heading level={2} color="dark" className="mt-2 tracking-tight">
              Mitra infrastruktur IT lokal untuk operasional bisnis harian
            </Heading>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Digital Company Group berbasis di Bandung, melayani kebutuhan
              teknologi perkantoran, ruko, gudang, hingga instansi. Kami fokus
              pada pengerjaan fisik dan konfigurasi sistem: dari penarikan kabel
              LAN, pemasangan kamera CCTV, sampai penataan ruang server.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-5">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-lg border border-gray-200 bg-gray-50 p-6"
              >
                <h3 className="text-base font-semibold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
