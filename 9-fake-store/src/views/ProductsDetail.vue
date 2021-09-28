<template>
	<h2>{{ product.title }}</h2>

	<img :src="product.image" :alt="product.title" />
	<div>
		<h4>Category</h4>
		<p>{{ product.category }}</p>
	</div>
	<div>
		<h4>Description</h4>
		<p>{{ product.description }}</p>
	</div>
	<div>
		<h4>Price</h4>
		<p>{{ product.price }}</p>
	</div>
</template>

<script setup>
	import { computed } from "vue";
	import { useStore } from "vuex";
	import { useRoute } from "vue-router";

	const store = useStore();
	const route = useRoute();

	store.dispatch("getProductById", route.params.id);
	const product = computed(() => store.state.product);
</script>

<style lang="scss" scoped></style>
