import { ref, computed, watchEffect } from "vue";

export function useCounter(initValue) {
	let number = initValue ? ref(initValue) : ref(2);

	const pow = computed(() => number.value * number.value);

	const add = () => {
		number.value = number.value + 1;
	};

	watchEffect(() => {
		if (number.value > 5) {
			number.value = 5;
		}
	});

	return {
		number,
		pow,
		add,
	};
}
