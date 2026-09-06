import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  O as a,
  P as o,
  R as s,
  c,
  g as l,
  j as u,
  l as d,
  o as f,
  w as p,
  y as m,
} from "./react.CWOg5Z1e.mjs";
import { a as h, r as g, t as _, x as v } from "./motion.D-FJ70EG.mjs";
import {
  $ as y,
  C as b,
  D as x,
  F as S,
  H as C,
  I as w,
  S as T,
  et as E,
  f as D,
  ht as O,
  i as k,
  k as A,
  lt as j,
  mt as M,
  o as N,
  pt as P,
  st as F,
  u as I,
  w as L,
  x as R,
} from "./framer.C5e9eYQm.mjs";
import { d as z, f as B, p as V, u as H } from "./shared-lib.DP-o-NQ_.mjs";
import { a as ee, i as U, n as W, o as te, r as ne, t as G } from "./we4cYbYfs.CzcUxBQ2.mjs";
var K,
  re,
  ie,
  q,
  ae = e(() => {
    (f(),
      C(),
      p(),
      (K = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 14 0 L 2 0 C 0.9 0 0 0.9 0 2 L 0 16 L 2 16 L 2 2 L 14 2 Z M 17 4 L 6 4 C 4.9 4 4 4.9 4 6 L 4 20 C 4 21.1 4.9 22 6 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 6 C 19 4.9 18.1 4 17 4 Z M 17 20 L 6 20 L 6 6 L 17 6 Z" fill="var(--esondr, rgb(0,0,0))" height="22px" id="nPVcDY7BD" transform="translate(2.5 1)" width="19px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (re = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(v.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (ie = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K5AAorpEW: e ?? i.K5AAorpEW ?? `rgb(0, 0, 0)`,
      })),
      (q = O(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, K5AAorpEW: o, ...s } = ie(e);
          return c(re, {
            ...s,
            className: x(`framer-bBAm7`, r),
            layoutId: i,
            ref: t,
            style: { "--esondr": o, ...n },
          });
        }),
        [
          `.framer-bBAm7 { -webkit-mask: ${K}; aspect-ratio: 1; background-color: var(--esondr); mask: ${K}; width: 24px; }`,
        ],
        `framer-bBAm7`
      )),
      (q.displayName = `Content Copy`),
      L(q, {
        K5AAorpEW: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: N.Color },
      }));
  });
