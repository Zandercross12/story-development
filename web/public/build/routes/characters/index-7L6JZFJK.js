import {
  TextComponent
} from "/build/_shared/chunk-XIYO5ZND.js";
import {
  require_groq
} from "/build/_shared/chunk-O2DNGXFP.js";
import {
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-B7AQWGVQ.js";

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
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data
  })));
}
export {
  Characters as default
};
//# sourceMappingURL=/build/routes/characters/index-7L6JZFJK.js.map
