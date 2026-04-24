import fs from "fs";

let s = fs.readFileSync("_body_fragment.tsx", "utf8");
s = s.replace(/\{\/\*\*\/\}\s*\n/g, "");
s = s.replace(/<br>/g, "<br />");
s = s.replace(/<img ([^>]+)>/g, "<img $1 />");
s = s.replace(/<source ([^>]+)>/g, "<source $1 />");
s = s.replace(/<input ([^>]+)>/g, "<input $1 />");
s = s.replace(/novalidate/g, "noValidate");

function styleToObject(css) {
  const out = [];
  for (const part of css.split(";").map((x) => x.trim()).filter(Boolean)) {
    const i = part.indexOf(":");
    if (i < 0) continue;
    const rawKey = part.slice(0, i).trim();
    const rawVal = part.slice(i + 1).trim();
    const key = rawKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    if (/^-?\d+(\.\d+)?$/.test(rawVal)) {
      out.push(`${key}: ${rawVal}`);
    } else {
      out.push(`${key}: "${rawVal.replace(/"/g, '\\"')}"`);
    }
  }
  return `{{${out.join(", ")}}}`;
}

s = s.replace(/style="([^"]+)"/g, (_, css) => `style=${styleToObject(css)}`);
s = s.replace(/<iframe ([^>]+)><\/iframe>/g, "<iframe $1 />");

const block = `<div id="footer-canvas-container">
            <div id="footer-loading">Loading 3D Asset...</div>
        </div>`;
s = s.replace(block, "<FooterLogo />");

fs.mkdirSync("components", { recursive: true });
s = s.replace(/src="(bg-|hero\.mp4)/g, 'src="/$1');

fs.writeFileSync("components/_LandingMarkup.tsx", s);
console.log("wrote components/_LandingMarkup.tsx");
