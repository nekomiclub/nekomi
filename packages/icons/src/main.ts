import fs from 'fs'
import path from 'path';
import { transform } from '@svgr/core';
import jsx from '@svgr/plugin-jsx';
import svgo from '@svgr/plugin-svgo';
import componentTemplate from './component-template';



const SRC = 'node_modules/@material-symbols/svg-400/outlined';
const OUT = '_icons';



const toPascal = (s) =>
  s.split(/[-_\s]+/).filter(Boolean).map((p) => p[0].toUpperCase() + p.slice(1)).join('');


function toName(filename: string) {
  return `Material${toPascal(filename)}`
}



async function main() {
  const iconNames: string[] = []

  // Prepare dist
  fs.rmSync(OUT, { force: true, recursive: true })
  fs.mkdirSync(OUT)

  // Iterate svgs
  for (const file of fs.readdirSync(SRC).filter(el => el.endsWith('.svg'))) {
    const name = toName(path.basename(file, '.svg'));
    const svg = fs.readFileSync(path.join(SRC, file), 'utf8');

    const code = await transform(svg, {
      plugins: [svgo, jsx],
      typescript: true,
      icon: true,
      jsxRuntime: 'automatic',
      expandProps: 'end',
      template: componentTemplate,
      svgProps: {
        width: "{size}",
        height: "{size}",
        fill: "{color}",
        className: "{className}",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
      },
      svgoConfig: {
        plugins: [{
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false
            }
          }
        }],
      },
      jsx: {
        babelConfig: {
          plugins: [
            [
              "@svgr/babel-plugin-remove-jsx-attribute",
              {
                elements: ["svg", "path", "circle", "rect", "ellipse"],
                attributes: [
                  "xmlns",
                  "width",
                  "height",
                  "fill",
                  "data-name",
                  "id",
                  "style",
                  "stroke",
                  "strokeWidth",
                  "strokeLinejoin",
                  "strokeLinecap",
                ],
              },
            ],
          ],
        },
      },
    },
      { componentName: name },
    );

    iconNames.push(name.replace('Material', ''))

    fs.writeFileSync(path.join(OUT, `${name}.tsx`), code);
    console.log(`[@nekomi/icons:build]: Icon converted: ${name}.tsx`)
  }

  // Write d.ts
  fs.writeFileSync(path.join(OUT, `index.d.ts`), `type TMaterialSymbolName = ${iconNames.map(el => `"${el}"`).join(' | ')}
export default TMaterialSymbolName`);
  console.log(`[@nekomi/icons:build]: Material symbol names type file (index.d.ts) has been written`)
}

main()