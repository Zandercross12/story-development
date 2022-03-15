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

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\index.jsx?browser
init_react();

// app/routes/locations/index.jsx
init_react();
var import_groq = __toESM(require_groq());
var Locations = () => {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    id: "locations"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data
  })));
};
var locations_default = Locations;
export {
  locations_default as default
};
//# sourceMappingURL=/build/routes/locations/index-BU3N4DXE.js.map
