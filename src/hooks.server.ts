import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import GitHub from '@auth/core/providers/github';
// import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';

const subdomain = 'something';

export const rewrite: Handle = async ({ event, resolve }) => {
	//console.log(event.url);
	// redirect subdomain.domain.com/to domain.com/subdomain/
	// console.log(event.url.href);
	// let response: Response;
	// if (event.url.host.startsWith(subdomain) && !event.url.href.includes('favicon')) {
	// 	// change subdomain.domain.com to domain.com
	// 	event.url.host = event.url.host.replace(`${subdomain}.`, '');

	// 	// change /path to /subdomain/path
	// 	//event.url.pathname = `/${subdomain}` + event.url.pathname;
	// 	console.log(event.url.href);

	// 	// return Response.redirect(event.url, 302);
	// 	response = await event.fetch(event.url.href); //response.url = 'foo'
	// 	return response;
	// }

	// console.log(event.url);

	const response = await resolve(event);

	return response;
};

export const handle = sequence(
	SvelteKitAuth(async () => {
		const authOptions = {
			providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
			// adapter:
		};

		return authOptions;
	}),
	rewrite
) satisfies Handle;
