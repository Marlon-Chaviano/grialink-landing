/**
 * Generates the Open Graph cards in `public/og/` — one per page, per locale.
 *
 * Brand-exact by construction: navy field, the same PCB trace language as
 * `CircuitAtmosphere.astro`, and real Satoshi type. Rendering these rather than
 * generating them keeps every card on-brand, at the exact 1200×630 ratio, and
 * two orders of magnitude smaller than an AI-generated PNG.
 *
 * Usage: node scripts/generate-og.mjs [path/to/Satoshi.ttf]
 * The TTF is only needed at build time — the site itself ships woff2.
 */
import sharp from 'sharp';
import opentype from 'opentype.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public/og');
const FONT_DIR = path.join(ROOT, '.fonts');

/**
 * Type is converted to SVG outlines rather than rendered through Pango.
 * sharp's text API needs a working fontconfig, which silently falls back to
 * Helvetica on macOS — outlines make the output identical everywhere.
 */
function face(weight) {
  const buf = fs.readFileSync(path.join(FONT_DIR, `satoshi-${weight}.ttf`));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}

const faces = { 900: face(900), 700: face(700), 500: face(500) };

/** Returns an SVG path string for `value`, plus its advance width. */
function outline(value, { size, weight, x, y, tracking = 0 }) {
  const face = faces[weight];
  const scale = size / face.unitsPerEm;
  let cursor = x;
  let d = '';

  for (const char of [...value]) {
    const glyph = face.charToGlyph(char);
    d += glyph.getPath(cursor, y, size).toPathData(3) + ' ';
    cursor += glyph.advanceWidth * scale + tracking;
  }

  return { d: d.trim(), width: cursor - x };
}

const W = 1200;
const H = 630;

const NAVY = '#0f1a26';
const NAVY_DEEP = '#0a0f14';
const ORANGE = '#FD7100';
const FOG = '#94A3B8';

/** Same trace vocabulary as the site backdrop, tuned for a 1200×630 field. */
const TRACES = [
  'M 1200 90 H 1040 V 170 H 940 V 250 H 860',
  'M 1200 180 H 1100 V 120 H 1000 V 210 H 900 V 300',
  'M 1200 280 H 1060 V 350 H 960 V 430 H 880',
  'M 1200 380 H 1120 V 320 H 1020 V 420',
  'M 1200 470 H 1080 V 530 H 980',
  'M 1200 560 H 1140 V 500 H 1050',
];

const NODES = [
  [860, 250, 5],
  [900, 300, 4.5],
  [880, 430, 4],
  [1020, 420, 4],
  [980, 530, 3.5],
  [1050, 500, 3.5],
];

const PAGES = {
  en: {
    home: 'AI client growth for practices',
    products: 'Eleven products. One system.',
    pricing: 'Plans that scale with your practice',
    about: 'Built for practices, by operators',
    contact: 'Talk to the Grialink team',
    'whatsapp-copilot': 'Ask your business a question',
    'grial-front-desk': 'Answers every call. Books the appointment.',
    'grial-scheduler': 'Reminders that confirm themselves',
    'grial-auditor': 'Every call, read and scored',
    prospector: 'Describe the client. Get the list.',
    outreach: 'Follow-up that sends itself',
    'inbox-pipeline': 'One inbox. One pipeline.',
    'grial-mind': 'The right reply, right inside the conversation',
    calendar: 'Book it in the conversation',
    dialer: 'Your phone system, drawn',
    analytics: 'What each campaign is really worth',
  },
  es: {
    home: 'Crecimiento de clientes con IA',
    products: 'Once productos. Un solo sistema.',
    pricing: 'Planes que crecen con tu centro',
    about: 'Hecho para centros, por operadores',
    contact: 'Habla con el equipo de Grialink',
    'whatsapp-copilot': 'Pregúntale a tu negocio',
    'grial-front-desk': 'Atiende cada llamada. Agenda la cita.',
    'grial-scheduler': 'Recordatorios que se confirman solos',
    'grial-auditor': 'Cada llamada, leída y puntuada',
    prospector: 'Describe al cliente. Recibe la lista.',
    outreach: 'El seguimiento que se envía solo',
    'inbox-pipeline': 'Una bandeja. Un pipeline.',
    'grial-mind': 'La respuesta correcta, dentro de la conversación',
    calendar: 'Agenda en la conversación',
    dialer: 'Tu centralita, dibujada',
    analytics: 'Cuánto vale cada campaña',
  },
};

function card(lang, tagline) {
  const traces = TRACES.map(
    d => `<path d="${d}" stroke="${ORANGE}" stroke-width="1.4" fill="none"
            stroke-linecap="round" stroke-linejoin="round" opacity="0.28"/>`
  ).join('');

  const nodes = NODES.map(
    ([cx, cy, r]) => `
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${ORANGE}" stroke-width="1.2" opacity="0.4"/>
      <circle cx="${cx}" cy="${cy}" r="${r * 0.36}" fill="${ORANGE}" opacity="0.5"/>`
  ).join('');

  const eyebrowText =
    lang === 'es' ? 'CAPTACIÓN Y AGENDA CON IA' : 'AI SALES ENGAGEMENT PLATFORM';

  const eyebrow = outline(eyebrowText, { size: 17, weight: 700, x: 88, y: 232, tracking: 1.6 });
  const wordmark = outline('Grialink', { size: 82, weight: 900, x: 86, y: 330, tracking: -2.6 });
  const sub = outline(tagline, { size: 34, weight: 500, x: 88, y: 412, tracking: -0.5 });

  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
      <defs>
        <linearGradient id="field" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${NAVY}"/>
          <stop offset="100%" stop-color="${NAVY_DEEP}"/>
        </linearGradient>
        <radialGradient id="bloom" cx="0.82" cy="0.5" r="0.5">
          <stop offset="0%" stop-color="${ORANGE}" stop-opacity="0.20"/>
          <stop offset="100%" stop-color="${ORANGE}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#field)"/>
      <rect width="${W}" height="${H}" fill="url(#bloom)"/>
      ${traces}
      ${nodes}
      <path d="${eyebrow.d}" fill="${ORANGE}"/>
      <path d="${wordmark.d}" fill="#FFFFFF"/>
      <path d="${sub.d}" fill="${FOG}"/>
      <rect x="0" y="${H - 7}" width="${W}" height="7" fill="${ORANGE}"/>
    </svg>`);
}

async function render(lang, page, tagline) {
  const file = path.join(OUT, `${page}-${lang}.png`);
  await sharp(card(lang, tagline)).png({ compressionLevel: 9, palette: true }).toFile(file);

  const kb = Math.round(fs.statSync(file).size / 1024);
  console.log(`${path.basename(file).padEnd(20)} ${kb} KB`);
}

fs.mkdirSync(OUT, { recursive: true });

for (const [lang, pages] of Object.entries(PAGES)) {
  for (const [page, tagline] of Object.entries(pages)) {
    await render(lang, page, tagline);
  }
}
