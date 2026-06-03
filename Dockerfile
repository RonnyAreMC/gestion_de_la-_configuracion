# ============================================================
#  Dockerfile multietapa para la aplicación React (Vite)
#  Etapa 1 (build): compila la aplicación a archivos estáticos
#  Etapa 2 (production): los sirve con Nginx
# ============================================================

# ---------- Etapa 1: construcción ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos primero los manifiestos para aprovechar la cache de Docker
COPY package*.json ./
RUN npm install

# Copiamos el resto del código y generamos el build de producción
COPY . .
RUN npm run build

# ---------- Etapa 2: producción ----------
FROM nginx:alpine AS production

# Copiamos los archivos compilados desde la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración de Nginx para una SPA (Single Page Application)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# El contenedor expone el puerto 80
EXPOSE 80

# Arranca Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
