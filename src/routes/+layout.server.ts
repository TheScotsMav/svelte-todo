import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	console.log(event.url.host);
	return {
		session: await event.locals.getSession(),
		current_host: event.url.host,
		styling: '--destructive: 150 100% 50%;'
	};
};