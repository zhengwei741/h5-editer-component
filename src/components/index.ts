import { App } from "vue";
import LImage from "./LImage";
import LText from "./LText";

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
