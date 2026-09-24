import { Icon } from "../atoms";

interface ServiceCardProps {
  icon: "cctv" | "network" | "windows" | "server" | "devices" | "support";
  title: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50">
        <Icon type={icon} size="sm" className="text-blue-600" />
      </div>

      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>

      {features && features.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
          {features.map((f) => (
            <li
              key={f}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
