import { unified } from "unified";
import parse from "remark-parse";
import breaks from "remark-breaks";
import gfm from "remark-gfm";
import ins from "remark-ins";
import emoji from "remark-gemoji";
import math from "remark-math";
import rehype from "remark-rehype";
import raw from "rehype-raw";
import links from "rehype-external-links";
import katex from "rehype-katex";
import stringify from "rehype-stringify";

export default unified()
	.use(parse)
	.use(breaks)
	.use(gfm, { singleTilde: false })
	.use(ins)
	.use(emoji)
	.use(math)
	// Allow raw HTML in Markdown to be passed through. This enables
	// author-written HTML tags like <img> to be parsed and rendered.
	.use(rehype, { allowDangerousHtml: true })
	// Parse the raw HTML into the rehype tree before running other rehype plugins
	.use(raw)
	.use(links, { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] })
	.use(katex)
	.use(stringify);
