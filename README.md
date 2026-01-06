# Hoteles Mundo Maya — Maquetado React + Tailwind

Maquetado Base:
https://hoteles-grupo-mundo-maya-dc2ca0.webflow.io/

Este proyecto replica el layout del maquetado de Webflow y deja un **placeholder** para integrar después el **Booking Engine API** (Cloudbeds u otro PMS).

## 🚀 Stack
- Vite + React 18
- Tailwind CSS
- (Opcional) React Router, shadcn/ui

## 📦 Cómo ejecutar
```bash
# 1) Instalar dependencias
npm i

# 2) Levantar en desarrollo
npm run dev

# 3) Build de producción
npm run build
npm run preview
```

## 📁 Estructura
```
hoteles-mm/
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md
```

## 🔌 Integrar el Booking Engine API
En `src/App.jsx` busca el componente `BookingWidgetPlaceholder`. Ahí podrás pegar el **script** o **iframe** del motor de reservación. Recomendación:
- Crear un componente `BookingEngine.jsx` que acepte props del proveedor (p.ej. Cloudbeds) para poder alternar o cambiar de PMS en el futuro sin tocar el resto del layout.
- Asegurar carga **asíncrona** del script para no bloquear el render.

## 🧩 Accesibilidad y buenas prácticas
- Botones y anclas con `aria-label` cuando aplique.
- Contraste y foco visibles por defecto (Tailwind).
- Imágenes con `alt` descriptivo.

## 🌐 Despliegue rápido
- **Netlify**: conectar repo → build command: `npm run build` → publish dir: `dist`
- **Cloudflare Pages**: framework preset Vite → build `npm run build`, output `dist`
- **GCP**: subir `/dist` a Cloud Storage + Cloud CDN + HTTPS LB

## 📝 Créditos
- Imágenes de Unsplash / Picsum como placeholders (cámbialas por assets oficiales).
- Textos de ejemplo tomados del maquetado compartido.
```

