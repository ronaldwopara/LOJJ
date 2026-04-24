import fs from "fs";

const html = fs.readFileSync("index.html", "utf8");
const start = html.indexOf("<style>") + "<style>".length;
const end = html.indexOf("</style>");
let css = html.slice(start, end).trim();
css = css.replace(/url\('LOGO\.otf'\)/g, "url('/LOGO.otf')");
fs.mkdirSync("app", { recursive: true });
fs.writeFileSync(
  "app/globals.css",
  `@import "tailwindcss";\n\n${css}\n`,
);
console.log("wrote app/globals.css");
