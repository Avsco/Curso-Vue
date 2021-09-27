import { createStore } from "vuex";

const store = createStore({
	state: {
		todos: [],
	},
	getters: {
		todosCompleted: (state) => state.todos.filter((todo) => todo.isCompleted),
	},
	mutations: {
		registerTodo(state, todoText) {
			const todo = {
				id: Date.now(),
				text: todoText,
				isCompleted: false,
			};
			state.todos.push(todo);
		},
		deleteTodo(state, id) {
			state.todos = state.todos.filter((todo) => todo.id != id);
		},
		completeTodo(state, completeTodo) {
			state.todos = state.todos.map((todo) => {
				if (todo.id == completeTodo.id) {
					todo.isCompleted = !todo.isCompleted;
				}
				return todo;
			});
		},
	},
	actions: {
		async getTodos({ commit }) {
			const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
			const todo = await response.json();
			commit("registerTodo", todo.title);
		},
	},
});

export { store };
