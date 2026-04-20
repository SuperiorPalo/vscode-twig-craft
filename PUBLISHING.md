# Publishing

Internal docs for releasing new versions of **Twig + Craft CMS** to the Visual Studio Code Marketplace.

## First-time setup (done)

1. Azure DevOps organization created; PAT generated with scope **Marketplace: Manage**.
2. Publisher `pavelMikulik` registered at https://marketplace.visualstudio.com/manage.
3. PAT stored locally via `vsce login pavelMikulik`; also added to GitHub repo secret `VSCE_PAT`.
4. Open VSX namespace `pavelMikulik` claimed at https://open-vsx.org; OVSX token stored in GitHub repo secret `OVSX_PAT`.

## Release checklist

### 1. Decide the version bump

| Change type | Bump | Example |
|---|---|---|
| New feature (compatible) | minor | 0.1.0 → 0.2.0 |
| Bug fix only | patch | 0.1.0 → 0.1.1 |
| Breaking change | major | 0.1.0 → 1.0.0 |

Until the extension reaches 1.0.0, any bump is acceptable per SemVer — prefer minor for features, patch for fixes.

### 2. Update version and CHANGELOG

```bash
# Bumps package.json and package-lock.json
npm version <patch|minor|major> --no-git-tag-version
```

Then edit `CHANGELOG.md`:

- Move notes from `[Unreleased]` into a new `[X.Y.Z] - YYYY-MM-DD` section.
- Leave an empty `[Unreleased]` section for the next cycle.

### 3. Commit the release prep

```bash
git add package.json package-lock.json CHANGELOG.md
git commit -m "chore(release): vX.Y.Z"
git push
```

### 4. Tag the release — CI does the rest

```bash
git tag vX.Y.Z
git push --tags
```

`.github/workflows/publish.yml` fires on any `v*` tag:
1. Installs deps
2. Runs typecheck
3. Runs `vsce package`
4. Runs `vsce publish --pat $VSCE_PAT` (Visual Studio Marketplace)
5. Runs `ovsx publish --pat $OVSX_PAT` (Open VSX Registry for Cursor/VSCodium/Theia)
6. Creates a GitHub Release with the `.vsix` attached and auto-generated notes

Within ~1 minute the new version appears on both marketplaces.

## Manual publish (fallback)

If CI breaks or you need to publish an off-schedule build:

```bash
# Ensure you are logged in
vsce login pavelMikulik

# Package + publish in one step
vsce publish

# Or package first, inspect, then publish the .vsix
vsce package
vsce publish --packagePath twig-craft-X.Y.Z.vsix
```

## Pre-release channel

For beta drops without affecting the stable listing:

```bash
vsce publish --pre-release
```

Marks the publish as pre-release — users opt in via the "Switch to Pre-Release Version" button in the Extensions sidebar.

## Unpublishing

Avoid if at all possible — it removes all versions and breaks users who have it installed.

```bash
vsce unpublish pavelMikulik.twig-craft
```

A cleaner approach is to publish a patch release that reverts or disables the problematic change.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `ERROR: Unauthorized(401)` | PAT expired or revoked | Regenerate in Azure DevOps, `vsce login pavelMikulik` again, update `VSCE_PAT` secret |
| `ERROR: Duplicate version` | Version already published | Bump version in `package.json` and retry |
| CI publish step skipped | Pushed branch, not a tag | Push a `vX.Y.Z` tag to trigger |
| Icon missing in Marketplace listing | `icon` path broken or not included in .vsix | Verify `images/icon.png` exists and is not excluded by `.vscodeignore` |
