<template>
	<button class="base-button">
		<slot></slot>
	</button>
</template>

<script setup>
	import { toRef, defineProps } from "vue";

	const props = defineProps({
		color: {
			default: "red",
			type: String,
		},
	});

	const color = toRef(props, "color");
</script>

<style scoped>
	.base-button {
		background: v-bind(color);
		color: white;
		font-weight: 600;
	}
</style>
