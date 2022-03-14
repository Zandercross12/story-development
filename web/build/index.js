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
  default: () => App,
  links: () => links,
  meta: () => meta
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
var main_default = "/build/_assets/main-5YTOBX6S.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\root.jsx
function meta() {
  return { title: "Home" };
}
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
    crossorigin: "anonymous"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var characters_exports = {};
__export(characters_exports, {
  default: () => Characters,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_client = __toESM(require_client());

// app/components/TextComponent/TextComponent.jsx
init_react();
var TextComponent = ({ data }) => {
  var _a;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, (_a = data[0]) == null ? void 0 : _a.name), data[0].content.map((children) => {
    let i = 0;
    i++;
    return /* @__PURE__ */ React.createElement("p", {
      key: i
    }, children.children[0].text, /* @__PURE__ */ React.createElement("br", null));
  }));
};
var TextComponent_default = TextComponent;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var import_groq = __toESM(require("groq"));

// app/components/CharacterPreview/CharacterPreview.jsx
init_react();
var import_remix4 = __toESM(require_remix());
var CharacterPreview = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/characters"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "image-container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/simple.jpg",
    alt: "Me"
  })), /* @__PURE__ */ React.createElement("h1", null, "[Character Name]"), /* @__PURE__ */ React.createElement("p", null, "[Character Description]")))));
};

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var loader = async () => {
  const page = await import_client.default.fetch(import_groq.default`*[_type == "pages" && name == "Characters"]`);
  return page;
};
function Characters() {
  const data = (0, import_remix5.useLoaderData)();
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

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\locations\index.jsx
var locations_exports = {};
__export(locations_exports, {
  Locations: () => Locations,
  default: () => locations_default,
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_client2 = __toESM(require_client());
var import_groq2 = __toESM(require("groq"));
var loader2 = async () => {
  const page = await import_client2.default.fetch(import_groq2.default`*[_type == "pages" && name == "Locations"]`);
  return page;
};
var Locations = () => {
  const data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    id: "locations"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data
  })));
};
var locations_default = Locations;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\contact\index.jsx
var contact_exports = {};
__export(contact_exports, {
  Contact: () => Contact,
  default: () => contact_default,
  loader: () => loader3
});
init_react();
var import_remix7 = __toESM(require_remix());
var import_client3 = __toESM(require_client());
var import_groq3 = __toESM(require("groq"));
var loader3 = async () => {
  const page = await import_client3.default.fetch(import_groq3.default`*[_type == "pages" && name == "Contact"]`);
  return page;
};
var Contact = () => {
  const data = (0, import_remix7.useLoaderData)();
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
  loader: () => loader4
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_client4 = __toESM(require_client());
var import_groq4 = __toESM(require("groq"));
var loader4 = async () => {
  const page = await import_client4.default.fetch(import_groq4.default`*[_type == "pages" && name == "About"]`);
  return page;
};
var About = () => {
  const data = (0, import_remix8.useLoaderData)();
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
  loader: () => loader5
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_client5 = __toESM(require_client());
var import_groq5 = __toESM(require("groq"));
var loader5 = async () => {
  const page = await import_client5.default.fetch(import_groq5.default`*[_type == "pages" && name == "Magic"]`);
  return page;
};
var Magic = () => {
  const data = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    id: "magic"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data
  })));
};
var magic_default = Magic;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\story\index.jsx
var story_exports = {};
__export(story_exports, {
  Story: () => Story,
  default: () => story_default,
  loader: () => loader6
});
init_react();
var import_remix10 = __toESM(require_remix());
var import_client6 = __toESM(require_client());
var import_groq6 = __toESM(require("groq"));
var loader6 = async () => {
  const page = await import_client6.default.fetch(import_groq6.default`*[_type == "pages" && name == "Story"]`);
  return page;
};
var Story = () => {
  const data = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    id: "story"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent_default, {
    data
  })));
};
var story_default = Story;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_client7 = __toESM(require_client());
var import_groq7 = __toESM(require("groq"));
var loader7 = async () => {
  const page = await import_client7.default.fetch(import_groq7.default`*[_type == "pages" && name == "Home"]`);
  return page;
};
function Index() {
  const data = (0, import_remix11.useLoaderData)();
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
var assets_manifest_default = { "version": "3b0f2ac0", "entry": { "module": "/build/entry.client-CYCQ5B7F.js", "imports": ["/build/_shared/chunk-JQKLRX6F.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-OXMZ4HZ4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-MPP4XABM.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/index": { "id": "routes/characters/index", "parentId": "root", "path": "characters", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/index-KTKYQ5GO.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-AG3E23OP.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-PZR3XJDF.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations/index": { "id": "routes/locations/index", "parentId": "root", "path": "locations", "index": true, "caseSensitive": void 0, "module": "/build/routes/locations/index-PEYU6VCG.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/magic/index": { "id": "routes/magic/index", "parentId": "root", "path": "magic", "index": true, "caseSensitive": void 0, "module": "/build/routes/magic/index-TSZPLGTS.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/story/index": { "id": "routes/story/index", "parentId": "root", "path": "story", "index": true, "caseSensitive": void 0, "module": "/build/routes/story/index-OAQR642R.js", "imports": ["/build/_shared/chunk-P7UGURTB.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-3B0F2AC0.js" };

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
