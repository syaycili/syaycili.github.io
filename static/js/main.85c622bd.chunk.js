(this.webpackJsonpcleanfolio = this.webpackJsonpcleanfolio || []).push([
  [0],
  {
    26: function (e, t, c) {},
    32: function (e, t, c) {},
    33: function (e, t, c) {},
    35: function (e, t, c) {},
    36: function (e, t, c) {},
    37: function (e, t, c) {},
    38: function (e, t, c) {},
    39: function (e, t, c) {},
    40: function (e, t, c) {},
    41: function (e, t, c) {},
    42: function (e, t, c) {},
    44: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(9),
        a = c(3),
        i = c(1),
        s = c(0),
        l = Object(i.createContext)(),
        r = function (e) {
          var t = e.children,
            c = Object(i.useState)("light"),
            n = Object(a.a)(c, 2),
            r = n[0],
            o = n[1];
          Object(i.useEffect)(function () {
            var e = window.matchMedia("(prefers-color-scheme: dark)");
            o(e.matches ? "dark" : "light"),
              e.addEventListener("change", function (e) {
                o(e.matches ? "dark" : "light");
              });
          }, []);
          return Object(s.jsx)(l.Provider, {
            value: [
              {
                themeName: r,
                toggleTheme: function () {
                  var e = "dark" === r ? "light" : "dark";
                  localStorage.setItem("themeName", e), o(e);
                },
              },
            ],
            children: t,
          });
        },
        o = "https://syaycili.github.io/",
        j = "SY",
        b = "Sarp Yayc\u0131l\u0131",
        u = "Full Stack Developer",
        m =
          "T\xfcrk E\u011fitim Vakf\u0131 \u0130nan\xe7 T\xfcrke\u015f \xd6zel Lisesi 12. S\u0131n\u0131f \xf6\u011frencisi ve Full Stack Developer. PHP \xfczerinden web uygulamalar\u0131 geli\u015ftirmekteyim. Projelerimde Laravel ve Vue.js kullanmaktay\u0131m.",
        h = "https://syaycili.github.io/sarpyaycili_cv.docx",
        d = { linkedin: "https://www.linkedin.com/in/sarpyaycili/", github: "https://github.com/syaycili/" },
        p = [
          {
            name: "fishmust.live",
            description:
              "\u0066\u0069\u0073\u0068\u006d\u0075\u0073\u0074\u002e\u006c\u0069\u0076\u0065\u003b \u006b\u0075\u006c\u006c\u0061\u006e\u0131\u0063\u0131\u006c\u0061\u0072\u0131\u006e \u0070\u006c\u0061\u0073\u0074\u0069\u006b \u006b\u0069\u0072\u006c\u0069\u006c\u0069\u011f\u0069 \u0061\u006c\u0061\u006e\u006c\u0061\u0072\u0131\u006e\u0131 \u0068\u0061\u0072\u0069\u0074\u0061\u0064\u0061 \u0067\u00f6\u0072\u0065\u0062\u0069\u006c\u0065\u0063\u0065\u011f\u0069\u002c \u0067\u00f6\u0072\u0064\u00fc\u006b\u006c\u0065\u0072\u0069 \u0070\u006c\u0061\u0073\u0074\u0069\u006b \u006b\u0069\u0072\u006c\u0069\u006c\u0069\u006b\u006c\u0065\u0072\u0069\u006e\u0069 \u006b\u006f\u006e\u0075\u006d\u006c\u0061\u0072\u0131 \u0069\u006c\u0065 \u0070\u0061\u0079\u006c\u0061\u015f\u0061\u0062\u0069\u006c\u0065\u0063\u0065\u006b\u006c\u0065\u0072\u0069\u002c \u0064\u0069\u011f\u0065\u0072 \u006b\u0075\u006c\u006c\u0061\u006e\u0131\u0063\u0131\u006c\u0061\u0072\u0131\u006e \u0070\u0061\u0079\u006c\u0061\u015f\u0074\u0131\u011f\u0131 \u0070\u006c\u0061\u0073\u0074\u0069\u006b \u006b\u0069\u0072\u006c\u0069\u006c\u0069\u006b\u006c\u0065\u0072\u0069\u006e\u0069 \u0067\u00f6\u0072\u0065\u0062\u0069\u006c\u0065\u0063\u0065\u006b\u006c\u0065\u0072\u0069 \u0062\u0069\u0072 \u0073\u006f\u0073\u0079\u0061\u006c \u0066\u0061\u0072\u006b\u0131\u006e\u0064\u0061\u006c\u0131\u006b \u0073\u0069\u0074\u0065\u0073\u0069\u0064\u0069\u0072\u002e",
            stack: ["PHP", "Laravel", "AWS", "CSS", "Bootstrap", "Javascript", "Mapbox API", "MySQL"],
            sourceCode: "https://github.com/syaycili/fishmustlive",
            livePreview: "https://fishmust.live"
          },
          {
            name: "meetuptoteamup.com",
            description:
              "meetuptoteamup.com kullan\u0131c\u0131lar\u0131n tak\u0131m arkada\u015flar\u0131 bulmas\u0131na, tak\u0131m kurmas\u0131na ve birbirleri ile ileti\u015fim halinde projeler geli\u015ftirmesine yard\u0131mc\u0131 olan online bir platformdur.",
            stack: ["Laravel", "Vue.js", "MySQL"],
            sourceCode: "https://github.com/syaycili/meetuptoteamup",
            livePreview: "https://meetuptoteamup.com",
          },
          {
            name: "matcevap.ninja",
            description:
              "Matcevap.ninja kullan\u0131c\u0131lar\u0131n matematik \xf6devlerinde yard\u0131m alabilece\u011fi ve di\u011fer kullan\u0131c\u0131lara yard\u0131m edebilece\u011fi, soru payla\u015f\u0131m platformudur.",
            stack: ["PHP", "HTML", "CSS", "Javascript"],
            sourceCode: "https://www.github.com/syaycili/matcevap.ninja",
            livePreview: "https://matcevap.ninja/",
          },
          {
            name: "Hexagon Tak\u0131m Sitesi",
            description:
              "Hexagon Robotik Tak\u0131m\u0131n\u0131n resmi web sitesi. HTML, CSS ve Javascript ile yap\u0131lm\u0131\u015f statik web sitesi.",
            stack: ["HTML", "CSS", "Javascript"],
            sourceCode: "https://github.com/syaycili/Hexagon-Web-App",
            livePreview: "https://hexagon-vex.web.app/",
          },
        ],
        O = [
          "PHP",
          "Laravel",
          "Git",
          "HTML",
          "CSS",
          "JavaScript",
          "Vue",
          "Bootstrap",
          "Tailwind CSS",
          "MySQL",
          "Apache",
        ],
        x = "sarpyaycili@gmail.com",
        k = c(14),
        v = c.n(k),
        f = c(12),
        g = c.n(f),
        N = c(16),
        _ = c.n(N),
        y = c(15),
        w = c.n(y),
        S =
          (c(26),
          function () {
            var e = Object(i.useContext)(l),
              t = Object(a.a)(e, 1)[0],
              c = t.themeName,
              n = t.toggleTheme,
              r = Object(i.useState)(!1),
              o = Object(a.a)(r, 2),
              j = o[0],
              b = o[1],
              u = function () {
                return b(!j);
              };
            return Object(s.jsxs)("nav", {
              className: "center nav",
              children: [
                Object(s.jsxs)("ul", {
                  style: { display: j ? "flex" : null },
                  className: "nav__list",
                  children: [
                    p.length
                      ? Object(s.jsx)("li", {
                          className: "nav__list-item",
                          children: Object(s.jsx)("a", {
                            href: "#projects",
                            onClick: u,
                            className: "link link--nav",
                            children: "Projeler",
                          }),
                        })
                      : null,
                    O.length
                      ? Object(s.jsx)("li", {
                          className: "nav__list-item",
                          children: Object(s.jsx)("a", {
                            href: "#skills",
                            onClick: u,
                            className: "link link--nav",
                            children: "Yetenekler",
                          }),
                        })
                      : null,
                    x
                      ? Object(s.jsx)("li", {
                          className: "nav__list-item",
                          children: Object(s.jsx)("a", {
                            href: "#contact",
                            onClick: u,
                            className: "link link--nav",
                            children: "\u0130leti\u015fim",
                          }),
                        })
                      : null,
                  ],
                }),
                Object(s.jsx)("button", {
                  type: "button",
                  onClick: n,
                  className: "btn btn--icon nav__theme",
                  "aria-label": "toggle theme",
                  children: "dark" === c ? Object(s.jsx)(g.a, {}) : Object(s.jsx)(v.a, {}),
                }),
                Object(s.jsx)("button", {
                  type: "button",
                  onClick: u,
                  className: "btn btn--icon nav__hamburger",
                  "aria-label": "toggle navigation",
                  children: j ? Object(s.jsx)(w.a, {}) : Object(s.jsx)(_.a, {}),
                }),
              ],
            });
          }),
        C =
          (c(32),
          function () {
            var e = o,
              t = j;
            return Object(s.jsxs)("header", {
              className: "header center",
              children: [
                Object(s.jsx)("h3", {
                  children: e ? Object(s.jsx)("a", { href: e, className: "link", children: t }) : t,
                }),
                Object(s.jsx)(S, {}),
              ],
            });
          }),
        P = c(10),
        L = c.n(P),
        M = c(17),
        T = c.n(M),
        H =
          (c(33),
          function () {
            var e = b,
              t = u,
              c = m,
              n = h,
              a = d;
            return Object(s.jsxs)("div", {
              className: "about center",
              children: [
                e &&
                  Object(s.jsxs)("h1", {
                    children: [
                      "Merhaba, ben ",
                      Object(s.jsxs)("span", { className: "about__name", children: [e, "."] }),
                    ],
                  }),
                t && Object(s.jsxs)("h2", { className: "about__role", children: [t, "."] }),
                Object(s.jsx)("p", { className: "about__desc", children: c && c }),
                Object(s.jsxs)("div", {
                  className: "about__contact center",
                  children: [
                    n &&
                      Object(s.jsx)("a", {
                        href: n,
                        children: Object(s.jsx)("span", {
                          type: "button",
                          className: "btn btn--outline",
                          children: "\xd6zge\xe7mi\u015f",
                        }),
                      }),
                    a &&
                      Object(s.jsxs)(s.Fragment, {
                        children: [
                          a.github &&
                            Object(s.jsx)("a", {
                              href: a.github,
                              "aria-label": "github",
                              className: "link link--icon",
                              children: Object(s.jsx)(L.a, {}),
                            }),
                          a.linkedin &&
                            Object(s.jsx)("a", {
                              href: a.linkedin,
                              "aria-label": "linkedin",
                              className: "link link--icon",
                              children: Object(s.jsx)(T.a, {}),
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            });
          }),
        E = c(7),
        J = c.n(E),
        Y = c(18),
        z = c.n(Y),
        V =
          (c(35),
          function (e) {
            var t = e.project;
            return Object(s.jsxs)("div", {
              className: "project",
              children: [
                Object(s.jsx)("h3", { children: t.name }),
                Object(s.jsx)("p", { className: "project__description", children: t.description }),
                t.stack &&
                  Object(s.jsx)("ul", {
                    className: "project__stack",
                    children: t.stack.map(function (e) {
                      return Object(s.jsx)("li", { className: "project__stack-item", children: e }, J()());
                    }),
                  }),
                t.sourceCode &&
                  Object(s.jsx)("a", {
                    href: t.sourceCode,
                    "aria-label": "source code",
                    className: "link link--icon",
                    children: Object(s.jsx)(L.a, {}),
                  }),
                t.livePreview &&
                  Object(s.jsx)("a", {
                    href: t.livePreview,
                    "aria-label": "live preview",
                    className: "link link--icon",
                    children: Object(s.jsx)(z.a, {}),
                  }),
              ],
            });
          }),
        A =
          (c(36),
          function () {
            return p.length
              ? Object(s.jsxs)("section", {
                  id: "projects",
                  className: "section projects",
                  children: [
                    Object(s.jsx)("h2", { className: "section__title", children: "Projeler" }),
                    Object(s.jsx)("div", {
                      className: "projects__grid",
                      children: p.map(function (e) {
                        return Object(s.jsx)(V, { project: e }, J()());
                      }),
                    }),
                  ],
                })
              : null;
          }),
        F =
          (c(37),
          function () {
            return O.length
              ? Object(s.jsxs)("section", {
                  className: "section skills",
                  id: "skills",
                  children: [
                    Object(s.jsx)("h2", { className: "section__title", children: "Yetenekler" }),
                    Object(s.jsx)("ul", {
                      className: "skills__list",
                      children: O.map(function (e) {
                        return Object(s.jsx)(
                          "li",
                          { className: "skills__list-item btn btn--plain", children: e },
                          J()()
                        );
                      }),
                    }),
                  ],
                })
              : null;
          }),
        B = c(19),
        D = c.n(B),
        I =
          (c(38),
          function () {
            var e = Object(i.useState)(!1),
              t = Object(a.a)(e, 2),
              c = t[0],
              n = t[1];
            return (
              Object(i.useEffect)(function () {
                var e = function () {
                  return window.pageYOffset > 500 ? n(!0) : n(!1);
                };
                return (
                  window.addEventListener("scroll", e),
                  function () {
                    return window.removeEventListener("scroll", e);
                  }
                );
              }, []),
              c
                ? Object(s.jsx)("div", {
                    className: "scroll-top",
                    children: Object(s.jsx)("a", { href: "#top", children: Object(s.jsx)(D.a, { fontSize: "large" }) }),
                  })
                : null
            );
          }),
        Q =
          (c(39),
          function () {
            return x
              ? Object(s.jsxs)("section", {
                  className: "section contact center",
                  id: "contact",
                  children: [
                    Object(s.jsx)("h2", { className: "section__title", children: "\u0130LET\u0130\u015e\u0130M" }),
                    Object(s.jsx)("a", {
                      href: "mailto:".concat(x),
                      children: Object(s.jsx)("span", {
                        type: "button",
                        className: "btn btn--outline",
                        children: "Mail At",
                      }),
                    }),
                  ],
                })
              : null;
          }),
        G =
          (c(40),
          function () {
            return Object(s.jsx)("footer", {
              className: "footer",
              children: Object(s.jsx)("a", {
                href: "https://github.com/syaycili/syaycili.github.io",
                className: "link footer__link",
                children: "Made by \ud83d\udc96 Sarp Yayc\u0131l\u0131",
              }),
            });
          }),
        R =
          (c(41),
          function () {
            var e = Object(i.useContext)(l),
              t = Object(a.a)(e, 1)[0].themeName;
            return Object(s.jsxs)("div", {
              id: "top",
              className: "".concat(t, " app"),
              children: [
                Object(s.jsx)(C, {}),
                Object(s.jsxs)("main", {
                  children: [Object(s.jsx)(H, {}), Object(s.jsx)(A, {}), Object(s.jsx)(F, {}), Object(s.jsx)(Q, {})],
                }),
                Object(s.jsx)(I, {}),
                Object(s.jsx)(G, {}),
              ],
            });
          });
      c(42);
      Object(n.render)(Object(s.jsx)(r, { children: Object(s.jsx)(R, {}) }), document.getElementById("root"));
    },
  },
  [[44, 1, 2]],
]);
//# sourceMappingURL=main.85c622bd.chunk.js.map
