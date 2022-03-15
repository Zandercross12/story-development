import {
  require_groq
} from "/build/_shared/chunk-B5TQMOPB.js";
import {
  useLoaderData
} from "/build/_shared/chunk-4O5VRKAY.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx?browser
init_react();

// app/routes/characters/index.jsx
init_react();
var import_groq = __toESM(require_groq());
function Characters() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    id: "characters"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, data[0]?.name), /* @__PURE__ */ React.createElement("p", null, data[0]?.content[0].children[0].text, "tee")));
}
export {
  Characters as default
};
//# sourceMappingURL=/build/routes/characters/index-A5XZBEHR.js.map
