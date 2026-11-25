// Encabezado, pie de página e iconos compartidos por las 4 páginas.
// Para cambiar el menú, el teléfono o el correo, se edita solo aquí.

export const WHATSAPP = '50492294781';
export const TELEFONO = '+504 9229-4781';
export const CORREO = 'inversionesboran662@gmail.com';

const paginas = [
  { id: 'inicio', href: '/', label: 'Inicio' },
  { id: 'nosotros', href: '/nosotros.html', label: 'Nosotros' },
  { id: 'servicios', href: '/servicios.html', label: 'Servicios' },
  { id: 'contacto', href: '/contacto.html', label: 'Contacto' },
];

const actual = document.body.dataset.page;

const header = `
<header class="header header--light" id="header">
  <div class="container header__inner">
    <a href="/" class="header__logo" aria-label="SEGNET, ir al inicio">
      <img src="/logo-color.png" alt="SEGNET" width="167" height="34" />
    </a>
    <nav class="nav" id="nav" aria-label="Principal">
      ${paginas
        .map(
          (p) =>
            `<a href="${p.href}"${p.id === actual ? ' class="is-active" aria-current="page"' : ''}>${p.label}</a>`
        )
        .join('')}
      <a href="/contacto.html#cotizar" class="btn btn--dark btn--sm">Cotizar proyecto</a>
    </nav>
    <button class="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>`;

const footer = `
<footer class="site-footer">
  <div class="container site-footer__grid">
    <div>
      <img src="/logo-blanco.png" alt="SEGNET" width="148" height="30" class="site-footer__logo" />
      <p>Su aliado tecnológico en redes, telecomunicaciones y seguridad electrónica.</p>
    </div>
    <div>
      <h4>Páginas</h4>
      <ul>${paginas.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h4>Servicios</h4>
      <ul>
        <li><a href="/servicios.html#conectar">Fibra óptica y cableado</a></li>
        <li><a href="/servicios.html#conectar">Redes Wi-Fi</a></li>
        <li><a href="/servicios.html#proteger">CCTV y control de acceso</a></li>
        <li><a href="/servicios.html#mantener">Eléctrico y mantenimiento</a></li>
      </ul>
    </div>
    <div>
      <h4>Contacto</h4>
      <ul>
        <li><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" data-wa>${TELEFONO}</a></li>
        <li><a href="mailto:${CORREO}">${CORREO}</a></li>
        <li>Honduras</li>
      </ul>
    </div>
  </div>
  <div class="container site-footer__bottom">
    <p>© ${new Date().getFullYear()} SEGNET. Todos los derechos reservados.</p>
    <p>Redes / Telecomunicaciones / Tecnología</p>
  </div>
</footer>
<a href="https://wa.me/${WHATSAPP}" class="wa-float" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp" data-wa>
  <svg viewBox="0 0 24 24"><use href="#i-whatsapp" /></svg>
</a>`;

const iconos = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-fiber" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="10" cy="10" r="7.5" /><circle cx="10" cy="10" r="4" /><path d="M10 17.5V21h9" /><rect x="18.5" y="19.5" width="3.5" height="3" rx=".5" fill="currentColor" stroke="none" /></symbol>
  <symbol id="i-utp" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="2.5" y="4" width="19" height="9" rx="1.5" /><path d="M6 7.5h1.5M9.5 7.5H11M13 7.5h1.5M16.5 7.5H18M6 10h1.5M9.5 10H11M13 10h1.5M16.5 10H18M7 13v6M11 13v4M15 13v7M18 13v5" /></symbol>
  <symbol id="i-wifi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 15.8a5 5 0 0 1 6.8 0" /><circle cx="12" cy="19.2" r="1.3" fill="currentColor" stroke="none" /></symbol>
  <symbol id="i-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" stroke-linecap="round"><path d="M3 6.5l15 3.2-1 4.6-15-3.2Z" /><path d="M18 9.7l3 .6-.8 3.6-3-.6" /><circle cx="13.5" cy="11" r=".9" fill="currentColor" /><path d="M8 12.6 7 17H3.5M3.5 14.5v5" /></symbol>
  <symbol id="i-finger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 21V11a7 7 0 0 1 14 0v10" /><path d="M8 21V11a4 4 0 0 1 8 0v10" /><path d="M11 21v-9.5a1 1 0 0 1 2 0V21" /></symbol>
  <symbol id="i-bolt" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 2 4.5 13.5h6L9 22l10.5-12.5h-6.2Z" /></symbol>
  <symbol id="i-tool" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5L21 10a5.5 5.5 0 0 1-7.4 5.4L6.5 22.5a2.1 2.1 0 0 1-3-3l7.1-7.1A5.5 5.5 0 0 1 16 5l-1.3 1.3Z" /></symbol>
  <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5 4 5.5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-6Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></symbol>
  <symbol id="i-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></symbol>
  <symbol id="i-layers" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5Z" /><path d="m3 13 9 5 9-5" /></symbol>
  <symbol id="i-handshake" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8.5 6 5l4 2 2-1 4 1 4-2 2 3.5" /><path d="m2 8.5 3 6 5 4.5a1.5 1.5 0 0 0 2-2.2" /><path d="m22 8.5-4 6-3.5 3" /><path d="m9.5 10.5 3 3a1.5 1.5 0 0 0 2.2-2l-3-3.2" /></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="m3 6.5 9 6.5 9-6.5" /></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21.5s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9.5" r="2.5" /></symbol>
  <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></symbol>
  <symbol id="i-whatsapp" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.4-1.7A11.8 11.8 0 0 0 24 12a11.7 11.7 0 0 0-3.6-8.4Z" /></symbol>
</svg>`;

document.body.insertAdjacentHTML('afterbegin', iconos + header);
document.body.insertAdjacentHTML('beforeend', footer);

// Sombra del encabezado al hacer scroll
const headerEl = document.getElementById('header');
const onScroll = () => headerEl.classList.toggle('is-scrolled', window.scrollY > 10);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Menú móvil
const nav = document.getElementById('nav');
const toggle = document.getElementById('navToggle');
const setMenu = (open) => {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// Botones de WhatsApp con mensaje inicial
const saludo = encodeURIComponent('Hola SEGNET, quisiera información sobre sus servicios.');
document.querySelectorAll('[data-wa]').forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${saludo}`;
});

// Aparición suave de los bloques
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 90}ms`;
    io.observe(el);
  });
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}
