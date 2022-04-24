// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7fmqN":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _authorizationTmpl = require("./pages/authorization/authorization.tmpl");
var _registrationTmpl = require("./pages/registration/registration.tmpl");
var _chatsTmpl = require("./pages/chats/chats.tmpl");
var _profileTmpl = require("./pages/profile/profile.tmpl");
var _errorScss = require("./pages/error/error.scss");
var _errorHbs = require("./pages/error/error.hbs");
var _errorHbsDefault = parcelHelpers.interopDefault(_errorHbs);
const root = document.getElementById('root');
const current_path = window.location.pathname;
if (current_path == '/registration') root.innerHTML = _registrationTmpl.buildHtmlRegistration();
else if (current_path == '/authorization') root.innerHTML = _authorizationTmpl.buildHtmlAuthorization();
else if (current_path == '/chats') root.innerHTML = _chatsTmpl.buildHtmlChats();
else if (current_path == '/profile') root.innerHTML = _profileTmpl.buildHtmlProfile();
else if (current_path == '/500') root.innerHTML = _errorHbsDefault.default({
    errorStatus: '500',
    errorMessage: 'Мы уже фиксим'
});
else if (current_path == '/404') root.innerHTML = _errorHbsDefault.default({
    errorStatus: '400',
    errorMessage: 'Не туда попали'
});
else window.location = '/authorization';

},{"./pages/authorization/authorization.tmpl":"gV66v","./pages/registration/registration.tmpl":"gVx4s","./pages/chats/chats.tmpl":"32AZS","./pages/profile/profile.tmpl":"5NXVP","./pages/error/error.scss":"OszSi","./pages/error/error.hbs":"ef2Gg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gV66v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHtmlAuthorization", ()=>buildHtmlAuthorization
);
var _fieldTmpl = require("../../components/field/field.tmpl");
var _buttonTmpl = require("../../components/button/button.tmpl");
var _authorizationHbs = require("./authorization.hbs");
var _authorizationHbsDefault = parcelHelpers.interopDefault(_authorizationHbs);
var _authorizationScss = require("./authorization.scss");
const fields = {
    login: {
        name: 'login',
        placeholder: 'login',
        klass: 'authorization__login-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        klass: 'authorization__password-input'
    },
    button: {
        name: 'Sign in',
        klass: 'authorization__button-button'
    }
};
const buildHtmlAuthorization = ()=>{
    return _authorizationHbsDefault.default({
        loginField: _fieldTmpl.field(fields.login),
        passwordField: _fieldTmpl.field(fields.password),
        button: _buttonTmpl.button(fields.button)
    });
};

},{"../../components/field/field.tmpl":"4vD4i","../../components/button/button.tmpl":"lPo9h","./authorization.hbs":"ide2q","./authorization.scss":"kGQd7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4vD4i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "field", ()=>field
);
var _fieldHbs = require("./field.hbs");
var _fieldHbsDefault = parcelHelpers.interopDefault(_fieldHbs);
var _fieldScss = require("./field.scss");
const field = ({ name , placeholder , klass  })=>_fieldHbsDefault.default({
        name,
        placeholder,
        klass
    })
;

},{"./field.hbs":"j28dP","./field.scss":"dKNTF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j28dP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<input type=\"text\" class=\"input " + alias4((helper = (helper = lookupProperty(helpers, "klass") || (depth0 != null ? lookupProperty(depth0, "klass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "klass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 32
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        }) : helper)) + "\" name=\"" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 49
                },
                "end": {
                    "line": 1,
                    "column": 57
                }
            }
        }) : helper)) + "\" placeholder=\"" + alias4((helper = (helper = lookupProperty(helpers, "placeholder") || (depth0 != null ? lookupProperty(depth0, "placeholder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "placeholder",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 72
                },
                "end": {
                    "line": 1,
                    "column": 87
                }
            }
        }) : helper)) + "\">";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7ZpO":[function(require,module,exports) {
