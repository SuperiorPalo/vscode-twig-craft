# Grammar attribution

`twig.tmLanguage.json` is adapted from
[mblode/vscode-twig-language](https://github.com/mblode/vscode-twig-language)
(MIT licensed) by Matthew Blode and contributors.

Modifications by Pavel Mikulik (2026):

- Stripped non-Twig embedded languages (PHP, Python, Ruby) — Twig has no native blocks for those.
- Extended `twig-keywords` regex to cover modern Twig (`apply`, `deprecated`) and CraftCMS-specific tags (`cache`, `nav`, `switch`, `js`, `css`, `hook`, `paginate`, `exit`, `header`, `redirect`, `requireLogin`, `requirePermission`, `requireGuest`, `requireAdmin`, `case`, `default`).
- Renamed grammar (`name`) and dropped deprecated `keyEquivalent` / `uuid`.

`twig-injection.tmLanguage.json` is original to this project — it injects
the three Twig delimiter scopes (`{% %}`, `{{ }}`, `{# #}`) into
`text.html.basic` so plain `.html` files containing Twig get highlighted too.

The MIT license terms of the upstream grammar are preserved in the project's
root `LICENSE` file (this extension is also MIT).
