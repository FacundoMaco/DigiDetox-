// src/components/shared/Card.tsx

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({ children, className = '', glass = false, onClick }: CardProps) {
  const glassStyles = glass 
    ? 'bg-white/5 backdrop-blur-xl border border-white/10' 
    : 'bg-white shadow-lg';
  
  return (
    <div 
      className={`rounded-2xl p-6 ${glassStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

