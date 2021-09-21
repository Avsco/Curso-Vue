<template>
	<li :class="[{ isCompleted: todo.isCompleted }, 'todo-item']">
		<span>{{ todo.text }}</span>
		<base-button @click="deleteTodo">Borrar</base-button>
		<base-button color="green" @click="completeTodo">Completado</base-button>
	</li>
</template>

<script>
	import { toRef } from "vue";
	import BaseButton from "./BaseButton.vue";

	export default {
		props: {
			todo: Object,
		},
		components: {
			BaseButton,
		},
		setup(props, { emit }) {
			const todo = toRef(props, "todo");

			const deleteTodo = () => {
				emit("deleteTodo", todo.value.id);
			};

			const completeTodo = () => {
				emit("completeTodo", {
					isCompleted: !todo.value.isCompleted,
					id: todo.value.id,
				});
			};

			return {
				deleteTodo,
				completeTodo,
			};
		},
	};
</script>

<style scoped>
	.isCompleted {
		text-decoration-line: line-through;
	}
</style>
