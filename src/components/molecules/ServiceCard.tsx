import { Icon, Text } from '../atoms';

interface ServiceCardProps {
  icon: 'cctv' | 'network' | 'windows' | 'server' | 'devices' | 'support';
  title: string;
  description: string;
  features?: string[];
  category?: string;
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between min-h-[320px] border border-gray-100 overflow-hidden">
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-50 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
          <Icon type={icon} size="lg" className="text-blue-600 group-hover:text-white transition-colors duration-500" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        
        {/* Description */}
        <Text size="sm" color="light" className="group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
          {description}
        </Text>
      </div>
      
      {/* Features */}
      {features && (
        <div className="relative z-10 flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-500">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-500"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
      
      {/* Hover Arrow */}
      {/* <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div> */}
    </div>
  );
}
