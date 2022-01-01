module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  // 忽略lodash-es
  transformIgnorePatterns: ["/!node_modules\\/lodash-es/"],
};