function J(e) {
  let {
      label: t = `Copy to Clipboard`,
      success: r = `Copied!`,
      content: a,
      trackingId: o,
      fill: l = `#06F`,
      color: u = `#FFF`,
      font: f = { fontFamily: `Inter`, fontWeight: 500, fontSize: 16, lineHeight: 1 },
      hoverOptions: p,
      style: m,
      onClick: h,
      padding: g = 10,
      paddingPerSide: _,
      paddingTop: y = 10,
      paddingRight: b = 10,
      paddingBottom: x = 10,
      paddingLeft: S = 10,
      borderRadius: C = 50,
      isMixedBorderRadius: w,
      topLeftRadius: T = 50,
      topRightRadius: E = 50,
      bottomRightRadius: D = 50,
      bottomLeftRadius: O = 50,
      ...k
    } = e,
    A = _ ? `${y}px ${b}px ${x}px ${S}px` : `${g}px`,
    j = w ? `${T}px ${E}px ${D}px ${O}px` : `${C}px`,
    M = P(),
    [N, F] = n(!1),
    I = a ?? ``,
    L = (e) => {
      try {
        let t = document.createElement(`textarea`);
        ((t.value = e),
          t.setAttribute(`readonly`, ``),
          (t.style.position = `absolute`),
          (t.style.left = `-9999px`),
          document.body.appendChild(t),
          t.select());
        let n = document.execCommand(`copy`);
        return (document.body.removeChild(t), n);
      } catch {
        return !1;
      }
    },
    R = i(async () => {
      let e = !1;
      try {
        s !== void 0 && s.clipboard?.writeText
          ? (await s.clipboard.writeText(I), (e = !0))
          : typeof document < `u` && (e = L(I));
      } catch {
        typeof document < `u` && (e = L(I));
      }
      (e && (F(!0), setTimeout(() => F(!1), 2e3)), o && M(o), h?.());
    }, [I, h, o, M]);
  return d(v.button, {
    type: `button`,
    style: {
      fontFamily: `Inter`,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1,
      display: `inline-flex`,
      position: `relative`,
      placeItems: `center`,
      placeContent: `center`,
      whiteSpace: `nowrap`,
      backgroundColor: l,
      color: u,
      borderRadius: j,
      padding: A,
      cursor: `pointer`,
      userSelect: `none`,
      letterSpacing: `-0.2px`,
      WebkitTapHighlightColor: `rgba(0, 0, 0, 0)`,
      border: `none`,
      outline: `none`,
      ...m,
      ...f,
    },
    onClick: R,
    ...k,
    whileHover: p,
    transition: p?.transition,
    onFocus: (e) => {
      ((e.currentTarget.style.outline = `none`),
        (e.currentTarget.style.border = `none`),
        (e.currentTarget.style.boxShadow = `none`));
    },
    onBlur: (e) => {
      ((e.currentTarget.style.outline = `none`),
        (e.currentTarget.style.border = `none`),
        (e.currentTarget.style.boxShadow = `none`));
    },
    onMouseDown: (e) => {
      ((e.currentTarget.style.outline = `none`),
        (e.currentTarget.style.border = `none`),
        (e.currentTarget.style.boxShadow = `none`));
    },
    onMouseUp: (e) => {
      ((e.currentTarget.style.outline = `none`),
        (e.currentTarget.style.border = `none`),
        (e.currentTarget.style.boxShadow = `none`));
    },
    "aria-live": `polite`,
    "aria-label": t,
    children: [
      c(`span`, {
        "aria-hidden": !0,
        style: {
          position: `absolute`,
          visibility: `hidden`,
          whiteSpace: `nowrap`,
          pointerEvents: `none`,
        },
        children: t,
      }),
      d(`span`, {
        style: { position: `relative`, display: `grid`, placeItems: `center` },
        children: [
          c(
            v.span,
            {
              style: { gridArea: `1 / 1`, whiteSpace: `nowrap` },
              initial: !1,
              animate: { opacity: +!N },
              transition: { duration: 0.25 },
              children: t,
            },
            `label`
          ),
          c(
            v.span,
            {
              style: { gridArea: `1 / 1`, whiteSpace: `nowrap` },
              initial: !1,
              animate: { opacity: +!!N },
              transition: { duration: 0.25 },
              "aria-hidden": !N,
              children: r,
            },
            `success`
          ),
        ],
      }),
    ],
  });
}
var oe = e(() => {
    (r(),
      f(),
      p(),
      C(),
      _(),
      (J.displayName = `Clipboard`),
      L(J, {
        content: {
          type: N.String,
          title: `Content`,
          displayTextArea: !0,
          defaultValue: `When clicked, this will be copied to the clipboard.`,
        },
        label: { title: `Label`, type: N.String, defaultValue: `Copy to Clipboard` },
        success: { title: `Success`, type: N.String, defaultValue: `Copied!` },
        trackingId: { title: `Tracking`, type: N.TrackingId, placeholder: `ID` },
        fill: { type: N.Color, title: `Fill`, defaultValue: `#06F` },
        color: { type: N.Color, title: `Text`, defaultValue: `#FFF` },
        font: {
          type: N.Font,
          title: `Font`,
          controls: `extended`,
          defaultValue: { fontFamily: `Inter`, fontWeight: 500, fontSize: 16, lineHeight: 1 },
        },
        hoverOptions: {
          type: N.Object,
          title: `Hover`,
          buttonTitle: `Effect`,
          optional: !0,
          controls: {
            scale: {
              type: N.Number,
              title: `Scale`,
              min: 0,
              max: 10,
              displayStepper: !0,
              step: 0.01,
              defaultValue: 1.05,
            },
            backgroundColor: {
              type: N.Color,
              title: `Fill`,
              defaultValue: `#0088FF`,
              optional: !0,
            },
            color: { type: N.Color, title: `Color`, defaultValue: `#FFF`, optional: !0 },
            transition: {
              type: N.Transition,
              title: `Transition`,
              defaultValue: { type: `spring`, stiffness: 400, damping: 30 },
            },
          },
        },
        padding: {
          title: `Padding`,
          type: N.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 10,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          title: `Radius`,
          type: N.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
          defaultValue: 50,
        },
      }));
  }),
  se,
  ce,
  le,
  Y,
  ue = e(() => {
    (f(),
      C(),
      p(),
      (se = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 5.59 10.58 L 1.42 6.41 L 0 7.82 L 5.59 13.41 L 17.59 1.41 L 16.18 0 Z" fill="var(--esondr, rgb(0,0,0))" height="13.409979999999997px" id="KG12ReyXf" transform="translate(3.205 5.295)" width="17.590040000000002px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (ce = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(v.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (le = ({ fill: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        K5AAorpEW: e ?? i.K5AAorpEW ?? `rgb(0, 0, 0)`,
      })),
      (Y = O(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, K5AAorpEW: o, ...s } = le(e);
          return c(ce, {
            ...s,
            className: x(`framer-bVPUk`, r),
            layoutId: i,
            ref: t,
            style: { "--esondr": o, ...n },
          });
        }),
        [
          `.framer-bVPUk { -webkit-mask: ${se}; aspect-ratio: 1; background-color: var(--esondr); mask: ${se}; width: 24px; }`,
        ],
        `framer-bVPUk`
      )),
      (Y.displayName = `Check`),
      L(Y, {
        K5AAorpEW: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: N.Color },
      }));
  });
