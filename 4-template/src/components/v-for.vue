<template>
	<div v-for="(value, index) of items" :key="value.id">{{ index }}-{{ value.name }}</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{ name: "fruta", id: 1 },
					{ name: "carne", id: 2 },
					{ name: "verdura", id: 2 },
				],
			};
		},
	};
</script>

<style lang="scss" scoped></style>
