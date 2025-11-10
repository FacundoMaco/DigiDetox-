// src/pages/About.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/shared/Button';
import { Target, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Sobre DigiDetox+</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una solución integral para el bienestar digital de tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <Target className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Nuestra Misión</h3>
            <p className="text-gray-300">
              Ayudar a las familias a crear hábitos digitales saludables mediante herramientas inteligentes y educación.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Para Familias</h3>
            <p className="text-gray-300">
              Diseñado pensando en padres e hijos, con interfaces intuitivas y controles flexibles.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <Heart className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Bienestar Digital</h3>
            <p className="text-gray-300">
              Fomentamos el equilibrio entre tecnología y vida real mediante gamificación positiva.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/auth">
            <Button variant="primary" className="text-lg px-8 py-4">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

