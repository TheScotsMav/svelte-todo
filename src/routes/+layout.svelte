<script lang="ts">
	import Header from './header.svelte';

	import type { PageData } from './$types';
	import '../app.css';
	export let data: PageData;
</script>

<div style={data.styling} class="min-h-screen">
	<Header />
	<main class="flex flex-col items-center justify-center">
		<slot />
	</main>
</div>
