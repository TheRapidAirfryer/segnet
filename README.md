# SEGNET · Sitio web

Propuesta 2: sitio de 4 páginas para SEGNET, empresa de redes, telecomunicaciones y seguridad electrónica en Honduras.

| Página | Archivo |
| --- | --- |
| Inicio | `index.html` |
| Nosotros | `nosotros.html` |
| Servicios | `servicios.html` |
| Contacto | `contacto.html` |

El menú, el pie de página, los iconos y los datos de contacto están en un solo lugar: `src/layout.js`. El formulario de contacto (WhatsApp o correo) está en `src/contacto.js`.

## Uso

```bash
npm install
npm run dev      # desarrollo
npm run build    # versión final en dist/
```

Si se agrega una página nueva, hay que declararla en `vite.config.js`.
