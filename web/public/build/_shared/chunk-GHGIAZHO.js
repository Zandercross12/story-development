import {
  React,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// app/routes/home/index.jsx
init_react();
var Home = ({ data }) => {
  console.log(data[0].content.childre);
  return /* @__PURE__ */ React.createElement("section", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, data[0].name), /* @__PURE__ */ React.createElement("p", null)));
};

export {
  Home
};
//# sourceMappingURL=/build/_shared/chunk-GHGIAZHO.js.map
