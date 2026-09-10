// Setzt das beim SSR-Build erzeugte HTML in dist/index.html ein.
// Ergebnis: Crawler bekommen den vollständigen Seiteninhalt sofort,
// der Browser hydratisiert ihn danach zur interaktiven Version.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = resolve(root, 'dist/index.html');
const serverEntry = resolve(root, 'dist-ssr/entry-server.js');

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();

const template = readFileSync(indexPath, 'utf8');
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error('Prerender-Marker <div id="root"></div> nicht in dist/index.html gefunden.');
}

const output = template.replace(marker, `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, output);

// Der SSR-Bundle wird nur zur Build-Zeit gebraucht und gehört nicht ins Upload.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });

const kb = (Buffer.byteLength(appHtml, 'utf8') / 1024).toFixed(1);
console.log(`✓ Prerendered: ${kb} kB HTML in dist/index.html eingesetzt`);
