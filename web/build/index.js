var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// app/lib/sanity/client.js
var require_client = __commonJS({
  "app/lib/sanity/client.js"(exports, module2) {
    init_react();
    var sanityClient = require("@sanity/client");
    module2.exports = sanityClient({
      projectId: "ufdizlou",
      dataset: "production",
      useCdn: "true",
      apiVersion: "2021-10-21"
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/components/Navbar/Navbar.jsx
init_react();
var import_remix2 = __toESM(require_remix());
var Navbar = () => {
  const toggleNav = () => {
    const sidenav = document.getElementById("nav-list");
    const background = document.getElementById("nav-background");
    if (sidenav.classList.contains("cooldown")) {
      return;
    }
    if (sidenav.classList.contains("nav_closed")) {
      sidenav.classList.remove("nav_closed");
      background.style.display = "block";
      setTimeout(() => {
        background.style.opacity = "50%";
        background.style.zIndex = "1";
      }, 100);
    } else {
      sidenav.classList.add("nav_closed");
      setTimeout(() => {
        background.style.display = "none";
        background.style.zIndex = "-1";
      }, 400);
      background.style.opacity = "0";
    }
    sidenav.classList.add("cooldown");
    setTimeout(() => {
      sidenav.classList.remove("cooldown");
    }, 400);
  };
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    id: "nav-background",
    className: "dark_background",
    onClick: toggleNav
  }), /* @__PURE__ */ React.createElement("div", {
    className: "nav_space"
  }), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("div", {
    className: "nav_top"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: toggleNav
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-bars"
  }))), /* @__PURE__ */ React.createElement("ul", {
    id: "nav-list",
    className: "nav_list nav_closed"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-house"
  }), " Home")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/characters"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-person"
  }), " Characters")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/locations"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-location-dot"
  }), " Locations")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/story"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-pen"
  }), " Story")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/magic"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-hat-wizard"
  }), " Magic")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/about"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-address-card"
  }), " About")), /* @__PURE__ */ React.createElement("li", {
    className: "nav_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-address-book"
  }), " Contact")))));
};

// app/styles/main.css
var main_default = "/build/_assets/main-FIH5CLLT.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\root.jsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: main_default
    }
  ];
}
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/e4319753b5.js",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function ErrorBoundary({ error }) {
  console.log(error);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/e4319753b5.js",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Error"), /* @__PURE__ */ React.createElement("p", null, "Looks like we have run into an error! Check the console for more information."), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)))));
}
function CatchBoundary() {
  const caught = (0, import_remix3.useCatch)();
  /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://kit.fontawesome.com/e4319753b5.js",
    crossOrigin: "anonymous"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, caught.status), /* @__PURE__ */ React.createElement("p", null, "Looks like the page you were searching for does not exist!"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, caught.statusText), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null)))));
}

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\likesdislikes\index.jsx
var likesdislikes_exports = {};
__export(likesdislikes_exports, {
  LikesDislikes: () => LikesDislikes,
  default: () => likesdislikes_default,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_client = __toESM(require_client());
var import_groq = __toESM(require("groq"));

// app/components/CharacterSidebar/CharacterSidebar.jsx
init_react();
var import_remix4 = __toESM(require_remix());
var CharacterSidebar = ({ character }) => {
  let i = 0;
  return /* @__PURE__ */ React.createElement("ul", {
    className: "character_sidebar"
  }, Object.keys(character).map((key) => {
    i++;
    let keyName = key;
    switch (keyName) {
      case "_createdAt":
      case "_id":
      case "_rev":
      case "_type":
      case "_updatedAt":
      case "slug":
      case "description":
      case "dateofbirth":
      case "dateofdeath":
      case "image":
      case "dislikes":
        return;
      case "likes":
        keyName = "Likes/Dislikes";
        key = "likesdislikes";
        break;
      case "name":
        keyName = character.name;
        key = "";
        break;
    }
    return /* @__PURE__ */ React.createElement("li", {
      className: "character_list_item",
      key: i
    }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
      to: "/characters/" + (character == null ? void 0 : character.slug.current) + "/" + key
    }, keyName));
  }));
};
var CharacterSidebar_default = CharacterSidebar;

// app/components/Characteristics/Characteristics.css
var Characteristics_default = "/build/_assets/Characteristics-GZRFBOXW.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\likesdislikes\index.jsx
function links2() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader = async (context) => {
  const slug = context.params.character;
  const character = await import_client.default.fetch(import_groq.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  return {
    character
  };
};
var LikesDislikes = () => {
  var _a, _b;
  const data = (0, import_remix5.useLoaderData)();
  const character = data.character[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Likes/Dislikes"), /* @__PURE__ */ React.createElement("h2", null, "Likes:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, (character == null ? void 0 : character.likes) ? (_a = character == null ? void 0 : character.likes) == null ? void 0 : _a.map((likedItem) => {
    return /* @__PURE__ */ React.createElement("span", {
      className: "comma_list"
    }, likedItem);
  }) : "None"))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h2", null, "Dislikes:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, (character == null ? void 0 : character.dislikes) ? (_b = character == null ? void 0 : character.dislikes) == null ? void 0 : _b.map((dislikedItem) => {
    return /* @__PURE__ */ React.createElement("span", {
      className: "comma_list"
    }, dislikedItem);
  }) : "None"))));
};
var likesdislikes_default = LikesDislikes;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\personality\index.jsx
var personality_exports = {};
__export(personality_exports, {
  Personality: () => Personality,
  default: () => personality_default,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_client2 = __toESM(require_client());
var import_groq2 = __toESM(require("groq"));
function links3() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader2 = async (context) => {
  const slug = context.params.character;
  const character = await import_client2.default.fetch(import_groq2.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  return {
    character
  };
};
var Personality = () => {
  const data = (0, import_remix6.useLoaderData)();
  const character = data.character[0];
  let i = 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Personality"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.personality.map((personalityText) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: i
    }, personalityText.children[0].text, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null));
  })))));
};
var personality_default = Personality;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\abilities\index.jsx
var abilities_exports = {};
__export(abilities_exports, {
  Abilities: () => Abilities,
  default: () => abilities_default,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix7 = __toESM(require_remix());
var import_client3 = __toESM(require_client());
var import_groq3 = __toESM(require("groq"));
function links4() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader3 = async (context) => {
  const slug = context.params.character;
  const character = await import_client3.default.fetch(import_groq3.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  const reference = await import_client3.default.fetch(import_groq3.default`*[_type == "magicAbilities"]`);
  return {
    character,
    reference
  };
};
var Abilities = () => {
  const data = (0, import_remix7.useLoaderData)();
  const character = data.character[0];
  const magicAbilities = data.reference;
  let i = 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Abilities"), /* @__PURE__ */ React.createElement("ul", null, character == null ? void 0 : character.abilities.map((ability) => {
    i++;
    const abilityRefId = ability == null ? void 0 : ability._ref;
    let abilityRef;
    if (abilityRefId) {
      abilityRef = magicAbilities.find((abilities) => abilities._id === abilityRefId);
    }
    return /* @__PURE__ */ React.createElement("li", {
      key: i
    }, /* @__PURE__ */ React.createElement("h2", null, abilityRef == null ? void 0 : abilityRef.name), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, abilityRef == null ? void 0 : abilityRef.description), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "Action"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, abilityRef == null ? void 0 : abilityRef.action.map((actionText) => {
      return /* @__PURE__ */ React.createElement("span", {
        key: actionText == null ? void 0 : actionText.children[0].key
      }, actionText.children[0].text, " ", /* @__PURE__ */ React.createElement("br", null));
    })), /* @__PURE__ */ React.createElement("br", null));
  })))));
};
var abilities_default = Abilities;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\backstory\index.jsx
var backstory_exports = {};
__export(backstory_exports, {
  Backstory: () => Backstory,
  default: () => backstory_default,
  links: () => links5,
  loader: () => loader4
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_client4 = __toESM(require_client());
var import_groq4 = __toESM(require("groq"));
function links5() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader4 = async (context) => {
  const slug = context.params.character;
  const character = await import_client4.default.fetch(import_groq4.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  return {
    character
  };
};
var Backstory = () => {
  const data = (0, import_remix8.useLoaderData)();
  const character = data.character[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Backstory"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.backstory.map((backstoryText) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: backstoryText == null ? void 0 : backstoryText.children[0].key
    }, backstoryText == null ? void 0 : backstoryText.children[0].text, " ", /* @__PURE__ */ React.createElement("br", null));
  })))));
};
var backstory_default = Backstory;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\relations\index.jsx
var relations_exports = {};
__export(relations_exports, {
  default: () => relations_default,
  links: () => links6,
  loader: () => loader5,
  relations: () => relations
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_client5 = __toESM(require_client());
var import_groq5 = __toESM(require("groq"));
function links6() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader5 = async (context) => {
  const slug = context.params.character;
  const character = await import_client5.default.fetch(import_groq5.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  const relationsRef = await import_client5.default.fetch(import_groq5.default`*[_type == "characters"]`);
  return {
    character,
    relationsRef
  };
};
var relations = () => {
  const data = (0, import_remix9.useLoaderData)();
  const character = data.character[0];
  const relationsReference = data.relationsRef;
  let i = 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Relations"), /* @__PURE__ */ React.createElement("ul", null, character == null ? void 0 : character.relations.map((relation) => {
    i++;
    const relationReferenceId = relation == null ? void 0 : relation.related._ref;
    let relationRef;
    if (relationReferenceId) {
      relationRef = relationsReference.find((relations2) => relations2._id === relationReferenceId);
    }
    return /* @__PURE__ */ React.createElement("li", {
      key: i
    }, /* @__PURE__ */ React.createElement("div", {
      className: "separator"
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h2", null, relationRef == null ? void 0 : relationRef.name), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, relationRef == null ? void 0 : relationRef.description), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h3", null, "How are they related"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, relation == null ? void 0 : relation.relationinfo), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_remix9.Link, {
      to: "/characters/" + (relationRef == null ? void 0 : relationRef.slug.current),
      title: "Read More",
      className: "link_underline"
    }, "Read More"));
  })))));
};
var relations_default = relations;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\parents\index.jsx
var parents_exports = {};
__export(parents_exports, {
  Parents: () => Parents,
  default: () => parents_default,
  links: () => links7,
  loader: () => loader6
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_client6 = __toESM(require_client());
var import_groq6 = __toESM(require("groq"));
function links7() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader6 = async (context) => {
  const slug = context.params.character;
  const character = await import_client6.default.fetch(import_groq6.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  const parentsRef = await import_client6.default.fetch(import_groq6.default`*[_type == "characters"]`);
  return {
    character,
    parentsRef
  };
};
var Parents = () => {
  const data = (0, import_remix10.useLoaderData)();
  const character = data.character[0];
  const parentsReference = data.parentsRef;
  let i = 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Parents"), /* @__PURE__ */ React.createElement("ul", null, character == null ? void 0 : character.parents.map((parent) => {
    i++;
    const parentReferenceId = parent == null ? void 0 : parent._ref;
    let parentRef;
    if (parentReferenceId) {
      parentRef = parentsReference.find((parents) => parents._id === parentReferenceId);
    }
    return /* @__PURE__ */ React.createElement("li", {
      key: i
    }, /* @__PURE__ */ React.createElement("div", {
      className: "separator"
    }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h2", null, parentRef == null ? void 0 : parentRef.name), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, parentRef == null ? void 0 : parentRef.description), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_remix10.Link, {
      to: "/characters/" + (parentRef == null ? void 0 : parentRef.slug.current),
      title: "Read More",
      className: "link_underline"
    }, "Read More"));
  })))));
};
var parents_default = Parents;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\growth\index.jsx
var growth_exports = {};
__export(growth_exports, {
  Growth: () => Growth,
  default: () => growth_default,
  links: () => links8,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_client7 = __toESM(require_client());
var import_groq7 = __toESM(require("groq"));
function links8() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader7 = async (context) => {
  const slug = context.params.character;
  const character = await import_client7.default.fetch(import_groq7.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  return {
    character
  };
};
var Growth = () => {
  const data = (0, import_remix11.useLoaderData)();
  const character = data.character[0];
  let i = 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", null, "Character Growth"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.growth.map((growthItem) => {
    i++;
    return /* @__PURE__ */ React.createElement("span", {
      key: i
    }, growthItem.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  })))));
};
var growth_default = Growth;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\abilities\$ability\index.jsx
var ability_exports = {};
__export(ability_exports, {
  Ability: () => Ability,
  default: () => ability_default2,
  links: () => links9,
  loader: () => loader8,
  meta: () => meta
});
init_react();
var import_remix12 = __toESM(require_remix());
var import_client8 = __toESM(require_client());
var import_groq8 = __toESM(require("groq"));
var import_image_url = __toESM(require("@sanity/image-url"));

