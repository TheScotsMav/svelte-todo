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
	import { Checkbox } from '$components/ui/checkbox';
	import { Label } from '$components/ui/label';
	// export let data: PageData;
	type Todo = {
		id: number;
		title: string;
		description?: string;
		done: boolean;
	};

	let todos: Todo[] = [
		{
			id: 1,
			title: 'Learn Svelte',
			done: false
		},
		{
			id: 2,
			title: 'Learn SvelteKit',
			done: false
		},
		{
			id: 3,
			title: 'Learn TypeScript',
			done: false
		}
	];

	function handleClick() {
		alert('Button Clicked');
	}
</script>

<div class="container grid grid-cols-3 gap-4 mx-4 mt-4 md:mx-0">
	{#each todos as todo (todo.id)}
		<Card>
			<CardHeader>
				<CardTitle>{todo.title}</CardTitle>
				{#if todo.description}<CardDescription>{todo.description}</CardDescription>{/if}
			</CardHeader>
			<CardContent>
				<Checkbox id={`${todo.title}-`} checked={todo.done} />
				<Label for={`${todo.title}-`}>Done</Label>
			</CardContent>
		</Card>
	{/each}
</div>
