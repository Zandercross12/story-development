import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// app/routes/home/index.jsx
init_react();
var loader = async ({ params }) => {
  return json(params.slug);
};
var Home = () => {
  return /* @__PURE__ */ React.createElement("section", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null), /* @__PURE__ */ React.createElement("p", null)));
};

export {
  loader,
  Home
};
//# sourceMappingURL=/build/_shared/chunk-R3ISHVEM.js.map
