<template>
	<h1>Products</h1>
	<ProductsList :products="products" />
</template>

<script setup>
	import ProductsList from "../components/ProductsList.vue";
	import { useStore } from "vuex";
	import { computed, onUnmounted } from "vue";

	const store = useStore();
	store.dispatch("getAllProducts");
	const products = computed(() => store.state.products);
	onUnmounted(() => {
		store.commit("setProduct", {});
	});
</script>

<style scoped></style>
