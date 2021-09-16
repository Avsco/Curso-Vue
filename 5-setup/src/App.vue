<template>
	<Counter :initNumber="1" @addCounter="eventCounter" />
</template>

<script>
	import Counter from "./components/CounterV3.vue";
	export default {
		components: {
			Counter,
		},
		methods: {
			eventCounter() {
				console.log("Mi hijo cambio");
			},
		},
	};
</script>

<style lang="scss" scoped></style>
