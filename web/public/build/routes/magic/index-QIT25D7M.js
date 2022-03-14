import {
  require_groq
} from "/build/_shared/chunk-O2DNGXFP.js";
import {
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-B7AQWGVQ.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\index.jsx?browser
init_react();

// app/routes/magic/index.jsx
init_react();
var import_groq = __toESM(require_groq());
var Magic = () => {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    id: "magic"
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
var magic_default = Magic;
export {
  magic_default as default
};
//# sourceMappingURL=/build/routes/magic/index-QIT25D7M.js.map
