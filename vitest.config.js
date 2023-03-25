import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // i am ignorning my custom '<container>' tag
          isCustomElement: (tag) => ["v-row", "v-col", "v-icon"].includes(tag),
        },
      },
    }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
