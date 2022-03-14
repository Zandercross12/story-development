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
  const toggleNav = (event) => {
    const target = event.target;
  };
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "nav_top"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: toggleNav
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-bars"
  }))), /* @__PURE__ */ React.createElement("ul", {
    className: "nav_list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fa-solid fa-house"
  }), " Home")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/characters"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fa-solid fa-person"
  }), " Characters")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/locations"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fa-solid fa-location-dot"
  }), " Locations")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/story"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fa-solid fa-pen"
  }), " Story")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/about"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fa-solid fa-address-card"
  }), " About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(NavLink, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("i", {
    class: "fa-solid fa-address-book"
  }), " Contact")))));
};

// app/styles/main.css
var main_default = "/build/_assets/main-W52LXUEZ.css";

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
//# sourceMappingURL=/build/routes/index-Q47PDYZY.js.map
