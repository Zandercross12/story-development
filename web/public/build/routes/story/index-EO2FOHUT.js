import {
  require_groq
} from "/build/_shared/chunk-VZQACSMR.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-7LIUR557.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\story\index.jsx?browser
init_react();

// app/routes/story/index.jsx
init_react();
var import_groq = __toESM(require_groq());
var Story = () => {
  return /* @__PURE__ */ React.createElement("section", {
    id: "story"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, data[0]?.name), data[0].content.map((children) => {
    let i = 0;
    i++;
    return /* @__PURE__ */ React.createElement("p", {
      key: i
    }, children.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  })));
};
var story_default = Story;
export {
  story_default as default
};
//# sourceMappingURL=/build/routes/story/index-EO2FOHUT.js.map
