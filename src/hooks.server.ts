import { SvelteKitAuth } from '@auth/sveltekit';
import type { Handle } from '@sveltejs/kit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '$lib/drizzle';

export const handle = sequence(
	SvelteKitAuth(async () => {
		const authOptions = {
			providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
			adapter: DrizzleAdapter(db)
		};

		return authOptions;
	})
) satisfies Handle;
