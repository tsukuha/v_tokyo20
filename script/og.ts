import path from "node:path"
import fs from "node:fs"
import { fileURLToPath } from "node:url"
import { parse, HTMLElement } from "node-html-parser"
const __dirname = fileURLToPath(import.meta.url) // scripts/og.ts
const dist = path.join(__dirname, "../../dist")
const indexHtml = path.join(dist, "index.html")

interface OgMeta {
  name: string
  content: string
}

const OG_META = [
  {
    name: "twitter:creator", 
    content: "@karan_corons",
  },
  {
    name: "twitter:site", 
    content: "@karan_corons",
  },
  {
    name: "og:url", 
    content: "https://tsukuha.github.io/v_tokyo20",
  },
  {
    name: "og:title",
    content: "What is vuejs/language-tools?",
  },
  {
    name: "og:description",
    content: "presentation about vuejs/language-tools, created by karacoro / からころ",
  },
  {
    name: "og:image",
    content: "./img/v_tokyo.png",
  },
] as const satisfies OgMeta[]

(function transformMain() {
  const content = fs.readFileSync(indexHtml, "utf-8")
  const dom = parse(content)
  const head = dom.querySelector("head")
  if (!head) {
    console.warn("No head element found in index.html")
    return
  }

  for (const { name, content } of OG_META) {
    const meta = new HTMLElement("meta", {}, `${name}="${content}"`)
    head.appendChild(meta)
  }

  fs.writeFileSync(indexHtml, dom.toString())
})()
