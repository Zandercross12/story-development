import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\index.jsx?browser
init_react();

// app/routes/locations/index.jsx
init_react();
var import_react = __toESM(require_react());
var Locations = () => {
  return /* @__PURE__ */ import_react.default.createElement("section", {
    id: "locations"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ import_react.default.createElement("h1", null, data[0]?.name), data[0].content.map((children) => {
    let i = 0;
    i++;
    return /* @__PURE__ */ import_react.default.createElement("p", {
      key: i
    }, children.children[0].text, /* @__PURE__ */ import_react.default.createElement("br", null));
  })));
};
var locations_default = Locations;
export {
  locations_default as default
};
//# sourceMappingURL=/build/routes/locations/index-IBVS6UH4.js.map
