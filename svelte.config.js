import adapter from '@sveltejs/adapter-cloudflare';
import sveltePreprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
import { mdsvex } from 'mdsvex'

export default {
	kit: {
		adapter: adapter(),
		vite: {plugins: [svg(/*options*/)]}
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