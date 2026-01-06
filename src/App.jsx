/*
  Hoteles Mundo Maya — Maquetado base en React + Tailwind
  ------------------------------------------------------------------
  Objetivo: replicar el layout del maquetado Webflow indicado, listo para
  integrar más adelante el Booking Engine API (widget/iframe/script).

  ▶️ Stack (sugerido para proyecto real)
     - Vite + React 18
     - Tailwind CSS
     - React Router (si habrá más páginas)
     - shadcn/ui (opcional)

  🚀 Cómo usar este componente en un proyecto Vite:
     1) npm create vite@latest hoteles-mm -- --template react
     2) cd hoteles-mm && npm i && npm i -D tailwindcss postcss autoprefixer
     3) npx tailwindcss init -p
     4) Configura tailwind.config.js y ./index.css (ver docs de Tailwind)
     5) Copia este archivo como src/App.jsx y reemplaza el contenido por el de abajo.
     6) npm run dev

  🔌 Placeholder de Booking Engine:
     - Busca <BookingWidgetPlaceholder /> en el código para ver dónde incrustar
       el script/iframe del motor de reservaciones cuando esté listo.

  ✍️ Notas de diseño:
     - Se priorizó un layout limpio, responsive y accesible.
     - Las imágenes del maquetado original se usan como placeholders.
     - Los textos provienen del maquetado compartido.

  📞 Datos de contacto (según maquetado):
     - Call Center: 5544400662
     - WhatsApp: https://wa.me

*/

import { useEffect, useState } from "react";

// Utilidad: clases container para ancho máximo estándar
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

// --- NAVBAR -------------------------------------------------------------
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <Container className="flex items-center justify-between py-3">
        <a href="#inicio" className="font-semibold tracking-wide">Hoteles grupo mundo maya</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#inicio" className="hover:underline">Inicio</a>
          <a href="https://grupoolmecamayamexica.com.mx" className="hover:underline" target="_blank" rel="noreferrer">¿Quiénes somos?</a>
          <a href="#promociones" className="hover:underline">Promociones</a>
          <a href="#paquetes" className="hover:underline">Paquetes de verano</a>
          {/* Menú Hoteles (puede ser dropdown real si se requiere) */}
          <div className="relative group">
            <button className="hover:underline">Hoteles</button>
            <div className="absolute hidden group-hover:block bg-white shadow rounded-lg p-3 mt-2 w-64">
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Tulum</a></li>
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Tulum Aeropuerto</a></li>
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Chichén Itzá</a></li>
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Nuevo Uxmal</a></li>
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Edzná</a></li>
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Calakmul</a></li>
                <li><a className="hover:underline" href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Palenque</a></li>
              </ul>
            </div>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-slate-200 hover:bg-slate-50">Contáctanos</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">☰</button>
      </Container>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <Container className="py-4 flex flex-col gap-3 text-sm">
            <a href="#inicio">Inicio</a>
            <a href="https://grupomundomaya.com" target="_blank" rel="noreferrer">¿Quiénes somos?</a>
            <a href="#promociones">Promociones</a>
            <a href="#paquetes">Paquetes de verano</a>
            <details>
              <summary className="cursor-pointer">Hoteles</summary>
              <ul className="pl-4 list-disc mt-2 space-y-1">
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Tulum</a></li>
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Tulum Aeropuerto</a></li>
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Chichén Itzá</a></li>
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Nuevo Uxmal</a></li>
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Edzná</a></li>
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Calakmul</a></li>
                <li><a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer">Palenque</a></li>
              </ul>
            </details>
            <a href="#contacto" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-slate-200 w-max">Contáctanos</a>
          </Container>
        </div>
      )}
    </header>
  );
}

// --- HERO ---------------------------------------------------------------
function Hero() {
  return (
    <section id="inicio" className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-100 to-white"/>
      <Container className="grid lg:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Hoteles grupo mundo maya</h1>
          <p className="mt-3 text-slate-600">Aventúrate en un viaje inolvidable por el sureste mexicano.</p>
          <div className="mt-6">
            <a href="#paquetes" className="inline-flex items-center gap-2 rounded-full px-5 py-2 ring-1 ring-slate-300 hover:bg-slate-50">Ver paquetes</a>
          </div>
        </div>
        {/* Imagen placeholder */}
        <div className="aspect-[16/10] rounded-2xl ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1526775106625-2f13a0c0bfb8?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
      </Container>
    </section>
  );
}

