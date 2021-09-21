<template>
	<ul>
		<TodoItem
			v-for="todo of todos"
			:key="todo.id"
			:todo="todo"
			@deleteTodo="deleteTodo"
			@completeTodo="completeTodo"
		/>
	</ul>
</template>

<script>
	import TodoItem from "./TodoItem.vue";

	export default {
		components: {
			TodoItem,
		},
		props: {
			todos: Array,
		},
		methods: {
			deleteTodo(id) {
				this.$emit("deleteTodo", id);
			},
			completeTodo(todoCompleted) {
				this.$emit("completeTodo", todoCompleted);
			},
		},
	};
</script>

<style lang="scss" scoped></style>
