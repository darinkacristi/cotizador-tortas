# 🎂 Cotizador de Tortas · Dannae Repostería

Aplicación web moderna y responsive donde los clientes pueden **cotizar tortas personalizadas** desde el celular o el computador. Eligen tamaño, sabor, relleno y extras, ven el **precio actualizado en tiempo real** y envían el pedido por **WhatsApp** con un solo clic.

Construida con **React + Vite + TailwindCSS** (JavaScript, sin TypeScript). Lista para subir a GitHub y desplegar en **Vercel**.

---

## ✨ Características

- 🍰 **Cotizador visual e intuitivo** con selección por tarjetas.
- 📐 Selector de **tamaño**, **sabor**, **relleno** (con doble relleno) y **extras** (topper, flores, diseño vintage, pisos extra y delivery).
- 💰 **Precio total en tiempo real** con desglose detallado.
- 📋 **Resumen del pedido** siempre visible (sidebar pegajoso en escritorio, barra fija en móvil).
- 💬 **Botón de WhatsApp** que genera automáticamente el mensaje con el resumen completo.
- 📱 **Mobile-first**: experiencia perfecta en celular y escritorio.
- 🎨 Diseño **pastelería premium**: paleta pastel, tipografía elegante y animaciones suaves.
- ⚡ **Loading states**, **validaciones básicas** y manejo de estado limpio con un hook propio.
- 🧩 **Componentes reutilizables** y arquitectura simple lista para escalar.

---

## 🛠️ Tecnologías

| Herramienta  | Uso                          |
| ------------ | ---------------------------- |
| React 18     | Librería de UI               |
| Vite 5       | Bundler y servidor de dev    |
| TailwindCSS 3| Estilos utility-first        |
| JavaScript   | Lenguaje (sin TypeScript)    |

---

## 🚀 Instalación y comandos

Requiere **Node.js 18 o superior**.

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Compilar para producción (genera /dist)
npm run build

# 4. Previsualizar el build de producción
npm run preview
```

---

## ☁️ Deploy en Vercel

**Opción A — desde la web (recomendada):**

1. Sube el proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com) → **Add New → Project** e importa el repo.
3. Vercel detecta Vite automáticamente. Confirma:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Pulsa **Deploy**. ✅

**Opción B — desde la terminal:**

```bash
npm i -g vercel
vercel        # despliegue de previsualización
vercel --prod # despliegue a producción
```

> El archivo `vercel.json` ya incluye la configuración de build y los *rewrites* para SPA.

---

## ✏️ Cómo personalizar

Casi todo se edita desde **`src/data/pricing.js`**, la única fuente de datos:

| Quieres cambiar...          | Edita...                                |
| --------------------------- | --------------------------------------- |
| Número de WhatsApp          | `MARCA.whatsapp` (formato internacional)|
| Nombre / rubro / Instagram  | `MARCA`                                 |
| Tamaños y precios base      | `TAMANOS`                               |
| Sabores                     | `SABORES`                               |
| Rellenos                    | `RELLENOS`                              |
| Recargo de doble relleno    | `DOBLE_RELLENO_PRECIO`                   |
| Extras y sus precios        | `EXTRAS`                                |

> ⚠️ **Importante:** cambia `MARCA.whatsapp` por tu número real en formato internacional
> sin signos ni espacios. Ejemplo Chile: `56912345678`.

Los **colores de marca** y animaciones están en **`tailwind.config.js`**.

---

## 📱 Mensaje de WhatsApp generado

Al pulsar el botón se abre WhatsApp con un mensaje ya armado, por ejemplo:

```
¡Hola! Quiero cotizar esta torta 🎂

👤 Nombre: María
📅 Fecha del evento: 2026-07-12

🎂 Tamaño: Mediana (15–20 porciones)
🍰 Sabor: Chocolate
🥧 Relleno: Frutos rojos (doble relleno)
✨ Extras: Topper personalizado, Pisos extra x1, Envío a domicilio

💰 Total estimado: $61.000
```

---

## 📁 Estructura del proyecto

```
cotizador-dannae/
├── index.html                 # HTML raíz (carga ./src/main.jsx)
├── package.json
├── vite.config.js             # Vite con base relativa './'
├── tailwind.config.js         # Paleta y animaciones de marca
├── postcss.config.js
├── vercel.json                # Configuración de deploy
├── .gitignore
├── .env.example
├── README.md
└── src/
    ├── main.jsx               # Punto de entrada de React
    ├── App.jsx                # Ensambla la página + loading inicial
    ├── index.css              # Tailwind + estilos globales
    ├── data/
    │   └── pricing.js         # Precios, opciones y datos de marca
    ├── hooks/
    │   └── useQuote.js        # Estado, validación y cálculo
    ├── utils/
    │   └── whatsapp.js        # Construye el mensaje y la URL
    └── components/
        ├── ui/                # Piezas reutilizables
        │   ├── Card.jsx
        │   ├── SectionTitle.jsx
        │   ├── OptionButton.jsx
        │   └── icons.jsx
        ├── LoadingScreen.jsx
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Quoter.jsx         # Layout del formulario + resumen
        ├── CustomerDetails.jsx
        ├── SizeSelector.jsx
        ├── FlavorSelector.jsx
        ├── FillingSelector.jsx
        ├── ExtrasSelector.jsx
        ├── OrderSummary.jsx
        ├── WhatsappButton.jsx
        ├── MobileBar.jsx
        └── Footer.jsx
```

### Notas técnicas

- **Imports relativos** en todo el proyecto (`./` y `../`), sin rutas absolutas `/src/...`, compatibles con Vite y Vercel.
- `vite.config.js` usa `base: './'` para que los assets se referencien de forma relativa.
- Sin dependencias pesadas: las animaciones son CSS puras vía Tailwind → bundle liviano y rápido.

---

Hecho con cariño para **Dannae Repostería** 💜
