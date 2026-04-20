import * as vscode from 'vscode';
import { docs, DocEntry } from './docs';

const KIND_LABEL: Record<DocEntry['kind'], string> = {
  tag: 'tag',
  filter: 'filter',
  function: 'function',
  test: 'test',
};

const SOURCE_LABEL: Record<DocEntry['source'], string> = {
  twig: 'Twig',
  craft: 'CraftCMS',
};

function renderEntry(word: string, entry: DocEntry): vscode.MarkdownString {
  const md = new vscode.MarkdownString('', true);
  md.isTrusted = false;

  md.appendMarkdown(`**\`${word}\`** — ${KIND_LABEL[entry.kind]} (${SOURCE_LABEL[entry.source]})\n\n`);
  if (entry.signature) {
    md.appendCodeblock(entry.signature, 'twig');
  }
  md.appendMarkdown(`${entry.description}\n`);
  if (entry.example) {
    md.appendCodeblock(entry.example, 'twig');
  }
  if (entry.link) {
    md.appendMarkdown(`\n[Documentation →](${entry.link})`);
  }

  return md;
}

export class TwigHoverProvider implements vscode.HoverProvider {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
  ): vscode.Hover | undefined {
    const range = document.getWordRangeAtPosition(position);
    if (!range) {
      return undefined;
    }
    const word = document.getText(range);
    const entry = docs[word];
    if (!entry) {
      return undefined;
    }
    return new vscode.Hover(renderEntry(word, entry), range);
  }
}
