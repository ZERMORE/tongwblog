/**
 * Build a root-relative URL that always includes Astro's configured base path.
 * This is required for GitHub Project Pages, where the site is hosted below
 * /tongwblog instead of at the domain root.
 */
export function withBase(path = ""): string {
	const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
	const relativePath = path.replace(/^\/+/, "");

	return relativePath ? `${base}/${relativePath}` : `${base}/`;
}

export default withBase;
