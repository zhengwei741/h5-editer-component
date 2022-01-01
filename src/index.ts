import { App } from "vue";
import LImage from "./components/LImage";
import LText from "./components/LText";

const components = [LImage, LText];

function install(app: App): void {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}

export { LImage, LText };

export default {
  install,
};
