// src/pages/ChildAppDemoPage.tsx

import React from 'react';
import { ChildLayout } from '../layouts/ChildLayout';
import { ChildAppDemo } from './ChildAppDemo';

// Página pública para mostrar la app del hijo sin autenticación
export function ChildAppDemoPage() {
  return (
    <ChildLayout>
      <ChildAppDemo />
    </ChildLayout>
  );
}

