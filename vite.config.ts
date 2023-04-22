import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	root: "app",
	base: "./",
	resolve: {
		alias: {
			"@composables": "/composables",
			"@atoms": "/components/atoms",
		},
	},
	plugins: [vue()],
});
