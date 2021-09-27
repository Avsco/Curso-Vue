<template>
	<form @submit.prevent="createTodo">
		<input type="text" v-model="todoText" />
		<button>Crear TODO</button>
	</form>
</template>

<script>
	import { ref } from "@vue/reactivity";
	import { useStore } from "vuex";

	export default {
		setup() {
			const store = useStore();
			const todoText = ref("");

			const createTodo = () => {
				todoText.value = "";
				store.commit("registerTodo", todoText.value);
			};

			return { todoText, createTodo };
		},
	};
</script>

<style lang="scss" scoped></style>
