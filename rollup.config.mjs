import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cdwidgets.cjs.js",
      format: "cjs", // CommonJS
      exports: "named",
    },
    {
      file: "dist/cdwidgets.esm.js",
      format: "esm", // ES Module
    },
    {
      file: "dist/cdwidgets.umd.js",
      format: "umd", // UMD for browsers
      name: "MyWidgetLibrary",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
  ],
  external: ["react", "react-dom"], // Exclude react and react-dom from the bundle
  plugins: [resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" })],
};
