// src/layouts/ParentLayout.tsx


interface ParentLayoutProps {
  children: React.ReactNode;
}

export function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar + Topbar se agregarán después */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

