# Mithril / Typescript / Browserify / Code-Splitting/ HMR / Budō

This is a starter project for [Mithril](https://mithril.js.org/), Typescript, Browserify with hot-module-replacement and [Budō](https://github.com/mattdesl/budo) local dev server for hot CSS reloading.

This project does code splitting, so browserify will output two separate bundles: `app.js` and `vendor.js`.

This project also uses PostCSS for CSS compilation.

## Install

	npm install

## Run & Develop

	npm start

Then go to http://localhost:3000 in your browser

## Build Minified

	npm run build

Outputs compiled JS to `public/js` and CSS to `public/css`.
