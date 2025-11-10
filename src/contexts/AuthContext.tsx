// src/contexts/AuthContext.tsx

import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type UserRole = 'parent' | 'child' | null;
type User = {
  email: string;
  role: UserRole;
  name: string;
};

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  selectRole: (role: 'parent' | 'child') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, _password: string) => {
    // Simulación de login - siempre funciona
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({ email, role: null, name: email.split('@')[0] });
  };

  const register = async (email: string, _password: string, name: string) => {
    // Simulación de registro - siempre funciona
    await new Promise(resolve => setTimeout(resolve, 500));
    setUser({ email, role: null, name });
  };

  const selectRole = (role: 'parent' | 'child') => {
    if (user) {
      // Actualizar el estado de forma síncrona
      setUser(prev => prev ? { ...prev, role } : null);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, selectRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

