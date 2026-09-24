import type { ComponentType, SVGProps } from "react";

interface BenefitCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export default function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <article className="border-l-2 border-blue-600 pl-5">
      <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
      <h3 className="mt-4 text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>
    </article>
  );
}
