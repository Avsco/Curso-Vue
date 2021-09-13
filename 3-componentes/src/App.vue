<template>
	<div class="center">
		<counter></counter>
		<Counter :propNumber="1" />
	</div>
</template>

<script>
	import Counter from "./components/Counter.vue";

	export default {
		components: {
			Counter,
		},
		created() {
			console.log("Inyectado JS");
		},
		mounted() {
			console.log("Montado el HTML");
		},
		beforeDestroy() {},
	};
</script>

<style>
	.center {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	body {
		margin: 0;
	}
</style>
