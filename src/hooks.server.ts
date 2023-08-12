import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import GitHub from '@auth/core/providers/github';
// import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(
	SvelteKitAuth(async () => {
		const authOptions = {
			providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
			// adapter:
		};

		return authOptions;
	})
) satisfies Handle;
