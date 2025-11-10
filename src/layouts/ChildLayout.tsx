// src/layouts/ChildLayout.tsx

import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface ChildLayoutProps {
  children: React.ReactNode;
}

export function ChildLayout({ children }: ChildLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 md:p-8">
      <div className="relative h-screen w-full bg-white md:h-[800px] md:w-full md:max-w-md md:rounded-3xl md:shadow-2xl overflow-hidden">
        {/* Botón para volver a la página principal */}
        <Link
          to="/"
          className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 shadow-md"
          title="Volver a la página principal"
        >
          <X className="h-5 w-5 text-gray-700" />
        </Link>
        {children}
      </div>
    </div>
  );
}

