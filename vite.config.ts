// vite.config.ts
import { defineConfig } from 'vite';
import {browserslistToTargets, Features} from "lightningcss";
import browserslist = require("browserslist");

export default defineConfig({
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%')),
            include: Features.Nesting | Features.MediaRangeSyntax
        },
    },
    build: {
        outDir: 'docs',
        cssMinify: "lightningcss"
    }
});
