// src/App.tsx

import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import { LandingLayout } from './layouts/LandingLayout';
import { ParentLayout } from './layouts/ParentLayout';
import { ChildLayout } from './layouts/ChildLayout';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Auth } from './pages/Auth';
import { RoleSelect } from './pages/RoleSelect';
import { ParentDashboard } from './pages/ParentDashboard';
import ChildApp from './pages/ChildApp';
import { ChildAppDemoPage } from './pages/ChildAppDemoPage';

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Landing Page - Pública */}
      <Route 
        path="/" 
        element={
          <LandingLayout>
            <Landing />
          </LandingLayout>
        } 
      />

      {/* Páginas públicas adicionales */}
      <Route 
        path="/about" 
        element={
          <LandingLayout>
            <About />
          </LandingLayout>
        } 
      />
      
      <Route 
        path="/pricing" 
        element={
          <LandingLayout>
            <Pricing />
          </LandingLayout>
        } 
      />

      {/* Auth - Pública */}
      <Route path="/auth" element={<Auth />} />

      {/* Child App Demo - Pública, para mostrar la app del hijo sin autenticación */}
      <Route 
        path="/child-demo" 
        element={<ChildAppDemoPage />} 
      />

      {/* Role Select - Requiere autenticación, redirige después de login/register */}
      <Route 
        path="/role-select" 
        element={
          user ? <RoleSelect /> : <Navigate to="/auth" replace />
        } 
      />

      {/* Parent Dashboard - Requiere rol padre */}
      <Route 
        path="/parent/*" 
        element={
          user?.role === 'parent' ? (
            <ParentLayout>
              <Routes>
                <Route path="dashboard" element={<ParentDashboard />} />
                <Route path="*" element={<Navigate to="/parent/dashboard" replace />} />
              </Routes>
            </ParentLayout>
          ) : user ? (
            <Navigate to="/role-select" replace />
          ) : (
            <Navigate to="/auth" replace />
          )
        } 
      />

      {/* Child App - Requiere rol hijo */}
      <Route 
        path="/child" 
        element={
          user?.role === 'child' ? (
            <ChildLayout>
              <ChildApp />
            </ChildLayout>
          ) : user ? (
            <Navigate to="/role-select" replace />
          ) : (
            <Navigate to="/auth" replace />
          )
        } 
      />

      {/* Redirect por defecto */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
