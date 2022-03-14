import {
  require_groq
} from "/build/_shared/chunk-O2DNGXFP.js";
import {
  React,
  __toESM,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-B7AQWGVQ.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\about\index.jsx?browser
init_react();

// app/routes/about/index.jsx
init_react();
var import_groq = __toESM(require_groq());
var About = () => {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, data[0]?.name), data[0].content.map((children) => {
    let i = 0;
    i++;
    return /* @__PURE__ */ React.createElement("p", {
      key: i
    }, children.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  })));
};
var about_default = About;
export {
  about_default as default
};
//# sourceMappingURL=/build/routes/about/index-M2FQW5JI.js.map
