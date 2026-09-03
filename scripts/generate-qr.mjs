// Generates a local QR code for the Google Play listing so the landing page
// has no runtime dependency on an external QR service (offline-friendly, no
// third-party tracking). Run once with `npm run generate:qr`; the output is
// committed to `public/`.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const PLAY_URL =
  'https://play.google.com/store/apps/details?id=by.freiding.braindrop';

const OUT = fileURLToPath(new URL('../public/qr-play.svg', import.meta.url));

const svg = await QRCode.toString(PLAY_URL, {
  type: 'svg',
  errorCorrectionLevel: 'M',
  margin: 0,
  color: {
    dark: '#101A2B',
    light: '#0000', // transparent — the card behind it is white
  },
});

await writeFile(OUT, svg, 'utf8');
console.log(`Wrote ${OUT}`);
