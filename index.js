const bold = (string) => `**${string}**`;
const italic = (string) => `*${string}*`;
const underline = (string) => `__${string}__`;
const strikethrough = (string) => `~~${string}~~`;
const block = (string) => `\`${string}\``;
const codeblock = (string, lang) => `\`\`\`${lang ?? ""}\n${string}\n\`\`\``;
const quote = (string) => `> ${string}`;
const multilineQuote = (string) => `>>> ${string}`;
const spolier = (string) => `||${string}||`;

module.exports = {
  bold,
  italic,
  underline,
  strikethrough,
  block,
  codeblock,
  quote,
  multilineQuote,
  spolier,
};