// app/styles/ability.css
var ability_default = "/build/_assets/ability-DY7JNPYN.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\abilities\$ability\index.jsx
var builder2 = (0, import_image_url.default)(import_client8.default);
var links9 = () => {
  return [
    {
      rel: "stylesheet",
      href: ability_default
    }
  ];
};
var loader8 = async (context) => {
  const slug = context.params.ability;
  const magicAbility = await import_client8.default.fetch(import_groq8.default`*[_type == "magicAbilities" && slug.current == $slug]`, { slug });
  return {
    magicAbility
  };
};
var meta = ({ data }) => {
  var _a;
  const { magicAbility } = data;
  return {
    title: `Magic Ability - ${((_a = magicAbility[0]) == null ? void 0 : _a.name) || "ERROR"}`
  };
};
var Ability = () => {
  var _a;
  const data = (0, import_remix12.useLoaderData)();
  const ability = data.magicAbility[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "ability_image_container"
  }, (ability == null ? void 0 : ability.image) ? /* @__PURE__ */ React.createElement("img", {
    src: builder2.image(ability.image).url(),
    alt: "abilityImage"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: "/file-solid.svg",
    alt: "abilityImage"
  })))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, (ability == null ? void 0 : ability.name) || "No Title"), /* @__PURE__ */ React.createElement("p", null, (ability == null ? void 0 : ability.description) || "No Description"))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Action"), /* @__PURE__ */ React.createElement("p", null, ((_a = ability == null ? void 0 : ability.action) == null ? void 0 : _a.map((actionItem, index) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: index
    }, actionItem.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  })) || "No Action"))));
};
var ability_default2 = Ability;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\concepts\$concept\index.jsx
var concept_exports = {};
__export(concept_exports, {
  Concept: () => Concept,
  default: () => concept_default2,
  links: () => links10,
  loader: () => loader9,
  meta: () => meta2
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_client9 = __toESM(require_client());
var import_groq9 = __toESM(require("groq"));
var import_image_url2 = __toESM(require("@sanity/image-url"));

// app/components/DropdownContent/DropdownContent.jsx
init_react();
var import_react = __toESM(require("react"));
var DropdownContent = ({ item }) => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  let i = 0;
  return /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: toggle,
    className: "dropdown_button"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "dropdown_content_item"
  }, /* @__PURE__ */ import_react.default.createElement("h2", null, isOpen ? /* @__PURE__ */ import_react.default.createElement("i", {
    className: "fa-solid fa-arrow-down"
  }) : /* @__PURE__ */ import_react.default.createElement("i", {
    className: "fa-solid fa-arrow-right"
  }), " ", item == null ? void 0 : item.categoryName), item == null ? void 0 : item.categoryInfo.map((children) => {
    i++;
    return /* @__PURE__ */ import_react.default.createElement("p", {
      className: `dropdown_content_text ${!isOpen && "dropdown_content_text_hidden"}`,
      key: i
    }, children.children[0].text);
  })));
};
var DropdownContent_default = DropdownContent;

// app/components/DropdownContent/DropdownContent.css
var DropdownContent_default2 = "/build/_assets/DropdownContent-RUPGQYCO.css";

// app/styles/concept.css
var concept_default = "/build/_assets/concept-Z32H7FND.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\concepts\$concept\index.jsx
var builder3 = (0, import_image_url2.default)(import_client9.default);
function links10() {
  return [
    {
      rel: "stylesheet",
      href: DropdownContent_default2
    },
    {
      rel: "stylesheet",
      href: concept_default
    }
  ];
}
var loader9 = async (context) => {
  const slug = context.params.concept;
  const magicConcept = await import_client9.default.fetch(import_groq9.default`*[_type == "magic" && slug.current == $slug]`, { slug });
  return {
    magicConcept
  };
};
var meta2 = ({ data }) => {
  var _a;
  const { magicConcept } = data;
  return {
    title: `Magic Concept - ${((_a = magicConcept[0]) == null ? void 0 : _a.name) || "ERROR"}`
  };
};
var Concept = () => {
  var _a;
  const data = (0, import_remix13.useLoaderData)();
  const concept = data.magicConcept[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "concept_image_container"
  }, (concept == null ? void 0 : concept.image) ? /* @__PURE__ */ React.createElement("img", {
    src: builder3.image(concept.image).url(),
    alt: "conceptImage"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: "/file-solid.svg",
    alt: "conceptImage"
  })))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Magic Concept Title: ", concept == null ? void 0 : concept.name), /* @__PURE__ */ React.createElement("p", null, concept == null ? void 0 : concept.description))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Concept Information"), (concept == null ? void 0 : concept.about) ? (_a = concept == null ? void 0 : concept.about) == null ? void 0 : _a.map((item, index) => {
    return /* @__PURE__ */ React.createElement("div", {
      key: index
    }, /* @__PURE__ */ React.createElement(DropdownContent_default, {
      item
    }));
  }) : "None")));
};
var concept_default2 = Concept;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$character\index.jsx
var character_exports = {};
__export(character_exports, {
  Character: () => Character,
  default: () => character_default,
  links: () => links11,
  loader: () => loader10,
  meta: () => meta3
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_client10 = __toESM(require_client());
var import_groq10 = __toESM(require("groq"));
var import_image_url3 = __toESM(require("@sanity/image-url"));
function links11() {
  return [
    {
      rel: "stylesheet",
      href: Characteristics_default
    }
  ];
}
var loader10 = async (context) => {
  const slug = context.params.character;
  const character = await import_client10.default.fetch(import_groq10.default`*[_type == "characters" && slug.current == $slug]`, { slug });
  return {
    character
  };
};
var meta3 = ({ data }) => {
  const { character } = data;
  return {
    title: `Character - ${character[0].name || "N/A"}`
  };
};
var builder4 = (0, import_image_url3.default)(import_client10.default);
var Character = () => {
  const data = (0, import_remix14.useLoaderData)();
  const character = data.character[0];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(CharacterSidebar_default, {
    character
  }), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "character_image_container"
  }, !character.image ? /* @__PURE__ */ React.createElement("img", {
    src: "/default_avatar.svg",
    alt: "character"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: builder4.image(character.image),
    alt: "character"
  })), /* @__PURE__ */ React.createElement("h1", {
    className: "capitalize"
  }, "name"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.name))), (character == null ? void 0 : character.description) && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "capitalize"
  }, "description"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.description))), (character == null ? void 0 : character.dateofbirth) && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "capitalize"
  }, "date of birth"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.dateofbirth))), (character == null ? void 0 : character.dateofdeath) && /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container_sidebar"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "capitalize"
  }, "date of death"), /* @__PURE__ */ React.createElement("p", null, character == null ? void 0 : character.dateofdeath))));
};
var character_default = Character;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\$location\index.jsx
var location_exports = {};
__export(location_exports, {
  Location: () => Location,
  default: () => location_default,
  links: () => links12,
  loader: () => loader11,
  meta: () => meta4
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_client11 = __toESM(require_client());
var import_groq11 = __toESM(require("groq"));

// app/components/LocationEvents/LocationEvents.jsx
init_react();
var import_remix15 = __toESM(require_remix());
var LocationEvents = ({ location, stories }) => {
  let i = 0;
  return /* @__PURE__ */ React.createElement("ul", {
    className: "events_list"
  }, location == null ? void 0 : location.events.map((event) => {
    i++;
    const eventReferenceId = event == null ? void 0 : event._ref;
    let eventRef;
    if (eventReferenceId) {
      eventRef = stories.find((story) => story._id === eventReferenceId);
    }
    const startDisplayDate = new Date(eventRef == null ? void 0 : eventRef.startDate);
    const endDisplayDate = new Date(eventRef == null ? void 0 : eventRef.endDate);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const startDisplayMonth = months[startDisplayDate.getMonth()];
    const endDisplayMonth = months[endDisplayDate.getMonth()];
    const startDate = startDisplayMonth + " " + (startDisplayDate.getDate() + 1) + ", " + startDisplayDate.getFullYear();
    const endDate = endDisplayMonth + " " + (endDisplayDate.getDate() + 1) + ", " + endDisplayDate.getFullYear();
    return /* @__PURE__ */ React.createElement("li", {
      className: "event_item",
      key: i
    }, /* @__PURE__ */ React.createElement(import_remix15.Link, {
      to: `/story/events/${eventRef == null ? void 0 : eventRef.slug.current}`,
      className: "location_events_list"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "event_content"
    }, /* @__PURE__ */ React.createElement("h2", null, eventRef == null ? void 0 : eventRef.name), /* @__PURE__ */ React.createElement("p", null, (eventRef == null ? void 0 : eventRef.startDate) ? startDate : "", " ", (eventRef == null ? void 0 : eventRef.startDate) && (eventRef == null ? void 0 : eventRef.endDate) ? "-" : "", " ", (eventRef == null ? void 0 : eventRef.endDate) ? endDate : ""), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, eventRef == null ? void 0 : eventRef.description))));
  }));
};
var LocationEvents_default = LocationEvents;

// app/components/LocationEvents/LocationEvents.css
var LocationEvents_default2 = "/build/_assets/LocationEvents-QDOGMFJF.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\$location\index.jsx
var links12 = () => [
  {
    rel: "stylesheet",
    href: LocationEvents_default2
  }
];
var loader11 = async (context) => {
  const slug = context.params.location;
  const location = await import_client11.default.fetch(import_groq11.default`*[_type == "locations" && slug.current == $slug]`, { slug });
  const storyRef = await import_client11.default.fetch(import_groq11.default`*[_type == "story"]`);
  return {
    location,
    storyRef
  };
};
var meta4 = ({ data }) => {
  const { location } = data;
  return {
    title: `Location - ${location[0].name || "N/A"}`
  };
};
var Location = () => {
  const data = (0, import_remix16.useLoaderData)();
  const location = data.location[0];
  const stories = data.storyRef;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "location_image_container"
  }, !location.image ? /* @__PURE__ */ React.createElement("img", {
    src: "/building-columns-solid.svg",
    alt: "location"
  }) : /* @__PURE__ */ React.createElement("img", {
    src: builder.image(location == null ? void 0 : location.image),
    alt: "location"
  })))), /* @__PURE__ */ React.createElement("section", {
    id: "location"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, location == null ? void 0 : location.name), /* @__PURE__ */ React.createElement("p", null, location == null ? void 0 : location.description), /* @__PURE__ */ React.createElement("div", {
    className: "separator"
  }))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Location Events (Latest)"), /* @__PURE__ */ React.createElement(LocationEvents_default, {
    location,
    stories
  }))));
};
var location_default = Location;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\story\$event\index.jsx
var event_exports = {};
__export(event_exports, {
  Event: () => Event,
  default: () => event_default,
  loader: () => loader12,
  meta: () => meta5
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_client12 = __toESM(require_client());
var import_groq12 = __toESM(require("groq"));
var import_image_url4 = __toESM(require("@sanity/image-url"));
var builder5 = (0, import_image_url4.default)(import_client12.default);
var loader12 = async (context) => {
  const slug = context.params.event;
  const events = await import_client12.default.fetch(import_groq12.default`*[_type == "story" && slug.current == $slug]`, { slug });
  return {
    events
  };
};
var meta5 = ({ data }) => {
  const { events } = data;
  return {
    title: events[0].name || "Error"
  };
};
var Event = () => {
  var _a, _b;
  const data = (0, import_remix17.useLoaderData)();
  const { events } = data;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, ((_a = events[0]) == null ? void 0 : _a.name) || "No Title"), /* @__PURE__ */ React.createElement("p", null, ((_b = events[0]) == null ? void 0 : _b.description) || "No Description"))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Participants"))));
};
var event_default = Event;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var characters_exports = {};
__export(characters_exports, {
  default: () => Characters,
  links: () => links13,
  loader: () => loader13,
  meta: () => meta6
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_client14 = __toESM(require_client());

// app/components/TextComponent/TextComponent.jsx
init_react();
var TextComponent = ({ data }) => {
  var _a;
  let i = 0;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, (_a = data[0]) == null ? void 0 : _a.name), data[0].content.map((children) => {
    i++;
    return /* @__PURE__ */ React.createElement("p", {
      key: i
    }, children.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  }));
};
var TextComponent_default = TextComponent;

// app/components/CharacterPreview/CharacterPreview.jsx
init_react();
var import_remix18 = __toESM(require_remix());
var import_image_url5 = __toESM(require("@sanity/image-url"));
var import_client13 = __toESM(require_client());
var builder6 = (0, import_image_url5.default)(import_client13.default);
var CharacterPreview = ({ data }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "character_list"
  }, data.map((character) => {
    return /* @__PURE__ */ React.createElement("li", {
      className: "list_character"
    }, /* @__PURE__ */ React.createElement(import_remix18.Link, {
      to: `/characters/${character.slug.current}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "image_container"
    }, !character.image ? /* @__PURE__ */ React.createElement("img", {
      src: "/default_avatar.svg",
      alt: "character"
    }) : /* @__PURE__ */ React.createElement("img", {
      src: builder6.image(character.image),
      alt: "character"
    })), /* @__PURE__ */ React.createElement("h1", null, character.name), /* @__PURE__ */ React.createElement("p", null, character.description)));
  })));
};

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var import_groq13 = __toESM(require("groq"));

// app/components/CharacterPreview/CharacterPreview.css
var CharacterPreview_default = "/build/_assets/CharacterPreview-QBTHMNCZ.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
function links13() {
  return [
    {
      rel: "stylesheet",
      href: CharacterPreview_default
    }
  ];
}
var loader13 = async () => {
  const page = await import_client14.default.fetch(import_groq13.default`*[_type == "pages" && name == "Characters"]`);
  const characters = await import_client14.default.fetch(import_groq13.default`*[_type == "characters"]`);
  if (page[0].length === 0 || characters[0].length === 0) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  return {
    page,
    characters
  };
};
var meta6 = () => {
  return {
    title: "Characters"
  };
};
function Characters() {
  const data = (0, import_remix19.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "characters"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data: data.page
  }))), /* @__PURE__ */ React.createElement("section", {
    id: "latest"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Latest Characters"), /* @__PURE__ */ React.createElement(CharacterPreview, {
    data: data.characters
  }))));
}

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\index.jsx
var locations_exports = {};
__export(locations_exports, {
  Locations: () => Locations,
  default: () => locations_default,
  links: () => links14,
  loader: () => loader14,
  meta: () => meta7
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_client16 = __toESM(require_client());
var import_groq14 = __toESM(require("groq"));

// app/components/LocationPreview/LocationPreview.jsx
init_react();
var import_remix20 = __toESM(require_remix());
var import_image_url6 = __toESM(require("@sanity/image-url"));
var import_client15 = __toESM(require_client());
var builder7 = (0, import_image_url6.default)(import_client15.default);
var LocationPreview = ({ data }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "location_list"
  }, data.map((location) => {
    return /* @__PURE__ */ React.createElement("li", {
      className: "list_location"
    }, /* @__PURE__ */ React.createElement(import_remix20.Link, {
      to: `/locations/${location.slug.current}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "image_container"
    }, !location.image ? /* @__PURE__ */ React.createElement("img", {
      src: "/building-columns-solid.svg",
      alt: "location"
    }) : /* @__PURE__ */ React.createElement("img", {
      src: builder7.image(location.image),
      alt: "location"
    })), /* @__PURE__ */ React.createElement("h1", null, location.name), /* @__PURE__ */ React.createElement("p", null, location.description)));
  })));
};
var LocationPreview_default = LocationPreview;

