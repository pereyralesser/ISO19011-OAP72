# ISO19011-OAP72

Sitio estático (HTML/CSS/JS) para navegar la **estructura** de ISO 19011:2018 (auditoría de sistemas de gestión), con:
- páginas por capítulo (1 a 7),
- Anexo A (temas prácticos),
- links sugeridos,
- banco de videos,
- glosario,
- herramientas recomendadas.

> Nota: el sitio no reproduce el texto oficial de la norma. Es un mapa de estudio y apoyo.

## Cómo usar en local
Abrí `index.html` en tu navegador, o servilo con cualquier servidor estático.

Ejemplo (Python):
```bash
python -m http.server 8000
```
Luego abrí `http://localhost:8000`.

## Publicar gratis

### GitHub Pages (recomendado)
1. Subí estos archivos a un repo llamado, por ejemplo, `ISO19011-OAP72`.
2. En GitHub: **Settings → Pages**.
3. Elegí **Deploy from a branch** y seleccioná la rama `main` y carpeta `/root`.
4. Guardá: GitHub te dará la URL pública.

### Alternativas gratuitas
- Netlify (drag & drop / deploy desde GitHub)
- Vercel
- Cloudflare Pages

## Estructura
- `index.html` (entrada)
- `cap1-...` a `cap7-...` (capítulos)
- `anexo-a.html`
- `links.html`, `videos.html`, `glosario.html`, `herramientas.html`
- `assets/styles.css`, `assets/site.js`
