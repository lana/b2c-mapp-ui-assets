function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var n,
    u,
    i,
    t,
    r,
    f,
    e = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function a(n, l) {
  for (var u in l) {
    n[u] = l[u];
  }

  return n;
}

function v(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var i,
      t = arguments,
      r = {};

  for (i in l) {
    "key" !== i && "ref" !== i && (r[i] = l[i]);
  }

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) {
    u.push(t[i]);
  }
  if (null != u && (r.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) {
    void 0 === r[i] && (r[i] = n.defaultProps[i]);
  }
  return p(n, r, l && l.key, l && l.ref, null);
}

function p(l, u, i, t, r) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: r
  };
  return null == r && (o.__v = o), n.vnode && n.vnode(o), o;
}

function d(n) {
  return n.children;
}

function m(n, l) {
  this.props = n, this.context = l;
}

function w(n, l) {
  if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) {
    if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
  }

  return "function" == typeof n.type ? w(n) : null;
}

function k(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) {
      if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }
    }

    return k(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && u.push(l) && !i++ || r !== n.debounceRendering) && ((r = n.debounceRendering) || t)(_);
}

function _() {
  for (var n; i = u.length;) {
    n = u.sort(function (n, l) {
      return n.__v.__b - l.__v.__b;
    }), u = [], n.some(function (n) {
      var l, u, i, t, r, o, f;
      n.__d && (o = (r = (l = n).__v).__e, (f = l.__P) && (u = [], (i = a({}, r)).__v = i, t = A(f, r, i, l.__n, void 0 !== f.ownerSVGElement, null, u, null == o ? w(r) : o), T(u, r), t != o && k(r)));
    });
  }
}

function b(n, l, u, i, t, r, o, f, s) {
  var a,
      h,
      p,
      y,
      d,
      m,
      k,
      g = u && u.__k || c,
      _ = g.length;
  if (f == e && (f = null != r ? r[0] : _ ? w(u, 0) : null), a = 0, l.__k = x(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = g[a]) || p && u.key == p.key && u.type === p.type) g[a] = void 0;else for (h = 0; h < _; h++) {
        if ((p = g[h]) && u.key == p.key && u.type === p.type) {
          g[h] = void 0;
          break;
        }

        p = null;
      }

      if (y = A(n, u, p = p || e, i, t, r, o, f, s), (h = u.ref) && p.ref != h && (k || (k = []), p.ref && k.push(p.ref, null, u), k.push(h, u.__c || y, u)), null != y) {
        var c;
        if (null == m && (m = y), void 0 !== u.__d) c = u.__d, u.__d = void 0;else if (r == p || y != f || null == y.parentNode) {
          n: if (null == f || f.parentNode !== n) n.appendChild(y), c = null;else {
            for (d = f, h = 0; (d = d.nextSibling) && h < _; h += 2) {
              if (d == y) break n;
            }

            n.insertBefore(y, f), c = f;
          }

          "option" == l.type && (n.value = "");
        }
        f = void 0 !== c ? c : y.nextSibling, "function" == typeof l.type && (l.__d = f);
      } else f && p.__e == f && f.parentNode != n && (f = w(p));
    }

    return a++, u;
  }), l.__e = m, null != r && "function" != typeof l.type) for (a = r.length; a--;) {
    null != r[a] && v(r[a]);
  }

  for (a = _; a--;) {
    null != g[a] && D(g[a], g[a]);
  }

  if (k) for (a = 0; a < k.length; a++) {
    j(k[a], k[++a], k[++a]);
  }
}

function x(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
    x(n[i], l, u);
  } else u.push(l ? l("string" == typeof n || "number" == typeof n ? p(null, n, null, null, n) : null != n.__e || null != n.__c ? p(n.type, n.props, n.key, null, n.__v) : n) : n);
  return u;
}

function P(n, l, u, i, t) {
  var r;

  for (r in u) {
    "children" === r || "key" === r || r in l || N(n, r, null, u[r], i);
  }

  for (r in l) {
    t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || N(n, r, l[r], u[r], i);
  }
}

function C(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === s.test(l) ? u + "px" : null == u ? "" : u;
}

function N(n, l, u, i, t) {
  var r, o, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof i && (r.cssText = "", i = null), i) for (e in i) {
        u && e in u || C(r, e, "");
      }
      if (u) for (c in u) {
        i && u[c] === i[c] || C(r, c, u[c]);
      }
    }
  } else "o" === l[0] && "n" === l[1] ? (o = l !== (l = l.replace(/Capture$/, "")), f = l.toLowerCase(), l = (f in n ? f : l).slice(2), u ? (i || n.addEventListener(l, z, o), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, z, o)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function z(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function A(l, u, i, t, r, o, f, e, c) {
  var s,
      v,
      h,
      p,
      y,
      w,
      k,
      g,
      _,
      x,
      P = u.type;

  if (void 0 !== u.constructor) return null;
  (s = n.__b) && s(u);

  try {
    n: if ("function" == typeof P) {
      if (g = u.props, _ = (s = P.contextType) && t[s.__c], x = s ? _ ? _.props.value : s.__ : t, i.__c ? k = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(g, x) : (u.__c = v = new m(g, x), v.constructor = P, v.render = E), _ && _.sub(v), v.props = g, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = a({}, v.__s)), a(v.__s, P.getDerivedStateFromProps(g, v.__s))), p = v.props, y = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && g !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(g, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(g, v.__s, x) || u.__v === i.__v && !v.__) {
          for (v.props = g, v.state = v.__s, u.__v !== i.__v && (v.__d = !1), v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), s = 0; s < u.__k.length; s++) {
            u.__k[s] && (u.__k[s].__ = u);
          }

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(g, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(p, y, w);
        });
      }
      v.context = x, v.props = g, v.state = v.__s, (s = n.__r) && s(u), v.__d = !1, v.__v = u, v.__P = l, s = v.render(v.props, v.state, v.context), u.__k = null != s && s.type == d && null == s.key ? s.props.children : Array.isArray(s) ? s : [s], null != v.getChildContext && (t = a(a({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, y)), b(l, u, i, t, r, o, f, e, c), v.base = u.__e, v.__h.length && f.push(v), k && (v.__E = v.__ = null), v.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = $(i.__e, u, i, t, r, o, f, c);

    (s = n.diffed) && s(u);
  } catch (l) {
    u.__v = null, n.__e(l, u, i);
  }

  return u.__e;
}

function T(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function $(n, l, u, i, t, r, o, f) {
  var s,
      a,
      v,
      h,
      p,
      y = u.props,
      d = l.props;
  if (t = "svg" === l.type || t, null != r) for (s = 0; s < r.length; s++) {
    if (null != (a = r[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
      n = a, r[s] = null;
      break;
    }
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && {
      is: d.is
    }), r = null, f = !1;
  }

  if (null === l.type) y !== d && n.data != d && (n.data = d);else {
    if (null != r && (r = c.slice.call(n.childNodes)), v = (y = u.props || e).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !f) {
      if (y === e) for (y = {}, p = 0; p < n.attributes.length; p++) {
        y[n.attributes[p].name] = n.attributes[p].value;
      }
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    P(n, d, y, t, f), h ? l.__k = [] : (l.__k = l.props.children, b(n, l, u, i, "foreignObject" !== l.type && t, r, o, e, f)), f || ("value" in d && void 0 !== (s = d.value) && s !== n.value && N(n, "value", s, y.value, !1), "checked" in d && void 0 !== (s = d.checked) && s !== n.checked && N(n, "checked", s, y.checked, !1));
  }
  return n;
}

function j(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function D(l, u, i) {
  var t, r, o;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (r = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (o = 0; o < t.length; o++) {
    t[o] && D(t[o], u, i);
  }
  null != r && v(r);
}

function E(n, l, u) {
  return this.constructor(n, u);
}

n = {
  __e: function __e(n, l) {
    for (var u, i; l = l.__;) {
      if ((u = l.__c) && !u.__) try {
        if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g(u.__E = u);
      } catch (l) {
        n = l;
      }
    }

    throw n;
  }
}, m.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), g(this));
}, m.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, m.prototype.render = d, u = [], i = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = 0;

var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

var performance = global$1.performance || {};

var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; // generate timestamp or delta

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_development = createCommonjsModule(function (module, exports) {

  {
    (function () {
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning() {};

{
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') ;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});

var CSS = {"icon":"styles_icon__1EYk4","blue-500":"styles_blue-500__3LTmD","brown-500":"styles_brown-500___RZri","green-500":"styles_green-500__2u3g9","green-600":"styles_green-600__37BbP","purple-500":"styles_purple-500__1dgU9","red-500":"styles_red-500__1eXDW","yellow-500":"styles_yellow-500__RxzsI","black-100":"styles_black-100__2X0v2","black-200":"styles_black-200__3zZ9L","black-300":"styles_black-300__26Q6x","black-400":"styles_black-400__2dKPc","black-500":"styles_black-500__PTRAB","black-600":"styles_black-600__1E40N","black-700":"styles_black-700__6-YKE"};

var Icon = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        "fill-rule": "nonzero",
        d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c2.67 0 8 1.34 8 4v2H7v-2c0-2.66 5.33-4 8-4zm-6 4h12c-.2-.71-3.3-2-6-2-2.69 0-5.78 1.28-6 2zm-3-3H4v-3H1v-2h3V7h2v3h3v2H6v3z"
      })));
    }
  }]);

  return Icon;
}(m);

Icon.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$1 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#00A0DF",
        "fill-rule": "evenodd",
        d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.256 12.619a.875.875 0 01.619-1.494h5.104a.146.146 0 00.146-.146V5.875a.875.875 0 011.75 0v5.104a.146.146 0 00.146.146h5.104a.875.875 0 110 1.75h-5.104a.146.146 0 00-.146.146v5.104a.875.875 0 11-1.75 0v-5.104a.146.146 0 00-.146-.146H5.875a.875.875 0 01-.619-.256z",
        "clip-rule": "evenodd"
      })));
    }
  }]);

  return Icon;
}(m);

Icon$1.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$2 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#00A0DF",
        d: "M3 12a1.125 1.125 0 001.125 1.125h6.563a.188.188 0 01.187.188v6.562a1.125 1.125 0 102.25 0v-6.563a.188.188 0 01.188-.187h6.562a1.125 1.125 0 100-2.25h-6.563a.188.188 0 01-.187-.188V4.125a1.125 1.125 0 10-2.25 0v6.563a.188.188 0 01-.188.187H4.125A1.125 1.125 0 003 12z"
      })));
    }
  }]);

  return Icon;
}(m);

Icon$2.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$3 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12.0001 6.61224C12.5411 6.61224 12.9797 7.05082 12.9797 7.59184V16.4082C12.9797 16.9492 12.5411 17.3878 12.0001 17.3878C11.4591 17.3878 11.0205 16.9492 11.0205 16.4082V7.59184C11.0205 7.05082 11.4591 6.61224 12.0001 6.61224Z",
        fill: "#00A0DF"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M6.6123 12C6.6123 11.459 7.05088 11.0204 7.5919 11.0204H16.4082C16.9492 11.0204 17.3878 11.459 17.3878 12C17.3878 12.541 16.9492 12.9796 16.4082 12.9796H7.5919C7.05088 12.9796 6.6123 12.541 6.6123 12Z",
        fill: "#00A0DF"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$4 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$5 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM17.207 13.707L12.707 18.207C12.5195 18.3945 12.2652 18.4998 12 18.4998C11.7348 18.4998 11.4805 18.3945 11.293 18.207L6.793 13.707C6.61085 13.5184 6.51005 13.2658 6.51233 13.0036C6.51461 12.7414 6.61978 12.4906 6.80519 12.3052C6.99059 12.1198 7.24141 12.0146 7.5036 12.0123C7.7658 12.01 8.0184 12.1108 8.207 12.293L10.573 14.659C10.6081 14.6942 10.6529 14.7181 10.7016 14.7277C10.7503 14.7373 10.8008 14.7322 10.8467 14.713C10.8925 14.6938 10.9315 14.6614 10.9589 14.6199C10.9862 14.5784 11.0005 14.5297 11 14.48V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V14.48C12.9999 14.5295 13.0145 14.5779 13.042 14.6191C13.0695 14.6603 13.1085 14.6924 13.1543 14.7114C13.2 14.7303 13.2503 14.7353 13.2989 14.7256C13.3475 14.7159 13.392 14.692 13.427 14.657L15.793 12.291C15.9816 12.1088 16.2342 12.008 16.4964 12.0103C16.7586 12.0126 17.0094 12.1178 17.1948 12.3032C17.3802 12.4886 17.4854 12.7394 17.4877 13.0016C17.49 13.2638 17.3892 13.5164 17.207 13.705V13.707Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$6 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M3.67538 10.6797C3.88635 10.494 4.16243 10.3997 4.44289 10.4176C4.72336 10.4355 4.98524 10.564 5.17096 10.7749L10.7573 17.1233C10.7826 17.1516 10.816 17.1716 10.8529 17.1806C10.8899 17.1896 10.9287 17.1872 10.9642 17.1737C10.9998 17.1603 11.0304 17.1363 11.0521 17.1051C11.0738 17.0739 11.0856 17.0368 11.0858 16.9988L11.0858 4.05906C11.0858 3.77818 11.1974 3.5088 11.396 3.31019C11.5946 3.11158 11.864 3 12.1448 3C12.4257 3 12.6951 3.11158 12.8937 3.31019C13.0923 3.5088 13.2039 3.77818 13.2039 4.05906L13.2039 16.9988C13.2041 17.0368 13.2158 17.0739 13.2375 17.1051C13.2592 17.1363 13.2899 17.1603 13.3254 17.1737C13.361 17.1872 13.3998 17.1896 13.4367 17.1806C13.4737 17.1716 13.507 17.1516 13.5324 17.1233L19.1202 10.7749C19.2104 10.6647 19.3219 10.5739 19.448 10.5077C19.5741 10.4416 19.7123 10.4016 19.8542 10.39C19.9962 10.3785 20.139 10.3957 20.2741 10.4405C20.4092 10.4854 20.534 10.557 20.6408 10.6512C20.7477 10.7453 20.8344 10.86 20.896 10.9884C20.9575 11.1168 20.9925 11.2563 20.9989 11.3986C21.0053 11.5409 20.983 11.6829 20.9333 11.8164C20.8836 11.9498 20.8075 12.0719 20.7095 12.1752L13.4702 20.4002C13.3046 20.5886 13.1007 20.7396 12.8722 20.8431C12.6437 20.9465 12.3957 21 12.1448 21C11.894 21 11.646 20.9465 11.4175 20.8431C11.1889 20.7396 10.9851 20.5886 10.8195 20.4002L3.58012 12.1745C3.48821 12.0701 3.41777 11.9486 3.37282 11.817C3.32786 11.6854 3.30927 11.5462 3.31812 11.4073C3.32697 11.2685 3.36307 11.1328 3.42437 11.008C3.48567 10.8831 3.57096 10.7716 3.67538 10.6797Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$7 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 24C14.3734 24 16.6934 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0865 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.807 1.83649 16.6689 0.693603 14.3411 0.23058C12.0133 -0.232442 9.60051 0.00519817 7.4078 0.913449C5.21508 1.8217 3.34094 3.35977 2.02236 5.33316C0.703786 7.30655 -2.55814e-06 9.62662 -2.76562e-06 12C0.00343781 15.1815 1.26882 18.2318 3.51851 20.4815C5.76821 22.7312 8.81845 23.9966 12 24V24ZM6.793 10.293L11.293 5.793C11.4805 5.60553 11.7348 5.50022 12 5.50022C12.2652 5.50022 12.5195 5.60553 12.707 5.793L17.207 10.293C17.3892 10.4816 17.4899 10.7342 17.4877 10.9964C17.4854 11.2586 17.3802 11.5094 17.1948 11.6948C17.0094 11.8802 16.7586 11.9854 16.4964 11.9877C16.2342 11.99 15.9816 11.8892 15.793 11.707L13.427 9.341C13.3919 9.30582 13.3471 9.2819 13.2984 9.27228C13.2497 9.26265 13.1992 9.26777 13.1533 9.28698C13.1075 9.30619 13.0685 9.33861 13.0411 9.38012C13.0138 9.42162 12.9995 9.47032 13 9.52L13 18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18L11 9.52C11.0001 9.47049 10.9855 9.42207 10.958 9.38088C10.9305 9.33968 10.8915 9.30757 10.8457 9.28861C10.8 9.26965 10.7497 9.2647 10.7011 9.27438C10.6525 9.28407 10.608 9.30795 10.573 9.343L8.207 11.709C8.01839 11.8912 7.76579 11.992 7.5036 11.9897C7.2414 11.9874 6.99059 11.8822 6.80518 11.6968C6.61977 11.5114 6.5146 11.2606 6.51232 10.9984C6.51004 10.7362 6.61084 10.4836 6.793 10.295L6.793 10.293Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$8 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.3246 13.3203C20.1137 13.506 19.8376 13.6003 19.5571 13.5824C19.2766 13.5645 19.0148 13.436 18.829 13.2251L13.2427 6.87674C13.2174 6.84841 13.184 6.82842 13.1471 6.81941C13.1101 6.8104 13.0713 6.81279 13.0358 6.82627C13.0002 6.83975 12.9696 6.86368 12.9479 6.89491C12.9262 6.92615 12.9144 6.96322 12.9142 7.00124V19.9409C12.9142 20.2218 12.8026 20.4912 12.604 20.6898C12.4054 20.8884 12.136 21 11.8552 21C11.5743 21 11.3049 20.8884 11.1063 20.6898C10.9077 20.4912 10.7961 20.2218 10.7961 19.9409V7.00124C10.7959 6.96322 10.7842 6.92615 10.7625 6.89491C10.7408 6.86368 10.7101 6.83975 10.6746 6.82627C10.639 6.81279 10.6002 6.8104 10.5633 6.81941C10.5263 6.82842 10.493 6.84841 10.4676 6.87674L4.87979 13.2251C4.78957 13.3353 4.67808 13.4261 4.55197 13.4923C4.42585 13.5584 4.28771 13.5984 4.14578 13.61C4.00385 13.6215 3.86104 13.6043 3.7259 13.5595C3.59075 13.5146 3.46603 13.443 3.35919 13.3488C3.25234 13.2547 3.16557 13.14 3.10404 13.0116C3.04251 12.8832 3.00749 12.7437 3.00108 12.6014C2.99466 12.4591 3.01698 12.3171 3.0667 12.1836C3.11642 12.0502 3.19252 11.9281 3.29045 11.8248L10.5298 3.59981C10.6954 3.41135 10.8993 3.26036 11.1278 3.15693C11.3563 3.0535 11.6043 3 11.8552 3C12.106 3 12.354 3.0535 12.5825 3.15693C12.8111 3.26036 13.0149 3.41135 13.1805 3.59981L20.4199 11.8255C20.5118 11.9299 20.5822 12.0514 20.6272 12.183C20.6721 12.3146 20.6907 12.4538 20.6819 12.5927C20.673 12.7315 20.6369 12.8672 20.5756 12.992C20.5143 13.1169 20.429 13.2284 20.3246 13.3203Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$9 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.2236 21.7764C7.64734 23.2001 9.57836 24 11.5918 24C13.6053 24 15.5363 23.2001 16.9601 21.7764C18.3838 20.3527 19.1837 18.4216 19.1837 16.4082L19.1837 8.32751C19.1837 7.7865 18.7451 7.34792 18.2041 7.34792C17.6631 7.34792 17.2245 7.7865 17.2245 8.32751L17.2245 16.4082C17.2245 17.902 16.6311 19.3347 15.5747 20.391C14.5184 21.4474 13.0857 22.0408 11.5918 22.0408C10.098 22.0408 8.66528 21.4474 7.60895 20.3911C6.55262 19.3347 5.95918 17.902 5.95918 16.4082L5.95918 5.38775C5.95918 4.47844 6.32041 3.60637 6.96339 2.96339C7.60637 2.32041 8.47844 1.95918 9.38775 1.95918C10.2971 1.95918 11.1691 2.32041 11.8121 2.96339C12.4551 3.60637 12.8163 4.47844 12.8163 5.38775L12.8163 16.4082C12.8163 16.7329 12.6873 17.0444 12.4577 17.274C12.228 17.5036 11.9166 17.6327 11.5918 17.6327C11.2671 17.6327 10.9556 17.5036 10.726 17.274C10.4964 17.0444 10.3673 16.7329 10.3673 16.4082L10.3673 6.85714C10.3673 6.31613 9.92877 5.87755 9.38775 5.87755C8.84674 5.87755 8.40816 6.31613 8.40816 6.85714L8.40816 16.4082C8.40816 17.2525 8.74359 18.0623 9.34064 18.6594C9.93769 19.2564 10.7475 19.5918 11.5918 19.5918C12.4362 19.5918 13.246 19.2564 13.843 18.6594C14.4401 18.0623 14.7755 17.2525 14.7755 16.4082L14.7755 5.38775C14.7755 3.95883 14.2079 2.58844 13.1975 1.57804C12.1871 0.567638 10.8167 -5.95933e-07 9.38775 -4.71013e-07C7.95883 -3.46092e-07 6.58843 0.567638 5.57803 1.57804C4.56763 2.58844 4 3.95883 4 5.38775L4 16.4082C4 18.4216 4.79985 20.3527 6.2236 21.7764Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$a = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M13.3203 3.67538C13.506 3.88635 13.6003 4.16243 13.5824 4.44289C13.5645 4.72336 13.436 4.98524 13.2251 5.17096L6.87674 10.7573C6.84841 10.7826 6.82842 10.816 6.81941 10.8529C6.8104 10.8899 6.81279 10.9287 6.82627 10.9642C6.83975 10.9998 6.86368 11.0304 6.89491 11.0521C6.92615 11.0738 6.96322 11.0856 7.00124 11.0858L19.9409 11.0858C20.2218 11.0858 20.4912 11.1974 20.6898 11.396C20.8884 11.5946 21 11.864 21 12.1448C21 12.4257 20.8884 12.6951 20.6898 12.8937C20.4912 13.0923 20.2218 13.2039 19.9409 13.2039L7.00124 13.2039C6.96322 13.2041 6.92615 13.2158 6.89491 13.2375C6.86368 13.2592 6.83975 13.2899 6.82627 13.3254C6.81279 13.361 6.8104 13.3998 6.81941 13.4367C6.82842 13.4737 6.84841 13.507 6.87674 13.5324L13.2251 19.1202C13.3353 19.2104 13.4261 19.3219 13.4923 19.448C13.5584 19.5741 13.5984 19.7123 13.61 19.8542C13.6215 19.9962 13.6043 20.139 13.5595 20.2741C13.5146 20.4092 13.443 20.534 13.3488 20.6408C13.2547 20.7477 13.14 20.8344 13.0116 20.896C12.8832 20.9575 12.7437 20.9925 12.6014 20.9989C12.4591 21.0053 12.3171 20.983 12.1836 20.9333C12.0502 20.8836 11.9281 20.8075 11.8248 20.7095L3.59981 13.4702C3.41135 13.3046 3.26036 13.1007 3.15693 12.8722C3.0535 12.6437 3 12.3957 3 12.1448C3 11.894 3.0535 11.646 3.15693 11.4175C3.26036 11.1889 3.41135 10.9851 3.59981 10.8195L11.8255 3.58012C11.9299 3.48821 12.0514 3.41777 12.183 3.37282C12.3146 3.32786 12.4538 3.30927 12.5927 3.31812C12.7315 3.32697 12.8672 3.36307 12.992 3.42437C13.1169 3.48567 13.2284 3.57096 13.3203 3.67538Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$b = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.838 6.06913C1.67399 6.19727 1.55404 6.3734 1.4949 6.57296C1.43575 6.77252 1.44035 6.98556 1.50805 7.18238C1.57575 7.37921 1.70317 7.55 1.87256 7.67095C2.04195 7.7919 2.24486 7.85699 2.453 7.85713H21.653C21.8571 7.85731 22.0564 7.79503 22.224 7.67866C22.3917 7.56229 22.5198 7.39739 22.591 7.20613C22.6623 7.00299 22.6676 6.78254 22.6062 6.57621C22.5448 6.36989 22.4198 6.18822 22.249 6.05713L13.168 0.245127C13.003 0.0996628 12.7939 0.0138758 12.5743 0.0015436C12.3546 -0.0107886 12.1373 0.0510496 11.957 0.177127L1.9 6.03113C1.87801 6.04149 1.85722 6.05423 1.838 6.06913ZM10.2071 11.2062C10.0196 11.3938 9.76522 11.4991 9.5 11.4991H8.75C8.6837 11.4991 8.62011 11.5255 8.57322 11.5724C8.52634 11.6192 8.5 11.6828 8.5 11.7491V16.7491C8.5 16.8154 8.52634 16.879 8.57322 16.9259C8.62011 16.9728 8.6837 16.9991 8.75 16.9991H9.5C9.76522 16.9991 10.0196 17.1045 10.2071 17.292C10.3946 17.4796 10.5 17.7339 10.5 17.9991C10.5 18.2643 10.3946 18.5187 10.2071 18.7062C10.0196 18.8938 9.76522 18.9991 9.5 18.9991H3.5C3.23478 18.9991 2.98043 18.8938 2.79289 18.7062C2.60536 18.5187 2.5 18.2643 2.5 17.9991C2.5 17.7339 2.60536 17.4796 2.79289 17.292C2.98043 17.1045 3.23478 16.9991 3.5 16.9991H4.25C4.3163 16.9991 4.37989 16.9728 4.42678 16.9259C4.47366 16.879 4.5 16.8154 4.5 16.7491V11.7491C4.5 11.6828 4.47366 11.6192 4.42678 11.5724C4.37989 11.5255 4.3163 11.4991 4.25 11.4991H3.5C3.23478 11.4991 2.98043 11.3938 2.79289 11.2062C2.60536 11.0187 2.5 10.7643 2.5 10.4991C2.5 10.2339 2.60536 9.97956 2.79289 9.79202C2.98043 9.60449 3.23478 9.49913 3.5 9.49913H9.5C9.76522 9.49913 10.0196 9.60449 10.2071 9.79202C10.3946 9.97956 10.5 10.2339 10.5 10.4991C10.5 10.7643 10.3946 11.0187 10.2071 11.2062ZM21.2071 11.2062C21.0196 11.3938 20.7652 11.4991 20.5 11.4991H19.75C19.6837 11.4991 19.6201 11.5255 19.5732 11.5724C19.5263 11.6192 19.5 11.6828 19.5 11.7491V16.7491C19.5 16.8154 19.5263 16.879 19.5732 16.9259C19.6201 16.9728 19.6837 16.9991 19.75 16.9991H20.5C20.7652 16.9991 21.0196 17.1045 21.2071 17.292C21.3946 17.4796 21.5 17.7339 21.5 17.9991C21.5 18.2643 21.3946 18.5187 21.2071 18.7062C21.0196 18.8938 20.7652 18.9991 20.5 18.9991H14.5C14.2348 18.9991 13.9804 18.8938 13.7929 18.7062C13.6054 18.5187 13.5 18.2643 13.5 17.9991C13.5 17.7339 13.6054 17.4796 13.7929 17.292C13.9804 17.1045 14.2348 16.9991 14.5 16.9991H15.25C15.3163 16.9991 15.3799 16.9728 15.4268 16.9259C15.4737 16.879 15.5 16.8154 15.5 16.7491V11.7491C15.5 11.6828 15.4737 11.6192 15.4268 11.5724C15.3799 11.5255 15.3163 11.4991 15.25 11.4991H14.5C14.2348 11.4991 13.9804 11.3938 13.7929 11.2062C13.6054 11.0187 13.5 10.7643 13.5 10.4991C13.5 10.2339 13.6054 9.97956 13.7929 9.79202C13.9804 9.60449 14.2348 9.49913 14.5 9.49913H20.5C20.7652 9.49913 21.0196 9.60449 21.2071 9.79202C21.3946 9.97956 21.5 10.2339 21.5 10.4991C21.5 10.7643 21.3946 11.0187 21.2071 11.2062ZM1.5 20.4991H22.5C22.7761 20.4991 23 20.723 23 20.9991V23.4991C23 23.7753 22.7761 23.9991 22.5 23.9991H1.5C1.22386 23.9991 1 23.7753 1 23.4991V20.9991C1 20.723 1.22386 20.4991 1.5 20.4991Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$c = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.56526 4C1.14851 4 0 5.14851 0 6.56526V17.54C0 18.9568 1.14851 20.1053 2.56526 20.1053H21.4347C22.8515 20.1053 24 18.9568 24 17.54V6.56526C24 5.14851 22.8515 4 21.4347 4H2.56526ZM1.89474 6.56526C1.89474 6.19494 2.19494 5.89474 2.56526 5.89474H21.4347C21.8051 5.89474 22.1053 6.19494 22.1053 6.56526V17.54C22.1053 17.9103 21.8051 18.2105 21.4347 18.2105H2.56526C2.19494 18.2105 1.89474 17.9103 1.89474 17.54V6.56526ZM5.05263 8.10526C5.05263 7.58205 4.62848 7.15789 4.10526 7.15789C3.58205 7.15789 3.15789 7.58205 3.15789 8.10526V16C3.15789 16.5232 3.58205 16.9474 4.10526 16.9474C4.62848 16.9474 5.05263 16.5232 5.05263 16V8.10526ZM8.11579 8.05789C8.11579 7.56084 7.71285 7.15789 7.21579 7.15789C6.71873 7.15789 6.31579 7.56084 6.31579 8.05789V12.5579C6.31579 13.055 6.71873 13.4579 7.21579 13.4579C7.71285 13.4579 8.11579 13.055 8.11579 12.5579V8.05789ZM13.5316 7.15789C14.0286 7.15789 14.4316 7.56084 14.4316 8.05789V12.5579C14.4316 13.055 14.0286 13.4579 13.5316 13.4579C13.0345 13.4579 12.6316 13.055 12.6316 12.5579V8.05789C12.6316 7.56084 13.0345 7.15789 13.5316 7.15789ZM17.5895 8.05789C17.5895 7.56084 17.1865 7.15789 16.6895 7.15789C16.1924 7.15789 15.7895 7.56084 15.7895 8.05789V12.5579C15.7895 13.055 16.1924 13.4579 16.6895 13.4579C17.1865 13.4579 17.5895 13.055 17.5895 12.5579V8.05789ZM19.8474 7.15789C20.3444 7.15789 20.7474 7.56084 20.7474 8.05789V15.5579C20.7474 16.055 20.3444 16.4579 19.8474 16.4579C19.3503 16.4579 18.9474 16.055 18.9474 15.5579V8.05789C18.9474 7.56084 19.3503 7.15789 19.8474 7.15789ZM11.2737 8.05789C11.2737 7.56084 10.8707 7.15789 10.3737 7.15789C9.87663 7.15789 9.47368 7.56084 9.47368 8.05789V12.5579C9.47368 13.055 9.87663 13.4579 10.3737 13.4579C10.8707 13.4579 11.2737 13.055 11.2737 12.5579V8.05789ZM6.31579 15.9526C6.31579 15.4556 6.71873 15.0526 7.21579 15.0526H16.2158C16.7128 15.0526 17.1158 15.4556 17.1158 15.9526C17.1158 16.4497 16.7128 16.8526 16.2158 16.8526H7.21579C6.71873 16.8526 6.31579 16.4497 6.31579 15.9526Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$d = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 5.5H7.5C7.63261 5.5 7.75979 5.44732 7.85355 5.35355C7.94732 5.25979 8 5.13261 8 5V4C8 3.73478 7.89464 3.48043 7.70711 3.29289C7.51957 3.10536 7.26522 3 7 3H5.25C5.11739 3 4.99021 2.94732 4.89645 2.85355C4.80268 2.75979 4.75 2.63261 4.75 2.5V1C4.75 0.734784 4.64464 0.48043 4.45711 0.292893C4.26957 0.105357 4.01522 0 3.75 0C3.48478 0 3.23043 0.105357 3.04289 0.292893C2.85536 0.48043 2.75 0.734784 2.75 1V2.5C2.75 2.63261 2.69732 2.75979 2.60355 2.85355C2.50979 2.94732 2.38261 3 2.25 3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V5C1 5.13261 1.05268 5.25979 1.14645 5.35355C1.24021 5.44732 1.36739 5.5 1.5 5.5ZM17.5 8H22.5C22.6326 8 22.7598 7.94732 22.8536 7.85355C22.9473 7.75979 23 7.63261 23 7.5V7C23 6.73478 22.8946 6.48043 22.7071 6.29289C22.5196 6.10536 22.2652 6 22 6H18C17.7348 6 17.4804 6.10536 17.2929 6.29289C17.1054 6.48043 17 6.73478 17 7V7.5C17 7.63261 17.0527 7.75979 17.1464 7.85355C17.2402 7.94732 17.3674 8 17.5 8ZM1 7H8C8.26522 7 8.51957 7.10536 8.70711 7.29289C8.89464 7.48043 9 7.73478 9 8V23C9 23.2652 8.89464 23.5196 8.70711 23.7071C8.51957 23.8946 8.26522 24 8 24H6.5C6.36739 24 6.24021 23.9473 6.14645 23.8536C6.05268 23.7598 6 23.6326 6 23.5V21.5C6 21.2348 5.89464 20.9804 5.70711 20.7929C5.51957 20.6054 5.26522 20.5 5 20.5H4C3.73478 20.5 3.48043 20.6054 3.29289 20.7929C3.10536 20.9804 3 21.2348 3 21.5V23.5C3 23.6326 2.94732 23.7598 2.85355 23.8536C2.75979 23.9473 2.63261 24 2.5 24H1C0.734784 24 0.48043 23.8946 0.292893 23.7071C0.105357 23.5196 0 23.2652 0 23V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7ZM2.25 17.75H6.75C6.94891 17.75 7.13968 17.671 7.28033 17.5303C7.42098 17.3897 7.5 17.1989 7.5 17C7.5 16.8011 7.42098 16.6103 7.28033 16.4697C7.13968 16.329 6.94891 16.25 6.75 16.25H2.25C2.05109 16.25 1.86032 16.329 1.71967 16.4697C1.57902 16.6103 1.5 16.8011 1.5 17C1.5 17.1989 1.57902 17.3897 1.71967 17.5303C1.86032 17.671 2.05109 17.75 2.25 17.75ZM2.25 14.25H6.75C6.94891 14.25 7.13968 14.171 7.28033 14.0303C7.42098 13.8897 7.5 13.6989 7.5 13.5C7.5 13.3011 7.42098 13.1103 7.28033 12.9697C7.13968 12.829 6.94891 12.75 6.75 12.75H2.25C2.05109 12.75 1.86032 12.829 1.71967 12.9697C1.57902 13.1103 1.5 13.3011 1.5 13.5C1.5 13.6989 1.57902 13.8897 1.71967 14.0303C1.86032 14.171 2.05109 14.25 2.25 14.25ZM2.25 10.75H6.75C6.94891 10.75 7.13968 10.671 7.28033 10.5303C7.42098 10.3897 7.5 10.1989 7.5 10C7.5 9.80109 7.42098 9.61032 7.28033 9.46967C7.13968 9.32902 6.94891 9.25 6.75 9.25H2.25C2.05109 9.25 1.86032 9.32902 1.71967 9.46967C1.57902 9.61032 1.5 9.80109 1.5 10C1.5 10.1989 1.57902 10.3897 1.71967 10.5303C1.86032 10.671 2.05109 10.75 2.25 10.75ZM23 9.5H17C16.7348 9.5 16.4804 9.60536 16.2929 9.79289C16.1054 9.98043 16 10.2348 16 10.5V23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24H18C18.1326 24 18.2598 23.9473 18.3536 23.8536C18.4473 23.7598 18.5 23.6326 18.5 23.5V21.5C18.5 21.2348 18.6054 20.9804 18.7929 20.7929C18.9804 20.6054 19.2348 20.5 19.5 20.5H20.5C20.7652 20.5 21.0196 20.6054 21.2071 20.7929C21.3946 20.9804 21.5 21.2348 21.5 21.5V23.5C21.5 23.6326 21.5527 23.7598 21.6464 23.8536C21.7402 23.9473 21.8674 24 22 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V10.5C24 10.2348 23.8946 9.98043 23.7071 9.79289C23.5196 9.60536 23.2652 9.5 23 9.5ZM21.75 17.75H18.25C18.0511 17.75 17.8603 17.671 17.7197 17.5303C17.579 17.3897 17.5 17.1989 17.5 17C17.5 16.8011 17.579 16.6103 17.7197 16.4697C17.8603 16.329 18.0511 16.25 18.25 16.25H21.75C21.9489 16.25 22.1397 16.329 22.2803 16.4697C22.421 16.6103 22.5 16.8011 22.5 17C22.5 17.1989 22.421 17.3897 22.2803 17.5303C22.1397 17.671 21.9489 17.75 21.75 17.75ZM21.75 13.75H18.25C18.0511 13.75 17.8603 13.671 17.7197 13.5303C17.579 13.3897 17.5 13.1989 17.5 13C17.5 12.8011 17.579 12.6103 17.7197 12.4697C17.8603 12.329 18.0511 12.25 18.25 12.25H21.75C21.9489 12.25 22.1397 12.329 22.2803 12.4697C22.421 12.6103 22.5 12.8011 22.5 13C22.5 13.1989 22.421 13.3897 22.2803 13.5303C22.1397 13.671 21.9489 13.75 21.75 13.75ZM11 14H14C14.2761 14 14.5 14.2239 14.5 14.5V23.5C14.5 23.7761 14.2761 24 14 24H11C10.7239 24 10.5 23.7761 10.5 23.5V14.5C10.5 14.2239 10.7239 14 11 14Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$e = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M11.8859 11.3812C11.9889 9.80534 13.2064 8.52832 14.7761 8.35266H15.924C16.0633 8.35266 16.1763 8.2396 16.1763 8.10028C16.1834 3.63322 12.5673 0.00707688 8.10028 1.03395e-05C3.63322 -0.0070562 0.00707688 3.60899 1.03395e-05 8.07606C-0.0070562 12.5431 3.60899 16.1693 8.07606 16.1763C9.35207 16.1783 10.6099 15.8785 11.7476 15.3011C11.8324 15.2577 11.8859 15.1709 11.8859 15.076V11.3812ZM6.45984 11.8859C6.0419 11.8859 5.70271 11.5467 5.70271 11.1288C5.70271 10.7109 6.0419 10.3717 6.45984 10.3717H8.51216C8.84227 10.3707 9.10878 10.1021 9.10878 9.77304C9.10777 9.52974 8.95937 9.31068 8.73425 9.21983L6.65164 8.38698C5.57147 7.95895 5.0435 6.73644 5.47153 5.65627C5.734 4.99303 6.31548 4.50846 7.01507 4.36814C7.13318 4.34492 7.21697 4.24094 7.21697 4.12081V3.80989C7.21697 3.39195 7.55616 3.05276 7.9741 3.05276C8.39203 3.05276 8.73123 3.39195 8.73123 3.80989V4.06226C8.73123 4.20157 8.84429 4.31464 8.9836 4.31464H9.48836C9.90629 4.31464 10.2455 4.65383 10.2455 5.07177C10.2455 5.4897 9.90629 5.8289 9.48836 5.8289H7.43603C7.10592 5.82991 6.83941 6.09843 6.83941 6.42753C6.84042 6.67082 6.98781 6.88888 7.21394 6.98074L9.29655 7.81358C10.3767 8.24162 10.9047 9.46413 10.4767 10.5443C10.2142 11.2075 9.63271 11.6921 8.93313 11.8324C8.81501 11.8556 8.73123 11.9596 8.73123 12.0798V12.3907C8.73123 12.8086 8.39203 13.1478 7.9741 13.1478C7.55616 13.1478 7.21697 12.8086 7.21697 12.3907V12.1383C7.21697 11.999 7.1039 11.8859 6.96459 11.8859H6.45984ZM22.624 9.86692H14.7761C14.1079 9.86692 13.4002 10.8522 13.4002 11.3812V22.4857C13.4002 23.0147 14.1068 24 14.7761 24H22.624C23.2923 24 24 23.0147 24 22.4857V11.3812C24 10.8522 23.2923 9.86692 22.624 9.86692ZM21.2239 21.4863C20.8059 21.4863 20.4667 21.1471 20.4667 20.7292C20.4667 20.3113 20.8059 19.9721 21.2239 19.9721C21.6418 19.9721 21.981 20.3113 21.981 20.7292C21.981 21.1471 21.6418 21.4863 21.2239 21.4863ZM15.4192 20.7292C15.4192 20.3113 15.7584 19.9721 16.1763 19.9721C16.5943 19.9721 16.9335 20.3113 16.9335 20.7292C16.9335 21.1471 16.5943 21.4863 16.1763 21.4863C15.7584 21.4863 15.4192 21.1471 15.4192 20.7292ZM15.4192 18.1953C15.4192 17.7774 15.7584 17.4382 16.1763 17.4382C16.5943 17.4382 16.9335 17.7774 16.9335 18.1953C16.9335 18.6133 16.5943 18.9525 16.1763 18.9525C15.7584 18.9525 15.4192 18.6133 15.4192 18.1953ZM17.943 20.7292C17.943 20.3113 18.2822 19.9721 18.7001 19.9721C19.118 19.9721 19.4572 20.3113 19.4572 20.7292C19.4572 21.1471 19.118 21.4863 18.7001 21.4863C18.2822 21.4863 17.943 21.1471 17.943 20.7292ZM17.943 18.1953C17.943 17.7774 18.2822 17.4382 18.7001 17.4382C19.118 17.4382 19.4572 17.7774 19.4572 18.1953C19.4572 18.6133 19.118 18.9525 18.7001 18.9525C18.2822 18.9525 17.943 18.6133 17.943 18.1953ZM21.2239 18.9525C20.8059 18.9525 20.4667 18.6133 20.4667 18.1953C20.4667 17.7774 20.8059 17.4382 21.2239 17.4382C21.6418 17.4382 21.981 17.7774 21.981 18.1953C21.981 18.6133 21.6418 18.9525 21.2239 18.9525ZM21.4762 15.4192H15.924C15.6534 15.4192 15.3849 15.1981 15.3849 14.7226V12.3907C15.3849 11.9142 15.6554 11.7173 15.926 11.7173H21.4783C21.7488 11.7173 22.0194 11.9192 22.0194 12.3907V14.7459C22.0173 15.2223 21.7468 15.4192 21.4762 15.4192Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$f = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21 3C21 2.20435 20.6839 1.44129 20.1213 0.87868C19.5587 0.31607 18.7956 0 18 0L6 0C5.20435 0 4.44129 0.31607 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V3ZM12 14C12.1978 14 12.3911 14.0586 12.5556 14.1685C12.72 14.2784 12.8482 14.4346 12.9239 14.6173C12.9996 14.8 13.0194 15.0011 12.9808 15.1951C12.9422 15.3891 12.847 15.5673 12.7071 15.7071C12.5673 15.847 12.3891 15.9422 12.1951 15.9808C12.0011 16.0194 11.8 15.9996 11.6173 15.9239C11.4346 15.8482 11.2784 15.72 11.1685 15.5556C11.0586 15.3911 11 15.1978 11 15C11 14.7348 11.1054 14.4804 11.2929 14.2929C11.4804 14.1054 11.7348 14 12 14ZM11 10.5C11 10.3022 11.0586 10.1089 11.1685 9.94443C11.2784 9.77998 11.4346 9.65181 11.6173 9.57612C11.8 9.50043 12.0011 9.48063 12.1951 9.51921C12.3891 9.5578 12.5673 9.65304 12.7071 9.79289C12.847 9.93275 12.9422 10.1109 12.9808 10.3049C13.0194 10.4989 12.9996 10.7 12.9239 10.8827C12.8482 11.0654 12.72 11.2216 12.5556 11.3315C12.3911 11.4414 12.1978 11.5 12 11.5C11.7348 11.5 11.4804 11.3946 11.2929 11.2071C11.1054 11.0196 11 10.7652 11 10.5ZM16.5 18.75C16.6989 18.75 16.8897 18.829 17.0303 18.9697C17.171 19.1103 17.25 19.3011 17.25 19.5C17.25 19.6989 17.171 19.8897 17.0303 20.0303C16.8897 20.171 16.6989 20.25 16.5 20.25H11C10.8011 20.25 10.6103 20.171 10.4697 20.0303C10.329 19.8897 10.25 19.6989 10.25 19.5C10.25 19.3011 10.329 19.1103 10.4697 18.9697C10.6103 18.829 10.8011 18.75 11 18.75H16.5ZM16.5 16C16.3022 16 16.1089 15.9414 15.9444 15.8315C15.78 15.7216 15.6518 15.5654 15.5761 15.3827C15.5004 15.2 15.4806 14.9989 15.5192 14.8049C15.5578 14.6109 15.653 14.4327 15.7929 14.2929C15.9327 14.153 16.1109 14.0578 16.3049 14.0192C16.4989 13.9806 16.7 14.0004 16.8827 14.0761C17.0654 14.1518 17.2216 14.28 17.3315 14.4444C17.4414 14.6089 17.5 14.8022 17.5 15C17.5 15.2652 17.3946 15.5196 17.2071 15.7071C17.0196 15.8946 16.7652 16 16.5 16ZM16.5 11.5C16.3022 11.5 16.1089 11.4414 15.9444 11.3315C15.78 11.2216 15.6518 11.0654 15.5761 10.8827C15.5004 10.7 15.4806 10.4989 15.5192 10.3049C15.5578 10.1109 15.653 9.93275 15.7929 9.79289C15.9327 9.65304 16.1109 9.5578 16.3049 9.51921C16.4989 9.48063 16.7 9.50043 16.8827 9.57612C17.0654 9.65181 17.2216 9.77998 17.3315 9.94443C17.4414 10.1089 17.5 10.3022 17.5 10.5C17.5 10.7652 17.3946 11.0196 17.2071 11.2071C17.0196 11.3946 16.7652 11.5 16.5 11.5ZM7.5 16C7.30222 16 7.10888 15.9414 6.94443 15.8315C6.77998 15.7216 6.65181 15.5654 6.57612 15.3827C6.50043 15.2 6.48063 14.9989 6.51921 14.8049C6.5578 14.6109 6.65304 14.4327 6.79289 14.2929C6.93275 14.153 7.11093 14.0578 7.30491 14.0192C7.49889 13.9806 7.69996 14.0004 7.88268 14.0761C8.06541 14.1518 8.22159 14.28 8.33147 14.4444C8.44135 14.6089 8.5 14.8022 8.5 15C8.5 15.2652 8.39464 15.5196 8.20711 15.7071C8.01957 15.8946 7.76522 16 7.5 16ZM8.5 19.5C8.5 19.6978 8.44135 19.8911 8.33147 20.0556C8.22159 20.22 8.06541 20.3482 7.88268 20.4239C7.69996 20.4996 7.49889 20.5194 7.30491 20.4808C7.11093 20.4422 6.93275 20.347 6.79289 20.2071C6.65304 20.0673 6.5578 19.8891 6.51921 19.6951C6.48063 19.5011 6.50043 19.3 6.57612 19.1173C6.65181 18.9346 6.77998 18.7784 6.94443 18.6685C7.10888 18.5586 7.30222 18.5 7.5 18.5C7.76522 18.5 8.01957 18.6054 8.20711 18.7929C8.39464 18.9804 8.5 19.2348 8.5 19.5ZM7.5 11.5C7.30222 11.5 7.10888 11.4414 6.94443 11.3315C6.77998 11.2216 6.65181 11.0654 6.57612 10.8827C6.50043 10.7 6.48063 10.4989 6.51921 10.3049C6.5578 10.1109 6.65304 9.93275 6.79289 9.79289C6.93275 9.65304 7.11093 9.5578 7.30491 9.51921C7.49889 9.48063 7.69996 9.50043 7.88268 9.57612C8.06541 9.65181 8.22159 9.77998 8.33147 9.94443C8.44135 10.1089 8.5 10.3022 8.5 10.5C8.5 10.7652 8.39464 11.0196 8.20711 11.2071C8.01957 11.3946 7.76522 11.5 7.5 11.5ZM6 2H18C18.2652 2 18.5196 2.10536 18.7071 2.29289C18.8946 2.48043 19 2.73478 19 3V6.25C19 6.3163 18.9737 6.37989 18.9268 6.42678C18.8799 6.47366 18.8163 6.5 18.75 6.5H5.25C5.1837 6.5 5.12011 6.47366 5.07322 6.42678C5.02634 6.37989 5 6.3163 5 6.25V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$g = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.5 3H18.75C18.612 3 18.5 2.888 18.5 2.75V1C18.5 0.448 18.052 0 17.5 0C16.948 0 16.5 0.448 16.5 1V5.75C16.5 6.164 16.164 6.5 15.75 6.5C15.336 6.5 15 6.164 15 5.75V3.5C15 3.224 14.776 3 14.5 3H8.25C8.112 3 8.001 2.889 8 2.751V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V5.75C6 6.164 5.664 6.5 5.25 6.5C4.836 6.5 4.5 6.164 4.5 5.75V3.5C4.5 3.224 4.276 3 4 3H2.5C1.395 3 0.5 3.895 0.5 5V22C0.5 23.105 1.395 24 2.5 24H21.5C22.605 24 23.5 23.105 23.5 22V5C23.5 3.895 22.605 3 21.5 3ZM21 22H3C2.724 22 2.5 21.776 2.5 21.5V9.5C2.5 9.224 2.724 9 3 9H21C21.276 9 21.5 9.224 21.5 9.5V21.5C21.5 21.776 21.276 22 21 22Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$h = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "26",
        height: "24",
        viewBox: "0 0 26 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.5 5.125L3.5 5.109C3.36739 5.109 3.24021 5.05632 3.14645 4.96255C3.05268 4.86879 3 4.74161 3 4.609V4.375C3 3.97718 3.15804 3.59564 3.43934 3.31434C3.72064 3.03304 4.10218 2.875 4.5 2.875H5.5C5.89782 2.875 6.27936 3.03304 6.56066 3.31434C6.84196 3.59564 7 3.97718 7 4.375V4.625C7 4.75761 6.94732 4.88479 6.85355 4.97855C6.75979 5.07232 6.63261 5.125 6.5 5.125ZM22.4436 6.125H21.1276C21.0222 6.12126 20.9203 6.08641 20.8347 6.02483C20.7491 5.96326 20.6836 5.87772 20.6465 5.779L20.6455 5.77675C20.0278 4.47345 19.3888 3.125 17.9995 3.125H12.9995C11.9285 3.125 11.3635 3.903 10.3405 5.316C10.273 5.40874 10.2134 5.49389 10.1593 5.57126C9.90576 5.93352 9.77177 6.125 9.49655 6.125H3.49655C1.43355 6.125 0.99955 7.334 0.99955 8.348V18.736C0.976346 19.0703 1.02799 19.4056 1.15072 19.7175C1.27345 20.0294 1.46418 20.3099 1.70903 20.5388C1.95387 20.7676 2.24666 20.939 2.56609 21.0404C2.88552 21.1418 3.22354 21.1707 3.55555 21.125H22.4436C22.7756 21.1707 23.1136 21.1418 23.433 21.0404C23.7524 20.939 24.0452 20.7676 24.2901 20.5388C24.5349 20.3099 24.7256 20.0294 24.8484 19.7175C24.9711 19.4056 25.0228 19.0703 24.9995 18.736V8.348C24.9995 7.334 24.5566 6.125 22.4436 6.125ZM21.4995 13.125C21.4995 14.2622 21.1623 15.3739 20.5305 16.3195C19.8987 17.2651 19.0007 18.0021 17.95 18.4373C16.8993 18.8725 15.7432 18.9864 14.6278 18.7645C13.5124 18.5427 12.4878 17.995 11.6837 17.1909C10.8795 16.3867 10.3319 15.3622 10.11 14.2468C9.88817 13.1314 10.002 11.9752 10.4372 10.9246C10.8724 9.87389 11.6094 8.97587 12.555 8.34405C13.5006 7.71223 14.6123 7.375 15.7495 7.375C17.2741 7.37659 18.7357 7.9829 19.8137 9.06089C20.8916 10.1389 21.498 11.6005 21.4995 13.125ZM5.99955 9.875C5.99955 10.1222 5.92624 10.3639 5.78889 10.5695C5.65154 10.775 5.45631 10.9352 5.2279 11.0298C4.9995 11.1245 4.74816 11.1492 4.50569 11.101C4.26321 11.0528 4.04048 10.9337 3.86567 10.7589C3.69085 10.5841 3.5718 10.3613 3.52357 10.1189C3.47534 9.87639 3.50009 9.62505 3.5947 9.39665C3.68931 9.16824 3.84953 8.97301 4.05509 8.83566C4.26065 8.69831 4.50232 8.625 4.74955 8.625C5.08107 8.625 5.39901 8.7567 5.63343 8.99112C5.86785 9.22554 5.99955 9.54348 5.99955 9.875ZM15.75 16.875C17.8211 16.875 19.5 15.1961 19.5 13.125C19.5 11.0539 17.8211 9.375 15.75 9.375C13.6789 9.375 12 11.0539 12 13.125C12 15.1961 13.6789 16.875 15.75 16.875Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$i = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.0271 4.25C17.0343 4.25 17.0413 4.24719 17.0465 4.24216C17.0517 4.23712 17.0548 4.23025 17.0551 4.223V3.917C17.058 3.27992 16.8081 2.66769 16.3603 2.21458C15.9124 1.76148 15.3031 1.50449 14.6661 1.5H2.38906C2.07338 1.50144 1.76108 1.56514 1.47006 1.68746C1.17904 1.80978 0.915004 1.98832 0.693086 2.21283C0.471167 2.43735 0.295723 2.70345 0.176802 2.99588C0.0578817 3.28831 -0.00217899 3.60132 6.03909e-05 3.917V4.223C6.03909e-05 4.23016 0.00290503 4.23703 0.00796851 4.24209C0.013032 4.24716 0.0198995 4.25 0.0270604 4.25H17.0271ZM16.8171 6.512C16.8812 6.50868 16.9416 6.48091 16.9859 6.4344C17.0301 6.3879 17.0549 6.3262 17.0551 6.262V5.777C17.0548 5.76975 17.0517 5.76288 17.0465 5.75784C17.0413 5.75281 17.0343 5.75 17.0271 5.75H0.0270604C0.0235147 5.75 0.0200037 5.7507 0.0167279 5.75206C0.0134521 5.75341 0.0104757 5.7554 0.00796851 5.75791C0.00546133 5.76042 0.00347252 5.76339 0.00211564 5.76667C0.000758767 5.76994 6.03909e-05 5.77345 6.03909e-05 5.777V11.583C-0.00217899 11.8987 0.0578817 12.2117 0.176802 12.5041C0.295723 12.7966 0.471167 13.0626 0.693086 13.2872C0.915004 13.5117 1.17904 13.6902 1.47006 13.8125C1.76108 13.9349 2.07338 13.9986 2.38906 14H7.98906C8.04669 14 8.10256 13.9801 8.14721 13.9437C8.19185 13.9072 8.22253 13.8565 8.23406 13.8C8.66351 11.8101 9.73732 10.0174 11.2891 8.69981C12.8408 7.38218 14.7839 6.61318 16.8171 6.512ZM3.33306 8.25H6.16606C6.36497 8.25 6.55574 8.32902 6.69639 8.46967C6.83704 8.61032 6.91606 8.80109 6.91606 9C6.91606 9.19891 6.83704 9.38968 6.69639 9.53033C6.55574 9.67098 6.36497 9.75 6.16606 9.75H3.33306C3.13415 9.75 2.94338 9.67098 2.80273 9.53033C2.66208 9.38968 2.58306 9.19891 2.58306 9C2.58306 8.80109 2.66208 8.61032 2.80273 8.46967C2.94338 8.32902 3.13415 8.25 3.33306 8.25ZM13.4999 10.1376C14.6099 9.39588 15.915 9 17.25 9C19.0396 9.00212 20.7552 9.71395 22.0206 10.9794C23.286 12.2448 23.9979 13.9604 24 15.75C24 17.085 23.6041 18.3901 22.8624 19.5001C22.1207 20.6101 21.0665 21.4753 19.8331 21.9862C18.5997 22.4971 17.2425 22.6308 15.9331 22.3703C14.6238 22.1098 13.421 21.467 12.477 20.523C11.533 19.579 10.8902 18.3762 10.6297 17.0669C10.3693 15.7575 10.5029 14.4003 11.0138 13.1669C11.5247 11.9335 12.3899 10.8793 13.4999 10.1376ZM19.544 11.592C18.8421 11.2029 18.0526 10.9992 17.25 11C16.4237 10.9991 15.6114 11.2138 14.8934 11.6229C14.1755 12.032 13.5767 12.6214 13.1563 13.3328C12.7358 14.0442 12.5083 14.8529 12.4962 15.6792C12.484 16.5054 12.6877 17.3206 13.087 18.044C13.1056 18.0787 13.1321 18.1085 13.1644 18.1311C13.1966 18.1536 13.2338 18.1682 13.2728 18.1736C13.3118 18.1791 13.3515 18.1753 13.3887 18.1625C13.4259 18.1497 13.4596 18.1283 13.487 18.1L19.599 11.987C19.6266 11.9597 19.6474 11.9263 19.6597 11.8895C19.6721 11.8526 19.6756 11.8134 19.67 11.775C19.6645 11.7369 19.6502 11.7005 19.6284 11.6688C19.6065 11.6371 19.5776 11.6108 19.544 11.592ZM14.957 19.908C15.6585 20.2972 16.4478 20.5009 17.25 20.5C18.076 20.5002 18.8878 20.285 19.6052 19.8756C20.3226 19.4662 20.9208 18.8768 21.3408 18.1655C21.7607 17.4542 21.9879 16.6457 21.9999 15.8198C22.0118 14.9939 21.8082 14.1791 21.409 13.456C21.3902 13.4221 21.3638 13.393 21.3319 13.371C21.2999 13.3489 21.2634 13.3346 21.225 13.329C21.1866 13.324 21.1476 13.3278 21.1108 13.3401C21.0741 13.3524 21.0407 13.3729 21.013 13.4L14.901 19.513C14.8735 19.5403 14.8528 19.5736 14.8405 19.6104C14.8282 19.6471 14.8246 19.6862 14.83 19.7245C14.8355 19.7629 14.8498 19.7994 14.8718 19.8313C14.8939 19.8631 14.923 19.8894 14.957 19.908Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$j = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.75 4C17.8163 4 17.8799 3.97366 17.9268 3.92678C17.9737 3.87989 18 3.8163 18 3.75C18 3.08696 17.7366 2.45107 17.2678 1.98223C16.7989 1.51339 16.163 1.25 15.5 1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75C0 3.8163 0.0263392 3.87989 0.0732233 3.92678C0.120107 3.97366 0.183696 4 0.25 4H17.75ZM17.5 7.75H17.742C17.7755 7.75087 17.8089 7.74505 17.8402 7.73285C17.8714 7.72066 17.8999 7.70235 17.924 7.679C17.9481 7.65582 17.9672 7.62802 17.9803 7.59726C17.9933 7.5665 18 7.53342 18 7.5V5.75C18 5.6837 17.9737 5.62011 17.9268 5.57322C17.8799 5.52634 17.8163 5.5 17.75 5.5H0.25C0.183696 5.5 0.120107 5.52634 0.0732233 5.57322C0.0263392 5.62011 0 5.6837 0 5.75V11.75C0 12.413 0.263392 13.0489 0.732233 13.5178C1.20107 13.9866 1.83696 14.25 2.5 14.25H9.044C9.09909 14.25 9.15263 14.2318 9.19624 14.1981C9.23985 14.1645 9.27106 14.1173 9.285 14.064C9.76917 12.2545 10.8365 10.6552 12.3216 9.51372C13.8068 8.37225 15.6269 7.75234 17.5 7.75ZM3.5 10H6.5C6.69891 10 6.88968 10.079 7.03033 10.2197C7.17098 10.3603 7.25 10.5511 7.25 10.75C7.25 10.9489 7.17098 11.1397 7.03033 11.2803C6.88968 11.421 6.69891 11.5 6.5 11.5H3.5C3.30109 11.5 3.11032 11.421 2.96967 11.2803C2.82902 11.1397 2.75 10.9489 2.75 10.75C2.75 10.5511 2.82902 10.3603 2.96967 10.2197C3.11032 10.079 3.30109 10 3.5 10ZM13.8888 10.8454C14.9577 10.1312 16.2144 9.75 17.5 9.75C19.2239 9.75 20.8772 10.4348 22.0962 11.6538C23.3152 12.8728 24 14.5261 24 16.25C24 17.5356 23.6188 18.7923 22.9046 19.8612C22.1903 20.9301 21.1752 21.7632 19.9874 22.2552C18.7997 22.7472 17.4928 22.8759 16.2319 22.6251C14.971 22.3743 13.8128 21.7552 12.9038 20.8462C11.9948 19.9372 11.3757 18.779 11.1249 17.5181C10.8741 16.2572 11.0028 14.9503 11.4948 13.7626C11.9868 12.5748 12.8199 11.5597 13.8888 10.8454ZM17.968 18.487L20.868 14.613L20.872 14.615C20.9311 14.5362 20.9741 14.4465 20.9985 14.3511C21.023 14.2557 21.0284 14.1564 21.0145 14.0589C21.0005 13.9614 20.9675 13.8676 20.9174 13.7829C20.8672 13.6981 20.8008 13.6241 20.722 13.565C20.6432 13.5059 20.5535 13.4629 20.4581 13.4385C20.3627 13.414 20.2634 13.4086 20.1659 13.4225C20.0684 13.4365 19.9746 13.4695 19.8899 13.5196C19.8051 13.5698 19.7311 13.6362 19.672 13.715L16.94 17.358C16.9186 17.3868 16.8913 17.4107 16.8598 17.428C16.8283 17.4453 16.7935 17.4556 16.7577 17.4581C16.7219 17.4607 16.686 17.4555 16.6524 17.4429C16.6187 17.4303 16.5883 17.4105 16.563 17.385L15.263 16.085C15.1933 16.0153 15.1106 15.9601 15.0196 15.9224C14.9286 15.8847 14.831 15.8653 14.7325 15.8653C14.634 15.8653 14.5364 15.8847 14.4454 15.9224C14.3544 15.9601 14.2717 16.0153 14.202 16.085C14.1323 16.1547 14.0771 16.2374 14.0394 16.3284C14.0017 16.4194 13.9823 16.517 13.9823 16.6155C13.9823 16.714 14.0017 16.8116 14.0394 16.9026C14.0771 16.9936 14.1323 17.0763 14.202 17.146L15.702 18.646C15.8404 18.7856 16.0051 18.8964 16.1865 18.972C16.3679 19.0477 16.5624 19.0868 16.759 19.087H16.868C17.0839 19.0726 17.294 19.0115 17.4839 18.9079C17.6739 18.8043 17.839 18.6607 17.968 18.487Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$k = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.75 4C17.8163 4 17.8799 3.97366 17.9268 3.92678C17.9737 3.87989 18 3.8163 18 3.75C18 3.08696 17.7366 2.45107 17.2678 1.98223C16.7989 1.51339 16.163 1.25 15.5 1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75C0 3.8163 0.0263392 3.87989 0.0732233 3.92678C0.120107 3.97366 0.183696 4 0.25 4H17.75ZM17.5 7.75H17.743C17.7764 7.7508 17.8096 7.74493 17.8407 7.73274C17.8717 7.72054 17.9001 7.70227 17.924 7.67899C17.948 7.65571 17.967 7.62789 17.98 7.59715C17.9931 7.56642 17.9999 7.53339 18 7.5V5.75C18 5.6837 17.9737 5.62011 17.9268 5.57322C17.8799 5.52634 17.8163 5.5 17.75 5.5H0.25C0.183696 5.5 0.120107 5.52634 0.0732233 5.57322C0.0263392 5.62011 0 5.6837 0 5.75V11.75C0 12.413 0.263392 13.0489 0.732233 13.5178C1.20107 13.9866 1.83696 14.25 2.5 14.25H9.044C9.09909 14.25 9.15263 14.2318 9.19624 14.1981C9.23985 14.1645 9.27106 14.1173 9.285 14.064C9.76917 12.2545 10.8365 10.6552 12.3216 9.51372C13.8068 8.37225 15.6269 7.75234 17.5 7.75ZM3.5 10H6.5C6.69891 10 6.88968 10.079 7.03033 10.2197C7.17098 10.3603 7.25 10.5511 7.25 10.75C7.25 10.9489 7.17098 11.1397 7.03033 11.2803C6.88968 11.421 6.69891 11.5 6.5 11.5H3.5C3.30109 11.5 3.11032 11.421 2.96967 11.2803C2.82902 11.1397 2.75 10.9489 2.75 10.75C2.75 10.5511 2.82902 10.3603 2.96967 10.2197C3.11032 10.079 3.30109 10 3.5 10ZM13.8888 10.8454C14.9577 10.1312 16.2144 9.75 17.5 9.75C19.2239 9.75 20.8772 10.4348 22.0962 11.6538C23.3152 12.8728 24 14.5261 24 16.25C24 17.5356 23.6188 18.7923 22.9046 19.8612C22.1903 20.9301 21.1752 21.7632 19.9874 22.2552C18.7997 22.7472 17.4928 22.8759 16.2319 22.6251C14.971 22.3743 13.8128 21.7552 12.9038 20.8462C11.9948 19.9372 11.3757 18.779 11.1249 17.5181C10.8741 16.2572 11.0028 14.9503 11.4948 13.7626C11.9868 12.5748 12.8199 11.5597 13.8888 10.8454ZM20.7038 18.4635C20.6628 18.3715 20.6037 18.2887 20.53 18.22L18.737 16.427C18.6905 16.3798 18.6644 16.3163 18.6644 16.25C18.6644 16.1837 18.6905 16.1202 18.737 16.073L20.53 14.28C20.6625 14.1378 20.7346 13.9498 20.7312 13.7555C20.7277 13.5612 20.649 13.3758 20.5116 13.2384C20.3742 13.101 20.1888 13.0223 19.9945 13.0188C19.8002 13.0154 19.6122 13.0875 19.47 13.22L17.677 15.013C17.6298 15.0595 17.5663 15.0856 17.5 15.0856C17.4338 15.0856 17.3702 15.0595 17.323 15.013L15.53 13.22C15.3878 13.0875 15.1998 13.0154 15.0055 13.0188C14.8112 13.0223 14.6258 13.101 14.4884 13.2384C14.351 13.3758 14.2723 13.5612 14.2688 13.7555C14.2654 13.9498 14.3375 14.1378 14.47 14.28L16.263 16.073C16.3095 16.1202 16.3356 16.1837 16.3356 16.25C16.3356 16.3163 16.3095 16.3798 16.263 16.427L14.47 18.22C14.3375 18.3622 14.2654 18.5502 14.2688 18.7445C14.2723 18.9388 14.351 19.1242 14.4884 19.2616C14.6258 19.399 14.8112 19.4777 15.0055 19.4812C15.1998 19.4846 15.3878 19.4125 15.53 19.28L17.323 17.487C17.3702 17.4405 17.4338 17.4144 17.5 17.4144C17.5663 17.4144 17.6298 17.4405 17.677 17.487L19.47 19.28C19.5387 19.3537 19.6215 19.4128 19.7135 19.4538C19.8055 19.4948 19.9048 19.5168 20.0055 19.5186C20.1062 19.5204 20.2062 19.5018 20.2996 19.4641C20.393 19.4264 20.4778 19.3703 20.549 19.299C20.6203 19.2278 20.6764 19.143 20.7141 19.0496C20.7518 18.9562 20.7704 18.8562 20.7686 18.7555C20.7668 18.6548 20.7448 18.5555 20.7038 18.4635Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$l = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M0 18.6087C0 19.7617 0.933913 20.6957 2.08696 20.6957H21.913C23.0661 20.6957 24 19.7617 24 18.6087V9.73913C24 9.59513 23.8831 9.47826 23.7391 9.47826H0.26087C0.11687 9.47826 0 9.59513 0 9.73913V18.6087ZM17.2174 16.2609H20.3478C20.7798 16.2609 21.1304 16.6115 21.1304 17.0435C21.1304 17.4755 20.7798 17.8261 20.3478 17.8261H17.2174C16.7854 17.8261 16.4348 17.4755 16.4348 17.0435C16.4348 16.6115 16.7854 16.2609 17.2174 16.2609ZM4.17391 12.087H12.5217C12.9537 12.087 13.3043 12.4376 13.3043 12.8696C13.3043 13.3016 12.9537 13.6522 12.5217 13.6522H4.17391C3.74191 13.6522 3.3913 13.3016 3.3913 12.8696C3.3913 12.4376 3.74191 12.087 4.17391 12.087ZM4.17391 16.2609H7.30435C7.73635 16.2609 8.08696 16.6115 8.08696 17.0435C8.08696 17.4755 7.73635 17.8261 7.30435 17.8261H4.17391C3.74191 17.8261 3.3913 17.4755 3.3913 17.0435C3.3913 16.6115 3.74191 16.2609 4.17391 16.2609ZM24 6.08696C24 4.93391 23.0661 4 21.913 4H2.08696C0.933913 4 0 4.93391 0 6.08696V7.65217C0 7.79617 0.11687 7.91304 0.26087 7.91304H23.7391C23.8831 7.91304 24 7.79617 24 7.65217V6.08696Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$m = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V3C0 3.0663 0.0263392 3.12989 0.0732233 3.17678C0.120107 3.22366 0.183696 3.25 0.25 3.25H19.75C19.8163 3.25 19.8799 3.22366 19.9268 3.17678C19.9737 3.12989 20 3.0663 20 3V2ZM13.4 13.139C13.4366 13.1203 13.468 13.0927 13.4914 13.0589C13.5148 13.025 13.5294 12.9859 13.534 12.945C13.6719 11.7238 14.2542 10.5959 15.17 9.77622C16.0857 8.95654 17.271 8.5023 18.5 8.5C18.9009 8.50282 19.2998 8.55693 19.687 8.661C19.724 8.67063 19.7627 8.67165 19.8001 8.664C19.8375 8.65635 19.8727 8.64022 19.9029 8.61685C19.9331 8.59348 19.9576 8.5635 19.9744 8.5292C19.9913 8.4949 20 8.4572 20 8.419V5C20 4.9337 19.9737 4.87011 19.9268 4.82322C19.8799 4.77634 19.8163 4.75 19.75 4.75H0.25C0.183696 4.75 0.120107 4.77634 0.0732233 4.82322C0.0263392 4.87011 0 4.9337 0 5V13C0 13.5304 0.210714 14.0391 0.585786 14.4142C0.960859 14.7893 1.46957 15 2 15H11.572C11.6208 15 11.6685 14.9859 11.7093 14.9592C11.7502 14.9326 11.7824 14.8946 11.802 14.85C12.1232 14.1136 12.6873 13.5097 13.4 13.139ZM6 12.25H3C2.80109 12.25 2.61032 12.171 2.46967 12.0303C2.32902 11.8897 2.25 11.6989 2.25 11.5C2.25 11.3011 2.32902 11.1103 2.46967 10.9697C2.61032 10.829 2.80109 10.75 3 10.75H6C6.19891 10.75 6.38968 10.829 6.53033 10.9697C6.67098 11.1103 6.75 11.3011 6.75 11.5C6.75 11.6989 6.67098 11.8897 6.53033 12.0303C6.38968 12.171 6.19891 12.25 6 12.25ZM9.5 8.75H3C2.80109 8.75 2.61032 8.67098 2.46967 8.53033C2.32902 8.38968 2.25 8.19891 2.25 8C2.25 7.80109 2.32902 7.61032 2.46967 7.46967C2.61032 7.32902 2.80109 7.25 3 7.25H9.5C9.69891 7.25 9.88968 7.32902 10.0303 7.46967C10.171 7.61032 10.25 7.80109 10.25 8C10.25 8.19891 10.171 8.38968 10.0303 8.53033C9.88968 8.67098 9.69891 8.75 9.5 8.75ZM22.5608 15.4315C22.6001 15.4769 22.6545 15.5066 22.714 15.515C23.0711 15.5665 23.3977 15.7449 23.6339 16.0177C23.8701 16.2904 24.0001 16.6392 24 17V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15.5C15.1022 24 14.7206 23.842 14.4393 23.5607C14.158 23.2794 14 22.8978 14 22.5V17C13.9999 16.6392 14.1299 16.2904 14.3661 16.0177C14.6023 15.7449 14.9289 15.5665 15.286 15.515C15.3455 15.5066 15.3999 15.4769 15.4392 15.4315C15.4785 15.3861 15.5001 15.3281 15.5 15.268V14.25C15.5 13.3217 15.8687 12.4315 16.5251 11.7751C17.1815 11.1187 18.0717 10.75 19 10.75C19.9283 10.75 20.8185 11.1187 21.4749 11.7751C22.1313 12.4315 22.5 13.3217 22.5 14.25V15.268C22.4999 15.3281 22.5215 15.3861 22.5608 15.4315ZM20.0607 13.1893C19.7794 12.908 19.3978 12.75 19 12.75C18.6022 12.75 18.2206 12.908 17.9393 13.1893C17.658 13.4706 17.5 13.8522 17.5 14.25V15.25C17.5 15.3163 17.5263 15.3799 17.5732 15.4268C17.6201 15.4737 17.6837 15.5 17.75 15.5H20.25C20.3163 15.5 20.3799 15.4737 20.4268 15.4268C20.4737 15.3799 20.5 15.3163 20.5 15.25V14.25C20.5 13.8522 20.342 13.4706 20.0607 13.1893ZM19.8315 20.8056C19.9414 20.6411 20 20.4478 20 20.25C20 19.9848 19.8946 19.7304 19.7071 19.5429C19.5196 19.3554 19.2652 19.25 19 19.25C18.8022 19.25 18.6089 19.3086 18.4444 19.4185C18.28 19.5284 18.1518 19.6846 18.0761 19.8673C18.0004 20.05 17.9806 20.2511 18.0192 20.4451C18.0578 20.6391 18.153 20.8173 18.2929 20.9571C18.4327 21.097 18.6109 21.1922 18.8049 21.2308C18.9989 21.2694 19.2 21.2496 19.3827 21.1739C19.5654 21.0982 19.7216 20.97 19.8315 20.8056Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$n = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 19.5C9 19.3674 8.94732 19.2402 8.85355 19.1464C8.75979 19.0527 8.63261 19 8.5 19H2.5C2.36739 19 2.24021 18.9473 2.14645 18.8536C2.05268 18.7598 2 18.6326 2 18.5V4.5C2 4.36739 2.05268 4.24021 2.14645 4.14645C2.24021 4.05268 2.36739 4 2.5 4H11.5C11.6326 4 11.7598 4.05268 11.8536 4.14645C11.9473 4.24021 12 4.36739 12 4.5V10.5C12 10.7652 12.1054 11.0196 12.2929 11.2071C12.4804 11.3946 12.7348 11.5 13 11.5C13.2652 11.5 13.5196 11.3946 13.7071 11.2071C13.8946 11.0196 14 10.7652 14 10.5V2.5C14 1.83696 13.7366 1.20107 13.2678 0.732233C12.7989 0.263392 12.163 0 11.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5V21.5C0 21.8283 0.0646644 22.1534 0.190301 22.4567C0.315938 22.76 0.500087 23.0356 0.732233 23.2678C0.964379 23.4999 1.23998 23.6841 1.54329 23.8097C1.84661 23.9353 2.1717 24 2.5 24H8.5C8.63261 24 8.75979 23.9473 8.85355 23.8536C8.94732 23.7598 9 23.6326 9 23.5V19.5ZM24 15.25C23.9995 14.786 23.8149 14.3412 23.4869 14.0131C23.1588 13.6851 22.714 13.5005 22.25 13.5H12.25C11.786 13.5005 11.3412 13.6851 11.0131 14.0131C10.6851 14.3412 10.5005 14.786 10.5 15.25V22.25C10.5005 22.714 10.6851 23.1588 11.0131 23.4869C11.3412 23.8149 11.786 23.9995 12.25 24H22.25C22.714 23.9995 23.1588 23.8149 23.4869 23.4869C23.8149 23.1588 23.9995 22.714 24 22.25V15.25ZM22.5 22.25C22.5 22.3163 22.4737 22.3799 22.4268 22.4268C22.3799 22.4737 22.3163 22.5 22.25 22.5H12.25C12.1837 22.5 12.1201 22.4737 12.0732 22.4268C12.0263 22.3799 12 22.3163 12 22.25V19.25C12 19.1837 12.0263 19.1201 12.0732 19.0732C12.1201 19.0263 12.1837 19 12.25 19H22.25C22.3163 19 22.3799 19.0263 22.4268 19.0732C22.4737 19.1201 22.5 19.1837 22.5 19.25V22.25ZM12.25 15H22.25C22.3163 15 22.3799 15.0263 22.4268 15.0732C22.4737 15.1201 22.5 15.1837 22.5 15.25V16.25C22.5 16.3163 22.4737 16.3799 22.4268 16.4268C22.3799 16.4737 22.3163 16.5 22.25 16.5H12.25C12.1837 16.5 12.1201 16.4737 12.0732 16.4268C12.0263 16.3799 12 16.3163 12 16.25V15.25C12 15.1837 12.0263 15.1201 12.0732 15.0732C12.1201 15.0263 12.1837 15 12.25 15ZM20.7803 20.2197C20.921 20.3603 21 20.5511 21 20.75C21 20.9489 20.921 21.1397 20.7803 21.2803C20.6397 21.421 20.4489 21.5 20.25 21.5H19C18.8011 21.5 18.6103 21.421 18.4697 21.2803C18.329 21.1397 18.25 20.9489 18.25 20.75C18.25 20.5511 18.329 20.3603 18.4697 20.2197C18.6103 20.079 18.8011 20 19 20H20.25C20.4489 20 20.6397 20.079 20.7803 20.2197Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$o = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.0465 3.74216C17.0413 3.74719 17.0343 3.75 17.0271 3.75L0.0270604 3.752C0.0198995 3.752 0.013032 3.74916 0.00796851 3.74409C0.00290503 3.73903 6.03909e-05 3.73216 6.03909e-05 3.725V3.417C-0.00217899 3.10132 0.0578817 2.78831 0.176802 2.49588C0.295723 2.20345 0.471167 1.93735 0.693086 1.71283C0.915004 1.48832 1.17904 1.30978 1.47006 1.18746C1.76108 1.06514 2.07338 1.00144 2.38906 1H14.6661C15.3031 1.00449 15.9124 1.26148 16.3603 1.71458C16.8081 2.16769 17.058 2.77992 17.0551 3.417V3.723C17.0548 3.73025 17.0517 3.73712 17.0465 3.74216ZM16.9891 7.45112C16.9467 7.49724 16.8885 7.52575 16.8261 7.53101C15.2109 7.67301 13.677 8.30244 12.4276 9.33591C11.1782 10.3694 10.2724 11.7581 9.83006 13.318C9.81508 13.3704 9.78347 13.4165 9.73999 13.4493C9.69652 13.4821 9.64354 13.4999 9.58906 13.5H2.38906C2.07338 13.4986 1.76108 13.4349 1.47006 13.3125C1.17904 13.1902 0.915004 13.0117 0.693086 12.7872C0.471167 12.5627 0.295723 12.2966 0.176802 12.0041C0.0578817 11.7117 -0.00217899 11.3987 6.03909e-05 11.083V5.27701C0.00123985 5.27074 0.00459748 5.2651 0.00953898 5.26107C0.0144805 5.25705 0.0206871 5.2549 0.0270604 5.25501H17.0271C17.0343 5.255 17.0413 5.25782 17.0465 5.26285C17.0517 5.26789 17.0548 5.27476 17.0551 5.28201V7.28201C17.055 7.34466 17.0315 7.40501 16.9891 7.45112ZM6.16606 9.25001H3.33306C3.13415 9.25001 2.94338 9.32903 2.80273 9.46968C2.66208 9.61033 2.58306 9.8011 2.58306 10C2.58306 10.1989 2.66208 10.3897 2.80273 10.5303C2.94338 10.671 3.13415 10.75 3.33306 10.75H6.16606C6.36497 10.75 6.55574 10.671 6.69639 10.5303C6.83704 10.3897 6.91606 10.1989 6.91606 10C6.91606 9.8011 6.83704 9.61033 6.69639 9.46968C6.55574 9.32903 6.36497 9.25001 6.16606 9.25001ZM17.612 22.25C18.8857 22.2503 20.1276 21.8524 21.1639 21.1121C22.2003 20.3717 22.9793 19.3259 23.392 18.121C23.4779 17.87 23.4606 17.5951 23.3439 17.3568C23.2271 17.1185 23.0205 16.9364 22.7695 16.8505C22.5185 16.7646 22.2436 16.7819 22.0053 16.8986C21.7671 17.0153 21.5849 17.222 21.499 17.473C21.2679 18.1488 20.8645 18.7525 20.3286 19.2247C19.7928 19.6969 19.143 20.0212 18.4435 20.1655C17.7441 20.3098 17.0191 20.2691 16.3401 20.0475C15.6611 19.826 15.0517 19.4311 14.572 18.902C14.5285 18.8546 14.5051 18.7922 14.5065 18.7279C14.508 18.6636 14.5344 18.6023 14.58 18.557L16.311 16.825C16.3808 16.755 16.4282 16.6659 16.4474 16.569C16.4666 16.472 16.4566 16.3716 16.4187 16.2803C16.3808 16.1891 16.3168 16.1111 16.2346 16.0562C16.1524 16.0013 16.0558 15.972 15.957 15.972H11.5C11.3674 15.972 11.2402 16.0247 11.1464 16.1184C11.0527 16.2122 11 16.3394 11 16.472V20.929C11 21.0279 11.0294 21.1246 11.0844 21.2069C11.1394 21.2891 11.2176 21.3532 11.309 21.391C11.4004 21.4288 11.501 21.4386 11.598 21.4192C11.6951 21.3998 11.7841 21.352 11.854 21.282L12.812 20.324C12.8354 20.3001 12.8633 20.2811 12.8941 20.2681C12.9249 20.2551 12.9581 20.2484 12.9915 20.2484C13.0249 20.2484 13.0581 20.2551 13.0889 20.2681C13.1197 20.2811 13.1476 20.3001 13.171 20.324C13.7413 20.9302 14.4293 21.4136 15.193 21.7448C15.9566 22.076 16.7797 22.2479 17.612 22.25ZM22.0404 11.2112C22.0711 11.1981 22.099 11.179 22.1222 11.155L23.1462 10.131C23.1966 10.0806 23.2573 10.0417 23.3242 10.017C23.3998 9.98859 23.4811 9.97889 23.5612 9.98875C23.6414 9.99861 23.7179 10.0277 23.7844 10.0736C23.8508 10.1195 23.9051 10.1808 23.9427 10.2523C23.9803 10.3238 24 10.4033 24.0002 10.484V14.941C24.0002 15.0736 23.9475 15.2008 23.8537 15.2946C23.76 15.3883 23.6328 15.441 23.5002 15.441H19.0432C18.9444 15.4408 18.848 15.4113 18.766 15.3564C18.6839 15.3014 18.62 15.2234 18.5823 15.1322C18.5445 15.041 18.5346 14.9406 18.5538 14.8438C18.573 14.7469 18.6205 14.6579 18.6902 14.588L20.3512 12.926C20.3967 12.8801 20.4227 12.8184 20.4238 12.7537C20.4249 12.6891 20.4011 12.6265 20.3572 12.579C19.8759 12.0553 19.2667 11.6657 18.5894 11.4487C17.912 11.2316 17.1899 11.1945 16.4939 11.341C15.7979 11.4874 15.1519 11.8125 14.6195 12.2841C14.0871 12.7557 13.6865 13.3577 13.4572 14.031C13.3712 14.282 13.1891 14.4886 12.9508 14.6054C12.7126 14.7221 12.4377 14.7394 12.1867 14.6535C12.0624 14.611 11.9477 14.5443 11.8491 14.4575C11.7506 14.3706 11.6701 14.2652 11.6123 14.1472C11.5545 14.0292 11.5205 13.901 11.5122 13.7699C11.504 13.6388 11.5216 13.5073 11.5642 13.383C11.9031 12.3893 12.4928 11.4998 13.2762 10.8008C14.0596 10.1017 15.0101 9.61668 16.0359 9.39262C17.0616 9.16856 18.1279 9.21306 19.1314 9.52181C20.1349 9.83056 21.0418 10.3931 21.7642 11.155C21.7874 11.179 21.8152 11.1981 21.846 11.2112C21.8767 11.2242 21.9098 11.2309 21.9432 11.2309C21.9766 11.2309 22.0096 11.2242 22.0404 11.2112Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$p = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.25 2.75H17.75C17.8163 2.75 17.8799 2.72366 17.9268 2.67678C17.9737 2.62989 18 2.5663 18 2.5C18 1.83696 17.7366 1.20107 17.2678 0.732233C16.7989 0.263392 16.163 0 15.5 0H2.5C1.83696 0 1.20107 0.263392 0.732233 0.732233C0.263392 1.20107 0 1.83696 0 2.5C0 2.5663 0.0263392 2.62989 0.0732233 2.67678C0.120107 2.72366 0.183696 2.75 0.25 2.75ZM17.479 9.5H17.5C17.6326 9.5 17.7598 9.44732 17.8536 9.35355C17.9473 9.25979 18 9.13261 18 9V4.75C18 4.61739 17.9473 4.49021 17.8536 4.39645C17.7598 4.30268 17.6326 4.25 17.5 4.25H0.5C0.367392 4.25 0.240215 4.30268 0.146447 4.39645C0.0526784 4.49021 0 4.61739 0 4.75V10.5C0 11.163 0.263392 11.7989 0.732233 12.2678C1.20107 12.7366 1.83696 13 2.5 13H9.132C9.241 12.9999 9.34699 12.9642 9.43382 12.8983C9.52065 12.8324 9.58357 12.74 9.613 12.635C9.73489 12.2 9.95201 11.7976 10.2486 11.4568C10.5452 11.1161 10.9139 10.8456 11.328 10.665C13.2913 9.90881 15.3752 9.51412 17.479 9.5ZM6.5 10.25H3.5C3.30109 10.25 3.11032 10.171 2.96967 10.0303C2.82902 9.88968 2.75 9.69891 2.75 9.5C2.75 9.30109 2.82902 9.11032 2.96967 8.96967C3.11032 8.82902 3.30109 8.75 3.5 8.75H6.5C6.69891 8.75 6.88968 8.82902 7.03033 8.96967C7.17098 9.11032 7.25 9.30109 7.25 9.5C7.25 9.69891 7.17098 9.88968 7.03033 10.0303C6.88968 10.171 6.69891 10.25 6.5 10.25ZM17.479 11C19.3896 11.0186 21.2824 11.3705 23.072 12.04C23.3477 12.1601 23.5824 12.358 23.7472 12.6096C23.9121 12.8611 23.9999 13.1553 24 13.456V16.849C24 19.682 21.848 22.479 18.767 23.649L18.214 23.86C17.7404 24.0413 17.2166 24.0413 16.743 23.86L16.19 23.649C14.7506 23.154 13.4898 22.2442 12.5662 21.0342C11.6427 19.8242 11.0978 18.368 11 16.849V13.456C11.0001 13.1553 11.0879 12.8611 11.2528 12.6096C11.4176 12.358 11.6523 12.1601 11.928 12.04C13.7021 11.3673 15.5817 11.0152 17.479 11ZM18.75 17.25H20.5C20.6989 17.25 20.8897 17.171 21.0303 17.0303C21.171 16.8897 21.25 16.6989 21.25 16.5C21.25 16.3011 21.171 16.1103 21.0303 15.9697C20.8897 15.829 20.6989 15.75 20.5 15.75H18.75C18.6174 15.75 18.4902 15.6973 18.3964 15.6036C18.3027 15.5098 18.25 15.3826 18.25 15.25V13.5C18.25 13.3011 18.171 13.1103 18.0303 12.9697C17.8897 12.829 17.6989 12.75 17.5 12.75C17.3011 12.75 17.1103 12.829 16.9697 12.9697C16.829 13.1103 16.75 13.3011 16.75 13.5V15.25C16.75 15.3826 16.6973 15.5098 16.6036 15.6036C16.5098 15.6973 16.3826 15.75 16.25 15.75H14.5C14.3011 15.75 14.1103 15.829 13.9697 15.9697C13.829 16.1103 13.75 16.3011 13.75 16.5C13.75 16.6989 13.829 16.8897 13.9697 17.0303C14.1103 17.171 14.3011 17.25 14.5 17.25H16.25C16.3826 17.25 16.5098 17.3027 16.6036 17.3964C16.6973 17.4902 16.75 17.6174 16.75 17.75V19.5C16.75 19.6989 16.829 19.8897 16.9697 20.0303C17.1103 20.171 17.3011 20.25 17.5 20.25C17.6989 20.25 17.8897 20.171 18.0303 20.0303C18.171 19.8897 18.25 19.6989 18.25 19.5V17.75C18.25 17.6174 18.3027 17.4902 18.3964 17.3964C18.4902 17.3027 18.6174 17.25 18.75 17.25Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$q = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M22.0928 9.90401C22.0665 9.87657 22.0466 9.84351 22.0349 9.80731C22.0231 9.77112 22.0197 9.73272 22.0248 9.69501C22.0302 9.65746 22.0441 9.62164 22.0654 9.59027C22.0867 9.5589 22.1149 9.53282 22.1478 9.51401L22.9478 9.05101C23.1186 8.95252 23.2682 8.82137 23.3882 8.66504C23.5083 8.50871 23.5963 8.33028 23.6474 8.13992C23.6985 7.94956 23.7116 7.751 23.6859 7.55559C23.6602 7.36017 23.5963 7.17173 23.4978 7.00101C23.3993 6.83029 23.2682 6.68064 23.1119 6.56061C22.9555 6.44058 22.7771 6.35251 22.5867 6.30144C22.3964 6.25037 22.1978 6.23729 22.0024 6.26295C21.807 6.28862 21.6186 6.35252 21.4478 6.45101L20.3828 7.06601C20.3478 7.08608 20.3085 7.09738 20.2682 7.09895C20.2279 7.10052 20.1878 7.0923 20.1513 7.07501C20.1149 7.05772 20.0831 7.03186 20.0589 6.99964C20.0346 6.96743 20.0184 6.92981 20.0118 6.89001L19.6118 4.50701C19.4968 3.80574 19.1359 3.16832 18.5937 2.70894C18.0515 2.24956 17.3635 1.99825 16.6528 2.00001H7.04484C6.33391 1.99832 5.64562 2.24992 5.10338 2.7097C4.56114 3.16948 4.2004 3.80737 4.08584 4.50901L3.68584 6.89201C3.67909 6.93184 3.66283 6.96945 3.63843 7.00165C3.61403 7.03385 3.58223 7.05969 3.54571 7.07697C3.50919 7.09424 3.46904 7.10245 3.42868 7.10089C3.38831 7.09933 3.34891 7.08805 3.31384 7.06801L2.25084 6.45301C1.90606 6.2541 1.49638 6.2003 1.11193 6.30344C0.727479 6.40659 0.399749 6.65823 0.200837 7.00301C0.00192453 7.34779 -0.051877 7.75747 0.051268 8.14192C0.154413 8.52637 0.406055 8.8541 0.750837 9.05301L1.55084 9.51601C1.58377 9.53482 1.61197 9.5609 1.63329 9.59227C1.6546 9.62364 1.66847 9.65946 1.67384 9.69701C1.67902 9.73472 1.6756 9.77312 1.66382 9.80931C1.65205 9.84551 1.63222 9.87857 1.60584 9.90601C0.80236 10.7349 0.352368 11.8436 0.350837 12.998V14.998C0.352467 15.4992 0.505153 15.9884 0.78897 16.4015C1.07279 16.8147 1.47455 17.1327 1.94184 17.314C1.98863 17.3324 2.02881 17.3645 2.05716 17.4061C2.08552 17.4476 2.10073 17.4967 2.10084 17.547V19.498C2.10084 20.0947 2.33789 20.667 2.75985 21.089C3.1818 21.511 3.7541 21.748 4.35084 21.748C4.94757 21.748 5.51987 21.511 5.94183 21.089C6.36378 20.667 6.60084 20.0947 6.60084 19.498V17.748C6.60084 17.6817 6.62718 17.6181 6.67406 17.5712C6.72094 17.5243 6.78453 17.498 6.85084 17.498H16.8508C16.9171 17.498 16.9807 17.5243 17.0276 17.5712C17.0745 17.6181 17.1008 17.6817 17.1008 17.748V19.498C17.1008 20.0947 17.3379 20.667 17.7598 21.089C18.1818 21.511 18.7541 21.748 19.3508 21.748C19.9476 21.748 20.5199 21.511 20.9418 21.089C21.3638 20.667 21.6008 20.0947 21.6008 19.498V17.551C21.6009 17.5007 21.6162 17.4516 21.6445 17.4101C21.6729 17.3685 21.713 17.3364 21.7598 17.318C22.2271 17.1367 22.6289 16.8187 22.9127 16.4055C23.1965 15.9924 23.3492 15.5032 23.3508 15.002V13.002C23.3501 11.8451 22.8989 10.7339 22.0928 9.90401ZM7.04484 4.00201H16.6568C16.8935 4.00212 17.1225 4.08619 17.3031 4.23927C17.4836 4.39235 17.604 4.60451 17.6428 4.83801L18.1218 7.71101C18.1272 7.74641 18.125 7.78254 18.1153 7.81702C18.1057 7.8515 18.0888 7.88353 18.0658 7.91101C18.0423 7.93867 18.013 7.96087 17.98 7.97607C17.9471 7.99127 17.9112 7.99909 17.8748 7.99901H5.82684C5.7905 7.99906 5.7546 7.9912 5.72161 7.97597C5.68863 7.96073 5.65936 7.93849 5.63585 7.91079C5.61234 7.88309 5.59515 7.8506 5.58548 7.81558C5.5758 7.78056 5.57388 7.74385 5.57984 7.70801L6.05884 4.83501C6.09829 4.60206 6.21896 4.3906 6.39944 4.23812C6.57993 4.08565 6.80857 4.002 7.04484 4.00201ZM19.3508 15.002C19.0542 15.002 18.7642 14.914 18.5175 14.7492C18.2708 14.5844 18.0786 14.3501 17.965 14.076C17.8515 13.8019 17.8218 13.5003 17.8797 13.2094C17.9375 12.9184 18.0804 12.6511 18.2902 12.4413C18.5 12.2316 18.7672 12.0887 19.0582 12.0308C19.3492 11.973 19.6508 12.0027 19.9249 12.1162C20.199 12.2297 20.4332 12.422 20.598 12.6687C20.7629 12.9153 20.8508 13.2053 20.8508 13.502C20.8508 13.8998 20.6928 14.2814 20.4115 14.5627C20.1302 14.844 19.7487 15.002 19.3508 15.002ZM2.85084 13.502C2.85084 13.2053 2.93881 12.9153 3.10363 12.6687C3.26845 12.422 3.50272 12.2297 3.77681 12.1162C4.0509 12.0027 4.3525 11.973 4.64347 12.0308C4.93444 12.0887 5.20172 12.2316 5.4115 12.4413C5.62128 12.6511 5.76414 12.9184 5.82201 13.2094C5.87989 13.5003 5.85019 13.8019 5.73666 14.076C5.62312 14.3501 5.43087 14.5844 5.18419 14.7492C4.93752 14.914 4.64751 15.002 4.35084 15.002C3.95301 15.002 3.57148 14.844 3.29018 14.5627C3.00887 14.2814 2.85084 13.8998 2.85084 13.502Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$r = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.9246 4.67314C19.9764 4.80347 20.0021 4.94274 20.0001 5.083V15.917C20.0021 16.0573 19.9764 16.1965 19.9246 16.3269C19.8727 16.4572 19.7957 16.576 19.6979 16.6766C19.6002 16.7772 19.4835 16.8575 19.3547 16.913C19.2259 16.9685 19.0874 16.998 18.9471 17H1.05311C0.912851 16.998 0.774354 16.9685 0.645526 16.913C0.516698 16.8575 0.400062 16.7772 0.302279 16.6766C0.204496 16.576 0.127482 16.4572 0.0756348 16.3269C0.0237877 16.1965 -0.0018769 16.0573 0.000106814 15.917V5.083C-0.0018769 4.94274 0.0237877 4.80347 0.0756348 4.67314C0.127482 4.5428 0.204496 4.42395 0.302279 4.32339C0.400062 4.22282 0.516698 4.1425 0.645526 4.08701C0.774354 4.03152 0.912851 4.00196 1.05311 4H18.9471C19.0874 4.00196 19.2259 4.03152 19.3547 4.08701C19.4835 4.1425 19.6002 4.22282 19.6979 4.32339C19.7957 4.42395 19.8727 4.5428 19.9246 4.67314ZM8.3334 12.9944C8.82674 13.3241 9.40676 13.5 10.0001 13.5C10.7958 13.5 11.5588 13.1839 12.1214 12.6213C12.684 12.0587 13.0001 11.2956 13.0001 10.5C13.0001 9.90666 12.8242 9.32664 12.4945 8.83329C12.1649 8.33994 11.6963 7.95542 11.1482 7.72836C10.6 7.5013 9.99678 7.44189 9.41484 7.55764C8.83289 7.6734 8.29834 7.95912 7.87879 8.37868C7.45923 8.79824 7.17351 9.33279 7.05775 9.91473C6.942 10.4967 7.00141 11.0999 7.22847 11.6481C7.45553 12.1962 7.84005 12.6648 8.3334 12.9944ZM21.9698 6.96967C22.1104 6.82902 22.3012 6.75 22.5001 6.75C22.699 6.75 22.8898 6.82902 23.0305 6.96967C23.1711 7.11032 23.2501 7.30109 23.2501 7.5V18.5C23.2496 18.964 23.065 19.4088 22.737 19.7369C22.4089 20.0649 21.9641 20.2495 21.5001 20.25H3.50012C3.30121 20.25 3.11044 20.171 2.96979 20.0303C2.82914 19.8897 2.75012 19.6989 2.75012 19.5C2.75012 19.3011 2.82914 19.1103 2.96979 18.9697C3.11044 18.829 3.30121 18.75 3.50012 18.75H21.5001C21.5664 18.75 21.63 18.7237 21.6769 18.6768C21.7238 18.6299 21.7501 18.5663 21.7501 18.5V7.5C21.7501 7.30109 21.8291 7.11032 21.9698 6.96967Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$s = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.7998 3.028C23.7998 2.63018 23.6418 2.24864 23.3605 1.96734C23.0792 1.68604 22.6976 1.528 22.2998 1.528H8.2998C7.90198 1.528 7.52045 1.68604 7.23914 1.96734C6.95784 2.24864 6.7998 2.63018 6.7998 3.028V11.028C6.7998 11.4258 6.95784 11.8074 7.23914 12.0887C7.52045 12.37 7.90198 12.528 8.2998 12.528H22.2998C22.6976 12.528 23.0792 12.37 23.3605 12.0887C23.6418 11.8074 23.7998 11.4258 23.7998 11.028V3.028ZM21.7998 10.278C21.7998 10.3443 21.7735 10.4079 21.7266 10.4548C21.6797 10.5017 21.6161 10.528 21.5498 10.528H9.0528C8.9865 10.528 8.92291 10.5017 8.87603 10.4548C8.82914 10.4079 8.8028 10.3443 8.8028 10.278V3.778C8.8028 3.7117 8.82914 3.64811 8.87603 3.60122C8.92291 3.55434 8.9865 3.528 9.0528 3.528H21.5528C21.6191 3.528 21.6827 3.55434 21.7296 3.60122C21.7765 3.64811 21.8028 3.7117 21.8028 3.778L21.7998 10.278ZM15.3032 9.028C16.4078 9.028 17.3032 8.13257 17.3032 7.028C17.3032 5.92343 16.4078 5.028 15.3032 5.028C14.1987 5.028 13.3032 5.92343 13.3032 7.028C13.3032 8.13257 14.1987 9.028 15.3032 9.028ZM20.1888 16.527H20.1998C20.6066 16.3917 21.0415 16.3641 21.4622 16.447C21.8828 16.5299 22.2747 16.7204 22.5998 17C22.6681 17.0532 22.722 17.1227 22.7565 17.2021C22.791 17.2815 22.8051 17.3682 22.7974 17.4545C22.7898 17.5407 22.7606 17.6236 22.7126 17.6957C22.6647 17.7678 22.5994 17.8267 22.5228 17.867C16.5163 20.9055 14.6737 22.3157 12.7382 22.4575C11.0524 22.581 9.29617 21.7422 4.65678 20.179C4.51533 20.1319 4.36525 20.1164 4.21716 20.1337C4.06908 20.151 3.92659 20.2006 3.79978 20.279L0.578782 22.289C0.541011 22.3129 0.497515 22.3261 0.452855 22.3274C0.408194 22.3287 0.364015 22.3179 0.324949 22.2962C0.285883 22.2745 0.253371 22.2427 0.23082 22.2042C0.20827 22.1656 0.196513 22.1217 0.196782 22.077V16.683C0.196691 16.6365 0.209555 16.5909 0.233932 16.5514C0.258309 16.5118 0.293232 16.4798 0.334782 16.459L3.35178 14.951C3.90719 14.673 4.5197 14.5282 5.14078 14.528H7.19978C8.65522 14.6068 10.0514 15.1304 11.1998 16.028H14.6998C14.965 16.028 15.2194 16.1334 15.4069 16.3209C15.5944 16.5084 15.6998 16.7628 15.6998 17.028C15.6998 17.2932 15.5944 17.5476 15.4069 17.7351C15.2194 17.9226 14.965 18.028 14.6998 18.028H10.6998C10.5672 18.028 10.44 18.0807 10.3462 18.1744C10.2525 18.2682 10.1998 18.3954 10.1998 18.528C10.1998 18.6606 10.2525 18.7878 10.3462 18.8816C10.44 18.9753 10.5672 19.028 10.6998 19.028H14.6998C15.0848 19.0263 15.4612 18.9135 15.7837 18.7031C16.1062 18.4927 16.3611 18.1937 16.5178 17.842C16.5318 17.8089 16.5527 17.7791 16.5791 17.7546C16.6055 17.7302 16.6367 17.7115 16.6708 17.7L20.1888 16.527Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$t = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.4261 15.353C17.9243 15.3532 19.389 14.9091 20.6349 14.0768C21.8807 13.2445 22.8518 12.0615 23.4252 10.6773C23.9987 9.2931 24.1488 7.76994 23.8565 6.30044C23.5643 4.83094 22.8428 3.48112 21.7834 2.42167C20.7239 1.36223 19.3741 0.64076 17.9046 0.348509C16.4351 0.0562579 14.912 0.206352 13.5278 0.77981C12.1436 1.35327 10.9605 2.32433 10.1283 3.57019C9.29598 4.81604 8.85185 6.28073 8.85205 7.77901C8.85417 9.78711 9.65282 11.7124 11.0728 13.1323C12.4927 14.5522 14.418 15.3509 16.4261 15.353ZM16.4261 2.20401C17.5287 2.20381 18.6067 2.53061 19.5236 3.14308C20.4406 3.75555 21.1553 4.62617 21.5774 5.64485C21.9995 6.66353 22.1101 7.78451 21.8951 8.86602C21.6801 9.94753 21.1492 10.941 20.3695 11.7208C19.5899 12.5006 18.5965 13.0316 17.515 13.2468C16.4336 13.462 15.3126 13.3517 14.2938 12.9297C13.2751 12.5078 12.4043 11.7932 11.7917 10.8764C11.179 9.95959 10.8521 8.88168 10.8521 7.77901C10.8526 6.30039 11.4398 4.88242 12.4849 3.83641C13.53 2.7904 14.9474 2.20186 16.4261 2.20001V2.20401ZM17.1879 9.41501H14.7499C14.551 9.41501 14.3602 9.49402 14.2196 9.63468C14.0789 9.77533 13.9999 9.96609 13.9999 10.165C13.9999 10.3639 14.0789 10.5547 14.2196 10.6953C14.3602 10.836 14.551 10.915 14.7499 10.915H15.3749C15.4412 10.915 15.5048 10.9413 15.5517 10.9882C15.5986 11.0351 15.6249 11.0987 15.6249 11.165V11.384C15.6249 11.5829 15.7039 11.7737 15.8446 11.9143C15.9852 12.055 16.176 12.134 16.3749 12.134C16.5738 12.134 16.7646 12.055 16.9053 11.9143C17.0459 11.7737 17.1249 11.5829 17.1249 11.384V10.978C17.1249 10.9613 17.1316 10.9453 17.1434 10.9335C17.1552 10.9216 17.1712 10.915 17.1879 10.915C17.3974 10.9321 17.608 10.9034 17.8053 10.831C18.0026 10.7585 18.1817 10.644 18.3303 10.4954C18.4789 10.3468 18.5934 10.1677 18.6659 9.97039C18.7383 9.77313 18.767 9.56246 18.7499 9.35301C18.7499 8.42201 17.7999 7.78201 16.7939 7.10601C16.356 6.83223 15.9415 6.5225 15.5549 6.18001C15.5205 6.14184 15.5013 6.09239 15.5009 6.04101H17.9999C18.1988 6.04101 18.3896 5.96199 18.5303 5.82134C18.6709 5.68068 18.7499 5.48992 18.7499 5.29101C18.7499 5.09209 18.6709 4.90133 18.5303 4.76068C18.3896 4.62002 18.1988 4.54101 17.9999 4.54101H17.3749C17.3086 4.54101 17.245 4.51467 17.1982 4.46778C17.1513 4.4209 17.1249 4.35731 17.1249 4.29101V4.07201C17.1249 3.87309 17.0459 3.68233 16.9053 3.54168C16.7646 3.40102 16.5738 3.32201 16.3749 3.32201C16.176 3.32201 15.9852 3.40102 15.8446 3.54168C15.7039 3.68233 15.6249 3.87309 15.6249 4.07201V4.47801C15.6247 4.49454 15.6179 4.51031 15.6061 4.52191C15.5943 4.53351 15.5785 4.54001 15.5619 4.54001C15.3513 4.51693 15.1383 4.5414 14.9384 4.61161C14.7385 4.68182 14.557 4.79598 14.4071 4.94568C14.2572 5.09538 14.1428 5.2768 14.0723 5.47658C14.0019 5.67635 13.9771 5.8894 13.9999 6.10001C13.9999 7.03001 14.9499 7.67001 15.9559 8.34701C16.3985 8.62234 16.8164 8.93551 17.2049 9.28301C17.2346 9.31847 17.25 9.36378 17.2479 9.41001L17.1879 9.41501ZM19.995 17.851H20.005C20.412 17.7147 20.8473 17.6864 21.2685 17.7688C21.6898 17.8512 22.0824 18.0414 22.408 18.321C22.476 18.3748 22.5294 18.4448 22.5632 18.5246C22.5971 18.6044 22.6105 18.6914 22.602 18.7777C22.5936 18.864 22.5636 18.9467 22.5148 19.0184C22.4661 19.0901 22.4001 19.1484 22.323 19.188C16.3165 22.2265 14.4739 23.6367 12.5385 23.7785C10.8527 23.902 9.09639 23.0632 4.457 21.5C4.31555 21.4529 4.16547 21.4374 4.01738 21.4547C3.8693 21.472 3.72681 21.5216 3.6 21.6L0.382001 23.619C0.344215 23.6425 0.300816 23.6555 0.25632 23.6565C0.211824 23.6576 0.167859 23.6467 0.129001 23.625C0.0898915 23.6036 0.05727 23.5721 0.0345689 23.5337C0.0118678 23.4954 -7.36214e-05 23.4516 3.41506e-07 23.407V18.007C0.000208695 17.9607 0.0132077 17.9154 0.0375616 17.8761C0.0619154 17.8367 0.0966757 17.8048 0.138001 17.784L3.156 16.275C3.71108 15.9972 4.32329 15.8527 4.944 15.853H7C8.45544 15.9318 9.85163 16.4554 11 17.353H14.5C14.7652 17.353 15.0196 17.4584 15.2071 17.6459C15.3946 17.8334 15.5 18.0878 15.5 18.353C15.5 18.6182 15.3946 18.8726 15.2071 19.0601C15.0196 19.2477 14.7652 19.353 14.5 19.353H10.5C10.3674 19.353 10.2402 19.4057 10.1464 19.4995C10.0527 19.5932 10 19.7204 10 19.853C10 19.9856 10.0527 20.1128 10.1464 20.2066C10.2402 20.3003 10.3674 20.353 10.5 20.353H14.5C14.8862 20.3514 15.2637 20.2379 15.5868 20.0264C15.91 19.8149 16.165 19.5143 16.321 19.161C16.335 19.1279 16.3559 19.0981 16.3823 19.0736C16.4087 19.0492 16.4399 19.0305 16.474 19.019L19.995 17.851Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$u = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9963 8.81854 22.7308 5.76845 20.4812 3.51881C18.2316 1.26918 15.1815 0.00370522 12 0V0ZM18.927 8.2L12.082 17.489C12.0012 17.5962 11.8998 17.6863 11.7838 17.7539C11.6678 17.8215 11.5395 17.8654 11.4064 17.8829C11.2733 17.9004 11.138 17.8912 11.0085 17.8558C10.879 17.8205 10.7578 17.7597 10.652 17.677L5.76401 13.769C5.66144 13.6869 5.57605 13.5855 5.5127 13.4704C5.44936 13.3553 5.4093 13.2289 5.39481 13.0983C5.36556 12.8346 5.44224 12.5701 5.60801 12.363C5.77377 12.1559 6.01502 12.0231 6.2787 11.9938C6.54237 11.9646 6.80687 12.0412 7.01401 12.207L11.09 15.468L17.317 7.017C17.392 6.90451 17.489 6.80838 17.6021 6.73443C17.7153 6.66048 17.8423 6.61025 17.9754 6.58676C18.1085 6.56327 18.245 6.56702 18.3767 6.59777C18.5083 6.62853 18.6323 6.68565 18.7413 6.7657C18.8502 6.84574 18.9418 6.94705 19.0105 7.06348C19.0792 7.17992 19.1235 7.30907 19.1409 7.44313C19.1582 7.57719 19.1482 7.71339 19.1115 7.84347C19.0747 7.97356 19.012 8.09485 18.927 8.2Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$v = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9963 8.81854 22.7308 5.76845 20.4812 3.51881C18.2316 1.26918 15.1815 0.00370522 12 0V0ZM18.927 8.2L12.082 17.489C12.0012 17.5962 11.8998 17.6863 11.7838 17.7539C11.6678 17.8215 11.5395 17.8654 11.4064 17.8829C11.2733 17.9004 11.138 17.8912 11.0085 17.8558C10.879 17.8205 10.7578 17.7597 10.652 17.677L5.76401 13.769C5.66144 13.6869 5.57605 13.5855 5.5127 13.4704C5.44936 13.3553 5.4093 13.2289 5.39481 13.0983C5.36556 12.8346 5.44224 12.5701 5.60801 12.363C5.77377 12.1559 6.01502 12.0231 6.2787 11.9938C6.54237 11.9646 6.80687 12.0412 7.01401 12.207L11.09 15.468L17.317 7.017C17.392 6.90451 17.489 6.80838 17.6021 6.73443C17.7153 6.66048 17.8423 6.61025 17.9754 6.58676C18.1085 6.56327 18.245 6.56702 18.3767 6.59777C18.5083 6.62853 18.6323 6.68565 18.7413 6.7657C18.8502 6.84574 18.9418 6.94705 19.0105 7.06348C19.0792 7.17992 19.1235 7.30907 19.1409 7.44313C19.1582 7.57719 19.1482 7.71339 19.1115 7.84347C19.0747 7.97356 19.012 8.09485 18.927 8.2Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$w = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.5408 3.21082C20.2982 3.03688 19.9964 2.96644 19.7018 3.01499C19.4073 3.06355 19.1441 3.22711 18.9701 3.46972L8.43775 18.1543L4.92196 14.6355C4.81745 14.5309 4.69337 14.4479 4.5568 14.3913C4.42023 14.3347 4.27385 14.3056 4.12601 14.3055C3.97818 14.3055 3.83178 14.3346 3.69519 14.3911C3.55859 14.4477 3.43447 14.5306 3.32991 14.6351C3.22535 14.7396 3.1424 14.8637 3.08579 15.0002C3.02919 15.1368 3.00003 15.2832 3 15.431C2.99997 15.5789 3.02905 15.7253 3.08559 15.8619C3.14213 15.9984 3.22503 16.1226 3.32954 16.2271L7.78337 20.6802C7.90031 20.7927 8.03983 20.8791 8.19269 20.9336C8.34555 20.9881 8.50824 21.0094 8.66998 20.9962C8.83172 20.983 8.9888 20.9356 9.1308 20.857C9.2728 20.7785 9.39648 20.6706 9.49362 20.5406L20.7997 4.78148C20.9736 4.53886 21.0441 4.23709 20.9955 3.94253C20.947 3.64798 20.7834 3.38478 20.5408 3.21082Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$x = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.4848 6.166C18.9092 6.50148 18.9814 7.11751 18.6459 7.54196L10.9678 17.2563C10.7753 17.5068 10.5264 17.7084 10.2413 17.8446C9.95288 17.9823 9.63572 18.0492 9.31622 18.0397C8.99672 18.0301 8.68412 17.9444 8.40442 17.7897C8.12872 17.6371 7.89286 17.4219 7.71586 17.1613L5.32148 13.7633C5.00986 13.321 5.11576 12.7099 5.55801 12.3982C6.00026 12.0866 6.61139 12.1925 6.92302 12.6348L9.32302 16.0408L9.33627 16.0601C9.34052 16.0665 9.34623 16.0717 9.35292 16.0754C9.35961 16.0791 9.36708 16.0812 9.37473 16.0814C9.38237 16.0816 9.38995 16.08 9.39685 16.0767C9.40375 16.0734 9.40976 16.0685 9.41438 16.0624L9.42589 16.0476L17.1088 6.3271C17.4443 5.90265 18.0603 5.83053 18.4848 6.166Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$y = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M11.9787 17C11.7334 17.0003 11.4909 16.9483 11.2673 16.8474C11.0437 16.7465 10.8441 16.5991 10.682 16.415L3.32408 8.05137C3.09152 7.77422 2.97663 7.41708 3.00396 7.05632C3.0313 6.69556 3.1987 6.35981 3.47036 6.12087C3.74203 5.88193 4.0964 5.75875 4.45769 5.77769C4.81899 5.79663 5.15855 5.95617 5.40374 6.2222L11.8377 13.5359C11.8553 13.556 11.877 13.5721 11.9013 13.5831C11.9256 13.5941 11.952 13.5998 11.9787 13.5998C12.0054 13.5998 12.0318 13.5941 12.0561 13.5831C12.0804 13.5721 12.1021 13.556 12.1197 13.5359L18.5537 6.2222C18.6724 6.08078 18.8181 5.9645 18.9824 5.88021C19.1466 5.79591 19.3261 5.74531 19.5101 5.73136C19.6942 5.71741 19.8793 5.7404 20.0543 5.79898C20.2294 5.85756 20.391 5.95055 20.5296 6.07248C20.6683 6.19441 20.7811 6.34282 20.8616 6.50898C20.942 6.67515 20.9884 6.85573 20.9981 7.04009C21.0078 7.22446 20.9805 7.40889 20.9178 7.58256C20.8552 7.75623 20.7585 7.91562 20.6334 8.05138L13.2777 16.412C13.1153 16.5966 12.9154 16.7445 12.6915 16.8458C12.4675 16.9472 12.2246 16.9998 11.9787 17Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$z = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M6 11.9787C5.9997 11.7334 6.05172 11.4909 6.15259 11.2673C6.25347 11.0437 6.40087 10.8441 6.58498 10.682L14.9486 3.32408C15.2258 3.09152 15.5829 2.97663 15.9437 3.00396C16.3044 3.0313 16.6402 3.1987 16.8791 3.47036C17.1181 3.74203 17.2412 4.09639 17.2223 4.45769C17.2034 4.81899 17.0438 5.15854 16.7778 5.40374L9.46411 11.8377C9.44403 11.8553 9.42794 11.877 9.41692 11.9013C9.4059 11.9256 9.4002 11.952 9.4002 11.9787C9.4002 12.0054 9.4059 12.0318 9.41692 12.0561C9.42794 12.0804 9.44403 12.1021 9.46411 12.1197L16.7778 18.5537C16.9192 18.6724 17.0355 18.8181 17.1198 18.9824C17.2041 19.1466 17.2547 19.3261 17.2686 19.5101C17.2826 19.6942 17.2596 19.8793 17.201 20.0543C17.1424 20.2294 17.0495 20.391 16.9275 20.5296C16.8056 20.6683 16.6572 20.7811 16.491 20.8616C16.3249 20.942 16.1443 20.9884 15.9599 20.9981C15.7755 21.0078 15.5911 20.9805 15.4174 20.9178C15.2438 20.8552 15.0844 20.7585 14.9486 20.6334L6.58798 13.2777C6.40342 13.1153 6.25554 12.9154 6.15416 12.6915C6.05279 12.4675 6.00023 12.2246 6 11.9787Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$A = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M18 11.9787C18.0003 11.7334 17.9483 11.4909 17.8474 11.2673C17.7465 11.0437 17.5991 10.8441 17.415 10.682L9.05137 3.32408C8.77422 3.09152 8.41708 2.97663 8.05632 3.00396C7.69556 3.0313 7.35981 3.1987 7.12087 3.47036C6.88193 3.74203 6.75875 4.09639 6.77769 4.45769C6.79663 4.81899 6.95617 5.15854 7.2222 5.40374L14.5359 11.8377C14.556 11.8553 14.5721 11.877 14.5831 11.9013C14.5941 11.9256 14.5998 11.952 14.5998 11.9787C14.5998 12.0054 14.5941 12.0318 14.5831 12.0561C14.5721 12.0804 14.556 12.1021 14.5359 12.1197L7.2222 18.5537C7.08077 18.6724 6.9645 18.8181 6.88021 18.9824C6.79591 19.1466 6.7453 19.3261 6.73135 19.5101C6.71741 19.6942 6.7404 19.8793 6.79898 20.0543C6.85756 20.2294 6.95055 20.391 7.07248 20.5296C7.1944 20.6683 7.34281 20.7811 7.50898 20.8616C7.67515 20.942 7.85572 20.9884 8.04009 20.9981C8.22445 21.0078 8.40889 20.9805 8.58256 20.9178C8.75623 20.8552 8.91562 20.7585 9.05137 20.6334L17.412 13.2777C17.5966 13.1153 17.7445 12.9154 17.8458 12.6915C17.9472 12.4675 17.9998 12.2246 18 11.9787Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$B = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M11.9787 6C11.7334 5.9997 11.4909 6.05172 11.2673 6.15259C11.0437 6.25347 10.8441 6.40087 10.682 6.58498L3.32408 14.9486C3.09152 15.2258 2.97663 15.5829 3.00396 15.9437C3.0313 16.3044 3.1987 16.6402 3.47036 16.8791C3.74203 17.1181 4.0964 17.2412 4.45769 17.2223C4.81899 17.2034 5.15855 17.0438 5.40374 16.7778L11.8377 9.46411C11.8553 9.44403 11.877 9.42794 11.9013 9.41692C11.9256 9.4059 11.952 9.4002 11.9787 9.4002C12.0054 9.4002 12.0318 9.4059 12.0561 9.41692C12.0804 9.42794 12.1021 9.44403 12.1197 9.46411L18.5537 16.7778C18.6724 16.9192 18.8181 17.0355 18.9824 17.1198C19.1466 17.2041 19.3261 17.2547 19.5101 17.2686C19.6942 17.2826 19.8793 17.2596 20.0543 17.201C20.2294 17.1424 20.391 17.0495 20.5296 16.9275C20.6683 16.8056 20.7811 16.6572 20.8616 16.491C20.942 16.3248 20.9884 16.1443 20.9981 15.9599C21.0078 15.7755 20.9805 15.5911 20.9178 15.4174C20.8552 15.2438 20.7585 15.0844 20.6334 14.9486L13.2777 6.58798C13.1153 6.40342 12.9154 6.25554 12.6915 6.15416C12.4675 6.05278 12.2246 6.00023 11.9787 6Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$C = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.75 12.999C0.75 6.23354 6.23451 0.749023 13 0.749023C19.7655 0.749023 25.25 6.23354 25.25 12.999C25.25 19.7645 19.7655 25.249 13 25.249C6.23451 25.249 0.75 19.7645 0.75 12.999Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$D = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$E = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$F = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C23.993 5.376 18.624 0.007 12 0ZM17.2 17.221C16.823 17.62 16.197 17.647 15.787 17.283L10.828 12.737C10.62 12.548 10.501 12.281 10.5 12V6.5C10.5 5.948 10.948 5.5 11.5 5.5C12.052 5.5 12.5 5.948 12.5 6.5V11.56L17.134 15.808C17.543 16.18 17.573 16.812 17.201 17.221C17.201 17.221 17.2 17.222 17.2 17.221Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$G = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.4885 3.51072C15.7985 -1.17357 8.198 -1.16957 3.512 3.51872C-1.174 8.20702 -1.17 15.8047 3.52001 20.489C8.20701 25.1703 15.8015 25.1703 20.4885 20.489C25.1705 15.7977 25.1705 8.20202 20.4885 3.51072ZM16.7063 15.2805C17.0756 15.6917 17.0416 16.324 16.6302 16.6932C16.2509 17.0333 15.6764 17.0343 15.2961 16.6962L12.1834 13.5847C12.0853 13.4876 11.9272 13.4876 11.8291 13.5847L8.71745 16.6962C8.32211 17.0774 7.69658 17.0774 7.30124 16.6962C6.9099 16.306 6.9099 15.6727 7.30024 15.2815L7.30124 15.2805L10.4139 12.17C10.511 12.0729 10.512 11.9148 10.4149 11.8178L10.4139 11.8168L7.30124 8.70526C6.92892 8.29606 6.95895 7.66375 7.3683 7.29157C7.74862 6.9454 8.33012 6.9444 8.71244 7.28957L11.8241 10.4011C11.9222 10.4991 12.0803 10.4991 12.1784 10.4011L15.2911 7.28957C15.6824 6.89938 16.3159 6.89938 16.7063 7.29057C17.0966 7.68176 17.0966 8.31507 16.7063 8.70526L13.5936 11.8168C13.4965 11.9148 13.4965 12.0719 13.5936 12.17L16.7063 15.2805Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$H = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M13.7247 12.1326C13.7072 12.1152 13.6934 12.0945 13.6839 12.0717C13.6744 12.049 13.6696 12.0246 13.6696 11.9999C13.6696 11.9752 13.6744 11.9508 13.6839 11.928C13.6934 11.9053 13.7072 11.8846 13.7247 11.8671L20.6716 4.92092C20.8826 4.70969 21.001 4.42331 21.0008 4.12479C21.0005 3.82626 20.8818 3.54005 20.6705 3.32911C20.4593 3.11817 20.1729 2.99979 19.8744 3C19.5759 3.00021 19.2896 3.119 19.0787 3.33024L12.1325 10.2735C12.1151 10.2909 12.0944 10.3048 12.0716 10.3142C12.0488 10.3237 12.0244 10.3285 11.9997 10.3285C11.9751 10.3285 11.9507 10.3237 11.9279 10.3142C11.9051 10.3048 11.8844 10.2909 11.867 10.2735L4.92077 3.33024C4.81632 3.22574 4.69232 3.14284 4.55583 3.08627C4.41935 3.0297 4.27306 3.00057 4.12532 3.00053C3.82693 3.00046 3.54074 3.11892 3.32971 3.32986C3.11867 3.5408 3.00007 3.82693 3 4.12532C2.99993 4.4237 3.11839 4.70989 3.32933 4.92092L10.2748 11.8671C10.2923 11.8846 10.3061 11.9053 10.3156 11.928C10.325 11.9508 10.3299 11.9752 10.3299 11.9999C10.3299 12.0246 10.325 12.049 10.3156 12.0717C10.3061 12.0945 10.2923 12.1152 10.2748 12.1326L3.32933 19.0796C3.22489 19.1841 3.14204 19.3081 3.08554 19.4447C3.02903 19.5812 2.99997 19.7275 3 19.8752C3.00007 20.1736 3.11867 20.4597 3.32971 20.6707C3.4342 20.7751 3.55825 20.858 3.69476 20.9145C3.83127 20.971 3.97757 21 4.12532 21C4.4237 20.9999 4.70983 20.8813 4.92077 20.6703L11.867 13.7233C11.8844 13.7059 11.9051 13.692 11.9279 13.6826C11.9507 13.6731 11.9751 13.6682 11.9997 13.6682C12.0244 13.6682 12.0488 13.6731 12.0716 13.6826C12.0944 13.692 12.1151 13.7059 12.1325 13.7233L19.0787 20.6703C19.2896 20.8813 19.5758 20.9999 19.8742 21C20.1725 21.0001 20.4587 20.8816 20.6698 20.6707C20.8808 20.4597 20.9994 20.1736 20.9995 19.8752C20.9995 19.5768 20.8811 19.2906 20.6701 19.0796L13.7247 12.1326Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$I = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM17.0998 6.89912C17.4824 7.28166 17.4824 7.9019 17.0999 8.28447L13.3849 11.9999L17.1008 15.7154C17.4834 16.098 17.4834 16.7182 17.1009 17.1008C16.7184 17.4834 16.0981 17.4834 15.7155 17.1009L11.9996 13.3853L8.28455 17.1008C7.90202 17.4834 7.28177 17.4834 6.8992 17.1009C6.51662 16.7183 6.51659 16.0981 6.89912 15.7155L10.6142 12.0001L6.89824 8.28455C6.51567 7.90202 6.51563 7.28177 6.89817 6.8992C7.2807 6.51662 7.90094 6.51659 8.28352 6.89912L11.9994 10.6146L15.7145 6.8992C16.097 6.51662 16.7172 6.51659 17.0998 6.89912Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$J = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.3332 1.26398C14.5666 0.439867 16.0166 0 17.5 0C19.4885 0.00211765 21.3949 0.792974 22.801 2.19904C24.207 3.6051 24.9979 5.51153 25 7.5C25 8.98336 24.5601 10.4334 23.736 11.6668C22.9119 12.9001 21.7406 13.8614 20.3701 14.4291C18.9997 14.9968 17.4917 15.1453 16.0368 14.8559C14.582 14.5665 13.2456 13.8522 12.1967 12.8033C11.1478 11.7544 10.4335 10.418 10.1441 8.96318C9.85472 7.50832 10.0033 6.00032 10.5709 4.62987C11.1386 3.25943 12.0999 2.08809 13.3332 1.26398ZM16.9697 12.9883C17.1103 13.129 17.3011 13.208 17.5 13.208C17.6986 13.2088 17.8894 13.1308 18.0305 12.9912C18.1717 12.8515 18.2517 12.6616 18.253 12.463V11.963C18.253 11.903 18.2745 11.8451 18.3136 11.7996C18.3527 11.7541 18.4067 11.7241 18.466 11.715C18.9687 11.6412 19.4331 11.4036 19.7871 11.039C20.1411 10.6745 20.3649 10.2034 20.424 9.69866C20.483 9.19396 20.3738 8.68389 20.1135 8.24751C19.8532 7.81113 19.4562 7.47281 18.984 7.285L16.578 6.322C16.4022 6.25186 16.2562 6.1227 16.1652 5.95669C16.0743 5.79068 16.0439 5.59817 16.0794 5.41222C16.1149 5.22627 16.214 5.05847 16.3597 4.93763C16.5054 4.81679 16.6887 4.75045 16.878 4.75H19.247C19.4459 4.75 19.6367 4.67098 19.7773 4.53033C19.918 4.38968 19.997 4.19891 19.997 4C19.997 3.80109 19.918 3.61032 19.7773 3.46967C19.6367 3.32902 19.4459 3.25 19.247 3.25H18.497C18.4307 3.25 18.3671 3.22366 18.3202 3.17678C18.2733 3.12989 18.247 3.0663 18.247 3V2.537C18.247 2.33809 18.168 2.14732 18.0273 2.00667C17.8867 1.86602 17.6959 1.787 17.497 1.787C17.2981 1.787 17.1073 1.86602 16.9667 2.00667C16.826 2.14732 16.747 2.33809 16.747 2.537V3.037C16.747 3.09697 16.7255 3.15494 16.6864 3.20043C16.6473 3.24592 16.5933 3.27592 16.534 3.285C16.0307 3.35806 15.5657 3.59531 15.2111 3.95987C14.8565 4.32443 14.6323 4.79589 14.5732 5.30101C14.5141 5.80612 14.6236 6.3166 14.8845 6.75313C15.1454 7.18966 15.5432 7.5278 16.016 7.715L18.422 8.678C18.5978 8.74814 18.7438 8.8773 18.8348 9.04331C18.9257 9.20932 18.9561 9.40183 18.9206 9.58778C18.8851 9.77373 18.786 9.94153 18.6403 10.0624C18.4946 10.1832 18.3113 10.2495 18.122 10.25H15.75C15.5511 10.25 15.3603 10.329 15.2197 10.4697C15.079 10.6103 15 10.8011 15 11C15 11.1989 15.079 11.3897 15.2197 11.5303C15.3603 11.671 15.5511 11.75 15.75 11.75H16.5C16.5663 11.75 16.6299 11.7763 16.6768 11.8232C16.7237 11.8701 16.75 11.9337 16.75 12V12.458C16.75 12.6569 16.829 12.8477 16.9697 12.9883ZM8.58481 9.06437C8.63007 9.10087 8.6612 9.15201 8.67282 9.20899C9.01588 10.9701 9.87689 12.5886 11.1456 13.8573C12.4142 15.1259 14.0328 15.9869 15.7938 16.33C15.8508 16.3416 15.9019 16.3727 15.9384 16.418C15.9749 16.4633 15.9945 16.5198 15.9938 16.578C15.9802 18.0554 15.5305 19.4958 14.7011 20.7186C13.8718 21.9413 12.6998 22.8919 11.3322 23.451C9.96463 24.01 8.46237 24.1527 7.01397 23.8612C5.56558 23.5696 4.23556 22.8567 3.19084 21.812C2.14612 20.7673 1.43324 19.4372 1.14165 17.9888C0.85007 16.5404 0.992773 15.0382 1.55186 13.6706C2.11094 12.303 3.0615 11.131 4.28424 10.3017C5.50698 9.47236 6.94743 9.02265 8.42482 9.00899C8.48297 9.00828 8.53954 9.02786 8.58481 9.06437ZM10.1802 14.7633C10.3208 14.6227 10.3998 14.4319 10.3998 14.233C10.3998 14.0341 10.3208 13.8433 10.1802 13.7027C10.0395 13.562 9.84874 13.483 9.64982 13.483H9.24982C9.18352 13.483 9.11993 13.4567 9.07305 13.4098C9.02616 13.3629 8.99982 13.2993 8.99982 13.233V13.066C8.99982 12.8671 8.92081 12.6763 8.78015 12.5357C8.6395 12.395 8.44874 12.316 8.24982 12.316C8.05091 12.316 7.86015 12.395 7.71949 12.5357C7.57884 12.6763 7.49982 12.8671 7.49982 13.066V13.3C7.50074 13.3567 7.48234 13.4121 7.44762 13.457C7.41291 13.5019 7.36397 13.5336 7.30882 13.547C6.89544 13.6434 6.52346 13.8689 6.24671 14.1907C5.96995 14.5126 5.80277 14.9141 5.76936 15.3373C5.73596 15.7605 5.83805 16.1833 6.06087 16.5446C6.2837 16.9059 6.61569 17.1869 7.00882 17.347L8.93582 18.117C9.02883 18.1543 9.10849 18.2186 9.16448 18.3017C9.22047 18.3848 9.2502 18.4828 9.24982 18.583C9.24982 18.7156 9.19715 18.8428 9.10338 18.9365C9.00961 19.0303 8.88243 19.083 8.74982 19.083H6.84982C6.65091 19.083 6.46015 19.162 6.31949 19.3027C6.17884 19.4433 6.09982 19.6341 6.09982 19.833C6.09982 20.0319 6.17884 20.2227 6.31949 20.3633C6.46015 20.504 6.65091 20.583 6.84982 20.583H7.24982C7.31613 20.583 7.37972 20.6093 7.4266 20.6562C7.47348 20.7031 7.49982 20.7667 7.49982 20.833V21C7.49982 21.1989 7.57884 21.3897 7.71949 21.5303C7.86015 21.671 8.05091 21.75 8.24982 21.75C8.44874 21.75 8.6395 21.671 8.78015 21.5303C8.92081 21.3897 8.99982 21.1989 8.99982 21V20.767C8.99948 20.711 9.01791 20.6566 9.05218 20.6123C9.08644 20.5681 9.13456 20.5366 9.18882 20.523C9.60458 20.4295 9.97948 20.2053 10.2586 19.8833C10.5377 19.5613 10.7064 19.1584 10.74 18.7336C10.7735 18.3088 10.6701 17.8844 10.445 17.5226C10.2198 17.1608 9.88476 16.8806 9.48882 16.723L7.56282 15.952C7.45152 15.911 7.3584 15.8318 7.30012 15.7285C7.24184 15.6252 7.22217 15.5045 7.24465 15.388C7.26713 15.2716 7.33027 15.1669 7.42281 15.0927C7.51535 15.0185 7.63126 14.9796 7.74982 14.983H9.64982C9.84874 14.983 10.0395 14.904 10.1802 14.7633Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$K = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M13.338 12.5l1.162-1.22L8 4.5l-6.5 6.787L2.662 12.5 8 6.927z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$L = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C23.993 5.376 18.624 0.007 12 0ZM18.639 12.854L12.352 19.14C12.157 19.335 11.84 19.335 11.645 19.14L5.359 12.854C5.163 12.659 5.163 12.342 5.358 12.147C5.452 12.053 5.58 12 5.713 12H9.5C9.638 12 9.75 11.888 9.75 11.75V5.5C9.75 5.224 9.974 5 10.25 5H13.742C14.018 5 14.242 5.224 14.242 5.5V11.75C14.242 11.888 14.354 12 14.492 12H18.281C18.557 11.997 18.783 12.219 18.786 12.495C18.787 12.63 18.734 12.759 18.639 12.854Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Image = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        width: "360",
        height: "264",
        viewBox: "0 0 360 264",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M167.801 107.55C166.756 108.594 165.062 108.595 164.017 107.55L153.698 97.2306C152.653 96.1861 152.654 94.4918 153.698 93.4473C154.743 92.4028 156.437 92.4022 157.482 93.4467L167.801 103.766C168.846 104.811 168.845 106.505 167.801 107.55ZM196.529 97.2306L186.21 107.55C185.166 108.594 183.471 108.594 182.426 107.55C181.381 106.504 181.382 104.81 182.426 103.766L192.745 93.4467C193.79 92.4022 195.484 92.4016 196.529 93.4467C197.574 94.4913 197.574 96.1861 196.529 97.2306Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M177.006 103.22C176.521 103.705 175.852 104.004 175.114 104.004C173.636 104.004 172.439 102.806 172.439 101.328L172.439 86.7352C172.439 85.2577 173.638 84.0593 175.114 84.0593C176.592 84.0599 177.79 85.2577 177.79 86.7358L177.789 101.328C177.789 102.067 177.49 102.736 177.006 103.22Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M122.321 137.878C128 136.263 136 129.763 145.562 122.763H154.414L155.551 122.763C159.97 122.763 163.551 126.344 163.551 130.763V165.591C163.551 170.009 159.97 173.591 155.551 173.591H154.414L145.562 173.591C135.192 173.591 126.273 167.38 122.321 158.476C122.109 158.493 121.895 158.501 121.678 158.501H121C116.582 158.501 113 154.92 113 150.501V145.852C113 143.5 117.26 146.5 121.678 146.5L121.678 137.852C121.894 137.852 122.109 137.861 122.321 137.878Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M225.23 137.878C221.278 128.973 212.359 122.763 201.99 122.763H193.137L192 122.763C187.582 122.763 184 126.344 184 130.763V165.591C184 170.009 187.582 173.591 192 173.591H193.138L201.99 173.591C212.359 173.591 221.278 167.38 225.23 158.476C225.442 158.493 225.657 158.501 225.873 158.501H226.551C230.97 158.501 234.551 154.92 234.551 150.501V147C229.5 147 228 147 226.551 141.263L225.873 137.852C225.657 137.852 225.442 137.861 225.23 137.878Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M90.4592 122.783C89.2669 121.729 87.3887 122.575 87.3887 124.167C87.3887 124.701 87.6197 125.208 88.0222 125.559L106.356 141.54C107.19 142.267 108.195 142.768 109.276 142.998L124.522 146.24C125.531 146.454 126.481 145.685 126.481 144.654C126.481 143.917 125.983 143.272 125.27 143.086L110.638 139.256C109.198 138.88 107.867 138.17 106.752 137.184L90.4592 122.783ZM84.3887 124.167C84.3887 119.991 89.3172 117.769 92.4461 120.535L108.739 134.936C109.502 135.611 110.413 136.096 111.398 136.354L126.029 140.183C128.063 140.715 129.481 142.552 129.481 144.654C129.481 147.593 126.773 149.785 123.899 149.174L108.652 145.933C107.072 145.597 105.603 144.863 104.385 143.802L86.0509 127.821C84.9949 126.9 84.3887 125.568 84.3887 124.167Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M263.326 159.891C264.679 160.728 266.387 159.577 266.119 158.008C266.029 157.482 265.715 157.021 265.259 156.743L244.49 144.086C243.546 143.511 242.471 143.186 241.367 143.142L225.792 142.521C224.761 142.48 223.955 143.398 224.129 144.415C224.254 145.141 224.853 145.693 225.587 145.756L240.655 147.06C242.138 147.188 243.57 147.663 244.836 148.447L263.326 159.891ZM269.076 157.502C269.781 161.618 265.298 164.639 261.747 162.442L243.257 150.998C242.391 150.462 241.411 150.137 240.397 150.049L225.329 148.745C223.235 148.564 221.527 146.993 221.172 144.921C220.676 142.024 222.975 139.406 225.911 139.523L241.486 140.144C243.1 140.209 244.672 140.684 246.051 141.524L266.82 154.181C268.017 154.91 268.839 156.121 269.076 157.502Z",
        fill: "#19194B"
      }), h("path", {
        d: "M118.862 140.625C118.862 137.311 121.548 134.625 124.862 134.625H125.54C128.854 134.625 131.54 137.311 131.54 140.625V145.274C131.54 148.587 128.854 151.274 125.54 151.274H124.862C121.548 151.274 118.862 148.587 118.862 145.274V140.625Z",
        fill: "white",
        stroke: "#19194B",
        strokeWidth: "4"
      }), h("mask", {
        id: "path-8-inside-1",
        fill: "white"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M125.54 136.625H124.862C122.653 136.625 120.862 138.416 120.862 140.625V145.274C120.862 147.483 122.653 149.274 124.862 149.274H125.54C127.749 149.274 129.54 147.483 129.54 145.274V140.625C129.54 138.416 127.749 136.625 125.54 136.625ZM124.862 132.625C120.444 132.625 116.862 136.206 116.862 140.625V145.274C116.862 149.692 120.444 153.274 124.862 153.274H125.54C129.958 153.274 133.54 149.692 133.54 145.274V140.625C133.54 136.206 129.958 132.625 125.54 132.625H124.862Z"
      })), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M125.54 136.625H124.862C122.653 136.625 120.862 138.416 120.862 140.625V145.274C120.862 147.483 122.653 149.274 124.862 149.274H125.54C127.749 149.274 129.54 147.483 129.54 145.274V140.625C129.54 138.416 127.749 136.625 125.54 136.625ZM124.862 132.625C120.444 132.625 116.862 136.206 116.862 140.625V145.274C116.862 149.692 120.444 153.274 124.862 153.274H125.54C129.958 153.274 133.54 149.692 133.54 145.274V140.625C133.54 136.206 129.958 132.625 125.54 132.625H124.862Z",
        fill: "white"
      }), h("path", {
        d: "M124.862 140.625H125.54V132.625H124.862V140.625ZM124.862 140.625L124.862 140.625V132.625C120.444 132.625 116.862 136.206 116.862 140.625H124.862ZM124.862 145.274V140.625H116.862V145.274H124.862ZM124.862 145.274H124.862H116.862C116.862 149.692 120.444 153.274 124.862 153.274V145.274ZM125.54 145.274H124.862V153.274H125.54V145.274ZM125.54 145.274L125.54 145.274V153.274C129.958 153.274 133.54 149.692 133.54 145.274H125.54ZM125.54 140.625V145.274H133.54V140.625H125.54ZM125.54 140.625H125.54H133.54C133.54 136.206 129.958 132.625 125.54 132.625V140.625ZM120.862 140.625C120.862 138.416 122.653 136.625 124.862 136.625V128.625C118.235 128.625 112.862 133.997 112.862 140.625H120.862ZM120.862 145.274V140.625H112.862V145.274H120.862ZM124.862 149.274C122.653 149.274 120.862 147.483 120.862 145.274H112.862C112.862 151.901 118.235 157.274 124.862 157.274V149.274ZM125.54 149.274H124.862V157.274H125.54V149.274ZM129.54 145.274C129.54 147.483 127.749 149.274 125.54 149.274V157.274C132.168 157.274 137.54 151.901 137.54 145.274H129.54ZM129.54 140.625V145.274H137.54V140.625H129.54ZM125.54 136.625C127.749 136.625 129.54 138.416 129.54 140.625H137.54C137.54 133.997 132.168 128.625 125.54 128.625V136.625ZM124.862 136.625H125.54V128.625H124.862V136.625Z",
        fill: "#19194B",
        mask: "url(#path-8-inside-1)"
      }), h("path", {
        d: "M215.753 140.625C215.753 137.311 218.439 134.625 221.753 134.625H222.431C225.745 134.625 228.431 137.311 228.431 140.625V145.274C228.431 148.587 225.745 151.274 222.431 151.274H221.753C218.439 151.274 215.753 148.587 215.753 145.274V140.625Z",
        fill: "white",
        stroke: "#19194B",
        strokeWidth: "4"
      }), h("mask", {
        id: "path-11-inside-2",
        fill: "white"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M222.431 136.625H221.753C219.544 136.625 217.753 138.416 217.753 140.625V145.274C217.753 147.483 219.544 149.274 221.753 149.274H222.431C224.64 149.274 226.431 147.483 226.431 145.274V140.625C226.431 138.416 224.64 136.625 222.431 136.625ZM221.753 132.625C217.335 132.625 213.753 136.206 213.753 140.625V145.274C213.753 149.692 217.335 153.274 221.753 153.274H222.431C226.849 153.274 230.431 149.692 230.431 145.274V140.625C230.431 136.206 226.849 132.625 222.431 132.625H221.753Z"
      })), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M222.431 136.625H221.753C219.544 136.625 217.753 138.416 217.753 140.625V145.274C217.753 147.483 219.544 149.274 221.753 149.274H222.431C224.64 149.274 226.431 147.483 226.431 145.274V140.625C226.431 138.416 224.64 136.625 222.431 136.625ZM221.753 132.625C217.335 132.625 213.753 136.206 213.753 140.625V145.274C213.753 149.692 217.335 153.274 221.753 153.274H222.431C226.849 153.274 230.431 149.692 230.431 145.274V140.625C230.431 136.206 226.849 132.625 222.431 132.625H221.753Z",
        fill: "white"
      }), h("path", {
        d: "M221.753 140.625H222.431V132.625H221.753V140.625ZM221.753 140.625L221.753 140.625V132.625C217.335 132.625 213.753 136.206 213.753 140.625H221.753ZM221.753 145.274V140.625H213.753V145.274H221.753ZM221.753 145.274H221.753H213.753C213.753 149.692 217.335 153.274 221.753 153.274V145.274ZM222.431 145.274H221.753V153.274H222.431V145.274ZM222.431 145.274L222.431 145.274V153.274C226.849 153.274 230.431 149.692 230.431 145.274H222.431ZM222.431 140.625V145.274H230.431V140.625H222.431ZM222.431 140.625H222.431H230.431C230.431 136.206 226.849 132.625 222.431 132.625V140.625ZM217.753 140.625C217.753 138.416 219.544 136.625 221.753 136.625V128.625C215.126 128.625 209.753 133.997 209.753 140.625H217.753ZM217.753 145.274V140.625H209.753V145.274H217.753ZM221.753 149.274C219.544 149.274 217.753 147.483 217.753 145.274H209.753C209.753 151.901 215.126 157.274 221.753 157.274V149.274ZM222.431 149.274H221.753V157.274H222.431V149.274ZM226.431 145.274C226.431 147.483 224.64 149.274 222.431 149.274V157.274C229.058 157.274 234.431 151.901 234.431 145.274H226.431ZM226.431 140.625V145.274H234.431V140.625H226.431ZM222.431 136.625C224.64 136.625 226.431 138.416 226.431 140.625H234.431C234.431 133.997 229.058 128.625 222.431 128.625V136.625ZM221.753 136.625H222.431V128.625H221.753V136.625Z",
        fill: "#19194B",
        mask: "url(#path-11-inside-2)"
      }), h("mask", {
        id: "path-13-inside-3",
        fill: "white"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M171.001 131.815H164.719C163.931 131.815 163.293 132.453 163.293 133.24C163.293 134.028 163.931 134.666 164.719 134.666H171.001C171.788 134.666 172.426 134.028 172.426 133.24C172.426 132.453 171.788 131.815 171.001 131.815ZM164.719 127.815C161.722 127.815 159.293 130.244 159.293 133.24C159.293 136.237 161.722 138.666 164.719 138.666H171.001C173.997 138.666 176.426 136.237 176.426 133.24C176.426 130.244 173.997 127.815 171.001 127.815H164.719Z"
      })), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M171.001 131.815H164.719C163.931 131.815 163.293 132.453 163.293 133.24C163.293 134.028 163.931 134.666 164.719 134.666H171.001C171.788 134.666 172.426 134.028 172.426 133.24C172.426 132.453 171.788 131.815 171.001 131.815ZM164.719 127.815C161.722 127.815 159.293 130.244 159.293 133.24C159.293 136.237 161.722 138.666 164.719 138.666H171.001C173.997 138.666 176.426 136.237 176.426 133.24C176.426 130.244 173.997 127.815 171.001 127.815H164.719Z",
        fill: "white"
      }), h("path", {
        d: "M164.719 135.815H171.001V127.815H164.719V135.815ZM167.293 133.24C167.293 134.662 166.141 135.815 164.719 135.815V127.815C161.722 127.815 159.293 130.244 159.293 133.24H167.293ZM164.719 130.666C166.141 130.666 167.293 131.819 167.293 133.24H159.293C159.293 136.237 161.722 138.666 164.719 138.666V130.666ZM171.001 130.666H164.719V138.666H171.001V130.666ZM168.426 133.24C168.426 131.819 169.579 130.666 171.001 130.666V138.666C173.997 138.666 176.426 136.237 176.426 133.24H168.426ZM171.001 135.815C169.579 135.815 168.426 134.662 168.426 133.24H176.426C176.426 130.244 173.997 127.815 171.001 127.815V135.815ZM163.293 133.24C163.293 132.453 163.931 131.815 164.719 131.815V123.815C159.513 123.815 155.293 128.035 155.293 133.24H163.293ZM164.719 134.666C163.931 134.666 163.293 134.028 163.293 133.24H155.293C155.293 138.446 159.513 142.666 164.719 142.666V134.666ZM171.001 134.666H164.719V142.666H171.001V134.666ZM172.426 133.24C172.426 134.028 171.788 134.666 171.001 134.666V142.666C176.206 142.666 180.426 138.446 180.426 133.24H172.426ZM171.001 131.815C171.788 131.815 172.426 132.453 172.426 133.24H180.426C180.426 128.035 176.206 123.815 171.001 123.815V131.815ZM164.719 131.815H171.001V123.815H164.719V131.815Z",
        fill: "#19194B",
        mask: "url(#path-13-inside-3)"
      }), h("mask", {
        id: "path-15-inside-4",
        fill: "white"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M171 151.803H164.718C163.931 151.803 163.293 152.442 163.293 153.229C163.293 154.016 163.931 154.654 164.718 154.654H171C171.788 154.654 172.426 154.016 172.426 153.229C172.426 152.442 171.788 151.803 171 151.803ZM164.718 147.803C161.722 147.803 159.293 150.233 159.293 153.229C159.293 156.225 161.722 158.654 164.718 158.654H171C173.997 158.654 176.426 156.225 176.426 153.229C176.426 150.233 173.997 147.803 171 147.803H164.718Z"
      })), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M171 151.803H164.718C163.931 151.803 163.293 152.442 163.293 153.229C163.293 154.016 163.931 154.654 164.718 154.654H171C171.788 154.654 172.426 154.016 172.426 153.229C172.426 152.442 171.788 151.803 171 151.803ZM164.718 147.803C161.722 147.803 159.293 150.233 159.293 153.229C159.293 156.225 161.722 158.654 164.718 158.654H171C173.997 158.654 176.426 156.225 176.426 153.229C176.426 150.233 173.997 147.803 171 147.803H164.718Z",
        fill: "white"
      }), h("path", {
        d: "M164.718 155.803H171V147.803H164.718V155.803ZM167.293 153.229C167.293 154.651 166.14 155.803 164.718 155.803V147.803C161.722 147.803 159.293 150.233 159.293 153.229H167.293ZM164.718 150.654C166.14 150.654 167.293 151.807 167.293 153.229H159.293C159.293 156.225 161.722 158.654 164.718 158.654V150.654ZM171 150.654H164.718V158.654H171V150.654ZM168.426 153.229C168.426 151.807 169.578 150.654 171 150.654V158.654C173.997 158.654 176.426 156.225 176.426 153.229H168.426ZM171 155.803C169.578 155.803 168.426 154.651 168.426 153.229H176.426C176.426 150.233 173.997 147.803 171 147.803V155.803ZM163.293 153.229C163.293 152.442 163.931 151.803 164.718 151.803V143.803C159.513 143.803 155.293 148.023 155.293 153.229H163.293ZM164.718 154.654C163.931 154.654 163.293 154.016 163.293 153.229H155.293C155.293 158.434 159.513 162.654 164.718 162.654V154.654ZM171 154.654H164.718V162.654H171V154.654ZM172.426 153.229C172.426 154.016 171.788 154.654 171 154.654V162.654C176.206 162.654 180.426 158.434 180.426 153.229H172.426ZM171 151.803C171.788 151.803 172.426 152.442 172.426 153.229H180.426C180.426 148.023 176.206 143.803 171 143.803V151.803ZM164.718 151.803H171V143.803H164.718V151.803Z",
        fill: "#19194B",
        mask: "url(#path-15-inside-4)"
      }), h("path", {
        d: "M126.01 142.949C126.01 130.018 136.493 119.535 149.424 119.535H158.276L159.414 119.535C162.727 119.535 165.414 122.221 165.414 125.535V160.363C165.414 163.677 162.727 166.363 159.414 166.363H158.276L149.424 166.363C136.493 166.363 126.01 155.88 126.01 142.949Z",
        fill: "white",
        stroke: "#19194B",
        strokeWidth: "4"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M149.424 121.535C137.597 121.535 128.01 131.122 128.01 142.949C128.01 154.776 137.597 164.363 149.424 164.363L159.414 164.363C161.623 164.363 163.414 162.572 163.414 160.363V125.535C163.414 123.326 161.623 121.535 159.414 121.535L149.424 121.535ZM124.01 142.949C124.01 128.913 135.388 117.535 149.424 117.535L159.414 117.535C163.832 117.535 167.414 121.117 167.414 125.535V160.363C167.414 164.781 163.832 168.363 159.414 168.363L149.424 168.363C135.388 168.363 124.01 156.985 124.01 142.949Z",
        fill: "#19194B"
      }), h("rect", {
        x: "157.704",
        y: "119.82",
        width: "1.1422",
        height: "48.5437",
        fill: "#19194B"
      }), h("mask", {
        id: "path-20-inside-5",
        fill: "white"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M188.397 167.569L189.535 167.569L198.386 167.569C212.422 167.569 223.8 156.191 223.8 142.155C223.8 128.119 212.422 116.741 198.386 116.741L189.535 116.741L189.534 116.741L188.397 116.741C183.979 116.741 180.397 120.323 180.397 124.741L180.397 159.569C180.397 163.987 183.979 167.569 188.397 167.569Z"
      })), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M188.397 167.569L189.535 167.569L198.386 167.569C212.422 167.569 223.8 156.191 223.8 142.155C223.8 128.119 212.422 116.741 198.386 116.741L189.535 116.741L189.534 116.741L188.397 116.741C183.979 116.741 180.397 120.323 180.397 124.741L180.397 159.569C180.397 163.987 183.979 167.569 188.397 167.569Z",
        fill: "white"
      }), h("path", {
        d: "M189.535 167.569L189.534 171.569L189.535 167.569ZM198.386 167.569L198.386 163.569L198.386 163.569L198.386 167.569ZM189.535 116.741L189.535 120.741L189.535 116.741ZM189.534 116.741L189.534 112.741L189.534 116.741ZM180.397 124.741L184.397 124.741L180.397 124.741ZM180.397 159.569L176.397 159.569L180.397 159.569ZM189.535 163.569L188.397 163.569L188.397 171.569L189.534 171.569L189.535 163.569ZM198.386 163.569L189.535 163.569L189.534 171.569L198.386 171.569L198.386 163.569ZM219.8 142.155C219.8 153.982 210.213 163.569 198.386 163.569L198.386 171.569C214.631 171.569 227.8 158.4 227.8 142.155L219.8 142.155ZM198.386 120.741C210.213 120.741 219.8 130.328 219.8 142.155L227.8 142.155C227.8 125.91 214.631 112.741 198.386 112.741L198.386 120.741ZM189.535 120.741L198.386 120.741L198.386 112.741L189.535 112.741L189.535 120.741ZM189.534 120.741L189.535 120.741L189.535 112.741L189.534 112.741L189.534 120.741ZM188.397 120.741L189.534 120.741L189.534 112.741L188.397 112.741L188.397 120.741ZM184.397 124.741C184.397 122.532 186.188 120.741 188.397 120.741L188.397 112.741C181.769 112.741 176.397 118.113 176.397 124.741L184.397 124.741ZM184.397 159.569L184.397 124.741L176.397 124.741L176.397 159.569L184.397 159.569ZM188.397 163.569C186.188 163.569 184.397 161.778 184.397 159.569L176.397 159.569C176.397 166.196 181.769 171.569 188.397 171.569L188.397 163.569Z",
        fill: "black",
        mask: "url(#path-20-inside-5)"
      }), h("rect", {
        x: "190.106",
        y: "165.285",
        width: "1.1422",
        height: "48.5437",
        transform: "rotate(-180 190.106 165.285)",
        fill: "black"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M188.397 167.569L189.535 167.569L198.386 167.569C212.422 167.569 223.8 156.191 223.8 142.155C223.8 128.119 212.422 116.741 198.386 116.741L189.535 116.741L189.534 116.741L188.397 116.741C183.979 116.741 180.397 120.323 180.397 124.741L180.397 159.569C180.397 163.987 183.979 167.569 188.397 167.569Z",
        fill: "white"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M188.397 163.569L198.386 163.569C210.213 163.569 219.8 153.982 219.8 142.155C219.8 130.328 210.213 120.741 198.386 120.741L188.397 120.741C186.188 120.741 184.397 122.532 184.397 124.741L184.397 159.569C184.397 161.778 186.188 163.569 188.397 163.569ZM188.397 167.569C183.979 167.569 180.397 163.987 180.397 159.569L180.397 124.741C180.397 120.323 183.979 116.741 188.397 116.741L198.386 116.741C212.422 116.741 223.8 128.119 223.8 142.155C223.8 156.191 212.422 167.569 198.386 167.569L188.397 167.569Z",
        fill: "#19194B"
      }), h("rect", {
        x: "190.106",
        y: "165.285",
        width: "1.1422",
        height: "48.5437",
        transform: "rotate(-180 190.106 165.285)",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M287.008 210.444C287.008 211.303 287.705 212 288.564 212H290.032C290.891 212 291.588 211.303 291.588 210.444V196.428H287.008V210.444Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M312.454 196.428V210.444C312.454 211.303 313.151 212 314.01 212H315.479C316.338 212 317.034 211.303 317.034 210.444V196.428H312.454Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M333.486 178.236C332.776 178.419 332.194 178.924 331.913 179.601L331.354 180.948C331.075 181.625 331.13 182.394 331.501 183.025C333.911 187.111 333.291 192.456 329.872 195.873C326.188 199.558 320.264 199.991 316.092 196.881L314.723 196.427H289.275L287.906 196.881C283.737 199.992 277.811 199.558 274.127 195.873C270.707 192.454 270.088 187.111 272.498 183.025C272.871 182.395 272.926 181.625 272.645 180.948L272.087 179.601C271.807 178.924 271.224 178.419 270.514 178.236C265.921 177.052 262.58 172.835 262.58 168C262.58 163.166 265.921 158.949 270.514 157.765C271.224 157.582 271.807 157.077 272.087 156.4L272.645 155.052C272.926 154.375 272.871 153.606 272.498 152.975C270.088 148.891 270.708 143.546 274.127 140.127C276.164 138.09 278.885 137.046 281.618 137.046C283.46 137.046 285.306 137.521 286.951 138.485C287.59 138.861 288.365 138.929 289.051 138.645L290.398 138.087C291.076 137.807 291.58 137.225 291.764 136.515C292.947 131.922 297.165 128.582 301.999 128.582C306.834 128.582 311.051 131.922 312.236 136.515C312.419 137.225 312.924 137.806 313.601 138.087L314.947 138.645C315.624 138.925 316.393 138.87 317.025 138.499C321.109 136.089 326.453 136.708 329.872 140.127C333.291 143.545 333.911 148.89 331.501 152.976C331.13 153.607 331.075 154.376 331.354 155.052L331.913 156.4C332.194 157.077 332.776 157.582 333.486 157.765C338.077 158.949 341.419 163.166 341.419 168C341.419 172.835 338.077 177.052 333.486 178.236ZM336.208 153.831C338.726 148.21 337.609 141.386 333.112 136.887C328.614 132.39 321.79 131.273 316.169 133.793C313.976 128.037 308.36 124 301.999 124C295.64 124 290.023 128.037 287.83 133.793C282.209 131.273 275.386 132.39 270.887 136.887C266.39 141.386 265.274 148.211 267.792 153.831C262.036 156.024 258 161.64 258 168C258 174.361 262.036 179.977 267.792 182.17C265.272 187.79 266.389 194.615 270.887 199.112C273.808 202.033 277.709 203.528 281.625 203.528C284.541 203.527 287.468 202.697 290.001 201.008H313.997C319.932 204.965 328.015 204.209 333.112 199.112C337.609 194.616 338.726 187.791 336.208 182.17C341.963 179.977 345.999 174.361 345.999 168C345.999 161.64 341.963 156.024 336.208 153.831Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M333.486 157.764C332.776 157.581 332.194 157.076 331.913 156.4L331.354 155.052C331.075 154.375 331.13 153.607 331.501 152.975C333.911 148.89 333.291 143.545 329.872 140.127C326.453 136.708 321.109 136.088 317.025 138.498C316.393 138.871 315.624 138.925 314.947 138.644L313.6 138.087C312.924 137.806 312.419 137.225 312.236 136.515C311.051 131.922 306.834 128.582 301.999 128.582C297.165 128.582 292.947 131.922 291.764 136.515C291.581 137.225 291.076 137.807 290.398 138.087L289.051 138.644C288.365 138.929 287.59 138.861 286.951 138.486C285.306 137.521 283.46 137.047 281.618 137.047C278.886 137.047 276.164 138.09 274.127 140.127C270.708 143.546 270.088 148.891 272.498 152.975C272.871 153.606 272.926 154.375 272.645 155.052L272.087 156.4C271.807 157.076 271.224 157.581 270.514 157.764C265.921 158.948 262.58 163.166 262.58 168.001C262.58 172.834 265.921 177.052 270.514 178.236C271.224 178.419 271.806 178.924 272.087 179.601L272.645 180.948C272.926 181.626 272.871 182.395 272.498 183.026C270.088 187.111 270.707 192.454 274.127 195.873C277.811 199.559 283.737 199.993 287.906 196.881L289.275 196.427H314.723L316.092 196.881C320.264 199.992 326.188 199.559 329.872 195.873C333.291 192.455 333.911 187.111 331.501 183.025C331.13 182.394 331.075 181.625 331.354 180.948L331.913 179.601C332.194 178.924 332.776 178.419 333.486 178.236C338.077 177.052 341.419 172.834 341.419 168.001C341.419 163.166 338.077 158.948 333.486 157.764Z",
        fill: "white"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M320.825 171.353C319.87 169.662 318.684 168.088 317.272 166.677L316.753 166.157C316.147 165.55 315.16 165.55 314.553 166.157L313.515 167.196C312.908 167.804 312.908 168.789 313.515 169.396L314.034 169.916C317.249 173.131 319.019 177.404 319.019 181.95C319.019 191.244 311.531 198.821 302.27 198.967C292.872 199.115 284.98 191.349 284.98 181.95C284.98 177.404 286.751 173.131 289.966 169.916L290.485 169.396C291.093 168.789 291.093 167.804 290.485 167.196L289.445 166.157C288.838 165.55 287.853 165.55 287.245 166.157L286.726 166.677C285.316 168.088 284.13 169.662 283.175 171.353C280.997 169.85 279.414 167.557 278.824 164.93H283.445C284.303 164.93 285 164.234 285 163.375V162.64C285 160.354 286.853 158.501 289.14 158.501C291.038 158.501 292.635 159.78 293.122 161.522C293.308 162.187 293.923 162.639 294.612 162.639H296.527C297.216 162.639 297.83 162.187 298.017 161.522C298.505 159.78 300.101 158.501 302 158.501C303.899 158.501 305.495 159.78 305.982 161.522C306.168 162.187 306.784 162.639 307.473 162.639H309.386C310.075 162.639 310.691 162.187 310.877 161.522C311.364 159.78 312.96 158.501 314.859 158.501C317.145 158.501 318.998 160.354 318.998 162.64V163.375C318.998 164.234 319.695 164.93 320.555 164.93H325.175C324.584 167.557 323.002 169.85 320.825 171.353Z",
        fill: "white"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M308.452 172.17C307.163 172.17 306.118 173.214 306.118 174.503C306.118 175.792 307.163 176.836 308.452 176.836C309.74 176.836 310.785 175.792 310.785 174.503C310.785 173.214 309.74 172.17 308.452 172.17Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M295.591 172.17C294.303 172.17 293.258 173.214 293.258 174.503C293.258 175.792 294.303 176.836 295.591 176.836C296.88 176.836 297.925 175.792 297.925 174.503C297.925 173.214 296.88 172.17 295.591 172.17Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M305.888 195.215C305.888 197.363 304.146 199.104 301.999 199.104C299.852 199.104 298.11 197.363 298.11 195.215H305.888Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M320.825 171.353C319.87 169.662 318.684 168.088 317.272 166.677L316.753 166.157C316.147 165.55 315.16 165.55 314.553 166.157L313.515 167.196C312.908 167.804 312.908 168.789 313.515 169.396L314.034 169.916C317.249 173.131 319.019 177.404 319.019 181.95C319.019 191.244 311.531 198.821 302.27 198.967C292.872 199.115 284.98 191.35 284.98 181.95C284.98 177.404 286.751 173.131 289.966 169.916L290.485 169.396C291.093 168.789 291.093 167.804 290.485 167.196L289.445 166.157C288.838 165.55 287.853 165.55 287.245 166.157L286.726 166.677C285.315 168.088 284.13 169.662 283.174 171.353C280.997 169.85 279.414 167.557 278.824 164.93H283.445C284.303 164.93 285 164.235 285 163.375V162.64C285 160.354 286.853 158.501 289.14 158.501C291.038 158.501 292.635 159.78 293.122 161.522C293.308 162.187 293.923 162.639 294.612 162.639H296.527C297.216 162.639 297.83 162.187 298.017 161.522C298.505 159.78 300.101 158.501 302 158.501C303.899 158.501 305.495 159.78 305.982 161.522C306.168 162.187 306.784 162.639 307.473 162.639H309.386C310.075 162.639 310.691 162.187 310.877 161.522C311.364 159.78 312.96 158.501 314.859 158.501C317.145 158.501 318.998 160.354 318.998 162.64V163.375C318.998 164.235 319.695 164.93 320.555 164.93H325.175C324.584 167.557 323.002 169.85 320.825 171.353ZM328.454 160.349H323.274C322.266 156.648 318.875 153.92 314.859 153.92C312.317 153.92 310.024 155.013 308.429 156.755C306.834 155.013 304.542 153.92 302 153.92C299.457 153.92 297.165 155.013 295.569 156.755C293.975 155.013 291.682 153.92 289.139 153.92C285.123 153.92 281.733 156.648 280.724 160.349H275.545C274.686 160.349 273.99 161.046 273.99 161.905V162.64C273.99 168.056 276.924 172.922 281.348 175.604C280.688 177.763 280.36 180.036 280.403 182.364C280.622 194.12 290.374 203.62 302.133 203.55C313.982 203.477 323.6 193.816 323.6 181.95C323.6 179.764 323.275 177.628 322.653 175.597C322.653 175.598 322.654 175.6 322.655 175.601C327.076 172.919 330.01 168.055 330.01 162.64V161.905C330.01 161.046 329.313 160.349 328.454 160.349Z",
        fill: "#19194B"
      }), h("circle", {
        cx: "61",
        cy: "99",
        r: "45",
        fill: "#3E325B"
      }), h("path", {
        d: "M56.4233 69.3022C52.3464 69.8845 48.3763 71.3785 44.8818 73.5353C26.7454 84.729 26.2362 112.326 44.2029 123.965C47.1318 125.863 50.2965 127.273 53.7076 128.057C56.9943 128.811 60.5195 129.266 63.8913 128.83C68.6753 128.212 73.4348 126.77 77.4696 124.079C80.9751 121.741 84.1056 118.612 86.3976 115.083C88.2646 112.208 89.4955 108.967 90.1815 105.628C91.0186 101.554 91.3326 97.5866 90.5522 93.4709C87.5725 77.753 72.2895 67.036 56.4233 69.3022Z",
        fill: "#F6F5FA"
      }), h("path", {
        d: "M57.9241 75.431C51.2897 76.5972 45.2032 80.146 41.4128 85.7426C40.2736 87.4246 37.3593 91.8365 40.0104 93.4489C41.5412 94.3799 44.4143 93.8761 46.0431 93.457C48.512 92.8218 50.9703 92.0911 53.1717 90.7775C55.6541 89.2961 57.9123 88.0149 61 88C64.2364 87.9845 66.9743 89.2012 69.6 90.7775C72.9304 92.7769 78.029 94.8564 82.0105 93.7005C83.6508 93.2244 83.8626 91.5714 83.4546 90.1325C82.7254 87.5617 80.82 85.0277 79.0539 83.0714C73.996 77.4688 65.5112 74.0974 57.9241 75.431ZM39.9381 101.497C36.3891 102.639 38.5909 107.149 39.6815 109.381C41.9738 114.072 45.5021 117.724 50.1166 120.22C51.638 121.043 54.113 122.325 55.8809 121.67C59.1536 120.457 58.1064 113.542 57.2146 111.069C54.9002 104.652 46.99 99.2257 39.9381 101.497ZM76.5942 101.433C70.8377 102.464 65.8701 106.964 64.7458 112.757C64.2037 115.551 63.6001 122.363 68.1077 121.802C74.0455 121.063 79.8061 115.401 82.4379 110.394C83.4036 108.556 85.3725 105.119 84.4879 103.001C83.4933 100.62 78.6333 101.068 76.5942 101.433Z",
        fill: "#3E325B"
      }), h("circle", {
        cx: "61",
        cy: "99",
        r: "6",
        fill: "#3E325B"
      })));
    }
  }]);

  return Image;
}(m);

var Icon$M = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.50977 12.594V1.09399C3.50977 0.828778 3.61512 0.574424 3.80266 0.386887C3.9902 0.199351 4.24455 0.0939941 4.50977 0.0939941H16.0098C16.275 0.0940508 16.5293 0.199445 16.7168 0.386994L20.2168 3.88699C20.4043 4.07449 20.5097 4.3288 20.5098 4.59399V12.594C20.5098 12.8592 20.4044 13.1136 20.2169 13.3011C20.0293 13.4886 19.775 13.594 19.5098 13.594C19.2445 13.594 18.9902 13.4886 18.8027 13.3011C18.6151 13.1136 18.5098 12.8592 18.5098 12.594V5.21499C18.5098 5.14922 18.4968 5.08409 18.4715 5.02335C18.4463 4.9626 18.4093 4.90743 18.3628 4.86099L15.7418 2.23999C15.6481 2.14653 15.5211 2.09402 15.3888 2.09399H6.00977C5.87716 2.09399 5.74998 2.14667 5.65621 2.24044C5.56244 2.33421 5.50977 2.46139 5.50977 2.59399V12.594C5.50977 12.8592 5.40441 13.1136 5.21687 13.3011C5.02934 13.4886 4.77498 13.594 4.50977 13.594C4.24455 13.594 3.9902 13.4886 3.80266 13.3011C3.61512 13.1136 3.50977 12.8592 3.50977 12.594ZM16.78 21.414C16.7675 21.3481 16.7294 21.2898 16.674 21.252C16.6177 21.2169 16.5498 21.2054 16.485 21.22L13.964 21.72C13.9237 21.7284 13.886 21.7462 13.854 21.772L11.647 23.582C11.3714 23.8084 11.0212 23.9236 10.6651 23.9051C10.309 23.8866 9.97262 23.7357 9.722 23.482L7.707 21.897C7.66257 21.8628 7.60809 21.8442 7.552 21.844H7.231C7.18722 21.8442 7.14425 21.8558 7.10636 21.8778C7.06847 21.8997 7.03698 21.9312 7.015 21.969C6.86137 22.2349 6.64053 22.4557 6.37461 22.6093C6.1087 22.7629 5.80708 22.8438 5.5 22.844H3C2.80109 22.844 2.61032 22.765 2.46967 22.6243C2.32902 22.4837 2.25 22.2929 2.25 22.094V15.094C2.25 14.8951 2.32902 14.7043 2.46967 14.5637C2.61032 14.423 2.80109 14.344 3 14.344H5.5C5.75146 14.344 5.99997 14.3983 6.22849 14.5032C6.45701 14.6082 6.66015 14.7613 6.824 14.952C6.85873 14.9922 6.90533 15.0204 6.95709 15.0324C7.00884 15.0445 7.06308 15.0398 7.112 15.019L9.051 14.192C9.35886 14.065 9.69154 14.0095 10.024 14.0298C10.3564 14.0501 10.6799 14.1455 10.97 14.309C11.0052 14.3289 11.0448 14.3398 11.0853 14.3408C11.1257 14.3419 11.1658 14.333 11.202 14.315L12.689 13.595C12.9814 13.4523 13.2994 13.3694 13.6242 13.351C13.9491 13.3326 14.2744 13.3792 14.581 13.488L17.437 14.581C17.4713 14.5942 17.508 14.5998 17.5447 14.5972C17.5813 14.5946 17.6169 14.5839 17.649 14.566C17.9089 14.4202 18.202 14.3438 18.5 14.344H21C21.1989 14.344 21.3897 14.423 21.5303 14.5637C21.671 14.7043 21.75 14.8951 21.75 15.094V22.094C21.75 22.2929 21.671 22.4837 21.5303 22.6243C21.3897 22.765 21.1989 22.844 21 22.844H18.5C18.0915 22.8437 17.696 22.7006 17.3819 22.4395C17.0678 22.1783 16.8549 21.8156 16.78 21.414ZM10.788 22.428L13.94 19.766C13.9668 19.7441 13.9888 19.7169 14.0046 19.6861C14.0205 19.6553 14.0298 19.6216 14.032 19.587C14.036 19.5193 14.013 19.4528 13.968 19.402L12.768 18.085C12.7334 18.0471 12.688 18.0207 12.638 18.0092C12.588 17.9978 12.5356 18.0019 12.488 18.021L12.432 18.045C12.0968 18.1793 11.7309 18.2182 11.3749 18.1572C11.0189 18.0963 10.6868 17.9379 10.4153 17.6997C10.1439 17.4615 9.94372 17.1528 9.83704 16.8077C9.73037 16.4627 9.72135 16.0949 9.811 15.745C9.81766 15.7198 9.81716 15.6933 9.80956 15.6684C9.80196 15.6435 9.78757 15.6212 9.768 15.604C9.74842 15.587 9.72455 15.5757 9.69899 15.5713C9.67343 15.5669 9.64715 15.5695 9.623 15.579L7.402 16.525C7.35683 16.5441 7.31831 16.5761 7.29126 16.6171C7.26422 16.658 7.24987 16.706 7.25 16.755V20.094C7.25 20.1603 7.27634 20.2239 7.32322 20.2708C7.37011 20.3177 7.4337 20.344 7.5 20.344H7.898C8.06639 20.3438 8.2299 20.4006 8.362 20.505C10.688 22.338 10.788 22.428 10.788 22.428ZM15.6877 19.6589C15.7049 19.691 15.7289 19.719 15.758 19.741C15.7857 19.7626 15.8177 19.7781 15.8518 19.7864C15.886 19.7947 15.9215 19.7956 15.956 19.789L16.544 19.672C16.6005 19.6605 16.6512 19.6298 16.6877 19.5852C16.7241 19.5405 16.744 19.4846 16.744 19.427V16.094C16.7441 16.0442 16.729 15.9955 16.7008 15.9544C16.6726 15.9134 16.6325 15.8818 16.586 15.864L14.052 14.895C13.8197 14.8183 13.5667 14.8344 13.346 14.94L11.49 15.84L11.4851 15.8443C11.3044 15.9992 11.164 16.1196 11.276 16.406C11.2978 16.4611 11.3303 16.5114 11.3716 16.5539C11.4129 16.5964 11.4622 16.6304 11.5166 16.6538C11.5711 16.6772 11.6296 16.6896 11.6889 16.6904C11.7482 16.6911 11.807 16.6801 11.862 16.658L12.562 16.371C12.705 16.3135 12.8621 16.3009 13.0124 16.335C13.1626 16.3692 13.2989 16.4484 13.403 16.562L15.325 18.679C15.5248 18.929 15.6413 19.2354 15.658 19.555C15.6603 19.5914 15.6704 19.6268 15.6877 19.6589ZM11.5 6.34399C11.6989 6.34399 11.8897 6.26498 12.0303 6.12432C12.171 5.98367 12.25 5.79291 12.25 5.59399C12.25 5.39508 12.171 5.20432 12.0303 5.06366C11.8897 4.92301 11.6989 4.84399 11.5 4.84399H8.5C8.30109 4.84399 8.11032 4.92301 7.96967 5.06366C7.82902 5.20432 7.75 5.39508 7.75 5.59399C7.75 5.79291 7.82902 5.98367 7.96967 6.12432C8.11032 6.26498 8.30109 6.34399 8.5 6.34399H11.5ZM16.0098 10.344H8.50977C8.31085 10.344 8.12009 10.265 7.97944 10.1243C7.83878 9.98367 7.75977 9.79291 7.75977 9.59399C7.75977 9.39508 7.83878 9.20432 7.97944 9.06366C8.12009 8.92301 8.31085 8.84399 8.50977 8.84399H16.0098C16.2087 8.84399 16.3994 8.92301 16.5401 9.06366C16.6807 9.20432 16.7598 9.39508 16.7598 9.59399C16.7598 9.79291 16.6807 9.98367 16.5401 10.1243C16.3994 10.265 16.2087 10.344 16.0098 10.344Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$N = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.10264 2.10264C2.1945 2.01079 2.31908 1.95918 2.44898 1.95918H17.1429C17.2728 1.95918 17.3973 2.01079 17.4892 2.10264C17.581 2.1945 17.6327 2.31908 17.6327 2.44898C17.6327 2.98999 18.0712 3.42857 18.6122 3.42857C19.1533 3.42857 19.5918 2.98999 19.5918 2.44898C19.5918 1.79947 19.3338 1.17656 18.8745 0.71729C18.4153 0.258017 17.7924 0 17.1429 0H2.44898C1.79947 0 1.17656 0.258017 0.71729 0.71729C0.258017 1.17656 0 1.79947 0 2.44898V17.1429C0 17.7924 0.258017 18.4153 0.71729 18.8745C1.17656 19.3338 1.79947 19.5918 2.44898 19.5918C2.98999 19.5918 3.42857 19.1533 3.42857 18.6122C3.42857 18.0712 2.98999 17.6327 2.44898 17.6327C2.31908 17.6327 2.1945 17.581 2.10264 17.4892C2.01079 17.3973 1.95918 17.2728 1.95918 17.1429V2.44898C1.95918 2.31908 2.01079 2.1945 2.10264 2.10264ZM6.36735 6.85714C6.36735 6.58664 6.58664 6.36735 6.85714 6.36735H21.551C21.8215 6.36735 22.0408 6.58664 22.0408 6.85714V21.551C22.0408 21.8215 21.8215 22.0408 21.551 22.0408H6.85714C6.58664 22.0408 6.36735 21.8215 6.36735 21.551V6.85714ZM6.85714 4.40816C5.50461 4.40816 4.40816 5.50461 4.40816 6.85714V21.551C4.40816 22.9036 5.50461 24 6.85714 24H21.551C22.9036 24 24 22.9036 24 21.551V6.85714C24 5.50461 22.9036 4.40816 21.551 4.40816H6.85714Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$O = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.8203 3.11101C23.5895 4.26216 24 5.61553 24 7C23.9976 8.85579 23.2594 10.6349 21.9471 11.9471C20.6349 13.2594 18.8558 13.9976 17 14C15.6155 14 14.2622 13.5895 13.111 12.8203C11.9599 12.0511 11.0627 10.9579 10.5328 9.67879C10.003 8.3997 9.86441 6.99224 10.1345 5.63437C10.4046 4.2765 11.0713 3.02922 12.0503 2.05026C13.0292 1.07129 14.2765 0.404603 15.6344 0.134506C16.9922 -0.13559 18.3997 0.00303303 19.6788 0.532846C20.9579 1.06266 22.0511 1.95987 22.8203 3.11101ZM16.1768 11.0732C16.2237 11.1201 16.25 11.1837 16.25 11.25L16.253 11.608C16.253 11.8069 16.332 11.9977 16.4727 12.1383C16.6133 12.279 16.8041 12.358 17.003 12.358C17.2019 12.358 17.3927 12.279 17.5333 12.1383C17.674 11.9977 17.753 11.8069 17.753 11.608V11.208C17.7527 11.1491 17.7733 11.092 17.8112 11.0469C17.8492 11.0018 17.9019 10.9717 17.96 10.962C18.4301 10.8785 18.8603 10.6442 19.1857 10.2947C19.511 9.94514 19.7137 9.49923 19.7633 9.02431C19.8128 8.54938 19.7065 8.07122 19.4604 7.66203C19.2143 7.25283 18.8418 6.93482 18.399 6.756L16.164 5.856C16.0087 5.79833 15.8789 5.68744 15.7976 5.54306C15.7164 5.39868 15.689 5.23017 15.7203 5.06748C15.7516 4.9048 15.8396 4.7585 15.9686 4.65459C16.0977 4.55068 16.2594 4.49591 16.425 4.5H18.625C18.8239 4.5 19.0147 4.42099 19.1553 4.28033C19.296 4.13968 19.375 3.94892 19.375 3.75C19.375 3.55109 19.296 3.36033 19.1553 3.21967C19.0147 3.07902 18.8239 3 18.625 3H18C17.9337 3 17.8701 2.97366 17.8232 2.92678C17.7763 2.8799 17.75 2.81631 17.75 2.75V2.4C17.75 2.20109 17.671 2.01033 17.5303 1.86967C17.3897 1.72902 17.1989 1.65 17 1.65C16.8011 1.65 16.6103 1.72902 16.4697 1.86967C16.329 2.01033 16.25 2.20109 16.25 2.4V2.8C16.2483 2.85797 16.2264 2.91352 16.1881 2.957C16.1497 3.00048 16.0973 3.02914 16.04 3.038C15.5699 3.12153 15.1397 3.35576 14.8144 3.70531C14.489 4.05487 14.2863 4.50077 14.2367 4.9757C14.1872 5.45062 14.2935 5.92878 14.5396 6.33798C14.7857 6.74718 15.1582 7.06519 15.601 7.244L17.836 8.144C17.9913 8.20168 18.1211 8.31256 18.2024 8.45694C18.2836 8.60132 18.311 8.76984 18.2797 8.93252C18.2484 9.09521 18.1604 9.24151 18.0314 9.34542C17.9023 9.44932 17.7406 9.5041 17.575 9.5H15.375C15.1761 9.5 14.9853 9.57902 14.8447 9.71967C14.704 9.86033 14.625 10.0511 14.625 10.25C14.625 10.4489 14.704 10.6397 14.8447 10.7803C14.9853 10.921 15.1761 11 15.375 11H16C16.0663 11 16.1299 11.0263 16.1768 11.0732ZM22.8283 23.8536C22.9221 23.7598 22.9748 23.6326 22.9748 23.5V18.5C22.9747 18.4011 22.9454 18.3044 22.8904 18.2221C22.8354 18.1399 22.7572 18.0758 22.6658 18.038C22.6051 18.0132 22.5403 18.0003 22.4748 18C22.4077 17.9984 22.341 18.0104 22.2786 18.0351C22.2163 18.0598 22.1595 18.0969 22.1118 18.144L20.6498 19.606C20.6043 19.6518 20.5427 19.6781 20.4782 19.6794C20.4136 19.6807 20.3511 19.6569 20.3038 19.613L15.2568 14.96C14.8778 14.6138 14.3881 14.4137 13.8751 14.3954C13.3622 14.3771 12.8595 14.5418 12.4568 14.86L9.55676 17.184C9.51064 17.2207 9.45304 17.2399 9.39412 17.2383C9.3352 17.2366 9.27876 17.2142 9.23476 17.175L2.07976 10.815C1.83179 10.5949 1.50652 10.4823 1.17552 10.502C0.844516 10.5217 0.534893 10.672 0.314764 10.92C0.094634 11.168 -0.0179711 11.4933 0.00172022 11.8243C0.0214115 12.1553 0.171786 12.4649 0.419764 12.685L7.72876 19.186L7.94776 19.38C8.32767 19.716 8.81385 19.9073 9.32084 19.9203C9.82782 19.9332 10.3232 19.7671 10.7198 19.451L13.6198 17.134C13.6665 17.0966 13.7252 17.0773 13.785 17.0795C13.8448 17.0817 13.9019 17.1053 13.9458 17.146L18.5288 21.371C18.5535 21.3939 18.5734 21.4215 18.5871 21.4523C18.6009 21.4831 18.6082 21.5163 18.6088 21.55C18.6094 21.5837 18.6032 21.6171 18.5907 21.6484C18.5782 21.6797 18.5595 21.7081 18.5358 21.732L17.1208 23.146C17.0507 23.2159 17.0029 23.3051 16.9835 23.4022C16.9642 23.4993 16.9741 23.6 17.012 23.6915C17.0499 23.7829 17.1141 23.8611 17.1965 23.916C17.2789 23.971 17.3757 24.0002 17.4748 24H22.4748C22.6074 24 22.7345 23.9473 22.8283 23.8536Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$P = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.8203 3.11101C13.5895 4.26216 14 5.61553 14 7C13.9976 8.85579 13.2594 10.6349 11.9471 11.9471C10.6349 13.2594 8.85579 13.9976 7 14C5.61553 14 4.26216 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303303 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303303 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101ZM6.17678 11.0732C6.22366 11.1201 6.25 11.1837 6.25 11.25L6.253 11.608C6.253 11.8069 6.33202 11.9977 6.47267 12.1383C6.61333 12.279 6.80409 12.358 7.003 12.358C7.20192 12.358 7.39268 12.279 7.53333 12.1383C7.67399 11.9977 7.753 11.8069 7.753 11.608V11.208C7.75267 11.1491 7.77331 11.092 7.81124 11.0469C7.84917 11.0018 7.9019 10.9717 7.96 10.962C8.43015 10.8785 8.86035 10.6442 9.18565 10.2947C9.51096 9.94514 9.7137 9.49923 9.76327 9.02431C9.81284 8.54938 9.70655 8.07122 9.46044 7.66203C9.21433 7.25283 8.84176 6.93482 8.399 6.756L6.164 5.856C6.0087 5.79833 5.87888 5.68744 5.79764 5.54306C5.71639 5.39868 5.68899 5.23017 5.72031 5.06748C5.75162 4.9048 5.83962 4.7585 5.96865 4.65459C6.09768 4.55068 6.25939 4.49591 6.425 4.5H8.625C8.82392 4.5 9.01468 4.42099 9.15533 4.28033C9.29599 4.13968 9.375 3.94892 9.375 3.75C9.375 3.55109 9.29599 3.36033 9.15533 3.21967C9.01468 3.07902 8.82392 3 8.625 3H8C7.9337 3 7.87011 2.97366 7.82323 2.92678C7.77634 2.8799 7.75 2.81631 7.75 2.75V2.4C7.75 2.20109 7.67099 2.01033 7.53033 1.86967C7.38968 1.72902 7.19892 1.65 7 1.65C6.80109 1.65 6.61033 1.72902 6.46967 1.86967C6.32902 2.01033 6.25 2.20109 6.25 2.4V2.8C6.24947 2.85898 6.22794 2.91584 6.18927 2.96038C6.1506 3.00491 6.09732 3.03421 6.039 3.043C5.56886 3.12653 5.13866 3.36076 4.81335 3.71031C4.48805 4.05987 4.2853 4.50577 4.23573 4.9807C4.18616 5.45562 4.29246 5.93378 4.53857 6.34298C4.78468 6.75218 5.15724 7.07019 5.6 7.249L7.836 8.144C7.99131 8.20168 8.12113 8.31256 8.20237 8.45694C8.28361 8.60132 8.31101 8.76984 8.2797 8.93252C8.24839 9.09521 8.16039 9.24151 8.03136 9.34542C7.90232 9.44932 7.74062 9.5041 7.575 9.5H5.375C5.17609 9.5 4.98533 9.57902 4.84467 9.71967C4.70402 9.86033 4.625 10.0511 4.625 10.25C4.625 10.4489 4.70402 10.6397 4.84467 10.7803C4.98533 10.921 5.17609 11 5.375 11H6C6.06631 11 6.1299 11.0263 6.17678 11.0732ZM23.8538 10.6464C23.9475 10.7402 24.0002 10.8674 24.0002 11V16C24.0018 16.1004 23.9732 16.1989 23.9181 16.2828C23.8629 16.3666 23.7838 16.432 23.6911 16.4703C23.5983 16.5086 23.4961 16.518 23.3979 16.4975C23.2996 16.4769 23.2099 16.4273 23.1402 16.355L21.6792 14.893C21.6334 14.8474 21.5718 14.8212 21.5071 14.8199C21.4425 14.8186 21.3798 14.8422 21.3322 14.886L16.2852 19.539C15.9058 19.8863 15.4152 20.0871 14.9011 20.1054C14.3871 20.1238 13.8834 19.9584 13.4802 19.639L10.5802 17.315C10.5339 17.2782 10.4762 17.259 10.4171 17.2606C10.358 17.2623 10.3014 17.2847 10.2572 17.324L3.10222 23.684C2.97944 23.793 2.83638 23.8767 2.68123 23.9305C2.52608 23.9842 2.36187 24.0068 2.19798 23.997C1.86697 23.9774 1.55735 23.827 1.33722 23.579C1.22823 23.4562 1.14448 23.3132 1.09077 23.158C1.03706 23.0029 1.01443 22.8386 1.02418 22.6748C1.03393 22.5109 1.07587 22.3505 1.14759 22.2028C1.21932 22.0551 1.31944 21.923 1.44222 21.814L8.75622 15.314L8.97522 15.12C9.35488 14.7839 9.84092 14.5925 10.3478 14.5796C10.8547 14.5666 11.3499 14.7328 11.7462 15.049L14.6462 17.366C14.6928 17.4033 14.7513 17.4226 14.811 17.4204C14.8706 17.4182 14.9275 17.3946 14.9712 17.354L19.5542 13.129C19.5789 13.1061 19.5987 13.0784 19.6125 13.0476C19.6262 13.0169 19.6337 12.9837 19.6343 12.95C19.635 12.9163 19.6288 12.8828 19.6163 12.8516C19.6037 12.8203 19.585 12.7919 19.5612 12.768L18.1462 11.354C18.0761 11.2841 18.0284 11.1949 18.009 11.0978C17.9896 11.0007 17.9995 10.9 18.0374 10.8085C18.0754 10.7171 18.1396 10.6389 18.222 10.584C18.3044 10.5291 18.4012 10.4998 18.5002 10.5H23.5002C23.6328 10.5 23.76 10.5527 23.8538 10.6464Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$Q = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.25 4H22C22.2652 4 22.5196 4.10536 22.7071 4.29289C22.8946 4.48043 23 4.73478 23 5C23 5.26522 22.8946 5.51957 22.7071 5.70711C22.5196 5.89464 22.2652 6 22 6H2C1.73478 6 1.48043 5.89464 1.29289 5.70711C1.10536 5.51957 1 5.26522 1 5C1 4.73478 1.10536 4.48043 1.29289 4.29289C1.48043 4.10536 1.73478 4 2 4H6.75C6.8163 4 6.87989 3.97366 6.92678 3.92678C6.97366 3.87989 7 3.8163 7 3.75V2.5C7 1.83696 7.26339 1.20107 7.73223 0.732233C8.20107 0.263392 8.83696 0 9.5 0H14.5C15.163 0 15.7989 0.263392 16.2678 0.732233C16.7366 1.20107 17 1.83696 17 2.5V3.75C17 3.8163 17.0263 3.87989 17.0732 3.92678C17.1201 3.97366 17.1837 4 17.25 4ZM9 2.5V3.75C9 3.8163 9.02634 3.87989 9.07322 3.92678C9.12011 3.97366 9.1837 4 9.25 4H14.75C14.8163 4 14.8799 3.97366 14.9268 3.92678C14.9737 3.87989 15 3.8163 15 3.75V2.5C15 2.36739 14.9473 2.24021 14.8536 2.14645C14.7598 2.05268 14.6326 2 14.5 2H9.5C9.36739 2 9.24021 2.05268 9.14645 2.14645C9.05268 2.24021 9 2.36739 9 2.5ZM4.54695 7.5H19.452C19.5214 7.50005 19.5901 7.51458 19.6536 7.54264C19.7172 7.5707 19.7741 7.6117 19.8209 7.663C19.8678 7.71423 19.9035 7.77466 19.9257 7.84043C19.9479 7.90619 19.9561 7.97586 19.95 8.045L18.665 22.181C18.6198 22.6781 18.3904 23.1403 18.0218 23.4769C17.6532 23.8135 17.1721 24.0001 16.673 24H7.32595C6.82682 24.0001 6.3457 23.8135 5.97712 23.4769C5.60853 23.1403 5.37912 22.6781 5.33395 22.181L4.04695 8.045C4.04068 7.97566 4.04897 7.90577 4.07128 7.83982C4.09358 7.77386 4.12942 7.71329 4.17649 7.66198C4.22355 7.61068 4.28082 7.56977 4.34461 7.54188C4.40841 7.51398 4.47733 7.49972 4.54695 7.5ZM10.0323 21.0303C10.1729 20.8897 10.252 20.6989 10.252 20.5V11.5C10.252 11.3011 10.1729 11.1103 10.0323 10.9697C9.89163 10.829 9.70086 10.75 9.50195 10.75C9.30304 10.75 9.11227 10.829 8.97162 10.9697C8.83097 11.1103 8.75195 11.3011 8.75195 11.5V20.5C8.75195 20.6989 8.83097 20.8897 8.97162 21.0303C9.11227 21.171 9.30304 21.25 9.50195 21.25C9.70086 21.25 9.89163 21.171 10.0323 21.0303ZM15.0323 21.0303C15.1729 20.8897 15.252 20.6989 15.252 20.5V11.5C15.252 11.3011 15.1729 11.1103 15.0323 10.9697C14.8916 10.829 14.7009 10.75 14.502 10.75C14.303 10.75 14.1123 10.829 13.9716 10.9697C13.831 11.1103 13.752 11.3011 13.752 11.5V20.5C13.752 20.6989 13.831 20.8897 13.9716 21.0303C14.1123 21.171 14.303 21.25 14.502 21.25C14.7009 21.25 14.8916 21.171 15.0323 21.0303Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$R = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24 2.5C24 2.10218 23.842 1.72064 23.5607 1.43934C23.2794 1.15804 22.8978 1 22.5 1H1.5C1.10218 1 0.720644 1.15804 0.43934 1.43934C0.158035 1.72064 0 2.10218 0 2.5V20.5C0 20.8978 0.158035 21.2794 0.43934 21.5607C0.720644 21.842 1.10218 22 1.5 22H2.25C2.3163 22 2.37989 22.0263 2.42678 22.0732C2.47366 22.1201 2.5 22.1837 2.5 22.25V22.5C2.5 22.6326 2.55268 22.7598 2.64645 22.8536C2.74021 22.9473 2.86739 23 3 23H4.5C4.63261 23 4.75979 22.9473 4.85355 22.8536C4.94732 22.7598 5 22.6326 5 22.5V22.25C5 22.1837 5.02634 22.1201 5.07322 22.0732C5.12011 22.0263 5.1837 22 5.25 22H18.75C18.8163 22 18.8799 22.0263 18.9268 22.0732C18.9737 22.1201 19 22.1837 19 22.25V22.5C19 22.6326 19.0527 22.7598 19.1464 22.8536C19.2402 22.9473 19.3674 23 19.5 23H21C21.1326 23 21.2598 22.9473 21.3536 22.8536C21.4473 22.7598 21.5 22.6326 21.5 22.5V22.25C21.5 22.1837 21.5263 22.1201 21.5732 22.0732C21.6201 22.0263 21.6837 22 21.75 22H22.5C22.8978 22 23.2794 21.842 23.5607 21.5607C23.842 21.2794 24 20.8978 24 20.5V2.5ZM22.25 5.5V17.5C22.2495 17.964 22.0649 18.4088 21.7369 18.7369C21.4088 19.0649 20.964 19.2495 20.5 19.25H4.5C4.03603 19.2495 3.59122 19.0649 3.26315 18.7369C2.93507 18.4088 2.75053 17.964 2.75 17.5V5.5C2.75053 5.03603 2.93507 4.59122 3.26315 4.26315C3.59122 3.93507 4.03603 3.75053 4.5 3.75H20.5C20.964 3.75053 21.4088 3.93507 21.7369 4.26315C22.0649 4.59122 22.2495 5.03603 22.25 5.5ZM20.5 5.25H4.5C4.43394 5.25078 4.3708 5.27737 4.32408 5.32408C4.27737 5.3708 4.25078 5.43394 4.25 5.5V17.5C4.25078 17.5661 4.27737 17.6292 4.32408 17.6759C4.3708 17.7226 4.43394 17.7492 4.5 17.75H20.5C20.5661 17.7492 20.6292 17.7226 20.6759 17.6759C20.7226 17.6292 20.7492 17.5661 20.75 17.5V5.5C20.7492 5.43394 20.7226 5.3708 20.6759 5.32408C20.6292 5.27737 20.5661 5.25078 20.5 5.25ZM15 16C14.8022 16 14.6089 15.9414 14.4444 15.8315C14.28 15.7216 14.1518 15.5654 14.0761 15.3827C14.0004 15.2 13.9806 14.9989 14.0192 14.8049C14.0578 14.6109 14.153 14.4327 14.2929 14.2929C14.4327 14.153 14.6109 14.0578 14.8049 14.0192C14.9989 13.9806 15.2 14.0004 15.3827 14.0761C15.5654 14.1518 15.7216 14.28 15.8315 14.4444C15.9414 14.6089 16 14.8022 16 15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16ZM18 16C17.8022 16 17.6089 15.9414 17.4444 15.8315C17.28 15.7216 17.1518 15.5654 17.0761 15.3827C17.0004 15.2 16.9806 14.9989 17.0192 14.8049C17.0578 14.6109 17.153 14.4327 17.2929 14.2929C17.4327 14.153 17.6109 14.0578 17.8049 14.0192C17.9989 13.9806 18.2 14.0004 18.3827 14.0761C18.5654 14.1518 18.7216 14.28 18.8315 14.4444C18.9414 14.6089 19 14.8022 19 15C19 15.2652 18.8946 15.5196 18.7071 15.7071C18.5196 15.8946 18.2652 16 18 16ZM16.5 12.75C15.9056 12.7565 15.3226 12.5863 14.8251 12.261C14.3276 11.9357 13.938 11.4699 13.7056 10.9227C13.4733 10.3755 13.4088 9.7717 13.5202 9.18779C13.6316 8.60389 13.914 8.06625 14.3315 7.64311C14.749 7.21997 15.2829 6.93041 15.8652 6.81116C16.4476 6.69192 17.0522 6.74837 17.6025 6.97335C18.1527 7.19834 18.6237 7.58171 18.9556 8.07483C19.2876 8.56794 19.4656 9.14856 19.467 9.743C19.4703 10.1354 19.3961 10.5247 19.2486 10.8884C19.1012 11.2521 18.8834 11.5831 18.6078 11.8625C18.3321 12.1418 18.004 12.364 17.6424 12.5163C17.2807 12.6686 16.8925 12.748 16.5 12.75ZM15.4661 8.69658C15.738 8.41667 16.1098 8.25605 16.4999 8.25C16.7874 8.2483 17.069 8.33157 17.3093 8.48935C17.5496 8.64713 17.738 8.87239 17.8507 9.13685C17.9634 9.4013 17.9955 9.69317 17.9429 9.9758C17.8904 10.2584 17.7555 10.5192 17.5552 10.7255C17.3549 10.9317 17.0981 11.0741 16.8172 11.135C16.5362 11.1958 16.2435 11.1722 15.9759 11.0673C15.7082 10.9623 15.4776 10.7806 15.3128 10.545C15.1481 10.3094 15.0566 10.0304 15.0499 9.743C15.0446 9.35284 15.1943 8.97649 15.4661 8.69658Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$S = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M4 5.83a2.995 2.995 0 0 0 2 0V20h12V9h-5V4H7.83a2.995 2.995 0 0 0 0-2H14l6 6v12c0 1.1-.9 2-2 2H5.99C4.89 22 4 21.1 4 20V5.83zM8 16h8v2H8v-2zm0-4h8v2H8v-2zM5 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$T = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.414 4.914L17.086 0.586C16.711 0.210901 16.2024 0.000113275 15.672 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V22C2 22.5304 2.21071 23.0391 2.58579 23.4142C2.96086 23.7893 3.46957 24 4 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V6.328C21.9999 5.79761 21.7891 5.28899 21.414 4.914ZM11 19.5H6.5C6.23478 19.5 5.98043 19.3946 5.79289 19.2071C5.60536 19.0196 5.5 18.7652 5.5 18.5C5.5 18.2348 5.60536 17.9804 5.79289 17.7929C5.98043 17.6054 6.23478 17.5 6.5 17.5H11C11.2652 17.5 11.5196 17.6054 11.7071 17.7929C11.8946 17.9804 12 18.2348 12 18.5C12 18.7652 11.8946 19.0196 11.7071 19.2071C11.5196 19.3946 11.2652 19.5 11 19.5ZM15.5 15.5H6.5C6.23478 15.5 5.98043 15.3946 5.79289 15.2071C5.60536 15.0196 5.5 14.7652 5.5 14.5C5.5 14.2348 5.60536 13.9804 5.79289 13.7929C5.98043 13.6054 6.23478 13.5 6.5 13.5H15.5C15.7652 13.5 16.0196 13.6054 16.2071 13.7929C16.3946 13.9804 16.5 14.2348 16.5 14.5C16.5 14.7652 16.3946 15.0196 16.2071 15.2071C16.0196 15.3946 15.7652 15.5 15.5 15.5ZM15.5 11.5H6.5C6.23478 11.5 5.98043 11.3946 5.79289 11.2071C5.60536 11.0196 5.5 10.7652 5.5 10.5C5.5 10.2348 5.60536 9.98043 5.79289 9.79289C5.98043 9.60536 6.23478 9.5 6.5 9.5H15.5C15.7652 9.5 16.0196 9.60536 16.2071 9.79289C16.3946 9.98043 16.5 10.2348 16.5 10.5C16.5 10.7652 16.3946 11.0196 16.2071 11.2071C16.0196 11.3946 15.7652 11.5 15.5 11.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$U = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21 0.586L23.414 3C23.7891 3.37499 23.9999 3.88361 24 4.414V18.499C24 19.0294 23.7893 19.5381 23.4142 19.9132C23.0392 20.2883 22.5304 20.499 22 20.499H14.265C14.2255 20.499 14.1865 20.4894 14.1515 20.471C14.1165 20.4526 14.0865 20.426 14.064 20.3934C14.0416 20.3608 14.0274 20.3233 14.0227 20.284C14.018 20.2448 14.0229 20.2049 14.037 20.168C14.2041 19.6946 14.3259 19.2064 14.401 18.71C14.4094 18.6519 14.4383 18.5988 14.4825 18.5603C14.5268 18.5217 14.5834 18.5004 14.642 18.5H21.5C21.6326 18.5 21.7598 18.4473 21.8536 18.3536C21.9473 18.2598 22 18.1326 22 18V4.621C22 4.48865 21.9475 4.36171 21.854 4.268L19.732 2.146C19.6383 2.05253 19.5114 2.00003 19.379 2H8.50001C8.3674 2 8.24022 2.05268 8.14645 2.14645C8.05269 2.24021 8.00001 2.36739 8.00001 2.5V9.36C8.0005 9.39488 7.99358 9.42946 7.97969 9.46145C7.9658 9.49345 7.94526 9.52212 7.91944 9.54557C7.89363 9.56903 7.86312 9.58672 7.82994 9.59748C7.79676 9.60825 7.76168 9.61183 7.72701 9.608C7.28001 9.559 6.60801 9.531 6.24201 9.525C6.17693 9.52343 6.11508 9.49633 6.06981 9.44956C6.02453 9.40279 5.99946 9.34009 6.00001 9.275V2C6.00001 1.46957 6.21072 0.960859 6.58579 0.585787C6.96087 0.210714 7.46958 8.18612e-08 8.00001 8.18612e-08H19.585C19.8478 -7.51028e-05 20.108 0.0516399 20.3508 0.152189C20.5936 0.252739 20.8142 0.400151 21 0.586ZM19 8.5H12C11.7348 8.5 11.4804 8.39464 11.2929 8.20711C11.1054 8.01957 11 7.76522 11 7.5C11 7.23478 11.1054 6.98043 11.2929 6.79289C11.4804 6.60536 11.7348 6.5 12 6.5H19C19.2652 6.5 19.5196 6.60536 19.7071 6.79289C19.8946 6.98043 20 7.23478 20 7.5C20 7.76522 19.8946 8.01957 19.7071 8.20711C19.5196 8.39464 19.2652 8.5 19 8.5ZM17.5 12C17.5 11.7348 17.3947 11.4804 17.2071 11.2929C17.0196 11.1054 16.7652 11 16.5 11H12.5C12.2667 11.0008 12.0418 11.0873 11.868 11.243C11.8432 11.2644 11.8234 11.2909 11.81 11.3208C11.7966 11.3507 11.79 11.3832 11.7905 11.4159C11.7911 11.4487 11.7989 11.4809 11.8133 11.5103C11.8277 11.5397 11.8485 11.5655 11.874 11.586C12.3087 11.9803 12.699 12.421 13.038 12.9C13.0607 12.9316 13.0908 12.9573 13.1257 12.9747C13.1605 12.9921 13.1991 13.0008 13.238 13H16.5C16.7652 13 17.0196 12.8946 17.2071 12.7071C17.3947 12.5196 17.5 12.2652 17.5 12ZM2.8888 12.0954C3.95772 11.3812 5.21442 11 6.5 11C8.22326 11.0021 9.87533 11.6876 11.0939 12.9061C12.3124 14.1247 12.9979 15.7767 13 17.5C13 18.7856 12.6188 20.0423 11.9046 21.1112C11.1903 22.1801 10.1752 23.0132 8.98744 23.5052C7.79973 23.9972 6.49279 24.1259 5.23192 23.8751C3.97104 23.6243 2.81285 23.0052 1.90381 22.0962C0.994768 21.1872 0.375703 20.029 0.124899 18.7681C-0.125905 17.5072 0.00281635 16.2003 0.494786 15.0126C0.986756 13.8248 1.81988 12.8097 2.8888 12.0954ZM6.873 20.074L9.773 16.2L9.777 16.202C9.8361 16.1232 9.87909 16.0335 9.90354 15.9381C9.92798 15.8427 9.93339 15.7434 9.91947 15.6459C9.90554 15.5484 9.87254 15.4546 9.82236 15.3699C9.77218 15.2851 9.7058 15.2111 9.627 15.152C9.54821 15.0929 9.45855 15.0499 9.36314 15.0255C9.26773 15.001 9.16844 14.9956 9.07094 15.0095C8.97344 15.0235 8.87963 15.0565 8.79488 15.1066C8.71013 15.1568 8.6361 15.2232 8.577 15.302L5.845 18.945C5.82353 18.9737 5.79613 18.9975 5.76468 19.0146C5.73322 19.0318 5.69843 19.0421 5.66267 19.0446C5.62691 19.0472 5.59102 19.042 5.55744 19.0295C5.52385 19.017 5.49335 18.9974 5.468 18.972L4.168 17.672C4.02662 17.5353 3.8372 17.4596 3.64055 17.4612C3.4439 17.4629 3.25575 17.5416 3.11663 17.6806C2.97751 17.8196 2.89854 18.0077 2.89674 18.2043C2.89494 18.401 2.97045 18.5905 3.107 18.732L4.607 20.232C4.88697 20.5134 5.26707 20.6723 5.664 20.674H5.773C5.98891 20.6598 6.19914 20.5988 6.38909 20.4952C6.57904 20.3915 6.74417 20.2478 6.873 20.074Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$V = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.6677 0.587748C20.9106 0.492139 21.17 0.44565 21.431 0.450972C21.957 0.444685 22.4643 0.645879 22.843 1.01097C23.2131 1.38857 23.4204 1.89623 23.4204 2.42497C23.4204 2.95371 23.2131 3.46138 22.843 3.83897L21.783 4.89997C21.6892 4.99371 21.5621 5.04637 21.4295 5.04637C21.2969 5.04637 21.1698 4.99371 21.076 4.89997L18.955 2.77597C18.8613 2.68221 18.8086 2.55505 18.8086 2.42247C18.8086 2.28989 18.8613 2.16274 18.955 2.06897L20.016 1.00797C20.2033 0.826187 20.4248 0.683356 20.6677 0.587748ZM12.6471 15.716C13.0137 15.6344 13.3496 15.4506 13.6161 15.186L20.1521 8.65001C20.187 8.61502 20.2315 8.59116 20.28 8.58144C20.3284 8.57173 20.3787 8.5766 20.4244 8.59543C20.4701 8.61426 20.5092 8.64622 20.5367 8.68726C20.5642 8.7283 20.579 8.77659 20.5791 8.82601V20.431C20.5791 21.258 20.2506 22.051 19.6659 22.6358C19.0811 23.2205 18.288 23.549 17.4611 23.549H3.7001C3.29043 23.5495 2.88468 23.4693 2.50605 23.3129C2.12742 23.1565 1.78333 22.927 1.49346 22.6375C1.2036 22.348 0.973645 22.0042 0.816751 21.6258C0.659857 21.2473 0.579102 20.8417 0.579102 20.432V6.66701C0.579102 6.2573 0.65985 5.8516 0.816732 5.47311C0.973614 5.09462 1.20355 4.75076 1.4934 4.46119C1.78325 4.17162 2.12733 3.94201 2.50597 3.78549C2.88461 3.62898 3.29039 3.54862 3.7001 3.54901H14.7491C14.7985 3.54912 14.8468 3.56388 14.8879 3.59142C14.9289 3.61896 14.9609 3.65805 14.9797 3.70374C14.9985 3.74944 15.0034 3.79969 14.9937 3.84815C14.984 3.89661 14.9601 3.94111 14.9251 3.97601L8.6661 10.237C8.40118 10.5029 8.21735 10.8386 8.1361 11.205C8.1001 11.275 6.8091 14.443 6.8091 14.443C6.66377 14.8065 6.62827 15.2045 6.70702 15.588C6.78576 15.9714 6.97529 16.3233 7.2521 16.6C7.53209 16.8717 7.88391 17.0576 8.26607 17.1359C8.64824 17.2142 9.04484 17.1816 9.4091 17.042L9.5409 16.9884C10.1407 16.7443 12.5857 15.7494 12.6471 15.716ZM17.858 3.87101C17.7623 3.781 17.6359 3.7309 17.5045 3.7309C17.3731 3.7309 17.2467 3.781 17.151 3.87101L10.788 10.236C10.6943 10.3298 10.6416 10.4569 10.6416 10.5895C10.6416 10.7221 10.6943 10.8492 10.788 10.943L12.909 13.064C13.0028 13.1577 13.1299 13.2104 13.2625 13.2104C13.3951 13.2104 13.5222 13.1577 13.616 13.064L19.98 6.70001C20.0737 6.60624 20.1264 6.47909 20.1264 6.34651C20.1264 6.21392 20.0737 6.08677 19.98 5.99301L17.858 3.87101ZM12.0804 14.2945C12.0272 14.3581 11.9589 14.4074 11.8819 14.438L8.84987 15.65C8.759 15.6864 8.65946 15.6953 8.56359 15.6756C8.46771 15.656 8.37971 15.6086 8.31051 15.5394C8.2413 15.4702 8.19393 15.3822 8.17426 15.2863C8.15459 15.1904 8.1635 15.0909 8.19987 15L9.41387 11.963C9.44517 11.8869 9.49477 11.8197 9.55827 11.7674C9.62177 11.7151 9.6972 11.6792 9.77787 11.663C9.85897 11.6465 9.9429 11.6504 10.0221 11.6743C10.1014 11.6982 10.1734 11.7414 10.2319 11.8L12.0499 13.619C12.1086 13.6775 12.1519 13.7497 12.1759 13.8291C12.1998 13.9085 12.2036 13.9926 12.1869 14.0739C12.1703 14.1551 12.1337 14.2309 12.0804 14.2945Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$W = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.414 4.914L17.086 0.586C16.711 0.210901 16.2024 0.000113275 15.672 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V22C2 22.5304 2.21071 23.0391 2.58579 23.4142C2.96086 23.7893 3.46957 24 4 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V6.328C21.9999 5.79761 21.7891 5.28899 21.414 4.914ZM11 19.5H6.5C6.23478 19.5 5.98043 19.3946 5.79289 19.2071C5.60536 19.0196 5.5 18.7652 5.5 18.5C5.5 18.2348 5.60536 17.9804 5.79289 17.7929C5.98043 17.6054 6.23478 17.5 6.5 17.5H11C11.2652 17.5 11.5196 17.6054 11.7071 17.7929C11.8946 17.9804 12 18.2348 12 18.5C12 18.7652 11.8946 19.0196 11.7071 19.2071C11.5196 19.3946 11.2652 19.5 11 19.5ZM15.5 15.5H6.5C6.23478 15.5 5.98043 15.3946 5.79289 15.2071C5.60536 15.0196 5.5 14.7652 5.5 14.5C5.5 14.2348 5.60536 13.9804 5.79289 13.7929C5.98043 13.6054 6.23478 13.5 6.5 13.5H15.5C15.7652 13.5 16.0196 13.6054 16.2071 13.7929C16.3946 13.9804 16.5 14.2348 16.5 14.5C16.5 14.7652 16.3946 15.0196 16.2071 15.2071C16.0196 15.3946 15.7652 15.5 15.5 15.5ZM15.5 11.5H6.5C6.23478 11.5 5.98043 11.3946 5.79289 11.2071C5.60536 11.0196 5.5 10.7652 5.5 10.5C5.5 10.2348 5.60536 9.98043 5.79289 9.79289C5.98043 9.60536 6.23478 9.5 6.5 9.5H15.5C15.7652 9.5 16.0196 9.60536 16.2071 9.79289C16.3946 9.98043 16.5 10.2348 16.5 10.5C16.5 10.7652 16.3946 11.0196 16.2071 11.2071C16.0196 11.3946 15.7652 11.5 15.5 11.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$X = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0ZM13.464 18.587C13.4045 18.5959 13.3502 18.6258 13.311 18.6713C13.2717 18.7168 13.2501 18.7749 13.25 18.835V19.6C13.25 19.9315 13.1183 20.2495 12.8839 20.4839C12.6495 20.7183 12.3315 20.85 12 20.85C11.6685 20.85 11.3505 20.7183 11.1161 20.4839C10.8817 20.2495 10.75 19.9315 10.75 19.6V18.895C10.7501 18.8621 10.7438 18.8296 10.7312 18.7992C10.7187 18.7688 10.7003 18.7412 10.6771 18.7179C10.6538 18.6947 10.6262 18.6763 10.5958 18.6638C10.5654 18.6512 10.5329 18.6449 10.5 18.645H9.35301C9.02148 18.645 8.70354 18.5133 8.46912 18.2789C8.2347 18.0445 8.10301 17.7265 8.10301 17.395C8.10301 17.0635 8.2347 16.7455 8.46912 16.5111C8.70354 16.2767 9.02148 16.145 9.35301 16.145H12.941C13.2008 16.1449 13.4525 16.0544 13.6527 15.8889C13.853 15.7235 13.9894 15.4934 14.0385 15.2383C14.0877 14.9832 14.0464 14.719 13.9218 14.491C13.7973 14.263 13.5972 14.0855 13.356 13.989L9.71601 12.532C8.97705 12.239 8.35568 11.7099 7.94857 11.0271C7.54146 10.3443 7.37146 9.5461 7.465 8.75668C7.55854 7.96726 7.91039 7.2309 8.4658 6.66216C9.02121 6.09343 9.74903 5.72423 10.536 5.612C10.5954 5.60336 10.6497 5.57366 10.689 5.52831C10.7282 5.48296 10.7499 5.425 10.75 5.365V4.6C10.75 4.26848 10.8817 3.95054 11.1161 3.71612C11.3505 3.4817 11.6685 3.35 12 3.35C12.3315 3.35 12.6495 3.4817 12.8839 3.71612C13.1183 3.95054 13.25 4.26848 13.25 4.6V5.306C13.25 5.3723 13.2763 5.43589 13.3232 5.48278C13.3701 5.52966 13.4337 5.556 13.5 5.556H14.647C14.9785 5.556 15.2965 5.6877 15.5309 5.92212C15.7653 6.15654 15.897 6.47448 15.897 6.806C15.897 7.13752 15.7653 7.45546 15.5309 7.68988C15.2965 7.9243 14.9785 8.056 14.647 8.056H11.059C10.799 8.05544 10.5469 8.1456 10.3463 8.31095C10.1456 8.47629 10.0089 8.70646 9.95976 8.96177C9.91059 9.21709 9.95203 9.48156 10.0769 9.7096C10.2018 9.93764 10.4024 10.115 10.644 10.211L14.284 11.668C15.023 11.961 15.6443 12.4901 16.0514 13.1729C16.4585 13.8557 16.6286 14.6539 16.535 15.4433C16.4415 16.2327 16.0896 16.9691 15.5342 17.5378C14.9788 18.1066 14.251 18.4748 13.464 18.587Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$Y = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.08696 12C2.08696 6.52518 6.52518 2.08696 12 2.08696C17.4748 2.08696 21.913 6.52518 21.913 12C21.913 17.4748 17.4748 21.913 12 21.913C6.52518 21.913 2.08696 17.4748 2.08696 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM15.1304 6.26086H13.0435V4.95652C13.0435 4.38022 12.5763 3.91304 12 3.91304C11.4237 3.91304 10.9565 4.38022 10.9565 4.95652V6.26086H10.7731C10.3876 6.23657 10.0011 6.29291 9.63838 6.42651C9.26109 6.56545 8.91846 6.78464 8.63417 7.06894C8.34987 7.35324 8.13068 7.69586 7.99173 8.07315C7.85732 8.43812 7.8011 8.82711 7.82654 9.21491C7.84772 10.2322 8.60347 10.9746 9.1986 11.4476C9.84674 11.9627 10.685 12.4462 11.4364 12.8796L11.4786 12.9039C12.2817 13.3671 12.9893 13.7781 13.503 14.1862C14.019 14.5963 14.0793 14.8041 14.0861 14.8276C14.0868 14.83 14.087 14.8305 14.087 14.8289L14.0871 14.848C14.0891 14.9542 14.0696 15.0597 14.0299 15.1581C13.9902 15.2566 13.931 15.346 13.8559 15.4211C13.7808 15.4962 13.6914 15.5554 13.5929 15.5951C13.4945 15.6348 13.389 15.6543 13.2828 15.6523L13.2637 15.6522H8.86957C8.29327 15.6522 7.82609 16.1193 7.82609 16.6956C7.82609 17.2719 8.29327 17.7391 8.86957 17.7391H10.9565V19.0435C10.9565 19.6198 11.4237 20.087 12 20.087C12.5763 20.087 13.0435 19.6198 13.0435 19.0435V17.7391H13.2551C13.6382 17.7447 14.0185 17.6738 14.3738 17.5305C14.7324 17.3858 15.0582 17.1703 15.3316 16.8968C15.605 16.6234 15.8205 16.2976 15.9652 15.939C16.1088 15.5832 16.1797 15.2023 16.1739 14.8187C16.1689 13.7841 15.4031 13.0306 14.8014 12.5524C14.1533 12.0373 13.315 11.5538 12.5636 11.1204L12.5636 11.1204L12.5214 11.0961C11.7183 10.6328 11.0107 10.2219 10.497 9.81374C9.98104 9.40366 9.9207 9.19588 9.91388 9.17243C9.91317 9.16996 9.91304 9.16953 9.91304 9.17112C9.91304 9.14341 9.91194 9.1157 9.90973 9.08808C9.90178 8.98841 9.91555 8.8882 9.9501 8.79437C9.98466 8.70055 10.0392 8.61535 10.1099 8.54464C10.1806 8.47394 10.2658 8.41943 10.3596 8.38488C10.4534 8.35032 10.5536 8.33655 10.6533 8.34451C10.6809 8.34671 10.7086 8.34782 10.7363 8.34782H11.996L12 8.34783L12.004 8.34782H15.1304C15.7067 8.34782 16.1739 7.88064 16.1739 7.30434C16.1739 6.72804 15.7067 6.26086 15.1304 6.26086Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$Z = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M4 12l1.41-1.41L11 16.17V4h2v12.17l5.58-5.59L20 12l-8 8z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$_ = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.369 1.67353L22.3265 3.63199C22.7572 4.06408 22.9991 4.64931 22.9991 5.25942C22.9991 5.86954 22.7572 6.45477 22.3265 6.88686L21.0209 8.19526C20.9344 8.28169 20.8172 8.33024 20.6949 8.33024C20.5727 8.33024 20.4554 8.28169 20.369 8.19526L15.8048 3.63199C15.7184 3.54553 15.6698 3.42829 15.6698 3.30604C15.6698 3.18379 15.7184 3.06655 15.8048 2.98009L17.1123 1.67353C17.5444 1.24223 18.1301 1 18.7406 1C19.3512 1 19.9368 1.24223 20.369 1.67353ZM14.8274 4.61123C14.7847 4.56811 14.7338 4.53386 14.6778 4.51044C14.6218 4.48702 14.5617 4.4749 14.501 4.47476C14.4403 4.47477 14.3803 4.48675 14.3243 4.51001C14.2683 4.53327 14.2174 4.56735 14.1746 4.6103L4.10386 14.6838C4.01743 14.7703 3.96887 14.8875 3.96887 15.0097C3.96887 15.132 4.01743 15.2492 4.10386 15.3357L8.6662 19.898C8.75266 19.9845 8.8699 20.033 8.99215 20.033C9.1144 20.033 9.23164 19.9845 9.3181 19.898L19.3842 9.83192C19.4704 9.74551 19.5187 9.62846 19.5187 9.50644C19.5187 9.38441 19.4704 9.26737 19.3842 9.18095L14.8274 4.61123ZM3.17577 16.4265C3.11779 16.3687 3.04545 16.3274 2.96621 16.3068C2.88697 16.2862 2.80367 16.2871 2.72489 16.3094C2.64598 16.3315 2.5744 16.3743 2.51751 16.4333C2.46062 16.4923 2.42049 16.5654 2.40124 16.645L1.01262 22.4328C0.994298 22.5095 0.995949 22.5896 1.01742 22.6655C1.03889 22.7413 1.07946 22.8104 1.13526 22.8662C1.19141 22.9213 1.26057 22.9613 1.33633 22.9826C1.41208 23.0039 1.49198 23.0057 1.56862 22.9879L7.35178 21.6048C7.43152 21.5857 7.50474 21.5457 7.56387 21.4889C7.623 21.4321 7.66591 21.3605 7.68818 21.2816C7.71045 21.2027 7.71126 21.1193 7.69054 21.0399C7.66982 20.9606 7.62832 20.8882 7.57031 20.8303L3.17577 16.4265Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$$ = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21 2.5C21 1.83696 20.7366 1.20107 20.2678 0.732233C19.7989 0.263392 19.163 0 18.5 0L5.5 0C4.83696 0 4.20107 0.263392 3.73223 0.732233C3.26339 1.20107 3 1.83696 3 2.5V21.5C3 21.8283 3.06466 22.1534 3.1903 22.4567C3.31594 22.76 3.50009 23.0356 3.73223 23.2678C3.96438 23.4999 4.23998 23.6841 4.54329 23.8097C4.84661 23.9353 5.1717 24 5.5 24H15.5C16.9582 23.9984 18.3562 23.4184 19.3873 22.3873C20.4184 21.3562 20.9984 19.9582 21 18.5V2.5ZM7 4C7.00181 3.86796 7.05507 3.74183 7.14845 3.64845C7.24183 3.55507 7.36796 3.50181 7.5 3.5H16.5C16.6326 3.5 16.7598 3.55268 16.8536 3.64645C16.9473 3.74021 17 3.86739 17 4V10.5C17 10.6326 16.9473 10.7598 16.8536 10.8536C16.7598 10.9473 16.6326 11 16.5 11H7.5C7.36739 11 7.24021 10.9473 7.14645 10.8536C7.05268 10.7598 7 10.6326 7 10.5V4ZM11.5 16.75C11.5 16.9489 11.421 17.1397 11.2803 17.2803C11.1397 17.421 10.9489 17.5 10.75 17.5H9.5C9.36739 17.5 9.24021 17.5527 9.14645 17.6464C9.05268 17.7402 9 17.8674 9 18V19.25C9 19.4489 8.92098 19.6397 8.78033 19.7803C8.63968 19.921 8.44891 20 8.25 20C8.05109 20 7.86032 19.921 7.71967 19.7803C7.57902 19.6397 7.5 19.4489 7.5 19.25V18C7.5 17.8674 7.44732 17.7402 7.35355 17.6464C7.25979 17.5527 7.13261 17.5 7 17.5H5.75C5.55109 17.5 5.36032 17.421 5.21967 17.2803C5.07902 17.1397 5 16.9489 5 16.75C5 16.5511 5.07902 16.3603 5.21967 16.2197C5.36032 16.079 5.55109 16 5.75 16H7C7.13261 16 7.25979 15.9473 7.35355 15.8536C7.44732 15.7598 7.5 15.6326 7.5 15.5V14.25C7.5 14.0511 7.57902 13.8603 7.71967 13.7197C7.86032 13.579 8.05109 13.5 8.25 13.5C8.44891 13.5 8.63968 13.579 8.78033 13.7197C8.92098 13.8603 9 14.0511 9 14.25V15.5C9 15.6326 9.05268 15.7598 9.14645 15.8536C9.24021 15.9473 9.36739 16 9.5 16H10.75C10.9489 16 11.1397 16.079 11.2803 16.2197C11.421 16.3603 11.5 16.5511 11.5 16.75ZM14.5 19.5C14.3022 19.5 14.1089 19.4414 13.9444 19.3315C13.78 19.2216 13.6518 19.0654 13.5761 18.8827C13.5004 18.7 13.4806 18.4989 13.5192 18.3049C13.5578 18.1109 13.653 17.9327 13.7929 17.7929C13.9327 17.653 14.1109 17.5578 14.3049 17.5192C14.4989 17.4806 14.7 17.5004 14.8827 17.5761C15.0654 17.6518 15.2216 17.78 15.3315 17.9444C15.4414 18.1089 15.5 18.3022 15.5 18.5C15.5 18.7652 15.3946 19.0196 15.2071 19.2071C15.0196 19.3946 14.7652 19.5 14.5 19.5ZM17 16.5C16.8022 16.5 16.6089 16.4414 16.4444 16.3315C16.28 16.2216 16.1518 16.0654 16.0761 15.8827C16.0004 15.7 15.9806 15.4989 16.0192 15.3049C16.0578 15.1109 16.153 14.9327 16.2929 14.7929C16.4327 14.653 16.6109 14.5578 16.8049 14.5192C16.9989 14.4806 17.2 14.5004 17.3827 14.5761C17.5654 14.6518 17.7216 14.78 17.8315 14.9444C17.9414 15.1089 18 15.3022 18 15.5C18 15.7652 17.8946 16.0196 17.7071 16.2071C17.5196 16.3946 17.2652 16.5 17 16.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$10 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M5.77137 5.01756C6.44194 4.39481 7.31297 4.03358 8.22776 4H21.9649C23.0893 4 24 4.91072 24 6.03513V17.2283C24 18.3527 23.0893 19.2635 21.9649 19.2635H8.22776C7.31297 19.2299 6.44194 18.8686 5.77137 18.2459L0.596037 13.0706C-0.198679 12.2758 -0.198679 10.9876 0.596037 10.1929L5.77137 5.01756ZM7.2102 16.8071C7.49207 17.0594 7.85025 17.208 8.22776 17.2283H21.7105C21.8509 17.2283 21.9649 17.1144 21.9649 16.9739V6.28952C21.9649 6.14909 21.8509 6.03513 21.7105 6.03513H8.22776C7.85025 6.05548 7.49105 6.20404 7.2102 6.4564L2.03487 11.6317L7.2102 16.8071ZM12.4161 8.69707C12.9126 8.2005 13.7185 8.2005 14.2151 8.69707L15.1706 9.65257C15.2703 9.75229 15.4311 9.75229 15.5308 9.65257L16.4863 8.69707C16.9829 8.2005 17.7888 8.2005 18.2854 8.69707C18.7819 9.19364 18.7819 9.99955 18.2854 10.4961L17.3289 11.4516C17.2301 11.5513 17.2301 11.7121 17.3289 11.8118L18.2854 12.7673C18.7819 13.2639 18.7819 14.0698 18.2854 14.5664C17.7888 15.063 16.9829 15.063 16.4863 14.5664L15.5308 13.6099C15.4311 13.5101 15.2703 13.5101 15.1706 13.6099L14.2151 14.5664C13.7185 15.063 12.9126 15.063 12.4161 14.5664C11.9195 14.0698 11.9195 13.2639 12.4161 12.7673L13.3726 11.8118C13.4713 11.7121 13.4713 11.5513 13.3726 11.4516L12.4161 10.4961C11.9195 9.99955 11.9195 9.19364 12.4161 8.69707Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$11 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0ZM14 8.387C14.1642 8.387 14.3267 8.41933 14.4784 8.48215C14.63 8.54497 14.7678 8.63704 14.8839 8.75312C15 8.86919 15.092 9.00699 15.1549 9.15865C15.2177 9.3103 15.25 9.47285 15.25 9.637C15.25 9.80115 15.2177 9.9637 15.1549 10.1154C15.092 10.267 15 10.4048 14.8839 10.5209C14.7678 10.637 14.63 10.729 14.4784 10.7918C14.3267 10.8547 14.1642 10.887 14 10.887H9.62801C9.56583 10.887 9.50587 10.9101 9.45983 10.9519C9.41379 10.9937 9.38497 11.0511 9.37901 11.113C9.35201 11.393 9.33701 11.687 9.33701 12C9.33701 12.121 9.33701 12.239 9.34401 12.354C9.34634 12.4187 9.3737 12.48 9.42034 12.525C9.46697 12.5699 9.52923 12.595 9.59401 12.595H12.77C13.1015 12.595 13.4195 12.7267 13.6539 12.9611C13.8883 13.1955 14.02 13.5135 14.02 13.845C14.02 14.1765 13.8883 14.4945 13.6539 14.7289C13.4195 14.9633 13.1015 15.095 12.77 15.095H10.49C10.4436 15.095 10.3981 15.1079 10.3586 15.1323C10.3191 15.1567 10.2872 15.1917 10.2664 15.2332C10.2456 15.2747 10.2368 15.3212 10.241 15.3675C10.2452 15.4137 10.2621 15.4579 10.29 15.495C11.257 16.718 13.007 17.245 15.765 17.245C16.0965 17.245 16.4145 17.3767 16.6489 17.6111C16.8833 17.8455 17.015 18.1635 17.015 18.495C17.015 18.8265 16.8833 19.1445 16.6489 19.3789C16.4145 19.6133 16.0965 19.745 15.765 19.745C13.926 19.745 8.97301 19.726 7.36501 15.255C7.34735 15.2066 7.31524 15.1648 7.27302 15.1353C7.2308 15.1058 7.18052 15.09 7.12901 15.09H6.27001C5.93848 15.09 5.62054 14.9583 5.38612 14.7239C5.1517 14.4895 5.02001 14.1715 5.02001 13.84C5.02001 13.5085 5.1517 13.1905 5.38612 12.9561C5.62054 12.7217 5.93848 12.59 6.27001 12.59H6.60001C6.63441 12.5898 6.66841 12.5826 6.69991 12.5687C6.73141 12.5549 6.75975 12.5348 6.78317 12.5096C6.80659 12.4844 6.82461 12.4546 6.8361 12.4222C6.84759 12.3898 6.85233 12.3553 6.85001 12.321C6.84201 12.216 6.83501 12.109 6.83501 11.995C6.83501 11.695 6.85101 11.422 6.87301 11.152C6.87577 11.1176 6.87138 11.083 6.86012 11.0504C6.84886 11.0178 6.83097 10.9879 6.80759 10.9625C6.7842 10.9372 6.75581 10.9169 6.72422 10.9031C6.69262 10.8892 6.6585 10.882 6.62401 10.882H6.31301C5.98148 10.882 5.66354 10.7503 5.42912 10.5159C5.1947 10.2815 5.06301 9.96352 5.06301 9.632C5.06301 9.30048 5.1947 8.98254 5.42912 8.74812C5.66354 8.5137 5.98148 8.382 6.31301 8.382H7.31301C7.36126 8.38208 7.4085 8.36813 7.44898 8.34186C7.48946 8.31558 7.52143 8.27811 7.54101 8.234C9.33201 4.252 14 4.25 15.769 4.25C16.1005 4.25 16.4185 4.3817 16.6529 4.61612C16.8873 4.85054 17.019 5.16848 17.019 5.5C17.019 5.83152 16.8873 6.14946 16.6529 6.38388C16.4185 6.6183 16.1005 6.75 15.769 6.75C13.469 6.75 11.876 7.115 10.847 7.942C10.8068 7.97421 10.7776 8.01804 10.7633 8.0675C10.749 8.11695 10.7503 8.16962 10.767 8.21831C10.7837 8.267 10.8151 8.30933 10.8568 8.33952C10.8985 8.36972 10.9485 8.3863 11 8.387H14Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$12 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.08696 12C2.08696 6.52518 6.52518 2.08696 12 2.08696C17.4748 2.08696 21.913 6.52518 21.913 12C21.913 17.4748 17.4748 21.913 12 21.913C6.52518 21.913 2.08696 17.4748 2.08696 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM9.91304 12C9.91304 11.8176 9.91991 11.6438 9.93316 11.4783H13.5652C14.1415 11.4783 14.6087 11.0111 14.6087 10.4348C14.6087 9.85849 14.1415 9.3913 13.5652 9.3913H10.6942C10.7351 9.34383 10.7772 9.29849 10.8205 9.25524C11.3649 8.71076 12.2391 8.34783 13.5652 8.34783C14.1415 8.34783 14.6087 7.88064 14.6087 7.30435C14.6087 6.72805 14.1415 6.26087 13.5652 6.26087C11.8652 6.26087 10.3916 6.73272 9.34476 7.77954C8.88438 8.23992 8.5352 8.78286 8.28847 9.3913H7.30435C6.72805 9.3913 6.26087 9.85849 6.26087 10.4348C6.26087 11.0111 6.72805 11.4783 7.30435 11.4783H7.84145C7.83117 11.6496 7.82609 11.8236 7.82609 12C7.82609 12.1764 7.83117 12.3504 7.84145 12.5217H7.30435C6.72805 12.5217 6.26087 12.9889 6.26087 13.5652C6.26087 14.1415 6.72805 14.6087 7.30435 14.6087H8.28847C8.5352 15.2171 8.88438 15.7601 9.34476 16.2205C10.3916 17.2673 11.8652 17.7391 13.5652 17.7391C14.1415 17.7391 14.6087 17.2719 14.6087 16.6957C14.6087 16.1194 14.1415 15.6522 13.5652 15.6522C12.2391 15.6522 11.3649 15.2892 10.8205 14.7448C10.7772 14.7015 10.7351 14.6562 10.6942 14.6087H12C12.5763 14.6087 13.0435 14.1415 13.0435 13.5652C13.0435 12.9889 12.5763 12.5217 12 12.5217H9.93316C9.91991 12.3562 9.91304 12.1824 9.91304 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$13 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M13.338 4.5L14.5 5.72 8 12.5 1.5 5.713 2.662 4.5 8 10.073z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$14 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM13.1739 9.65217H15.4007L15.1831 11.7391H13.1739V18H10.5652V11.7391H9V9.65217H10.5652V8.53304C10.5652 7.55165 10.9534 6 13.0023 6H15.2609V8.09217C15.2609 8.09217 13.92 8.08696 13.7019 8.08696C13.6276 8.08323 13.5533 8.09592 13.4844 8.12411C13.4156 8.15231 13.3537 8.19532 13.3033 8.2501C13.2529 8.30487 13.2152 8.37007 13.1928 8.44106C13.1705 8.51205 13.164 8.5871 13.1739 8.66087V9.65217Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$15 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M6.5 22H2.251C2.113 22.001 2.001 21.891 2 21.753C2 21.752 2 21.751 2 21.75V17.5C2 16.948 1.552 16.5 1 16.5C0.448 16.5 0 16.948 0 17.5V22C0 23.105 0.895 24 2 24H6.5C7.052 24 7.5 23.552 7.5 23C7.5 22.448 7.052 22 6.5 22ZM1 7.5C1.552 7.5 2 7.052 2 6.5V2.25C1.999 2.112 2.11 2.001 2.248 2C2.249 2 2.25 2 2.251 2H6.5C7.052 2 7.5 1.552 7.5 1C7.5 0.448 7.052 0 6.5 0H2C0.895 0 0 0.895 0 2V6.5C0 7.052 0.448 7.5 1 7.5ZM23 16.5C22.448 16.5 22 16.948 22 17.5V21.75C22 21.888 21.888 22 21.75 22H17.5C16.948 22 16.5 22.448 16.5 23C16.5 23.552 16.948 24 17.5 24H22C23.105 24 24 23.105 24 22V17.5C24 16.948 23.552 16.5 23 16.5ZM22 0H17.5C16.948 0 16.5 0.448 16.5 1C16.5 1.552 16.948 2 17.5 2H21.75C21.888 2 22 2.112 22 2.25V6.5C22 7.052 22.448 7.5 23 7.5C23.552 7.5 24 7.052 24 6.5V2C24 0.895 23.105 0 22 0ZM15.772 14.453C16.074 13.99 16.694 13.86 17.157 14.162C17.62 14.464 17.75 15.084 17.448 15.547C15.492 18.557 11.466 19.411 8.456 17.455C7.694 16.96 7.044 16.31 6.548 15.547C6.246 15.084 6.376 14.464 6.839 14.162C7.302 13.86 7.922 13.99 8.224 14.453C9.579 16.536 12.367 17.126 14.45 15.771C14.977 15.428 15.425 14.979 15.768 14.453H15.772ZM8.5 11.5C7.948 11.5 7.5 11.052 7.5 10.5V7.5C7.5 6.948 7.948 6.5 8.5 6.5C9.052 6.5 9.5 6.948 9.5 7.5V10.5C9.5 11.052 9.052 11.5 8.5 11.5ZM15.5 11.5C14.948 11.5 14.5 11.052 14.5 10.5V7.5C14.5 6.948 14.948 6.5 15.5 6.5C16.052 6.5 16.5 6.948 16.5 7.5V10.5C16.5 11.052 16.052 11.5 15.5 11.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$16 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        d: "M0 0h36v36H0z"
      }), h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M32.233 24.017a.99.99 0 0 1 .984.983v3.067a5.158 5.158 0 0 1-5.15 5.15h-3.334a.99.99 0 0 1-.983-.984.99.99 0 0 1 .983-.983h3.334a3.178 3.178 0 0 0 3.183-3.183V25a.99.99 0 0 1 .983-.983zM28.067 2.783a5.158 5.158 0 0 1 5.15 5.15V11.5a.99.99 0 0 1-.984.983.99.99 0 0 1-.983-.983V7.933a3.178 3.178 0 0 0-3.183-3.183h-3.334a.99.99 0 0 1-.983-.983.99.99 0 0 1 .983-.984h3.334zm-3.767 15.1a1.182 1.182 0 0 1-1.183-1.183v-2.367c0-.648.522-1.183 1.183-1.183.671 0 1.183.512 1.183 1.183v2.417c-.043.634-.554 1.133-1.183 1.133zm-1.91 6.04c.4-.4 1.032-.4 1.387 0 .4.4.4 1.033.002 1.385a7.867 7.867 0 0 1-5.646 2.375h-.266c-2.112 0-4.106-.835-5.644-2.373-.4-.4-.4-1.032 0-1.387.4-.4 1.033-.4 1.387 0 1.158 1.158 2.663 1.794 4.257 1.794h.266c1.573 0 3.108-.645 4.257-1.794zm-6.223-1.606a.99.99 0 0 1-.984-.984.99.99 0 0 1 .984-.983h.166a.98.98 0 0 0 .984-.983v-5.034a.99.99 0 0 1 .983-.983.99.99 0 0 1 .983.983V19.4c0 1.61-1.317 2.917-2.95 2.917h-.166zm-4.934-9.167c.649 0 1.184.522 1.184 1.183v2.4c0 .645-.519 1.15-1.184 1.15A1.182 1.182 0 0 1 10.05 16.7v-2.367c0-.648.522-1.183 1.183-1.183zm-7.466-.667a.99.99 0 0 1-.984-.983V7.933a5.158 5.158 0 0 1 5.15-5.15h3.334a.99.99 0 0 1 .983.984.99.99 0 0 1-.983.983H7.933A3.178 3.178 0 0 0 4.75 7.933V11.5a.99.99 0 0 1-.983.983zm7.466 18.767a.99.99 0 0 1 .984.983.969.969 0 0 1-.984.984H7.9a5.158 5.158 0 0 1-5.15-5.15V25a.99.99 0 0 1 .983-.983.99.99 0 0 1 .984.983v3.067A3.178 3.178 0 0 0 7.9 31.25h3.333z"
      }))));
    }
  }]);

  return Icon;
}(m);

var Icon$17 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-.14 0-.27-.01-.4-.03a2.008 2.008 0 0 1-1.44-1.19c-.1-.24-.16-.51-.16-.78V5c0-.28.06-.54.16-.77A2.008 2.008 0 0 1 4.6 3.04c.13-.03.26-.04.4-.04h4.18C9.6 1.84 10.7 1 12 1c1.3 0 2.4.84 2.82 2H19zm-7-.25c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM19 19V5H5v14h14zM7 15h7v2H7v-2zm0-4h10v2H7v-2zm0-4h10v2H7V7z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$18 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M11.6199 3.69361C11.7138 3.42763 12.0895 3.42645 12.1851 3.69184L13.7 7.9C14.1 8.9 15 9.6 16.1 9.6H20.1743C20.4546 9.6 20.5818 9.95013 20.3669 10.13L16.7 13.2C15.9 13.9 15.6 15 15.9 15.9L17.3982 20.3113C17.4921 20.5879 17.1756 20.8219 16.9387 20.6511L13.4 18.1C13 17.8 12.5 17.6 11.9 17.6C11.3 17.6 10.8 17.8 10.4 18.1L6.86132 20.6511C6.62439 20.8219 6.30789 20.5879 6.40182 20.3113L7.9 15.9C8.2 14.9 7.9 13.8 7.1 13.2L3.45442 10.2327C3.23547 10.0545 3.36149 9.7 3.6438 9.7H7.7C8.8 9.7 9.7 9 10.1 8L11.6199 3.69361ZM11.9 0C11.7 0 11.5 0 11.4 0.1C10.9 0.3 10.6 0.6 10.5 1L8.2 7.3C8.2 7.5 8 7.7 7.8 7.7H1.5C0.7 7.7 0 8.4 0 9.2C0 9.7 0.2 10.1 0.5 10.4L5.8 14.8C6 14.9 6 15.2 6 15.4L3.8 22C3.5 22.8 4 23.7 4.8 23.9C4.9 24 5.1 24 5.2 24C5.5 24 5.8 23.9 6.1 23.7L11.6 19.7C11.7 19.6 11.8 19.6 11.9 19.6C12 19.6 12.1 19.6 12.2 19.7L17.7 23.7C18 23.9 18.3 24 18.6 24C19.1 24 19.5 23.8 19.8 23.4C20.1 23 20.2 22.5 20 22L17.8 15.3C17.7 15.1 17.8 14.9 18 14.7L23.3 10.3C23.8 9.9 24 9.2 23.7 8.6C23.5 8 22.9 7.6 22.3 7.6H16.1C15.9 7.6 15.7 7.5 15.6 7.3L13.3 1C13.1 0.4 12.5 0 11.9 0Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$19 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M23.6982 8.66153C23.5891 8.36845 23.3932 8.11562 23.1367 7.9368C22.8801 7.75798 22.5751 7.66167 22.2624 7.66075H16.0463C15.9406 7.66082 15.8374 7.62805 15.751 7.56695C15.6647 7.50585 15.5994 7.41944 15.5643 7.31966L13.333 0.995335C13.2237 0.703027 13.0277 0.451074 12.7713 0.273196C12.5149 0.0953175 12.2103 0 11.8982 0C11.5861 0 11.2815 0.0953175 11.0251 0.273196C10.7687 0.451074 10.5727 0.703027 10.4634 0.995335L10.4583 1.01167L8.23207 7.31966C8.19701 7.41927 8.13193 7.50557 8.04579 7.56665C7.95965 7.62774 7.85669 7.66061 7.75108 7.66075H1.53296C1.21824 7.66051 0.91109 7.75722 0.653277 7.93772C0.395464 8.11821 0.199505 8.37374 0.0920508 8.66955C-0.0154033 8.96535 -0.0291364 9.28708 0.0527191 9.59096C0.134575 9.89485 0.308046 10.1661 0.54954 10.368L5.84347 14.7591C5.92266 14.8249 5.98014 14.913 6.00839 15.0119C6.03663 15.1109 6.03432 15.216 6.00176 15.3137L3.77757 21.9832C3.67478 22.2915 3.67275 22.6246 3.77177 22.9342C3.8708 23.2438 4.06574 23.5139 4.32841 23.7054C4.59107 23.8968 4.90784 23.9998 5.23289 23.9994C5.55794 23.9989 5.87442 23.8951 6.13656 23.7029L11.5959 19.6997C11.6835 19.6356 11.7892 19.601 11.8977 19.601C12.0062 19.601 12.1119 19.6356 12.1995 19.6997L17.6568 23.7018C17.9188 23.8947 18.2354 23.9991 18.5608 24C18.8861 24.0009 19.2033 23.8981 19.4663 23.7066C19.7294 23.5152 19.9246 23.2449 20.0238 22.935C20.1229 22.6252 20.1208 22.2918 20.0178 21.9832L17.7936 15.3096C17.7611 15.212 17.7587 15.1068 17.787 15.0078C17.8152 14.9089 17.8727 14.8208 17.9519 14.7551L23.2561 10.3577C23.4945 10.1542 23.6647 9.88246 23.7438 9.57914C23.8228 9.27582 23.8069 8.95554 23.6982 8.66153Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1a = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.5 7C2.5 6.17157 3.17157 5.5 4 5.5H20C20.8284 5.5 21.5 6.17157 21.5 7C21.5 7.82843 20.8284 8.5 20 8.5H4C3.17157 8.5 2.5 7.82843 2.5 7ZM5.5 12C5.5 11.1716 6.17157 10.5 7 10.5H17C17.8284 10.5 18.5 11.1716 18.5 12C18.5 12.8284 17.8284 13.5 17 13.5H7C6.17157 13.5 5.5 12.8284 5.5 12ZM9.5 17C9.5 16.1716 10.1716 15.5 11 15.5H13C13.8284 15.5 14.5 16.1716 14.5 17C14.5 17.8284 13.8284 18.5 13 18.5H11C10.1716 18.5 9.5 17.8284 9.5 17Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1b = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.7236 23.446C23.7236 23.7111 23.6183 23.9654 23.4308 24.153V24.156C23.2551 24.3356 23.0168 24.4405 22.7656 24.4487C22.5145 24.4569 22.2699 24.3678 22.0828 24.2L0.568798 2.70497C0.38664 2.51637 0.285845 2.26377 0.288124 2.00157C0.290402 1.73938 0.395571 1.48856 0.580979 1.30316C0.766387 1.11775 1.0172 1.01258 1.2794 1.0103C1.54159 1.00802 1.7942 1.10882 1.9828 1.29097L8.2998 7.60597L12.8688 1.20597C12.9358 1.11193 13.0333 1.04397 13.1447 1.01364C13.2561 0.983319 13.3746 0.992493 13.48 1.03961C13.5855 1.08673 13.6713 1.16888 13.7231 1.27212C13.7748 1.37536 13.7892 1.49332 13.7638 1.60597L11.8998 9.99997H19.2758C19.3674 10.0002 19.4572 10.0255 19.5354 10.0733C19.6136 10.121 19.6771 10.1893 19.7191 10.2708C19.7611 10.3522 19.78 10.4436 19.7736 10.535C19.7671 10.6263 19.7358 10.7142 19.6828 10.789L16.2648 15.573L23.4308 22.739C23.6183 22.9265 23.7236 23.1808 23.7236 23.446ZM6.36292 10.6312C6.39701 10.6437 6.42799 10.6634 6.4537 10.689L14.0577 18.297C14.0998 18.3387 14.1256 18.394 14.1305 18.453C14.1355 18.512 14.1192 18.5709 14.0847 18.619L9.6787 24.789C9.63238 24.8537 9.57129 24.9064 9.50051 24.9428C9.42972 24.9791 9.35127 24.998 9.2717 24.998C9.2028 24.9974 9.13473 24.9828 9.0717 24.955C8.96651 24.9079 8.88078 24.826 8.82904 24.7231C8.77729 24.6201 8.76268 24.5024 8.7877 24.39L10.6567 15.998H3.2807C3.18892 15.9979 3.09893 15.9726 3.02058 15.9248C2.94224 15.877 2.87856 15.8085 2.83653 15.727C2.79449 15.6454 2.77573 15.5538 2.78228 15.4622C2.78884 15.3707 2.82047 15.2827 2.8737 15.208L6.0737 10.721C6.09476 10.6914 6.122 10.6668 6.15354 10.6489C6.18507 10.6309 6.22013 10.62 6.25629 10.617C6.29245 10.6139 6.32883 10.6188 6.36292 10.6312Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1c = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.4436 10.27C20.4015 10.1886 20.3378 10.1204 20.2595 10.0728C20.1812 10.0251 20.0913 9.99997 19.9996 9.99997H12.6236L14.4876 1.60597C14.513 1.49332 14.4986 1.37536 14.4469 1.27212C14.3952 1.16888 14.3093 1.08673 14.2039 1.03961C14.0985 0.992493 13.98 0.983319 13.8686 1.01364C13.7571 1.04397 13.6596 1.11193 13.5926 1.20597L3.59264 15.206C3.53829 15.2807 3.50572 15.3691 3.49857 15.4613C3.49142 15.5535 3.50995 15.6458 3.55212 15.7281C3.59429 15.8103 3.65844 15.8793 3.73744 15.9273C3.81644 15.9753 3.9072 16.0005 3.99964 16H11.3756L9.51164 24.39C9.48627 24.5026 9.50067 24.6206 9.55239 24.7238C9.60412 24.8271 9.68998 24.9092 9.79541 24.9563C9.90083 25.0035 10.0193 25.0126 10.1307 24.9823C10.2422 24.952 10.3396 24.884 10.4066 24.79L20.4066 10.79C20.46 10.7151 20.4917 10.6269 20.4983 10.5352C20.5048 10.4434 20.4859 10.3517 20.4436 10.27Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1d = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M10.6797 3.67538C10.494 3.88635 10.3997 4.16243 10.4176 4.44289C10.4355 4.72336 10.564 4.98524 10.7749 5.17096L17.1233 10.7573C17.1516 10.7826 17.1716 10.816 17.1806 10.8529C17.1896 10.8899 17.1872 10.9287 17.1737 10.9642C17.1603 10.9998 17.1363 11.0304 17.1051 11.0521C17.0739 11.0738 17.0368 11.0856 16.9988 11.0858L4.05906 11.0858C3.77818 11.0858 3.5088 11.1974 3.31019 11.396C3.11158 11.5946 3 11.864 3 12.1448C3 12.4257 3.11158 12.6951 3.31019 12.8937C3.5088 13.0923 3.77818 13.2039 4.05906 13.2039L16.9988 13.2039C17.0368 13.2041 17.0739 13.2158 17.1051 13.2375C17.1363 13.2592 17.1603 13.2899 17.1737 13.3254C17.1872 13.361 17.1896 13.3998 17.1806 13.4367C17.1716 13.4737 17.1516 13.507 17.1233 13.5324L10.7749 19.1202C10.6647 19.2104 10.5739 19.3219 10.5077 19.448C10.4416 19.5741 10.4016 19.7123 10.39 19.8542C10.3785 19.9962 10.3957 20.139 10.4405 20.2741C10.4854 20.4092 10.557 20.534 10.6512 20.6408C10.7453 20.7477 10.86 20.8344 10.9884 20.896C11.1168 20.9575 11.2563 20.9925 11.3986 20.9989C11.5409 21.0053 11.6829 20.983 11.8164 20.9333C11.9498 20.8836 12.0719 20.8075 12.1752 20.7095L20.4002 13.4702C20.5886 13.3046 20.7396 13.1007 20.8431 12.8722C20.9465 12.6437 21 12.3957 21 12.1448C21 11.894 20.9465 11.646 20.8431 11.4175C20.7396 11.1889 20.5886 10.9851 20.4002 10.8195L12.1745 3.58012C12.0701 3.48821 11.9486 3.41777 11.817 3.37282C11.6854 3.32786 11.5462 3.30928 11.4073 3.31812C11.2685 3.32697 11.1328 3.36307 11.008 3.42437C10.8831 3.48567 10.7716 3.57096 10.6797 3.67538Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1e = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M4.56 2.58L5.747 1.4 12.34 8l-6.6 6.6-1.18-1.18L9.98 8z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1f = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M11.1214 0.147063C10.886 0.0215781 10.6167 -0.0253776 10.3527 0.0130505C10.0887 0.0514786 9.84395 0.173278 9.6541 0.360669C9.46426 0.548059 9.33928 0.791227 9.29742 1.05467C9.25555 1.31812 9.299 1.58805 9.42141 1.82506C10.148 3.24838 10.53 4.8225 10.5366 6.42054C10.5432 8.01857 10.1742 9.59579 9.45941 11.0251C9.43752 11.064 9.40555 11.0964 9.36685 11.1188C9.32814 11.1412 9.28412 11.1527 9.23942 11.1522C9.19472 11.1517 9.15098 11.1391 9.1128 11.1159C9.07461 11.0926 9.04339 11.0595 9.02241 11.0201C8.75843 10.5283 8.56966 9.99978 8.46241 9.45206C8.43643 9.32615 8.3787 9.20897 8.29469 9.11166C8.21068 9.01435 8.10318 8.94013 7.98241 8.89606C7.8617 8.85184 7.73162 8.83955 7.60477 8.8604C7.47791 8.88125 7.3586 8.93453 7.25841 9.01506C5.85882 10.131 4.83979 11.6536 4.34171 13.3729C3.84364 15.0923 3.89105 16.9238 4.47741 18.6151C5.03096 20.2071 6.08486 21.5772 7.48159 22.5206C8.87832 23.464 10.5429 23.93 12.2264 23.8491C16.4554 23.8491 19.4124 21.7041 20.3424 17.9671C21.7214 12.4501 18.3374 3.97106 11.1214 0.147063ZM15.8584 18.0251C15.7381 18.852 15.3098 19.603 14.6593 20.1276C14.0088 20.6522 13.1841 20.9117 12.3504 20.8541C11.55 20.8544 10.7751 20.5728 10.1616 20.0588C9.54811 19.5448 9.13522 18.8311 8.99541 18.0431C8.98075 17.9614 8.98662 17.8774 9.01251 17.7986C9.03839 17.7198 9.08347 17.6487 9.14368 17.5917C9.20389 17.5347 9.27734 17.4935 9.35742 17.4719C9.4375 17.4503 9.52169 17.449 9.60241 17.4681C10.1036 17.4601 10.5949 17.327 11.0316 17.0807C11.4682 16.8345 11.8363 16.4829 12.1024 16.0581C12.4072 15.7354 12.6122 15.3315 12.6926 14.895C12.7729 14.4585 12.7253 14.0081 12.5554 13.5981C12.5053 13.5087 12.4838 13.4061 12.4939 13.3042C12.504 13.2023 12.5452 13.1059 12.6118 13.0281C12.6785 12.9503 12.7674 12.8949 12.8666 12.8693C12.9658 12.8437 13.0704 12.8492 13.1664 12.8851C14.1229 13.3203 14.907 14.0621 15.3945 14.9931C15.8821 15.924 16.0453 16.9909 15.8584 18.0251Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1g = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M0 0H48V48H0V0Z",
        fill: "white"
      }), h("path", {
        d: "M21.5127 5.13081L21.5105 5.12966C21.3024 5.01909 21.064 4.97759 20.8302 5.01152C20.5964 5.04544 20.3801 5.15289 20.2127 5.31756C20.0454 5.48219 19.9356 5.69534 19.8989 5.9257C19.8622 6.15603 19.9003 6.39217 20.0078 6.59977L20.01 6.60398L20.01 6.60399C21.3038 9.13004 21.9841 11.9239 21.9959 14.7604C22.0077 17.5969 21.3505 20.3963 20.0777 22.9329L20.0669 22.9543L20.0552 22.9751C19.9301 23.1972 19.7476 23.3812 19.5272 23.5081C19.3068 23.635 19.0565 23.7004 18.8024 23.6975C18.5484 23.6946 18.2996 23.6236 18.0821 23.4916C17.8652 23.36 17.6873 23.1726 17.5674 22.9484C17.5671 22.9478 17.5667 22.9472 17.5664 22.9466L18.4488 22.476C18.0047 21.6516 17.6872 20.7654 17.5067 19.8471L21.5127 5.13081ZM21.5127 5.13081C27.3698 8.22426 31.6866 13.2102 34.2564 18.5539C36.8336 23.913 37.6106 29.5374 36.5215 33.88L36.5212 33.881C35.7908 36.8063 34.2804 39.0613 32.1605 40.593C30.0339 42.1294 27.2278 42.9849 23.8386 42.9849H23.8146L23.7907 42.986C21.1734 43.1115 18.586 42.3893 16.4152 40.928C14.2447 39.4669 12.6075 37.3454 11.7476 34.8811C10.8294 32.2415 10.7552 29.3832 11.5351 26.6999C12.315 24.0166 13.9109 21.6398 16.1035 19.8974L16.1035 19.8974L16.1065 19.8949C16.1407 19.8676 16.1817 19.8492 16.2256 19.842C16.2696 19.8348 16.3146 19.8391 16.3562 19.8543L16.3575 19.8548C16.4009 19.8705 16.4391 19.897 16.4687 19.9312C16.4977 19.9646 16.5175 20.0044 16.5268 20.0469L21.5127 5.13081Z",
        fill: "#FAC34B",
        stroke: "#19194B",
        "stroke-width": "2"
      }), h("path", {
        d: "M27.9312 37.7456C29.0255 36.866 29.746 35.6069 29.9484 34.2205C30.2629 32.4867 29.9883 30.6979 29.1681 29.1371C28.3479 27.5763 27.0289 26.3326 25.4199 25.6028C25.2585 25.5428 25.0824 25.5335 24.9156 25.5764C24.7487 25.6193 24.5991 25.7123 24.487 25.8427C24.3749 25.9731 24.3056 26.1347 24.2886 26.3056C24.2717 26.4765 24.3078 26.6484 24.3921 26.7982C24.6779 27.4857 24.758 28.2409 24.6228 28.9727C24.4876 29.7045 24.1428 30.3817 23.63 30.9226C23.1824 31.6349 22.5631 32.2243 21.8286 32.6372C21.0941 33.0501 20.2677 33.2733 19.4245 33.2866C19.2887 33.2547 19.1471 33.2569 19.0124 33.2931C18.8777 33.3292 18.7541 33.3983 18.6528 33.4939C18.5515 33.5895 18.4757 33.7087 18.4321 33.8408C18.3886 33.9729 18.3787 34.1138 18.4034 34.2506C18.6386 35.5719 19.3331 36.7684 20.3652 37.6302C21.3972 38.492 22.7008 38.964 24.0472 38.9635C25.4497 39.0601 26.8369 38.6251 27.9312 37.7456Z",
        fill: "#E99B26"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1h = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        d: "m11.611 0.83594c-4.0896 0.0048837-7.7599 2.5361-9.2168 6.3574a1.0236 1.0236 0 0 0 0.95508 1.3887h16.531a1.0236 1.0236 0 0 0 0.95703 -1.3887c-1.4581-3.8243-5.1338-6.3561-9.2266-6.3574zm0 2.0469h2e-3c2.7047 0.00152 5.1051 1.4363 6.5234 3.6523h-13.043c1.417-2.2142 3.8152-3.6484 6.5176-3.6523zm-5.1113 7.1172v7h-2v-7zm6 0v7h-2v-7zm8.5 9v2h-19v-2zm-2.5-9v7h-2v-7z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1i = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 19C11.7033 19 11.4133 18.912 11.1667 18.7472C10.92 18.5824 10.7277 18.3481 10.6142 18.074C10.5007 17.7999 10.471 17.4983 10.5288 17.2074C10.5867 16.9164 10.7296 16.6491 10.9393 16.4393C11.1491 16.2296 11.4164 16.0867 11.7074 16.0288C11.9983 15.9709 12.2999 16.0007 12.574 16.1142C12.8481 16.2277 13.0824 16.42 13.2472 16.6666C13.412 16.9133 13.5 17.2033 13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5607C12.7794 18.842 12.3978 19 12 19ZM13.6 12.92C13.4216 12.9979 13.2698 13.1261 13.1632 13.289C13.0566 13.4519 12.9999 13.6423 13 13.837C13 14.1022 12.8946 14.3566 12.7071 14.5441C12.5196 14.7316 12.2652 14.837 12 14.837C11.7348 14.837 11.4804 14.7316 11.2929 14.5441C11.1054 14.3566 11 14.1022 11 13.837C10.9999 13.2532 11.1702 12.682 11.4899 12.1936C11.8096 11.7051 12.2649 11.3205 12.8 11.087C13.1305 10.9428 13.4159 10.7118 13.6259 10.4187C13.8359 10.1255 13.9627 9.78099 13.993 9.42164C14.0232 9.06228 13.9557 8.70144 13.7976 8.37731C13.6396 8.05317 13.3968 7.77781 13.095 7.58037C12.7932 7.38292 12.4437 7.27075 12.0834 7.25571C11.7231 7.24067 11.3654 7.32334 11.0482 7.49495C10.7311 7.66656 10.4662 7.92074 10.2817 8.23058C10.0971 8.54041 9.99982 8.89438 10 9.255C10 9.52022 9.89465 9.77457 9.70711 9.96211C9.51958 10.1496 9.26522 10.255 9.00001 10.255C8.73479 10.255 8.48044 10.1496 8.2929 9.96211C8.10536 9.77457 8.00001 9.52022 8.00001 9.255C7.99999 8.53384 8.19495 7.82609 8.56424 7.20665C8.93352 6.58721 9.46341 6.07913 10.0978 5.73619C10.7322 5.39324 11.4475 5.22818 12.168 5.25847C12.8886 5.28877 13.5875 5.51329 14.1909 5.90828C14.7942 6.30328 15.2796 6.85404 15.5956 7.50229C15.9116 8.15054 16.0464 8.87216 15.9859 9.59077C15.9253 10.3094 15.6716 10.9983 15.2516 11.5845C14.8316 12.1707 14.261 12.6325 13.6 12.921V12.92Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1j = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1k = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.135 7.10728C11.7767 7.08251 11.4185 7.15671 11.0995 7.32177C10.7805 7.48684 10.5131 7.73641 10.3263 8.04322C10.1396 8.35003 10.0408 8.70226 10.0407 9.06143C10.0406 9.60244 9.60196 10.0409 9.06095 10.0408C8.51993 10.0407 8.08144 9.60207 8.08154 9.06105C8.08168 8.34272 8.27928 7.63825 8.65274 7.02463C9.0262 6.41102 9.56115 5.91187 10.1991 5.58174C10.8371 5.25162 11.5536 5.10322 12.2702 5.15277C12.9868 5.20231 13.676 5.4479 14.2625 5.86268C14.849 6.27747 15.3101 6.84549 15.5956 7.50466C15.8811 8.16384 15.9798 8.8888 15.8811 9.60031C15.7824 10.3118 15.49 10.9825 15.0358 11.5391C14.5817 12.0956 13.9833 12.5166 13.306 12.7561C13.2105 12.7899 13.1278 12.8524 13.0693 12.9352C13.0108 13.0179 12.9794 13.1168 12.9795 13.2181V14.2041C12.9795 14.7451 12.5409 15.1837 11.9999 15.1837C11.4589 15.1837 11.0203 14.7451 11.0203 14.2041L11.0203 13.2191C11.0203 13.219 11.0203 13.2193 11.0203 13.2191C11.0202 12.7127 11.177 12.2181 11.4693 11.8045C11.7618 11.3907 12.1753 11.0778 12.653 10.9089C12.9916 10.7892 13.2908 10.5787 13.5179 10.3004C13.7449 10.0222 13.8911 9.68682 13.9405 9.33106C13.9899 8.9753 13.9405 8.61282 13.7978 8.28323C13.655 7.95364 13.4244 7.66963 13.1312 7.46224C12.838 7.25485 12.4934 7.13206 12.135 7.10728Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.2517 16.3903C11.4732 16.2423 11.7336 16.1633 12 16.1633C12.3572 16.1633 12.6998 16.3052 12.9524 16.5578C13.205 16.8104 13.347 17.153 13.347 17.5102C13.347 17.7766 13.268 18.037 13.12 18.2585C12.9719 18.48 12.7616 18.6527 12.5155 18.7546C12.2693 18.8566 11.9985 18.8832 11.7372 18.8313C11.476 18.7793 11.236 18.651 11.0476 18.4626C10.8592 18.2743 10.7309 18.0343 10.679 17.773C10.627 17.5117 10.6537 17.2409 10.7556 16.9948C10.8576 16.7486 11.0302 16.5383 11.2517 16.3903Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1l = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.414 4.914L17.086 0.586C16.711 0.210901 16.2024 0.000113275 15.672 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V22C2 22.5304 2.21071 23.0391 2.58579 23.4142C2.96086 23.7893 3.46957 24 4 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V6.328C21.9999 5.79761 21.7891 5.28899 21.414 4.914ZM9 7.5C9.39556 7.5 9.78224 7.6173 10.1111 7.83706C10.44 8.05682 10.6964 8.36918 10.8478 8.73463C10.9991 9.10009 11.0387 9.50222 10.9616 9.89018C10.8844 10.2781 10.6939 10.6345 10.4142 10.9142C10.1345 11.1939 9.77814 11.3844 9.39018 11.4616C9.00222 11.5387 8.60009 11.4991 8.23463 11.3478C7.86918 11.1964 7.55682 10.94 7.33706 10.6111C7.1173 10.2822 7 9.89556 7 9.5C7 8.96957 7.21071 8.46086 7.58579 8.08579C7.96086 7.71071 8.46957 7.5 9 7.5ZM18.767 19.371C18.7454 19.4102 18.7137 19.4428 18.6752 19.4655C18.6367 19.4882 18.5927 19.5001 18.548 19.5H6.45C6.4053 19.5001 6.3614 19.4881 6.32287 19.4654C6.28435 19.4428 6.25261 19.4102 6.23096 19.3711C6.20931 19.332 6.19854 19.2878 6.19978 19.2431C6.20102 19.1984 6.21422 19.1549 6.238 19.117L9.013 14.678C9.05794 14.6061 9.12044 14.5468 9.19462 14.5057C9.26879 14.4646 9.3522 14.443 9.437 14.443C9.5218 14.443 9.60521 14.4646 9.67939 14.5057C9.75356 14.5468 9.81605 14.6061 9.861 14.678L10.725 16.06C10.7476 16.0957 10.779 16.1252 10.816 16.1455C10.8531 16.1659 10.8947 16.1766 10.937 16.1766C10.9793 16.1766 11.0209 16.1659 11.058 16.1455C11.095 16.1252 11.1264 16.0957 11.149 16.06L13.576 12.178C13.6209 12.1061 13.6834 12.0468 13.7576 12.0057C13.8318 11.9646 13.9152 11.943 14 11.943C14.0848 11.943 14.1682 11.9646 14.2424 12.0057C14.3166 12.0468 14.3791 12.1061 14.424 12.178L18.76 19.117C18.7839 19.1548 18.7971 19.1983 18.7983 19.243C18.7996 19.2877 18.7887 19.3319 18.767 19.371Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1m = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12.25 5C12.5467 5 12.8367 5.08797 13.0834 5.2528C13.33 5.41762 13.5223 5.65189 13.6358 5.92597C13.7494 6.20006 13.7791 6.50166 13.7212 6.79264C13.6633 7.08361 13.5204 7.35088 13.3107 7.56066C13.1009 7.77044 12.8336 7.9133 12.5426 7.97118C12.2517 8.02906 11.9501 7.99935 11.676 7.88582C11.4019 7.77229 11.1676 7.58003 11.0028 7.33336C10.838 7.08668 10.75 6.79667 10.75 6.5C10.75 6.10218 10.908 5.72064 11.1893 5.43934C11.4706 5.15804 11.8522 5 12.25 5ZM14.5 18.5H10.5C10.2348 18.5 9.98044 18.3946 9.7929 18.2071C9.60536 18.0196 9.50001 17.7652 9.50001 17.5C9.50001 17.2348 9.60536 16.9804 9.7929 16.7929C9.98044 16.6054 10.2348 16.5 10.5 16.5H11.25C11.3163 16.5 11.3799 16.4737 11.4268 16.4268C11.4737 16.3799 11.5 16.3163 11.5 16.25V11.75C11.5 11.6837 11.4737 11.6201 11.4268 11.5732C11.3799 11.5263 11.3163 11.5 11.25 11.5H10.5C10.2348 11.5 9.98044 11.3946 9.7929 11.2071C9.60536 11.0196 9.50001 10.7652 9.50001 10.5C9.50001 10.2348 9.60536 9.98043 9.7929 9.79289C9.98044 9.60536 10.2348 9.5 10.5 9.5H11.5C12.0304 9.5 12.5391 9.71071 12.9142 10.0858C13.2893 10.4609 13.5 10.9696 13.5 11.5V16.25C13.5 16.3163 13.5263 16.3799 13.5732 16.4268C13.6201 16.4737 13.6837 16.5 13.75 16.5H14.5C14.7652 16.5 15.0196 16.6054 15.2071 16.7929C15.3946 16.9804 15.5 17.2348 15.5 17.5C15.5 17.7652 15.3946 18.0196 15.2071 18.2071C15.0196 18.3946 14.7652 18.5 14.5 18.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1n = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.55103 10.5306C9.55103 9.9896 9.9896 9.55103 10.5306 9.55103H11.2653C11.72 9.55103 12.156 9.73164 12.4775 10.0531C12.799 10.3746 12.9796 10.8107 12.9796 11.2653V14.9388C12.9796 15.0687 13.0312 15.1933 13.1231 15.2851C13.2149 15.377 13.3395 15.4286 13.4694 15.4286H14.2041C14.7451 15.4286 15.1837 15.8672 15.1837 16.4082C15.1837 16.9492 14.7451 17.3878 14.2041 17.3878H13.4694C12.8199 17.3878 12.197 17.1297 11.7377 16.6705C11.2784 16.2112 11.0204 15.5883 11.0204 14.9388V11.5102H10.5306C9.9896 11.5102 9.55103 11.0716 9.55103 10.5306Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.8843 6.10456C11.1058 5.95656 11.3662 5.87756 11.6326 5.87756C11.9898 5.87756 12.3324 6.01947 12.585 6.27207C12.8376 6.52467 12.9795 6.86727 12.9795 7.2245C12.9795 7.4909 12.9005 7.75132 12.7525 7.97282C12.6045 8.19432 12.3942 8.36697 12.148 8.46891C11.9019 8.57086 11.6311 8.59753 11.3698 8.54556C11.1085 8.49359 10.8685 8.3653 10.6802 8.17693C10.4918 7.98855 10.3635 7.74855 10.3115 7.48728C10.2596 7.226 10.2862 6.95517 10.3882 6.70905C10.4901 6.46293 10.6628 6.25257 10.8843 6.10456Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1o = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6 9.13043C6 7.40154 7.40154 6 9.13043 6H14.8696C16.5985 6 18 7.40154 18 9.13043V14.8696C18 16.5985 16.5985 18 14.8696 18H9.13043C7.40154 18 6 16.5985 6 14.8696V9.13043ZM15.1304 12C15.1304 13.7289 13.7289 15.1304 12 15.1304C10.2711 15.1304 8.86957 13.7289 8.86957 12C8.86957 10.2711 10.2711 8.86957 12 8.86957C13.7289 8.86957 15.1304 10.2711 15.1304 12ZM15.6522 9.13043C16.0844 9.13043 16.4348 8.78005 16.4348 8.34783C16.4348 7.9156 16.0844 7.56522 15.6522 7.56522C15.22 7.56522 14.8696 7.9156 14.8696 8.34783C14.8696 8.78005 15.22 9.13043 15.6522 9.13043Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1p = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 0.00101046C15.2641 -0.0288967 18.5003 0.60537 21.5116 1.86525C21.9519 2.05514 22.3272 2.36934 22.5916 2.76935C22.8559 3.16936 22.9979 3.63781 23 4.11729V11.3948C22.9624 14.0008 22.13 16.5331 20.6141 18.6532C19.0981 20.7732 16.971 22.3798 14.5172 23.2581L13.4505 23.6569C12.5145 24.0011 11.4865 24.0011 10.5505 23.6569L9.48178 23.2581C7.02832 22.3794 4.90157 20.7727 3.38589 18.6527C1.8702 16.5327 1.0378 14.0006 1 11.3948V4.11729C1.00215 3.63795 1.144 3.16964 1.40817 2.76966C1.67234 2.36968 2.04739 2.05539 2.4874 1.86525C5.49922 0.605772 8.73558 -0.0284763 12 0.00101046ZM17.5873 10.2827C17.5938 10.3026 17.6046 10.3207 17.6191 10.3358C18.0613 10.791 18.3088 11.4006 18.3092 12.0352V13.1323C18.3083 13.4073 18.2245 13.6756 18.0689 13.9022C17.9132 14.1288 17.6928 14.3033 17.4364 14.4028C17.4108 14.4129 17.3887 14.4305 17.3732 14.4532C17.3576 14.476 17.3493 14.503 17.3492 14.5306V15.5986C17.3492 15.9259 17.2192 16.2399 16.9877 16.4713C16.7563 16.7028 16.4423 16.8328 16.115 16.8328C15.7876 16.8328 15.4737 16.7028 15.2422 16.4713C15.0108 16.2399 14.8807 15.9259 14.8807 15.5986V14.6386C14.8807 14.6023 14.8663 14.5674 14.8406 14.5417C14.8148 14.5159 14.78 14.5015 14.7436 14.5015H9.25805C9.22168 14.5015 9.1868 14.5159 9.16108 14.5417C9.13536 14.5674 9.12092 14.6023 9.12092 14.6386V15.5986C9.12092 15.9259 8.99088 16.2399 8.75941 16.4713C8.52795 16.7028 8.21401 16.8328 7.88667 16.8328C7.55933 16.8328 7.24539 16.7028 7.01392 16.4713C6.78246 16.2399 6.65242 15.9259 6.65242 15.5986V14.5284C6.65236 14.5008 6.64402 14.4738 6.62847 14.4511C6.61291 14.4283 6.59087 14.4107 6.5652 14.4006C6.30887 14.3011 6.08848 14.1266 5.93279 13.9C5.7771 13.6734 5.69335 13.4051 5.69245 13.1301V12.033C5.69329 11.3997 5.94014 10.7916 6.38089 10.3369C6.39536 10.3218 6.40624 10.3037 6.4127 10.2838C6.41916 10.264 6.42103 10.2429 6.41819 10.2222C6.41525 10.2016 6.40764 10.182 6.39595 10.1648C6.38425 10.1476 6.36878 10.1333 6.35072 10.1229L5.91187 9.86896C5.72274 9.75984 5.5847 9.58006 5.52812 9.36917C5.47154 9.15828 5.50106 8.93355 5.61017 8.74442C5.71928 8.55529 5.89906 8.41725 6.10995 8.36067C6.32084 8.30409 6.54557 8.3336 6.73471 8.44272L7.31782 8.78008C7.33706 8.79107 7.35867 8.79726 7.38081 8.79811C7.40296 8.79897 7.42498 8.79447 7.44501 8.78499C7.46504 8.77551 7.48249 8.76134 7.49587 8.74368C7.50926 8.72601 7.51818 8.70538 7.52188 8.68353L7.7413 7.37633C7.80415 6.99144 8.00203 6.64152 8.29948 6.38931C8.59693 6.1371 8.97449 5.99908 9.36447 6.00001H14.635C15.0248 5.99904 15.4022 6.1369 15.6997 6.38889C15.9971 6.64088 16.1951 6.99054 16.2582 7.37523L16.4776 8.68243C16.4812 8.70427 16.49 8.7249 16.5034 8.74257C16.5167 8.76025 16.5341 8.77443 16.5541 8.78392C16.5741 8.7934 16.5961 8.79791 16.6182 8.79705C16.6403 8.79619 16.6619 8.78999 16.6811 8.77898L17.2653 8.44162C17.3589 8.38759 17.4623 8.35254 17.5695 8.33846C17.6767 8.32438 17.7856 8.33156 17.89 8.35957C17.9945 8.38759 18.0924 8.4359 18.1781 8.50174C18.2639 8.56758 18.3358 8.64967 18.3898 8.74332C18.4439 8.83697 18.4789 8.94034 18.493 9.04754C18.5071 9.15473 18.4999 9.26365 18.4719 9.36808C18.4439 9.4725 18.3956 9.57038 18.3297 9.65613C18.2639 9.74189 18.1818 9.81383 18.0881 9.86786L17.6493 10.1218C17.6312 10.1322 17.6157 10.1465 17.6041 10.1637C17.5924 10.1809 17.5848 10.2005 17.5818 10.2211C17.579 10.2418 17.5808 10.2629 17.5873 10.2827ZM14.6372 7.09821H9.36447C9.23487 7.0982 9.10944 7.14409 9.01044 7.22773C8.91143 7.31137 8.84524 7.42737 8.8236 7.55516L8.56084 9.13115C8.55757 9.15081 8.55863 9.17095 8.56394 9.19016C8.56924 9.20937 8.57867 9.22719 8.59157 9.24239C8.60447 9.25758 8.62052 9.26978 8.63861 9.27814C8.65671 9.2865 8.6764 9.29081 8.69633 9.29078H15.3053C15.3252 9.29083 15.3449 9.28653 15.363 9.2782C15.3811 9.26986 15.3972 9.25768 15.4101 9.24251C15.4227 9.22744 15.4319 9.20986 15.4372 9.19095C15.4425 9.17204 15.4437 9.15222 15.4408 9.1328L15.178 7.5568C15.1568 7.42871 15.0907 7.31233 14.9917 7.22836C14.8926 7.14439 14.767 7.09827 14.6372 7.09821ZM15.6578 12.9936C15.7932 13.084 15.9522 13.1323 16.115 13.1323C16.3332 13.1323 16.5425 13.0456 16.6968 12.8913C16.8511 12.737 16.9378 12.5277 16.9378 12.3095C16.9378 12.1467 16.8896 11.9876 16.7991 11.8523C16.7087 11.717 16.5802 11.6116 16.4299 11.5493C16.2795 11.487 16.1141 11.4707 15.9545 11.5025C15.7948 11.5342 15.6482 11.6126 15.5331 11.7276C15.4181 11.8427 15.3397 11.9893 15.308 12.1489C15.2762 12.3086 15.2925 12.474 15.3548 12.6244C15.4171 12.7747 15.5225 12.9032 15.6578 12.9936ZM7.20251 11.8523C7.1121 11.9876 7.06384 12.1467 7.06384 12.3095C7.06384 12.5277 7.15053 12.737 7.30484 12.8913C7.45915 13.0456 7.66844 13.1323 7.88667 13.1323C8.04941 13.1323 8.2085 13.084 8.34381 12.9936C8.47912 12.9032 8.58459 12.7747 8.64687 12.6244C8.70914 12.474 8.72544 12.3086 8.69369 12.1489C8.66194 11.9893 8.58357 11.8427 8.4685 11.7276C8.35342 11.6126 8.20681 11.5342 8.04719 11.5025C7.88758 11.4707 7.72214 11.487 7.57178 11.5493C7.42143 11.6116 7.29292 11.717 7.20251 11.8523Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1q = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 0.00101046C15.2641 -0.0288967 18.5003 0.60537 21.5116 1.86525C21.9519 2.05514 22.3272 2.36934 22.5916 2.76935C22.8559 3.16936 22.9979 3.63781 23 4.11729V11.3948C22.9624 14.0008 22.13 16.5331 20.6141 18.6532C19.0981 20.7732 16.971 22.3798 14.5172 23.2581L13.4505 23.6569C12.5145 24.0011 11.4865 24.0011 10.5505 23.6569L9.48178 23.2581C7.02832 22.3794 4.90157 20.7727 3.38589 18.6527C1.8702 16.5327 1.0378 14.0006 1 11.3948V4.11729C1.00215 3.63795 1.144 3.16964 1.40817 2.76966C1.67234 2.36968 2.04739 2.05539 2.4874 1.86525C5.49922 0.605772 8.73558 -0.0284763 12 0.00101046ZM9.50426 5H14.5185C14.9174 5 15.3 5.15848 15.5821 5.44059C15.8642 5.72269 16.0227 6.10531 16.0227 6.50426V15.4957C16.0227 15.8947 15.8642 16.2773 15.5821 16.5594C15.3 16.8415 14.9174 17 14.5185 17H9.50426C9.10531 17 8.72269 16.8415 8.44059 16.5594C8.15848 16.2773 8 15.8947 8 15.4957V6.50426C8 6.10531 8.15848 5.72269 8.44059 5.44059C8.72269 5.15848 9.10531 5 9.50426 5ZM11.7328 16.1634C11.8152 16.2185 11.9122 16.2479 12.0114 16.2479C12.1444 16.2479 12.2719 16.195 12.3659 16.101C12.46 16.007 12.5128 15.8794 12.5128 15.7464C12.5128 15.6473 12.4834 15.5503 12.4283 15.4679C12.3732 15.3854 12.2949 15.3211 12.2033 15.2832C12.1116 15.2452 12.0108 15.2353 11.9135 15.2547C11.8163 15.274 11.7269 15.3218 11.6568 15.3919C11.5867 15.462 11.5389 15.5514 11.5196 15.6486C11.5002 15.7459 11.5102 15.8467 11.5481 15.9383C11.5861 16.03 11.6503 16.1083 11.7328 16.1634ZM14.873 14.346C14.9671 14.252 15.0199 14.1245 15.0199 13.9915V6.75497C15.0199 6.62199 14.9671 6.49445 14.873 6.40041C14.779 6.30638 14.6515 6.25355 14.5185 6.25355H9.50426C9.37128 6.25355 9.24374 6.30638 9.1497 6.40041C9.05567 6.49445 9.00284 6.62199 9.00284 6.75497V13.9915C9.00284 14.1245 9.05567 14.252 9.1497 14.346C9.24374 14.4401 9.37128 14.4929 9.50426 14.4929H14.5185C14.6515 14.4929 14.779 14.4401 14.873 14.346Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1r = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0391 0.00101405C15.3148 -0.0289994 18.5624 0.60752 21.5844 1.87187C22.0263 2.06243 22.4029 2.37775 22.6682 2.77918C22.9336 3.18062 23.076 3.65073 23.0781 4.13191V11.4353C23.0404 14.0505 22.205 16.5919 20.6837 18.7194C19.1624 20.847 17.0277 22.4593 14.5652 23.3407L13.4947 23.7409C12.5554 24.0864 11.5238 24.0864 10.5844 23.7409L9.5119 23.3407C7.04973 22.4589 4.91543 20.8464 3.39436 18.719C1.87329 16.5915 1.03794 14.0503 1 11.4353V4.13191C1.00216 3.65087 1.14451 3.18089 1.40962 2.7795C1.67473 2.3781 2.05111 2.06269 2.49268 1.87187C5.51519 0.607923 8.76305 -0.0285774 12.0391 0.00101405ZM12.8041 16.7393L17.5349 11.8928C18.0547 11.3834 18.3981 10.7263 18.5165 10.0146C18.6348 9.30291 18.522 8.5727 18.194 7.92746C17.9458 7.43978 17.5832 7.017 17.1359 6.69397C16.6886 6.37094 16.1696 6.1569 15.6215 6.06951C15.0735 5.98211 14.5121 6.02386 13.9837 6.19131C13.4553 6.35876 12.975 6.64712 12.5824 7.03261C12.5116 7.10247 12.4274 7.15791 12.3348 7.19574C12.2421 7.23357 12.1427 7.25304 12.0424 7.25304C11.942 7.25304 11.8426 7.23357 11.7499 7.19574C11.6573 7.15791 11.5731 7.10247 11.5023 7.03261C11.1113 6.6435 10.6305 6.35277 10.1006 6.1851C9.57073 6.01742 9.00748 5.97775 8.45866 6.06946C7.82263 6.1709 7.2274 6.44255 6.73839 6.85455C6.24937 7.26655 5.88551 7.80295 5.6868 8.4048C5.48808 9.00665 5.4622 9.65064 5.61201 10.266C5.76181 10.8813 6.0815 11.4442 6.53593 11.8928L11.2719 16.7393C11.3709 16.8408 11.4898 16.9216 11.6215 16.9767C11.7532 17.0319 11.8948 17.0604 12.038 17.0604C12.1812 17.0604 12.3228 17.0319 12.4545 16.9767C12.5862 16.9216 12.7051 16.8408 12.8041 16.7393Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1s = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0391 0.00101405C15.3148 -0.0289994 18.5624 0.60752 21.5844 1.87187C22.0263 2.06243 22.4029 2.37775 22.6683 2.77918C22.9336 3.18062 23.076 3.65073 23.0781 4.13191V11.4353C23.0404 14.0505 22.205 16.5919 20.6837 18.7194C19.1624 20.847 17.0277 22.4593 14.5652 23.3407L13.4947 23.7409C12.5554 24.0864 11.5238 24.0864 10.5844 23.7409L9.5119 23.3407C7.04973 22.4589 4.91543 20.8465 3.39436 18.719C1.87329 16.5915 1.03794 14.0503 1 11.4353V4.13191C1.00216 3.65087 1.14451 3.18089 1.40962 2.7795C1.67473 2.3781 2.05111 2.06269 2.49268 1.87187C5.5152 0.607923 8.76305 -0.0285774 12.0391 0.00101405ZM6.72161 12.0287C6.59222 11.8993 6.51953 11.7238 6.51953 11.5408C6.51953 11.3579 6.59222 11.1824 6.72161 11.053C6.851 10.9236 7.02649 10.8509 7.20947 10.8509H11.2341C11.2646 10.8509 11.2939 10.8388 11.3154 10.8172C11.337 10.7957 11.3491 10.7664 11.3491 10.7359V6.71125C11.3491 6.52827 11.4218 6.35278 11.5512 6.22339C11.6806 6.094 11.8561 6.02131 12.0391 6.02131C12.222 6.02131 12.3975 6.094 12.5269 6.22339C12.6563 6.35278 12.729 6.52827 12.729 6.71125V10.7359C12.729 10.7664 12.7411 10.7957 12.7627 10.8172C12.7843 10.8388 12.8135 10.8509 12.844 10.8509H16.8687C17.0516 10.8509 17.2271 10.9236 17.3565 11.053C17.4859 11.1824 17.5586 11.3579 17.5586 11.5408C17.5586 11.7238 17.4859 11.8993 17.3565 12.0287C17.2271 12.1581 17.0516 12.2308 16.8687 12.2308H12.844C12.8135 12.2308 12.7843 12.2429 12.7627 12.2645C12.7411 12.286 12.729 12.3153 12.729 12.3458V16.3704C12.729 16.5534 12.6563 16.7289 12.5269 16.8583C12.3975 16.9877 12.222 17.0604 12.0391 17.0604C11.8561 17.0604 11.6806 16.9877 11.5512 16.8583C11.4218 16.7289 11.3491 16.5534 11.3491 16.3704V12.3458C11.3491 12.3153 11.337 12.286 11.3154 12.2645C11.2939 12.2429 11.2646 12.2308 11.2341 12.2308H7.20947C7.02649 12.2308 6.851 12.1581 6.72161 12.0287Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1t = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0391 0.00101405C15.3148 -0.0289994 18.5624 0.60752 21.5844 1.87187C22.0263 2.06243 22.4029 2.37775 22.6682 2.77918C22.9336 3.18062 23.076 3.65073 23.0781 4.13191V11.4353C23.0404 14.0505 22.205 16.5919 20.6837 18.7194C19.1624 20.847 17.0277 22.4593 14.5652 23.3407L13.4947 23.7409C12.5554 24.0864 11.5238 24.0864 10.5844 23.7409L9.5119 23.3407C7.04973 22.4589 4.91543 20.8464 3.39436 18.719C1.87329 16.5915 1.03794 14.0503 1 11.4353V4.13191C1.00216 3.65087 1.14451 3.18089 1.40962 2.7795C1.67473 2.3781 2.05111 2.06269 2.49268 1.87187C5.51519 0.607923 8.76305 -0.0285774 12.0391 0.00101405ZM15.9695 11.5027L19.0889 10.1368C19.4804 9.92535 19.7833 9.58195 19.9431 9.16833C20.1028 8.7547 20.1089 8.29797 19.9603 7.88026C19.7797 7.47899 19.4498 7.16284 19.0399 6.99811C18.63 6.83339 18.1719 6.83287 17.7616 6.99667L14.5154 8.28553L11.1294 6.17713C10.98 6.08338 10.8086 6.03 10.6321 6.02228C10.4556 6.01456 10.2802 6.05276 10.1231 6.1331L9.23557 6.5904C9.07796 6.67101 8.94423 6.79113 8.84761 6.93889C8.75099 7.08665 8.69482 7.25693 8.68465 7.43289C8.67449 7.60885 8.71068 7.7844 8.78966 7.94219C8.86863 8.09998 8.98765 8.23454 9.13495 8.33256L11.1092 9.63343L8.46277 10.6841L6.38383 9.75851C6.2369 9.69336 6.0766 9.66357 5.91592 9.67157C5.75525 9.67957 5.59873 9.72512 5.45908 9.80454L4.52125 10.3459C4.36995 10.4324 4.24356 10.5562 4.15421 10.7053C4.06486 10.8544 4.01555 11.0238 4.011 11.1973C4.00645 11.3708 4.04683 11.5426 4.12825 11.6961C4.20967 11.8497 4.32941 11.9798 4.47597 12.074L7.86304 14.2485C7.99882 14.3361 8.15372 14.3901 8.31479 14.4059C8.47585 14.4218 8.63839 14.399 8.78879 14.3396L11.7754 13.1678L10.8516 15.5514C10.7814 15.715 10.7582 15.8948 10.7844 16.0708C10.8107 16.2467 10.8854 16.4121 11.0003 16.5484C11.1152 16.6848 11.2659 16.7868 11.4355 16.8433C11.6052 16.8997 11.7872 16.9084 11.9615 16.8682C12.3701 16.7281 13.0805 16.3949 13.0805 16.3949C13.2593 16.3026 13.4064 16.1594 13.5031 15.9836L15.9695 11.5027Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1u = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        d: "M0 0h36v36H0z"
      }), h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M11.759 8.952c.212-.48 1.096-.952 1.93-.952h16.414C31.673 8.014 33 9.286 33 10.857v14.286c0 1.571-1.326 2.843-2.897 2.857H13.69c-.835 0-1.72-.471-1.931-.952L5 18.476l6.759-9.524zM26 14l-3 3-3-3-1 1 3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3-1-1z"
      }))));
    }
  }]);

  return Icon;
}(m);

var Icon$1v = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M23.1689 17.4904L20.7169 15.0374C20.4558 14.7758 20.1457 14.5683 19.8043 14.4267C19.463 14.2851 19.097 14.2122 18.7274 14.2122C18.3579 14.2122 17.9919 14.2851 17.6505 14.4267C17.3091 14.5683 16.999 14.7758 16.7379 15.0374L16.2379 15.5374C13.7737 13.4726 11.4974 11.1934 9.43593 8.72639L9.93593 8.22639C10.4624 7.69833 10.7581 6.98307 10.7581 6.23739C10.7581 5.4917 10.4624 4.77644 9.93593 4.24839L7.47893 1.79839C6.94254 1.28595 6.22926 1 5.48743 1C4.74561 1 4.03233 1.28595 3.49593 1.79839L2.15593 3.14439C1.51202 3.79294 1.11086 4.64329 1.01981 5.55267C0.928764 6.46204 1.15338 7.37505 1.65593 8.13839C5.65103 14.1582 10.8099 19.3181 16.8289 23.3144C17.5949 23.8123 18.5078 24.0342 19.4168 23.9433C20.3259 23.8524 21.1768 23.4542 21.8289 22.8144L23.1739 21.4684C23.4354 21.2075 23.6429 20.8975 23.7845 20.5563C23.926 20.2151 23.9989 19.8493 23.9989 19.4799C23.9989 19.1105 23.926 18.7447 23.7845 18.4035C23.6429 18.0623 23.4354 17.7523 23.1739 17.4914L23.1689 17.4904Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1w = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M0 0H40V40H0V0Z",
        fill: "white"
      }), h("path", {
        d: "M29 25C29 27.7614 24.9706 30 20 30C15.0294 30 11 27.7614 11 25C11 22.2386 15.0294 20 20 20C24.9706 20 29 22.2386 29 25Z",
        fill: "#FAC34B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M20.0299 32C20.9504 32 21.6966 32.7462 21.6966 33.6667V37.6667C21.6966 38.5871 20.9504 39.3333 20.0299 39.3333C19.1095 39.3333 18.3633 38.5871 18.3633 37.6667V33.6667C18.3633 32.7462 19.1095 32 20.0299 32Z",
        fill: "#FAC34B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M11.7751 30.176C12.5984 30.5876 12.9321 31.5887 12.5205 32.412L10.5205 36.412C10.1088 37.2353 9.10773 37.569 8.28443 37.1574C7.46113 36.7457 7.12743 35.7446 7.53907 34.9213L9.53907 30.9213C9.95072 30.098 10.9518 29.7643 11.7751 30.176Z",
        fill: "#FAC34B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M28.2844 30.176C29.1077 29.7643 30.1088 30.098 30.5205 30.9213L32.5205 34.9213C32.9321 35.7446 32.5984 36.7457 31.7751 37.1574C30.9518 37.569 29.9507 37.2353 29.5391 36.412L27.5391 32.412C27.1274 31.5887 27.4611 30.5876 28.2844 30.176Z",
        fill: "#FAC34B"
      }), h("rect", {
        x: "19",
        width: "2",
        height: "7",
        fill: "#19194B"
      }), h("path", {
        d: "M18.4144 11H21.5856C28.9942 11 35 17.0058 35 24.4144C35 24.7378 34.7378 25 34.4144 25H5.58559C5.26218 25 5 24.7378 5 24.4144C5 17.0058 11.0058 11 18.4144 11Z",
        fill: "#66C6EC",
        stroke: "#19194B",
        "stroke-width": "2"
      }), h("path", {
        d: "M16 7H24C24.5523 7 25 7.44772 25 8V11H15V8C15 7.44772 15.4477 7 16 7Z",
        fill: "#00A0DF",
        stroke: "#19194B",
        "stroke-width": "2"
      }), h("rect", {
        x: "2",
        width: "36",
        height: "2",
        rx: "1",
        fill: "#EBECF0"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1x = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.0002 17.9888H15.514V14.0978C15.514 13.1701 15.4975 11.9768 14.2217 11.9768C12.928 11.9768 12.7307 12.9878 12.7307 14.0318V17.9888H10.2467V9.98781H12.6302V11.0821H12.6647C12.9962 10.4528 13.8077 9.78906 15.0175 9.78906C17.5352 9.78906 18.0002 11.4458 18.0002 13.6006V17.9888ZM7.443 8.89508C6.64425 8.89508 6 8.24858 6 7.45283C6 6.65708 6.64425 6.01058 7.443 6.01058C8.238 6.01058 8.88375 6.65708 8.88375 7.45283C8.88375 8.24858 8.238 8.89508 7.443 8.89508ZM8.68652 17.9888H6.19727V9.98779H8.68652V17.9888ZM12 0C5.37225 0 0 5.37225 0 12C0 18.627 5.37225 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1y = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5 4.5C5 5.88071 3.88071 7 2.5 7C1.11929 7 0 5.88071 0 4.5C0 3.11929 1.11929 2 2.5 2C3.88071 2 5 3.11929 5 4.5ZM23 5.502H8.5C8.23478 5.502 7.98043 5.39664 7.79289 5.20911C7.60536 5.02157 7.5 4.76722 7.5 4.502C7.5 4.23678 7.60536 3.98243 7.79289 3.79489C7.98043 3.60736 8.23478 3.502 8.5 3.502H23C23.2652 3.502 23.5196 3.60736 23.7071 3.79489C23.8946 3.98243 24 4.23678 24 4.502C24 4.76722 23.8946 5.02157 23.7071 5.20911C23.5196 5.39664 23.2652 5.502 23 5.502ZM2.5 15C3.88071 15 5 13.8807 5 12.5C5 11.1193 3.88071 10 2.5 10C1.11929 10 0 11.1193 0 12.5C0 13.8807 1.11929 15 2.5 15ZM8.5 11.502H23C23.2652 11.502 23.5196 11.6074 23.7071 11.7949C23.8946 11.9824 24 12.2368 24 12.502C24 12.7672 23.8946 13.0216 23.7071 13.2091C23.5196 13.3966 23.2652 13.502 23 13.502H8.5C8.23478 13.502 7.98043 13.3966 7.79289 13.2091C7.60536 13.0216 7.5 12.7672 7.5 12.502C7.5 12.2368 7.60536 11.9824 7.79289 11.7949C7.98043 11.6074 8.23478 11.502 8.5 11.502ZM2.5 23C3.88071 23 5 21.8807 5 20.5C5 19.1193 3.88071 18 2.5 18C1.11929 18 0 19.1193 0 20.5C0 21.8807 1.11929 23 2.5 23ZM8.5 19.502H23C23.2652 19.502 23.5196 19.6074 23.7071 19.7949C23.8946 19.9824 24 20.2368 24 20.502C24 20.7672 23.8946 21.0216 23.7071 21.2091C23.5196 21.3966 23.2652 21.502 23 21.502H8.5C8.23478 21.502 7.98043 21.3966 7.79289 21.2091C7.60536 21.0216 7.5 20.7672 7.5 20.502C7.5 20.2368 7.60536 19.9824 7.79289 19.7949C7.98043 19.6074 8.23478 19.502 8.5 19.502Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1z = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.12208 19.4475C9.39363 19.7063 9.73251 19.8836 10.1 19.959C10.2122 19.9826 10.3129 20.0441 10.3852 20.1331C10.4575 20.2222 10.4969 20.3333 10.497 20.448V20.458C9.49358 22.1234 8.68756 23.3598 8.4672 23.6978C8.44357 23.7341 8.42668 23.76 8.417 23.775C8.37142 23.8439 8.30947 23.9004 8.23671 23.9395C8.16394 23.9786 8.08261 23.9991 8 23.9991C7.91739 23.9991 7.83606 23.9786 7.76329 23.9395C7.69053 23.9004 7.62858 23.8439 7.583 23.775C7.273 23.307 0 12.243 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C15.9222 9.14372 15.6532 10.2663 15.204 11.321C15.1734 11.3986 15.1239 11.4674 15.06 11.521L9.209 16.474C8.9228 16.7165 8.71058 17.0347 8.59658 17.3921C8.48259 17.7495 8.47141 18.1318 8.56434 18.4952C8.65726 18.8587 8.85054 19.1887 9.12208 19.4475ZM6.61107 10.0787C7.0222 10.3534 7.50555 10.5 8 10.5C8.66304 10.5 9.29893 10.2366 9.76777 9.76777C10.2366 9.29893 10.5 8.66304 10.5 8C10.5 7.50555 10.3534 7.0222 10.0787 6.61107C9.80397 6.19995 9.41352 5.87952 8.95671 5.6903C8.49989 5.50108 7.99723 5.45157 7.51227 5.54804C7.02732 5.6445 6.58186 5.8826 6.23223 6.23223C5.8826 6.58186 5.6445 7.02732 5.54804 7.51227C5.45157 7.99723 5.50108 8.49989 5.6903 8.95671C5.87952 9.41352 6.19995 9.80397 6.61107 10.0787ZM17.3224 12.118L23.8224 17.618C23.9007 17.6841 23.9568 17.7726 23.9831 17.8716C24.0094 17.9706 24.0046 18.0753 23.9695 18.1715C23.9344 18.2677 23.8706 18.3508 23.7867 18.4096C23.7028 18.4683 23.6029 18.4999 23.5004 18.5H22.5004C22.3678 18.5 22.2407 18.5527 22.1469 18.6465C22.0531 18.7402 22.0004 18.8674 22.0004 19V23.5C22.0004 23.6326 21.9478 23.7598 21.854 23.8536C21.7602 23.9473 21.633 24 21.5004 24H19.0004C18.8678 24 18.7407 23.9473 18.6469 23.8536C18.5531 23.7598 18.5004 23.6326 18.5004 23.5V21.25C18.5004 20.8522 18.3424 20.4707 18.0611 20.1894C17.7798 19.9081 17.3983 19.75 17.0004 19.75C16.6026 19.75 16.2211 19.9081 15.9398 20.1894C15.6585 20.4707 15.5004 20.8522 15.5004 21.25V23.5C15.5004 23.6326 15.4478 23.7598 15.354 23.8536C15.2602 23.9473 15.133 24 15.0004 24H12.4984C12.3658 24 12.2387 23.9473 12.1449 23.8536C12.0511 23.7598 11.9984 23.6326 11.9984 23.5V19C11.9984 18.8674 11.9458 18.7402 11.852 18.6465C11.7582 18.5527 11.631 18.5 11.4984 18.5H10.4984C10.3959 18.5001 10.2959 18.4687 10.2118 18.41C10.1278 18.3513 10.0638 18.2682 10.0285 18.172C9.99329 18.0757 9.98848 17.9709 10.0148 17.8719C10.041 17.7728 10.0971 17.6842 10.1754 17.618L16.6754 12.118C16.7658 12.0414 16.8804 11.9993 16.9989 11.9993C17.1174 11.9993 17.2321 12.0414 17.3224 12.118Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1A = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.4799 21.4791C12.3328 21.5597 12.1678 21.6019 12 21.602C11.832 21.6028 11.6665 21.5609 11.519 21.4802C11.3716 21.3996 11.247 21.2829 11.157 21.141C9.19801 18.079 4.64401 10.605 4.64401 7.355C4.64401 5.40433 5.41891 3.53356 6.79824 2.15423C8.17757 0.7749 10.0483 0 11.999 0C13.9497 0 15.8205 0.7749 17.1998 2.15423C18.5791 3.53356 19.354 5.40433 19.354 7.355C19.354 10.605 14.8 18.078 12.842 21.141C12.7516 21.2823 12.6271 21.3986 12.4799 21.4791ZM9.08987 5.0575C8.70528 5.63308 8.50001 6.30977 8.50001 7.002C8.50001 7.93026 8.86876 8.8205 9.52514 9.47687C10.1815 10.1333 11.0718 10.502 12 10.502C12.6922 10.502 13.3689 10.2967 13.9445 9.91214C14.5201 9.52756 14.9687 8.98093 15.2336 8.34139C15.4985 7.70185 15.5678 6.99812 15.4328 6.31918C15.2977 5.64025 14.9644 5.01661 14.4749 4.52713C13.9854 4.03764 13.3618 3.7043 12.6828 3.56925C12.0039 3.4342 11.3002 3.50352 10.6606 3.76842C10.0211 4.03333 9.47445 4.48193 9.08987 5.0575ZM15.9968 18.5195C16.1994 18.3483 16.4617 18.2647 16.726 18.287C24 18.902 24 20.402 24 21.046C24 23.714 15.683 24.002 12 24.002C8.317 24.002 0 23.714 0 21.046C0 20.402 0 18.902 7.233 18.291C7.49301 18.276 7.74862 18.3631 7.94544 18.5336C8.14227 18.7042 8.26478 18.9448 8.28693 19.2043C8.30907 19.4638 8.2291 19.7217 8.06403 19.9232C7.89895 20.1246 7.66179 20.2537 7.403 20.283C6.14786 20.3766 4.89999 20.5503 3.667 20.803C3.61152 20.8154 3.56191 20.8463 3.52636 20.8907C3.49081 20.935 3.47144 20.9902 3.47144 21.047C3.47144 21.1038 3.49081 21.159 3.52636 21.2033C3.56191 21.2477 3.61152 21.2786 3.667 21.291C6.4122 21.8185 9.20512 22.0568 12 22.002C14.7952 22.0569 17.5885 21.8186 20.334 21.291C20.3895 21.2786 20.4391 21.2477 20.4746 21.2033C20.5102 21.159 20.5296 21.1038 20.5296 21.047C20.5296 20.9902 20.5102 20.935 20.4746 20.8907C20.4391 20.8463 20.3895 20.8154 20.334 20.803C19.0878 20.5481 17.8266 20.3734 16.558 20.28C16.2937 20.2577 16.0491 20.1314 15.878 19.9287C15.7068 19.7261 15.6232 19.4638 15.6455 19.1995C15.6678 18.9352 15.7941 18.6906 15.9968 18.5195Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1B = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.377 11H23C23.2652 11 23.5196 11.1054 23.7071 11.2929C23.8946 11.4804 24 11.7348 24 12C24 12.2652 23.8946 12.5196 23.7071 12.7071C23.5196 12.8946 23.2652 13 23 13H21.377C21.2582 13.0002 21.1434 13.0426 21.053 13.1198C20.9627 13.1969 20.9028 13.3037 20.884 13.421C20.5818 15.2913 19.6981 17.0188 18.3585 18.3585C17.0188 19.6981 15.2913 20.5818 13.421 20.884C13.3037 20.9028 13.1969 20.9627 13.1198 21.053C13.0426 21.1434 13.0002 21.2582 13 21.377V23C13 23.2652 12.8946 23.5196 12.7071 23.7071C12.5196 23.8946 12.2652 24 12 24C11.7348 24 11.4804 23.8946 11.2929 23.7071C11.1054 23.5196 11 23.2652 11 23V21.377C10.9998 21.2582 10.9574 21.1434 10.8802 21.053C10.8031 20.9627 10.6963 20.9028 10.579 20.884C8.70873 20.5818 6.98117 19.6981 5.64153 18.3585C4.30189 17.0188 3.41824 15.2913 3.116 13.421C3.09723 13.3037 3.03731 13.1969 2.94698 13.1198C2.85664 13.0426 2.74179 13.0002 2.623 13H1C0.734784 13 0.48043 12.8946 0.292893 12.7071C0.105357 12.5196 0 12.2652 0 12C0 11.7348 0.105357 11.4804 0.292893 11.2929C0.48043 11.1054 0.734784 11 1 11H2.623C2.74179 10.9998 2.85664 10.9574 2.94698 10.8802C3.03731 10.8031 3.09723 10.6963 3.116 10.579C3.41824 8.70873 4.30189 6.98117 5.64153 5.64153C6.98117 4.30189 8.70873 3.41824 10.579 3.116C10.6963 3.09723 10.8031 3.03731 10.8802 2.94698C10.9574 2.85664 10.9998 2.74179 11 2.623V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V2.623C13.0002 2.74179 13.0426 2.85664 13.1198 2.94698C13.1969 3.03731 13.3037 3.09723 13.421 3.116C15.2913 3.41824 17.0188 4.30189 18.3585 5.64153C19.6981 6.98117 20.5818 8.70873 20.884 10.579C20.9028 10.6963 20.9627 10.8031 21.053 10.8802C21.1434 10.9574 21.2582 10.9998 21.377 11ZM8.11101 17.8203C9.26215 18.5895 10.6155 19 12 19C13.8559 18.9979 15.6351 18.2597 16.9474 16.9474C18.2597 15.6351 18.9979 13.8559 19 12C19 10.6155 18.5895 9.26215 17.8203 8.11101C17.0511 6.95986 15.9579 6.06266 14.6788 5.53284C13.3997 5.00303 11.9922 4.86441 10.6344 5.1345C9.2765 5.4046 8.02922 6.07128 7.05025 7.05025C6.07128 8.02922 5.4046 9.2765 5.1345 10.6344C4.86441 11.9922 5.00303 13.3997 5.53284 14.6788C6.06266 15.9579 6.95986 17.0511 8.11101 17.8203ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1C = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20 9.5H19.25V6.75C19.25 4.95979 18.5388 3.2429 17.273 1.97703C16.0071 0.711159 14.2902 0 12.5 0C10.7098 0 8.9929 0.711159 7.72703 1.97703C6.46116 3.2429 5.75 4.95979 5.75 6.75V9.5H5C4.46957 9.5 3.96086 9.71071 3.58579 10.0858C3.21071 10.4609 3 10.9696 3 11.5V22C3 22.5304 3.21071 23.0391 3.58579 23.4142C3.96086 23.7893 4.46957 24 5 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V11.5C22 10.9696 21.7893 10.4609 21.4142 10.0858C21.0391 9.71071 20.5304 9.5 20 9.5ZM12.5 18.5C12.1044 18.5 11.7178 18.3827 11.3889 18.1629C11.06 17.9432 10.8036 17.6308 10.6522 17.2654C10.5009 16.8999 10.4613 16.4978 10.5384 16.1098C10.6156 15.7219 10.8061 15.3655 11.0858 15.0858C11.3655 14.8061 11.7219 14.6156 12.1098 14.5384C12.4978 14.4613 12.8999 14.5009 13.2654 14.6522C13.6308 14.8036 13.9432 15.06 14.1629 15.3889C14.3827 15.7178 14.5 16.1044 14.5 16.5C14.5 17.0304 14.2893 17.5391 13.9142 17.9142C13.5391 18.2893 13.0304 18.5 12.5 18.5ZM16.75 9C16.75 9.13261 16.6973 9.25979 16.6036 9.35355C16.5098 9.44732 16.3826 9.5 16.25 9.5H8.75C8.61739 9.5 8.49021 9.44732 8.39645 9.35355C8.30268 9.25979 8.25 9.13261 8.25 9V6.75C8.25 5.62283 8.69777 4.54183 9.4948 3.7448C10.2918 2.94777 11.3728 2.5 12.5 2.5C13.6272 2.5 14.7082 2.94777 15.5052 3.7448C16.3022 4.54183 16.75 5.62283 16.75 6.75V9Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$1 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        width: "124",
        height: "40",
        viewBox: "0 0 124 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("g", {
        "clip-path": "url(#clip0)"
      }, h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M65.4072 9.51897C62.5693 9.51897 59.7371 10.7947 57.4302 12.7893V12.0356C57.4302 10.8773 56.4913 9.93782 55.3333 9.93782H54.2845C53.1264 9.93782 52.1876 10.8773 52.1876 12.0356V37.366C52.1876 38.5247 53.1264 39.4638 54.2845 39.4638H55.3333C56.4913 39.4638 57.4302 38.5247 57.4302 37.366V17.6517C59.6018 15.7236 62.4284 14.5823 64.9767 14.5823C68.8378 14.5823 72.2222 16.8296 72.2327 22.0292V37.366C72.2327 38.5247 73.1716 39.4638 74.3296 39.4638H75.3776C76.536 39.4638 77.4753 38.5244 77.4749 37.3651L77.4697 22.0569C77.4697 14.2465 72.7372 9.51897 65.4072 9.51897ZM123.265 33.6189C123.265 32.6812 122.65 31.8877 121.801 31.619C122.211 30.8292 122.086 29.8326 121.423 29.1693C120.759 28.5061 119.763 28.3803 118.973 28.7909C118.705 27.9415 117.912 27.326 116.974 27.326C116.036 27.326 115.243 27.9415 114.975 28.7909C114.185 28.3803 113.188 28.5061 112.525 29.1693C111.862 29.8326 111.737 30.8292 112.146 31.619C111.298 31.8877 110.682 32.6812 110.682 33.6189C110.682 34.5567 111.298 35.3505 112.146 35.6188C111.737 36.4091 111.862 37.4056 112.525 38.069C113.188 38.7322 114.185 38.8579 114.975 38.4474C115.243 39.2964 116.036 39.9119 116.974 39.9119C117.912 39.9119 118.705 39.2964 118.973 38.4474C119.763 38.8579 120.759 38.7322 121.423 38.069C122.086 37.4056 122.211 36.4091 121.801 35.6188C122.65 35.3505 123.265 34.5567 123.265 33.6189ZM100.844 31.03C98.1988 33.7446 95.1953 35.1813 91.7678 35.1813C88.4855 35.1813 86.0968 33.374 86.0968 30.5746C86.0968 26.7854 90.2362 25.6558 93.2723 25.6558C95.7754 25.6558 98.3682 25.7889 100.844 26.1464V31.03ZM93.4207 9.51897C90.0692 9.51897 87.0435 10.5954 84.5109 12.2957C83.5168 12.9634 83.292 14.3326 84.0095 15.2912L84.5309 15.9867C85.1876 16.8636 86.4047 17.0807 87.3326 16.4982C89.1226 15.3761 91.1868 14.6841 93.4207 14.6841C97.764 14.6841 100.844 16.7505 100.844 21.2014V21.7943C98.3915 21.3249 95.9176 21.0335 93.4207 21.0335C86.4499 21.0335 81.2395 24.4288 81.2395 30.4877C81.2395 35.8559 85.5045 39.9119 91.4965 39.9119C94.9978 39.9119 98.1407 38.6535 100.844 36.2134V37.366C100.844 38.5247 101.782 39.4638 102.941 39.4638H103.99C105.148 39.4638 106.087 38.5247 106.087 37.366V21.1505C106.087 14.0769 101.074 9.51897 93.4207 9.51897ZM17.75 34.4818H12.5452V2.09778C12.5452 0.939066 11.6063 0 10.4478 0H4.6808C3.52234 0 2.58348 0.939066 2.58348 2.09778V2.88418C2.58348 4.0429 3.52234 4.98197 4.6808 4.98197H7.30211V34.4818H2.09688C0.938856 34.4818 0 35.4209 0 36.5792V37.366C0 38.5247 0.938856 39.4638 2.09688 39.4638H17.75C18.9084 39.4638 19.8473 38.5247 19.8473 37.366V36.5792C19.8473 35.4209 18.9084 34.4818 17.75 34.4818ZM41.7505 31.03C39.1044 33.7446 36.1018 35.1813 32.6742 35.1813C29.392 35.1813 27.0028 33.374 27.0028 30.5746C27.0028 26.7854 31.1426 25.6558 34.1789 25.6558C36.6814 25.6558 39.2745 25.7889 41.7505 26.1464V31.03ZM34.3271 9.51897C30.9752 9.51897 27.9499 10.5954 25.417 12.2957C24.4229 12.9634 24.1981 14.3326 24.916 15.2912L25.4369 15.9867C26.094 16.8636 27.3112 17.0807 28.2392 16.4982C30.0286 15.3761 32.0928 14.6841 34.3271 14.6841C38.6701 14.6841 41.7505 16.7505 41.7505 21.2014V21.7943C39.298 21.3249 36.8237 21.0335 34.3271 21.0335C27.356 21.0335 22.1459 24.4288 22.1459 30.4877C22.1459 35.8559 26.4105 39.9119 32.4029 39.9119C35.9039 39.9119 39.0475 38.6535 41.7505 36.2134V37.366C41.7505 38.5247 42.689 39.4638 43.8475 39.4638H44.8959C46.0544 39.4638 46.9932 38.5247 46.9932 37.366V21.1505C46.9932 14.0769 41.9793 9.51897 34.3271 9.51897Z",
        fill: "#19194B"
      })), h("defs", null, h("clipPath", {
        id: "clip0"
      }, h("rect", {
        width: "123.265",
        height: "40",
        fill: "white"
      })))));
    }
  }]);

  return Image;
}(m);

var Icon$1D = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12.0197 23.9999C17.9097 24.023 22.9635 19.8276 23.9932 14.0586C24.0385 13.786 23.8522 13.5274 23.5781 13.4833C23.5489 13.4783 23.5187 13.4763 23.4894 13.4763L15.1068 13.4763C14.8287 13.4763 14.603 13.7008 14.603 13.9775L14.603 17.5855C14.603 18.1388 14.1527 18.5878 13.5955 18.5878C13.3668 18.5878 13.1441 18.5106 12.9658 18.3683L5.91309 12.7557C5.47884 12.4099 5.40831 11.7795 5.75591 11.3466C5.80226 11.2884 5.85566 11.2363 5.91309 11.1902L12.9658 5.57764C13.1441 5.43532 13.3668 5.35815 13.5955 5.35815C14.1496 5.36316 14.598 5.80916 14.603 6.36039L14.603 9.96847C14.603 10.2451 14.8287 10.4696 15.1068 10.4696L23.4834 10.4696C23.7645 10.4696 23.9932 10.2421 23.9932 9.96246C23.9932 9.9364 23.9912 9.91135 23.9872 9.88529C22.7973 3.34965 16.5052 -0.989072 9.93515 0.194579C4.01994 1.26097 -0.208662 6.48667 0.00795656 12.4631C0.327342 18.8574 5.58362 23.9067 12.0197 23.9999Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1E = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.9981 14.9214C11.6666 14.9214 11.3487 14.79 11.1141 14.556L1.43005 4.87C1.36429 4.80448 1.31807 4.72195 1.29656 4.63164C1.27506 4.54134 1.27911 4.44683 1.30828 4.3587C1.33745 4.27057 1.39058 4.1923 1.46171 4.13266C1.53285 4.07301 1.61919 4.03435 1.71105 4.021C1.80674 4.0069 1.90333 3.99988 2.00005 4H22.0001C22.0961 3.99998 22.192 4.007 22.2871 4.021C22.3789 4.03435 22.4653 4.07301 22.5364 4.13266C22.6075 4.1923 22.6607 4.27057 22.6898 4.3587C22.719 4.44683 22.723 4.54134 22.7015 4.63164C22.68 4.72195 22.6338 4.80448 22.5681 4.87L12.8821 14.556C12.6474 14.79 12.3295 14.9214 11.9981 14.9214ZM23.782 5.92477C23.8177 5.91782 23.8546 5.92169 23.888 5.93588C23.9212 5.94959 23.9497 5.97289 23.9696 6.00281C23.9895 6.03273 24.0001 6.06792 24 6.10388V18.1039C24 18.6343 23.7893 19.143 23.4142 19.5181C23.0391 19.8932 22.5304 20.1039 22 20.1039H2C1.46957 20.1039 0.960859 19.8932 0.585786 19.5181C0.210714 19.143 0 18.6343 0 18.1039V6.10388C0.000392021 6.06829 0.0112108 6.0336 0.0311174 6.00409C0.0510241 5.97459 0.0791449 5.95157 0.112 5.93788C0.145373 5.92341 0.182347 5.91939 0.21805 5.92636C0.253752 5.93332 0.286508 5.95093 0.312 5.97688L6.512 12.1769C6.55878 12.2239 6.58503 12.2875 6.58503 12.3539C6.58503 12.4202 6.55878 12.4839 6.512 12.5309L1.469 17.5739C1.33231 17.7153 1.25663 17.9047 1.25824 18.1013C1.25986 18.298 1.33865 18.4861 1.47764 18.6253C1.61663 18.7644 1.8047 18.8433 2.00135 18.8451C2.198 18.8469 2.38748 18.7714 2.529 18.6349L7.572 13.5919C7.61903 13.5451 7.68267 13.5188 7.749 13.5188C7.81533 13.5188 7.87897 13.5451 7.926 13.5919L10.057 15.7189C10.5727 16.2343 11.2719 16.5238 12.001 16.5238C12.7301 16.5238 13.4293 16.2343 13.945 15.7189L16.074 13.5899C16.0972 13.5666 16.1248 13.5481 16.1552 13.5355C16.1856 13.5229 16.2181 13.5164 16.251 13.5164C16.2839 13.5164 16.3164 13.5229 16.3468 13.5355C16.3772 13.5481 16.4048 13.5666 16.428 13.5899L21.471 18.6329C21.5402 18.7045 21.623 18.7616 21.7145 18.8008C21.806 18.8401 21.9045 18.8607 22.0041 18.8616C22.1036 18.8624 22.2024 18.8434 22.2945 18.8056C22.3867 18.7679 22.4704 18.7121 22.5408 18.6417C22.6112 18.5712 22.6668 18.4875 22.7045 18.3953C22.7422 18.3031 22.7611 18.2043 22.7602 18.1047C22.7593 18.0051 22.7385 17.9067 22.6992 17.8152C22.6598 17.7238 22.6027 17.641 22.531 17.5719L17.488 12.5289C17.4412 12.4818 17.415 12.4182 17.415 12.3519C17.415 12.2855 17.4412 12.2219 17.488 12.1749L23.688 5.97488C23.7136 5.94917 23.7464 5.93172 23.782 5.92477Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$2 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "360",
        height: "164",
        viewBox: "0 0 360 164"
      }, h("g", {
        fill: "none",
        fillRule: "nonzero"
      }, h("path", {
        fill: "#45D1E3",
        d: "M108.514 101.897h-3.357a2.35 2.35 0 0 1-1.679-.692L91.531 89.254a2.35 2.35 0 0 0-1.679-.692H78.448a2.35 2.35 0 0 1-1.678-.691l-8.59-8.643a2.35 2.35 0 0 0-1.679-.691h-3.357a2.37 2.37 0 0 1-2.37-2.37v-5.285a2.37 2.37 0 0 1 2.37-2.37h13.33a2.35 2.35 0 0 0 1.678-.692l21.97-21.977a2.352 2.352 0 0 0 .69-1.68v-3.357a2.37 2.37 0 0 0-2.37-2.371h-3.356a2.35 2.35 0 0 1-1.679-.691l-5.282-5.285a2.35 2.35 0 0 0-1.679-.691 2.37 2.37 0 0 0-2.37 2.37v8.643a2.37 2.37 0 0 1-2.37 2.37H78.35a2.35 2.35 0 0 1-1.679-.69l-7.504-7.606a2.356 2.356 0 0 1 0-3.359l4.295-4.296a2.352 2.352 0 0 0 .691-1.68v-1.382c0-.642-.247-1.235-.691-1.68l-1.975-1.975a2.35 2.35 0 0 0-1.678-.691H11.8a2.35 2.35 0 0 0-1.678.691l-5.283 5.284a2.352 2.352 0 0 0-.69 1.68v6.667a2.37 2.37 0 0 0 2.369 2.37 2.35 2.35 0 0 0 1.678-.691l5.283-5.284a2.35 2.35 0 0 1 1.678-.692h4.74a2.35 2.35 0 0 1 1.678.692l8.64 8.642c.444.445.691 1.037.691 1.68v14.717c0 .642.247 1.234.691 1.679l25.277 25.286a2.35 2.35 0 0 0 1.679.691h4.739a2.35 2.35 0 0 1 1.679.691l4.295 4.297c.938.938.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.692 1.68v14.716c0 .642.247 1.235.692 1.68l8.64 8.642c.443.445.69 1.037.69 1.68v28.05c0 .643.247 1.235.691 1.68l5.283 5.284c1.481 1.482 4.048.445 4.048-1.679v-16.693c0-.642.247-1.234.691-1.679l25.277-25.286a2.352 2.352 0 0 0 .691-1.679v-10.025c-.148-1.284-1.185-2.321-2.468-2.321zM53.468 17.79a2.35 2.35 0 0 0 1.678.692h6.665c2.123 0 3.16-2.519 1.678-4.05l-1.974-1.975a2.35 2.35 0 0 0-1.679-.692h-6.665c-2.122 0-3.16 2.519-1.678 4.05l1.975 1.975zm19.056-7.654a2.356 2.356 0 0 0 0-3.359 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.359c.938.938 2.419.938 3.357 0zm20.982 17.68a2.35 2.35 0 0 0 1.678.691c2.123 0 3.16-2.518 1.679-4.05l-8.64-8.642a2.35 2.35 0 0 0-1.678-.691c-2.123 0-3.16 2.518-1.679 4.05l8.64 8.642zm44.037-11.705v-1.975a5.679 5.679 0 0 0-1.679-4.05 5.675 5.675 0 0 0-4.048-1.679h-21.97c-1.53 0-2.961.593-4.047 1.68a5.679 5.679 0 0 0-1.679 4.049v1.975c0 1.531.592 2.963 1.679 4.05l3.357 3.358a5.679 5.679 0 0 1 1.678 4.05v1.975c0 1.531.593 2.964 1.679 4.05l.987.988a5.69 5.69 0 0 0 8.047 0l14.317-14.322c1.086-1.186 1.679-2.618 1.679-4.149zm3.801 16.199a1.724 1.724 0 0 0-1.185-.494h-1.974c-.445 0-.89.198-1.185.494l-1.679 1.68a1.7 1.7 0 0 0 0 2.37L137 38.04c.296.296.74.494 1.185.494h1.974c.445 0 .889-.198 1.185-.494l1.679-1.68a1.7 1.7 0 0 0 0-2.37l-1.679-1.679zm17.872 11.21a2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.36c.938.937 2.419.937 3.357 0 .938-.94.938-2.47 0-3.36zm8.343.989v-5.285c0-.444-.197-.889-.494-1.185-1.036-1.037-2.863-.296-2.863 1.185v5.285c0 .444.197.888.494 1.185 1.036 1.037 2.863.296 2.863-1.185zm167.41-18.669a2.35 2.35 0 0 0-1.679-.691h-14.712a2.35 2.35 0 0 1-1.678-.691l-1.975-1.976a2.35 2.35 0 0 0-1.678-.691H291.87a2.35 2.35 0 0 1-1.679-.692l-8.64-8.642a2.35 2.35 0 0 0-1.678-.692h-18.069a2.35 2.35 0 0 0-1.678.692l-8.64 8.642a2.35 2.35 0 0 1-1.678.692h-8.048a2.35 2.35 0 0 0-1.678.691l-5.283 5.284a2.35 2.35 0 0 1-1.678.692h-21.377a2.35 2.35 0 0 1-1.678-.692l-5.135-5.234a2.35 2.35 0 0 0-1.678-.692h-11.404a2.35 2.35 0 0 0-1.679.692l-5.282 5.284a2.352 2.352 0 0 0-.692 1.679v3.358a2.37 2.37 0 0 0 2.37 2.37 2.35 2.35 0 0 0 1.679-.69l4.295-4.297a2.354 2.354 0 0 1 3.357 0c.938.938.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.691 1.679 2.37 2.37 0 0 1-2.37 2.37h-8.64a2.37 2.37 0 0 0-2.37 2.371c0 .642-.246 1.235-.69 1.68l-1.975 1.975a2.352 2.352 0 0 0-.692 1.679v3.358a2.37 2.37 0 0 1-2.37 2.37h-8.639a2.37 2.37 0 0 0-2.37 2.371v6.47c0 .642.247 1.234.692 1.679l1.974 1.975a2.35 2.35 0 0 0 1.679.692h1.382a2.35 2.35 0 0 0 1.679-.692l5.282-5.284a2.35 2.35 0 0 1 1.679-.691h1.382a2.35 2.35 0 0 1 1.679.691l5.282 5.284a2.35 2.35 0 0 0 1.679.692h8.047a2.35 2.35 0 0 0 1.678-.692l1.975-1.975a2.35 2.35 0 0 1 1.679-.692h4.74a2.35 2.35 0 0 1 1.678.692l4.295 4.296c.938.939.938 2.42 0 3.359l-4.295 4.296a2.35 2.35 0 0 1-1.679.692H188.59a2.35 2.35 0 0 1-1.678-.692l-5.283-5.284a2.35 2.35 0 0 0-1.678-.691h-8.097a2.35 2.35 0 0 0-1.678.691l-11.948 11.952a2.352 2.352 0 0 0-.69 1.679V97.6c0 .642.246 1.235.69 1.68l11.948 11.95a2.35 2.35 0 0 0 1.678.692h10.022a2.37 2.37 0 0 1 2.37 2.37v10.026c0 .642.247 1.235.69 1.68l5.283 5.284c.445.444.692 1.037.692 1.679v14.717c0 .642.246 1.235.69 1.68l8.64 8.642a2.35 2.35 0 0 0 1.679.691h1.382a2.35 2.35 0 0 0 1.679-.691l8.64-8.643a2.352 2.352 0 0 0 .69-1.68v-28.15c0-.641.247-1.234.692-1.679l8.64-8.642a2.352 2.352 0 0 0 .69-1.68v-4.74c0-.642-.247-1.235-.69-1.68l-14.318-14.322a2.356 2.356 0 0 1 0-3.358 2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.679.691h4.739a2.35 2.35 0 0 0 1.679-.691l4.295-4.297a2.356 2.356 0 0 0 0-3.358l-6.665-6.667a2.356 2.356 0 0 1 0-3.358 2.354 2.354 0 0 1 3.357 0l4.295 4.296a2.35 2.35 0 0 0 1.679.692h1.382a2.35 2.35 0 0 1 1.678.691l7.653 7.655c.938.938 2.419.938 3.357 0l10.022-10.026a2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.678.692h1.382a2.35 2.35 0 0 0 1.679-.692l5.282-5.284a2.352 2.352 0 0 0 .692-1.68v-4.493c0-.642.246-1.235.69-1.68l5.283-5.284a2.352 2.352 0 0 0 .691-1.68v-3.357a2.37 2.37 0 0 1 2.37-2.37h6.665a2.35 2.35 0 0 0 1.678-.692l11.948-11.952a2.352 2.352 0 0 0 .69-1.679V40.806a2.37 2.37 0 0 1 2.37-2.371h10.022a2.35 2.35 0 0 0 1.679-.691l5.282-5.285a2.352 2.352 0 0 0 .692-1.679v-1.383c0-.642-.247-1.234-.692-1.679l-2.221-1.877zM319.96 65.202a2.35 2.35 0 0 0 1.678-.691l8.64-8.643c1.48-1.481.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.692l-8.64 8.643c-1.48 1.481-.395 4.05 1.679 4.05zM281.6 99.23a2.35 2.35 0 0 0-1.678-.692c-2.123 0-3.16 2.52-1.679 4.05l8.64 8.643a2.35 2.35 0 0 0 1.678.691c2.123 0 3.16-2.519 1.679-4.05l-8.64-8.642zm7.652-5.68a2.356 2.356 0 0 0 0 3.359c.938.938 2.42.938 3.357 0a2.356 2.356 0 0 0 0-3.359 2.354 2.354 0 0 0-3.357 0zm13.33 20.002a2.356 2.356 0 0 0 0-3.358 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.358c.987.938 2.468.938 3.357 0zm-.938-12.347l1.975-1.975c1.48-1.482.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.691l-1.975 1.976c-1.481 1.482-.445 4.05 1.678 4.05a2.35 2.35 0 0 0 1.679-.692zm18.316 10.717h3.357a2.35 2.35 0 0 0 1.678-.691l1.975-1.976c1.481-1.481.444-4.05-1.678-4.05h-3.358a2.35 2.35 0 0 0-1.678.692l-1.975 1.975c-1.48 1.482-.395 4.05 1.679 4.05zm28.634 29.978a2.35 2.35 0 0 0-1.679.691l-1.975 1.976c-1.48 1.481-.444 4.05 1.679 4.05a2.35 2.35 0 0 0 1.678-.692l1.975-1.976c1.481-1.481.445-4.05-1.678-4.05zm-22.266-17.928a7.022 7.022 0 0 0-4.986-2.074h-10.812c-1.876 0-3.653.741-4.986 2.074l-2.518 2.52a7.027 7.027 0 0 0-2.073 4.987v.79c0 1.877.74 3.655 2.073 4.988l2.518 2.52a7.022 7.022 0 0 0 4.986 2.073h4.147c1.876 0 3.654.741 4.987 2.075l2.517 2.518a7.022 7.022 0 0 0 4.987 2.074c3.9 0 7.06-3.16 7.06-7.062v-6.618c0-1.876-.741-3.654-2.074-4.988l-5.826-5.877z"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M112.02 98.39h-3.358a2.35 2.35 0 0 1-1.679-.691L95.036 85.747a2.35 2.35 0 0 0-1.678-.691H82.003a2.35 2.35 0 0 1-1.679-.692l-8.64-8.642a2.35 2.35 0 0 0-1.678-.692h-3.308a2.37 2.37 0 0 1-2.37-2.37v-5.285a2.37 2.37 0 0 1 2.37-2.37h13.33a2.35 2.35 0 0 0 1.679-.692l21.969-21.976a2.352 2.352 0 0 0 .69-1.68V37.3a2.37 2.37 0 0 0-2.369-2.37H98.64a2.35 2.35 0 0 1-1.678-.692l-5.283-5.284a2.35 2.35 0 0 0-1.678-.692 2.37 2.37 0 0 0-2.37 2.37v8.644a2.37 2.37 0 0 1-2.37 2.37h-3.258a2.35 2.35 0 0 1-1.679-.691l-7.652-7.655a2.356 2.356 0 0 1 0-3.359l4.295-4.296a2.352 2.352 0 0 0 .691-1.68v-1.382c0-.642-.246-1.235-.69-1.68l-1.976-1.975a2.35 2.35 0 0 0-1.678-.691H15.305a2.35 2.35 0 0 0-1.678.691l-5.283 5.285a2.352 2.352 0 0 0-.69 1.679v6.667a2.37 2.37 0 0 0 2.369 2.37 2.35 2.35 0 0 0 1.679-.69l5.282-5.285a2.35 2.35 0 0 1 1.679-.692h4.739a2.35 2.35 0 0 1 1.679.692l8.64 8.642c.443.445.69 1.038.69 1.68v14.717c0 .642.247 1.234.691 1.679L60.38 80.957a2.35 2.35 0 0 0 1.679.691h4.74a2.35 2.35 0 0 1 1.678.692l4.295 4.296c.938.939.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.691 1.68v14.716c0 .642.246 1.235.69 1.68l8.64 8.642c.445.445.691 1.037.691 1.68v28.05c0 .643.247 1.236.692 1.68l5.282 5.284c1.481 1.482 4.048.445 4.048-1.679v-16.692c0-.642.247-1.235.691-1.68l25.277-25.285a2.352 2.352 0 0 0 .692-1.68v-9.926c-.149-1.334-1.185-2.37-2.469-2.37zM56.972 14.285a2.35 2.35 0 0 0 1.678.691h6.665c2.123 0 3.16-2.518 1.679-4.05L65.02 8.952a2.35 2.35 0 0 0-1.679-.691h-6.664c-2.123 0-3.16 2.519-1.679 4.05l1.975 1.975zM76.029 6.63a2.356 2.356 0 0 0 0-3.358 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.358c.938.938 2.42.938 3.357 0zm20.982 17.68a2.35 2.35 0 0 0 1.678.692c2.123 0 3.16-2.519 1.679-4.05l-8.64-8.593a2.35 2.35 0 0 0-1.678-.692c-2.123 0-3.16 2.52-1.679 4.05l8.64 8.593zm44.037-11.655V10.68a5.679 5.679 0 0 0-1.679-4.05 5.675 5.675 0 0 0-4.048-1.68h-21.969c-1.53 0-2.962.594-4.048 1.68a5.679 5.679 0 0 0-1.679 4.05v1.975c0 1.531.593 2.963 1.679 4.05l3.357 3.358a5.679 5.679 0 0 1 1.678 4.05v1.975c0 1.531.593 2.964 1.679 4.05l.987.988a5.69 5.69 0 0 0 8.047 0l14.317-14.322c1.087-1.186 1.679-2.667 1.679-4.149zm3.801 16.15a1.724 1.724 0 0 0-1.184-.494h-1.975c-.445 0-.889.197-1.185.494l-1.679 1.679a1.7 1.7 0 0 0 0 2.37l1.679 1.68c.296.296.74.493 1.185.493h1.975c.444 0 .888-.197 1.184-.494l1.679-1.679a1.7 1.7 0 0 0 0-2.37l-1.679-1.68zm17.872 14.569a2.356 2.356 0 0 0 0-3.359 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.359c.938.889 2.419.889 3.357 0zm8.343-2.37v-5.285c0-.445-.197-.89-.493-1.186-1.037-1.037-2.864-.296-2.864 1.186v5.284c0 .445.198.889.494 1.185 1.037 1.037 2.863.297 2.863-1.185zm167.41-18.669a2.35 2.35 0 0 0-1.678-.691h-14.712a2.35 2.35 0 0 1-1.679-.692l-1.975-1.975a2.35 2.35 0 0 0-1.678-.692h-21.377a2.35 2.35 0 0 1-1.679-.691l-8.64-8.643a2.35 2.35 0 0 0-1.678-.691H265.31a2.35 2.35 0 0 0-1.678.691l-8.64 8.643a2.35 2.35 0 0 1-1.678.691h-8.047a2.35 2.35 0 0 0-1.679.692l-5.282 5.284a2.35 2.35 0 0 1-1.679.691H215.25a2.35 2.35 0 0 1-1.678-.691l-5.283-5.284a2.35 2.35 0 0 0-1.678-.692h-11.404a2.35 2.35 0 0 0-1.679.692l-5.282 5.284a2.352 2.352 0 0 0-.692 1.68v3.357a2.37 2.37 0 0 0 2.37 2.371 2.35 2.35 0 0 0 1.679-.691l4.295-4.297a2.354 2.354 0 0 1 3.357 0c.938.938.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.691 1.679 2.37 2.37 0 0 1-2.37 2.37h-8.64a2.37 2.37 0 0 0-2.37 2.371c0 .642-.246 1.235-.69 1.68l-1.975 1.975a2.352 2.352 0 0 0-.691 1.679v3.358a2.37 2.37 0 0 1-2.37 2.37h-8.64a2.37 2.37 0 0 0-2.37 2.371v6.667c0 .642.247 1.235.692 1.68l1.975 1.975a2.35 2.35 0 0 0 1.678.691h1.382a2.35 2.35 0 0 0 1.679-.691l5.282-5.284a2.35 2.35 0 0 1 1.679-.692h1.382a2.35 2.35 0 0 1 1.679.692l5.282 5.284a2.35 2.35 0 0 0 1.679.691h8.047a2.35 2.35 0 0 0 1.678-.691l1.975-1.975a2.35 2.35 0 0 1 1.679-.692h4.74a2.35 2.35 0 0 1 1.678.692l4.295 4.296c.938.939.938 2.42 0 3.358l-4.295 4.297a2.35 2.35 0 0 1-1.679.692h-14.712a2.35 2.35 0 0 1-1.678-.692l-5.283-5.284a2.35 2.35 0 0 0-1.678-.692h-8.047a2.35 2.35 0 0 0-1.679.692l-11.848 11.803a2.352 2.352 0 0 0-.692 1.68v11.408c0 .642.247 1.234.692 1.679l11.947 11.951a2.35 2.35 0 0 0 1.678.692h10.022a2.37 2.37 0 0 1 2.37 2.37v10.026c0 .642.247 1.234.691 1.679l5.283 5.284c.444.445.69 1.037.69 1.68v14.716c0 .642.248 1.235.692 1.68l8.64 8.642a2.35 2.35 0 0 0 1.678.692h1.382a2.35 2.35 0 0 0 1.679-.692l8.64-8.642a2.352 2.352 0 0 0 .69-1.68v-28.1c0-.642.247-1.235.692-1.68l8.64-8.642a2.352 2.352 0 0 0 .69-1.68v-4.74c0-.642-.246-1.235-.69-1.68L212.83 83.327a2.356 2.356 0 0 1 0-3.358 2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.679.691h4.74a2.35 2.35 0 0 0 1.678-.691l4.295-4.297a2.356 2.356 0 0 0 0-3.358l-6.665-6.667a2.356 2.356 0 0 1 0-3.359 2.354 2.354 0 0 1 3.357 0l4.295 4.297a2.35 2.35 0 0 0 1.679.691h1.382a2.35 2.35 0 0 1 1.679.692l7.652 7.655c.938.938 2.419.938 3.357 0l10.022-10.026a2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.678.692h1.383a2.35 2.35 0 0 0 1.678-.692l5.283-5.284a2.352 2.352 0 0 0 .69-1.68v-4.74c0-.642.248-1.235.692-1.68l5.282-5.284a2.352 2.352 0 0 0 .692-1.68V63.82a2.37 2.37 0 0 1 2.37-2.37h6.664a2.35 2.35 0 0 0 1.679-.692l11.947-11.952a2.352 2.352 0 0 0 .691-1.679V37.102a2.37 2.37 0 0 1 2.37-2.371h10.022a2.35 2.35 0 0 0 1.678-.691l5.283-5.285a2.352 2.352 0 0 0 .69-1.679v-1.383c0-.642-.246-1.234-.69-1.679l-2.222-1.679zm-15.008 39.361a2.35 2.35 0 0 0 1.678-.691l8.64-8.643c1.481-1.482.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.692l-8.64 8.642c-1.48 1.531-.444 4.05 1.679 4.05zm-38.36 34.027a2.35 2.35 0 0 0-1.678-.691c-2.123 0-3.16 2.519-1.679 4.05l8.64 8.642a2.35 2.35 0 0 0 1.678.692c2.123 0 3.16-2.52 1.679-4.05l-8.64-8.643zm7.652-5.68a2.356 2.356 0 0 0 0 3.36c.938.937 2.42.937 3.358 0a2.356 2.356 0 0 0 0-3.36 2.446 2.446 0 0 0-3.358 0zm13.33 16.694a2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.358c.938.938 2.42.938 3.357 0a2.356 2.356 0 0 0 0-3.358zm-.938-9.038l1.975-1.976c1.48-1.481.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.692l-1.975 1.975c-1.481 1.482-.444 4.05 1.679 4.05.592 0 1.234-.247 1.678-.691zm18.316 10.717h3.357a2.35 2.35 0 0 0 1.679-.692l1.974-1.975c1.481-1.482.445-4.05-1.678-4.05h-3.357a2.35 2.35 0 0 0-1.679.691l-1.975 1.976c-1.48 1.482-.444 4.05 1.679 4.05zm28.634 30.027a2.35 2.35 0 0 0-1.679.691l-1.974 1.976c-1.482 1.481-.445 4.05 1.678 4.05a2.35 2.35 0 0 0 1.679-.692l1.974-1.976c1.481-1.53.395-4.05-1.678-4.05zm-22.265-17.977a7.022 7.022 0 0 0-4.987-2.074h-10.812c-1.876 0-3.653.74-4.986 2.074l-2.518 2.519a7.027 7.027 0 0 0-2.073 4.988v.79c0 1.877.74 3.654 2.073 4.988l2.518 2.519a7.022 7.022 0 0 0 4.986 2.074h4.147c1.876 0 3.654.74 4.987 2.074l2.518 2.519a7.022 7.022 0 0 0 4.986 2.074c3.9 0 7.06-3.16 7.06-7.062v-6.667c0-1.877-.741-3.655-2.074-4.988l-5.825-5.828z"
      }), h("path", {
        fill: "#000000",
        d: "M339.363 21.495a3.508 3.508 0 0 0-2.518-1.037h-14.712c-.296 0-.592-.098-.79-.345l-1.975-1.976a3.508 3.508 0 0 0-2.518-1.037h-21.376c-.296 0-.593-.099-.79-.346l-8.64-8.642a3.508 3.508 0 0 0-2.517-1.037h-18.07a3.63 3.63 0 0 0-2.517 1.037l-8.64 8.642a1.165 1.165 0 0 1-.79.346h-8.047a3.63 3.63 0 0 0-2.518 1.037l-5.282 5.284a1.165 1.165 0 0 1-.79.346h-21.377c-.296 0-.592-.099-.79-.346l-5.282-5.284a3.508 3.508 0 0 0-2.518-1.037h-11.404a3.63 3.63 0 0 0-2.518 1.037l-5.282 5.284a3.51 3.51 0 0 0-1.037 2.52v3.357c0 1.976 1.629 3.606 3.604 3.606a3.63 3.63 0 0 0 2.518-1.037l4.295-4.297c.444-.445 1.184-.445 1.58 0a1.103 1.103 0 0 1 0 1.58l-4.296 4.297a3.51 3.51 0 0 0-1.036 2.519c0 .642-.494 1.136-1.136 1.136h-8.64c-1.974 0-3.603 1.63-3.603 3.605 0 .296-.1.592-.346.79l-1.975 1.975a3.51 3.51 0 0 0-1.036 2.52v3.357c0 .642-.494 1.136-1.136 1.136h-8.64c-1.974 0-3.603 1.63-3.603 3.605v6.668c0 .938.395 1.876 1.036 2.518l1.975 1.976a3.508 3.508 0 0 0 2.518 1.037h1.382a3.63 3.63 0 0 0 2.518-1.037l5.283-5.285c.197-.197.493-.345.79-.345h1.382c.296 0 .592.099.79.345l5.282 5.235a3.508 3.508 0 0 0 2.518 1.038h8.047a3.63 3.63 0 0 0 2.518-1.038l1.975-1.975c.197-.198.493-.346.79-.346h4.739c.296 0 .592.1.79.346l4.295 4.297a1.103 1.103 0 0 1 0 1.58l-4.295 4.297a1.165 1.165 0 0 1-.79.345h-14.712c-.296 0-.592-.098-.79-.345l-5.332-5.235a3.508 3.508 0 0 0-2.518-1.037h-8.047a3.63 3.63 0 0 0-2.517 1.037l-11.948 11.951a3.51 3.51 0 0 0-1.036 2.519v11.408c0 .939.394 1.877 1.036 2.519l11.948 11.951a3.508 3.508 0 0 0 2.517 1.038h10.022c.642 0 1.136.493 1.136 1.135v10.026c0 .938.395 1.877 1.036 2.519l5.283 5.284c.197.197.345.494.345.79v14.717c0 .939.395 1.877 1.037 2.519l8.64 8.643a3.508 3.508 0 0 0 2.518 1.037h1.382a3.63 3.63 0 0 0 2.518-1.037l8.64-8.643a3.51 3.51 0 0 0 1.036-2.519v-27.952c0-.297.099-.593.346-.79l8.64-8.643a3.51 3.51 0 0 0 1.036-2.519v-4.741c0-.938-.395-1.877-1.037-2.519L213.62 82.537a1.166 1.166 0 0 1-.345-.79c0-.296.098-.593.345-.79.445-.445 1.185-.445 1.58 0l10.96 10.964a3.508 3.508 0 0 0 2.518 1.037h4.74a3.63 3.63 0 0 0 2.517-1.037l4.295-4.297a3.51 3.51 0 0 0 1.037-2.519c0-.938-.395-1.876-1.037-2.518l-6.665-6.668a1.166 1.166 0 0 1-.345-.79c0-.296.098-.592.345-.79.445-.445 1.185-.445 1.58 0l4.295 4.297a3.508 3.508 0 0 0 2.518 1.037h1.382c.296 0 .593.098.79.345l7.652 7.655c1.383 1.383 3.703 1.383 5.085 0l10.022-10.025a1.103 1.103 0 0 1 1.58 0l10.96 10.964a3.508 3.508 0 0 0 2.518 1.037h1.382a3.63 3.63 0 0 0 2.518-1.037l5.282-5.285a3.51 3.51 0 0 0 1.037-2.518v-4.742c0-.296.099-.592.346-.79l5.282-5.284a3.51 3.51 0 0 0 1.037-2.519v-3.358c0-.642.494-1.136 1.135-1.136h6.665a3.63 3.63 0 0 0 2.518-1.037l11.947-11.952a3.51 3.51 0 0 0 1.037-2.518V37.447c0-.642.494-1.136 1.135-1.136h10.022a3.63 3.63 0 0 0 2.518-1.037l5.283-5.284a3.51 3.51 0 0 0 1.036-2.519v-1.383c0-.938-.395-1.876-1.036-2.518l-1.728-2.075zm.543 5.877c0 .297-.099.593-.346.79l-5.282 5.285a1.165 1.165 0 0 1-.79.346h-10.022c-1.975 0-3.604 1.63-3.604 3.605v10.025c0 .297-.099.593-.346.79L307.57 60.165a1.165 1.165 0 0 1-.79.346h-6.665c-1.974 0-3.603 1.63-3.603 3.605v3.358c0 .297-.1.593-.346.79l-5.283 5.285a3.51 3.51 0 0 0-1.036 2.518v4.742c0 .296-.099.592-.346.79l-5.282 5.284a1.165 1.165 0 0 1-.79.346h-1.383c-.296 0-.592-.099-.79-.346l-10.96-10.964c-1.382-1.382-3.702-1.382-5.084 0l-10.022 10.026a1.103 1.103 0 0 1-1.58 0l-7.652-7.655a3.508 3.508 0 0 0-2.518-1.037h-1.382c-.297 0-.593-.099-.79-.346l-4.295-4.297a3.508 3.508 0 0 0-2.518-1.037 3.63 3.63 0 0 0-2.518 1.037 3.51 3.51 0 0 0-1.037 2.52c0 .937.395 1.876 1.037 2.518l6.665 6.667c.197.198.345.494.345.79 0 .297-.098.593-.345.79l-4.295 4.297a1.165 1.165 0 0 1-.79.346h-4.74c-.296 0-.592-.099-.79-.346l-10.96-10.964a3.508 3.508 0 0 0-2.517-1.037 3.63 3.63 0 0 0-2.518 1.037 3.51 3.51 0 0 0-1.037 2.519c0 .938.395 1.877 1.037 2.519l14.317 14.322c.197.197.346.494.346.79v4.741c0 .296-.1.593-.346.79l-8.64 8.643a3.51 3.51 0 0 0-1.036 2.519v28.051c0 .296-.099.593-.346.79l-8.64 8.643a1.165 1.165 0 0 1-.79.346h-1.382c-.296 0-.592-.1-.79-.346l-8.64-8.643a1.166 1.166 0 0 1-.345-.79v-14.717c0-.938-.395-1.877-1.036-2.519l-5.283-5.284a1.166 1.166 0 0 1-.345-.79v-10.026c0-1.975-1.63-3.605-3.604-3.605h-10.022c-.297 0-.593-.099-.79-.346l-11.947-11.951a1.166 1.166 0 0 1-.346-.79V82.685c0-.296.099-.592.346-.79l11.947-11.951c.197-.198.493-.346.79-.346h8.047c.296 0 .592.099.79.346l5.282 5.284a3.508 3.508 0 0 0 2.518 1.037h14.712a3.63 3.63 0 0 0 2.518-1.037l4.295-4.297c1.382-1.383 1.382-3.704 0-5.087l-4.295-4.296a3.508 3.508 0 0 0-2.518-1.037h-4.74a3.63 3.63 0 0 0-2.517 1.037l-1.975 1.975a1.165 1.165 0 0 1-.79.346h-8.047c-.296 0-.593-.099-.79-.346l-5.282-5.284a3.508 3.508 0 0 0-2.518-1.037h-1.383a3.63 3.63 0 0 0-2.517 1.037l-5.332 5.235a1.165 1.165 0 0 1-.79.346h-1.382c-.297 0-.593-.1-.79-.346l-1.975-1.976a1.166 1.166 0 0 1-.346-.79v-6.667c0-.642.494-1.136 1.136-1.136h8.64c1.974 0 3.603-1.63 3.603-3.605v-3.358c0-.297.099-.593.346-.79l1.975-1.976a3.51 3.51 0 0 0 1.036-2.519c0-.642.494-1.136 1.136-1.136h8.64c1.974 0 3.603-1.63 3.603-3.605 0-.296.099-.592.346-.79l4.295-4.297c1.382-1.382 1.382-3.704 0-5.086a3.508 3.508 0 0 0-2.518-1.037 3.63 3.63 0 0 0-2.518 1.037l-4.295 4.296a1.165 1.165 0 0 1-.79.346 1.117 1.117 0 0 1-1.135-1.136v-3.358c0-.297.099-.593.345-.79l5.283-5.285c.197-.197.494-.345.79-.345h11.404c.296 0 .592.098.79.345l5.134 5.383a3.508 3.508 0 0 0 2.518 1.038h21.377a3.63 3.63 0 0 0 2.518-1.038l5.282-5.284c.198-.198.494-.346.79-.346h8.047a3.63 3.63 0 0 0 2.518-1.037l8.64-8.642c.197-.198.493-.346.79-.346h18.118c.296 0 .592.099.79.346l8.64 8.642a3.508 3.508 0 0 0 2.517 1.037h21.377c.296 0 .592.1.79.346l1.974 1.975a3.508 3.508 0 0 0 2.518 1.038h14.712c.296 0 .593.098.79.345l1.975 1.976c.197.197.345.494.345.79v1.333h.05zM54.159 13.198l1.975 1.976a3.508 3.508 0 0 0 2.517 1.037h6.665c1.481 0 2.765-.84 3.308-2.222.543-1.383.247-2.865-.79-3.902l-1.975-1.975a3.508 3.508 0 0 0-2.518-1.037h-6.664c-1.481 0-2.765.84-3.308 2.222-.543 1.383-.247 2.864.79 3.901zm1.48-2.963c.05-.148.346-.691 1.038-.691h6.664c.297 0 .593.099.79.346l1.975 1.975c.494.494.296 1.037.247 1.235-.05.148-.346.691-1.037.691h-6.665c-.296 0-.592-.099-.79-.346l-1.974-1.975c-.494-.494-.297-1.037-.247-1.235zM96.123 25.2a3.508 3.508 0 0 0 2.518 1.038c1.481 0 2.765-.84 3.308-2.223.543-1.383.247-2.864-.79-3.901l-8.64-8.643a3.508 3.508 0 0 0-2.517-1.037c-1.482 0-2.765.84-3.308 2.222-.543 1.383-.247 2.865.79 3.902l8.64 8.642zm-7.109-11.605c.05-.149.346-.692 1.037-.692.296 0 .592.099.79.346l8.64 8.642c.493.494.296 1.038.246 1.235-.05.148-.345.692-1.037.692-.296 0-.592-.1-.79-.346l-8.639-8.643c-.494-.494-.346-1.086-.247-1.234zM355.408 139.38c-.543-1.383-1.827-2.222-3.308-2.222a3.63 3.63 0 0 0-2.518 1.037l-1.975 1.975a3.588 3.588 0 0 0-.79 3.902 3.553 3.553 0 0 0 3.308 2.222 3.63 3.63 0 0 0 2.518-1.037l1.975-1.975c1.086-.988 1.382-2.52.79-3.902zm-2.518 2.173l-1.975 1.975a1.165 1.165 0 0 1-.79.346c-.691 0-.987-.543-1.037-.691-.049-.148-.246-.741.247-1.235l1.975-1.975c.197-.198.494-.346.79-.346.691 0 .987.543 1.037.691.049.198.246.741-.247 1.235zm-49.418-41.93a3.63 3.63 0 0 0 2.517-1.036l1.975-1.976a3.588 3.588 0 0 0 .79-3.901c-.543-1.383-1.827-2.223-3.308-2.223a3.63 3.63 0 0 0-2.518 1.037l-1.974 1.976a3.588 3.588 0 0 0-.79 3.901 3.553 3.553 0 0 0 3.308 2.223zm-.79-4.395l1.974-1.975c.198-.198.494-.346.79-.346.691 0 .988.544 1.037.692.05.148.247.74-.247 1.234l-1.975 1.976a1.165 1.165 0 0 1-.79.346c-.69 0-.987-.544-1.036-.692-.099-.148-.247-.74.247-1.235zm-190.663 1.927h-3.357c-.296 0-.592-.1-.79-.346L95.925 84.858a3.508 3.508 0 0 0-2.518-1.037H82.003c-.296 0-.593-.099-.79-.346l-8.64-8.642a3.508 3.508 0 0 0-2.517-1.037h-3.358a1.117 1.117 0 0 1-1.135-1.136v-5.285c0-.642.494-1.135 1.135-1.135h13.33a3.63 3.63 0 0 0 2.518-1.038l21.969-21.977a3.51 3.51 0 0 0 1.037-2.518v-3.359c0-1.975-1.63-3.605-3.604-3.605H98.59c-.296 0-.593-.099-.79-.345l-5.233-5.235a3.508 3.508 0 0 0-2.518-1.038c-1.975 0-3.604 1.63-3.604 3.606v8.642c0 .642-.494 1.136-1.135 1.136h-3.308c-.296 0-.593-.099-.79-.346L73.56 32.51a1.103 1.103 0 0 1 0-1.58l4.295-4.297a3.51 3.51 0 0 0 1.037-2.52V22.73c0-.938-.395-1.877-1.037-2.519l-1.975-1.975a3.508 3.508 0 0 0-2.518-1.037H15.305a3.63 3.63 0 0 0-2.517 1.037L7.456 23.42a3.51 3.51 0 0 0-1.037 2.52v6.666c0 1.976 1.63 3.606 3.604 3.606a3.63 3.63 0 0 0 2.518-1.038l5.282-5.284c.198-.197.494-.346.79-.346h4.74c.296 0 .592.1.79.346l8.639 8.643c.198.197.346.494.346.79V54.04c0 .938.395 1.877 1.036 2.519l25.277 25.286a3.508 3.508 0 0 0 2.518 1.037h4.74c.296 0 .592.099.79.346l4.294 4.296a1.103 1.103 0 0 1 0 1.58l-4.295 4.297a3.51 3.51 0 0 0-1.036 2.519v14.717c0 .938.395 1.877 1.036 2.519l8.64 8.642c.197.198.345.494.345.79v28.052c0 .938.395 1.877 1.037 2.519l5.283 5.284a3.508 3.508 0 0 0 3.9.741c1.382-.543 2.221-1.827 2.221-3.309v-16.693c0-.296.1-.592.346-.79l25.277-25.286a3.51 3.51 0 0 0 1.037-2.518v-9.828c0-1.976-1.58-3.605-3.555-3.605zm1.086 13.58c0 .297-.099.593-.345.791l-25.277 25.286a3.51 3.51 0 0 0-1.037 2.519v16.692c0 .692-.543.988-.691 1.037-.148.05-.74.247-1.234-.247l-5.283-5.284a1.166 1.166 0 0 1-.345-.79v-28.052c0-.938-.395-1.876-1.037-2.518l-8.64-8.643a1.166 1.166 0 0 1-.345-.79V96.02c0-.297.098-.593.345-.79l4.295-4.297c1.383-1.383 1.383-3.704 0-5.087l-4.295-4.297a3.508 3.508 0 0 0-2.518-1.037H61.96c-.296 0-.592-.099-.79-.345L35.892 54.83a1.166 1.166 0 0 1-.345-.79V39.324c0-.938-.395-1.877-1.037-2.519l-8.64-8.642a3.508 3.508 0 0 0-2.517-1.038h-4.74a3.63 3.63 0 0 0-2.518 1.038l-5.282 5.284a1.165 1.165 0 0 1-.79.346 1.117 1.117 0 0 1-1.135-1.136V25.99c0-.297.098-.593.345-.79l5.283-5.285c.197-.198.493-.346.79-.346h58.057c.296 0 .593.1.79.346l1.975 1.975c.197.198.345.494.345.79v1.383c0 .297-.098.593-.345.79l-4.295 4.297c-1.383 1.383-1.383 3.704 0 5.087l7.652 7.655a3.508 3.508 0 0 0 2.518 1.037h3.357c1.975 0 3.604-1.63 3.604-3.605V30.68c0-.642.494-1.136 1.135-1.136.297 0 .593.1.79.346l5.283 5.284a3.508 3.508 0 0 0 2.517 1.038h3.358c.641 0 1.135.493 1.135 1.135v3.359c0 .296-.099.592-.346.79L80.867 63.474a1.165 1.165 0 0 1-.79.346h-13.33c-1.974 0-3.603 1.63-3.603 3.605v5.284c0 1.976 1.63 3.605 3.604 3.605h3.357c.296 0 .592.1.79.346l8.64 8.643a3.508 3.508 0 0 0 2.517 1.037h11.306c.296 0 .592.099.79.346l11.947 11.951a3.508 3.508 0 0 0 2.518 1.037h3.357c.642 0 1.135.494 1.135 1.136v9.927zM74.351 8.557c.938 0 1.826-.346 2.517-1.037 1.383-1.383 1.383-3.704 0-5.087a3.508 3.508 0 0 0-2.517-1.037 3.63 3.63 0 0 0-2.518 1.037c-1.383 1.383-1.383 3.704 0 5.087a3.508 3.508 0 0 0 2.518 1.037zm-.79-4.346c.197-.197.493-.346.79-.346.296 0 .592.1.79.346a1.103 1.103 0 0 1 0 1.58 1.103 1.103 0 0 1-1.58 0c-.445-.444-.445-1.185 0-1.58zm95.825 39.707c.395 0 .74-.05 1.135-.247a2.85 2.85 0 0 0 1.777-2.667V35.72c0-.741-.296-1.531-.839-2.075a2.895 2.895 0 0 0-3.16-.642 2.85 2.85 0 0 0-1.777 2.667v5.334c0 .79.297 1.482.84 2.074a2.88 2.88 0 0 0 2.024.84zm-.445-8.198c0-.247.148-.346.247-.395.05 0 .099-.05.198-.05.098 0 .197.05.296.148.099.1.148.198.148.297v5.284a.408.408 0 0 1-.247.395c-.099.05-.296.099-.494-.099-.098-.098-.148-.197-.148-.296V35.72zm117.054 59.165a3.508 3.508 0 0 0-2.518-1.037c-1.48 0-2.765.84-3.308 2.222-.543 1.383-.246 2.864.79 3.902l8.64 8.642a3.508 3.508 0 0 0 2.518 1.037c1.48 0 2.764-.84 3.307-2.222.543-1.383.247-2.865-.79-3.902l-8.639-8.642zm7.11 11.606c-.05.148-.347.691-1.038.691-.296 0-.592-.099-.79-.346l-8.64-8.642c-.493-.494-.295-1.087-.246-1.235.05-.148.346-.691 1.037-.691.296 0 .592.098.79.345l8.64 8.643c.493.494.345 1.037.246 1.235zm37.618 13.136c-1.58-1.58-3.653-2.42-5.875-2.42h-10.812c-2.221 0-4.295.89-5.874 2.42l-2.518 2.52c-1.58 1.58-2.42 3.654-2.42 5.876v.79c0 2.223.89 4.297 2.42 5.877l2.518 2.519c1.58 1.58 3.653 2.42 5.874 2.42h4.147c1.58 0 3.012.593 4.147 1.728l2.518 2.52c1.58 1.58 3.654 2.42 5.875 2.42a8.282 8.282 0 0 0 8.294-8.298v-6.667c0-2.222-.889-4.297-2.419-5.877l-5.875-5.828zm5.826 18.372c0 3.21-2.617 5.828-5.826 5.828-1.58 0-3.011-.593-4.147-1.729l-2.518-2.518c-1.58-1.58-3.653-2.42-5.875-2.42h-4.147c-1.58 0-3.011-.593-4.147-1.729l-2.517-2.519a5.868 5.868 0 0 1-1.728-4.148v-.79c0-1.58.592-3.013 1.728-4.149l2.517-2.518a5.864 5.864 0 0 1 4.147-1.729h10.812c1.58 0 3.012.593 4.147 1.729l5.875 5.877a5.868 5.868 0 0 1 1.728 4.148v6.667h-.05zm-13.083-75.067a3.63 3.63 0 0 0 2.518-1.037l8.64-8.643a3.588 3.588 0 0 0 .79-3.902c-.544-1.382-1.827-2.222-3.309-2.222a3.63 3.63 0 0 0-2.517 1.037l-8.64 8.643a3.588 3.588 0 0 0-.79 3.901c.543 1.383 1.827 2.223 3.308 2.223zm-.79-4.396l8.64-8.642c.197-.198.493-.346.79-.346.69 0 .987.543 1.036.691.05.149.247.741-.247 1.235l-8.64 8.643a1.165 1.165 0 0 1-.79.345c-.69 0-.986-.543-1.036-.691-.05-.148-.247-.74.247-1.235zm-15.7 52.4a3.51 3.51 0 0 0 1.037-2.52c0-.938-.394-1.876-1.036-2.518-1.383-1.383-3.703-1.383-5.085 0a3.51 3.51 0 0 0-1.037 2.519c0 .938.395 1.876 1.037 2.518a3.592 3.592 0 0 0 2.518 1.037c.938 0 1.876-.345 2.567-1.037zm-3.356-1.73a1.166 1.166 0 0 1-.346-.79c0-.296.099-.592.346-.79a1.103 1.103 0 0 1 1.58 0c.197.198.345.494.345.79 0 .297-.099.593-.346.79-.395.445-1.135.445-1.58 0zm-9.183-21.087a3.63 3.63 0 0 0-2.518 1.037c-1.382 1.383-1.382 3.704 0 5.087a3.508 3.508 0 0 0 2.518 1.037 3.63 3.63 0 0 0 2.518-1.037c1.382-1.383 1.382-3.704 0-5.087a3.63 3.63 0 0 0-2.518-1.037zm.79 4.395c-.444.445-1.185.445-1.58 0a1.103 1.103 0 0 1 0-1.58c.198-.198.494-.346.79-.346.296 0 .592.099.79.346a1.103 1.103 0 0 1 0 1.58zM142.282 12.655V10.68c0-1.828-.74-3.605-2.024-4.89-1.284-1.333-3.06-2.024-4.887-2.024H113.4c-1.826 0-3.604.74-4.887 2.024-1.284 1.334-2.024 3.062-2.024 4.89v1.975c0 1.828.74 3.605 2.024 4.89l3.357 3.358c.84.84 1.284 1.975 1.284 3.16v1.976c0 1.827.74 3.605 2.024 4.89l.987.987a6.916 6.916 0 0 0 4.888 2.025 6.916 6.916 0 0 0 4.887-2.025l14.317-14.322c1.284-1.383 2.024-3.111 2.024-4.939zm-2.468 0c0 1.185-.445 2.321-1.284 3.161l-14.317 14.322c-1.728 1.729-4.591 1.729-6.319 0l-.987-.988c-.84-.84-1.284-1.975-1.284-3.16v-1.976c0-1.827-.74-3.605-2.024-4.89l-3.357-3.357c-.84-.84-1.284-1.976-1.284-3.161V10.63c0-1.185.445-2.32 1.284-3.16.84-.84 1.975-1.284 3.16-1.284h21.92c1.184 0 2.32.444 3.159 1.284.84.84 1.283 1.975 1.283 3.16v2.025h.05zm5.924 15.31a2.91 2.91 0 0 0-2.073-.84h-1.975c-.79 0-1.481.297-2.074.84l-1.678 1.68a2.912 2.912 0 0 0-.84 2.073c0 .79.297 1.482.84 2.075l1.678 1.679a2.91 2.91 0 0 0 2.074.84h1.975c.79 0 1.48-.297 2.073-.84l1.679-1.68c.543-.543.839-1.283.839-2.074 0-.79-.296-1.481-.84-2.074l-1.678-1.679zm-.099 4l-1.678 1.68c-.099.098-.198.148-.296.148h-1.975c-.099 0-.247-.05-.296-.149l-1.679-1.679a.544.544 0 0 1-.148-.296c0-.05 0-.198.148-.296l1.679-1.68c.098-.098.197-.148.296-.148h1.975c.098 0 .246.05.296.149l1.678 1.679a.544.544 0 0 1 .148.296c0 .05-.049.198-.148.296zm17.921 12.248a3.51 3.51 0 0 0 1.037-2.519c0-.938-.395-1.876-1.037-2.518-1.382-1.383-3.702-1.383-5.085 0a3.51 3.51 0 0 0-1.037 2.518c0 .939.395 1.877 1.037 2.52a3.592 3.592 0 0 0 2.518 1.036c.987 0 1.876-.345 2.567-1.037zm-3.653-2.519c0-.296.099-.592.345-.79.198-.197.494-.345.79-.345.297 0 .593.098.79.345a1.103 1.103 0 0 1 0 1.58 1.103 1.103 0 0 1-1.58 0 1.166 1.166 0 0 1-.345-.79zm160.251 65.734c.543 1.383 1.827 2.222 3.308 2.222h3.357a3.63 3.63 0 0 0 2.518-1.037l1.975-1.975a3.588 3.588 0 0 0 .79-3.902c-.544-1.383-1.827-2.222-3.308-2.222h-3.357a3.63 3.63 0 0 0-2.518 1.037l-1.975 1.975c-1.086 1.037-1.382 2.52-.79 3.902zm2.518-2.173l1.975-1.976c.197-.197.493-.345.79-.345h3.357c.69 0 .987.543 1.037.691.049.148.246.741-.247 1.235l-1.975 1.975a1.165 1.165 0 0 1-.79.346h-3.357c-.691 0-.987-.543-1.037-.691-.05-.198-.247-.741.247-1.235z"
      }))));
    }
  }]);

  return Image;
}(m);

var Icon$1F = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.5 2.5H1.5C0.947715 2.5 0.5 2.94772 0.5 3.5V4.5C0.5 5.05228 0.947715 5.5 1.5 5.5H22.5C23.0523 5.5 23.5 5.05228 23.5 4.5V3.5C23.5 2.94772 23.0523 2.5 22.5 2.5ZM22.5 10.5H1.5C0.947715 10.5 0.5 10.9477 0.5 11.5V12.5C0.5 13.0523 0.947715 13.5 1.5 13.5H22.5C23.0523 13.5 23.5 13.0523 23.5 12.5V11.5C23.5 10.9477 23.0523 10.5 22.5 10.5ZM1.5 18.5H22.5C23.0523 18.5 23.5 18.9477 23.5 19.5V20.5C23.5 21.0523 23.0523 21.5 22.5 21.5H1.5C0.947715 21.5 0.5 21.0523 0.5 20.5V19.5C0.5 18.9477 0.947715 18.5 1.5 18.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1G = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "26",
        height: "26",
        viewBox: "0 0 26 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24.5182 8.45543C22.9071 3.89144 18.5899 0.842255 13.75 0.84999C9.61278 0.84454 5.79818 3.0839 3.78648 6.69919C1.85574 10.169 1.87744 14.3819 3.81447 17.8209L0.937532 23.8631C0.773732 24.2071 0.844314 24.617 1.11375 24.8864C1.38318 25.1558 1.79307 25.2264 2.13708 25.0626L8.17844 22.1856C12.2219 24.4619 17.2663 24.0637 20.9093 21.1362C24.6824 18.1041 26.1293 13.0199 24.5182 8.45543ZM8.97899 7.49998C8.43838 7.49998 8.00012 7.93856 8.00012 8.47957C8.00012 9.02059 8.43838 9.45916 8.97899 9.45916H17.7888C18.3294 9.45916 18.7677 9.02059 18.7677 8.47957C18.7677 7.93856 18.3294 7.49998 17.7888 7.49998H8.97899ZM8.00012 12.2653C8.00012 11.7243 8.43838 11.2857 8.97899 11.2857H18.7254C19.266 11.2857 19.7043 11.7243 19.7043 12.2653C19.7043 12.8063 19.266 13.2449 18.7254 13.2449H8.97899C8.43838 13.2449 8.00012 12.8063 8.00012 12.2653ZM8.97899 15.07C8.43838 15.07 8.00012 15.5086 8.00012 16.0496C8.00012 16.5906 8.43838 17.0292 8.97899 17.0292H14.7888C15.3294 17.0292 15.7677 16.5906 15.7677 16.0496C15.7677 15.5086 15.3294 15.07 14.7888 15.07H8.97899Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1H = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "evenodd",
        d: "M20 3H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H5.17L4 18.17V5h16v12z",
        clipRule: "evenodd"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1I = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.7252 1.41574e-05C14.4677 -0.00275017 16.187 0.399337 17.7478 1.17462C19.3091 1.95013 20.6691 3.07788 21.7207 4.46899C22.7722 5.86011 23.4866 7.47659 23.8075 9.19108C24.1285 10.9056 24.0472 12.6712 23.5701 14.3489C23.093 16.0266 22.2331 17.5705 21.0581 18.8589C19.8832 20.1474 18.4254 21.1452 16.7994 21.7738C15.1735 22.4023 13.4239 22.6444 11.6886 22.481C10.1339 22.3347 8.62875 21.8664 7.26784 21.1083L1.39976 23.9048C1.02561 24.0831 0.579796 24.0063 0.286752 23.7131C-0.00629074 23.4198 -0.0830576 22.9737 0.0950969 22.5993L2.88949 16.7261C2.00405 15.1356 1.51619 13.3512 1.47158 11.5257C1.42252 9.51846 1.91112 7.53466 2.88668 5.78016C3.86224 4.02566 5.28921 2.56439 7.01951 1.548C8.74936 0.531866 10.7194 -0.0026021 12.7252 1.41574e-05ZM12.7253 0.979605L12.7239 1.95919C11.0669 1.9568 9.43952 2.39821 8.01054 3.23761C6.58156 4.07701 5.40308 5.28381 4.59741 6.73278C3.79173 8.18176 3.38821 9.8201 3.42873 11.4778C3.46924 13.1355 3.95232 14.7521 4.82782 16.1599C5.0041 16.4434 5.02397 16.7972 4.88055 17.0987L3.04857 20.9491L6.89523 19.1159C7.19633 18.9724 7.54972 18.9922 7.83294 19.1684C9.05575 19.9292 10.4384 20.3955 11.872 20.5305C13.3055 20.6654 14.7508 20.4654 16.094 19.9462C17.4371 19.427 18.6414 18.6027 19.612 17.5383C20.5826 16.4739 21.293 15.1985 21.6871 13.8126C22.0812 12.4267 22.1484 10.9681 21.8833 9.55181C21.6182 8.1355 21.028 6.80014 20.1593 5.65096C19.2907 4.50177 18.1672 3.57016 16.8774 2.92952C15.5877 2.28888 14.1669 1.95671 12.727 1.95919L12.7253 0.979605Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 7.83671C7 7.29569 7.43825 6.85712 7.97887 6.85712H16.7887C17.3293 6.85712 17.7676 7.29569 17.7676 7.83671C17.7676 8.37772 17.3293 8.8163 16.7887 8.8163H7.97887C7.43825 8.8163 7 8.37772 7 7.83671Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 11.2653C7 10.7243 7.43825 10.2857 7.97887 10.2857H17.7253C18.2659 10.2857 18.7042 10.7243 18.7042 11.2653C18.7042 11.8063 18.2659 12.2449 17.7253 12.2449H7.97887C7.43825 12.2449 7 11.8063 7 11.2653Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14.6939C7 14.1529 7.43825 13.7143 7.97887 13.7143H13.7887C14.3293 13.7143 14.7676 14.1529 14.7676 14.6939C14.7676 15.2349 14.3293 15.6735 13.7887 15.6735H7.97887C7.43825 15.6735 7 15.2349 7 14.6939Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1J = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.47114 4.50002C9.48633 4.62161 9.54564 4.73339 9.63781 4.81413C9.72999 4.89488 9.8486 4.93896 9.97114 4.93802H14.0351C14.1577 4.93896 14.2763 4.89488 14.3685 4.81413C14.4606 4.73339 14.5199 4.62161 14.5351 4.50002C14.7506 3.41945 15.1591 2.38659 15.7411 1.45101C15.7917 1.35954 15.8123 1.25452 15.8001 1.15071C15.7879 1.0469 15.7435 0.949528 15.6731 0.872277C15.6027 0.795026 15.5098 0.741783 15.4076 0.720032C15.3054 0.698281 15.1989 0.709117 15.1031 0.751015L13.2411 1.55102C13.2105 1.56405 13.1776 1.57085 13.1443 1.571C13.111 1.57115 13.0781 1.56465 13.0473 1.55189C13.0166 1.53913 12.9887 1.52037 12.9653 1.49669C12.9419 1.47301 12.9235 1.44491 12.9111 1.41402L12.4701 0.314015C12.4329 0.221382 12.3689 0.142001 12.2862 0.086092C12.2035 0.030183 12.106 0.000305176 12.0061 0.000305176C11.9063 0.000305176 11.8088 0.030183 11.7261 0.086092C11.6434 0.142001 11.5793 0.221382 11.5421 0.314015L11.1011 1.41402C11.0888 1.44491 11.0703 1.47301 11.0469 1.49669C11.0236 1.52037 10.9957 1.53913 10.9649 1.55189C10.9342 1.56465 10.9012 1.57115 10.8679 1.571C10.8347 1.57085 10.8018 1.56405 10.7711 1.55102L8.90014 0.755015C8.80438 0.713117 8.6979 0.702281 8.59566 0.724032C8.49343 0.745783 8.40058 0.799026 8.33017 0.876277C8.25976 0.953528 8.21533 1.0509 8.20313 1.15471C8.19093 1.25852 8.21156 1.36354 8.26214 1.45502C8.84475 2.38916 9.2543 3.42064 9.47114 4.50002ZM9 8.00002H15C15.2652 8.00002 15.5196 7.89466 15.7071 7.70712C15.8946 7.51959 16 7.26523 16 7.00002C16 6.7348 15.8946 6.48044 15.7071 6.29291C15.5196 6.10537 15.2652 6.00002 15 6.00002H9C8.73479 6.00002 8.48043 6.10537 8.29289 6.29291C8.10536 6.48044 8 6.7348 8 7.00002C8 7.26523 8.10536 7.51959 8.29289 7.70712C8.48043 7.89466 8.73479 8.00002 9 8.00002ZM15.0811 9.00002C15.2101 9.0003 15.3355 9.0428 15.4381 9.12102C17.9901 11.071 20.8401 14.523 20.8401 17.518C20.8401 21.75 18.4821 24 12.0001 24C5.51811 24 3.16011 21.75 3.16211 17.521C3.16211 14.521 6.01111 11.071 8.56211 9.12102C8.6645 9.0424 8.79002 8.99986 8.91911 9.00002H15.0811ZM12.8081 20.2159C12.8455 20.1709 12.8976 20.1405 12.9551 20.13C13.4177 20.0465 13.8405 19.8146 14.1596 19.4694C14.4787 19.1242 14.6767 18.6845 14.7237 18.2168C14.7707 17.7491 14.6641 17.2788 14.4201 16.8771C14.176 16.4753 13.8078 16.1639 13.3711 15.99L11.1861 15.117C11.0413 15.0591 10.9211 14.9525 10.8464 14.8155C10.7716 14.6786 10.7469 14.5199 10.7765 14.3667C10.8061 14.2136 10.8882 14.0755 11.0085 13.9762C11.1289 13.877 11.2801 13.8228 11.4361 13.823H13.5881C13.787 13.823 13.9778 13.744 14.1184 13.6033C14.2591 13.4627 14.3381 13.2719 14.3381 13.073C14.3381 12.8741 14.2591 12.6833 14.1184 12.5427C13.9778 12.402 13.787 12.323 13.5881 12.323H13.0001C12.9338 12.323 12.8702 12.2967 12.8233 12.2498C12.7765 12.2029 12.7501 12.1393 12.7501 12.073V11.75C12.7501 11.5511 12.6711 11.3603 12.5304 11.2197C12.3898 11.079 12.199 11 12.0001 11C11.8012 11 11.6104 11.079 11.4698 11.2197C11.3291 11.3603 11.2501 11.5511 11.2501 11.75V12.124C11.2501 12.1825 11.2296 12.2392 11.1922 12.2841C11.1547 12.3291 11.1027 12.3595 11.0451 12.37C10.5825 12.4536 10.1597 12.6855 9.84065 13.0306C9.52157 13.3758 9.32356 13.8155 9.27656 14.2832C9.22957 14.7509 9.33614 15.2212 9.58017 15.623C9.82419 16.0247 10.1924 16.3361 10.6291 16.51L12.8141 17.383C12.959 17.441 13.0791 17.5476 13.1538 17.6845C13.2286 17.8214 13.2533 17.9801 13.2237 18.1333C13.1941 18.2865 13.1121 18.4245 12.9917 18.5238C12.8713 18.623 12.7201 18.6772 12.5641 18.677H10.4121C10.2132 18.677 10.0224 18.756 9.88178 18.8967C9.74113 19.0373 9.66211 19.2281 9.66211 19.427C9.66211 19.6259 9.74113 19.8167 9.88178 19.9573C10.0224 20.098 10.2132 20.177 10.4121 20.177H11.0001C11.0664 20.177 11.13 20.2034 11.1769 20.2502C11.2238 20.2971 11.2501 20.3607 11.2501 20.427V20.75C11.2501 20.9489 11.3291 21.1397 11.4698 21.2803C11.6104 21.421 11.8012 21.5 12.0001 21.5C12.199 21.5 12.3898 21.421 12.5304 21.2803C12.6711 21.1397 12.7501 20.9489 12.7501 20.75V20.376C12.7501 20.3175 12.7706 20.2608 12.8081 20.2159Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1K = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M12.48 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1H7c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1L = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M35.3459 13.6438C38.0454 14.498 40 17.0196 40 19.9998C40 22.9804 38.0454 25.5032 35.3459 26.3559C36.6479 28.8676 36.2509 32.0347 34.1423 34.1429C32.0338 36.2508 28.8665 36.6504 26.3548 35.3456C25.5021 38.0438 22.9812 40 20.0016 40C17.0189 40 14.4979 38.0438 13.6452 35.3456C11.1335 36.6504 7.96613 36.2508 5.85763 34.1429C3.74912 32.0347 3.35207 28.8676 4.65411 26.3559C1.95768 25.5032 0 22.9804 0 19.9998C0 17.0196 1.95768 14.498 4.65411 13.6438C3.35207 11.1336 3.74912 7.96651 5.85763 5.8583C7.96613 3.7504 11.1335 3.35085 13.6452 4.65567C14.4979 1.95615 17.0189 0 20.0016 0C22.9812 0 25.5021 1.95615 26.3548 4.65567C28.8665 3.35085 32.0338 3.7504 34.1423 5.8583C36.2509 7.96651 36.6479 11.1336 35.3459 13.6438Z",
        fill: "#EB4B68"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M27.5735 14.483C28.1415 13.9149 28.1415 12.994 27.5734 12.426C27.0054 11.858 26.0844 11.858 25.5164 12.4261L20.0004 17.9427L14.483 12.426C13.9149 11.858 12.994 11.858 12.426 12.4261C11.858 12.9942 11.858 13.9151 12.4261 14.4831L17.9434 19.9999L12.4269 25.517C11.8589 26.0851 11.859 27.006 12.427 27.574C12.9951 28.142 13.9161 28.142 14.4841 27.5739L20.0006 22.0568L25.5184 27.574C26.0865 28.142 27.0075 28.142 27.5755 27.5739C28.1435 27.0058 28.1434 26.0849 27.5754 25.5169L22.0575 19.9996L27.5735 14.483Z",
        fill: "white"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1M = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M19.6728 8.82195C21.022 9.2491 22 10.5098 22 12C22 13.4902 21.022 14.7516 19.6728 15.178C20.3246 16.4339 20.1248 18.0174 19.0708 19.0715C18.0174 20.1255 16.4339 20.3253 15.178 19.6728C14.7516 21.022 13.4902 22 12 22C10.5098 22 9.24911 21.022 8.82196 19.6728C7.56608 20.3253 5.98258 20.1255 4.92923 19.0715C3.87518 18.0174 3.67542 16.4339 4.3272 15.178C2.97871 14.7516 2 13.4902 2 12C2 10.5098 2.97871 9.2491 4.3272 8.82195C3.67542 7.56677 3.87518 5.98327 4.92923 4.92922C5.98258 3.87517 7.56608 3.67543 8.82196 4.3279C9.24911 2.97803 10.5098 2 12 2C13.4902 2 14.7516 2.97803 15.178 4.3279C16.4339 3.67543 18.0174 3.87517 19.0708 4.92922C20.1248 5.98327 20.3246 7.56677 19.6728 8.82195Z",
        fill: "#19194B"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.22757 17.5534C9.37641 17.5534 9.52641 17.5823 9.66871 17.6412C10.0545 17.8013 10.3237 18.157 10.3729 18.572C10.4706 19.3958 11.1702 20.0167 11.9998 20.0167C12.8298 20.0167 13.529 19.3958 13.6267 18.5724C13.6759 18.1574 13.9451 17.8013 14.3309 17.6412C14.717 17.4814 15.1586 17.5426 15.4866 17.8017C16.137 18.3148 17.0701 18.2586 17.657 17.6716C18.2435 17.0841 18.2993 16.1498 17.7866 15.4989C17.5281 15.1705 17.467 14.7282 17.627 14.3421C17.7866 13.956 18.1424 13.6865 18.557 13.6372C19.3796 13.5399 20 12.84 20 12.0093C20 11.1785 19.3796 10.4787 18.5573 10.3813C18.1424 10.332 17.7866 10.0626 17.627 9.67645C17.467 9.29034 17.5281 8.84802 17.7866 8.51966C18.2993 7.8687 18.2435 6.93442 17.657 6.34736C17.0705 5.75992 16.1374 5.7041 15.4866 6.21724C15.1586 6.47593 14.717 6.53714 14.3309 6.37739C13.9451 6.21724 13.6759 5.86116 13.6267 5.44618C13.529 4.62276 12.8298 4.00183 11.9998 4.00183C11.1702 4.00183 10.4706 4.62315 10.3729 5.44657C10.3237 5.86155 10.0545 6.21724 9.66871 6.37739C9.28257 6.53714 8.84065 6.47555 8.51297 6.21724C7.8626 5.70372 6.92954 5.75992 6.34302 6.34736C5.75611 6.93442 5.70034 7.8687 6.21341 8.51966C6.47186 8.84802 6.53263 9.29034 6.37302 9.67645C6.21302 10.0626 5.85726 10.332 5.44266 10.3813C4.62037 10.4787 4 11.1785 4 12.0093C4 12.84 4.62037 13.5399 5.44266 13.6372C5.85765 13.6865 6.21341 13.956 6.37302 14.3421C6.53263 14.7282 6.47186 15.1705 6.21341 15.4989C5.70034 16.1502 5.75611 17.0841 6.34302 17.6716C6.92993 18.2586 7.8626 18.3148 8.51297 17.8017C8.71989 17.6381 8.97257 17.5534 9.22757 17.5534Z",
        fill: "white"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1N = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M35.3459 13.6438C38.0454 14.498 40 17.0196 40 19.9998C40 22.9804 38.0454 25.5032 35.3459 26.3559C36.6479 28.8676 36.2509 32.0347 34.1423 34.1429C32.0338 36.2508 28.8665 36.6504 26.3548 35.3456C25.5021 38.0438 22.9812 40 20.0016 40C17.0189 40 14.4979 38.0438 13.6452 35.3456C11.1335 36.6504 7.96613 36.2508 5.85763 34.1429C3.74912 32.0347 3.35207 28.8676 4.65411 26.3559C1.95768 25.5032 0 22.9804 0 19.9998C0 17.0196 1.95768 14.498 4.65411 13.6438C3.35207 11.1336 3.74912 7.96651 5.85763 5.8583C7.96613 3.7504 11.1335 3.35085 13.6452 4.65567C14.4979 1.95615 17.0189 0 20.0016 0C22.9812 0 25.5021 1.95615 26.3548 4.65567C28.8665 3.35085 32.0338 3.7504 34.1423 5.8583C36.2509 7.96651 36.6479 11.1336 35.3459 13.6438Z",
        fill: "#FAC34B"
      }), h("path", {
        d: "M20 12C18.4178 12 16.871 12.4692 15.5554 13.3482C14.2398 14.2273 13.2145 15.4767 12.609 16.9385C12.0035 18.4003 11.845 20.0089 12.1537 21.5607C12.4624 23.1126 13.2243 24.538 14.3431 25.6569C15.462 26.7757 16.8874 27.5376 18.4393 27.8463C19.9911 28.155 21.5997 27.9965 23.0615 27.391C24.5233 26.7855 25.7727 25.7602 26.6518 24.4446C27.5308 23.129 28 21.5822 28 20C27.9977 17.879 27.1541 15.8455 25.6543 14.3457C24.1545 12.8459 22.121 12.0023 20 12V12ZM23.4667 23.4807C23.3458 23.6086 23.1799 23.6844 23.004 23.6922C22.8282 23.6999 22.6563 23.6388 22.5247 23.522L19.2187 20.4913C19.1501 20.4291 19.0952 20.3533 19.0576 20.2687C19.0199 20.1841 19.0003 20.0926 19 20V16.3333C19 16.1565 19.0702 15.987 19.1953 15.8619C19.3203 15.7369 19.4899 15.6667 19.6667 15.6667C19.8435 15.6667 20.013 15.7369 20.1381 15.8619C20.2631 15.987 20.3333 16.1565 20.3333 16.3333V19.7067L23.4227 22.5387C23.4875 22.5976 23.5401 22.6688 23.5774 22.7481C23.6148 22.8274 23.6361 22.9133 23.6402 23.0009C23.6442 23.0884 23.631 23.1759 23.6013 23.2584C23.5715 23.3408 23.5258 23.4166 23.4667 23.4813V23.4807Z",
        fill: "white"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1O = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "40",
        height: "40",
        viewBox: "0 0 40 40"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        fill: "#333333",
        d: "M20 38a6.896 6.896 0 0 1-6.004-3.505 6.894 6.894 0 0 1-8.49-8.491 6.893 6.893 0 0 1 0-12.008 6.891 6.891 0 0 1 8.49-8.49 6.895 6.895 0 0 1 12.008 0 6.891 6.891 0 0 1 8.49 8.49 6.895 6.895 0 0 1 0 12.008 6.895 6.895 0 0 1-8.49 8.49A6.895 6.895 0 0 1 20 38"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M15.148 29.693a2.02 2.02 0 0 1 2.005 1.781 2.867 2.867 0 0 0 5.694 0 2.02 2.02 0 0 1 3.255-1.347 2.866 2.866 0 0 0 4.025-4.026 2.018 2.018 0 0 1 1.348-3.255A2.865 2.865 0 0 0 34 20a2.865 2.865 0 0 0-2.525-2.846 2.019 2.019 0 0 1-1.348-3.255A2.866 2.866 0 0 0 29.9 10.1a2.865 2.865 0 0 0-3.798-.228 2.02 2.02 0 0 1-3.255-1.348 2.867 2.867 0 1 0-5.694 0 2.02 2.02 0 0 1-3.255 1.348 2.863 2.863 0 0 0-3.798.228 2.864 2.864 0 0 0-.227 3.798 2.02 2.02 0 0 1-1.348 3.255A2.865 2.865 0 0 0 6 20a2.865 2.865 0 0 0 2.525 2.846 2.019 2.019 0 0 1 1.348 3.255A2.865 2.865 0 0 0 10.1 29.9a2.865 2.865 0 0 0 3.798.227 2.017 2.017 0 0 1 1.25-.434"
      }))));
    }
  }]);

  return Icon;
}(m);

var Icon$1P = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M35.3459 13.6438C38.0454 14.498 40 17.0196 40 19.9998C40 22.9804 38.0454 25.5032 35.3459 26.3559C36.6479 28.8676 36.2509 32.0347 34.1423 34.1429C32.0338 36.2508 28.8665 36.6504 26.3548 35.3456C25.5021 38.0438 22.9812 40 20.0016 40C17.0189 40 14.4979 38.0438 13.6452 35.3456C11.1335 36.6504 7.96613 36.2508 5.85763 34.1429C3.74912 32.0347 3.35207 28.8676 4.65411 26.3559C1.95768 25.5032 0 22.9804 0 19.9998C0 17.0196 1.95768 14.498 4.65411 13.6438C3.35207 11.1336 3.74912 7.96651 5.85763 5.8583C7.96613 3.7504 11.1335 3.35085 13.6452 4.65567C14.4979 1.95615 17.0189 0 20.0016 0C22.9812 0 25.5021 1.95615 26.3548 4.65567C28.8665 3.35085 32.0338 3.7504 34.1423 5.8583C36.2509 7.96651 36.6479 11.1336 35.3459 13.6438Z",
        fill: "#38AD5A"
      }), h("path", {
        d: "M27.414 13.2861C27.2626 13.1717 27.0908 13.0891 26.9082 13.0429C26.7256 12.9966 26.536 12.9877 26.35 13.0166C26.1641 13.0455 25.9855 13.1116 25.8246 13.2113C25.6636 13.3109 25.5234 13.4421 25.4119 13.5973L18.6227 23.0383L14.3056 19.4991C14.0079 19.2654 13.6327 19.1606 13.2605 19.207C12.8883 19.2534 12.5486 19.4474 12.3143 19.7473C12.08 20.0473 11.9698 20.4294 12.0071 20.8117C12.0445 21.1939 12.2266 21.546 12.5143 21.7924L17.9958 26.2851C18.1473 26.4065 18.3209 26.4957 18.5064 26.5476C18.6919 26.5995 18.8857 26.613 19.0763 26.5873C19.267 26.5617 19.4507 26.4973 19.6169 26.398C19.783 26.2987 19.9281 26.1665 20.0438 26.0092L27.7223 15.3387C27.8337 15.1832 27.9141 15.0067 27.9589 14.8194C28.0036 14.6321 28.012 14.4375 27.9833 14.2469C27.9547 14.0563 27.8897 13.8733 27.792 13.7084C27.6943 13.5436 27.5659 13.4001 27.414 13.2861Z",
        fill: "white"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1Q = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1R = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("g", {
        fill: "#303334",
        fillRule: "nonzero"
      }, h("path", {
        d: "M5 2v2h4.59L3 10.59 4.41 12 11 5.41V10h2V2zM19 22v-2h-4.59L21 13.41 19.59 12 13 18.59V14h-2v8z"
      }))));
    }
  }]);

  return Icon;
}(m);

var Icon$1S = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.4444 0.926917C16.3488 0.322569 17.4122 0 18.5 0C19.9587 0 21.3576 0.579463 22.3891 1.61091C23.4205 2.64236 24 4.04131 24 5.5C24 6.5878 23.6774 7.65117 23.0731 8.55564C22.4687 9.46011 21.6098 10.1651 20.6048 10.5813C19.5998 10.9976 18.4939 11.1065 17.427 10.8943C16.3601 10.6821 15.3801 10.1583 14.6109 9.38909C13.8417 8.6199 13.3179 7.63989 13.1057 6.573C12.8935 5.5061 13.0024 4.40023 13.4187 3.39524C13.8349 2.39025 14.5399 1.53126 15.4444 0.926917ZM17.0879 8.06915C17.1789 8.10692 17.2765 8.12624 17.375 8.126C17.4741 8.12743 17.5724 8.10906 17.6643 8.07197C17.7562 8.03488 17.8397 7.97981 17.91 7.91L21.66 4.16C21.7925 4.01783 21.8646 3.82978 21.8612 3.63548C21.8577 3.44118 21.779 3.25579 21.6416 3.11838C21.5042 2.98097 21.3188 2.90225 21.1245 2.89882C20.9302 2.8954 20.7422 2.96752 20.6 3.1L17.375 6.315L16.405 5.346C16.3363 5.27231 16.2535 5.21321 16.1615 5.17222C16.0695 5.13123 15.9702 5.10919 15.8695 5.10741C15.7688 5.10563 15.6688 5.12416 15.5754 5.16188C15.482 5.1996 15.3972 5.25574 15.326 5.32696C15.2547 5.39818 15.1986 5.48301 15.1609 5.5764C15.1232 5.66979 15.1046 5.76982 15.1064 5.87052C15.1082 5.97123 15.1302 6.07054 15.1712 6.16254C15.2122 6.25454 15.2713 6.33734 15.345 6.406L16.845 7.906C16.9144 7.97593 16.997 8.03139 17.0879 8.06915ZM11.619 6.789C10.9887 6.30108 10.2687 5.94162 9.49998 5.731V4.5C9.49998 4.10218 9.34195 3.72064 9.06064 3.43934C8.77934 3.15804 8.39781 3 7.99998 3C7.60216 3 7.22063 3.15804 6.93932 3.43934C6.65802 3.72064 6.49998 4.10218 6.49998 4.5V5.73C3.57898 6.521 1.49998 9.507 1.49998 13V13.646C1.49768 15.7737 1.0024 17.8719 0.0529833 19.776C0.014785 19.8522 -0.00328506 19.937 0.000490513 20.0221C0.00426609 20.1073 0.0297618 20.1901 0.0745547 20.2627C0.119348 20.3352 0.181949 20.3951 0.256411 20.4367C0.330872 20.4782 0.414719 20.5 0.499983 20.5H15.5C15.5852 20.5 15.6691 20.4782 15.7436 20.4367C15.818 20.3951 15.8806 20.3352 15.9254 20.2627C15.9702 20.1901 15.9957 20.1073 15.9995 20.0221C16.0033 19.937 15.9852 19.8522 15.947 19.776C14.998 17.8717 14.5028 15.7736 14.5 13.646V13C14.5008 12.3556 14.4287 11.7132 14.285 11.085C12.8928 10.0346 11.9422 8.50281 11.619 6.789ZM9.5 21.5H6.5C6.36739 21.5 6.24021 21.5527 6.14645 21.6464C6.05268 21.7402 6 21.8674 6 22C6 22.5304 6.21071 23.0391 6.58579 23.4142C6.96086 23.7893 7.46957 24 8 24C8.53043 24 9.03914 23.7893 9.41421 23.4142C9.78929 23.0391 10 22.5304 10 22C10 21.8674 9.94732 21.7402 9.85355 21.6464C9.75979 21.5527 9.63261 21.5 9.5 21.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1T = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.699 11.944C19.7026 14.4906 20.3005 17.0011 21.445 19.276V19.275C21.4834 19.3512 21.5016 19.4359 21.498 19.5212C21.4944 19.6064 21.469 19.6893 21.4243 19.762C21.3796 19.8347 21.3171 19.8947 21.2426 19.9363C21.1682 19.978 21.0843 19.9999 20.999 20H2.99898C2.9138 19.9998 2.83008 19.9779 2.75576 19.9363C2.68143 19.8947 2.61897 19.8348 2.57429 19.7622C2.52962 19.6897 2.50421 19.607 2.50048 19.5219C2.49675 19.4368 2.51482 19.3522 2.55298 19.276C3.69749 17.0011 4.29534 14.4906 4.29898 11.944V11.176C4.27655 9.79356 4.56599 8.42384 5.14579 7.16866C5.7256 5.91349 6.58086 4.80514 7.64798 3.926C8.48516 3.28287 9.46173 2.84545 10.499 2.649V1.5C10.499 1.10218 10.657 0.720644 10.9383 0.43934C11.2196 0.158035 11.6012 0 11.999 0C12.3968 0 12.7783 0.158035 13.0596 0.43934C13.3409 0.720644 13.499 1.10218 13.499 1.5V2.636C14.3301 2.78453 15.1234 3.09656 15.833 3.554C17.0513 4.41168 18.0408 5.55497 18.7148 6.88376C19.3888 8.21255 19.7267 9.68631 19.699 11.176V11.944ZM9.76297 21H14.235C14.2965 20.9997 14.3559 21.0222 14.4017 21.0632C14.4476 21.1042 14.4765 21.1608 14.483 21.222C14.4939 21.3143 14.4992 21.4071 14.499 21.5C14.499 22.163 14.2356 22.7989 13.7667 23.2678C13.2979 23.7366 12.662 24 11.999 24C11.3359 24 10.7 23.7366 10.2312 23.2678C9.76236 22.7989 9.49897 22.163 9.49897 21.5C9.49873 21.4071 9.50407 21.3143 9.51497 21.222C9.52184 21.161 9.55092 21.1047 9.59665 21.0637C9.64239 21.0228 9.70159 21.0001 9.76297 21Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1U = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12C23.993 18.624 18.624 23.993 12 24ZM18.639 11.146L12.352 4.86C12.157 4.665 11.84 4.665 11.645 4.86L5.359 11.146C5.163 11.341 5.163 11.658 5.358 11.853C5.452 11.947 5.58 12 5.713 12H9.5C9.638 12 9.75 12.112 9.75 12.25V18.5C9.75 18.776 9.974 19 10.25 19H13.742C14.018 19 14.242 18.776 14.242 18.5V12.25C14.242 12.112 14.354 12 14.492 12H18.281C18.557 12.003 18.783 11.781 18.786 11.505C18.787 11.37 18.734 11.241 18.639 11.146Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1V = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.086 0.586L21.414 4.914C21.7891 5.28899 21.9999 5.79761 22 6.328V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H4C3.46957 24 2.96086 23.7893 2.58579 23.4142C2.21071 23.0391 2 22.5304 2 22V2C2 1.46957 2.21071 0.960859 2.58579 0.585786C2.96086 0.210714 3.46957 0 4 0H15.672C16.2024 0.000113275 16.711 0.210901 17.086 0.586ZM7.37025 15.8772H7.9386C8.45275 15.8772 8.94584 15.6729 9.30939 15.3094C9.67295 14.9458 9.87719 14.4527 9.87719 13.9386C9.87719 13.4244 9.67295 12.9314 9.30939 12.5678C8.94584 12.2042 8.45275 12 7.9386 12H6.57018C6.49515 12 6.42086 12.0148 6.35156 12.0436C6.28226 12.0723 6.21933 12.1145 6.16636 12.1676C6.11339 12.2208 6.07143 12.2839 6.04288 12.3532C6.01433 12.4226 5.99976 12.497 6 12.572V18.0457C6 18.1969 6.06007 18.3419 6.167 18.4489C6.27393 18.5558 6.41896 18.6159 6.57018 18.6159C6.7214 18.6159 6.86642 18.5558 6.97335 18.4489C7.08028 18.3419 7.14035 18.1969 7.14035 18.0457V16.1071C7.14035 16.0461 7.16457 15.9876 7.20769 15.9445C7.2508 15.9014 7.30928 15.8772 7.37025 15.8772ZM10.729 18.4477C10.8359 18.5542 10.9807 18.614 11.1316 18.614C12.0087 18.614 12.8498 18.2656 13.47 17.6454C14.0902 17.0252 14.4386 16.1841 14.4386 15.307C14.4386 14.4299 14.0902 13.5888 13.47 12.9686C12.8498 12.3484 12.0087 12 11.1316 12C11.0566 12 10.9823 12.0148 10.913 12.0436C10.8437 12.0723 10.7807 12.1145 10.7278 12.1676C10.6748 12.2208 10.6328 12.2839 10.6043 12.3532C10.5757 12.4226 10.5612 12.497 10.5614 12.572V18.0457C10.5619 18.1966 10.6222 18.3411 10.729 18.4477ZM16.6053 13.1404H18.4298C18.581 13.1404 18.7261 13.0803 18.833 12.9733C18.9399 12.8664 19 12.7214 19 12.5702C19 12.419 18.9399 12.2739 18.833 12.167C18.7261 12.0601 18.581 12 18.4298 12H16.6053C16.2119 12.0005 15.8349 12.1571 15.5569 12.4354C15.2789 12.7137 15.1228 13.0909 15.1228 13.4843V18.0457C15.1228 18.1969 15.1829 18.3419 15.2898 18.4489C15.3967 18.5558 15.5418 18.6159 15.693 18.6159C15.8442 18.6159 15.9892 18.5558 16.0962 18.4489C16.2031 18.3419 16.2632 18.1969 16.2632 18.0457V16.1071C16.2632 16.0461 16.2874 15.9876 16.3305 15.9445C16.3736 15.9014 16.4321 15.8772 16.4931 15.8772H17.5175C17.6688 15.8772 17.8138 15.8171 17.9207 15.7102C18.0276 15.6033 18.0877 15.4582 18.0877 15.307C18.0877 15.1558 18.0276 15.0108 17.9207 14.9038C17.8138 14.7969 17.6688 14.7368 17.5175 14.7368H16.4931C16.4321 14.7368 16.3736 14.7126 16.3305 14.6695C16.2874 14.6264 16.2632 14.5679 16.2632 14.5069V13.4825C16.2632 13.3917 16.2992 13.3047 16.3634 13.2406C16.4275 13.1764 16.5145 13.1404 16.6053 13.1404ZM11.7018 13.4715C11.7018 13.2781 11.9034 13.28 11.9992 13.3219H12.0001C12.3861 13.4906 12.7146 13.7681 12.9453 14.1207C13.176 14.4732 13.2989 14.8853 13.2989 15.3066C13.2989 15.7279 13.176 16.14 12.9453 16.4925C12.7146 16.845 12.3861 17.1226 12.0001 17.2913C11.9679 17.3045 11.933 17.3098 11.8983 17.3066C11.8637 17.3035 11.8303 17.292 11.801 17.2732C11.7717 17.2544 11.7474 17.2288 11.7301 17.1986C11.7128 17.1684 11.7031 17.1345 11.7018 17.0997V13.4715ZM7.93817 13.1404H7.36982C7.30885 13.1404 7.25037 13.1646 7.20726 13.2077C7.16414 13.2508 7.13992 13.3093 7.13992 13.3703V14.507C7.13992 14.5679 7.16414 14.6264 7.20726 14.6695C7.25037 14.7126 7.30885 14.7369 7.36982 14.7369H7.93817C8.14988 14.7369 8.35291 14.6528 8.50261 14.5031C8.65231 14.3534 8.73641 14.1503 8.73641 13.9386C8.73641 13.7269 8.65231 13.5239 8.50261 13.3742C8.35291 13.2245 8.14988 13.1404 7.93817 13.1404Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1W = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.5 6.25C17.5 9.28757 15.0376 11.75 12 11.75C8.96243 11.75 6.5 9.28757 6.5 6.25C6.5 3.21243 8.96243 0.75 12 0.75C15.0376 0.75 17.5 3.21243 17.5 6.25ZM5.2857 16.0357C7.06667 14.2547 9.48134 13.2529 12 13.25C14.5187 13.2529 16.9333 14.2547 18.7143 16.0357C20.4953 17.8167 21.4971 20.2313 21.5 22.75C21.5 22.8826 21.4473 23.0098 21.3536 23.1036C21.2598 23.1973 21.1326 23.25 21 23.25H3C2.86739 23.25 2.74021 23.1973 2.64645 23.1036C2.55268 23.0098 2.5 22.8826 2.5 22.75C2.50291 20.2313 3.50474 17.8167 5.2857 16.0357Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$3 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        width: "293",
        height: "192",
        viewBox: "0 0 293 192",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("mask", {
        id: "mask0",
        "mask-type": "alpha",
        maskUnits: "userSpaceOnUse",
        x: "-11",
        y: "0",
        width: "304",
        height: "192"
      }, h("rect", {
        x: "-11",
        width: "304",
        height: "192",
        fill: "#C4C4C4"
      })), h("g", {
        mask: "url(#mask0)"
      }, h("path", {
        d: "M-48.656 149.724C-52.244 152.555 -56.58 153.977 -60.919 153.977C-65.997 153.977 -71.075 152.037 -74.95 148.158C-82.134 140.965 -82.652 129.631 -76.514 121.835C-86.361 120.668 -94 112.286 -94 102.115C-94 91.9429 -86.361 83.5616 -76.514 82.3943C-82.652 74.5987 -82.134 63.2641 -74.95 56.0721C-67.765 48.8792 -56.443 48.3606 -48.656 54.5054C-47.49 44.6475 -39.118 37 -28.957 37C-18.797 37 -10.425 44.6475 -9.259 54.5054C-8.093 44.6475 0.279002 37 10.44 37C20.6 37 28.972 44.6475 30.138 54.5054C31.304 44.6475 39.676 37 49.837 37C59.997 37 68.369 44.6475 69.535 54.5054C70.701 44.6475 79.073 37 89.234 37C99.394 37 107.766 44.6475 108.932 54.5054C110.098 44.6475 118.47 37 128.631 37",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        d: "M176.187 149.724V121.835C186.034 120.668 193.673 112.286 193.673 102.115",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M193.673 102.115C193.673 91.9429 186.034 83.5616 176.187 82.3943C182.325 74.5987 181.807 63.2641 174.623 56.0721C167.438 48.8792 156.117 48.3596 148.329 54.5054C147.163 44.6475 138.791 37 128.631 37",
        fill: "white"
      }), h("path", {
        d: "M193.673 102.115C193.673 91.9429 186.034 83.5616 176.187 82.3943C182.325 74.5987 181.807 63.2641 174.623 56.0721C167.438 48.8792 156.117 48.3596 148.329 54.5054C147.163 44.6475 138.791 37 128.631 37",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M128.631 37C118.47 37 110.098 44.6475 108.932 54.5054C107.766 44.6475 99.394 37 89.234 37C79.073 37 70.701 44.6475 69.535 54.5054C68.369 44.6475 59.997 37 49.837 37C39.676 37 31.304 44.6475 30.138 54.5054C28.972 44.6475 20.6 37 10.44 37C0.278999 37 -8.093 44.6475 -9.259 54.5054C-10.425 44.6475 -18.797 37 -28.957 37C-39.118 37 -47.49 44.6475 -48.656 54.5054C-56.443 48.3606 -67.765 48.8792 -74.95 56.0721C-82.134 63.2641 -82.652 74.5987 -76.514 82.3943C-86.361 83.5616 -94 91.9429 -94 102.115C-94 112.286 -86.361 120.668 -76.514 121.835C-82.652 129.631 -82.134 140.965 -74.95 148.158C-71.075 152.037 -65.997 153.977 -60.919 153.977C-56.58 153.977 -52.244 152.555 -48.656 149.724H176.187V121.835C186.034 120.668 193.673 112.286 193.673 102.115C193.673 91.9429 186.034 83.5616 176.187 82.3943C182.325 74.5987 181.807 63.2641 174.623 56.0721C167.438 48.8792 156.117 48.3596 148.329 54.5054C147.163 44.6475 138.791 37 128.631 37Z",
        fill: "white"
      }), h("path", {
        d: "M128.631 37C118.47 37 110.098 44.6475 108.932 54.5054C107.766 44.6475 99.394 37 89.234 37C79.073 37 70.701 44.6475 69.535 54.5054C68.369 44.6475 59.997 37 49.837 37C39.676 37 31.304 44.6475 30.138 54.5054C28.972 44.6475 20.6 37 10.44 37C0.279002 37 -8.093 44.6475 -9.259 54.5054C-10.425 44.6475 -18.797 37 -28.957 37C-39.118 37 -47.49 44.6475 -48.656 54.5054C-56.443 48.3606 -67.765 48.8792 -74.95 56.0721C-82.134 63.2641 -82.652 74.5987 -76.514 82.3943C-86.361 83.5616 -94 91.9429 -94 102.115C-94 112.286 -86.361 120.668 -76.514 121.835C-82.652 129.631 -82.134 140.965 -74.95 148.158C-71.075 152.037 -65.997 153.977 -60.919 153.977C-56.58 153.977 -52.244 152.555 -48.656 149.724H176.187V121.835C186.034 120.668 193.673 112.286 193.673 102.115C193.673 91.9429 186.034 83.5616 176.187 82.3943C182.325 74.5987 181.807 63.2641 174.623 56.0721C167.438 48.8792 156.117 48.3596 148.329 54.5054C147.163 44.6475 138.791 37 128.631 37",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M194.509 92.7354V91.453C194.509 85.7456 189.887 81.1195 184.187 81.1195C178.486 81.1195 173.864 85.7456 173.864 91.453C173.864 85.7456 169.243 81.1195 163.542 81.1195C157.841 81.1195 153.219 85.7456 153.219 91.453H140.025C141.284 98.9403 146.45 105.091 153.356 107.733C154.236 108.07 154.999 108.588 155.649 109.212",
        fill: "white"
      }), h("path", {
        d: "M194.509 92.7354V91.453C194.509 85.7456 189.887 81.1195 184.187 81.1195C178.486 81.1195 173.864 85.7456 173.864 91.453C173.864 85.7456 169.243 81.1195 163.542 81.1195C157.841 81.1195 153.219 85.7456 153.219 91.453H140.025C141.284 98.9403 146.45 105.091 153.356 107.733C154.236 108.07 154.999 108.588 155.649 109.212",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M161.935 100.213C156.241 105.912 152.719 113.786 152.719 122.483C152.719 139.876 166.805 153.977 184.18 153.977C201.556 153.977 215.642 139.876 215.642 122.483C215.642 108.712 206.809 97.0145 194.509 92.7357",
        fill: "white"
      }), h("path", {
        d: "M161.935 100.213C156.241 105.912 152.719 113.786 152.719 122.483C152.719 139.876 166.805 153.977 184.18 153.977C201.556 153.977 215.642 139.876 215.642 122.483C215.642 108.712 206.809 97.0145 194.509 92.7357",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M161.935 100.213C156.241 105.912 152.719 113.786 152.719 122.483C152.719 139.876 166.805 153.977 184.18 153.977C201.556 153.977 215.642 139.876 215.642 122.483C215.642 108.712 206.809 97.0145 194.509 92.7357",
        fill: "white"
      }), h("path", {
        d: "M161.935 100.213C156.241 105.912 152.719 113.786 152.719 122.483C152.719 139.876 166.805 153.977 184.18 153.977C201.556 153.977 215.642 139.876 215.642 122.483C215.642 108.712 206.809 97.0145 194.509 92.7357",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M212.848 133.239C212.848 136.373 210.31 138.914 207.179 138.914C204.048 138.914 201.509 136.373 201.509 133.239H212.848Z",
        fill: "#333333"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M200.085 112.909C200.085 115.26 198.181 117.166 195.833 117.166C193.485 117.166 191.581 115.26 191.581 112.909C191.581 110.558 193.485 108.652 195.833 108.652C198.181 108.652 200.085 110.558 200.085 112.909Z",
        fill: "#333333"
      }), h("path", {
        d: "M148.329 149.724L168.859 170.277",
        stroke: "#333333",
        "stroke-width": "7.087",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }))));
    }
  }]);

  return Image;
}(m);

var Icon$1X = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M17 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V20.932C4 21.7276 4.31607 22.4907 4.87868 23.0533C5.44129 23.6159 6.20435 23.932 7 23.932H17C17.7956 23.932 18.5587 23.6159 19.1213 23.0533C19.6839 22.4907 20 21.7276 20 20.932V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM12 22.432C11.8022 22.432 11.6089 22.3734 11.4444 22.2635C11.28 22.1536 11.1518 21.9974 11.0761 21.8147C11.0004 21.632 10.9806 21.4309 11.0192 21.2369C11.0578 21.0429 11.153 20.8647 11.2929 20.7249C11.4327 20.585 11.6109 20.4898 11.8049 20.4512C11.9989 20.4126 12.2 20.4324 12.3827 20.5081C12.5654 20.5838 12.7216 20.712 12.8315 20.8764C12.9414 21.0409 13 21.2342 13 21.432C13 21.6972 12.8946 21.9516 12.7071 22.1391C12.5196 22.3266 12.2652 22.432 12 22.432ZM18 17.932C18 18.1972 17.8946 18.4516 17.7071 18.6391C17.5196 18.8266 17.2652 18.932 17 18.932H7C6.73478 18.932 6.48043 18.8266 6.29289 18.6391C6.10536 18.4516 6 18.1972 6 17.932V3.5C6 3.23478 6.10536 2.98043 6.29289 2.79289C6.48043 2.60536 6.73478 2.5 7 2.5H17C17.2652 2.5 17.5196 2.60536 17.7071 2.79289C17.8946 2.98043 18 3.23478 18 3.5V17.932Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1Y = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M1.9561 13H10.5651C11.1171 13 11.5651 12.552 11.5651 12C11.5651 11.448 11.1171 11 10.5651 11H2.5001C2.2241 11 2.0001 10.776 2.0001 10.5L1.9621 4.5C1.9621 4.224 2.1861 4 2.4621 4H21.5001C21.7761 4 22.0001 4.224 22.0001 4.5V8C22.0001 8.552 22.4481 9 23.0001 9C23.5521 9 24.0001 8.552 24.0001 8V4C24.0111 2.908 23.1361 2.014 22.0441 2H1.9561C0.864103 2.014 -0.0108974 2.908 0.000102587 4V11C-0.0108974 12.092 0.864103 12.986 1.9561 13ZM7.9721 5.992C7.7451 5.646 7.2801 5.549 6.9341 5.776L6.8091 5.858C6.6941 5.934 6.5391 5.901 6.4631 5.786C6.4361 5.745 6.4221 5.698 6.4221 5.649V5.5C6.4221 5.086 6.0861 4.75 5.6721 4.75C5.2581 4.75 4.9221 5.086 4.9221 5.5V5.631C4.9221 5.769 4.8101 5.881 4.6721 5.881C4.6221 5.881 4.5741 5.866 4.5331 5.839L4.4241 5.766C4.0821 5.532 3.6151 5.62 3.3821 5.963C3.1481 6.305 3.2361 6.771 3.5781 7.005C3.5831 7.008 3.5871 7.011 3.5921 7.014L4.0001 7.283C4.1151 7.359 4.1471 7.514 4.0711 7.629C4.0521 7.657 4.0281 7.681 4.0001 7.7L3.5921 7.968C3.2391 8.185 3.1291 8.647 3.3471 9C3.5641 9.353 4.0261 9.463 4.3791 9.245C4.3911 9.238 4.4031 9.23 4.4141 9.222L4.5381 9.141C4.6151 9.09 4.7131 9.086 4.7941 9.13C4.8751 9.174 4.9251 9.258 4.9251 9.35V9.498C4.9251 9.912 5.2611 10.248 5.6751 10.248C6.0891 10.248 6.4251 9.912 6.4251 9.498V9.367C6.4251 9.229 6.5371 9.117 6.6751 9.117C6.7251 9.117 6.7731 9.132 6.8141 9.159L6.9231 9.232C7.2761 9.449 7.7381 9.339 7.9551 8.986C8.1611 8.65 8.0731 8.213 7.7521 7.983L7.3461 7.712C7.2311 7.637 7.1981 7.483 7.2741 7.367C7.2931 7.338 7.3181 7.313 7.3461 7.295L7.7551 7.027C8.1001 6.801 8.1971 6.338 7.9721 5.992ZM12.3271 10.25C12.7411 10.25 13.0771 9.914 13.0771 9.5V9.369C13.0771 9.231 13.1891 9.119 13.3271 9.119C13.3771 9.119 13.4251 9.134 13.4661 9.161L13.5751 9.234C13.9221 9.46 14.3871 9.362 14.6131 9.015C14.8351 8.673 14.7441 8.216 14.4071 7.986L14.0001 7.715C13.8851 7.639 13.8531 7.484 13.9291 7.369C13.9481 7.341 13.9721 7.317 14.0001 7.298L14.4081 7.03C14.7611 6.813 14.8711 6.351 14.6531 5.998C14.4361 5.645 13.9741 5.535 13.6211 5.753C13.6091 5.76 13.5971 5.768 13.5861 5.776L13.4611 5.858C13.3461 5.934 13.1911 5.901 13.1151 5.786C13.0881 5.745 13.0741 5.698 13.0741 5.649V5.5C13.0741 5.086 12.7381 4.75 12.3241 4.75C11.9101 4.75 11.5741 5.086 11.5741 5.5V5.631C11.5741 5.769 11.4621 5.881 11.3241 5.881C11.2741 5.881 11.2261 5.866 11.1851 5.839L11.0761 5.766C10.7341 5.532 10.2671 5.62 10.0341 5.963C9.8011 6.306 9.8881 6.771 10.2301 7.005C10.2351 7.008 10.2391 7.011 10.2441 7.014L10.6511 7.285C10.7661 7.361 10.7981 7.516 10.7221 7.631C10.7031 7.659 10.6791 7.683 10.6511 7.702L10.2431 7.97C9.8901 8.187 9.7801 8.649 9.9981 9.002C10.2151 9.355 10.6771 9.465 11.0301 9.247C11.0421 9.24 11.0541 9.232 11.0651 9.224L11.1891 9.143C11.3041 9.067 11.4591 9.1 11.5351 9.215C11.5621 9.256 11.5761 9.303 11.5761 9.352V9.5C11.5761 9.914 11.9121 10.25 12.3261 10.25H12.3271ZM22.6641 13.098C22.5411 13.081 22.4501 12.975 22.4501 12.851V11.833C22.4501 9.9 20.8831 8.333 18.9501 8.333C17.0171 8.333 15.4501 9.9 15.4501 11.833V12.851C15.4501 12.975 15.3591 13.081 15.2361 13.098C14.4981 13.204 13.9501 13.837 13.9501 14.583V20.083C13.9501 20.911 14.6221 21.583 15.4501 21.583H22.4501C23.2781 21.583 23.9501 20.911 23.9501 20.083V14.583C23.9501 13.837 23.4021 13.204 22.6641 13.098ZM19.9501 17.833C19.9501 18.385 19.5021 18.833 18.9501 18.833C18.3981 18.833 17.9501 18.385 17.9501 17.833C17.9501 17.281 18.3981 16.833 18.9501 16.833C19.5021 16.833 19.9501 17.281 19.9501 17.833ZM17.4501 11.833C17.4501 11.005 18.1221 10.333 18.9501 10.333C19.7781 10.333 20.4501 11.005 20.4501 11.833V12.833C20.4501 12.971 20.3381 13.083 20.2001 13.083H17.7001C17.5621 13.083 17.4501 12.971 17.4501 12.833V11.833Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$4 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "264",
        height: "264",
        viewBox: "0 0 264 264"
      }, h("defs", null, h("path", {
        id: "a",
        d: "M0 .25h110.25V184H0z"
      })), h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("g", {
        transform: "translate(63 54.124)"
      }, h("path", {
        fill: "#45D1E3",
        d: "M101.062.25H9.187A9.189 9.189 0 0 0 0 9.438v165.374A9.19 9.19 0 0 0 9.187 184h91.875a9.189 9.189 0 0 0 9.188-9.188V9.438A9.188 9.188 0 0 0 101.062.25",
        mask: "url(#b)"
      })), h("path", {
        fill: "#FFFFFF",
        d: "M178.055 40.38H86.18a9.189 9.189 0 0 0-9.188 9.189v165.374a9.19 9.19 0 0 0 9.188 9.188h91.875a9.188 9.188 0 0 0 9.188-9.188V49.569a9.187 9.187 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#000000",
        d: "M98.737 184.012H165.5V62.125H98.737v121.887zm70.131 6.737h-73.5A3.367 3.367 0 0 1 92 187.381V58.756a3.368 3.368 0 0 1 3.368-3.369h73.5a3.37 3.37 0 0 1 3.369 3.369v128.625a3.369 3.369 0 0 1-3.369 3.368zm-82.688-147a5.826 5.826 0 0 0-5.818 5.819v165.375a5.826 5.826 0 0 0 5.818 5.819h91.875a5.827 5.827 0 0 0 5.82-5.819V49.568a5.827 5.827 0 0 0-5.82-5.819H86.18zm91.875 183.75H86.18c-6.923 0-12.555-5.632-12.555-12.556V49.568c0-6.923 5.632-12.556 12.555-12.556h91.875c6.924 0 12.557 5.633 12.557 12.556v165.375c0 6.924-5.633 12.556-12.557 12.556z"
      }), h("path", {
        fill: "#000000",
        d: "M147.737 208.851h-36.75a3.096 3.096 0 1 1 0-6.191h36.75a3.096 3.096 0 1 1 0 6.191M131.768 6C115.329 6 102 19.102 102 35.265c0 10.751 9.236 24.369 27.494 41.38l2.274 2.12 2.275-2.12c18.258-17.011 27.493-30.629 27.493-41.38C161.536 19.102 148.208 6 131.768 6"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M132.118 17.845c-7.307 0-13.23 5.924-13.23 13.23a3.307 3.307 0 1 0 6.616 0 6.615 6.615 0 1 1 6.614 6.615 3.309 3.309 0 0 0-3.308 3.308v6.615a3.308 3.308 0 0 0 6.616 0v-3.716c5.706-1.442 9.922-6.543 9.922-12.822 0-7.306-5.923-13.23-13.23-13.23M132.118 54.227a3.309 3.309 0 1 0 .001 6.618 3.309 3.309 0 0 0-.001-6.617"
      }), h("path", {
        fill: "#000000",
        d: "M160.78 62.124l-25.417 25.419H98.737v6.737h16.99v25.42h-16.99v6.736h18.97l25.42 25.42h-44.39v6.737h16.99v25.42h6.739v-25.42H165.5v-6.737h-12.845l-25.42-25.42H165.5V119.7h-43.034V94.281H165.5v-6.739h-20.61l20.61-20.608v-4.81z"
      }), h("path", {
        fill: "#45D1E3",
        d: "M138.572 106.787a6.786 6.786 0 0 1-6.787 6.785 6.784 6.784 0 0 1-6.785-6.785 6.786 6.786 0 1 1 13.572 0"
      }))));
    }
  }]);

  return Image;
}(m);

var Image$5 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "264",
        height: "264",
        viewBox: "0 0 264 264"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        fill: "#45D1E3",
        d: "M164.063 54.089H72.188A9.188 9.188 0 0 0 63 63.277v165.374a9.189 9.189 0 0 0 9.188 9.188h91.875a9.189 9.189 0 0 0 9.188-9.188V63.277a9.188 9.188 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M178.057 40.369H86.182a9.188 9.188 0 0 0-9.188 9.188V214.93a9.189 9.189 0 0 0 9.188 9.188h91.875a9.189 9.189 0 0 0 9.188-9.188V49.557a9.188 9.188 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#000000",
        d: "M86.182 43.737a5.825 5.825 0 0 0-5.818 5.82v165.375a5.826 5.826 0 0 0 5.818 5.819h91.875a5.826 5.826 0 0 0 5.818-5.82V49.556a5.825 5.825 0 0 0-5.818-5.818H86.182zm91.875 183.75H86.182c-6.924 0-12.556-5.632-12.556-12.555V49.556C73.626 42.633 79.258 37 86.182 37h91.875c6.924 0 12.556 5.634 12.556 12.557v165.375c0 6.923-5.632 12.556-12.556 12.556z"
      }), h("path", {
        fill: "#000000",
        d: "M142.806 115.706h-22.05v-7.35c0-6.089 4.937-11.025 11.026-11.025 6.088 0 11.024 4.936 11.024 11.025v7.35zm11.025 0h-3.674v-7.35c0-10.149-8.228-18.375-18.375-18.375-10.15 0-18.375 8.226-18.375 18.375v7.35h-3.675a3.676 3.676 0 0 0-3.676 3.675v33.075a3.676 3.676 0 0 0 3.676 3.675h44.099a3.675 3.675 0 0 0 3.675-3.675v-33.075a3.675 3.675 0 0 0-3.675-3.675z"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M135.456 141.431a3.676 3.676 0 0 1-7.35 0v-11.025a3.675 3.675 0 1 1 7.35 0v11.025z"
      }), h("path", {
        fill: "#000000",
        d: "M98.4 184h66.763V62.112H98.4V184zm70.131 6.737h-73.5a3.369 3.369 0 0 1-3.369-3.368V58.744a3.37 3.37 0 0 1 3.369-3.369h73.5a3.369 3.369 0 0 1 3.369 3.369v128.625a3.368 3.368 0 0 1-3.369 3.368zM150.493 209.113h-36.75a3.37 3.37 0 0 1 0-6.738h36.75a3.369 3.369 0 0 1 0 6.738"
      }))));
    }
  }]);

  return Image;
}(m);

var Image$6 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "264",
        height: "264",
        viewBox: "0 0 264 264"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        fill: "#45D1E3",
        d: "M164.063 55.089H72.188A9.188 9.188 0 0 0 63 64.277v165.374a9.189 9.189 0 0 0 9.188 9.188h91.875a9.189 9.189 0 0 0 9.188-9.188V64.277a9.188 9.188 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M178.057 41.096H86.182a9.188 9.188 0 0 0-9.188 9.188v165.374a9.189 9.189 0 0 0 9.188 9.188h91.875a9.189 9.189 0 0 0 9.188-9.188V50.284a9.188 9.188 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#000000",
        d: "M86.182 44.465a5.825 5.825 0 0 0-5.818 5.818v165.375a5.826 5.826 0 0 0 5.818 5.82h91.875a5.826 5.826 0 0 0 5.819-5.82V50.285a5.825 5.825 0 0 0-5.82-5.82H86.183zm91.875 183.75H86.182c-6.923 0-12.556-5.633-12.556-12.556V50.284c0-6.925 5.633-12.556 12.556-12.556h91.875c6.923 0 12.556 5.631 12.556 12.555v165.375c0 6.924-5.633 12.556-12.556 12.556z"
      }), h("path", {
        fill: "#000000",
        d: "M98.738 184.727H165.5V62.839H98.738v121.888zm70.131 6.737h-73.5a3.368 3.368 0 0 1-3.368-3.368V59.471a3.368 3.368 0 0 1 3.368-3.369h73.5a3.369 3.369 0 0 1 3.369 3.369v128.625a3.368 3.368 0 0 1-3.369 3.368zM150.493 209.84h-36.75a3.368 3.368 0 0 1 0-6.738h36.75a3.369 3.369 0 1 1 0 6.737"
      }), h("path", {
        fill: "#45D1E3",
        d: "M184.358 31.112a3.37 3.37 0 0 1-3.37-3.37V9.369a3.369 3.369 0 0 1 6.739 0v18.375a3.37 3.37 0 0 1-3.37 3.369m34.767 16.39h-18.375a3.37 3.37 0 0 1 0-6.737h18.375a3.37 3.37 0 0 1 0 6.738M196.408 35.453a3.368 3.368 0 0 1-2.382-5.751l12.993-12.993a3.37 3.37 0 0 1 4.764 4.765L198.79 34.466a3.358 3.358 0 0 1-2.382.987"
      }), h("path", {
        fill: "#000000",
        d: "M166.041 121.163a15.846 15.846 0 0 1-6.029 8.061c-.123-.218-.242-.438-.37-.653a32.22 32.22 0 0 0-4.892-6.275 3.394 3.394 0 0 0-5.792 2.4c0 .867.331 1.736.994 2.398a25.49 25.49 0 0 1 4.941 6.974c.134.281.258.566.382.852a25.03 25.03 0 0 1 1.137 3.222c.605 2.183.925 4.458.925 6.784 0 9.053-4.797 17.004-11.98 21.452a25.039 25.039 0 0 1-8.948 3.393c-.51.088-1.026.164-1.546.221a6.154 6.154 0 0 0 3.099-3.614 6.122 6.122 0 0 0 .292-1.865h-12.269c0 .65.103 1.276.292 1.865a6.15 6.15 0 0 0 3.1 3.614 25.219 25.219 0 0 1-1.547-.22 25.039 25.039 0 0 1-8.948-3.394c-7.183-4.448-11.98-12.399-11.98-21.452a25.323 25.323 0 0 1 2.445-10.859 25.387 25.387 0 0 1 4.941-6.973 3.383 3.383 0 0 0 .993-2.399 3.394 3.394 0 0 0-5.792-2.399 32.213 32.213 0 0 0-4.892 6.274c-.128.216-.247.436-.37.654a15.85 15.85 0 0 1-6.433-9.517h5.743a3.393 3.393 0 0 0 3.393-3.392 6.142 6.142 0 0 1 6.135-6.134 6.14 6.14 0 0 1 6.134 6.134 3.393 3.393 0 0 0 6.786 0v-.006a6.142 6.142 0 0 1 6.135-6.128c3.38 0 6.13 2.75 6.134 6.128v.006a3.393 3.393 0 0 0 3.392 3.392h.001a3.393 3.393 0 0 0 3.393-3.392v-.006a6.14 6.14 0 0 1 6.135-6.128 6.141 6.141 0 0 1 6.133 6.134 3.394 3.394 0 0 0 3.394 3.392h5.742c-.11.495-.246.98-.403 1.456m-14.866-17.768c-3.774 0-7.163 1.636-9.528 4.223-2.364-2.587-5.754-4.223-9.527-4.223-3.773 0-7.163 1.636-9.528 4.224-2.364-2.588-5.754-4.224-9.527-4.224-5.949 0-10.958 4.046-12.454 9.527H95.37v17.133a22.735 22.735 0 0 0 6.141 5.482 32.11 32.11 0 0 0-1.394 9.39c0 9.024 3.761 17.182 9.791 23.006-4.457 2.654-9.93 2.858-14.538.765v7.233a22.78 22.78 0 0 0 6.56.967c2.691 0 5.387-.478 7.944-1.442v10.603c0 .765.257 1.47.684 2.037h5.42a3.379 3.379 0 0 0 .683-2.037v-12.895h.418a31.798 31.798 0 0 0 15.041 3.766 31.8 31.8 0 0 0 15.042-3.766h.417v12.895c0 .765.256 1.47.683 2.037h5.42a3.379 3.379 0 0 0 .684-2.037v-10.605c4.665 1.76 9.787 1.887 14.504.468v-7.224c-4.607 2.092-10.08 1.887-14.537-.765 6.03-5.824 9.791-13.982 9.791-23.007 0-3.23-.477-6.386-1.394-9.389a22.716 22.716 0 0 0 6.14-5.482v-17.133h-5.242c-1.495-5.48-6.504-9.527-12.452-9.527M153.113 73.574c-2.754-7.23-9.153-12.626-16.778-14.104a22.188 22.188 0 0 0-4.216-.406c-1.436 0-2.846.141-4.216.406-7.625 1.478-14.024 6.874-16.778 14.104-4.988-2.237-10.612-2.525-15.756-.977v7.211a15.848 15.848 0 0 1 6.551-1.416 15.55 15.55 0 0 1 9.318 3.072 3.397 3.397 0 0 0 3.327.415 3.397 3.397 0 0 0 2.06-2.647c1.11-7.629 7.772-13.382 15.494-13.382 7.723 0 14.384 5.753 15.495 13.383A3.394 3.394 0 0 0 153 81.464c4.658-3.475 10.791-3.963 15.87-1.655v-7.212c-5.145-1.548-10.77-1.259-15.757.977"
      }), h("path", {
        fill: "#000000",
        d: "M122.592 130.5a3.394 3.394 0 1 0 .001 6.787 3.394 3.394 0 0 0-.001-6.787M141.647 130.5a3.394 3.394 0 1 0 0 6.787 3.394 3.394 0 0 0 0-6.787"
      }))));
    }
  }]);

  return Image;
}(m);

var Icon$1Z = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.4142 3.08579C23.7893 3.46086 24 3.96957 24 4.5V19.5C24 20.0304 23.7893 20.5391 23.4142 20.9142C23.0391 21.2893 22.5304 21.5 22 21.5H19H15.5H2C1.46957 21.5 0.960859 21.2893 0.585786 20.9142C0.210714 20.5391 0 20.0304 0 19.5V4.5C0 3.96957 0.210714 3.46086 0.585786 3.08579C0.960859 2.71071 1.46957 2.5 2 2.5H22C22.5304 2.5 23.0391 2.71071 23.4142 3.08579ZM12 6.82759C12 6.37052 12.3705 6 12.8276 6H14.3054C14.7625 6 15.133 6.37052 15.133 6.82759C15.133 7.28465 14.7625 7.65517 14.3054 7.65517H13.6552V8.30542C13.6552 8.76248 13.2846 9.133 12.8276 9.133C12.3705 9.133 12 8.76248 12 8.30542V6.82759ZM17.2609 6C16.8039 6 16.4333 6.37052 16.4333 6.82759V9.78325C16.4333 10.2403 16.8039 10.6108 17.2609 10.6108H20.2166C20.6737 10.6108 21.0442 10.2403 21.0442 9.78325V6.82759C21.0442 6.37052 20.6737 6 20.2166 6H17.2609ZM19.389 8.95566H18.0885V7.65517H19.389V8.95566ZM12 14.2167C12 13.7597 12.3705 13.3892 12.8276 13.3892H15.7832C16.2403 13.3892 16.6108 13.7597 16.6108 14.2167V17.1724C16.6108 17.6295 16.2403 18 15.7832 18H12.8276C12.3705 18 12 17.6295 12 17.1724V14.2167ZM13.6552 15.0443V16.3448H14.9557V15.0443H13.6552ZM12.8276 10.4335C12.3705 10.4335 12 10.804 12 11.2611C12 11.7181 12.3705 12.0887 12.8276 12.0887H15.7832C16.2403 12.0887 16.6108 11.7181 16.6108 11.2611C16.6108 10.804 16.2403 10.4335 15.7832 10.4335H12.8276ZM17.1722 12.7389C17.1722 12.2818 17.5427 11.9113 17.9998 11.9113H20.2165C20.6736 11.9113 21.0441 12.2818 21.0441 12.7389C21.0441 13.196 20.6736 13.5665 20.2165 13.5665H17.9998C17.5427 13.5665 17.1722 13.196 17.1722 12.7389ZM21.0441 15.6946C21.0441 15.2375 20.6736 14.867 20.2165 14.867C19.7595 14.867 19.389 15.2375 19.389 15.6946V16.3448H17.9998C17.5427 16.3448 17.1722 16.7153 17.1722 17.1724C17.1722 17.6295 17.5427 18 17.9998 18H20.2165C20.6736 18 21.0441 17.6295 21.0441 17.1724V15.6946Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1_ = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.888889 0C0.397969 0 0 0.397969 0 0.888889V6.81482C0 7.30574 0.397969 7.7037 0.888889 7.7037H6.81482C7.30574 7.7037 7.7037 7.30574 7.7037 6.81482V0.888889C7.7037 0.397969 7.30574 0 6.81482 0H0.888889ZM1.77778 5.92593V1.77778H5.92593V5.92593H1.77778ZM1.77778 12.7407C1.77778 12.2498 1.37981 11.8519 0.888889 11.8519C0.397969 11.8519 0 12.2498 0 12.7407V14.2222C0 14.7131 0.397969 15.1111 0.888889 15.1111H2.37037C2.86129 15.1111 3.25926 14.7131 3.25926 14.2222C3.25926 13.7313 2.86129 13.3333 2.37037 13.3333H1.77778V12.7407ZM16.2963 0.888889C16.2963 0.397969 16.6943 0 17.1852 0H23.1111C23.602 0 24 0.397969 24 0.888889V6.81482C24 7.30574 23.602 7.7037 23.1111 7.7037H17.1852C16.6943 7.7037 16.2963 7.30574 16.2963 6.81482V0.888889ZM22.2222 1.77778H18.0741V5.92593H22.2222V1.77778ZM0.888889 16.2963C0.397969 16.2963 0 16.6943 0 17.1852V23.1111C0 23.602 0.397969 24 0.888889 24H6.81482C7.30574 24 7.7037 23.602 7.7037 23.1111V17.1852C7.7037 16.6943 7.30574 16.2963 6.81482 16.2963H0.888889ZM1.77778 22.2222V18.0741H5.92593V22.2222H1.77778ZM11.1111 0.888889C11.1111 0.397969 11.5091 0 12 0H14.2222C14.7131 0 15.1111 0.397969 15.1111 0.888889C15.1111 1.37981 14.7131 1.77778 14.2222 1.77778H12C11.5091 1.77778 11.1111 1.37981 11.1111 0.888889ZM10.6667 0.888889C10.6667 0.397969 10.2687 0 9.77778 0C9.28686 0 8.88889 0.397969 8.88889 0.888889V3.85185C8.88889 4.34277 9.28686 4.74074 9.77778 4.74074H12C12.4909 4.74074 12.8889 4.34277 12.8889 3.85185C12.8889 3.36093 12.4909 2.96296 12 2.96296H10.6667V0.888889ZM14.2222 2.96296C14.7131 2.96296 15.1111 3.36093 15.1111 3.85185V6.81482C15.1111 7.30574 14.7131 7.7037 14.2222 7.7037H9.77778C9.28686 7.7037 8.88889 7.30574 8.88889 6.81482C8.88889 6.3239 9.28686 5.92593 9.77778 5.92593H13.3333V3.85185C13.3333 3.36093 13.7313 2.96296 14.2222 2.96296ZM0.888889 8.88889C0.397969 8.88889 0 9.28686 0 9.77778C0 10.2687 0.397969 10.6667 0.888889 10.6667H5.92593V11.2593C5.92593 11.7502 6.3239 12.1481 6.81482 12.1481C7.30574 12.1481 7.7037 11.7502 7.7037 11.2593V9.77778C7.7037 9.28686 7.30574 8.88889 6.81482 8.88889H0.888889ZM4.44444 14.2222C4.44444 13.7313 4.84241 13.3333 5.33333 13.3333H6.81482C7.30573 13.3333 7.7037 13.7313 7.7037 14.2222C7.7037 14.7131 7.30573 15.1111 6.81482 15.1111H5.33333C4.84241 15.1111 4.44444 14.7131 4.44444 14.2222ZM20.1481 16.2963C19.6572 16.2963 19.2593 16.6943 19.2593 17.1852C19.2593 17.6761 19.6572 18.0741 20.1481 18.0741H22.2222V19.2593H20.1481C19.6572 19.2593 19.2593 19.6572 19.2593 20.1481V23.1111C19.2593 23.602 19.6572 24 20.1481 24H23.1111C23.602 24 24 23.602 24 23.1111C24 22.6202 23.602 22.2222 23.1111 22.2222H21.037V21.037H23.1111C23.602 21.037 24 20.6391 24 20.1481V17.1852C24 16.6943 23.602 16.2963 23.1111 16.2963H20.1481ZM9.77778 16.2963C10.2687 16.2963 10.6667 16.6943 10.6667 17.1852V22.2222H14.2222C14.7131 22.2222 15.1111 22.6202 15.1111 23.1111C15.1111 23.602 14.7131 24 14.2222 24H9.77778C9.28686 24 8.88889 23.602 8.88889 23.1111V17.1852C8.88889 16.6943 9.28686 16.2963 9.77778 16.2963ZM18.0741 17.1852C18.0741 16.6943 17.6761 16.2963 17.1852 16.2963C16.6943 16.2963 16.2963 16.6943 16.2963 17.1852V23.1111C16.2963 23.602 16.6943 24 17.1852 24C17.6761 24 18.0741 23.602 18.0741 23.1111V17.1852ZM11.8519 17.1852C11.8519 16.6943 12.2498 16.2963 12.7407 16.2963H14.2222C14.7131 16.2963 15.1111 16.6943 15.1111 17.1852V20.1481C15.1111 20.6391 14.7131 21.037 14.2222 21.037H12.7407C12.2498 21.037 11.8519 20.6391 11.8519 20.1481C11.8519 19.6572 12.2498 19.2593 12.7407 19.2593H13.3333V18.0741H12.7407C12.2498 18.0741 11.8519 17.6761 11.8519 17.1852ZM10.6667 12.7407C10.6667 12.2498 10.2687 11.8519 9.77778 11.8519C9.28686 11.8519 8.88889 12.2498 8.88889 12.7407V14.2222C8.88889 14.7131 9.28686 15.1111 9.77778 15.1111H11.2593C11.7502 15.1111 12.1481 14.7131 12.1481 14.2222C12.1481 13.7313 11.7502 13.3333 11.2593 13.3333H10.6667V12.7407ZM13.3333 14.2222C13.3333 13.7313 13.7313 13.3333 14.2222 13.3333H14.8148V11.2593C14.8148 10.7683 15.2128 10.3704 15.7037 10.3704C16.1946 10.3704 16.5926 10.7683 16.5926 11.2593V13.3333H17.1852C17.6761 13.3333 18.0741 13.7313 18.0741 14.2222C18.0741 14.7131 17.6761 15.1111 17.1852 15.1111H15.705L15.7037 15.1111L15.7024 15.1111H14.2222C13.7313 15.1111 13.3333 14.7131 13.3333 14.2222ZM8.88889 9.77778C8.88889 9.28686 9.28686 8.88889 9.77778 8.88889H12.7407C13.2317 8.88889 13.6296 9.28686 13.6296 9.77778V11.2593C13.6296 11.7502 13.2317 12.1481 12.7407 12.1481C12.2498 12.1481 11.8519 11.7502 11.8519 11.2593V10.6667H9.77778C9.28686 10.6667 8.88889 10.2687 8.88889 9.77778ZM24 9.77778C24 9.28686 23.602 8.88889 23.1111 8.88889C22.6202 8.88889 22.2222 9.28686 22.2222 9.77778V11.2593C22.2222 11.7502 22.6202 12.1481 23.1111 12.1481C23.602 12.1481 24 11.7502 24 11.2593V9.77778ZM23.1111 12.5926C23.602 12.5926 24 12.9906 24 13.4815V14.2222C24 14.7131 23.602 15.1111 23.1111 15.1111C22.6202 15.1111 22.2222 14.7131 22.2222 14.2222V13.4815C22.2222 12.9906 22.6202 12.5926 23.1111 12.5926ZM19.5556 9.77778C19.5556 9.28686 19.1576 8.88889 18.6667 8.88889C18.1757 8.88889 17.7778 9.28686 17.7778 9.77778V11.2593C17.7778 11.7502 18.1757 12.1481 18.6667 12.1481H19.2593V13.4815C19.2593 13.9724 19.6572 14.3704 20.1481 14.3704C20.6391 14.3704 21.037 13.9724 21.037 13.4815V11.2593C21.037 10.7683 20.6391 10.3704 20.1481 10.3704H19.5556V9.77778Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$1$ = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M1 5H14C14.552 5 15 5.448 15 6V17C15 17.552 14.552 18 14 18H1C0.448 18 0 17.552 0 17V6C0 5.448 0.448 5 1 5ZM23.263 5.575C23.115 5.484 22.931 5.475 22.776 5.553L16.776 8.553C16.607 8.638 16.5 8.811 16.5 9.001V14.001C16.5 14.19 16.607 14.363 16.776 14.448L22.776 17.448C23.023 17.572 23.323 17.472 23.447 17.225C23.482 17.155 23.5 17.079 23.5 17.001V6.001C23.5 5.827 23.411 5.666 23.263 5.575Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$20 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M6.12834 5.96018C7.20775 4.8769 8.56536 4.11277 10.0515 3.75205C11.5376 3.39134 13.0944 3.44805 14.5503 3.91595C14.8686 4.01758 15.2143 3.98862 15.5112 3.83542C15.8081 3.68223 16.032 3.41735 16.1337 3.09906C16.2353 2.78077 16.2064 2.43514 16.0532 2.1382C15.9 1.84127 15.6351 1.61735 15.3168 1.51571C13.3545 0.887853 11.2539 0.832098 9.26103 1.35498C7.26817 1.87786 5.46554 2.95772 4.06425 4.46812C2.66296 5.97851 1.72102 7.85689 1.34875 9.88329C0.976473 11.9097 1.18927 14.0002 1.96222 15.91C1.98381 15.9637 1.98617 16.0231 1.96889 16.0783C1.9516 16.1334 1.91575 16.1809 1.86742 16.2126L0.455521 17.1424C0.288475 17.252 0.157717 17.4086 0.0798285 17.5926C0.0019396 17.7765 -0.0195716 17.9794 0.0180227 18.1756C0.0556171 18.3718 0.150623 18.5524 0.290994 18.6945C0.431365 18.8366 0.610777 18.9339 0.80648 18.9739L5.25094 19.8896C5.31728 19.9035 5.38487 19.9106 5.45264 19.9108C5.68496 19.9106 5.91009 19.8302 6.08998 19.6832C6.26988 19.5362 6.3935 19.3316 6.43997 19.104L7.36174 14.6605C7.40192 14.4652 7.3833 14.2624 7.30823 14.0776C7.23317 13.8929 7.10503 13.7346 6.94 13.6226C6.77497 13.5107 6.58047 13.4502 6.38107 13.4488C6.18168 13.4474 5.98633 13.5051 5.81974 13.6147L4.46936 14.5032C4.43683 14.5247 4.39976 14.5383 4.36108 14.543C4.32239 14.5478 4.28313 14.5435 4.24639 14.5305C4.20964 14.5175 4.17641 14.4961 4.1493 14.4681C4.1222 14.4401 4.10195 14.4062 4.09016 14.3691C3.62823 12.9151 3.574 11.3623 3.93338 9.87961C4.29275 8.39695 5.05195 7.04129 6.12834 5.96018Z",
        fill: "#00A0DF"
      }), h("path", {
        d: "M23.9843 5.62234C23.9508 5.42582 23.8599 5.24362 23.7229 5.09877C23.586 4.95391 23.4091 4.85289 23.2148 4.80848L18.7895 3.79998C18.6602 3.77012 18.5263 3.76606 18.3955 3.78804C18.2647 3.81002 18.1394 3.85759 18.027 3.92804C17.9146 3.99849 17.8172 4.09043 17.7404 4.1986C17.6635 4.30676 17.6088 4.42902 17.5793 4.55837L16.5708 8.98266C16.5265 9.17711 16.5408 9.38034 16.6119 9.56665C16.6831 9.75296 16.8079 9.91399 16.9706 10.0294C17.1332 10.1448 17.3265 10.2093 17.5258 10.2149C17.7252 10.2205 17.9217 10.1669 18.0906 10.0608L19.5459 9.14705C19.5779 9.12586 19.6145 9.11237 19.6526 9.10765C19.6907 9.10292 19.7295 9.10709 19.7657 9.11982C19.8019 9.13309 19.8346 9.15443 19.8614 9.18221C19.8881 9.20999 19.9082 9.24349 19.92 9.28017C20.3899 10.7297 20.4526 12.2804 20.1013 13.7631C19.75 15.2458 18.9983 16.6035 17.9281 17.6882C16.8579 18.7728 15.5104 19.5427 14.0325 19.9139C12.5547 20.285 11.0033 20.2431 9.5476 19.7928C9.38811 19.7389 9.21946 19.7176 9.05159 19.73C8.88372 19.7424 8.72003 19.7883 8.57018 19.865C8.42033 19.9416 8.28736 20.0475 8.1791 20.1764C8.07084 20.3053 7.98949 20.4546 7.93985 20.6154C7.89021 20.7763 7.87329 20.9454 7.89007 21.1129C7.90686 21.2804 7.95702 21.4428 8.03759 21.5906C8.11817 21.7384 8.22752 21.8686 8.35921 21.9734C8.49089 22.0783 8.64225 22.1557 8.80433 22.2011C10.7611 22.8063 12.8492 22.8448 14.827 22.3121C16.8047 21.7795 18.5911 20.6975 19.9793 19.1914C21.3674 17.6854 22.3006 15.8169 22.6706 13.8024C23.0406 11.7879 22.8325 9.70983 22.0702 7.80877C22.0491 7.75448 22.0477 7.69456 22.0661 7.63933C22.0845 7.5841 22.1216 7.53703 22.171 7.50622L23.5284 6.65303C23.6984 6.54612 23.8326 6.39092 23.9138 6.2073C23.995 6.02368 24.0195 5.82 23.9843 5.62234Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$21 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 3.5C9 5.433 7.433 7 5.5 7C3.567 7 2 5.433 2 3.5C2 1.567 3.567 0 5.5 0C7.433 0 9 1.567 9 3.5ZM0 17C0 17.1326 0.0526784 17.2598 0.146447 17.3536C0.240215 17.4473 0.367392 17.5 0.5 17.5H2.31C2.37265 17.5 2.433 17.5236 2.47912 17.566C2.52523 17.6084 2.55374 17.6666 2.559 17.729L3 23.042C3.01055 23.1672 3.06786 23.2839 3.1605 23.3687C3.25315 23.4536 3.37436 23.5005 3.5 23.5H7.5C7.62564 23.5005 7.74685 23.4536 7.8395 23.3687C7.93214 23.2839 7.98945 23.1672 8 23.042L8.443 17.729C8.44826 17.6666 8.47677 17.6084 8.52288 17.566C8.569 17.5236 8.62935 17.5 8.692 17.5H9.26C9.29405 17.5001 9.32776 17.4932 9.35905 17.4798C9.39035 17.4664 9.41857 17.4467 9.442 17.422C9.46534 17.397 9.48339 17.3676 9.49507 17.3355C9.50676 17.3033 9.51184 17.2692 9.51 17.235C9.51 17.1962 9.50801 17.1573 9.50602 17.1183L9.50602 17.1183C9.50401 17.079 9.502 17.0396 9.502 17C9.50079 15.4226 9.969 13.8805 10.847 12.57C10.8653 12.5423 10.8779 12.5113 10.8841 12.4786C10.8903 12.446 10.8899 12.4125 10.883 12.38C10.604 11.0492 9.84196 9.86885 8.74388 9.06687C7.6458 8.26488 6.28957 7.89809 4.93695 8.03729C3.58433 8.1765 2.33122 8.81182 1.4195 9.82064C0.507774 10.8295 0.00207188 12.1403 0 13.5V17ZM17.5 23.5C18.7856 23.5 20.0423 23.1188 21.1112 22.4046C22.1801 21.6903 23.0132 20.6752 23.5052 19.4874C23.9972 18.2997 24.1259 16.9928 23.8751 15.7319C23.6243 14.471 23.0052 13.3128 22.0962 12.4038C21.1872 11.4948 20.029 10.8757 18.7681 10.6249C17.5072 10.3741 16.2003 10.5028 15.0126 10.9948C13.8248 11.4868 12.8097 12.3199 12.0954 13.3888C11.3812 14.4577 11 15.7144 11 17C11.0021 18.7233 11.6876 20.3753 12.9061 21.5939C14.1247 22.8124 15.7767 23.4979 17.5 23.5ZM18.25 13C18.25 13.0663 18.2763 13.1299 18.3232 13.1768C18.3701 13.2237 18.4337 13.25 18.5 13.25H19C19.1989 13.25 19.3897 13.329 19.5303 13.4697C19.671 13.6103 19.75 13.8011 19.75 14C19.75 14.1989 19.671 14.3897 19.5303 14.5303C19.3897 14.671 19.1989 14.75 19 14.75H16.967C16.8297 14.7503 16.6968 14.7984 16.591 14.886C16.4852 14.9735 16.4132 15.0951 16.3872 15.2299C16.3612 15.3647 16.3829 15.5044 16.4485 15.625C16.5142 15.7456 16.6197 15.8396 16.747 15.891L18.81 16.716C19.228 16.8817 19.5813 17.1782 19.8169 17.5612C20.0526 17.9442 20.158 18.3932 20.1175 18.841C20.077 19.2889 19.8928 19.7116 19.5922 20.0461C19.2917 20.3806 18.891 20.609 18.45 20.697C18.3934 20.7084 18.3426 20.739 18.3061 20.7837C18.2696 20.8284 18.2498 20.8843 18.25 20.942V21.25C18.25 21.4489 18.171 21.6397 18.0303 21.7803C17.8897 21.921 17.6989 22 17.5 22C17.3011 22 17.1103 21.921 16.9697 21.7803C16.829 21.6397 16.75 21.4489 16.75 21.25V21C16.75 20.9337 16.7237 20.8701 16.6768 20.8232C16.6299 20.7763 16.5663 20.75 16.5 20.75H16C15.8011 20.75 15.6103 20.671 15.4697 20.5303C15.329 20.3897 15.25 20.1989 15.25 20C15.25 19.8011 15.329 19.6103 15.4697 19.4697C15.6103 19.329 15.8011 19.25 16 19.25H18.033C18.1703 19.2497 18.3032 19.2016 18.409 19.114C18.5148 19.0265 18.5868 18.9049 18.6128 18.7701C18.6388 18.6353 18.6171 18.4956 18.5515 18.375C18.4858 18.2544 18.3803 18.1604 18.253 18.109L16.19 17.284C15.772 17.1183 15.4187 16.8218 15.1831 16.4388C14.9474 16.0558 14.842 15.6068 14.8825 15.159C14.923 14.7111 15.1072 14.2884 15.4078 13.9539C15.7083 13.6194 16.109 13.391 16.55 13.303C16.6066 13.2917 16.6574 13.261 16.6939 13.2163C16.7304 13.1716 16.7502 13.1157 16.75 13.058V12.75C16.75 12.5511 16.829 12.3603 16.9697 12.2197C17.1103 12.079 17.3011 12 17.5 12C17.6989 12 17.8897 12.079 18.0303 12.2197C18.171 12.3603 18.25 12.5511 18.25 12.75V13Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$22 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.414 0.585786C23.789 0.960859 23.9998 1.46957 23.9998 2V18C23.9998 18.5304 23.789 19.0391 23.414 19.4142C23.0389 19.7893 22.5302 20 21.9998 20H13.4998C13.2345 20 12.9802 19.8946 12.7926 19.7071C12.6051 19.5196 12.4998 19.2652 12.4998 19C12.4998 18.7348 12.6051 18.4804 12.7926 18.2929C12.9802 18.1054 13.2345 18 13.4998 18H21.4998C21.6324 18 21.7595 17.9473 21.8533 17.8536C21.9471 17.7598 21.9998 17.6326 21.9998 17.5V2.5C21.9998 2.36739 21.9471 2.24021 21.8533 2.14645C21.7595 2.05268 21.6324 2 21.4998 2H6.49976C6.36715 2 6.23997 2.05268 6.1462 2.14645C6.05243 2.24021 5.99976 2.36739 5.99976 2.5V10.5C5.99976 10.7652 5.8944 11.0196 5.70686 11.2071C5.51933 11.3946 5.26497 11.5 4.99976 11.5C4.73454 11.5 4.48019 11.3946 4.29265 11.2071C4.10511 11.0196 3.99976 10.7652 3.99976 10.5V2C3.99976 1.46957 4.21047 0.960859 4.58554 0.585786C4.96062 0.210714 5.46932 0 5.99976 0H21.9998C22.5302 0 23.0389 0.210714 23.414 0.585786ZM1.75 22.5H2.25C2.44891 22.5 2.63968 22.579 2.78033 22.7197C2.92098 22.8603 3 23.0511 3 23.25C3 23.4489 2.92098 23.6397 2.78033 23.7803C2.63968 23.921 2.44891 24 2.25 24H0.75C0.551088 24 0.360322 23.921 0.21967 23.7803C0.0790176 23.6397 0 23.4489 0 23.25V21.75C0 21.5511 0.0790176 21.3603 0.21967 21.2197C0.360322 21.079 0.551088 21 0.75 21C0.948912 21 1.13968 21.079 1.28033 21.2197C1.42098 21.3603 1.5 21.5511 1.5 21.75V22.25C1.5 22.3163 1.52634 22.3799 1.57322 22.4268C1.62011 22.4737 1.6837 22.5 1.75 22.5ZM10.7498 21C10.5508 21 10.3601 21.079 10.2194 21.2197C10.0788 21.3603 9.99976 21.5511 9.99976 21.75V22.25C9.99976 22.3163 9.97342 22.3799 9.92653 22.4268C9.87965 22.4737 9.81606 22.5 9.74976 22.5H9.24976C9.05084 22.5 8.86008 22.579 8.71943 22.7197C8.57877 22.8603 8.49976 23.0511 8.49976 23.25C8.49976 23.4489 8.57877 23.6397 8.71943 23.7803C8.86008 23.921 9.05084 24 9.24976 24H10.7498C10.9487 24 11.1394 23.921 11.2801 23.7803C11.4207 23.6397 11.4998 23.4489 11.4998 23.25V21.75C11.4998 21.5511 11.4207 21.3603 11.2801 21.2197C11.1394 21.079 10.9487 21 10.7498 21ZM0.75 12.5H2.25C2.44891 12.5 2.63968 12.579 2.78033 12.7196C2.92098 12.8603 3 13.0511 3 13.25C3 13.4489 2.92098 13.6396 2.78033 13.7803C2.63968 13.921 2.44891 14 2.25 14H1.75C1.6837 14 1.62011 14.0263 1.57322 14.0732C1.52634 14.1201 1.5 14.1837 1.5 14.25V14.75C1.5 14.9489 1.42098 15.1396 1.28033 15.2803C1.13968 15.421 0.948912 15.5 0.75 15.5C0.551088 15.5 0.360322 15.421 0.21967 15.2803C0.0790176 15.1396 0 14.9489 0 14.75V13.25C0 13.0511 0.0790176 12.8603 0.21967 12.7196C0.360322 12.579 0.551088 12.5 0.75 12.5ZM10.7498 12.5H9.24976C9.05084 12.5 8.86008 12.579 8.71943 12.7196C8.57877 12.8603 8.49976 13.0511 8.49976 13.25C8.49976 13.4489 8.57877 13.6396 8.71943 13.7803C8.86008 13.921 9.05084 14 9.24976 14H9.74976C9.81606 14 9.87965 14.0263 9.92653 14.0732C9.97342 14.1201 9.99976 14.1837 9.99976 14.25V14.75C9.99976 14.9489 10.0788 15.1396 10.2194 15.2803C10.3601 15.421 10.5508 15.5 10.7498 15.5C10.9487 15.5 11.1394 15.421 11.2801 15.2803C11.4207 15.1396 11.4998 14.9489 11.4998 14.75V13.25C11.4998 13.0511 11.4207 12.8603 11.2801 12.7196C11.1394 12.579 10.9487 12.5 10.7498 12.5ZM1.28033 19.2803C1.13968 19.421 0.948912 19.5 0.75 19.5C0.551088 19.5 0.360322 19.421 0.21967 19.2803C0.0790176 19.1396 0 18.9489 0 18.75V17.75C0 17.5511 0.0790176 17.3603 0.21967 17.2196C0.360322 17.079 0.551088 17 0.75 17C0.948912 17 1.13968 17.079 1.28033 17.2196C1.42098 17.3603 1.5 17.5511 1.5 17.75V18.75C1.5 18.9489 1.42098 19.1396 1.28033 19.2803ZM10.7498 17C10.5508 17 10.3601 17.079 10.2194 17.2196C10.0788 17.3603 9.99976 17.5511 9.99976 17.75V18.75C9.99976 18.9489 10.0788 19.1396 10.2194 19.2803C10.3601 19.421 10.5508 19.5 10.7498 19.5C10.9487 19.5 11.1394 19.421 11.2801 19.2803C11.4207 19.1396 11.4998 18.9489 11.4998 18.75V17.75C11.4998 17.5511 11.4207 17.3603 11.2801 17.2196C11.1394 17.079 10.9487 17 10.7498 17ZM5.25 22.5H6.25C6.44891 22.5 6.63968 22.579 6.78033 22.7197C6.92098 22.8603 7 23.0511 7 23.25C7 23.4489 6.92098 23.6397 6.78033 23.7803C6.63968 23.921 6.44891 24 6.25 24H5.25C5.05109 24 4.86032 23.921 4.71967 23.7803C4.57902 23.6397 4.5 23.4489 4.5 23.25C4.5 23.0511 4.57902 22.8603 4.71967 22.7197C4.86032 22.579 5.05109 22.5 5.25 22.5ZM6.25 12.5H5.25C5.05109 12.5 4.86032 12.579 4.71967 12.7196C4.57902 12.8603 4.5 13.0511 4.5 13.25C4.5 13.4489 4.57902 13.6396 4.71967 13.7803C4.86032 13.921 5.05109 14 5.25 14H6.25C6.44891 14 6.63968 13.921 6.78033 13.7803C6.92098 13.6396 7 13.4489 7 13.25C7 13.0511 6.92098 12.8603 6.78033 12.7196C6.63968 12.579 6.44891 12.5 6.25 12.5ZM18.9161 11.6234C18.7929 11.7058 18.648 11.7499 18.4998 11.75H12.9998C12.8008 11.75 12.6101 11.671 12.4694 11.5304C12.3288 11.3897 12.2498 11.1989 12.2498 11V5.50002C12.2499 5.35178 12.2939 5.20691 12.3764 5.08369C12.4588 4.96047 12.5759 4.86445 12.7128 4.80774C12.8498 4.75102 13.0005 4.73617 13.1459 4.76506C13.2913 4.79394 13.4249 4.86527 13.5298 4.97002L15.3958 6.83602C15.419 6.8593 15.4466 6.87778 15.4769 6.89038C15.5073 6.90298 15.5399 6.90947 15.5728 6.90947C15.6056 6.90947 15.6382 6.90298 15.6686 6.89038C15.6989 6.87778 15.7265 6.8593 15.7498 6.83602L18.2928 4.28902C18.385 4.19351 18.4953 4.11733 18.6174 4.06492C18.7394 4.01251 18.8706 3.98493 19.0034 3.98377C19.1361 3.98262 19.2678 4.00792 19.3907 4.0582C19.5136 4.10848 19.6253 4.18273 19.7192 4.27663C19.813 4.37052 19.8873 4.48217 19.9376 4.60507C19.9879 4.72796 20.0132 4.85964 20.012 4.99242C20.0109 5.1252 19.9833 5.25642 19.9309 5.37843C19.8784 5.50043 19.8023 5.61078 19.7068 5.70302L17.1638 8.24602C17.1405 8.26925 17.122 8.29683 17.1094 8.32721C17.0968 8.35758 17.0903 8.39014 17.0903 8.42302C17.0903 8.45591 17.0968 8.48847 17.1094 8.51884C17.122 8.54921 17.1405 8.5768 17.1638 8.60002L19.0298 10.47C19.1345 10.5749 19.2058 10.7085 19.2347 10.8539C19.2636 10.9993 19.2488 11.15 19.192 11.2869C19.1353 11.4239 19.0393 11.541 18.9161 11.6234Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$23 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.839 6.21478C22.4819 4.04319 20.3279 2.48981 17.839 1.88778V0.748784C17.8387 0.609071 17.7995 0.472198 17.7257 0.353595C17.6518 0.234991 17.5463 0.139371 17.421 0.0775141C17.2958 0.0156569 17.1557 -0.00997855 17.0166 0.00349722C16.8776 0.016973 16.745 0.0690243 16.634 0.153784L14.034 2.15378C13.9429 2.22383 13.8691 2.31387 13.8184 2.41695C13.7676 2.52002 13.7412 2.63339 13.7412 2.74828C13.7412 2.86318 13.7676 2.97654 13.8184 3.07962C13.8691 3.1827 13.9429 3.27274 14.034 3.34278L16.634 5.34278C16.7457 5.42679 16.8783 5.47856 17.0174 5.49249C17.1565 5.50642 17.2968 5.48196 17.423 5.42178C17.5488 5.36004 17.6547 5.26423 17.7288 5.14526C17.8029 5.02629 17.8421 4.88893 17.842 4.74878V3.95778C19.6277 4.51272 21.1549 5.69008 22.146 7.27578C22.2895 7.49759 22.5139 7.65461 22.7715 7.71345C23.029 7.77228 23.2994 7.72827 23.525 7.59078C23.7487 7.44959 23.9073 7.22552 23.9661 6.96763C24.025 6.70974 23.9793 6.43904 23.839 6.21478ZM9.92012 20.805L9.9201 20.8049C9.90851 20.7955 9.89708 20.7861 9.88601 20.7768L7.62001 19.0218C7.40901 18.8588 7.14401 18.6858 6.89501 18.7818C6.78557 18.8428 6.69656 18.9347 6.63911 19.0461C6.58166 19.1574 6.55832 19.2832 6.57201 19.4078C6.60393 19.6562 6.60895 19.9073 6.58701 20.1568C4.78078 19.7133 3.19532 18.6327 2.12201 17.1138C1.95578 16.8208 1.72619 16.5687 1.45001 16.3758C1.28771 16.2884 1.1044 16.2475 0.920336 16.2578C0.736275 16.268 0.558625 16.3289 0.407012 16.4338C0.258791 16.5429 0.143576 16.6909 0.074057 16.8613C0.00453822 17.0318 -0.0165859 17.2181 0.0130116 17.3998C0.0712227 17.6417 0.179182 17.8689 0.330012 18.0668C1.79681 20.2089 4.04177 21.694 6.58701 22.2058C6.60429 22.5128 6.59861 22.8206 6.57001 23.1268C6.57096 23.2455 6.60235 23.362 6.66118 23.4651C6.72 23.5682 6.8043 23.6545 6.90601 23.7158C7.15816 23.8303 7.38216 23.6565 7.57564 23.5064L7.62301 23.4698L9.81001 21.7878C10.01 21.6308 10.239 21.4198 10.193 21.1678C10.1613 21.0447 10.0882 20.9363 9.98601 20.8608C9.96444 20.8412 9.94201 20.8228 9.92012 20.805ZM10.0539 1.87068C10.3572 1.99636 10.6329 2.18056 10.865 2.41278L20.33 11.8768C20.5622 12.1089 20.7465 12.3846 20.8721 12.6879C20.9978 12.9913 21.0625 13.3164 21.0625 13.6448C21.0625 13.9731 20.9978 14.2983 20.8721 14.6016C20.7465 14.905 20.5622 15.1806 20.33 15.4128L15.395 20.3478C14.9262 20.8165 14.2904 21.0797 13.6275 21.0797C12.9646 21.0797 12.3288 20.8165 11.86 20.3478L2.39603 10.8838C1.92735 10.415 1.66406 9.77919 1.66406 9.11628C1.66406 8.45337 1.92735 7.8176 2.39603 7.34878L7.32903 2.41278C7.56118 2.18056 7.83681 1.99636 8.14017 1.87068C8.44353 1.745 8.76867 1.68031 9.09703 1.68031C9.42539 1.68031 9.75053 1.745 10.0539 1.87068ZM17.127 11.3238L10.127 4.32378C9.9395 4.13631 9.68519 4.03099 9.42003 4.03099C9.15486 4.03099 8.90056 4.13631 8.71303 4.32378L4.30403 8.73278C4.21105 8.82565 4.13729 8.93594 4.08697 9.05734C4.03664 9.17874 4.01074 9.30886 4.01074 9.44028C4.01074 9.57169 4.03664 9.70182 4.08697 9.82322C4.13729 9.94462 4.21105 10.0549 4.30403 10.1478L11.304 17.1478C11.4916 17.3353 11.7459 17.4406 12.011 17.4406C12.2762 17.4406 12.5305 17.3353 12.718 17.1478L17.127 12.7378C17.3145 12.5503 17.4198 12.2959 17.4198 12.0308C17.4198 11.7656 17.3145 11.5113 17.127 11.3238Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$24 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#333333",
        fillRule: "nonzero",
        d: "M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$25 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M8.464 2.129c3.409-1.216 7.305-.63 10.218 1.775l1.06-1.061c-4.716-3.995-11.78-3.776-16.227.672l-.446.488h5.388l.007-1.874zM3.501 6.004A1.49 1.49 0 0 0 2 7.503v8.994a1.49 1.49 0 0 0 1.5 1.5h16.998a1.49 1.49 0 0 0 1.5-1.5V7.503a1.49 1.49 0 0 0-1.5-1.5H3.501zm16.998 10.493H3.501V7.503h16.998v8.994zm-4.963 5.374a10.487 10.487 0 0 1-10.218-1.775l-1.06 1.061c4.716 3.995 11.78 3.776 16.227-.672l.446-.488h-5.388l-.007 1.874z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$26 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M21.871 8.464c1.216 3.409.63 7.305-1.775 10.218l1.061 1.06c3.995-4.716 3.776-11.78-.672-16.227l-.488-.446v5.388l1.874.007zm-3.875-4.963A1.49 1.49 0 0 0 16.497 2H7.503a1.49 1.49 0 0 0-1.5 1.5v16.998a1.49 1.49 0 0 0 1.5 1.5h8.994a1.49 1.49 0 0 0 1.5-1.5V3.501zM7.503 20.499V3.501h8.994v16.998H7.503zm-5.374-4.963A10.487 10.487 0 0 1 3.904 5.318l-1.061-1.06c-3.995 4.716-3.776 11.78.672 16.227l.488.446v-5.388l-1.874-.007z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$27 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M17.2976 14.3517C13.3079 14.3517 9.94203 11.3837 9.44332 7.42523C9.42717 7.29197 9.30905 7.19505 9.17579 7.20414C8.82043 7.22736 8.46607 7.27077 8.11576 7.33538C7.30812 6.21074 5.89274 5.69789 4.55205 6.04518C4.06848 6.17743 3.78278 6.67715 3.91604 7.16174C3.95945 7.31923 4.04324 7.46157 4.16035 7.57464C4.42283 7.82198 4.62474 8.12586 4.75094 8.46305C4.79132 8.57107 4.75396 8.69221 4.65907 8.75783C3.26993 9.68157 2.2624 11.0778 1.82324 12.687C1.79498 12.7991 1.69402 12.8778 1.57893 12.8768H1.31241C0.587557 12.8768 0 13.4643 0 14.1892V15.8216C0 16.5465 0.587557 17.1341 1.31241 17.1341H2.24725C2.33811 17.1341 2.42191 17.1825 2.46734 17.2613C3.07912 18.3021 3.93522 19.1774 4.96294 19.8114L4.2078 22.419C4.01699 23.0742 4.39356 23.7587 5.04774 23.9495L5.05077 23.9505C5.16283 23.9838 5.27893 24 5.39604 24C5.94624 24 6.43082 23.6356 6.58327 23.1066L7.17183 21.0733C7.2102 20.9441 7.34346 20.8674 7.4747 20.8997C9.05262 21.3207 10.7123 21.3227 12.2913 20.9047C12.4225 20.8724 12.5558 20.9491 12.5941 21.0784L13.1898 23.1066C13.3422 23.6356 13.8258 23.999 14.376 24C14.4931 24 14.6092 23.9838 14.7212 23.9505C15.3764 23.7617 15.755 23.0783 15.5662 22.4221L15.5652 22.419L14.8585 19.9961C14.8272 19.8901 14.8686 19.7771 14.9595 19.7155C16.7504 18.5959 17.9165 16.704 18.1123 14.6011C18.1214 14.4618 18.0164 14.3416 17.8771 14.3326C17.866 14.3316 17.8539 14.3316 17.8428 14.3326C17.6661 14.3447 17.4824 14.3517 17.2976 14.3517ZM4.08463 12.9666C4.08766 12.4679 4.49451 12.0671 4.99323 12.0702C5.49194 12.0732 5.89274 12.48 5.88971 12.9788C5.88668 13.4744 5.48286 13.8752 4.98717 13.8752C4.48744 13.8722 4.08463 13.4664 4.08463 12.9666ZM17.2976 12.8677C20.8512 12.8677 23.7315 9.98746 23.7315 6.43385C23.7315 2.88024 20.8512 0 17.2976 0C13.744 0 10.8638 2.88024 10.8638 6.43385C10.8678 9.98545 13.746 12.8637 17.2976 12.8677ZM18.0396 2.46936C18.0396 2.60867 18.1527 2.72174 18.292 2.72174H18.7816C19.1915 2.73689 19.5115 3.08114 19.4964 3.49203C19.4823 3.88071 19.1703 4.19266 18.7816 4.20679H16.7696C16.4466 4.20275 16.18 4.46119 16.176 4.78425C16.173 5.02957 16.3224 5.25066 16.5505 5.33849L18.5939 6.15623C19.6519 6.57822 20.1677 7.77756 19.7468 8.83557C19.4893 9.48168 18.923 9.95516 18.2415 10.0935C18.1244 10.1177 18.0396 10.2207 18.0396 10.3408V10.6437C18.0245 11.0535 17.6802 11.3736 17.2693 11.3584C16.8807 11.3443 16.5687 11.0323 16.5546 10.6437V10.4014C16.5546 10.2621 16.4415 10.149 16.3022 10.149H15.8126C15.4027 10.1338 15.0827 9.78959 15.0978 9.37871C15.1119 8.99003 15.4239 8.67808 15.8126 8.66395H17.8226C18.1456 8.66395 18.4081 8.40247 18.4081 8.07841C18.4081 7.83914 18.2627 7.62411 18.0416 7.53527L16.0054 6.71451C14.9474 6.29252 14.4315 5.09317 14.8535 4.03517C15.1109 3.38906 15.6773 2.91558 16.3587 2.77727C16.4758 2.75405 16.5606 2.65107 16.5606 2.53094V2.22807C16.5455 1.8182 16.8655 1.47293 17.2754 1.45779C17.6853 1.44264 18.0305 1.76267 18.0457 2.17255C18.0467 2.19072 18.0467 2.20889 18.0457 2.22706L18.0396 2.46936Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$28 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.256 22.037L3.84 22C4.392 22 4.84 22.448 4.84 23C4.84 23.552 4.392 24 3.84 24H1.957C0.876 24 0 23.124 0 22.043V20.16C0 19.608 0.448 19.16 1 19.16C1.552 19.16 2 19.608 2 20.16V21.787V21.791C2.003 21.93 2.117 22.04 2.256 22.037ZM2 3.84C2 4.392 1.552 4.84 1 4.84C0.448 4.84 0 4.392 0 3.84V1.956C0 0.876 0.876 0 1.956 0H3.84C4.392 0 4.84 0.448 4.84 1C4.84 1.552 4.392 2 3.84 2H2.212H2.208C2.069 2.003 1.959 2.117 1.962 2.256L2 3.84ZM20.16 0H22.043C23.124 0 24 0.876 24 1.957V3.84C24 4.392 23.552 4.84 23 4.84C22.448 4.84 22 4.392 22 3.84V2.213V2.209C21.997 2.07 21.883 1.96 21.744 1.963L20.16 2C19.608 2 19.16 1.552 19.16 1C19.16 0.448 19.608 0 20.16 0ZM22 20.16C22 19.608 22.448 19.16 23 19.16C23.552 19.16 24 19.608 24 20.16V22.044C24 23.124 23.124 24 22.044 24H20.16C19.608 24 19.16 23.552 19.16 23C19.16 22.448 19.608 22 20.16 22H21.788H21.792C21.931 21.997 22.041 21.883 22.038 21.744L22 20.16ZM6 5.8H8C8.11046 5.8 8.2 5.88954 8.2 6V8C8.2 8.11046 8.11046 8.2 8 8.2H6C5.88954 8.2 5.8 8.11046 5.8 8V6C5.8 5.88954 5.88954 5.8 6 5.8ZM4 6C4 4.89543 4.89543 4 6 4H8C9.10457 4 10 4.89543 10 6V8C10 9.10457 9.10457 10 8 10H6C4.89543 10 4 9.10457 4 8V6ZM18 5.8H16C15.8895 5.8 15.8 5.88954 15.8 6V8C15.8 8.11046 15.8895 8.2 16 8.2H18C18.1105 8.2 18.2 8.11046 18.2 8V6C18.2 5.88954 18.1105 5.8 18 5.8ZM16 4C14.8954 4 14 4.89543 14 6V8C14 9.10457 14.8954 10 16 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4H16ZM16 15.8H18C18.1105 15.8 18.2 15.8895 18.2 16V18C18.2 18.1105 18.1105 18.2 18 18.2H16C15.8895 18.2 15.8 18.1105 15.8 18V16C15.8 15.8895 15.8895 15.8 16 15.8ZM14 16C14 14.8954 14.8954 14 16 14H18C19.1046 14 20 14.8954 20 16V18C20 19.1046 19.1046 20 18 20H16C14.8954 20 14 19.1046 14 18V16ZM8 15.8H6C5.88954 15.8 5.8 15.8895 5.8 16V18C5.8 18.1105 5.88954 18.2 6 18.2H8C8.11046 18.2 8.2 18.1105 8.2 18V16C8.2 15.8895 8.11046 15.8 8 15.8ZM6 14C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H8C9.10457 20 10 19.1046 10 18V16C10 14.8954 9.10457 14 8 14H6ZM12.9 4.99998C12.9 4.50292 12.497 4.09998 12 4.09998C11.5029 4.09998 11.1 4.50292 11.1 4.99998V9.99998C11.1 10.6075 10.6075 11.1 9.99998 11.1H4.99998C4.50292 11.1 4.09998 11.5029 4.09998 12C4.09998 12.497 4.50292 12.9 4.99998 12.9H9.99998C11.6016 12.9 12.9 11.6016 12.9 9.99998V4.99998ZM12 14.1C12.497 14.1 12.9 14.5029 12.9 15V19C12.9 19.497 12.497 19.9 12 19.9C11.5029 19.9 11.1 19.497 11.1 19V15C11.1 14.5029 11.5029 14.1 12 14.1ZM15 11.1C14.5029 11.1 14.1 11.5029 14.1 12C14.1 12.497 14.5029 12.9 15 12.9H19C19.497 12.9 19.9 12.497 19.9 12C19.9 11.5029 19.497 11.1 19 11.1H15Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$7 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        width: "360",
        height: "264",
        viewBox: "0 0 360 264",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M151.379 213.052C151.379 214.679 152.71 216 154.35 216H157.153C158.793 216 160.123 214.679 160.123 213.052V186.501H151.379V213.052Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M199.96 186.501V213.052C199.96 214.679 201.289 216 202.929 216H205.734C207.374 216 208.703 214.679 208.703 213.052V186.501H199.96Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M240.111 150.745C238.756 151.092 237.644 152.049 237.109 153.331L236.042 155.883C235.508 157.165 235.613 158.622 236.322 159.818C240.923 167.557 239.74 177.682 233.213 184.157C226.178 191.138 214.87 191.958 206.904 186.067L204.291 185.206H155.707L153.094 186.067C145.134 191.96 133.822 191.138 126.789 184.157C120.26 177.68 119.077 167.557 123.678 159.818C124.391 158.624 124.496 157.165 123.958 155.883L122.893 153.331C122.36 152.049 121.246 151.092 119.89 150.745C111.123 148.503 104.744 140.512 104.744 131.354C104.744 122.197 111.123 114.207 119.89 111.964C121.246 111.617 122.36 110.66 122.893 109.378L123.958 106.826C124.496 105.542 124.391 104.085 123.678 102.89C119.077 95.154 120.262 85.0289 126.789 78.5519C130.677 74.692 135.873 72.714 141.09 72.714C144.607 72.714 148.131 73.6138 151.27 75.4408C152.491 76.1524 153.971 76.2818 155.281 75.7427L157.851 74.6861C159.145 74.1568 160.109 73.0531 160.459 71.7083C162.719 63.0084 170.771 56.6804 179.999 56.6804C189.229 56.6804 197.281 63.0084 199.543 71.7083C199.893 73.0531 200.857 74.1549 202.149 74.6861L204.719 75.7427C206.011 76.274 207.479 76.1701 208.686 75.4663C216.482 70.9007 226.686 72.0749 233.213 78.5519C239.74 85.0269 240.923 95.1521 236.322 102.891C235.613 104.087 235.508 105.544 236.042 106.826L237.109 109.378C237.644 110.66 238.756 111.617 240.111 111.964C248.877 114.207 255.256 122.197 255.256 131.354C255.256 140.512 248.877 148.503 240.111 150.745ZM245.307 104.513C250.116 93.8641 247.982 80.9357 239.398 72.4141C230.811 63.8944 217.782 61.7773 207.05 66.5527C202.864 55.6473 192.143 48 179.999 48C167.859 48 157.136 55.6473 152.95 66.5527C142.218 61.7773 129.191 63.8944 120.604 72.4141C112.018 80.9357 109.886 93.8661 114.695 104.513C103.705 108.667 96 119.305 96 131.354C96 143.404 103.705 154.043 114.695 158.197C109.882 168.843 112.016 181.774 120.604 190.293C126.179 195.825 133.627 198.658 141.102 198.658C146.669 198.656 152.258 197.084 157.094 193.885H202.906C214.236 201.381 229.667 199.948 239.398 190.293C247.982 181.776 250.116 168.845 245.307 158.197C256.295 154.043 264 143.404 264 131.354C264 119.305 256.295 108.667 245.307 104.513Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M240.111 111.964C238.756 111.617 237.644 110.66 237.109 109.378L236.042 106.826C235.508 105.544 235.613 104.087 236.322 102.891C240.923 95.1519 239.74 85.0268 233.213 78.5517C226.685 72.0748 216.482 70.9005 208.686 75.4662C207.479 76.1719 206.011 76.2738 204.719 75.7426L202.147 74.686C200.857 74.1547 199.893 73.053 199.543 71.7082C197.281 63.0082 189.229 56.6802 179.999 56.6802C170.771 56.6802 162.719 63.0082 160.459 71.7082C160.109 73.053 159.145 74.1567 157.851 74.686L155.281 75.7426C153.971 76.2817 152.491 76.1523 151.27 75.4426C148.131 73.6137 144.607 72.7158 141.09 72.7158C135.873 72.7158 130.677 74.6918 126.789 78.5517C120.262 85.0287 119.076 95.1539 123.678 102.891C124.391 104.085 124.495 105.544 123.958 106.826L122.893 109.378C122.36 110.66 121.246 111.617 119.89 111.964C111.123 114.206 104.744 122.197 104.744 131.355C104.744 140.512 111.123 148.503 119.89 150.745C121.246 151.092 122.358 152.049 122.893 153.331L123.958 155.883C124.495 157.167 124.391 158.624 123.678 159.82C119.076 167.557 120.26 177.68 126.789 184.157C133.822 191.14 145.134 191.961 153.094 186.067L155.707 185.206H204.29L206.904 186.067C214.87 191.959 226.178 191.14 233.213 184.157C239.74 177.682 240.923 167.557 236.322 159.818C235.613 158.622 235.508 157.165 236.042 155.883L237.109 153.331C237.644 152.049 238.756 151.092 240.111 150.745C248.877 148.503 255.256 140.512 255.256 131.355C255.256 122.197 248.877 114.206 240.111 111.964Z",
        fill: "white"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M215.94 138.998C214.116 135.795 211.852 132.813 209.158 130.139L208.166 129.155C207.008 128.005 205.126 128.005 203.966 129.155L201.984 131.123C200.825 132.274 200.825 134.14 201.984 135.291L202.976 136.275C209.112 142.366 212.492 150.462 212.492 159.074C212.492 176.68 198.197 191.033 180.516 191.31C162.574 191.59 147.508 176.88 147.508 159.074C147.508 150.462 150.888 142.366 157.026 136.275L158.018 135.291C159.178 134.14 159.178 132.274 158.018 131.123L156.033 129.155C154.873 128.005 152.992 128.005 151.833 129.155L150.841 130.139C148.148 132.813 145.884 135.795 144.061 138.998C139.904 136.152 136.882 131.808 135.756 126.83H144.576C146.216 126.83 147.546 125.513 147.546 123.884V122.492C147.546 118.162 151.084 114.651 155.45 114.651C159.073 114.651 162.121 117.074 163.052 120.375C163.408 121.633 164.581 122.49 165.897 122.49H169.552C170.867 122.49 172.041 121.633 172.396 120.375C173.329 117.074 176.375 114.651 180 114.651C183.625 114.651 186.674 117.074 187.602 120.375C187.958 121.633 189.133 122.49 190.449 122.49H194.102C195.418 122.49 196.593 121.633 196.949 120.375C197.877 117.074 200.926 114.651 204.551 114.651C208.915 114.651 212.453 118.162 212.453 122.492V123.884C212.453 125.513 213.782 126.83 215.424 126.83H224.245C223.117 131.808 220.096 136.152 215.94 138.998Z",
        fill: "white"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M167.766 138.807C165.306 138.807 163.311 140.785 163.311 143.228C163.311 145.668 165.306 147.646 167.766 147.646C170.226 147.646 172.221 145.668 172.221 143.228C172.221 140.785 170.226 138.807 167.766 138.807Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M187.423 182.91C187.423 186.98 184.098 190.277 179.999 190.277C175.9 190.277 172.575 186.98 172.575 182.91H187.423Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M215.94 137.706C214.116 134.503 211.852 131.521 209.158 128.847L208.166 127.863C207.008 126.712 205.126 126.712 203.966 127.863L201.984 129.831C200.825 130.982 200.825 132.848 201.984 133.999L202.976 134.983C209.112 141.074 212.492 149.17 212.492 157.782C212.492 175.388 198.197 189.741 180.516 190.018C162.574 190.298 147.508 175.588 147.508 157.782C147.508 149.17 150.888 141.074 157.027 134.983L158.018 133.999C159.178 132.848 159.178 130.982 158.018 129.831L156.033 127.863C154.873 126.712 152.992 126.712 151.833 127.863L150.841 128.847C148.148 131.521 145.884 134.503 144.061 137.706C139.904 134.86 136.882 130.515 135.756 125.538H144.576C146.216 125.538 147.546 124.221 147.546 122.592V121.2C147.546 116.87 151.084 113.359 155.45 113.359C159.073 113.359 162.121 115.782 163.052 119.083C163.408 120.341 164.581 121.198 165.897 121.198H169.552C170.867 121.198 172.041 120.341 172.396 119.083C173.329 115.782 176.375 113.359 180 113.359C183.626 113.359 186.674 115.782 187.602 119.083C187.958 120.341 189.133 121.198 190.449 121.198H194.102C195.418 121.198 196.593 120.341 196.949 119.083C197.877 115.782 200.926 113.359 204.551 113.359C208.915 113.359 212.453 116.87 212.453 121.2V122.592C212.453 124.221 213.782 125.538 215.424 125.538H224.245C223.117 130.515 220.096 134.86 215.94 137.706ZM230.506 116.86H220.616C218.692 109.85 212.218 104.68 204.551 104.68C199.697 104.68 195.319 106.752 192.275 110.051C189.23 106.752 184.854 104.68 180 104.68C175.146 104.68 170.771 106.752 167.724 110.051C164.68 106.752 160.302 104.68 155.448 104.68C147.781 104.68 141.309 109.85 139.383 116.86H129.495C127.855 116.86 126.526 118.181 126.526 119.808V121.2C126.526 131.46 132.128 140.678 140.574 145.759C139.314 149.848 138.687 154.155 138.77 158.566C139.187 180.835 157.805 198.833 180.255 198.701C202.875 198.563 221.238 180.261 221.238 157.782C221.238 153.64 220.618 149.593 219.431 145.745C219.431 145.747 219.433 145.751 219.435 145.753C227.874 140.672 233.475 131.458 233.475 121.2V119.808C233.475 118.181 232.145 116.86 230.506 116.86Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M198.608 146.288H186.589C184.884 146.288 183.502 144.915 183.502 143.225C183.502 141.535 184.884 140.162 186.589 140.162H198.608C200.311 140.162 201.695 141.535 201.695 143.225C201.695 144.915 200.311 146.288 198.608 146.288Z",
        fill: "#19194B"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M247.999 96C265.673 96 280 81.6731 280 64C280 46.3269 265.673 32 247.999 32C230.328 32 216 46.3269 216 64C216 81.6731 230.328 96 247.999 96Z",
        fill: "#66DE7D"
      }), h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M242.08 80.33C240.984 80.33 239.935 79.8862 239.171 79.1L227.818 67.4405C226.253 65.8331 226.287 63.261 227.894 61.6958C229.501 60.1317 232.074 60.1631 233.638 61.7717L242.08 70.4443L261.877 50.1098C263.442 48.5024 266.014 48.4698 267.62 50.0338C269.227 51.5991 269.262 54.1712 267.696 55.7786L244.991 79.1C244.227 79.8862 243.176 80.33 242.08 80.33Z",
        fill: "white"
      })));
    }
  }]);

  return Image;
}(m);

var Icon$29 = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M24.4135 21.591L19.7685 16.946C21.1828 14.8289 21.7591 12.2614 21.3852 9.74287C21.0113 7.22438 19.714 4.935 17.7456 3.32004C15.7773 1.70509 13.2785 0.880032 10.7355 1.00536C8.19253 1.13069 5.78706 2.19745 3.98702 3.99812C2.18697 5.7988 1.12107 8.20465 0.996639 10.7477C0.872208 13.2908 1.69815 15.7892 3.3138 17.757C4.92945 19.7248 7.21929 21.0213 9.73791 21.3943C12.2565 21.7673 14.8239 21.1901 16.9405 19.775L21.5855 24.419C21.9637 24.788 22.4711 24.9945 22.9995 24.9945C23.5278 24.9945 24.0353 24.788 24.4135 24.419C24.7884 24.044 24.9991 23.5354 24.9991 23.005C24.9991 22.4747 24.7884 21.9661 24.4135 21.591ZM11.2495 4.00502C12.6834 4.00502 14.0851 4.43023 15.2774 5.22687C16.4696 6.02351 17.3989 7.1558 17.9476 8.48057C18.4964 9.80533 18.6399 11.2631 18.3602 12.6694C18.0804 14.0758 17.3899 15.3676 16.376 16.3815C15.3621 17.3955 14.0703 18.086 12.6639 18.3657C11.2575 18.6455 9.7998 18.5019 8.47504 17.9531C7.15027 17.4044 6.01798 16.4752 5.22134 15.2829C4.4247 14.0907 3.99949 12.6889 3.99949 11.255C4.00161 9.33285 4.76613 7.49002 6.12531 6.13084C7.48449 4.77166 9.32732 4.00714 11.2495 4.00502Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2a = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.4227 0.576215C23.7893 0.94095 23.9968 1.43585 24 1.95298L23.988 9.19998C23.9927 12.6261 22.8356 15.9526 20.7056 18.6361C18.5756 21.3197 15.5987 23.2018 12.261 23.975C12.129 24.0019 11.993 24.0019 11.861 23.975C8.51624 23.232 5.52224 21.3768 3.36794 18.7125C1.21365 16.0482 0.0263699 12.7322 0 9.30598L0.012 1.96498C0.0117275 1.44741 0.216389 0.950793 0.581238 0.583696C0.946087 0.216598 1.44144 0.00888905 1.959 0.00598145H22.043C22.5601 0.00649971 23.0561 0.211479 23.4227 0.576215ZM16.7071 15.4511C16.8946 15.2636 17 15.0092 17 14.744V9.24398C17 8.97877 16.8946 8.72441 16.7071 8.53687C16.5196 8.34934 16.2652 8.24398 16 8.24398H15.75C15.6174 8.24398 15.4902 8.1913 15.3964 8.09754C15.3027 8.00377 15.25 7.87659 15.25 7.74398V6.49398C15.25 5.63203 14.9076 4.80538 14.2981 4.19588C13.6886 3.58639 12.862 3.24398 12 3.24398C11.138 3.24398 10.3114 3.58639 9.7019 4.19588C9.09241 4.80538 8.75 5.63203 8.75 6.49398V7.74398C8.75 7.87659 8.69732 8.00377 8.60355 8.09754C8.50979 8.1913 8.38261 8.24398 8.25 8.24398H8C7.73478 8.24398 7.48043 8.34934 7.29289 8.53687C7.10536 8.72441 7 8.97877 7 9.24398V14.744C7 15.0092 7.10536 15.2636 7.29289 15.4511C7.48043 15.6386 7.73478 15.744 8 15.744H16C16.2652 15.744 16.5196 15.6386 16.7071 15.4511ZM12 4.74396C11.536 4.74449 11.0912 4.92903 10.7631 5.25711C10.4351 5.58518 10.2505 6.02999 10.25 6.49396V7.74396C10.25 7.87657 10.3027 8.00374 10.3964 8.09751C10.4902 8.19128 10.6174 8.24396 10.75 8.24396H13.25C13.3826 8.24396 13.5098 8.19128 13.6036 8.09751C13.6973 8.00374 13.75 7.87657 13.75 7.74396V6.49396C13.7495 6.02999 13.5649 5.58518 13.2369 5.25711C12.9088 4.92903 12.464 4.74449 12 4.74396ZM12 13.494C12.8284 13.494 13.5 12.8224 13.5 11.994C13.5 11.1655 12.8284 10.494 12 10.494C11.1716 10.494 10.5 11.1655 10.5 11.994C10.5 12.8224 11.1716 13.494 12 13.494Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2b = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M19 3C18.448 3 18 3.448 18 4C18 4.552 18.448 5 19 5C19.552 5 20 5.448 20 6V8.25C20 8.388 19.888 8.5 19.75 8.5H4.25C4.112 8.5 4 8.388 4 8.25V6C4 5.448 4.448 5 5 5C5.552 5 6 4.552 6 4C6 3.448 5.552 3 5 3C3.343 3 2 4.343 2 6V23C2 23.552 2.448 24 3 24C3.552 24 4 23.552 4 23V10.25C4 10.112 4.112 10 4.25 10H19.75C19.888 10 20 10.112 20 10.25V23C20 23.552 20.448 24 21 24C21.552 24 22 23.552 22 23V6C22 4.343 20.657 3 19 3ZM12 4C12.828 4 13.5 4.672 13.5 5.5C13.5 6.328 12.828 7 12 7C11.172 7 10.5 6.328 10.5 5.5C10.5 4.672 11.172 4 12 4ZM12 3C12.414 3 12.75 2.664 12.75 2.25V0.75C12.75 0.336 12.414 0 12 0C11.586 0 11.25 0.336 11.25 0.75V2.25C11.25 2.664 11.586 3 12 3ZM9.172 3.732C9.475 4.014 9.95 3.998 10.232 3.695C10.5 3.407 10.5 2.96 10.232 2.672L9.172 1.611C8.879 1.318 8.404 1.318 8.111 1.611C7.818 1.904 7.818 2.379 8.111 2.672L9.172 3.732ZM7.25 6.25H8.75C9.164 6.25 9.5 5.914 9.5 5.5C9.5 5.086 9.164 4.75 8.75 4.75H7.25C6.836 4.75 6.5 5.086 6.5 5.5C6.5 5.914 6.836 6.25 7.25 6.25ZM14.828 3.732L15.889 2.672C16.182 2.379 16.182 1.904 15.889 1.611C15.596 1.318 15.121 1.318 14.828 1.611L13.768 2.672C13.486 2.975 13.502 3.45 13.805 3.732C14.093 4 14.54 4 14.828 3.732ZM14.5 5.5C14.5 5.914 14.836 6.25 15.25 6.25H16.75C17.164 6.25 17.5 5.914 17.5 5.5C17.5 5.086 17.164 4.75 16.75 4.75H15.25C14.836 4.75 14.5 5.086 14.5 5.5ZM13.919 20.582C13.311 20.356 13.41 18.769 13.68 18.472C14.548 17.531 14.973 16.264 14.849 14.99C14.989 13.483 13.88 12.149 12.373 12.009C12.249 11.998 12.125 11.995 12 12C10.488 11.933 9.209 13.105 9.142 14.617C9.137 14.742 9.14 14.866 9.151 14.99C9.027 16.264 9.452 17.531 10.32 18.472C10.59 18.772 10.689 20.356 10.081 20.582C7.83 21.416 6.038 22.011 5.609 22.869C5.48 23.129 5.372 23.398 5.286 23.675C5.245 23.807 5.319 23.948 5.452 23.989C5.476 23.996 5.5 24 5.525 24H18.475C18.614 24 18.726 23.887 18.725 23.748C18.725 23.723 18.721 23.699 18.714 23.675C18.628 23.398 18.52 23.129 18.391 22.869C17.962 22.011 16.17 21.416 13.919 20.582Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2c = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M9.5 11.5C11.709 11.5 13.5 9.709 13.5 7.5C13.5 5.291 11.709 3.5 9.5 3.5C7.291 3.5 5.5 5.291 5.5 7.5C5.5 9.709 7.291 11.5 9.5 11.5ZM9.5 9.5C8.395 9.5 7.5 8.605 7.5 7.5C7.5 7.247 7.548 6.996 7.642 6.761C7.668 6.696 7.72 6.644 7.786 6.62C7.851 6.596 7.924 6.6 7.986 6.631C8.829 7.063 9.764 7.287 10.711 7.286C10.889 7.286 11.065 7.278 11.238 7.262C11.37 7.251 11.486 7.349 11.497 7.481C11.498 7.487 11.498 7.494 11.498 7.5C11.498 8.604 10.604 9.499 9.5 9.5ZM14.376 14.664C11.939 11.971 7.779 11.763 5.086 14.201C4.924 14.348 4.769 14.502 4.623 14.664C4.437 14.868 4.453 15.185 4.657 15.37C4.749 15.453 4.869 15.5 4.993 15.5H14.006C14.282 15.5 14.506 15.276 14.506 15C14.506 14.876 14.459 14.756 14.376 14.664ZM17 19C18.105 19 19 18.105 19 17V2C19 0.895 18.105 0 17 0H2C0.895 0 0 0.895 0 2V17C0 18.105 0.895 19 2 19H17ZM2 2.5C2 2.224 2.224 2 2.5 2H16.5C16.776 2 17 2.224 17 2.5V16.5C17 16.776 16.776 17 16.5 17H2.5C2.224 17 2 16.776 2 16.5V2.5ZM23.992 9.235C24.091 8.135 23.28 7.162 22.18 7.063L21.18 6.972C20.632 6.905 20.133 7.296 20.067 7.844C20.001 8.392 20.391 8.891 20.939 8.957C20.96 8.96 20.98 8.961 21.001 8.963L21.501 9.008C21.776 9.033 21.979 9.276 21.954 9.551V9.552L20.864 21.5C20.839 21.775 20.595 21.977 20.32 21.952L6.877 20.728C6.329 20.66 5.83 21.05 5.762 21.598C5.694 22.146 6.084 22.645 6.632 22.713C6.654 22.716 6.677 22.718 6.7 22.719L20.642 23.993C21.742 24.093 22.715 23.282 22.815 22.182L23.992 9.235Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2d = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M24.612 0.224989C24.4525 0.0996659 24.26 0.0234781 24.0579 0.00572099C23.8558 -0.0120361 23.6529 0.0294054 23.474 0.124989L1.82701 11.646C1.56631 11.7824 1.34991 11.9902 1.20318 12.2453C1.05645 12.5003 0.985489 12.7918 0.99861 13.0858C1.01173 13.3797 1.10839 13.6638 1.27726 13.9047C1.44613 14.1456 1.6802 14.3334 1.95201 14.446L5.20601 15.826C5.206 15.9095 5.22055 15.9924 5.24901 16.071L7.74901 22.817C7.87898 23.1661 8.11312 23.4668 8.4197 23.6784C8.72629 23.89 9.0905 24.0023 9.46301 24C9.91358 23.9961 10.3471 23.8275 10.682 23.526C10.721 23.491 13.472 20.448 14.082 19.772C14.1168 19.7334 14.1628 19.7067 14.2136 19.6956C14.2643 19.6845 14.3173 19.6895 14.365 19.71L17.522 21.049C17.7284 21.1363 17.9509 21.179 18.1749 21.1744C18.3989 21.1697 18.6194 21.1178 18.822 21.022C19.0231 20.927 19.2016 20.7901 19.3456 20.6206C19.4896 20.4511 19.5958 20.2528 19.657 20.039L24.961 1.29999C25.0161 1.1064 25.0123 0.900795 24.9502 0.709355C24.888 0.517916 24.7703 0.349304 24.612 0.224989ZM6.83801 16.046L16.53 7.98299C16.5524 7.9603 16.5793 7.9426 16.609 7.93105C16.6387 7.91949 16.6705 7.91435 16.7023 7.91596C16.7341 7.91756 16.7653 7.92588 16.7937 7.94036C16.822 7.95484 16.847 7.97516 16.867 7.99999C16.8921 8.01915 16.9128 8.04351 16.9276 8.07141C16.9424 8.09931 16.9511 8.13008 16.9529 8.16162C16.9547 8.19316 16.9496 8.22472 16.9381 8.25412C16.9265 8.28353 16.9088 8.31009 16.886 8.33199L9.64801 17.187C9.56517 17.2878 9.51094 17.409 9.49101 17.538L8.85801 21.488L6.83801 16.046Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2e = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        d: "M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"
      }), h("path", {
        fill: "#303334",
        d: "M12 12c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$8 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "201",
        height: "232",
        fill: "none",
        viewBox: "0 0 201 232"
      }, h("path", {
        fill: "white",
        fillRule: "evenodd",
        d: "M108.244 143.655c8.77 6.542 21.239 5.832 29.205-2.131 7.964-7.967 8.676-20.437 2.132-29.206 10.828-1.578 19.145-10.898 19.145-22.162 0-11.263-8.317-20.581-19.145-22.157 6.544-8.771 5.832-21.242-2.132-29.205-7.966-7.966-20.435-8.677-29.205-2.134-1.577-10.827-10.897-19.145-22.16-19.145-11.265 0-20.584 8.318-22.16 19.145-8.77-6.543-21.24-5.832-29.205 2.134-7.966 7.963-8.676 20.434-2.132 29.205-10.829 1.576-19.144 10.894-19.144 22.157 0 11.264 8.315 20.584 19.144 22.162-6.544 8.769-5.834 21.239 2.132 29.206 7.966 7.963 20.435 8.673 29.205 2.131h44.32z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#121E31",
        fillRule: "evenodd",
        d: "M50.587 36.247c-4.758 0-9.498 1.817-13.047 5.365-6.42 6.42-7.176 16.739-1.757 24a3.988 3.988 0 0 1-2.622 6.333c-8.967 1.306-15.73 9.135-15.73 18.21 0 9.079 6.763 16.909 15.73 18.215a3.99 3.99 0 0 1 2.622 6.334c-5.419 7.262-4.663 17.578 1.757 23.999 6.418 6.419 16.736 7.174 23.999 1.755a3.99 3.99 0 0 1 2.385-.792h44.32a3.99 3.99 0 0 1 2.385.792c7.262 5.416 17.579 4.662 24-1.755 6.418-6.422 7.174-16.739 1.755-23.999a3.99 3.99 0 0 1 2.622-6.334c8.969-1.306 15.731-9.136 15.731-18.214 0-9.076-6.762-16.905-15.731-18.21a3.988 3.988 0 0 1-2.622-6.333c5.419-7.262 4.664-17.58-1.755-24-6.42-6.418-16.737-7.174-24-1.757a3.992 3.992 0 0 1-6.333-2.62c-1.305-8.97-9.135-15.733-18.212-15.733s-16.907 6.764-18.213 15.731a3.988 3.988 0 0 1-6.332 2.622c-3.247-2.421-7.105-3.61-10.952-3.61zm.01 115.786c-6.82.001-13.612-2.605-18.7-7.691-7.832-7.833-9.78-19.719-5.389-29.508-10.026-3.819-17.053-13.601-17.053-24.678 0-11.078 7.03-20.857 17.053-24.675-4.391-9.79-2.443-21.675 5.39-29.508 7.834-7.834 19.72-9.781 29.508-5.39 3.819-10.028 13.6-17.056 24.678-17.056 11.076 0 20.857 7.029 24.676 17.055 9.79-4.39 21.677-2.441 29.508 5.39 7.835 7.835 9.78 19.721 5.391 29.509 10.027 3.818 17.057 13.597 17.057 24.675 0 11.077-7.032 20.859-17.057 24.678 4.389 9.788 2.444 21.675-5.389 29.508-8.878 8.876-22.955 10.194-33.289 3.302H65.187c-4.412 2.942-9.509 4.389-14.59 4.389z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#121E31",
        fillRule: "evenodd",
        d: "M63.924 166.788a3.99 3.99 0 0 1-3.989-3.989v-19.144a3.99 3.99 0 0 1 7.978 0v19.144a3.99 3.99 0 0 1-3.99 3.989zM108.244 166.788a3.99 3.99 0 0 1-3.99-3.989v-19.144a3.99 3.99 0 0 1 7.979 0v19.144a3.99 3.99 0 0 1-3.989 3.989z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "white",
        fillRule: "evenodd",
        d: "M111.736 102.98c10.827-1.576 19.142-10.895 19.142-22.158h-11.199c0-6.184-5.014-11.198-11.199-11.198-6.182 0-11.199 5.014-11.199 11.198 0-6.184-5.013-11.198-11.198-11.198-6.183 0-11.2 5.014-11.2 11.198 0-6.184-5.012-11.198-11.197-11.198-6.184 0-11.2 5.014-11.2 11.198H41.288c0 11.263 8.319 20.582 19.145 22.158h51.303z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#121E31",
        fillRule: "evenodd",
        d: "M60.736 98.991h50.697c7.491-1.206 13.395-6.974 15.014-14.179h-6.767a3.99 3.99 0 0 1-3.99-3.99c0-3.976-3.235-7.21-7.209-7.21-3.976 0-7.211 3.234-7.211 7.21a3.99 3.99 0 0 1-7.978 0c0-3.976-3.233-7.21-7.21-7.21-3.975 0-7.209 3.234-7.209 7.21a3.99 3.99 0 1 1-7.976 0c0-3.976-3.235-7.21-7.212-7.21-3.975 0-7.21 3.234-7.21 7.21a3.99 3.99 0 0 1-3.99 3.99H45.72c1.62 7.206 7.525 12.973 15.017 14.18zm51 7.978H60.433c-.193 0-.385-.014-.574-.042-12.862-1.871-22.56-13.095-22.56-26.104a3.99 3.99 0 0 1 3.988-3.99h7.742c1.754-6.446 7.661-11.2 14.656-11.2 4.428 0 8.42 1.906 11.198 4.94a15.151 15.151 0 0 1 11.199-4.94 15.15 15.15 0 0 1 11.2 4.94 15.151 15.151 0 0 1 11.199-4.94c6.994 0 12.899 4.754 14.654 11.2h7.744a3.988 3.988 0 0 1 3.987 3.99c0 13.01-9.697 24.233-22.555 26.104a3.962 3.962 0 0 1-.575.042z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "white",
        fillRule: "evenodd",
        d: "M62.304 90.672c-6.086 6.085-9.85 14.494-9.85 23.779 0 18.574 15.059 33.629 33.628 33.629 18.577 0 33.632-15.055 33.632-33.629 0-9.285-3.764-17.694-9.85-23.78",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#121E31",
        fillRule: "evenodd",
        d: "M86.082 152.069c-20.741 0-37.617-16.875-37.617-37.618 0-10.049 3.913-19.494 11.017-26.6a3.99 3.99 0 1 1 5.642 5.64c-5.598 5.6-8.681 13.042-8.681 20.96 0 16.343 13.296 29.64 29.64 29.64s29.642-13.297 29.642-29.64c0-7.918-3.084-15.36-8.681-20.96a3.988 3.988 0 1 1 5.64-5.64c7.105 7.106 11.018 16.551 11.018 26.6 0 20.743-16.877 37.618-37.62 37.618z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#121E31",
        fillRule: "evenodd",
        d: "M78.874 101.482a3.991 3.991 0 0 1-3.99 3.99 3.99 3.99 0 1 1 3.99-3.99zM86.084 144.684c-3.978 0-7.21-3.236-7.21-7.21h14.421c0 3.974-3.234 7.21-7.211 7.21zM102.882 104.139H91.684a2.658 2.658 0 0 1 0-5.313h11.198a2.658 2.658 0 0 1 2.656 2.656 2.659 2.659 0 0 1-2.656 2.657z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#45D1E3",
        fillRule: "evenodd",
        d: "M151.269 62.385c17.228 0 31.194-13.965 31.194-31.192C182.463 13.965 168.497 0 151.269 0c-17.226 0-31.193 13.965-31.193 31.193 0 17.227 13.967 31.192 31.193 31.192z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "white",
        fillRule: "evenodd",
        d: "M145.499 44.76a3.954 3.954 0 0 1-2.836-1.2l-11.067-11.365a3.96 3.96 0 0 1 5.674-5.525l8.229 8.453 19.297-19.821a3.96 3.96 0 0 1 5.673 5.526L148.336 43.56a3.958 3.958 0 0 1-2.837 1.199z",
        clipRule: "evenodd"
      }), h("path", {
        fill: "#62DFF5",
        d: "M9.747 231.241c-5.316 0-9.747-4.406-9.747-9.693v-39.066c0-5.287 4.43-9.693 9.747-9.693h127.898c5.317 0 9.748 4.406 9.748 9.693v39.066c0 5.287-4.431 9.693-9.748 9.693H9.747z"
      }), h("path", {
        fill: "#121E31",
        d: "M21.502 219.487c-5.317 0-9.748-4.406-9.748-9.693v-39.066c0-5.287 4.431-9.693 9.748-9.693H149.4c5.316 0 9.747 4.406 9.747 9.693v39.066c0 5.287-4.431 9.693-9.747 9.693H21.502z"
      }), h("path", {
        fill: "white",
        d: "M41.292 199.807c5.317 0 9.748-4.406 9.748-9.693s-4.43-9.693-9.748-9.693c-5.316 0-9.747 4.406-9.747 9.693s4.43 9.693 9.747 9.693zM70.83 199.807c5.317 0 9.747-4.406 9.747-9.693s-4.43-9.693-9.747-9.693-9.747 4.406-9.747 9.693 4.43 9.693 9.747 9.693zM100.368 199.807c5.316 0 9.747-4.406 9.747-9.693s-4.431-9.693-9.747-9.693c-5.317 0-9.748 4.406-9.748 9.693s4.135 9.693 9.748 9.693zM129.905 199.807c5.317 0 9.748-4.406 9.748-9.693s-4.431-9.693-9.748-9.693c-5.316 0-9.747 4.406-9.747 9.693-.295 5.287 4.135 9.693 9.747 9.693z"
      }), h("path", {
        fill: "#121E31",
        d: "M194.339 186.258h-1.249v-4.579a11.24 11.24 0 1 0-22.48 0v4.579h-1.249c-.883 0-1.73.351-2.355.975a3.334 3.334 0 0 0-.975 2.355v17.485a3.334 3.334 0 0 0 3.33 3.331h24.978a3.33 3.33 0 0 0 3.331-3.331v-17.485a3.33 3.33 0 0 0-3.331-3.33zm-12.489 14.987a3.331 3.331 0 1 1 0-6.663 3.331 3.331 0 0 1 0 6.663zm7.077-15.82a.83.83 0 0 1-.832.833h-12.489a.833.833 0 0 1-.833-.833v-3.746a7.076 7.076 0 1 1 14.154 0v3.746z"
      })));
    }
  }]);

  return Image;
}(m);

var Icon$2f = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M22.4213 9.76177L21.1553 9.31277C20.4403 9.05877 20.0663 8.27277 20.3213 7.55777C20.3373 7.51277 20.3553 7.46977 20.3753 7.42677L20.9513 6.21377C21.5133 5.02777 21.0083 3.61077 19.8223 3.04877C19.1783 2.74277 18.4303 2.74277 17.7863 3.04877L16.5733 3.62577C15.8873 3.95077 15.0673 3.65877 14.7413 2.97277C14.7213 2.93077 14.7033 2.88777 14.6883 2.84377L14.2383 1.57877C13.7973 0.342771 12.4383 -0.302229 11.2023 0.138771C10.5303 0.378771 10.0013 0.906771 9.76226 1.57877L9.31226 2.84477C9.05726 3.55977 8.27126 3.93377 7.55526 3.67877C7.51226 3.66377 7.46926 3.64577 7.42726 3.62577L6.21426 3.04877C5.02826 2.48677 3.61126 2.99177 3.04926 4.17777C2.74326 4.82177 2.74326 5.56977 3.04926 6.21377L3.62526 7.42677C3.95126 8.11277 3.66026 8.93277 2.97426 9.25877C2.93226 9.27877 2.88926 9.29677 2.84526 9.31277L1.57926 9.76277C0.343258 10.2028 -0.301742 11.5608 0.138258 12.7968C0.377258 13.4688 0.906258 13.9988 1.57926 14.2378L2.84526 14.6878C3.56026 14.9418 3.93326 15.7278 3.67926 16.4428C3.66326 16.4868 3.64526 16.5308 3.62526 16.5728L3.04926 17.7858C2.48726 18.9718 2.99226 20.3888 4.17826 20.9508C4.82226 21.2568 5.57026 21.2568 6.21426 20.9508L7.42726 20.3748C8.11226 20.0488 8.93126 20.3388 9.25726 21.0238C9.27826 21.0668 9.29626 21.1108 9.31226 21.1558L9.76226 22.4208C10.2033 23.6568 11.5623 24.3018 12.7983 23.8608C13.4703 23.6208 13.9993 23.0928 14.2383 22.4208L14.6883 21.1548C14.9423 20.4398 15.7283 20.0668 16.4433 20.3208C16.4873 20.3368 16.5313 20.3548 16.5733 20.3748L17.7863 20.9508C18.9723 21.5128 20.3893 21.0078 20.9513 19.8218C21.2573 19.1778 21.2573 18.4298 20.9513 17.7858L20.3753 16.5728C20.0493 15.8878 20.3403 15.0678 21.0253 14.7418C21.0673 14.7218 21.1113 14.7038 21.1553 14.6878L22.4213 14.2368C23.6573 13.7968 24.3023 12.4388 23.8623 11.2028C23.6233 10.5308 23.0943 10.0008 22.4213 9.76177ZM12.0003 16.7838C10.0713 16.7558 8.33626 15.6058 7.55926 13.8398C6.54626 11.3878 7.70926 8.57777 10.1593 7.55877C12.6113 6.57777 15.3983 7.73177 16.4403 10.1588C17.4533 12.6108 16.2903 15.4208 13.8403 16.4398C13.2573 16.6798 12.6303 16.7968 12.0003 16.7838Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2g = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M19.0434 3.08696C17.4586 3.08696 16.1739 4.3717 16.1739 5.95652C16.1739 7.54134 17.4586 8.82609 19.0434 8.82609C20.6283 8.82609 21.913 7.54134 21.913 5.95652C21.913 4.3717 20.6283 3.08696 19.0434 3.08696ZM14.0869 5.95652C14.0869 3.21911 16.306 1 19.0434 1C21.7808 1 24 3.21911 24 5.95652C24 8.69393 21.7808 10.913 19.0434 10.913C17.3145 10.913 15.7923 10.0278 14.9054 8.68584L9.85148 10.6513C9.892 10.9065 9.91304 11.1682 9.91304 11.4348C9.91304 11.861 9.85923 12.2747 9.75804 12.6694L15.1757 15.3783C16.0841 14.2464 17.4792 13.5217 19.0434 13.5217C21.7808 13.5217 24 15.7408 24 18.4783C24 21.2157 21.7808 23.4348 19.0434 23.4348C16.306 23.4348 14.0869 21.2157 14.0869 18.4783C14.0869 18.0523 14.1406 17.639 14.2417 17.2445L8.8236 14.5355C7.91519 15.667 6.52044 16.3913 4.95652 16.3913C2.21911 16.3913 0 14.1722 0 11.4348C0 8.69737 2.21911 6.47826 4.95652 6.47826C6.68582 6.47826 8.20828 7.36386 9.0951 8.70628L14.1486 6.74093C14.108 6.48544 14.0869 6.22344 14.0869 5.95652ZM4.95652 8.56522C3.3717 8.56522 2.08696 9.84996 2.08696 11.4348C2.08696 13.0196 3.3717 14.3043 4.95652 14.3043C6.54134 14.3043 7.82609 13.0196 7.82609 11.4348C7.82609 9.84996 6.54134 8.56522 4.95652 8.56522ZM16.1739 18.4783C16.1739 16.8934 17.4586 15.6087 19.0434 15.6087C20.6283 15.6087 21.913 16.8934 21.913 18.4783C21.913 20.0631 20.6283 21.3478 19.0434 21.3478C17.4586 21.3478 16.1739 20.0631 16.1739 18.4783Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2h = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M19 6h-1V4h1a2 2 0 0 1 2 2v12c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v2H5v12h14V6zM8 7l1 1 2-2v8h2V6l2 2 1-1-4-4-4 4z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2i = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.44898 9.30611C5.31908 9.30611 5.1945 9.35771 5.10264 9.44957C5.01079 9.54142 4.95918 9.666 4.95918 9.7959V21.551C4.95918 21.6809 5.01079 21.8055 5.10264 21.8973C5.1945 21.9892 5.31908 22.0408 5.44898 22.0408H18.6735C18.8034 22.0408 18.928 21.9892 19.0198 21.8973C19.1117 21.8055 19.1633 21.6809 19.1633 21.551V9.7959C19.1633 9.666 19.1117 9.54142 19.0198 9.44957C18.928 9.35771 18.8034 9.30611 18.6735 9.30611H17.2041C16.6631 9.30611 16.2245 8.86753 16.2245 8.32652C16.2245 7.7855 16.6631 7.34692 17.2041 7.34692H18.6735C19.323 7.34692 19.9459 7.60494 20.4052 8.06421C20.8644 8.52349 21.1224 9.14639 21.1224 9.7959V21.551C21.1224 22.2005 20.8644 22.8234 20.4052 23.2827C19.9459 23.742 19.323 24 18.6735 24H5.44898C4.79947 24 4.17656 23.742 3.71729 23.2827C3.25802 22.8234 3 22.2005 3 21.551V9.7959C3 9.14639 3.25802 8.52349 3.71729 8.06421C4.17656 7.60494 4.79947 7.34692 5.44898 7.34692H6.91837C7.45938 7.34692 7.89796 7.7855 7.89796 8.32652C7.89796 8.86753 7.45938 9.30611 6.91837 9.30611H5.44898Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0616 0C12.6026 0 13.0412 0.438578 13.0412 0.979592V11.2653C13.0412 11.8063 12.6026 12.2449 12.0616 12.2449C11.5206 12.2449 11.082 11.8063 11.082 11.2653V0.979592C11.082 0.438578 11.5206 0 12.0616 0Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.3686 0.286916C11.7511 -0.0956386 12.3714 -0.0956386 12.7539 0.286916L16.4274 3.96039C16.81 4.34294 16.81 4.96318 16.4274 5.34574C16.0449 5.72829 15.4246 5.72829 15.0421 5.34574L12.0613 2.36494L9.08047 5.34574C8.69792 5.72829 8.07767 5.72829 7.69512 5.34574C7.31256 4.96318 7.31256 4.34294 7.69512 3.96039L11.3686 0.286916Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2j = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M23 5.947C23.0048 5.43727 22.8077 4.94636 22.4517 4.58154C22.0956 4.21672 21.6097 4.00764 21.1 4H19.251C19.2181 4.00013 19.1855 3.99376 19.155 3.98126C19.1246 3.96875 19.0969 3.95036 19.0736 3.92713C19.0503 3.9039 19.0318 3.8763 19.0191 3.8459C19.0065 3.81551 19 3.78291 19 3.75V3C19 2.20435 18.6839 1.44129 18.1213 0.87868C17.5587 0.31607 16.7956 0 16 0L13 0C12.2044 0 11.4413 0.31607 10.8787 0.87868C10.3161 1.44129 10 2.20435 10 3V3.75C10 3.8163 9.97366 3.87989 9.92678 3.92678C9.87989 3.97366 9.8163 4 9.75 4H7.75C7.6837 4 7.62011 3.97366 7.57322 3.92678C7.52634 3.87989 7.5 3.8163 7.5 3.75V3C7.5 2.73478 7.60536 2.48043 7.79289 2.29289C7.98043 2.10536 8.23478 2 8.5 2C8.76522 2 9.01957 1.89464 9.20711 1.70711C9.39464 1.51957 9.5 1.26522 9.5 1C9.5 0.734784 9.39464 0.48043 9.20711 0.292893C9.01957 0.105357 8.76522 0 8.5 0C7.70435 0 6.94129 0.31607 6.37868 0.87868C5.81607 1.44129 5.5 2.20435 5.5 3V3.75C5.5 3.8163 5.47366 3.87989 5.42678 3.92678C5.37989 3.97366 5.3163 4 5.25 4H3.5C2.98183 3.98162 2.47677 4.1652 2.09134 4.51201C1.70591 4.85883 1.47023 5.34177 1.434 5.859L0 22.053C0.0174995 22.5856 0.245394 23.0896 0.633761 23.4546C1.02213 23.8195 1.5393 24.0156 2.072 24H22.1C22.3573 23.9947 22.6111 23.9383 22.8464 23.8341C23.0817 23.7298 23.294 23.5798 23.4708 23.3928C23.6476 23.2057 23.7854 22.9854 23.8763 22.7445C23.9672 22.5037 24.0092 22.2472 24 21.99L23 5.947ZM12 3C12 2.73478 12.1054 2.48043 12.2929 2.29289C12.4804 2.10536 12.7348 2 13 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V3.75C17 3.8163 16.9737 3.87989 16.9268 3.92678C16.8799 3.97366 16.8163 4 16.75 4H12.25C12.1837 4 12.1201 3.97366 12.0732 3.92678C12.0263 3.87989 12 3.8163 12 3.75V3ZM2.559 21.975C2.48919 21.9753 2.42009 21.961 2.35615 21.933C2.2922 21.905 2.23483 21.8639 2.18773 21.8123C2.14063 21.7608 2.10484 21.7 2.08267 21.6338C2.0605 21.5676 2.05244 21.4975 2.059 21.428L3.459 6.454C3.47047 6.32986 3.5279 6.21449 3.62003 6.1305C3.71215 6.04651 3.83233 5.99997 3.957 6H6.582C6.7099 5.9998 6.83301 6.04862 6.92601 6.13641C7.01901 6.22421 7.07484 6.3443 7.082 6.472L7.915 21.466C7.91881 21.534 7.9087 21.602 7.88529 21.666C7.86187 21.7299 7.82565 21.7884 7.77883 21.8378C7.73202 21.8872 7.6756 21.9266 7.61304 21.9534C7.55047 21.9803 7.48309 21.9941 7.415 21.994L2.559 21.975Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2k = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M21.2339 4.47474C21.7255 3.98317 22.0017 3.31644 22.0017 2.62124C22.0017 1.92605 21.7255 1.25932 21.2339 0.767745C20.7424 0.276166 20.0756 0 19.3804 0C18.6852 0 18.0185 0.276166 17.5269 0.767745L10.8479 7.44674C10.8012 7.49378 10.7749 7.55741 10.7749 7.62374C10.7749 7.69008 10.8012 7.75371 10.8479 7.80074L14.1999 11.1537C14.2231 11.177 14.2506 11.1954 14.2809 11.208C14.3112 11.2206 14.3436 11.2271 14.3764 11.2271C14.4092 11.2271 14.4417 11.2206 14.472 11.208C14.5023 11.1954 14.5298 11.177 14.5529 11.1537L21.2339 4.47474ZM23.7071 9.79564C23.8946 9.98318 24 10.2375 24 10.5027V22.5027C24 22.9006 23.842 23.2821 23.5607 23.5634C23.2794 23.8447 22.8978 24.0027 22.5 24.0027H1.5C1.10218 24.0027 0.720644 23.8447 0.43934 23.5634C0.158035 23.2821 0 22.9006 0 22.5027V10.5027C0 10.2375 0.105357 9.98318 0.292893 9.79564C0.48043 9.6081 0.734784 9.50275 1 9.50275H6C6.26522 9.50275 6.51957 9.6081 6.70711 9.79564C6.89464 9.98318 7 10.2375 7 10.5027C7 10.768 6.89464 11.0223 6.70711 11.2099C6.51957 11.3974 6.26522 11.5027 6 11.5027H2.25C2.21713 11.5026 2.18456 11.509 2.15417 11.5215C2.12378 11.534 2.09617 11.5524 2.07293 11.5757C2.04969 11.5989 2.03128 11.6265 2.01876 11.6569C2.00624 11.6873 1.99987 11.7199 2 11.7527V21.7527C2 21.819 2.02634 21.8826 2.07322 21.9295C2.12011 21.9764 2.1837 22.0027 2.25 22.0027H21.75C21.8163 22.0027 21.8799 21.9764 21.9268 21.9295C21.9737 21.8826 22 21.819 22 21.7527V11.7527C22.0001 11.7199 21.9938 11.6873 21.9812 11.6569C21.9687 11.6265 21.9503 11.5989 21.9271 11.5757C21.9038 11.5524 21.8762 11.534 21.8458 11.5215C21.8154 11.509 21.7829 11.5026 21.75 11.5027H20C19.7348 11.5027 19.4804 11.3974 19.2929 11.2099C19.1054 11.0223 19 10.768 19 10.5027C19 10.2375 19.1054 9.98318 19.2929 9.79564C19.4804 9.6081 19.7348 9.50275 20 9.50275H23C23.2652 9.50275 23.5196 9.6081 23.7071 9.79564ZM3.49976 18.5019C3.49985 18.2366 3.60532 17.9823 3.79296 17.7948L5.07596 16.5088C5.34827 16.2363 5.6756 16.0251 6.03606 15.8892C6.39653 15.7534 6.78184 15.6961 7.16625 15.721C7.55065 15.746 7.92529 15.8528 8.26514 16.0341C8.60499 16.2155 8.90222 16.4673 9.13696 16.7728C9.17555 16.8231 9.23183 16.8569 9.2944 16.8673C9.35698 16.8777 9.42116 16.8639 9.47396 16.8288L9.61196 16.7358C10.1336 16.39 10.7586 16.2349 11.3813 16.2966C12.0041 16.3584 12.5864 16.6333 13.03 17.0748L13.382 17.4258C13.4051 17.4491 13.4327 17.4677 13.4631 17.4804C13.4935 17.4931 13.526 17.4997 13.559 17.4998H17C17.2652 17.4998 17.5195 17.6051 17.7071 17.7926C17.8946 17.9802 18 18.2345 18 18.4998C18 18.765 17.8946 19.0193 17.7071 19.2069C17.5195 19.3944 17.2652 19.4998 17 19.4998H13.041C12.7758 19.4997 12.5215 19.3943 12.334 19.2068L11.616 18.4888C11.5 18.3733 11.3477 18.3014 11.1848 18.2852C11.0219 18.2689 10.8584 18.3094 10.722 18.3998L9.74596 19.0508C9.56514 19.1718 9.35784 19.2475 9.14157 19.2715C8.92531 19.2955 8.70645 19.2671 8.5035 19.1886C8.30055 19.1101 8.11948 18.9839 7.97561 18.8207C7.83174 18.6574 7.7293 18.462 7.67696 18.2508C7.64574 18.1298 7.58313 18.0193 7.49546 17.9303C7.40778 17.8413 7.29816 17.7771 7.17769 17.7441C7.05721 17.7111 6.93016 17.7105 6.80939 17.7424C6.68863 17.7743 6.57843 17.8376 6.48996 17.9258L5.20696 19.2098C5.01932 19.3973 4.76488 19.5025 4.49961 19.5025C4.23433 19.5024 3.97997 19.3969 3.79246 19.2093C3.60495 19.0216 3.49966 18.7672 3.49976 18.5019ZM9.4999 13.0028C9.3674 13.0025 9.24044 12.9496 9.1469 12.8558C9.08843 12.7974 9.04531 12.7255 9.02141 12.6465C8.9975 12.5674 8.99355 12.4837 9.0099 12.4028L9.6379 9.26175C9.64703 9.21754 9.66791 9.17662 9.69835 9.14328C9.72879 9.10994 9.76766 9.08543 9.81085 9.07233C9.85405 9.05923 9.89999 9.05802 9.94382 9.06883C9.98764 9.07964 10.0277 9.10207 10.0599 9.13375L12.8709 11.9418C12.9026 11.9739 12.925 12.014 12.9358 12.0578C12.9466 12.1017 12.9454 12.1476 12.9323 12.1908C12.9192 12.234 12.8947 12.2729 12.8614 12.3033C12.828 12.3337 12.7871 12.3546 12.7429 12.3638L9.5999 12.9928C9.56702 12.9997 9.53349 13.003 9.4999 13.0028Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2l = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M20 3H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H5.17L4 18.17V5h16v12zM7 10v2h2v-2H7zm8 0v2h2v-2h-2zm-4 0v2h2v-2h-2z"
      })));
    }
  }]);

  return Icon;
}(m);

var Image$9 = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "264",
        height: "264",
        viewBox: "0 0 264 264"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        fill: "#45D1E3",
        d: "M176 225.876l36.75-18.375L176 189.126H38.187A9.187 9.187 0 0 0 29 198.314v18.374a9.186 9.186 0 0 0 9.187 9.188H176z"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M193.362 212.854l36.75-18.375-36.75-18.375H55.55a9.187 9.187 0 0 0-9.188 9.188v18.374a9.187 9.187 0 0 0 9.188 9.188h137.812z"
      }), h("path", {
        fill: "#000000",
        d: "M55.55 179.68a5.62 5.62 0 0 0-5.613 5.612v18.375a5.62 5.62 0 0 0 5.613 5.613h136.968l29.6-14.8-29.6-14.8H55.55zm137.812 36.75H55.55c-7.037 0-12.762-5.727-12.762-12.763v-18.375c0-7.037 5.725-12.762 12.762-12.762h137.812c.556 0 1.103.129 1.599.377l36.75 18.375a3.574 3.574 0 0 1 0 6.395l-36.75 18.375a3.574 3.574 0 0 1-1.6.377z"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M157.088 159.214c7.461 5.566 18.07 4.962 24.846-1.813 6.776-6.778 7.381-17.386 1.814-24.847 9.212-1.342 16.288-9.271 16.288-18.854 0-9.582-7.076-17.51-16.288-18.85 5.567-7.462 4.962-18.071-1.814-24.846-6.777-6.777-17.385-7.382-24.846-1.815-1.34-9.211-9.27-16.288-18.852-16.288-9.584 0-17.512 7.077-18.853 16.288-7.46-5.567-18.069-4.962-24.846 1.815-6.777 6.775-7.38 17.384-1.814 24.846-9.212 1.34-16.286 9.268-16.286 18.85 0 9.583 7.074 17.512 16.286 18.854-5.567 7.46-4.963 18.069 1.814 24.847 6.777 6.775 17.385 7.379 24.846 1.813h37.705z"
      }), h("path", {
        fill: "#000000",
        d: "M108.037 67.837c-4.048 0-8.08 1.546-11.1 4.565-5.462 5.46-6.105 14.24-1.495 20.418a3.395 3.395 0 0 1-2.23 5.388c-7.629 1.11-13.383 7.77-13.383 15.492 0 7.723 5.754 14.385 13.383 15.496a3.393 3.393 0 0 1 2.23 5.388c-4.61 6.178-3.967 14.955 1.495 20.417 5.46 5.46 14.238 6.104 20.417 1.493a3.395 3.395 0 0 1 2.03-.673h37.704c.731 0 1.443.236 2.03.673 6.177 4.608 14.954 3.967 20.417-1.493 5.46-5.463 6.103-14.24 1.493-20.417a3.39 3.39 0 0 1-.415-3.327 3.392 3.392 0 0 1 2.646-2.061c7.63-1.111 13.383-7.773 13.383-15.496 0-7.721-5.753-14.382-13.383-15.492a3.393 3.393 0 0 1-2.231-5.388c4.61-6.178 3.968-14.956-1.493-20.418-5.462-5.46-14.239-6.103-20.418-1.494a3.395 3.395 0 0 1-5.388-2.23c-1.11-7.63-7.77-13.384-15.493-13.384-7.723 0-14.384 5.754-15.495 13.383a3.393 3.393 0 0 1-5.387 2.23 15.554 15.554 0 0 0-9.317-3.07m.01 98.505c-5.803 0-11.582-2.216-15.91-6.543-6.664-6.664-8.32-16.776-4.585-25.104-8.53-3.25-14.508-11.571-14.508-20.995 0-9.424 5.98-17.744 14.508-20.992-3.736-8.328-2.079-18.44 4.586-25.104 6.664-6.665 16.776-8.321 25.103-4.586 3.25-8.531 11.57-14.51 20.995-14.51 9.423 0 17.744 5.98 20.993 14.51 8.33-3.735 18.441-2.077 25.104 4.586 6.665 6.665 8.32 16.777 4.586 25.104 8.53 3.248 14.511 11.568 14.511 20.992 0 9.424-5.982 17.746-14.51 20.995 3.733 8.327 2.078 18.44-4.586 25.104-7.553 7.55-19.529 8.672-28.32 2.809h-35.556c-3.754 2.503-8.09 3.734-12.412 3.734"
      }), h("path", {
        fill: "#000000",
        d: "M119.383 178.894a3.394 3.394 0 0 1-3.393-3.394v-16.286a3.394 3.394 0 0 1 6.787 0V175.5a3.394 3.394 0 0 1-3.394 3.394M157.088 178.894a3.395 3.395 0 0 1-3.394-3.394v-16.286a3.394 3.394 0 0 1 6.788 0V175.5a3.395 3.395 0 0 1-3.394 3.394"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M160.059 124.61c9.21-1.34 16.285-9.269 16.285-18.85h-9.527c0-5.262-4.266-9.528-9.528-9.528-5.26 0-9.527 4.266-9.527 9.527a9.527 9.527 0 0 0-9.527-9.527c-5.26 0-9.528 4.266-9.528 9.527 0-5.26-4.264-9.527-9.526-9.527-5.261 0-9.528 4.266-9.528 9.527h-9.527c0 9.582 7.077 17.51 16.287 18.851h43.646z"
      }), h("path", {
        fill: "#000000",
        d: "M116.671 121.217h43.13c6.373-1.026 11.396-5.933 12.773-12.063h-5.757a3.393 3.393 0 0 1-3.394-3.394 6.141 6.141 0 0 0-6.133-6.135 6.142 6.142 0 0 0-6.135 6.135 3.392 3.392 0 1 1-6.787 0 6.14 6.14 0 0 0-6.134-6.135 6.14 6.14 0 0 0-6.133 6.135 3.394 3.394 0 1 1-6.786 0 6.142 6.142 0 0 0-6.135-6.135 6.142 6.142 0 0 0-6.134 6.135 3.394 3.394 0 0 1-3.394 3.394h-5.757c1.38 6.13 6.402 11.037 12.776 12.063m43.388 6.787h-43.646c-.164 0-.327-.012-.488-.036-10.942-1.592-19.193-11.14-19.193-22.208a3.394 3.394 0 0 1 3.393-3.394h6.586c1.493-5.484 6.518-9.528 12.47-9.528a12.89 12.89 0 0 1 9.526 4.202 12.89 12.89 0 0 1 9.527-4.202c3.768 0 7.165 1.62 9.528 4.202a12.89 12.89 0 0 1 9.528-4.202c5.95 0 10.974 4.044 12.467 9.528h6.588a3.393 3.393 0 0 1 3.392 3.394c0 11.068-8.25 20.616-19.189 22.208a3.342 3.342 0 0 1-.489.036"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M118.005 114.138a28.52 28.52 0 0 0-8.38 20.23c0 15.802 12.811 28.61 28.61 28.61 15.803 0 28.611-12.808 28.611-28.61a28.52 28.52 0 0 0-8.38-20.23"
      }), h("path", {
        fill: "#000000",
        d: "M138.235 166.372c-17.646 0-32.003-14.356-32.003-32.003 0-8.55 3.329-16.585 9.373-22.63a3.395 3.395 0 0 1 4.8 4.799c-4.763 4.763-7.386 11.095-7.386 17.83 0 13.905 11.312 25.217 25.216 25.217 13.905 0 25.218-11.312 25.218-25.216 0-6.736-2.623-13.068-7.385-17.831a3.393 3.393 0 1 1 4.798-4.799c6.045 6.045 9.374 14.08 9.374 22.63 0 17.647-14.358 32.003-32.005 32.003"
      }), h("path", {
        fill: "#000000",
        d: "M132.102 123.336a3.395 3.395 0 0 1-3.394 3.394 3.394 3.394 0 1 1 3.394-3.394M138.236 160.09a6.14 6.14 0 0 1-6.134-6.134h12.269a6.142 6.142 0 0 1-6.135 6.134M152.527 125.596H143a2.26 2.26 0 0 1 0-4.52h9.526a2.261 2.261 0 0 1 2.26 2.26 2.261 2.261 0 0 1-2.26 2.26"
      }), h("path", {
        fill: "#45D1E3",
        d: "M193.692 90.074c14.657 0 26.538-11.881 26.538-26.537C220.23 48.881 208.349 37 193.692 37c-14.655 0-26.537 11.881-26.537 26.537 0 14.656 11.882 26.537 26.537 26.537"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M188.985 76.577a3.366 3.366 0 0 1-2.413-1.02l-9.415-9.67a3.37 3.37 0 0 1 4.827-4.7l7 7.192 16.418-16.863a3.369 3.369 0 0 1 4.826 4.7l-18.83 19.34a3.368 3.368 0 0 1-2.413 1.02"
      }), h("path", {
        fill: "#000000",
        d: "M211.737 185.292l18.375 9.188-18.375 9.187zM193.362 216.43a3.575 3.575 0 0 1-3.575-3.576v-14.8H73.159v14.8a3.576 3.576 0 0 1-7.15 0v-36.75a3.575 3.575 0 1 1 7.15 0v14.8h116.628v-14.8a3.574 3.574 0 1 1 7.15 0v36.75c0 1.974-1.6 3.575-3.575 3.575"
      }))));
    }
  }]);

  return Image;
}(m);

var Image$a = /*#__PURE__*/function (_Component) {
  _inherits(Image, _Component);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return h("picture", {
        className: "".concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "264",
        height: "264",
        viewBox: "0 0 264 264"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        fill: "#45D1E3",
        d: "M163.063 53.159H71.188A9.188 9.188 0 0 0 62 62.347v165.374a9.189 9.189 0 0 0 9.188 9.188h91.875a9.189 9.189 0 0 0 9.188-9.188V62.347a9.188 9.188 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M177.056 39.166H85.18a9.188 9.188 0 0 0-9.188 9.188v165.374a9.189 9.189 0 0 0 9.188 9.188h91.875a9.188 9.188 0 0 0 9.188-9.188V48.354a9.187 9.187 0 0 0-9.188-9.188"
      }), h("path", {
        fill: "#000000",
        d: "M97.737 182.797h66.762V60.909H97.737v121.888zm70.131 6.738h-73.5A3.369 3.369 0 0 1 91 186.166V57.541a3.368 3.368 0 0 1 3.368-3.369h73.5a3.37 3.37 0 0 1 3.369 3.369v128.625a3.37 3.37 0 0 1-3.369 3.369zM85.181 42.534a5.826 5.826 0 0 0-5.819 5.819v165.376a5.825 5.825 0 0 0 5.819 5.818h91.874a5.825 5.825 0 0 0 5.819-5.818V48.353a5.826 5.826 0 0 0-5.819-5.819H85.181zm91.874 183.751H85.181c-6.924 0-12.556-5.633-12.556-12.556V48.353c0-6.923 5.632-12.556 12.556-12.556h91.874c6.924 0 12.557 5.633 12.557 12.556v165.376c0 6.923-5.633 12.556-12.557 12.556z"
      }), h("path", {
        fill: "#45D1E3",
        d: "M186.573 65.074c14.656 0 26.538-11.881 26.538-26.537C213.111 23.88 201.23 12 186.573 12s-26.537 11.88-26.537 26.537c0 14.656 11.881 26.537 26.537 26.537"
      }), h("path", {
        fill: "#FFFFFF",
        d: "M181.866 51.577a3.373 3.373 0 0 1-2.414-1.02l-9.414-9.67a3.369 3.369 0 1 1 4.827-4.7l7.001 7.192 16.416-16.862a3.369 3.369 0 1 1 4.827 4.7l-18.829 19.34a3.373 3.373 0 0 1-2.414 1.02"
      }), h("path", {
        fill: "#000000",
        d: "M149.493 207.91h-36.75a3.369 3.369 0 0 1 0-6.738h36.75a3.37 3.37 0 0 1 0 6.738M131.118 150.407c9.717 0 18.288-4.863 23.445-12.278l-1.42-5.68a12.237 12.237 0 0 0-8.002-8.642l-4.95-1.65a2.329 2.329 0 0 0-1.776.127 16.315 16.315 0 0 1-14.594 0 2.329 2.329 0 0 0-1.775-.127l-4.95 1.65a12.237 12.237 0 0 0-8.003 8.642l-1.42 5.68c5.157 7.416 13.728 12.279 23.445 12.279M131.118 93.395c-8.159 0-11.162 6.36-10.083 12.831l.583 3.5a9.63 9.63 0 0 0 19 0l.583-3.5c1.08-6.472-1.925-12.83-10.083-12.83"
      }))));
    }
  }]);

  return Image;
}(m);

var Icon$2m = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.2293 1.14766C9.96413 0.412827 10.9608 0 12 0H20.0816C21.1208 0 22.1175 0.412827 22.8523 1.14766C23.5872 1.8825 24 2.87915 24 3.91837V8.32653C24 9.36575 23.5872 10.3624 22.8523 11.0972C22.1175 11.8321 21.1208 12.2449 20.0816 12.2449H19.7527L16.3661 15.6315C16.086 15.9116 15.6646 15.9954 15.2986 15.8438C14.9325 15.6922 14.6939 15.335 14.6939 14.9388V12.2449H12C10.9608 12.2449 9.96413 11.8321 9.2293 11.0972C8.49446 10.3624 8.08163 9.36575 8.08163 8.32653V3.91837C8.08163 2.87915 8.49446 1.8825 9.2293 1.14766ZM12 1.95918C11.4804 1.95918 10.9821 2.1656 10.6146 2.53302C10.2472 2.90043 10.0408 3.39876 10.0408 3.91837V8.32653C10.0408 8.84614 10.2472 9.34447 10.6146 9.71188C10.9821 10.0793 11.4804 10.2857 12 10.2857H15.6735C16.2145 10.2857 16.6531 10.7243 16.6531 11.2653V12.5738L18.6543 10.5726C18.838 10.3889 19.0871 10.2857 19.3469 10.2857H20.0816C20.6012 10.2857 21.0996 10.0793 21.467 9.71188C21.8344 9.34447 22.0408 8.84614 22.0408 8.32653V3.91837C22.0408 3.39876 21.8344 2.90043 21.467 2.53302C21.0996 2.1656 20.6012 1.95918 20.0816 1.95918H12ZM6.12245 1.46939L3.65682 1.46939C2.68717 1.46974 1.75699 1.85509 1.07134 2.54073C0.385701 3.22637 0.000354592 4.15656 0 5.1262V18.6122V20.3445C0.000354825 21.3141 0.385782 22.2439 1.07153 22.9294C1.75728 23.6149 2.6872 24 3.65682 24H10.0584C11.028 24 11.9579 23.6148 12.6435 22.9292C13.3291 22.2436 13.7143 21.3138 13.7143 20.3442V18.6122V14.2041C13.7143 13.6631 13.2757 13.2245 12.7347 13.2245C12.1937 13.2245 11.7551 13.6631 11.7551 14.2041V17.6327H1.95918V5.1262C1.95944 4.67605 2.13838 4.2444 2.4567 3.92608C2.77501 3.60777 3.20702 3.42883 3.65717 3.42857H6.12245C6.66346 3.42857 7.10204 2.98999 7.10204 2.44898C7.10204 1.90797 6.66346 1.46939 6.12245 1.46939ZM1.95918 19.5918V20.3438C1.95944 20.7938 2.13836 21.2257 2.45663 21.5438C2.77498 21.862 3.20668 22.0408 3.65682 22.0408H10.0584C10.5084 22.0408 10.94 21.8621 11.2582 21.5439C11.5763 21.2257 11.7551 20.7941 11.7551 20.3442V19.5918H1.95918ZM12.3673 4.77551C12.1009 4.77551 11.8405 4.85451 11.619 5.00251C11.3975 5.15051 11.2249 5.36088 11.1229 5.607C11.021 5.85312 10.9943 6.12394 11.0463 6.38522C11.0983 6.6465 11.2265 6.8865 11.4149 7.07488C11.6033 7.26325 11.8433 7.39153 12.1046 7.44351C12.3659 7.49548 12.6367 7.4688 12.8828 7.36686C13.1289 7.26491 13.3393 7.09227 13.4873 6.87077C13.6353 6.64927 13.7143 6.38885 13.7143 6.12245C13.7143 5.76522 13.5724 5.42262 13.3198 5.17002C13.0672 4.91742 12.7246 4.77551 12.3673 4.77551ZM15.2925 5.00251C15.514 4.85451 15.7744 4.77551 16.0408 4.77551C16.398 4.77551 16.7406 4.91742 16.9932 5.17002C17.2458 5.42262 17.3878 5.76522 17.3878 6.12245C17.3878 6.38885 17.3088 6.64927 17.1608 6.87077C17.0128 7.09227 16.8024 7.26491 16.5563 7.36686C16.3101 7.4688 16.0393 7.49548 15.778 7.44351C15.5168 7.39153 15.2768 7.26325 15.0884 7.07488C14.9 6.8865 14.7717 6.6465 14.7198 6.38522C14.6678 6.12394 14.6945 5.85312 14.7964 5.607C14.8984 5.36088 15.071 5.15051 15.2925 5.00251ZM19.7143 4.77551C19.4479 4.77551 19.1875 4.85451 18.966 5.00251C18.7445 5.15051 18.5718 5.36088 18.4699 5.607C18.3679 5.85312 18.3413 6.12394 18.3932 6.38522C18.4452 6.6465 18.5735 6.8865 18.7619 7.07488C18.9502 7.26325 19.1902 7.39153 19.4515 7.44351C19.7128 7.49548 19.9836 7.4688 20.2297 7.36686C20.4759 7.26491 20.6862 7.09227 20.8342 6.87077C20.9822 6.64927 21.0612 6.38885 21.0612 6.12245C21.0612 5.76522 20.9193 5.42262 20.6667 5.17002C20.4141 4.91742 20.0715 4.77551 19.7143 4.77551Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2n = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.9781 4.03932C8.30999 2.70743 10.1164 1.95918 12 1.95918C13.8836 1.95918 15.69 2.70743 17.0219 4.03932C18.1275 5.1449 18.8309 6.57746 19.038 8.10969C18.6982 8.17195 18.3825 8.33602 18.1348 8.58374C17.8133 8.90523 17.6327 9.34126 17.6327 9.79592V17.1429C17.6327 17.5975 17.8133 18.0335 18.1348 18.355C18.3948 18.6151 18.7298 18.783 19.089 18.8376C19.0385 19.2743 18.8421 19.6837 18.5282 19.9976C18.1608 20.365 17.6625 20.5714 17.1429 20.5714H15.7139C15.5926 20.2935 15.4196 20.0379 15.2011 19.8193C14.7418 19.3601 14.1189 19.102 13.4694 19.102H12C11.3505 19.102 10.7276 19.3601 10.2683 19.8193C9.80904 20.2786 9.55102 20.9015 9.55102 21.551C9.55102 22.2005 9.80904 22.8234 10.2683 23.2827C10.7276 23.742 11.3505 24 12 24H13.4694C14.1189 24 14.7418 23.742 15.2011 23.2827C15.4196 23.0641 15.5926 22.8085 15.7139 22.5306H17.1429C18.1821 22.5306 19.1787 22.1178 19.9136 21.3829C20.6198 20.6767 21.0286 19.7285 21.0594 18.7332C21.7321 18.5598 22.3527 18.2091 22.8523 17.7095C23.5872 16.9746 24 15.978 24 14.9388V12C24 10.9608 23.5872 9.96413 22.8523 9.2293C22.343 8.71992 21.7078 8.36527 21.0198 8.1956C20.8197 6.1101 19.9013 4.14802 18.4073 2.65397C16.7079 0.954662 14.4032 0 12 0C9.59682 0 7.29206 0.954662 5.59275 2.65397C4.09869 4.14802 3.18026 6.1101 2.98019 8.1956C2.29223 8.36527 1.65704 8.71991 1.14766 9.2293C0.412827 9.96413 0 10.9608 0 12V14.9388C0 15.978 0.412827 16.9746 1.14766 17.7095C1.8825 18.4443 2.87915 18.8571 3.91837 18.8571H4.65306C5.10772 18.8571 5.54375 18.6765 5.86524 18.355C6.18674 18.0336 6.36735 17.5975 6.36735 17.1429V9.79592C6.36735 9.34126 6.18674 8.90523 5.86524 8.58374C5.61753 8.33602 5.30181 8.17194 4.96196 8.10969C5.1691 6.57745 5.87252 5.1449 6.9781 4.03932ZM21.467 16.3241C21.0996 16.6915 20.6012 16.898 20.0816 16.898H19.5918V10.0408H20.0816C20.6012 10.0408 21.0996 10.2472 21.467 10.6146C21.8344 10.9821 22.0408 11.4804 22.0408 12V14.9388C22.0408 15.4584 21.8344 15.9567 21.467 16.3241ZM3.91837 10.0408C3.39876 10.0408 2.90043 10.2472 2.53302 10.6146C2.1656 10.9821 1.95918 11.4804 1.95918 12V14.9388C1.95918 15.4584 2.1656 15.9567 2.53302 16.3241C2.90043 16.6915 3.39876 16.898 3.91837 16.898H4.40816V10.0408H3.91837ZM11.6537 21.2047C11.7455 21.1128 11.8701 21.0612 12 21.0612H13.4694C13.5993 21.0612 13.7239 21.1128 13.8157 21.2047C13.9076 21.2965 13.9592 21.4211 13.9592 21.551C13.9592 21.6809 13.9076 21.8055 13.8157 21.8974C13.7239 21.9892 13.5993 22.0408 13.4694 22.0408H12C11.8701 22.0408 11.7455 21.9892 11.6537 21.8974C11.5618 21.8055 11.5102 21.6809 11.5102 21.551C11.5102 21.4211 11.5618 21.2965 11.6537 21.2047Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2o = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.561 5.854L16.146 0.439C15.8641 0.158997 15.4833 0.00128125 15.086 0L3.5 0C3.10218 0 2.72064 0.158035 2.43934 0.43934C2.15804 0.720644 2 1.10218 2 1.5V22.5C2 22.8978 2.15804 23.2794 2.43934 23.5607C2.72064 23.842 3.10218 24 3.5 24H21.5C21.6326 24 21.7598 23.9473 21.8536 23.8536C21.9473 23.7598 22 23.6326 22 23.5V6.914C22.0005 6.71707 21.962 6.522 21.8866 6.34005C21.8113 6.15811 21.7006 5.99291 21.561 5.854ZM9.817 11.183L6.447 9.923C5.98667 9.70349 5.60273 9.35099 5.34479 8.91104C5.08684 8.47109 4.96674 7.96391 5 7.455C4.99565 6.82282 5.22823 6.21193 5.65191 5.74271C6.0756 5.2735 6.65966 4.97998 7.289 4.92C7.34791 4.9109 7.40161 4.88097 7.44033 4.83565C7.47905 4.79032 7.50022 4.73261 7.5 4.673V4C7.5 3.73478 7.60536 3.48043 7.79289 3.29289C7.98043 3.10536 8.23478 3 8.5 3C8.76522 3 9.01957 3.10536 9.20711 3.29289C9.39464 3.48043 9.5 3.73478 9.5 4V4.625C9.5 4.6913 9.52634 4.75489 9.57322 4.80178C9.62011 4.84866 9.6837 4.875 9.75 4.875H11C11.2652 4.875 11.5196 4.98036 11.7071 5.16789C11.8946 5.35543 12 5.60978 12 5.875C12 6.14022 11.8946 6.39457 11.7071 6.58211C11.5196 6.76964 11.2652 6.875 11 6.875H7.875C7 6.875 7 7.311 7 7.455C6.98412 7.67451 7.04922 7.89224 7.183 8.067L10.553 9.327C11.0142 9.54683 11.3987 9.90011 11.6567 10.3411C11.9147 10.782 12.0343 11.2903 12 11.8C12.0031 12.4313 11.77 13.041 11.3464 13.5091C10.9228 13.9773 10.3395 14.2701 9.711 14.33C9.65209 14.3391 9.59839 14.369 9.55967 14.4144C9.52095 14.4597 9.49978 14.5174 9.5 14.577V15.25C9.5 15.5152 9.39464 15.7696 9.20711 15.9571C9.01957 16.1446 8.76522 16.25 8.5 16.25C8.23478 16.25 7.98043 16.1446 7.79289 15.9571C7.60536 15.7696 7.5 15.5152 7.5 15.25V14.625C7.5 14.5587 7.47366 14.4951 7.42678 14.4482C7.37989 14.4013 7.3163 14.375 7.25 14.375H6C5.73478 14.375 5.48043 14.2696 5.29289 14.0821C5.10536 13.8946 5 13.6402 5 13.375C5 13.1098 5.10536 12.8554 5.29289 12.6679C5.48043 12.4804 5.73478 12.375 6 12.375H9.125C10 12.375 10 11.939 10 11.795C10.0159 11.5755 9.95078 11.3578 9.817 11.183ZM18.5 14.75C18.6989 14.75 18.8897 14.829 19.0303 14.9697C19.171 15.1103 19.25 15.3011 19.25 15.5C19.25 15.6989 19.171 15.8897 19.0303 16.0303C18.8897 16.171 18.6989 16.25 18.5 16.25H13.5C13.3011 16.25 13.1103 16.171 12.9697 16.0303C12.829 15.8897 12.75 15.6989 12.75 15.5C12.75 15.3011 12.829 15.1103 12.9697 14.9697C13.1103 14.829 13.3011 14.75 13.5 14.75H18.5ZM14.75 11C14.75 10.8011 14.829 10.6103 14.9697 10.4697C15.1103 10.329 15.3011 10.25 15.5 10.25H18.5C18.6989 10.25 18.8897 10.329 19.0303 10.4697C19.171 10.6103 19.25 10.8011 19.25 11C19.25 11.1989 19.171 11.3897 19.0303 11.5303C18.8897 11.671 18.6989 11.75 18.5 11.75H15.5C15.3011 11.75 15.1103 11.671 14.9697 11.5303C14.829 11.3897 14.75 11.1989 14.75 11ZM18.5 19.25C18.6989 19.25 18.8897 19.329 19.0303 19.4697C19.171 19.6103 19.25 19.8011 19.25 20C19.25 20.1989 19.171 20.3897 19.0303 20.5303C18.8897 20.671 18.6989 20.75 18.5 20.75H8.5C8.30109 20.75 8.11032 20.671 7.96967 20.5303C7.82902 20.3897 7.75 20.1989 7.75 20C7.75 19.8011 7.82902 19.6103 7.96967 19.4697C8.11032 19.329 8.30109 19.25 8.5 19.25H18.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2p = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M9.71739 10.8266V11.044C9.71739 11.2841 9.52273 11.4788 9.28261 11.4788H2.43478C2.19466 11.4788 2 11.2841 2 11.044V7.78315C2 7.3029 2.38932 6.91359 2.86957 6.91359H7.67391C7.89694 4.69167 9.76692 3 12 3C14.2331 3 16.1031 4.69167 16.3261 6.91359H21.1304C21.6107 6.91359 22 7.3029 22 7.78315V11.044C22 11.2841 21.8053 11.4788 21.5652 11.4788H14.7174C14.4773 11.4788 14.2826 11.2841 14.2826 11.044V10.8266C14.2826 10.4664 13.9906 10.1745 13.6304 10.1745H10.3696C10.0094 10.1745 9.71739 10.4664 9.71739 10.8266ZM12 4.73967C10.727 4.73967 9.63998 5.65844 9.42782 6.91359H14.5722C14.36 5.65844 13.273 4.73967 12 4.73967ZM14.2826 13.5449V13.2179C14.2821 13.0955 14.3333 12.9786 14.4235 12.8958C14.5137 12.813 14.6346 12.7721 14.7565 12.7832H21.5652C21.8053 12.7832 22 12.9778 22 13.2179V19.0875C22 19.5677 21.6107 19.9571 21.1304 19.9571H2.86957C2.38932 19.9571 2 19.5677 2 19.0875V13.2188C2 12.9787 2.19466 12.784 2.43478 12.784H9.28348C9.52361 12.784 9.71827 12.9787 9.71827 13.2188V13.4545C9.69958 14.5649 10.4615 15.5365 11.5444 15.7831C12.2159 15.9187 12.9129 15.7458 13.4433 15.3122C13.9738 14.8786 14.2818 14.23 14.2826 13.5449ZM12.5435 11.4797C12.7836 11.4797 12.9783 11.6743 12.9783 11.9145V13.5449C12.9783 14.0852 12.5403 14.5232 12 14.5232C11.4597 14.5232 11.0217 14.0852 11.0217 13.5449V11.9145C11.0217 11.6743 11.2164 11.4797 11.4565 11.4797H12.5435Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

Icon$2p.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$2q = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.2174 9.47826C20.6496 9.47826 21 9.82865 21 10.2609V19.6522C21 20.0844 20.6496 20.4348 20.2174 20.4348H3.78261C3.35039 20.4348 3 20.0844 3 19.6522V10.2609C3 9.82865 3.35039 9.47826 3.78261 9.47826H20.2174ZM12 17.6957C13.5128 17.6957 14.7391 16.4693 14.7391 14.9565C14.7391 13.4437 13.5128 12.2174 12 12.2174C10.4872 12.2174 9.26087 13.4437 9.26087 14.9565C9.26087 16.4693 10.4872 17.6957 12 17.6957ZM5.34783 8.30435C4.9156 8.30435 4.56522 7.95396 4.56522 7.52174C4.56522 7.08952 4.9156 6.73913 5.34783 6.73913H18.6522C19.0844 6.73913 19.4348 7.08952 19.4348 7.52174C19.4348 7.95396 19.0844 8.30435 18.6522 8.30435H5.34783ZM6.91304 5.56522C6.48082 5.56522 6.13043 5.21483 6.13043 4.78261C6.13043 4.35039 6.48082 4 6.91304 4H17.087C17.5192 4 17.8696 4.35039 17.8696 4.78261C17.8696 5.21483 17.5192 5.56522 17.087 5.56522H6.91304Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

Icon$2q.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$2r = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.75 12.7919H20.7483C20.8746 12.7919 20.9941 12.8492 21.0731 12.9477C21.1522 13.0462 21.1823 13.1752 21.155 13.2985L19.6225 20.2294V20.2352C19.4716 20.7797 18.9654 21.1484 18.4008 21.1252H5.59917C5.03461 21.1484 4.52844 20.7797 4.3775 20.2352L2.84333 13.2985C2.81605 13.1752 2.84617 13.0462 2.92522 12.9477C3.00426 12.8492 3.12371 12.7919 3.25 12.7919H20.75ZM16.7917 15.2919C16.7917 14.9467 16.5118 14.6669 16.1667 14.6669C15.8215 14.6669 15.5417 14.9467 15.5417 15.2919V18.6252C15.5417 18.9704 15.8215 19.2502 16.1667 19.2502C16.5118 19.2502 16.7917 18.9704 16.7917 18.6252V15.2919ZM12.625 15.2919C12.625 14.9467 12.3452 14.6669 12 14.6669C11.6548 14.6669 11.375 14.9467 11.375 15.2919V18.6252C11.375 18.9704 11.6548 19.2502 12 19.2502C12.3452 19.2502 12.625 18.9704 12.625 18.6252V15.2919ZM8.875 15.2919C8.875 14.9467 8.59518 14.6669 8.25 14.6669C7.90482 14.6669 7.625 14.9467 7.625 15.2919V18.6252C7.625 18.9704 7.90482 19.2502 8.25 19.2502C8.59518 19.2502 8.875 18.9704 8.875 18.6252V15.2919ZM20.75 8.6252C21.4404 8.6252 22 9.18484 22 9.8752V10.7085C22 11.3989 21.4404 11.9585 20.75 11.9585H3.25C2.55964 11.9585 2 11.3989 2 10.7085V9.8752C2 9.18484 2.55964 8.6252 3.25 8.6252H4.51999C4.5808 8.6252 4.63859 8.59873 4.67832 8.55269L9.12418 3.36438C9.36637 3.08154 9.74106 2.94939 10.1071 3.01772C10.4731 3.08605 10.7749 3.34448 10.8987 3.69564C11.0226 4.04681 10.9497 4.43736 10.7075 4.7202L7.65501 8.28104C7.60188 8.34282 7.58965 8.42991 7.6237 8.50394C7.65776 8.57797 7.73186 8.62534 7.81334 8.6252H16.185C16.2665 8.62534 16.3406 8.57797 16.3746 8.50394C16.4087 8.42991 16.3965 8.34282 16.3433 8.28104L13.2908 4.7202C13.0486 4.43736 12.9757 4.04681 13.0996 3.69564C13.2234 3.34448 13.5252 3.08605 13.8913 3.01772C14.2573 2.94939 14.632 3.08154 14.8742 3.36438L19.3217 8.55269C19.3614 8.59873 19.4192 8.6252 19.48 8.6252H20.75Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

Icon$2r.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$2s = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    // eslint-disable-line fp/no-class, react/prefer-stateless-function
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M21.0042 14.6985C21.0042 15.1957 20.6011 15.5988 20.1039 15.5988H16.2954C15.9129 15.5988 15.6029 15.9088 15.6029 16.2912V20.0998C15.6029 20.597 15.1999 21 14.7027 21H9.30145C8.80428 21 8.40125 20.597 8.40125 20.0998V16.2912C8.40125 15.9088 8.09123 15.5988 7.70879 15.5988H3.90021C3.66146 15.5988 3.43249 15.5039 3.26367 15.3351C3.09485 15.1663 3 14.9373 3 14.6985V9.2973C3 8.80013 3.40304 8.39709 3.90021 8.39709H7.70879C8.09123 8.39709 8.40125 8.08706 8.40125 7.70462V3.90021C8.40125 3.40304 8.80428 3 9.30145 3H14.7027C15.1999 3 15.6029 3.40304 15.6029 3.90021V7.70877C15.6029 8.09121 15.9129 8.40125 16.2954 8.40125H20.1039C20.6011 8.40125 21.0042 8.80428 21.0042 9.30145V14.6985Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

Icon$2s.propTypes = {
  color: propTypes.string,
  className: propTypes.string
};

var Icon$2t = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 3C16 2.44772 16.4477 2 17 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H17C16.4477 22 16 21.5523 16 21V3ZM10 9C10 8.44772 10.4477 8 11 8H13C13.5523 8 14 8.44772 14 9V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V9ZM5 14C4.44772 14 4 14.4477 4 15V21C4 21.5523 4.44772 22 5 22H7C7.55228 22 8 21.5523 8 21V15C8 14.4477 7.55228 14 7 14H5Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2u = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 11.4477 17.5523 11 17 11C16.4477 11 16 11.4477 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2v = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20.995 3.25C20.995 2.55964 20.4353 2 19.745 2H5.16166C4.4713 2 3.91166 2.55964 3.91166 3.25V3.875C3.91166 4.10512 4.09821 4.29167 4.32833 4.29167H5.125C5.47018 4.29167 5.74999 4.57149 5.74999 4.91667C5.74999 5.26184 5.47018 5.54167 5.125 5.54167H2.625C2.27982 5.54167 2 5.82149 2 6.16667C2 6.51185 2.27982 6.79167 2.625 6.79167H3.49499C3.72511 6.79167 3.91166 6.97821 3.91166 7.20833V10.5417C3.91166 10.7718 4.09821 10.9583 4.32833 10.9583H5.125C5.47018 10.9583 5.74999 11.2382 5.74999 11.5833C5.74999 11.9285 5.47018 12.2083 5.125 12.2083H2.625C2.27982 12.2083 2 12.4882 2 12.8333C2 13.1785 2.27982 13.4583 2.625 13.4583H3.49499C3.72511 13.4583 3.91166 13.6449 3.91166 13.875V17.2083C3.91166 17.4385 4.09821 17.625 4.32833 17.625H5.125C5.47018 17.625 5.74999 17.9048 5.74999 18.25C5.74999 18.5952 5.47018 18.875 5.125 18.875H2.625C2.27982 18.875 2 19.1548 2 19.5C2 19.8452 2.27982 20.125 2.625 20.125H3.49499C3.72511 20.125 3.91166 20.3115 3.91166 20.5417V20.75C3.91166 21.4404 4.4713 22 5.16166 22H19.745C20.4353 22 20.995 21.4404 20.995 20.75V3.25ZM10.9825 10.5167C10.836 10.5852 10.7424 10.7324 10.7425 10.8942V16.5833C10.7425 16.9285 10.4627 17.2083 10.1175 17.2083C9.77231 17.2083 9.49249 16.9285 9.49249 16.5833V10.8958C9.49254 10.7341 9.39898 10.5869 9.25249 10.5183C8.53463 10.1816 8.07678 9.45958 8.07833 8.66667V7.58334C8.07833 6.85393 8.46747 6.17991 9.09916 5.81521C9.73086 5.4505 10.5091 5.4505 11.1408 5.81521C11.7725 6.17991 12.1617 6.85393 12.1617 7.58334V8.66667C12.1606 9.45982 11.7011 10.1809 10.9825 10.5167ZM18.7008 8.45833C18.7214 9.66126 18.0013 10.7534 16.8875 11.2083C16.7254 11.2693 16.6178 11.4243 16.6175 11.5975V16.5833C16.6175 16.9285 16.3377 17.2083 15.9925 17.2083C15.6473 17.2083 15.3675 16.9285 15.3675 16.5833V11.6008C15.3673 11.4278 15.2602 11.2729 15.0983 11.2117C13.9842 10.757 13.2637 9.6648 13.2842 8.46166V6.16667C13.2842 5.82149 13.564 5.54167 13.9092 5.54167C14.2543 5.54167 14.5342 5.82149 14.5342 6.16667V8.45833C14.5293 8.9136 14.699 9.35346 15.0083 9.6875C15.0671 9.74924 15.1576 9.76888 15.2368 9.73712C15.3159 9.70536 15.3677 9.6286 15.3675 9.54333V6.16667C15.3675 5.82149 15.6473 5.54167 15.9925 5.54167C16.3377 5.54167 16.6175 5.82149 16.6175 6.16667V9.54333C16.6173 9.6286 16.6691 9.70536 16.7482 9.73712C16.8273 9.76888 16.9179 9.74924 16.9767 9.6875C17.2864 9.35369 17.4561 8.91368 17.4508 8.45833V6.16667C17.4508 5.82149 17.7307 5.54167 18.0758 5.54167C18.421 5.54167 18.7008 5.82149 18.7008 6.16667V8.45833Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2w = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M17.5616 16.9556H19.7872C19.8989 16.9556 19.9895 17.0462 19.9895 17.1579V19.1804C19.9895 20.2975 19.0839 21.203 17.9669 21.203H5.83157C4.26774 21.203 3 19.9352 3 18.3714V5.83157C3 4.26774 4.26774 3 5.83157 3H14.7308C16.2922 3 17.5624 3.90691 17.5624 5.02255V5.21429C17.562 5.32568 17.4715 5.41574 17.3601 5.41574H6.64059C6.30549 5.41574 6.03384 5.6874 6.03384 6.02251C6.03384 6.35761 6.30549 6.62927 6.64059 6.62927C25.1365 6.62927 14.3457 6.63736 17.9669 6.63736C19.0839 6.63736 19.9895 7.54289 19.9895 8.65991C19.9895 8.65991 19.9895 9.8419 19.9895 10.4835C19.9895 10.7069 19.8084 10.888 19.585 10.888H17.649C16.193 10.8669 14.9199 11.8653 14.5933 13.2843C14.4028 14.1804 14.6267 15.1147 15.2028 15.8271C15.7788 16.5396 16.6454 16.9542 17.5616 16.9556ZM19.9886 12.1015C20.5778 12.2031 21.0063 12.7172 20.9999 13.315V14.5286C21.0063 15.1264 20.5778 15.6405 19.9886 15.7421H17.5616C16.5563 15.7421 15.7413 14.9271 15.7413 13.9218C15.7413 12.9165 16.5563 12.1015 17.5616 12.1015H19.9886Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2x = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.4099 9.99999L21.7099 15.3C22.0911 15.6888 22.0911 16.3111 21.7099 16.7L16.7099 21.7C16.4251 21.9871 15.9954 22.0745 15.6211 21.9213C15.2468 21.768 15.0016 21.4044 14.9999 21V18H4.99994C4.44765 18 3.99994 17.5523 3.99994 17V15C3.99994 14.4477 4.44765 14 4.99994 14H7.58994L2.28994 8.70999C2.10063 8.52222 1.99414 8.26662 1.99414 7.99999C1.99414 7.73335 2.10063 7.47775 2.28994 7.28999L7.28994 2.28999C7.57603 2.00153 8.00821 1.91482 8.38342 2.07062C8.75864 2.22641 9.0023 2.59372 8.99994 2.99999V5.99999H18.9999C19.5522 5.99999 19.9999 6.4477 19.9999 6.99999V8.99999C19.9999 9.55227 19.5522 9.99999 18.9999 9.99999H16.4099ZM8.99994 9.99999V14H14.9999V9.99999H8.99994Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2y = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M8.66667 19.9167C8.78173 19.9167 8.875 20.0099 8.875 20.125V20.5417C8.875 21.3471 8.22208 22 7.41667 22C6.61125 22 5.95833 21.3471 5.95833 20.5417V20.125C5.95833 20.0099 6.05161 19.9167 6.16667 19.9167H8.66667ZM17.8333 19.9167C17.9484 19.9167 18.0417 20.0099 18.0417 20.125V20.5417C18.0417 21.3471 17.3887 22 16.5833 22C15.7779 22 15.125 21.3471 15.125 20.5417V20.125C15.125 20.0099 15.2183 19.9167 15.3333 19.9167H17.8333ZM20.5417 5.54417C21.3457 5.54509 21.9977 6.19594 22 7V9.5C21.9991 10.305 21.3467 10.9574 20.5417 10.9583H20.125C20.0099 10.9583 19.9167 11.0516 19.9167 11.1667V16.5833C19.9167 17.964 18.7974 19.0833 17.4167 19.0833H6.58333C5.20262 19.0833 4.08333 17.964 4.08333 16.5833V11.1667C4.08333 11.0516 3.99006 10.9583 3.875 10.9583H3.45833C2.6533 10.9574 2.00092 10.305 2 9.5V7C2.00092 6.19497 2.6533 5.54258 3.45833 5.54167H3.875C3.99006 5.54167 4.08333 5.44839 4.08333 5.33333V4.5C4.08333 3.11929 5.20262 2 6.58333 2H17.4167C18.7974 2 19.9167 3.11929 19.9167 4.5V5.33333C19.916 5.38902 19.9376 5.44266 19.9768 5.48227C20.0159 5.52188 20.0693 5.54418 20.125 5.54417H20.5417ZM8.25 15.9592C8.59518 15.9592 8.875 15.6794 8.875 15.3342C8.875 14.989 8.59518 14.7092 8.25 14.7092H6.58333C6.23815 14.7092 5.95833 14.989 5.95833 15.3342C5.95833 15.6794 6.23815 15.9592 6.58333 15.9592H8.25ZM17.4167 15.9592C17.7618 15.9592 18.0417 15.6794 18.0417 15.3342C18.0417 14.989 17.7618 14.7092 17.4167 14.7092H15.75C15.4048 14.7092 15.125 14.989 15.125 15.3342C15.125 15.6794 15.4048 15.9592 15.75 15.9592H17.4167ZM18.25 12.6258V4.5C18.25 4.03976 17.8769 3.66667 17.4167 3.66667H6.58333C6.1231 3.66667 5.75 4.03976 5.75 4.5V12.6258C5.75 12.7409 5.84327 12.8342 5.95833 12.8342H18.0417C18.1567 12.8342 18.25 12.7409 18.25 12.6258Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2z = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M6.98171 7.47372H6.98257C6.66574 7.34212 6.45925 7.03277 6.45925 6.68969C6.45925 6.34662 6.66574 6.03726 6.98257 5.90565L9.00993 5.06432C9.21822 4.97856 9.45195 4.97856 9.66024 5.06432L14.1497 6.91934C14.2279 6.95268 14.2787 7.02953 14.2787 7.1146C14.2787 7.19967 14.2279 7.27653 14.1497 7.30987L10.6247 8.84397C10.5186 8.88903 10.3988 8.88903 10.2927 8.84397L6.98171 7.47372ZM21.838 7.24365V7.24279C22.2864 8.32567 21.7721 9.56699 20.6893 10.0156L17.0005 11.3901C16.8997 11.4275 16.8169 11.5019 16.7687 11.5981L13.5859 17.9654C13.5033 18.1303 13.3692 18.2638 13.2039 18.3457L10.9032 19.4961C10.5909 19.6521 10.2149 19.601 9.9556 19.3673C9.69627 19.1337 9.60638 18.7651 9.72902 18.4383L11.3896 14.0075C11.4196 13.9288 11.3999 13.8398 11.3397 13.781C11.2794 13.7222 11.1899 13.7048 11.112 13.7366L6.34328 15.6451C6.02814 15.7712 5.66822 15.6974 5.42808 15.4575L2.24866 12.2781C2.04926 12.0787 1.96189 11.7933 2.01549 11.5164C2.06909 11.2396 2.25667 11.0074 2.51609 10.8968L4.72853 9.9485C4.95821 9.85135 5.21875 9.85878 5.44251 9.96886L7.45969 10.9775C7.57199 11.0338 7.7035 11.0376 7.81881 10.9877L19.0584 6.09583H19.0652C20.1479 5.64738 21.3891 6.1612 21.838 7.24365Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2A = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12.2873 6.34762L19.8073 13.5251C20.0136 13.7222 20.1048 14.0111 20.0489 14.2909L18.9157 19.9886C18.6791 21.1549 17.6561 21.9949 16.466 22H7.5337C6.34413 21.9958 5.32102 21.1568 5.08398 19.9911L3.94993 14.2909C3.89406 14.0111 3.98524 13.7222 4.19157 13.5251L11.7124 6.34762C11.8733 6.1942 12.1264 6.1942 12.2873 6.34762ZM11.9998 12.6427C11.2858 12.6425 10.601 12.9259 10.0959 13.4307C9.59091 13.9354 9.30705 14.6201 9.30683 15.3341C9.30615 16.4235 9.96185 17.406 10.9681 17.8233C11.9744 18.2407 13.133 18.0107 13.9035 17.2406C14.6741 16.4705 14.9048 15.3121 14.488 14.3056C14.0713 13.299 13.0892 12.6427 11.9998 12.6427ZM4.10074 11.6679C3.64487 12.0826 2.95338 12.0989 2.47843 11.7062C2.42796 11.6752 2.37979 11.6407 2.33428 11.6029C2.10833 11.3597 1.98838 11.0366 2.00089 10.705C2.01339 10.3733 2.15734 10.0602 2.40095 9.83472L10.0001 2.79885C11.127 1.72921 12.8956 1.73436 14.0163 2.81053L21.5987 9.83472C22.1047 10.3038 22.1349 11.0941 21.6663 11.6004C21.6247 11.6416 21.5804 11.68 21.5337 11.7154C21.0544 12.1129 20.3544 12.0925 19.899 11.6679L12.3006 4.63031C12.1408 4.46671 11.8795 4.4608 11.7124 4.61699L4.10074 11.6679Z",
        fill: "#121E31"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2B = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M19.6713 0.586644C19.2917 0.426881 18.8521 0.514395 18.5621 0.806445L17.9353 1.4343C17.8355 1.53301 17.6748 1.53301 17.575 1.4343L16.4394 0.297647C16.0425 -0.0992156 15.3984 -0.0992156 15.0005 0.297647L13.8649 1.4343C13.7651 1.53301 13.6044 1.53301 13.5046 1.4343L12.369 0.297647C11.9711 -0.0992156 11.327 -0.0992156 10.9301 0.297647L9.79449 1.4343C9.69476 1.53301 9.53398 1.53301 9.43426 1.4343L8.29862 0.297647C7.90074 -0.0992156 7.25762 -0.0992156 6.85974 0.297647L5.7241 1.43328C5.6254 1.53301 5.46563 1.53403 5.36591 1.43532C5.36489 1.4343 5.36489 1.4343 5.36388 1.43328L4.73805 0.806445C4.34119 0.408565 3.69705 0.407547 3.29917 0.80441C3.10787 0.995718 3 1.2552 3 1.52589V22.4741C3 23.0358 3.45588 23.4917 4.0176 23.4917C4.28726 23.4917 4.54573 23.3849 4.73704 23.1936L5.36388 22.5667C5.4636 22.468 5.62438 22.468 5.7241 22.5667L6.85974 23.7024C7.25762 24.0992 7.90176 24.0992 8.29862 23.7024L9.43426 22.5667C9.53398 22.468 9.69476 22.468 9.79449 22.5667L10.9301 23.7024C11.328 24.0992 11.9721 24.0992 12.369 23.7024L13.5046 22.5667C13.6044 22.468 13.7651 22.468 13.8649 22.5667L15.0005 23.7024C15.3984 24.0992 16.0425 24.0992 16.4394 23.7024L17.575 22.5667C17.6748 22.468 17.8355 22.468 17.9353 22.5667L18.5621 23.1936C18.96 23.5904 19.6041 23.5904 20.001 23.1936C20.1913 23.0033 20.2991 22.7438 20.2991 22.4741V1.52589C20.2991 1.11478 20.0508 0.744371 19.6713 0.586644ZM16.7375 13.7808H15.7199C15.2987 13.7808 14.9568 13.4389 14.9568 13.0176C14.9568 12.5963 15.2987 12.2544 15.7199 12.2544H16.7375C17.1588 12.2544 17.5007 12.5963 17.5007 13.0176C17.5007 13.4389 17.1588 13.7808 16.7375 13.7808ZM17.5007 17.088C17.5007 17.5093 17.1588 17.8512 16.7375 17.8512H15.7199C15.2987 17.8512 14.9568 17.5093 14.9568 17.088C14.9568 16.6667 15.2987 16.3248 15.7199 16.3248H16.7375C17.1588 16.3248 17.5007 16.6667 17.5007 17.088ZM16.7375 9.71041H15.7199C15.2987 9.71041 14.9568 9.3685 14.9568 8.94721C14.9568 8.52593 15.2987 8.18402 15.7199 8.18402H16.7375C17.1588 8.18402 17.5007 8.52593 17.5007 8.94721C17.5007 9.3685 17.1588 9.71041 16.7375 9.71041ZM6.56159 13.7808C6.1403 13.7808 5.79839 13.4389 5.79839 13.0176C5.79839 12.5963 6.1403 12.2544 6.56159 12.2544H11.6496C12.0709 12.2544 12.4128 12.5963 12.4128 13.0176C12.4128 13.4389 12.0709 13.7808 11.6496 13.7808H6.56159ZM10.3776 17.088C10.3776 17.5093 10.0357 17.8512 9.61437 17.8512H6.56159C6.1403 17.8512 5.79839 17.5093 5.79839 17.088C5.79839 16.6667 6.1403 16.3248 6.56159 16.3248H9.61437C10.0357 16.3248 10.3776 16.6667 10.3776 17.088ZM5.79839 8.94721C5.79839 8.52593 6.1403 8.18402 6.56159 8.18402H10.632C11.0533 8.18402 11.3952 8.52593 11.3952 8.94721C11.3952 9.3685 11.0533 9.71041 10.632 9.71041H6.56159C6.1403 9.71041 5.79839 9.3685 5.79839 8.94721Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2C = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "25",
        viewBox: "0 0 24 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.26364 9.81081C3.43242 9.97959 3.66134 10.0744 3.90003 10.0744C4.13873 10.0744 4.36765 9.97959 4.53643 9.81081C4.70521 9.64202 4.80003 9.4131 4.80003 9.17441C4.7948 7.77457 5.18942 6.40235 5.93748 5.21915C6.68555 4.03595 7.75594 3.09097 9.02276 2.49538C10.2896 1.89978 11.7001 1.67834 13.0885 1.85709C14.4769 2.03584 15.7854 2.60735 16.86 3.50441C17.0457 3.64156 17.2769 3.70214 17.506 3.67363C17.735 3.64513 17.9443 3.52972 18.0907 3.35125C18.2371 3.17279 18.3093 2.94491 18.2924 2.71472C18.2755 2.48453 18.1709 2.26962 18 2.11441C16.6619 1.00173 15.0341 0.293755 13.3078 0.0735477C11.5814 -0.14666 9.82807 0.130033 8.25343 0.871165C6.67878 1.6123 5.34816 2.78713 4.41766 4.25782C3.48717 5.72852 2.99539 7.43408 3.00003 9.17441C3.00003 9.4131 3.09485 9.64202 3.26364 9.81081ZM10.49 24.1744C11.0376 24.2748 11.5933 24.325 12.15 24.3244C14.5751 24.3191 16.8994 23.3534 18.6142 21.6386C20.329 19.9238 21.2947 17.5995 21.3 15.1744V9.17441C21.2996 8.03575 21.0894 6.90691 20.68 5.84441C20.5925 5.62163 20.4201 5.44274 20.2006 5.3471C19.9812 5.25145 19.7328 5.24689 19.51 5.33441C19.2872 5.42193 19.1083 5.59437 19.0127 5.81379C18.9171 6.03321 18.9125 6.28163 19 6.50441C19.3309 7.35568 19.5005 8.2611 19.5 9.17441V15.1744C19.5053 16.1468 19.3178 17.1107 18.9485 18.0102C18.5791 18.9098 18.0351 19.7272 17.3479 20.4153C16.6608 21.1033 15.8441 21.6484 14.9451 22.019C14.046 22.3896 13.0824 22.5784 12.11 22.5744C11.6607 22.5746 11.2122 22.5345 10.77 22.4544C10.5423 22.4196 10.3099 22.4756 10.123 22.6102C9.93599 22.7448 9.80927 22.9474 9.77002 23.1744C9.73783 23.4018 9.79479 23.6328 9.92897 23.8192C10.0631 24.0055 10.2642 24.1328 10.49 24.1744ZM6.90003 22.4444C6.69128 22.4434 6.48952 22.3691 6.33003 22.2344C5.28601 21.3783 4.44555 20.3007 3.86959 19.0796C3.29363 17.8585 2.9966 16.5245 3.00003 15.1744V12.9244C3.00003 12.6857 3.09485 12.4568 3.26363 12.288C3.43242 12.1192 3.66133 12.0244 3.90003 12.0244C4.13872 12.0244 4.36764 12.1192 4.53643 12.288C4.70521 12.4568 4.80003 12.6857 4.80003 12.9244V15.1744C4.79756 16.2582 5.0358 17.3291 5.49753 18.3096C5.95927 19.2901 6.63298 20.1559 7.47003 20.8444C7.56226 20.919 7.63882 21.0112 7.69531 21.1155C7.7518 21.2199 7.7871 21.3343 7.79918 21.4524C7.81126 21.5704 7.79989 21.6897 7.76571 21.8033C7.73153 21.9169 7.67522 22.0226 7.60003 22.1144C7.51388 22.2164 7.40677 22.2987 7.28599 22.3557C7.1652 22.4126 7.03356 22.4429 6.90003 22.4444ZM15.2636 15.8108C15.4324 15.9796 15.6613 16.0744 15.9 16.0744C16.1387 16.0744 16.3676 15.9796 16.5364 15.8108C16.7052 15.642 16.8 15.4131 16.8 15.1744V9.17441C16.8 8.31085 16.5595 7.46435 16.1055 6.72976C15.6515 5.99517 15.0019 5.40152 14.2295 5.01533C13.4572 4.62913 12.5925 4.46565 11.7324 4.5432C10.8723 4.62075 10.0508 4.93628 9.36 5.45441C9.16904 5.59763 9.0428 5.81084 9.00905 6.04713C8.99233 6.16413 8.99883 6.28328 9.02816 6.39778C9.05749 6.51227 9.10909 6.61986 9.18 6.71441C9.25091 6.80896 9.33976 6.88862 9.44146 6.94884C9.54316 7.00906 9.65572 7.04865 9.77272 7.06537C9.88972 7.08208 10.0089 7.07559 10.1234 7.04626C10.2379 7.01692 10.3454 6.96533 10.44 6.89441C10.8634 6.57685 11.3669 6.38346 11.8941 6.33593C12.4212 6.2884 12.9512 6.38859 13.4246 6.62529C13.898 6.862 14.2961 7.22585 14.5744 7.67608C14.8526 8.12631 15 8.64513 15 9.17441V15.1744C15 15.4131 15.0948 15.642 15.2636 15.8108ZM12.15 19.8244C10.9167 19.8244 9.734 19.3345 8.86195 18.4625C7.98991 17.5904 7.5 16.4077 7.5 15.1744V9.17441C7.5 8.93571 7.59482 8.7068 7.7636 8.53801C7.93239 8.36923 8.16131 8.27441 8.4 8.27441C8.63869 8.27441 8.86761 8.36923 9.0364 8.53801C9.20518 8.7068 9.3 8.93571 9.3 9.17441V15.1744C9.30264 15.9295 9.60375 16.6528 10.1377 17.1868C10.6716 17.7207 11.3949 18.0218 12.15 18.0244C12.5427 18.0258 12.9312 17.944 13.29 17.7844C13.3983 17.7371 13.5149 17.7117 13.6331 17.7094C13.7513 17.7072 13.8688 17.7283 13.9788 17.7715C14.0888 17.8147 14.1893 17.8791 14.2744 17.9611C14.3596 18.0431 14.4277 18.1411 14.475 18.2494C14.5223 18.3577 14.5477 18.4743 14.55 18.5925C14.5522 18.7107 14.5311 18.8282 14.4879 18.9382C14.4447 19.0483 14.3803 19.1487 14.2983 19.2338C14.2163 19.319 14.1183 19.3871 14.01 19.4344C13.4239 19.6925 12.7904 19.8253 12.15 19.8244ZM11.8056 15.2559C11.9148 15.3011 12.0318 15.3244 12.15 15.3244C12.2682 15.3244 12.3852 15.3011 12.4944 15.2559C12.6036 15.2107 12.7028 15.1444 12.7864 15.0608C12.87 14.9772 12.9363 14.878 12.9815 14.7688C13.0267 14.6596 13.05 14.5426 13.05 14.4244V9.92441C13.05 9.68571 12.9552 9.4568 12.7864 9.28801C12.6176 9.11923 12.3887 9.02441 12.15 9.02441C11.9113 9.02441 11.6824 9.11923 11.5136 9.28801C11.3448 9.4568 11.25 9.68571 11.25 9.92441V14.4244C11.25 14.5426 11.2733 14.6596 11.3185 14.7688C11.3637 14.878 11.43 14.9772 11.5136 15.0608C11.5972 15.1444 11.6964 15.2107 11.8056 15.2559Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2D = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36"
      }, h("g", {
        fill: "none",
        fillRule: "evenodd"
      }, h("path", {
        d: "M0 0h36v36H0z"
      }), h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M26.715 6.705c-.12 0-.24-.03-.345-.09C23.49 5.13 21 4.5 18.015 4.5c-2.97 0-5.79.705-8.355 2.115a.763.763 0 0 1-1.02-.3.76.76 0 0 1 .3-1.02A18.835 18.835 0 0 1 18.015 3C21.21 3 24 3.705 27.06 5.28c.375.195.51.645.315 1.005a.735.735 0 0 1-.66.42zM5.25 14.58a.748.748 0 0 1-.615-1.185c1.485-2.1 3.375-3.75 5.625-4.905C14.97 6.06 21 6.045 25.725 8.475a15.567 15.567 0 0 1 5.625 4.875.75.75 0 0 1-.18 1.05.748.748 0 0 1-1.05-.18c-1.35-1.89-3.06-3.375-5.085-4.41-4.305-2.205-9.81-2.205-14.1.015-2.04 1.05-3.75 2.55-5.1 4.44-.12.21-.345.315-.585.315zm9.375 18.105a.704.704 0 0 1-.525-.225c-1.305-1.305-2.01-2.145-3.015-3.96-1.035-1.845-1.575-4.095-1.575-6.51 0-4.455 3.81-8.085 8.49-8.085s8.49 3.63 8.49 8.085c0 .42-.33.75-.75.75s-.75-.33-.75-.75c0-3.63-3.135-6.585-6.99-6.585-3.855 0-6.99 2.955-6.99 6.585 0 2.16.48 4.155 1.395 5.775.96 1.725 1.62 2.46 2.775 3.63a.77.77 0 0 1 0 1.065.823.823 0 0 1-.555.225zM25.38 29.91c-1.785 0-3.36-.45-4.65-1.335-2.235-1.515-3.57-3.975-3.57-6.585 0-.42.33-.75.75-.75s.75.33.75.75c0 2.115 1.08 4.11 2.91 5.34 1.065.72 2.31 1.065 3.81 1.065.36 0 .96-.045 1.56-.15a.748.748 0 0 1 .87.615.748.748 0 0 1-.615.87c-.855.165-1.605.18-1.815.18zM22.365 33a.878.878 0 0 1-.195-.03c-2.385-.66-3.945-1.545-5.58-3.15a10.945 10.945 0 0 1-3.255-7.83c0-2.43 2.07-4.41 4.62-4.41 2.55 0 4.62 1.98 4.62 4.41 0 1.605 1.395 2.91 3.12 2.91s3.12-1.305 3.12-2.91c0-5.655-4.875-10.245-10.875-10.245-4.26 0-8.16 2.37-9.915 6.045-.585 1.215-.885 2.64-.885 4.2 0 1.17.105 3.015 1.005 5.415a.732.732 0 0 1-.435.96.744.744 0 0 1-.96-.435c-.735-1.965-1.095-3.915-1.095-5.94 0-1.8.345-3.435 1.02-4.86 1.995-4.185 6.42-6.9 11.265-6.9 6.825 0 12.375 5.265 12.375 11.745 0 2.43-2.07 4.41-4.62 4.41-2.55 0-4.62-1.98-4.62-4.41 0-1.605-1.395-2.91-3.12-2.91s-3.12 1.305-3.12 2.91c0 2.565.99 4.965 2.805 6.765 1.425 1.41 2.79 2.19 4.905 2.775.405.105.63.525.525.915a.732.732 0 0 1-.705.57z"
      }))));
    }
  }]);

  return Icon;
}(m);

var Icon$2E = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.7081 6.47884L6.56113 13.6258C6.27986 13.9072 5.89834 14.0654 5.50048 14.0655C5.10262 14.0656 4.72102 13.9076 4.43963 13.6263C4.15823 13.3451 4.00009 12.9636 4 12.5657C3.99991 12.1678 4.15786 11.7862 4.43913 11.5048L11.5871 4.35684C11.6104 4.3337 11.6288 4.3062 11.6414 4.27591C11.654 4.24562 11.6605 4.21314 11.6605 4.18034C11.6605 4.14754 11.654 4.11506 11.6414 4.08477C11.6288 4.05448 11.6104 4.02698 11.5871 4.00384L10.7031 3.11984C10.5781 2.99474 10.4884 2.83871 10.4433 2.66765C10.3983 2.4966 10.3994 2.31664 10.4465 2.14615C10.4937 1.97566 10.5853 1.82074 10.7118 1.69718C10.8384 1.57363 10.9955 1.48586 11.1671 1.44284L16.8241 0.0288417C16.9913 -0.0122121 17.1663 -0.00939578 17.3321 0.0370178C17.4979 0.0834314 17.6489 0.17187 17.7705 0.29377C17.8921 0.41567 17.9802 0.566902 18.0262 0.732822C18.0722 0.898743 18.0746 1.07373 18.0331 1.24084L16.6191 6.89784C16.5766 7.06929 16.4894 7.22641 16.3665 7.35323C16.2435 7.48005 16.0892 7.57204 15.9191 7.61984C15.8321 7.64364 15.7423 7.65575 15.6521 7.65584C15.3869 7.65579 15.1326 7.55039 14.9451 7.36284L14.0611 6.47884C14.0381 6.45535 14.0107 6.43668 13.9804 6.42394C13.9501 6.4112 13.9175 6.40463 13.8846 6.40463C13.8517 6.40463 13.8192 6.4112 13.7889 6.42394C13.7586 6.43668 13.7311 6.45535 13.7081 6.47884ZM9.79207 17.5188L16.9391 10.3718V10.3768C17.0783 10.2375 17.2437 10.127 17.4257 10.0515C17.6077 9.97611 17.8027 9.93726 17.9997 9.93721C18.1967 9.93716 18.3918 9.97592 18.5738 10.0513C18.7558 10.1266 18.9212 10.2371 19.0606 10.3763C19.1999 10.5156 19.3104 10.681 19.3859 10.8629C19.4613 11.0449 19.5002 11.24 19.5002 11.437C19.5002 11.634 19.4615 11.8291 19.3861 12.0111C19.3108 12.1931 19.2003 12.3585 19.0611 12.4978L11.9131 19.6448C11.8898 19.6681 11.8713 19.6956 11.8587 19.726C11.8461 19.7564 11.8396 19.789 11.8396 19.8218C11.8396 19.8547 11.8461 19.8873 11.8587 19.9177C11.8713 19.948 11.8898 19.9756 11.9131 19.9988L12.7971 20.8778C12.9219 21.003 13.0113 21.1589 13.0562 21.3298C13.1012 21.5008 13.1 21.6805 13.0528 21.8509C13.0057 22.0212 12.9142 22.176 12.7878 22.2995C12.6614 22.4229 12.5045 22.5107 12.3331 22.5538L6.67607 23.9678C6.59672 23.9885 6.51506 23.9989 6.43307 23.9988C6.28118 23.9988 6.13128 23.9642 5.99477 23.8975C5.85826 23.8309 5.73873 23.7341 5.64523 23.6144C5.55173 23.4946 5.48674 23.3552 5.45518 23.2066C5.42361 23.058 5.42631 22.9042 5.46307 22.7568L6.87707 17.0988C6.91986 16.927 7.00752 16.7696 7.1311 16.6427C7.25467 16.5158 7.40972 16.424 7.5804 16.3767C7.75108 16.3294 7.93125 16.3283 8.1025 16.3735C8.27375 16.4187 8.42993 16.5085 8.55507 16.6338L9.43907 17.5188C9.48594 17.5656 9.54941 17.5918 9.61557 17.5918C9.68174 17.5918 9.74521 17.5656 9.79207 17.5188Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2F = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.75 2H2.25C1.65351 2.00079 1.08167 2.2381 0.659886 2.65989C0.238102 3.08167 0.000793738 3.65351 0 4.25L0 15.25C0.000793738 15.8465 0.238102 16.4183 0.659886 16.8401C1.08167 17.2619 1.65351 17.4992 2.25 17.5H8.5C8.63261 17.5 8.75979 17.5527 8.85355 17.6464C8.94732 17.7402 9 17.8674 9 18V19C9 19.1326 8.94732 19.2598 8.85355 19.3536C8.75979 19.4473 8.63261 19.5 8.5 19.5H7.25C6.91848 19.5 6.60054 19.6317 6.36612 19.8661C6.1317 20.1005 6 20.4185 6 20.75C6 21.0815 6.1317 21.3995 6.36612 21.6339C6.60054 21.8683 6.91848 22 7.25 22H16.75C17.0815 22 17.3995 21.8683 17.6339 21.6339C17.8683 21.3995 18 21.0815 18 20.75C18 20.4185 17.8683 20.1005 17.6339 19.8661C17.3995 19.6317 17.0815 19.5 16.75 19.5H15.5C15.3674 19.5 15.2402 19.4473 15.1464 19.3536C15.0527 19.2598 15 19.1326 15 19V18C15 17.8674 15.0527 17.7402 15.1464 17.6464C15.2402 17.5527 15.3674 17.5 15.5 17.5H21.75C22.3465 17.4992 22.9183 17.2619 23.3401 16.8401C23.7619 16.4183 23.9992 15.8465 24 15.25V4.25C23.9992 3.65351 23.7619 3.08167 23.3401 2.65989C22.9183 2.2381 22.3465 2.00079 21.75 2ZM21.5 14.5C21.5 14.6326 21.4473 14.7598 21.3536 14.8536C21.2598 14.9473 21.1326 15 21 15H3C2.86739 15 2.74021 14.9473 2.64645 14.8536C2.55268 14.7598 2.5 14.6326 2.5 14.5V5C2.5 4.86739 2.55268 4.74021 2.64645 4.64645C2.74021 4.55268 2.86739 4.5 3 4.5H21C21.1326 4.5 21.2598 4.55268 21.3536 4.64645C21.4473 4.74021 21.5 4.86739 21.5 5V14.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2G = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.7715 9.55278C16.776 9.65854 16.779 9.76429 16.779 9.87154C16.779 13.1243 14.3025 16.8758 9.774 16.8758C8.3835 16.8758 7.08975 16.4685 6 15.7703C6.19275 15.7928 6.3885 15.804 6.58725 15.804C7.74075 15.804 8.802 15.411 9.645 14.7503C8.56725 14.7308 7.65825 14.019 7.34475 13.041C7.4955 13.0695 7.64925 13.0845 7.80825 13.0845C8.0325 13.0845 8.25 13.0545 8.457 12.9983C7.3305 12.7725 6.48225 11.7773 6.48225 10.5848C6.48225 10.5743 6.48225 10.5638 6.48225 10.5533C6.81375 10.7378 7.194 10.8488 7.5975 10.8615C6.93675 10.4198 6.50175 9.66603 6.50175 8.81254C6.50175 8.36104 6.62325 7.93804 6.8355 7.57429C8.04975 9.06379 9.864 10.044 11.91 10.1468C11.868 9.96678 11.8463 9.77853 11.8463 9.58578C11.8463 8.22604 12.9488 7.12354 14.3078 7.12354C15.0165 7.12354 15.6563 7.42279 16.1047 7.90129C16.6658 7.79104 17.193 7.58629 17.6685 7.30429C17.4848 7.87879 17.094 8.36104 16.5863 8.66629C17.0843 8.60629 17.5583 8.47429 18 8.27853C17.67 8.77203 17.2523 9.20553 16.7715 9.55278ZM12 0C5.37225 0 0 5.37225 0 12C0 18.627 5.37225 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2H = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M20 9.49918H19.25V6.74918C19.2496 5.12881 18.6663 3.56265 17.6068 2.33667C16.5473 1.1107 15.0821 0.306712 13.4789 0.0715126C11.8757 -0.163687 10.2414 0.185595 8.87436 1.05558C7.50734 1.92557 6.49884 3.25821 6.033 4.81018C5.98592 4.96744 5.97028 5.13243 5.98696 5.29573C6.00365 5.45904 6.05233 5.61746 6.13024 5.76194C6.20815 5.90643 6.31375 6.03416 6.44103 6.13783C6.5683 6.24151 6.71474 6.3191 6.872 6.36618C7.02926 6.41326 7.19425 6.4289 7.35755 6.41222C7.52086 6.39553 7.67927 6.34685 7.82376 6.26894C7.96825 6.19103 8.09598 6.08543 8.19965 5.95816C8.30333 5.83088 8.38092 5.68444 8.428 5.52718C8.7217 4.55028 9.35689 3.71156 10.2176 3.16411C11.0784 2.61666 12.1073 2.39699 13.1166 2.54519C14.1259 2.69339 15.0482 3.19958 15.7152 3.97137C16.3823 4.74316 16.7495 5.72908 16.75 6.74918V8.99918C16.75 9.13179 16.6973 9.25897 16.6036 9.35273C16.5098 9.4465 16.3826 9.49918 16.25 9.49918H5C4.46957 9.49918 3.96086 9.7099 3.58579 10.085C3.21071 10.46 3 10.9687 3 11.4992V21.9992C3 22.5296 3.21071 23.0383 3.58579 23.4134C3.96086 23.7885 4.46957 23.9992 5 23.9992H20C20.5304 23.9992 21.0391 23.7885 21.4142 23.4134C21.7893 23.0383 22 22.5296 22 21.9992V11.4992C22 10.9687 21.7893 10.46 21.4142 10.085C21.0391 9.7099 20.5304 9.49918 20 9.49918ZM12.5 18.4992C12.1044 18.4992 11.7178 18.3819 11.3889 18.1621C11.06 17.9424 10.8036 17.63 10.6522 17.2645C10.5009 16.8991 10.4613 16.497 10.5384 16.109C10.6156 15.721 10.8061 15.3647 11.0858 15.085C11.3655 14.8053 11.7219 14.6148 12.1098 14.5376C12.4978 14.4604 12.8999 14.5 13.2654 14.6514C13.6308 14.8028 13.9432 15.0591 14.1629 15.388C14.3827 15.7169 14.5 16.1036 14.5 16.4992C14.5 17.0296 14.2893 17.5383 13.9142 17.9134C13.5391 18.2885 13.0304 18.4992 12.5 18.4992Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2I = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2J = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.99988 9.5C9.62323 9.5 11.7499 7.37335 11.7499 4.75C11.7499 2.12665 9.62323 0 6.99988 0C4.37653 0 2.24988 2.12665 2.24988 4.75C2.24988 7.37335 4.37653 9.5 6.99988 9.5ZM10.9789 12.241C11.0277 12.1851 11.0635 12.1191 11.0836 12.0477C11.1037 11.9763 11.1077 11.9013 11.0953 11.8281C11.0828 11.755 11.0543 11.6855 11.0117 11.6248C10.969 11.5641 10.9134 11.5136 10.8489 11.477C9.73968 10.8413 8.48434 10.5046 7.20588 10.5C5.59287 10.5073 4.02469 11.0316 2.73153 11.9957C1.43836 12.9599 0.488333 14.3132 0.0208852 15.857C-0.00138761 15.9316 -0.00592118 16.0104 0.00764584 16.0871C0.0212129 16.1638 0.0525054 16.2362 0.0990293 16.2987C0.145553 16.3612 0.206022 16.4119 0.275617 16.4468C0.345212 16.4818 0.422008 16.5 0.499885 16.5H8.63989C8.75705 16.5 8.8705 16.4588 8.96042 16.3837C9.05034 16.3086 9.11103 16.2043 9.13189 16.089C9.38669 14.6624 10.0252 13.3321 10.9789 12.241ZM13.3887 12.0954C14.4576 11.3812 15.7143 11 16.9999 11C18.7231 11.0021 20.3752 11.6876 21.5937 12.9061C22.8123 14.1247 23.4978 15.7767 23.4999 17.5C23.4999 18.7856 23.1187 20.0423 22.4044 21.1112C21.6902 22.1801 20.675 23.0132 19.4873 23.5052C18.2996 23.9972 16.9927 24.1259 15.7318 23.8751C14.4709 23.6243 13.3127 23.0052 12.4037 22.0962C11.4946 21.1872 10.8756 20.029 10.6248 18.7681C10.374 17.5072 10.5027 16.2003 10.9947 15.0126C11.4866 13.8248 12.3198 12.8097 13.3887 12.0954ZM18.4999 18.5H20.4999C20.7651 18.5 21.0195 18.3946 21.207 18.2071C21.3945 18.0196 21.4999 17.7652 21.4999 17.5C21.4999 17.2348 21.3945 16.9804 21.207 16.7929C21.0195 16.6054 20.7651 16.5 20.4999 16.5H18.4999C18.3673 16.5 18.2401 16.4473 18.1463 16.3536C18.0526 16.2598 17.9999 16.1326 17.9999 16V14C17.9999 13.7348 17.8945 13.4804 17.707 13.2929C17.5195 13.1054 17.2651 13 16.9999 13C16.7347 13 16.4803 13.1054 16.2928 13.2929C16.1052 13.4804 15.9999 13.7348 15.9999 14V16C15.9999 16.1326 15.9472 16.2598 15.8534 16.3536C15.7597 16.4473 15.6325 16.5 15.4999 16.5H13.4999C13.2347 16.5 12.9803 16.6054 12.7928 16.7929C12.6052 16.9804 12.4999 17.2348 12.4999 17.5C12.4999 17.7652 12.6052 18.0196 12.7928 18.2071C12.9803 18.3946 13.2347 18.5 13.4999 18.5H15.4999C15.6325 18.5 15.7597 18.5527 15.8534 18.6464C15.9472 18.7402 15.9999 18.8674 15.9999 19V21C15.9999 21.2652 16.1052 21.5196 16.2928 21.7071C16.4803 21.8946 16.7347 22 16.9999 22C17.2651 22 17.5195 21.8946 17.707 21.7071C17.8945 21.5196 17.9999 21.2652 17.9999 21V19C17.9999 18.8674 18.0526 18.7402 18.1463 18.6464C18.2401 18.5527 18.3673 18.5 18.4999 18.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2K = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 9.5C10.6234 9.5 12.75 7.37335 12.75 4.75C12.75 2.12665 10.6234 0 8 0C5.37665 0 3.25 2.12665 3.25 4.75C3.25 7.37335 5.37665 9.5 8 9.5ZM12.335 12.419C12.3802 12.3643 12.4133 12.3007 12.4321 12.2323C12.4509 12.1638 12.4548 12.0922 12.4438 12.0221C12.4327 11.952 12.4068 11.8851 12.3679 11.8257C12.329 11.7664 12.2779 11.716 12.218 11.678C11.2414 11.0527 10.1327 10.6631 8.97954 10.5402C7.82643 10.4173 6.66053 10.5643 5.57405 10.9697C4.48757 11.3751 3.5103 12.0278 2.71955 12.876C1.9288 13.7242 1.34624 14.7448 1.01796 15.857C0.995611 15.9319 0.991121 16.0109 1.00485 16.0878C1.01857 16.1648 1.05013 16.2374 1.097 16.2999C1.14386 16.3624 1.20472 16.4131 1.2747 16.4478C1.34468 16.4826 1.42183 16.5005 1.49996 16.5H10.14C10.2571 16.5 10.3706 16.4588 10.4605 16.3837C10.5504 16.3086 10.6111 16.2043 10.632 16.089C10.8741 14.7394 11.4607 13.4752 12.335 12.419ZM14.8888 12.0954C15.9577 11.3812 17.2144 11 18.5 11C20.2233 11.0021 21.8753 11.6876 23.0939 12.9061C24.3124 14.1247 24.9979 15.7767 25 17.5C25 18.7856 24.6188 20.0423 23.9046 21.1112C23.1903 22.1801 22.1752 23.0132 20.9874 23.5052C19.7997 23.9972 18.4928 24.1259 17.2319 23.8751C15.971 23.6243 14.8128 23.0052 13.9038 22.0962C12.9948 21.1872 12.3757 20.029 12.1249 18.7681C11.8741 17.5072 12.0028 16.2003 12.4948 15.0126C12.9868 13.8248 13.8199 12.8097 14.8888 12.0954ZM14.448 18.978L16.209 20.738V20.74C16.3994 20.931 16.6286 21.0788 16.8812 21.1734C17.1338 21.2679 17.4037 21.307 17.6727 21.2881C17.9417 21.2691 18.2035 21.1925 18.4403 21.0634C18.6771 20.9343 18.8833 20.7558 19.045 20.54L22.455 15.992C22.5338 15.8869 22.5911 15.7674 22.6237 15.6402C22.6563 15.513 22.6635 15.3806 22.645 15.2506C22.6264 15.1206 22.5824 14.9955 22.5155 14.8825C22.4486 14.7695 22.3601 14.6708 22.255 14.592C22.1499 14.5132 22.0304 14.4559 21.9032 14.4233C21.776 14.3907 21.6436 14.3835 21.5136 14.4021C21.251 14.4396 21.0141 14.5798 20.855 14.792L17.874 18.768C17.8311 18.8252 17.7763 18.8726 17.7135 18.9069C17.6507 18.9412 17.5812 18.9615 17.5098 18.9667C17.4384 18.9718 17.3668 18.9615 17.2997 18.9366C17.2326 18.9116 17.1717 18.8725 17.121 18.822L15.862 17.563C15.7691 17.4702 15.6588 17.3965 15.5374 17.3463C15.4161 17.2961 15.286 17.2703 15.1546 17.2703C15.0233 17.2703 14.8932 17.2963 14.7719 17.3466C14.6506 17.3969 14.5403 17.4706 14.4475 17.5635C14.3547 17.6564 14.281 17.7667 14.2308 17.8881C14.1806 18.0094 14.1548 18.1395 14.1548 18.2709C14.1548 18.4022 14.1808 18.5323 14.2311 18.6536C14.2814 18.7749 14.3551 18.8852 14.448 18.978Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2L = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.00098 9.5C9.62433 9.5 11.751 7.37335 11.751 4.75C11.751 2.12665 9.62433 0 7.00098 0C4.37762 0 2.25098 2.12665 2.25098 4.75C2.25098 7.37335 4.37762 9.5 7.00098 9.5ZM13.8446 15.328C13.9185 15.255 13.9679 15.1608 13.9858 15.0585C14.0037 14.9561 13.9893 14.8508 13.9446 14.757C13.3319 13.4883 12.3758 12.4169 11.1847 11.6644C9.99366 10.9119 8.61544 10.5085 7.20661 10.5C5.59343 10.5072 4.02508 11.0316 2.73187 11.9959C1.43866 12.9603 0.488743 14.3139 0.0216125 15.858C-0.00121019 15.9326 -0.00604051 16.0115 0.00751696 16.0884C0.0210744 16.1652 0.0526342 16.2377 0.0996125 16.3C0.146186 16.3621 0.206578 16.4125 0.276006 16.4472C0.345433 16.4819 0.42199 16.5 0.499612 16.5H12.4646C12.5303 16.5001 12.5954 16.4873 12.6561 16.4622C12.7169 16.4372 12.7721 16.4004 12.8186 16.354L13.8446 15.328ZM15.0841 22.4832C15.1069 22.5673 15.1074 22.6558 15.0855 22.74C15.0636 22.8243 15.02 22.9014 14.9591 22.9636C14.8983 23.0259 14.8222 23.0712 14.7385 23.095L11.6385 23.981C11.5527 24.0056 11.4618 24.0067 11.3754 23.9843C11.289 23.9619 11.2102 23.9167 11.1471 23.8536C11.0841 23.7904 11.0391 23.7115 11.0168 23.6251C10.9945 23.5386 10.9958 23.4478 11.0205 23.362L11.9055 20.262C11.9294 20.1782 11.9747 20.102 12.0371 20.0412C12.0995 19.9803 12.1767 19.9368 12.2611 19.9149C12.3455 19.8931 12.4342 19.8937 12.5182 19.9167C12.6023 19.9397 12.6789 19.9843 12.7405 20.046L14.9555 22.261C15.017 22.3226 15.0613 22.3992 15.0841 22.4832ZM21.7716 16.936C21.8654 16.8422 21.918 16.7151 21.918 16.5825C21.918 16.4499 21.8654 16.3227 21.7716 16.229L18.7716 13.229C18.6779 13.1352 18.5507 13.0826 18.4181 13.0826C18.2855 13.0826 18.1584 13.1352 18.0646 13.229L13.0536 18.239C12.9599 18.3327 12.9072 18.4599 12.9072 18.5925C12.9072 18.7251 12.9599 18.8522 13.0536 18.946L16.0536 21.946C16.1474 22.0397 16.2745 22.0924 16.4071 22.0924C16.5397 22.0924 16.6669 22.0397 16.7606 21.946L21.7716 16.936ZM19.333 12.167C19.3333 12.0345 19.3862 11.9075 19.48 11.814C19.9719 11.3107 20.6433 11.0232 21.347 11.0145C22.0507 11.0059 22.729 11.2769 23.233 11.768C23.7239 12.2599 23.9996 12.9265 23.9996 13.6215C23.9996 14.3164 23.7239 14.983 23.233 15.475C23.1326 15.5761 22.9983 15.6367 22.856 15.645C22.7193 15.6533 22.5845 15.6093 22.479 15.522L19.479 12.522C19.4325 12.4753 19.3956 12.42 19.3706 12.359C19.3455 12.2981 19.3328 12.2328 19.333 12.167Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2M = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M11.3381 12.419C11.5141 12.206 11.4851 11.891 11.2721 11.715C11.2561 11.702 11.2391 11.689 11.2211 11.678C7.74407 9.452 3.12107 10.466 0.895066 13.942C0.515066 14.536 0.221066 15.18 0.0210663 15.857C-0.0579337 16.122 0.0920663 16.4 0.357066 16.479C0.404066 16.493 0.454066 16.5 0.503066 16.5H9.14307C9.38507 16.5 9.59207 16.327 9.63507 16.089C9.87707 14.739 10.4641 13.475 11.3381 12.419ZM7.00307 0C9.62607 0 11.7531 2.127 11.7531 4.75C11.7531 7.373 9.62607 9.5 7.00307 9.5C4.38007 9.5 2.25307 7.373 2.25307 4.75C2.25307 2.127 4.38007 0 7.00307 0ZM17.5031 11C13.9131 11 11.0031 13.91 11.0031 17.5C11.0031 21.09 13.9131 24 17.5031 24C21.0931 24 24.0031 21.09 24.0031 17.5C23.9991 13.912 21.0911 11.004 17.5031 11ZM18.0031 14.249C18.0031 14.801 17.5551 15.249 17.0031 15.249C16.4511 15.249 16.0031 14.801 16.0031 14.249C16.0031 13.697 16.4511 13.249 17.0031 13.249C17.5551 13.249 18.0031 13.697 18.0031 14.249ZM15.2531 21C15.2531 20.586 15.5891 20.25 16.0031 20.25H16.2531C16.5291 20.25 16.7531 20.026 16.7531 19.75V18C16.7531 17.862 16.6411 17.75 16.5031 17.75H16.0031C15.5891 17.75 15.2531 17.414 15.2531 17C15.2531 16.586 15.5891 16.25 16.0031 16.25H17.0031C17.6931 16.251 18.2521 16.81 18.2531 17.5V19.75C18.2531 20.026 18.4771 20.25 18.7531 20.25H19.0031C19.4171 20.25 19.7531 20.586 19.7531 21C19.7531 21.414 19.4171 21.75 19.0031 21.75H16.0031C15.5891 21.75 15.2531 21.414 15.2531 21Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2N = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "24",
        viewBox: "0 0 25 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 9.5C10.6234 9.5 12.75 7.37335 12.75 4.75C12.75 2.12665 10.6234 0 8 0C5.37665 0 3.25 2.12665 3.25 4.75C3.25 7.37335 5.37665 9.5 8 9.5ZM12.335 12.419C12.3802 12.3643 12.4133 12.3007 12.4321 12.2323C12.4509 12.1638 12.4548 12.0922 12.4438 12.0221C12.4327 11.952 12.4068 11.8851 12.3679 11.8257C12.329 11.7664 12.2779 11.716 12.218 11.678C11.2414 11.0527 10.1327 10.6631 8.97954 10.5402C7.82643 10.4173 6.66053 10.5643 5.57405 10.9697C4.48757 11.3751 3.5103 12.0278 2.71955 12.876C1.9288 13.7242 1.34624 14.7448 1.01796 15.857C0.995611 15.9319 0.991121 16.0109 1.00485 16.0878C1.01857 16.1648 1.05013 16.2374 1.097 16.2999C1.14386 16.3624 1.20472 16.4131 1.2747 16.4478C1.34468 16.4826 1.42183 16.5005 1.49996 16.5H10.14C10.2571 16.5 10.3706 16.4588 10.4605 16.3837C10.5504 16.3086 10.6111 16.2043 10.632 16.089C10.8741 14.7394 11.4607 13.4752 12.335 12.419ZM14.8888 12.0954C15.9577 11.3812 17.2144 11 18.5 11C20.2233 11.0021 21.8753 11.6876 23.0939 12.9061C24.3124 14.1247 24.9979 15.7767 25 17.5C25 18.7856 24.6188 20.0423 23.9046 21.1112C23.1903 22.1801 22.1752 23.0132 20.9874 23.5052C19.7997 23.9972 18.4928 24.1259 17.2319 23.8751C15.971 23.6243 14.8128 23.0052 13.9038 22.0962C12.9948 21.1872 12.3757 20.029 12.1249 18.7681C11.8741 17.5072 12.0028 16.2003 12.4948 15.0126C12.9868 13.8248 13.8199 12.8097 14.8888 12.0954ZM17.6768 21.3232C17.7237 21.3701 17.75 21.4337 17.75 21.5V21.75C17.75 21.9489 17.829 22.1397 17.9697 22.2803C18.1103 22.421 18.3011 22.5 18.5 22.5C18.6989 22.5 18.8897 22.421 19.0303 22.2803C19.171 22.1397 19.25 21.9489 19.25 21.75V21.443C19.2498 21.3853 19.2696 21.3294 19.3061 21.2847C19.3426 21.24 19.3934 21.2094 19.45 21.198C19.8909 21.1096 20.2913 20.8811 20.5917 20.5465C20.8921 20.2119 21.0762 19.7892 21.1167 19.3414C21.1572 18.8936 21.0518 18.4447 20.8163 18.0617C20.5809 17.6787 20.2279 17.382 19.81 17.216L17.747 16.391C17.6197 16.3396 17.5142 16.2456 17.4485 16.125C17.3829 16.0044 17.3612 15.8647 17.3872 15.7299C17.4132 15.5951 17.4853 15.4735 17.591 15.386C17.6968 15.2984 17.8297 15.2503 17.967 15.25H20C20.1989 15.25 20.3897 15.171 20.5303 15.0303C20.671 14.8897 20.75 14.6989 20.75 14.5C20.75 14.3011 20.671 14.1103 20.5303 13.9697C20.3897 13.829 20.1989 13.75 20 13.75H19.5C19.4337 13.75 19.3701 13.7237 19.3232 13.6768C19.2763 13.6299 19.25 13.5663 19.25 13.5V13.25C19.25 13.0511 19.171 12.8603 19.0303 12.7197C18.8897 12.579 18.6989 12.5 18.5 12.5C18.3011 12.5 18.1103 12.579 17.9697 12.7197C17.829 12.8603 17.75 13.0511 17.75 13.25V13.557C17.7502 13.6147 17.7304 13.6706 17.6939 13.7153C17.6574 13.76 17.6066 13.7906 17.55 13.802C17.1091 13.8904 16.7087 14.1189 16.4083 14.4535C16.1079 14.7881 15.9238 15.2108 15.8833 15.6586C15.8428 16.1064 15.9482 16.5553 16.1837 16.9383C16.4191 17.3213 16.7721 17.618 17.19 17.784L19.253 18.609C19.3803 18.6604 19.4858 18.7544 19.5515 18.875C19.6171 18.9956 19.6388 19.1353 19.6128 19.2701C19.5868 19.4049 19.5148 19.5265 19.409 19.614C19.3032 19.7016 19.1703 19.7497 19.033 19.75H17C16.8011 19.75 16.6103 19.829 16.4697 19.9697C16.329 20.1103 16.25 20.3011 16.25 20.5C16.25 20.6989 16.329 20.8897 16.4697 21.0303C16.6103 21.171 16.8011 21.25 17 21.25H17.5C17.5663 21.25 17.6299 21.2763 17.6768 21.3232Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2O = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 9.5C9.62335 9.5 11.75 7.37335 11.75 4.75C11.75 2.12665 9.62335 0 7 0C4.37665 0 2.25 2.12665 2.25 4.75C2.25 7.37335 4.37665 9.5 7 9.5ZM9.49989 13.456C9.50037 12.8418 9.68842 12.2424 10.0389 11.738C10.0819 11.6756 10.1101 11.6043 10.1215 11.5294C10.1328 11.4544 10.127 11.3779 10.1045 11.3056C10.082 11.2333 10.0433 11.167 9.99138 11.1118C9.93947 11.0566 9.8757 11.0139 9.80489 10.987C8.97511 10.6677 8.09398 10.5026 7.20489 10.5C5.59204 10.5076 4.02409 11.0319 2.73112 11.996C1.43816 12.9602 0.488283 14.3133 0.0208852 15.857C-0.00138761 15.9316 -0.00592118 16.0104 0.00764584 16.0871C0.0212129 16.1638 0.0525054 16.2362 0.0990293 16.2987C0.145553 16.3612 0.206022 16.4119 0.275617 16.4468C0.345212 16.4818 0.422008 16.5 0.499885 16.5H8.99989C9.13249 16.5 9.25967 16.4473 9.35344 16.3536C9.44721 16.2598 9.49989 16.1326 9.49989 16V13.456ZM17.478 11C19.389 11.0179 21.2822 11.3699 23.072 12.04C23.3477 12.1601 23.5824 12.358 23.7472 12.6096C23.9121 12.8611 23.9999 13.1553 24 13.456V16.849C24 19.682 21.848 22.48 18.767 23.654C18.3657 23.8567 17.9269 23.9745 17.478 24C17.0291 23.9764 16.5903 23.8585 16.19 23.654C14.7499 23.1585 13.4886 22.248 12.5651 21.037C11.6415 19.826 11.097 18.3689 11 16.849V13.456C11.0001 13.1553 11.0879 12.8611 11.2528 12.6096C11.4176 12.358 11.6523 12.1601 11.928 12.04C13.7017 11.3669 15.581 11.0147 17.478 11ZM18.3964 15.6036C18.3027 15.5098 18.25 15.3826 18.25 15.25V13.5C18.25 13.3011 18.171 13.1103 18.0303 12.9697C17.8897 12.829 17.6989 12.75 17.5 12.75C17.3011 12.75 17.1103 12.829 16.9697 12.9697C16.829 13.1103 16.75 13.3011 16.75 13.5V15.25C16.75 15.3826 16.6973 15.5098 16.6036 15.6036C16.5098 15.6973 16.3826 15.75 16.25 15.75H14.5C14.3011 15.75 14.1103 15.829 13.9697 15.9697C13.829 16.1103 13.75 16.3011 13.75 16.5C13.75 16.6989 13.829 16.8897 13.9697 17.0303C14.1103 17.171 14.3011 17.25 14.5 17.25H16.25C16.3826 17.25 16.5098 17.3027 16.6036 17.3964C16.6973 17.4902 16.75 17.6174 16.75 17.75V19.5C16.75 19.6989 16.829 19.8897 16.9697 20.0303C17.1103 20.171 17.3011 20.25 17.5 20.25C17.6989 20.25 17.8897 20.171 18.0303 20.0303C18.171 19.8897 18.25 19.6989 18.25 19.5V17.75C18.25 17.6174 18.3027 17.4902 18.3964 17.3964C18.4902 17.3027 18.6174 17.25 18.75 17.25H20.5C20.6989 17.25 20.8897 17.171 21.0303 17.0303C21.171 16.8897 21.25 16.6989 21.25 16.5C21.25 16.3011 21.171 16.1103 21.0303 15.9697C20.8897 15.829 20.6989 15.75 20.5 15.75H18.75C18.6174 15.75 18.4902 15.6973 18.3964 15.6036Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2P = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M21.414 4.914L17.086 0.586C16.711 0.210901 16.2024 0.000113275 15.672 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V22C2 22.5304 2.21071 23.0391 2.58579 23.4142C2.96086 23.7893 3.46957 24 4 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V6.328C21.9999 5.79761 21.7891 5.28899 21.414 4.914ZM16.991 14.319L9.591 18.364C9.42893 18.4514 9.24808 18.4981 9.06398 18.5002C8.87988 18.5023 8.69801 18.4597 8.534 18.376C8.37693 18.3003 8.24389 18.1826 8.14963 18.0359C8.05538 17.8892 8.00359 17.7193 8 17.545V9.455C8.0034 9.28089 8.05489 9.11112 8.14879 8.96446C8.24268 8.8178 8.3753 8.69997 8.532 8.624C8.69601 8.54035 8.87787 8.49774 9.06198 8.49983C9.24608 8.50192 9.42693 8.54864 9.589 8.636L16.989 12.681C17.1419 12.7563 17.2707 12.873 17.3607 13.0177C17.4508 13.1625 17.4985 13.3295 17.4985 13.5C17.4985 13.6705 17.4508 13.8375 17.3607 13.9823C17.2707 14.127 17.1419 14.2437 16.989 14.319H16.991Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2Q = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.9999 4.60001C16.3999 4.53801 20.7869 7.61401 23.4319 10.524C23.7948 10.9288 23.9958 11.4533 23.9963 11.9969C23.9969 12.5406 23.797 13.0654 23.4349 13.471C20.8179 16.351 16.4939 19.4 12.1469 19.4H11.8389C7.5069 19.4 3.1819 16.351 0.567901 13.472C0.20533 13.0666 0.00488281 12.5419 0.00488281 11.998C0.00488281 11.4542 0.20533 10.9294 0.567901 10.524C3.2129 7.61501 7.5999 4.53701 11.9999 4.60001ZM8.17514 9.44439C7.66969 10.2009 7.3999 11.0902 7.3999 12C7.3999 13.22 7.88454 14.39 8.74721 15.2527C9.60988 16.1154 10.7799 16.6 11.9999 16.6C12.9097 16.6 13.7991 16.3302 14.5555 15.8248C15.312 15.3193 15.9016 14.6009 16.2497 13.7604C16.5979 12.9198 16.689 11.9949 16.5115 11.1026C16.334 10.2103 15.8959 9.39064 15.2526 8.74732C14.6093 8.104 13.7896 7.66589 12.8973 7.4884C12.005 7.31091 11.0801 7.402 10.2396 7.75017C9.39902 8.09833 8.68059 8.68792 8.17514 9.44439ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2R = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4 15C5.65685 15 7 13.6569 7 12C7 10.3431 5.65685 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15ZM12.0771 15C13.734 15 15.0771 13.6569 15.0771 12C15.0771 10.3431 13.734 9 12.0771 9C10.4203 9 9.07715 10.3431 9.07715 12C9.07715 13.6569 10.4203 15 12.0771 15ZM23.1543 12C23.1543 13.6569 21.8112 15 20.1543 15C18.4974 15 17.1543 13.6569 17.1543 12C17.1543 10.3431 18.4974 9 20.1543 9C21.8112 9 23.1543 10.3431 23.1543 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2S = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.07715 3.92308C9.07715 5.57993 10.4203 6.92308 12.0771 6.92308C13.734 6.92308 15.0771 5.57993 15.0771 3.92308C15.0771 2.26623 13.734 0.923081 12.0771 0.92308C10.4203 0.92308 9.07715 2.26623 9.07715 3.92308ZM9.07715 12C9.07715 13.6569 10.4203 15 12.0771 15C13.734 15 15.0771 13.6569 15.0771 12C15.0771 10.3431 13.734 9 12.0771 9C10.4203 9 9.07715 10.3431 9.07715 12ZM12.0771 23.0769C10.4203 23.0769 9.07715 21.7338 9.07715 20.0769C9.07715 18.4201 10.4203 17.0769 12.0771 17.0769C13.734 17.0769 15.0771 18.4201 15.0771 20.0769C15.0771 21.7338 13.734 23.0769 12.0771 23.0769Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2T = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.6531 6.71429C20.2413 7.7162 21.6876 8.92704 22.9531 10.3143C23.311 10.7117 23.5097 11.2272 23.511 11.7619C23.5123 12.2967 23.3161 12.8132 22.9601 13.2123C20.3981 16.0283 16.1651 19.0123 11.9091 19.0123H11.6091C10.1246 18.9865 8.65985 18.6674 7.29914 18.0733L3.15314 22.2193C2.98957 22.3823 2.77462 22.4837 2.5448 22.5062C2.31497 22.5287 2.08444 22.471 1.89233 22.3428C1.70022 22.2147 1.55839 22.024 1.49091 21.8032C1.42343 21.5823 1.43447 21.3449 1.52214 21.1313C1.52645 21.127 1.53133 21.1244 1.53617 21.1219C1.54033 21.1197 1.54445 21.1175 1.54814 21.1143L21.0481 1.61429C21.1276 1.53203 21.1868 1.4324 21.2211 1.32329L21.2391 1.30529C21.3314 1.20978 21.4417 1.1336 21.5637 1.08119C21.6857 1.02878 21.817 1.00119 21.9497 1.00004C22.0825 0.998884 22.2142 1.02419 22.3371 1.07447C22.46 1.12475 22.5716 1.199 22.6655 1.29289C22.7594 1.38679 22.8337 1.49844 22.884 1.62133C22.9342 1.74423 22.9595 1.87591 22.9584 2.00869C22.9572 2.14147 22.9297 2.27269 22.8772 2.39469C22.8248 2.5167 22.7487 2.62704 22.6531 2.71929L18.6531 6.71429ZM14.9398 14.9195C15.4624 14.392 15.8489 13.7454 16.0661 13.0353C16.3777 12.0249 16.3062 10.9352 15.8651 9.97429C15.8476 9.93784 15.8215 9.90616 15.7891 9.88192C15.7567 9.85768 15.719 9.84159 15.6791 9.83502C15.6391 9.82845 15.5982 9.83158 15.5598 9.84416C15.5213 9.85674 15.4865 9.87839 15.4581 9.90729L9.89814 15.4663C9.8695 15.4948 9.84809 15.5297 9.83572 15.5682C9.82335 15.6066 9.82037 15.6475 9.82703 15.6874C9.83368 15.7272 9.84979 15.7649 9.87399 15.7972C9.89819 15.8296 9.92979 15.8557 9.96614 15.8733C10.9397 16.3206 12.0452 16.3884 13.0661 16.0633C13.7742 15.8395 14.4172 15.447 14.9398 14.9195ZM7.43127 13.0536C7.42054 13.0958 7.39872 13.1344 7.36806 13.1653L4.32306 16.2153C4.28065 16.2574 4.22484 16.2834 4.1653 16.2887C4.10575 16.294 4.04623 16.2783 3.99706 16.2443C2.74499 15.3614 1.59226 14.3455 0.559058 13.2143C0.19812 12.8172 -0.00128897 12.2995 6.2704e-06 11.7629C0.00130151 11.2263 0.203208 10.7096 0.566058 10.3143C3.15306 7.46529 7.45306 4.45729 11.7531 4.51529C12.8529 4.50908 13.9468 4.67717 14.9941 5.01329C15.0353 5.02687 15.0723 5.05077 15.1017 5.08273C15.131 5.11468 15.1517 5.15363 15.1617 5.19584C15.1717 5.23806 15.1708 5.28214 15.1589 5.32388C15.1471 5.36562 15.1248 5.40363 15.0941 5.43429L13.1531 7.37629C13.1222 7.40712 13.0837 7.42913 13.0415 7.44004C12.9993 7.45094 12.955 7.45034 12.9131 7.43829C12.5362 7.32762 12.1458 7.2694 11.7531 7.26529C10.5596 7.26529 9.41499 7.7394 8.57108 8.58331C7.72716 9.42723 7.25306 10.5718 7.25306 11.7653C7.25864 12.1582 7.31785 12.5484 7.42906 12.9253C7.44123 12.9671 7.44199 13.0114 7.43127 13.0536Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2U = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("g", {
        "clip-path": "url(#clip0)"
      }, h("path", {
        d: "M0 0H40V40H0V0Z",
        fill: "white"
      }), h("path", {
        d: "M37.3346 19.5619L40.0002 19.1284",
        stroke: "#00A0DF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        d: "M37.0203 24.373L39.9026 25.2832",
        stroke: "#00A0DF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        d: "M35.5574 15.0326L38.0062 13.2664",
        stroke: "#00A0DF",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }), h("path", {
        d: "M28.2403 24.7796C28.2378 24.9318 28.2128 25.0825 28.1662 25.2268C28.1517 25.248 28.138 25.2698 28.125 25.2921C27.7812 25.8873 27.1274 26.3901 24.6241 27.0944L24.6238 27.0945C24.1439 27.2297 23.7244 27.5246 23.4346 27.9303C23.1448 28.336 23.0019 28.8285 23.0297 29.3263L23.03 29.3316L23.3773 35.0223C23.4124 35.5975 22.9554 36.0832 22.3791 36.0832H13.0358C12.5834 36.0832 12.1873 35.7795 12.07 35.3426L10.4332 29.248C10.3428 28.8881 10.1612 28.5575 9.90583 28.2881C9.64747 28.0156 9.32251 27.8151 8.96303 27.7066L8.96034 27.7058C5.28344 26.6066 2.7718 23.949 1.52346 19.4209C1.51585 19.2906 1.48651 19.0925 1.38053 18.8847C0.986246 17.3093 0.897224 15.6725 1.11878 14.0628C1.34697 12.4048 1.90017 10.8081 2.74664 9.36437C3.59311 7.92061 4.71622 6.65811 6.05158 5.64926C7.38693 4.6404 8.90828 3.90503 10.5284 3.4853L10.5284 3.48533L10.5362 3.48325C16.6429 1.84861 23.3719 4.35947 25.0012 10.4128C25.0659 10.6594 25.1729 10.8928 25.3175 11.1028C25.3232 11.1112 25.3291 11.1194 25.3351 11.1276C25.9087 11.9087 26.5655 12.6252 27.2938 13.2645C27.9987 13.9505 28.6661 14.674 29.2933 15.4317C29.3023 15.4427 29.3116 15.4534 29.3211 15.4639C29.7244 15.911 30.0179 16.4457 30.1785 17.0258L29.4424 17.2319L29.1267 17.3161C28.849 17.3884 28.5882 17.5147 28.3594 17.688C28.1293 17.8622 27.9361 18.0803 27.7909 18.3297C27.6458 18.5791 27.5515 18.8548 27.5137 19.1409C27.4759 19.4264 27.4951 19.7165 27.57 19.9946C27.8547 21.0546 28.0629 22.1338 28.193 23.2237L28.1937 23.2295C28.2563 23.7287 28.2724 24.2327 28.242 24.735C28.2411 24.7498 28.2405 24.7647 28.2403 24.7796Z",
        fill: "#FAF0E1",
        stroke: "#19194B",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })), h("defs", null, h("clipPath", {
        id: "clip0"
      }, h("path", {
        d: "M0 0H40V40H0V0Z",
        fill: "white"
      })))));
    }
  }]);

  return Icon;
}(m);

var Icon$2V = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M19.7052 18.4422C17.6124 18.4422 15.9157 16.7455 15.9157 14.6527C15.9157 12.5599 17.6124 10.8632 19.7052 10.8632H21.9789C22.1183 10.8632 22.2315 10.7501 22.2315 10.6106V8.08431C22.2315 6.68878 21.1007 5.558 19.7052 5.558H2.52631C1.13077 5.558 0 6.68878 0 8.08431V21.2211C0 22.6166 1.13077 23.7474 2.52631 23.7474H19.7052C21.1007 23.7474 22.2315 22.6166 22.2315 21.2211V18.6948C22.2315 18.5553 22.1183 18.4422 21.9789 18.4422H19.7052ZM22.7368 12.379H19.7052C18.4491 12.379 17.4315 13.3966 17.4315 14.6527C17.4315 15.9088 18.4491 16.9264 19.7052 16.9264H22.7368C23.4724 16.7991 24.008 16.1574 23.9999 15.4106V13.8948C24.008 13.148 23.4724 12.5064 22.7368 12.379ZM19.8942 0.935872C19.7294 0.27499 19.0615 -0.127197 18.4006 0.0365072C18.3935 0.0385282 18.3865 0.0405492 18.3784 0.0425703L5.37093 3.54403C5.23653 3.58142 5.15771 3.71986 5.19409 3.85426C5.2244 3.9634 5.32343 4.03919 5.43661 4.0402L20.3519 4.06243C20.4914 4.06344 20.6046 3.95127 20.6056 3.81283C20.6056 3.7906 20.6035 3.76938 20.5975 3.74816L19.8942 0.935872Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2W = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12.9831 0.999993C9.7767 1.05249 6.71975 2.36471 4.47309 4.65299C3.34897 5.77217 2.46204 7.10651 1.86531 8.57624C1.26858 10.046 0.974315 11.6209 1.00009 13.207C0.998249 14.7568 1.30226 16.2917 1.8947 17.7238C2.48713 19.1559 3.35636 20.457 4.45255 21.5525C5.54874 22.648 6.85035 23.5165 8.28278 24.1081C9.71521 24.6997 11.2503 25.0028 12.8001 25H13.0141C16.2215 24.967 19.2848 23.663 21.5318 21.3741C23.7789 19.0852 25.0262 15.9984 25.0001 12.791C25.0038 11.2224 24.6938 9.66892 24.0883 8.22188C23.4829 6.77485 22.5942 5.46348 21.4746 4.3649C20.355 3.26632 19.027 2.4027 17.5687 1.82484C16.1104 1.24697 14.5513 0.966526 12.9831 0.999993ZM11.5001 17.542C11.4929 17.3459 11.5248 17.1504 11.5941 16.9668C11.6633 16.7832 11.7685 16.6153 11.9034 16.4728C12.0383 16.3304 12.2003 16.2162 12.3799 16.1371C12.5594 16.058 12.7529 16.0155 12.9491 16.012H12.9761C13.3707 16.0128 13.7497 16.1662 14.0336 16.4403C14.3176 16.7143 14.4844 17.0877 14.4991 17.482C14.5064 17.6781 14.4746 17.8737 14.4054 18.0573C14.3362 18.241 14.231 18.409 14.0961 18.5515C13.9611 18.6939 13.7991 18.8081 13.6195 18.8871C13.4399 18.9662 13.2463 19.0087 13.0501 19.012H13.0231C12.6286 19.0107 12.2499 18.8571 11.9661 18.5831C11.6823 18.3092 11.5153 17.9362 11.5001 17.542ZM12.0001 13.5V7.49999C12.0001 7.23478 12.1055 6.98042 12.293 6.79289C12.4805 6.60535 12.7349 6.49999 13.0001 6.49999C13.2653 6.49999 13.5197 6.60535 13.7072 6.79289C13.8947 6.98042 14.0001 7.23478 14.0001 7.49999V13.5C14.0001 13.7652 13.8947 14.0196 13.7072 14.2071C13.5197 14.3946 13.2653 14.5 13.0001 14.5C12.7349 14.5 12.4805 14.3946 12.293 14.2071C12.1055 14.0196 12.0001 13.7652 12.0001 13.5Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2X = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, h("path", {
        fill: "#303334",
        fillRule: "nonzero",
        d: "M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2Y = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.2517 15.6556C11.4732 15.5076 11.7336 15.4286 12 15.4286C12.3572 15.4286 12.6998 15.5705 12.9524 15.8231C13.205 16.0757 13.347 16.4183 13.347 16.7755C13.347 17.0419 13.268 17.3023 13.12 17.5238C12.9719 17.7454 12.7616 17.918 12.5155 18.0199C12.2693 18.1219 11.9985 18.1486 11.7372 18.0966C11.476 18.0446 11.236 17.9163 11.0476 17.728C10.8592 17.5396 10.7309 17.2996 10.679 17.0383C10.627 16.777 10.6537 16.5062 10.7556 16.2601C10.8576 16.014 11.0302 15.8036 11.2517 15.6556Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.0001 4.40814C12.5411 4.40814 12.9797 4.84672 12.9797 5.38773V13.4694C12.9797 14.0104 12.5411 14.449 12.0001 14.449C11.4591 14.449 11.0205 14.0104 11.0205 13.4694V5.38773C11.0205 4.84672 11.4591 4.40814 12.0001 4.40814Z",
        fill: "#00A0DF"
      }), h("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

var Icon$2Z = /*#__PURE__*/function (_Component) {
  _inherits(Icon, _Component);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var color = this.props.color ? CSS[this.props.color] : CSS.active;
      return h("i", {
        className: "".concat(CSS.icon, " ").concat(color, " ").concat(this.props.className || '')
      }, h("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, h("path", {
        d: "M12.842 0.446988C12.7461 0.313206 12.6197 0.204202 12.4733 0.129006C12.3268 0.0538101 12.1646 0.0145874 12 0.0145874C11.8354 0.0145874 11.6732 0.0538101 11.5267 0.129006C11.3803 0.204202 11.2539 0.313206 11.158 0.446988C11.086 0.557988 4 11.735 4 15.986C4 18.1077 4.84285 20.1426 6.34315 21.6428C7.84344 23.1431 9.87827 23.986 12 23.986C14.1217 23.986 16.1566 23.1431 17.6569 21.6428C19.1571 20.1426 20 18.1077 20 15.986C20 11.736 12.914 0.557988 12.842 0.446988ZM12 21.236C10.6081 21.2344 9.27366 20.6808 8.28944 19.6965C7.30522 18.7123 6.75159 17.3779 6.75 15.986C6.75 15.7871 6.82902 15.5963 6.96967 15.4557C7.11032 15.315 7.30109 15.236 7.5 15.236C7.69891 15.236 7.88968 15.315 8.03033 15.4557C8.17098 15.5963 8.25 15.7871 8.25 15.986C8.25132 16.9801 8.64684 17.9332 9.34981 18.6362C10.0528 19.3392 11.0058 19.7347 12 19.736C12.1989 19.736 12.3897 19.815 12.5303 19.9557C12.671 20.0963 12.75 20.2871 12.75 20.486C12.75 20.6849 12.671 20.8757 12.5303 21.0163C12.3897 21.157 12.1989 21.236 12 21.236Z",
        fill: "#00A0DF"
      })));
    }
  }]);

  return Icon;
}(m);

export { Icon as AddBeneficiaryIcon, Icon$1 as AddBoldIcon, Icon$2 as AddIcon, Icon$3 as AddLineIcon, Icon$4 as ArrowBackIcon, Icon$5 as ArrowDownBoldIcon, Icon$6 as ArrowDownLineIcon, Icon$7 as ArrowUpBoldIcon, Icon$8 as ArrowUpLineIcon, Icon$9 as AttachmentIcon, Icon$a as BackIcon, Icon$b as BankAccountIcon, Icon$c as BarcodeIcon, Icon$d as BuildingIcon, Icon$e as CalculatorCashIcon, Icon$f as CalculatorIcon, Icon$g as CalendarIcon, Icon$h as CameraIcon, Icon$q as CarIcon, Icon$i as CardBlockIcon, Icon$j as CardCheckIcon, Icon$k as CardDeleteIcon, Icon$l as CardIcon, Icon$m as CardLockIcon, Icon$n as CardMobileIcon, Icon$o as CardRenewalIcon, Icon$p as CardShieldIcon, Icon$r as CashIcon, Icon$s as CashPaymentBillIcon, Icon$t as CashPaymentIcon, Icon$u as CheckBoldIcon, Icon$v as CheckCircleIcon, Icon$w as CheckIcon, Icon$x as CheckLineIcon, Icon$y as ChevronDownIcon, Icon$z as ChevronLeftIcon, Icon$A as ChevronRightIcon, Icon$B as ChevronUpIcon, Icon$C as CircleIcon, Icon$D as CircleSmallIcon, Icon$E as ClearNotificationsIcon, Icon$F as ClockIcon, Icon$G as CloseBoldIcon, Icon$H as CloseIcon, Icon$I as CloseLineIcon, Icon$J as CoinsIcon, Icon$K as CollapseSmallIcon, Icon$L as CollectIcon, Image as ConnectCabifyImage, Icon$M as ContractIcon, Icon$N as CopyIcon, Icon$O as CurrencyDecreaseIcon, Icon$P as CurrencyIncreaseIcon, Icon$Q as DeleteIcon, Icon$R as DepositIcon, Icon$S as DescriptionAddedIcon, Icon$T as DescriptionIcon, Icon$U as DocumentAddedIcon, Icon$V as DocumentEditIcon, Icon$W as DocumentFilledIcon, Icon$X as DollarBoldIcon, Icon$Y as DollarLineIcon, Icon$Z as DownIcon, Icon$_ as EditIcon, Icon$$ as EntretainmentIcon, Icon$10 as EraseIcon, Icon$11 as EuroBoldIcon, Icon$12 as EuroLineIcon, Icon$13 as ExpandSmallIcon, Icon$17 as FAQIcon, Icon$15 as FaceIdIcon, Icon$14 as FacebookIcon, Icon$16 as FaceidIcon, Icon$18 as FavoriteOffIcon, Icon$19 as FavoriteOnIcon, Icon$1a as FilterIcon, Icon$1b as FlashOffIcon, Icon$1c as FlashOnIcon, Icon$1d as ForwardIcon, Icon$1e as ForwardSmallIcon, Icon$1f as FuelIcon, Icon$1g as GasIcon, Icon$1h as GovernmentIcon, Icon$1i as HelpBoldIcon, Icon$1j as HelpIcon, Icon$1k as HelpLineIcon, Icon$1l as ImageIcon, Icon$1m as InfoIcon, Icon$1n as InfoLineIcon, Icon$1o as InstagramIcon, Icon$1p as InsuranceCarIcon, Icon$1q as InsuranceDeviceIcon, Icon$1r as InsuranceHealthIcon, Icon$1s as InsuranceIcon, Icon$1t as InsuranceTravelIcon, Icon$1u as KeydeleteIcon, Icon$1v as LandlinePhoneIcon, Icon$1w as LightIcon, Icon$1x as LinkedinIcon, Icon$1y as ListIcon, Icon$1z as LocationHomeIcon, Icon$1A as LocationIcon, Icon$1B as LocationTargetIcon, Icon$1C as LockIcon, Icon$1D as LogOutIcon, Image$1 as LogoImage, Icon$1E as MailIcon, Image$2 as MapImage, Icon$1F as MenuIcon, Icon$1G as MessageBoldIcon, Icon$1H as MessageIcon, Icon$1I as MessageLineIcon, Icon$1J as MoneyBagIcon, Icon$1K as MoneyIcon, Icon$1L as MopErrorIcon, Icon$1M as MopIcon, Icon$1N as MopPendingIcon, Icon$1O as MopSpinnerIcon, Icon$1P as MopSuccessIcon, Icon$1Q as MoreIcon, Icon$1R as MoveMoneyIcon, Icon$1S as NotificationsClearedIcon, Icon$1T as NotificationsIcon, Icon$1U as PayIcon, Icon$1V as PdfIcon, Icon$1W as PersonIcon, Image$3 as PetRunningImage, Icon$1X as PhoneIcon, Icon$1Y as PinIcon, Image$4 as PromptLocationImage, Image$5 as PromptPermissionsImage, Image$6 as PromptSelfieImage, Icon$1_ as QrCodeIcon, Icon$1Z as QrcardIcon, Icon$1$ as RecordIcon, Icon$20 as ReloadIcon, Icon$21 as RequestIcon, Icon$22 as ResizeIcon, Icon$23 as RotateDeviceIcon, Icon$24 as RotateIcon, Icon$25 as RotateLandscapeIcon, Icon$26 as RotatePortraitIcon, Icon$2l as SMSIcon, Icon$27 as SaveMoneyIcon, Icon$28 as ScanIcon, Image$7 as ScanSuccessImage, Icon$29 as SearchIcon, Icon$2a as SecurityIcon, Icon$2b as SelfieIcon, Icon$2c as SelfiePictureIcon, Icon$2d as SendIcon, Icon$2e as ServicesIcon, Image$8 as SetPinImage, Icon$2f as SettingsIcon, Icon$2g as ShareAndroidIcon, Icon$2h as ShareIcon, Icon$2i as ShareIosIcon, Icon$2j as ShoppingIcon, Icon$2k as SignIcon, Image$9 as SuccessInfoImage, Image$a as SuccessPhoneImage, Icon$2m as SupportChatLineIcon, Icon$2n as SupportIcon, Icon$2p as TCBusinessIcon, Icon$2q as TCCashIcon, Icon$2r as TCGroceriesIcon, Icon$2s as TCHealthIcon, Icon$2t as TCIncomeIcon, Icon$2u as TCLeisureIcon, Icon$2v as TCRestaurantsIcon, Icon$2w as TCShoppingIcon, Icon$2x as TCTransfersIcon, Icon$2y as TCTransportIcon, Icon$2z as TCTravelIcon, Icon$2A as TCUtilitiesIcon, Icon$2o as TaxesIcon, Icon$2B as TicketIcon, Icon$2C as TouchIdIcon, Icon$2D as TouchidIcon, Icon$2E as TransferIcon, Icon$2F as TvIcon, Icon$2G as TwitterIcon, Icon$2H as UnlockIcon, Icon$2I as UpIcon, Icon$2J as UserAddIcon, Icon$2K as UserCheckIcon, Icon$2L as UserEditIcon, Icon$2M as UserInfoIcon, Icon$2N as UserMoneyIcon, Icon$2O as UserShieldIcon, Icon$2P as VideoIcon, Icon$2Q as ViewIcon, Icon$2R as ViewMoreIcon, Icon$2S as ViewMoreVerticalIcon, Icon$2T as ViewoffIcon, Icon$2U as VoiceIcon, Icon$2V as WalletIcon, Icon$2W as WarningBoldIcon, Icon$2X as WarningIcon, Icon$2Y as WarningLineIcon, Icon$2Z as WaterIcon };
//# sourceMappingURL=bundle-esm.js.map
