<script lang="ts">
	import { enhance } from '$app/forms';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$components/ui/card';
	import { Checkbox } from './ui/checkbox';
	import { Label } from './ui/label';

	type Todo = {
		id: string;
		title: string;
		description?: string;
	};

	export let todo: Todo;
	export let done: 'done' | 'notDone' = 'notDone';
</script>

<Card class="relative">
	<CardHeader>
		<CardTitle>{todo.title}</CardTitle>
		{#if todo.description}<CardDescription>{todo.description}</CardDescription>{/if}
	</CardHeader>
	<CardContent>
		<form method="post" action="?/updatetodo" class="flex gap-2 items-center" use:enhance>
			<Checkbox
				id={`${todo.id}-checked`}
				name="done"
				checked={done === 'done'}
				type="submit"
				value={done}
			/>
			<Label for={`${todo.id}-checked`}>Done</Label>
			<input type="hidden" name="id" value={todo.id} />
			<input type="hidden" name="title" value={todo.title} />
		</form>
	</CardContent>
	<div class="absolute top-2 right-4">
		<form method="post" action="?/deletetodo" use:enhance>
			<input type="hidden" name="id" value={todo.id} />
			<input type="hidden" name="done" value={done} />
			<input type="hidden" name="title" value={todo.title} />
			<button type="submit" class="flex-shrink-0 justify-center items-center">×</button>
		</form>
	</div>
</Card>
