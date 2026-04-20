# Twig + Craft CMS for VS Code

Production-ready Twig and CraftCMS template support for Visual Studio Code and Cursor.

Built because the existing Twig extensions either ship a broken Prettier integration or stop at vanilla Twig. This one bundles **Prettier 3** with the actively maintained `@zackad/prettier-plugin-twig`, layers in CraftCMS-aware syntax, snippets, and hover docs, and stays out of the way.

## Features

| Feature | Details |
|---|---|
| **Syntax highlighting** | TextMate grammar with HTML/CSS/JS embedding. Highlights all Twig core delimiters (`{% %}`, `{{ }}`, `{# #}`, including whitespace control variants), keywords, filters, functions, properties, and CraftCMS-specific tags (`cache`, `nav`, `switch`, `js`, `css`, `hook`, `paginate`, `header`, `redirect`, `requireLogin`, …). |
| **Formatter** | `Format Document` (`Shift+Alt+F`) runs Prettier 3 with `@zackad/prettier-plugin-twig`. Default `printWidth` is 120 (override via `.prettierrc`). All standard Prettier options apply. |
| **Snippets** | 31 Twig snippets (`block`, `if`, `for`, `set`, `extends`, `include`, `embed`, `macro`, `apply`, `autoescape`, …) and 22 Craft snippets (`craftentries`, `craftassets`, `cache`, `nav`, `switch`, `paginate`, `js`, `css`, `hook`, `redirect`, `requireLogin`, …). |
| **Hover docs** | Hover over any known Twig or Craft tag, filter, function, or test to see its signature, description, an example, and a deep link to the official docs. ~85 entries covered. |
| **Emmet** | HTML-style abbreviations (`div.wrap>ul>li*3` + Tab) work inside `.twig` files. |
| **HTML intellisense** | Inherited from VS Code's built-in HTML language service via grammar embedding — autoclose tags, attribute completion, link navigation, all work in `.twig` files. |
| **Folding** | `{% block %}`, `{% if %}`, `{% for %}`, `{% macro %}`, `{% cache %}`, `{% nav %}`, `{% switch %}`, `{% js %}`, `{% css %}`, and other paired tags fold cleanly. |
| **Injection grammar** | Plain `.html` files containing Twig delimiters get the Twig syntax highlighted too. |

## Installation

From the Marketplace:

```
ext install pavelMikulik.twig-craft
```

Or search for **Twig + Craft CMS** in the Extensions sidebar.

## File associations

Auto-applied to:
- `*.twig`
- `*.html.twig`
- Any file whose first line starts with `{%` or `{#` (via `firstLine` detection)

## Formatting

The formatter uses your project's Prettier config (`prettier.resolveConfig` walks up from the file). To change indent width, line length, or quote style, drop a `.prettierrc` in your project root:

```json
{
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true
}
```

The extension's bundled defaults:

| Option | Default | Source |
|---|---|---|
| `parser` | `twig` | Forced |
| `printWidth` | `120` | Extension default (override-able) |
| `tabWidth` | `2` | Prettier default |
| `useTabs` | `false` | Prettier default |
| `singleQuote` | `false` | Prettier default |

### Known formatter limitations

These are limitations of `@zackad/prettier-plugin-twig`, documented upstream:

- **Inline `{% if %}` inside HTML attributes** is not formattable. Use a ternary inside `{{ }}` instead:
  ```twig
  {# bad — plugin will error or produce broken output #}
  <a class="btn {% if active %}active{% endif %}">

  {# good #}
  <a class="btn {{ active ? 'active' }}">
  ```
- **`{% js %}` and `{% css %}` blocks** with non-trivial JS/CSS may not format cleanly. Wrap them in `{# prettier-ignore-start #}` / `{# prettier-ignore-end #}` if needed.
- **Literal whitespace inside `class=""`** (e.g. multi-line class strings with embedded `{{ }}`) is preserved as-is. Compose dynamic classes with `html_classes(...)` instead.
- **Craft-specific block tags** (`{% cache %}`, `{% nav %}`, `{% switch %}`) are recognized as keywords for highlighting but the plugin does not indent their inner content. Cosmetic only.

## Configuration

The extension contributes the following defaults to `settings.json` (merge-friendly with your existing config):

```json
{
  "emmet.includeLanguages": {
    "twig": "html"
  }
}
```

To disable Emmet for Twig, add to your `settings.json`:

```json
{
  "emmet.excludeLanguages": ["twig"]
}
```

## Compatibility

- VS Code `^1.85.0` (also works in Cursor and other VS Code forks)
- Node 18+ extension host runtime

## Credits

- Grammar adapted from [`mblode/vscode-twig-language`](https://github.com/mblode/vscode-twig-language) (MIT)
- Formatter powered by [`@zackad/prettier-plugin-twig`](https://github.com/zackad/prettier-plugin-twig) (MIT)
- Built and maintained by [Pavel Mikulik](https://github.com/SuperiorPalo)

## License

[MIT](./LICENSE)
