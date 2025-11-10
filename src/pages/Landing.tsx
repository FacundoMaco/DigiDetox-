// src/pages/Landing.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { Shield, BarChart3, Heart, Sparkles, ArrowRight, Check, Zap, Lock, TrendingUp, Users, UserPlus, Users2, Play } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-4 border-b border-white/10 backdrop-blur-xl bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">D+</span>
            </div>
            <span className="text-xl font-bold text-white">DigiDetox+</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-gray-300 hover:text-white transition">Sobre Nosotros</Link>
            <Link to="/auth">
              <Button variant="ghost" className="px-4 py-2">Iniciar Sesión</Button>
            </Link>
            <Link to="/auth">
              <Button variant="primary" className="px-6 py-2">Comenzar</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex items-center justify-center px-6 py-20 md:py-32 relative overflow-hidden min-h-[85vh]">
        {/* Efectos de fondo mejorados con animaciones suaves */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]"></div>
          {/* Gradientes adicionales para más profundidad */}
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-purple-500/15 rounded-full blur-[90px]"></div>
        </div>
        
        <div className="text-center max-w-5xl relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md border border-white/20 mb-8 shadow-lg shadow-purple-500/20">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm text-white font-semibold">Bienestar Digital Inteligente</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
              DigiDetox+
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-3 md:mb-4 font-light">
            Control parental inteligente
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">
            y bienestar digital para toda la familia
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20">
            <Link to="/auth">
              <Button variant="primary" className="text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300 flex items-center hover:scale-105">
                <UserPlus className="w-5 h-5 mr-2" />
                Registrarse como padre
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              onClick={() => {
                const url = window.location.origin + '/child-demo';
                window.open(url, '_blank');
              }}
              className="text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl border-2 flex items-center hover:scale-105 transition-all duration-300"
            >
              <Users2 className="w-5 h-5 mr-2" />
              Supervisado
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Check className="w-5 h-5 text-green-400" />
              <span>Gratis para empezar</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Lock className="w-5 h-5 text-blue-400" />
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Configuración rápida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-24 md:py-32 relative z-10 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Características
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Todo lo que necesitas para gestionar el bienestar digital de tu familia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-24">
            {[
              { 
                icon: Shield, 
                title: 'Control Parental', 
                desc: 'Gestiona el tiempo de pantalla de tus hijos con límites inteligentes y bloqueos automáticos',
                color: 'indigo',
                features: ['Límites por app', 'Bloqueos automáticos', 'Horarios personalizados']
              },
              { 
                icon: BarChart3, 
                title: 'Reportes Detallados', 
                desc: 'Visualiza estadísticas y patrones de uso con gráficas interactivas y análisis profundos',
                color: 'purple',
                features: ['Gráficas en tiempo real', 'Análisis de patrones', 'Exportación de datos']
              },
              { 
                icon: Heart, 
                title: 'Bienestar Digital', 
                desc: 'Fomenta hábitos saludables de tecnología con gamificación y recompensas positivas',
                color: 'pink',
                features: ['Sistema de logros', 'Recompensas', 'Desafíos familiares']
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              const colorClasses = {
                indigo: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
                purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
                pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
              };
              
              return (
                <div 
                  key={i} 
                  className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${colorClasses[feature.color as keyof typeof colorClasses]} mb-6 md:mb-8 border-2 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">{feature.desc}</p>
                  <ul className="space-y-2 md:space-y-3">
                    {feature.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm md:text-base text-gray-400">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Separada y consistente */}
      <section className="px-6 py-24 md:py-32 relative z-10 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: '10K+', label: 'Familias activas', icon: Users },
              { number: '50K+', label: 'Horas monitoreadas', icon: BarChart3 },
              { number: '98%', label: 'Satisfacción', icon: Heart },
              { number: '24/7', label: 'Soporte disponible', icon: Zap },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mb-4 md:mb-6">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
                  </div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:py-32 relative z-10 bg-gradient-to-b from-slate-900/50 to-slate-900">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 lg:p-20 border border-white/20 shadow-2xl relative overflow-hidden">
          {/* Efectos de fondo adicionales */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 mb-6 md:mb-8 border border-yellow-400/30">
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
              Únete a miles de familias que ya están mejorando su bienestar digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/auth">
                <Button variant="primary" className="text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/70 flex items-center hover:scale-105 transition-all duration-300">
                  Crear cuenta gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                onClick={() => {
                  window.location.href = '/child-demo';
                }}
                className="text-lg px-8 md:px-10 py-4 md:py-5 rounded-xl border-2 border-white/30 flex items-center hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Probar la App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 border-t border-white/10 relative z-10 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">D+</span>
                </div>
                <span className="text-lg font-bold text-white">DigiDetox+</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bienestar digital para toda la familia
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Producto</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link to="/about" className="hover:text-white transition">Sobre nosotros</Link></li>
                <li><Link to="/auth" className="hover:text-white transition">Iniciar sesión</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition">Términos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Soporte</a></li>
                <li><a href="#" className="hover:text-white transition">Email</a></li>
                <li><a href="#" className="hover:text-white transition">Documentación</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
            <p>© 2025 DigiDetox+. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
