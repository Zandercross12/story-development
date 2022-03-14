import {
  TextComponent,
  require_groq
} from "/build/_shared/chunk-JF6PLX7K.js";
import {
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-B7AQWGVQ.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_groq = __toESM(require_groq());
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data
  }))), /* @__PURE__ */ React.createElement("section", {
    id: "characters"
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-T7EPXQAJ.js.map
