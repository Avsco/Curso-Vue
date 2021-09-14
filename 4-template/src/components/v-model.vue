<template>
	<!-- <div>
		<input type="text" v-model="text" />
		<pre>{{ typeof text }}</pre>

		<input type="number" v-model.number="number" />
		{{ typeof number }}
	</div> -->

	<form @submit.prevent="enviar">
		<input type="text" v-model="user.name" />
		<input type="password" v-model="user.password" />
		{{ user }}
		<!-- Buttons -->
		<button type="button">Cancel</button> //no detecta el evento submit
		<button type="submit">Submit</button> //detecta el evento submit

		<!-- Input buttons -->
		<input type="button" value="Cancel" />
		<input type="submit" value="Submit" />
	</form>
</template>

<script>
	export default {
		data() {
			return {
				text: "",
				number: 0,
				user: {
					name: "",
					password: "",
				},
			};
		},
		methods: {
			enviar() {
				console.log(this.user.name);
			},
		},
	};
</script>

<style lang="scss" scoped></style>
