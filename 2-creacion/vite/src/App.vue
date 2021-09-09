<template>
	<div class="center">
		<p>{{ count }}</p>
		<button @click="addCount">add</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 1,
				boolean: true,
			};
		},
		methods: {
			addCount() {
				this.count++;
			},
			changeBool() {
				this.boolean != this.boolean;
			},
		},
	};
</script>

<style>
	.center {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
</style>
