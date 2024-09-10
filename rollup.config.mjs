import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/mywidget.cjs.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/mywidget.esm.js",
      format: "esm",
    },
    {
      file: "dist/mywidget.umd.js",
      format: "umd",
      name: "MyWidgetLibrary",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  external: ["react", "react-dom"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      modules: true, // Enable CSS Modules
      extract: true, // Extract CSS to separate file
      minimize: true, // Minify CSS
    }),
  ],
};
