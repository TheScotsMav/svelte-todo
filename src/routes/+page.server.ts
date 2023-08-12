import type { Actions, PageServerLoad } from './$types';
import redis from '$lib/redis';

export const actions = {
	addtodo: async (event) => {
		// TODO add a todo
		const formData = await event.request.formData();
		const todo = formData.get('title');

		console.log('todo', todo);
		if (!todo) {
			// return new Response('No todo provided', { status: 400 });
		}

		const todoToAdd = {
			id: Math.random().toString(36).slice(2),
			title: todo,
			done: false
		};

		const addToSet = await redis.sadd(`todos:mav-is-cool`, todoToAdd);

		if (addToSet === 0) {
			// return new Response('Todo already exists', { status: 400 });
		}

		// return new Response('OK');
	}
} satisfies Actions;

export const load: PageServerLoad = async (event) => {
	// TODO get the user's todos
	const todos = (await redis.smembers(`todos:mav-is-cool`)) as unknown as {
		id: string;
		title: string;
		description?: string;
		done: boolean;
	}[];

	console.log('todos', todos[0].id);
	return {
		props: {
			todos
		}
	};
};
