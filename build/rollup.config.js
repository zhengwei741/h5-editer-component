import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { name } from "../package.json";

export { name };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const file = (type) => `./dist/${name}.${type}.js`;

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
};

export default {
  input: "./src/index.ts",
  output: {
    file: file("esm"),
    format: "es",
  },
  plugins: [
    typescript({
      tsconfigOverride: overrides,
    }),
    vue({ preprocessStyles: true }),
    css({
      output: "bundle.css",
    }),
  ],
  external: ["vue", "lodash-es"],
};
