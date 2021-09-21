<template>
	<form @submit.prevent="createTodo">
		<input type="text" v-model="todoText" />
		<button>Crear TODO</button>
	</form>
</template>

<script>
	import { ref } from "@vue/reactivity";

	export default {
		setup(_, { emit }) {
			const todoText = ref("");

			const createTodo = () => {
				const todo = {
					id: Date.now(),
					text: todoText.value,
					isCompleted: false,
				};

				emit("createTodo", todo);
			};

			return { todoText, createTodo };
		},
	};
</script>

<style lang="scss" scoped></style>
