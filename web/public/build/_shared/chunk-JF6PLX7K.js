import {
  React,
  __commonJS,
  init_react
} from "/build/_shared/chunk-B7AQWGVQ.js";

// node_modules/groq/lib/groq.js
var require_groq = __commonJS({
  "node_modules/groq/lib/groq.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function groq(strings) {
      for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
      }
      var lastIndex = strings.length - 1;
      return strings.slice(0, lastIndex).reduce(function(acc, str, i) {
        return acc + str + keys[i];
      }, "") + strings[lastIndex];
    };
  }
});

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
var TextComponent_default = TextComponent;

export {
  TextComponent,
  TextComponent_default,
  require_groq
};
//# sourceMappingURL=/build/_shared/chunk-JF6PLX7K.js.map
