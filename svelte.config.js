import adapter from '@sveltejs/adapter-cloudflare';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

export default {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
		  extensions: ['.md'],
		  layout: 'src/routes/blog/_layout.svelte'
		})
	  ]
};