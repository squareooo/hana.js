import path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  plugins: [dts()],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "hana.js",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
  },
});
