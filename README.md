# ☕ Café Aroma — Landing Page (React)

Landing page de una cafetería desarrollada con **React + Vite**, totalmente
basada en componentes y con un formulario de reservación validado en el frontend.

## 🚀 Tecnologías
- **React 18** — librería de interfaces basada en componentes.
- **Vite** — empaquetador y servidor de desarrollo ultrarrápido.
- **CSS puro** — diseño responsive sin frameworks.

## 📁 Estructura del proyecto
```
src/
├── main.jsx              # Punto de entrada
├── App.jsx               # Componente raíz (une todas las secciones)
├── styles.css            # Estilos globales (mismo diseño que Vue)
├── data/
│   └── menu.js           # Datos del menú
└── components/
    ├── Navbar.jsx        # Navegación responsive
    ├── Hero.jsx          # Sección principal
    ├── Menu.jsx          # Lista del menú
    ├── MenuCard.jsx      # Tarjeta de producto (reutilizable)
    ├── About.jsx         # Sección "Nosotros"
    ├── Reservation.jsx   # Formulario con validaciones
    ├── Footer.jsx        # Pie de página
    └── form/             # Campos reutilizables (cada campo = 1 componente)
        ├── InputField.jsx
        ├── SelectField.jsx
        ├── TextAreaField.jsx
        └── Button.jsx
```

> 💡 Cada campo del formulario es un **componente independiente**. Para mover un
> campo de lugar solo cambias su posición en `Reservation.jsx` (copiar/pegar).

## ▶️ Ejecutar en local
```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo -> http://localhost:5173
npm run build    # genera la versión de producción en /dist
npm run preview  # previsualiza la versión de producción
```

## ✅ Validaciones del formulario
- Nombre obligatorio (mínimo 3 caracteres).
- Correo con formato válido.
- Teléfono de 7 a 10 dígitos.
- Fecha obligatoria y no anterior a hoy.
- Número de personas y tipo de mesa obligatorios.

## 🌐 Despliegue
Ver la guía `GUIA.md` en la carpeta principal para desplegar en Vercel.
