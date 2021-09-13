<template>
	<div>
		<h1>{{ pow2 }}</h1>
		<button @click="add">add</button>
	</div>
</template>

<script>
	export default {
		// props: ["number"],  no recomendado
		props: {
			propNumber: {
				type: Number,
				required: true,
				default: 4,
			},
		},
		data() {
			return {
				number: this.propNumber,
			};
		},
		created() {
			console.log("Inyectado JS HIJO");
		},
		methods: {
			add() {
				this.number++;
			},
		},
		computed: {
			pow2() {
				return this.number * this.number;
			},
		},
		watch: {
			number(newValue, oldValue) {
				if (newValue > 5) {
					this.number = 5;
				}
			},
		},
	};
</script>
