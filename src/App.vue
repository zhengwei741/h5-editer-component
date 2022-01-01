<template>
  <l-text text="hello"></l-text>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LText from "./components/LText";

export default defineComponent({
  name: "App",
  components: {
    LText,
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
