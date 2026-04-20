import * as vscode from 'vscode';
import * as prettier from 'prettier';

let cachedPlugin: prettier.Plugin | undefined;

async function getTwigPlugin(): Promise<prettier.Plugin> {
  if (!cachedPlugin) {
    const mod: { default?: prettier.Plugin } = await import(
      '@zackad/prettier-plugin-twig'
    );
    cachedPlugin = (mod.default ?? (mod as unknown)) as prettier.Plugin;
  }
  return cachedPlugin;
}

export class TwigFormatter implements vscode.DocumentFormattingEditProvider {
  async provideDocumentFormattingEdits(
    document: vscode.TextDocument,
  ): Promise<vscode.TextEdit[]> {
    const text = document.getText();
    const filepath = document.uri.fsPath;

    try {
      const plugin = await getTwigPlugin();
      const userConfig = (await prettier.resolveConfig(filepath)) ?? {};
      const formatted = await prettier.format(text, {
        ...userConfig,
        parser: 'twig',
        plugins: [plugin],
        filepath,
      });

      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(text.length),
      );
      return [vscode.TextEdit.replace(fullRange, formatted)];
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('[twig-craft] format error:', err);
      vscode.window.showErrorMessage(`Twig format failed: ${message}`);
      return [];
    }
  }
}
