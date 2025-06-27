
# Hush Puppies Web - Catalogo de Calzado

Este proyecto es una tienda web de productos Hush Puppies, construida en **Vue 3** con **Vite** como bundler, utilizando **Pinia** para gestiÃ³n de estado, **TailwindCSS** para estilos, e integracion de assets locales para imagenes de productos.

## Requisitos

- Node.js v24.2.0
- npm v11.3.0

## Tecnologi­as y libreria­as utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/) State management
- [Vue Router](https://router.vuejs.org/) Navegacon (opcional si aplica)
- [Tailwind CSS](https://tailwindcss.com/) Framework de estilos
- [Vue3 Toastify](https://vue3-toastify.js.org/) Notificaciones
- `import.meta.glob` Para carga dinÃ¡mica de imagenes

---

## Ã°ÂÂÂ Instalacion del proyecto

1. **Clonar el repositorio**

```bash
git clone https://github.com/Eduard394/app-web.git
cd tu-repo
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Compilar para produccion**

```bash
npm run build
```

5. **Previsualizar build**

```bash
npm run dev
```

---

## Ã°ÂÂÂ Estructura de carpetas

```
src/
assets/              # Imagenes de productos (ej: .jpg)
components/          # Componentes reutilizables (ProductCard, ProductDetail, etc.)
stores/              # Pinia stores (products, cart, sizes)
views/               # Vistas principales (Home, Detail, etc.)
App.vue
main.js
```

---

## Ã°ÂÂÂ Notas adicionales

- Las imagenes se importan dinamicamente con `import.meta.glob`, por lo tanto deben estar ubicadas en `src/assets` y ser .jpg.
- Algunas funciones de recomendados (`productsSuggest`), producto aleatorio (`randomProduct`) y tallas (`getSizes`) provienen de los stores en `@/stores/`.
- Usa `vue3-toastify` para mostrar notificaciones.

---

##  Dependencias clave

```bash
npm install vue@^3
npm install vite
npm install pinia
npm install vue3-toastify
npm install tailwindcss postcss autoprefixer -D
```

### Configuracion TailwindCSS

```bash
npx tailwindcss init -p
```

En `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: []
}
```

En `src/assets/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Y asegurate de importarlo en `main.js`:

```js
import './assets/index.css'
```

---

## Autor

**Eduard Legarda**  
Desarrollador Frontend  

---

## Licencia

MIT ano 2025
