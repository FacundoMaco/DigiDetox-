// src/pages/RoleSelect.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Card } from '../components/shared/Card';
import { Users, Smartphone, ArrowRight } from 'lucide-react';

export function RoleSelect() {
  const { selectRole, user } = useAuth();
  const navigate = useNavigate();

  // Redirigir automáticamente si ya tiene un rol seleccionado
  useEffect(() => {
    if (user?.role === 'parent') {
      navigate('/parent/dashboard', { replace: true });
    } else if (user?.role === 'child') {
      navigate('/child', { replace: true });
    }
  }, [user?.role, navigate]);

  const handleRoleSelect = (role: 'parent' | 'child') => {
    // Actualizar el rol primero
    selectRole(role);
    // Navegar inmediatamente - el useEffect también manejará la redirección si es necesario
    setTimeout(() => {
      if (role === 'parent') {
        navigate('/parent/dashboard');
      } else {
        navigate('/child');
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Selecciona tu rol
          </h2>
          <p className="text-xl text-gray-300">
            Elige cómo quieres usar DigiDetox+
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card 
            glass 
            className="cursor-pointer group hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-transparent hover:border-indigo-500/50"
            onClick={() => handleRoleSelect('parent')}
          >
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500/30 to-indigo-600/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 text-indigo-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Padre/Madre</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Accede al dashboard completo para gestionar y monitorear el uso digital de tus hijos
              </p>
              <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold group-hover:gap-4 transition-all">
                Continuar <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Card>
          
          <Card 
            glass 
            className="cursor-pointer group hover:scale-105 transition-all duration-300 active:scale-95 border-2 border-transparent hover:border-purple-500/50"
            onClick={() => handleRoleSelect('child')}
          >
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Hijo/Hija</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Accede a la app móvil simulada para ver tu bienestar digital y logros
              </p>
              <div className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                Continuar <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
