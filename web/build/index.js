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

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  Character: () => Character,
  default: () => slug_default
});
init_react();
var import_react = __toESM(require("react"));
var Character = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", null, "Character");
};
var slug_default = Character;

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var characters_exports = {};
__export(characters_exports, {
  default: () => Characters,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_client2 = __toESM(require_client());

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

// app/components/CharacterPreview/CharacterPreview.jsx
init_react();
var import_remix4 = __toESM(require_remix());
var import_image_url = __toESM(require("@sanity/image-url"));
var import_client = __toESM(require_client());
var builder = (0, import_image_url.default)(import_client.default);
var CharacterPreview = ({ data }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("ul", {
    className: "character_list"
  }, data.map((character) => {
    return /* @__PURE__ */ React.createElement("li", {
      className: "character_list_item"
    }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
      to: `/characters/${character.slug.current}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "image_container"
    }, !character.image ? /* @__PURE__ */ React.createElement("img", {
      src: "/default_avatar.svg",
      alt: "character"
    }) : /* @__PURE__ */ React.createElement("img", {
      src: builder.image(character.image),
      alt: "character"
    })), /* @__PURE__ */ React.createElement("h1", null, character.name), /* @__PURE__ */ React.createElement("p", null, character.description)));
  })));
};

// route:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\characters\index.jsx
var import_groq = __toESM(require("groq"));

// app/components/CharacterPreview/CharacterPreview.css
var CharacterPreview_default = "/build/_assets/CharacterPreview-SLCT7N5Q.css";

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
  const page = await import_client2.default.fetch(import_groq.default`*[_type == "pages" && name == "Characters"]`);
  const characters = await import_client2.default.fetch(import_groq.default`*[_type == "characters"]`);
  return {
    page,
    characters
  };
};
function Characters() {
  const data = (0, import_remix5.useLoaderData)();
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
  loader: () => loader2
});
init_react();
var import_remix6 = __toESM(require_remix());
var import_client3 = __toESM(require_client());
var import_groq2 = __toESM(require("groq"));
var loader2 = async () => {
  const page = await import_client3.default.fetch(import_groq2.default`*[_type == "pages" && name == "Locations"]`);
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
var import_client4 = __toESM(require_client());
var import_groq3 = __toESM(require("groq"));
var loader3 = async () => {
  const page = await import_client4.default.fetch(import_groq3.default`*[_type == "pages" && name == "Contact"]`);
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
var import_client5 = __toESM(require_client());
var import_groq4 = __toESM(require("groq"));
var loader4 = async () => {
  const page = await import_client5.default.fetch(import_groq4.default`*[_type == "pages" && name == "About"]`);
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
var import_client6 = __toESM(require_client());
var import_groq5 = __toESM(require("groq"));
var loader5 = async () => {
  const page = await import_client6.default.fetch(import_groq5.default`*[_type == "pages" && name == "Magic"]`);
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
var import_client7 = __toESM(require_client());
var import_groq6 = __toESM(require("groq"));
var loader6 = async () => {
  const page = await import_client7.default.fetch(import_groq6.default`*[_type == "pages" && name == "Story"]`);
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
var import_client8 = __toESM(require_client());
var import_groq7 = __toESM(require("groq"));
var loader7 = async () => {
  const page = await import_client8.default.fetch(import_groq7.default`*[_type == "pages" && name == "Home"]`);
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
var assets_manifest_default = { "version": "f20cf569", "entry": { "module": "/build/entry.client-736CF4RF.js", "imports": ["/build/_shared/chunk-INP2QRG2.js", "/build/_shared/chunk-325D37MS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7KU6EGVF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about/index": { "id": "routes/about/index", "parentId": "root", "path": "about", "index": true, "caseSensitive": void 0, "module": "/build/routes/about/index-2KVD5B4E.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/$slug": { "id": "routes/characters/$slug", "parentId": "root", "path": "characters/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/characters/$slug-PQVY2D2Y.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/characters/index": { "id": "routes/characters/index", "parentId": "root", "path": "characters", "index": true, "caseSensitive": void 0, "module": "/build/routes/characters/index-AMAI2SM4.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "root", "path": "contact", "index": true, "caseSensitive": void 0, "module": "/build/routes/contact/index-D2GJ6HRU.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-5HPB3VWU.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/locations/index": { "id": "routes/locations/index", "parentId": "root", "path": "locations", "index": true, "caseSensitive": void 0, "module": "/build/routes/locations/index-4FJWGU5C.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/magic/index": { "id": "routes/magic/index", "parentId": "root", "path": "magic", "index": true, "caseSensitive": void 0, "module": "/build/routes/magic/index-ZPAH3B4O.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/story/index": { "id": "routes/story/index", "parentId": "root", "path": "story", "index": true, "caseSensitive": void 0, "module": "/build/routes/story/index-TVLINJBJ.js", "imports": ["/build/_shared/chunk-SKDN7AD7.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F20CF569.js" };

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
  "routes/characters/$slug": {
    id: "routes/characters/$slug",
    parentId: "root",
    path: "characters/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9hcHAvbGliL3Nhbml0eS9jbGllbnQuanMiLCAiPHN0ZGluPiIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi9hcHAvZW50cnkuc2VydmVyLmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm9vdC5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcY2hhcmFjdGVyc1xcJHNsdWcuanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGNoYXJhY3RlcnNcXGluZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnQuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NoYXJhY3RlclByZXZpZXcvQ2hhcmFjdGVyUHJldmlldy5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcbG9jYXRpb25zXFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcY29udGFjdFxcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGFib3V0XFxpbmRleC5qc3giLCAicm91dGU6QzpcXFVzZXJzXFxyYXltb1xcT25lRHJpdmVcXERlc2t0b3BcXHdlYiBkZXZlbG9wbWVudFxcc3RvcnktcHJvamVjdFxcd2ViXFxhcHBcXHJvdXRlc1xcbWFnaWNcXGluZGV4LmpzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJheW1vXFxPbmVEcml2ZVxcRGVza3RvcFxcd2ViIGRldmVsb3BtZW50XFxzdG9yeS1wcm9qZWN0XFx3ZWJcXGFwcFxccm91dGVzXFxzdG9yeVxcaW5kZXguanN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccmF5bW9cXE9uZURyaXZlXFxEZXNrdG9wXFx3ZWIgZGV2ZWxvcG1lbnRcXHN0b3J5LXByb2plY3RcXHdlYlxcYXBwXFxyb3V0ZXNcXGluZGV4LmpzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJjb25zdCBzYW5pdHlDbGllbnQgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6IFwidWZkaXpsb3VcIixcclxuICAgIGRhdGFzZXQ6IFwicHJvZHVjdGlvblwiLFxyXG4gICAgdXNlQ2RuOiBcInRydWVcIixcclxuICAgIGFwaVZlcnNpb246IFwiMjAyMS0xMC0yMVwiLFxyXG59KTsiLCAiZXhwb3J0ICogZnJvbSBcIkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZFwiOyIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxcZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccmF5bW9cXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx3ZWIgZGV2ZWxvcG1lbnRcXFxcc3RvcnktcHJvamVjdFxcXFx3ZWJcXFxcYXBwXFxcXHJvdXRlc1xcXFxjaGFyYWN0ZXJzXFxcXCRzbHVnLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNoYXJhY3RlcnNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbG9jYXRpb25zXFxcXGluZGV4LmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxyYXltb1xcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHdlYiBkZXZlbG9wbWVudFxcXFxzdG9yeS1wcm9qZWN0XFxcXHdlYlxcXFxhcHBcXFxccm91dGVzXFxcXGNvbnRhY3RcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWJvdXRcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWFnaWNcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3RvcnlcXFxcaW5kZXguanN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJheW1vXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcd2ViIGRldmVsb3BtZW50XFxcXHN0b3J5LXByb2plY3RcXFxcd2ViXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXguanN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jaGFyYWN0ZXJzLyRzbHVnXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzLyRzbHVnXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYXJhY3RlcnMvOnNsdWdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2NoYXJhY3RlcnMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NoYXJhY3RlcnMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY2hhcmFjdGVyc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2xvY2F0aW9ucy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9jYXRpb25zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvY2F0aW9uc1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhYm91dFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL21hZ2ljL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tYWdpYy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtYWdpY1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3N0b3J5L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zdG9yeS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdG9yeVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlLFxuICByZXNwb25zZUhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xuLy8gc3R5bGVzXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJ+L3N0eWxlcy9tYWluLmNzc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWV0YSgpIHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiSG9tZVwiIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogc3R5bGVzLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vZTQzMTk3NTNiNS5qc1wiXG4gICAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuXG4gICAgICA8TmF2YmFyIC8+XG5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRvZ2dsZU5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNpZGVuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1saXN0XCIpO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJhY2tncm91bmRcIik7XHJcblxyXG4gICAgaWYgKHNpZGVuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29vbGRvd25cIikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzaWRlbmF2LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdl9jbG9zZWRcIikpIHtcclxuICAgICAgc2lkZW5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X2Nsb3NlZFwiKTtcclxuICAgICAgYmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSBcIjUwJVwiO1xyXG4gICAgICAgIGJhY2tncm91bmQuc3R5bGUuekluZGV4ID0gXCIxXCI7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaWRlbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZfY2xvc2VkXCIpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLnpJbmRleCA9IFwiLTFcIjtcclxuICAgICAgfSwgNDAwKTtcclxuICAgICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XHJcbiAgICB9XHJcbiAgICBzaWRlbmF2LmNsYXNzTGlzdC5hZGQoXCJjb29sZG93blwiKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzaWRlbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjb29sZG93blwiKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cIm5hdi1iYWNrZ3JvdW5kXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJkYXJrX2JhY2tncm91bmRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU5hdn1cclxuICAgICAgPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9zcGFjZVwiPjwvZGl2PlxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X3RvcFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVOYXZ9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHVsIGlkPVwibmF2LWxpc3RcIiBjbGFzc05hbWU9XCJuYXZfbGlzdCBuYXZfY2xvc2VkXCI+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1ob3VzZVwiPjwvaT4gSG9tZVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvY2hhcmFjdGVyc1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBlcnNvblwiPjwvaT4gQ2hhcmFjdGVyc1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbG9jYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbG9jYXRpb24tZG90XCI+PC9pPiBMb2NhdGlvbnNcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZfbGlzdF9pdGVtXCI+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL3N0b3J5XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtcGVuXCI+PC9pPiBTdG9yeVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvbWFnaWNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1oYXQtd2l6YXJkXCI+PC9pPiBNYWdpY1xyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdl9saXN0X2l0ZW1cIj5cclxuICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1hZGRyZXNzLWNhcmRcIj48L2k+IEFib3V0XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2X2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtYWRkcmVzcy1ib29rXCI+PC9pPiBDb250YWN0XHJcbiAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gcmVtaXhcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENoYXJhY3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5DaGFyYWN0ZXI8L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXI7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RleHRDb21wb25lbnQvVGV4dENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGFyYWN0ZXJQcmV2aWV3IH0gZnJvbSBcIn4vY29tcG9uZW50cy9DaGFyYWN0ZXJQcmV2aWV3L0NoYXJhY3RlclByZXZpZXdcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyUHJldmlldy9DaGFyYWN0ZXJQcmV2aWV3LmNzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7XHJcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXHJcbiAgICAgIGhyZWY6IHN0eWxlcyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gYXdhaXQgY2xpZW50LmZldGNoKFxyXG4gICAgZ3JvcWAqW190eXBlID09IFwicGFnZXNcIiAmJiBuYW1lID09IFwiQ2hhcmFjdGVyc1wiXWBcclxuICApO1xyXG5cclxuICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcImNoYXJhY3RlcnNcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhZ2UsXHJcbiAgICBjaGFyYWN0ZXJzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFyYWN0ZXJzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImNoYXJhY3RlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YS5wYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDxzZWN0aW9uIGlkPVwibGF0ZXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMT5MYXRlc3QgQ2hhcmFjdGVyczwvaDE+XHJcbiAgICAgICAgICA8Q2hhcmFjdGVyUHJldmlldyBkYXRhPXtkYXRhLmNoYXJhY3RlcnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwgImV4cG9ydCBjb25zdCBUZXh0Q29tcG9uZW50ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT57ZGF0YVswXT8ubmFtZX08L2gxPlxyXG4gICAgICB7ZGF0YVswXS5jb250ZW50Lm1hcCgoY2hpbGRyZW4pID0+IHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIGkrKztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHAga2V5PXtpfT5cclxuICAgICAgICAgICAge2NoaWxkcmVuLmNoaWxkcmVuWzBdLnRleHR9XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRDb21wb25lbnQ7XHJcbiIsICIvLyByZW1peFxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KTtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFyYWN0ZXJQcmV2aWV3ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGFyYWN0ZXJfbGlzdFwiPlxyXG4gICAgICAgIHtkYXRhLm1hcCgoY2hhcmFjdGVyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY2hhcmFjdGVyX2xpc3RfaXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2NoYXJhY3RlcnMvJHtjaGFyYWN0ZXIuc2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZV9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgeyFjaGFyYWN0ZXIuaW1hZ2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZGVmYXVsdF9hdmF0YXIuc3ZnXCIgYWx0PVwiY2hhcmFjdGVyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnVpbGRlci5pbWFnZShjaGFyYWN0ZXIuaW1hZ2UpfSBhbHQ9XCJjaGFyYWN0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+e2NoYXJhY3Rlci5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD57Y2hhcmFjdGVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkxvY2F0aW9uc1wiXWBcclxuICApO1xyXG5cclxuICByZXR1cm4gcGFnZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwibG9jYXRpb25zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9ucztcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgIGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkNvbnRhY3RcIl1gXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPFRleHRDb21wb25lbnQgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcbi8vIHNhbml0eSBjbGllbnRcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwifi9saWIvc2FuaXR5L2NsaWVudFwiO1xyXG4vLyB0aGlyZC1wYXJ0eVxyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYWdlID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkFib3V0XCJdYCk7XHJcblxyXG4gIHJldHVybiBwYWdlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XHJcbiIsICIvLyByZWFjdCB8IHJlbWl4XHJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuLy8gc2FuaXR5IGNsaWVudFxyXG5pbXBvcnQgY2xpZW50IGZyb20gXCJ+L2xpYi9zYW5pdHkvY2xpZW50XCI7XHJcbi8vIHRoaXJkLXBhcnR5XHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBUZXh0Q29tcG9uZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvVGV4dENvbXBvbmVudC9UZXh0Q29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBhZ2UgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWAqW190eXBlID09IFwicGFnZXNcIiAmJiBuYW1lID09IFwiTWFnaWNcIl1gKTtcclxuXHJcbiAgcmV0dXJuIHBhZ2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTWFnaWMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHVzZUxvYWRlckRhdGEoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJtYWdpY1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUZXh0Q29tcG9uZW50IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWdpYztcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcclxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG4vLyBzYW5pdHkgY2xpZW50XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcclxuLy8gdGhpcmQtcGFydHlcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IFRleHRDb21wb25lbnQgZnJvbSBcIn4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYCpbX3R5cGUgPT0gXCJwYWdlc1wiICYmIG5hbWUgPT0gXCJTdG9yeVwiXWApO1xyXG5cclxuICByZXR1cm4gcGFnZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzdG9yeVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxUZXh0Q29tcG9uZW50IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcclxuIiwgIi8vIHJlYWN0IHwgcmVtaXhcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0Q29tcG9uZW50L1RleHRDb21wb25lbnRcIjtcbi8vIHNhbml0eSBjbGllbnRcbmltcG9ydCBjbGllbnQgZnJvbSBcIn4vbGliL3Nhbml0eS9jbGllbnRcIjtcbi8vIHRoaXJkLXBhcnR5XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYWdlID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgKltfdHlwZSA9PSBcInBhZ2VzXCIgJiYgbmFtZSA9PSBcIkhvbWVcIl1gKTtcblxuICByZXR1cm4gcGFnZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJob21lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8VGV4dENvbXBvbmVudCBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2YyMGNmNTY5JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC03MzZDRjRSRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSU5QMlFSRzIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zMjVEMzdNUy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtN0tVNkVHVkYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hYm91dC9pbmRleCc6eydpZCc6J3JvdXRlcy9hYm91dC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhYm91dCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWJvdXQvaW5kZXgtMktWRDVCNEUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNLRE43QUQ3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NoYXJhY3RlcnMvJHNsdWcnOnsnaWQnOidyb3V0ZXMvY2hhcmFjdGVycy8kc2x1ZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaGFyYWN0ZXJzLzpzbHVnJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMvJHNsdWctUFFWWTJEMlkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jaGFyYWN0ZXJzL2luZGV4Jzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2hhcmFjdGVycycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY2hhcmFjdGVycy9pbmRleC1BTUFJMlNNNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstU0tETjdBRDcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29udGFjdC9pbmRleCc6eydpZCc6J3JvdXRlcy9jb250YWN0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvbnRhY3QnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvbnRhY3QvaW5kZXgtRDJHSjZIUlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNLRE43QUQ3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTVIUEIzVldVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TS0RON0FENy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2NhdGlvbnMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9jYXRpb25zL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvY2F0aW9ucycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9jYXRpb25zL2luZGV4LTRGSldHVTVDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1TS0RON0FENy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tYWdpYy9pbmRleCc6eydpZCc6J3JvdXRlcy9tYWdpYy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtYWdpYycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWFnaWMvaW5kZXgtWlBBSDNCNE8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVNLRE43QUQ3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3N0b3J5L2luZGV4Jzp7J2lkJzoncm91dGVzL3N0b3J5L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N0b3J5JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdG9yeS9pbmRleC1UVkxJTkpCSi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstU0tETjdBRDcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUYyMENGNTY5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtB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
