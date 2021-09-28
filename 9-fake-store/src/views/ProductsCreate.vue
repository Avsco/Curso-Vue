<template>
	<form @submit.prevent="create">
		<label>Title: <input type="text" v-model="product.title" /> </label>
		<label>Price: <input type="number" v-model="product.price" /> </label>
		<label>Image: <input type="text" v-model="product.image" /> </label>
		<label v-if="isCreated">Category: <input type="text" v-model="product.category" /> </label>
		<label>Description <textarea cols="30" rows="10" v-model="product.description"></textarea></label>

		<button>{{ isCreated ? "Crear" : "Actualizar" }}</button>
	</form>
</template>

<script setup>
	import { computed, ref } from "@vue/reactivity";
	import { onMounted, watchEffect } from "@vue/runtime-core";
	import { useStore } from "vuex";
	import { useRoute } from "vue-router";

	const route = useRoute();
	const store = useStore();
	const product = ref({});
	const productAwait = computed(() => store.state.product);
	const isCreated = ref(route.params.id == undefined);

	onMounted(async () => {
		if (!isCreated) {
			store.dispatch("getProductById", route.params.id);
		}
	});

	watchEffect(() => {
		console.log(productAwait.value);
		if (productAwait.value) {
			product.value = productAwait.value;
		}
	});

	const create = async () => {
		try {
			const response = fetch("https://fakestoreapi.com/products", {
				method: isCreated ? "POST" : "PUT",
				body: JSON.stringify({
					id: route.params.id,
					title: product.value.title,
					price: product.value.price,
					description: product.value.description,
					image: product.value.image,
					category: product.value.category,
				}),
			});
			console.log(response);
		} catch (error) {
			console.log(0);
		}
	};
</script>

<style lang="scss" scoped></style>
