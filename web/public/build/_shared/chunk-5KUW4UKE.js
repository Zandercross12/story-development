import {
  useLoaderData
} from "/build/_shared/chunk-JRIHS74B.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// node_modules/groq/lib/groq.js
var require_groq = __commonJS({
  "node_modules/groq/lib/groq.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function groq2(strings) {
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

// app/routes/home/index.jsx
init_react();

// app/lib/sanity/client.js
init_react();
var client = {
  projectId: "ufdizlou",
  dataset: "production",
  useCdn: "true",
  apiVersion: "2022-3-7"
};

// app/routes/home/index.jsx
var import_groq = __toESM(require_groq());
var loader = async () => {
  const page = await client().fetch(import_groq.default`*[_type == "pages" && name == "Home"]`);
  return page;
};
var Home = () => {
  const { data } = useLoaderData();
  console.log(data);
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
//# sourceMappingURL=/build/_shared/chunk-5KUW4UKE.js.map
