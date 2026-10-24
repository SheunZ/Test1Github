// Exporte les fonds d'écran en vidéos MP4 en boucle + images fixes PNG.
// Usage : node render.cjs [largeur] [hauteur] [fps]
const { chromium } = require('playwright');
const { execFileSync } = require('node:child_process');
const { mkdirSync, rmSync } = require('node:fs');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

(async () => {

const [W = 1080, H = 2340, FPS = 30] = process.argv.slice(2).map(Number);
const SECONDS = 12; // doit correspondre à LOOP_SECONDS dans wallpaper.html
const frames = SECONDS * FPS;
const root = __dirname;
const outDir = path.join(root, 'output');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });

for (const mode of ['home', 'lock']) {
  const tmp = path.join(outDir, `.frames-${mode}`);
  rmSync(tmp, { recursive: true, force: true });
  mkdirSync(tmp);
  await page.goto(`${pathToFileURL(path.join(root, 'wallpaper.html'))}?mode=${mode}&render=1`);
  for (let i = 0; i < frames; i++) {
    await page.evaluate((p) => window.renderFrame(p), i / frames);
    await page.screenshot({ path: path.join(tmp, `${String(i).padStart(4, '0')}.png`) });
  }
  const name = mode === 'home' ? 'neon-abyss-accueil' : 'neon-abyss-verrouillage';
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS),
    '-i', path.join(tmp, '%04d.png'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p',
    '-crf', '20', '-preset', 'slow', '-movflags', '+faststart',
    path.join(outDir, `${name}.mp4`)]);
  execFileSync('cp', [path.join(tmp, `${String(Math.floor(frames / 3)).padStart(4, '0')}.png`),
    path.join(outDir, `${name}.png`)]);
  rmSync(tmp, { recursive: true, force: true });
  console.log(`✓ ${name}.mp4 / .png`);
}
await browser.close();
})();
