import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import ProductsDetail from "../views/ProductsDetail.vue";
import ProductsCreate from "../views/ProductsCreate.vue";

const router = createRouter({
	routes: [
		{ path: "/", component: Home, name: "home" },
		{ path: "/about", component: About, name: "about" },
		{ path: "/products", component: Products, name: "products" },
		{ path: "/products/:id", component: ProductsDetail, name: "products-detail" },
		{ path: "/products/create/:id?", component: ProductsCreate, name: "products-create" },
	],
	history: createWebHistory(),
});

export { router };
