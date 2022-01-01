import baseOption, { name, file } from "./rollup.config";

export default {
  ...baseOption,
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
};
