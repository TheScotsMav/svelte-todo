<script lang="ts">
	import Header from '../components/Header.svelte';

	import type { PageData } from './$types';
	import '../app.css';
	export let data: PageData;
</script>

<div class="min-h-screen">
	<Header />
	<main class="flex flex-col items-center justify-center">
		<slot />
	</main>
</div>
