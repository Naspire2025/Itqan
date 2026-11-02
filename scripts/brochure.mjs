// Builds the site, serves it, and prints /brochure/ to brochure/CFDP-Brochure.pdf with headless Chrome.
import { spawn, execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 4329;
const out = resolve('brochure/CFDP-Brochure.pdf');

execFileSync('npx', ['astro', 'build'], { stdio: 'inherit' });
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore' });

try {
  const url = `http://localhost:${PORT}/brochure/`;
  for (let i = 0; i < 50; i++) {
    try { if ((await fetch(url)).ok) break; } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  mkdirSync('brochure', { recursive: true });
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
    '--virtual-time-budget=5000', `--print-to-pdf=${out}`, url,
  ], { stdio: 'inherit' });
  console.log(`Brochure written to ${out}`);
} finally {
  server.kill();
}
