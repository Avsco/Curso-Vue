import { createStore } from "vuex";

const store = createStore({
	state: {
		products: [],
		product: {},
	},
	mutations: {
		setProducts(state, payload) {
			state.products = payload;
		},
		setProduct(state, payload) {
			state.product = payload;
		},
	},
	actions: {
		async getAllProducts({ commit }) {
			const respose = await fetch("https://fakestoreapi.com/products");
			const data = await respose.json();

			commit("setProducts", data);
		},
		async getProductById({ commit }, id) {
			const respose = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await respose.json();

			commit("setProduct", data);
		},
	},
});

export { store };
