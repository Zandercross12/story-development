import {
  React,
  init_react
} from "/build/_shared/chunk-B7AQWGVQ.js";

// app/components/TextComponent/TextComponent.jsx
init_react();
var TextComponent = ({ data }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, data[0]?.name), data[0].content.map((children) => {
    let i = 0;
    i++;
    return /* @__PURE__ */ React.createElement("p", {
      key: i
    }, children.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  }));
};

export {
  TextComponent
};
//# sourceMappingURL=/build/_shared/chunk-5FEEJCWQ.js.map
