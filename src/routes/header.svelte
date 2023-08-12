<script>
	const navItems = [
		{
			title: 'home',
			url: '/'
		},
		{
			title: 'something',
			url: '/something'
		}
	];
</script>

<header
	class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur"
>
	<div class="container flex h-14 items-center justify-between">
		<div>Some logo</div>
		<nav>
			<ul class="flex gap-4">
				{#each navItems as navItem}
					<li><a href={navItem.url}>{navItem.title}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
</header>
