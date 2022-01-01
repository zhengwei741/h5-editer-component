import baseOption, { file } from "./rollup.config";

export default {
  ...baseOption,
  output: {
    name: "LowCodeComponent",
    file: file("umd"),
    format: "umd",
    globals: {
      vue: "Vue",
      "lodash-es": "_",
    },
  },
  exports: "named",
};
