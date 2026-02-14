# La Huerta San Sebastián - Landing Page

Landing page elegante y profesional para las 3 residencias exclusivas de La Huerta San Sebastián en Todos Santos, representadas por Tyson Gargas.

## 🏡 Propiedades Destacadas

- **Casa Nube** - Diseñada por Hector Barroso
- **Casa Entre Patios** - Diseñada por Sergio Ortiz  
- **Casa Portales** - Diseñada por Ana Victoria Pérez-Gil & Saúl Figueroa

## 🚀 Deployment en Vercel

### Paso 1: Preparar el Repositorio en GitHub

1. **Crear un nuevo repositorio en GitHub:**
   - Ve a https://github.com/new
   - Nombre sugerido: `la-huerta-landing`
   - Configuración: Público o Privado (tú decides)
   - NO inicialices con README, .gitignore o licencia

2. **Subir los archivos al repositorio:**
   ```bash
   # En tu terminal, navega a la carpeta donde descargaste estos archivos
   cd /ruta/a/tus/archivos
   
   # Inicializa git
   git init
   
   # Añade todos los archivos
   git add .
   
   # Haz el primer commit
   git commit -m "Initial commit - La Huerta San Sebastián landing page"
   
   # Conecta con tu repositorio de GitHub (reemplaza con tu URL)
   git remote add origin https://github.com/TU-USUARIO/la-huerta-landing.git
   
   # Sube los archivos
   git push -u origin main
   ```

### Paso 2: Deploy en Vercel

1. **Crear cuenta en Vercel:**
   - Ve a https://vercel.com/signup
   - Regístrate con tu cuenta de GitHub

2. **Importar el proyecto:**
   - Click en "Add New Project"
   - Selecciona "Import Git Repository"
   - Autoriza a Vercel para acceder a tus repositorios
   - Selecciona el repositorio `la-huerta-landing`

3. **Configurar el proyecto:**
   - Framework Preset: **Other**
   - Root Directory: `./` (dejar por defecto)
   - Build Command: (dejar vacío)
   - Output Directory: `./` (dejar por defecto)

4. **Deploy:**
   - Click en "Deploy"
   - Espera 30-60 segundos
   - ¡Tu sitio estará live!

## 🖼️ Cómo Reemplazar las Imágenes Placeholder

### Opción 1: Desde los Enlaces que Proporcionaste

Puedes descargar las imágenes directamente de:
- https://ricardoamigorealestate.com/listing-detail/1174868049/-1-Pacific-BCS
- https://ricardoamigorealestate.com/listing-detail/1175162591/-3-Pacific-BCS
- https://ricardoamigorealestate.com/listing-detail/1175165488/-4-Pacific-BCS

### Opción 2: Usar un Servicio de Hosting de Imágenes

1. **Sube las imágenes a Imgur, Cloudinary, o GitHub mismo:**
   - Para GitHub: crea una carpeta `images` en tu repositorio
   - Sube las imágenes ahí
   - Las URLs serán: `https://raw.githubusercontent.com/TU-USUARIO/la-huerta-landing/main/images/nombre-imagen.jpg`

2. **Reemplaza los placeholders en `index.html`:**
   
   Busca estas líneas y reemplaza las URLs:

   **Casa Nube:**
   ```html
   <!-- Línea ~171 -->
   <img src="TU_URL_AQUI" alt="Casa Nube - La Huerta San Sebastián">
   
   <!-- Líneas ~174-176 (galería) -->
   <img src="TU_URL_AQUI" alt="Casa Nube vista 1">
   <img src="TU_URL_AQUI" alt="Casa Nube vista 2">
   <img src="TU_URL_AQUI" alt="Casa Nube vista 3">
   ```

   **Casa Entre Patios:**
   ```html
   <!-- Línea ~239 -->
   <img src="TU_URL_AQUI" alt="Casa Entre Patios - La Huerta San Sebastián">
   
   <!-- Líneas ~242-244 (galería) -->
   <img src="TU_URL_AQUI" alt="Casa Entre Patios vista 1">
   <img src="TU_URL_AQUI" alt="Casa Entre Patios vista 2">
   <img src="TU_URL_AQUI" alt="Casa Entre Patios vista 3">
   ```

   **Casa Portales:**
   ```html
   <!-- Línea ~307 -->
   <img src="TU_URL_AQUI" alt="Casa Portales - La Huerta San Sebastián">
   
   <!-- Líneas ~310-312 (galería) -->
   <img src="TU_URL_AQUI" alt="Casa Portales vista 1">
   <img src="TU_URL_AQUI" alt="Casa Portales vista 2">
   <img src="TU_URL_AQUI" alt="Casa Portales vista 3">
   ```

   **Hero Background:**
   ```css
   /* En styles.css, línea ~140 */
   background-image: url('TU_URL_IMAGEN_HERO');
   ```

3. **Actualiza tu repositorio:**
   ```bash
   git add .
   git commit -m "Update images with real photos"
   git push
   ```

Vercel automáticamente detectará los cambios y re-deployará tu sitio en segundos.

## 📧 Configuración del Formulario

El formulario está configurado para enviar emails directamente a:
- **Email:** tyson@ricardoamigo.com
- **Teléfono:** +52 (612) 234-2763

El formulario usa `mailto:` que abrirá el cliente de correo del usuario con toda la información pre-poblada.

### Si Prefieres un Formulario Backend (Opcional)

Para capturar leads sin depender del cliente de correo del usuario, considera:
1. **Formspree** (https://formspree.io) - Gratis hasta 50 submissions/mes
2. **Netlify Forms** (si cambias a Netlify en vez de Vercel)
3. **Google Forms** integrado vía iframe
4. **EmailJS** (https://www.emailjs.com) - Envía emails desde JavaScript

## 🎨 Personalización

### Colores
Los colores principales están definidos en `styles.css` (líneas 10-20):
- `--terracotta`: Color principal de botones y CTAs
- `--brown-dark`: Color de títulos
- `--sand-light`: Color de fondo

### Tipografía
- **Serif (títulos):** Cormorant Garamond
- **Sans-serif (texto):** Inter

Para cambiar las fuentes, modifica el import de Google Fonts en `index.html` (línea 9).

## 📱 Features

✅ Diseño responsive (móvil, tablet, desktop)
✅ Navegación por tabs entre las 3 casas
✅ Galería de imágenes interactiva
✅ Formulario de contacto optimizado para leads
✅ Animaciones suaves y profesionales
✅ SEO optimizado
✅ Performance optimizado
✅ Estética alineada con Todos Santos y La Huerta

## 🔄 Actualizaciones Futuras

Para hacer cambios después del deployment:
1. Edita los archivos localmente
2. Haz commit y push a GitHub
3. Vercel automáticamente re-deployará

## 📊 Analytics (Opcional)

Para trackear visitantes, considera agregar:
- **Google Analytics 4**
- **Vercel Analytics** (incluido gratis)
- **Hotjar** (para heatmaps)

## 🆘 Soporte

Si tienes preguntas sobre el deployment o necesitas ayuda:
1. Documentación de Vercel: https://vercel.com/docs
2. GitHub Help: https://docs.github.com

## 📄 Licencia

Este proyecto es propiedad de La Huerta San Sebastián / Ricardo Amigo Real Estate.

---

**Desarrollado para Tyson Gargas - Ricardo Amigo Real Estate**  
*La Huerta San Sebastián, Todos Santos, Baja California Sur*
