import { Container, Heading, Section } from "../atoms";
import { ServiceCard } from "../molecules";

const services = [
  {
    icon: "cctv" as const,
    title: "Pemasangan CCTV",
    description:
      "Instalasi kamera CCTV indoor dan outdoor untuk rumah, kantor, dan gudang. Termasuk konfigurasi DVR/NVR dan akses remote via smartphone.",
    features: ["Resolusi HD/2K", "Akses Jarak Jauh", "Rekaman 24 Jam"],
  },
  {
    icon: "network" as const,
    title: "Instalasi Jaringan",
    description:
      "Penarikan kabel LAN, pemasangan access point, dan konfigurasi router untuk jaringan kantor yang stabil.",
    features: ["LAN & WiFi", "Koneksi Stabil", "Jangkauan Luas"],
  },
  {
    icon: "windows" as const,
    title: "Install & Setup OS",
    description:
      "Instalasi Windows, driver, dan software standar kantor untuk PC dan laptop. Termasuk backup data sebelum proses.",
    features: ["Lisensi Resmi", "Optimasi Performa", "Backup Data"],
  },
  {
    icon: "server" as const,
    title: "Server & Maintenance",
    description:
      "Setup server file sharing, konfigurasi NAS, dan perawatan berkala. Monitoring kesehatan hardware dan update keamanan.",
    features: ["Monitoring Rutin", "Backup Terjadwal", "Update Keamanan"],
  },
  {
    icon: "devices" as const,
    title: "Pengadaan Perangkat IT",
    description:
      "Penyediaan printer, access point, router, switch, UPS, dan perangkat IT lainnya dari distributor resmi.",
    features: ["Produk Resmi", "Garansi Pabrikan", "Termasuk Instalasi"],
  },
  {
    icon: "support" as const,
    title: "IT Support",
    description:
      "Bantuan teknis untuk troubleshooting jaringan, komputer, dan perangkat kantor. Bisa datang ke lokasi atau remote.",
    features: ["On-site & Remote", "Respons Cepat", "Kontrak Bulanan"],
  },
];

export default function Services() {
  return (
    <Section bgColor="gray" py="xl" id="services">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Layanan
          </p>
          <Heading level={2} color="dark" className="mt-2 tracking-tight">
            Apa yang kami kerjakan
          </Heading>
          <p className="mt-4 text-base text-gray-600">
            Enam area layanan IT yang kami tangani langsung, dari survei sampai
            serah terima.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
