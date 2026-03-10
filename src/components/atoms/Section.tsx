interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'blue' | 'gradient' | 'dark';
  py?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  id?: string;
}

export default function Section({
  children,
  className = '',
  bgColor = 'white',
  py = 'lg',
  id,
}: SectionProps) {
  const bgColorStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-600',
    gradient:
      'bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 relative overflow-hidden',
    dark: 'bg-gray-900',
  };

  const pyStyles = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
    '2xl': 'py-32',
  };

  return (
    <section id={id} className={`${bgColorStyles[bgColor]} ${pyStyles[py]} ${className}`}>
      {children}
    </section>
  );
}
