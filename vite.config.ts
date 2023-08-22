import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['@auth/sveltekit', '@auth/drizzle-adapter', '@auth/core', 'drizzle-orm']
	}
} as UserConfig);