// --- PAQUETES DE VERANO -------------------------------------------------
function SummerPackages() {
  const items = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Paquete ${i + 1}`,
    img: `https://picsum.photos/seed/paquete${i}/800/600`,
  }));
  return (
    <section id="paquetes" className="py-16" aria-labelledby="heading-paquetes">
      <Container>
        <div className="max-w-xl">
          <p className="uppercase tracking-wider text-sm">Nuestros Paquetes</p>
          <h2 id="heading-paquetes" className="text-2xl sm:text-3xl font-bold">de verano</h2>
          <p className="mt-2 text-slate-600">Experimenta el lujo entre la majestuosa selva maya, donde el legado ancestral y la comodidad de un hotel de cuatro estrellas se fusionan en una experiencia única. Vive #UnVeranoEnElMundoMaya.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(card => (
            <article key={card.id} className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200">
                <img alt="Paquete" src={card.img} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
              </div>
              <h3 className="mt-3 font-medium">{card.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// --- SECCIÓN "EL CORAZÓN..." -------------------------------------------
function HeartSection() {
  return (
    <section className="py-16 bg-slate-50">
      <Container className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">EL CORAZÓN DEL SURESTE MEXICANO</h2>
          <p className="text-slate-700">¿Por qué elegir un solo destino cuando puedes tenerlos todos? Nuestra increíble red de hoteles, te abre las puertas a un mundo de maravillas arqueológicas.</p>
          <a href="https://grupomundomaya.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2 ring-1 ring-slate-300 hover:bg-white">Saber más</a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[4/3] rounded-2xl ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1535430163334-677698f7f565?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
          <div className="aspect-[4/3] rounded-2xl ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1548704806-0a274b5689b0?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
        </div>
      </Container>
    </section>
  );
}

// --- ZONAS ARQUEOLÓGICAS ------------------------------------------------
function ArchaeologicalZones() {
  const zonas = [
    { name: "Tulum", href: "https://www.inah.gob.mx" },
    { name: "Chichén Itzá", href: "https://inah.gob.mx" },
    { name: "Uxmal", href: "https://www.inah.gob.mx" },
    { name: "Edzná", href: "https://www.inah.gob.mx" },
    { name: "Calakmul", href: "https://inah.gob.mx" },
    { name: "Palenque", href: "https://inah.gob.mx" },
  ];
  return (
    <section className="py-16" aria-labelledby="heading-zonas">
      <Container>
        <h2 id="heading-zonas" className="text-2xl sm:text-3xl font-bold">Zonas arqueológicas</h2>
        <p className="mt-2 text-slate-700">Estamos ubicados a solo minutos de las principales y emblemáticas zonas arqueológicas mayas...</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {zonas.map(z => (
            <a key={z.name} href={z.href} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-full ring-1 ring-slate-200 hover:bg-slate-50">{z.name}</a>
          ))}
        </div>
      </Container>
    </section>
  );
}

// --- BUSINESS CLASS -----------------------------------------------------
function BusinessClass() {
  return (
    <section className="py-16 bg-slate-50" aria-labelledby="heading-bclass">
      <Container className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 space-y-4">
          <h2 id="heading-bclass" className="text-2xl sm:text-3xl font-bold">Business Class</h2>
          <p className="text-slate-700">A metros del Aeropuerto Internacional de Tulum... Esta tú conexión perfecta entre negocios y paraíso. ‍Hospedate en nuestro "Hotel Tulum Aeropuerto", ya sea que vengas por trabajo o estés en tránsito hacia tu próxima aventura, aquí encontrarás el descanso ideal con el toque vibrante de Tulum. ‍"Hospédate inteligente, viaja sin límites"</p>
          <a href="https://hotels.cloudbeds.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-2 ring-1 ring-slate-300 hover:bg-white">Reservar</a>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <div className="aspect-[4/3] rounded-2xl ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
          <div className="aspect-[4/3] rounded-2xl ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
        </div>
      </Container>
    </section>
  );
}

// --- CTA: ¿QUÉ DESTINO DESCUBRIRÁS HOY? --------------------------------
function DestinoCTA() {
  return (
    <section className="py-16" aria-labelledby="heading-destino">
      <Container className="text-center">
        <h2 id="heading-destino" className="text-2xl sm:text-3xl font-bold">¿QuÉ destino descubriras hoy?</h2>
        <div className="mt-6">
          <a href="#booking" className="inline-flex items-center gap-2 rounded-full px-5 py-2 ring-1 ring-slate-300 hover:bg-slate-50">Reservar ahora</a>
        </div>
      </Container>
    </section>
  );
}

// --- MÁS CONTENIDO ------------------------------------------------------
function RelatedContent() {
  const posts = new Array(3).fill(0).map((_, i) => ({
    id: i + 1,
    title: `Contenido ${i + 1}`,
    img: `https://picsum.photos/seed/post${i}/800/600`,
  }));
  return (
    <section className="py-16 bg-slate-50" aria-labelledby="heading-rel">
      <Container>
        <h2 id="heading-rel" className="text-2xl sm:text-3xl font-bold text-center">Más contenido relacionado...</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200">
                <img alt="Contenido" src={p.img} className="h-full w-full object-cover group-hover:scale-[1.02] transition" />
              </div>
              <h3 className="mt-3 font-medium">{p.title}</h3>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// --- FOOTER -------------------------------------------------------------
function Footer() {
  return (
    <footer className="border-t py-10" id="contacto">
      <Container className="grid md:grid-cols-3 gap-8 items-start">
        <div>
          <p className="font-semibold">©2025 Grupo Mundo Maya</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="https://www.hotelesgafsacomm.com" target="_blank" rel="noreferrer" className="hover:underline">Aviso de privacidad integral</a></li>
            <li><a href="https://www.hotelesgafsacomm.com" target="_blank" rel="noreferrer" className="hover:underline">Políticas de reservas</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contáctanos</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="tel:5544400662" className="hover:underline">Call Center: 5544400662</a></li>
            <li><a href="https://wa.me" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Redes</p>
          <div className="mt-3 flex gap-3 text-sm">
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-slate-200" href="#">Facebook</a>
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-slate-200" href="#">Instagram</a>
            <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-slate-200" href="#">TikTok</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// --- BOOKING WIDGET PLACEHOLDER ----------------------------------------
function BookingWidgetPlaceholder() {
  return (
    <section id="booking" className="py-16">
      <Container>
        <div className="rounded-2xl ring-1 ring-dashed ring-slate-300 p-6 bg-white">
          <h2 className="text-xl font-semibold">Booking Engine API — Placeholder</h2>
          <p className="mt-2 text-slate-600">Aquí se incrustará el motor de reservaciones (script o iframe) cuando esté listo. 
            Integra aquí el snippet de Cloudbeds / PMS nuevo y componentízalo para poder alternar proveedores.
          </p>
          <div className="mt-4 aspect-[16/9] rounded-xl bg-slate-100 grid place-items-center">
            <span className="text-sm text-slate-500">Widget/iframe</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

// --- MODAL PROMOCIÓN ----------------------------------------------------
function PromoModal() {
  const [open, setOpen] = useState(false);
  // Simular apertura al cargar (como un pop-up de promoción)
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden">
        <button onClick={() => setOpen(false)} className="absolute right-3 top-3 rounded-full px-2 py-1 ring-1 ring-slate-200" aria-label="Cerrar">×</button>
        <img alt="Promoción Mundo Maya" className="w-full h-64 object-cover" src="https://picsum.photos/seed/promo-mm/1200/600" />
        <div className="p-6">
          <h3 className="text-lg font-semibold">Promoción Mundo Maya</h3>
          <p className="mt-2 text-slate-600">Aprovecha nuestras promos de temporada. *Imagen y copy de ejemplo*</p>
          <div className="mt-4 flex gap-3">
            <a href="#paquetes" className="inline-flex items-center gap-2 rounded-full px-5 py-2 ring-1 ring-slate-300 hover:bg-slate-50">Ver paquetes</a>
            <a href="#booking" className="inline-flex items-center gap-2 rounded-full px-5 py-2 ring-1 ring-slate-300 hover:bg-slate-50">Reservar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- APP ----------------------------------------------------------------
export default function App() {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <Hero />
      <section id="promociones" className="sr-only">Promociones (ancla)</section>
      <SummerPackages />
      <HeartSection />
      <ArchaeologicalZones />
      <BusinessClass />
      <DestinoCTA />
      <RelatedContent />
      <BookingWidgetPlaceholder />
      <Footer />
      <PromoModal />
    </div>
  );
}
