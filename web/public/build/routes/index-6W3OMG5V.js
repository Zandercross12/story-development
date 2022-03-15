import {
  Link,
  React,
  init_react
} from "/build/_shared/chunk-ELPITF45.js";

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\story-development\app\routes\index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Navbar/Navbar.jsx
init_react();
var Navbar = () => {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "nav_top"
  }, /* @__PURE__ */ React.createElement("button", null, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-bars"
  }))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, "Characters")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, "Locations")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, "Story")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, "Contact")))));
};

// app/styles/main.css
var main_default = "/build/_assets/main-OAF2MLNZ.css";

// app/routes/index.jsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: main_default
    }
  ];
}
function Index() {
  return /* @__PURE__ */ React.createElement(Navbar, null);
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-6W3OMG5V.js.map
