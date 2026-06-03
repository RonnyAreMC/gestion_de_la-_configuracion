# Evidencias del Proyecto Integrador

Documento de apoyo para el PDF de entrega. Contiene la **estructura del
repositorio**, la **evidencia de commits** y la **evidencia de ramas**.

---

## 1. Estructura del repositorio

```
gestion_de_la-_configuracion/
├── Dockerfile              # Imagen Docker multietapa
├── docker-compose.yml      # Orquestación del contenedor
├── nginx.conf              # Configuración del servidor Nginx
├── .dockerignore           # Exclusiones del contexto de build
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
├── index.html              # HTML base de la aplicación
├── README.md               # Documentación principal
├── docs/
│   └── EVIDENCIAS.md       # Este documento
├── public/                 # Recursos estáticos
└── src/                    # Código fuente (componentes React)
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    └── components/
        └── form/           # Cada campo del formulario es un componente
```

> Para generar este árbol en tu máquina:
> ```bash
> git ls-files | tree --fromfile        # o simplemente: ls -R src
> ```

---

## 2. Evidencia de ramas

El repositorio sigue un **Git Flow simplificado** con las ramas requeridas:

| Rama | Función |
|---|---|
| `main` | Código estable / producción. |
| `develop` | Integración del equipo. |
| `feature/dockerizacion` | Implementación de Docker. |
| `feature/documentacion` | README y evidencias. |

Comandos usados para crear y fusionar ramas:
```bash
git checkout -b develop                      # crear develop desde main
git checkout -b feature/dockerizacion        # crear feature desde develop
# ... trabajo y commits en la feature ...
git checkout develop
git merge --no-ff feature/dockerizacion      # fusionar a develop
git checkout main
git merge --no-ff develop                    # liberar a main
```

Para ver todas las ramas (locales y remotas):
```bash
git branch -a
```

Ramas existentes en este repositorio:
```
  develop
  feature/dockerizacion
  feature/documentacion
* main
```

---

## 3. Evidencia de commits

Cada cambio se registró con un commit descriptivo. Para ver el historial:
```bash
git log --oneline --graph --all
```

Relación sugerida de commits por rol (cada integrante commitea desde su cuenta):

| Rol | Tarea / commit de ejemplo |
|---|---|
| Líder de proyecto | Estructura inicial y fusiones a `main`. |
| Operaciones / despliegue | "Agrega Dockerfile multietapa, nginx y docker-compose". |
| Frontend | Componentes de la interfaz y formulario. |
| Backend | Validaciones del formulario. |
| Documentador | "Documentacion: README y evidencias". |

Historial real del repositorio (`git log --oneline --graph --all`):
```
*   ccb8ae3 Release: dockerizacion y documentacion del sistema
|\
| *   c176ba7 Merge feature/documentacion en develop
| |\
| | * d0791cc Documentacion: README del proyecto integrador y evidencias
| |/
| * 8194767 Merge feature/dockerizacion en develop
|/|
| * 1e1ebd5 Agrega Dockerfile multietapa, nginx y docker-compose
|/
* 04f853a first commit
```

---

## 4. Cómo resolvimos conflictos

- Antes de fusionar, cada integrante actualiza su rama con `git pull origin develop`.
- Si dos personas editan el mismo archivo, Git marca el conflicto; se abre el
  archivo, se eligen los cambios correctos y se confirma con un nuevo commit.
- Se usó `--no-ff` en las fusiones para conservar el historial de cada rama.

---

## 5. Evidencia de ejecución con Docker

```bash
docker build -t gestion-config .
docker run -d -p 8080:80 --name gestion-config-web gestion-config
docker ps                      # muestra el contenedor en ejecución
```

Luego se abre `http://localhost:8080` y se captura la pantalla del sistema
funcionando (incluir esa captura en el PDF).
