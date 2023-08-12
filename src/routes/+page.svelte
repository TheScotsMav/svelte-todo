<script lang="ts">
	// import type { PageData } from './$types';
	import { Button } from '$components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$components/ui/card';
	// export let data: PageData;

	function handleClick() {
		alert('Button Clicked');
	}
</script>

<Button>Something</Button>

<Card>
	<CardHeader>
		<CardTitle>Card Title</CardTitle>
		<CardDescription>Card Description</CardDescription>
	</CardHeader>
	<CardContent>
		<p>Card Content</p>
	</CardContent>
	<CardFooter>
		<p>Card Footer</p>
	</CardFooter>
</Card>
