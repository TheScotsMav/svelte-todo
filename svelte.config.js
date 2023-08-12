import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			isr: {
				// Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
				// Setting the value to `false` means it will never expire.
				expiration: 60,

				// Random token that can be provided in the URL to bypass the cached version of the asset, by requesting the asset
				// with a __prerender_bypass=<token> cookie.
				//
				// Making a `GET` or `HEAD` request with `x-prerender-revalidate: <token>` will force the asset to be re-validated.
				// bypassToken: BYPASS_TOKEN,

				// List of valid query parameters. Other parameters (such as utm tracking codes) will be ignored,
				// ensuring that they do not result in content being regenerated unnecessarily
				allowQuery: ['search']
			}
		}),
		alias: {
			// this will match a file
			$components: 'src/components'
		}
	}
};

export default config;
