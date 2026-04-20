# Changelog

All notable changes to the **Twig + Craft CMS** extension are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Published to the Open VSX Registry so Cursor, VSCodium, Gitpod, and Theia users can install via `cursor --install-extension pavelMikulik.twig-craft`.
- CI workflow now publishes to both the Visual Studio Marketplace and Open VSX on each tag.

## [0.1.1] - 2026-04-20

### Fixed

- Exclude internal files (`PUBLISHING.md`, `.github/`) from the packaged `.vsix` so they no longer ship to end users.

## [0.1.0] - 2026-04-20

### Added

- Initial public release on the Visual Studio Code Marketplace.
- Syntax highlighting for Twig and CraftCMS templates (TextMate grammar with HTML/CSS/JS embedding).
- Injection grammar so plain `.html` files containing Twig delimiters get highlighted too.
- Document formatter using Prettier 3 with `@zackad/prettier-plugin-twig` (default `printWidth` 120, respects workspace `.prettierrc`).
- Snippet libraries: 31 Twig core snippets, 22 Craft snippets.
- Hover documentation for ~85 Twig and Craft tags, filters, functions, and tests.
- Emmet abbreviation support inside `.twig` files.
- Folding markers for paired Twig/Craft block tags.
- Language configuration: comments, brackets, auto-closing pairs, surrounding pairs.
