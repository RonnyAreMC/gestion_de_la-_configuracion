# Gestión y despliegue controlado de un sistema usando GitHub y Docker

Proyecto Práctico Integrador — Gestión de la Configuración de Software.

Este repositorio demuestra cómo un equipo organiza, controla y despliega un
sistema de software aplicando control de versiones (GitHub) e infraestructura
como código mediante contenedores (Docker).

El sistema utilizado es una **landing page de una cafetería ("Café Aroma")**
desarrollada con **React + Vite**, basada en componentes y con un formulario
funcional con validaciones en el frontend.

---

## 1. Herramientas utilizadas

| Herramienta | Uso en el proyecto |
|---|---|
| **Git / GitHub** | Control de versiones, ramas, historial de commits y trabajo colaborativo. |
| **React 18** | Librería para construir la interfaz basada en componentes. |
| **Vite** | Empaquetador y servidor de desarrollo; genera el build de producción. |
| **Docker** | Empaqueta el sistema en una imagen y lo ejecuta en un contenedor. |
| **Nginx** | Servidor web que sirve los archivos estáticos dentro del contenedor. |
| **Docker Compose** | Levanta el sistema con un solo comando (punto extra). |

---

## 2. Estructura del repositorio

```
gestion_de_la-_configuracion/
├── Dockerfile              # Imagen multietapa (build con Node + servir con Nginx)
├── docker-compose.yml      # Orquestación del contenedor (punto extra)
├── nginx.conf              # Configuración de Nginx para la SPA
├── .dockerignore           # Archivos excluidos del contexto de build
├── package.json            # Dependencias y scripts del proyecto
├── vite.config.js          # Configuración de Vite
├── index.html              # HTML base
├── README.md               # Este documento
├── docs/
│   └── EVIDENCIAS.md       # Evidencias de estructura, commits y ramas
├── public/
│   └── coffee.svg
└── src/
    ├── main.jsx            # Punto de entrada de React
    ├── App.jsx             # Componente raíz (une las secciones)
    ├── styles.css          # Estilos globales
    ├── data/
    │   └── menu.js         # Datos del menú
    └── components/         # Componentes de la interfaz
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Menu.jsx
        ├── MenuCard.jsx
        ├── About.jsx
        ├── Reservation.jsx
        ├── Footer.jsx
        └── form/           # Cada campo del formulario es un componente
            ├── FormContext.jsx
            ├── CampoNombre.jsx
            ├── CampoCorreo.jsx
            ├── CampoTelefono.jsx
            ├── CampoFecha.jsx
            ├── CampoPersonas.jsx
            ├── CampoMesa.jsx
            ├── CampoComentarios.jsx
            ├── InputField.jsx
            ├── SelectField.jsx
            ├── TextAreaField.jsx
            └── Button.jsx
```

---

## 3. Estrategia de ramas (Git Flow simplificado)

| Rama | Propósito |
|---|---|
| `main` | Versión estable y lista para entregar (producción). |
| `develop` | Integración del trabajo del equipo antes de pasar a `main`. |
| `feature/dockerizacion` | Trabajo de Docker (Dockerfile, nginx, compose). |
| `feature/documentacion` | README y documentación de evidencias. |

Flujo seguido:
1. Se parte de `main` con el código fuente del sistema.
2. Se crea `develop` para integrar cambios.
3. Cada tarea se desarrolla en una rama `feature/*`.
4. Las ramas `feature/*` se fusionan a `develop` con `--no-ff`.
5. Cuando `develop` está estable, se fusiona a `main`.

---

## 4. Roles del equipo

| Rol | Responsabilidad |
|---|---|
| Líder de proyecto | Coordina el trabajo, define ramas y revisa fusiones. |
| Desarrollador frontend | Componentes de la interfaz y formulario. |
| Desarrollador backend | Lógica y validaciones del sistema. |
| Encargado de operaciones / despliegue | Dockerfile, contenedor y despliegue. |
| Documentador | README, evidencias y documento PDF. |

> Cada integrante realiza sus propios commits desde su cuenta de GitHub para que
> el historial muestre la participación individual.

---

## 5. Cómo ejecutar el sistema

### Opción A: con Docker (recomendada)
```bash
# Construir la imagen
docker build -t gestion-config .

# Ejecutar el contenedor
docker run -d -p 8080:80 --name gestion-config-web gestion-config

# Abrir en el navegador:
# http://localhost:8080
```

### Opción B: con Docker Compose (punto extra)
```bash
docker compose up --build
# http://localhost:8080
```

### Opción C: en local (desarrollo)
```bash
npm install
npm run dev      # http://localhost:5173
```

---

## 6. Explicación del Dockerfile

El `Dockerfile` usa **construcción multietapa**:

1. **Etapa `build`** (`node:20-alpine`): instala dependencias y ejecuta
   `npm run build`, generando los archivos estáticos en `/app/dist`.
2. **Etapa `production`** (`nginx:alpine`): copia solo el resultado del build a
   Nginx y lo sirve en el puerto 80.

Ventaja: la imagen final no contiene Node ni `node_modules`, por lo que es
**mucho más liviana y segura**.

---

## 7. Relación con las unidades

- **Unidad 1:** administración del cambio, gestión de versiones, construcción
  del sistema y gestión de entregas (ramas, commits y build con Docker).
- **Unidad 2:** gestión de código fuente, infraestructura como código
  (Dockerfile/compose) y trabajo colaborativo entre desarrollo y operaciones.
