import { shallowMount } from "@vue/test-utils";
import LText from "@/components/LText/LText.vue";

describe("LText.vue", () => {
  const location = window.location;
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { href: "" },
    });
  });

  afterEach(() => {
    window.location = location;
  });

  it("props text", () => {
    const msg = "hello";
    const wrapper = shallowMount(LText, {
      props: {
        text: msg,
      },
    });
    // 是否正确text
    expect(wrapper.text()).toMatch(msg);
    // 是否正确标签
    expect(wrapper.element.tagName).toBe("SPAN");
    // css 样式
    const style = wrapper.attributes().style;
    expect(style.includes("font-size")).toBeTruthy;
    // 不存在的css样式
    expect(style.includes("actionType")).toBeFalsy;
  });

  it("action", async () => {
    const msg = "hello";
    const wrapper = shallowMount(LText, {
      props: {
        tag: "h2",
        text: msg,
        actionType: "url",
        url: "www.test.com",
      },
    });
    expect(wrapper.element.tagName).toBe("H2");
    await wrapper.trigger("click");
    expect(window.location.href).toBe("www.test.com");
  });
});
