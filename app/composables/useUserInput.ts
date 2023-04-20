import { ref, watchEffect } from "vue";

export function useUserInput(onInputHandler: (input: string) => void) {
	const input = ref("");
	watchEffect(() => {
		onInputHandler(input.value);
	});

	return { input };
}
