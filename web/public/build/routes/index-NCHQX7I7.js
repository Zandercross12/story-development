import {
  NavLink,
  React,
  init_react
} from "/build/_shared/chunk-KUNL74NN.js";

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
  }))), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "Characters")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "Locations")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "Story")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
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
//# sourceMappingURL=/build/routes/index-NCHQX7I7.js.map
