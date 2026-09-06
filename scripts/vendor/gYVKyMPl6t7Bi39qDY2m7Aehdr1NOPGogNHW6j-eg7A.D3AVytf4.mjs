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
  s as ee,
  w as l,
  y as u,
} from "./react.CWOg5Z1e.mjs";
import { a as d, r as f, t as p, x as m } from "./motion.D-FJ70EG.mjs";
import {
  $ as h,
  C as g,
  D as _,
  F as v,
  H as y,
  I as b,
  J as x,
  _ as S,
  _t as C,
  a as w,
  at as T,
  b as te,
  c as E,
  ct as ne,
  et as re,
  ft as D,
  g as O,
  ht as k,
  i as A,
  it as ie,
  k as j,
  mt as ae,
  n as oe,
  o as M,
  ot as se,
  rt as ce,
  st as le,
  ut as ue,
  vt as N,
  w as P,
  x as F,
} from "./framer.C5e9eYQm.mjs";
import {
  a as I,
  c as L,
  d as R,
  f as z,
  l as de,
  p as fe,
  s as pe,
  u as me,
} from "./shared-lib.DP-o-NQ_.mjs";
import { i as he, n as ge, r as B, t as V } from "./XHQHOXg25.Cykr4Eul.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./PGUUTVk8z.DjKrvA_d.mjs";
import xe, { t as Se } from "./LuNmeiNxNM-AVRmMrkifEFPKWrN74ht3bwDfFv5LGiQ.B-RZMEal.mjs";
function Ce(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H,
  U,
  W,
  G,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  K,
  Fe = e(() => {
    (c(),
      y(),
      p(),
      l(),
      fe(),
      (H = C(m.div)),
      (U = N(C(m.div))),
      (W = [`Kpp6XMgEZ`, `up7_zuOR0`, `JXgcBcMZQ`]),
      (G = `framer-k7wPU`),
      (we = {
        JXgcBcMZQ: `framer-v-lmymk9`,
        Kpp6XMgEZ: `framer-v-15v4sgh`,
        up7_zuOR0: `framer-v-pvuynw`,
      }),
      (Te = { duration: 0, type: `tween` }),
      (Ee = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (De = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Oe = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (ke = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ae = ({ value: e, children: n }) => {
        let r = t(d),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(d.Provider, { value: s, children: n });
      }),
      (je = m.create(r)),
      (Me = { Default: `Kpp6XMgEZ`, Hidden: `JXgcBcMZQ`, Loading: `up7_zuOR0` }),
      (Ne = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: Me[i.variant] ?? i.variant ?? `Kpp6XMgEZ`,
        Wld3NDzSj: e ?? i.Wld3NDzSj,
      })),
      (Pe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = k(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = u(),
            { activeLocale: ee, setLocale: l } = le();
          re();
          let { style: d, className: p, layoutId: g, variant: v, Wld3NDzSj: y, ...b } = Ne(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: E,
              setVariant: ne,
              variants: D,
            } = ae({
              cycleOrder: W,
              defaultVariant: `Kpp6XMgEZ`,
              ref: o,
              variant: v,
              variantClassNames: we,
            }),
            O = Pe(e, D),
            { activeVariantCallback: k, delay: A } = h(x),
            ie = k(async (...e) => {
              if ((E({ isPressed: !1 }), y && (await y(...e)) === !1)) return !1;
            }),
            j = [me],
            oe = () => x !== `JXgcBcMZQ`,
            M = _(G, ...j),
            se = () => x !== `up7_zuOR0`,
            ce = () => x === `up7_zuOR0`;
          return i(f, {
            id: g ?? c,
            children: i(je, {
              animate: D,
              initial: !1,
              children:
                oe() &&
                i(Ae, {
                  value: Te,
                  children: s(m.button, {
                    ...b,
                    ...w,
                    className: _(M, `framer-15v4sgh`, p, S),
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: O,
                    layoutId: `Kpp6XMgEZ`,
                    onTap: ie,
                    ref: o,
                    style: {
                      backgroundColor: `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 104,
                      borderBottomRightRadius: 104,
                      borderTopLeftRadius: 104,
                      borderTopRightRadius: 104,
                      ...d,
                    },
                    ...Ce({ up7_zuOR0: { "data-framer-name": `Loading` } }, x, T),
                    children: [
                      se() &&
                        i(F, {
                          __fromCanvasComponent: !0,
                          children: i(r, {
                            children: i(m.p, {
                              className: `framer-styles-preset-fd9xae`,
                              "data-styles-preset": `Z8Dl3fozE`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, rgb(0, 0, 0)))`,
                              },
                              children: `Load More`,
                            }),
                          }),
                          className: `framer-16zavgc`,
                          fonts: [`Inter`],
                          layoutDependency: O,
                          layoutId: `XG3tTZGj2`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, rgb(0, 0, 0))`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ce() &&
                        i(U, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Ee,
                          className: `framer-ltsmqx`,
                          "data-framer-appear-id": `ltsmqx`,
                          "data-framer-name": `Spinner`,
                          initial: De,
                          layoutDependency: O,
                          layoutId: `KhlgZ2Z6W`,
                          optimized: !0,
                          style: {
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          },
                          children: i(H, {
                            __framer__loop: ke,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: Oe,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-2205xd`,
                            "data-framer-name": `Conic`,
                            layoutDependency: O,
                            layoutId: `jGoggslBW`,
                            style: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(0, 0, 0) 342deg)`,
                            },
                            children: i(m.div, {
                              className: `framer-q5q78r`,
                              "data-framer-name": `Round`,
                              layoutDependency: O,
                              layoutId: `f4tWLj5ts`,
                              style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-k7wPU.framer-sr7fsp, .framer-k7wPU .framer-sr7fsp { display: block; }`,
          `.framer-k7wPU.framer-15v4sgh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 10px 20px 10px 20px; position: relative; width: min-content; }`,
          `.framer-k7wPU .framer-16zavgc { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-k7wPU .framer-ltsmqx { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-k7wPU .framer-2205xd { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-k7wPU .framer-q5q78r { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          ...R,
        ],
        `framer-k7wPU`
      )),
      (K.displayName = `Load More`),
      (K.defaultProps = { height: 36, width: 107 }),
      P(K, {
        variant: {
          options: [`Kpp6XMgEZ`, `up7_zuOR0`, `JXgcBcMZQ`],
          optionTitles: [`Default`, `Loading`, `Hidden`],
          title: `Variant`,
          type: M.Enum,
        },
        Wld3NDzSj: { title: `Click`, type: M.EventHandler },
      }),
      g(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...b(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  q,
  J,
  Y,
  Je,
  X,
  Ye,
  Z,
  Xe,
  Q,
  Ze,
  Qe,
  $,
  $e;
e(() => {
  (c(),
    y(),
    p(),
    l(),
    de(),
    he(),
    Fe(),
    ge(),
    I(),
    _e(),
    Se(),
    (Ie = v(L)),
    (Le = N(m.div)),
    (Re = C(m.div)),
    (ze = v(V)),
    (Be = v(K)),
    (Ve = N(m.section)),
    (He = v(B)),
    (Ue = {
      gIuAqnlvq: `(min-width: 810px) and (max-width: 1199.98px)`,
      I6ezNO_38: `(min-width: 1200px)`,
      sjoaCPfma: `(max-width: 809.98px)`,
    }),
    (We = () => typeof document < `u`),
    (Ge = []),
    (Ke = `framer-Q2pUm`),
    (qe = {
      gIuAqnlvq: `framer-v-en7fbs`,
      I6ezNO_38: `framer-v-1cjml3q`,
      sjoaCPfma: `framer-v-v0y823`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0.2, duration: 1, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Y = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (Je = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Ye = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Z = () => ({
      from: { alias: `y0qBj0vfA`, data: pe, type: `Collection` },
      select: [
        { collection: `y0qBj0vfA`, name: `PY4p1EU9a`, type: `Identifier` },
        { collection: `y0qBj0vfA`, name: `QLMqgvV2H`, type: `Identifier` },
        { collection: `y0qBj0vfA`, name: `AljuCQ0zt`, type: `Identifier` },
        { collection: `y0qBj0vfA`, name: `oYx4NddcW`, type: `Identifier` },
        { collection: `y0qBj0vfA`, name: `wEXmHv4ec`, type: `Identifier` },
        { collection: `y0qBj0vfA`, name: `id`, type: `Identifier` },
      ],
    })),
    (Xe = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = se(e, t, `y0qBj0vfA`);
      return n(ue(r), i, a);
    }),
    (Q = { Desktop: `I6ezNO_38`, Phone: `sjoaCPfma`, Tablet: `gIuAqnlvq` }),
    (Ze = ({ value: e }) =>
      T()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Qe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `I6ezNO_38`,
    })),
    ($ = k(
      a(function (e, a) {
        let c = n(null),
          l = a ?? c,
          p = u(),
          { activeLocale: g, setLocale: v } = le(),
          y = re(),
          { style: b, className: x, layoutId: C, variant: T, ...k } = Qe(e);
        ne(o(() => xe({}, g), [g]));
        let [j, ae] = ie(T, Ue, !1),
          { activeVariantCallback: M, delay: se } = h(void 0),
          ue = ({ loadMore: e }) =>
            M(async (...t) => {
              e();
            }),
          N = _(Ke, be),
          P = t(E)?.isLayoutTemplate,
          I = !!t(d)?.transition?.layout,
          R = q(P, I),
          z = () => !We() || j !== `sjoaCPfma`;
        return (
          D(),
          ce({}),
          i(E.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: Q,
              primaryVariantId: `I6ezNO_38`,
              variantClassNames: qe,
            },
            children: s(f, {
              id: C ?? p,
              children: [
                i(Ze, { value: `html body { background: rgb(0, 0, 0); }` }),
                s(m.div, {
                  ...k,
                  className: _(N, `framer-1cjml3q`, x),
                  ref: l,
                  style: { ...b },
                  children: [
                    i(A, {
                      children: i(w, {
                        className: `framer-ffabzg-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: R,
                        nodeId: `USwd0j2lm`,
                        scopeId: `yOSoLQHrx`,
                        children: i(L, {
                          height: `100%`,
                          id: `USwd0j2lm`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `USwd0j2lm`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    s(m.main, {
                      className: `framer-eova2g`,
                      "data-framer-name": `Main`,
                      layout: R,
                      children: [
                        i(`div`, {
                          className: `framer-rvkba7`,
                          "data-framer-name": `Header`,
                          children: s(Re, {
                            __framer__adjustPosition: !1,
                            __framer__offset: 0,
                            __framer__parallaxTransformEnabled: !0,
                            __framer__speed: 110,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-f0z3yj`,
                            "data-framer-name": `Title container`,
                            children: [
                              z() &&
                                i(`div`, {
                                  className: `framer-1dh36n3 hidden-v0y823`,
                                  "data-framer-name": `Spacer`,
                                }),
                              i(Le, {
                                animate: J,
                                className: `framer-gbyanq`,
                                "data-framer-appear-id": `gbyanq`,
                                "data-framer-name": `Title`,
                                initial: Y,
                                optimized: !0,
                                children: i(S, {
                                  breakpoint: j,
                                  overrides: {
                                    sjoaCPfma: {
                                      children: i(r, {
                                        children: i(`h1`, {
                                          className: `framer-styles-preset-ptn1wj`,
                                          "data-styles-preset": `PGUUTVk8z`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `Featured works`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: i(F, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: i(`h1`, {
                                        className: `framer-styles-preset-ptn1wj`,
                                        "data-styles-preset": `PGUUTVk8z`,
                                        children: `Featured works`,
                                      }),
                                    }),
                                    className: `framer-1x1t6o9`,
                                    "data-framer-name": `Featured works`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        i(Ve, {
                          animate: J,
                          className: `framer-y71dzx`,
                          "data-framer-appear-id": `y71dzx`,
                          "data-framer-name": `Works`,
                          initial: Y,
                          optimized: !0,
                          children: i(`div`, {
                            className: `framer-svd45d`,
                            children: i(oe, {
                              children: i(Xe, {
                                pageSize: 6,
                                query: Z(),
                                children: (e, t, n) =>
                                  s(ee, {
                                    children: [
                                      e?.map(
                                        (
                                          {
                                            AljuCQ0zt: e,
                                            id: t,
                                            oYx4NddcW: n,
                                            PY4p1EU9a: r,
                                            QLMqgvV2H: a,
                                            wEXmHv4ec: o,
                                          },
                                          s
                                        ) => (
                                          (r ??= ``),
                                          (e ??= ``),
                                          (n ??= ``),
                                          (o ??= ``),
                                          i(
                                            f,
                                            {
                                              id: `y0qBj0vfA-${t}`,
                                              children: i(O.Provider, {
                                                value: { wEXmHv4ec: o },
                                                children: i(te, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { wEXmHv4ec: o },
                                                        webPageId: `GE_lMVaIM`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { wEXmHv4ec: o },
                                                        webPageId: `GE_lMVaIM`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { wEXmHv4ec: o },
                                                        webPageId: `GE_lMVaIM`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (t) =>
                                                    i(S, {
                                                      breakpoint: j,
                                                      overrides: {
                                                        sjoaCPfma: {
                                                          width: `max(max(min(${y?.width || `100vw`}, 1920px) - 24px, 1px), 50px)`,
                                                        },
                                                      },
                                                      children: i(A, {
                                                        height: 456,
                                                        width: `max((max(min(${y?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 50px)`,
                                                        y:
                                                          (y?.y || 0) +
                                                          0 +
                                                          200 +
                                                          0 +
                                                          448 +
                                                          0 +
                                                          0 +
                                                          0,
                                                        children: i(w, {
                                                          className: `framer-271ck6-container`,
                                                          nodeId: `evldKogIi`,
                                                          scopeId: `yOSoLQHrx`,
                                                          children: i(S, {
                                                            breakpoint: j,
                                                            overrides: {
                                                              gIuAqnlvq: { QmPpMkHkN: t[1] },
                                                              sjoaCPfma: { QmPpMkHkN: t[2] },
                                                            },
                                                            children: i(V, {
                                                              AsXZvQH2O: r,
                                                              eQN1z6K6Q: n,
                                                              F1ztRv87T: Je(a),
                                                              height: `100%`,
                                                              id: `evldKogIi`,
                                                              layoutId: `evldKogIi`,
                                                              QmPpMkHkN: t[0],
                                                              style: { width: `100%` },
                                                              variant: X(`AXLVp1gjZ`),
                                                              width: `100%`,
                                                              Z6CWcM6iF: `View project`,
                                                              znQpwy6ZQ: e,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            },
                                            t
                                          )
                                        )
                                      ),
                                      i(S, {
                                        breakpoint: j,
                                        overrides: {
                                          sjoaCPfma: {
                                            y: (y?.y || 0) + 0 + 200 + 0 + 448 + 0 + 3096 - 36,
                                          },
                                        },
                                        children: i(A, {
                                          height: 36,
                                          y: (y?.y || 0) + 0 + 200 + 0 + 448 + 0 + 1548 - 36,
                                          children: i(w, {
                                            className: `framer-udcz34-container`,
                                            nodeId: `dpW6RIM5i`,
                                            scopeId: `yOSoLQHrx`,
                                            children: i(K, {
                                              height: `100%`,
                                              id: `dpW6RIM5i`,
                                              layoutId: `dpW6RIM5i`,
                                              variant: Ye(
                                                t,
                                                { disabled: `JXgcBcMZQ`, loading: `up7_zuOR0` },
                                                X(`Kpp6XMgEZ`)
                                              ),
                                              width: `100%`,
                                              Wld3NDzSj: ue({ loadMore: n }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              }),
                            }),
                          }),
                        }),
                        i(S, {
                          breakpoint: j,
                          overrides: { sjoaCPfma: { y: (y?.y || 0) + 0 + 200 + 0 + 3544 } },
                          children: i(A, {
                            height: 504,
                            width: `min(${y?.width || `100vw`}, 1920px)`,
                            y: (y?.y || 0) + 0 + 200 + 0 + 1996,
                            children: i(w, {
                              className: `framer-1x77bwl-container`,
                              nodeId: `skwF_IcEW`,
                              scopeId: `yOSoLQHrx`,
                              children: i(S, {
                                breakpoint: j,
                                overrides: {
                                  gIuAqnlvq: { variant: X(`sp1nHP6fo`) },
                                  sjoaCPfma: { variant: X(`V5hHX0kYx`) },
                                },
                                children: i(B, {
                                  height: `100%`,
                                  id: `skwF_IcEW`,
                                  layoutId: `skwF_IcEW`,
                                  style: { maxWidth: `100%`, width: `100%` },
                                  variant: X(`skMoxZIno`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
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
        `.framer-Q2pUm.framer-1a75cma, .framer-Q2pUm .framer-1a75cma { display: block; }`,
        `.framer-Q2pUm.framer-1cjml3q { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Q2pUm .framer-ffabzg-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-Q2pUm .framer-eova2g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Q2pUm .framer-rvkba7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 260px 20px 100px 20px; position: relative; width: 100%; }`,
        `.framer-Q2pUm .framer-f0z3yj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Q2pUm .framer-1dh36n3 { align-self: stretch; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-Q2pUm .framer-gbyanq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Q2pUm .framer-1x1t6o9 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Q2pUm .framer-y71dzx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Q2pUm .framer-svd45d { display: grid; flex: 1 0 0px; gap: 60px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px 0px 60px 0px; position: relative; width: 1px; }`,
        `.framer-Q2pUm .framer-271ck6-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Q2pUm .framer-udcz34-container { bottom: 0px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; }`,
        `.framer-Q2pUm .framer-1x77bwl-container { flex: none; height: auto; max-width: 1920px; position: relative; width: 100%; }`,
        ...ve,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Q2pUm.framer-1cjml3q { width: 810px; } .framer-Q2pUm .framer-rvkba7 { padding: 260px 18px 100px 18px; }}`,
        `@media (max-width: 809.98px) { .framer-Q2pUm.framer-1cjml3q { width: 390px; } .framer-Q2pUm .framer-rvkba7 { padding: 260px 12px 100px 12px; } .framer-Q2pUm .framer-1x1t6o9 { max-width: 240px; } .framer-Q2pUm .framer-y71dzx { padding: 0px 12px 0px 12px; } .framer-Q2pUm .framer-svd45d { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-Q2pUm`
    )),
    ($.displayName = `Works`),
    ($.defaultProps = { height: 2771, width: 1200 }),
    g(
      $,
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
        ...Ie,
        ...ze,
        ...Be,
        ...He,
        ...b(ye),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = x.get(Z(), n);
        return Promise.allSettled([
          r.preload(),
          j(B, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [j(V, {}, t), j(K, {}, t)]));
          })(),
        ]);
      },
    }),
    ($e = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameryOSoLQHrx`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"gIuAqnlvq":{"layout":["fixed","auto"]},"sjoaCPfma":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `2771`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $e as __FramerMetadata__, $ as default, Ge as queryParamNames };
//# sourceMappingURL=gYVKyMPl6t7Bi39qDY2m7Aehdr1NOPGogNHW6j-eg7A.D3AVytf4.mjs.map
