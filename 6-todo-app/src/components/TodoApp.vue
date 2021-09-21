<template>
	<div>
		<TodoForm @createTodo="registerTodo" />
		<TodoList :todos="todos" @deleteTodo="deleteTodo" @completeTodo="completeTodo" />
	</div>
</template>

<script>
	import { ref } from "@vue/reactivity";
	import TodoForm from "./TodoForm.vue";
	import TodoList from "./TodoList.vue";

	export default {
		components: {
			TodoList,
			TodoForm,
		},
		setup() {
			const todos = ref([]);

			const registerTodo = (todo) => {
				todos.value.push(todo);
			};

			const deleteTodo = (id) => {
				todos.value = todos.value.filter((todo) => todo.id != id);
			};

			const completeTodo = (completeTodo) => {
				todos.value = todos.value.map((todo) => {
					if (todo.id == completeTodo.id) {
						todo.isCompleted = !todo.isCompleted;
					}
					return todo;
				});
			};

			return { registerTodo, todos, deleteTodo, completeTodo };
		},
	};
</script>
