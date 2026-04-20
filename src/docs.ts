export type DocSource = 'twig' | 'craft';
export type DocKind = 'tag' | 'filter' | 'function' | 'test';

export interface DocEntry {
  kind: DocKind;
  source: DocSource;
  signature?: string;
  description: string;
  example?: string;
  link?: string;
}

const TWIG_DOCS = 'https://twig.symfony.com/doc/3.x';
const CRAFT_DOCS = 'https://craftcms.com/docs/5.x';
const CRAFT_TWIG = `${CRAFT_DOCS}/reference/twig`;

export const docs: Record<string, DocEntry> = {
  // ---------- Twig core: tags ----------
  apply: {
    kind: 'tag',
    source: 'twig',
    signature: '{% apply <filter> %} ... {% endapply %}',
    description:
      'Applies a filter to a block of content. Twig 3 replacement for the deprecated `{% filter %}` tag.',
    example: "{% apply upper %}\n  this becomes uppercase\n{% endapply %}",
    link: `${TWIG_DOCS}/tags/apply.html`,
  },
  autoescape: {
    kind: 'tag',
    source: 'twig',
    signature: "{% autoescape 'html' %} ... {% endautoescape %}",
    description:
      'Marks a section of template output for automatic escaping with the given strategy (`html`, `js`, `css`, `url`, `html_attr`, or `false`).',
    link: `${TWIG_DOCS}/tags/autoescape.html`,
  },
  block: {
    kind: 'tag',
    source: 'twig',
    signature: '{% block name %} ... {% endblock %}',
    description:
      'Defines a block that child templates can override via inheritance.',
    link: `${TWIG_DOCS}/tags/extends.html`,
  },
  deprecated: {
    kind: 'tag',
    source: 'twig',
    signature: "{% deprecated 'message' %}",
    description: 'Triggers a PHP deprecation notice when the template is rendered.',
    link: `${TWIG_DOCS}/tags/deprecated.html`,
  },
  do: {
    kind: 'tag',
    source: 'twig',
    signature: '{% do expression %}',
    description:
      'Evaluates an expression for side effects without printing the result.',
    link: `${TWIG_DOCS}/tags/do.html`,
  },
  embed: {
    kind: 'tag',
    source: 'twig',
    signature: "{% embed 'template.twig' %} ... {% endembed %}",
    description:
      'Combines `include` with inheritance: pulls in another template and lets you override its blocks inline.',
    link: `${TWIG_DOCS}/tags/embed.html`,
  },
  extends: {
    kind: 'tag',
    source: 'twig',
    signature: "{% extends 'parent.twig' %}",
    description:
      'Marks the current template as extending a parent template (must be the first tag).',
    link: `${TWIG_DOCS}/tags/extends.html`,
  },
  flush: {
    kind: 'tag',
    source: 'twig',
    signature: '{% flush %}',
    description: 'Flushes the PHP output buffer immediately.',
    link: `${TWIG_DOCS}/tags/flush.html`,
  },
  for: {
    kind: 'tag',
    source: 'twig',
    signature: '{% for item in collection %} ... {% endfor %}',
    description:
      'Iterates over a sequence or mapping. Supports `{% else %}` for the empty case and `key, value` destructuring.',
    example:
      '{% for entry in entries %}\n  {{ entry.title }}\n{% else %}\n  No entries.\n{% endfor %}',
    link: `${TWIG_DOCS}/tags/for.html`,
  },
  if: {
    kind: 'tag',
    source: 'twig',
    signature: '{% if condition %} ... {% endif %}',
    description: 'Conditional rendering. Supports `{% elseif %}` and `{% else %}`.',
    link: `${TWIG_DOCS}/tags/if.html`,
  },
  import: {
    kind: 'tag',
    source: 'twig',
    signature: "{% import '_macros.twig' as macros %}",
    description: 'Imports macros from another template into a namespace.',
    link: `${TWIG_DOCS}/tags/import.html`,
  },
  include: {
    kind: 'tag',
    source: 'twig',
    signature: "{% include 'template.twig' with {} only %}",
    description:
      'Includes another template. `with { ... }` passes context, `only` isolates it.',
    link: `${TWIG_DOCS}/tags/include.html`,
  },
  macro: {
    kind: 'tag',
    source: 'twig',
    signature: '{% macro name(args) %} ... {% endmacro %}',
    description:
      'Defines a reusable template snippet. Imported via `{% import %}` or `{% from %}`.',
    link: `${TWIG_DOCS}/tags/macro.html`,
  },
  sandbox: {
    kind: 'tag',
    source: 'twig',
    signature: '{% sandbox %} ... {% endsandbox %}',
    description: 'Renders a section under the security sandbox.',
    link: `${TWIG_DOCS}/tags/sandbox.html`,
  },
  set: {
    kind: 'tag',
    source: 'twig',
    signature: '{% set name = value %}  or  {% set name %} ... {% endset %}',
    description: 'Assigns a value or a captured block to a variable.',
    link: `${TWIG_DOCS}/tags/set.html`,
  },
  use: {
    kind: 'tag',
    source: 'twig',
    signature: "{% use 'template.twig' %}",
    description:
      'Inherits blocks horizontally from another template (mixin-style).',
    link: `${TWIG_DOCS}/tags/use.html`,
  },
  verbatim: {
    kind: 'tag',
    source: 'twig',
    signature: '{% verbatim %} ... {% endverbatim %}',
    description: 'Renders the contents literally without parsing Twig syntax.',
    link: `${TWIG_DOCS}/tags/verbatim.html`,
  },
  with: {
    kind: 'tag',
    source: 'twig',
    signature: '{% with { key: value } %} ... {% endwith %}',
    description: 'Creates a new scope with the given variables.',
    link: `${TWIG_DOCS}/tags/with.html`,
  },

  // ---------- Twig core: filters ----------
  abs: {
    kind: 'filter',
    source: 'twig',
    signature: 'value|abs',
    description: 'Returns the absolute value of a number.',
    link: `${TWIG_DOCS}/filters/abs.html`,
  },
  batch: {
    kind: 'filter',
    source: 'twig',
    signature: 'array|batch(size, fill = null)',
    description: 'Splits an array into chunks of `size`, optionally padding the last one.',
    link: `${TWIG_DOCS}/filters/batch.html`,
  },
  capitalize: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|capitalize',
    description: 'Uppercases the first character of a string.',
    link: `${TWIG_DOCS}/filters/capitalize.html`,
  },
  date: {
    kind: 'filter',
    source: 'twig',
    signature: "value|date(format = null, timezone = null)",
    description: 'Formats a date with PHP `date()` syntax.',
    example: "{{ entry.postDate|date('Y-m-d') }}",
    link: `${TWIG_DOCS}/filters/date.html`,
  },
  default: {
    kind: 'filter',
    source: 'twig',
    signature: 'value|default(fallback)',
    description:
      'Returns `fallback` when the value is undefined, null, or empty (use `?? null` for stricter semantics).',
    link: `${TWIG_DOCS}/filters/default.html`,
  },
  e: {
    kind: 'filter',
    source: 'twig',
    signature: "value|e('html'|'js'|'css'|'url'|'html_attr')",
    description: 'Alias for `escape` — escapes a string for the given context.',
    link: `${TWIG_DOCS}/filters/escape.html`,
  },
  escape: {
    kind: 'filter',
    source: 'twig',
    signature: "value|escape('html'|'js'|'css'|'url'|'html_attr')",
    description: 'Escapes a string for safe output in the given context.',
    link: `${TWIG_DOCS}/filters/escape.html`,
  },
  filter: {
    kind: 'filter',
    source: 'twig',
    signature: 'array|filter(callback)',
    description: 'Returns array elements that pass the callback (PHP closure).',
    link: `${TWIG_DOCS}/filters/filter.html`,
  },
  first: {
    kind: 'filter',
    source: 'twig',
    signature: 'iterable|first',
    description: 'Returns the first item of a sequence, mapping, or string.',
    link: `${TWIG_DOCS}/filters/first.html`,
  },
  format: {
    kind: 'filter',
    source: 'twig',
    signature: "string|format(...args)",
    description: 'Returns a `sprintf`-style formatted string.',
    link: `${TWIG_DOCS}/filters/format.html`,
  },
  join: {
    kind: 'filter',
    source: 'twig',
    signature: "array|join(glue = '', and = null)",
    description: 'Joins array items with `glue`. Optional `and` for the last separator.',
    link: `${TWIG_DOCS}/filters/join.html`,
  },
  json_encode: {
    kind: 'filter',
    source: 'twig',
    signature: 'value|json_encode(options = 0)',
    description: 'Returns the JSON representation of a value.',
    link: `${TWIG_DOCS}/filters/json_encode.html`,
  },
  keys: {
    kind: 'filter',
    source: 'twig',
    signature: 'mapping|keys',
    description: 'Returns the keys of an array or object.',
    link: `${TWIG_DOCS}/filters/keys.html`,
  },
  last: {
    kind: 'filter',
    source: 'twig',
    signature: 'iterable|last',
    description: 'Returns the last item of a sequence, mapping, or string.',
    link: `${TWIG_DOCS}/filters/last.html`,
  },
  length: {
    kind: 'filter',
    source: 'twig',
    signature: 'value|length',
    description: 'Returns the number of items, characters, or array elements.',
    link: `${TWIG_DOCS}/filters/length.html`,
  },
  lower: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|lower',
    description: 'Lowercases a string.',
    link: `${TWIG_DOCS}/filters/lower.html`,
  },
  map: {
    kind: 'filter',
    source: 'twig',
    signature: 'array|map(callback)',
    description: 'Maps array items via a callback.',
    link: `${TWIG_DOCS}/filters/map.html`,
  },
  merge: {
    kind: 'filter',
    source: 'twig',
    signature: 'array|merge(other)',
    description: 'Merges arrays or hashes (later keys win).',
    link: `${TWIG_DOCS}/filters/merge.html`,
  },
  nl2br: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|nl2br',
    description: 'Converts newlines to `<br />` tags.',
    link: `${TWIG_DOCS}/filters/nl2br.html`,
  },
  number_format: {
    kind: 'filter',
    source: 'twig',
    signature: "number|number_format(decimals, decimal_point, thousands_sep)",
    description: 'Formats a number for display.',
    link: `${TWIG_DOCS}/filters/number_format.html`,
  },
  raw: {
    kind: 'filter',
    source: 'twig',
    signature: 'value|raw',
    description:
      'Marks a value as safe — disables autoescape. **Use only on trusted data.**',
    link: `${TWIG_DOCS}/filters/raw.html`,
  },
  replace: {
    kind: 'filter',
    source: 'twig',
    signature: "string|replace({from: to, ...})",
    description: 'Replaces placeholders in a string with the given mapping.',
    link: `${TWIG_DOCS}/filters/replace.html`,
  },
  reverse: {
    kind: 'filter',
    source: 'twig',
    signature: 'iterable|reverse(preserveKeys = false)',
    description: 'Reverses a sequence, mapping, or string.',
    link: `${TWIG_DOCS}/filters/reverse.html`,
  },
  slice: {
    kind: 'filter',
    source: 'twig',
    signature: 'value|slice(start, length, preserveKeys = false)',
    description: 'Extracts a slice of a sequence, mapping, or string.',
    link: `${TWIG_DOCS}/filters/slice.html`,
  },
  sort: {
    kind: 'filter',
    source: 'twig',
    signature: 'array|sort(callback = null)',
    description: 'Sorts an array, optionally with a comparator callback.',
    link: `${TWIG_DOCS}/filters/sort.html`,
  },
  split: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|split(delimiter, limit = null)',
    description: 'Splits a string into an array.',
    link: `${TWIG_DOCS}/filters/split.html`,
  },
  striptags: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|striptags(allowed = null)',
    description: 'Strips HTML and PHP tags from a string.',
    link: `${TWIG_DOCS}/filters/striptags.html`,
  },
  title: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|title',
    description: 'Title-cases a string (uppercases the first letter of each word).',
    link: `${TWIG_DOCS}/filters/title.html`,
  },
  trim: {
    kind: 'filter',
    source: 'twig',
    signature: "string|trim(chars = ' \\t\\n')",
    description: 'Strips whitespace (or given characters) from both ends.',
    link: `${TWIG_DOCS}/filters/trim.html`,
  },
  upper: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|upper',
    description: 'Uppercases a string.',
    link: `${TWIG_DOCS}/filters/upper.html`,
  },
  url_encode: {
    kind: 'filter',
    source: 'twig',
    signature: 'string|url_encode',
    description: 'Percent-encodes a string for use in a URL.',
    link: `${TWIG_DOCS}/filters/url_encode.html`,
  },

  // ---------- Twig core: functions ----------
  attribute: {
    kind: 'function',
    source: 'twig',
    signature: 'attribute(object, key, args = [])',
    description:
      'Dynamically accesses a property/method on an object using a string key.',
    link: `${TWIG_DOCS}/functions/attribute.html`,
  },
  constant: {
    kind: 'function',
    source: 'twig',
    signature: "constant('Class::CONSTANT')",
    description: 'Returns the value of a PHP class constant.',
    link: `${TWIG_DOCS}/functions/constant.html`,
  },
  cycle: {
    kind: 'function',
    source: 'twig',
    signature: 'cycle(array, position)',
    description:
      'Cycles through an array of values based on the given position (often `loop.index0`).',
    link: `${TWIG_DOCS}/functions/cycle.html`,
  },
  dump: {
    kind: 'function',
    source: 'twig',
    signature: 'dump(...vars)',
    description:
      'Debug-prints variables (requires the Twig debug extension to be enabled).',
    link: `${TWIG_DOCS}/functions/dump.html`,
  },
  max: {
    kind: 'function',
    source: 'twig',
    signature: 'max(...values)',
    description: 'Returns the largest value.',
    link: `${TWIG_DOCS}/functions/max.html`,
  },
  min: {
    kind: 'function',
    source: 'twig',
    signature: 'min(...values)',
    description: 'Returns the smallest value.',
    link: `${TWIG_DOCS}/functions/min.html`,
  },
  random: {
    kind: 'function',
    source: 'twig',
    signature: 'random(values = null, max = null)',
    description: 'Returns a random value from an array, range, or integer max.',
    link: `${TWIG_DOCS}/functions/random.html`,
  },
  range: {
    kind: 'function',
    source: 'twig',
    signature: 'range(low, high, step = 1)',
    description: 'Returns an array containing an arithmetic progression.',
    link: `${TWIG_DOCS}/functions/range.html`,
  },

  // ---------- Twig tests ----------
  defined: {
    kind: 'test',
    source: 'twig',
    signature: 'value is defined',
    description: 'Checks whether a variable is defined in the current context.',
    link: `${TWIG_DOCS}/tests/defined.html`,
  },
  empty: {
    kind: 'test',
    source: 'twig',
    signature: 'value is empty',
    description: 'Checks whether a variable is empty (null, false, [], "", or 0).',
    link: `${TWIG_DOCS}/tests/empty.html`,
  },
  iterable: {
    kind: 'test',
    source: 'twig',
    signature: 'value is iterable',
    description: 'Checks whether the value can be iterated with `{% for %}`.',
    link: `${TWIG_DOCS}/tests/iterable.html`,
  },

  // ---------- CraftCMS: tags ----------
  cache: {
    kind: 'tag',
    source: 'craft',
    signature:
      "{% cache [globally] [for <duration>] [unless <expr>] %} ... {% endcache %}",
    description:
      'Caches a section of template output (and the queries it executes) until invalidated by a related element change or its TTL.',
    example: '{% cache for 1 hour %}\n  {# expensive content #}\n{% endcache %}',
    link: `${CRAFT_TWIG}/tags#cache`,
  },
  nav: {
    kind: 'tag',
    source: 'craft',
    signature: '{% nav <var> in <query> %} ... {% endnav %}',
    description:
      'Loops over a structure-section query and emits hierarchy-aware markup. Supports `{% ifchildren %}` and `{% children %}` inside.',
    link: `${CRAFT_TWIG}/tags#nav`,
  },
  switch: {
    kind: 'tag',
    source: 'craft',
    signature:
      '{% switch value %}{% case x %} ... {% default %} ... {% endswitch %}',
    description:
      'Switch/case branching. Cleaner than chained `{% if %}/{% elseif %}` for value matching.',
    link: `${CRAFT_TWIG}/tags#switch`,
  },
  js: {
    kind: 'tag',
    source: 'craft',
    signature: '{% js %} ... {% endjs %}',
    description:
      "Captures a JS snippet and registers it via Craft's view (avoid wrapping non-trivial JS — use external files instead).",
    link: `${CRAFT_TWIG}/tags#js`,
  },
  css: {
    kind: 'tag',
    source: 'craft',
    signature: '{% css %} ... {% endcss %}',
    description:
      "Captures a CSS snippet and registers it via Craft's view.",
    link: `${CRAFT_TWIG}/tags#css`,
  },
  hook: {
    kind: 'tag',
    source: 'craft',
    signature: "{% hook 'name' %}",
    description:
      'Invokes a template hook — plugins can attach output via `Craft::$app->view->hook()`.',
    link: `${CRAFT_TWIG}/tags#hook`,
  },
  paginate: {
    kind: 'tag',
    source: 'craft',
    signature: '{% paginate <query> as <pageInfo>, <results> %}',
    description:
      'Paginates an element query. `pageInfo` exposes `nextUrl`, `prevUrl`, `totalPages`, `currentPage`.',
    link: `${CRAFT_TWIG}/tags#paginate`,
  },
  exit: {
    kind: 'tag',
    source: 'craft',
    signature: '{% exit <statusCode> %}',
    description: 'Halts template rendering and sends an HTTP status code response.',
    link: `${CRAFT_TWIG}/tags#exit`,
  },
  header: {
    kind: 'tag',
    source: 'craft',
    signature: "{% header 'Header-Name: value' %}",
    description: 'Sets an HTTP response header.',
    link: `${CRAFT_TWIG}/tags#header`,
  },
  redirect: {
    kind: 'tag',
    source: 'craft',
    signature: "{% redirect 'url' [statusCode] %}",
    description: 'Redirects to a URL with an optional status code (default 302).',
    link: `${CRAFT_TWIG}/tags#redirect`,
  },
  requireLogin: {
    kind: 'tag',
    source: 'craft',
    signature: '{% requireLogin %}',
    description:
      'Requires the user to be logged in; otherwise redirects to the login page.',
    link: `${CRAFT_TWIG}/tags#requirelogin`,
  },
  requirePermission: {
    kind: 'tag',
    source: 'craft',
    signature: "{% requirePermission 'permissionHandle' %}",
    description: 'Requires the current user to have the named permission.',
    link: `${CRAFT_TWIG}/tags#requirepermission`,
  },
  requireGuest: {
    kind: 'tag',
    source: 'craft',
    signature: '{% requireGuest %}',
    description:
      'Requires the user to be unauthenticated (e.g. for login/register pages).',
    link: `${CRAFT_TWIG}/tags#requireguest`,
  },

  // ---------- CraftCMS: functions ----------
  alias: {
    kind: 'function',
    source: 'craft',
    signature: "alias('@web/path')",
    description: 'Resolves a Yii path alias into an absolute URL or filesystem path.',
    link: `${CRAFT_TWIG}/functions#alias`,
  },
  ceil: {
    kind: 'function',
    source: 'craft',
    signature: 'ceil(value)',
    description: 'Rounds a number up to the nearest integer.',
    link: `${CRAFT_TWIG}/functions#ceil`,
  },
  floor: {
    kind: 'function',
    source: 'craft',
    signature: 'floor(value)',
    description: 'Rounds a number down to the nearest integer.',
    link: `${CRAFT_TWIG}/functions#floor`,
  },
  csrfInput: {
    kind: 'function',
    source: 'craft',
    signature: 'csrfInput()',
    description: 'Outputs a hidden CSRF token input for forms.',
    link: `${CRAFT_TWIG}/functions#csrfinput`,
  },
  getenv: {
    kind: 'function',
    source: 'craft',
    signature: "getenv('VAR_NAME')",
    description: 'Reads an environment variable (loaded from `.env`).',
    link: `${CRAFT_TWIG}/functions#getenv`,
  },
  url: {
    kind: 'function',
    source: 'craft',
    signature: "url(path = '', params = null, scheme = null, mustShowScriptName = false)",
    description: "Generates a site URL from a path. Use `siteUrl()` for cross-site URLs.",
    link: `${CRAFT_TWIG}/functions#url`,
  },
  siteUrl: {
    kind: 'function',
    source: 'craft',
    signature: "siteUrl(path, params = null, scheme = null, siteId = null)",
    description: "Generates a URL for a specific site (or the current site if omitted).",
    link: `${CRAFT_TWIG}/functions#siteurl`,
  },

  // ---------- CraftCMS: filters ----------
  ascii: {
    kind: 'filter',
    source: 'craft',
    signature: 'string|ascii',
    description: 'Transliterates a string to ASCII (e.g. for slugs).',
    link: `${CRAFT_TWIG}/filters#ascii`,
  },
  camel: {
    kind: 'filter',
    source: 'craft',
    signature: 'string|camel',
    description: 'Converts a string to camelCase.',
    link: `${CRAFT_TWIG}/filters#camel`,
  },
  hash: {
    kind: 'filter',
    source: 'craft',
    signature: 'value|hash',
    description: 'Returns an HMAC hash useful for tamper-resistant form fields.',
    link: `${CRAFT_TWIG}/filters#hash`,
  },
  kebab: {
    kind: 'filter',
    source: 'craft',
    signature: 'string|kebab',
    description: 'Converts a string to kebab-case.',
    link: `${CRAFT_TWIG}/filters#kebab`,
  },
  snake: {
    kind: 'filter',
    source: 'craft',
    signature: 'string|snake',
    description: 'Converts a string to snake_case.',
    link: `${CRAFT_TWIG}/filters#snake`,
  },
  group: {
    kind: 'filter',
    source: 'craft',
    signature: "array|group('attribute' or callback)",
    description: 'Groups array items by an attribute name or callback result.',
    link: `${CRAFT_TWIG}/filters#group`,
  },
  literal: {
    kind: 'filter',
    source: 'craft',
    signature: 'string|literal',
    description: 'Escapes regex/special characters in a string for safe matching.',
    link: `${CRAFT_TWIG}/filters#literal`,
  },
  markdown: {
    kind: 'filter',
    source: 'craft',
    signature: "string|markdown(flavor = 'original', inlineOnly = false)",
    description: 'Renders Markdown to HTML.',
    link: `${CRAFT_TWIG}/filters#markdown`,
  },
};
