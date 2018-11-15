# Mithril / Typescript / Browserify / HMR / Budō

This is a starter project for [Mithril](https://mithril.js.org/), Typescript, Browserify with hot-module-replacement and [Budō](https://github.com/mattdesl/budo) local dev server for hot CSS reloading.

This project also uses PostCSS for CSS compilation.

This repo also contains a branch that performs code-splitting (separating your app and vendor bundles.)

	git checkout code-split

And a Babel branch for plain ES20XX instead of Typescript.

	git checkout babel

Note that each branch has different npm dependencies so you will need to run `npm install` for the branch you want to use.

## Install

	npm install

### Recommended VSCode Extensions

* tslint
* eslint
* stylelint
* postcss-sugarss-language
* EditorConfig

(Or equivalents for your preferred editor/IDE.)

## Run & Develop

	npm start

Then go to http://localhost:3000 in your browser

## Build Minified

	npm run build

Outputs compiled JS to `public/js` and CSS to `public/css`.

---

## Using this repo to start your own project

To use this repo to create your own project follow these steps.

1 - Clone this repo into a directory with a custom name (eg. `your-project-name` instead of the default `mithril-browserify-ts-budo`)

```
git clone https://github.com/spacejack/mithril-browserify-ts-budo.git your-project-name
```

2 - `cd` into this new directory

```
cd your-project-name
```

3 - Remove the `.git` directory so it is no longer linked to this repo:

```
rm -fr .git
```

4 - Initialize it as a new git repo and point it at your own remote (assumes you've created one on Github, Bitbucket, Gitlab, etc.):

```
git init
git remote add origin <your-repo-url>
git add .
git commit -m "Initial commit"
git push -u origin master
```

Now you can follow the [install](#install) instructions above.

---

For a more barebones Mithril/Typescript example (no PostCSS, no live-reload/HMR) take a look at [this repo](https://github.com/spacejack/mithril-ts-example).
