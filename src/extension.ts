import * as vscode from 'vscode';
import { TwigFormatter } from './formatter';

export function activate(context: vscode.ExtensionContext): void {
  console.log('[twig-craft] activated');
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      'twig',
      new TwigFormatter(),
    ),
  );
}

export function deactivate(): void {}
