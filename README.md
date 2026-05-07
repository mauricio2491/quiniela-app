# 🏆 Quiniela App

Aplicación de quiniela construida con **Vue 3**, **Vite**, **Vue Router** y **Pinia**.

## 🚀 Características

- ✅ **Login** - Autenticación con usuario admin/admin
- ✅ **Home** - Página de inicio con información general
- ✅ **Tabla de Posiciones** - Ranking de participantes
- ✅ **Protección de Rutas** - Solo usuarios autenticados pueden acceder
- ✅ **Almacenamiento Local** - Sesión persistente con localStorage
- ✅ **Diseño Responsivo** - Interface moderna y atractiva

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview de producción
npm run preview
```

## 📝 Credenciales de Prueba

```
Usuario: admin
Contraseña: admin
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── Navbar.vue
├── views/
│   ├── Login.vue
│   ├── Home.vue
│   └── Standings.vue
├── stores/
│   ├── auth.js (Gestión de autenticación)
│   └── quiniela.js (Datos de quiniela)
├── router/
│   └── index.js (Configuración de rutas)
├── App.vue
└── main.js
```

## 🌍 Deployment en Azure

### Paso 1: Build para producción
```bash
npm run build
```

### Paso 2: Crear archivo web.config (Ya incluido)
El archivo `web.config` ya está configurado para Azure App Service.

### Paso 3: Subir a Azure
1. Ve a Azure Portal
2. Crea un nuevo App Service (Node.js)
3. Sube la carpeta `dist/` generada
4. Configura las variables de entorno si es necesario

## 🔧 Próximas Mejoras

- [ ] Integrar API REST para datos reales
- [ ] Base de datos (MongoDB, SQL Server)
- [ ] Sistema de registro de nuevos usuarios
- [ ] Administración de quinielas
- [ ] Cálculo automático de puntos
- [ ] Notificaciones en tiempo real
- [ ] Panel de administrador

## 📦 Dependencias

- **Vue 3** - Framework progresivo
- **Vite** - Build tool moderno
- **Vue Router** - Enrutamiento
- **Pinia** - Gestión de estado

## 📄 Licencia

MIT
