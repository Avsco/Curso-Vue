<template>
	<ul class="product-list">
		<ProductsItem v-for="product of products" :key="product.id" :product="product" />
	</ul>
</template>

<script setup>
	import ProductsItem from "./ProductsItem.vue";

	defineProps({
		products: Array,
	});
</script>

<style scoped>
	.product-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: auto;
		list-style: none;
	}
</style>
