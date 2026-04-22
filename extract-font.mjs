import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('..', 'pawque rebrand', 'style.css');
const css = fs.readFileSync(cssPath, 'utf8');

// Extract first @font-face base64 (Zolla)
const match = css.match(/font-family:\s*'Zolla';[\s\S]*?src:\s*url\('data:font\/truetype;base64,([^']+)'\)/);
if (!match) { console.error('Zolla not found'); process.exit(1); }

const outDir = path.resolve('public', 'fonts');
fs.mkdirSync(outDir, { recursive: true });

const buf = Buffer.from(match[1], 'base64');
fs.writeFileSync(path.join(outDir, 'Zolla.ttf'), buf);
console.log('Zolla.ttf extracted, bytes:', buf.length);