// app/components/LocationPreview/LocationPreview.css
var LocationPreview_default2 = "/build/_assets/LocationPreview-CF2UY3LN.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\index.jsx
var links14 = () => [
  {
    rel: "stylesheet",
    href: LocationPreview_default2
  }
];
var meta7 = () => {
  return {
    title: "Locations"
  };
};
var loader14 = async () => {
  const page = await import_client16.default.fetch(import_groq14.default`*[_type == "pages" && name == "Locations"]`);
  const locations = await import_client16.default.fetch(import_groq14.default`*[_type == "locations"]`);
  return { page, locations };
};
var Locations = () => {
  const data = (0, import_remix21.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "locations"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data: data.page
  }))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    class: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Latest Locations"), /* @__PURE__ */ React.createElement(LocationPreview_default, {
    data: data.locations
  }))));
};
var locations_default = Locations;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\contact\index.jsx
var contact_exports = {};
__export(contact_exports, {
  Contact: () => Contact,
  default: () => contact_default,
  loader: () => loader15,
  meta: () => meta8
});
init_react();
var import_remix22 = __toESM(require_remix());
var import_client17 = __toESM(require_client());
var import_groq15 = __toESM(require("groq"));
var loader15 = async () => {
  const page = await import_client17.default.fetch(import_groq15.default`*[_type == "pages" && name == "Contact"]`);
  return page;
};
var meta8 = () => {
  return {
    title: "Contact"
  };
};
var Contact = () => {
  const data = (0, import_remix22.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    id: "contact"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data
  })));
};
var contact_default = Contact;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\about\index.jsx
var about_exports = {};
__export(about_exports, {
  About: () => About,
  default: () => about_default,
  loader: () => loader16,
  meta: () => meta9
});
init_react();
var import_remix23 = __toESM(require_remix());
var import_client18 = __toESM(require_client());
var import_groq16 = __toESM(require("groq"));
var loader16 = async () => {
  const page = await import_client18.default.fetch(import_groq16.default`*[_type == "pages" && name == "About"]`);
  return page;
};
var meta9 = () => {
  return {
    title: "About"
  };
};
var About = () => {
  const data = (0, import_remix23.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data
  })));
};
var about_default = About;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\index.jsx
var magic_exports = {};
__export(magic_exports, {
  Magic: () => Magic,
  default: () => magic_default,
  links: () => links15,
  loader: () => loader17,
  meta: () => meta10
});
init_react();
var import_remix25 = __toESM(require_remix());
var import_client20 = __toESM(require_client());
var import_groq17 = __toESM(require("groq"));

