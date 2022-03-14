import {
  useLoaderData
} from "/build/_shared/chunk-JRIHS74B.js";
import {
  Home
} from "/build/_shared/chunk-D6PKV2EQ.js";
import {
  React,
  __commonJS,
  __toESM,
  init_react
} from "/build/_shared/chunk-P2FTGPOX.js";

// node_modules/groq/lib/groq.js
var require_groq = __commonJS({
  "node_modules/groq/lib/groq.js"(exports, module) {
    "use strict";
    init_react();
    module.exports = function groq2(strings) {
      for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
      }
      var lastIndex = strings.length - 1;
      return strings.slice(0, lastIndex).reduce(function(acc, str, i) {
        return acc + str + keys[i];
      }, "") + strings[lastIndex];
    };
  }
});

// browser-route-module:C:\Users\raymo\OneDrive\Desktop\web development\story-project\web\app\routes\index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_groq = __toESM(require_groq());
function Index() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(Home, {
    data
  });
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-3YAZHIT3.js.map
