# eslint-config-nico

[Nico](https://github.com/blastZ/nico)'s ESLint config.

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use the Nico shareable config, first run this:

```bash
npm install --save-dev eslint-config-nico
```

Then, add this to your .eslintrc file:

```
{
  "extends": "@blastz/eslint-config-nico"
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