function de(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te,
  X,
  Ee = e(() => {
    (f(),
      C(),
      _(),
      p(),
      ae(),
      oe(),
      ue(),
      V(),
      (fe = S(q)),
      (pe = S(Y)),
      (me = S(J)),
      (he = { QLY3uPkP_: { hover: !0 } }),
      (ge = [`QLY3uPkP_`, `i6YAposbu`]),
      (_e = `framer-lyRkq`),
      (ve = { i6YAposbu: `framer-v-ebxuie`, QLY3uPkP_: `framer-v-nfhh5h` }),
      (ye = { damping: 45, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (be = (e, t) => `translate(-50%, -50%) ${t}`),
      (xe = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: n });
      }),
      (Se = { Copied: `i6YAposbu`, Default: `QLY3uPkP_` }),
      (Ce = v.create(o)),
      (we = ({ email: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        nj02ca9i4: e ?? i.nj02ca9i4,
        variant: Se[i.variant] ?? i.variant ?? `QLY3uPkP_`,
      })),
      (Te = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = O(
        l(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = m(),
            { activeLocale: s, setLocale: l } = F();
          E();
          let { style: u, className: f, layoutId: p, variant: h, nj02ca9i4: _, ...b } = we(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: D,
              gestureVariant: O,
              isLoading: A,
              setGestureState: N,
              setVariant: P,
              variants: I,
            } = M({
              cycleOrder: ge,
              defaultVariant: `QLY3uPkP_`,
              enabledGestures: he,
              ref: r,
              variant: h,
              variantClassNames: ve,
            }),
            L = Te(e, I),
            { activeVariantCallback: z, delay: B } = y(S),
            V = z(async (...e) => {
              (N({ isPressed: !1 }), P(`i6YAposbu`));
            });
          j(S, {
            i6YAposbu: z(async (...e) => {
              await B(() => P(`QLY3uPkP_`, !0), 4e3);
            }),
          });
          let ee = x(_e, H);
          return c(g, {
            id: p ?? i,
            children: c(Ce, {
              animate: I,
              initial: !1,
              children: c(xe, {
                value: ye,
                children: d(v.div, {
                  ...b,
                  ...D,
                  className: x(ee, `framer-nfhh5h`, f, C),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: L,
                  layoutId: `QLY3uPkP_`,
                  onTap: V,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-11144164-8802-4fdd-91a6-c0ce5547e6d2, rgba(255, 255, 255, 0.16))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...u,
                  },
                  variants: {
                    "QLY3uPkP_-hover": {
                      "--border-color": `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                    },
                  },
                  ...de(
                    {
                      "QLY3uPkP_-hover": { "data-framer-name": void 0 },
                      i6YAposbu: { "data-framer-name": `Copied` },
                    },
                    S,
                    O
                  ),
                  children: [
                    d(v.div, {
                      className: `framer-y5p93c`,
                      "data-framer-name": `Default`,
                      layoutDependency: L,
                      layoutId: `U4A1x6xe8`,
                      style: { opacity: 1 },
                      variants: { "QLY3uPkP_-hover": { opacity: 1 }, i6YAposbu: { opacity: 0 } },
                      children: [
                        c(v.div, {
                          className: `framer-1ali243`,
                          "data-framer-name": `Icon`,
                          layoutDependency: L,
                          layoutId: `qJCU1MsMV`,
                          children: c(q, {
                            animated: !0,
                            className: `framer-1441a6q`,
                            layoutDependency: L,
                            layoutId: `YmrlEsmjv`,
                            style: {
                              "--esondr": `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                            },
                          }),
                        }),
                        c(R, {
                          __fromCanvasComponent: !0,
                          children: c(o, {
                            children: c(v.p, {
                              className: `framer-styles-preset-fd9xae`,
                              "data-styles-preset": `Z8Dl3fozE`,
                              children: `Copy Email`,
                            }),
                          }),
                          className: `framer-22zt34`,
                          fonts: [`Inter`],
                          layoutDependency: L,
                          layoutId: `whfNSCxBY`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    d(v.div, {
                      className: `framer-8y3fu6`,
                      "data-framer-name": `Copied`,
                      layoutDependency: L,
                      layoutId: `w53W3Xr7o`,
                      style: { opacity: 0 },
                      transformTemplate: be,
                      variants: { i6YAposbu: { opacity: 1 } },
                      children: [
                        c(v.div, {
                          className: `framer-16qskrh`,
                          "data-framer-name": `Icon`,
                          layoutDependency: L,
                          layoutId: `br4hrmT20`,
                          children: c(Y, {
                            animated: !0,
                            className: `framer-9ln24b`,
                            layoutDependency: L,
                            layoutId: `v3P31adXA`,
                            style: {
                              "--esondr": `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                            },
                          }),
                        }),
                        c(R, {
                          __fromCanvasComponent: !0,
                          children: c(o, {
                            children: c(v.p, {
                              className: `framer-styles-preset-fd9xae`,
                              "data-styles-preset": `Z8Dl3fozE`,
                              children: `Copied`,
                            }),
                          }),
                          className: `framer-ihfhy1`,
                          fonts: [`Inter`],
                          layoutDependency: L,
                          layoutId: `se7NEC4cJ`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    c(k, {
                      children: c(T, {
                        className: `framer-1cf4m45-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: L,
                        layoutId: `NMFtC0I7i-container`,
                        nodeId: `NMFtC0I7i`,
                        rendersWithMotion: !0,
                        scopeId: `EAzFjqfVv`,
                        style: { opacity: 0 },
                        children: c(J, {
                          borderRadius: 0,
                          bottomLeftRadius: 0,
                          bottomRightRadius: 0,
                          color: `var(--token-be480574-d45c-4d37-bf99-666b1aa76a6a, rgb(0, 0, 0))`,
                          content: _,
                          fill: `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                          font: {},
                          height: `100%`,
                          id: `NMFtC0I7i`,
                          isMixedBorderRadius: !1,
                          label: `Copy`,
                          layoutId: `NMFtC0I7i`,
                          padding: 0,
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingPerSide: !0,
                          paddingRight: 20,
                          paddingTop: 10,
                          style: { height: `100%`, width: `100%` },
                          success: `Copied!`,
                          topLeftRadius: 0,
                          topRightRadius: 0,
                          width: `100%`,
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
          `.framer-lyRkq.framer-1ercdsz, .framer-lyRkq .framer-1ercdsz { display: block; }`,
          `.framer-lyRkq.framer-nfhh5h { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-width: 160px; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-lyRkq .framer-y5p93c { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; user-select: none; width: 1px; }`,
          `.framer-lyRkq .framer-1ali243 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; user-select: none; width: min-content; z-index: 2; }`,
          `.framer-lyRkq .framer-1441a6q { -webkit-user-select: none; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; user-select: none; width: 14px; }`,
          `.framer-lyRkq .framer-22zt34, .framer-lyRkq .framer-ihfhy1 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-lyRkq .framer-8y3fu6 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; user-select: none; width: min-content; z-index: 1; }`,
          `.framer-lyRkq .framer-16qskrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-lyRkq .framer-9ln24b { flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 14px; }`,
          `.framer-lyRkq .framer-1cf4m45-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 3; }`,
          `.framer-lyRkq.framer-v-ebxuie .framer-9ln24b { height: var(--framer-aspect-ratio-supported, 17px); width: 17px; }`,
          ...z,
          `.framer-lyRkq[data-border="true"]::after, .framer-lyRkq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-lyRkq`
      )),
      (X.displayName = `Copy Email`),
      (X.defaultProps = { height: 38, width: 160 }),
      L(X, {
        variant: {
          options: [`QLY3uPkP_`, `i6YAposbu`],
          optionTitles: [`Default`, `Copied`],
          title: `Variant`,
          type: N.Enum,
        },
        nj02ca9i4: {
          defaultValue: ``,
          description: `When clicked, this content will be copied to the clipboard.`,
          displayTextArea: !0,
          title: `Email`,
          type: N.String,
        },
        onnj02ca9i4Change: { changes: `nj02ca9i4`, type: N.ChangeHandler },
      }),
      b(
        X,
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
          ...fe,
          ...pe,
          ...me,
          ...w(B),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function De(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Z,
  Be = e(() => {
    (f(),
      C(),
      _(),
      p(),
      te(),
      Ee(),
      W(),
      (Oe = S(G)),
      (ke = S(X)),
      (Ae = [`skMoxZIno`, `sp1nHP6fo`, `V5hHX0kYx`]),
      (je = `framer-wDiAz`),
      (Me = {
        skMoxZIno: `framer-v-wxwgv3`,
        sp1nHP6fo: `framer-v-1pr7sey`,
        V5hHX0kYx: `framer-v-u978p`,
      }),
      (Ne = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pe = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Fe = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: n });
      }),
      (Ie = { Desktop: `skMoxZIno`, Mobile: `V5hHX0kYx`, Tablet: `sp1nHP6fo` }),
      (Le = v.create(o)),
      (Re = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ie[r.variant] ?? r.variant ?? `skMoxZIno`,
      })),
      (ze = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = O(
        l(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = m(),
            { activeLocale: s, setLocale: l } = F(),
            u = E(),
            { style: f, className: p, layoutId: h, variant: _, ...y } = Re(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: D,
              isLoading: O,
              setGestureState: A,
              setVariant: j,
              variants: N,
            } = M({
              cycleOrder: Ae,
              defaultVariant: `skMoxZIno`,
              ref: r,
              variant: _,
              variantClassNames: Me,
            }),
            P = ze(e, N),
            I = x(je, ne),
            L = () => b !== `V5hHX0kYx`;
          return c(g, {
            id: h ?? i,
            children: c(Le, {
              animate: N,
              initial: !1,
              children: c(Fe, {
                value: Ne,
                children: d(v.section, {
                  ...y,
                  ...w,
                  className: x(I, `framer-wxwgv3`, p, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: P,
                  layoutId: `skMoxZIno`,
                  ref: r,
                  style: { ...f },
                  ...De(
                    {
                      sp1nHP6fo: { "data-framer-name": `Tablet` },
                      V5hHX0kYx: { "data-framer-name": `Mobile` },
                    },
                    b,
                    D
                  ),
                  children: [
                    L() &&
                      c(v.div, {
                        className: `framer-mzykpp`,
                        "data-framer-name": `Spacer`,
                        layoutDependency: P,
                        layoutId: `ECEv_q7XR`,
                      }),
                    d(v.div, {
                      className: `framer-16ytugw`,
                      "data-framer-name": `Container`,
                      layoutDependency: P,
                      layoutId: `U1D1LYqwj`,
                      children: [
                        c(v.div, {
                          className: `framer-1snzrh6`,
                          "data-framer-name": `Text`,
                          layoutDependency: P,
                          layoutId: `I1Pv_qXwe`,
                          children: c(R, {
                            __fromCanvasComponent: !0,
                            children: c(o, {
                              children: c(v.p, {
                                className: `framer-styles-preset-1qo2pdz`,
                                "data-styles-preset": `aYHAplX4I`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255)))`,
                                },
                                children: `Se interessou pelo meu trabalho? Entra em contato comigo!`,
                              }),
                            }),
                            className: `framer-a30n0f`,
                            "data-framer-name": `Ready to work together? Let's talk about freelance projects, collaborations, and full-time roles.`,
                            fonts: [`Inter`],
                            layoutDependency: P,
                            layoutId: `MjgNRQYEp`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        d(v.div, {
                          className: `framer-15d9zhx`,
                          "data-framer-name": `Buttons`,
                          layoutDependency: P,
                          layoutId: `MP0riIcgo`,
                          children: [
                            c(k, {
                              height: 36,
                              ...De(
                                { V5hHX0kYx: { y: (u?.y || 0) + 100 + 0 + 0 + 140 + 0 + 0 } },
                                b,
                                D
                              ),
                              children: c(T, {
                                className: `framer-sbd1fg-container`,
                                layoutDependency: P,
                                layoutId: `n_IejYF_q-container`,
                                nodeId: `n_IejYF_q`,
                                rendersWithMotion: !0,
                                scopeId: `bQB2O3i3c`,
                                children: c(G, {
                                  EswQgB04a: `10px 20px 10px 20px`,
                                  height: `100%`,
                                  id: `n_IejYF_q`,
                                  layoutId: `n_IejYF_q`,
                                  N77i1gsbA: `70px`,
                                  T928K1VAC: !0,
                                  uEebyM5Gp: `digopena17@gmail.com`,
                                  width: `100%`,
                                  x59Tl7bcL: `mailto:digopena17@gmail.com`,
                                }),
                              }),
                            }),
                            c(k, {
                              height: 38,
                              ...De(
                                { V5hHX0kYx: { y: (u?.y || 0) + 100 + 0 + 0 + 140 + 0 + 44 } },
                                b,
                                D
                              ),
                              children: c(T, {
                                className: `framer-gpzxyl-container`,
                                layoutDependency: P,
                                layoutId: `I7vpFAa9T-container`,
                                nodeId: `I7vpFAa9T`,
                                rendersWithMotion: !0,
                                scopeId: `bQB2O3i3c`,
                                children: c(X, {
                                  height: `100%`,
                                  id: `I7vpFAa9T`,
                                  layoutId: `I7vpFAa9T`,
                                  nj02ca9i4: `mailto:digopena17@gmail.com`,
                                  variant: Pe(`QLY3uPkP_`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-wDiAz.framer-bkc45i, .framer-wDiAz .framer-bkc45i { display: block; }`,
          `.framer-wDiAz.framer-wxwgv3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 200px 20px 200px 20px; position: relative; width: 1200px; }`,
          `.framer-wDiAz .framer-mzykpp { align-self: stretch; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-wDiAz .framer-16ytugw { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-wDiAz .framer-1snzrh6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-wDiAz .framer-a30n0f { flex: none; height: auto; max-width: 460px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-wDiAz .framer-15d9zhx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-wDiAz .framer-sbd1fg-container, .framer-wDiAz .framer-gpzxyl-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-wDiAz.framer-v-1pr7sey.framer-wxwgv3 { padding: 160px 20px 200px 20px; }`,
          `.framer-wDiAz.framer-v-u978p.framer-wxwgv3 { flex-direction: column; padding: 100px 12px 100px 12px; width: 390px; }`,
          `.framer-wDiAz.framer-v-u978p .framer-16ytugw { flex: none; width: 100%; }`,
          `.framer-wDiAz.framer-v-u978p .framer-15d9zhx { flex-direction: column; }`,
          ...U,
        ],
        `framer-wDiAz`
      )),
      (Z.displayName = `CTA`),
      (Z.defaultProps = { height: 504, width: 1200 }),
      L(Z, {
        variant: {
          options: [`skMoxZIno`, `sp1nHP6fo`, `V5hHX0kYx`],
          optionTitles: [`Desktop`, `Tablet`, `Mobile`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      b(
        Z,
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
          ...Oe,
          ...ke,
          ...w(ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(G, {}, t), A(X, {}, t)])) }));
  }),
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Q,
  Je = e(() => {
    (f(),
      C(),
      _(),
      p(),
      V(),
      (Ve = `framer-NjRjd`),
      (He = { KC_odbB90: `framer-v-iayj0u` }),
      (Ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (We = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: n });
      }),
      (Ge = v.create(o)),
      (Ke = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        zswCrADr9: n ?? i.zswCrADr9 ?? `Title`,
      })),
      (qe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = O(
        l(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = m(),
            { activeLocale: s, setLocale: l } = F();
          E();
          let { style: u, className: d, layoutId: f, variant: p, zswCrADr9: h, ..._ } = Ke(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = M({ defaultVariant: `KC_odbB90`, ref: r, variant: p, variantClassNames: He }),
            A = qe(e, k),
            j = x(Ve, H);
          return c(g, {
            id: f ?? i,
            children: c(Ge, {
              animate: k,
              initial: !1,
              children: c(We, {
                value: Ue,
                children: c(v.div, {
                  ..._,
                  ...C,
                  className: x(j, `framer-iayj0u`, d, b),
                  "data-framer-name": `Primary`,
                  layoutDependency: A,
                  layoutId: `KC_odbB90`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 2,
                    borderBottomRightRadius: 2,
                    borderTopLeftRadius: 2,
                    borderTopRightRadius: 2,
                    ...u,
                  },
                  children: c(R, {
                    __fromCanvasComponent: !0,
                    children: c(o, {
                      children: c(v.p, {
                        className: `framer-styles-preset-fd9xae`,
                        "data-styles-preset": `Z8Dl3fozE`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, rgb(0, 0, 0)))`,
                        },
                        children: `Title`,
                      }),
                    }),
                    className: `framer-2roeo0`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: A,
                    layoutId: `BVqzMuc4g`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, rgb(0, 0, 0))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: h,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-NjRjd.framer-1uqzav, .framer-NjRjd .framer-1uqzav { display: block; }`,
          `.framer-NjRjd.framer-iayj0u { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px 14px 3px 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-NjRjd .framer-2roeo0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          ...z,
        ],
        `framer-NjRjd`
      )),
      (Q.displayName = `Work card tag`),
      (Q.defaultProps = { height: 22, width: 57 }),
      L(Q, {
        zswCrADr9: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: N.String },
      }),
      b(
        Q,
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
          ...w(B),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ye(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  $,
  lt = e(() => {
    (f(),
      C(),
      _(),
      p(),
      te(),
      V(),
      Je(),
      (Xe = S(Q)),
      (Ze = { AXLVp1gjZ: { hover: !0 } }),
      (Qe = [`AXLVp1gjZ`, `TmKZ5po1Z`]),
      ($e = `framer-cDix7`),
      (et = { AXLVp1gjZ: `framer-v-dt48cv`, TmKZ5po1Z: `framer-v-1vot19w` }),
      (tt = { delay: 0, duration: 0.7, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (nt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (rt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (it = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = u(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(h.Provider, { value: a, children: n });
      }),
      (at = { "Primary Mobile": `TmKZ5po1Z`, Primary: `AXLVp1gjZ` }),
      (ot = v.create(o)),
      (st = ({
        buttonTitle: e,
        height: t,
        id: n,
        image: r,
        industry: i,
        link: a,
        title: o,
        width: s,
        year: c,
        ...l
      }) => ({
        ...l,
        AsXZvQH2O: o ?? l.AsXZvQH2O ?? `Title`,
        eQN1z6K6Q: i ?? l.eQN1z6K6Q ?? `Industry`,
        F1ztRv87T: r ?? l.F1ztRv87T,
        QmPpMkHkN: a ?? l.QmPpMkHkN,
        variant: at[l.variant] ?? l.variant ?? `AXLVp1gjZ`,
        Z6CWcM6iF: e ?? l.Z6CWcM6iF ?? `View project`,
        znQpwy6ZQ: c ?? l.znQpwy6ZQ ?? `2025`,
      })),
      (ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = O(
        l(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = m(),
            { activeLocale: s, setLocale: l } = F(),
            u = E(),
            {
              style: f,
              className: p,
              layoutId: h,
              variant: _,
              AsXZvQH2O: y,
              F1ztRv87T: b,
              znQpwy6ZQ: S,
              eQN1z6K6Q: C,
              QmPpMkHkN: w,
              Z6CWcM6iF: O,
              ...A
            } = st(e),
            {
              baseVariant: j,
              classNames: N,
              clearLoadingGesture: P,
              gestureHandlers: L,
              gestureVariant: z,
              isLoading: B,
              setGestureState: V,
              setVariant: ee,
              variants: U,
            } = M({
              cycleOrder: Qe,
              defaultVariant: `AXLVp1gjZ`,
              enabledGestures: Ze,
              ref: r,
              variant: _,
              variantClassNames: et,
            }),
            W = ct(e, U),
            te = x($e, ne, H),
            G = nt(C),
            K = (e) => j === `TmKZ5po1Z` || e,
            re = nt(S);
          return c(g, {
            id: h ?? i,
            children: c(ot, {
              animate: U,
              initial: !1,
              children: c(it, {
                value: tt,
                children: c(D, {
                  href: w,
                  motionChild: !0,
                  nodeId: `AXLVp1gjZ`,
                  openInNewTab: !1,
                  scopeId: `XHQHOXg25`,
                  smoothScroll: !1,
                  children: d(v.a, {
                    ...A,
                    ...L,
                    className: `${x(te, `framer-dt48cv`, p, N)} framer-q7e4j3`,
                    "data-framer-name": `Primary`,
                    layoutDependency: W,
                    layoutId: `AXLVp1gjZ`,
                    ref: r,
                    style: { ...f },
                    ...Ye(
                      {
                        "AXLVp1gjZ-hover": { "data-framer-name": void 0 },
                        TmKZ5po1Z: { "data-framer-name": `Primary Mobile` },
                      },
                      j,
                      z
                    ),
                    children: [
                      d(v.div, {
                        className: `framer-ytzlzg`,
                        "data-framer-name": `Project info`,
                        layoutDependency: W,
                        layoutId: `r8PqFAG5r`,
                        children: [
                          c(R, {
                            __fromCanvasComponent: !0,
                            children: c(o, {
                              children: c(v.h3, {
                                className: `framer-styles-preset-1qo2pdz`,
                                "data-styles-preset": `aYHAplX4I`,
                                children: `Project Title`,
                              }),
                            }),
                            className: `framer-p0svmf`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: W,
                            layoutId: `JTXZwFokj`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          d(v.div, {
                            className: `framer-1i6xm21`,
                            "data-framer-name": `Year & Industry`,
                            layoutDependency: W,
                            layoutId: `e_JLW9CQU`,
                            children: [
                              K(G !== !1) &&
                                c(k, {
                                  height: 22,
                                  children: c(T, {
                                    className: `framer-2ns15t-container`,
                                    layoutDependency: W,
                                    layoutId: `fQ7pmgZs3-container`,
                                    nodeId: `fQ7pmgZs3`,
                                    rendersWithMotion: !0,
                                    scopeId: `XHQHOXg25`,
                                    children: c(Q, {
                                      height: `100%`,
                                      id: `fQ7pmgZs3`,
                                      layoutId: `fQ7pmgZs3`,
                                      width: `100%`,
                                      zswCrADr9: C,
                                    }),
                                  }),
                                }),
                              re !== !1 &&
                                c(k, {
                                  height: 22,
                                  children: c(T, {
                                    className: `framer-1k1ullo-container`,
                                    layoutDependency: W,
                                    layoutId: `AOEb92aJ2-container`,
                                    nodeId: `AOEb92aJ2`,
                                    rendersWithMotion: !0,
                                    scopeId: `XHQHOXg25`,
                                    children: c(Q, {
                                      height: `100%`,
                                      id: `AOEb92aJ2`,
                                      layoutId: `AOEb92aJ2`,
                                      width: `100%`,
                                      zswCrADr9: S,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      d(v.div, {
                        className: `framer-f0fqoc`,
                        "data-framer-name": `Image`,
                        layoutDependency: W,
                        layoutId: `aIviWRosj`,
                        style: {
                          borderBottomLeftRadius: 2,
                          borderBottomRightRadius: 2,
                          borderTopLeftRadius: 2,
                          borderTopRightRadius: 2,
                        },
                        children: [
                          c(I, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              pixelHeight: 950,
                              pixelWidth: 950,
                              sizes: u?.width || `100vw`,
                              ...rt(b),
                            },
                            className: `framer-8jj8zp`,
                            "data-framer-name": `Thumbnail`,
                            layoutDependency: W,
                            layoutId: `DzA9SLZLi`,
                            style: { scale: 1 },
                            variants: { "AXLVp1gjZ-hover": { scale: 1.07 } },
                          }),
                          c(v.div, {
                            className: `framer-1qua0vw`,
                            "data-framer-name": `Button`,
                            layoutDependency: W,
                            layoutId: `E7vk0tW0e`,
                            style: {
                              backdropFilter: `blur(10px)`,
                              backgroundColor: `rgba(0, 0, 0, 0.2)`,
                              borderBottomLeftRadius: 4,
                              borderBottomRightRadius: 4,
                              borderTopLeftRadius: 4,
                              borderTopRightRadius: 4,
                              opacity: 0,
                              WebkitBackdropFilter: `blur(10px)`,
                            },
                            variants: { "AXLVp1gjZ-hover": { opacity: 1 } },
                            children: c(R, {
                              __fromCanvasComponent: !0,
                              children: c(o, {
                                children: c(v.p, {
                                  className: `framer-styles-preset-fd9xae`,
                                  "data-styles-preset": `Z8Dl3fozE`,
                                  children: `View project`,
                                }),
                              }),
                              className: `framer-1uz4xvs`,
                              fonts: [`Inter`],
                              layoutDependency: W,
                              layoutId: `x0ZqtmhIL`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: O,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-cDix7.framer-q7e4j3, .framer-cDix7 .framer-q7e4j3 { display: block; }`,
          `.framer-cDix7.framer-dt48cv { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 566px; }`,
          `.framer-cDix7 .framer-ytzlzg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-cDix7 .framer-p0svmf { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-cDix7 .framer-1i6xm21 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-cDix7 .framer-2ns15t-container, .framer-cDix7 .framer-1k1ullo-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-cDix7 .framer-f0fqoc { align-content: center; align-items: center; aspect-ratio: 1.3476190476190477 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-cDix7 .framer-8jj8zp { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-cDix7 .framer-1qua0vw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 6px 16px 6px 16px; position: relative; width: min-content; z-index: 8; }`,
          `.framer-cDix7 .framer-1uz4xvs { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-cDix7.framer-v-1vot19w.framer-dt48cv { cursor: unset; }`,
          `.framer-cDix7.framer-v-1vot19w .framer-ytzlzg { order: 0; }`,
          `.framer-cDix7.framer-v-1vot19w .framer-f0fqoc { order: 1; }`,
          ...U,
          ...z,
        ],
        `framer-cDix7`
      )),
      ($.displayName = `Work card`),
      ($.defaultProps = { height: 456, width: 566 }),
      L($, {
        variant: {
          options: [`AXLVp1gjZ`, `TmKZ5po1Z`],
          optionTitles: [`Primary`, `Primary Mobile`],
          title: `Variant`,
          type: N.Enum,
        },
        AsXZvQH2O: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: N.String },
        onAsXZvQH2OChange: { changes: `AsXZvQH2O`, type: N.ChangeHandler },
        F1ztRv87T: { title: `Image`, type: N.ResponsiveImage },
        znQpwy6ZQ: { defaultValue: `2025`, displayTextArea: !1, title: `Year`, type: N.String },
        onznQpwy6ZQChange: { changes: `znQpwy6ZQ`, type: N.ChangeHandler },
        eQN1z6K6Q: {
          defaultValue: `Industry`,
          displayTextArea: !1,
          title: `Industry`,
          type: N.String,
        },
        oneQN1z6K6QChange: { changes: `eQN1z6K6Q`, type: N.ChangeHandler },
        QmPpMkHkN: { title: `Link`, type: N.Link },
        Z6CWcM6iF: {
          defaultValue: `View project`,
          displayTextArea: !1,
          title: `Button title`,
          type: N.String,
        },
        onZ6CWcM6iFChange: { changes: `Z6CWcM6iF`, type: N.ChangeHandler },
      }),
      b(
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
          ...Xe,
          ...w(ee),
          ...w(B),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(Q, {}, t)])) }));
  });
export { Be as i, lt as n, Z as r, $ as t };
//# sourceMappingURL=XHQHOXg25.Cykr4Eul.mjs.map
