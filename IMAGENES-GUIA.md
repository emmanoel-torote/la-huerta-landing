# GUÍA RÁPIDA: Descargar y Reemplazar Imágenes

## 📥 Paso 1: Descargar Imágenes de las Propiedades

### Casa Nube
1. Visita: https://ricardoamigorealestate.com/listing-detail/1174868049/-1-Pacific-BCS
2. Click derecho en cada imagen → "Guardar imagen como..."
3. Nombra las imágenes así:
   - `casa-nube-main.jpg` (imagen principal)
   - `casa-nube-1.jpg` (galería 1)
   - `casa-nube-2.jpg` (galería 2)
   - `casa-nube-3.jpg` (galería 3)

### Casa Entre Patios
1. Visita: https://ricardoamigorealestate.com/listing-detail/1175162591/-3-Pacific-BCS
2. Descarga y nombra:
   - `casa-patios-main.jpg`
   - `casa-patios-1.jpg`
   - `casa-patios-2.jpg`
   - `casa-patios-3.jpg`

### Casa Portales
1. Visita: https://ricardoamigorealestate.com/listing-detail/1175165488/-4-Pacific-BCS
2. Descarga y nombra:
   - `casa-portales-main.jpg`
   - `casa-portales-1.jpg`
   - `casa-portales-2.jpg`
   - `casa-portales-3.jpg`

### Imagen del Hero
Necesitas una imagen panorámica de Todos Santos o La Huerta para el banner principal.
Sugerencia: Busca en el Instagram de La Huerta (@lahuertasansebastian)

## 📁 Paso 2: Organizar las Imágenes

Crea esta estructura en tu proyecto:

```
la-huerta-landing/
├── index.html
├── styles.css
├── script.js
├── images/              ← CREA ESTA CARPETA
│   ├── hero.jpg
│   ├── casa-nube-main.jpg
│   ├── casa-nube-1.jpg
│   ├── casa-nube-2.jpg
│   ├── casa-nube-3.jpg
│   ├── casa-patios-main.jpg
│   ├── casa-patios-1.jpg
│   ├── casa-patios-2.jpg
│   ├── casa-patios-3.jpg
│   ├── casa-portales-main.jpg
│   ├── casa-portales-1.jpg
│   ├── casa-portales-2.jpg
│   └── casa-portales-3.jpg
├── README.md
└── vercel.json
```

## 🔧 Paso 3: Actualizar el HTML

Abre `index.html` y busca/reemplaza:

### Casa Nube (líneas ~171-176)
```html
<!-- ANTES -->
<img src="https://placehold.co/800x600/d4c5b0/ffffff?text=Casa+Nube" alt="Casa Nube">

<!-- DESPUÉS -->
<img src="images/casa-nube-main.jpg" alt="Casa Nube - La Huerta San Sebastián">
```

Repite para cada placeholder, siguiendo el patrón:
- Línea ~174: `images/casa-nube-1.jpg`
- Línea ~175: `images/casa-nube-2.jpg`
- Línea ~176: `images/casa-nube-3.jpg`

### Casa Entre Patios (líneas ~239-244)
```html
<img src="images/casa-patios-main.jpg" alt="Casa Entre Patios">
<img src="images/casa-patios-1.jpg" alt="Vista 1">
<img src="images/casa-patios-2.jpg" alt="Vista 2">
<img src="images/casa-patios-3.jpg" alt="Vista 3">
```

### Casa Portales (líneas ~307-312)
```html
<img src="images/casa-portales-main.jpg" alt="Casa Portales">
<img src="images/casa-portales-1.jpg" alt="Vista 1">
<img src="images/casa-portales-2.jpg" alt="Vista 2">
<img src="images/casa-portales-3.jpg" alt="Vista 3">
```

## 🎨 Paso 4: Actualizar el Hero Background

Abre `styles.css` y busca la línea ~140:

```css
/* ANTES */
.hero {
    background-image: url('https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=2070');
}

/* DESPUÉS */
.hero {
    background-image: url('images/hero.jpg');
}
```

## ⬆️ Paso 5: Subir Todo a GitHub

```bash
# Asegúrate de estar en la carpeta del proyecto
cd la-huerta-landing

# Añade TODAS las imágenes nuevas
git add images/

# Añade los cambios en HTML y CSS
git add index.html styles.css

# Haz commit
git commit -m "Add real property images"

# Sube a GitHub
git push
```

Vercel automáticamente detectará los cambios y actualizará tu sitio en 30-60 segundos.

## ✅ Verificación

Después del deploy, verifica que:
1. ✅ Las imágenes se cargan correctamente
2. ✅ No hay placeholders visibles
3. ✅ Las imágenes de la galería son clicables
4. ✅ El hero background se ve bien

## 🆘 Troubleshooting

**Problema:** Las imágenes no se cargan
- **Solución:** Verifica que la carpeta `images/` esté en la raíz del proyecto
- **Solución:** Asegúrate de que los nombres de archivo coincidan exactamente (case-sensitive)

**Problema:** Las imágenes se ven pixeladas
- **Solución:** Usa imágenes de alta resolución (mínimo 1920x1080 para hero, 800x600 para propiedades)

**Problema:** El sitio tarda mucho en cargar
- **Solución:** Comprime las imágenes usando https://tinypng.com antes de subirlas

## 📸 Alternativa: Usar URLs Directas

Si prefieres no subir imágenes a GitHub, puedes usar URLs directas de otro hosting:

```html
<!-- Ejemplo con Imgur -->
<img src="https://i.imgur.com/ABC123.jpg" alt="Casa Nube">

<!-- Ejemplo con Cloudinary -->
<img src="https://res.cloudinary.com/tu-cuenta/image/upload/v123/casa-nube.jpg" alt="Casa Nube">
```

---

**¿Necesitas ayuda?** Cualquier duda con las imágenes, avísame y te ayudo paso por paso.
