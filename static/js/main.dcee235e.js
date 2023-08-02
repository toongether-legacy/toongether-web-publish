/*! For license information please see main.dcee235e.js.LICENSE.txt */
!(function () {
  var e = {
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          l = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          x = Symbol.for("react.profiler"),
          C = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var D = Symbol.iterator;
        function I(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (D && e[D]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          z = Object.assign;
        function j(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var F = !1;
        function U(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  l = o.length - 1;
                1 <= i && 0 <= l && a[i] !== o[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (a[i] !== o[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || a[i] !== o[l])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? j(e) : "";
        }
        function V(e) {
          switch (e.tag) {
            case 5:
              return j(e.type);
            case 16:
              return j("Lazy");
            case 13:
              return j("Suspense");
            case 19:
              return j("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case _:
              return "Portal";
            case x:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var n = t.checked;
          return z({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function X(e, t) {
          Z(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return z({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = z(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Se = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var _e = null,
          ke = null,
          Ee = null;
        function xe(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof _e) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = wa(t)), _e(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
        }
        function Te() {
          if (ke) {
            var e = ke,
              t = Ee;
            if (((Ee = ke = null), xe(e), t))
              for (e = 0; e < t.length; e++) xe(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Ne() {}
        var Pe = !1;
        function Le(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return Re(e, t, n);
          } finally {
            (Pe = !1), (null !== ke || null !== Ee) && (Ne(), Te());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (c)
          try {
            var De = {};
            Object.defineProperty(De, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", De, De),
              window.removeEventListener("test", De, De);
          } catch (ce) {
            Ae = !1;
          }
        function Ie(e, t, n, r, a, o, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          ze = null,
          je = !1,
          Fe = null,
          Ue = {
            onError: function (e) {
              (Me = !0), (ze = e);
            },
          };
        function Ve(e, t, n, r, a, o, i, l, u) {
          (Me = !1), (ze = null), Ie.apply(Ue, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(o(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var l = !1, u = a.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ke(e)
            : null;
        }
        function Ke(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ke(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Qe = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ze = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
              },
          lt = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function St(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          _t,
          kt,
          Et,
          xt,
          Ct = !1,
          Tt = [],
          Rt = null,
          Nt = null,
          Pt = null,
          Lt = new Map(),
          Ot = new Map(),
          At = [],
          Dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function It(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && _t(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function zt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void xt(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function jt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && _t(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Se = r), n.target.dispatchEvent(r), (Se = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          jt(e) && n.delete(t);
        }
        function Ut() {
          (Ct = !1),
            null !== Rt && jt(Rt) && (Rt = null),
            null !== Nt && jt(Nt) && (Nt = null),
            null !== Pt && jt(Pt) && (Pt = null),
            Lt.forEach(Ft),
            Ot.forEach(Ft);
        }
        function Vt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct ||
              ((Ct = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Bt(e) {
          function t(t) {
            return Vt(t, e);
          }
          if (0 < Tt.length) {
            Vt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Vt(Rt, e),
              null !== Nt && Vt(Nt, e),
              null !== Pt && Vt(Pt, e),
              Lt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            zt(n), null === n.blockedOn && At.shift();
        }
        var Wt = S.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Gt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Kt(e, t, n, r) {
          var a = bt,
            o = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Gt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = o);
          }
        }
        function Gt(e, t, n, r) {
          if (Ht) {
            var a = Qt(e, t, n, r);
            if (null === a) Hr(e, t, r, qt, n), It(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Rt = Mt(Rt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = Mt(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Lt.set(o, Mt(Lt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Ot.set(o, Mt(Ot.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((It(e, r), 4 & t && -1 < Dt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && wt(o),
                  null === (o = Qt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Qt(e, t, n, r) {
          if (((qt = null), null !== (e = ga((e = we(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Xe()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Xt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            z(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = z({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = z({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: xn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(z({}, pn, { dataTransfer: 0 })),
          mn = an(z({}, fn, { relatedTarget: 0 })),
          yn = an(
            z({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = z({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          Sn = an(z({}, sn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          _n = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function xn() {
          return En;
        }
        var Cn = z({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? _n[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: xn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Cn),
          Rn = an(
            z({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            z({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: xn,
            })
          ),
          Pn = an(
            z({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = z({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = an(Ln),
          An = [9, 13, 27, 32],
          Dn = c && "CompositionEvent" in window,
          In = null;
        c && "documentMode" in document && (In = document.documentMode);
        var Mn = c && "TextEvent" in window && !In,
          zn = c && (!Dn || (In && 8 < In && 11 >= In)),
          jn = String.fromCharCode(32),
          Fn = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ce(r),
            0 < (t = Kr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Kn = null,
          Gn = null;
        function qn(e) {
          jr(e, 0);
        }
        function Qn(e) {
          if (G(Sa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (c) {
          var Xn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Xn = Jn;
          } else Xn = !1;
          Zn = Xn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Kn && (Kn.detachEvent("onpropertychange", nr), (Gn = Kn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Qn(Gn)) {
            var t = [];
            $n(t, Gn, e, we(e)), Le(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Gn = n), (Kn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn(Gn);
        }
        function or(e, t) {
          if ("click" === e) return Qn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function Sr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && ur(gr, r)) ||
              ((gr = r),
              0 < (r = Kr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var _r = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Er = {};
        function xr(e) {
          if (kr[e]) return kr[e];
          if (!_r[e]) return e;
          var t,
            n = _r[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete _r.animationend.animation,
            delete _r.animationiteration.animation,
            delete _r.animationstart.animation),
          "TransitionEvent" in window || delete _r.transitionend.transition);
        var Cr = xr("animationend"),
          Tr = xr("animationiteration"),
          Rr = xr("animationstart"),
          Nr = xr("transitionend"),
          Pr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          Pr.set(e, t), u(t, [e]);
        }
        for (var Ar = 0; Ar < Lr.length; Ar++) {
          var Dr = Lr[Ar];
          Or(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
        }
        Or(Cr, "onAnimationEnd"),
          Or(Tr, "onAnimationIteration"),
          Or(Rr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Nr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ir =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ir)
          );
        function zr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, l, u, s) {
              if ((Ve.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var c = ze;
                (Me = !1), (ze = null), je || ((je = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  zr(a, l, s), (o = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  zr(a, l, s), (o = u);
                }
            }
          }
          if (je) throw ((e = Fe), (je = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Vr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Vr]) {
            (e[Vr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Vr] || ((t[Vr] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Kt;
              break;
            default:
              a = Gt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = ga(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = o = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = o,
              a = we(n),
              i = [];
            e: {
              var l = Pr.get(e);
              if (void 0 !== l) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Tn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = mn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Nn;
                    break;
                  case Cr:
                  case Tr:
                  case Rr:
                    u = yn;
                    break;
                  case Nr:
                    u = Pn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Rn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Oe(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, a)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === Se ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ga(s) && !s[ha])) &&
                  (u || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ga(s)
                          : null) &&
                        (s !== (f = Be(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? l : Sa(u)),
                  (p = null == s ? l : Sa(s)),
                  ((l = new c(v, h + "leave", u, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Gr(p)) h++;
                    for (p = 0, v = d; v; v = Gr(v)) p++;
                    for (; 0 < h - p; ) (c = Gr(c)), h--;
                    for (; 0 < p - h; ) (d = Gr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Gr(c)), (d = Gr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && qr(i, l, u, c, !1),
                  null !== s && null !== f && qr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? Sa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Yn;
              else if (Hn(l))
                if (Zn) m = ir;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = or);
              switch (
                (m && (m = m(e, r))
                  ? $n(i, m, n, a)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (y = r ? Sa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), Sr(i, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  Sr(i, n, a);
              }
              var g;
              if (Dn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (g = en())
                    : ((Xt = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Bn = !0))),
                0 < (y = Kr(r, b)).length &&
                  ((b = new Sn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Vn(n)) && (b.data = g))),
                (g = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), jn);
                        case "textInput":
                          return (e = t.data) === jn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Dn && Un(e, t))
                          ? ((e = en()), (Jt = Xt = Zt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Kr(r, "onBeforeInput")).length &&
                  ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            jr(i, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Kr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Oe(e, n)) && r.unshift($r(e, o, a)),
              null != (o = Oe(e, t)) && r.push($r(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              a
                ? null != (u = Oe(n, o)) && i.unshift($r(n, u, l))
                : a || (null != (u = Oe(n, o)) && i.push($r(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Qr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Qr, "\n")
            .replace(Yr, "");
        }
        function Xr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Sa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var _a = [],
          ka = -1;
        function Ea(e) {
          return { current: e };
        }
        function xa(e) {
          0 > ka || ((e.current = _a[ka]), (_a[ka] = null), ka--);
        }
        function Ca(e, t) {
          ka++, (_a[ka] = e.current), (e.current = t);
        }
        var Ta = {},
          Ra = Ea(Ta),
          Na = Ea(!1),
          Pa = Ta;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Oa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          xa(Na), xa(Ra);
        }
        function Da(e, t, n) {
          if (Ra.current !== Ta) throw Error(o(168));
          Ca(Ra, t), Ca(Na, n);
        }
        function Ia(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, W(e) || "Unknown", a));
          return z({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Pa = Ra.current),
            Ca(Ra, e),
            Ca(Na, Na.current),
            !0
          );
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ia(e, t, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              xa(Na),
              xa(Ra),
              Ca(Ra, e))
            : xa(Na),
            Ca(Na, n);
        }
        var ja = null,
          Fa = !1,
          Ua = !1;
        function Va(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Ba() {
          if (!Ua && null !== ja) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = ja;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (ja = null), (Fa = !1);
            } catch (a) {
              throw (null !== ja && (ja = ja.slice(e + 1)), Ge(Je, Ba), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Ka = 0,
          Ga = [],
          qa = 0,
          Qa = null,
          Ya = 1,
          Za = "";
        function Xa(e, t) {
          (Wa[Ha++] = Ka), (Wa[Ha++] = $a), ($a = e), (Ka = t);
        }
        function Ja(e, t, n) {
          (Ga[qa++] = Ya), (Ga[qa++] = Za), (Ga[qa++] = Qa), (Qa = e);
          var r = Ya;
          e = Za;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Za = o + e);
          } else (Ya = (1 << o) | (n << a) | r), (Za = e);
        }
        function eo(e) {
          null !== e.return && (Xa(e, 1), Ja(e, 1, 0));
        }
        function to(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Ka = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Qa; )
            (Qa = Ga[--qa]),
              (Ga[qa] = null),
              (Za = Ga[--qa]),
              (Ga[qa] = null),
              (Ya = Ga[--qa]),
              (Ga[qa] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Os(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Qa ? { id: Ya, overflow: Za } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Os(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function uo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function so(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (uo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (uo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return co(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (uo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = sa(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = sa(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function vo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var mo = S.ReactCurrentBatchConfig;
        function yo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = z({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var go = Ea(null),
          bo = null,
          So = null,
          wo = null;
        function _o() {
          wo = So = bo = null;
        }
        function ko(e) {
          var t = go.current;
          xa(go), (e._currentValue = t);
        }
        function Eo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function xo(e, t) {
          (bo = e),
            (wo = So = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Sl = !0), (e.firstContext = null));
        }
        function Co(e) {
          var t = e._currentValue;
          if (wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === So)
            ) {
              if (null === bo) throw Error(o(308));
              (So = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else So = So.next = e;
          return t;
        }
        var To = null;
        function Ro(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function No(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ro(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Po(e, r)
          );
        }
        function Po(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Lo = !1;
        function Oo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ao(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Do(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Io(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Nu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Po(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ro(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Po(e, n)
          );
        }
        function Mo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function zo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function jo(e, t, n, r) {
          var a = e.updateQueue;
          Lo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              s = u.next;
            (u.next = null), null === i ? (o = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, c = s = u = null, l = o; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = z({}, f, d);
                      break e;
                    case 2:
                      Lo = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (zu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Fo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Uo = new r.Component().refs;
        function Vo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : z({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Io(e, o, a)) && (rs(t, e, a, r), Mo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              o = Do(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Io(e, o, a)) && (rs(t, e, a, r), Mo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Do(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Io(e, a, r)) && (rs(t, e, r, n), Mo(t, e, r));
          },
        };
        function Wo(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function Ho(e, t, n) {
          var r = !1,
            a = Ta,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Co(o))
              : ((a = Oa(t) ? Pa : Ra.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Ta)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function $o(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
        }
        function Ko(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Uo), Oo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Co(o))
            : ((o = Oa(t) ? Pa : Ra.current), (a.context = La(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Vo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bo.enqueueReplaceState(a, a.state, null),
              jo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Go(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Uo && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function qo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Qo(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = js(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === k
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === O &&
                    Qo(o) === t.type))
              ? (((r = a(t, n.props)).ref = Go(e, t, n)), (r.return = e), r)
              : (((r = Is(n.type, n.key, n.props, null, e.mode, r)).ref = Go(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = js("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Is(t.type, t.key, t.props, null, e.mode, n)).ref = Go(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case _:
                  return ((t = Fs(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || I(t))
                return ((t = Ms(t, e.mode, n, null)).return = e), t;
              qo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null;
                case _:
                  return n.key === a ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || I(n)) return null !== a ? null : f(e, t, n, r, null);
              qo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case _:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case O:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || I(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              qo(t, r);
            }
            return null;
          }
          function v(a, o, l, u) {
            for (
              var s = null, c = null, f = o, v = (o = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, l[v], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, v)),
                null === c ? (s = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === l.length) return n(a, f), ao && Xa(a, v), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], u)) &&
                  ((o = i(f, o, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return ao && Xa(a, v), s;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], u)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (o = i(m, o, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, v),
              s
            );
          }
          function m(a, l, u, s) {
            var c = I(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), v = l, m = (l = 0), y = null, g = u.next();
              null !== v && !g.done;
              m++, g = u.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, s);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = i(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ao && Xa(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = u.next())
                null !== (g = d(a, g.value, s)) &&
                  ((l = i(g, l, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ao && Xa(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = u.next())
              null !== (g = h(v, a, m, g.value, s)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (l = i(g, l, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Xa(a, m),
              c
            );
          }
          return function e(r, o, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var s = i.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === O &&
                            Qo(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, i.props)).ref = Go(r, c, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === k
                      ? (((o = Ms(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = o))
                      : (((u = Is(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = Go(r, o, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return l(r);
                case _:
                  e: {
                    for (c = i.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Fs(i, r.mode, u)).return = r), (r = o);
                  }
                  return l(r);
                case O:
                  return e(r, o, (c = i._init)(i._payload), u);
              }
              if (te(i)) return v(r, o, i, u);
              if (I(i)) return m(r, o, i, u);
              qo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = js(i, r.mode, u)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Zo = Yo(!0),
          Xo = Yo(!1),
          Jo = {},
          ei = Ea(Jo),
          ti = Ea(Jo),
          ni = Ea(Jo);
        function ri(e) {
          if (e === Jo) throw Error(o(174));
          return e;
        }
        function ai(e, t) {
          switch ((Ca(ni, t), Ca(ti, e), Ca(ei, Jo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xa(ei), Ca(ei, t);
        }
        function oi() {
          xa(ei), xa(ti), xa(ni);
        }
        function ii(e) {
          ri(ni.current);
          var t = ri(ei.current),
            n = ue(t, e.type);
          t !== n && (Ca(ti, e), Ca(ei, n));
        }
        function li(e) {
          ti.current === e && (xa(ei), xa(ti));
        }
        var ui = Ea(0);
        function si(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function fi() {
          for (var e = 0; e < ci.length; e++)
            ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var di = S.ReactCurrentDispatcher,
          pi = S.ReactCurrentBatchConfig,
          hi = 0,
          vi = null,
          mi = null,
          yi = null,
          gi = !1,
          bi = !1,
          Si = 0,
          wi = 0;
        function _i() {
          throw Error(o(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Ei(e, t, n, r, a, i) {
          if (
            ((hi = i),
            (vi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (di.current = null === e || null === e.memoizedState ? ll : ul),
            (e = n(r, a)),
            bi)
          ) {
            i = 0;
            do {
              if (((bi = !1), (Si = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (yi = mi = null),
                (t.updateQueue = null),
                (di.current = sl),
                (e = n(r, a));
            } while (bi);
          }
          if (
            ((di.current = il),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (yi = mi = vi = null),
            (gi = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function xi() {
          var e = 0 !== Si;
          return (Si = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e), yi
          );
        }
        function Ti() {
          if (null === mi) {
            var e = vi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === yi ? vi.memoizedState : yi.next;
          if (null !== t) (yi = t), (mi = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === yi ? (vi.memoizedState = yi = e) : (yi = yi.next = e);
          }
          return yi;
        }
        function Ri(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ni(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = mi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var l = a.next;
              (a.next = i.next), (i.next = l);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (l = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((hi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (l = r)) : (s = s.next = d),
                  (vi.lanes |= f),
                  (zu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (l = r) : (s.next = u),
              lr(r, t.memoizedState) || (Sl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (vi.lanes |= i), (zu |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Pi(e) {
          var t = Ti(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== a);
            lr(i, t.memoizedState) || (Sl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Li() {}
        function Oi(e, t) {
          var n = vi,
            r = Ti(),
            a = t(),
            i = !lr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (Sl = !0)),
            (r = r.queue),
            Hi(Ii.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== yi && 1 & yi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fi(9, Di.bind(null, n, r, a, t), void 0, null),
              null === Pu)
            )
              throw Error(o(349));
            0 !== (30 & hi) || Ai(n, t, a);
          }
          return a;
        }
        function Ai(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Di(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Mi(t) && zi(e);
        }
        function Ii(e, t, n) {
          return n(function () {
            Mi(t) && zi(e);
          });
        }
        function Mi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zi(e) {
          var t = Po(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function ji(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ri,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ui() {
          return Ti().memoizedState;
        }
        function Vi(e, t, n, r) {
          var a = Ci();
          (vi.flags |= e),
            (a.memoizedState = Fi(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bi(e, t, n, r) {
          var a = Ti();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((o = i.destroy), null !== r && ki(r, i.deps)))
              return void (a.memoizedState = Fi(t, n, o, r));
          }
          (vi.flags |= e), (a.memoizedState = Fi(1 | t, n, o, r));
        }
        function Wi(e, t) {
          return Vi(8390656, 8, e, t);
        }
        function Hi(e, t) {
          return Bi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Bi(4, 2, e, t);
        }
        function Ki(e, t) {
          return Bi(4, 4, e, t);
        }
        function Gi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bi(4, 4, Gi.bind(null, t, e), n)
          );
        }
        function Qi() {}
        function Yi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Zi(e, t) {
          var n = Ti();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Xi(e, t, n) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (Sl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vi.lanes |= n), (zu |= n), (e.baseState = !0)),
              t);
        }
        function Ji(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pi.transition = r);
          }
        }
        function el() {
          return Ti().memoizedState;
        }
        function tl(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = No(e, t, n, r))) {
            rs(n, e, r, ts()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Ro(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = No(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vi || (null !== t && t === vi);
        }
        function al(e, t) {
          bi = gi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var il = {
            readContext: Co,
            useCallback: _i,
            useContext: _i,
            useEffect: _i,
            useImperativeHandle: _i,
            useInsertionEffect: _i,
            useLayoutEffect: _i,
            useMemo: _i,
            useReducer: _i,
            useRef: _i,
            useState: _i,
            useDebugValue: _i,
            useDeferredValue: _i,
            useTransition: _i,
            useMutableSource: _i,
            useSyncExternalStore: _i,
            useId: _i,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Co,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Co,
            useEffect: Wi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Vi(4194308, 4, Gi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Vi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Vi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: ji,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = ji(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vi,
                a = Ci();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Pu)) throw Error(o(349));
                0 !== (30 & hi) || Ai(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Wi(Ii.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Fi(9, Di.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = Pu.identifierPrefix;
              if (ao) {
                var n = Za;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
                  0 < (n = Si++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Co,
            useCallback: Yi,
            useContext: Co,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Zi,
            useReducer: Ni,
            useRef: Ui,
            useState: function () {
              return Ni(Ri);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Xi(Ti(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ni(Ri)[0], Ti().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Oi,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Co,
            useCallback: Yi,
            useContext: Co,
            useEffect: Hi,
            useImperativeHandle: qi,
            useInsertionEffect: $i,
            useLayoutEffect: Ki,
            useMemo: Zi,
            useReducer: Pi,
            useRef: Ui,
            useState: function () {
              return Pi(Ri);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = Ti();
              return null === mi
                ? (t.memoizedState = e)
                : Xi(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ri)[0], Ti().memoizedState];
            },
            useMutableSource: Li,
            useSyncExternalStore: Oi,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += V(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $u || (($u = !0), (Ku = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Do(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Gu ? (Gu = new Set([this])) : Gu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Do(-1, 1)).tag = 2), Io(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = S.ReactCurrentOwner,
          Sl = !1;
        function wl(e, t, n, r) {
          t.child = null === e ? Xo(t, null, n, r) : Zo(t, e.child, n, r);
        }
        function _l(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            xo(t, a),
            (r = Ei(e, t, n, r, o, a)),
            (n = xi()),
            null === e || Sl
              ? (ao && n && eo(t), (t.flags |= 1), wl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function kl(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              As(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Is(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), El(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return $l(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ds(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((Sl = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $l(e, t, a);
              0 !== (131072 & e.flags) && (Sl = !0);
            }
          }
          return Tl(e, t, n, r, a);
        }
        function xl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ca(Du, Au),
                (Au |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ca(Du, Au),
                  (Au |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ca(Du, Au),
                (Au |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ca(Du, Au),
              (Au |= r);
          return wl(e, t, a, n), t.child;
        }
        function Cl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Tl(e, t, n, r, a) {
          var o = Oa(n) ? Pa : Ra.current;
          return (
            (o = La(t, o)),
            xo(t, a),
            (n = Ei(e, t, n, r, o, a)),
            (r = xi()),
            null === e || Sl
              ? (ao && r && eo(t), (t.flags |= 1), wl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $l(e, t, a))
          );
        }
        function Rl(e, t, n, r, a) {
          if (Oa(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if ((xo(t, a), null === t.stateNode))
            Hl(e, t), Ho(t, n, r), Ko(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Co(s))
              : (s = La(t, (s = Oa(n) ? Pa : Ra.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && $o(t, i, r, s)),
              (Lo = !1);
            var d = t.memoizedState;
            (i.state = d),
              jo(t, r, i, a),
              (u = t.memoizedState),
              l !== r || d !== u || Na.current || Lo
                ? ("function" === typeof c &&
                    (Vo(t, n, c, r), (u = t.memoizedState)),
                  (l = Lo || Wo(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ao(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : yo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Co(u))
                : (u = La(t, (u = Oa(n) ? Pa : Ra.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && $o(t, i, r, u)),
              (Lo = !1),
              (d = t.memoizedState),
              (i.state = d),
              jo(t, r, i, a);
            var h = t.memoizedState;
            l !== f || d !== h || Na.current || Lo
              ? ("function" === typeof p &&
                  (Vo(t, n, p, r), (h = t.memoizedState)),
                (s = Lo || Wo(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nl(e, t, n, r, o, a);
        }
        function Nl(e, t, n, r, a, o) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && za(t, n, !1), $l(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Zo(t, e.child, null, o)),
                (t.child = Zo(t, null, l, o)))
              : wl(e, t, l, o),
            (t.memoizedState = r.state),
            a && za(t, n, !0),
            t.child
          );
        }
        function Pl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Da(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Da(0, t.context, !1),
            ai(e, t.containerInfo);
        }
        function Ll(e, t, n, r, a) {
          return ho(), vo(a), (t.flags |= 256), wl(e, t, n, r), t.child;
        }
        var Ol,
          Al,
          Dl,
          Il,
          Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
        function zl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function jl(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ui.current,
            l = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Ca(ui, 1 & i),
            null === e)
          )
            return (
              so(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = u))
                        : (l = zs(u, a, 0, null)),
                      (e = Ms(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = zl(n)),
                      (t.memoizedState = Ml),
                      e)
                    : Fl(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ul(e, t, l, (r = fl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = zs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ms(i, a, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Zo(t, e.child, null, l),
                    (t.child.memoizedState = zl(l)),
                    (t.memoizedState = Ml),
                    i);
              if (0 === (1 & t.mode)) return Ul(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Ul(e, t, l, (r = fl((i = Error(o(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (l & e.childLanes)), Sl || u)) {
                if (null !== (r = Pu)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Po(e, a), rs(r, e, a, -1));
                }
                return ms(), Ul(e, t, l, (r = fl(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Rs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = sa(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Ga[qa++] = Ya),
                    (Ga[qa++] = Za),
                    (Ga[qa++] = Qa),
                    (Ya = e.id),
                    (Za = e.overflow),
                    (Qa = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (l) {
            (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ds(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ds(r, l))
                : ((l = Ms(l, u, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? zl(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (l.memoizedState = u),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ml),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Ds(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = zs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ul(e, t, n, r) {
          return (
            null !== r && vo(r),
            Zo(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Eo(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Wl(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((wl(e, t, r.children, n), 0 !== (2 & (r = ui.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vl(e, n, t);
                else if (19 === e.tag) Vl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ca(ui, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === si(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === si(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, o);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ql(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gl(t), null;
            case 1:
            case 17:
              return Oa(t.type) && Aa(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oi(),
                xa(Na),
                xa(Ra),
                fi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ls(oo), (oo = null)))),
                Al(e, t),
                Gl(t),
                null
              );
            case 5:
              li(t);
              var a = ri(ni.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Dl(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Gl(t), null;
                }
                if (((e = ri(ei.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ir.length; a++) Fr(Ir[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Fr("invalid", r);
                  }
                  for (var u in (ge(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : l.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      K(r), J(r, i, !0);
                      break;
                    case "textarea":
                      K(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ol(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Ir.length; a++) Fr(Ir[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = Q(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = z({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (i in (ge(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Fr("scroll", e)
                              : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        K(e), J(e, r, !1);
                        break;
                      case "textarea":
                        K(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Il(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (xa(ui),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gl(t), (i = !1);
                } else null !== oo && (ls(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ui.current)
                        ? 0 === Iu && (Iu = 3)
                        : ms())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return (
                oi(),
                Al(e, t),
                null === e && Br(t.stateNode.containerInfo),
                Gl(t),
                null
              );
            case 10:
              return ko(t.type._context), Gl(t), null;
            case 19:
              if ((xa(ui), null === (i = t.memoizedState))) return Gl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== Iu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = si(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ca(ui, (1 & ui.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ze() > Wu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Kl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = si(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !ao)
                    )
                      return Gl(t), null;
                  } else
                    2 * Ze() - i.renderingStartTime > Wu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Kl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = ui.current),
                  Ca(ui, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Au) &&
                    (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ql(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Oa(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oi(),
                xa(Na),
                xa(Ra),
                fi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if (
                (xa(ui),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xa(ui), null;
            case 4:
              return oi(), null;
            case 10:
              return ko(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Ol = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Al = function () {}),
          (Dl = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ri(ei.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Q(e, a)), (r = Q(e, r)), (i = []);
                  break;
                case "select":
                  (a = z({}, a, { value: void 0 })),
                    (r = z({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Fr("scroll", e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Il = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Yl = !1,
          Zl = !1,
          Xl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                xs(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            xs(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && tu(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ou(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function lu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || lu(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) hu(e, t, n), (n = n.sibling);
        }
        function hu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Zl || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Bt(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      tu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Zl &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  xs(n, t, l);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zl = (r = Zl) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Zl = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function vu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xl()),
              t.forEach(function (t) {
                var r = Ns.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function mu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  l = t,
                  u = l;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(o(160));
                hu(i, l, a), (fu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                xs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yu(t, e), (t = t.sibling);
        }
        function yu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((mu(t, e), gu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (m) {
                  xs(e, e.return, m);
                }
                try {
                  ru(5, e, e.return);
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              break;
            case 1:
              mu(t, e), gu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (mu(t, e),
                gu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      Z(a, i),
                      be(u, l);
                    var c = be(u, i);
                    for (l = 0; l < s.length; l += 2) {
                      var f = s[l],
                        d = s[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        X(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (m) {
                    xs(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((mu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (m) {
                  xs(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (mu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  xs(e, e.return, m);
                }
              break;
            case 4:
            default:
              mu(t, e), gu(e);
              break;
            case 13:
              mu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bu = Ze())),
                4 & r && vu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zl = (c = Zl) || f), mu(t, e), (Zl = c))
                  : mu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jl = e, f = e.child; null !== f; ) {
                    for (d = Jl = f; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              xs(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            _u(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : _u(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (l =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = ve("display", l)));
                      } catch (m) {
                        xs(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        xs(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              mu(t, e), gu(e), 4 & r && vu(e);
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (lu(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              xs(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Jl = e), Su(e, t, n);
        }
        function Su(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var a = Jl,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Yl;
              if (!i) {
                var l = a.alternate,
                  u = (null !== l && null !== l.memoizedState) || Zl;
                l = Yl;
                var s = Zl;
                if (((Yl = i), (Zl = u) && !s))
                  for (Jl = a; null !== Jl; )
                    (u = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = i), (Jl = u))
                        : ku(a);
                for (; null !== o; ) (Jl = o), Su(o, t, n), (o = o.sibling);
                (Jl = a), (Yl = l), (Zl = s);
              }
              wu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Jl = o))
                : wu(e);
          }
        }
        function wu(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zl || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : yo(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fo(t, i, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fo(t, l, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Zl || (512 & t.flags && ou(t));
              } catch (p) {
                xs(t, t.return, p);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function _u(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ku(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    xs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      xs(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    xs(t, o, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ou(t);
                  } catch (u) {
                    xs(t, i, u);
                  }
              }
            } catch (u) {
              xs(t, t.return, u);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Eu,
          xu = Math.ceil,
          Cu = S.ReactCurrentDispatcher,
          Tu = S.ReactCurrentOwner,
          Ru = S.ReactCurrentBatchConfig,
          Nu = 0,
          Pu = null,
          Lu = null,
          Ou = 0,
          Au = 0,
          Du = Ea(0),
          Iu = 0,
          Mu = null,
          zu = 0,
          ju = 0,
          Fu = 0,
          Uu = null,
          Vu = null,
          Bu = 0,
          Wu = 1 / 0,
          Hu = null,
          $u = !1,
          Ku = null,
          Gu = null,
          qu = !1,
          Qu = null,
          Yu = 0,
          Zu = 0,
          Xu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Nu) ? Ze() : -1 !== Ju ? Ju : (Ju = Ze());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Nu) && 0 !== Ou
            ? Ou & -Ou
            : null !== mo.transition
            ? (0 === es && (es = vt()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Zu) throw ((Zu = 0), (Xu = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & Nu) && e === Pu) ||
              (e === Pu && (0 === (2 & Nu) && (ju |= n), 4 === Iu && us(e, Ou)),
              as(e, r),
              1 === n &&
                0 === Nu &&
                0 === (1 & t.mode) &&
                ((Wu = Ze() + 500), Fa && Ba()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                l = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (l & n) && 0 === (l & r)) || (a[i] = pt(l, t))
                : u <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Pu ? Ou : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Va(e);
                  })(ss.bind(null, e))
                : Va(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Nu) && Ba();
                }),
                (n = null);
            else {
              switch (St(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ps(n, os.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function os(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & Nu))) throw Error(o(327));
          var n = e.callbackNode;
          if (ks() && e.callbackNode !== n) return null;
          var r = dt(e, e === Pu ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ys(e, r);
          else {
            t = r;
            var a = Nu;
            Nu |= 2;
            var i = vs();
            for (
              (Pu === e && Ou === t) ||
              ((Hu = null), (Wu = Ze() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                hs(e, u);
              }
            _o(),
              (Cu.current = i),
              (Nu = a),
              null !== Lu ? (t = 0) : ((Pu = null), (Ou = 0), (t = Iu));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Mu), ps(e, 0), us(e, r), as(e, Ze()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(o(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ys(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = Mu), ps(e, 0), us(e, r), as(e, Ze()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  _s(e, Vu, Hu);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Bu + 500 - Ze()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(_s.bind(null, e, Vu, Hu), t);
                    break;
                  }
                  _s(e, Vu, Hu);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - it(r);
                    (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(_s.bind(null, e, Vu, Hu), r);
                    break;
                  }
                  _s(e, Vu, Hu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return as(e, Ze()), e.callbackNode === n ? os.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = ys(e, t)) && ((t = Vu), (Vu = n), null !== t && ls(t)),
            e
          );
        }
        function ls(e) {
          null === Vu ? (Vu = e) : Vu.push.apply(Vu, e);
        }
        function us(e, t) {
          for (
            t &= ~Fu,
              t &= ~ju,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Nu)) throw Error(o(327));
          ks();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Ze()), null;
          var n = ys(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Mu), ps(e, 0), us(e, t), as(e, Ze()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            _s(e, Vu, Hu),
            as(e, Ze()),
            null
          );
        }
        function cs(e, t) {
          var n = Nu;
          Nu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nu = n) && ((Wu = Ze() + 500), Fa && Ba());
          }
        }
        function fs(e) {
          null !== Qu && 0 === Qu.tag && 0 === (6 & Nu) && ks();
          var t = Nu;
          Nu |= 1;
          var n = Ru.transition,
            r = bt;
          try {
            if (((Ru.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ru.transition = n), 0 === (6 & (Nu = t)) && Ba();
          }
        }
        function ds() {
          (Au = Du.current), xa(Du);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Lu))
            for (n = Lu.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  oi(), xa(Na), xa(Ra), fi();
                  break;
                case 5:
                  li(r);
                  break;
                case 4:
                  oi();
                  break;
                case 13:
                case 19:
                  xa(ui);
                  break;
                case 10:
                  ko(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((Pu = e),
            (Lu = e = Ds(e.current, null)),
            (Ou = Au = t),
            (Iu = 0),
            (Mu = null),
            (Fu = ju = zu = 0),
            (Vu = Uu = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function hs(e, t) {
          for (;;) {
            var n = Lu;
            try {
              if ((_o(), (di.current = il), gi)) {
                for (var r = vi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                gi = !1;
              }
              if (
                ((hi = 0),
                (yi = mi = vi = null),
                (bi = !1),
                (Si = 0),
                (Tu.current = null),
                null === n || null === n.return)
              ) {
                (Iu = 1), (Mu = t), (Lu = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ou),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      gl(h, l, u, 0, t),
                      1 & h.mode && ml(i, c, t),
                      (s = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(s), (t.updateQueue = m);
                    } else v.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), ms();
                    break e;
                  }
                  s = Error(o(426));
                } else if (ao && 1 & u.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gl(y, l, u, 0, t),
                      vo(cl(s, u));
                    break e;
                  }
                }
                (i = s = cl(s, u)),
                  4 !== Iu && (Iu = 2),
                  null === Uu ? (Uu = [i]) : Uu.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        zo(i, hl(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var g = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gu || !Gu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          zo(i, vl(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              ws(n);
            } catch (S) {
              (t = S), Lu === n && null !== n && (Lu = n = n.return);
              continue;
            }
            break;
          }
        }
        function vs() {
          var e = Cu.current;
          return (Cu.current = il), null === e ? il : e;
        }
        function ms() {
          (0 !== Iu && 3 !== Iu && 2 !== Iu) || (Iu = 4),
            null === Pu ||
              (0 === (268435455 & zu) && 0 === (268435455 & ju)) ||
              us(Pu, Ou);
        }
        function ys(e, t) {
          var n = Nu;
          Nu |= 2;
          var r = vs();
          for ((Pu === e && Ou === t) || ((Hu = null), ps(e, t)); ; )
            try {
              gs();
              break;
            } catch (a) {
              hs(e, a);
            }
          if ((_o(), (Nu = n), (Cu.current = r), null !== Lu))
            throw Error(o(261));
          return (Pu = null), (Ou = 0), Iu;
        }
        function gs() {
          for (; null !== Lu; ) Ss(Lu);
        }
        function bs() {
          for (; null !== Lu && !Qe(); ) Ss(Lu);
        }
        function Ss(e) {
          var t = Eu(e.alternate, e, Au);
          (e.memoizedProps = e.pendingProps),
            null === t ? ws(e) : (Lu = t),
            (Tu.current = null);
        }
        function ws(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ql(n, t, Au))) return void (Lu = n);
            } else {
              if (null !== (n = Ql(n, t)))
                return (n.flags &= 32767), void (Lu = n);
              if (null === e) return (Iu = 6), void (Lu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Lu = t);
            Lu = t = e;
          } while (null !== t);
          0 === Iu && (Iu = 5);
        }
        function _s(e, t, n) {
          var r = bt,
            a = Ru.transition;
          try {
            (Ru.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks();
                } while (null !== Qu);
                if (0 !== (6 & Nu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === Pu && ((Lu = Pu = null), (Ou = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    Ps(tt, function () {
                      return ks(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ru.transition), (Ru.transition = null);
                  var l = bt;
                  bt = 1;
                  var u = Nu;
                  (Nu |= 4),
                    (Tu.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = l + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = l),
                                    p === i && ++f === r && (s = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : yo(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var S = t.stateNode.containerInfo;
                                    1 === S.nodeType
                                      ? (S.textContent = "")
                                      : 9 === S.nodeType &&
                                        S.documentElement &&
                                        S.removeChild(S.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (w) {
                              xs(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (v = nu), (nu = !1);
                    })(e, n),
                    yu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Ye(),
                    (Nu = u),
                    (bt = l),
                    (Ru.transition = i);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Qu = e), (Yu = a)),
                  (i = e.pendingLanes),
                  0 === i && (Gu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($u) throw (($u = !1), (e = Ku), (Ku = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && ks(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xu
                      ? Zu++
                      : ((Zu = 0), (Xu = e))
                    : (Zu = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Ru.transition = a), (bt = r);
          }
          return null;
        }
        function ks() {
          if (null !== Qu) {
            var e = St(Yu),
              t = Ru.transition,
              n = bt;
            try {
              if (((Ru.transition = null), (bt = 16 > e ? 16 : e), null === Qu))
                var r = !1;
              else {
                if (((e = Qu), (Qu = null), (Yu = 0), 0 !== (6 & Nu)))
                  throw Error(o(331));
                var a = Nu;
                for (Nu |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jl = c; null !== Jl; ) {
                          var f = Jl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jl = d);
                          else
                            for (; null !== Jl; ) {
                              var p = (f = Jl).sibling,
                                h = f.return;
                              if ((iu(f), f === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var v = i.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var g = i.sibling;
                      if (null !== g) {
                        (g.return = i.return), (Jl = g);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var S = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== S)
                    (S.return = l), (Jl = S);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (u = Jl).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (_) {
                          xs(u, u.return, _);
                        }
                      if (u === l) {
                        Jl = null;
                        break e;
                      }
                      var w = u.sibling;
                      if (null !== w) {
                        (w.return = u.return), (Jl = w);
                        break e;
                      }
                      Jl = u.return;
                    }
                }
                if (
                  ((Nu = a),
                  Ba(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (_) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ru.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Io(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (yt(e, 1, t), as(e, t));
        }
        function xs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gu || !Gu.has(r)))
                ) {
                  (t = Io(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (yt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Pu === e &&
              (Ou & n) === n &&
              (4 === Iu ||
              (3 === Iu && (130023424 & Ou) === Ou && 500 > Ze() - Bu)
                ? ps(e, 0)
                : (Fu |= n)),
            as(e, t);
        }
        function Ts(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Po(e, t)) && (yt(e, t, n), as(e, n));
        }
        function Rs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ts(e, n);
        }
        function Ns(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Ts(e, n);
        }
        function Ps(e, t) {
          return Ge(e, t);
        }
        function Ls(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, t, n, r) {
          return new Ls(e, t, n, r);
        }
        function As(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Is(e, t, n, r, a, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) As(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Ms(n.children, a, i, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case x:
                return (
                  ((e = Os(12, n, t, 2 | a)).elementType = x), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = Os(13, n, t, a)).elementType = N), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Os(19, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case A:
                return zs(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case T:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case O:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Os(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ms(e, t, n, r) {
          return ((e = Os(7, e, r, t)).lanes = n), e;
        }
        function zs(e, t, n, r) {
          return (
            ((e = Os(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function js(e, t, n) {
          return ((e = Os(6, e, null, t)).lanes = n), e;
        }
        function Fs(e, t, n) {
          return (
            ((t = Os(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Us(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vs(e, t, n, r, a, o, i, l, u) {
          return (
            (e = new Us(e, t, n, l, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Os(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Oo(o),
            e
          );
        }
        function Bs(e) {
          if (!e) return Ta;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oa(n)) return Ia(e, n, t);
          }
          return t;
        }
        function Ws(e, t, n, r, a, o, i, l, u) {
          return (
            ((e = Vs(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null)),
            (n = e.current),
            ((o = Do((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Io(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            as(e, r),
            e
          );
        }
        function Hs(e, t, n, r) {
          var a = t.current,
            o = ts(),
            i = ns(a);
          return (
            (n = Bs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Do(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Io(a, t, i)) && (rs(e, a, i, o), Mo(e, a, i)),
            i
          );
        }
        function $s(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ks(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gs(e, t) {
          Ks(e, t), (e = e.alternate) && Ks(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) Sl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (Sl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Pl(t), ho();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        Oa(t.type) && Ma(t);
                        break;
                      case 4:
                        ai(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ca(go, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ca(ui, 1 & ui.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? jl(e, t, n)
                            : (Ca(ui, 1 & ui.current),
                              null !== (e = $l(e, t, n)) ? e.sibling : null);
                        Ca(ui, 1 & ui.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ca(ui, ui.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), xl(e, t, n);
                    }
                    return $l(e, t, n);
                  })(e, t, n)
                );
              Sl = 0 !== (131072 & e.flags);
            }
          else (Sl = !1), ao && 0 !== (1048576 & t.flags) && Ja(t, Ka, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var a = La(t, Ra.current);
              xo(t, n), (a = Ei(null, t, r, e, a, n));
              var i = xi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oa(r) ? ((i = !0), Ma(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Oo(t),
                    (a.updater = Bo),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Ko(t, r, e, n),
                    (t = Nl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    wl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return As(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = yo(r, e)),
                  a)
                ) {
                  case 0:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Rl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = _l(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, yo(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Rl(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 3:
              e: {
                if ((Pl(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Ao(e, t),
                  jo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ll(e, t, r, n, (a = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ll(e, t, r, n, (a = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = sa(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = Xo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = $l(e, t, n);
                    break e;
                  }
                  wl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && so(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && so(t), null;
            case 13:
              return jl(e, t, n);
            case 4:
              return (
                ai(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Zo(t, null, r, n)) : wl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                _l(e, t, r, (a = t.elementType === r ? a : yo(r, a)), n)
              );
            case 7:
              return wl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = a.value),
                  Ca(go, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (lr(i.value, l)) {
                    if (i.children === a.children && !Na.current) {
                      t = $l(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        l = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Do(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Eo(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (u = l.alternate) && (u.lanes |= n),
                          Eo(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                xo(t, n),
                (r = r((a = Co(a)))),
                (t.flags |= 1),
                wl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = yo((r = t.type), t.pendingProps)),
                kl(e, t, r, (a = yo(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : yo(r, a)),
                Hl(e, t),
                (t.tag = 1),
                Oa(r) ? ((e = !0), Ma(t)) : (e = !1),
                xo(t, n),
                Ho(t, r, a),
                Ko(t, r, a, n),
                Nl(null, t, r, !0, e, n)
              );
            case 19:
              return Wl(e, t, n);
            case 22:
              return xl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          this._internalRoot = e;
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $s(i);
                l.call(e);
              };
            }
            Hs(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = $s(i);
                    o.call(e);
                  };
                }
                var i = Ws(t, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $s(u);
                  l.call(e);
                };
              }
              var u = Vs(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  Hs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return $s(i);
        }
        (Ys.prototype.render = Qs.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Hs(e, t, null, null);
          }),
          (Ys.prototype.unmount = Qs.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  Hs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ys.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && zt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    as(t, Ze()),
                    0 === (6 & Nu) && ((Wu = Ze() + 500), Ba()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Po(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Gs(e, 1);
            }
          }),
          (_t = function (e) {
            if (13 === e.tag) {
              var t = Po(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              Gs(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Po(e, t);
              if (null !== n) rs(n, e, t, ts());
              Gs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (xt = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (_e = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(o(90));
                      G(r), X(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Re = cs),
          (Ne = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, Sa, wa, Ce, Te, cs],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: S.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (ot = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Zs(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: _,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zs(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Qs(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              l = qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Ws(t, null, e, 1, null != n ? n : null, a, 0, i, l)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ys(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var S = (b.prototype = new g());
        (S.constructor = b), v(S, y.prototype), (S.isPureReactComponent = !0);
        var w = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          k = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, r) {
          var a,
            o = {},
            i = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              _.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: o,
            _owner: k.current,
          };
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function R(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, o, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === o ? "." + R(u, 0) : o),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  N(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + R((l = e[s]), s);
              u += N(l, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += N((l = l.value), t, a, (c = o + R(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          A = { transition: null },
          D = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              o = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                _.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                u = e[l],
                s = l + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[l] = n), (r = l));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((m = !1), S(e), !v))
            if (null !== r(s)) (v = !0), A(_);
            else {
              var t = r(c);
              null !== t && D(w, t.startTime - e);
            }
        }
        function _(e, n) {
          (v = !1), m && ((m = !1), g(C), (C = -1)), (h = !0);
          var o = p;
          try {
            for (
              S(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var l = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(s) && a(s),
                  S(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && D(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          E = !1,
          x = null,
          C = -1,
          T = 5,
          R = -1;
        function N() {
          return !(t.unstable_now() - R < T);
        }
        function P() {
          if (null !== x) {
            var e = t.unstable_now();
            R = e;
            var n = !0;
            try {
              n = x(!0, e);
            } finally {
              n ? k() : ((E = !1), (x = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            O = L.port2;
          (L.port1.onmessage = P),
            (k = function () {
              O.postMessage(null);
            });
        } else
          k = function () {
            y(P, 0);
          };
        function A(e) {
          (x = e), E || ((E = !0), k());
        }
        function D(e, n) {
          C = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), A(_));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (m ? (g(C), (C = -1)) : (m = !0), D(w, o - i)))
                : ((e.sortIndex = l), n(s, e), v || h || ((v = !0), A(_))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      613: function (e) {
        e.exports = function (e, t, n, r) {
          var a = n ? n.call(r, e, t) : void 0;
          if (void 0 !== a) return !!a;
          if (e === t) return !0;
          if ("object" !== typeof e || !e || "object" !== typeof t || !t)
            return !1;
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !1;
          for (
            var l = Object.prototype.hasOwnProperty.bind(t), u = 0;
            u < o.length;
            u++
          ) {
            var s = o[u];
            if (!l(s)) return !1;
            var c = e[s],
              f = t[s];
            if (
              !1 === (a = n ? n.call(r, c, f, s) : void 0) ||
              (void 0 === a && c !== f)
            )
              return !1;
          }
          return !0;
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var l = 2 & a && r;
          "object" == typeof l && !~e.indexOf(l);
          l = t(l)
        )
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return r[e];
            };
          });
        return (
          (i.default = function () {
            return r;
          }),
          n.d(o, i),
          o
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, [])
      );
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".d0c3d65e.chunk.js";
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = "toongether:";
      n.l = function (r, a, o, i) {
        if (e[r]) e[r].push(a);
        else {
          var l, u;
          if (void 0 !== o)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                l = f;
                break;
              }
            }
          l ||
            ((u = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [a]);
          var d = function (t, n) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                a &&
                  a.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = d.bind(null, l.onerror)),
            (l.onload = d.bind(null, l.onload)),
            u && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise(function (n, r) {
              a = e[t] = [n, r];
            });
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              l = new Error();
            n.l(
              i,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = i),
                    a[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = function (t, r) {
          var a,
            o,
            i = r[0],
            l = r[1],
            u = r[2],
            s = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (u) u(n);
          }
          for (t && t(r); s < i.length; s++)
            (o = i[s]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunktoongether = self.webpackChunktoongether || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (n.nc = void 0),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function o(e) {
        if (Array.isArray(e)) return e;
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        if (e) {
          if ("string" === typeof e) return i(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? i(e, t)
              : void 0
          );
        }
      }
      function u() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function s(e, t) {
        return (
          o(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o,
                i,
                l = [],
                u = !0,
                s = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    u = !0
                  );
              } catch (c) {
                (s = !0), (a = c);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((i = n.return()), Object(i) !== i)
                  )
                    return;
                } finally {
                  if (s) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          l(e, t) ||
          u()
        );
      }
      function c(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return i(e);
          })(e) ||
          c(e) ||
          l(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function m(e, t, n) {
        return (
          t && v(e.prototype, t),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && y(e, t);
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function S() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function w(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function _(e) {
        var t = S();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var a = b(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === p(t) || "function" === typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return w(e);
          })(this, n);
        };
      }
      function k(e, t, n) {
        return (
          (k = S()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && y(a, n.prototype), a;
              }),
          k.apply(null, arguments)
        );
      }
      function E(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (E = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return k(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(r, e)
            );
          }),
          E(e)
        );
      }
      function x(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = l(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var T,
        R = "popstate";
      function N(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function P(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function L(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function O(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          C(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? D(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function A(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          o = e.hash,
          i = void 0 === o ? "" : o;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i),
          n
        );
      }
      function D(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function I(t, n, r, a) {
        void 0 === a && (a = {});
        var o = a,
          i = o.window,
          l = void 0 === i ? document.defaultView : i,
          u = o.v5Compat,
          s = void 0 !== u && u,
          c = l.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: y.location, delta: n });
        }
        function m(e) {
          var t =
              "null" !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = "string" === typeof e ? e : A(e);
          return (
            N(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(C({}, c.state, { idx: p }), ""));
        var y = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(R, v),
              (d = e),
              function () {
                l.removeEventListener(R, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = O(y.location, t, n);
            r && r(a, t);
            var o = L(a, (p = h() + 1)),
              i = y.createHref(a);
            try {
              c.pushState(o, "", i);
            } catch (u) {
              if (u instanceof DOMException && "DataCloneError" === u.name)
                throw u;
              l.location.assign(i);
            }
            s && d && d({ action: f, location: y.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = O(y.location, t, n);
            r && r(a, t);
            var o = L(a, (p = h())),
              i = y.createHref(a);
            c.replaceState(o, "", i),
              s && d && d({ action: f, location: y.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return y;
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(T || (T = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function M(e, t, n) {
        void 0 === n && (n = "/");
        var r = Y(("string" === typeof t ? D(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = z(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var o = null, i = 0; null == o && i < a.length; ++i)
          o = G(a[i], Q(r));
        return o;
      }
      function z(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, o) {
          var i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (N(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          var l = ee([r, i.relativePath]),
            u = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (N(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            z(e.children, t, u, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: K(l, e.index), routesMeta: u });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                o = x(j(e.path));
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var i = r.value;
                  a(e, t, i);
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function j(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = o((n = t)) || c(n) || l(n) || u(),
          a = r[0],
          i = r.slice(1),
          s = a.endsWith("?"),
          d = a.replace(/\?$/, "");
        if (0 === i.length) return s ? [d, ""] : [d];
        var p = j(i.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            f(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          s && h.push.apply(h, f(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      var F = /^:\w+$/,
        U = 3,
        V = 2,
        B = 1,
        W = 10,
        H = -2,
        $ = function (e) {
          return "*" === e;
        };
      function K(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some($) && (r += H),
          t && (r += V),
          n
            .filter(function (e) {
              return !$(e);
            })
            .reduce(function (e, t) {
              return e + (F.test(t) ? U : "" === t ? B : W);
            }, r)
        );
      }
      function G(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", o = [], i = 0;
          i < n.length;
          ++i
        ) {
          var l = n[i],
            u = i === n.length - 1,
            s = "/" === a ? t : t.slice(a.length) || "/",
            c = q(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
              s
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          o.push({
            params: r,
            pathname: ee([a, c.pathname]),
            pathnameBase: te(ee([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = ee([a, c.pathnameBase]));
        }
        return o;
      }
      function q(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            P(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          r = s(n, 2),
          a = r[0],
          o = r[1],
          i = t.match(a);
        if (!i) return null;
        var l = i[0],
          u = l.replace(/(.)\/+$/, "$1"),
          c = i.slice(1);
        return {
          params: o.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    P(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: u,
          pattern: e,
        };
      }
      function Q(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            P(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function Y(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function Z(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function X(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function J(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = D(e))
            : (N(
                !(a = C({}, e)).pathname || !a.pathname.includes("?"),
                Z("?", "pathname", "search", a)
              ),
              N(
                !a.pathname || !a.pathname.includes("#"),
                Z("#", "pathname", "hash", a)
              ),
              N(
                !a.search || !a.search.includes("#"),
                Z("#", "search", "hash", a)
              ));
        var o,
          i = "" === e || "" === a.pathname,
          l = i ? "/" : a.pathname;
        if (r || null == l) o = n;
        else {
          var u = t.length - 1;
          if (l.startsWith("..")) {
            for (var s = l.split("/"); ".." === s[0]; ) s.shift(), (u -= 1);
            a.pathname = s.join("/");
          }
          o = u >= 0 ? t[u] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? D(e) : e,
              r = n.pathname,
              a = n.search,
              o = void 0 === a ? "" : a,
              i = n.hash,
              l = void 0 === i ? "" : i,
              u = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: u, search: ne(o), hash: re(l) };
          })(a, o),
          f = l && "/" !== l && l.endsWith("/"),
          d = (i || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var ee = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        te = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ne = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        re = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ae = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error));
      function oe(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var ie = ["post", "put", "patch", "delete"],
        le = (new Set(ie), ["get"].concat(ie));
      new Set(le), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function ue() {
        return (
          (ue = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ue.apply(this, arguments)
        );
      }
      var se = t.createContext(null);
      var ce = t.createContext(null);
      var fe = t.createContext(null);
      var de = t.createContext(null);
      var pe = t.createContext(null);
      var he = t.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var ve = t.createContext(null);
      function me() {
        return null != t.useContext(pe);
      }
      function ye() {
        return me() || N(!1), t.useContext(pe).location;
      }
      function ge(e) {
        t.useContext(de).static || t.useLayoutEffect(e);
      }
      function be() {
        return t.useContext(he).isDataRoute
          ? (function () {
              var e = Re(_e.UseNavigateStable).router,
                n = Pe(ke.UseNavigateStable),
                r = t.useRef(!1);
              return (
                ge(function () {
                  r.current = !0;
                }),
                t.useCallback(
                  function (t, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" === typeof t
                          ? e.navigate(t)
                          : e.navigate(t, ue({ fromRouteId: n }, a)));
                  },
                  [e, n]
                )
              );
            })()
          : (function () {
              me() || N(!1);
              var e = t.useContext(se),
                n = t.useContext(de),
                r = n.basename,
                a = n.navigator,
                o = t.useContext(he).matches,
                i = ye().pathname,
                l = JSON.stringify(
                  X(o).map(function (e) {
                    return e.pathnameBase;
                  })
                ),
                u = t.useRef(!1);
              return (
                ge(function () {
                  u.current = !0;
                }),
                t.useCallback(
                  function (t, n) {
                    if ((void 0 === n && (n = {}), u.current))
                      if ("number" !== typeof t) {
                        var o = J(t, JSON.parse(l), i, "path" === n.relative);
                        null == e &&
                          "/" !== r &&
                          (o.pathname =
                            "/" === o.pathname ? r : ee([r, o.pathname])),
                          (n.replace ? a.replace : a.push)(o, n.state, n);
                      } else a.go(t);
                  },
                  [r, a, l, i, e]
                )
              );
            })();
      }
      function Se(n, r, a) {
        me() || N(!1);
        var o,
          i = t.useContext(de).navigator,
          l = t.useContext(he).matches,
          u = l[l.length - 1],
          s = u ? u.params : {},
          c = (u && u.pathname, u ? u.pathnameBase : "/"),
          f = (u && u.route, ye());
        if (r) {
          var d,
            p = "string" === typeof r ? D(r) : r;
          "/" === c ||
            (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
            N(!1),
            (o = p);
        } else o = f;
        var h = o.pathname || "/",
          v = M(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" });
        var m = Te(
          v &&
            v.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: ee([
                  c,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? c
                    : ee([
                        c,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          l,
          a
        );
        return r && m
          ? t.createElement(
              pe.Provider,
              {
                value: {
                  location: ue(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    o
                  ),
                  navigationType: e.Pop,
                },
              },
              m
            )
          : m;
      }
      function we() {
        var e = (function () {
            var e,
              n = t.useContext(ve),
              r = Ne(ke.UseRouteError),
              a = Pe(ke.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = oe(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: o }, r) : null,
          null
        );
      }
      var _e,
        ke,
        Ee = t.createElement(we, null),
        xe = (function (e) {
          g(r, e);
          var n = _(r);
          function r(e) {
            var t;
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            m(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          he.Provider,
                          { value: this.props.routeContext },
                          t.createElement(ve.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ("idle" !== t.revalidation && "idle" === e.revalidation)
                      ? {
                          error: e.error,
                          location: e.location,
                          revalidation: e.revalidation,
                        }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Ce(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          o = t.useContext(se);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(he.Provider, { value: n }, a)
        );
      }
      function Te(e, n, r) {
        var a;
        if ((void 0 === n && (n = []), void 0 === r && (r = null), null == e)) {
          var o;
          if (null == (o = r) || !o.errors) return null;
          e = r.matches;
        }
        var i = e,
          l = null == (a = r) ? void 0 : a.errors;
        if (null != l) {
          var u = i.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          u >= 0 || N(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
        }
        return i.reduceRight(function (e, a, o) {
          var u = a.route.id ? (null == l ? void 0 : l[a.route.id]) : null,
            s = null;
          r && (s = a.route.errorElement || Ee);
          var c = n.concat(i.slice(0, o + 1)),
            f = function () {
              var n;
              return (
                (n = u
                  ? s
                  : a.route.Component
                  ? t.createElement(a.route.Component, null)
                  : a.route.element
                  ? a.route.element
                  : e),
                t.createElement(Ce, {
                  match: a,
                  routeContext: {
                    outlet: e,
                    matches: c,
                    isDataRoute: null != r,
                  },
                  children: n,
                })
              );
            };
          return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o)
            ? t.createElement(xe, {
                location: r.location,
                revalidation: r.revalidation,
                component: s,
                error: u,
                children: f(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : f();
        }, null);
      }
      function Re(e) {
        var n = t.useContext(se);
        return n || N(!1), n;
      }
      function Ne(e) {
        var n = t.useContext(ce);
        return n || N(!1), n;
      }
      function Pe(e) {
        var n = (function (e) {
            var n = t.useContext(he);
            return n || N(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || N(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate");
      })(_e || (_e = {})),
        (function (e) {
          (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId");
        })(ke || (ke = {}));
      var Le;
      r.startTransition;
      function Oe(e) {
        N(!1);
      }
      function Ae(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          o = n.children,
          i = void 0 === o ? null : o,
          l = n.location,
          u = n.navigationType,
          s = void 0 === u ? e.Pop : u,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        me() && N(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof l && (l = D(l));
        var v = l,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          S = v.hash,
          w = void 0 === S ? "" : S,
          _ = v.state,
          k = void 0 === _ ? null : _,
          E = v.key,
          x = void 0 === E ? "default" : E,
          C = t.useMemo(
            function () {
              var e = Y(y, p);
              return null == e
                ? null
                : {
                    location: {
                      pathname: e,
                      search: b,
                      hash: w,
                      state: k,
                      key: x,
                    },
                    navigationType: s,
                  };
            },
            [p, y, b, w, k, x, s]
          );
        return null == C
          ? null
          : t.createElement(
              de.Provider,
              { value: h },
              t.createElement(pe.Provider, { children: i, value: C })
            );
      }
      function De(e) {
        var t = e.children,
          n = e.location;
        return Se(Me(t), n);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Le || (Le = {}));
      var Ie = new Promise(function () {});
      t.Component;
      function Me(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e)) {
              var o = [].concat(f(n), [a]);
              if (e.type !== t.Fragment) {
                e.type !== Oe && N(!1),
                  e.props.index && e.props.children && N(!1);
                var i = {
                  id: e.props.id || o.join("-"),
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  Component: e.props.Component,
                  index: e.props.index,
                  path: e.props.path,
                  loader: e.props.loader,
                  action: e.props.action,
                  errorElement: e.props.errorElement,
                  ErrorBoundary: e.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != e.props.ErrorBoundary ||
                    null != e.props.errorElement,
                  shouldRevalidate: e.props.shouldRevalidate,
                  handle: e.props.handle,
                  lazy: e.props.lazy,
                };
                e.props.children && (i.children = Me(e.props.children, o)),
                  r.push(i);
              } else r.push.apply(r, Me(e.props.children, o));
            }
          }),
          r
        );
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      var ze = r.startTransition;
      function je(e) {
        var n,
          r = e.basename,
          a = e.children,
          o = e.future,
          i = e.window,
          l = t.useRef();
        null == l.current &&
          (l.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            I(
              function (e, t) {
                var n = e.location;
                return O(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : A(t);
              },
              null,
              n
            )));
        var u = l.current,
          c = s(t.useState({ action: u.action, location: u.location }), 2),
          f = c[0],
          d = c[1],
          p = (o || {}).v7_startTransition,
          h = t.useCallback(
            function (e) {
              p && ze
                ? ze(function () {
                    return d(e);
                  })
                : d(e);
            },
            [d, p]
          );
        return (
          t.useLayoutEffect(
            function () {
              return u.listen(h);
            },
            [u, h]
          ),
          t.createElement(Ae, {
            basename: r,
            children: a,
            location: f.location,
            navigationType: f.action,
            navigator: u,
          })
        );
      }
      "undefined" !== typeof window &&
        "undefined" !== typeof window.document &&
        window.document.createElement;
      var Fe, Ue;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher");
      })(Fe || (Fe = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ue || (Ue = {}));
      function Ve(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Be(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      function We() {
        We = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          l = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (N) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            l = new C(a || []);
          return r(i, "_invoke", { value: _(e, n, l) }), i;
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (N) {
            return { type: "throw", arg: N };
          }
        }
        e.wrap = s;
        var f = {};
        function d() {}
        function h() {}
        function v() {}
        var m = {};
        u(m, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(T([])));
        g && g !== t && n.call(g, o) && (m = g);
        var b = (v.prototype = d.prototype = Object.create(m));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function a(r, o, i, l) {
            var u = c(e[r], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == p(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      a("next", e, i, l);
                    },
                    function (e) {
                      a("throw", e, i, l);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return a("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var o;
          r(this, "_invoke", {
            value: function (e, n) {
              function r() {
                return new t(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (o = o ? o.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return R();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var l = k(i, n);
                if (l) {
                  if (l === f) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = c(e, t, n);
              if ("normal" === u.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), u.arg === f)
                )
                  continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              f
            );
          var a = c(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), f
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function E(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function C(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(E, this),
            this.reset(!0);
        }
        function T(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: R };
        }
        function R() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = v),
          r(b, "constructor", { value: v, configurable: !0 }),
          r(v, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(v, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === h || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, v)
                : ((e.__proto__ = v), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          S(w.prototype),
          u(w.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(s(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          S(b),
          u(b, l, "Generator"),
          u(b, o, function () {
            return this;
          }),
          u(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = T),
          (C.prototype = {
            constructor: C,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var l = n.call(o, "catchLoc"),
                    u = n.call(o, "finallyLoc");
                  if (l && u) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), f)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), f;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function He(e, t, n) {
        return (
          (t = h(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function $e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $e(Object(n), !0).forEach(function (t) {
                He(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $e(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Ge = n(164),
        qe = ["override"],
        Qe = ["cachePolicyForParams_UNSTABLE"],
        Ye = We().mark(Pn),
        Ze = We().mark(Vr);
      var Xe = function (e) {
        var t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (Hc) {}
        return t;
      };
      var Je = function (e) {
        return !!e && "function" === typeof e.then;
      };
      var et = function (e, t) {
        if (null != e) return e;
        throw Xe(
          null !== t && void 0 !== t ? t : "Got unexpected null or undefined"
        );
      };
      function tt(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var nt = (function () {
          function e() {
            d(this, e);
          }
          return (
            m(e, [
              {
                key: "getValue",
                value: function () {
                  throw Xe("BaseLoadable");
                },
              },
              {
                key: "toPromise",
                value: function () {
                  throw Xe("BaseLoadable");
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  throw Xe("BaseLoadable");
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  throw Xe(
                    'Loadable expected value, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "promiseMaybe",
                value: function () {
                  throw Xe("BaseLoadable");
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  throw Xe(
                    'Loadable expected promise, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "errorMaybe",
                value: function () {
                  throw Xe("BaseLoadable");
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  throw Xe(
                    'Loadable expected error, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "is",
                value: function (e) {
                  return e.state === this.state && e.contents === this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  throw Xe("BaseLoadable");
                },
              },
            ]),
            e
          );
        })(),
        rt = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              tt(w((r = t.call(this))), "state", "hasValue"),
              tt(w(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            m(n, [
              {
                key: "getValue",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.resolve(this.contents);
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "promiseMaybe", value: function () {} },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  try {
                    var n = e(this.contents);
                    return Je(n) ? ut(n) : ft(n) ? n : it(n);
                  } catch (r) {
                    return Je(r)
                      ? ut(
                          r.next(function () {
                            return t.map(e);
                          })
                        )
                      : lt(r);
                  }
                },
              },
            ]),
            n
          );
        })(nt),
        at = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              tt(w((r = t.call(this))), "state", "hasError"),
              tt(w(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            m(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.reject(this.contents);
                },
              },
              { key: "valueMaybe", value: function () {} },
              { key: "promiseMaybe", value: function () {} },
              {
                key: "errorMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  return this;
                },
              },
            ]),
            n
          );
        })(nt),
        ot = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              tt(w((r = t.call(this))), "state", "loading"),
              tt(w(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            m(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return this.contents;
                },
              },
              { key: "valueMaybe", value: function () {} },
              {
                key: "promiseMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  return ut(
                    this.contents
                      .then(function (t) {
                        var n = e(t);
                        if (ft(n)) {
                          var r = n;
                          switch (r.state) {
                            case "hasValue":
                            case "loading":
                              return r.contents;
                            case "hasError":
                              throw r.contents;
                          }
                        }
                        return n;
                      })
                      .catch(function (n) {
                        if (Je(n))
                          return n.then(function () {
                            return t.map(e).contents;
                          });
                        throw n;
                      })
                  );
                },
              },
            ]),
            n
          );
        })(nt);
      function it(e) {
        return Object.freeze(new rt(e));
      }
      function lt(e) {
        return Object.freeze(new at(e));
      }
      function ut(e) {
        return Object.freeze(new ot(e));
      }
      function st() {
        return Object.freeze(new ot(new Promise(function () {})));
      }
      function ct(e) {
        var t = (
            Array.isArray(e)
              ? e
              : Object.getOwnPropertyNames(e).map(function (t) {
                  return e[t];
                })
          ).map(function (e) {
            return ft(e) ? e : Je(e) ? ut(e) : it(e);
          }),
          n = (function (e) {
            return e.every(function (e) {
              return "hasValue" === e.state;
            })
              ? it(
                  e.map(function (e) {
                    return e.contents;
                  })
                )
              : e.some(function (e) {
                  return "hasError" === e.state;
                })
              ? lt(
                  et(
                    e.find(function (e) {
                      return "hasError" === e.state;
                    }),
                    "Invalid loadable passed to loadableAll"
                  ).contents
                )
              : ut(
                  Promise.all(
                    e.map(function (e) {
                      return e.contents;
                    })
                  )
                );
          })(t);
        return Array.isArray(e)
          ? n
          : n.map(function (t) {
              return Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
                return Ke(Ke({}, e), {}, He({}, n, t[r]));
              }, {});
            });
      }
      function ft(e) {
        return e instanceof nt;
      }
      var dt = {
          of: function (e) {
            return Je(e) ? ut(e) : ft(e) ? e : it(e);
          },
          error: function (e) {
            return lt(e);
          },
          loading: function () {
            return st();
          },
          all: ct,
          isLoadable: ft,
        },
        pt = {
          loadableWithValue: it,
          loadableWithError: lt,
          loadableWithPromise: ut,
          loadableLoading: st,
          loadableAll: ct,
          isLoadable: ft,
          RecoilLoadable: dt,
        },
        ht = pt.loadableWithValue,
        vt = pt.loadableWithError,
        mt = pt.loadableWithPromise,
        yt = pt.loadableLoading,
        gt = pt.loadableAll,
        bt = pt.isLoadable,
        St = pt.RecoilLoadable,
        wt = Object.freeze({
          __proto__: null,
          loadableWithValue: ht,
          loadableWithError: vt,
          loadableWithPromise: mt,
          loadableLoading: yt,
          loadableAll: gt,
          isLoadable: bt,
          RecoilLoadable: St,
        }),
        _t = {
          RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
          RECOIL_GKS_ENABLED: new Set([
            "recoil_hamt_2020",
            "recoil_sync_external_store",
            "recoil_suppress_rerender_in_callback",
            "recoil_memory_managament_2020",
          ]),
        };
      !(function () {
        var e;
        "undefined" !== typeof process &&
          null !=
            (null === (e = process) || void 0 === e
              ? void 0
              : {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }) &&
          ((function (e, t) {
            var n,
              r,
              a =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) ||
                void 0 === n ||
                null === (r = n.toLowerCase()) ||
                void 0 === r
                  ? void 0
                  : r.trim();
            if (null != a && "" !== a) {
              if (!["true", "false"].includes(a))
                throw Xe(
                  "process.env."
                    .concat(e, " value must be 'true', 'false', or empty: ")
                    .concat(a)
                );
              t("true" === a);
            }
          })("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", function (e) {
            _t.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = e;
          }),
          (function (e, t) {
            var n,
              r =
                null ===
                  (n = {
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                  }[e]) || void 0 === n
                  ? void 0
                  : n.trim();
            null != r && "" !== r && t(r.split(/\s*,\s*|\s+/));
          })("RECOIL_GKS_ENABLED", function (e) {
            e.forEach(function (e) {
              _t.RECOIL_GKS_ENABLED.add(e);
            });
          }));
      })();
      var kt = _t;
      function Et(e) {
        return kt.RECOIL_GKS_ENABLED.has(e);
      }
      (Et.setPass = function (e) {
        kt.RECOIL_GKS_ENABLED.add(e);
      }),
        (Et.setFail = function (e) {
          kt.RECOIL_GKS_ENABLED.delete(e);
        }),
        (Et.clear = function () {
          kt.RECOIL_GKS_ENABLED.clear();
        });
      var xt = Et;
      var Ct,
        Tt,
        Rt,
        Nt = function (e, t) {
          return (
            (arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {}
            ).error,
            null
          );
        },
        Pt = Nt,
        Lt =
          null !== (Ct = t.createMutableSource) && void 0 !== Ct
            ? Ct
            : t.unstable_createMutableSource,
        Ot =
          null !== (Tt = t.useMutableSource) && void 0 !== Tt
            ? Tt
            : t.unstable_useMutableSource,
        At =
          null !== (Rt = t.useSyncExternalStore) && void 0 !== Rt
            ? Rt
            : t.unstable_useSyncExternalStore,
        Dt = !1;
      var It = {
          createMutableSource: Lt,
          useMutableSource: Ot,
          useSyncExternalStore: At,
          currentRendererSupportsUseSyncExternalStore: function () {
            var e,
              n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
              r = n.ReactCurrentDispatcher,
              a = n.ReactCurrentOwner,
              o =
                null !=
                (null !==
                  (e = null === r || void 0 === r ? void 0 : r.current) &&
                void 0 !== e
                  ? e
                  : a.currentDispatcher
                ).useSyncExternalStore;
            return (
              !At ||
                o ||
                Dt ||
                ((Dt = !0),
                Pt(
                  "A React renderer without React 18+ API support is being used with React 18+."
                )),
              o
            );
          },
          reactMode: function () {
            return xt("recoil_transition_support")
              ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
              : xt("recoil_sync_external_store") && null != At
              ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
              : xt("recoil_mutable_source") &&
                null != Ot &&
                "undefined" !== typeof window &&
                !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
              ? xt("recoil_suppress_rerender_in_callback")
                ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
                : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
              : xt("recoil_suppress_rerender_in_callback")
              ? { mode: "LEGACY", early: !0, concurrent: !1 }
              : { mode: "LEGACY", early: !1, concurrent: !1 };
          },
          isFastRefreshEnabled: function () {
            return !1;
          },
        },
        Mt = (function () {
          function e(t) {
            d(this, e), tt(this, "key", void 0), (this.key = t);
          }
          return (
            m(e, [
              {
                key: "toJSON",
                value: function () {
                  return { key: this.key };
                },
              },
            ]),
            e
          );
        })(),
        zt = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(Mt),
        jt = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(Mt);
      var Ft = {
          AbstractRecoilValue: Mt,
          RecoilState: zt,
          RecoilValueReadOnly: jt,
          isRecoilValue: function (e) {
            return e instanceof zt || e instanceof jt;
          },
        },
        Ut = Ft.AbstractRecoilValue,
        Vt = Ft.RecoilState,
        Bt = Ft.RecoilValueReadOnly,
        Wt = Ft.isRecoilValue,
        Ht = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: Ut,
          RecoilState: Vt,
          RecoilValueReadOnly: Bt,
          isRecoilValue: Wt,
        });
      var $t = function (e) {};
      var Kt = function (e, t) {
          return We().mark(function n() {
            var r, a, o, i;
            return We().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      (r = 0), (a = x(e)), (n.prev = 2), a.s();
                    case 4:
                      if ((o = a.n()).done) {
                        n.next = 10;
                        break;
                      }
                      return (i = o.value), (n.next = 8), t(i, r++);
                    case 8:
                      n.next = 4;
                      break;
                    case 10:
                      n.next = 15;
                      break;
                    case 12:
                      (n.prev = 12), (n.t0 = n.catch(2)), a.e(n.t0);
                    case 15:
                      return (n.prev = 15), a.f(), n.finish(15);
                    case 18:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[2, 12, 15, 18]]
            );
          })();
        },
        Gt = m(function e() {
          d(this, e);
        }),
        qt = new Gt(),
        Qt = new Map(),
        Yt = new Map();
      var Zt = (function (e) {
        g(n, e);
        var t = _(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return m(n);
      })(E(Error));
      var Xt = new Map();
      function Jt(e) {
        return Xt.get(e);
      }
      var en = {
        nodes: Qt,
        recoilValues: Yt,
        registerNode: function (e) {
          kt.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED &&
            (function (e) {
              if (Qt.has(e)) {
                var t = 'Duplicate atom key "'.concat(
                  e,
                  '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
                );
                console.warn(t);
              }
            })(e.key),
            Qt.set(e.key, e);
          var t =
            null == e.set
              ? new Ht.RecoilValueReadOnly(e.key)
              : new Ht.RecoilState(e.key);
          return Yt.set(e.key, t), t;
        },
        getNode: function (e) {
          var t = Qt.get(e);
          if (null == t)
            throw new Zt(
              'Missing definition for RecoilValue: "'.concat(e, '""')
            );
          return t;
        },
        getNodeMaybe: function (e) {
          return Qt.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (xt("recoil_memory_managament_2020")) {
            var n,
              r = Qt.get(e);
            if (
              null !== r &&
              void 0 !== r &&
              null !== (t = r.shouldDeleteConfigOnRelease) &&
              void 0 !== t &&
              t.call(r)
            )
              Qt.delete(e),
                null === (n = Jt(e)) || void 0 === n || n(),
                Xt.delete(e);
          }
        },
        setConfigDeletionHandler: function (e, t) {
          xt("recoil_memory_managament_2020") &&
            (void 0 === t ? Xt.delete(e) : Xt.set(e, t));
        },
        getConfigDeletionHandler: Jt,
        recoilValuesForKeys: function (e) {
          return Kt(e, function (e) {
            return et(Yt.get(e));
          });
        },
        NodeMissingError: Zt,
        DefaultValue: Gt,
        DEFAULT_VALUE: qt,
      };
      var tn = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var nn,
        rn,
        an =
          ((nn = function (e) {
            var t =
                "function" === typeof Symbol &&
                "symbol" === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              n = {},
              r = Math.pow(2, 5),
              a = r - 1,
              o = r / 2,
              i = r / 4,
              l = {},
              u = function (e) {
                return function () {
                  return e;
                };
              },
              s = (n.hash = function (e) {
                var n = "undefined" === typeof e ? "undefined" : t(e);
                if ("number" === n) return e;
                "string" !== n && (e += "");
                for (var r = 0, a = 0, o = e.length; a < o; ++a)
                  r = ((r << 5) - r + e.charCodeAt(a)) | 0;
                return r;
              }),
              c = function (e, t) {
                return (t >>> e) & a;
              },
              f = function (e) {
                return 1 << e;
              },
              d = function (e, t) {
                return (function (e) {
                  return (
                    (e =
                      ((e =
                        (858993459 & (e -= (e >> 1) & 1431655765)) +
                        ((e >> 2) & 858993459)) +
                        (e >> 4)) &
                      252645135),
                    127 & ((e += e >> 8) + (e >> 16))
                  );
                })(e & (t - 1));
              },
              p = function (e, t, n, r) {
                var a = r;
                if (!e) {
                  var o = r.length;
                  a = new Array(o);
                  for (var i = 0; i < o; ++i) a[i] = r[i];
                }
                return (a[t] = n), a;
              },
              h = function (e, t, n) {
                var r = n.length - 1,
                  a = 0,
                  o = 0,
                  i = n;
                if (e) a = o = t;
                else for (i = new Array(r); a < t; ) i[o++] = n[a++];
                for (++a; a <= r; ) i[o++] = n[a++];
                return e && (i.length = r), i;
              },
              v = { __hamt_isEmpty: !0 },
              m = function (e) {
                return e === v || (e && e.__hamt_isEmpty);
              },
              y = function (e, t, n, r) {
                return {
                  type: 1,
                  edit: e,
                  hash: t,
                  key: n,
                  value: r,
                  _modify: k,
                };
              },
              g = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: E };
              },
              b = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: x };
              },
              S = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: C };
              },
              w = function e(t, n, r, a, o, i) {
                if (r === o) return g(t, r, [i, a]);
                var l = c(n, r),
                  u = c(n, o);
                return b(
                  t,
                  f(l) | f(u),
                  l === u ? [e(t, n + 5, r, a, o, i)] : l < u ? [a, i] : [i, a]
                );
              },
              _ = function (e, t) {
                return e === t.edit;
              },
              k = function (e, t, n, r, a, o, i) {
                if (t(o, this.key)) {
                  var u = r(this.value);
                  return u === this.value
                    ? this
                    : u === l
                    ? (--i.value, v)
                    : _(e, this)
                    ? ((this.value = u), this)
                    : y(e, a, o, u);
                }
                var s = r();
                return s === l
                  ? this
                  : (++i.value, w(e, n, this.hash, this, a, y(e, a, o, s)));
              },
              E = function (e, t, n, r, a, o, i) {
                if (a === this.hash) {
                  var u = (function (e, t, n, r, a, o, i, u) {
                    for (var s = a.length, c = 0; c < s; ++c) {
                      var f = a[c];
                      if (n(i, f.key)) {
                        var d = f.value,
                          v = o(d);
                        return v === d
                          ? a
                          : v === l
                          ? (--u.value, h(e, c, a))
                          : p(e, c, y(t, r, i, v), a);
                      }
                    }
                    var m = o();
                    return m === l ? a : (++u.value, p(e, s, y(t, r, i, m), a));
                  })(_(e, this), e, t, this.hash, this.children, r, o, i);
                  return u === this.children
                    ? this
                    : u.length > 1
                    ? g(e, this.hash, u)
                    : u[0];
                }
                var s = r();
                return s === l
                  ? this
                  : (++i.value, w(e, n, this.hash, this, a, y(e, a, o, s)));
              },
              x = function (e, t, n, r, a, i, l) {
                var u = this.mask,
                  s = this.children,
                  y = c(n, a),
                  g = f(y),
                  w = d(u, g),
                  k = u & g,
                  E = k ? s[w] : v,
                  x = E._modify(e, t, n + 5, r, a, i, l);
                if (E === x) return this;
                var C = _(e, this),
                  T = u,
                  R = void 0;
                if (k && m(x)) {
                  if (!(T &= ~g)) return v;
                  if (
                    s.length <= 2 &&
                    (function (e) {
                      return e === v || 1 === e.type || 2 === e.type;
                    })(s[1 ^ w])
                  )
                    return s[1 ^ w];
                  R = h(C, w, s);
                } else if (k || m(x)) R = p(C, w, x, s);
                else {
                  if (s.length >= o)
                    return (function (e, t, n, r, a) {
                      for (var o = [], i = r, l = 0, u = 0; i; ++u)
                        1 & i && (o[u] = a[l++]), (i >>>= 1);
                      return (o[t] = n), S(e, l + 1, o);
                    })(e, y, x, u, s);
                  (T |= g),
                    (R = (function (e, t, n, r) {
                      var a = r.length;
                      if (e) {
                        for (var o = a; o >= t; ) r[o--] = r[o];
                        return (r[t] = n), r;
                      }
                      for (var i = 0, l = 0, u = new Array(a + 1); i < t; )
                        u[l++] = r[i++];
                      for (u[t] = n; i < a; ) u[++l] = r[i++];
                      return u;
                    })(C, w, x, s));
                }
                return C
                  ? ((this.mask = T), (this.children = R), this)
                  : b(e, T, R);
              },
              C = function (e, t, n, r, a, o, l) {
                var u = this.size,
                  s = this.children,
                  f = c(n, a),
                  d = s[f],
                  h = (d || v)._modify(e, t, n + 5, r, a, o, l);
                if (d === h) return this;
                var y = _(e, this),
                  g = void 0;
                if (m(d) && !m(h)) ++u, (g = p(y, f, h, s));
                else if (!m(d) && m(h)) {
                  if (--u <= i)
                    return (function (e, t, n, r) {
                      for (
                        var a = new Array(t - 1),
                          o = 0,
                          i = 0,
                          l = 0,
                          u = r.length;
                        l < u;
                        ++l
                      )
                        if (l !== n) {
                          var s = r[l];
                          s && !m(s) && ((a[o++] = s), (i |= 1 << l));
                        }
                      return b(e, i, a);
                    })(e, u, f, s);
                  g = p(y, f, v, s);
                } else g = p(y, f, h, s);
                return y
                  ? ((this.size = u), (this.children = g), this)
                  : S(e, u, g);
              };
            function T(e, t, n, r, a) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = a);
            }
            (v._modify = function (e, t, n, r, a, o, i) {
              var u = r();
              return u === l ? v : (++i.value, y(e, a, o, u));
            }),
              (T.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                  ? this
                  : new T(this._editable, this._edit, this._config, e, t);
              });
            var R = (n.tryGetHash = function (e, t, n, r) {
              for (var a = r._root, o = 0, i = r._config.keyEq; ; )
                switch (a.type) {
                  case 1:
                    return i(n, a.key) ? a.value : e;
                  case 2:
                    if (t === a.hash)
                      for (
                        var l = a.children, u = 0, s = l.length;
                        u < s;
                        ++u
                      ) {
                        var p = l[u];
                        if (i(n, p.key)) return p.value;
                      }
                    return e;
                  case 3:
                    var h = c(o, t),
                      v = f(h);
                    if (a.mask & v) {
                      (a = a.children[d(a.mask, v)]), (o += 5);
                      break;
                    }
                    return e;
                  case 4:
                    if ((a = a.children[c(o, t)])) {
                      o += 5;
                      break;
                    }
                    return e;
                  default:
                    return e;
                }
            });
            T.prototype.tryGetHash = function (e, t, n) {
              return R(e, t, n, this);
            };
            var N = (n.tryGet = function (e, t, n) {
              return R(e, n._config.hash(t), t, n);
            });
            T.prototype.tryGet = function (e, t) {
              return N(e, t, this);
            };
            var P = (n.getHash = function (e, t, n) {
              return R(void 0, e, t, n);
            });
            (T.prototype.getHash = function (e, t) {
              return P(e, t, this);
            }),
              (n.get = function (e, t) {
                return R(void 0, t._config.hash(e), e, t);
              }),
              (T.prototype.get = function (e, t) {
                return N(t, e, this);
              });
            var L = (n.has = function (e, t, n) {
              return R(l, e, t, n) !== l;
            });
            T.prototype.hasHash = function (e, t) {
              return L(e, t, this);
            };
            var O = (n.has = function (e, t) {
              return L(t._config.hash(e), e, t);
            });
            T.prototype.has = function (e) {
              return O(e, this);
            };
            var A = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new T(
                0,
                0,
                { keyEq: (e && e.keyEq) || A, hash: (e && e.hash) || s },
                v,
                0
              );
            }),
              (n.empty = n.make());
            var D = (n.isEmpty = function (e) {
              return e && !!m(e._root);
            });
            T.prototype.isEmpty = function () {
              return D(this);
            };
            var I = (n.modifyHash = function (e, t, n, r) {
              var a = { value: r._size },
                o = r._root._modify(
                  r._editable ? r._edit : NaN,
                  r._config.keyEq,
                  0,
                  e,
                  t,
                  n,
                  a
                );
              return r.setTree(o, a.value);
            });
            T.prototype.modifyHash = function (e, t, n) {
              return I(n, e, t, this);
            };
            var M = (n.modify = function (e, t, n) {
              return I(e, n._config.hash(t), t, n);
            });
            T.prototype.modify = function (e, t) {
              return M(t, e, this);
            };
            var z = (n.setHash = function (e, t, n, r) {
              return I(u(n), e, t, r);
            });
            T.prototype.setHash = function (e, t, n) {
              return z(e, t, n, this);
            };
            var j = (n.set = function (e, t, n) {
              return z(n._config.hash(e), e, t, n);
            });
            T.prototype.set = function (e, t) {
              return j(e, t, this);
            };
            var F = u(l),
              U = (n.removeHash = function (e, t, n) {
                return I(F, e, t, n);
              });
            T.prototype.removeHash = T.prototype.deleteHash = function (e, t) {
              return U(e, t, this);
            };
            var V = (n.remove = function (e, t) {
              return U(t._config.hash(e), e, t);
            });
            T.prototype.remove = T.prototype.delete = function (e) {
              return V(e, this);
            };
            var B = (n.beginMutation = function (e) {
              return new T(
                e._editable + 1,
                e._edit + 1,
                e._config,
                e._root,
                e._size
              );
            });
            T.prototype.beginMutation = function () {
              return B(this);
            };
            var W = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            T.prototype.endMutation = function () {
              return W(this);
            };
            var H = (n.mutate = function (e, t) {
              var n = B(t);
              return e(n), W(n);
            });
            T.prototype.mutate = function (e) {
              return H(e, this);
            };
            var $ = function (e) {
                return e && K(e[0], e[1], e[2], e[3], e[4]);
              },
              K = function (e, t, n, r, a) {
                for (; n < e; ) {
                  var o = t[n++];
                  if (o && !m(o)) return G(o, r, [e, t, n, r, a]);
                }
                return $(a);
              },
              G = function (e, t, n) {
                switch (e.type) {
                  case 1:
                    return { value: t(e), rest: n };
                  case 2:
                  case 4:
                  case 3:
                    var r = e.children;
                    return K(r.length, r, 0, t, n);
                  default:
                    return $(n);
                }
              },
              q = { done: !0 };
            function Q(e) {
              this.v = e;
            }
            (Q.prototype.next = function () {
              if (!this.v) return q;
              var e = this.v;
              return (this.v = $(e.rest)), e;
            }),
              (Q.prototype[Symbol.iterator] = function () {
                return this;
              });
            var Y = function (e, t) {
                return new Q(G(e._root, t));
              },
              Z = function (e) {
                return [e.key, e.value];
              },
              X = (n.entries = function (e) {
                return Y(e, Z);
              });
            T.prototype.entries = T.prototype[Symbol.iterator] = function () {
              return X(this);
            };
            var J = function (e) {
                return e.key;
              },
              ee = (n.keys = function (e) {
                return Y(e, J);
              });
            T.prototype.keys = function () {
              return ee(this);
            };
            var te = function (e) {
                return e.value;
              },
              ne =
                (n.values =
                T.prototype.values =
                  function (e) {
                    return Y(e, te);
                  });
            T.prototype.values = function () {
              return ne(this);
            };
            var re = (n.fold = function (e, t, n) {
              var r = n._root;
              if (1 === r.type) return e(t, r.value, r.key);
              for (var a = [r.children], o = void 0; (o = a.pop()); )
                for (var i = 0, l = o.length; i < l; ) {
                  var u = o[i++];
                  u &&
                    u.type &&
                    (1 === u.type
                      ? (t = e(t, u.value, u.key))
                      : a.push(u.children));
                }
              return t;
            });
            T.prototype.fold = function (e, t) {
              return re(e, t, this);
            };
            var ae = (n.forEach = function (e, t) {
              return re(
                function (n, r, a) {
                  return e(r, a, t);
                },
                null,
                t
              );
            });
            T.prototype.forEach = function (e) {
              return ae(e, this);
            };
            var oe = (n.count = function (e) {
              return e._size;
            });
            (T.prototype.count = function () {
              return oe(this);
            }),
              Object.defineProperty(T.prototype, "size", {
                get: T.prototype.count,
              }),
              e.exports ? (e.exports = n) : ((void 0).hamt = n);
          }),
          nn((rn = { exports: {} }), rn.exports),
          rn.exports),
        on = (function () {
          function e(t) {
            d(this, e),
              tt(this, "_map", void 0),
              (this._map = new Map(
                null === t || void 0 === t ? void 0 : t.entries()
              ));
          }
          return (
            m(e, [
              {
                key: "keys",
                value: function () {
                  return this._map.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._map.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._map.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._map.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return un(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._map);
                },
              },
            ]),
            e
          );
        })(),
        ln = (function () {
          function e(t) {
            if (
              (d(this, e),
              tt(this, "_hamt", an.empty.beginMutation()),
              t instanceof e)
            ) {
              var n = t._hamt.endMutation();
              (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
            } else if (t) {
              var r,
                a = x(t.entries());
              try {
                for (a.s(); !(r = a.n()).done; ) {
                  var o = s(r.value, 2),
                    i = o[0],
                    l = o[1];
                  this._hamt.set(i, l);
                }
              } catch (u) {
                a.e(u);
              } finally {
                a.f();
              }
            }
          }
          return (
            m(e, [
              {
                key: "keys",
                value: function () {
                  return this._hamt.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._hamt.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._hamt.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._hamt.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._hamt.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._hamt.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return un(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._hamt);
                },
              },
            ]),
            e
          );
        })();
      function un(e) {
        return xt("recoil_hamt_2020") ? new ln(e) : new on(e);
      }
      var sn = un;
      var cn = function (e) {
        for (
          var t = new Set(),
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a];
        var o,
          i = x(e);
        try {
          e: for (i.s(); !(o = i.n()).done; ) {
            var l,
              u = o.value,
              s = x(r);
            try {
              for (s.s(); !(l = s.n()).done; ) {
                if (l.value.has(u)) continue e;
              }
            } catch (c) {
              s.e(c);
            } finally {
              s.f();
            }
            t.add(u);
          }
        } catch (c) {
          i.e(c);
        } finally {
          i.f();
        }
        return t;
      };
      var fn = function (e, t) {
        var n = new Map();
        return (
          e.forEach(function (e, r) {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function dn(e, t, n, r) {
        var a = n.nodeDeps,
          o = n.nodeToNodeSubscriptions,
          i = a.get(e);
        if (!i || !r || i === r.nodeDeps.get(e)) {
          a.set(e, t);
          var l,
            u = x(null == i ? t : cn(t, i));
          try {
            for (u.s(); !(l = u.n()).done; ) {
              var s = l.value;
              o.has(s) || o.set(s, new Set()), et(o.get(s)).add(e);
            }
          } catch (h) {
            u.e(h);
          } finally {
            u.f();
          }
          if (i) {
            var c,
              f = x(cn(i, t));
            try {
              for (f.s(); !(c = f.n()).done; ) {
                var d = c.value;
                if (!o.has(d)) return;
                var p = et(o.get(d));
                p.delete(e), 0 === p.size && o.delete(d);
              }
            } catch (h) {
              f.e(h);
            } finally {
              f.f();
            }
          }
        }
      }
      var pn = function (e) {
          return {
            nodeDeps: fn(e.nodeDeps, function (e) {
              return new Set(e);
            }),
            nodeToNodeSubscriptions: fn(
              e.nodeToNodeSubscriptions,
              function (e) {
                return new Set(e);
              }
            ),
          };
        },
        hn = function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        vn = function (e, t, n, r) {
          var a,
            o,
            i,
            l,
            u = n.getState();
          r !== u.currentTree.version &&
            r !==
              (null === (a = u.nextTree) || void 0 === a
                ? void 0
                : a.version) &&
            r !==
              (null === (o = u.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            Pt("Tried to save dependencies to a discarded tree");
          var s = n.getGraph(r);
          if (
            (dn(e, t, s),
            r ===
              (null === (i = u.previousTree) || void 0 === i
                ? void 0
                : i.version) && dn(e, t, n.getGraph(u.currentTree.version), s),
            r ===
              (null === (l = u.previousTree) || void 0 === l
                ? void 0
                : l.version) || r === u.currentTree.version)
          ) {
            var c,
              f =
                null === (c = u.nextTree) || void 0 === c ? void 0 : c.version;
            if (void 0 !== f) dn(e, t, n.getGraph(f), s);
          }
        },
        mn = 0,
        yn = 0,
        gn = 0,
        bn = function () {
          return mn++;
        },
        Sn = function () {
          return yn++;
        },
        wn = function () {
          return gn++;
        },
        _n = Object.freeze({
          __proto__: null,
          persistentMap: sn,
        }).persistentMap,
        kn = hn,
        En = bn;
      function xn() {
        var e = En();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: _n(),
          nonvalidatedAtoms: _n(),
        };
      }
      var Cn = {
          makeEmptyTreeState: xn,
          makeEmptyStoreState: function () {
            var e = xn();
            return {
              currentTree: e,
              nextTree: null,
              previousTree: null,
              commitDepth: 0,
              knownAtoms: new Set(),
              knownSelectors: new Set(),
              transactionSubscriptions: new Map(),
              nodeTransactionSubscriptions: new Map(),
              nodeToComponentSubscriptions: new Map(),
              queuedComponentCallbacks_DEPRECATED: [],
              suspendedComponentResolvers: new Set(),
              graphsByVersion: new Map().set(e.version, kn()),
              retention: {
                referenceCounts: new Map(),
                nodesRetainedByZone: new Map(),
                retainablesToCheckForRelease: new Set(),
              },
              nodeCleanupFunctions: new Map(),
            };
          },
          getNextTreeStateVersion: En,
        },
        Tn = m(function e() {
          d(this, e);
        });
      var Rn = {
        RetentionZone: Tn,
        retentionZone: function () {
          return new Tn();
        },
      };
      var Nn = function (e, t) {
        var n = new Set(e);
        return n.add(t), n;
      };
      function Pn(e, t) {
        var n, r, a, o;
        return We().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (n = 0), (r = x(e)), (i.prev = 2), r.s();
                case 4:
                  if ((a = r.n()).done) {
                    i.next = 11;
                    break;
                  }
                  if (((o = a.value), !t(o, n++))) {
                    i.next = 9;
                    break;
                  }
                  return (i.next = 9), o;
                case 9:
                  i.next = 4;
                  break;
                case 11:
                  i.next = 16;
                  break;
                case 13:
                  (i.prev = 13), (i.t0 = i.catch(2)), r.e(i.t0);
                case 16:
                  return (i.prev = 16), r.f(), i.finish(16);
                case 19:
                case "end":
                  return i.stop();
              }
          },
          Ye,
          null,
          [[2, 13, 16, 19]]
        );
      }
      var Ln = Pn;
      var On = function (e, t) {
          return new Proxy(e, {
            get: function (e, n) {
              return !(n in e) && n in t && (e[n] = t[n]()), e[n];
            },
            ownKeys: function (e) {
              return Object.keys(e);
            },
          });
        },
        An = en.getNode,
        Dn = en.getNodeMaybe,
        In = en.recoilValuesForKeys,
        Mn = Rn.RetentionZone,
        zn = Nn,
        jn = Object.freeze(new Set()),
        Fn = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error));
      function Un(e, t, n, r) {
        var a = e.getState();
        if (!a.nodeCleanupFunctions.has(n)) {
          var o = An(n),
            i = (function (e, t, n) {
              if (!xt("recoil_memory_managament_2020")) return function () {};
              var r = e.getState().retention.nodesRetainedByZone;
              function a(e) {
                var n = r.get(e);
                n || r.set(e, (n = new Set())), n.add(t);
              }
              if (n instanceof Mn) a(n);
              else if (Array.isArray(n)) {
                var o,
                  i = x(n);
                try {
                  for (i.s(); !(o = i.n()).done; ) a(o.value);
                } catch (l) {
                  i.e(l);
                } finally {
                  i.f();
                }
              }
              return function () {
                if (xt("recoil_memory_managament_2020")) {
                  var r = e.getState().retention;
                  if (n instanceof Mn) i(n);
                  else if (Array.isArray(n)) {
                    var a,
                      o = x(n);
                    try {
                      for (o.s(); !(a = o.n()).done; ) i(a.value);
                    } catch (l) {
                      o.e(l);
                    } finally {
                      o.f();
                    }
                  }
                }
                function i(e) {
                  var n = r.nodesRetainedByZone.get(e);
                  null === n || void 0 === n || n.delete(t),
                    n && 0 === n.size && r.nodesRetainedByZone.delete(e);
                }
              };
            })(e, n, o.retainedBy),
            l = o.init(e, t, r);
          a.nodeCleanupFunctions.set(n, function () {
            l(), i();
          });
        }
      }
      function Vn(e, t, n) {
        return An(n).peek(e, t);
      }
      function Bn(e, t, n) {
        for (
          var r = new Set(),
            a = Array.from(n),
            o = e.getGraph(t.version),
            i = a.pop();
          i;
          i = a.pop()
        ) {
          var l;
          r.add(i);
          var u,
            s = x(
              null !== (l = o.nodeToNodeSubscriptions.get(i)) && void 0 !== l
                ? l
                : jn
            );
          try {
            for (s.s(); !(u = s.n()).done; ) {
              var c = u.value;
              r.has(c) || a.push(c);
            }
          } catch (f) {
            s.e(f);
          } finally {
            s.f();
          }
        }
        return r;
      }
      var Wn = function (e, t, n) {
          return Un(e, t, n, "get"), An(n).get(e, t);
        },
        Hn = Vn,
        $n = function (e, t, n, r) {
          var a = An(n);
          if (null == a.set)
            throw new Fn("Attempt to set read-only RecoilValue: ".concat(n));
          var o = a.set;
          return Un(e, t, n, "set"), o(e, t, r);
        },
        Kn = function (e, t, n) {
          Un(e, e.getState().currentTree, t, n);
        },
        Gn = function (e, t) {
          var n,
            r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        qn = function (e, t, n) {
          var r,
            a = Dn(t);
          return (
            null === a ||
              void 0 === a ||
              null === (r = a.invalidate) ||
              void 0 === r ||
              r.call(a, e),
            Ke(
              Ke({}, e),
              {},
              {
                atomValues: e.atomValues.clone().delete(t),
                nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                dirtyAtoms: zn(e.dirtyAtoms, t),
              }
            )
          );
        },
        Qn = function (e, t, n) {
          var r = e.getState(),
            a = e.getGraph(t.version),
            o = An(n).nodeType;
          return On(
            { type: o },
            {
              loadable: function () {
                return Vn(e, t, n);
              },
              isActive: function () {
                return r.knownAtoms.has(n) || r.knownSelectors.has(n);
              },
              isSet: function () {
                return "selector" !== o && t.atomValues.has(n);
              },
              isModified: function () {
                return t.dirtyAtoms.has(n);
              },
              deps: function () {
                var e;
                return In(
                  null !== (e = a.nodeDeps.get(n)) && void 0 !== e ? e : []
                );
              },
              subscribers: function () {
                var a, o;
                return {
                  nodes: In(
                    Ln(Bn(e, t, new Set([n])), function (e) {
                      return e !== n;
                    })
                  ),
                  components: Kt(
                    null !==
                      (a =
                        null === (o = r.nodeToComponentSubscriptions.get(n)) ||
                        void 0 === o
                          ? void 0
                          : o.values()) && void 0 !== a
                      ? a
                      : [],
                    function (e) {
                      return { name: s(e, 1)[0] };
                    }
                  ),
                };
              },
            }
          );
        },
        Yn = Bn,
        Zn = null;
      var Xn = function (e) {
          Zn = e;
        },
        Jn = function () {
          var e;
          null === (e = Zn) || void 0 === e || e();
        },
        er = Yn,
        tr = Wn,
        nr = $n,
        rr = wn,
        ar = en.getNode,
        or = en.getNodeMaybe,
        ir = en.DefaultValue,
        lr = It.reactMode,
        ur = Ht.AbstractRecoilValue,
        sr = Ht.RecoilState,
        cr = Ht.RecoilValueReadOnly,
        fr = Ht.isRecoilValue,
        dr = Jn;
      function pr(e, t, n) {
        if ("set" === n.type) {
          var r,
            a = n.recoilValue,
            o = (function (e, t, n, r) {
              var a = n.key;
              if ("function" === typeof r) {
                var o = tr(e, t, a);
                if ("loading" === o.state) {
                  var i = 'Tried to set atom or selector "'.concat(
                    a,
                    '" using an updater function while the current state is pending, this is not currently supported.'
                  );
                  throw (Pt(i), Xe(i));
                }
                if ("hasError" === o.state) throw o.contents;
                return r(o.contents);
              }
              return r;
            })(e, t, a, n.valueOrUpdater),
            i = x(nr(e, t, a.key, o).entries());
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var l = s(r.value, 2);
              hr(t, l[0], l[1]);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
        } else if ("setLoadable" === n.type) {
          hr(t, n.recoilValue.key, n.loadable);
        } else if ("markModified" === n.type) {
          var u = n.recoilValue.key;
          t.dirtyAtoms.add(u);
        } else if ("setUnvalidated" === n.type) {
          var c,
            f = n.recoilValue.key,
            d = n.unvalidatedValue,
            p = or(f);
          null === p ||
            void 0 === p ||
            null === (c = p.invalidate) ||
            void 0 === c ||
            c.call(p, t),
            t.atomValues.delete(f),
            t.nonvalidatedAtoms.set(f, d),
            t.dirtyAtoms.add(f);
        } else Pt("Unknown action ".concat(n.type));
      }
      function hr(e, t, n) {
        "hasValue" === n.state && n.contents instanceof ir
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function vr(e, t) {
        e.replaceState(function (n) {
          var r,
            a = gr(n),
            o = x(t);
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var i = r.value;
              pr(e, a, i);
            }
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
          return br(e, a), dr(), a;
        });
      }
      function mr(e, t) {
        if (yr.length) {
          var n = yr[yr.length - 1],
            r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else vr(e, [t]);
      }
      var yr = [];
      function gr(e) {
        return Ke(
          Ke({}, e),
          {},
          {
            atomValues: e.atomValues.clone(),
            nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
            dirtyAtoms: new Set(e.dirtyAtoms),
          }
        );
      }
      function br(e, t) {
        var n,
          r = x(er(e, t, t.dirtyAtoms));
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var a,
              o,
              i = n.value;
            null === (a = or(i)) ||
              void 0 === a ||
              null === (o = a.invalidate) ||
              void 0 === o ||
              o.call(a, t);
          }
        } catch (l) {
          r.e(l);
        } finally {
          r.f();
        }
      }
      function Sr(e, t, n) {
        mr(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      var wr = {
        RecoilValueReadOnly: cr,
        AbstractRecoilValue: ur,
        RecoilState: sr,
        getRecoilValueAsLoadable: function (e, t) {
          var n,
            r,
            a = t.key,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree,
            i = e.getState();
          o.version !== i.currentTree.version &&
            o.version !==
              (null === (n = i.nextTree) || void 0 === n
                ? void 0
                : n.version) &&
            o.version !==
              (null === (r = i.previousTree) || void 0 === r
                ? void 0
                : r.version) &&
            Pt("Tried to read from a discarded tree");
          var l = tr(e, o, a);
          return "loading" === l.state && l.contents.catch(function () {}), l;
        },
        setRecoilValue: Sr,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof ir) return Sr(e, t, n);
          mr(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          mr(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          mr(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, t, n) {
          var r = t.key,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            o = rr(),
            i = e.getState();
          i.nodeToComponentSubscriptions.has(r) ||
            i.nodeToComponentSubscriptions.set(r, new Map()),
            et(i.nodeToComponentSubscriptions.get(r)).set(o, [
              null !== a && void 0 !== a ? a : "<not captured>",
              n,
            ]);
          var l = lr();
          if (l.early && ("LEGACY" === l.mode || "MUTABLE_SOURCE" === l.mode)) {
            var u = e.getState().nextTree;
            u && u.dirtyAtoms.has(r) && n(u);
          }
          return {
            release: function () {
              var t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(o)
                ? (n.delete(o),
                  0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : Pt(
                    "Subscription missing at release time for atom ".concat(
                      r,
                      ". This is a bug in Recoil."
                    )
                  );
            },
          };
        },
        isRecoilValue: fr,
        applyAtomValueWrites: function (e, t) {
          var n = e.clone();
          return (
            t.forEach(function (e, t) {
              "hasValue" === e.state && e.contents instanceof ir
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          var e = new Map();
          return (
            yr.push(e),
            function () {
              var t,
                n = x(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = s(t.value, 2);
                  vr(r[0], r[1]);
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              yr.pop() !== e && Pt("Incorrect order of batch popping");
            }
          );
        },
        writeLoadableToTreeState: hr,
        invalidateDownstreams: br,
        copyTreeState: gr,
        refreshRecoilValue: function (e, t) {
          var n,
            r = e.getState().currentTree,
            a = ar(t.key);
          null === (n = a.clearCache) || void 0 === n || n.call(a, e, r);
        },
      };
      var _r = function (e, t, n) {
          for (var r = e.entries(), a = r.next(); !a.done; ) {
            var o = a.value;
            if (t.call(n, o[1], o[0], e)) return !0;
            a = r.next();
          }
          return !1;
        },
        kr = Gn,
        Er = en.deleteNodeConfigIfPossible,
        xr = en.getNode,
        Cr = Rn.RetentionZone,
        Tr = new Set();
      function Rr(e, t) {
        var n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          Pt(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        else {
          var a,
            o = new Set(),
            i = x(t);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var l = a.value;
              if (l instanceof Cr) {
                var u,
                  s = x(Pr(n, l));
                try {
                  for (s.s(); !(u = s.n()).done; ) {
                    var c = u.value;
                    o.add(c);
                  }
                } catch (h) {
                  s.e(h);
                } finally {
                  s.f();
                }
              } else o.add(l);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
          var f,
            d = (function (e, t) {
              var n = e.getState(),
                r = n.currentTree,
                a = e.getGraph(r.version),
                o = new Set(),
                i = new Set();
              return l(t), o;
              function l(t) {
                var u,
                  s = new Set(),
                  c = (function (e, t, n, r, a) {
                    var o = e.getGraph(t.version),
                      i = [],
                      l = new Set();
                    for (; n.size > 0; ) u(et(n.values().next().value));
                    return i;
                    function u(e) {
                      if (r.has(e) || a.has(e)) n.delete(e);
                      else if (!l.has(e)) {
                        var t = o.nodeToNodeSubscriptions.get(e);
                        if (t) {
                          var s,
                            c = x(t);
                          try {
                            for (c.s(); !(s = c.n()).done; ) {
                              u(s.value);
                            }
                          } catch (h) {
                            c.e(h);
                          } finally {
                            c.f();
                          }
                        }
                        l.add(e), n.delete(e), i.push(e);
                      }
                    }
                  })(e, r, t, o, i),
                  f = x(c);
                try {
                  for (f.s(); !(u = f.n()).done; ) {
                    var d,
                      p = u.value;
                    if ("recoilRoot" !== xr(p).retainedBy)
                      if (
                        (null !== (d = n.retention.referenceCounts.get(p)) &&
                        void 0 !== d
                          ? d
                          : 0) > 0
                      )
                        i.add(p);
                      else if (
                        Lr(p).some(function (e) {
                          return n.retention.referenceCounts.get(e);
                        })
                      )
                        i.add(p);
                      else {
                        var v = a.nodeToNodeSubscriptions.get(p);
                        v &&
                        _r(v, function (e) {
                          return i.has(e);
                        })
                          ? i.add(p)
                          : (o.add(p), s.add(p));
                      }
                    else i.add(p);
                  }
                } catch (h) {
                  f.e(h);
                } finally {
                  f.f();
                }
                var m,
                  y = new Set(),
                  g = x(s);
                try {
                  for (g.s(); !(m = g.n()).done; ) {
                    var b,
                      S = m.value,
                      w = x(
                        null !== (_ = a.nodeDeps.get(S)) && void 0 !== _
                          ? _
                          : Tr
                      );
                    try {
                      for (w.s(); !(b = w.n()).done; ) {
                        var _,
                          k = b.value;
                        o.has(k) || y.add(k);
                      }
                    } catch (h) {
                      w.e(h);
                    } finally {
                      w.f();
                    }
                  }
                } catch (h) {
                  g.e(h);
                } finally {
                  g.f();
                }
                y.size && l(y);
              }
            })(e, o),
            p = x(d);
          try {
            for (p.s(); !(f = p.n()).done; ) {
              Nr(e, r, f.value);
            }
          } catch (h) {
            p.e(h);
          } finally {
            p.f();
          }
        }
      }
      function Nr(e, t, n) {
        if (xt("recoil_memory_managament_2020")) {
          kr(e, n);
          var r = e.getState();
          r.knownAtoms.delete(n),
            r.knownSelectors.delete(n),
            r.nodeTransactionSubscriptions.delete(n),
            r.retention.referenceCounts.delete(n);
          var a,
            o = x(Lr(n));
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i,
                l = a.value;
              null === (i = r.retention.nodesRetainedByZone.get(l)) ||
                void 0 === i ||
                i.delete(n);
            }
          } catch (h) {
            o.e(h);
          } finally {
            o.f();
          }
          t.atomValues.delete(n),
            t.dirtyAtoms.delete(n),
            t.nonvalidatedAtoms.delete(n);
          var u = r.graphsByVersion.get(t.version);
          if (u) {
            var s = u.nodeDeps.get(n);
            if (void 0 !== s) {
              u.nodeDeps.delete(n);
              var c,
                f = x(s);
              try {
                for (f.s(); !(c = f.n()).done; ) {
                  var d,
                    p = c.value;
                  null === (d = u.nodeToNodeSubscriptions.get(p)) ||
                    void 0 === d ||
                    d.delete(n);
                }
              } catch (h) {
                f.e(h);
              } finally {
                f.f();
              }
            }
            u.nodeToNodeSubscriptions.delete(n);
          }
          Er(n);
        }
      }
      function Pr(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : Tr;
      }
      function Lr(e) {
        var t = xr(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof Cr
          ? [t]
          : t;
      }
      function Or(e, t) {
        xt("recoil_memory_managament_2020") &&
          (e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            var n = e.getState();
            n.nextTree
              ? n.retention.retainablesToCheckForRelease.add(t)
              : Rr(e, new Set([t]));
          })(e, t));
      }
      var Ar = 12e4,
        Dr = function (e, t, n) {
          var r;
          if (xt("recoil_memory_managament_2020")) {
            var a = e.getState().retention.referenceCounts,
              o = (null !== (r = a.get(t)) && void 0 !== r ? r : 0) + n;
            0 === o ? Or(e, t) : a.set(t, o);
          }
        },
        Ir = function (e) {
          if (xt("recoil_memory_managament_2020")) {
            var t = e.getState();
            Rr(e, t.retention.retainablesToCheckForRelease),
              t.retention.retainablesToCheckForRelease.clear();
          }
        },
        Mr = function (e) {
          return void 0 === e ? "recoilRoot" : e;
        },
        zr = Ge.unstable_batchedUpdates,
        jr = wr.batchStart,
        Fr =
          {
            unstable_batchedUpdates: { unstable_batchedUpdates: zr }
              .unstable_batchedUpdates,
          }.unstable_batchedUpdates ||
          function (e) {
            return e();
          },
        Ur = function (e) {
          Fr(function () {
            var t = function () {};
            try {
              (t = jr()), e();
            } finally {
              t();
            }
          });
        };
      function Vr(e) {
        var t, n, r, a, o, i;
        return We().wrap(
          function (l) {
            for (;;)
              switch ((l.prev = l.next)) {
                case 0:
                  (t = x(e)), (l.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    l.next = 24;
                    break;
                  }
                  (r = n.value), (a = x(r)), (l.prev = 6), a.s();
                case 8:
                  if ((o = a.n()).done) {
                    l.next = 14;
                    break;
                  }
                  return (i = o.value), (l.next = 12), i;
                case 12:
                  l.next = 8;
                  break;
                case 14:
                  l.next = 19;
                  break;
                case 16:
                  (l.prev = 16), (l.t0 = l.catch(6)), a.e(l.t0);
                case 19:
                  return (l.prev = 19), a.f(), l.finish(19);
                case 22:
                  l.next = 3;
                  break;
                case 24:
                  l.next = 29;
                  break;
                case 26:
                  (l.prev = 26), (l.t1 = l.catch(1)), t.e(l.t1);
                case 29:
                  return (l.prev = 29), t.f(), l.finish(29);
                case 32:
                case "end":
                  return l.stop();
              }
          },
          Ze,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ]
        );
      }
      var Br = Vr,
        Wr = "undefined" === typeof Window || "undefined" === typeof window,
        Hr =
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product,
        $r = {
          isSSR: Wr,
          isReactNative: Hr,
          isWindow: function (e) {
            return !Wr && (e === window || e instanceof Window);
          },
        };
      var Kr = function (e, t) {
          var n, r;
          return [
            function () {
              var a = t.apply(void 0, arguments);
              return n === a ? r : ((n = a), (r = e.apply(void 0, arguments)));
            },
            function () {
              n = null;
            },
          ];
        },
        Gr = Ur,
        qr = Kn,
        Qr = Qn,
        Yr = hn,
        Zr = Sn,
        Xr = en.DEFAULT_VALUE,
        Jr = en.recoilValues,
        ea = en.recoilValuesForKeys,
        ta = wr.AbstractRecoilValue,
        na = wr.getRecoilValueAsLoadable,
        ra = wr.setRecoilValue,
        aa = wr.setUnvalidatedRecoilValue,
        oa = Dr,
        ia = Xn,
        la = Cn.getNextTreeStateVersion,
        ua = Cn.makeEmptyStoreState,
        sa = $r.isSSR,
        ca = Kr,
        fa = (function () {
          function e(t, n) {
            var r = this;
            d(this, e),
              tt(this, "_store", void 0),
              tt(this, "_refCount", 1),
              tt(this, "getLoadable", function (e) {
                return r.checkRefCount_INTERNAL(), na(r._store, e);
              }),
              tt(this, "getPromise", function (e) {
                return r.checkRefCount_INTERNAL(), r.getLoadable(e).toPromise();
              }),
              tt(this, "getNodes_UNSTABLE", function (e) {
                if (
                  (r.checkRefCount_INTERNAL(),
                  !0 === (null === e || void 0 === e ? void 0 : e.isModified))
                ) {
                  if (
                    !1 ===
                    (null === e || void 0 === e ? void 0 : e.isInitialized)
                  )
                    return [];
                  var t = r._store.getState().currentTree;
                  return ea(t.dirtyAtoms);
                }
                var n = r._store.getState().knownAtoms,
                  a = r._store.getState().knownSelectors;
                return null ==
                  (null === e || void 0 === e ? void 0 : e.isInitialized)
                  ? Jr.values()
                  : !0 === e.isInitialized
                  ? ea(Br([n, a]))
                  : Ln(Jr.values(), function (e) {
                      var t = e.key;
                      return !n.has(t) && !a.has(t);
                    });
              }),
              tt(this, "getInfo_UNSTABLE", function (e) {
                var t = e.key;
                return (
                  r.checkRefCount_INTERNAL(),
                  Qr(r._store, r._store.getState().currentTree, t)
                );
              }),
              tt(this, "map", function (e) {
                r.checkRefCount_INTERNAL();
                var t = new ma(r, Gr);
                return e(t), t;
              }),
              tt(
                this,
                "asyncMap",
                (function () {
                  var e = (function (e) {
                    return function () {
                      var t = this,
                        n = arguments;
                      return new Promise(function (r, a) {
                        var o = e.apply(t, n);
                        function i(e) {
                          Be(o, r, a, i, l, "next", e);
                        }
                        function l(e) {
                          Be(o, r, a, i, l, "throw", e);
                        }
                        i(void 0);
                      });
                    };
                  })(
                    We().mark(function e(t) {
                      var n;
                      return We().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                r.checkRefCount_INTERNAL(),
                                (n = new ma(r, Gr)).retain(),
                                (e.next = 5),
                                t(n)
                              );
                            case 5:
                              return (
                                n.autoRelease_INTERNAL(), e.abrupt("return", n)
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              (this._store = {
                storeID: Zr(),
                parentStoreID: n,
                getState: function () {
                  return t;
                },
                replaceState: function (e) {
                  t.currentTree = e(t.currentTree);
                },
                getGraph: function (e) {
                  var n = t.graphsByVersion;
                  if (n.has(e)) return et(n.get(e));
                  var r = Yr();
                  return n.set(e, r), r;
                },
                subscribeToTransactions: function () {
                  return { release: function () {} };
                },
                addTransactionMetadata: function () {
                  throw Xe("Cannot subscribe to Snapshots");
                },
              });
            var a,
              o = x(this._store.getState().knownAtoms);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                qr(this._store, i, "get"), oa(this._store, i, 1);
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
            this.autoRelease_INTERNAL();
          }
          return (
            m(e, [
              {
                key: "retain",
                value: function () {
                  var e = this;
                  this._refCount <= 0 &&
                    Pt(
                      "Attempt to retain() Snapshot that was already released."
                    ),
                    this._refCount++;
                  var t = !1;
                  return function () {
                    t || ((t = !0), e._release());
                  };
                },
              },
              {
                key: "autoRelease_INTERNAL",
                value: function () {
                  var e = this;
                  sa ||
                    window.setTimeout(function () {
                      return e._release();
                    }, 10);
                },
              },
              {
                key: "_release",
                value: function () {
                  if ((this._refCount--, 0 === this._refCount)) {
                    if (
                      (this._store
                        .getState()
                        .nodeCleanupFunctions.forEach(function (e) {
                          return e();
                        }),
                      this._store.getState().nodeCleanupFunctions.clear(),
                      !xt("recoil_memory_managament_2020"))
                    )
                      return;
                  } else this._refCount;
                },
              },
              {
                key: "isRetained",
                value: function () {
                  return this._refCount > 0;
                },
              },
              {
                key: "checkRefCount_INTERNAL",
                value: function () {
                  xt("recoil_memory_managament_2020") && this._refCount;
                },
              },
              {
                key: "getStore_INTERNAL",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store;
                },
              },
              {
                key: "getID",
                value: function () {
                  return (
                    this.checkRefCount_INTERNAL(),
                    this._store.getState().currentTree.stateID
                  );
                },
              },
              {
                key: "getStoreID",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store.storeID;
                },
              },
            ]),
            e
          );
        })();
      function da(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = e.getState(),
          a = n ? la() : t.version;
        return {
          currentTree: {
            version: n ? a : t.version,
            stateID: n ? a : t.stateID,
            transactionMetadata: Ke({}, t.transactionMetadata),
            dirtyAtoms: new Set(t.dirtyAtoms),
            atomValues: t.atomValues.clone(),
            nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
          },
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(a, e.getGraph(t.version)),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(
            Kt(r.nodeCleanupFunctions.entries(), function (e) {
              return [s(e, 1)[0], function () {}];
            })
          ),
        };
      }
      var pa = s(
          ca(
            function (e, t) {
              var n,
                r = e.getState(),
                a =
                  "latest" === t
                    ? null !== (n = r.nextTree) && void 0 !== n
                      ? n
                      : r.currentTree
                    : et(r.previousTree);
              return new fa(da(e, a), e.storeID);
            },
            function (e, t) {
              var n, r;
              return (
                String(t) +
                String(e.storeID) +
                String(
                  null === (n = e.getState().nextTree) || void 0 === n
                    ? void 0
                    : n.version
                ) +
                String(e.getState().currentTree.version) +
                String(
                  null === (r = e.getState().previousTree) || void 0 === r
                    ? void 0
                    : r.version
                )
              );
            }
          ),
          2
        ),
        ha = pa[0],
        va = pa[1];
      ia(va);
      var ma = (function (e) {
          g(n, e);
          var t = _(n);
          function n(e, r) {
            var a;
            return (
              d(this, n),
              tt(
                w(
                  (a = t.call(
                    this,
                    da(
                      e.getStore_INTERNAL(),
                      e.getStore_INTERNAL().getState().currentTree,
                      !0
                    ),
                    e.getStoreID()
                  ))
                ),
                "_batch",
                void 0
              ),
              tt(w(a), "set", function (e, t) {
                a.checkRefCount_INTERNAL();
                var n = a.getStore_INTERNAL();
                a._batch(function () {
                  oa(n, e.key, 1), ra(a.getStore_INTERNAL(), e, t);
                });
              }),
              tt(w(a), "reset", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                a._batch(function () {
                  oa(t, e.key, 1), ra(a.getStore_INTERNAL(), e, Xr);
                });
              }),
              tt(w(a), "setUnvalidatedAtomValues_DEPRECATED", function (e) {
                a.checkRefCount_INTERNAL();
                var t = a.getStore_INTERNAL();
                Gr(function () {
                  var n,
                    r = x(e.entries());
                  try {
                    for (r.s(); !(n = r.n()).done; ) {
                      var a = s(n.value, 2),
                        o = a[0],
                        i = a[1];
                      oa(t, o, 1), aa(t, new ta(o), i);
                    }
                  } catch (l) {
                    r.e(l);
                  } finally {
                    r.f();
                  }
                });
              }),
              (a._batch = r),
              a
            );
          }
          return m(n);
        })(fa),
        ya = {
          Snapshot: fa,
          MutableSnapshot: ma,
          freshSnapshot: function (e) {
            var t = new fa(ua());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "latest",
              n = ha(e, t);
            return n.isRetained() ? n : (va(), ha(e, t));
          },
        },
        ga = ya.Snapshot,
        ba = ya.MutableSnapshot,
        Sa = ya.freshSnapshot,
        wa = ya.cloneSnapshot,
        _a = Object.freeze({
          __proto__: null,
          Snapshot: ga,
          MutableSnapshot: ba,
          freshSnapshot: Sa,
          cloneSnapshot: wa,
        });
      var ka = function () {
          for (
            var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = 0, o = n; a < o.length; a++) {
            var i,
              l = x(o[a]);
            try {
              for (l.s(); !(i = l.n()).done; ) {
                var u = i.value;
                e.add(u);
              }
            } catch (s) {
              l.e(s);
            } finally {
              l.f();
            }
          }
          return e;
        },
        Ea = t.useRef;
      var xa = function (e) {
          var t = Ea(e);
          return (
            t.current === e && "function" === typeof e && (t.current = e()), t
          );
        },
        Ca = Cn.getNextTreeStateVersion,
        Ta = Cn.makeEmptyStoreState,
        Ra = Gn,
        Na = Yn,
        Pa = Kn,
        La = $n,
        Oa = qn,
        Aa = hn,
        Da = pn,
        Ia = Sn,
        Ma = It.createMutableSource,
        za = It.reactMode,
        ja = wr.applyAtomValueWrites,
        Fa = Ir,
        Ua = _a.freshSnapshot,
        Va = t.useCallback,
        Ba = t.useContext,
        Wa = t.useEffect,
        Ha = t.useMemo,
        $a = t.useRef,
        Ka = t.useState;
      function Ga() {
        throw Xe(
          "This component must be used inside a <RecoilRoot> component."
        );
      }
      var qa = Object.freeze({
          storeID: Ia(),
          getState: Ga,
          replaceState: Ga,
          getGraph: Ga,
          subscribeToTransactions: Ga,
          addTransactionMetadata: Ga,
        }),
        Qa = !1;
      function Ya(e) {
        if (Qa)
          throw Xe(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        var t = e.getState();
        if (null === t.nextTree) {
          xt("recoil_memory_managament_2020") &&
            xt("recoil_release_on_cascading_update_killswitch_2021") &&
            t.commitDepth > 0 &&
            Fa(e);
          var n = t.currentTree.version,
            r = Ca();
          (t.nextTree = Ke(
            Ke({}, t.currentTree),
            {},
            {
              version: r,
              stateID: r,
              dirtyAtoms: new Set(),
              transactionMetadata: {},
            }
          )),
            t.graphsByVersion.set(r, Da(et(t.graphsByVersion.get(n))));
        }
      }
      var Za = t.createContext({ current: qa }),
        Xa = function () {
          return Ba(Za);
        },
        Ja = t.createContext(null);
      function eo(e, t, n) {
        var r,
          a = x(Na(e, n, n.dirtyAtoms));
        try {
          for (a.s(); !(r = a.n()).done; ) {
            var o = r.value,
              i = t.nodeToComponentSubscriptions.get(o);
            if (i) {
              var l,
                u = x(i);
              try {
                for (u.s(); !(l = u.n()).done; ) {
                  var c = s(l.value, 2),
                    f = (c[0], s(c[1], 2));
                  f[0];
                  (0, f[1])(n);
                }
              } catch (d) {
                u.e(d);
              } finally {
                u.f();
              }
            }
          }
        } catch (d) {
          a.e(d);
        } finally {
          a.f();
        }
      }
      function to(e) {
        var t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          var a,
            o = x(t.nodeTransactionSubscriptions);
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var i = s(a.value, 2),
                l = i[0],
                u = i[1];
              if (r.has(l)) {
                var c,
                  f = x(u);
                try {
                  for (f.s(); !(c = f.n()).done; ) {
                    var d = s(c.value, 2);
                    d[0];
                    (0, d[1])(e);
                  }
                } catch (m) {
                  f.e(m);
                } finally {
                  f.f();
                }
              }
            }
          } catch (m) {
            o.e(m);
          } finally {
            o.f();
          }
          var p,
            h = x(t.transactionSubscriptions);
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var v = s(p.value, 2);
              v[0];
              (0, v[1])(e);
            }
          } catch (m) {
            h.e(m);
          } finally {
            h.f();
          }
          (!za().early || t.suspendedComponentResolvers.size > 0) &&
            (eo(e, t, n),
            t.suspendedComponentResolvers.forEach(function (e) {
              return e();
            }),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach(function (e) {
          return e(n);
        }),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function no(e) {
        var t = e.setNotifyBatcherOfChange,
          n = Xa(),
          r = s(Ka([]), 2)[1];
        return (
          t(function () {
            return r({});
          }),
          Wa(
            function () {
              return (
                t(function () {
                  return r({});
                }),
                function () {
                  t(function () {});
                }
              );
            },
            [t]
          ),
          Wa(function () {
            tn.enqueueExecution("Batcher", function () {
              !(function (e) {
                var t = e.getState();
                t.commitDepth++;
                try {
                  var n = t.nextTree;
                  if (null == n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    to(e),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : Pt(
                          "Ended batch with no previous state, which is unexpected",
                          "recoil"
                        ),
                    (t.previousTree = null),
                    xt("recoil_memory_managament_2020") && null == n && Fa(e);
                } finally {
                  t.commitDepth--;
                }
              })(n.current);
            });
          }),
          null
        );
      }
      var ro = 0;
      function ao(e) {
        var n,
          r = e.initializeState_DEPRECATED,
          a = e.initializeState,
          o = e.store_INTERNAL,
          i = e.children,
          l = function (e) {
            var t = n.current.graphsByVersion;
            if (t.has(e)) return et(t.get(e));
            var r = Aa();
            return t.set(e, r), r;
          },
          u = function (e, t) {
            if (null == t) {
              var n = p.current.getState().transactionSubscriptions,
                r = ro++;
              return (
                n.set(r, e),
                {
                  release: function () {
                    n.delete(r);
                  },
                }
              );
            }
            var a = p.current.getState().nodeTransactionSubscriptions;
            a.has(t) || a.set(t, new Map());
            var o = ro++;
            return (
              et(a.get(t)).set(o, e),
              {
                release: function () {
                  var e = a.get(t);
                  e && (e.delete(o), 0 === e.size && a.delete(t));
                },
              }
            );
          },
          s = function (e) {
            Ya(p.current);
            for (var t = 0, n = Object.keys(e); t < n.length; t++) {
              var r = n[t];
              et(p.current.getState().nextTree).transactionMetadata[r] = e[r];
            }
          },
          c = function (e) {
            Ya(p.current);
            var t,
              r = et(n.current.nextTree);
            try {
              (Qa = !0), (t = e(r));
            } finally {
              Qa = !1;
            }
            t !== r &&
              ((n.current.nextTree = t),
              za().early && eo(p.current, n.current, t),
              et(f.current)());
          },
          f = $a(null),
          d = Va(
            function (e) {
              f.current = e;
            },
            [f]
          ),
          p = xa(function () {
            return null !== o && void 0 !== o
              ? o
              : {
                  storeID: Ia(),
                  getState: function () {
                    return n.current;
                  },
                  replaceState: c,
                  getGraph: l,
                  subscribeToTransactions: u,
                  addTransactionMetadata: s,
                };
          });
        null != o && (p.current = o),
          (n = xa(function () {
            return null != r
              ? (function (e, t) {
                  var n = Ta();
                  return (
                    t({
                      set: function (t, r) {
                        var a,
                          o = n.currentTree,
                          i = La(e, o, t.key, r),
                          l = new Set(i.keys()),
                          u = o.nonvalidatedAtoms.clone(),
                          s = x(l);
                        try {
                          for (s.s(); !(a = s.n()).done; ) {
                            var c = a.value;
                            u.delete(c);
                          }
                        } catch (f) {
                          s.e(f);
                        } finally {
                          s.f();
                        }
                        n.currentTree = Ke(
                          Ke({}, o),
                          {},
                          {
                            dirtyAtoms: ka(o.dirtyAtoms, l),
                            atomValues: ja(o.atomValues, i),
                            nonvalidatedAtoms: u,
                          }
                        );
                      },
                      setUnvalidatedAtomValues: function (e) {
                        e.forEach(function (e, t) {
                          n.currentTree = Oa(n.currentTree, t, e);
                        });
                      },
                    }),
                    n
                  );
                })(p.current, r)
              : null != a
              ? (function (e) {
                  var t = Ua(e),
                    n = t.getStore_INTERNAL().getState();
                  return (
                    t.retain(),
                    n.nodeCleanupFunctions.forEach(function (e) {
                      return e();
                    }),
                    n.nodeCleanupFunctions.clear(),
                    n
                  );
                })(a)
              : Ta();
          }));
        var h = Ha(
          function () {
            return null === Ma || void 0 === Ma
              ? void 0
              : Ma(n, function () {
                  return n.current.currentTree.version;
                });
          },
          [n]
        );
        return (
          Wa(
            function () {
              var e,
                t = p.current,
                n = x(new Set(t.getState().knownAtoms));
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var r = e.value;
                  Pa(t, r, "get");
                }
              } catch (a) {
                n.e(a);
              } finally {
                n.f();
              }
              return function () {
                var e,
                  n = x(t.getState().knownAtoms);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    Ra(t, r);
                  }
                } catch (a) {
                  n.e(a);
                } finally {
                  n.f();
                }
              };
            },
            [p]
          ),
          t.createElement(
            Za.Provider,
            { value: p },
            t.createElement(
              Ja.Provider,
              { value: h },
              t.createElement(no, { setNotifyBatcherOfChange: d }),
              i
            )
          )
        );
      }
      var oo = function (e) {
          var n = e.override,
            r = Ve(e, qe),
            a = Xa();
          return !1 === n && a.current !== qa
            ? e.children
            : t.createElement(ao, r);
        },
        io = Xa,
        lo = function () {
          var e = Ba(Ja);
          return (
            null == e &&
              $t(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        uo = function () {
          return Xa().current.storeID;
        };
      var so = function (e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n]) return !1;
          return !0;
        },
        co = t.useEffect,
        fo = t.useRef;
      var po = function (e) {
          var t = fo();
          return (
            co(function () {
              t.current = e;
            }),
            t.current
          );
        },
        ho = io,
        vo = Ar,
        mo = Dr,
        yo = Rn.RetentionZone,
        go = t.useEffect,
        bo = t.useRef,
        So = $r.isSSR;
      var wo = function (e) {
        if (xt("recoil_memory_managament_2020"))
          return (function (e) {
            var t = Array.isArray(e) ? e : [e],
              n = t.map(function (e) {
                return e instanceof yo ? e : e.key;
              }),
              r = ho();
            go(function () {
              if (xt("recoil_memory_managament_2020")) {
                var e = r.current;
                if (a.current && !So)
                  window.clearTimeout(a.current), (a.current = null);
                else {
                  var t,
                    o = x(n);
                  try {
                    for (o.s(); !(t = o.n()).done; ) {
                      var i = t.value;
                      mo(e, i, 1);
                    }
                  } catch (l) {
                    o.e(l);
                  } finally {
                    o.f();
                  }
                }
                return function () {
                  var t,
                    r = x(n);
                  try {
                    for (r.s(); !(t = r.n()).done; ) {
                      var a = t.value;
                      mo(e, a, -1);
                    }
                  } catch (l) {
                    r.e(l);
                  } finally {
                    r.f();
                  }
                };
              }
            }, [r].concat(f(n)));
            var a = bo(),
              o = po(n);
            if (!So && (void 0 === o || !so(o, n))) {
              var i,
                l = r.current,
                u = x(n);
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  var s = i.value;
                  mo(l, s, 1);
                }
              } catch (h) {
                u.e(h);
              } finally {
                u.f();
              }
              if (o) {
                var c,
                  d = x(o);
                try {
                  for (d.s(); !(c = d.n()).done; ) {
                    var p = c.value;
                    mo(l, p, -1);
                  }
                } catch (h) {
                  d.e(h);
                } finally {
                  d.f();
                }
              }
              a.current && window.clearTimeout(a.current),
                (a.current = window.setTimeout(function () {
                  a.current = null;
                  var e,
                    t = x(n);
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var r = e.value;
                      mo(l, r, -1);
                    }
                  } catch (h) {
                    t.e(h);
                  } finally {
                    t.f();
                  }
                }, vo));
            }
          })(e);
      };
      var _o = function () {
          return "<component name not available>";
        },
        ko = en.DEFAULT_VALUE,
        Eo = It.currentRendererSupportsUseSyncExternalStore,
        xo = It.reactMode,
        Co = It.useMutableSource,
        To = It.useSyncExternalStore,
        Ro = lo,
        No = io,
        Po = (Ht.isRecoilValue, wr.getRecoilValueAsLoadable),
        Lo = wr.setRecoilValue,
        Oo = wr.subscribeToRecoilValue,
        Ao = t.useCallback,
        Do = t.useEffect,
        Io = t.useMemo,
        Mo = t.useRef,
        zo = t.useState,
        jo = $r.isSSR;
      function Fo(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state)
          throw new Promise(function (t) {
            var r = n.current.getState().suspendedComponentResolvers;
            r.add(t),
              jo &&
                Je(e.contents) &&
                e.contents.finally(function () {
                  r.delete(t);
                });
          });
        throw "hasError" === e.state
          ? e.contents
          : Xe('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function Uo(e) {
        var t = No(),
          n = _o(),
          r = Ao(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  xo().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return { loadable: Po(r, e, o), key: e.key };
            },
            [t, e]
          ),
          a = Ao(function (e) {
            var t;
            return function () {
              var n,
                r,
                a = e();
              return null !== (n = t) &&
                void 0 !== n &&
                n.loadable.is(a.loadable) &&
                (null === (r = t) || void 0 === r ? void 0 : r.key) === a.key
                ? t
                : ((t = a), a);
            };
          }, []),
          o = Io(
            function () {
              return a(r);
            },
            [r, a]
          ),
          i = Ao(
            function (r) {
              var a = t.current;
              return Oo(a, e, r, n).release;
            },
            [t, e, n]
          );
        return To(i, o, o).loadable;
      }
      function Vo(e) {
        var t = No(),
          n = Ao(
            function () {
              var n,
                r = t.current,
                a = r.getState(),
                o =
                  xo().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return Po(r, e, o);
            },
            [t, e]
          ),
          r = Ao(
            function () {
              return n();
            },
            [n]
          ),
          a = _o(),
          o = Ao(
            function (r, o) {
              var i = t.current;
              return Oo(
                i,
                e,
                function () {
                  if (!xt("recoil_suppress_rerender_in_callback")) return o();
                  var e = n();
                  u.current.is(e) || o(), (u.current = e);
                },
                a
              ).release;
            },
            [t, e, a, n]
          ),
          i = Ro();
        if (null == i)
          throw Xe(
            "Recoil hooks must be used in components contained within a <RecoilRoot> component."
          );
        var l = Co(i, r, o),
          u = Mo(l);
        return (
          Do(function () {
            u.current = l;
          }),
          l
        );
      }
      function Bo(e) {
        var t = No(),
          n = _o(),
          r = Ao(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  xo().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return Po(r, e, o);
            },
            [t, e]
          ),
          a = Ao(
            function () {
              return { loadable: r(), key: e.key };
            },
            [r, e.key]
          ),
          o = Ao(
            function (e) {
              var t = a();
              return e.loadable.is(t.loadable) && e.key === t.key ? e : t;
            },
            [a]
          );
        Do(
          function () {
            var r = Oo(
              t.current,
              e,
              function (e) {
                u(o);
              },
              n
            );
            return u(o), r.release;
          },
          [n, e, t, o]
        );
        var i = s(zo(a), 2),
          l = i[0],
          u = i[1];
        return l.key !== e.key ? a().loadable : l.loadable;
      }
      function Wo(e) {
        var t = No(),
          n = s(zo([]), 2)[1],
          r = _o(),
          a = Ao(
            function () {
              var n;
              var r = t.current,
                a = r.getState(),
                o =
                  xo().early && null !== (n = a.nextTree) && void 0 !== n
                    ? n
                    : a.currentTree;
              return Po(r, e, o);
            },
            [t, e]
          ),
          o = a(),
          i = Mo(o);
        return (
          Do(function () {
            i.current = o;
          }),
          Do(
            function () {
              var o = t.current,
                l = o.getState(),
                u = Oo(
                  o,
                  e,
                  function (e) {
                    var t;
                    if (!xt("recoil_suppress_rerender_in_callback"))
                      return n([]);
                    var r = a();
                    (null !== (t = i.current) && void 0 !== t && t.is(r)) ||
                      n(r),
                      (i.current = r);
                  },
                  r
                );
              if (l.nextTree)
                o.getState().queuedComponentCallbacks_DEPRECATED.push(
                  function () {
                    (i.current = null), n([]);
                  }
                );
              else {
                var s;
                if (!xt("recoil_suppress_rerender_in_callback")) return n([]);
                var c = a();
                (null !== (s = i.current) && void 0 !== s && s.is(c)) || n(c),
                  (i.current = c);
              }
              return u.release;
            },
            [r, a, e, t]
          ),
          o
        );
      }
      function Ho(e) {
        return (
          xt("recoil_memory_managament_2020") && wo(e),
          {
            TRANSITION_SUPPORT: Bo,
            SYNC_EXTERNAL_STORE: Eo() ? Uo : Bo,
            MUTABLE_SOURCE: Vo,
            LEGACY: Wo,
          }[xo().mode](e)
        );
      }
      function $o(e) {
        var t = No();
        return Fo(Ho(e), e, t);
      }
      function Ko(e) {
        var t = No();
        return Ao(
          function (n) {
            Lo(t.current, e, n);
          },
          [t, e]
        );
      }
      function Go(e) {
        return xt("recoil_memory_managament_2020") && wo(e), Bo(e);
      }
      function qo(e) {
        var t = No();
        return Fo(Go(e), e, t);
      }
      var Qo = function (e) {
          return [$o(e), Ko(e)];
        },
        Yo = function (e) {
          return [Ho(e), Ko(e)];
        },
        Zo = $o,
        Xo = Ho,
        Jo = function (e) {
          var t = No();
          return Ao(
            function () {
              Lo(t.current, e, ko);
            },
            [t, e]
          );
        },
        ei = Ko,
        ti = Go,
        ni = qo,
        ri = function (e) {
          return [qo(e), Ko(e)];
        };
      var ai = Ur,
        oi = en.DEFAULT_VALUE,
        ii = en.getNode,
        li = io,
        ui = wr.AbstractRecoilValue,
        si = wr.setRecoilValueLoadable,
        ci = Ar,
        fi = _a.cloneSnapshot,
        di = t.useCallback,
        pi = t.useEffect,
        hi = t.useRef,
        vi = t.useState,
        mi = $r.isSSR;
      function yi(e) {
        var t = li();
        pi(
          function () {
            return t.current.subscribeToTransactions(e).release;
          },
          [e, t]
        );
      }
      function gi(e, t) {
        var n,
          r = e.getState(),
          a = null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
          o = t.getStore_INTERNAL().getState().currentTree;
        ai(function () {
          for (
            var n = new Set(),
              r = 0,
              i = [a.atomValues.keys(), o.atomValues.keys()];
            r < i.length;
            r++
          ) {
            var l,
              u = x(i[r]);
            try {
              for (u.s(); !(l = u.n()).done; ) {
                var s,
                  c,
                  f = l.value;
                (null === (s = a.atomValues.get(f)) || void 0 === s
                  ? void 0
                  : s.contents) !==
                  (null === (c = o.atomValues.get(f)) || void 0 === c
                    ? void 0
                    : c.contents) &&
                  ii(f).shouldRestoreFromSnapshots &&
                  n.add(f);
              }
            } catch (d) {
              u.e(d);
            } finally {
              u.f();
            }
          }
          n.forEach(function (t) {
            si(
              e,
              new ui(t),
              o.atomValues.has(t) ? et(o.atomValues.get(t)) : oi
            );
          }),
            e.replaceState(function (e) {
              return Ke(Ke({}, e), {}, { stateID: t.getID() });
            });
        });
      }
      var bi = function () {
          var e = li(),
            t = s(
              vi(function () {
                return fi(e.current);
              }),
              2
            ),
            n = t[0],
            r = t[1],
            a = po(n),
            o = hi(),
            i = hi();
          if (
            (yi(
              di(function (e) {
                return r(fi(e));
              }, [])
            ),
            pi(
              function () {
                var e,
                  t = n.retain();
                o.current &&
                  !mi &&
                  (window.clearTimeout(o.current),
                  (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null));
                return function () {
                  window.setTimeout(t, 10);
                };
              },
              [n]
            ),
            a !== n && !mi)
          ) {
            var l;
            if (o.current)
              window.clearTimeout(o.current),
                (o.current = null),
                null === (l = i.current) || void 0 === l || l.call(i),
                (i.current = null);
            (i.current = n.retain()),
              (o.current = window.setTimeout(function () {
                var e;
                (o.current = null),
                  null === (e = i.current) || void 0 === e || e.call(i),
                  (i.current = null);
              }, ci));
          }
          return n;
        },
        Si = gi,
        wi = function () {
          var e = li();
          return di(
            function (t) {
              return gi(e.current, t);
            },
            [e]
          );
        },
        _i = function (e) {
          yi(
            di(
              function (t) {
                var n = fi(t, "latest"),
                  r = fi(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        ki = Qn,
        Ei = io;
      var xi = function () {
          var e = Ei();
          return function (t) {
            var n = t.key;
            return ki(e.current, e.current.getState().currentTree, n);
          };
        },
        Ci = It.reactMode,
        Ti = oo,
        Ri = io,
        Ni = t.useMemo;
      var Pi = function () {
          "MUTABLE_SOURCE" === Ci().mode &&
            console.warn(
              "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
            );
          var e = Ri().current;
          return Ni(
            function () {
              return function (n) {
                var r = n.children;
                return t.createElement(Ti, { store_INTERNAL: e }, r);
              };
            },
            [e]
          );
        },
        Li = wt.loadableWithValue,
        Oi = Kn,
        Ai = en.DEFAULT_VALUE,
        Di = en.getNode,
        Ii = wr.copyTreeState,
        Mi = wr.getRecoilValueAsLoadable,
        zi = wr.invalidateDownstreams,
        ji = wr.writeLoadableToTreeState;
      function Fi(e) {
        return "atom" === Di(e.key).nodeType;
      }
      var Ui = (function () {
        function e(t, n) {
          var r = this;
          d(this, e),
            tt(this, "_store", void 0),
            tt(this, "_treeState", void 0),
            tt(this, "_changes", void 0),
            tt(this, "get", function (e) {
              if (r._changes.has(e.key)) return r._changes.get(e.key);
              if (!Fi(e))
                throw Xe(
                  "Reading selectors within atomicUpdate is not supported"
                );
              var t = Mi(r._store, e, r._treeState);
              if ("hasValue" === t.state) return t.contents;
              throw "hasError" === t.state
                ? t.contents
                : Xe(
                    "Expected Recoil atom ".concat(
                      e.key,
                      " to have a value, but it is in a loading state."
                    )
                  );
            }),
            tt(this, "set", function (e, t) {
              if (!Fi(e))
                throw Xe(
                  "Setting selectors within atomicUpdate is not supported"
                );
              if ("function" === typeof t) {
                var n = r.get(e);
                r._changes.set(e.key, t(n));
              } else Oi(r._store, e.key, "set"), r._changes.set(e.key, t);
            }),
            tt(this, "reset", function (e) {
              r.set(e, Ai);
            }),
            (this._store = t),
            (this._treeState = n),
            (this._changes = new Map());
        }
        return (
          m(e, [
            {
              key: "newTreeState_INTERNAL",
              value: function () {
                if (0 === this._changes.size) return this._treeState;
                var e,
                  t = Ii(this._treeState),
                  n = x(this._changes);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = s(e.value, 2),
                      a = r[0],
                      o = r[1];
                    ji(t, a, Li(o));
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                return zi(this._store, t), t;
              },
            },
          ]),
          e
        );
      })();
      var Vi = function (e) {
          return function (t) {
            e.replaceState(function (n) {
              var r = new Ui(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        Bi = Vi,
        Wi = Object.freeze({ __proto__: null, atomicUpdater: Bi });
      var Hi = function (e, t) {
          if (!e) throw new Error(t);
        },
        $i = Wi.atomicUpdater,
        Ki = Ur,
        Gi = en.DEFAULT_VALUE,
        qi = io,
        Qi = wr.refreshRecoilValue,
        Yi = wr.setRecoilValue,
        Zi = _a.cloneSnapshot,
        Xi = Si,
        Ji = t.useCallback,
        el = m(function e() {
          d(this, e);
        }),
        tl = new el();
      function nl(e, t, n, r) {
        var a,
          o,
          i = tl;
        (Ki(function () {
          var o =
            "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
          if ("function" !== typeof t) throw Xe(o);
          var l = On(
              Ke(
                Ke({}, null !== r && void 0 !== r ? r : {}),
                {},
                {
                  set: function (t, n) {
                    return Yi(e, t, n);
                  },
                  reset: function (t) {
                    return Yi(e, t, Gi);
                  },
                  refresh: function (t) {
                    return Qi(e, t);
                  },
                  gotoSnapshot: function (t) {
                    return Xi(e, t);
                  },
                  transact_UNSTABLE: function (t) {
                    return $i(e)(t);
                  },
                }
              ),
              {
                snapshot: function () {
                  var t = Zi(e);
                  return (a = t.retain()), t;
                },
              }
            ),
            u = t(l);
          if ("function" !== typeof u) throw Xe(o);
          i = u.apply(void 0, f(n));
        }),
        i instanceof el && Hi(!1),
        Je(i))
          ? (i = i.finally(function () {
              var e;
              null === (e = a) || void 0 === e || e();
            }))
          : null === (o = a) || void 0 === o || o();
        return i;
      }
      var rl = nl,
        al = function (e, t) {
          var n = qi();
          return Ji(
            function () {
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return nl(n.current, e, r);
            },
            null != t ? [].concat(f(t), [n]) : void 0
          );
        },
        ol = io,
        il = wr.refreshRecoilValue,
        ll = t.useCallback;
      var ul = function (e) {
          var t = ol();
          return ll(
            function () {
              var n = t.current;
              il(n, e);
            },
            [e, t]
          );
        },
        sl = Wi.atomicUpdater,
        cl = io,
        fl = t.useMemo;
      var dl = function (e, t) {
          var n = cl();
          return fl(
            function () {
              return function () {
                for (
                  var t = arguments.length, r = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  r[a] = arguments[a];
                sl(n.current)(function (t) {
                  e(t).apply(void 0, r);
                });
              };
            },
            null != t ? [].concat(f(t), [n]) : void 0
          );
        },
        pl = {
          WrappedValue: m(function e(t) {
            d(this, e), tt(this, "value", void 0), (this.value = t);
          }),
        }.WrappedValue,
        hl = Object.freeze({ __proto__: null, WrappedValue: pl }),
        vl = It.isFastRefreshEnabled,
        ml = (function (e) {
          g(n, e);
          var t = _(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error)),
        yl = (function () {
          function e(t) {
            var n, r, a;
            d(this, e),
              tt(this, "_name", void 0),
              tt(this, "_numLeafs", void 0),
              tt(this, "_root", void 0),
              tt(this, "_onHit", void 0),
              tt(this, "_onSet", void 0),
              tt(this, "_mapNodeValue", void 0),
              (this._name = null === t || void 0 === t ? void 0 : t.name),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (n = null === t || void 0 === t ? void 0 : t.onHit) &&
                void 0 !== n
                  ? n
                  : function () {}),
              (this._onSet =
                null !== (r = null === t || void 0 === t ? void 0 : t.onSet) &&
                void 0 !== r
                  ? r
                  : function () {}),
              (this._mapNodeValue =
                null !==
                  (a = null === t || void 0 === t ? void 0 : t.mapNodeValue) &&
                void 0 !== a
                  ? a
                  : function (e) {
                      return e;
                    });
          }
          return (
            m(e, [
              {
                key: "size",
                value: function () {
                  return this._numLeafs;
                },
              },
              {
                key: "root",
                value: function () {
                  return this._root;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  return null === (n = this.getLeafNode(e, t)) || void 0 === n
                    ? void 0
                    : n.value;
                },
              },
              {
                key: "getLeafNode",
                value: function (e, t) {
                  if (null != this._root)
                    for (var n = this._root; n; ) {
                      if (
                        (null === t || void 0 === t || t.onNodeVisit(n),
                        "leaf" === n.type)
                      )
                        return this._onHit(n), n;
                      var r = this._mapNodeValue(e(n.nodeKey));
                      n = n.branches.get(r);
                    }
                },
              },
              {
                key: "set",
                value: function (e, t, n) {
                  var r = this,
                    a = function () {
                      var a,
                        o,
                        i,
                        l,
                        u,
                        c,
                        f,
                        d = x(e);
                      try {
                        for (d.s(); !(f = d.n()).done; ) {
                          var p,
                            h,
                            v,
                            m = s(f.value, 2),
                            y = m[0],
                            g = m[1],
                            b = r._root;
                          if (
                            "leaf" ===
                            (null === b || void 0 === b ? void 0 : b.type)
                          )
                            throw r.invalidCacheError();
                          var S = u;
                          if (
                            "branch" !==
                              (u =
                                null !== (p = u = S ? S.branches.get(c) : b) &&
                                void 0 !== p
                                  ? p
                                  : {
                                      type: "branch",
                                      nodeKey: y,
                                      parent: S,
                                      branches: new Map(),
                                      branchKey: c,
                                    }).type ||
                            u.nodeKey !== y
                          )
                            throw r.invalidCacheError();
                          null === S || void 0 === S || S.branches.set(c, u),
                            null === n ||
                              void 0 === n ||
                              null === (h = n.onNodeVisit) ||
                              void 0 === h ||
                              h.call(n, u),
                            (c = r._mapNodeValue(g)),
                            (r._root =
                              null !== (v = r._root) && void 0 !== v ? v : u);
                        }
                      } catch (k) {
                        d.e(k);
                      } finally {
                        d.f();
                      }
                      var w = u
                        ? null === (a = u) || void 0 === a
                          ? void 0
                          : a.branches.get(c)
                        : r._root;
                      if (null != w && ("leaf" !== w.type || w.branchKey !== c))
                        throw r.invalidCacheError();
                      var _ = {
                        type: "leaf",
                        value: t,
                        parent: u,
                        branchKey: c,
                      };
                      null === (o = u) || void 0 === o || o.branches.set(c, _),
                        (r._root =
                          null !== (i = r._root) && void 0 !== i ? i : _),
                        r._numLeafs++,
                        r._onSet(_),
                        null === n ||
                          void 0 === n ||
                          null === (l = n.onNodeVisit) ||
                          void 0 === l ||
                          l.call(n, _);
                    };
                  try {
                    a();
                  } catch (o) {
                    if (!(o instanceof ml)) throw o;
                    this.clear(), a();
                  }
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = this.root();
                  if (!t) return !1;
                  if (e === t)
                    return (this._root = null), (this._numLeafs = 0), !0;
                  for (var n = e.parent, r = e.branchKey; n; ) {
                    var a;
                    if ((n.branches.delete(r), n === t))
                      return (
                        0 === n.branches.size
                          ? ((this._root = null), (this._numLeafs = 0))
                          : this._numLeafs--,
                        !0
                      );
                    if (n.branches.size > 0) break;
                    (r =
                      null === (a = n) || void 0 === a ? void 0 : a.branchKey),
                      (n = n.parent);
                  }
                  for (; n !== t; n = n.parent) if (null == n) return !1;
                  return this._numLeafs--, !0;
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._numLeafs = 0), (this._root = null);
                },
              },
              {
                key: "invalidCacheError",
                value: function () {
                  var e = vl()
                    ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
                    : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
                  throw (
                    (Pt(
                      e + (null != this._name ? " - ".concat(this._name) : "")
                    ),
                    new ml())
                  );
                },
              },
            ]),
            e
          );
        })(),
        gl = { TreeCache: yl }.TreeCache,
        bl = Object.freeze({ __proto__: null, TreeCache: gl }),
        Sl = (function () {
          function e(t) {
            var n;
            d(this, e),
              tt(this, "_maxSize", void 0),
              tt(this, "_size", void 0),
              tt(this, "_head", void 0),
              tt(this, "_tail", void 0),
              tt(this, "_map", void 0),
              tt(this, "_keyMapper", void 0),
              (this._maxSize = t.maxSize),
              (this._size = 0),
              (this._head = null),
              (this._tail = null),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (n = t.mapKey) && void 0 !== n
                  ? n
                  : function (e) {
                      return e;
                    });
          }
          return (
            m(e, [
              {
                key: "head",
                value: function () {
                  return this._head;
                },
              },
              {
                key: "tail",
                value: function () {
                  return this._tail;
                },
              },
              {
                key: "size",
                value: function () {
                  return this._size;
                },
              },
              {
                key: "maxSize",
                value: function () {
                  return this._maxSize;
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(this._keyMapper(e));
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = this._keyMapper(e),
                    n = this._map.get(t);
                  if (n) return this.set(e, n.value), n.value;
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  var n = this._keyMapper(e);
                  this._map.get(n) && this.delete(e);
                  var r = this.head(),
                    a = { key: e, right: r, left: null, value: t };
                  r ? (r.left = a) : (this._tail = a),
                    this._map.set(n, a),
                    (this._head = a),
                    this._size++,
                    this._maybeDeleteLRU();
                },
              },
              {
                key: "_maybeDeleteLRU",
                value: function () {
                  this.size() > this.maxSize() && this.deleteLru();
                },
              },
              {
                key: "deleteLru",
                value: function () {
                  var e = this.tail();
                  e && this.delete(e.key);
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var t = this._keyMapper(e);
                  if (this._size && this._map.has(t)) {
                    var n = et(this._map.get(t)),
                      r = n.right,
                      a = n.left;
                    r && (r.left = n.left),
                      a && (a.right = n.right),
                      n === this.head() && (this._head = r),
                      n === this.tail() && (this._tail = a),
                      this._map.delete(t),
                      this._size--;
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._size = 0),
                    (this._head = null),
                    (this._tail = null),
                    (this._map = new Map());
                },
              },
            ]),
            e
          );
        })(),
        wl = { LRUCache: Sl }.LRUCache,
        _l = Object.freeze({ __proto__: null, LRUCache: wl }),
        kl = _l.LRUCache,
        El = bl.TreeCache;
      var xl = function (e) {
        var t = e.name,
          n = e.maxSize,
          r = e.mapNodeValue,
          a =
            void 0 === r
              ? function (e) {
                  return e;
                }
              : r,
          o = new kl({ maxSize: n }),
          i = new El({
            name: t,
            mapNodeValue: a,
            onHit: function (e) {
              o.set(e, !0);
            },
            onSet: function (e) {
              var t = o.tail();
              o.set(e, !0), t && i.size() > n && i.delete(t.key);
            },
          });
        return i;
      };
      function Cl(e, t, n) {
        if ("string" === typeof e && !e.includes('"') && !e.includes("\\"))
          return '"'.concat(e, '"');
        switch (typeof e) {
          case "undefined":
            return "";
          case "boolean":
            return e ? "true" : "false";
          case "number":
          case "symbol":
            return String(e);
          case "string":
            return JSON.stringify(e);
          case "function":
            if (!0 !== (null === t || void 0 === t ? void 0 : t.allowFunctions))
              throw Xe("Attempt to serialize function in a Recoil cache key");
            return "__FUNCTION(".concat(e.name, ")__");
        }
        if (null === e) return "null";
        var r;
        if ("object" !== typeof e)
          return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (Je(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return "[".concat(
            e.map(function (e, n) {
              return Cl(e, t, n.toString());
            }),
            "]"
          );
        if ("function" === typeof e.toJSON) return Cl(e.toJSON(n), t, n);
        if (e instanceof Map) {
          var a,
            o = {},
            i = x(e);
          try {
            for (i.s(); !(a = i.n()).done; ) {
              var l = s(a.value, 2),
                u = l[0],
                c = l[1];
              o["string" === typeof u ? u : Cl(u, t)] = c;
            }
          } catch (f) {
            i.e(f);
          } finally {
            i.f();
          }
          return Cl(o, t, n);
        }
        return e instanceof Set
          ? Cl(
              Array.from(e).sort(function (e, n) {
                return Cl(e, t).localeCompare(Cl(n, t));
              }),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" === typeof e[Symbol.iterator]
          ? Cl(Array.from(e), t, n)
          : "{".concat(
              Object.keys(e)
                .filter(function (t) {
                  return void 0 !== e[t];
                })
                .sort()
                .map(function (n) {
                  return "".concat(Cl(n, t), ":").concat(Cl(e[n], t, n));
                })
                .join(","),
              "}"
            );
      }
      var Tl = function (e) {
          return Cl(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { allowFunctions: !1 }
          );
        },
        Rl = bl.TreeCache,
        Nl = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
      var Pl = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nl,
          t = e.equality,
          n = void 0 === t ? Nl.equality : t,
          r = e.eviction,
          a = void 0 === r ? Nl.eviction : r,
          o = e.maxSize,
          i = void 0 === o ? Nl.maxSize : o,
          l = arguments.length > 1 ? arguments[1] : void 0,
          u = (function (e) {
            switch (e) {
              case "reference":
                return function (e) {
                  return e;
                };
              case "value":
                return function (e) {
                  return Tl(e);
                };
            }
            throw Xe("Unrecognized equality policy ".concat(e));
          })(n);
        return (function (e, t, n, r) {
          switch (e) {
            case "keep-all":
              return new Rl({ name: r, mapNodeValue: n });
            case "lru":
              return xl({ name: r, maxSize: et(t), mapNodeValue: n });
            case "most-recent":
              return xl({ name: r, maxSize: 1, mapNodeValue: n });
          }
          throw Xe("Unrecognized eviction policy ".concat(e));
        })(a, i, u, l);
      };
      var Ll = function (e) {
          return function () {
            return null;
          };
        },
        Ol = wt.isLoadable,
        Al = wt.loadableWithError,
        Dl = wt.loadableWithPromise,
        Il = wt.loadableWithValue,
        Ml = hl.WrappedValue,
        zl = Wn,
        jl = Hn,
        Fl = $n,
        Ul = vn,
        Vl = en.DEFAULT_VALUE,
        Bl = en.getConfigDeletionHandler,
        Wl = en.getNode,
        Hl = en.registerNode,
        $l = Ht.isRecoilValue,
        Kl = wr.markRecoilValueModified,
        Gl = Mr,
        ql = rl,
        Ql = Ll,
        Yl = m(function e() {
          d(this, e);
        }),
        Zl = new Yl(),
        Xl = [],
        Jl = new Map(),
        eu = (function () {
          var e = 0;
          return function () {
            return e++;
          };
        })();
      function tu(e) {
        var t = null,
          n = e.key,
          r = e.get,
          a = e.cachePolicy_UNSTABLE,
          o = null != e.set ? e.set : void 0;
        var i = new Set(),
          l = Pl(
            null !== a && void 0 !== a
              ? a
              : { equality: "reference", eviction: "keep-all" },
            n
          ),
          u = Gl(e.retainedBy_UNSTABLE),
          c = new Map(),
          f = 0;
        function d() {
          return !xt("recoil_memory_managament_2020") || f > 0;
        }
        function p(e) {
          return (
            e.getState().knownSelectors.add(n),
            f++,
            function () {
              f--;
            }
          );
        }
        function h() {
          return void 0 !== Bl(n) && !d();
        }
        function v(e, t, n, r, a) {
          N(t, r, a), m(e, n);
        }
        function m(e, t) {
          R(e, t) && T(e), y(t, !0);
        }
        function y(e, n) {
          var r = Jl.get(e);
          if (null != r) {
            var a,
              o = x(r);
            try {
              for (o.s(); !(a = o.n()).done; ) {
                var i = a.value;
                Kl(i, et(t));
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
            n && Jl.delete(e);
          }
        }
        function g(e, t) {
          var n = Jl.get(t);
          null == n && Jl.set(t, (n = new Set())), n.add(e);
        }
        function b(e, t, n, r, a, o) {
          return t
            .then(function (r) {
              if (!d()) throw (T(e), Zl);
              null != o.loadingDepKey && o.loadingDepPromise === t
                ? n.atomValues.set(o.loadingDepKey, Il(r))
                : e.getState().knownSelectors.forEach(function (e) {
                    n.atomValues.delete(e);
                  });
              var i = _(e, n);
              if (i && "loading" !== i.state) {
                if (
                  ((R(e, a) || null == C(e)) && m(e, a), "hasValue" === i.state)
                )
                  return i.contents;
                throw i.contents;
              }
              if (!R(e, a)) {
                var l = E(e, n);
                if (null != l) return l.loadingLoadable.contents;
              }
              var u = s(w(e, n, a), 2),
                c = u[0],
                f = u[1];
              if (
                ("loading" !== c.state && v(e, n, a, c, f),
                "hasError" === c.state)
              )
                throw c.contents;
              return c.contents;
            })
            .catch(function (t) {
              if (t instanceof Yl) throw Zl;
              if (!d()) throw (T(e), Zl);
              var o = Al(t);
              throw (v(e, n, a, o, r), t);
            });
        }
        function S(e, t, r, a) {
          var o, l, u, s, c, f, d;
          (R(e, a) ||
            t.version ===
              (null === (o = e.getState()) ||
              void 0 === o ||
              null === (l = o.currentTree) ||
              void 0 === l
                ? void 0
                : l.version) ||
            t.version ===
              (null === (u = e.getState()) ||
              void 0 === u ||
              null === (s = u.nextTree) ||
              void 0 === s
                ? void 0
                : s.version)) &&
            Ul(
              n,
              r,
              e,
              null !==
                (c =
                  null === (f = e.getState()) ||
                  void 0 === f ||
                  null === (d = f.nextTree) ||
                  void 0 === d
                    ? void 0
                    : d.version) && void 0 !== c
                ? c
                : e.getState().currentTree.version
            );
          var p,
            h = x(r);
          try {
            for (h.s(); !(p = h.n()).done; ) {
              var v = p.value;
              i.add(v);
            }
          } catch (m) {
            h.e(m);
          } finally {
            h.f();
          }
        }
        function w(e, a, o) {
          var i,
            l,
            u = Ql(n),
            s = !0,
            c = !0,
            f = function () {
              u(), (c = !1);
            },
            p = !1,
            h = { loadingDepKey: null, loadingDepPromise: null },
            m = new Map();
          function g(t) {
            var n = t.key,
              r = zl(e, a, n);
            switch (
              (m.set(n, r),
              s ||
                (S(e, a, new Set(m.keys()), o),
                (function (e, t) {
                  R(e, t) && (et(C(e)).stateVersions.clear(), y(t, !1));
                })(e, o)),
              r.state)
            ) {
              case "hasValue":
                return r.contents;
              case "hasError":
                throw r.contents;
              case "loading":
                throw (
                  ((h.loadingDepKey = n),
                  (h.loadingDepPromise = r.contents),
                  r.contents)
                );
            }
            throw Xe("Invalid Loadable state");
          }
          try {
            (i = r({
              get: g,
              getCallback: function (n) {
                return function () {
                  if (c)
                    throw Xe(
                      "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
                    );
                  null == t && Hi(!1);
                  for (
                    var r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return ql(e, n, a, { node: t });
                };
              },
            })),
              (i = $l(i) ? g(i) : i),
              Ol(i) && ("hasError" === i.state && (p = !0), (i = i.contents)),
              Je(i)
                ? (i = (function (e, t, n, r, a, o) {
                    return t
                      .then(function (t) {
                        if (!d()) throw (T(e), Zl);
                        var o = Il(t);
                        return v(e, n, a, o, r), t;
                      })
                      .catch(function (t) {
                        if (!d()) throw (T(e), Zl);
                        if (Je(t)) return b(e, t, n, r, a, o);
                        var i = Al(t);
                        throw (v(e, n, a, i, r), t);
                      });
                  })(e, i, a, m, o, h).finally(f))
                : f(),
              (i = i instanceof Ml ? i.value : i);
          } catch (w) {
            Je((i = w))
              ? (i = b(e, i, a, m, o, h).finally(f))
              : ((p = !0), f());
          }
          return (
            (l = p ? Al(i) : Je(i) ? Dl(i) : Il(i)),
            (s = !1),
            (function (e, t, n) {
              if (R(e, t)) {
                var r = C(e);
                null != r && (r.depValuesDiscoveredSoFarDuringAsyncWork = n);
              }
            })(e, o, m),
            S(e, a, new Set(m.keys()), o),
            [l, m]
          );
        }
        function _(e, t) {
          var r = t.atomValues.get(n);
          if (null != r) return r;
          var a,
            o = new Set();
          try {
            r = l.get(
              function (n) {
                return "string" !== typeof n && Hi(!1), zl(e, t, n).contents;
              },
              {
                onNodeVisit: function (e) {
                  "branch" === e.type && e.nodeKey !== n && o.add(e.nodeKey);
                },
              }
            );
          } catch (i) {
            throw Xe(
              'Problem with cache lookup for selector "'
                .concat(n, '": ')
                .concat(i.message)
            );
          }
          r &&
            (t.atomValues.set(n, r),
            S(
              e,
              t,
              o,
              null === (a = C(e)) || void 0 === a ? void 0 : a.executionID
            ));
          return r;
        }
        function k(e, t) {
          var n = _(e, t);
          if (null != n) return T(e), n;
          var r,
            a = E(e, t);
          if (null != a)
            return (
              "loading" ===
                (null === (r = a.loadingLoadable) || void 0 === r
                  ? void 0
                  : r.state) && g(e, a.executionID),
              a.loadingLoadable
            );
          var o = eu(),
            i = s(w(e, t, o), 2),
            l = i[0],
            u = i[1];
          return (
            "loading" === l.state
              ? (!(function (e, t, n, r, a) {
                  c.set(e, {
                    depValuesDiscoveredSoFarDuringAsyncWork: r,
                    executionID: t,
                    loadingLoadable: n,
                    stateVersions: new Map([[a.version, !0]]),
                  });
                })(e, o, l, u, t),
                g(e, o))
              : (T(e), N(t, l, u)),
            l
          );
        }
        function E(e, t) {
          function n(n) {
            var r,
              a = x(n);
            try {
              for (a.s(); !(r = a.n()).done; ) {
                var o = s(r.value, 2),
                  i = o[0],
                  l = o[1];
                if (!zl(e, t, i).is(l)) return !0;
              }
            } catch (u) {
              a.e(u);
            } finally {
              a.f();
            }
            return !1;
          }
          var r,
            a = x(
              Br([
                c.has(e) ? [et(c.get(e))] : [],
                Kt(
                  Ln(c, function (t) {
                    return s(t, 1)[0] !== e;
                  }),
                  function (e) {
                    return s(e, 2)[1];
                  }
                ),
              ])
            );
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o = r.value;
              if (
                o.stateVersions.get(t.version) ||
                !n(o.depValuesDiscoveredSoFarDuringAsyncWork)
              )
                return o.stateVersions.set(t.version, !0), o;
              o.stateVersions.set(t.version, !1);
            }
          } catch (i) {
            a.e(i);
          } finally {
            a.f();
          }
        }
        function C(e) {
          return c.get(e);
        }
        function T(e) {
          c.delete(e);
        }
        function R(e, t) {
          var n;
          return (
            t === (null === (n = C(e)) || void 0 === n ? void 0 : n.executionID)
          );
        }
        function N(e, t, r) {
          e.atomValues.set(n, t);
          try {
            l.set(
              (function (e) {
                return Array.from(e.entries()).map(function (e) {
                  var t = s(e, 2);
                  return [t[0], t[1].contents];
                });
              })(r),
              t
            );
          } catch (a) {
            throw Xe(
              'Problem with setting cache for selector "'
                .concat(n, '": ')
                .concat(a.message)
            );
          }
        }
        function P(e, t) {
          var r = t.atomValues.get(n);
          return null != r
            ? r
            : l.get(function (n) {
                var r;
                return (
                  "string" !== typeof n && Hi(!1),
                  null === (r = jl(e, t, n)) || void 0 === r
                    ? void 0
                    : r.contents
                );
              });
        }
        function L(e, t) {
          return (function (e) {
            if (Xl.includes(n)) {
              var t = "Recoil selector has circular dependencies: ".concat(
                Xl.slice(Xl.indexOf(n)).join(" \u2192 ")
              );
              return Al(Xe(t));
            }
            Xl.push(n);
            try {
              return e();
            } finally {
              Xl.pop();
            }
          })(function () {
            return k(e, t);
          });
        }
        function O(e) {
          e.atomValues.delete(n);
        }
        function A(e, n) {
          null == t && Hi(!1);
          var r,
            a = x(i);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var o,
                u = r.value,
                s = Wl(u);
              null === (o = s.clearCache) || void 0 === o || o.call(s, e, n);
            }
          } catch (c) {
            a.e(c);
          } finally {
            a.f();
          }
          i.clear(), O(n), l.clear(), Kl(e, t);
        }
        if (null != o) {
          return (t = Hl({
            key: n,
            nodeType: "selector",
            peek: P,
            get: L,
            set: function (e, t, r) {
              var a = !1,
                i = new Map();
              function l(r) {
                var o = r.key;
                if (a)
                  throw Xe(
                    "Recoil: Async selector sets are not currently supported."
                  );
                var i = zl(e, t, o);
                if ("hasValue" === i.state) return i.contents;
                if ("loading" === i.state) {
                  var l = 'Getting value of asynchronous atom or selector "'
                    .concat(o, '" in a pending state while setting selector "')
                    .concat(n, '" is not yet supported.');
                  throw (Pt(l), Xe(l));
                }
                throw i.contents;
              }
              function u(n, r) {
                if (a) {
                  var o =
                    "Recoil: Async selector sets are not currently supported.";
                  throw (Pt(o), Xe(o));
                }
                var u = "function" === typeof r ? r(l(n)) : r;
                Fl(e, t, n.key, u).forEach(function (e, t) {
                  return i.set(t, e);
                });
              }
              var s = o(
                {
                  set: u,
                  get: l,
                  reset: function (e) {
                    u(e, Vl);
                  },
                },
                r
              );
              if (void 0 !== s)
                throw Je(s)
                  ? Xe(
                      "Recoil: Async selector sets are not currently supported."
                    )
                  : Xe("Recoil: selector set should be a void function.");
              return (a = !0), i;
            },
            init: p,
            invalidate: O,
            clearCache: A,
            shouldDeleteConfigOnRelease: h,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: u,
          }));
        }
        return (t = Hl({
          key: n,
          nodeType: "selector",
          peek: P,
          get: L,
          init: p,
          invalidate: O,
          clearCache: A,
          shouldDeleteConfigOnRelease: h,
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          shouldRestoreFromSnapshots: !1,
          retainedBy: u,
        }));
      }
      tu.value = function (e) {
        return new Ml(e);
      };
      var nu = tu,
        ru = wt.isLoadable,
        au = wt.loadableWithError,
        ou = wt.loadableWithPromise,
        iu = wt.loadableWithValue,
        lu = hl.WrappedValue,
        uu = Qn,
        su = en.DEFAULT_VALUE,
        cu = en.DefaultValue,
        fu = en.getConfigDeletionHandler,
        du = en.registerNode,
        pu = en.setConfigDeletionHandler,
        hu = Ht.isRecoilValue,
        vu = wr.getRecoilValueAsLoadable,
        mu = wr.markRecoilValueModified,
        yu = wr.setRecoilValue,
        gu = wr.setRecoilValueLoadable,
        bu = Mr,
        Su = function (e) {
          return e instanceof lu ? e.value : e;
        };
      function wu(e) {
        var t = e.key,
          n = e.persistence_UNSTABLE,
          r = bu(e.retainedBy_UNSTABLE),
          a = 0;
        function o(e) {
          return ou(
            e
              .then(function (e) {
                return (i = iu(e)), e;
              })
              .catch(function (e) {
                throw ((i = au(e)), e);
              })
          );
        }
        var i = Je(e.default)
          ? o(e.default)
          : ru(e.default)
          ? "loading" === e.default.state
            ? o(e.default.contents)
            : e.default
          : iu(Su(e.default));
        s(i.contents);
        var l = void 0,
          u = new Map();
        function s(e) {
          return e;
        }
        function c(e, n) {
          var r, a;
          return null !==
            (r = null !== (a = n.atomValues.get(t)) && void 0 !== a ? a : l) &&
            void 0 !== r
            ? r
            : i;
        }
        var d = du({
          key: t,
          nodeType: "atom",
          peek: c,
          get: function (e, r) {
            if (r.atomValues.has(t)) return et(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != l) return l;
              if (null == n)
                return (
                  $t(
                    "Tried to restore a persisted value for atom ".concat(
                      t,
                      " but it has no persistence settings."
                    )
                  ),
                  i
                );
              var a = r.nonvalidatedAtoms.get(t),
                o = n.validator(a, su),
                u = o instanceof cu ? i : iu(o);
              return (l = u);
            }
            return i;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              var a = et(n.atomValues.get(t));
              if ("hasValue" === a.state && r === a.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof cu)
              return new Map();
            return (l = void 0), new Map().set(t, iu(r));
          },
          init: function (n, r, o) {
            var l;
            if ((a++, n.getState().knownAtoms.add(t), "loading" === i.state)) {
              i.contents.finally(function () {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || mu(n, d);
              });
            }
            var s =
              null !== (l = e.effects) && void 0 !== l ? l : e.effects_UNSTABLE;
            if (null != s) {
              var p,
                h = function (e) {
                  if (g && e.key === t) {
                    var a = y;
                    return a instanceof cu
                      ? c(n, r)
                      : Je(a)
                      ? ou(
                          a.then(function (e) {
                            return e instanceof cu ? i.toPromise() : e;
                          })
                        )
                      : iu(a);
                  }
                  return vu(n, e);
                },
                v = function (e) {
                  return h(e).toPromise();
                },
                m = function (e) {
                  var r,
                    a = uu(
                      n,
                      null !== (r = n.getState().nextTree) && void 0 !== r
                        ? r
                        : n.getState().currentTree,
                      e.key
                    );
                  return !g || e.key !== t || y instanceof cu
                    ? a
                    : Ke(Ke({}, a), {}, { isSet: !0, loadable: h(e) });
                },
                y = su,
                g = !0,
                b = !1,
                S = null,
                w = function (e) {
                  return function (t) {
                    if (g) {
                      var r = h(d),
                        a = "hasValue" === r.state ? r.contents : su;
                      (y = "function" === typeof t ? t(a) : t),
                        Je(y) &&
                          (y = y.then(function (t) {
                            return (S = { effect: e, value: t }), t;
                          }));
                    } else {
                      if (Je(t))
                        throw Xe(
                          "Setting atoms to async values is not implemented."
                        );
                      "function" !== typeof t &&
                        (S = { effect: e, value: Su(t) }),
                        yu(
                          n,
                          d,
                          "function" === typeof t
                            ? function (n) {
                                var r = Su(t(n));
                                return (S = { effect: e, value: r }), r;
                              }
                            : Su(t)
                        );
                    }
                  };
                },
                _ = function (e) {
                  return function () {
                    return w(e)(su);
                  };
                },
                k = function (e) {
                  return function (r) {
                    var a,
                      o = n.subscribeToTransactions(function (n) {
                        var a,
                          o = n.getState(),
                          l = o.currentTree,
                          u = o.previousTree;
                        u ||
                          (Pt(
                            "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                          ),
                          (u = l));
                        var s =
                          null !== (a = l.atomValues.get(t)) && void 0 !== a
                            ? a
                            : i;
                        if ("hasValue" === s.state) {
                          var c,
                            f,
                            d,
                            p,
                            h = s.contents,
                            v =
                              null !== (c = u.atomValues.get(t)) && void 0 !== c
                                ? c
                                : i,
                            m = "hasValue" === v.state ? v.contents : su;
                          (null === (f = S) || void 0 === f
                            ? void 0
                            : f.effect) !== e ||
                          (null === (d = S) || void 0 === d
                            ? void 0
                            : d.value) !== h
                            ? r(h, m, !l.atomValues.has(t))
                            : (null === (p = S) || void 0 === p
                                ? void 0
                                : p.effect) === e && (S = null);
                        }
                      }, t).release;
                    u.set(
                      n,
                      [].concat(
                        f(null !== (a = u.get(n)) && void 0 !== a ? a : []),
                        [o]
                      )
                    );
                  };
                },
                E = x(s);
              try {
                for (E.s(); !(p = E.n()).done; ) {
                  var C = p.value;
                  try {
                    var T,
                      R = C({
                        node: d,
                        storeID: n.storeID,
                        parentStoreID_UNSTABLE: n.parentStoreID,
                        trigger: o,
                        setSelf: w(C),
                        resetSelf: _(C),
                        onSet: k(C),
                        getPromise: v,
                        getLoadable: h,
                        getInfo_UNSTABLE: m,
                      });
                    if (null != R)
                      u.set(
                        n,
                        [].concat(
                          f(null !== (T = u.get(n)) && void 0 !== T ? T : []),
                          [R]
                        )
                      );
                  } catch (L) {
                    (y = L), (b = !0);
                  }
                }
              } catch (O) {
                E.e(O);
              } finally {
                E.f();
              }
              if (((g = !1), !(y instanceof cu))) {
                var N,
                  P = b
                    ? au(y)
                    : Je(y)
                    ? ou(
                        (function (e, n) {
                          var r = n
                            .then(function (n) {
                              var a, o;
                              return (
                                (null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && yu(e, d, n),
                                n
                              );
                            })
                            .catch(function (n) {
                              var a, o;
                              throw (
                                ((null ===
                                  (o = (
                                    null !== (a = e.getState().nextTree) &&
                                    void 0 !== a
                                      ? a
                                      : e.getState().currentTree
                                  ).atomValues.get(t)) || void 0 === o
                                  ? void 0
                                  : o.contents) === r && gu(e, d, au(n)),
                                n)
                              );
                            });
                          return r;
                        })(n, y)
                      )
                    : iu(Su(y));
                P.contents,
                  r.atomValues.set(t, P),
                  null === (N = n.getState().nextTree) ||
                    void 0 === N ||
                    N.atomValues.set(t, P);
              }
            }
            return function () {
              var e;
              a--,
                null === (e = u.get(n)) ||
                  void 0 === e ||
                  e.forEach(function (e) {
                    return e();
                  }),
                u.delete(n);
            };
          },
          invalidate: function () {
            l = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== fu(t) && a <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return d;
      }
      function _u(e) {
        var t = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e)
          ),
          n = "default" in e ? e.default : new Promise(function () {});
        return hu(n)
          ? (function (e) {
              var t = _u(
                  Ke(
                    Ke({}, e),
                    {},
                    {
                      default: su,
                      persistence_UNSTABLE:
                        void 0 === e.persistence_UNSTABLE
                          ? void 0
                          : Ke(
                              Ke({}, e.persistence_UNSTABLE),
                              {},
                              {
                                validator: function (t) {
                                  return t instanceof cu
                                    ? t
                                    : et(e.persistence_UNSTABLE).validator(
                                        t,
                                        su
                                      );
                                },
                              }
                            ),
                      effects: e.effects,
                      effects_UNSTABLE: e.effects_UNSTABLE,
                    }
                  )
                ),
                n = nu({
                  key: "".concat(e.key, "__withFallback"),
                  get: function (n) {
                    var r = (0, n.get)(t);
                    return r instanceof cu ? e.default : r;
                  },
                  set: function (e, n) {
                    return (0, e.set)(t, n);
                  },
                  cachePolicy_UNSTABLE: { eviction: "most-recent" },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return pu(n.key, fu(e.key)), n;
            })(Ke(Ke({}, t), {}, { default: n }))
          : wu(Ke(Ke({}, t), {}, { default: n }));
      }
      _u.value = function (e) {
        return new lu(e);
      };
      var ku = _u,
        Eu = (function () {
          function e(t) {
            var n;
            d(this, e),
              tt(this, "_map", void 0),
              tt(this, "_keyMapper", void 0),
              (this._map = new Map()),
              (this._keyMapper =
                null !== (n = null === t || void 0 === t ? void 0 : t.mapKey) &&
                void 0 !== n
                  ? n
                  : function (e) {
                      return e;
                    });
          }
          return (
            m(e, [
              {
                key: "size",
                value: function () {
                  return this._map.size;
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(this._keyMapper(e));
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(this._keyMapper(e));
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  this._map.set(this._keyMapper(e), t);
                },
              },
              {
                key: "delete",
                value: function (e) {
                  this._map.delete(this._keyMapper(e));
                },
              },
              {
                key: "clear",
                value: function () {
                  this._map.clear();
                },
              },
            ]),
            e
          );
        })(),
        xu = { MapCache: Eu }.MapCache,
        Cu = Object.freeze({ __proto__: null, MapCache: xu }),
        Tu = _l.LRUCache,
        Ru = Cu.MapCache,
        Nu = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      var Pu = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : Nu,
            t = e.equality,
            n = void 0 === t ? Nu.equality : t,
            r = e.eviction,
            a = void 0 === r ? Nu.eviction : r,
            o = e.maxSize,
            i = void 0 === o ? Nu.maxSize : o,
            l = (function (e) {
              switch (e) {
                case "reference":
                  return function (e) {
                    return e;
                  };
                case "value":
                  return function (e) {
                    return Tl(e);
                  };
              }
              throw Xe("Unrecognized equality policy ".concat(e));
            })(n);
          return (function (e, t, n) {
            switch (e) {
              case "keep-all":
                return new Ru({ mapKey: n });
              case "lru":
                return new Tu({ mapKey: n, maxSize: et(t) });
              case "most-recent":
                return new Tu({ mapKey: n, maxSize: 1 });
            }
            throw Xe("Unrecognized eviction policy ".concat(e));
          })(a, i, l);
        },
        Lu = en.setConfigDeletionHandler;
      var Ou = function (e) {
          var t,
            n,
            r = Pu({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n,
              a,
              o = r.get(t);
            if (null != o) return o;
            e.cachePolicyForParams_UNSTABLE;
            var i = Ve(e, Qe),
              l = "default" in e ? e.default : new Promise(function () {}),
              u = ku(
                Ke(
                  Ke({}, i),
                  {},
                  {
                    key: ""
                      .concat(e.key, "__")
                      .concat(
                        null !== (n = Tl(t)) && void 0 !== n ? n : "void"
                      ),
                    default: "function" === typeof l ? l(t) : l,
                    retainedBy_UNSTABLE:
                      "function" === typeof e.retainedBy_UNSTABLE
                        ? e.retainedBy_UNSTABLE(t)
                        : e.retainedBy_UNSTABLE,
                    effects:
                      "function" === typeof e.effects
                        ? e.effects(t)
                        : "function" === typeof e.effects_UNSTABLE
                        ? e.effects_UNSTABLE(t)
                        : null !== (a = e.effects) && void 0 !== a
                        ? a
                        : e.effects_UNSTABLE,
                  }
                )
              );
            return (
              r.set(t, u),
              Lu(u.key, function () {
                r.delete(t);
              }),
              u
            );
          };
        },
        Au = en.setConfigDeletionHandler,
        Du = 0;
      var Iu = function (e) {
          var t,
            n,
            r = Pu({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n, a;
            try {
              a = r.get(t);
            } catch (f) {
              throw Xe(
                "Problem with cache lookup for selector "
                  .concat(e.key, ": ")
                  .concat(f.message)
              );
            }
            if (null != a) return a;
            var o,
              i = ""
                .concat(e.key, "__selectorFamily/")
                .concat(
                  null !== (n = Tl(t, { allowFunctions: !0 })) && void 0 !== n
                    ? n
                    : "void",
                  "/"
                )
                .concat(Du++),
              l = function (n) {
                return e.get(t)(n);
              },
              u = e.cachePolicy_UNSTABLE,
              s =
                "function" === typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE;
            if (null != e.set) {
              var c = e.set;
              o = nu({
                key: i,
                get: l,
                set: function (e, n) {
                  return c(t)(e, n);
                },
                cachePolicy_UNSTABLE: u,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: s,
              });
            } else
              o = nu({
                key: i,
                get: l,
                cachePolicy_UNSTABLE: u,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: s,
              });
            return (
              r.set(t, o),
              Au(o.key, function () {
                r.delete(t);
              }),
              o
            );
          };
        },
        Mu = Iu({
          key: "__constant",
          get: function (e) {
            return function () {
              return e;
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var zu = function (e) {
          return Mu(e);
        },
        ju = Iu({
          key: "__error",
          get: function (e) {
            return function () {
              throw Xe(e);
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var Fu = function (e) {
        return ju(e);
      };
      var Uu = function (e) {
          return e;
        },
        Vu = wt.loadableWithError,
        Bu = wt.loadableWithPromise,
        Wu = wt.loadableWithValue;
      function Hu(e, t) {
        var n,
          r = Array(t.length).fill(void 0),
          a = Array(t.length).fill(void 0),
          o = x(t.entries());
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var i = s(n.value, 2),
              l = i[0],
              u = i[1];
            try {
              r[l] = e(u);
            } catch (c) {
              a[l] = c;
            }
          }
        } catch (f) {
          o.e(f);
        } finally {
          o.f();
        }
        return [r, a];
      }
      function $u(e) {
        return null != e && !Je(e);
      }
      function Ku(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
      }
      function Gu(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
              return Ke(Ke({}, e), {}, He({}, n, t[r]));
            }, {});
      }
      function qu(e, t, n) {
        return Gu(
          e,
          n.map(function (e, n) {
            return null == e ? Wu(t[n]) : Je(e) ? Bu(e) : Vu(e);
          })
        );
      }
      var Qu = Iu({
          key: "__waitForNone",
          get: function (e) {
            return function (t) {
              var n = s(Hu(t.get, Ku(e)), 2),
                r = n[0],
                a = n[1];
              return qu(e, r, a);
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Yu = Iu({
          key: "__waitForAny",
          get: function (e) {
            return function (t) {
              var n = s(Hu(t.get, Ku(e)), 2),
                r = n[0],
                a = n[1];
              return a.some(function (e) {
                return !Je(e);
              })
                ? qu(e, r, a)
                : new Promise(function (t) {
                    var n,
                      o = x(a.entries());
                    try {
                      var i = function () {
                        var o = s(n.value, 2),
                          i = o[0],
                          l = o[1];
                        Je(l) &&
                          l
                            .then(function (n) {
                              (r[i] = n), (a[i] = void 0), t(qu(e, r, a));
                            })
                            .catch(function (n) {
                              (a[i] = n), t(qu(e, r, a));
                            });
                      };
                      for (o.s(); !(n = o.n()).done; ) i();
                    } catch (l) {
                      o.e(l);
                    } finally {
                      o.f();
                    }
                  });
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Zu = {
          waitForNone: Qu,
          waitForAny: Yu,
          waitForAll: Iu({
            key: "__waitForAll",
            get: function (e) {
              return function (t) {
                var n = s(Hu(t.get, Ku(e)), 2),
                  r = n[0],
                  a = n[1];
                if (
                  a.every(function (e) {
                    return null == e;
                  })
                )
                  return Gu(e, r);
                var o = a.find($u);
                if (null != o) throw o;
                return Promise.all(a).then(function (t) {
                  return Gu(
                    e,
                    ((n = r),
                    t.map(function (e, t) {
                      return void 0 === e ? n[t] : e;
                    }))
                  );
                  var n;
                });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          waitForAllSettled: Iu({
            key: "__waitForAllSettled",
            get: function (e) {
              return function (t) {
                var n = s(Hu(t.get, Ku(e)), 2),
                  r = n[0],
                  a = n[1];
                return a.every(function (e) {
                  return !Je(e);
                })
                  ? qu(e, r, a)
                  : Promise.all(
                      a.map(function (e, t) {
                        return Je(e)
                          ? e
                              .then(function (e) {
                                (r[t] = e), (a[t] = void 0);
                              })
                              .catch(function (e) {
                                (r[t] = void 0), (a[t] = e);
                              })
                          : null;
                      })
                    ).then(function () {
                      return qu(e, r, a);
                    });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          noWait: Iu({
            key: "__noWait",
            get: function (e) {
              return function (t) {
                var n = t.get;
                try {
                  return nu.value(Wu(n(e)));
                } catch (r) {
                  return nu.value(Je(r) ? Bu(r) : Vu(r));
                }
              };
            },
            dangerouslyAllowMutability: !0,
          }),
        },
        Xu = wt.RecoilLoadable,
        Ju = en.DefaultValue,
        es = oo,
        ts = uo,
        ns = Ht.isRecoilValue,
        rs = Rn.retentionZone,
        as = _a.freshSnapshot,
        os = {
          DefaultValue: Ju,
          isRecoilValue: ns,
          RecoilLoadable: Xu,
          RecoilEnv: kt,
          RecoilRoot: es,
          useRecoilStoreID: ts,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Pi,
          atom: ku,
          selector: nu,
          atomFamily: Ou,
          selectorFamily: Iu,
          constSelector: zu,
          errorSelector: Fu,
          readOnlySelector: Uu,
          noWait: Zu.noWait,
          waitForNone: Zu.waitForNone,
          waitForAny: Zu.waitForAny,
          waitForAll: Zu.waitForAll,
          waitForAllSettled: Zu.waitForAllSettled,
          useRecoilValue: Zo,
          useRecoilValueLoadable: Xo,
          useRecoilState: Qo,
          useRecoilStateLoadable: Yo,
          useSetRecoilState: ei,
          useResetRecoilState: Jo,
          useGetRecoilValueInfo_UNSTABLE: xi,
          useRecoilRefresher_UNSTABLE: ul,
          useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: ti,
          useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: ni,
          useRecoilState_TRANSITION_SUPPORT_UNSTABLE: ri,
          useRecoilCallback: al,
          useRecoilTransaction_UNSTABLE: dl,
          useGotoRecoilSnapshot: wi,
          useRecoilSnapshot: bi,
          useRecoilTransactionObserver_UNSTABLE: _i,
          snapshot_UNSTABLE: as,
          useRetain: wo,
          retentionZone: rs,
        },
        is = os.RecoilRoot,
        ls = os.atom,
        us = os.useRecoilState,
        ss = ls({ key: "ImgSrc", default: null }),
        cs = ls({ key: "TitleAtom", default: "" }),
        fs = ls({ key: "ImageAverageColorAtom", default: "" });
      function ds(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t;
      }
      function ps(e) {
        return "#" + e.map(ds).join("");
      }
      function hs(e) {
        return e ? ((t = e), Array.isArray(t[0]) ? e : [e]) : [];
        var t;
      }
      function vs(e, t, n) {
        for (var r = 0; r < n.length; r++) if (ms(e, t, n[r])) return !0;
        return !1;
      }
      function ms(e, t, n) {
        switch (n.length) {
          case 3:
            if (
              (function (e, t, n) {
                if (255 !== e[t + 3]) return !0;
                if (e[t] === n[0] && e[t + 1] === n[1] && e[t + 2] === n[2])
                  return !0;
                return !1;
              })(e, t, n)
            )
              return !0;
            break;
          case 4:
            if (
              (function (e, t, n) {
                if (e[t + 3] && n[3])
                  return (
                    e[t] === n[0] &&
                    e[t + 1] === n[1] &&
                    e[t + 2] === n[2] &&
                    e[t + 3] === n[3]
                  );
                return e[t + 3] === n[3];
              })(e, t, n)
            )
              return !0;
            break;
          case 5:
            if (
              (function (e, t, n) {
                var r = n[0],
                  a = n[1],
                  o = n[2],
                  i = n[3],
                  l = n[4],
                  u = e[t + 3],
                  s = ys(u, i, l);
                if (!i) return s;
                if (!u && s) return !0;
                if (
                  ys(e[t], r, l) &&
                  ys(e[t + 1], a, l) &&
                  ys(e[t + 2], o, l) &&
                  s
                )
                  return !0;
                return !1;
              })(e, t, n)
            )
              return !0;
            break;
          default:
            return !1;
        }
      }
      function ys(e, t, n) {
        return e >= t - n && e <= t + n;
      }
      function gs(e, t, n) {
        for (
          var r = {},
            a = n.ignoredColor,
            o = n.step,
            i = [0, 0, 0, 0, 0],
            l = 0;
          l < t;
          l += o
        ) {
          var u = e[l],
            s = e[l + 1],
            c = e[l + 2],
            f = e[l + 3];
          if (!a || !vs(e, l, a)) {
            var d =
              Math.round(u / 24) +
              "," +
              Math.round(s / 24) +
              "," +
              Math.round(c / 24);
            r[d]
              ? (r[d] = [
                  r[d][0] + u * f,
                  r[d][1] + s * f,
                  r[d][2] + c * f,
                  r[d][3] + f,
                  r[d][4] + 1,
                ])
              : (r[d] = [u * f, s * f, c * f, f, 1]),
              i[4] < r[d][4] && (i = r[d]);
          }
        }
        var p = i[0],
          h = i[1],
          v = i[2],
          m = i[3],
          y = i[4];
        return m
          ? [
              Math.round(p / m),
              Math.round(h / m),
              Math.round(v / m),
              Math.round(m / y),
            ]
          : n.defaultColor;
      }
      function bs(e, t, n) {
        for (
          var r = 0,
            a = 0,
            o = 0,
            i = 0,
            l = 0,
            u = n.ignoredColor,
            s = n.step,
            c = 0;
          c < t;
          c += s
        ) {
          var f = e[c + 3],
            d = e[c] * f,
            p = e[c + 1] * f,
            h = e[c + 2] * f;
          (u && vs(e, c, u)) || ((r += d), (a += p), (o += h), (i += f), l++);
        }
        return i
          ? [
              Math.round(r / i),
              Math.round(a / i),
              Math.round(o / i),
              Math.round(i / l),
            ]
          : n.defaultColor;
      }
      function Ss(e, t, n) {
        for (
          var r = 0,
            a = 0,
            o = 0,
            i = 0,
            l = 0,
            u = n.ignoredColor,
            s = n.step,
            c = 0;
          c < t;
          c += s
        ) {
          var f = e[c],
            d = e[c + 1],
            p = e[c + 2],
            h = e[c + 3];
          (u && vs(e, c, u)) ||
            ((r += f * f * h),
            (a += d * d * h),
            (o += p * p * h),
            (i += h),
            l++);
        }
        return i
          ? [
              Math.round(Math.sqrt(r / i)),
              Math.round(Math.sqrt(a / i)),
              Math.round(Math.sqrt(o / i)),
              Math.round(i / l),
            ]
          : n.defaultColor;
      }
      function ws(e) {
        return _s(e, "defaultColor", [0, 0, 0, 0]);
      }
      function _s(e, t, n) {
        return void 0 === e[t] ? n : e[t];
      }
      function ks(e) {
        if (xs(e)) {
          var t = e.naturalWidth,
            n = e.naturalHeight;
          return (
            e.naturalWidth ||
              -1 === e.src.search(/\.svg(\?|$)/i) ||
              (t = n = 100),
            { width: t, height: n }
          );
        }
        return (function (e) {
          return (
            "undefined" !== typeof HTMLVideoElement &&
            e instanceof HTMLVideoElement
          );
        })(e)
          ? { width: e.videoWidth, height: e.videoHeight }
          : { width: e.width, height: e.height };
      }
      function Es(e) {
        return (function (e) {
          return (
            "undefined" !== typeof HTMLCanvasElement &&
            e instanceof HTMLCanvasElement
          );
        })(e)
          ? "canvas"
          : (function (e) {
              return Cs && e instanceof OffscreenCanvas;
            })(e)
          ? "offscreencanvas"
          : (function (e) {
              return (
                "undefined" !== typeof ImageBitmap && e instanceof ImageBitmap
              );
            })(e)
          ? "imagebitmap"
          : e.src;
      }
      function xs(e) {
        return (
          "undefined" !== typeof HTMLImageElement &&
          e instanceof HTMLImageElement
        );
      }
      var Cs = "undefined" !== typeof OffscreenCanvas;
      var Ts = "undefined" === typeof window;
      function Rs(e) {
        return Error("FastAverageColor: " + e);
      }
      function Ns(e, t) {
        t || console.error(e);
      }
      var Ps = (function () {
          function e() {
            (this.canvas = null), (this.ctx = null);
          }
          return (
            (e.prototype.getColorAsync = function (e, t) {
              if (!e)
                return Promise.reject(
                  Rs("call .getColorAsync() without resource.")
                );
              if ("string" === typeof e) {
                if ("undefined" === typeof Image)
                  return Promise.reject(
                    Rs(
                      "resource as string is not supported in this environment"
                    )
                  );
                var n = new Image();
                return (
                  (n.crossOrigin = (t && t.crossOrigin) || ""),
                  (n.src = e),
                  this.bindImageEvents(n, t)
                );
              }
              if (xs(e) && !e.complete) return this.bindImageEvents(e, t);
              var r = this.getColor(e, t);
              return r.error ? Promise.reject(r.error) : Promise.resolve(r);
            }),
            (e.prototype.getColor = function (e, t) {
              var n = ws((t = t || {}));
              if (!e)
                return (
                  Ns(
                    (o = Rs("call .getColor(null) without resource")),
                    t.silent
                  ),
                  this.prepareResult(n, o)
                );
              var r = (function (e, t) {
                var n,
                  r = _s(t, "left", 0),
                  a = _s(t, "top", 0),
                  o = _s(t, "width", e.width),
                  i = _s(t, "height", e.height),
                  l = o,
                  u = i;
                return (
                  "precision" === t.mode ||
                    (o > i
                      ? ((n = o / i), (l = 100), (u = Math.round(l / n)))
                      : ((n = i / o), (u = 100), (l = Math.round(u / n))),
                    (l > o || u > i || l < 10 || u < 10) && ((l = o), (u = i))),
                  {
                    srcLeft: r,
                    srcTop: a,
                    srcWidth: o,
                    srcHeight: i,
                    destWidth: l,
                    destHeight: u,
                  }
                );
              })(ks(e), t);
              if (!r.srcWidth || !r.srcHeight || !r.destWidth || !r.destHeight)
                return (
                  Ns(
                    (o = Rs(
                      'incorrect sizes for resource "'.concat(Es(e), '"')
                    )),
                    t.silent
                  ),
                  this.prepareResult(n, o)
                );
              if (
                !this.canvas &&
                ((this.canvas = Ts
                  ? Cs
                    ? new OffscreenCanvas(1, 1)
                    : null
                  : document.createElement("canvas")),
                !this.canvas)
              )
                return (
                  Ns(
                    (o = Rs(
                      "OffscreenCanvas is not supported in this browser"
                    )),
                    t.silent
                  ),
                  this.prepareResult(n, o)
                );
              if (!this.ctx) {
                if (
                  ((this.ctx = this.canvas.getContext("2d", {
                    willReadFrequently: !0,
                  })),
                  !this.ctx)
                )
                  return (
                    Ns(
                      (o = Rs(
                        "Canvas Context 2D is not supported in this browser"
                      )),
                      t.silent
                    ),
                    this.prepareResult(n)
                  );
                this.ctx.imageSmoothingEnabled = !1;
              }
              (this.canvas.width = r.destWidth),
                (this.canvas.height = r.destHeight);
              try {
                this.ctx.clearRect(0, 0, r.destWidth, r.destHeight),
                  this.ctx.drawImage(
                    e,
                    r.srcLeft,
                    r.srcTop,
                    r.srcWidth,
                    r.srcHeight,
                    0,
                    0,
                    r.destWidth,
                    r.destHeight
                  );
                var a = this.ctx.getImageData(
                  0,
                  0,
                  r.destWidth,
                  r.destHeight
                ).data;
                return this.prepareResult(this.getColorFromArray4(a, t));
              } catch (i) {
                var o;
                return (
                  Ns(
                    (o = Rs(
                      "security error (CORS) for resource ".concat(
                        Es(e),
                        ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"
                      )
                    )),
                    t.silent
                  ),
                  !t.silent && console.error(i),
                  this.prepareResult(n, o)
                );
              }
            }),
            (e.prototype.getColorFromArray4 = function (e, t) {
              t = t || {};
              var n = e.length,
                r = ws(t);
              if (n < 4) return r;
              var a,
                o = n - (n % 4),
                i = 4 * (t.step || 1);
              switch (t.algorithm || "sqrt") {
                case "simple":
                  a = bs;
                  break;
                case "sqrt":
                  a = Ss;
                  break;
                case "dominant":
                  a = gs;
                  break;
                default:
                  throw Rs("".concat(t.algorithm, " is unknown algorithm"));
              }
              return a(e, o, {
                defaultColor: r,
                ignoredColor: hs(t.ignoredColor),
                step: i,
              });
            }),
            (e.prototype.prepareResult = function (e, t) {
              var n,
                r = e.slice(0, 3),
                a = [e[0], e[1], e[2], e[3] / 255],
                o = (299 * (n = e)[0] + 587 * n[1] + 114 * n[2]) / 1e3 < 128;
              return {
                value: [e[0], e[1], e[2], e[3]],
                rgb: "rgb(" + r.join(",") + ")",
                rgba: "rgba(" + a.join(",") + ")",
                hex: ps(r),
                hexa: ps(e),
                isDark: o,
                isLight: !o,
                error: t,
              };
            }),
            (e.prototype.destroy = function () {
              this.canvas &&
                ((this.canvas.width = 1),
                (this.canvas.height = 1),
                (this.canvas = null)),
                (this.ctx = null);
            }),
            (e.prototype.bindImageEvents = function (e, t) {
              var n = this;
              return new Promise(function (r, a) {
                var o = function () {
                    u();
                    var o = n.getColor(e, t);
                    o.error ? a(o.error) : r(o);
                  },
                  i = function () {
                    u(), a(Rs('Error loading image "'.concat(e.src, '".')));
                  },
                  l = function () {
                    u(), a(Rs('Image "'.concat(e.src, '" loading aborted')));
                  },
                  u = function () {
                    e.removeEventListener("load", o),
                      e.removeEventListener("error", i),
                      e.removeEventListener("abort", l);
                  };
                e.addEventListener("load", o),
                  e.addEventListener("error", i),
                  e.addEventListener("abort", l);
              });
            }),
            e
          );
        })(),
        Ls = function () {
          var e = s(us(ss), 2),
            n = e[0],
            r = e[1],
            a = s(us(cs), 2),
            o = (a[0], a[1]),
            i = s(us(fs), 2),
            l = (i[0], i[1]),
            u = (0, t.useRef)(null),
            c = (0, t.useCallback)(
              function (e) {
                o(e.target.value);
              },
              [o]
            );
          return {
            imgRef: u,
            onClickImg: function () {
              u.current && u.current.click();
            },
            onUpload: function (e) {
              var t = e.target.files[0],
                n = new FileReader();
              return (
                n.readAsDataURL(t),
                new Promise(function (e) {
                  n.onload = function () {
                    r(n.result || null), e();
                  };
                })
              );
            },
            TitleChange: c,
            ImageColor: function () {
              var e = new Image();
              (e.src = n),
                (e.onload = function () {
                  var t = new Ps().getColor(e).rgb;
                  l(t);
                });
            },
          };
        };
      function Os(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
          )
        );
      }
      var As = function () {
        return (
          (As =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          As.apply(this, arguments)
        );
      };
      Object.create;
      function Ds(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create;
      var Is = n(613),
        Ms = n.n(Is),
        zs = "-ms-",
        js = "-moz-",
        Fs = "-webkit-",
        Us = "comm",
        Vs = "rule",
        Bs = "decl",
        Ws = "@import",
        Hs = "@keyframes",
        $s = "@layer",
        Ks = Math.abs,
        Gs = String.fromCharCode,
        qs = Object.assign;
      function Qs(e) {
        return e.trim();
      }
      function Ys(e, t) {
        return (e = t.exec(e)) ? e[0] : e;
      }
      function Zs(e, t, n) {
        return e.replace(t, n);
      }
      function Xs(e, t) {
        return e.indexOf(t);
      }
      function Js(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function ec(e, t, n) {
        return e.slice(t, n);
      }
      function tc(e) {
        return e.length;
      }
      function nc(e) {
        return e.length;
      }
      function rc(e, t) {
        return t.push(e), e;
      }
      function ac(e, t) {
        return e.filter(function (e) {
          return !Ys(e, t);
        });
      }
      var oc = 1,
        ic = 1,
        lc = 0,
        uc = 0,
        sc = 0,
        cc = "";
      function fc(e, t, n, r, a, o, i, l) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: a,
          children: o,
          line: oc,
          column: ic,
          length: i,
          return: "",
          siblings: l,
        };
      }
      function dc(e, t) {
        return qs(
          fc("", null, null, "", null, null, 0, e.siblings),
          e,
          { length: -e.length },
          t
        );
      }
      function pc(e) {
        for (; e.root; ) e = dc(e.root, { children: [e] });
        rc(e, e.siblings);
      }
      function hc() {
        return (
          (sc = uc > 0 ? Js(cc, --uc) : 0),
          ic--,
          10 === sc && ((ic = 1), oc--),
          sc
        );
      }
      function vc() {
        return (
          (sc = uc < lc ? Js(cc, uc++) : 0),
          ic++,
          10 === sc && ((ic = 1), oc++),
          sc
        );
      }
      function mc() {
        return Js(cc, uc);
      }
      function yc() {
        return uc;
      }
      function gc(e, t) {
        return ec(cc, e, t);
      }
      function bc(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function Sc(e) {
        return (oc = ic = 1), (lc = tc((cc = e))), (uc = 0), [];
      }
      function wc(e) {
        return (cc = ""), e;
      }
      function _c(e) {
        return Qs(gc(uc - 1, xc(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function kc(e) {
        for (; (sc = mc()) && sc < 33; ) vc();
        return bc(e) > 2 || bc(sc) > 3 ? "" : " ";
      }
      function Ec(e, t) {
        for (
          ;
          --t &&
          vc() &&
          !(
            sc < 48 ||
            sc > 102 ||
            (sc > 57 && sc < 65) ||
            (sc > 70 && sc < 97)
          );

        );
        return gc(e, yc() + (t < 6 && 32 == mc() && 32 == vc()));
      }
      function xc(e) {
        for (; vc(); )
          switch (sc) {
            case e:
              return uc;
            case 34:
            case 39:
              34 !== e && 39 !== e && xc(sc);
              break;
            case 40:
              41 === e && xc(e);
              break;
            case 92:
              vc();
          }
        return uc;
      }
      function Cc(e, t) {
        for (; vc() && e + sc !== 57 && (e + sc !== 84 || 47 !== mc()); );
        return "/*" + gc(t, uc - 1) + "*" + Gs(47 === e ? e : vc());
      }
      function Tc(e) {
        for (; !bc(mc()); ) vc();
        return gc(e, uc);
      }
      function Rc(e, t) {
        for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
        return n;
      }
      function Nc(e, t, n, r) {
        switch (e.type) {
          case $s:
            if (e.children.length) break;
          case Ws:
          case Bs:
            return (e.return = e.return || e.value);
          case Us:
            return "";
          case Hs:
            return (e.return = e.value + "{" + Rc(e.children, r) + "}");
          case Vs:
            if (!tc((e.value = e.props.join(",")))) return "";
        }
        return tc((n = Rc(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function Pc(e, t, n) {
        switch (
          (function (e, t) {
            return 45 ^ Js(e, 0)
              ? (((((((t << 2) ^ Js(e, 0)) << 2) ^ Js(e, 1)) << 2) ^
                  Js(e, 2)) <<
                  2) ^
                  Js(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return Fs + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return Fs + e + e;
          case 4789:
            return js + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return Fs + e + js + e + zs + e + e;
          case 5936:
            switch (Js(e, t + 11)) {
              case 114:
                return Fs + e + zs + Zs(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return Fs + e + zs + Zs(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return Fs + e + zs + Zs(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
          case 6828:
          case 4268:
          case 2903:
            return Fs + e + zs + e + e;
          case 6165:
            return Fs + e + zs + "flex-" + e + e;
          case 5187:
            return (
              Fs +
              e +
              Zs(e, /(\w+).+(:[^]+)/, Fs + "box-$1$2" + zs + "flex-$1$2") +
              e
            );
          case 5443:
            return (
              Fs +
              e +
              zs +
              "flex-item-" +
              Zs(e, /flex-|-self/g, "") +
              (Ys(e, /flex-|baseline/)
                ? ""
                : zs + "grid-row-" + Zs(e, /flex-|-self/g, "")) +
              e
            );
          case 4675:
            return (
              Fs +
              e +
              zs +
              "flex-line-pack" +
              Zs(e, /align-content|flex-|-self/g, "") +
              e
            );
          case 5548:
            return Fs + e + zs + Zs(e, "shrink", "negative") + e;
          case 5292:
            return Fs + e + zs + Zs(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              Fs +
              "box-" +
              Zs(e, "-grow", "") +
              Fs +
              e +
              zs +
              Zs(e, "grow", "positive") +
              e
            );
          case 4554:
            return Fs + Zs(e, /([^-])(transform)/g, "$1" + Fs + "$2") + e;
          case 6187:
            return (
              Zs(
                Zs(Zs(e, /(zoom-|grab)/, Fs + "$1"), /(image-set)/, Fs + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return Zs(e, /(image-set\([^]*)/, Fs + "$1$`$1");
          case 4968:
            return (
              Zs(
                Zs(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  Fs + "box-pack:$3" + zs + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              Fs +
              e +
              e
            );
          case 4200:
            if (!Ys(e, /flex-|baseline/))
              return zs + "grid-column-align" + ec(e, t) + e;
            break;
          case 2592:
          case 3360:
            return zs + Zs(e, "template-", "") + e;
          case 4384:
          case 3616:
            return n &&
              n.some(function (e, n) {
                return (t = n), Ys(e.props, /grid-\w+-end/);
              })
              ? ~Xs(e + (n = n[t].value), "span")
                ? e
                : zs +
                  Zs(e, "-start", "") +
                  e +
                  zs +
                  "grid-row-span:" +
                  (~Xs(n, "span")
                    ? Ys(n, /\d+/)
                    : +Ys(n, /\d+/) - +Ys(e, /\d+/)) +
                  ";"
              : zs + Zs(e, "-start", "") + e;
          case 4896:
          case 4128:
            return n &&
              n.some(function (e) {
                return Ys(e.props, /grid-\w+-start/);
              })
              ? e
              : zs + Zs(Zs(e, "-end", "-span"), "span ", "") + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return Zs(e, /(.+)-inline(.+)/, Fs + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (tc(e) - 1 - t > 6)
              switch (Js(e, t + 1)) {
                case 109:
                  if (45 !== Js(e, t + 4)) break;
                case 102:
                  return (
                    Zs(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        Fs +
                        "$2-$3$1" +
                        js +
                        (108 == Js(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~Xs(e, "stretch")
                    ? Pc(Zs(e, "stretch", "fill-available"), t, n) + e
                    : e;
              }
            break;
          case 5152:
          case 5920:
            return Zs(
              e,
              /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
              function (t, n, r, a, o, i, l) {
                return (
                  zs +
                  n +
                  ":" +
                  r +
                  l +
                  (a ? zs + n + "-span:" + (o ? i : +i - +r) + l : "") +
                  e
                );
              }
            );
          case 4949:
            if (121 === Js(e, t + 6)) return Zs(e, ":", ":" + Fs) + e;
            break;
          case 6444:
            switch (Js(e, 45 === Js(e, 14) ? 18 : 11)) {
              case 120:
                return (
                  Zs(
                    e,
                    /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                    "$1" +
                      Fs +
                      (45 === Js(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      Fs +
                      "$2$3$1" +
                      zs +
                      "$2box$3"
                  ) + e
                );
              case 100:
                return Zs(e, ":", ":" + zs) + e;
            }
            break;
          case 5719:
          case 2647:
          case 2135:
          case 3927:
          case 2391:
            return Zs(e, "scroll-", "scroll-snap-") + e;
        }
        return e;
      }
      function Lc(e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case Bs:
              return void (e.return = Pc(e.value, e.length, n));
            case Hs:
              return Rc([dc(e, { value: Zs(e.value, "@", "@" + Fs) })], r);
            case Vs:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })((n = e.props), function (t) {
                  switch (Ys(t, (r = /(::plac\w+|:read-\w+)/))) {
                    case ":read-only":
                    case ":read-write":
                      pc(
                        dc(e, {
                          props: [Zs(t, /:(read-\w+)/, ":" + js + "$1")],
                        })
                      ),
                        pc(dc(e, { props: [t] })),
                        qs(e, { props: ac(n, r) });
                      break;
                    case "::placeholder":
                      pc(
                        dc(e, {
                          props: [Zs(t, /:(plac\w+)/, ":" + Fs + "input-$1")],
                        })
                      ),
                        pc(
                          dc(e, {
                            props: [Zs(t, /:(plac\w+)/, ":" + js + "$1")],
                          })
                        ),
                        pc(
                          dc(e, {
                            props: [Zs(t, /:(plac\w+)/, zs + "input-$1")],
                          })
                        ),
                        pc(dc(e, { props: [t] })),
                        qs(e, { props: ac(n, r) });
                  }
                  return "";
                });
          }
      }
      function Oc(e) {
        return wc(Ac("", null, null, null, [""], (e = Sc(e)), 0, [0], e));
      }
      function Ac(e, t, n, r, a, o, i, l, u) {
        for (
          var s = 0,
            c = 0,
            f = i,
            d = 0,
            p = 0,
            h = 0,
            v = 1,
            m = 1,
            y = 1,
            g = 0,
            b = "",
            S = a,
            w = o,
            _ = r,
            k = b;
          m;

        )
          switch (((h = g), (g = vc()))) {
            case 40:
              if (108 != h && 58 == Js(k, f - 1)) {
                -1 != Xs((k += Zs(_c(g), "&", "&\f")), "&\f") && (y = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              k += _c(g);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              k += kc(h);
              break;
            case 92:
              k += Ec(yc() - 1, 7);
              continue;
            case 47:
              switch (mc()) {
                case 42:
                case 47:
                  rc(Ic(Cc(vc(), yc()), t, n, u), u);
                  break;
                default:
                  k += "/";
              }
              break;
            case 123 * v:
              l[s++] = tc(k) * y;
            case 125 * v:
            case 59:
            case 0:
              switch (g) {
                case 0:
                case 125:
                  m = 0;
                case 59 + c:
                  -1 == y && (k = Zs(k, /\f/g, "")),
                    p > 0 &&
                      tc(k) - f &&
                      rc(
                        p > 32
                          ? Mc(k + ";", r, n, f - 1, u)
                          : Mc(Zs(k, " ", "") + ";", r, n, f - 2, u),
                        u
                      );
                  break;
                case 59:
                  k += ";";
                default:
                  if (
                    (rc(
                      (_ = Dc(
                        k,
                        t,
                        n,
                        s,
                        c,
                        a,
                        l,
                        b,
                        (S = []),
                        (w = []),
                        f,
                        o
                      )),
                      o
                    ),
                    123 === g)
                  )
                    if (0 === c) Ac(k, t, _, _, S, o, f, l, w);
                    else
                      switch (99 === d && 110 === Js(k, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          Ac(
                            e,
                            _,
                            _,
                            r &&
                              rc(
                                Dc(e, _, _, 0, 0, a, l, b, a, (S = []), f, w),
                                w
                              ),
                            a,
                            w,
                            f,
                            l,
                            r ? S : w
                          );
                          break;
                        default:
                          Ac(k, _, _, _, [""], w, 0, l, w);
                      }
              }
              (s = c = p = 0), (v = y = 1), (b = k = ""), (f = i);
              break;
            case 58:
              (f = 1 + tc(k)), (p = h);
            default:
              if (v < 1)
                if (123 == g) --v;
                else if (125 == g && 0 == v++ && 125 == hc()) continue;
              switch (((k += Gs(g)), g * v)) {
                case 38:
                  y = c > 0 ? 1 : ((k += "\f"), -1);
                  break;
                case 44:
                  (l[s++] = (tc(k) - 1) * y), (y = 1);
                  break;
                case 64:
                  45 === mc() && (k += _c(vc())),
                    (d = mc()),
                    (c = f = tc((b = k += Tc(yc())))),
                    g++;
                  break;
                case 45:
                  45 === h && 2 == tc(k) && (v = 0);
              }
          }
        return o;
      }
      function Dc(e, t, n, r, a, o, i, l, u, s, c, f) {
        for (
          var d = a - 1, p = 0 === a ? o : [""], h = nc(p), v = 0, m = 0, y = 0;
          v < r;
          ++v
        )
          for (
            var g = 0, b = ec(e, d + 1, (d = Ks((m = i[v])))), S = e;
            g < h;
            ++g
          )
            (S = Qs(m > 0 ? p[g] + " " + b : Zs(b, /&\f/g, p[g]))) &&
              (u[y++] = S);
        return fc(e, t, n, 0 === a ? Vs : l, u, s, c, f);
      }
      function Ic(e, t, n, r) {
        return fc(e, t, n, Us, Gs(sc), ec(e, 2, -2), 0, r);
      }
      function Mc(e, t, n, r, a) {
        return fc(e, t, n, Bs, ec(e, 0, r), ec(e, r + 1, -1), r, a);
      }
      var zc = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        jc =
          ("undefined" != typeof process &&
            void 0 !==
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              } &&
            ({
              NODE_ENV: "production",
              PUBLIC_URL: "",
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
            }.REACT_APP_SC_ATTR ||
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_ATTR)) ||
          "data-styled",
        Fc = "undefined" != typeof window && "HTMLElement" in window,
        Uc = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY
            ? "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.REACT_APP_SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.REACT_APP_SC_DISABLE_SPEEDY
            : "undefined" != typeof process &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                } &&
              void 0 !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              "false" !==
                {
                  NODE_ENV: "production",
                  PUBLIC_URL: "",
                  WDS_SOCKET_HOST: void 0,
                  WDS_SOCKET_PATH: void 0,
                  WDS_SOCKET_PORT: void 0,
                  FAST_REFRESH: !0,
                }.SC_DISABLE_SPEEDY &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.SC_DISABLE_SPEEDY
        ),
        Vc = (new Set(), Object.freeze([])),
        Bc = Object.freeze({});
      function Wc(e, t, n) {
        return (
          void 0 === n && (n = Bc),
          (e.theme !== n.theme && e.theme) || t || n.theme
        );
      }
      var Hc = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        $c = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Kc = /(^-|-$)/g;
      function Gc(e) {
        return e.replace($c, "-").replace(Kc, "");
      }
      var qc = /(a)(d)/gi,
        Qc = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Yc(e) {
        var t,
          n = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Qc(t % 52) + n;
        return (Qc(t % 52) + n).replace(qc, "$1-$2");
      }
      var Zc,
        Xc = function (e, t) {
          for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
          return e;
        },
        Jc = function (e) {
          return Xc(5381, e);
        };
      function ef(e) {
        return Yc(Jc(e) >>> 0);
      }
      function tf(e) {
        return "string" == typeof e && !0;
      }
      var nf = "function" == typeof Symbol && Symbol.for,
        rf = nf ? Symbol.for("react.memo") : 60115,
        af = nf ? Symbol.for("react.forward_ref") : 60112,
        of = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        lf = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        uf = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        sf =
          (((Zc = {})[af] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (Zc[rf] = uf),
          Zc);
      function cf(e) {
        return ("type" in (t = e) && t.type.$$typeof) === rf
          ? uf
          : "$$typeof" in e
          ? sf[e.$$typeof]
          : of;
        var t;
      }
      var ff = Object.defineProperty,
        df = Object.getOwnPropertyNames,
        pf = Object.getOwnPropertySymbols,
        hf = Object.getOwnPropertyDescriptor,
        vf = Object.getPrototypeOf,
        mf = Object.prototype;
      function yf(e, t, n) {
        if ("string" != typeof t) {
          if (mf) {
            var r = vf(t);
            r && r !== mf && yf(e, r, n);
          }
          var a = df(t);
          pf && (a = a.concat(pf(t)));
          for (var o = cf(e), i = cf(t), l = 0; l < a.length; ++l) {
            var u = a[l];
            if (!(u in lf || (n && n[u]) || (i && u in i) || (o && u in o))) {
              var s = hf(t, u);
              try {
                ff(e, u, s);
              } catch (e) {}
            }
          }
        }
        return e;
      }
      function gf(e) {
        return "function" == typeof e;
      }
      function bf(e) {
        return "object" == typeof e && "styledComponentId" in e;
      }
      function Sf(e, t) {
        return e && t ? "".concat(e, " ").concat(t) : e || t || "";
      }
      function wf(e, t) {
        if (0 === e.length) return "";
        for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
        return n;
      }
      function _f(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          e.constructor.name === Object.name &&
          !("props" in e && e.$$typeof)
        );
      }
      function kf(e, t, n) {
        if ((void 0 === n && (n = !1), !n && !_f(e) && !Array.isArray(e)))
          return t;
        if (Array.isArray(t))
          for (var r = 0; r < t.length; r++) e[r] = kf(e[r], t[r]);
        else if (_f(t)) for (var r in t) e[r] = kf(e[r], t[r]);
        return e;
      }
      function Ef(e, t) {
        Object.defineProperty(e, "toString", { value: t });
      }
      function xf(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return new Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(e, " for more information.")
            .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
        );
      }
      var Cf = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          return (
            (e.prototype.indexOfGroup = function (e) {
              for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
              return t;
            }),
            (e.prototype.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, r = n.length, a = r; e >= a; )
                  if ((a <<= 1) < 0) throw xf(16, "".concat(e));
                (this.groupSizes = new Uint32Array(a)),
                  this.groupSizes.set(n),
                  (this.length = a);
                for (var o = r; o < a; o++) this.groupSizes[o] = 0;
              }
              for (
                var i = this.indexOfGroup(e + 1), l = ((o = 0), t.length);
                o < l;
                o++
              )
                this.tag.insertRule(i, t[o]) && (this.groupSizes[e]++, i++);
            }),
            (e.prototype.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  r = n + t;
                this.groupSizes[e] = 0;
                for (var a = n; a < r; a++) this.tag.deleteRule(n);
              }
            }),
            (e.prototype.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var n = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  a = r + n,
                  o = r;
                o < a;
                o++
              )
                t += "".concat(this.tag.getRule(o)).concat("/*!sc*/\n");
              return t;
            }),
            e
          );
        })(),
        Tf = new Map(),
        Rf = new Map(),
        Nf = 1,
        Pf = function (e) {
          if (Tf.has(e)) return Tf.get(e);
          for (; Rf.has(Nf); ) Nf++;
          var t = Nf++;
          return Tf.set(e, t), Rf.set(t, e), t;
        },
        Lf = function (e, t) {
          Tf.set(e, t), Rf.set(t, e);
        },
        Of = "style["
          .concat(jc, "][")
          .concat("data-styled-version", '="')
          .concat("6.0.4", '"]'),
        Af = new RegExp(
          "^".concat(jc, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        Df = function (e, t, n) {
          for (var r, a = n.split(","), o = 0, i = a.length; o < i; o++)
            (r = a[o]) && e.registerName(t, r);
        },
        If = function (e, t) {
          for (
            var n,
              r = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(
                "/*!sc*/\n"
              ),
              a = [],
              o = 0,
              i = r.length;
            o < i;
            o++
          ) {
            var l = r[o].trim();
            if (l) {
              var u = l.match(Af);
              if (u) {
                var s = 0 | parseInt(u[1], 10),
                  c = u[2];
                0 !== s &&
                  (Lf(c, s), Df(e, c, u[3]), e.getTag().insertRules(s, a)),
                  (a.length = 0);
              } else a.push(l);
            }
          }
        };
      function Mf() {
        return n.nc;
      }
      var zf = function (e) {
          var t = document.head,
            n = e || t,
            r = document.createElement("style"),
            a = (function (e) {
              var t = Array.from(e.querySelectorAll("style[".concat(jc, "]")));
              return t[t.length - 1];
            })(n),
            o = void 0 !== a ? a.nextSibling : null;
          r.setAttribute(jc, "active"),
            r.setAttribute("data-styled-version", "6.0.4");
          var i = Mf();
          return i && r.setAttribute("nonce", i), n.insertBefore(r, o), r;
        },
        jf = (function () {
          function e(e) {
            (this.element = zf(e)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, n = 0, r = t.length;
                  n < r;
                  n++
                ) {
                  var a = t[n];
                  if (a.ownerNode === e) return a;
                }
                throw xf(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (e.prototype.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return t && t.cssText ? t.cssText : "";
            }),
            e
          );
        })(),
        Ff = (function () {
          function e(e) {
            (this.element = zf(e)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var n = document.createTextNode(t);
                return (
                  this.element.insertBefore(n, this.nodes[e] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (e.prototype.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        Uf = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (e.prototype.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (e.prototype.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (e.prototype.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        Vf = Fc,
        Bf = { isServer: !Fc, useCSSOMInjection: !Uc },
        Wf = (function () {
          function e(e, t, n) {
            void 0 === e && (e = Bc), void 0 === t && (t = {});
            var r = this;
            (this.options = As(As({}, Bf), e)),
              (this.gs = t),
              (this.names = new Map(n)),
              (this.server = !!e.isServer),
              !this.server &&
                Fc &&
                Vf &&
                ((Vf = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(Of), n = 0, r = t.length;
                    n < r;
                    n++
                  ) {
                    var a = t[n];
                    a &&
                      "active" !== a.getAttribute(jc) &&
                      (If(e, a), a.parentNode && a.parentNode.removeChild(a));
                  }
                })(this)),
              Ef(this, function () {
                return (function (e) {
                  for (
                    var t = e.getTag(),
                      n = t.length,
                      r = "",
                      a = function (n) {
                        var a = (function (e) {
                          return Rf.get(e);
                        })(n);
                        if (void 0 === a) return "continue";
                        var o = e.names.get(a),
                          i = t.getGroup(n);
                        if (void 0 === o || 0 === i.length) return "continue";
                        var l = ""
                            .concat(jc, ".g")
                            .concat(n, '[id="')
                            .concat(a, '"]'),
                          u = "";
                        void 0 !== o &&
                          o.forEach(function (e) {
                            e.length > 0 && (u += "".concat(e, ","));
                          }),
                          (r += ""
                            .concat(i)
                            .concat(l, '{content:"')
                            .concat(u, '"}')
                            .concat("/*!sc*/\n"));
                      },
                      o = 0;
                    o < n;
                    o++
                  )
                    a(o);
                  return r;
                })(r);
              });
          }
          return (
            (e.registerId = function (e) {
              return Pf(e);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
              return (
                void 0 === n && (n = !0),
                new e(
                  As(As({}, this.options), t),
                  this.gs,
                  (n && this.names) || void 0
                )
              );
            }),
            (e.prototype.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((e = (function (e) {
                    var t = e.useCSSOMInjection,
                      n = e.target;
                    return e.isServer ? new Uf(n) : t ? new jf(n) : new Ff(n);
                  })(this.options)),
                  new Cf(e)))
              );
              var e;
            }),
            (e.prototype.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (e.prototype.registerName = function (e, t) {
              if ((Pf(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var n = new Set();
                n.add(t), this.names.set(e, n);
              }
            }),
            (e.prototype.insertRules = function (e, t, n) {
              this.registerName(e, t), this.getTag().insertRules(Pf(e), n);
            }),
            (e.prototype.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (e.prototype.clearRules = function (e) {
              this.getTag().clearGroup(Pf(e)), this.clearNames(e);
            }),
            (e.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            e
          );
        })(),
        Hf = /&/g,
        $f = /^\s*\/\/.*$/gm;
      function Kf(e, t) {
        return e.map(function (e) {
          return (
            "rule" === e.type &&
              ((e.value = "".concat(t, " ").concat(e.value)),
              (e.value = e.value.replaceAll(",", ",".concat(t, " "))),
              (e.props = e.props.map(function (e) {
                return "".concat(t, " ").concat(e);
              }))),
            Array.isArray(e.children) &&
              "@keyframes" !== e.type &&
              (e.children = Kf(e.children, t)),
            e
          );
        });
      }
      function Gf(e) {
        var t,
          n,
          r,
          a = void 0 === e ? Bc : e,
          o = a.options,
          i = void 0 === o ? Bc : o,
          l = a.plugins,
          u = void 0 === l ? Vc : l,
          s = function (e, r, a) {
            return a === n ||
              (a.startsWith(n) &&
                a.endsWith(n) &&
                a.replaceAll(n, "").length > 0)
              ? ".".concat(t)
              : e;
          },
          c = u.slice();
        c.push(function (e) {
          e.type === Vs &&
            e.value.includes("&") &&
            (e.props[0] = e.props[0].replace(Hf, n).replace(r, s));
        }),
          i.prefix && c.push(Lc),
          c.push(Nc);
        var f = function (e, a, o, l) {
          void 0 === a && (a = ""),
            void 0 === o && (o = ""),
            void 0 === l && (l = "&"),
            (t = l),
            (n = a),
            (r = new RegExp("\\".concat(n, "\\b"), "g"));
          var u = e.replace($f, ""),
            s = Oc(
              o || a ? "".concat(o, " ").concat(a, " { ").concat(u, " }") : u
            );
          i.namespace && (s = Kf(s, i.namespace));
          var f,
            d = [];
          return (
            Rc(
              s,
              (function (e) {
                var t = nc(e);
                return function (n, r, a, o) {
                  for (var i = "", l = 0; l < t; l++)
                    i += e[l](n, r, a, o) || "";
                  return i;
                };
              })(
                c.concat(
                  ((f = function (e) {
                    return d.push(e);
                  }),
                  function (e) {
                    e.root || ((e = e.return) && f(e));
                  })
                )
              )
            ),
            d
          );
        };
        return (
          (f.hash = u.length
            ? u
                .reduce(function (e, t) {
                  return t.name || xf(15), Xc(e, t.name);
                }, 5381)
                .toString()
            : ""),
          f
        );
      }
      var qf = new Wf(),
        Qf = Gf(),
        Yf = t.createContext({
          shouldForwardProp: void 0,
          styleSheet: qf,
          stylis: Qf,
        }),
        Zf = (Yf.Consumer, t.createContext(void 0));
      function Xf() {
        return (0, t.useContext)(Yf);
      }
      function Jf(e) {
        var n = (0, t.useState)(e.stylisPlugins),
          r = n[0],
          a = n[1],
          o = Xf().styleSheet,
          i = (0, t.useMemo)(
            function () {
              var t = o;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target, o]
          ),
          l = (0, t.useMemo)(
            function () {
              return Gf({
                options: {
                  namespace: e.namespace,
                  prefix: e.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [e.enableVendorPrefixes, e.namespace, r]
          );
        return (
          (0, t.useEffect)(
            function () {
              Ms()(r, e.stylisPlugins) || a(e.stylisPlugins);
            },
            [e.stylisPlugins]
          ),
          t.createElement(
            Yf.Provider,
            {
              value: {
                shouldForwardProp: e.shouldForwardProp,
                styleSheet: i,
                stylis: l,
              },
            },
            t.createElement(Zf.Provider, { value: l }, e.children)
          )
        );
      }
      var ed = (function () {
          function e(e, t) {
            var n = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = Qf);
              var r = n.name + t.hash;
              e.hasNameForId(n.id, r) ||
                e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
            }),
              (this.name = e),
              (this.id = "sc-keyframes-".concat(e)),
              (this.rules = t),
              Ef(this, function () {
                throw xf(12, String(n.name));
              });
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = Qf), this.name + e.hash;
            }),
            e
          );
        })(),
        td = function (e) {
          return e >= "A" && e <= "Z";
        };
      function nd(e) {
        for (var t = "", n = 0; n < e.length; n++) {
          var r = e[n];
          if (1 === n && "-" === r && "-" === e[0]) return e;
          td(r) ? (t += "-" + r.toLowerCase()) : (t += r);
        }
        return t.startsWith("ms-") ? "-" + t : t;
      }
      var rd = function (e) {
          return null == e || !1 === e || "" === e;
        },
        ad = function e(t) {
          var n,
            r,
            a = [];
          for (var o in t) {
            var i = t[o];
            t.hasOwnProperty(o) &&
              !rd(i) &&
              ((Array.isArray(i) && i.isCss) || gf(i)
                ? a.push("".concat(nd(o), ":"), i, ";")
                : _f(i)
                ? a.push.apply(
                    a,
                    Ds(Ds(["".concat(o, " {")], e(i), !1), ["}"], !1)
                  )
                : a.push(
                    ""
                      .concat(nd(o), ": ")
                      .concat(
                        ((n = o),
                        null == (r = i) || "boolean" == typeof r || "" === r
                          ? ""
                          : "number" != typeof r ||
                            0 === r ||
                            n in zc ||
                            n.startsWith("--")
                          ? String(r).trim()
                          : "".concat(r, "px")),
                        ";"
                      )
                  ));
          }
          return a;
        };
      function od(e, t, n, r) {
        return rd(e)
          ? []
          : bf(e)
          ? [".".concat(e.styledComponentId)]
          : gf(e)
          ? !gf((a = e)) || (a.prototype && a.prototype.isReactComponent) || !t
            ? [e]
            : od(e(t), t, n, r)
          : e instanceof ed
          ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
          : _f(e)
          ? ad(e)
          : Array.isArray(e)
          ? Array.prototype.concat.apply(
              Vc,
              e.map(function (e) {
                return od(e, t, n, r);
              })
            )
          : [e.toString()];
        var a;
      }
      function id(e) {
        for (var t = 0; t < e.length; t += 1) {
          var n = e[t];
          if (gf(n) && !bf(n)) return !1;
        }
        return !0;
      }
      var ld = Jc("6.0.4"),
        ud = (function () {
          function e(e, t, n) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === n || n.isStatic) && id(e)),
              (this.componentId = t),
              (this.baseHash = Xc(ld, t)),
              (this.baseStyle = n),
              Wf.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, n) {
              var r = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(e, t, n)
                : "";
              if (this.isStatic && !n.hash)
                if (
                  this.staticRulesId &&
                  t.hasNameForId(this.componentId, this.staticRulesId)
                )
                  r = Sf(r, this.staticRulesId);
                else {
                  var a = wf(od(this.rules, e, t, n)),
                    o = Yc(Xc(this.baseHash, a) >>> 0);
                  if (!t.hasNameForId(this.componentId, o)) {
                    var i = n(a, ".".concat(o), void 0, this.componentId);
                    t.insertRules(this.componentId, o, i);
                  }
                  (r = Sf(r, o)), (this.staticRulesId = o);
                }
              else {
                for (
                  var l = Xc(this.baseHash, n.hash), u = "", s = 0;
                  s < this.rules.length;
                  s++
                ) {
                  var c = this.rules[s];
                  if ("string" == typeof c) u += c;
                  else if (c) {
                    var f = wf(od(c, e, t, n));
                    (l = Xc(l, f)), (u += f);
                  }
                }
                if (u) {
                  var d = Yc(l >>> 0);
                  t.hasNameForId(this.componentId, d) ||
                    t.insertRules(
                      this.componentId,
                      d,
                      n(u, ".".concat(d), void 0, this.componentId)
                    ),
                    (r = Sf(r, d));
                }
              }
              return r;
            }),
            e
          );
        })(),
        sd = t.createContext(void 0);
      sd.Consumer;
      var cd = {};
      new Set();
      function fd(e, n, r) {
        var a = bf(e),
          o = e,
          i = !tf(e),
          l = n.attrs,
          u = void 0 === l ? Vc : l,
          s = n.componentId,
          c =
            void 0 === s
              ? (function (e, t) {
                  var n = "string" != typeof e ? "sc" : Gc(e);
                  cd[n] = (cd[n] || 0) + 1;
                  var r = "".concat(n, "-").concat(ef("6.0.4" + n + cd[n]));
                  return t ? "".concat(t, "-").concat(r) : r;
                })(n.displayName, n.parentComponentId)
              : s,
          f = n.displayName,
          d =
            (void 0 === f &&
              (function (e) {
                tf(e)
                  ? "styled.".concat(e)
                  : "Styled(".concat(
                      (function (e) {
                        return e.displayName || e.name || "Component";
                      })(e),
                      ")"
                    );
              })(e),
            n.displayName && n.componentId
              ? "".concat(Gc(n.displayName), "-").concat(n.componentId)
              : n.componentId || c),
          p = a && o.attrs ? o.attrs.concat(u).filter(Boolean) : u,
          h = n.shouldForwardProp;
        if (a && o.shouldForwardProp) {
          var v = o.shouldForwardProp;
          if (n.shouldForwardProp) {
            var m = n.shouldForwardProp;
            h = function (e, t) {
              return v(e, t) && m(e, t);
            };
          } else h = v;
        }
        var y = new ud(r, d, a ? o.componentStyle : void 0);
        var g = t.forwardRef(function (e, n) {
          return (function (e, n, r) {
            var a = e.attrs,
              o = e.componentStyle,
              i = e.defaultProps,
              l = e.foldedComponentIds,
              u = e.styledComponentId,
              s = e.target,
              c = t.useContext(sd),
              f = Xf(),
              d = e.shouldForwardProp || f.shouldForwardProp,
              p = (function (e, t, n) {
                for (
                  var r,
                    a = As(As({}, t), { className: void 0, theme: n }),
                    o = 0;
                  o < e.length;
                  o += 1
                ) {
                  var i = gf((r = e[o])) ? r(a) : r;
                  for (var l in i)
                    a[l] =
                      "className" === l
                        ? Sf(a[l], i[l])
                        : "style" === l
                        ? As(As({}, a[l]), i[l])
                        : i[l];
                }
                return (
                  t.className && (a.className = Sf(a.className, t.className)), a
                );
              })(a, n, Wc(n, c, i) || Bc),
              h = p.as || s,
              v = {};
            for (var m in p)
              void 0 === p[m] ||
                "$" === m[0] ||
                "as" === m ||
                "theme" === m ||
                ("forwardedAs" === m
                  ? (v.as = p.forwardedAs)
                  : (d && !d(m, h)) || (v[m] = p[m]));
            var y = (function (e, t) {
                var n = Xf();
                return e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
              })(o, p),
              g = Sf(l, u);
            return (
              y && (g += " " + y),
              p.className && (g += " " + p.className),
              (v[tf(h) && !Hc.has(h) ? "class" : "className"] = g),
              (v.ref = r),
              (0, t.createElement)(h, v)
            );
          })(g, e, n);
        });
        return (
          (g.attrs = p),
          (g.componentStyle = y),
          (g.shouldForwardProp = h),
          (g.foldedComponentIds = a
            ? Sf(o.foldedComponentIds, o.styledComponentId)
            : ""),
          (g.styledComponentId = d),
          (g.target = a ? o.target : e),
          Object.defineProperty(g, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = a
                ? (function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                      t[n - 1] = arguments[n];
                    for (var r = 0, a = t; r < a.length; r++) kf(e, a[r], !0);
                    return e;
                  })({}, o.defaultProps, e)
                : e;
            },
          }),
          Ef(g, function () {
            return ".".concat(g.styledComponentId);
          }),
          i &&
            yf(g, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          g
        );
      }
      function dd(e, t) {
        for (var n = [e[0]], r = 0, a = t.length; r < a; r += 1)
          n.push(t[r], e[r + 1]);
        return n;
      }
      var pd = function (e) {
        return Object.assign(e, { isCss: !0 });
      };
      function hd(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        if (gf(e) || _f(e)) return pd(od(dd(Vc, Ds([e], t, !0))));
        var r = e;
        return 0 === t.length && 1 === r.length && "string" == typeof r[0]
          ? od(r)
          : pd(od(dd(r, t)));
      }
      function vd(e, t, n) {
        if ((void 0 === n && (n = Bc), !t)) throw xf(1, t);
        var r = function (r) {
          for (var a = [], o = 1; o < arguments.length; o++)
            a[o - 1] = arguments[o];
          return e(t, n, hd.apply(void 0, Ds([r], a, !1)));
        };
        return (
          (r.attrs = function (r) {
            return vd(
              e,
              t,
              As(As({}, n), {
                attrs: Array.prototype.concat(n.attrs, r).filter(Boolean),
              })
            );
          }),
          (r.withConfig = function (r) {
            return vd(e, t, As(As({}, n), r));
          }),
          r
        );
      }
      var md = function (e) {
          return vd(fd, e);
        },
        yd = md;
      Hc.forEach(function (e) {
        yd[e] = md(e);
      });
      !(function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = id(e)),
            Wf.registerId(this.componentId + 1);
        }
        (e.prototype.createStyles = function (e, t, n, r) {
          var a = r(wf(od(this.rules, t, n, r)), ""),
            o = this.componentId + e;
          n.insertRules(o, o, a);
        }),
          (e.prototype.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (e.prototype.renderStyles = function (e, t, n, r) {
            e > 2 && Wf.registerId(this.componentId + e),
              this.removeStyles(e, n),
              this.createStyles(e, t, n, r);
          });
      })();
      (function () {
        function e() {
          var e = this;
          (this._emitSheetCSS = function () {
            var t = e.instance.toString(),
              n = Mf(),
              r = wf(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(jc, '="true"'),
                  "".concat("data-styled-version", '="').concat("6.0.4", '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(r, ">").concat(t, "</style>");
          }),
            (this.getStyleTags = function () {
              if (e.sealed) throw xf(2);
              return e._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              var n;
              if (e.sealed) throw xf(2);
              var r =
                  (((n = {})[jc] = ""),
                  (n["data-styled-version"] = "6.0.4"),
                  (n.dangerouslySetInnerHTML = {
                    __html: e.instance.toString(),
                  }),
                  n),
                a = Mf();
              return (
                a && (r.nonce = a),
                [t.createElement("style", As({}, r, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              e.sealed = !0;
            }),
            (this.instance = new Wf({ isServer: !0 })),
            (this.sealed = !1);
        }
        (e.prototype.collectStyles = function (e) {
          if (this.sealed) throw xf(2);
          return t.createElement(Jf, { sheet: this.instance }, e);
        }),
          (e.prototype.interleaveWithNodeStream = function (e) {
            throw xf(3);
          });
      })(),
        "__sc-".concat(jc, "__");
      var gd,
        bd,
        Sd,
        wd,
        _d,
        kd,
        Ed,
        xd,
        Cd,
        Td,
        Rd,
        Nd,
        Pd,
        Ld = yd.div(
          gd ||
            (gd = Os([
              "\n  display: flex;\n  box-sizing: border-box;\n\n  padding: 250px;\n",
            ]))
        ),
        Od = yd.div(
          bd || (bd = Os(["\n  display: flex;\n  flex-direction: row;\n"]))
        ),
        Ad = yd.div(Sd || (Sd = Os([""]))),
        Dd = yd.text(
          wd ||
            (wd = Os([
              "\n  margin-left: 10px;\n  margin-bottom: 2px;\n\n  font-weight: bold;\n",
            ]))
        ),
        Id = yd.div(
          _d ||
            (_d = Os([
              "\n  width: 205px;\n  height: 275px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  text-align: center;\n  font-weight: bold;\n  color: #bfbfbf;\n\n  background-color: #eeeeee;\n  border-radius: 5px;\n  img {\n    width: 200px;\n    height: 200px;\n  }\n",
            ]))
        ),
        Md = yd.div(
          kd ||
            (kd = Os([
              "\n  display: flex;\n  flex-direction: column;\n\n  margin-left: 35px;\n",
            ]))
        ),
        zd = yd.input(
          Ed ||
            (Ed = Os([
              "\n  width: 600px;\n  height: 60px;\n\n  background-color: #eeeeee;\n  border: 0;\n  border-radius: 5px;\n\n  font-size: 20px;\n\n  padding-left: 10px;\n  margin-bottom: 38px;\n",
            ]))
        ),
        jd = yd.div(
          xd ||
            (xd = Os([
              "\n  position: absolute;\n  align-items: center;\n\n  text-align: center;\n\n  bottom: 20px;\n\n  width: 200px;\n",
            ]))
        ),
        Fd = yd.div(
          Cd ||
            (Cd = Os([
              "\n  /* display: flex;\n  flex-direction: column;\n\n  position: relative; */\n  width: 200px;\n  height: 300px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  position: relative;\n  align-items: center;\n",
            ]))
        ),
        Ud = yd.div(
          Td ||
            (Td = Os([
              "\n  /* background-color: #eeeeee; */\n  border-radius: 5px;\n\n  width: 200px;\n  height: 270px;\n\n  /* background-color: red;\n  background-blend-mode: multiply; */\n",
            ]))
        ),
        Vd = yd.div(
          Rd ||
            (Rd = Os([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
            ]))
        ),
        Bd = yd.div(
          Nd ||
            (Nd = Os([
              "\n  display: flex;\n\n  gap: 14px;\n  button {\n    width: 195px;\n    height: 70px;\n    border: 0;\n    border-radius: 5px;\n\n    margin-bottom: 14px;\n  }\n",
            ]))
        ),
        Wd = yd.div(
          Pd ||
            (Pd = Os([
              "\n  width: 200px;\n  height: 300px;\n  background: linear-gradient(#00000000 50px, #000000dd);\n  position: absolute;\n\n  margin-top: -310px;\n  border-radius: 5px;\n",
            ]))
        ),
        Hd = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        $d = t.createContext && t.createContext(Hd),
        Kd = function () {
          return (
            (Kd =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            Kd.apply(this, arguments)
          );
        },
        Gd = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function qd(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, Kd({ key: n }, e.attr), qd(e.child));
          })
        );
      }
      function Qd(e) {
        return function (n) {
          return t.createElement(
            Yd,
            Kd({ attr: Kd({}, e.attr) }, n),
            qd(e.child)
          );
        };
      }
      function Yd(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            o = e.size,
            i = e.title,
            l = Gd(e, ["attr", "size", "title"]),
            u = o || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              Kd(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                l,
                {
                  className: r,
                  style: Kd(
                    Kd({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: u,
                  width: u,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && t.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== $d
          ? t.createElement($d.Consumer, null, function (e) {
              return n(e);
            })
          : n(Hd);
      }
      function Zd(e) {
        return Qd({
          tag: "svg",
          attr: { viewBox: "0 0 1024 1024" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",
              },
            },
          ],
        })(e);
      }
      var Xd,
        Jd,
        ep,
        tp,
        np,
        rp,
        ap,
        op,
        ip,
        lp,
        up,
        sp,
        cp,
        fp,
        dp,
        pp,
        hp,
        vp = n.p + "static/media/gallery.ceb396c4d049b34538cbd321a45c7115.svg",
        mp = n(184),
        yp = function () {
          var e = Ls(),
            n = e.imgRef,
            r = e.onClickImg,
            a = e.onUpload,
            o = e.TitleChange,
            i = e.ImageColor,
            l = s(us(ss), 2),
            u = l[0],
            c = (l[1], s(us(cs), 2)),
            f = c[0],
            d = (c[1], s((0, t.useState)(""), 2)),
            p = d[0],
            h = d[1],
            v = s(us(fs), 2),
            m = v[0];
          v[1];
          return (
            console.log(m),
            (0, t.useEffect)(
              function () {
                u && i();
              },
              [u]
            ),
            (0, mp.jsx)(mp.Fragment, {
              children: (0, mp.jsxs)(Ld, {
                children: [
                  (0, mp.jsx)("input", {
                    type: "file",
                    ref: n,
                    style: { display: "none" },
                    onChange: function (e) {
                      return a(e);
                    },
                  }),
                  (0, mp.jsxs)(Od, {
                    children: [
                      (0, mp.jsxs)(Ad, {
                        children: [
                          (0, mp.jsx)(Dd, {
                            children: "\ub300\ud45c \uc774\ubbf8\uc9c0",
                          }),
                          (0, mp.jsxs)(Id, {
                            onClick: r,
                            children: [
                              (0, mp.jsx)("img", { src: vp }),
                              "\ud074\ub9ad\ud574\uc11c \uc774\ubbf8\uc9c0\ub97c ",
                              (0, mp.jsx)("br", {}),
                              "\uc5c5\ub85c\ub4dc \ud574\uc8fc\uc138\uc694",
                            ],
                          }),
                        ],
                      }),
                      (0, mp.jsx)("div", {
                        style: { display: "flex", alignItems: "center" },
                        children: (0, mp.jsx)(Zd, {
                          size: 30,
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            marginRight: "10px",
                          },
                        }),
                      }),
                      (0, mp.jsxs)(Fd, {
                        children: [
                          (0, mp.jsx)(Dd, {
                            children: "\ub300\ud45c \uc774\ubbf8\uc9c0",
                          }),
                          (0, mp.jsxs)(Ud, {
                            children: [
                              (0, mp.jsx)("img", {
                                src: u || vp,
                                style: {
                                  width: "200px",
                                  height: "270px",
                                  borderRadius: "5px",
                                },
                              }),
                              (0, mp.jsx)(Wd, {
                                color: m ? "Color.hex" : "#ff0000",
                              }),
                              (0, mp.jsx)(jd, {
                                style: {
                                  fontFamily: p,
                                  fontSize: "30px",
                                  color: "white",
                                },
                                children: f,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, mp.jsxs)(Md, {
                    children: [
                      (0, mp.jsx)(Dd, { children: "\uc81c\ubaa9" }),
                      (0, mp.jsx)(zd, { onChange: o }),
                      (0, mp.jsx)(Dd, { children: "\uc81c\ubaa9" }),
                      (0, mp.jsxs)(Vd, {
                        children: [
                          (0, mp.jsxs)(Bd, {
                            children: [
                              (0, mp.jsx)("button", {
                                onClick: function () {
                                  return h("PyeongChangPeace-Bold");
                                },
                                style: {
                                  fontFamily: "PyeongChangPeace-Bold",
                                  fontSize: "30px",
                                },
                                children: f,
                              }),
                              (0, mp.jsx)("button", {
                                onClick: function () {
                                  return h("PyeongChangPeace-Light");
                                },
                                style: {
                                  fontFamily: "PyeongChangPeace-Light",
                                  fontSize: "30px",
                                },
                                children: f,
                              }),
                              (0, mp.jsx)("button", {
                                onClick: function () {
                                  return h("Tenada");
                                },
                                style: {
                                  fontFamily: "Tenada",
                                  fontSize: "30px",
                                },
                                children: f,
                              }),
                            ],
                          }),
                          (0, mp.jsxs)(Bd, {
                            children: [
                              (0, mp.jsx)("button", {
                                onClick: function () {
                                  return h("insungitCutelivelyjisu");
                                },
                                style: {
                                  fontFamily: "insungitCutelivelyjisu",
                                  fontSize: "30px",
                                },
                                children: f,
                              }),
                              (0, mp.jsx)("button", {
                                onClick: function () {
                                  return h("SF_HambakSnow");
                                },
                                style: {
                                  fontFamily: "SF_HambakSnow",
                                  fontSize: "30px",
                                },
                                children: f,
                              }),
                              (0, mp.jsx)("button", {
                                onClick: function () {
                                  return h("Cafe24Ohsquare");
                                },
                                style: {
                                  fontFamily: "Cafe24Ohsquare",
                                  fontSize: "30px",
                                },
                                children: f,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        gp = n.p + "static/media/bga.48ef203f380f75a8fae0.png",
        bp = n.p + "static/media/tnaw.632025c6a77caa8fe27b.png",
        Sp = yd.div(
          Xd ||
            (Xd = Os([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n\n  grid-template-columns: 3fr 1fr;\n",
            ]))
        ),
        wp = yd.img(
          Jd ||
            (Jd = Os([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n",
            ]))
        ),
        _p = yd.div(ep || (ep = Os(["\n  display: flex;\n"]))),
        kp = yd.div(
          tp ||
            (tp = Os([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 220px;\n    height: auto;\n    max-width: 100%;\n    max-height: 240px;\n    z-index: 2;\n  }\n",
            ]))
        ),
        Ep = yd.div(
          np ||
            (np = Os([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 118%;\n  height: 100%;\n  background-color: #ffffff;\n  border-radius: 30px;\n  margin-top: -30px;\n",
            ]))
        ),
        xp = yd.div(
          rp ||
            (rp = Os([
              "\n  font-size: 28px;\n  font-weight: bold;\n\n  margin-top: 40px;\n  margin-bottom: 20px;\n",
            ]))
        ),
        Cp = yd.div(
          ap ||
            (ap = Os([
              "\n  display: flex;\n  justify-content: center;\n  text-align: center;\n\n  font-size: 17px;\n\n  margin-bottom: 20px;\n",
            ]))
        ),
        Tp = yd.button(
          op ||
            (op = Os([
              "\n  background-color: #3e86f7;\n  width: 320px;\n  height: 45px;\n  border: 0;\n  border-radius: 30px;\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n\n  margin-bottom: 10px;\n\n  &:hover {\n    opacity: 0.8;\n  }\n",
            ]))
        ),
        Rp = yd.div(
          ip ||
            (ip = Os([
              "\n  display: flex;\n  width: 295px;\n  justify-content: flex-end;\n\n  margin-top: -20px;\n\n  font-size: 12px;\n\n  margin-bottom: 30px;\n",
            ]))
        ),
        Np = yd.div(
          lp ||
            (lp = Os([
              "\n  color: #3e86f7;\n  border-bottom: 1px solid #3e86f7;\n\n  margin-bottom: 20px;\n\n  cursor: pointer;\n\n  &:hover {\n    opacity: 0.8;\n  }\n",
            ]))
        ),
        Pp = function () {
          var e = be();
          return (0, mp.jsx)(mp.Fragment, {
            children: (0, mp.jsxs)(Sp, {
              children: [
                (0, mp.jsx)(_p, { children: (0, mp.jsx)(wp, { src: gp }) }),
                (0, mp.jsxs)(kp, {
                  children: [
                    (0, mp.jsx)("img", { src: bp }),
                    (0, mp.jsxs)(Ep, {
                      children: [
                        (0, mp.jsx)(xp, {
                          children:
                            "\uc791\uac00\ub2d8, \uc548\ub155\ud558\uc138\uc694!",
                        }),
                        (0, mp.jsxs)(Cp, {
                          children: [
                            "\uc800\ud76c\ub294 \uace0\ub4f1\ud559\uc0dd \uac1c\ubc1c\ud300 \ud504\ub85c\uadf8\ub798\uc2a4\uc785\ub2c8\ub2e4.",
                            (0, mp.jsx)("br", {}),
                            (0, mp.jsx)("br", {}),
                            "\ud230\uac8c\ub354\ub294 \uc791\uac00\uc758 \ud50c\ub7ab\ud3fc \uc758\uc874\uc131\uc744 \uc81c\uac70\ud55c",
                            (0, mp.jsx)("br", {}),
                            "\uc6f9\ud230 \uc790\uc720 \uc5f0\uc7ac \uc11c\ube44\uc2a4\uc785\ub2c8\ub2e4",
                            (0, mp.jsx)("br", {}),
                            (0, mp.jsx)("br", {}),
                            "\ub9d0 \uadf8\ub300\ub85c, \uc815\uc2dd \uc5f0\uc7ac \uac00\ub2a5\ud55c \ub3c4\uc804\ub9cc\ud654\uc8e0.",
                            (0, mp.jsx)("br", {}),
                            (0, mp.jsx)("br", {}),
                            "\ud300 \ud504\ub85c\uadf8\ub798\uc2a4\uac00 \uc57c\uc2ec\ucc28\uac8c \uc900\ube44\ud55c \ud230\uac8c\ub354\ub294",
                            (0, mp.jsx)("br", {}),
                            "*MVP \ubc29\uc2dd\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud560 \uc608\uc815\uc785\ub2c8\ub2e4.",
                          ],
                        }),
                        (0, mp.jsx)(Rp, {
                          children: "*Minimum Viable Product ",
                        }),
                        (0, mp.jsxs)(Cp, {
                          children: [
                            "\uc774\ub97c \uc704\ud574\uc11c \uc5ec\ub7ec\ubd84\uc758 \ub2e8\ud3b8\ub9cc\ud654\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.",
                            (0, mp.jsx)("br", {}),
                            (0, mp.jsx)("br", {}),
                            "\uc7a5\ub974\uac00 \ubd88\ubd84\uba85\ud574\ub3c4, \ud004\ub9ac\ud2f0\uac00 \ub0ae\uc544\ub3c4 \uad1c\ucc2e\uc73c\ub2c8",
                            (0, mp.jsx)("br", {}),
                            "\ub9cc\ud654\ub97c \uc81c\uacf5\ud574\uc8fc\uc2dc\uba74 \uac10\uc0ac\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.",
                            (0, mp.jsx)("br", {}),
                            (0, mp.jsx)("br", {}),
                            "\ud604\uc7ac \uc900\ube44\ub41c \uae30\ub2a5\uc740 \ub2e8\ud3b8 \ub9cc\ud654\ubc16\uc5d0 \uc5c6\uc9c0\ub9cc,",
                            (0, mp.jsx)("br", {}),
                            "\uc774\ud6c4 \ub354 \ub9ce\uc740 \uae30\ub2a5\ub4e4\uc744 \ucd94\uac00\ud560 \uacc4\ud68d\uc785\ub2c8\ub2e4.",
                            (0, mp.jsx)("br", {}),
                            (0, mp.jsx)("br", {}),
                            "\ub9ce\uc740 \uad00\uc2ec \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4. \uac10\uc0ac\ud569\ub2c8\ub2e4!",
                          ],
                        }),
                        (0, mp.jsx)(Tp, {
                          onClick: function () {
                            return e("/download");
                          },
                          children:
                            "\ud230\uac8c\ub354 \ubca0\ud0c0 \ud14c\uc2a4\ud2b8 \ucc38\uac00\ud558\uae30",
                        }),
                        (0, mp.jsx)(Np, {
                          onClick: function () {
                            return window.open(
                              "https://docs.google.com/forms/d/e/1FAIpQLSen6jOv1uYnDb8Rb5KHVl0dIonHYsWb9WUryIYPapDc4cP9YA/viewform"
                            );
                          },
                          children:
                            "\ub2e8\ud3b8\ub9cc\ud654 \uc81c\uacf5\ud558\uae30",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Lp = function () {
          return (0, mp.jsx)(mp.Fragment, { children: (0, mp.jsx)(Pp, {}) });
        },
        Op = yd.div(
          up ||
            (up = Os([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n",
            ]))
        ),
        Ap = yd.img(
          sp ||
            (sp = Os([
              "\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n",
            ]))
        ),
        Dp = yd.div(cp || (cp = Os(["\n  display: flex;\n"]))),
        Ip = yd.div(
          fp ||
            (fp = Os([
              "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  /* flex-direction: column; */\n",
            ]))
        ),
        Mp = yd.div(
          dp ||
            (dp = Os([
              "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  width: 345px;\n  height: 215px;\n\n  background-color: #ffffff;\n\n  border-radius: 30px;\n",
            ]))
        ),
        zp = yd.div(
          pp ||
            (pp = Os([
              "\n  font-size: 25px;\n  font-weight: bold;\n\n  margin-bottom: 20px;\n\n  margin-top: 5px;\n",
            ]))
        ),
        jp = yd.button(
          hp ||
            (hp = Os([
              "\n  background-color: ",
              ";\n  border: 0;\n\n  color: white;\n  font-weight: bold;\n\n  width: 265px;\n  height: 42px;\n\n  border-radius: 30px;\n\n  margin-bottom: 10px;\n\n  &:hover {\n    opacity: 0.8;\n    transition: 0.2s ease-out;\n  }\n",
            ])),
          function (e) {
            return e.ButtonProps ? "#3e86f7" : "#0f0a0a";
          }
        ),
        Fp = function () {
          return (0, mp.jsx)(mp.Fragment, {
            children: (0, mp.jsxs)(Op, {
              children: [
                (0, mp.jsx)(Dp, { children: (0, mp.jsx)(Ap, { src: gp }) }),
                (0, mp.jsx)(Ip, {
                  children: (0, mp.jsxs)(Mp, {
                    children: [
                      (0, mp.jsx)(zp, {
                        children:
                          "\ud230\uac8c\ub354 \ubca0\ud0c0 \ud14c\uc2a4\ud2b8",
                      }),
                      (0, mp.jsx)(jp, {
                        ButtonProps: !0,
                        onClick: function () {
                          return window.open("https://android.toongether.kr");
                        },
                        children: "Google Play",
                      }),
                      (0, mp.jsx)(jp, {
                        ButtonProps: !1,
                        onClick: function () {
                          return window.open("https://android.toongether.kr");
                        },
                        children: "App Store",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Up = n.p + "static/media/Coming Soon.4cca4f5acb99a6cf3abb.png",
        Vp = n.p + "static/media/Toon.d28209e890e001c4a120.png",
        Bp = n.p + "static/media/Ge.c492e8d02c7eda979567.png",
        Wp = n.p + "static/media/Ther.b0f6f45d9cac6d300626.png",
        Hp = n.p + "static/media/Toonie.847c59c2b230ab20765e.png",
        $p = function () {
          return (0, mp.jsx)("div", {
            className: "test",
            children: (0, mp.jsxs)("div", {
              className: "box",
              children: [
                (0, mp.jsxs)("div", {
                  className: "textbox",
                  children: [
                    (0, mp.jsx)("img", {
                      src: Up,
                      className: "subtitle animate t0",
                    }),
                    (0, mp.jsxs)("div", {
                      className: "titlebox",
                      children: [
                        (0, mp.jsx)("img", {
                          src: Vp,
                          className: "title animate t1",
                        }),
                        (0, mp.jsx)("img", {
                          src: Bp,
                          className: "title animate t2",
                        }),
                        (0, mp.jsx)("img", {
                          src: Wp,
                          className: "title animate t3",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, mp.jsx)("img", { src: Hp, className: "image animate t4" }),
              ],
            }),
          });
        },
        Kp = function () {
          return (0, mp.jsx)(mp.Fragment, { children: (0, mp.jsx)($p, {}) });
        };
      function Gp() {
        return (0, mp.jsxs)(De, {
          children: [
            (0, mp.jsx)(Oe, { path: "/", element: (0, mp.jsx)(Kp, {}) }),
            (0, mp.jsx)(Oe, { path: "/beta", element: (0, mp.jsx)(Lp, {}) }),
            (0, mp.jsx)(Oe, {
              path: "/download",
              element: (0, mp.jsx)(Fp, {}),
            }),
            (0, mp.jsx)(Oe, {
              path: "/titlemaker",
              element: (0, mp.jsx)(yp, {}),
            }),
          ],
        });
      }
      var qp = function () {
          return (0, mp.jsx)(is, {
            children: (0, mp.jsx)(je, { children: (0, mp.jsx)(Gp, {}) }),
          });
        },
        Qp = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  o = t.getLCP,
                  i = t.getTTFB;
                n(e), r(e), a(e), o(e), i(e);
              });
        };
      a
        .createRoot(document.getElementById("root"))
        .render((0, mp.jsx)(t.StrictMode, { children: (0, mp.jsx)(qp, {}) })),
        Qp();
    })();
})();
//# sourceMappingURL=main.dcee235e.js.map
