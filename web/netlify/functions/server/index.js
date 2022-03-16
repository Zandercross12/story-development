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

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
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
  links: () => links2,
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
var CharacterPreview = ({ data }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", {
    className: "character_list"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "character_list_item"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/characters",
    className: "character_list_link"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "image_container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/default_avatar.svg",
    alt: "Me"
  })), /* @__PURE__ */ React.createElement("h1", {
    className: "character_name"
  }, "[Character Name]"), /* @__PURE__ */ React.createElement("p", {
    className: "character_description"
  }, "[Character Description]")))));
};

// app/components/CharacterPreview/CharacterPreview.css
var CharacterPreview_default = "/build/_assets/CharacterPreview-WDJZNXZU.css";

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
function links2() {
  return [
    {
      rel: "stylesheet",
      href: CharacterPreview_default
    }
  ];
}
var loader = async () => {
  const pages = await import_client.default.fetch(import_groq.default`*[_type == "pages" && name == "Characters"]`);
  const characters = await import_client.default.fetch(import_groq.default`*[_type == "characters"]`);
  return {
    pages,
    characters
  };
};
function Characters() {
  const data = (0, import_remix5.useLoaderData)();
  console.log(data);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "characters"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(TextComponent, {
    data: data.pages
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
var assets_manifest_default = { "version": "01b36261", "entry": { "module": "/build/entry.client-SCUDFJUZ.js", "imports": ["/build/_shared/chunk-GY57RDUC.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-25ZAJBQO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-CRCND4WU.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/index": { "id": "routes/characters/index", "parentId": "root", "path": "characters", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/index-TBOZFRAF.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-VG6JUZ6Q.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WBBO3Z67.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations/index": { "id": "routes/locations/index", "parentId": "root", "path": "locations", "index": true, "caseSensitive": void 0, "module": "/build/routes/locations/index-6TZK4MSK.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/magic/index": { "id": "routes/magic/index", "parentId": "root", "path": "magic", "index": true, "caseSensitive": void 0, "module": "/build/routes/magic/index-CC6JGPMA.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/story/index": { "id": "routes/story/index", "parentId": "root", "path": "story", "index": true, "caseSensitive": void 0, "module": "/build/routes/story/index-RSRRHNDJ.js", "imports": ["/build/_shared/chunk-TAKSPQWW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-01B36261.js" };

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

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9hcHAvbGliL3Nhbml0eS9jbGllbnQuanMiLCAiLi4vLi4vLi4vc2VydmVyLmpzIiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uLy4uLy4uL2FwcC9lbnRyeS5zZXJ2ZXIuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb290LmpzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxjaGFyYWN0ZXJzXFxpbmRleC5qc3giLCAiLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50LmpzeCIsICIuLi8uLi8uLi9hcHAvY29tcG9uZW50cy9DaGFyYWN0ZXJQcmV2aWV3L0NoYXJhY3RlclByZXZpZXcuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGxvY2F0aW9uc1xcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGNvbnRhY3RcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxhYm91dFxcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXG1hZ2ljXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcc3RvcnlcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxpbmRleC5qc3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiY29uc3Qgc2FuaXR5Q2xpZW50ID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzYW5pdHlDbGllbnQoe1xyXG4gICAgcHJvamVjdElkOiBcInVmZGl6bG91XCIsXHJcbiAgICBkYXRhc2V0OiBcInByb2R1Y3Rpb25cIixcclxuICAgIHVzZUNkbjogXCJ0cnVlXCIsXHJcbiAgICBhcGlWZXJzaW9uOiBcIjIwMjEtMTAtMjFcIixcclxufSk7IiwgImltcG9ydCB7IGNyZWF0ZVJlcXVlc3RIYW5kbGVyIH0gZnJvbSBcIkByZW1peC1ydW4vbmV0bGlmeVwiO1xuaW1wb3J0ICogYXMgYnVpbGQgZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiO1xuXG4vKlxuICogUmV0dXJucyBhIGNvbnRleHQgb2JqZWN0IHdpdGggYXQgbW9zdCAzIGtleXM6XG4gKiAgLSBgbmV0bGlmeUdyYXBoVG9rZW5gOiByYXcgYXV0aGVudGljYXRpb24gdG9rZW4gdG8gdXNlIHdpdGggTmV0bGlmeSBHcmFwaFxuICogIC0gYGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuYDogRm9yIHVzZSB3aXRoIEpXVHMgZ2VuZXJhdGVkIGJ5XG4gKiAgICBgbmV0bGlmeS1ncmFwaC1hdXRoYC5cbiAqICAtIGBuZXRsaWZ5R3JhcGhTaWduYXR1cmVgOiBhIHNpZ25hdHVyZSBmb3Igc3Vic2NyaXB0aW9uIGV2ZW50cy4gV2lsbCBiZVxuICogICAgcHJlc2VudCBpZiBhIHNlY3JldCBpcyBzZXQuXG4gKi9cbmZ1bmN0aW9uIGdldExvYWRDb250ZXh0KGV2ZW50LCBjb250ZXh0KSB7XG4gIGxldCByYXdBdXRob3JpemF0aW9uU3RyaW5nO1xuICBsZXQgbmV0bGlmeUdyYXBoVG9rZW47XG5cbiAgaWYgKGV2ZW50LmF1dGhsaWZ5VG9rZW4gIT0gbnVsbCkge1xuICAgIG5ldGxpZnlHcmFwaFRva2VuID0gZXZlbnQuYXV0aGxpZnlUb2tlbjtcbiAgfVxuXG4gIGNvbnN0IGF1dGhIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wiYXV0aG9yaXphdGlvblwiXTtcbiAgY29uc3QgZ3JhcGhTaWduYXR1cmVIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wieC1uZXRsaWZ5LWdyYXBoLXNpZ25hdHVyZVwiXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdChcIiBcIilbMV07XG4gIH1cblxuICBjb25zdCBsb2FkQ29udGV4dCA9IHtcbiAgICBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbjogcmF3QXV0aG9yaXphdGlvblN0cmluZyxcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbjogbmV0bGlmeUdyYXBoVG9rZW4sXG4gICAgbmV0bGlmeUdyYXBoU2lnbmF0dXJlOiBncmFwaFNpZ25hdHVyZUhlYWRlcixcbiAgfTtcblxuICAvLyBSZW1vdmUga2V5cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXNcbiAgT2JqZWN0LmtleXMobG9hZENvbnRleHQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChsb2FkQ29udGV4dFtrZXldID09IG51bGwpIHtcbiAgICAgIGRlbGV0ZSBsb2FkQ29udGV4dFtrZXldO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvYWRDb250ZXh0O1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcbiAgYnVpbGQsXG4gIGdldExvYWRDb250ZXh0LFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIuanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb290LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNoYXJhY3RlcnNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNvbnRhY3RcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWJvdXRcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWFnaWNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3RvcnlcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jaGFyYWN0ZXJzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYXJhY3RlcnNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9sb2NhdGlvbnMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvY2F0aW9ucy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2NhdGlvbnNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9jb250YWN0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9hYm91dC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWJvdXQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9tYWdpYy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWFnaWMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWFnaWNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9zdG9yeS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3RvcnkvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3RvcnlcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgcmVzcG9uc2VIZWFkZXJzLFxuICByZW1peENvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwifi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcbi8vIHN0eWxlc1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwifi9zdHlsZXMvbWFpbi5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ldGEoKSB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkhvbWVcIiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgIGhyZWY6IHN0eWxlcyxcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2U0MzE5NzUzYjUuanNcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cblxuICAgICAgPE5hdmJhciAvPlxuXG4gICAgICA8Ym9keT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCB0b2dnbGVOYXYgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzaWRlbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtbGlzdFwiKTtcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1iYWNrZ3JvdW5kXCIpO1xyXG5cclxuICAgIGlmIChzaWRlbmF2LmNsYXNzTGlzdC5jb250YWlucyhcImNvb2xkb3duXCIpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2lkZW5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZfY2xvc2VkXCIpKSB7XHJcbiAgICAgIHNpZGVuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9jbG9zZWRcIik7XHJcbiAgICAgIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gXCI1MCVcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLnpJbmRleCA9IFwiMVwiO1xyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2lkZW5hdi5jbGFzc0xpc3QuYWRkKFwibmF2X2Nsb3NlZFwiKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgYmFja2dyb3VuZC5zdHlsZS56SW5kZXggPSBcIi0xXCI7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICAgIGJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgfVxyXG4gICAgc2lkZW5hdi5jbGFzc0xpc3QuYWRkKFwiY29vbGRvd25cIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2lkZW5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29vbGRvd25cIik7XHJcbiAgICB9LCA0MDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJuYXYtYmFja2dyb3VuZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGFya19iYWNrZ3JvdW5kXCJcclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVOYXZ9XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfc3BhY2VcIj48L2Rpdj5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl90b3BcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTmF2fT5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx1bCBpZD1cIm5hdi1saXN0XCIgY2xhc3NOYW1lPVwibmF2X2xpc3QgbmF2X2Nsb3NlZFwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtaG91c2VcIj48L2k+IEhvbWVcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2NoYXJhY3RlcnNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1wZXJzb25cIj48L2k+IENoYXJhY3RlcnNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2xvY2F0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWxvY2F0aW9uLWRvdFwiPjwvaT4gTG9jYXRpb25zXHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9zdG9yeVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBlblwiPjwvaT4gU3RvcnlcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL21hZ2ljXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtaGF0LXdpemFyZFwiPjwvaT4gTWFnaWNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYWRkcmVzcy1jYXJkXCI+PC9pPiBBYm91dFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLWFkZHJlc3MtYm9va1wiPjwvaT4gQ29udGFjdFxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufTtcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCB7IENoYXJhY3RlclByZXZpZXcgfSBmcm9tIFwifi9jb21wb25lbnRzL0NoYXJhY3RlclByZXZpZXcvQ2hhcmFjdGVyUHJldmlld1wiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGFyYWN0ZXJQcmV2aWV3L0NoYXJhY3RlclByZXZpZXcuY3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogc3R5bGVzLFxyXG4gICAgfSxcclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2VzID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwicGFnZXNcIiAmJiBuYW1lID09IFwiQ2hhcmFjdGVyc1wiXWBcclxuICApO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcImNoYXJhY3RlcnNcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhZ2VzLFxyXG4gICAgY2hhcmFjdGVycyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhcmFjdGVycygpIHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiY2hhcmFjdGVyc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhLnBhZ2VzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibGF0ZXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5MYXRlc3QgQ2hhcmFjdGVyczwvaDE+XHJcbiAgICAgICAgICA8Q2hhcmFjdGVyUHJldmlldyBkYXRhPXtkYXRhLmNoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBUZXh0Q29tcG9uZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57ZGF0YVswXT8ubmFtZX08L2gxPlxyXG4gICAgICB7ZGF0YVswXS5jb250ZW50Lm1hcCgoY2hpbGRyZW4pID0+IHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIGkrKztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVuLmNoaWxkcmVuWzBdLnRleHR9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDb21wb25lbnQ7XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhcmFjdGVyUHJldmlldyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX2xpc3RcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvY2hhcmFjdGVyc1wiIGNsYXNzTmFtZT1cImNoYXJhY3Rlcl9saXN0X2xpbmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kZWZhdWx0X2F2YXRhci5zdmdcIiBhbHQ9XCJNZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX25hbWVcIj5bQ2hhcmFjdGVyIE5hbWVdPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX2Rlc2NyaXB0aW9uXCI+W0NoYXJhY3RlciBEZXNjcmlwdGlvbl08L3A+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBUZXh0Q29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwYWdlc1wiICYmIG5hbWUgPT0gXCJMb2NhdGlvbnNcIl1gXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTG9jYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImxvY2F0aW9uc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUZXh0Q29tcG9uZW50IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbnM7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBUZXh0Q29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwYWdlc1wiICYmIG5hbWUgPT0gXCJDb250YWN0XCJdYFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBwYWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUZXh0Q29tcG9uZW50IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCAiLy8gcmVhY3QgfCByZW1peFxyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RleHRDb21wb25lbnQvVGV4dENvbXBvbmVudFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYCpbX3R5cGUgPT0gXCJwYWdlc1wiICYmIG5hbWUgPT0gXCJBYm91dFwiXWApO1xyXG5cclxuICByZXR1cm4gcGFnZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCAiLy8gcmVhY3QgfCByZW1peFxyXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHNhbml0eSBjbGllbnRcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgVGV4dENvbXBvbmVudCBmcm9tIFwifi9jb21wb25lbnRzL1RleHRDb21wb25lbnQvVGV4dENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIk1hZ2ljXCJdYCk7XHJcblxyXG4gIHJldHVybiBwYWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hZ2ljID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibWFnaWNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFnaWM7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBUZXh0Q29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwicGFnZXNcIiAmJiBuYW1lID09IFwiU3RvcnlcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwic3RvcnlcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3Rvcnk7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XG4vLyBzYW5pdHkgY2xpZW50XG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XG4vLyB0aGlyZC1wYXJ0eVxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcblxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYCpbX3R5cGUgPT0gXCJwYWdlc1wiICYmIG5hbWUgPT0gXCJIb21lXCJdYCk7XG5cbiAgcmV0dXJuIHBhZ2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwiaG9tZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicwMWIzNjI2MScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtU0NVREZKVVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdZNTdSRFVDLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0yNVpBSkJRTy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fib3V0L2luZGV4Jzp7J2lkJzoncm91dGVzL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hYm91dC9pbmRleC1DUkNORDRXVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVEFLU1BRV1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY2hhcmFjdGVycy9pbmRleCc6eydpZCc6J3JvdXRlcy9jaGFyYWN0ZXJzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NoYXJhY3RlcnMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvaW5kZXgtVEJPWkZSQUYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRBS1NQUVdXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvbnRhY3QvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29udGFjdC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb250YWN0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb250YWN0L2luZGV4LVZHNkpVWjZRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UQUtTUFFXVy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1XQkJPM1o2Ny5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVEFLU1BRV1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9jYXRpb25zL2luZGV4Jzp7J2lkJzoncm91dGVzL2xvY2F0aW9ucy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2NhdGlvbnMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvY2F0aW9ucy9pbmRleC02VFpLNE1TSy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstVEFLU1BRV1cuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWFnaWMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWFnaWMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWFnaWMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21hZ2ljL2luZGV4LUNDNkpHUE1BLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UQUtTUFFXVy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdG9yeS9pbmRleCc6eydpZCc6J3JvdXRlcy9zdG9yeS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdG9yeScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3RvcnkvaW5kZXgtUlNSUkhOREouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRBS1NQUVdXLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC0wMUIzNjI2MS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6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
