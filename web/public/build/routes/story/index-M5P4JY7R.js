import {
  TextComponent_default,
  require_groq
} from "/build/_shared/chunk-JF6PLX7K.js";
import {
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-B7AQWGVQ.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\story\index.jsx?browser
init_react();

// app/routes/story/index.jsx
init_react();
var import_groq = __toESM(require_groq());
var Story = () => {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    id: "story"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data
  })));
};
var story_default = Story;
export {
  story_default as default
};
//# sourceMappingURL=/build/routes/story/index-M5P4JY7R.js.map
