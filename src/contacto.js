import { WHATSAPP, CORREO } from './layout.js';

// Formulario de cotización: arma el mensaje y lo abre en WhatsApp o en el correo
const form = document.getElementById('quoteForm');
const error = document.getElementById('formError');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const via = ev.submitter?.value || 'wa';
  const data = new FormData(form);
  const valor = (name) => String(data.get(name) || '').trim();

  let ok = true;
  ['nombre', 'servicio', 'necesidad'].forEach((name) => {
    const vacio = !valor(name);
    form.elements[name].classList.toggle('is-invalid', vacio);
    if (vacio) ok = false;
  });
  error.hidden = ok;
  if (!ok) return;

  const negrita = (t) => (via === 'wa' ? `*${t}*` : t);
  const campos = [
    ['Nombre', valor('nombre')],
    ['Empresa', valor('empresa')],
    ['Servicio', valor('servicio')],
    ['Necesidad', valor('necesidad')],
    ['Espacio', valor('espacio')],
    ['Alcance', valor('alcance')],
    ['Prioridad', valor('prioridad')],
  ].filter(([, v]) => v);

  const cuerpo = ['Hola SEGNET, quisiera una cotización.', '', ...campos.map(([k, v]) => `${negrita(k + ':')} ${v}`)].join('\n');

  if (via === 'mail') {
    const asunto = `Solicitud de cotización: ${valor('servicio')}`;
    window.location.href = `mailto:${CORREO}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  } else {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(cuerpo)}`, '_blank', 'noopener');
  }
});
