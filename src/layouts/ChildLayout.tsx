// src/layouts/ChildLayout.tsx

import React from 'react';

interface ChildLayoutProps {
  children: React.ReactNode;
}

export function ChildLayout({ children }: ChildLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 md:p-8">
      <div className="relative h-screen w-full bg-white md:h-[800px] md:w-full md:max-w-md md:rounded-3xl md:shadow-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}

