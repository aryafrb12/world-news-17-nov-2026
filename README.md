# The Day in World News: Tuesday 17 November 2026

Entry for the make.fun bounty `news-image-20261117`: a single 1024×1024 editorial poster summing up the world's news of 17 November 2026.

![entry](entry.png)

## What it shows

Eight panels across regions and fields, plus an "Also" strip:

| Panel | Story |
|---|---|
| Ukraine · Russia | Ukraine strike brings down an arch/road span of the Kerch (Crimea) Bridge; Kremlin vows to rebuild |
| Gulf | Iranian drones aimed at a US radar in Bahrain intercepted; US jets strike Iran's Qeshm Island |
| Mongolia | President Khurelsukh announces resignation over railway graft claims he denies |
| Manila | First Quad leaders' summit in two years; Trump hails critical-minerals deals |
| China · Canada | Carney and Xi expand tariff relief on ~C$400m of Canadian pork and seafood |
| Markets · Tech | Nvidia reports a $115.8bn quarter (+103%); board says Jensen Huang won't return as CEO |
| Siberia | Russian An-12 military transport crashes near Kemerovo, all 19 killed |
| Prague | Two passenger trains collide near the main station; 46 injured |
| Also | Thaçi given 17 more months at The Hague · UK sanctions Israeli settlement firms · Canada reach CONCACAF Nations League semi-finals |

Every claim was checked against at least two sources; see [facts.md](facts.md) for the facts and URLs.

## How it is built

- `index.html` is the poster: HTML/CSS with hand-drawn inline SVG icons (no photos, faces or logos). It uses Plus Jakarta Sans and Inter from `fonts/` and a four-colour palette of paper, ink, red and gold.
- `entry.png` is rendered from it with headless Chrome:
  ```
  chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
         --window-size=1024,1024 --screenshot=entry.png file://$PWD/index.html
  ```
- `main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`, or to `$MAKEFUN_OUTPUT_DIR` when that is set:
  ```
  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
  ```

## License

See [LICENSE](LICENSE).
