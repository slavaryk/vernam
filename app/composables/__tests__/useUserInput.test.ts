import { useUserInput } from "@composables/useUserInput";

describe("useUserInput", () => {
	/**
	 *
	 * This helper function is async because we need to wait
	 * for the reactive value to be updated before we can
	 * test the handler.
	 *
	 */
	async function makeMockHandlerAndChangeComposableValue(): Promise<jest.Mock> {
		const MOCK_HANDLER = jest.fn((input: string) => input);
		const { input } = useUserInput(MOCK_HANDLER);
		input.value = "Test";
		await Promise.resolve();
		return MOCK_HANDLER;
	}

	test("Should return ref with initial empty string", () => {
		const { input } = useUserInput(jest.fn());
		expect(input.value).toBe("");
	});

	test("Should call handler on changing input value", async () => {
		const MOCK_HANDLER = await makeMockHandlerAndChangeComposableValue();
		expect(MOCK_HANDLER).toBeCalledTimes(2);
	});

	test("Should call handler with input value as argument", async () => {
		const MOCK_HANDLER = await makeMockHandlerAndChangeComposableValue();
		expect(MOCK_HANDLER.mock.calls[1][0]).toBe("Test");
	});
});
