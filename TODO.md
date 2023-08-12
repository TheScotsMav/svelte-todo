So what does this need to do?

# Essential

- Show todos
- Mark todos as done
- Add todos
- Remove todos

# Nice to have

- Save todos to db (redis)
- edit todos

https://svelte-todo-rust-phi.vercel.app

How are we storing and retrieving todos?

- We need to store todos in a database
- We need to retrieve todos from a database
- We need to update todos in a database
- We need to delete todos from a database

redis set - todo IDs `todos:user_id`
redis hash - todo data `todo:todo_id`

```json
{
  "id": "todo_id",
  "title": "todo title",
  "description": "todo description",
  "done": false
}
```

