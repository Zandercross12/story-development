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

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_groq = __toESM(require_groq());
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, data[0]?.name), data[0].content.map((childText) => {
    let i = 0;
    i++;
    return /* @__PURE__ */ React.createElement("p", {
      key: i
    }, console.log(childText[0].children[0].text), " ", /* @__PURE__ */ React.createElement("br", null));
  })));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-RMSVNG6W.js.map