/**!

 @license
 handlebars v4.7.7

Copyright (C) 2011-2019 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireWildcard = __webpack_require__(1)['default'];
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            var _handlebarsBase = __webpack_require__(3);
            var base = _interopRequireWildcard(_handlebarsBase);
            // Each of these augment the Handlebars object. No need to setup here.
            // (This is done to easily share code between commonjs and browse envs)
            var _handlebarsSafeString = __webpack_require__(36);
            var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
            var _handlebarsException = __webpack_require__(5);
            var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
            var _handlebarsUtils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_handlebarsUtils);
            var _handlebarsRuntime = __webpack_require__(37);
            var runtime = _interopRequireWildcard(_handlebarsRuntime);
            var _handlebarsNoConflict = __webpack_require__(43);
            var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
            // For compatibility and usage outside of module systems, make the Handlebars object a namespace
            function create() {
                var hb = new base.HandlebarsEnvironment();
                Utils.extend(hb, base);
                hb.SafeString = _handlebarsSafeString2['default'];
                hb.Exception = _handlebarsException2['default'];
                hb.Utils = Utils;
                hb.escapeExpression = Utils.escapeExpression;
                hb.VM = runtime;
                hb.template = function(spec) {
                    return runtime.template(spec, hb);
                };
                return hb;
            }
            var inst = create();
            inst.create = create;
            _handlebarsNoConflict2['default'](inst);
            inst['default'] = inst;
            exports['default'] = inst;
            module.exports = exports['default'];
        /***/ },
        /* 1 */ /***/ function(module, exports) {
            "use strict";
            exports["default"] = function(obj) {
                if (obj && obj.__esModule) return obj;
                else {
                    var newObj = {};
                    if (obj != null) {
                        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                    newObj["default"] = obj;
                    return newObj;
                }
            };
            exports.__esModule = true;
        /***/ },
        /* 2 */ /***/ function(module, exports) {
            "use strict";
            exports["default"] = function(obj) {
                return obj && obj.__esModule ? obj : {
                    "default": obj
                };
            };
            exports.__esModule = true;
        /***/ },
        /* 3 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            exports.HandlebarsEnvironment = HandlebarsEnvironment;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _helpers = __webpack_require__(9);
            var _decorators = __webpack_require__(29);
            var _logger = __webpack_require__(31);
            var _logger2 = _interopRequireDefault(_logger);
            var _internalProtoAccess = __webpack_require__(32);
            var VERSION = '4.7.7';
            exports.VERSION = VERSION;
            var COMPILER_REVISION = 8;
            exports.COMPILER_REVISION = COMPILER_REVISION;
            var LAST_COMPATIBLE_COMPILER_REVISION = 7;
            exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
            var REVISION_CHANGES = {
                1: '<= 1.0.rc.2',
                2: '== 1.0.0-rc.3',
                3: '== 1.0.0-rc.4',
                4: '== 1.x.x',
                5: '== 2.0.0-alpha.x',
                6: '>= 2.0.0-beta.1',
                7: '>= 4.0.0 <4.3.0',
                8: '>= 4.3.0'
            };
            exports.REVISION_CHANGES = REVISION_CHANGES;
            var objectType = '[object Object]';
            function HandlebarsEnvironment(helpers, partials, decorators) {
                this.helpers = helpers || {};
                this.partials = partials || {};
                this.decorators = decorators || {};
                _helpers.registerDefaultHelpers(this);
                _decorators.registerDefaultDecorators(this);
            }
            HandlebarsEnvironment.prototype = {
                constructor: HandlebarsEnvironment,
                logger: _logger2['default'],
                log: _logger2['default'].log,
                registerHelper: function registerHelper(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2['default']('Arg not supported with multiple helpers');
                        _utils.extend(this.helpers, name);
                    } else this.helpers[name] = fn;
                },
                unregisterHelper: function unregisterHelper(name) {
                    delete this.helpers[name];
                },
                registerPartial: function registerPartial(name, partial) {
                    if (_utils.toString.call(name) === objectType) _utils.extend(this.partials, name);
                    else {
                        if (typeof partial === 'undefined') throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
                        this.partials[name] = partial;
                    }
                },
                unregisterPartial: function unregisterPartial(name) {
                    delete this.partials[name];
                },
                registerDecorator: function registerDecorator(name, fn) {
                    if (_utils.toString.call(name) === objectType) {
                        if (fn) throw new _exception2['default']('Arg not supported with multiple decorators');
                        _utils.extend(this.decorators, name);
                    } else this.decorators[name] = fn;
                },
                unregisterDecorator: function unregisterDecorator(name) {
                    delete this.decorators[name];
                },
                /**
	   * Reset the memory of illegal property accesses that have already been logged.
	   * @deprecated should only be used in handlebars test-cases
	   */ resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
                    _internalProtoAccess.resetLoggedProperties();
                }
            };
            var log = _logger2['default'].log;
            exports.log = log;
            exports.createFrame = _utils.createFrame;
            exports.logger = _logger2['default'];
        /***/ },
        /* 4 */ /***/ function(module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.extend = extend;
            exports.indexOf = indexOf;
            exports.escapeExpression = escapeExpression;
            exports.isEmpty = isEmpty;
            exports.createFrame = createFrame;
            exports.blockParams = blockParams;
            exports.appendContextPath = appendContextPath;
            var escape = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#x27;',
                '`': '&#x60;',
                '=': '&#x3D;'
            };
            var badChars = /[&<>"'`=]/g, possible = /[&<>"'`=]/;
            function escapeChar(chr) {
                return escape[chr];
            }
            function extend(obj /* , ...source */ ) {
                for(var i = 1; i < arguments.length; i++){
                    for(var key in arguments[i])if (Object.prototype.hasOwnProperty.call(arguments[i], key)) obj[key] = arguments[i][key];
                }
                return obj;
            }
            var toString = Object.prototype.toString;
            exports.toString = toString;
            // Sourced from lodash
            // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
            /* eslint-disable func-style */ var isFunction = function isFunction(value) {
                return typeof value === 'function';
            };
            // fallback for older versions of Chrome and Safari
            /* istanbul ignore next */ if (isFunction(/x/)) exports.isFunction = isFunction = function(value) {
                return typeof value === 'function' && toString.call(value) === '[object Function]';
            };
            exports.isFunction = isFunction;
            /* eslint-enable func-style */ /* istanbul ignore next */ var isArray = Array.isArray || function(value) {
                return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
            };
            exports.isArray = isArray;
            // Older IE versions do not directly support indexOf so we must implement our own, sadly.
            function indexOf(array, value) {
                for(var i = 0, len = array.length; i < len; i++){
                    if (array[i] === value) return i;
                }
                return -1;
            }
            function escapeExpression(string) {
                if (typeof string !== 'string') {
                    // don't escape SafeStrings, since they're already safe
                    if (string && string.toHTML) return string.toHTML();
                    else if (string == null) return '';
                    else if (!string) return string + '';
                    // Force a string conversion as this will be done by the append regardless and
                    // the regex test will do this transparently behind the scenes, causing issues if
                    // an object's to string has escaped characters in it.
                    string = '' + string;
                }
                if (!possible.test(string)) return string;
                return string.replace(badChars, escapeChar);
            }
            function isEmpty(value) {
                if (!value && value !== 0) return true;
                else if (isArray(value) && value.length === 0) return true;
                else return false;
            }
            function createFrame(object) {
                var frame = extend({}, object);
                frame._parent = object;
                return frame;
            }
            function blockParams(params, ids) {
                params.path = ids;
                return params;
            }
            function appendContextPath(contextPath, id) {
                return (contextPath ? contextPath + '.' : '') + id;
            }
        /***/ },
        /* 5 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _Object$defineProperty = __webpack_require__(6)['default'];
            exports.__esModule = true;
            var errorProps = [
                'description',
                'fileName',
                'lineNumber',
                'endLineNumber',
                'message',
                'name',
                'number',
                'stack'
            ];
            function Exception(message, node) {
                var loc = node && node.loc, line = undefined, endLineNumber = undefined, column = undefined, endColumn = undefined;
                if (loc) {
                    line = loc.start.line;
                    endLineNumber = loc.end.line;
                    column = loc.start.column;
                    endColumn = loc.end.column;
                    message += ' - ' + line + ':' + column;
                }
                var tmp = Error.prototype.constructor.call(this, message);
                // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
                for(var idx = 0; idx < errorProps.length; idx++)this[errorProps[idx]] = tmp[errorProps[idx]];
                /* istanbul ignore else */ if (Error.captureStackTrace) Error.captureStackTrace(this, Exception);
                try {
                    if (loc) {
                        this.lineNumber = line;
                        this.endLineNumber = endLineNumber;
                        // Work around issue under safari where we can't directly set the column value
                        /* istanbul ignore next */ if (_Object$defineProperty) {
                            Object.defineProperty(this, 'column', {
                                value: column,
                                enumerable: true
                            });
                            Object.defineProperty(this, 'endColumn', {
                                value: endColumn,
                                enumerable: true
                            });
                        } else {
                            this.column = column;
                            this.endColumn = endColumn;
                        }
                    }
                } catch (nop) {
                /* Ignore if the browser is very particular */ }
            }
            Exception.prototype = new Error();
            exports['default'] = Exception;
            module.exports = exports['default'];
        /***/ },
        /* 6 */ /***/ function(module, exports, __webpack_require__) {
            module.exports = {
                "default": __webpack_require__(7),
                __esModule: true
            };
        /***/ },
        /* 7 */ /***/ function(module, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module.exports = function defineProperty(it, key, desc) {
                return $.setDesc(it, key, desc);
            };
        /***/ },
        /* 8 */ /***/ function(module, exports) {
            var $Object = Object;
            module.exports = {
                create: $Object.create,
                getProto: $Object.getPrototypeOf,
                isEnum: ({}).propertyIsEnumerable,
                getDesc: $Object.getOwnPropertyDescriptor,
                setDesc: $Object.defineProperty,
                setDescs: $Object.defineProperties,
                getKeys: $Object.keys,
                getNames: $Object.getOwnPropertyNames,
                getSymbols: $Object.getOwnPropertySymbols,
                each: [].forEach
            };
        /***/ },
        /* 9 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            exports.registerDefaultHelpers = registerDefaultHelpers;
            exports.moveHelperToHooks = moveHelperToHooks;
            var _helpersBlockHelperMissing = __webpack_require__(10);
            var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
            var _helpersEach = __webpack_require__(11);
            var _helpersEach2 = _interopRequireDefault(_helpersEach);
            var _helpersHelperMissing = __webpack_require__(24);
            var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
            var _helpersIf = __webpack_require__(25);
            var _helpersIf2 = _interopRequireDefault(_helpersIf);
            var _helpersLog = __webpack_require__(26);
            var _helpersLog2 = _interopRequireDefault(_helpersLog);
            var _helpersLookup = __webpack_require__(27);
            var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
            var _helpersWith = __webpack_require__(28);
            var _helpersWith2 = _interopRequireDefault(_helpersWith);
            function registerDefaultHelpers(instance) {
                _helpersBlockHelperMissing2['default'](instance);
                _helpersEach2['default'](instance);
                _helpersHelperMissing2['default'](instance);
                _helpersIf2['default'](instance);
                _helpersLog2['default'](instance);
                _helpersLookup2['default'](instance);
                _helpersWith2['default'](instance);
            }
            function moveHelperToHooks(instance, helperName, keepHelper) {
                if (instance.helpers[helperName]) {
                    instance.hooks[helperName] = instance.helpers[helperName];
                    if (!keepHelper) delete instance.helpers[helperName];
                }
            }
        /***/ },
        /* 10 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports['default'] = function(instance) {
                instance.registerHelper('blockHelperMissing', function(context, options) {
                    var inverse = options.inverse, fn = options.fn;
                    if (context === true) return fn(this);
                    else if (context === false || context == null) return inverse(this);
                    else if (_utils.isArray(context)) {
                        if (context.length > 0) {
                            if (options.ids) options.ids = [
                                options.name
                            ];
                            return instance.helpers.each(context, options);
                        } else return inverse(this);
                    } else {
                        if (options.data && options.ids) {
                            var data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                            options = {
                                data: data
                            };
                        }
                        return fn(context, options);
                    }
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 11 */ /***/ function(module, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                var _Object$keys = __webpack_require__(12)['default'];
                var _interopRequireDefault = __webpack_require__(2)['default'];
                exports.__esModule = true;
                var _utils = __webpack_require__(4);
                var _exception = __webpack_require__(5);
                var _exception2 = _interopRequireDefault(_exception);
                exports['default'] = function(instance) {
                    instance.registerHelper('each', function(context, options) {
                        if (!options) throw new _exception2['default']('Must pass iterator to #each');
                        var fn = options.fn, inverse = options.inverse, i = 0, ret = '', data = undefined, contextPath = undefined;
                        if (options.data && options.ids) contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
                        if (_utils.isFunction(context)) context = context.call(this);
                        if (options.data) data = _utils.createFrame(options.data);
                        function execIteration(field, index, last) {
                            if (data) {
                                data.key = field;
                                data.index = index;
                                data.first = index === 0;
                                data.last = !!last;
                                if (contextPath) data.contextPath = contextPath + field;
                            }
                            ret = ret + fn(context[field], {
                                data: data,
                                blockParams: _utils.blockParams([
                                    context[field],
                                    field
                                ], [
                                    contextPath + field,
                                    null
                                ])
                            });
                        }
                        if (context && typeof context === 'object') {
                            if (_utils.isArray(context)) {
                                for(var j = context.length; i < j; i++)if (i in context) execIteration(i, i, i === context.length - 1);
                            } else if (global.Symbol && context[global.Symbol.iterator]) {
                                var newContext = [];
                                var iterator = context[global.Symbol.iterator]();
                                for(var it = iterator.next(); !it.done; it = iterator.next())newContext.push(it.value);
                                context = newContext;
                                for(var j = context.length; i < j; i++)execIteration(i, i, i === context.length - 1);
                            } else (function() {
                                var priorKey = undefined;
                                _Object$keys(context).forEach(function(key) {
                                    // We're running the iterations one step out of sync so we can detect
                                    // the last iteration without have to scan the object twice and create
                                    // an itermediate keys array.
                                    if (priorKey !== undefined) execIteration(priorKey, i - 1);
                                    priorKey = key;
                                    i++;
                                });
                                if (priorKey !== undefined) execIteration(priorKey, i - 1, true);
                            })();
                        }
                        if (i === 0) ret = inverse(this);
                        return ret;
                    });
                };
                module.exports = exports['default'];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ },
        /* 12 */ /***/ function(module, exports, __webpack_require__) {
            module.exports = {
                "default": __webpack_require__(13),
                __esModule: true
            };
        /***/ },
        /* 13 */ /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(14);
            module.exports = __webpack_require__(20).Object.keys;
        /***/ },
        /* 14 */ /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.14 Object.keys(O)
            var toObject = __webpack_require__(15);
            __webpack_require__(17)('keys', function($keys) {
                return function keys(it) {
                    return $keys(toObject(it));
                };
            });
        /***/ },
        /* 15 */ /***/ function(module, exports, __webpack_require__) {
            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(16);
            module.exports = function(it) {
                return Object(defined(it));
            };
        /***/ },
        /* 16 */ /***/ function(module, exports) {
            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        /***/ },
        /* 17 */ /***/ function(module, exports, __webpack_require__) {
            // most Object methods by ES6 should accept primitives
            var $export = __webpack_require__(18), core = __webpack_require__(20), fails = __webpack_require__(23);
            module.exports = function(KEY, exec) {
                var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
                exp[KEY] = exec(fn);
                $export($export.S + $export.F * fails(function() {
                    fn(1);
                }), 'Object', exp);
            };
        /***/ },
        /* 18 */ /***/ function(module, exports1, __webpack_require__) {
            var global = __webpack_require__(19), core = __webpack_require__(20), ctx = __webpack_require__(21), PROTOTYPE = 'prototype';
            var $export = function(type, name, source) {
                var IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE], key, own, out;
                if (IS_GLOBAL) source = name;
                for(key in source){
                    // contains in native
                    own = !IS_FORCED && target && key in target;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                        var F = function(param) {
                            return this instanceof C ? new C(param) : C(param);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                    // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            module.exports = $export;
        /***/ },
        /* 19 */ /***/ function(module, exports) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
        /***/ },
        /* 20 */ /***/ function(module, exports) {
            var core = module.exports = {
                version: '1.2.6'
            };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
        /***/ },
        /* 21 */ /***/ function(module, exports, __webpack_require__) {
            // optional / simple context binding
            var aFunction = __webpack_require__(22);
            module.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /* 22 */ /***/ function(module, exports) {
            module.exports = function(it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };
        /***/ },
        /* 23 */ /***/ function(module, exports) {
            module.exports = function(exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        /***/ },
        /* 24 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports['default'] = function(instance) {
                instance.registerHelper('helperMissing', function() /* [args, ]options */ {
                    if (arguments.length === 1) // A missing field in a {{foo}} construct.
                    return undefined;
                    else // Someone is actually trying to call something, blow up.
                    throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 25 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports['default'] = function(instance) {
                instance.registerHelper('if', function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2['default']('#if requires exactly one argument');
                    if (_utils.isFunction(conditional)) conditional = conditional.call(this);
                    // Default behavior is to render the positive path if the value is truthy and not empty.
                    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
                    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
                    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) return options.inverse(this);
                    else return options.fn(this);
                });
                instance.registerHelper('unless', function(conditional, options) {
                    if (arguments.length != 2) throw new _exception2['default']('#unless requires exactly one argument');
                    return instance.helpers['if'].call(this, conditional, {
                        fn: options.inverse,
                        inverse: options.fn,
                        hash: options.hash
                    });
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 26 */ /***/ function(module, exports) {
            'use strict';
            exports.__esModule = true;
            exports['default'] = function(instance) {
                instance.registerHelper('log', function() /* message, options */ {
                    var args = [
                        undefined
                    ], options = arguments[arguments.length - 1];
                    for(var i = 0; i < arguments.length - 1; i++)args.push(arguments[i]);
                    var level = 1;
                    if (options.hash.level != null) level = options.hash.level;
                    else if (options.data && options.data.level != null) level = options.data.level;
                    args[0] = level;
                    instance.log.apply(instance, args);
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 27 */ /***/ function(module, exports) {
            'use strict';
            exports.__esModule = true;
            exports['default'] = function(instance) {
                instance.registerHelper('lookup', function(obj, field, options) {
                    if (!obj) // Note for 5.0: Change to "obj == null" in 5.0
                    return obj;
                    return options.lookupProperty(obj, field);
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 28 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            exports['default'] = function(instance) {
                instance.registerHelper('with', function(context, options) {
                    if (arguments.length != 2) throw new _exception2['default']('#with requires exactly one argument');
                    if (_utils.isFunction(context)) context = context.call(this);
                    var fn = options.fn;
                    if (!_utils.isEmpty(context)) {
                        var data = options.data;
                        if (options.data && options.ids) {
                            data = _utils.createFrame(options.data);
                            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
                        }
                        return fn(context, {
                            data: data,
                            blockParams: _utils.blockParams([
                                context
                            ], [
                                data && data.contextPath
                            ])
                        });
                    } else return options.inverse(this);
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 29 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            exports.registerDefaultDecorators = registerDefaultDecorators;
            var _decoratorsInline = __webpack_require__(30);
            var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
            function registerDefaultDecorators(instance) {
                _decoratorsInline2['default'](instance);
            }
        /***/ },
        /* 30 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            exports['default'] = function(instance) {
                instance.registerDecorator('inline', function(fn, props, container, options1) {
                    var ret1 = fn;
                    if (!props.partials) {
                        props.partials = {};
                        ret1 = function(context, options) {
                            // Create a new partials stack frame prior to exec.
                            var original = container.partials;
                            container.partials = _utils.extend({}, original, props.partials);
                            var ret = fn(context, options);
                            container.partials = original;
                            return ret;
                        };
                    }
                    props.partials[options1.args[0]] = options1.fn;
                    return ret1;
                });
            };
            module.exports = exports['default'];
        /***/ },
        /* 31 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            exports.__esModule = true;
            var _utils = __webpack_require__(4);
            var logger = {
                methodMap: [
                    'debug',
                    'info',
                    'warn',
                    'error'
                ],
                level: 'info',
                // Maps a given level value to the `methodMap` indexes above.
                lookupLevel: function lookupLevel(level) {
                    if (typeof level === 'string') {
                        var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
                        if (levelMap >= 0) level = levelMap;
                        else level = parseInt(level, 10);
                    }
                    return level;
                },
                // Can be overridden in the host environment
                log: function log(level) {
                    level = logger.lookupLevel(level);
                    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
                        var method = logger.methodMap[level];
                        // eslint-disable-next-line no-console
                        if (!console[method]) method = 'log';
                        for(var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)message[_key - 1] = arguments[_key];
                        console[method].apply(console, message); // eslint-disable-line no-console
                    }
                }
            };
            exports['default'] = logger;
            module.exports = exports['default'];
        /***/ },
        /* 32 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _Object$create = __webpack_require__(33)['default'];
            var _Object$keys = __webpack_require__(12)['default'];
            var _interopRequireWildcard = __webpack_require__(1)['default'];
            exports.__esModule = true;
            exports.createProtoAccessControl = createProtoAccessControl;
            exports.resultIsAllowed = resultIsAllowed;
            exports.resetLoggedProperties = resetLoggedProperties;
            var _createNewLookupObject = __webpack_require__(35);
            var _logger = __webpack_require__(31);
            var logger = _interopRequireWildcard(_logger);
            var loggedProperties = _Object$create(null);
            function createProtoAccessControl(runtimeOptions) {
                var defaultMethodWhiteList = _Object$create(null);
                defaultMethodWhiteList['constructor'] = false;
                defaultMethodWhiteList['__defineGetter__'] = false;
                defaultMethodWhiteList['__defineSetter__'] = false;
                defaultMethodWhiteList['__lookupGetter__'] = false;
                var defaultPropertyWhiteList = _Object$create(null);
                // eslint-disable-next-line no-proto
                defaultPropertyWhiteList['__proto__'] = false;
                return {
                    properties: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
                        defaultValue: runtimeOptions.allowProtoPropertiesByDefault
                    },
                    methods: {
                        whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
                        defaultValue: runtimeOptions.allowProtoMethodsByDefault
                    }
                };
            }
            function resultIsAllowed(result, protoAccessControl, propertyName) {
                if (typeof result === 'function') return checkWhiteList(protoAccessControl.methods, propertyName);
                else return checkWhiteList(protoAccessControl.properties, propertyName);
            }
            function checkWhiteList(protoAccessControlForType, propertyName) {
                if (protoAccessControlForType.whitelist[propertyName] !== undefined) return protoAccessControlForType.whitelist[propertyName] === true;
                if (protoAccessControlForType.defaultValue !== undefined) return protoAccessControlForType.defaultValue;
                logUnexpecedPropertyAccessOnce(propertyName);
                return false;
            }
            function logUnexpecedPropertyAccessOnce(propertyName) {
                if (loggedProperties[propertyName] !== true) {
                    loggedProperties[propertyName] = true;
                    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
                }
            }
            function resetLoggedProperties() {
                _Object$keys(loggedProperties).forEach(function(propertyName) {
                    delete loggedProperties[propertyName];
                });
            }
        /***/ },
        /* 33 */ /***/ function(module, exports, __webpack_require__) {
            module.exports = {
                "default": __webpack_require__(34),
                __esModule: true
            };
        /***/ },
        /* 34 */ /***/ function(module, exports, __webpack_require__) {
            var $ = __webpack_require__(8);
            module.exports = function create(P, D) {
                return $.create(P, D);
            };
        /***/ },
        /* 35 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _Object$create = __webpack_require__(33)['default'];
            exports.__esModule = true;
            exports.createNewLookupObject = createNewLookupObject;
            var _utils = __webpack_require__(4);
            /**
	 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
	 * The resulting object can be used with "object[property]" to check if a property exists
	 * @param {...object} sources a varargs parameter of source objects that will be merged
	 * @returns {object}
	 */ function createNewLookupObject() {
                for(var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++)sources[_key] = arguments[_key];
                return _utils.extend.apply(undefined, [
                    _Object$create(null)
                ].concat(sources));
            }
        /***/ },
        /* 36 */ /***/ function(module, exports) {
            // Build out our basic SafeString type
            'use strict';
            exports.__esModule = true;
            function SafeString(string) {
                this.string = string;
            }
            SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
                return '' + this.string;
            };
            exports['default'] = SafeString;
            module.exports = exports['default'];
        /***/ },
        /* 37 */ /***/ function(module, exports, __webpack_require__) {
            'use strict';
            var _Object$seal = __webpack_require__(38)['default'];
            var _Object$keys = __webpack_require__(12)['default'];
            var _interopRequireWildcard = __webpack_require__(1)['default'];
            var _interopRequireDefault = __webpack_require__(2)['default'];
            exports.__esModule = true;
            exports.checkRevision = checkRevision;
            exports.template = template;
            exports.wrapProgram = wrapProgram;
            exports.resolvePartial = resolvePartial;
            exports.invokePartial = invokePartial;
            exports.noop = noop;
            var _utils = __webpack_require__(4);
            var Utils = _interopRequireWildcard(_utils);
            var _exception = __webpack_require__(5);
            var _exception2 = _interopRequireDefault(_exception);
            var _base = __webpack_require__(3);
            var _helpers = __webpack_require__(9);
            var _internalWrapHelper = __webpack_require__(42);
            var _internalProtoAccess = __webpack_require__(32);
            function checkRevision(compilerInfo) {
                var compilerRevision = compilerInfo && compilerInfo[0] || 1, currentRevision = _base.COMPILER_REVISION;
                if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) return;
                if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
                    var runtimeVersions = _base.REVISION_CHANGES[currentRevision], compilerVersions = _base.REVISION_CHANGES[compilerRevision];
                    throw new _exception2['default']("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
                } else // Use the embedded version info since the runtime doesn't know about this revision yet
                throw new _exception2['default']("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + compilerInfo[1] + ').');
            }
            function template(templateSpec, env) {
                /* istanbul ignore next */ if (!env) throw new _exception2['default']('No environment passed to template');
                if (!templateSpec || !templateSpec.main) throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
                templateSpec.main.decorator = templateSpec.main_d;
                // Note: Using env.VM references rather than local var references throughout this section to allow
                // for external users to override these as pseudo-supported APIs.
                env.VM.checkRevision(templateSpec.compiler);
                // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
                var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
                function invokePartialWrapper(partial, context, options) {
                    if (options.hash) {
                        context = Utils.extend({}, context, options.hash);
                        if (options.ids) options.ids[0] = true;
                    }
                    partial = env.VM.resolvePartial.call(this, partial, context, options);
                    var extendedOptions = Utils.extend({}, options, {
                        hooks: this.hooks,
                        protoAccessControl: this.protoAccessControl
                    });
                    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
                    if (result == null && env.compile) {
                        options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
                        result = options.partials[options.name](context, extendedOptions);
                    }
                    if (result != null) {
                        if (options.indent) {
                            var lines = result.split('\n');
                            for(var i = 0, l = lines.length; i < l; i++){
                                if (!lines[i] && i + 1 === l) break;
                                lines[i] = options.indent + lines[i];
                            }
                            result = lines.join('\n');
                        }
                        return result;
                    } else throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
                }
                // Just add water
                var container = {
                    strict: function strict(obj, name, loc) {
                        if (!obj || !(name in obj)) throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                            loc: loc
                        });
                        return container.lookupProperty(obj, name);
                    },
                    lookupProperty: function lookupProperty(parent, propertyName) {
                        var result = parent[propertyName];
                        if (result == null) return result;
                        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return result;
                        if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) return result;
                        return undefined;
                    },
                    lookup: function lookup(depths, name) {
                        var len = depths.length;
                        for(var i = 0; i < len; i++){
                            var result = depths[i] && container.lookupProperty(depths[i], name);
                            if (result != null) return depths[i][name];
                        }
                    },
                    lambda: function lambda(current, context) {
                        return typeof current === 'function' ? current.call(context) : current;
                    },
                    escapeExpression: Utils.escapeExpression,
                    invokePartial: invokePartialWrapper,
                    fn: function fn(i) {
                        var ret = templateSpec[i];
                        ret.decorator = templateSpec[i + '_d'];
                        return ret;
                    },
                    programs: [],
                    program: function program(i, data, declaredBlockParams, blockParams, depths) {
                        var programWrapper = this.programs[i], fn = this.fn(i);
                        if (data || depths || blockParams || declaredBlockParams) programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
                        else if (!programWrapper) programWrapper = this.programs[i] = wrapProgram(this, i, fn);
                        return programWrapper;
                    },
                    data: function data(value, depth) {
                        while(value && depth--)value = value._parent;
                        return value;
                    },
                    mergeIfNeeded: function mergeIfNeeded(param, common) {
                        var obj = param || common;
                        if (param && common && param !== common) obj = Utils.extend({}, common, param);
                        return obj;
                    },
                    // An empty object to use as replacement for null-contexts
                    nullContext: _Object$seal({}),
                    noop: env.VM.noop,
                    compilerInfo: templateSpec.compiler
                };
                function ret2(context1) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var data = options.data;
                    ret2._setup(options);
                    if (!options.partial && templateSpec.useData) data = initData(context1, data);
                    var depths = undefined, blockParams = templateSpec.useBlockParams ? [] : undefined;
                    if (templateSpec.useDepths) {
                        if (options.depths) depths = context1 != options.depths[0] ? [
                            context1
                        ].concat(options.depths) : options.depths;
                        else depths = [
                            context1
                        ];
                    }
                    function main(context /*, options*/ ) {
                        return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
                    }
                    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
                    return main(context1, options);
                }
                ret2.isTop = true;
                ret2._setup = function(options) {
                    if (!options.partial) {
                        var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
                        wrapHelpersToPassLookupProperty(mergedHelpers, container);
                        container.helpers = mergedHelpers;
                        if (templateSpec.usePartial) // Use mergeIfNeeded here to prevent compiling global partials multiple times
                        container.partials = container.mergeIfNeeded(options.partials, env.partials);
                        if (templateSpec.usePartial || templateSpec.useDecorators) container.decorators = Utils.extend({}, env.decorators, options.decorators);
                        container.hooks = {};
                        container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
                        var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
                        _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
                        _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
                    } else {
                        container.protoAccessControl = options.protoAccessControl; // internal option
                        container.helpers = options.helpers;
                        container.partials = options.partials;
                        container.decorators = options.decorators;
                        container.hooks = options.hooks;
                    }
                };
                ret2._child = function(i, data, blockParams, depths) {
                    if (templateSpec.useBlockParams && !blockParams) throw new _exception2['default']('must pass block params');
                    if (templateSpec.useDepths && !depths) throw new _exception2['default']('must pass parent depths');
                    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
                };
                return ret2;
            }
            function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
                function prog(context) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    var currentDepths = depths;
                    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) currentDepths = [
                        context
                    ].concat(depths);
                    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [
                        options.blockParams
                    ].concat(blockParams), currentDepths);
                }
                prog = executeDecorators(fn, prog, container, depths, data, blockParams);
                prog.program = i;
                prog.depth = depths ? depths.length : 0;
                prog.blockParams = declaredBlockParams || 0;
                return prog;
            }
            /**
	 * This is currently part of the official API, therefore implementation details should not be changed.
	 */ function resolvePartial(partial, context, options) {
                if (!partial) {
                    if (options.name === '@partial-block') partial = options.data['partial-block'];
                    else partial = options.partials[options.name];
                } else if (!partial.call && !options.name) {
                    // This is a dynamic partial that returned a string
                    options.name = partial;
                    partial = options.partials[partial];
                }
                return partial;
            }
            function invokePartial(partial, context2, options2) {
                // Use the current closure context to save the partial-block if this partial
                var currentPartialBlock = options2.data && options2.data['partial-block'];
                options2.partial = true;
                if (options2.ids) options2.data.contextPath = options2.ids[0] || options2.data.contextPath;
                var partialBlock = undefined;
                if (options2.fn && options2.fn !== noop) (function() {
                    options2.data = _base.createFrame(options2.data);
                    // Wrapper function to get access to currentPartialBlock from the closure
                    var fn = options2.fn;
                    partialBlock = options2.data['partial-block'] = function partialBlockWrapper(context) {
                        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        // Restore the partial-block from the closure for the execution of the block
                        // i.e. the part inside the block of the partial call.
                        options.data = _base.createFrame(options.data);
                        options.data['partial-block'] = currentPartialBlock;
                        return fn(context, options);
                    };
                    if (fn.partials) options2.partials = Utils.extend({}, options2.partials, fn.partials);
                })();
                if (partial === undefined && partialBlock) partial = partialBlock;
                if (partial === undefined) throw new _exception2['default']('The partial ' + options2.name + ' could not be found');
                else if (partial instanceof Function) return partial(context2, options2);
            }
            function noop() {
                return '';
            }
            function initData(context, data) {
                if (!data || !('root' in data)) {
                    data = data ? _base.createFrame(data) : {};
                    data.root = context;
                }
                return data;
            }
            function executeDecorators(fn, prog, container, depths, data, blockParams) {
                if (fn.decorator) {
                    var props = {};
                    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
                    Utils.extend(prog, props);
                }
                return prog;
            }
            function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
                _Object$keys(mergedHelpers).forEach(function(helperName) {
                    var helper = mergedHelpers[helperName];
                    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
                });
            }
            function passLookupPropertyOption(helper, container) {
                var lookupProperty = container.lookupProperty;
                return _internalWrapHelper.wrapHelper(helper, function(options) {
                    return Utils.extend({
                        lookupProperty: lookupProperty
                    }, options);
                });
            }
        /***/ },
        /* 38 */ /***/ function(module, exports, __webpack_require__) {
            module.exports = {
                "default": __webpack_require__(39),
                __esModule: true
            };
        /***/ },
        /* 39 */ /***/ function(module, exports, __webpack_require__) {
            __webpack_require__(40);
            module.exports = __webpack_require__(20).Object.seal;
        /***/ },
        /* 40 */ /***/ function(module, exports, __webpack_require__) {
            // 19.1.2.17 Object.seal(O)
            var isObject = __webpack_require__(41);
            __webpack_require__(17)('seal', function($seal) {
                return function seal(it) {
                    return $seal && isObject(it) ? $seal(it) : it;
                };
            });
        /***/ },
        /* 41 */ /***/ function(module, exports) {
            module.exports = function(it) {
                return typeof it === 'object' ? it !== null : typeof it === 'function';
            };
        /***/ },
        /* 42 */ /***/ function(module, exports) {
            'use strict';
            exports.__esModule = true;
            exports.wrapHelper = wrapHelper;
            function wrapHelper(helper, transformOptionsFn) {
                if (typeof helper !== 'function') // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
                // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
                return helper;
                var wrapper = function wrapper() /* dynamic arguments */ {
                    var options = arguments[arguments.length - 1];
                    arguments[arguments.length - 1] = transformOptionsFn(options);
                    return helper.apply(this, arguments);
                };
                return wrapper;
            }
        /***/ },
        /* 43 */ /***/ function(module, exports) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                exports.__esModule = true;
                exports['default'] = function(Handlebars) {
                    /* istanbul ignore next */ var root = typeof global !== 'undefined' ? global : window, $Handlebars = root.Handlebars;
                    /* istanbul ignore next */ Handlebars.noConflict = function() {
                        if (root.Handlebars === Handlebars) root.Handlebars = $Handlebars;
                        return Handlebars;
                    };
                };
                module.exports = exports['default'];
            /* WEBPACK VAR INJECTION */ }).call(exports, function() {
                return this;
            }());
        /***/ }
    ]);
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dKNTF":[function() {},{}],"lPo9h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button", ()=>button
);
var _buttonHbs = require("./button.hbs");
var _buttonHbsDefault = parcelHelpers.interopDefault(_buttonHbs);
var _buttonScss = require("./button.scss");
const button = ({ name , klass  })=>_buttonHbsDefault.default({
        name,
        klass
    })
