import { Heading, Text } from "../atoms";

interface BenefitCardProps {
  icon?: string;
  title: string;
  description: string;
  color: "blue" | "teal" | "green" | "purple";
  stats?: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
  color,
  stats,
}: BenefitCardProps) {
  const colorStyles = {
    blue: {
      gradient: "from-blue-600 to-blue-700",
      light: "bg-blue-100",
      text: "text-blue-600",
      ring: "ring-blue-200",
    },
    teal: {
      gradient: "from-teal-500 to-teal-600",
      light: "bg-teal-100",
      text: "text-teal-600",
      ring: "ring-teal-200",
    },
    green: {
      gradient: "from-green-500 to-green-600",
      light: "bg-green-100",
      text: "text-green-600",
      ring: "ring-green-200",
    },
    purple: {
      gradient: "from-purple-600 to-purple-700",
      light: "bg-purple-100",
      text: "text-purple-600",
      ring: "ring-purple-200",
    },
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
      {/* Top Gradient Bar */}
      <div className={`h-2 bg-gradient-to-r ${colorStyles[color].gradient}`} />

      <div className="p-6">
        {/* Icon & Stats Row */}
        <div className="flex items-center justify-between mb-4">
          {icon && (
            <div
              className={`w-14 h-14 ${colorStyles[color].light} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-3xl">{icon}</span>
            </div>
          )}
          {stats && (
            <div
              className={`px-4 py-2 ${colorStyles[color].light} ${colorStyles[color].text} rounded-full text-sm font-bold`}
            >
              {stats}
            </div>
          )}
        </div>

        {/* Title */}
        <Heading level={3} color="dark" className="text-lg font-bold mb-3">
          {title}
        </Heading>

        {/* Description */}
        <Text color="light" size="sm" className="leading-relaxed">
          {description}
        </Text>

        {/* Bottom Accent */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
}
