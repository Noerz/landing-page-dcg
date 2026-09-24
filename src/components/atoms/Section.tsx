interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'white' | 'gray' | 'blue' | 'dark';
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
    gray: 'bg-gray-50 border-y border-gray-100',
    blue: 'bg-blue-600 text-white',
    dark: 'bg-gray-900 text-white',
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
