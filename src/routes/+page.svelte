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
	import Input from '$components/ui/input/Input.svelte';
	import { Label } from '$components/ui/label';
	import type { PageData } from './$types';
	// export let data: PageData;

	export let data: PageData;
</script>

<div>
	<form class="flex mt-4 gap-4 items-center" method="POST" action="?/addtodo">
		<Label for="title">Title</Label>
		<Input type="text" name="title" placeholder="Title" class="w-full" required />
		<Button type="submit" variant="default">+ Add todo</Button>
	</form>
</div>

<!-- {data.props.todos[0].id} -->
<h3 class="text-2xl font-bold mt-4">Todo</h3>
<div class="container grid grid-cols-3 gap-4 mx-4 mt-4 md:mx-0">
	{#each data.props.todos.todos as todo (todo.id)}
		<Card>
			<CardHeader>
				<CardTitle>{todo.title}</CardTitle>
				{#if todo.description}<CardDescription>{todo.description}</CardDescription>{/if}
			</CardHeader>
			<CardContent>
				<form method="post" action="?/updatetodo">
					<Checkbox
						id={`${todo.id}-checked`}
						name="done"
						checked={false}
						type="submit"
						value="notDone"
					/>
					<Label for={`${todo.id}-checked`}>Done</Label>
					<input type="hidden" name="id" value={todo.id} />
					<input type="hidden" name="title" value={todo.title} />
				</form>
			</CardContent>
		</Card>
	{/each}
</div>
<h3 class="text-2xl font-bold mt-4">Done</h3>
<div class="container grid grid-cols-3 gap-4 mx-4 mt-4 md:mx-0">
	{#each data.props.todos.done as todo (todo.id)}
		<Card>
			<CardHeader>
				<CardTitle>{todo.title}</CardTitle>
				{#if todo.description}<CardDescription>{todo.description}</CardDescription>{/if}
			</CardHeader>
			<CardContent>
				<form method="post" action="?/updatetodo">
					<Checkbox
						id={`${todo.id}-checked`}
						name="done"
						checked={true}
						type="submit"
						value="notDone"
					/>
					<Label for={`${todo.id}-checked`}>Done</Label>
					<input type="hidden" name="id" value={todo.id} />
					<input type="hidden" name="title" value={todo.title} />
				</form>
			</CardContent>
		</Card>
	{/each}
</div>
