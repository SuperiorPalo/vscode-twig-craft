import * as vscode from 'vscode';
import { TwigFormatter } from './formatter';
import { TwigHoverProvider } from './hover';

export function activate(context: vscode.ExtensionContext): void {
  console.log('[twig-craft] activated');
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider(
      'twig',
      new TwigFormatter(),
    ),
    vscode.languages.registerHoverProvider('twig', new TwigHoverProvider()),
  );
}

export function deactivate(): void {}
