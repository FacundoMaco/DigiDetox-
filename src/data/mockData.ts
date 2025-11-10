// src/data/mockData.ts

export interface App {
  id: string;
  name: string;
  icon: string;
  category: string;
  timeUsed: number; // en minutos
  timeLimit: number; // en minutos
  status: 'active' | 'blocked' | 'warning';
}

export interface Child {
  id: string;
  name: string;
  avatar?: string;
  totalScreenTime: number;
  apps: App[];
}

export interface Logro {
  id: string;
  title: string;
  description: string;
  icon: string;
  points: number;
  completed: boolean;
  completedDate?: string;
  category: 'tiempo' | 'actividad' | 'desconexion' | 'social';
}

export interface ActividadFisica {
  pasos: number;
  metaPasos: number;
  minutosActivos: number;
  metaMinutos: number;
  calorias: number;
  distancia: number; // en km
  historialSemanal: {
    dia: string;
    pasos: number;
    minutos: number;
  }[];
}

export interface Reto {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  puntos: number;
  completado: boolean;
  fechaCompletado?: string;
  progreso: number; // 0-100
  tipo: 'diario' | 'semanal' | 'mensual';
}

export const mockApps: App[] = [
  {
    id: '1',
    name: 'TikTok',
    icon: '🎵',
    category: 'App de Redes Sociales',
    timeUsed: 197, // 3h 17min
    timeLimit: 240,
    status: 'warning',
  },
  {
    id: '2',
    name: 'Instagram',
    icon: '📷',
    category: 'App de Redes Sociales',
    timeUsed: 265, // 4h 25min
    timeLimit: 180,
    status: 'blocked',
  },
  {
    id: '3',
    name: 'YouTube',
    icon: '▶️',
    category: 'App de Streaming',
    timeUsed: 517, // 8h 37min
    timeLimit: 480,
    status: 'blocked',
  },
  {
    id: '4',
    name: 'Clash Royale',
    icon: '⚔️',
    category: 'App de Juegos',
    timeUsed: 225, // 3h 45min
    timeLimit: 180,
    status: 'blocked',
  },
  {
    id: '5',
    name: 'Google',
    icon: '🔍',
    category: 'App de Educación',
    timeUsed: 45,
    timeLimit: 120,
    status: 'active',
  },
];

export const mockChildren: Child[] = [
  {
    id: '1',
    name: 'Mikhail',
    totalScreenTime: 2537, // 42h 17min en minutos
    apps: mockApps,
  },
  {
    id: '2',
    name: 'Valeria',
    totalScreenTime: 270, // 4h 30min
    apps: mockApps.slice(0, 3),
  },
];

export const mockStats = {
  weeklyScreenTime: 2537, // minutos
  dailyAverage: 362, // 6h 2min
  percentageChange: -20, // 20% menos que la semana pasada
  sleepHours: [8, 6, 8, 7, 9, 6, 7],
  physicalActivity: {
    movement: { current: 240, goal: 350 },
    exercise: { current: 27, goal: 40 },
    standing: { current: 3, goal: 5 },
  },
};

export const mockLogros: Logro[] = [
  {
    id: '1',
    title: 'Sin redes por 1 hora',
    description: 'Mantente desconectado de redes sociales por una hora completa',
    icon: '🔌',
    points: 50,
    completed: true,
    completedDate: '2025-01-15',
    category: 'desconexion',
  },
  {
    id: '2',
    title: 'Equilibrio perfecto',
    description: 'Mantén tu tiempo de pantalla dentro del límite por 3 días seguidos',
    icon: '⚖️',
    points: 100,
    completed: true,
    completedDate: '2025-01-14',
    category: 'tiempo',
  },
  {
    id: '3',
    title: 'Caminante activo',
    description: 'Camina más de 5000 pasos en un día',
    icon: '🚶',
    points: 75,
    completed: true,
    completedDate: '2025-01-13',
    category: 'actividad',
  },
  {
    id: '4',
    title: 'Desconexión nocturna',
    description: 'No uses el teléfono 2 horas antes de dormir',
    icon: '🌙',
    points: 80,
    completed: false,
    category: 'desconexion',
  },
  {
    id: '5',
    title: 'Semana equilibrada',
    description: 'Completa 5 días con tiempo de pantalla equilibrado',
    icon: '📅',
    points: 150,
    completed: false,
    category: 'tiempo',
  },
  {
    id: '6',
    title: 'Hora de ejercicio',
    description: 'Realiza 30 minutos de actividad física',
    icon: '💪',
    points: 100,
    completed: false,
    category: 'actividad',
  },
];

export const mockActividadFisica: ActividadFisica = {
  pasos: 6842,
  metaPasos: 10000,
  minutosActivos: 27,
  metaMinutos: 60,
  calorias: 245,
  distancia: 4.2,
  historialSemanal: [
    { dia: 'Lun', pasos: 5234, minutos: 22 },
    { dia: 'Mar', pasos: 7891, minutos: 35 },
    { dia: 'Mié', pasos: 6543, minutos: 28 },
    { dia: 'Jue', pasos: 8123, minutos: 42 },
    { dia: 'Vie', pasos: 6842, minutos: 27 },
    { dia: 'Sáb', pasos: 0, minutos: 0 },
    { dia: 'Dom', pasos: 0, minutos: 0 },
  ],
};

export const mockRetos: Reto[] = [
  {
    id: '1',
    titulo: 'Desconexión matutina',
    descripcion: 'No uses el teléfono durante la primera hora del día',
    icono: '☀️',
    puntos: 50,
    completado: true,
    fechaCompletado: '2025-01-15',
    progreso: 100,
    tipo: 'diario',
  },
  {
    id: '2',
    titulo: 'Camina 10,000 pasos',
    descripcion: 'Completa 10,000 pasos en un día',
    icono: '🚶',
    puntos: 100,
    completado: false,
    progreso: 68,
    tipo: 'diario',
  },
  {
    id: '3',
    titulo: 'Semana sin excesos',
    descripcion: 'Mantén tu tiempo de pantalla equilibrado toda la semana',
    icono: '📱',
    puntos: 200,
    completado: true,
    fechaCompletado: '2025-01-12',
    progreso: 100,
    tipo: 'semanal',
  },
  {
    id: '4',
    titulo: 'Hora de ejercicio diaria',
    descripcion: 'Realiza 1 hora de ejercicio durante 5 días',
    icono: '💪',
    puntos: 150,
    completado: false,
    progreso: 60,
    tipo: 'semanal',
  },
  {
    id: '5',
    titulo: 'Mes equilibrado',
    descripcion: 'Mantén un equilibrio digital durante todo el mes',
    icono: '🎯',
    puntos: 500,
    completado: false,
    progreso: 45,
    tipo: 'mensual',
  },
];

