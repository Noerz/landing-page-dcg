import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Container } from "../atoms";

const capabilities = [
  "Instalasi & pemeliharaan CCTV",
  "Jaringan LAN, WiFi & internet kantor",
  "Server, penyimpanan & backup data",
  "Pengadaan perangkat IT bergaransi",
];

export default function Hero() {
  return (
    <section className="relative bg-gray-900 pt-32 pb-20 text-white md:pt-40 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-blue-400">
            Digital Company Group &middot; Bandung
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Instalasi CCTV, Jaringan,
            <br />
            dan IT Support untuk Bisnis Anda
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Kami mengerjakan pemasangan CCTV, pembangunan jaringan kantor, dan
            perawatan server untuk perusahaan di Bandung dan sekitarnya.
            Dikerjakan teknisi sendiri, bukan dialihkan ke pihak ketiga.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3.5 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              Konsultasi Gratis
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-transparent px-7 py-3.5 text-base font-medium text-gray-200 transition-colors duration-200 hover:bg-gray-800"
            >
              Lihat Layanan
            </a>
          </div>

          <ul className="mt-16 grid gap-x-8 gap-y-3 border-t border-gray-800 pt-8 text-sm text-gray-400 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
