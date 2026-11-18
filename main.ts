// news-image-20261117: copies the pre-rendered poster (entry.png, rendered from index.html) to the output folder.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
