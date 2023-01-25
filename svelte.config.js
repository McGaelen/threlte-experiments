import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocessThrelte(),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
