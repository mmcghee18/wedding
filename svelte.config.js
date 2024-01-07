import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const dev = process.env.NODE_ENV === "development";

const config = {
	preprocess,
	kit: {
		adapter: adapterStatic(),
		paths: {
			base: dev ? "" : "/wedding"
		}
	},
	vitePlugin: {
		// experimental: {
		// 	inspector: { holdMode: true },
		// }
	}
};

export default config;
