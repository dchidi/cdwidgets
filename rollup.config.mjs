import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cdwidgets.cjs.js",
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/cdwidgets.esm.js",
      format: "esm",
    },
    {
      file: "dist/cdwidgets.umd.js",
      format: "umd",
      name: "cdwidgetsLibrary",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  external: ["react", "react-dom", "dayjs", "classnames", "react-icons"],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: [
        "**/*.stories.tsx", // Exclude Storybook story files
        "**/*.stories.module.css", // Exclude Storybook-specific CSS modules
        "**/*.stories.css", // Exclude Storybook-specific CSS
      ],
    }),
    postcss({
      modules: true, // Enable CSS Modules
      extract: true, // Extract CSS to separate file
      minimize: true, // Minify CSS
    }),
  ],
};
