import type { Actions, PageServerLoad } from './$types';
import redis from '$lib/redis';

export const actions = {
	sayhello: async (event) => {
		const formData = await event.request.formData();
		const title = formData.get('title');
		// const description = formData.get('description');
		const id = formData.get('id');
		const checked = formData.get('done');
		console.log('formData', checked);
	},
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
			title: todo
		};

		const addToSet = await redis.sadd(`todos:mav-is-cool`, todoToAdd);

		if (addToSet === 0) {
			// return new Response('Todo already exists', { status: 400 });
		}

		// return new Response('OK');
	},
	updatetodo: async (event) => {
		// TODO update a todo
		const formData = await event.request.formData();
		const title = formData.get('title');
		const id = formData.get('id');
		const done = formData.get('done');

		const todo = {
			id,
			title
		};

		if (done === 'notDone') {
			const isMemeber = await redis.sismember(`todos:mav-is-cool`, todo);
			if (isMemeber !== 0) {
				await redis.smove(`todos:mav-is-cool`, `todos:mav-is-cool:done`, todo);
			}
		} else {
			const isMemeber = await redis.sismember(`todos:mav-is-cool:done`, todo);
			if (isMemeber !== 0) {
				await redis.smove(`todos:mav-is-cool:done`, `todos:mav-is-cool`, todo);
			}
		}
	},
	deletetodo: async (event) => {
		// TODO update a todo
		const formData = await event.request.formData();
		const title = formData.get('title');
		const id = formData.get('id');
		const done = formData.get('done');

		const todo = {
			id,
			title
		};

		if (done === 'notDone') {
			const isMemeber = await redis.sismember(`todos:mav-is-cool`, todo);
			if (isMemeber !== 0) {
				await redis.srem(`todos:mav-is-cool`, JSON.stringify(todo));
			}
		} else {
			const isMemeber = await redis.sismember(`todos:mav-is-cool:done`, todo);
			if (isMemeber !== 0) {
				await redis.srem(`todos:mav-is-cool:done`, JSON.stringify(todo));
			}
		}
	}
} satisfies Actions;

export const load: PageServerLoad = async (event) => {
	const todos = (await redis.smembers(`todos:mav-is-cool`)) as unknown as {
		id: string;
		title: string;
		description?: string;
	}[];

	const doneTodos = (await redis.smembers(`todos:mav-is-cool:done`)) as unknown as {
		id: string;
		title: string;
		description?: string;
	}[];

	return {
		props: {
			todos: {
				todos,
				done: doneTodos
			}
		}
	};
};
