(function(e) {
  function t(t) {
    for (
      var o, u, i = t[0], s = t[1], l = t[2], c = 0, f = [];
      c < i.length;
      c++
    )
      (u = i[c]),
        Object.prototype.hasOwnProperty.call(r, u) && r[u] && f.push(r[u][0]),
        (r[u] = 0);
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    d && d(t);
    while (f.length) f.shift()();
    return a.push.apply(a, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, u = 1; u < n.length; u++) {
        var s = n[u];
        0 !== r[s] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    r = { app: 0 },
    a = [];
  function u(e) {
    return (
      i.p +
      "static/js/" +
      ({ about: "about" }[e] || e) +
      "." +
      { about: "6b14e141" }[e] +
      ".js"
    );
  }
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function(e) {
    var t = [],
      n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function(t, o) {
          n = r[e] = [t, o];
        });
        t.push((n[2] = o));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          (s.src = u(e));
        var l = new Error();
        a = function(t) {
          (s.onerror = s.onload = null), clearTimeout(c);
          var n = r[e];
          if (0 !== n) {
            if (n) {
              var o = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = o),
                (l.request = a),
                n[1](l);
            }
            r[e] = void 0;
          }
        };
        var c = setTimeout(function() {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = o),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/"),
    (i.oe = function(e) {
      throw (console.error(e), e);
    });
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var d = l;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "034f": function(e, t, n) {
    "use strict";
    var o = n("64a9"),
      r = n.n(o);
    r.a;
  },
  1: function(e, t) {},
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var o = n("2b0e"),
      r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n(
              "div",
              { attrs: { id: "nav" } },
              [
                n("router-link", { attrs: { to: "/" } }, [e._v("Home")]),
                e._v(" |\n    "),
                n("router-link", { attrs: { to: "/about" } }, [e._v("About")]),
              ],
              1
            ),
            n("router-view"),
          ],
          1
        );
      },
      a = [],
      u = (n("034f"), n("2877")),
      i = {},
      s = Object(u["a"])(i, r, a, !1, null, null, null),
      l = s.exports,
      c = n("8c4f"),
      d = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { staticClass: "home" },
          [
            n(
              "el-row",
              { attrs: { display: "margin-top:10px" } },
              [
                n(
                  "el-col",
                  { attrs: { span: 4 } },
                  [
                    n("el-input", {
                      attrs: { placeholder: "请输入城市名称" },
                      model: {
                        value: e.name,
                        callback: function(t) {
                          e.name = t;
                        },
                        expression: "name",
                      },
                    }),
                  ],
                  1
                ),
                n(
                  "el-col",
                  { attrs: { span: 4 } },
                  [
                    n("el-input", {
                      attrs: { placeholder: "请输入城市代码" },
                      model: {
                        value: e.code,
                        callback: function(t) {
                          e.code = t;
                        },
                        expression: "code",
                      },
                    }),
                  ],
                  1
                ),
                n(
                  "el-button",
                  {
                    attrs: { type: "primary" },
                    on: {
                      click: function(t) {
                        return e.addCity(e.name, e.code);
                      },
                    },
                  },
                  [e._v("新增城市")]
                ),
              ],
              1
            ),
            n(
              "el-row",
              [
                n(
                  "el-table",
                  {
                    staticStyle: { width: "100%" },
                    attrs: { data: e.cityList, border: "" },
                  },
                  [
                    n("el-table-column", {
                      attrs: { prop: "id", label: "编号", "min-width": "100" },
                      scopedSlots: e._u([
                        {
                          key: "default",
                          fn: function(t) {
                            return [e._v(e._s(t.row.pk))];
                          },
                        },
                      ]),
                    }),
                    n("el-table-column", {
                      attrs: {
                        prop: "city_name",
                        label: "城市名称",
                        "min-width": "100",
                      },
                      scopedSlots: e._u([
                        {
                          key: "default",
                          fn: function(t) {
                            return [e._v(e._s(t.row.fields.city_name))];
                          },
                        },
                      ]),
                    }),
                    n("el-table-column", {
                      attrs: {
                        prop: "city_code",
                        label: "城市代码",
                        "min-width": "100",
                      },
                      scopedSlots: e._u([
                        {
                          key: "default",
                          fn: function(t) {
                            return [e._v(e._s(t.row.fields.city_code))];
                          },
                        },
                      ]),
                    }),
                    n("el-table-column", {
                      attrs: {
                        prop: "create_time",
                        label: "创建时间",
                        "min-width": "100",
                      },
                      scopedSlots: e._u([
                        {
                          key: "default",
                          fn: function(t) {
                            return [e._v(e._s(t.row.fields.create_time))];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      f = [],
      p = {
        name: "home",
        data: function() {
          return { name: "", code: 0, cityList: [] };
        },
        methods: {
          fetchList: function() {
            var e = this;
            this.$http.get("/api/city_list").then(function(t) {
              console.log(t.body),
                100 == t.body.code
                  ? (e.$message({
                      type: "success",
                      showClose: !0,
                      message: "加载成功",
                    }),
                    (e.cityList = t.body.data))
                  : e.$message({
                      type: "error",
                      showClose: !0,
                      message: "加载失败",
                    });
            });
          },
          addCity: function(e, t) {
            var n = this,
              o = { params: { city_name: e, city_code: t }, emulateJSON: !0 };
            this.$http.get("/api/add_city", o).then(function(e) {
              console.log(e.body),
                100 == e.body.code
                  ? (n.$message({
                      type: "success",
                      showClose: !0,
                      message: "添加成功",
                    }),
                    n.fetchList())
                  : n.$message({
                      type: "error",
                      showClose: !0,
                      message: "添加失败",
                    });
            });
          },
        },
        mounted: function() {
          this.fetchList();
        },
      },
      m = p,
      h = Object(u["a"])(m, d, f, !1, null, null, null),
      y = h.exports;
    o["default"].use(c["a"]);
    var b = new c["a"]({
        mode: "history",
        base: "/",
        routes: [
          { path: "/", name: "home", component: y },
          {
            path: "/about",
            name: "about",
            component: function() {
              return n.e("about").then(n.bind(null, "f820"));
            },
          },
        ],
      }),
      v = n("2f62");
    o["default"].use(v["a"]);
    var _ = new v["a"].Store({ state: {}, mutations: {}, actions: {} }),
      w = n("28dd"),
      g = n("5c96"),
      k = n.n(g);
    n("0fae");
    (o["default"].config.productionTip = !1),
      o["default"].use(w["a"]),
      o["default"].use(k.a),
      new o["default"]({
        router: b,
        store: _,
        render: function(e) {
          return e(l);
        },
      }).$mount("#app");
  },
  "64a9": function(e, t, n) {},
});
//# sourceMappingURL=app.9aa0ad8e.js.map