;

},{"./button.hbs":"jyi3k","./button.scss":"5gPci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyi3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<button class=\"button " + alias4((helper = (helper = lookupProperty(helpers, "klass") || (depth0 != null ? lookupProperty(depth0, "klass") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "klass",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 22
                },
                "end": {
                    "line": 1,
                    "column": 31
                }
            }
        }) : helper)) + "\">" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 41
                }
            }
        }) : helper)) + "</button>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gPci":[function() {},{}],"ide2q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"authorization\">\n    <div class=\"authorization__title\">\n        <h3>Enter</h1>\n    </div>\n\n    <form action=\"\" class=\"authorization__form\">\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginField") || (depth0 != null ? lookupProperty(depth0, "loginField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "passwordField") || (depth0 != null ? lookupProperty(depth0, "passwordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "passwordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 9,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    </form>\n\n    <a href=\"/registration\"> Create a profile</a>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kGQd7":[function() {},{}],"gVx4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHtmlRegistration", ()=>buildHtmlRegistration
);
var _fieldTmpl = require("../../components/field/field.tmpl");
var _buttonTmpl = require("../../components/button/button.tmpl");
var _registrationHbs = require("./registration.hbs");
var _registrationHbsDefault = parcelHelpers.interopDefault(_registrationHbs);
var _registrationScss = require("./registration.scss");
const fields = {
    firstName: {
        name: 'first_name',
        placeholder: 'first name',
        klass: 'registration__firstName-input'
    },
    secondName: {
        name: 'second_name',
        placeholder: 'second name',
        klass: 'registration__secondName-input'
    },
    login: {
        name: 'login',
        placeholder: 'login',
        klass: 'registration__login-input'
    },
    email: {
        name: 'email',
        placeholder: 'email',
        klass: 'registration__email-input'
    },
    phone: {
        name: 'phone',
        placeholder: 'phone',
        klass: 'registration__phone-input'
    },
    password: {
        name: 'password',
        placeholder: 'password',
        klass: 'registration__password-input'
    },
    button: {
        name: 'Create account',
        klass: 'registration__button-button'
    }
};
const buildHtmlRegistration = ()=>{
    return _registrationHbsDefault.default({
        firstNameField: _fieldTmpl.field(fields.firstName),
        secondNameField: _fieldTmpl.field(fields.secondName),
        loginField: _fieldTmpl.field(fields.login),
        emailField: _fieldTmpl.field(fields.email),
        passwordField: _fieldTmpl.field(fields.password),
        phoneField: _fieldTmpl.field(fields.phone),
        button: _buttonTmpl.button(fields.button)
    });
};

},{"../../components/field/field.tmpl":"4vD4i","../../components/button/button.tmpl":"lPo9h","./registration.hbs":"8qPCD","./registration.scss":"bUBzq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qPCD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"registration\">\n    <div class=\"registration__title\">\n        <h3>Registration</h1>\n    </div>\n\n    <form action=\"\" class=\"registration__form\">\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "firstNameField") || (depth0 != null ? lookupProperty(depth0, "firstNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "firstNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "secondNameField") || (depth0 != null ? lookupProperty(depth0, "secondNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "secondNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginField") || (depth0 != null ? lookupProperty(depth0, "loginField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 9,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "emailField") || (depth0 != null ? lookupProperty(depth0, "emailField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "emailField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 8
                },
                "end": {
                    "line": 10,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "passwordField") || (depth0 != null ? lookupProperty(depth0, "passwordField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "passwordField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 8
                },
                "end": {
                    "line": 11,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "phoneField") || (depth0 != null ? lookupProperty(depth0, "phoneField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phoneField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 8
                },
                "end": {
                    "line": 12,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 13,
                    "column": 8
                },
                "end": {
                    "line": 13,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    </form>\n\n    <a href=\"/chats\"> Enter</a>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUBzq":[function() {},{}],"32AZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHtmlChats", ()=>buildHtmlChats
);
var _fieldTmpl = require("../../components/field/field.tmpl");
var _chatItemTmpl = require("../../components/chat_item/chat_item.tmpl");
var _buttonTmpl = require("../../components/button/button.tmpl");
var _chatsHbs = require("./chats.hbs");
var _chatsHbsDefault = parcelHelpers.interopDefault(_chatsHbs);
var _chatsScss = require("./chats.scss");
const fields = {
    search: {
        name: 'search',
        placeholder: 'search',
        klass: 'chats-search__input'
    },
    message_input: {
        name: 'message',
        placeholder: 'message',
        klass: 'chat-view__form-message-input'
    },
    message_button: {
        name: 'send',
        klass: 'chat-view__form-message-button'
    }
};
//  в дальнейшем будем получать список по api сервера из базы данных. 
const chats = {
    list: [
        {
            name: 'Andre',
            last_message: 'Whatsapp nigga? How are you? Whatsapp nigga? How are you?',
            date_last_message: '10:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        {
            name: 'Violla',
            last_message: 'Whatsapp nigga? How are you?',
            date_last_message: '11:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        {
            name: 'Violla',
            last_message: 'Whatsapp nigga? How are you?',
            date_last_message: '11:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        {
            name: 'Violla',
            last_message: 'Whatsapp nigga? How are you?',
            date_last_message: '11:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        {
            name: 'Violla',
            last_message: 'Whatsapp nigga? How are you?',
            date_last_message: '11:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        {
            name: 'Violla',
            last_message: 'Whatsapp nigga? How are you?',
            date_last_message: '11:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        },
        {
            name: 'Violla',
            last_message: 'Whatsapp nigga? How are you?',
            date_last_message: '11:49',
            image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
        }, 
    ]
};
const chat_active = {
    name: 'Silvestor Stalone',
    messages: [
        {
            content_type: 'text',
            body: 'Привет всем. Тут всплыл один вопрос. Есть ли Луна? Привет всем. Тут всплыл один вопрос. Есть ли Луна?'
        },
        {
            content_type: 'text',
            body: 'Привет всем. Конечно есть, я на ней играл в футбол. Привет всем. Конечно есть, я на ней играл в футбол. Привет всем. Конечно есть, я на ней играл в футбол.'
        },
        {
            content_type: 'image',
            body: 'https://ilounge.ua/files/uploads/new_4/sravnenie-apple-watch-6-i-se-6.jpg'
        }, 
    ],
    image_link: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
};
const buildHtmlChats = ()=>{
    let chats_list_html = '';
    chats.list.forEach(function(item, i, arr) {
        chats_list_html += _chatItemTmpl.chat_item(item);
    });
    return _chatsHbsDefault.default({
        searchField: _fieldTmpl.field(fields.search),
        chatsList: chats_list_html,
        chat: chat_active,
        messageField: _fieldTmpl.field(fields.message_input),
        messageButton: _buttonTmpl.button(fields.message_button)
    });
};

},{"../../components/field/field.tmpl":"4vD4i","../../components/chat_item/chat_item.tmpl":"2J1iB","../../components/button/button.tmpl":"lPo9h","./chats.hbs":"l8buw","./chats.scss":"iwlg6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2J1iB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "chat_item", ()=>chat_item
);
var _chatItemHbs = require("./chat_item.hbs");
var _chatItemHbsDefault = parcelHelpers.interopDefault(_chatItemHbs);
var _chatItemScss = require("./chat_item.scss");
const chat_item = ({ name , last_message , date_last_message , image_link  })=>_chatItemHbsDefault.default({
        name,
        last_message,
        date_last_message,
        image_link
    })
;

},{"./chat_item.hbs":"8LHBf","./chat_item.scss":"2q5zz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LHBf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"chat-list__item\">\n    <div class='avatar-small'><img src=\"" + alias4((helper = (helper = lookupProperty(helpers, "image_link") || (depth0 != null ? lookupProperty(depth0, "image_link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "image_link",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 40
                },
                "end": {
                    "line": 2,
                    "column": 54
                }
            }
        }) : helper)) + "\" alt=\"avatar\" width=\"47\" height=\"47\"></div>\n    <div class=\"chat-item__content\">\n        <div class='chat-item__name'>" + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 37
                },
                "end": {
                    "line": 4,
                    "column": 45
                }
            }
        }) : helper)) + "</div>\n        <div class='chat-item__last-meesage'>" + alias4((helper = (helper = lookupProperty(helpers, "last_message") || (depth0 != null ? lookupProperty(depth0, "last_message") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "last_message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 45
                },
                "end": {
                    "line": 5,
                    "column": 61
                }
            }
        }) : helper)) + "</div>\n    </div>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2q5zz":[function() {},{}],"l8buw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "1": function(container, depth0, helpers, partials, data) {
        var lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                <div class=\"chat-content__item\">\n                    <div class=\"chat-content-inner\">" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "body") : depth0, depth0)) + "</div>\n                </div>\n";
    },
    "3": function(container, depth0, helpers, partials, data) {
        var lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "                <div class=\"chat-content__item-own\">\n                    <div class=\"chat-content-inner own\">" + container.escapeExpression(container.lambda(depth0 != null ? lookupProperty(depth0, "body") : depth0, depth0)) + "</div>\n                </div>\n";
    },
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.lambda, alias5 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"page-chat\">\n    <div class=\"sidebar\">\n        <div class=\"profile-link\">\n            <a href=\"/profile\">Profile</a>\n        </div>\n        <div class=\"chats-search\">\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "searchField") || (depth0 != null ? lookupProperty(depth0, "searchField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "searchField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        </div>\n        <div class=\"chats-list\">\n            " + ((stack1 = (helper = (helper = lookupProperty(helpers, "chatsList") || (depth0 != null ? lookupProperty(depth0, "chatsList") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chatsList",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 12
                },
                "end": {
                    "line": 10,
                    "column": 27
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        </div>\n    </div>\n    <div class=\"chat-view\">\n        <div class=\"chat-view__header\">\n            <div class=\"chat-view__inner\">\n                <div class=\"chat-view__avatar\">\n                    <img src=\"" + alias5(alias4((stack1 = depth0 != null ? lookupProperty(depth0, "chat") : depth0) != null ? lookupProperty(stack1, "image_link") : stack1, depth0)) + "\" alt=\"avatar\" width=\"40\" height=\"40\">\n                </div>\n                <div class=\"chat-view__name\">\n                    " + alias5(alias4((stack1 = depth0 != null ? lookupProperty(depth0, "chat") : depth0) != null ? lookupProperty(stack1, "name") : stack1, depth0)) + "\n                </div>\n            </div>\n            <div class=\"chat-view__menu\">\n                <a href=\"/profile\"><img src=\"https://img2.freepng.ru/20180425/qzq/kisspng-computer-icons-menu-bar-icon-design-hamburger-butt-5ae053e44abbe3.3712052415246509803061.jpg\" alt=\"avatar\" width=\"40\" height=\"40\"></a>\n            </div>\n        </div>\n        <div class=\"chat-view__content\">\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "chat") : depth0) != null ? lookupProperty(stack1, "messages") : stack1, {
            "name": "each",
            "hash": {},
            "fn": container.program(1, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 28,
                    "column": 12
                },
                "end": {
                    "line": 32,
                    "column": 21
                }
            }
        })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "each").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "chat") : depth0) != null ? lookupProperty(stack1, "messages") : stack1, {
            "name": "each",
            "hash": {},
            "fn": container.program(3, data, 0),
            "inverse": container.noop,
            "data": data,
            "loc": {
                "start": {
                    "line": 33,
                    "column": 12
                },
                "end": {
                    "line": 37,
                    "column": 21
                }
            }
        })) != null ? stack1 : "") + "        </div>\n        <div class=\"chat-view__footer\">\n            <div class=\"chat-view__form-message\">\n                <img class='chat-view__form-message-icon' src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD7+/vCwsLs7Ozk5OTx8fGjo6OmpqbAwMBJSUkzMzP5+flYWFhxcXFWVlZeXl46OjomJiYuLi4YGBgfHx9nZ2dEREQ+Pj4wMDAVFRXU1NR5eXmdnZ1MTEwiIiLe3t7Q0NANDQ2ysrKHh4eKioqSkpJjY2N/f392dna3t7eNN7x1AAAKkElEQVR4nO1daVvqSgyeQouKdV/wiGIB4aj//wdeAb0kaTtrJjPwnPerwzQxe2ZTKmvU0+X6cXK7WBSL57vZ5+tXNUhNEiPq+fu4aOP6tUlNGQ/mn7cd7O1ws65SkxeM5XkvezvMhqlJDMHgxMDeFueHy+OyXz2JHKepSfVCeWXJ3wYfB+hZTx34+8b9PDXBjqj/ujH4jdfUNDuhunNmsCgeD0hT5x78feOpTk24LYad9N9dr7/m06pqpsPlx/i+a8hzmZp0O3QxeHHa4EGj+eqmPez2IFg8axO+6szNBvPH1sibkTS57mhL8LXfvMpLOngiSKofWhJ80buPZkbGPwoR6gsqwVtzIKepwakAmf6gDF7Y+P+G+NUmMpEhoCr6bvezGmvqeVwiQ0AleGL9S5zjrSPSGAR/BpW6QL/MNCqGMKjUBP70byQSw0Bt0NEljt7gj3MspagEnX3+FP76OgaJYQhT0S3W8PcNN4GhoCrqwaBSsCv3wk1hIBgkqEhVmVepGGyDP7gGcyxZKQwEjwQVFuKMk8JABIYJCJi95aOmbBL8xheY54yNwkBwMqgUmCgXb8rLoAIl/w0PgaFgtMEtlvupFlmk38wSVKoEk+WwWsPOoBqA1aovBgoDwc+gUqC/mL4OjsGg+tjP98kxXwi4UjWM1/2EqduKUSSInGniGpGlXNLPe8E0pR8iSRBNfMU1ZyAdvAzmIsN4DEI7TNhw407VIECzJp0vjRMmfgDiYbLiIqKKKtTISJXTxFTR77wULEMlKoHjSlBVYOqGd2pLxJUgWi19TrKiH1mCaAnqiXtuG8SWoBqAyVfck1sgugTRkn6CTafxGVRwDxH/7CYIMAg/IZ+zxSqXIOCGfvFoGDVV+wHseC+kd2IKqKhSz+ADlvtU2BA9TGyAtrgJH8OQUFGko8VljC/0Q0SCDfpEE+MTvRCxwRE6miFbGopIsMY730VXR0UkWD+hb4iu4cswiLZ8ybYRZRgkW9olFw5FGByQ83uS+ZpIHCQ2KNqAogxGOZg0IAxKdkllwsQf/BFJL5PEyYwFS4oUcbC4OToGiQQnR8cgOaR4fCpKJSiYjf6zQQ7UJJM5PhskDI6PTUVHREWfjk6CN+kYlGj8/gsTMZFdmCiHZ6zbTGVU1D5M1Nsm8RvfMa/cbLD87TByVf0iFf3IPtku98Lm6dwkcTIaGxyB2pilu5Ci8atT0RFcieJobXgwOBqeDt3UZ0RaFjobRP8LhgVhDwZfF5uBLjsmqA1qMpkSO9wPh690w8MGf1f77Pcq0zChYXBErtAKjhceEnx0GbwFpVpng+SSheClKI8wAdZrH+w+MrIvl0pirsGbhQNUdAurrJLaoC5MkP9FMINBKrqBjT+lXlQT6EcPeGjwoQQPFSU3A1l8pLa3wZIMTcEguRbIYl+IX6q2RXIbLIp7sxnSMKGzQZL0pLfB4sG88aUVJjRDF3hoBipqwyBN1ezDRAYMWmxdcggTGdrgswWD/qlaBmHCxwY1DL7hoRmoqIcENV21DFWU1wbZU7VwFb23YJAEt8NK1XxsUKOi5H+RgQ16qKh9RX8oNugQJo4jVbOv6DNQURsnc/Spmn01Ed0G4wR6hzBxmKkaCW46G8yAQSLBhbsNHlZFz2uD9H9xIKkaKREOK0z8S9XahnVYqZqHkzm+VM0hTGRQLrmnatSwUlb0qVO1HCp6j2SbeFFdqpZB0ymqDWa4+GLhRWkNdHypGmFQMlVLEyY0Q5/x0AxU1IJBaljW+2QYGJwHM5h5qjbF80WqB4lYHFK1YAmWeL44Nlg6pGrccXBAzCNKT6aVqgmqKJVHlDBBGZRM1eBVoJYSdK/oqYpKLr5QLxPHBkkfQjJVUwrPGKXgTWqD8ALCwuqAdLgNSlb0VEct9i15qCjJvyS7at94cpzQo6J3SNW4F18Uuuj0Wx7mjVkMYUIzlN8GVY0UqDGO9wj0DhU9vxclz+6Y3WhcG+RO1TaA1w9a3FIQVYIxVJRkM41pdNwwEYVBBX2z8UCER6pGM5n+oTHChCL3gpmOZ75gEphTNe568AfwxW9TOrrGJHioqLgN4rt4TdcPkjaOTS5KnIxsqrYDFIshUpAmgI2Kkn3KM9lUbQegGgvDbcPYjfqkavaLL3x360AlNRwYIiUka6pGwwTj5UEwGBrOQUOXZBXoHSp6kslwPnQAqoo7/Uh0GSOvDUao6P9HDeY11L3vkIbGOHPln6qx3m81BxPrlRRds2V+XCmHMLEFNEP9SKik5oO2VEXlU7VfgHvbDSegT6ylrdqpms4GI6VqvwAWYAj3oFelEcgO1AYdFl+475hzeJoNxApTK64kvl8XJqLaoMJB3NCeAWIxnJVu2aBkZ5sCpNLn+qx7ABoRemlXDpsQIquoQu7D4B9hq6PRDWyFCc1Q7jX6DoAobkhKbWXoUtHHaDpRfO7nN/UvgEvQvCWRSaq2B+i6mK48AZGz/5+RS6q2B+DQdGc0iIeTvjE0TDikarHuWv27/4Qp1YRPnvSEC7oRQPOUNPsh5T6AN69MtyvBUrn7H175p2rxHr5zkCG6ZbpLpVupWv9cQja4gYMdqhWkqWn9mUpQevGlB6C3ZLw+Cj+4QGNihYnWdtUk4uAvQAvbfMHRNaILy/wLE504VQOwz2kUFWJxsRfjFDOvtUH27ZR6gBBgoSufmLbidn3WlM3ZmjjGlBV9C/P9p+7Md2bSzZ59SFjRtwAVz+J5Pbr9tBvpUzX4RZBa2NwBRraGuTIolapBgDPiVrcNvhcmaPRO2ga3uHb9nolFjUumBa/MwwYwn7b7hV5RNU0qeRvcYg4+aXkZH90rDaGpjUUzGQjwTdvn2Wq8zW+PS407prmo3DPas/1H36x/1JAdGVv81elAIhXdADbrHe6MrNYk+q+0y23CqRoCrMvd7m6tlh/j27eHt7vx59Kwmsh+8sUJ8AEsjyuGbe5Hl6voOwG9f5zHkxLa4O778OMxLnRPkaphwNoughDjL74YgQoG9ve7U6voFjAWcz8HGXGfjANgbhp+jzICVVFhL/o/IA2sb/DILL5YAAmR8Rn2LGxwiwHy52x6mj5M7IHPNzM9e5k2VaNAm/J4XqpJnKpR4J48x+sJ+djgD/AG7vB3rtMVvL3AL/KEvsZOF4PT2uAOZFEi7ImIKiMvuscSExVii81zjgzSY6TFxDsJp73/HFR0B/zcdXHvGfrpqZMMnMwvqP/zqhbLKzJJLiq6BV2pLsbm/eoESzpFVgy2HOpGjE59jWZMf5+PDf6g3bG/X1rncOVL69fZMdglxeKPcR/KFlVHr1/yXXBr0G0xO101lhtzuldhg/CXpaKgnnTQWlyd9jNZN6tF12+iPB/PgQE96fuD2fu87VrrZnnZ2oqxg/nUSTqcdJP8jbur9+XZvGmqqpkOv04unx56RzoHGlE0NPY7g7sryY5B3yKoHR64HsqMiemNmZE+fLB3zuOg3xr1mDSpKbdGvTKz08KTZrNChijXnYGuH+OcQ0Q36uWbma9fPPIueohhSjddduPPyYH4l04MPw2edfbapKYxGNXpSw+XFyvHV3AzRt18nbxfT26fF8VicX8+e1yfDkvBt9zd8B9N6I6fZ9m48QAAAABJRU5ErkJggg==\" height=\"32px\" width=\"32px\" alt=\"\">\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "messageField") || (depth0 != null ? lookupProperty(depth0, "messageField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messageField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 42,
                    "column": 16
                },
                "end": {
                    "line": 42,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n                " + ((stack1 = (helper = (helper = lookupProperty(helpers, "messageButton") || (depth0 != null ? lookupProperty(depth0, "messageButton") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "messageButton",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 43,
                    "column": 16
                },
                "end": {
                    "line": 43,
                    "column": 35
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n            </div>\n        </div>\n    </div>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iwlg6":[function() {},{}],"5NXVP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHtmlProfile", ()=>buildHtmlProfile
);
var _fieldTmpl = require("../../components/field/field.tmpl");
var _buttonTmpl = require("../../components/button/button.tmpl");
var _profileHbs = require("./profile.hbs");
var _profileHbsDefault = parcelHelpers.interopDefault(_profileHbs);
var _profileScss = require("./profile.scss");
const fields = {
    first_name: {
        name: 'first_name',
        placeholder: 'first_name',
        klass: 'profile-form__input'
    },
    second_name: {
        name: 'seasecond_namerch',
        placeholder: 'second_name',
        klass: 'profile-form__input'
    },
    display_name: {
        name: 'display_name',
        placeholder: 'display_name',
        klass: 'profile-form__input'
    },
    login: {
        name: 'login',
        placeholder: 'login',
        klass: 'profile-form__input'
    },
    email: {
        name: 'email',
        placeholder: 'email',
        klass: 'profile-form__input'
    },
    phone: {
        name: 'phone',
        placeholder: 'phone',
        klass: 'profile-form__input'
    },
    button: {
        name: 'save',
        klass: 'profile-form__button'
    }
};
const buildHtmlProfile = ()=>{
    return _profileHbsDefault.default({
        firstNameField: _fieldTmpl.field(fields.first_name),
        secondNameField: _fieldTmpl.field(fields.second_name),
        displayNameField: _fieldTmpl.field(fields.display_name),
        loginField: _fieldTmpl.field(fields.login),
        emailField: _fieldTmpl.field(fields.email),
        phoneField: _fieldTmpl.field(fields.phone),
        button: _buttonTmpl.button(fields.button),
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    });
};

},{"../../components/field/field.tmpl":"4vD4i","../../components/button/button.tmpl":"lPo9h","./profile.hbs":"hpzTq","./profile.scss":"bZDEH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpzTq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"page-profile\">\n    <img class=\"profile-avatar\" src=\"" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "avatar") || (depth0 != null ? lookupProperty(depth0, "avatar") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "avatar",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 37
                },
                "end": {
                    "line": 2,
                    "column": 47
                }
            }
        }) : helper)) + "\" alt=\"avatar\" width=\"100px\" height=\"100px\">\n    <form action=\"\" class=\"profile-form__form\">\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "firstNameField") || (depth0 != null ? lookupProperty(depth0, "firstNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "firstNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "secondNameField") || (depth0 != null ? lookupProperty(depth0, "secondNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "secondNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "displayNameField") || (depth0 != null ? lookupProperty(depth0, "displayNameField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "displayNameField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 8
                },
                "end": {
                    "line": 6,
                    "column": 30
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "loginField") || (depth0 != null ? lookupProperty(depth0, "loginField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "loginField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "emailField") || (depth0 != null ? lookupProperty(depth0, "emailField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "emailField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "phoneField") || (depth0 != null ? lookupProperty(depth0, "phoneField") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phoneField",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 9,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n        " + ((stack1 = (helper = (helper = lookupProperty(helpers, "button") || (depth0 != null ? lookupProperty(depth0, "button") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "button",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 8
                },
                "end": {
                    "line": 10,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\n    </form>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZDEH":[function() {},{}],"OszSi":[function() {},{}],"ef2Gg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _handlebarsRuntime = require("handlebars/dist/handlebars.runtime");
var _handlebarsRuntimeDefault = parcelHelpers.interopDefault(_handlebarsRuntime);
const templateFunction = _handlebarsRuntimeDefault.default.template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "<div class=\"page-error\">\n    <div class=\"error-status\">" + alias4((helper = (helper = lookupProperty(helpers, "errorStatus") || (depth0 != null ? lookupProperty(depth0, "errorStatus") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "errorStatus",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 30
                },
                "end": {
                    "line": 2,
                    "column": 45
                }
            }
        }) : helper)) + "</div>\n    <div class=\"error-message\">" + alias4((helper = (helper = lookupProperty(helpers, "errorMessage") || (depth0 != null ? lookupProperty(depth0, "errorMessage") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "errorMessage",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 31
                },
                "end": {
                    "line": 3,
                    "column": 47
                }
            }
        }) : helper)) + "</div>\n    <a href=\"/\">Назад к чатам</a>\n</div>";
    },
    "useData": true
});
exports.default = templateFunction;

},{"handlebars/dist/handlebars.runtime":"b7ZpO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7fmqN","8lqZg"], "8lqZg", "parcelRequire96ca")

//# sourceMappingURL=index.975ef6c8.js.map
