import {
  require_groq
} from "/build/_shared/chunk-6TRSAQRT.js";
import {
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-GTXQMN7T.js";

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
//# sourceMappingURL=/build/routes/story/index-P7H7VBQF.js.map
