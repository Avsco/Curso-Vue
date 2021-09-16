<template>
	<div>
		<h1>{{ pow }}</h1>
		<button @click="addChild">add</button>
	</div>
</template>

<script>
	import { toRef } from "vue";
	import { useCounter } from "../composables/useCounter";
	export default {
		props: {
			initNumber: Number,
		},
		emit: ["addCounter"],
		setup(props, { emit }) {
			const initNumber = toRef(props, "initNumber");

			const addChild = () => {
				add();
				emit("addCounter");
			};

			const { pow, add } = useCounter(initNumber.value);

			return { pow, addChild, initNumber };
		},
	};
</script>

<style lang="scss" scoped></style>
