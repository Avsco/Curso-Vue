<template>
	<li>
		<div class="card v-card">
			<router-link :to="{ name: 'products-detail', params: { id: product.id } }">
				<img :src="product.image" class="card-img-top" :alt="product.title" height="200" />
			</router-link>
			<div class="card-body">
				<h5 class="card-title">{{ product.title }}</h5>
				<p class="card-text">{{ product.description }}</p>
				<p class="card-text">
					<small class="text-muted">{{ product.category }}</small>
				</p>
			</div>
		</div>
	</li>
</template>

<script setup>
	defineProps({ product: Object });
</script>

<style scoped>
	.v-card h5 {
		color: inherit;
		text-decoration: none;
	}
</style>
