
# Hush Puppies Web - Catálogo de Calzado

Este proyecto es una tienda web de productos Hush Puppies, construida en **Vue 3** con **Vite** como bundler, utilizando **Pinia** para gestión de estado, **TailwindCSS** para estilos, e integración de assets locales para imagenes de productos.

---

## Tecnologí­as y libreri­as utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Pinia](https://pinia.vuejs.org/) â State management
- [Vue Router](https://router.vuejs.org/) Navegación (opcional si aplica)
- [Tailwind CSS](https://tailwindcss.com/) Framework de estilos
- [Vue3 Toastify](https://vue3-toastify.js.org/) Notificaciones
- `import.meta.glob` Para carga dinámica de imagenes

---

## ð Instalación del proyecto

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/tu-repo.git
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

4. **Compilar para producción**

```bash
npm run build
```

5. **Previsualizar build**

```bash
npm run preview
```

---

## ð Estructura de carpetas

```
src/
âââ assets/              # Imágenes de productos (ej: .jpg)
âââ components/          # Componentes reutilizables (ProductCard, ProductDetail, etc.)
âââ stores/              # Pinia stores (products, cart, sizes)
âââ views/               # Vistas principales (Home, Detail, etc.)
âââ App.vue
âââ main.js
```

---

## ð Notas adicionales

- Las imágenes se importan dinámicamente con `import.meta.glob`, por lo tanto deben estar ubicadas en `src/assets` y ser .jpg.
- Algunas funciones de recomendados (`productsSuggest`), producto aleatorio (`randomProduct`) y tallas (`getSizes`) provienen de los stores en `@/stores/`.
- Usa `vue3-toastify` para mostrar notificaciones como "Producto agregado al carrito".

---

##  Dependencias clave

```bash
npm install vue@^3
npm install vite
npm install pinia
npm install vue3-toastify
npm install tailwindcss postcss autoprefixer -D
```

### Configuración TailwindCSS

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

MIT año 2025
