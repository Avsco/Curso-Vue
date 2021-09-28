<template>
	<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
		<router-link
			to="/"
			class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
		>
			<svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
			<span class="fs-4">Fake Shop</span>
		</router-link>

		<ul class="nav nav-pills">
			<li v-for="link in links" :key="link.title" class="nav-item">
				<router-link :to="{ name: link.nameComponent }" :class="['nav-link', { active: link.active }]">
					{{ link.title }}
				</router-link>
			</li>
		</ul>
	</header>
</template>

<script setup>
	import { ref, watchEffect } from "vue";
	import { useRoute } from "vue-router";

	const route = useRoute();

	const links = ref([
		{
			title: "Home",
			nameComponent: "home",
			active: true,
		},
		{
			title: "About",
			nameComponent: "about",
			active: false,
		},
		{
			title: "Products",
			nameComponent: "products",
			active: false,
		},
		{
			title: "Create products",
			nameComponent: "products-create",
			active: false,
		},
	]);

	watchEffect(() => {
		links.value.forEach((link) => {
			link.active = link.nameComponent === route.name ? true : false;
		});
	});
</script>

<style scoped>
	ul {
		margin-right: 1rem;
	}
</style>
