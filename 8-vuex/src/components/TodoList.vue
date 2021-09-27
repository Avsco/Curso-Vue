<template>
	<ul>
		<TodoItem v-for="todo of todos" :key="todo.id" :todo="todo" />
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
	};
</script>

<style lang="scss" scoped></style>
