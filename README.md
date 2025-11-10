# DigiDetox+ 🎯

Una aplicación web moderna para el control parental inteligente y bienestar digital familiar.

## 📋 Descripción

DigiDetox+ es una plataforma completa diseñada para ayudar a las familias a gestionar el tiempo de pantalla y fomentar hábitos digitales saludables. La aplicación incluye:

- **Control Parental**: Gestión inteligente del tiempo de pantalla con límites y bloqueos automáticos
- **App para Hijos**: Interfaz gamificada para que los niños vean su bienestar digital y completen desafíos
- **Reportes Detallados**: Visualización de estadísticas y patrones de uso
- **Sistema de Logros**: Gamificación con recompensas y desafíos familiares

## 🚀 Tecnologías

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **React Router** - Navegación
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos
- **Recharts** - Gráficas (preparado para futuras implementaciones)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/digidetox-28h.git

# Entrar al directorio
cd digidetox-28h

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
digidetox-28h/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── BottomNavbar.tsx
│   │   └── shared/      # Componentes compartidos
│   ├── contexts/         # Contextos de React (Auth)
│   ├── data/            # Datos mock y simulados
│   ├── layouts/         # Layouts de páginas
│   ├── pages/           # Páginas principales
│   │   ├── Landing.tsx  # Landing page
│   │   ├── Auth.tsx     # Autenticación
│   │   ├── ChildApp.tsx # App del hijo
│   │   └── ...
│   ├── screens/         # Pantallas de la app del hijo
│   │   ├── HomeScreen.tsx
│   │   ├── LogrosScreen.tsx
│   │   ├── ActividadScreen.tsx
│   │   └── RetosScreen.tsx
│   └── App.tsx          # Componente principal
```

## 🎮 Funcionalidades

### Para Padres
- Dashboard con estadísticas de uso
- Control de límites por aplicación
- Configuración de horarios
- Visualización de reportes

### Para Hijos
- **Home**: Vista del equilibrio digital y tiempo de pantalla
- **Logros**: Sistema de logros y recompensas
- **Actividad Física**: Seguimiento de actividad física
- **Retos Completos**: Desafíos y misiones completadas

## 🎨 Características de Diseño

- Diseño moderno y limpio con modo oscuro
- Interfaz responsive (mobile-first)
- Animaciones suaves y transiciones
- Gamificación con sistema de logros
- UX intuitiva para toda la familia

## 📱 Rutas Principales

- `/` - Landing page
- `/auth` - Autenticación (login/registro)
- `/role-select` - Selección de rol (padre/hijo)
- `/parent/dashboard` - Dashboard del padre
- `/child` - App del hijo (requiere autenticación)
- `/child-demo` - Demo pública de la app del hijo

## 🛠️ Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Preview de la build de producción
npm run lint     # Ejecuta ESLint
```

## 📝 Notas

- Esta es una aplicación MVP/Demo con datos simulados
- La autenticación es simulada (no hay backend real)
- Los datos se generan dinámicamente para demostración
- Diseñada para ser fácilmente extensible con backend real

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está bajo desarrollo.

## 👥 Autores

- Equipo DigiDetox+

---

**Nota**: Este es un proyecto MVP en desarrollo activo. Las funcionalidades están siendo iteradas y mejoradas continuamente.
