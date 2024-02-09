# This is a project help you build userscript with webpack

## Development

1. Allow Tampermonkey's access to local file URIs [tampermonkey/faq](https://tampermonkey.net/faq.php?ext=dhdg#Q204)
2. Install deps with `npm i` or `npm ci`.
3. `npm run dev` to start your development.
Now you will see 2 files in `/dist/`
    - `dist/index.dev.proxy.user.js`: **You should install this userscript in your browser.**
    It's a simple loader that loads `dist/index.dev.user.js` on matched websites.
    - `dist/index.dev.user.js`: This is the development build with `source-map`.
    It will be automatically loaded by `dist/index.dev.user.js`.
    **Don't add it to your userscript manager.**

Livereload is default enabled, use [this Chrome extension](https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei)

### NOTICE

Everytime you change your metadata config,
you'll have to restart the webpack server and install the newly generated `dist/index.dev.user.js` UserScript in your browser again.

## Dependencies

There are two ways to using a package on npm.

### UserScript way

Like the original UserScript way, you will need to add them to your [user script metadata](../metadata.js)'s require section and exclude them in [config/webpack.config.base.cjs](../config/webpack.config.base.cjs)

### Webpack way

Just install packages with npm and import them in your code, webpack will take care them.

## Build

```bash
npm run build
```

`dist/index.prod.user.js` is the final script.

## Automatic Deploy

[Github Actions](../.github/workflows/release.yaml) will deploy the production userscript to this [Gist](https://gist.github.com/timo95/562b9363d491e3ee281cb46944445fcd) on each new version tag.
