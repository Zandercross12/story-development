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

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx?browser
init_react();

// app/routes/characters/index.jsx
init_react();
var import_groq = __toESM(require_groq());

// app/components/CharacterPreview/CharacterPreview.jsx
init_react();
var CharacterPreview = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("div", {
    className: "image-container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/simple.jpg",
    alt: "Me"
  })), /* @__PURE__ */ React.createElement("h1", null, "[Character Name]"), /* @__PURE__ */ React.createElement("p", null, "[Character Description]"))));
};

// app/routes/characters/index.jsx
function Characters() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "characters"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data
  }))), /* @__PURE__ */ React.createElement("section", {
    id: "latest"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Latest Characters"), /* @__PURE__ */ React.createElement(CharacterPreview, null))));
}
export {
  Characters as default
};
//# sourceMappingURL=/build/routes/characters/index-JWB3GYRZ.js.map