// app/components/Carousel/Carousel.jsx
init_react();
var import_react2 = require("react");
var import_remix24 = __toESM(require_remix());
var import_image_url7 = __toESM(require("@sanity/image-url"));
var import_client19 = __toESM(require_client());
var builder8 = (0, import_image_url7.default)(import_client19.default);
var Carousel = ({ data, name, path }) => {
  const maxAmount = data == null ? void 0 : data.length;
  const [carouselIndex, setCarouselIndex] = (0, import_react2.useState)(0);
  let carouselListItem;
  let newIndex;
  const next = () => {
    carouselListItem = document.querySelectorAll(".carousel_list_item");
    newIndex = carouselIndex + 1;
    if (carouselIndex < maxAmount - 1) {
      setCarouselIndex(newIndex);
      carouselListItem.forEach((item) => {
        const carouselItemWidth = item.clientWidth;
        const newTransformValue = 0 - carouselItemWidth * newIndex;
        if (item.classList.contains(name)) {
          item.style.transform = `translateX(${newTransformValue}px)`;
        }
      });
    }
  };
  const back = () => {
    carouselListItem = document.querySelectorAll(".carousel_list_item");
    newIndex = carouselIndex - 1;
    if (carouselIndex > 0) {
      setCarouselIndex(newIndex);
      carouselListItem.forEach((item) => {
        const carouselItemWidth = item.clientWidth;
        const newTransformValue = 0 - carouselItemWidth * carouselIndex + carouselItemWidth;
        if (item.classList.contains(name)) {
          item.style.transform = `translateX(${newTransformValue}px)`;
        }
      });
    }
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: "carousel_list"
  }, (data == null ? void 0 : data.length) !== 0 ? data.map((item, index) => {
    return /* @__PURE__ */ React.createElement("li", {
      className: `carousel_list_item ${name}`,
      key: index
    }, /* @__PURE__ */ React.createElement("div", {
      className: "carousel_list_item_style"
    }, /* @__PURE__ */ React.createElement(import_remix24.Link, {
      to: `${path}${item == null ? void 0 : item.slug.current}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "carousel_image_container"
    }, !item.image ? /* @__PURE__ */ React.createElement("img", {
      src: "/file-solid.svg",
      alt: "carouselImage"
    }) : /* @__PURE__ */ React.createElement("img", {
      src: builder8.image(item.image).url(),
      alt: "carouselImage"
    })), /* @__PURE__ */ React.createElement("h2", null, item == null ? void 0 : item.name), /* @__PURE__ */ React.createElement("p", {
      className: "carousel_card_description"
    }, item == null ? void 0 : item.description), /* @__PURE__ */ React.createElement("div", {
      className: "carousel_item_read_more"
    }, "Read More"))));
  }) : "There are no items to display"), /* @__PURE__ */ React.createElement("div", {
    className: "carousel_arrows"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: back
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-arrow-left"
  })), /* @__PURE__ */ React.createElement("button", {
    onClick: next
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fa-solid fa-arrow-right"
  }))));
};
var Carousel_default = Carousel;

// app/components/Carousel/Carousel.css
var Carousel_default2 = "/build/_assets/Carousel-2YY35N7S.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\magic\index.jsx
function links15() {
  return [
    {
      rel: "stylesheet",
      href: Carousel_default2
    }
  ];
}
var loader17 = async () => {
  const page = await import_client20.default.fetch(import_groq17.default`*[_type == "pages" && name == "Magic"]`);
  const magicConcept = await import_client20.default.fetch(import_groq17.default`*[_type == "magic"]`);
  const magicAbilities = await import_client20.default.fetch(import_groq17.default`*[_type == "magicAbilities"]`);
  return {
    page,
    magicConcept,
    magicAbilities
  };
};
var meta10 = () => {
  return {
    title: "Magic"
  };
};
var Magic = () => {
  const data = (0, import_remix25.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "magic"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data: data == null ? void 0 : data.page
  }))), /* @__PURE__ */ React.createElement("section", {
    id: "magicConcept"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Magic Concepts"), /* @__PURE__ */ React.createElement(Carousel_default, {
    data: data == null ? void 0 : data.magicConcept,
    name: "magicConcepts",
    path: "concepts/"
  }))), /* @__PURE__ */ React.createElement("section", {
    id: "magicAbilities"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Magic Abilities"), /* @__PURE__ */ React.createElement(Carousel_default, {
    data: data == null ? void 0 : data.magicAbilities,
    name: "magicAbilities",
    path: "abilities/"
  }))));
};
var magic_default = Magic;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\story\index.jsx
var story_exports = {};
__export(story_exports, {
  Story: () => Story,
  default: () => story_default,
  links: () => links16,
  loader: () => loader18,
  meta: () => meta11
});
init_react();
var import_remix27 = __toESM(require_remix());
var import_client21 = __toESM(require_client());
var import_groq18 = __toESM(require("groq"));

// app/components/Timeline/Timeline.jsx
init_react();
var import_react3 = __toESM(require("react"));
var import_remix26 = __toESM(require_remix());
var Dates = ({ preview }) => {
  if ((preview == null ? void 0 : preview.startDate) && (preview == null ? void 0 : preview.endDate)) {
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, preview == null ? void 0 : preview.startDate, " - ", preview == null ? void 0 : preview.endDate);
  } else {
    return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, (preview == null ? void 0 : preview.startDate) || (preview == null ? void 0 : preview.endDate));
  }
};
var Timeline = ({ timeline, events, name }) => {
  const [preview, setPreview] = (0, import_react3.useState)(void 0);
  const next = () => {
  };
  const back = () => {
  };
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "timeline_preview_container"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "timeline_preview"
  }, preview ? /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "timeline_image_container"
  }, /* @__PURE__ */ import_react3.default.createElement("img", {
    src: "https://dummyimage.com/700x200.jpg",
    alt: "placeholderImage"
  })), /* @__PURE__ */ import_react3.default.createElement("h1", null, preview == null ? void 0 : preview.name), /* @__PURE__ */ import_react3.default.createElement("h5", null, /* @__PURE__ */ import_react3.default.createElement(Dates, {
    preview
  })), /* @__PURE__ */ import_react3.default.createElement("br", null), /* @__PURE__ */ import_react3.default.createElement("p", null, preview == null ? void 0 : preview.description), /* @__PURE__ */ import_react3.default.createElement("br", null), /* @__PURE__ */ import_react3.default.createElement(import_remix26.Link, {
    className: "timeline_learn_more",
    to: `/story/${preview == null ? void 0 : preview.slug.current}`
  }, "Learn More")) : /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("h1", null, "Nothing Selected"), /* @__PURE__ */ import_react3.default.createElement("p", null, "Select a timeline point down below"), /* @__PURE__ */ import_react3.default.createElement("br", null), /* @__PURE__ */ import_react3.default.createElement("i", {
    className: "fa-solid fa-circle-dot"
  }), /* @__PURE__ */ import_react3.default.createElement("p", null, "^")))), /* @__PURE__ */ import_react3.default.createElement("ul", {
    className: "timeline_list"
  }, timeline == null ? void 0 : timeline.events.map((item, index) => {
    const itemEvent = events.find((event) => (event == null ? void 0 : event._id) === (item == null ? void 0 : item._ref));
    return /* @__PURE__ */ import_react3.default.createElement("li", {
      className: `timeline_list_item ${name}`,
      key: index
    }, index === 0 && /* @__PURE__ */ import_react3.default.createElement("i", {
      className: "fa-solid fa-minus"
    }), /* @__PURE__ */ import_react3.default.createElement("button", {
      onClick: (target) => {
        const selectedButtons = document.getElementsByClassName("timeline_button_selected");
        Array.from(selectedButtons).forEach((button) => {
          button.classList.remove("timeline_button_selected");
        });
        target.target.classList.add("timeline_button_selected");
        setPreview(itemEvent);
      },
      title: itemEvent == null ? void 0 : itemEvent.name
    }, /* @__PURE__ */ import_react3.default.createElement("i", {
      className: "fa-solid fa-circle-dot"
    })), /* @__PURE__ */ import_react3.default.createElement("i", {
      className: "fa-solid fa-minus"
    }));
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "timeline_arrows"
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    onClick: back
  }, /* @__PURE__ */ import_react3.default.createElement("i", {
    className: "fa-solid fa-arrow-left"
  })), /* @__PURE__ */ import_react3.default.createElement("button", {
    onClick: next
  }, /* @__PURE__ */ import_react3.default.createElement("i", {
    className: "fa-solid fa-arrow-right"
  }))));
};
var Timeline_default = Timeline;

// app/components/Timeline/Timeline.css
var Timeline_default2 = "/build/_assets/Timeline-WODNWOTQ.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\story\index.jsx
function links16() {
  return [
    {
      rel: "stylesheet",
      href: Timeline_default2
    }
  ];
}
var loader18 = async () => {
  const page = await import_client21.default.fetch(import_groq18.default`*[_type == "pages" && name == "Story"]`);
  const mainTimeline = await import_client21.default.fetch(import_groq18.default`*[_type == "timeline" && name == "Story Timeline [ALL]"][0]`);
  const events = await import_client21.default.fetch(import_groq18.default`*[_type == "story"]`);
  return {
    page,
    mainTimeline,
    events
  };
};
var meta11 = () => {
  return {
    title: "Story"
  };
};
var Story = () => {
  var _a;
  const data = (0, import_remix27.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "story"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data: data.page
  }))), /* @__PURE__ */ React.createElement("section", {
    id: "timeline"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, (_a = data == null ? void 0 : data.mainTimeline) == null ? void 0 : _a.name), /* @__PURE__ */ React.createElement(Timeline_default, {
    timeline: data == null ? void 0 : data.mainTimeline,
    name: "mainTimeline",
    events: data == null ? void 0 : data.events
  }))));
};
var story_default = Story;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader19,
  meta: () => meta12
});
init_react();
var import_remix28 = __toESM(require_remix());
var import_client22 = __toESM(require_client());
var import_groq19 = __toESM(require("groq"));
var loader19 = async () => {
  const page = await import_client22.default.fetch(import_groq19.default`*[_type == "pages" && name == "Home"]`);
  return page;
};
var meta12 = () => {
  return {
    title: "Home"
  };
};
function Index() {
  const data = (0, import_remix28.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    id: "home"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "112ab83f", "entry": { "module": "/build/entry.client-H7ZFQT6U.js", "imports": ["/build/_shared/chunk-7V5UBU4C.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YM3WRFJF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-F5Y6B44J.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/abilities/index": { "id": "routes/characters/$character/abilities/index", "parentId": "root", "path": "characters/:character/abilities", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/abilities/index-TNOEJ2SW.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/backstory/index": { "id": "routes/characters/$character/backstory/index", "parentId": "root", "path": "characters/:character/backstory", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/backstory/index-VPXZ6KH7.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/growth/index": { "id": "routes/characters/$character/growth/index", "parentId": "root", "path": "characters/:character/growth", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/growth/index-7JSROVHR.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/index": { "id": "routes/characters/$character/index", "parentId": "root", "path": "characters/:character", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/index-KURM56GA.js", "imports": ["/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/likesdislikes/index": { "id": "routes/characters/$character/likesdislikes/index", "parentId": "root", "path": "characters/:character/likesdislikes", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/likesdislikes/index-AYPZZG2B.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/parents/index": { "id": "routes/characters/$character/parents/index", "parentId": "root", "path": "characters/:character/parents", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/parents/index-ZMR7BAP2.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/personality/index": { "id": "routes/characters/$character/personality/index", "parentId": "root", "path": "characters/:character/personality", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/personality/index-VKVXDXGA.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$character/relations/index": { "id": "routes/characters/$character/relations/index", "parentId": "root", "path": "characters/:character/relations", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/$character/relations/index-AQAKW55S.js", "imports": ["/build/_shared/chunk-N6Q4N2GE.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/index": { "id": "routes/characters/index", "parentId": "root", "path": "characters", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/index-P77RDDWB.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-E4VWWBVL.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BE52VUVL.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations/$location/index": { "id": "routes/locations/$location/index", "parentId": "root", "path": "locations/:location", "index": true, "caseSensitive": void 0, "module": "/build/routes/locations/$location/index-F25KU3YX.js", "imports": ["/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations/index": { "id": "routes/locations/index", "parentId": "root", "path": "locations", "index": true, "caseSensitive": void 0, "module": "/build/routes/locations/index-RN5APUDS.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/magic/abilities/$ability/index": { "id": "routes/magic/abilities/$ability/index", "parentId": "root", "path": "magic/abilities/:ability", "index": true, "caseSensitive": void 0, "module": "/build/routes/magic/abilities/$ability/index-BUWRLO74.js", "imports": ["/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/magic/concepts/$concept/index": { "id": "routes/magic/concepts/$concept/index", "parentId": "root", "path": "magic/concepts/:concept", "index": true, "caseSensitive": void 0, "module": "/build/routes/magic/concepts/$concept/index-BX5K7TSH.js", "imports": ["/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/magic/index": { "id": "routes/magic/index", "parentId": "root", "path": "magic", "index": true, "caseSensitive": void 0, "module": "/build/routes/magic/index-F44FGJQA.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/story/$event/index": { "id": "routes/story/$event/index", "parentId": "root", "path": "story/:event", "index": true, "caseSensitive": void 0, "module": "/build/routes/story/$event/index-X4MDHPVK.js", "imports": ["/build/_shared/chunk-ZXJDQWPI.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/story/index": { "id": "routes/story/index", "parentId": "root", "path": "story", "index": true, "caseSensitive": void 0, "module": "/build/routes/story/index-KYAJAEUR.js", "imports": ["/build/_shared/chunk-OAIIWN6B.js", "/build/_shared/chunk-SHLOMJV7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-112AB83F.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/characters/$character/likesdislikes/index": {
    id: "routes/characters/$character/likesdislikes/index",
    parentId: "root",
    path: "characters/:character/likesdislikes",
    index: true,
    caseSensitive: void 0,
    module: likesdislikes_exports
  },
  "routes/characters/$character/personality/index": {
    id: "routes/characters/$character/personality/index",
    parentId: "root",
    path: "characters/:character/personality",
    index: true,
    caseSensitive: void 0,
    module: personality_exports
  },
  "routes/characters/$character/abilities/index": {
    id: "routes/characters/$character/abilities/index",
    parentId: "root",
    path: "characters/:character/abilities",
    index: true,
    caseSensitive: void 0,
    module: abilities_exports
  },
  "routes/characters/$character/backstory/index": {
    id: "routes/characters/$character/backstory/index",
    parentId: "root",
    path: "characters/:character/backstory",
    index: true,
    caseSensitive: void 0,
    module: backstory_exports
  },
  "routes/characters/$character/relations/index": {
    id: "routes/characters/$character/relations/index",
    parentId: "root",
    path: "characters/:character/relations",
    index: true,
    caseSensitive: void 0,
    module: relations_exports
  },
  "routes/characters/$character/parents/index": {
    id: "routes/characters/$character/parents/index",
    parentId: "root",
    path: "characters/:character/parents",
    index: true,
    caseSensitive: void 0,
    module: parents_exports
  },
  "routes/characters/$character/growth/index": {
    id: "routes/characters/$character/growth/index",
    parentId: "root",
    path: "characters/:character/growth",
    index: true,
    caseSensitive: void 0,
    module: growth_exports
  },
  "routes/magic/abilities/$ability/index": {
    id: "routes/magic/abilities/$ability/index",
    parentId: "root",
    path: "magic/abilities/:ability",
    index: true,
    caseSensitive: void 0,
    module: ability_exports
  },
  "routes/magic/concepts/$concept/index": {
    id: "routes/magic/concepts/$concept/index",
    parentId: "root",
    path: "magic/concepts/:concept",
    index: true,
    caseSensitive: void 0,
    module: concept_exports
  },
  "routes/characters/$character/index": {
    id: "routes/characters/$character/index",
    parentId: "root",
    path: "characters/:character",
    index: true,
    caseSensitive: void 0,
    module: character_exports
  },
  "routes/locations/$location/index": {
    id: "routes/locations/$location/index",
    parentId: "root",
    path: "locations/:location",
    index: true,
    caseSensitive: void 0,
    module: location_exports
  },
  "routes/story/$event/index": {
    id: "routes/story/$event/index",
    parentId: "root",
    path: "story/:event",
    index: true,
    caseSensitive: void 0,
    module: event_exports
  },
  "routes/characters/index": {
    id: "routes/characters/index",
    parentId: "root",
    path: "characters",
    index: true,
    caseSensitive: void 0,
    module: characters_exports
  },
  "routes/locations/index": {
    id: "routes/locations/index",
    parentId: "root",
    path: "locations",
    index: true,
    caseSensitive: void 0,
    module: locations_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/magic/index": {
    id: "routes/magic/index",
    parentId: "root",
    path: "magic",
    index: true,
    caseSensitive: void 0,
    module: magic_exports
  },
  "routes/story/index": {
    id: "routes/story/index",
    parentId: "root",
    path: "story",
    index: true,
    caseSensitive: void 0,
    module: story_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9hcHAvbGliL3Nhbml0eS9jbGllbnQuanMiLCAiPHN0ZGluPiIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm9vdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcY2hhcmFjdGVyc1xcJGNoYXJhY3RlclxcbGlrZXNkaXNsaWtlc1xcaW5kZXguanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NoYXJhY3RlclNpZGViYXIvQ2hhcmFjdGVyU2lkZWJhci5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcY2hhcmFjdGVyc1xcJGNoYXJhY3RlclxccGVyc29uYWxpdHlcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxjaGFyYWN0ZXJzXFwkY2hhcmFjdGVyXFxhYmlsaXRpZXNcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxjaGFyYWN0ZXJzXFwkY2hhcmFjdGVyXFxiYWNrc3RvcnlcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxjaGFyYWN0ZXJzXFwkY2hhcmFjdGVyXFxyZWxhdGlvbnNcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxjaGFyYWN0ZXJzXFwkY2hhcmFjdGVyXFxwYXJlbnRzXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcY2hhcmFjdGVyc1xcJGNoYXJhY3RlclxcZ3Jvd3RoXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcbWFnaWNcXGFiaWxpdGllc1xcJGFiaWxpdHlcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxtYWdpY1xcY29uY2VwdHNcXCRjb25jZXB0XFxpbmRleC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvRHJvcGRvd25Db250ZW50L0Ryb3Bkb3duQ29udGVudC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcY2hhcmFjdGVyc1xcJGNoYXJhY3RlclxcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGxvY2F0aW9uc1xcJGxvY2F0aW9uXFxpbmRleC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTG9jYXRpb25FdmVudHMvTG9jYXRpb25FdmVudHMuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXHN0b3J5XFwkZXZlbnRcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxjaGFyYWN0ZXJzXFxpbmRleC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9DaGFyYWN0ZXJQcmV2aWV3L0NoYXJhY3RlclByZXZpZXcuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGxvY2F0aW9uc1xcaW5kZXguanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0xvY2F0aW9uUHJldmlldy9Mb2NhdGlvblByZXZpZXcuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGNvbnRhY3RcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxhYm91dFxcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXG1hZ2ljXFxpbmRleC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXHN0b3J5XFxpbmRleC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmUuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGluZGV4LmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJjb25zdCBzYW5pdHlDbGllbnQgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6IFwidWZkaXpsb3VcIixcclxuICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gICAgdXNlQ2RuOiBcInRydWVcIixcclxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0xMC0yMVwiLFxyXG59KTsiLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxcZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxjaGFyYWN0ZXJzXFxcXCRjaGFyYWN0ZXJcXFxcbGlrZXNkaXNsaWtlc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxjaGFyYWN0ZXJzXFxcXCRjaGFyYWN0ZXJcXFxccGVyc29uYWxpdHlcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcY2hhcmFjdGVyc1xcXFwkY2hhcmFjdGVyXFxcXGFiaWxpdGllc1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxjaGFyYWN0ZXJzXFxcXCRjaGFyYWN0ZXJcXFxcYmFja3N0b3J5XFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNoYXJhY3RlcnNcXFxcJGNoYXJhY3RlclxcXFxyZWxhdGlvbnNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcY2hhcmFjdGVyc1xcXFwkY2hhcmFjdGVyXFxcXHBhcmVudHNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcY2hhcmFjdGVyc1xcXFwkY2hhcmFjdGVyXFxcXGdyb3d0aFxcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxtYWdpY1xcXFxhYmlsaXRpZXNcXFxcJGFiaWxpdHlcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWFnaWNcXFxcY29uY2VwdHNcXFxcJGNvbmNlcHRcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNoYXJhY3RlcnNcXFxcJGNoYXJhY3RlclxcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zXFxcXCRsb2NhdGlvblxcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3RvcnlcXFxcJGV2ZW50XFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxjaGFyYWN0ZXJzXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2NhdGlvbnNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNvbnRhY3RcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGFib3V0XFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxtYWdpY1xcXFxpbmRleC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3RvcnlcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE5IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LmpzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2xpa2VzZGlzbGlrZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9saWtlc2Rpc2xpa2VzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYXJhY3RlcnMvOmNoYXJhY3Rlci9saWtlc2Rpc2xpa2VzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3BlcnNvbmFsaXR5L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvcGVyc29uYWxpdHkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2hhcmFjdGVycy86Y2hhcmFjdGVyL3BlcnNvbmFsaXR5XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2FiaWxpdGllcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2FiaWxpdGllcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjaGFyYWN0ZXJzLzpjaGFyYWN0ZXIvYWJpbGl0aWVzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2JhY2tzdG9yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2JhY2tzdG9yeS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjaGFyYWN0ZXJzLzpjaGFyYWN0ZXIvYmFja3N0b3J5XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3JlbGF0aW9ucy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3JlbGF0aW9ucy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjaGFyYWN0ZXJzLzpjaGFyYWN0ZXIvcmVsYXRpb25zXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3BhcmVudHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9wYXJlbnRzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYXJhY3RlcnMvOmNoYXJhY3Rlci9wYXJlbnRzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2dyb3d0aC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2dyb3d0aC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjaGFyYWN0ZXJzLzpjaGFyYWN0ZXIvZ3Jvd3RoXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvbWFnaWMvYWJpbGl0aWVzLyRhYmlsaXR5L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tYWdpYy9hYmlsaXRpZXMvJGFiaWxpdHkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWFnaWMvYWJpbGl0aWVzLzphYmlsaXR5XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvbWFnaWMvY29uY2VwdHMvJGNvbmNlcHQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21hZ2ljL2NvbmNlcHRzLyRjb25jZXB0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1hZ2ljL2NvbmNlcHRzLzpjb25jZXB0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2hhcmFjdGVycy86Y2hhcmFjdGVyXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9ucy8kbG9jYXRpb24vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9ucy8kbG9jYXRpb24vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9jYXRpb25zLzpsb2NhdGlvblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9zdG9yeS8kZXZlbnQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N0b3J5LyRldmVudC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdG9yeS86ZXZlbnRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvY2hhcmFjdGVycy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY2hhcmFjdGVycy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjaGFyYWN0ZXJzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9ucy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTRcbiAgICB9LFxuICBcInJvdXRlcy9jb250YWN0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWJvdXQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fib3V0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFib3V0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL21hZ2ljL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tYWdpYy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtYWdpY1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy9zdG9yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3RvcnkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3RvcnlcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE4XG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOVxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxyXG4gIHVzZUNhdGNoLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvbWFpbi5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICBocmVmOiBzdHlsZXMsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9lNDMxOTc1M2I1LmpzXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG5cclxuICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfSkge1xyXG4gIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxzY3JpcHRcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9lNDMxOTc1M2I1LmpzXCJcclxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG5cclxuICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDE+RXJyb3I8L2gxPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBMb29rcyBsaWtlIHdlIGhhdmUgcnVuIGludG8gYW4gZXJyb3IhIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlXHJcbiAgICAgICAgICAgICAgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9ib2R5PlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xyXG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XHJcbiAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICA8aGVhZD5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8c2NyaXB0XHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2U0MzE5NzUzYjUuanNcIlxyXG4gICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcclxuICAgICAgPjwvc2NyaXB0PlxyXG4gICAgICA8TWV0YSAvPlxyXG4gICAgICA8TGlua3MgLz5cclxuICAgIDwvaGVhZD5cclxuXHJcbiAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+e2NhdWdodC5zdGF0dXN9PC9oMT5cclxuICAgICAgICAgIDxwPkxvb2tzIGxpa2UgdGhlIHBhZ2UgeW91IHdlcmUgc2VhcmNoaW5nIGZvciBkb2VzIG5vdCBleGlzdCE8L3A+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxwPntjYXVnaHQuc3RhdHVzVGV4dH08L3A+XHJcbiAgICAgICAgICA8U2NyaXB0cyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2JvZHk+XHJcbiAgPC9odG1sPjtcclxufVxyXG4iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaWRlbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbGlzdFwiKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYWNrZ3JvdW5kXCIpO1xyXG5cclxuICAgIGlmIChzaWRlbmF2LmNsYXNzTGlzdC5jb250YWlucyhcImNvb2xkb3duXCIpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2lkZW5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZfY2xvc2VkXCIpKSB7XHJcbiAgICAgIHNpZGVuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9jbG9zZWRcIik7XHJcbiAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gXCI1MCVcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZW5hdi5jbGFzc0xpc3QuYWRkKFwibmF2X2Nsb3NlZFwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIGJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgfVxyXG4gICAgc2lkZW5hdi5jbGFzc0xpc3QuYWRkKFwiY29vbGRvd25cIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2lkZW5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29vbGRvd25cIik7XHJcbiAgICB9LCA0MDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJuYXYtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGFya19iYWNrZ3JvdW5kXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZ9XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfc3BhY2VcIj48L2Rpdj5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl90b3BcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTmF2fT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBpZD1cIm5hdi1saXN0XCIgY2xhc3NOYW1lPVwibmF2X2xpc3QgbmF2X2Nsb3NlZFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtaG91c2VcIj48L2k+IEhvbWVcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NoYXJhY3RlcnNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1wZXJzb25cIj48L2k+IENoYXJhY3RlcnNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWxvY2F0aW9uLWRvdFwiPjwvaT4gTG9jYXRpb25zXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9zdG9yeVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBlblwiPjwvaT4gU3RvcnlcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL21hZ2ljXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtaGF0LXdpemFyZFwiPjwvaT4gTWFnaWNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYWRkcmVzcy1jYXJkXCI+PC9pPiBBYm91dFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWFkZHJlc3MtYm9va1wiPjwvaT4gQ29udGFjdFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIiwgIi8vIHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gdGhpcmQgcGFydHlcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaGFyYWN0ZXJTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvQ2hhcmFjdGVyU2lkZWJhci9DaGFyYWN0ZXJTaWRlYmFyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY3MuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuY2hhcmFjdGVyO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJjaGFyYWN0ZXJzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXWAsXHJcbiAgICB7IHNsdWcgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjaGFyYWN0ZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMaWtlc0Rpc2xpa2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEuY2hhcmFjdGVyWzBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENoYXJhY3RlclNpZGViYXIgY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX3NpZGViYXJcIj5cclxuICAgICAgICAgIDxoMT5MaWtlcy9EaXNsaWtlczwvaDE+XHJcbiAgICAgICAgICA8aDI+TGlrZXM6PC9oMj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXI/Lmxpa2VzXHJcbiAgICAgICAgICAgICAgPyBjaGFyYWN0ZXI/Lmxpa2VzPy5tYXAoKGxpa2VkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiY29tbWFfbGlzdFwiPntsaWtlZEl0ZW19PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBcIk5vbmVcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9zaWRlYmFyXCI+XHJcbiAgICAgICAgICA8aDI+RGlzbGlrZXM6PC9oMj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXI/LmRpc2xpa2VzXHJcbiAgICAgICAgICAgICAgPyBjaGFyYWN0ZXI/LmRpc2xpa2VzPy5tYXAoKGRpc2xpa2VkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiY29tbWFfbGlzdFwiPntkaXNsaWtlZEl0ZW19PC9zcGFuPjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgOiBcIk5vbmVcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpa2VzRGlzbGlrZXM7XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyU2lkZWJhciA9ICh7IGNoYXJhY3RlciB9KSA9PiB7XHJcbiAgbGV0IGkgPSAwO1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX3NpZGViYXJcIj5cclxuICAgICAge09iamVjdC5rZXlzKGNoYXJhY3RlcikubWFwKChrZXkpID0+IHtcclxuICAgICAgICBpKys7XHJcblxyXG4gICAgICAgIGxldCBrZXlOYW1lID0ga2V5O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGtleU5hbWUpIHtcclxuICAgICAgICAgIGNhc2UgXCJfY3JlYXRlZEF0XCI6XHJcbiAgICAgICAgICBjYXNlIFwiX2lkXCI6XHJcbiAgICAgICAgICBjYXNlIFwiX3JldlwiOlxyXG4gICAgICAgICAgY2FzZSBcIl90eXBlXCI6XHJcbiAgICAgICAgICBjYXNlIFwiX3VwZGF0ZWRBdFwiOlxyXG4gICAgICAgICAgY2FzZSBcInNsdWdcIjpcclxuICAgICAgICAgIGNhc2UgXCJkZXNjcmlwdGlvblwiOlxyXG4gICAgICAgICAgY2FzZSBcImRhdGVvZmJpcnRoXCI6XHJcbiAgICAgICAgICBjYXNlIFwiZGF0ZW9mZGVhdGhcIjpcclxuICAgICAgICAgIGNhc2UgXCJpbWFnZVwiOlxyXG4gICAgICAgICAgY2FzZSBcImRpc2xpa2VzXCI6XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIGNhc2UgXCJsaWtlc1wiOlxyXG4gICAgICAgICAgICBrZXlOYW1lID0gXCJMaWtlc1wiICsgXCIvXCIgKyBcIkRpc2xpa2VzXCI7XHJcbiAgICAgICAgICAgIGtleSA9IFwibGlrZXNkaXNsaWtlc1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJuYW1lXCI6XHJcbiAgICAgICAgICAgIGtleU5hbWUgPSBjaGFyYWN0ZXIubmFtZTtcclxuICAgICAgICAgICAga2V5ID0gXCJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9saXN0X2l0ZW1cIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICA8TGluayB0bz17XCIvY2hhcmFjdGVycy9cIiArIGNoYXJhY3Rlcj8uc2x1Zy5jdXJyZW50ICsgXCIvXCIgKyBrZXl9PlxyXG4gICAgICAgICAgICAgIHtrZXlOYW1lfVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyU2lkZWJhcjtcclxuIiwgIi8vIHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gdGhpcmQgcGFydHlcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaGFyYWN0ZXJTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvQ2hhcmFjdGVyU2lkZWJhci9DaGFyYWN0ZXJTaWRlYmFyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY3MuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuY2hhcmFjdGVyO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJjaGFyYWN0ZXJzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXWAsXHJcbiAgICB7IHNsdWcgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjaGFyYWN0ZXIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQZXJzb25hbGl0eSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLmNoYXJhY3RlclswXTtcclxuXHJcbiAgbGV0IGkgPSAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENoYXJhY3RlclNpZGViYXIgY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX3NpZGViYXJcIj5cclxuICAgICAgICAgIDxoMT5QZXJzb25hbGl0eTwvaDE+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge2NoYXJhY3Rlcj8ucGVyc29uYWxpdHkubWFwKChwZXJzb25hbGl0eVRleHQpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAge3BlcnNvbmFsaXR5VGV4dC5jaGlsZHJlblswXS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbGl0eTtcclxuIiwgIi8vIHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gdGhpcmQgcGFydHlcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaGFyYWN0ZXJTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvQ2hhcmFjdGVyU2lkZWJhci9DaGFyYWN0ZXJTaWRlYmFyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY3MuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuY2hhcmFjdGVyO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJjaGFyYWN0ZXJzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXWAsXHJcbiAgICB7IHNsdWcgfVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlZmVyZW5jZSA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYCpbX3R5cGUgPT0gXCJtYWdpY0FiaWxpdGllc1wiXWApO1xyXG4gIHJldHVybiB7XHJcbiAgICBjaGFyYWN0ZXIsXHJcbiAgICByZWZlcmVuY2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBYmlsaXRpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgY2hhcmFjdGVyID0gZGF0YS5jaGFyYWN0ZXJbMF07XHJcblxyXG4gIGNvbnN0IG1hZ2ljQWJpbGl0aWVzID0gZGF0YS5yZWZlcmVuY2U7XHJcblxyXG4gIGxldCBpID0gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGFyYWN0ZXJTaWRlYmFyIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9zaWRlYmFyXCI+XHJcbiAgICAgICAgICA8aDE+QWJpbGl0aWVzPC9oMT5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2NoYXJhY3Rlcj8uYWJpbGl0aWVzLm1hcCgoYWJpbGl0eSkgPT4ge1xyXG4gICAgICAgICAgICAgIGkrKztcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgYWJpbGl0eVJlZklkID0gYWJpbGl0eT8uX3JlZjtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IGFiaWxpdHlSZWY7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChhYmlsaXR5UmVmSWQpIHtcclxuICAgICAgICAgICAgICAgIGFiaWxpdHlSZWYgPSBtYWdpY0FiaWxpdGllcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAoYWJpbGl0aWVzKSA9PiBhYmlsaXRpZXMuX2lkID09PSBhYmlsaXR5UmVmSWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57YWJpbGl0eVJlZj8ubmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHA+e2FiaWxpdHlSZWY/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMz5BY3Rpb248L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAge2FiaWxpdHlSZWY/LmFjdGlvbi5tYXAoKGFjdGlvblRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YWN0aW9uVGV4dD8uY2hpbGRyZW5bMF0ua2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9uVGV4dC5jaGlsZHJlblswXS50ZXh0fSA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJpbGl0aWVzO1xyXG4iLCAiLy8gcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyB0aGlyZCBwYXJ0eVxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENoYXJhY3RlclNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9DaGFyYWN0ZXJTaWRlYmFyL0NoYXJhY3RlclNpZGViYXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICBocmVmOiBzdHlsZXMsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5jaGFyYWN0ZXI7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcImNoYXJhY3RlcnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddYCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNoYXJhY3RlcixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEJhY2tzdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLmNoYXJhY3RlclswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGFyYWN0ZXJTaWRlYmFyIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9zaWRlYmFyXCI+XHJcbiAgICAgICAgICA8aDE+QmFja3N0b3J5PC9oMT5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICB7Y2hhcmFjdGVyPy5iYWNrc3RvcnkubWFwKChiYWNrc3RvcnlUZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17YmFja3N0b3J5VGV4dD8uY2hpbGRyZW5bMF0ua2V5fT5cclxuICAgICAgICAgICAgICAgICAge2JhY2tzdG9yeVRleHQ/LmNoaWxkcmVuWzBdLnRleHR9IDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja3N0b3J5O1xyXG4iLCAiLy8gcmVtaXhcclxuaW1wb3J0IHsgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyB0aGlyZCBwYXJ0eVxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENoYXJhY3RlclNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9DaGFyYWN0ZXJTaWRlYmFyL0NoYXJhY3RlclNpZGViYXJcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyaXN0aWNzL0NoYXJhY3RlcmlzdGljcy5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgICBocmVmOiBzdHlsZXMsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5jaGFyYWN0ZXI7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlciA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcImNoYXJhY3RlcnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddYCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVsYXRpb25zUmVmID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcImNoYXJhY3RlcnNcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNoYXJhY3RlcixcclxuICAgIHJlbGF0aW9uc1JlZixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbGF0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLmNoYXJhY3RlclswXTtcclxuICBjb25zdCByZWxhdGlvbnNSZWZlcmVuY2UgPSBkYXRhLnJlbGF0aW9uc1JlZjtcclxuXHJcbiAgbGV0IGkgPSAwO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2hhcmFjdGVyU2lkZWJhciBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gLz5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfc2lkZWJhclwiPlxyXG4gICAgICAgICAgPGgxPlJlbGF0aW9uczwvaDE+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXI/LnJlbGF0aW9ucy5tYXAoKHJlbGF0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgaSsrO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCByZWxhdGlvblJlZmVyZW5jZUlkID0gcmVsYXRpb24/LnJlbGF0ZWQuX3JlZjtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IHJlbGF0aW9uUmVmO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocmVsYXRpb25SZWZlcmVuY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgcmVsYXRpb25SZWYgPSByZWxhdGlvbnNSZWZlcmVuY2UuZmluZChcclxuICAgICAgICAgICAgICAgICAgKHJlbGF0aW9ucykgPT4gcmVsYXRpb25zLl9pZCA9PT0gcmVsYXRpb25SZWZlcmVuY2VJZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57cmVsYXRpb25SZWY/Lm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntyZWxhdGlvblJlZj8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgPGgzPkhvdyBhcmUgdGhleSByZWxhdGVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntyZWxhdGlvbj8ucmVsYXRpb25pbmZvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89e1wiL2NoYXJhY3RlcnMvXCIgKyByZWxhdGlvblJlZj8uc2x1Zy5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZCBNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rX3VuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWxhdGlvbnM7XHJcbiIsICIvLyByZW1peFxyXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHRoaXJkIHBhcnR5XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2hhcmFjdGVyU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL0NoYXJhY3RlclNpZGViYXIvQ2hhcmFjdGVyU2lkZWJhclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgIGhyZWY6IHN0eWxlcyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2x1ZyA9IGNvbnRleHQucGFyYW1zLmNoYXJhY3RlcjtcclxuXHJcbiAgY29uc3QgY2hhcmFjdGVyID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwiY2hhcmFjdGVyc1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11gLFxyXG4gICAgeyBzbHVnIH1cclxuICApO1xyXG5cclxuICBjb25zdCBwYXJlbnRzUmVmID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcImNoYXJhY3RlcnNcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNoYXJhY3RlcixcclxuICAgIHBhcmVudHNSZWYsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXJlbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEuY2hhcmFjdGVyWzBdO1xyXG4gIGNvbnN0IHBhcmVudHNSZWZlcmVuY2UgPSBkYXRhLnBhcmVudHNSZWY7XHJcblxyXG4gIGxldCBpID0gMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGFyYWN0ZXJTaWRlYmFyIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9zaWRlYmFyXCI+XHJcbiAgICAgICAgICA8aDE+UGFyZW50czwvaDE+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXI/LnBhcmVudHMubWFwKChwYXJlbnQpID0+IHtcclxuICAgICAgICAgICAgICBpKys7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHBhcmVudFJlZmVyZW5jZUlkID0gcGFyZW50Py5fcmVmO1xyXG5cclxuICAgICAgICAgICAgICBsZXQgcGFyZW50UmVmO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocGFyZW50UmVmZXJlbmNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudFJlZiA9IHBhcmVudHNSZWZlcmVuY2UuZmluZChcclxuICAgICAgICAgICAgICAgICAgKHBhcmVudHMpID0+IHBhcmVudHMuX2lkID09PSBwYXJlbnRSZWZlcmVuY2VJZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57cGFyZW50UmVmPy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD57cGFyZW50UmVmPy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRvPXtcIi9jaGFyYWN0ZXJzL1wiICsgcGFyZW50UmVmPy5zbHVnLmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkIE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtfdW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWQgTW9yZVxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmVudHM7XHJcbiIsICIvLyByZW1peFxyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHRoaXJkIHBhcnR5XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2hhcmFjdGVyU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL0NoYXJhY3RlclNpZGViYXIvQ2hhcmFjdGVyU2lkZWJhclwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJpc3RpY3MvQ2hhcmFjdGVyaXN0aWNzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgIGhyZWY6IHN0eWxlcyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2x1ZyA9IGNvbnRleHQucGFyYW1zLmNoYXJhY3RlcjtcclxuXHJcbiAgY29uc3QgY2hhcmFjdGVyID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwiY2hhcmFjdGVyc1wiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11gLFxyXG4gICAgeyBzbHVnIH1cclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2hhcmFjdGVyLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR3Jvd3RoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlciA9IGRhdGEuY2hhcmFjdGVyWzBdO1xyXG5cclxuICBsZXQgaSA9IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q2hhcmFjdGVyU2lkZWJhciBjaGFyYWN0ZXI9e2NoYXJhY3Rlcn0gLz5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfc2lkZWJhclwiPlxyXG4gICAgICAgICAgPGgxPkNoYXJhY3RlciBHcm93dGg8L2gxPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIHtjaGFyYWN0ZXI/Lmdyb3d0aC5tYXAoKGdyb3d0aEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIHtncm93dGhJdGVtLmNoaWxkcmVuWzBdLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3Jvd3RoO1xyXG4iLCAiLy8gcmVhY3QgfCByZW1peFxyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHNhbml0eSBjbGllbnRcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9hYmlsaXR5LmNzc1wiO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgIGhyZWY6IHN0eWxlcyxcclxuICAgIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5hYmlsaXR5O1xyXG4gIGNvbnN0IG1hZ2ljQWJpbGl0eSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcIm1hZ2ljQWJpbGl0aWVzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXWAsXHJcbiAgICB7IHNsdWcgfVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtYWdpY0FiaWxpdHksXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBtYWdpY0FiaWxpdHkgfSA9IGRhdGE7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiBgTWFnaWMgQWJpbGl0eSAtICR7bWFnaWNBYmlsaXR5WzBdPy5uYW1lIHx8IFwiRVJST1JcIn1gLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQWJpbGl0eSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBhYmlsaXR5ID0gZGF0YS5tYWdpY0FiaWxpdHlbMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYmlsaXR5X2ltYWdlX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICB7YWJpbGl0eT8uaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtidWlsZGVyLmltYWdlKGFiaWxpdHkuaW1hZ2UpLnVybCgpfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiYWJpbGl0eUltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ZpbGUtc29saWQuc3ZnXCIgYWx0PVwiYWJpbGl0eUltYWdlXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+e2FiaWxpdHk/Lm5hbWUgfHwgXCJObyBUaXRsZVwifTwvaDE+XHJcbiAgICAgICAgICA8cD57YWJpbGl0eT8uZGVzY3JpcHRpb24gfHwgXCJObyBEZXNjcmlwdGlvblwifTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkFjdGlvbjwvaDE+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAge2FiaWxpdHk/LmFjdGlvbj8ubWFwKChhY3Rpb25JdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAge2FjdGlvbkl0ZW0uY2hpbGRyZW5bMF0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSkgfHwgXCJObyBBY3Rpb25cIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFiaWxpdHk7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBEcm9wZG93bkNvbnRlbnQgZnJvbSBcIn4vY29tcG9uZW50cy9Ecm9wZG93bkNvbnRlbnQvRHJvcGRvd25Db250ZW50XCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L2NvbXBvbmVudHMvRHJvcGRvd25Db250ZW50L0Ryb3Bkb3duQ29udGVudC5jc3NcIjtcclxuaW1wb3J0IHN0eWxlczIgZnJvbSBcIn4vc3R5bGVzL2NvbmNlcHQuY3NzXCI7XHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzMixcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3Qgc2x1ZyA9IGNvbnRleHQucGFyYW1zLmNvbmNlcHQ7XHJcbiAgY29uc3QgbWFnaWNDb25jZXB0ID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwibWFnaWNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddYCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG1hZ2ljQ29uY2VwdCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IG1hZ2ljQ29uY2VwdCB9ID0gZGF0YTtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IGBNYWdpYyBDb25jZXB0IC0gJHttYWdpY0NvbmNlcHRbMF0/Lm5hbWUgfHwgXCJFUlJPUlwifWAsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25jZXB0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIGNvbnN0IGNvbmNlcHQgPSBkYXRhLm1hZ2ljQ29uY2VwdFswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiBJbnNlcnQgSW1hZ2UgSGVyZSAqL31cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uY2VwdF9pbWFnZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAge2NvbmNlcHQ/LmltYWdlID8gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YnVpbGRlci5pbWFnZShjb25jZXB0LmltYWdlKS51cmwoKX1cclxuICAgICAgICAgICAgICAgIGFsdD1cImNvbmNlcHRJbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9maWxlLXNvbGlkLnN2Z1wiIGFsdD1cImNvbmNlcHRJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPk1hZ2ljIENvbmNlcHQgVGl0bGU6IHtjb25jZXB0Py5uYW1lfTwvaDE+XHJcbiAgICAgICAgICA8cD57Y29uY2VwdD8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+Q29uY2VwdCBJbmZvcm1hdGlvbjwvaDE+XHJcbiAgICAgICAgICB7Y29uY2VwdD8uYWJvdXRcclxuICAgICAgICAgICAgPyBjb25jZXB0Py5hYm91dD8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Db250ZW50IGl0ZW09e2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IFwiTm9uZVwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uY2VwdDtcclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyb3Bkb3duQ29udGVudCA9ICh7IGl0ZW0gfSkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICBsZXQgaSA9IDA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlfSBjbGFzc05hbWU9XCJkcm9wZG93bl9idXR0b25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9jb250ZW50X2l0ZW1cIj5cclxuICAgICAgICA8aDI+XHJcbiAgICAgICAgICB7aXNPcGVuID8gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1hcnJvdy1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYXJyb3ctcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICApfXtcIiBcIn1cclxuICAgICAgICAgIHtpdGVtPy5jYXRlZ29yeU5hbWV9XHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAge2l0ZW0/LmNhdGVnb3J5SW5mby5tYXAoKGNoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgICBpKys7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duX2NvbnRlbnRfdGV4dCAke1xyXG4gICAgICAgICAgICAgICAgIWlzT3BlbiAmJiBcImRyb3Bkb3duX2NvbnRlbnRfdGV4dF9oaWRkZW5cIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbi5jaGlsZHJlblswXS50ZXh0fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQ29udGVudDtcclxuIiwgIi8vIHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gdGhpcmQgcGFydHlcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaGFyYWN0ZXJTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvQ2hhcmFjdGVyU2lkZWJhci9DaGFyYWN0ZXJTaWRlYmFyXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NoYXJhY3RlcmlzdGljcy9DaGFyYWN0ZXJpc3RpY3MuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBzbHVnID0gY29udGV4dC5wYXJhbXMuY2hhcmFjdGVyO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJjaGFyYWN0ZXJzXCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXWAsXHJcbiAgICB7IHNsdWcgfVxyXG4gICk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNoYXJhY3RlcixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCB7IGNoYXJhY3RlciB9ID0gZGF0YTtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IGBDaGFyYWN0ZXIgLSAke2NoYXJhY3RlclswXS5uYW1lIHx8IFwiTi9BXCJ9YCxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJhY3RlciA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXIgPSBkYXRhLmNoYXJhY3RlclswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGFyYWN0ZXJTaWRlYmFyIGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfc2lkZWJhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfaW1hZ2VfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIHshY2hhcmFjdGVyLmltYWdlID8gKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2RlZmF1bHRfYXZhdGFyLnN2Z1wiIGFsdD1cImNoYXJhY3RlclwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2J1aWxkZXIuaW1hZ2UoY2hhcmFjdGVyLmltYWdlKX0gYWx0PVwiY2hhcmFjdGVyXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj5uYW1lPC9oMT5cclxuICAgICAgICAgIDxwPntjaGFyYWN0ZXI/Lm5hbWV9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIHtjaGFyYWN0ZXI/LmRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX3NpZGViYXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj5kZXNjcmlwdGlvbjwvaDE+XHJcbiAgICAgICAgICAgIDxwPntjaGFyYWN0ZXI/LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKX1cclxuICAgICAge2NoYXJhY3Rlcj8uZGF0ZW9mYmlydGggJiYgKFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfc2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZVwiPmRhdGUgb2YgYmlydGg8L2gxPlxyXG4gICAgICAgICAgICA8cD57Y2hhcmFjdGVyPy5kYXRlb2ZiaXJ0aH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjaGFyYWN0ZXI/LmRhdGVvZmRlYXRoICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX3NpZGViYXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcGl0YWxpemVcIj5kYXRlIG9mIGRlYXRoPC9oMT5cclxuICAgICAgICAgICAgPHA+e2NoYXJhY3Rlcj8uZGF0ZW9mZGVhdGh9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcjtcclxuIiwgIi8vIHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gdGhpcmQgcGFydHlcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMb2NhdGlvbkV2ZW50cyBmcm9tIFwifi9jb21wb25lbnRzL0xvY2F0aW9uRXZlbnRzL0xvY2F0aW9uRXZlbnRzXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xvY2F0aW9uRXZlbnRzL0xvY2F0aW9uRXZlbnRzLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4gW1xyXG4gIHtcclxuICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICBocmVmOiBzdHlsZXMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5sb2NhdGlvbjtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJsb2NhdGlvbnNcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddYCxcclxuICAgIHsgc2x1ZyB9XHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgc3RvcnlSZWYgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwic3RvcnlcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgc3RvcnlSZWYsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbiB9ID0gZGF0YTtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IGBMb2NhdGlvbiAtICR7bG9jYXRpb25bMF0ubmFtZSB8fCBcIk4vQVwifWAsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbiA9IGRhdGEubG9jYXRpb25bMF07XHJcblxyXG4gIGNvbnN0IHN0b3JpZXMgPSBkYXRhLnN0b3J5UmVmO1xyXG5cclxuICAvLyBUT0RPOiBBZGQgU29ydCBGZWF0dXJlXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbl9pbWFnZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgeyFsb2NhdGlvbi5pbWFnZSA/IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9idWlsZGluZy1jb2x1bW5zLXNvbGlkLnN2Z1wiIGFsdD1cImxvY2F0aW9uXCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YnVpbGRlci5pbWFnZShsb2NhdGlvbj8uaW1hZ2UpfSBhbHQ9XCJsb2NhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImxvY2F0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT57bG9jYXRpb24/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgIDxwPntsb2NhdGlvbj8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkxvY2F0aW9uIEV2ZW50cyAoTGF0ZXN0KTwvaDE+XHJcbiAgICAgICAgICA8TG9jYXRpb25FdmVudHMgbG9jYXRpb249e2xvY2F0aW9ufSBzdG9yaWVzPXtzdG9yaWVzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb247XHJcbiIsICIvLyByZW1peFxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYXRpb25FdmVudHMgPSAoeyBsb2NhdGlvbiwgc3RvcmllcyB9KSA9PiB7XHJcbiAgbGV0IGkgPSAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImV2ZW50c19saXN0XCI+XHJcbiAgICAgIHtsb2NhdGlvbj8uZXZlbnRzLm1hcCgoZXZlbnQpID0+IHtcclxuICAgICAgICBpKys7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50UmVmZXJlbmNlSWQgPSBldmVudD8uX3JlZjtcclxuXHJcbiAgICAgICAgbGV0IGV2ZW50UmVmO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnRSZWZlcmVuY2VJZCkge1xyXG4gICAgICAgICAgZXZlbnRSZWYgPSBzdG9yaWVzLmZpbmQoKHN0b3J5KSA9PiBzdG9yeS5faWQgPT09IGV2ZW50UmVmZXJlbmNlSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnREaXNwbGF5RGF0ZSA9IG5ldyBEYXRlKGV2ZW50UmVmPy5zdGFydERhdGUpO1xyXG4gICAgICAgIGNvbnN0IGVuZERpc3BsYXlEYXRlID0gbmV3IERhdGUoZXZlbnRSZWY/LmVuZERhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtb250aHMgPSBbXHJcbiAgICAgICAgICBcIkphbnVhcnlcIixcclxuICAgICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICAgIFwiTWFyY2hcIixcclxuICAgICAgICAgIFwiQXByaWxcIixcclxuICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICBcIkp1bmVcIixcclxuICAgICAgICAgIFwiSnVseVwiLFxyXG4gICAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgICAgICBcIk9jdG9iZXJcIixcclxuICAgICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICAgIFwiRGVjZW1iZXJcIixcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydERpc3BsYXlNb250aCA9IG1vbnRoc1tzdGFydERpc3BsYXlEYXRlLmdldE1vbnRoKCldO1xyXG4gICAgICAgIGNvbnN0IGVuZERpc3BsYXlNb250aCA9IG1vbnRoc1tlbmREaXNwbGF5RGF0ZS5nZXRNb250aCgpXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID1cclxuICAgICAgICAgIHN0YXJ0RGlzcGxheU1vbnRoICtcclxuICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgIChzdGFydERpc3BsYXlEYXRlLmdldERhdGUoKSArIDEpICtcclxuICAgICAgICAgIFwiLCBcIiArXHJcbiAgICAgICAgICBzdGFydERpc3BsYXlEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPVxyXG4gICAgICAgICAgZW5kRGlzcGxheU1vbnRoICtcclxuICAgICAgICAgIFwiIFwiICtcclxuICAgICAgICAgIChlbmREaXNwbGF5RGF0ZS5nZXREYXRlKCkgKyAxKSArXHJcbiAgICAgICAgICBcIiwgXCIgK1xyXG4gICAgICAgICAgZW5kRGlzcGxheURhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJldmVudF9pdGVtXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICB0bz17YC9zdG9yeS9ldmVudHMvJHtldmVudFJlZj8uc2x1Zy5jdXJyZW50fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jYXRpb25fZXZlbnRzX2xpc3RcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudF9jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2V2ZW50UmVmPy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAge2V2ZW50UmVmPy5zdGFydERhdGUgPyBzdGFydERhdGUgOiBcIlwifXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge2V2ZW50UmVmPy5zdGFydERhdGUgJiYgZXZlbnRSZWY/LmVuZERhdGUgPyBcIi1cIiA6IFwiXCJ9e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7ZXZlbnRSZWY/LmVuZERhdGUgPyBlbmREYXRlIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2V2ZW50UmVmPy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkV2ZW50cztcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHktY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHNsdWcgPSBjb250ZXh0LnBhcmFtcy5ldmVudDtcclxuICBjb25zdCBldmVudHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJzdG9yeVwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11gLFxyXG4gICAgeyBzbHVnIH1cclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXZlbnRzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSBkYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogZXZlbnRzWzBdLm5hbWUgfHwgXCJFcnJvclwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRXZlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgY29uc3QgeyBldmVudHMgfSA9IGRhdGE7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+e2V2ZW50c1swXT8ubmFtZSB8fCBcIk5vIFRpdGxlXCJ9PC9oMT5cclxuICAgICAgICAgIDxwPntldmVudHNbMF0/LmRlc2NyaXB0aW9uIHx8IFwiTm8gRGVzY3JpcHRpb25cIn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5QYXJ0aWNpcGFudHM8L2gxPlxyXG4gICAgICAgICAgey8qIFRPRE8gV09SSyBPTiBQQVJUSUNJUEFOVFMgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoYXJhY3RlclByZXZpZXcgfSBmcm9tIFwifi9jb21wb25lbnRzL0NoYXJhY3RlclByZXZpZXcvQ2hhcmFjdGVyUHJldmlld1wiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJQcmV2aWV3L0NoYXJhY3RlclByZXZpZXcuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwYWdlc1wiICYmIG5hbWUgPT0gXCJDaGFyYWN0ZXJzXCJdYFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwiY2hhcmFjdGVyc1wiXWApO1xyXG5cclxuICBpZiAocGFnZVswXS5sZW5ndGggPT09IDAgfHwgY2hhcmFjdGVyc1swXS5sZW5ndGggPT09IDApIHtcclxuICAgIHRocm93IG5ldyBSZXNwb25zZShcIk5vdCBGb3VuZFwiLCB7XHJcbiAgICAgIHN0YXR1czogNDA0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGFnZSxcclxuICAgIGNoYXJhY3RlcnMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogXCJDaGFyYWN0ZXJzXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJhY3RlcnMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiY2hhcmFjdGVyc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhLnBhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJsYXRlc3RcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgxPkxhdGVzdCBDaGFyYWN0ZXJzPC9oMT5cclxuICAgICAgICAgIDxDaGFyYWN0ZXJQcmV2aWV3IGRhdGE9e2RhdGEuY2hhcmFjdGVyc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCAiZXhwb3J0IGNvbnN0IFRleHRDb21wb25lbnQgPSAoeyBkYXRhIH0pID0+IHtcclxuICBsZXQgaSA9IDA7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57ZGF0YVswXT8ubmFtZX08L2gxPlxyXG4gICAgICB7ZGF0YVswXS5jb250ZW50Lm1hcCgoY2hpbGRyZW4pID0+IHtcclxuICAgICAgICBpKys7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbi5jaGlsZHJlblswXS50ZXh0fVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0Q29tcG9uZW50O1xyXG4iLCAiLy8gcmVtaXhcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcblxyXG5jb25zdCBidWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyUHJldmlldyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX2xpc3RcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKGNoYXJhY3RlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3RfY2hhcmFjdGVyXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvY2hhcmFjdGVycy8ke2NoYXJhY3Rlci5zbHVnLmN1cnJlbnR9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICB7IWNoYXJhY3Rlci5pbWFnZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kZWZhdWx0X2F2YXRhci5zdmdcIiBhbHQ9XCJjaGFyYWN0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtidWlsZGVyLmltYWdlKGNoYXJhY3Rlci5pbWFnZSl9IGFsdD1cImNoYXJhY3RlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57Y2hhcmFjdGVyLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPntjaGFyYWN0ZXIuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gcmVhY3QgfCByZW1peFxyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHNhbml0eSBjbGllbnRcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBUZXh0Q29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBMb2NhdGlvblByZXZpZXcgZnJvbSBcIn4vY29tcG9uZW50cy9Mb2NhdGlvblByZXZpZXcvTG9jYXRpb25QcmV2aWV3XCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L2NvbXBvbmVudHMvTG9jYXRpb25QcmV2aWV3L0xvY2F0aW9uUHJldmlldy5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IFtcclxuICB7XHJcbiAgICByZWw6IFwic3R5bGVzaGVldFwiLFxyXG4gICAgaHJlZjogc3R5bGVzLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiTG9jYXRpb25zXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkxvY2F0aW9uc1wiXWBcclxuICApO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbnMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwibG9jYXRpb25zXCJdYCk7XHJcblxyXG4gIHJldHVybiB7IHBhZ2UsIGxvY2F0aW9ucyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2F0aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJsb2NhdGlvbnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YS5wYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5MYXRlc3QgTG9jYXRpb25zPC9oMT5cclxuICAgICAgICAgIDxMb2NhdGlvblByZXZpZXcgZGF0YT17ZGF0YS5sb2NhdGlvbnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbnM7XHJcbiIsICIvLyByZW1peFxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcclxuXHJcbi8vIFRPRE86IENvbWJpbmUgTG9jYXRpb24gUHJldmlldyB3aXRoIENoYXJhY3RlciBQcmV2aWV3IHRvIGJlIG9uZSBjb21wb25lbnRcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhdGlvblByZXZpZXcgPSAoeyBkYXRhIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxvY2F0aW9uX2xpc3RcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoKGxvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdF9sb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2xvY2F0aW9ucy8ke2xvY2F0aW9uLnNsdWcuY3VycmVudH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHshbG9jYXRpb24uaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYnVpbGRpbmctY29sdW1ucy1zb2xpZC5zdmdcIiBhbHQ9XCJsb2NhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2J1aWxkZXIuaW1hZ2UobG9jYXRpb24uaW1hZ2UpfSBhbHQ9XCJsb2NhdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMT57bG9jYXRpb24ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+e2xvY2F0aW9uLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uUHJldmlldztcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkNvbnRhY3RcIl1gXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiQ29udGFjdFwiLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcbi8vIHNhbml0eSBjbGllbnRcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkFib3V0XCJdYCk7XHJcblxyXG4gIHJldHVybiBwYWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiBcIkFib3V0XCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCAiLy8gcmVhY3QgfCByZW1peFxyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHNhbml0eSBjbGllbnRcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBUZXh0Q29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwifi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsXCI7XHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L2NvbXBvbmVudHMvQ2Fyb3VzZWwvQ2Fyb3VzZWwuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwicGFnZXNcIiAmJiBuYW1lID09IFwiTWFnaWNcIl1gKTtcclxuICBjb25zdCBtYWdpY0NvbmNlcHQgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwibWFnaWNcIl1gKTtcclxuICBjb25zdCBtYWdpY0FiaWxpdGllcyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYCpbX3R5cGUgPT0gXCJtYWdpY0FiaWxpdGllc1wiXWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGFnZSxcclxuICAgIG1hZ2ljQ29uY2VwdCxcclxuICAgIG1hZ2ljQWJpbGl0aWVzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiTWFnaWNcIixcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hZ2ljID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibWFnaWNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YT8ucGFnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIm1hZ2ljQ29uY2VwdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+TWFnaWMgQ29uY2VwdHM8L2gxPlxyXG4gICAgICAgICAgey8qIE5PVEUgVGhlIGlkcyBiZWxvdyBhcmUgc3ViamVjdCB0byBjaGFuZ2UgdG8gZGF0YSAqL31cclxuICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhPy5tYWdpY0NvbmNlcHR9XHJcbiAgICAgICAgICAgIG5hbWU9e1wibWFnaWNDb25jZXB0c1wifVxyXG4gICAgICAgICAgICBwYXRoPVwiY29uY2VwdHMvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJtYWdpY0FiaWxpdGllc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+TWFnaWMgQWJpbGl0aWVzPC9oMT5cclxuICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBkYXRhPXtkYXRhPy5tYWdpY0FiaWxpdGllc31cclxuICAgICAgICAgICAgbmFtZT17XCJtYWdpY0FiaWxpdGllc1wifVxyXG4gICAgICAgICAgICBwYXRoPVwiYWJpbGl0aWVzL1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFnaWM7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG5cclxuY29uc3QgYnVpbGRlciA9IGltYWdlVXJsQnVpbGRlcihjbGllbnQpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsID0gKHsgZGF0YSwgbmFtZSwgcGF0aCB9KSA9PiB7XHJcbiAgY29uc3QgbWF4QW1vdW50ID0gZGF0YT8ubGVuZ3RoO1xyXG4gIGNvbnN0IFtjYXJvdXNlbEluZGV4LCBzZXRDYXJvdXNlbEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGxldCBjYXJvdXNlbExpc3RJdGVtO1xyXG4gIGxldCBuZXdJbmRleDtcclxuXHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIGNhcm91c2VsTGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsX2xpc3RfaXRlbVwiKTtcclxuICAgIG5ld0luZGV4ID0gY2Fyb3VzZWxJbmRleCArIDE7XHJcblxyXG4gICAgaWYgKGNhcm91c2VsSW5kZXggPCBtYXhBbW91bnQgLSAxKSB7XHJcbiAgICAgIHNldENhcm91c2VsSW5kZXgobmV3SW5kZXgpO1xyXG4gICAgICBjYXJvdXNlbExpc3RJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbEl0ZW1XaWR0aCA9IGl0ZW0uY2xpZW50V2lkdGg7XHJcbiAgICAgICAgY29uc3QgbmV3VHJhbnNmb3JtVmFsdWUgPSAwIC0gY2Fyb3VzZWxJdGVtV2lkdGggKiBuZXdJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpKSB7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3VHJhbnNmb3JtVmFsdWV9cHgpYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJhY2sgPSAoKSA9PiB7XHJcbiAgICBjYXJvdXNlbExpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbF9saXN0X2l0ZW1cIik7XHJcbiAgICBuZXdJbmRleCA9IGNhcm91c2VsSW5kZXggLSAxO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbEluZGV4ID4gMCkge1xyXG4gICAgICBzZXRDYXJvdXNlbEluZGV4KG5ld0luZGV4KTtcclxuICAgICAgY2Fyb3VzZWxMaXN0SXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxJdGVtV2lkdGggPSBpdGVtLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IG5ld1RyYW5zZm9ybVZhbHVlID1cclxuICAgICAgICAgIDAgLSBjYXJvdXNlbEl0ZW1XaWR0aCAqIGNhcm91c2VsSW5kZXggKyBjYXJvdXNlbEl0ZW1XaWR0aDtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKG5hbWUpKSB7XHJcbiAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3VHJhbnNmb3JtVmFsdWV9cHgpYDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2Fyb3VzZWxfbGlzdFwiPlxyXG4gICAgICAgIHtkYXRhPy5sZW5ndGggIT09IDBcclxuICAgICAgICAgID8gZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BjYXJvdXNlbF9saXN0X2l0ZW0gJHtuYW1lfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsX2xpc3RfaXRlbV9zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHtwYXRofSR7aXRlbT8uc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbF9pbWFnZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpdGVtLmltYWdlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ZpbGUtc29saWQuc3ZnXCIgYWx0PVwiY2Fyb3VzZWxJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtidWlsZGVyLmltYWdlKGl0ZW0uaW1hZ2UpLnVybCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2Fyb3VzZWxJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyPntpdGVtPy5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJvdXNlbF9jYXJkX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxfaXRlbV9yZWFkX21vcmVcIj5SZWFkIE1vcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgOiBcIlRoZXJlIGFyZSBubyBpdGVtcyB0byBkaXNwbGF5XCJ9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWxfYXJyb3dzXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtiYWNrfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWFycm93LWxlZnRcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgey8qIFRPRE8gRnV0dXJlIEJyb3dzZSBCdXR0b24/ICovfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17bmV4dH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1hcnJvdy1yaWdodFwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWw7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcclxuaW1wb3J0IFRpbWVsaW5lIGZyb20gXCJ+L2NvbXBvbmVudHMvVGltZWxpbmUvVGltZWxpbmVcIjtcclxuLy8gc3R5bGVcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9jb21wb25lbnRzL1RpbWVsaW5lL1RpbWVsaW5lLmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgIGhyZWY6IHN0eWxlcyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIlN0b3J5XCJdYCk7XHJcblxyXG4gIGNvbnN0IG1haW5UaW1lbGluZSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInRpbWVsaW5lXCIgJiYgbmFtZSA9PSBcIlN0b3J5IFRpbWVsaW5lIFtBTExdXCJdWzBdYFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGV2ZW50cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYCpbX3R5cGUgPT0gXCJzdG9yeVwiXWApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGFnZSxcclxuICAgIG1haW5UaW1lbGluZSxcclxuICAgIGV2ZW50cyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHRpdGxlOiBcIlN0b3J5XCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJzdG9yeVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhLnBhZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ0aW1lbGluZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDE+e2RhdGE/Lm1haW5UaW1lbGluZT8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgPFRpbWVsaW5lXHJcbiAgICAgICAgICAgIHRpbWVsaW5lPXtkYXRhPy5tYWluVGltZWxpbmV9XHJcbiAgICAgICAgICAgIG5hbWU9e1wibWFpblRpbWVsaW5lXCJ9XHJcbiAgICAgICAgICAgIGV2ZW50cz17ZGF0YT8uZXZlbnRzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5O1xyXG4iLCAiLy8gcmVhY3QgfCByZW1peFxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuY29uc3QgRGF0ZXMgPSAoeyBwcmV2aWV3IH0pID0+IHtcclxuICBpZiAocHJldmlldz8uc3RhcnREYXRlICYmIHByZXZpZXc/LmVuZERhdGUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3ByZXZpZXc/LnN0YXJ0RGF0ZX0gLSB7cHJldmlldz8uZW5kRGF0ZX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gPD57cHJldmlldz8uc3RhcnREYXRlIHx8IHByZXZpZXc/LmVuZERhdGV9PC8+O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lbGluZSA9ICh7IHRpbWVsaW5lLCBldmVudHMsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3QgYmFjayA9ICgpID0+IHt9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZV9wcmV2aWV3X2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVfcHJldmlld1wiPlxyXG4gICAgICAgICAge3ByZXZpZXcgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZV9pbWFnZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS83MDB4MjAwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInBsYWNlaG9sZGVySW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDE+e3ByZXZpZXc/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZXMgcHJldmlldz17cHJldmlld30gLz5cclxuICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxwPntwcmV2aWV3Py5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lX2xlYXJuX21vcmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e2Avc3RvcnkvJHtwcmV2aWV3Py5zbHVnLmN1cnJlbnR9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgxPk5vdGhpbmcgU2VsZWN0ZWQ8L2gxPlxyXG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBhIHRpbWVsaW5lIHBvaW50IGRvd24gYmVsb3c8L3A+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtY2lyY2xlLWRvdFwiPjwvaT5cclxuICAgICAgICAgICAgICA8cD5ePC9wPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidGltZWxpbmVfbGlzdFwiPlxyXG4gICAgICAgIHt0aW1lbGluZT8uZXZlbnRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1FdmVudCA9IGV2ZW50cy5maW5kKChldmVudCkgPT4gZXZlbnQ/Ll9pZCA9PT0gaXRlbT8uX3JlZik7XHJcbiAgICAgICAgICAvLyBUT0RPOiBBZGQgaW1hZ2VzIHRvIHNhbml0eSBldmVudHNcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2B0aW1lbGluZV9saXN0X2l0ZW0gJHtuYW1lfWB9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtpbmRleCA9PT0gMCAmJiA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1taW51c1wiPjwvaT59XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGltZWxpbmVfYnV0dG9uX3NlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzZWxlY3RlZEJ1dHRvbnMpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidGltZWxpbmVfYnV0dG9uX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGltZWxpbmVfYnV0dG9uX3NlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRQcmV2aWV3KGl0ZW1FdmVudCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW1FdmVudD8ubmFtZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1jaXJjbGUtZG90XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLW1pbnVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lbGluZV9hcnJvd3NcIj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2JhY2t9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYXJyb3ctbGVmdFwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7LyogVE9ETyBGdXR1cmUgQnJvd3NlIEJ1dHRvbj8gKi99XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtuZXh0fT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWFycm93LXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwicGFnZXNcIiAmJiBuYW1lID09IFwiSG9tZVwiXWApO1xyXG5cclxuICByZXR1cm4gcGFnZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0aXRsZTogXCJIb21lXCIsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicxMTJhYjgzZicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSDdaRlFUNlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTdWNVVCVTRDLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1ZTTNXUkZKRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6dHJ1ZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9hYm91dC9pbmRleCc6eydpZCc6J3JvdXRlcy9hYm91dC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhYm91dCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWJvdXQvaW5kZXgtRjVZNkI0NEouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9BSUlXTjZCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2FiaWxpdGllcy9pbmRleCc6eydpZCc6J3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvYWJpbGl0aWVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NoYXJhY3RlcnMvOmNoYXJhY3Rlci9hYmlsaXRpZXMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9hYmlsaXRpZXMvaW5kZXgtVE5PRUoyU1cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU42UTROMkdFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2JhY2tzdG9yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvYmFja3N0b3J5L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NoYXJhY3RlcnMvOmNoYXJhY3Rlci9iYWNrc3RvcnknLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9iYWNrc3RvcnkvaW5kZXgtVlBYWjZLSDcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU42UTROMkdFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2dyb3d0aC9pbmRleCc6eydpZCc6J3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvZ3Jvd3RoL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NoYXJhY3RlcnMvOmNoYXJhY3Rlci9ncm93dGgnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9ncm93dGgvaW5kZXgtN0pTUk9WSFIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU42UTROMkdFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL2luZGV4Jzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaGFyYWN0ZXJzLzpjaGFyYWN0ZXInLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9pbmRleC1LVVJNNTZHQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlhKRFFXUEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ONlE0TjJHRS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNITE9NSlY3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9saWtlc2Rpc2xpa2VzL2luZGV4Jzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9saWtlc2Rpc2xpa2VzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NoYXJhY3RlcnMvOmNoYXJhY3Rlci9saWtlc2Rpc2xpa2VzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvbGlrZXNkaXNsaWtlcy9pbmRleC1BWVBaWkcyQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTjZRNE4yR0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSExPTUpWNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvcGFyZW50cy9pbmRleCc6eydpZCc6J3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvcGFyZW50cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaGFyYWN0ZXJzLzpjaGFyYWN0ZXIvcGFyZW50cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3BhcmVudHMvaW5kZXgtWk1SN0JBUDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU42UTROMkdFLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3BlcnNvbmFsaXR5L2luZGV4Jzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9wZXJzb25hbGl0eS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaGFyYWN0ZXJzLzpjaGFyYWN0ZXIvcGVyc29uYWxpdHknLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9wZXJzb25hbGl0eS9pbmRleC1WS1ZYRFhHQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTjZRNE4yR0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSExPTUpWNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaGFyYWN0ZXJzLyRjaGFyYWN0ZXIvcmVsYXRpb25zL2luZGV4Jzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMvJGNoYXJhY3Rlci9yZWxhdGlvbnMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2hhcmFjdGVycy86Y2hhcmFjdGVyL3JlbGF0aW9ucycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2hhcmFjdGVycy8kY2hhcmFjdGVyL3JlbGF0aW9ucy9pbmRleC1BUUFLVzU1Uy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTjZRNE4yR0UuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSExPTUpWNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaGFyYWN0ZXJzL2luZGV4Jzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2hhcmFjdGVycycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2hhcmFjdGVycy9pbmRleC1QNzdSRERXQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstT0FJSVdONkIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1aWEpEUVdQSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNITE9NSlY3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29udGFjdC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb250YWN0L2luZGV4LUU0VldXQlZMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PQUlJV042Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNITE9NSlY3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUJFNTJWVVZMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PQUlJV042Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVNITE9NSlY3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvY2F0aW9ucy8kbG9jYXRpb24vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zLyRsb2NhdGlvbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMvOmxvY2F0aW9uJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2NhdGlvbnMvJGxvY2F0aW9uL2luZGV4LUYyNUtVM1lYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TSExPTUpWNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zL2luZGV4LVJONUFQVURTLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PQUlJV042Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpYSkRRV1BJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFnaWMvYWJpbGl0aWVzLyRhYmlsaXR5L2luZGV4Jzp7J2lkJzoncm91dGVzL21hZ2ljL2FiaWxpdGllcy8kYWJpbGl0eS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtYWdpYy9hYmlsaXRpZXMvOmFiaWxpdHknLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21hZ2ljL2FiaWxpdGllcy8kYWJpbGl0eS9pbmRleC1CVVdSTE83NC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlhKRFFXUEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSExPTUpWNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tYWdpYy9jb25jZXB0cy8kY29uY2VwdC9pbmRleCc6eydpZCc6J3JvdXRlcy9tYWdpYy9jb25jZXB0cy8kY29uY2VwdC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtYWdpYy9jb25jZXB0cy86Y29uY2VwdCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWFnaWMvY29uY2VwdHMvJGNvbmNlcHQvaW5kZXgtQlg1SzdUU0guanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpYSkRRV1BJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFnaWMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWFnaWMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWFnaWMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21hZ2ljL2luZGV4LUY0NEZHSlFBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PQUlJV042Qi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVpYSkRRV1BJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc3RvcnkvJGV2ZW50L2luZGV4Jzp7J2lkJzoncm91dGVzL3N0b3J5LyRldmVudC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdG9yeS86ZXZlbnQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3N0b3J5LyRldmVudC9pbmRleC1YNE1ESFBWSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWlhKRFFXUEkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1TSExPTUpWNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdG9yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9zdG9yeS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdG9yeScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3RvcnkvaW5kZXgtS1lBSkFFVVIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9BSUlXTjZCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstU0hMT01KVjcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTExMkFCODNGLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMs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
