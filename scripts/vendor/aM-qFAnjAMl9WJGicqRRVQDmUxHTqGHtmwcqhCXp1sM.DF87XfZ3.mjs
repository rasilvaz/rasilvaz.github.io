import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  j as o,
  l as s,
  o as c,
  w as l,
  y as ee,
} from "./react.CWOg5Z1e.mjs";
import { a as u, r as te, t as d, x as f } from "./motion.D-FJ70EG.mjs";
import {
  C as p,
  D as m,
  F as h,
  H as g,
  I as _,
  _ as v,
  a as y,
  at as b,
  b as x,
  c as S,
  ct as ne,
  et as C,
  ft as w,
  ht as T,
  i as E,
  it as re,
  k as D,
  rt as ie,
  st as ae,
  x as O,
} from "./framer.C5e9eYQm.mjs";
import { c as k, d as A, f as j, l as oe, p as M, u as se } from "./shared-lib.DP-o-NQ_.mjs";
import { n as N, t as P } from "./B_lXogcCo.D4R2Xl6V.mjs";
import { i as F, n as I, r as L, t as R } from "./JapXF6IZs.DF51XpHv.mjs";
import z, { t as B } from "./kHala7GiJ_9bP2nQihlMhjfsXDxFobCPjT7i7PARSew.D2SZaKo5.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    g(),
    d(),
    l(),
    oe(),
    N(),
    F(),
    M(),
    B(),
    (V = h(k)),
    (H = h(P)),
    (U = {
      kDrqoIa1c: `(max-width: 809.98px)`,
      lHLpFVw1W: `(min-width: 1200px)`,
      Vh2gqP0hR: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (W = []),
    (G = `framer-2eSRu`),
    (K = {
      kDrqoIa1c: `framer-v-17x50yh`,
      lHLpFVw1W: `framer-v-15povpx`,
      Vh2gqP0hR: `framer-v-duwq4p`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `lHLpFVw1W`, Phone: `kDrqoIa1c`, Tablet: `Vh2gqP0hR` }),
    (X = ({ value: e }) =>
      b()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `lHLpFVw1W`,
    })),
    (Q = T(
      a(function (e, a) {
        let c = n(null),
          l = a ?? c,
          d = ee(),
          { activeLocale: p, setLocale: h } = ae(),
          g = C(),
          { style: _, className: b, layoutId: T, variant: D, ...A } = Z(e);
        ne(o(() => z({}, p), [p]));
        let [j, oe] = re(D, U, !1),
          M = m(G, R, se),
          N = t(S)?.isLayoutTemplate,
          F = !!t(u)?.transition?.layout,
          I = q(N, F);
        return (
          w(),
          ie({}),
          i(S.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: Y,
              primaryVariantId: `lHLpFVw1W`,
              variantClassNames: K,
            },
            children: s(te, {
              id: T ?? d,
              children: [
                i(X, { value: `html body { background: rgb(0, 0, 0); }` }),
                s(f.div, {
                  ...A,
                  className: m(M, `framer-15povpx`, b),
                  ref: l,
                  style: { ..._ },
                  children: [
                    i(E, {
                      children: i(y, {
                        className: `framer-gkhvv8-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: I,
                        nodeId: `lHXFVoV0q`,
                        scopeId: `yKwUkyLH0`,
                        children: i(k, {
                          height: `100%`,
                          id: `lHXFVoV0q`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `lHXFVoV0q`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    i(f.main, {
                      className: `framer-h7xzee`,
                      "data-framer-name": `Main`,
                      layout: I,
                      children: s(`section`, {
                        className: `framer-ubf2v3`,
                        "data-framer-name": `404`,
                        children: [
                          i(`div`, {
                            className: `framer-s6juhl`,
                            "data-framer-name": `Content`,
                            children: i(O, {
                              __fromCanvasComponent: !0,
                              children: i(r, {
                                children: i(`h1`, {
                                  className: `framer-styles-preset-y8m40v`,
                                  "data-styles-preset": `JapXF6IZs`,
                                  children: `404`,
                                }),
                              }),
                              className: `framer-1trob92`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          i(O, {
                            __fromCanvasComponent: !0,
                            children: i(r, {
                              children: i(`p`, {
                                className: `framer-styles-preset-fd9xae`,
                                "data-styles-preset": `Z8Dl3fozE`,
                                style: { "--framer-text-alignment": `center` },
                                children: `Ooops! Looks like the page you’re looking for doesn’t exist or has been moved.`,
                              }),
                            }),
                            className: `framer-8rnks9`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          i(x, {
                            links: [
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              i(v, {
                                breakpoint: j,
                                overrides: {
                                  kDrqoIa1c: { y: (g?.y || 0) + 0 + 200 + 0 + 414.52 + 0 + 136.96 },
                                  Vh2gqP0hR: { y: (g?.y || 0) + 0 + 200 + 382.52 + 0 + 200.96 },
                                },
                                children: i(E, {
                                  height: 34,
                                  y: (g?.y || 0) + 0 + 200 + 414.52 + 0 + 136.96,
                                  children: i(y, {
                                    className: `framer-4uvnkz-container`,
                                    nodeId: `moLwfmYRG`,
                                    scopeId: `yKwUkyLH0`,
                                    children: i(v, {
                                      breakpoint: j,
                                      overrides: {
                                        kDrqoIa1c: { emf17Ghk6: e[2] },
                                        Vh2gqP0hR: { emf17Ghk6: e[1] },
                                      },
                                      children: i(P, {
                                        diqXIFWgT: `Back to home`,
                                        emf17Ghk6: e[0],
                                        height: `100%`,
                                        id: `moLwfmYRG`,
                                        layoutId: `moLwfmYRG`,
                                        tMzAyfqlM: !1,
                                        variant: J(`y6veoWTpm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2eSRu.framer-12e75nq, .framer-2eSRu .framer-12e75nq { display: block; }`,
        `.framer-2eSRu.framer-15povpx { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-2eSRu .framer-gkhvv8-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-2eSRu .framer-h7xzee { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-2eSRu .framer-ubf2v3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-2eSRu .framer-s6juhl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-2eSRu .framer-1trob92 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2eSRu .framer-8rnks9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 260px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-2eSRu .framer-4uvnkz-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...I,
        ...A,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-2eSRu.framer-15povpx { width: 810px; } .framer-2eSRu .framer-8rnks9 { width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-2eSRu.framer-15povpx { width: 390px; } .framer-2eSRu .framer-h7xzee { flex-direction: column; } .framer-2eSRu .framer-ubf2v3 { flex: none; width: 100%; }}`,
      ],
      `framer-2eSRu`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1062, width: 1200 }),
    p(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...V,
        ...H,
        ..._(L),
        ..._(j),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([D(P, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameryKwUkyLH0`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `1062`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Vh2gqP0hR":{"layout":["fixed","auto"]},"kDrqoIa1c":{"layout":["fixed","auto"]}}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=aM-qFAnjAMl9WJGicqRRVQDmUxHTqGHtmwcqhCXp1sM.DF87XfZ3.mjs.map
