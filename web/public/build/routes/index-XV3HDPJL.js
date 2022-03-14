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
  }))), /* @__PURE__ */ React.createElement("ul", {
    className: "nav_list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/characters"
  }, "Characters")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/locations"
  }, "Locations")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/story"
  }, "Story")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/about"
  }, "About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/contact"
  }, "Contact")))));
};

// app/styles/main.css
var main_default = "/build/_assets/main-WKPB4USX.css";

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
//# sourceMappingURL=/build/routes/index-XV3HDPJL.js.map
