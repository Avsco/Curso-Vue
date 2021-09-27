<template>
	<div>
		<TodoForm />
		<TodoList :todos="todos" />
		{{ todosCompleted }}
	</div>
</template>

<script>
	import { computed } from "@vue/reactivity";
	import TodoForm from "./TodoForm.vue";
	import TodoList from "./TodoList.vue";
	import { useStore } from "vuex";

	export default {
		components: {
			TodoList,
			TodoForm,
		},
		setup() {
			const store = useStore();
			const todosCompleted = computed(() => store.getters.todosCompleted);

			const todos = computed(() => store.state.todos);

			store.dispatch("getTodos");

			return { todos, todosCompleted };
		},
	};
</script>
