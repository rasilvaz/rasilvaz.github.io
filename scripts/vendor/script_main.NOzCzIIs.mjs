import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  a as d,
  c as f,
  g as p,
  h as m,
  i as h,
  j as g,
  l as _,
  m as v,
  n as y,
  o as b,
  p as ee,
  r as te,
  t as ne,
  u as x,
  w as S,
  y as C,
  z as w,
} from "./react.CWOg5Z1e.mjs";
import { a as T, r as E, t as D, x as O } from "./motion.D-FJ70EG.mjs";
import {
  $ as re,
  B as ie,
  C as k,
  D as A,
  F as j,
  G as ae,
  H as M,
  I as oe,
  Q as se,
  S as N,
  U as P,
  V as ce,
  X as le,
  Y as ue,
  _ as de,
  _t as fe,
  a as pe,
  at as me,
  b as he,
  bt as ge,
  c as _e,
  d as ve,
  et as ye,
  f as be,
  ft as xe,
  h as Se,
  ht as F,
  i as I,
  it as Ce,
  k as L,
  l as we,
  lt as Te,
  m as Ee,
  mt as De,
  nt as Oe,
  o as R,
  q as ke,
  rt as Ae,
  s as je,
  st as z,
  vt as Me,
  w as B,
  x as Ne,
  y as Pe,
  yt as Fe,
} from "./framer.C5e9eYQm.mjs";
import { d as Ie, f as Le, p as Re, u as ze } from "./shared-lib.DP-o-NQ_.mjs";
import { n as Be, t as V } from "./B_lXogcCo.D4R2Xl6V.mjs";
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ve,
  He,
  Ue,
  We,
  Ge,
  U,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  W,
  Ze = e(() => {
    (b(),
      M(),
      D(),
      S(),
      Be(),
      (Ve = j(V)),
      (He = [`qpgooCfaI`, `Na0K5Lo4Z`]),
      (Ue = `framer-YK37a`),
      (We = { Na0K5Lo4Z: `framer-v-1740bk4`, qpgooCfaI: `framer-v-15dtbid` }),
      (Ge = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ke = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (qe = { Desktop: `qpgooCfaI`, Mobile: `Na0K5Lo4Z` }),
      (Je = O.create(s)),
      (Ye = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: qe[r.variant] ?? r.variant ?? `qpgooCfaI`,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = F(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = z(),
            c = ye(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = Ye(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: x,
            } = De({
              cycleOrder: He,
              defaultVariant: `qpgooCfaI`,
              ref: r,
              variant: p,
              variantClassNames: We,
            }),
            S = Xe(e, x),
            w = A(Ue);
          return (
            xe(),
            f(E, {
              id: d ?? i,
              children: f(Je, {
                animate: x,
                initial: !1,
                children: f(Ke, {
                  value: Ge,
                  children: f(O.nav, {
                    ...m,
                    ...y,
                    className: A(w, `framer-15dtbid`, u, g),
                    "data-framer-name": `Desktop`,
                    layoutDependency: S,
                    layoutId: `qpgooCfaI`,
                    ref: r,
                    style: { ...l },
                    ...H({ Na0K5Lo4Z: { "data-framer-name": `Mobile` } }, h, b),
                    children: _(O.div, {
                      className: `framer-1csscow`,
                      "data-framer-name": `Menu items`,
                      layoutDependency: S,
                      layoutId: `uucNIXck1`,
                      children: [
                        f(he, {
                          links: [
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            f(I, {
                              height: 34,
                              y: (c?.y || 0) + (0 + ((c?.height || 32) - 0 - 34) / 2) + 0,
                              ...H(
                                {
                                  Na0K5Lo4Z: {
                                    y: (c?.y || 0) + (0 + ((c?.height || 24) - 0 - 34) / 2) + 0,
                                  },
                                },
                                h,
                                b
                              ),
                              children: f(N, {
                                className: `framer-ueazvq-container`,
                                layoutDependency: S,
                                layoutId: `PUKo9U3Oq-container`,
                                nodeId: `PUKo9U3Oq`,
                                rendersWithMotion: !0,
                                scopeId: `FZ8HpcX0i`,
                                children: f(V, {
                                  diqXIFWgT: `Início`,
                                  emf17Ghk6: e[0],
                                  height: `100%`,
                                  id: `PUKo9U3Oq`,
                                  layoutId: `PUKo9U3Oq`,
                                  tMzAyfqlM: !1,
                                  variant: U(`y6veoWTpm`),
                                  width: `100%`,
                                  ...H(
                                    { Na0K5Lo4Z: { emf17Ghk6: e[1], variant: U(`JJMHNlgPa`) } },
                                    h,
                                    b
                                  ),
                                }),
                              }),
                            }),
                        }),
                        f(he, {
                          links: [
                            {
                              href: { hash: `:FdmBp3cc3`, webPageId: `augiA20Il` },
                              implicitPathVariables: void 0,
                            },
                            {
                              href: { hash: `:FdmBp3cc3`, webPageId: `augiA20Il` },
                              implicitPathVariables: void 0,
                            },
                          ],
                          children: (e) =>
                            f(I, {
                              height: 34,
                              y: (c?.y || 0) + (0 + ((c?.height || 32) - 0 - 34) / 2) + 0,
                              ...H(
                                {
                                  Na0K5Lo4Z: {
                                    y: (c?.y || 0) + (0 + ((c?.height || 24) - 0 - 34) / 2) + 0,
                                  },
                                },
                                h,
                                b
                              ),
                              children: f(N, {
                                className: `framer-thhkhp-container`,
                                layoutDependency: S,
                                layoutId: `xCGMsai_W-container`,
                                nodeId: `xCGMsai_W`,
                                rendersWithMotion: !0,
                                scopeId: `FZ8HpcX0i`,
                                children: f(V, {
                                  diqXIFWgT: `Info`,
                                  emf17Ghk6: e[0],
                                  height: `100%`,
                                  id: `xCGMsai_W`,
                                  layoutId: `xCGMsai_W`,
                                  tMzAyfqlM: !1,
                                  variant: U(`y6veoWTpm`),
                                  width: `100%`,
                                  ...H(
                                    { Na0K5Lo4Z: { emf17Ghk6: e[1], variant: U(`JJMHNlgPa`) } },
                                    h,
                                    b
                                  ),
                                }),
                              }),
                            }),
                        }),
                        f(he, {
                          links: [
                            { href: { webPageId: `yOSoLQHrx` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `yOSoLQHrx` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            f(I, {
                              height: 34,
                              y: (c?.y || 0) + (0 + ((c?.height || 32) - 0 - 34) / 2) + 0,
                              ...H(
                                {
                                  Na0K5Lo4Z: {
                                    y: (c?.y || 0) + (0 + ((c?.height || 24) - 0 - 34) / 2) + 0,
                                  },
                                },
                                h,
                                b
                              ),
                              children: f(N, {
                                className: `framer-6ndtq-container`,
                                layoutDependency: S,
                                layoutId: `BNdMD5enk-container`,
                                nodeId: `BNdMD5enk`,
                                rendersWithMotion: !0,
                                scopeId: `FZ8HpcX0i`,
                                children: f(V, {
                                  diqXIFWgT: `Trabalhos`,
                                  emf17Ghk6: e[0],
                                  height: `100%`,
                                  id: `BNdMD5enk`,
                                  layoutId: `BNdMD5enk`,
                                  tMzAyfqlM: !1,
                                  variant: U(`y6veoWTpm`),
                                  width: `100%`,
                                  ...H(
                                    { Na0K5Lo4Z: { emf17Ghk6: e[1], variant: U(`JJMHNlgPa`) } },
                                    h,
                                    b
                                  ),
                                }),
                              }),
                            }),
                        }),
                        f(I, {
                          height: 34,
                          y: (c?.y || 0) + (0 + ((c?.height || 32) - 0 - 34) / 2) + 0,
                          ...H(
                            {
                              Na0K5Lo4Z: {
                                y: (c?.y || 0) + (0 + ((c?.height || 24) - 0 - 34) / 2) + 0,
                              },
                            },
                            h,
                            b
                          ),
                          children: f(N, {
                            className: `framer-xxo4ej-container`,
                            layoutDependency: S,
                            layoutId: `wwabifEN7-container`,
                            nodeId: `wwabifEN7`,
                            rendersWithMotion: !0,
                            scopeId: `FZ8HpcX0i`,
                            children: f(V, {
                              diqXIFWgT: `Contato`,
                              emf17Ghk6: `mailto:hi@email.com`,
                              height: `100%`,
                              id: `wwabifEN7`,
                              layoutId: `wwabifEN7`,
                              tMzAyfqlM: !1,
                              variant: U(`y6veoWTpm`),
                              width: `100%`,
                              ...H({ Na0K5Lo4Z: { variant: U(`JJMHNlgPa`) } }, h, b),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-YK37a.framer-o9mgws, .framer-YK37a .framer-o9mgws { display: block; }`,
          `.framer-YK37a.framer-15dtbid { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-YK37a .framer-1csscow { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 1px; z-index: 10; }`,
          `.framer-YK37a .framer-ueazvq-container, .framer-YK37a .framer-thhkhp-container, .framer-YK37a .framer-6ndtq-container, .framer-YK37a .framer-xxo4ej-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-YK37a.framer-v-1740bk4.framer-15dtbid { width: 390px; }`,
          `.framer-YK37a.framer-v-1740bk4 .framer-1csscow { padding: 0px 12px 0px 12px; }`,
        ],
        `framer-YK37a`
      )),
      (W.displayName = `Navbar`),
      (W.defaultProps = { height: 32, width: 1200 }),
      B(W, {
        variant: {
          options: [`qpgooCfaI`, `Na0K5Lo4Z`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      k(W, [{ explicitInter: !0, fonts: [] }, ...Ve], { supportsExplicitInterCodegen: !0 }),
      (W.loader = { load: (e, t) => (t.locale, Promise.allSettled([L(V, {}, t)])) }));
  }),
  Qe,
  $e,
  et,
  G,
  tt = e(() => {
    (b(),
      M(),
      S(),
      (Qe = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5 0 L 5 2 L 11.59 2 L 0 13.59 L 1.41 15 L 13 3.41 L 13 10 L 15 10 L 15 0 Z" fill="var(--esondr, rgb(0,0,0))" height="15px" id="hf7exHPxl" transform="translate(4.5 4.5)" width="15px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      ($e = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? f(O.div, { ...a, layoutId: r, ref: t }) : f(`div`, { ...a, ref: t });
      })),
      (et = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K5AAorpEW: e ?? i.K5AAorpEW ?? `rgb(0, 0, 0)`,
      })),
      (G = F(
        p(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, K5AAorpEW: o, ...s } = et(e);
          return f($e, {
            ...s,
            className: A(`framer-2PvPF`, r),
            layoutId: i,
            ref: t,
            style: { "--esondr": o, ...n },
          });
        }),
        [
          `.framer-2PvPF { -webkit-mask: ${Qe}; aspect-ratio: 1; background-color: var(--esondr); mask: ${Qe}; width: 24px; }`,
        ],
        `framer-2PvPF`
      )),
      (G.displayName = `North East`),
      B(G, {
        K5AAorpEW: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: R.Color },
      }));
  });
function nt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  K,
  mt = e(() => {
    (b(),
      M(),
      D(),
      S(),
      tt(),
      Re(),
      (rt = j(G)),
      (it = [`Qh4RM8WZV`, `qt3vRt8v1`, `MMaP1eVcU`, `zOV4dcRNH`]),
      (at = `framer-dmzLJ`),
      (ot = {
        MMaP1eVcU: `framer-v-mbz5fy`,
        Qh4RM8WZV: `framer-v-2wbnq6`,
        qt3vRt8v1: `framer-v-1ve8y45`,
        zOV4dcRNH: `framer-v-1wzfr8m`,
      }),
      (st = { duration: 0, type: `tween` }),
      (ct = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (lt = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (ut = O.create(s)),
      (dt = {
        "Line IN": `qt3vRt8v1`,
        "Line OUT": `MMaP1eVcU`,
        Default: `Qh4RM8WZV`,
        Mobile: `zOV4dcRNH`,
      }),
      (ft = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        tsGCBHTkk: n ?? a.tsGCBHTkk,
        variant: dt[a.variant] ?? a.variant ?? `Qh4RM8WZV`,
        X4kGlDs4u: r ?? a.X4kGlDs4u ?? `Social Button`,
      })),
      (pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = F(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = z();
          ye();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              X4kGlDs4u: m,
              tsGCBHTkk: h,
              ...g
            } = ft(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: x,
              setVariant: S,
              variants: w,
            } = De({
              cycleOrder: it,
              defaultVariant: `Qh4RM8WZV`,
              ref: r,
              variant: p,
              variantClassNames: ot,
            }),
            T = pt(e, w),
            { activeVariantCallback: D, delay: ie } = re(v),
            k = D(async (...e) => {
              (x({ isHovered: !0 }), S(`qt3vRt8v1`));
            }),
            j = D(async (...e) => {
              (x({ isHovered: !1 }), S(`MMaP1eVcU`));
            });
          Te(v, {
            MMaP1eVcU: D(async (...e) => {
              await ie(() => S(`Qh4RM8WZV`), 350);
            }),
          });
          let ae = A(at, ze),
            M = () => v !== `zOV4dcRNH`;
          return f(E, {
            id: d ?? i,
            children: f(ut, {
              animate: w,
              initial: !1,
              children: f(lt, {
                value: st,
                ...nt(
                  { MMaP1eVcU: { value: ct }, qt3vRt8v1: { value: ct }, zOV4dcRNH: { value: ct } },
                  v,
                  te
                ),
                children: f(be, {
                  href: h,
                  motionChild: !0,
                  nodeId: `Qh4RM8WZV`,
                  openInNewTab: !0,
                  scopeId: `t1SRbBSI0`,
                  children: _(O.a, {
                    ...g,
                    ...ee,
                    className: `${A(ae, `framer-2wbnq6`, u, y)} framer-12j6qr7`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: T,
                    layoutId: `Qh4RM8WZV`,
                    onMouseEnter: k,
                    ref: r,
                    style: { ...l },
                    ...nt(
                      {
                        MMaP1eVcU: { "data-framer-name": `Line OUT`, onMouseEnter: void 0 },
                        qt3vRt8v1: {
                          "data-framer-name": `Line IN`,
                          onMouseEnter: void 0,
                          onMouseLeave: j,
                        },
                        zOV4dcRNH: {
                          "data-framer-name": `Mobile`,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                      },
                      v,
                      te
                    ),
                    children: [
                      _(O.div, {
                        className: `framer-11jxss2`,
                        "data-framer-name": `Container`,
                        layoutDependency: T,
                        layoutId: `sjbtN0ehb`,
                        children: [
                          f(Ne, {
                            __fromCanvasComponent: !0,
                            children: f(s, {
                              children: f(O.p, {
                                className: `framer-styles-preset-fd9xae`,
                                "data-styles-preset": `Z8Dl3fozE`,
                                children: `Social Button`,
                              }),
                            }),
                            className: `framer-zmyc8e`,
                            "data-framer-name": `Label`,
                            fonts: [`Inter`],
                            layoutDependency: T,
                            layoutId: `yiRZZFG3l`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: m,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          f(G, {
                            animated: !0,
                            className: `framer-idlksx`,
                            layoutDependency: T,
                            layoutId: `qsq__JKMr`,
                            style: {
                              "--esondr": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                            },
                          }),
                        ],
                      }),
                      M() &&
                        f(O.div, {
                          className: `framer-2azycc`,
                          "data-framer-name": `Underline Wrap`,
                          layoutDependency: T,
                          layoutId: `awFv64L97`,
                          children: f(O.div, {
                            className: `framer-h1lgnb`,
                            "data-framer-name": `Line`,
                            layoutDependency: T,
                            layoutId: `tWclMUFwL`,
                            style: { backgroundColor: `rgb(255, 255, 255)` },
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-dmzLJ.framer-12j6qr7, .framer-dmzLJ .framer-12j6qr7 { display: block; }`,
          `.framer-dmzLJ.framer-2wbnq6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 3px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-dmzLJ .framer-11jxss2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dmzLJ .framer-zmyc8e { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-dmzLJ .framer-idlksx { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }`,
          `.framer-dmzLJ .framer-2azycc { align-self: stretch; flex: none; height: 1px; overflow: hidden; position: relative; width: auto; }`,
          `.framer-dmzLJ .framer-h1lgnb { bottom: 0px; flex: none; left: -10px; overflow: hidden; position: absolute; top: 0px; width: 1%; }`,
          `.framer-dmzLJ.framer-v-1ve8y45 .framer-h1lgnb { left: 0px; right: 0px; width: unset; }`,
          `.framer-dmzLJ.framer-v-mbz5fy .framer-h1lgnb { left: unset; right: -10px; width: 1%; }`,
          `.framer-dmzLJ.framer-v-1wzfr8m.framer-2wbnq6 { padding: 4px; }`,
          ...Ie,
        ],
        `framer-dmzLJ`
      )),
      (K.displayName = `Button Social`),
      (K.defaultProps = { height: 27, width: 103 }),
      B(K, {
        variant: {
          options: [`Qh4RM8WZV`, `qt3vRt8v1`, `MMaP1eVcU`, `zOV4dcRNH`],
          optionTitles: [`Default`, `Line IN`, `Line OUT`, `Mobile`],
          title: `Variant`,
          type: R.Enum,
        },
        X4kGlDs4u: {
          defaultValue: `Social Button`,
          displayTextArea: !1,
          title: `Title`,
          type: R.String,
        },
        tsGCBHTkk: { title: `Link`, type: R.Link },
      }),
      k(
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
          ...rt,
          ...oe(Le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ht(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  q,
  Tt = e(() => {
    (b(),
      M(),
      D(),
      S(),
      (gt = [`eXaK6jp8U`, `ulGjyh2Ap`]),
      (_t = `framer-efG9v`),
      (vt = { eXaK6jp8U: `framer-v-l66rbp`, ulGjyh2Ap: `framer-v-s99joe` }),
      (yt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (bt = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (xt = { Desktop: `eXaK6jp8U`, Mobile: `ulGjyh2Ap` }),
      (St = O.create(s)),
      (Ct = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: xt[r.variant] ?? r.variant ?? `eXaK6jp8U`,
      })),
      (wt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = F(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = z();
          ye();
          let { style: l, className: u, layoutId: d, variant: p, ...m } = Ct(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: ee,
              setVariant: te,
              variants: ne,
            } = De({
              cycleOrder: gt,
              defaultVariant: `eXaK6jp8U`,
              ref: r,
              variant: p,
              variantClassNames: vt,
            }),
            x = wt(e, ne),
            S = A(_t);
          return f(E, {
            id: d ?? i,
            children: f(St, {
              animate: ne,
              initial: !1,
              children: f(bt, {
                value: yt,
                children: f(O.div, {
                  ...m,
                  ...v,
                  className: A(S, `framer-l66rbp`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: x,
                  layoutId: `eXaK6jp8U`,
                  ref: r,
                  style: { ...l },
                  ...ht({ ulGjyh2Ap: { "data-framer-name": `Mobile` } }, h, y),
                  children: f(Ne, {
                    __fromCanvasComponent: !0,
                    children: f(s, {
                      children: f(O.h1, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `R0Y7Um9ib3RvIENvbmRlbnNlZC02MDA=`,
                          "--framer-font-family": `"Roboto Condensed", "Roboto Condensed Placeholder", sans-serif`,
                          "--framer-font-size": `214.92830485930818px`,
                          "--framer-font-weight": `600`,
                          "--framer-letter-spacing": `-14px`,
                          "--framer-line-height": `85%`,
                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255)))`,
                          "--framer-text-transform": `uppercase`,
                        },
                        children: `Rodrigo Pena`,
                      }),
                    }),
                    className: `framer-1728jbh`,
                    fonts: [`GF;Roboto Condensed-600`],
                    layoutDependency: x,
                    layoutId: `FeHfV0KK7`,
                    style: {
                      "--extracted-gdpscs": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    verticalAlignment: `top`,
                    viewBox: `0 0 1184 183`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-efG9v.framer-1sxctfr, .framer-efG9v .framer-1sxctfr { display: block; }`,
          `.framer-efG9v.framer-l66rbp { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 8px; position: relative; width: 1200px; }`,
          `.framer-efG9v .framer-1728jbh { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre; width: 1px; }`,
          `.framer-efG9v.framer-v-s99joe.framer-l66rbp { flex-direction: column; width: 390px; }`,
          `.framer-efG9v.framer-v-s99joe .framer-1728jbh { flex: none; width: 100%; }`,
        ],
        `framer-efG9v`
      )),
      (q.displayName = `Name`),
      (q.defaultProps = { height: 199, width: 1200 }),
      B(q, {
        variant: {
          options: [`eXaK6jp8U`, `ulGjyh2Ap`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      k(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Roboto Condensed`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Roboto Condensed`,
                url: `https://fonts.gstatic.com/s/robotocondensed/v31/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVspfBM731BKMSK.woff2`,
                weight: `600`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  J,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  Y,
  zt = e(() => {
    (b(),
      M(),
      D(),
      S(),
      mt(),
      Tt(),
      (Dt = j(K)),
      (Ot = j(q)),
      (kt = fe(N)),
      (At = [`QWJPumFDe`, `Vr8J7uXsp`]),
      (jt = `framer-1nXpg`),
      (Mt = { QWJPumFDe: `framer-v-k2hgib`, Vr8J7uXsp: `framer-v-1edahoc` }),
      (Nt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Pt = ({ value: e, children: n }) => {
        let r = t(T),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return f(T.Provider, { value: a, children: n });
      }),
      (Ft = { Desktop: `QWJPumFDe`, Mobile: `Vr8J7uXsp` }),
      (It = O.create(s)),
      (Lt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ft[r.variant] ?? r.variant ?? `QWJPumFDe`,
      })),
      (Rt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = F(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = z(),
            c = ye(),
            { style: l, className: u, layoutId: d, variant: p, ...m } = Lt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: x,
            } = De({
              cycleOrder: At,
              defaultVariant: `QWJPumFDe`,
              ref: r,
              variant: p,
              variantClassNames: Mt,
            }),
            S = Rt(e, x),
            w = A(jt);
          return f(E, {
            id: d ?? i,
            children: f(It, {
              animate: x,
              initial: !1,
              children: f(Pt, {
                value: Nt,
                children: _(O.footer, {
                  ...m,
                  ...y,
                  className: A(w, `framer-k2hgib`, u, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: S,
                  layoutId: `QWJPumFDe`,
                  ref: r,
                  style: { ...l },
                  ...Et({ Vr8J7uXsp: { "data-framer-name": `Mobile` } }, h, b),
                  children: [
                    f(O.div, {
                      className: `framer-1e1uhle`,
                      "data-framer-name": `Social links`,
                      layoutDependency: S,
                      layoutId: `lZKJAQfXc`,
                      children: f(I, {
                        height: 27,
                        children: f(N, {
                          className: `framer-by90o0-container`,
                          layoutDependency: S,
                          layoutId: `fFIBtU3rR-container`,
                          nodeId: `fFIBtU3rR`,
                          rendersWithMotion: !0,
                          scopeId: `wMKa6IHmb`,
                          children: f(K, {
                            height: `100%`,
                            id: `fFIBtU3rR`,
                            layoutId: `fFIBtU3rR`,
                            tsGCBHTkk: `https://www.linkedin.com/in/rodrigo-anastacio/`,
                            variant: J(`Qh4RM8WZV`),
                            width: `100%`,
                            X4kGlDs4u: `LNKDN`,
                            ...Et({ Vr8J7uXsp: { variant: J(`zOV4dcRNH`) } }, h, b),
                          }),
                        }),
                      }),
                    }),
                    f(I, {
                      height: 199,
                      width: c?.width || `100vw`,
                      children: f(kt, {
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 10,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 30,
                            },
                          },
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: `onInView`,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1n02hqp-container`,
                        layoutDependency: S,
                        layoutId: `RWv5mRnch-container`,
                        nodeId: `RWv5mRnch`,
                        rendersWithMotion: !0,
                        scopeId: `wMKa6IHmb`,
                        style: { transformPerspective: 1200 },
                        ...Et(
                          { Vr8J7uXsp: { __framer__styleTransformEffectEnabled: void 0 } },
                          h,
                          b
                        ),
                        children: f(q, {
                          height: `100%`,
                          id: `RWv5mRnch`,
                          layoutId: `RWv5mRnch`,
                          style: { width: `100%` },
                          variant: J(`eXaK6jp8U`),
                          width: `100%`,
                          ...Et({ Vr8J7uXsp: { variant: J(`ulGjyh2Ap`) } }, h, b),
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
          `.framer-1nXpg.framer-58g4im, .framer-1nXpg .framer-58g4im { display: block; }`,
          `.framer-1nXpg.framer-k2hgib { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-1nXpg .framer-1e1uhle { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 20px 0px 20px; position: sticky; top: 24px; width: 100%; z-index: 10; }`,
          `.framer-1nXpg .framer-by90o0-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-1nXpg .framer-1n02hqp-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-1nXpg.framer-v-1edahoc.framer-k2hgib { gap: 12px; width: 390px; }`,
          `.framer-1nXpg.framer-v-1edahoc .framer-1e1uhle { padding: 0px 12px 0px 12px; }`,
          `.framer-1nXpg.framer-v-1edahoc .framer-by90o0-container { order: 0; }`,
        ],
        `framer-1nXpg`
      )),
      (Y.displayName = `Footer`),
      (Y.defaultProps = { height: 224, width: 1200 }),
      B(Y, {
        variant: {
          options: [`QWJPumFDe`, `Vr8J7uXsp`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      k(Y, [{ explicitInter: !0, fonts: [] }, ...Dt, ...Ot], { supportsExplicitInterCodegen: !0 }),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([L(K, {}, t), L(q, {}, t)])) }));
  }),
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  X,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  Z,
  dn = e(() => {
    (b(),
      M(),
      D(),
      S(),
      Ze(),
      zt(),
      Tt(),
      (Bt = j(q)),
      (Vt = Me(pe)),
      (Ht = j(W)),
      (Ut = j(Y)),
      (Wt = {
        q70PON6NU: `(max-width: 809.98px)`,
        qL6072Dh9: `(min-width: 1200px)`,
        YblOZnBLY: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Gt = `framer-EoXli`),
      (Kt = {
        q70PON6NU: `framer-v-8dg89n`,
        qL6072Dh9: `framer-v-e1v035`,
        YblOZnBLY: `framer-v-k2eqe0`,
      }),
      (qt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 30, delay: 0.2, mass: 0.1, stiffness: 130, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Jt = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -50,
      }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Yt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 30, delay: 1, mass: 0.1, stiffness: 130, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Xt = {
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
      (Zt = (e) => !e),
      (Qt = (e, t) => `translateX(-50%) ${t}`),
      ($t = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -40,
      }),
      (en = {
        q70PON6NU: [
          `.framer-EoXli .framer-1wiz44i-container, .framer-EoXli .framer-19ykxlo-container { top: 12px; }`,
        ],
      }),
      (tn = Object.keys(en)),
      (nn = { q70PON6NU: `.framer-8dg89n-override` }),
      (rn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-EoXli.framer-1o46zpd, .framer-EoXli .framer-1o46zpd { display: block; }`,
        `.framer-EoXli.framer-e1v035 { align-content: center; align-items: center; background-color: var(--token-27c87ea9-0318-4b1a-ba07-a42c2b4de683, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-EoXli .framer-4x4ldd-container { flex: none; height: auto; max-width: 1920px; order: -1000; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-EoXli .framer-1wiz44i-container { flex: none; height: auto; max-width: 1920px; order: -999; position: sticky; top: 20px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-EoXli .framer-19ykxlo-container { flex: none; height: auto; left: 50%; max-width: 1920px; order: -998; position: var(--framer-canvas-fixed-position, fixed); top: 20px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-EoXli .framer-vxnem0 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-EoXli .framer-nbya55-container { flex: none; height: auto; max-width: 1920px; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (an = {
        q70PON6NU: `(max-width: 809.98px)`,
        qL6072Dh9: `(min-width: 1200px)`,
        YblOZnBLY: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (on = { Desktop: `qL6072Dh9`, Phone: `q70PON6NU`, Tablet: `YblOZnBLY` }),
      (sn = ({ value: e }) =>
        me()
          ? null
          : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (cn = ({ height: e, id: t, nameVisible: n, width: r, ...i }) => ({
        ...i,
        BRnjah97Y: n ?? i.BRnjah97Y ?? !0,
        variant: on[i.variant] ?? i.variant ?? `qL6072Dh9`,
      })),
      (ln = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = C(),
          { activeLocale: a, setLocale: s } = z(),
          {
            style: c,
            className: l,
            layoutId: u,
            variant: d,
            BRnjah97Y: p,
            children: m,
            ...h
          } = cn(e),
          [g, v] = Ce(d, Wt, !1),
          y = A(Gt),
          b = Zt(p);
        return (
          Ae({}),
          f(_e.Provider, {
            value: {
              activeVariantId: g,
              humanReadableVariantMap: on,
              isLayoutTemplate: !0,
              primaryVariantId: `qL6072Dh9`,
              variantClassNames: Kt,
            },
            children: _(E, {
              id: u ?? i,
              children: [
                f(sn, {
                  value: `:root body { background: var(--token-27c87ea9-0318-4b1a-ba07-a42c2b4de683, rgb(0, 0, 0)); }`,
                }),
                _(O.div, {
                  ...h,
                  className: A(y, `framer-e1v035`, l),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    p !== !1 &&
                      f(I, {
                        height: 237,
                        width: `min(100vw, 1920px)`,
                        y: 0,
                        children: f(Vt, {
                          animate: qt,
                          className: `framer-4x4ldd-container`,
                          "data-framer-appear-id": `4x4ldd`,
                          initial: Jt,
                          nodeId: `JVgJFfGHk`,
                          optimized: !0,
                          rendersWithMotion: !0,
                          scopeId: `Xa4cJoWsv`,
                          children: f(q, {
                            height: `100%`,
                            id: `JVgJFfGHk`,
                            layoutId: `JVgJFfGHk`,
                            style: { maxWidth: `100%`, width: `100%` },
                            variant: X(`eXaK6jp8U`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    p !== !1 &&
                      f(I, {
                        height: 32,
                        width: `min(100vw, 1920px)`,
                        y: 0,
                        children: f(Vt, {
                          animate: Yt,
                          className: `framer-1wiz44i-container`,
                          "data-framer-appear-id": `1wiz44i`,
                          "data-framer-name": `Nav / Sticky / Home`,
                          initial: Xt,
                          name: `Nav / Sticky / Home`,
                          nodeId: `dADZa93sh`,
                          optimized: !0,
                          rendersWithMotion: !0,
                          scopeId: `Xa4cJoWsv`,
                          children: f(de, {
                            breakpoint: g,
                            overrides: { q70PON6NU: { variant: X(`Na0K5Lo4Z`) } },
                            children: f(W, {
                              height: `100%`,
                              id: `dADZa93sh`,
                              layoutId: `dADZa93sh`,
                              name: `Nav / Sticky / Home`,
                              style: { maxWidth: `100%`, width: `100%` },
                              variant: X(`qpgooCfaI`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    b !== !1 &&
                      f(de, {
                        breakpoint: g,
                        overrides: { q70PON6NU: { y: 12 } },
                        children: f(I, {
                          height: 32,
                          width: `min(100vw, 1920px)`,
                          y: 20,
                          children: f(Vt, {
                            animate: qt,
                            className: `framer-19ykxlo-container`,
                            "data-framer-appear-id": `19ykxlo`,
                            "data-framer-layout-hint-center-x": !0,
                            "data-framer-name": `Nav / Fixed / Other pages `,
                            initial: $t,
                            layoutScroll: !0,
                            name: `Nav / Fixed / Other pages `,
                            nodeId: `r5yWLI7WJ`,
                            optimized: !0,
                            rendersWithMotion: !0,
                            scopeId: `Xa4cJoWsv`,
                            transformTemplate: Qt,
                            children: f(de, {
                              breakpoint: g,
                              overrides: { q70PON6NU: { variant: X(`Na0K5Lo4Z`) } },
                              children: f(W, {
                                height: `100%`,
                                id: `r5yWLI7WJ`,
                                layoutId: `r5yWLI7WJ`,
                                name: `Nav / Fixed / Other pages `,
                                style: { maxWidth: `100%`, width: `100%` },
                                variant: X(`qpgooCfaI`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    m,
                    f(`div`, { className: `framer-vxnem0` }),
                    f(I, {
                      height: 245,
                      width: `min(100vw, 1920px)`,
                      y: 1e3,
                      children: f(pe, {
                        className: `framer-nbya55-container`,
                        nodeId: `QVevA32mP`,
                        scopeId: `Xa4cJoWsv`,
                        children: f(de, {
                          breakpoint: g,
                          overrides: { q70PON6NU: { variant: X(`Vr8J7uXsp`) } },
                          children: f(Y, {
                            height: `100%`,
                            id: `QVevA32mP`,
                            layoutId: `QVevA32mP`,
                            style: { maxWidth: `100%`, width: `100%` },
                            variant: X(`QWJPumFDe`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (un = (e) =>
        e === Pe.canvas || e === Pe.export
          ? [
              ...rn,
              ...tn.flatMap((e) => {
                let t = nn[e];
                return en[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...rn, ...tn.map((e) => `@media ${an[e]} { ${en[e].join(` `)} }`)]),
      (Z = F(ln, un, `framer-EoXli`)),
      (Z.displayName = `Main`),
      (Z.defaultProps = { height: 1e3, width: 1200 }),
      B(Z, {
        BRnjah97Y: { defaultValue: !0, description: ``, title: `Name visible`, type: R.Boolean },
      }),
      k(Z, [{ explicitInter: !0, fonts: [] }, ...Bt, ...Ht, ...Ut], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([L(q, {}, t), L(W, {}, t), L(Y, {}, t)])),
      }));
  });
function fn({ webPageId: e, children: t, style: n, ...r }) {
  let i = { BRnjah97Y: !0 },
    a = { ...i, BRnjah97Y: !1 },
    o = { augiA20Il: i, GE_lMVaIM: a, yKwUkyLH0: a, yOSoLQHrx: a }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `yOSoLQHrx`:
    case `yKwUkyLH0`:
    case `GE_lMVaIM`:
      return x(Z, { ...o, key: `Main`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function pn(e) {
  switch (e) {
    case `augiA20Il`:
    case `yOSoLQHrx`:
    case `yKwUkyLH0`:
    case `GE_lMVaIM`:
      return [
        { hash: `e1v035`, mediaQuery: `(min-width: 1200px)` },
        { hash: `k2eqe0`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `8dg89n`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function mn({ routeId: e, pathVariables: t, localeId: r, collectionItemId: c }) {
  let u = Q[e].page.preload();
  le({
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  });
  let d = x(Ee, {
    children: x(we, {
      children: x(Se, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        routes: Q,
        collectionUtils: vn,
        framerSiteId: yn,
        notFoundPage: P(() => import(`./aM-qFAnjAMl9WJGicqRRVQDmUxHTqGHtmwcqhCXp1sM.DF87XfZ3.mjs`)),
        isReducedMotion: void 0,
        localeId: r,
        locales: _n,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://readable-papaya-621649.framer.app`,
        EditorBar:
          w === void 0
            ? void 0
            : (() => {
                if (bn) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return P(async () => {
                  w.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: Oe, useLocaleInfo: z, useRouter: xe },
                    react: {
                      createElement: x,
                      Fragment: s,
                      memo: m,
                      useCallback: i,
                      useEffect: a,
                      useRef: o,
                      useState: n,
                      useLayoutEffect: l,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !1,
        LayoutTemplate: fn,
        loadSnippetsModule: new ve(
          () => import(`./aipceT9OXI5_EKaKa8-5jwISYtt-sE6h1S8EIqJ3B8A.dObCGW41.mjs`)
        ),
        initialCollectionItemId: c,
      }),
    }),
    value: {
      global: {
        enter: {
          opacity: 0,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.8,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stagger: 0,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await u, d);
}
function hn() {
  $ && w.__framer_events.push(arguments);
}
async function gn(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || w.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    hn(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s;
    if (e)
      ((s = JSON.parse(t.dataset.framerHydrateV2)),
        (r = s.routeId),
        (i = s.localeId),
        (a = s.pathVariables),
        (o = s.breakpoints),
        (r = ke(Q, r)));
    else {
      ke(Q, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((a ??= {}), (a[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ie(Q, decodeURIComponent(location.pathname), !0, _n);
        ((r = e.routeId), (i = e.localeId), (a = e.pathVariables));
      }
    }
    let c = mn({
      routeId: r,
      localeId: i,
      pathVariables: a,
      collectionItemId: s?.collectionItemId,
    });
    w !== void 0 &&
      (async () => {
        let e = Q[r],
          t = _n.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = s?.collectionItemId ?? null;
        if (n === null && e?.collectionId && vn) {
          let r = await vn[e.collectionId]?.(),
            [i] = Object.values(a);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          c = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          w.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: yn,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: w.location.href,
              hostname: w.location.hostname || null,
              pathname: w.location.pathname || null,
              hash: w.location.hash || null,
              search: w.location.search || null,
              timezone: c,
              locale: l,
            },
            `eager`,
          ]),
          await ge({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let l = await c;
    e
      ? (Fe(`framer-rewrite-breakpoints`, () => {
          (ue(o), w.__framer_onRewriteBreakpoints?.(o));
        }),
        (bn ? (e) => e() : u)(() => {
          (ae(), se(), ne(t, l, { onRecoverableError: n }));
        }))
      : te(t, { onRecoverableError: n }).render(l);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Q, _n, vn, yn, $, bn;
e(() => {
  if (
    (r(),
    M(),
    S(),
    d(),
    y(),
    dn(),
    (Q = {
      augiA20Il: {
        elements: { FdmBp3cc3: `info` },
        page: P(() => import(`./3ismnjO-TXQdFmURJE7X682cx_Fx_rmwCSPjmzz9ATM.D2ufAnt9.mjs`)),
        path: `/`,
      },
      yOSoLQHrx: {
        elements: {},
        page: P(() => import(`./gYVKyMPl6t7Bi39qDY2m7Aehdr1NOPGogNHW6j-eg7A.D3AVytf4.mjs`)),
        path: `/works`,
      },
      yKwUkyLH0: {
        elements: {},
        page: P(() => import(`./aM-qFAnjAMl9WJGicqRRVQDmUxHTqGHtmwcqhCXp1sM.DF87XfZ3.mjs`)),
        path: `/404`,
      },
      GE_lMVaIM: {
        collectionId: `T9gdzTukW`,
        elements: {},
        page: P(() => import(`./ZnEfcSlWDldon-cFzhZidA62etPz-i1fjNQtbRAcNMs.pitNfDHK.mjs`)),
        path: `/works/:wEXmHv4ec`,
      },
    }),
    (_n = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (vn = {
      T9gdzTukW: async () =>
        (await import(`./3daD0Lb8ty5MIME25KjlvonGn_Gzoc3gJ77FkSCk9l0.C3IV52ST.mjs`))?.utils,
    }),
    (yn = `67dcccd7c17129cc803aa94e07c92f22b09280183960731d793895df9591bf87`),
    ($ = typeof document < `u`),
    (bn = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    $)
  ) {
    ((w.__framer_importFromPackage = (e, t) => () =>
      x(je, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (w.__framer_events = w.__framer_events || []),
      ce());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? gn(!0, e) : gn(!1, e);
  }
})();
export { pn as getLayoutTemplateBreakpoints, mn as getPageRoot };
//# sourceMappingURL=script_main.NOzCzIIs.mjs.map
