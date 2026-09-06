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
  C as h,
  D as g,
  F as _,
  H as v,
  I as y,
  J as b,
  L as x,
  O as S,
  _ as C,
  _t as w,
  a as T,
  at as te,
  b as ne,
  c as E,
  ct as D,
  dt as O,
  et as k,
  ft as A,
  g as re,
  ht as j,
  i as M,
  it as ie,
  k as N,
  mt as P,
  n as ae,
  o as F,
  rt as oe,
  st as I,
  u as se,
  ut as ce,
  vt as L,
  w as R,
  x as z,
} from "./framer.C5e9eYQm.mjs";
import {
  a as le,
  c as ue,
  d as B,
  f as V,
  l as de,
  p as H,
  s as fe,
  u as U,
} from "./shared-lib.DP-o-NQ_.mjs";
import { a as pe, i as me, o as he, r as ge } from "./we4cYbYfs.CzcUxBQ2.mjs";
import { i as _e, n as ve, r as W, t as G } from "./XHQHOXg25.Cykr4Eul.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./JapXF6IZs.DF51XpHv.mjs";
import Ce, { t as we } from "./O6T9DWbsmyt5MK3CtRjZhdmDlEM2K8I4zGsinZeThd8.DQ3jKlIJ.mjs";
function Te(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  K,
  Ie = e(() => {
    (c(),
      v(),
      p(),
      l(),
      he(),
      (Ee = w(m.div)),
      (De = [`J9ibkFNUj`, `aGYHcknGw`]),
      (Oe = `framer-Y7jnj`),
      (ke = { aGYHcknGw: `framer-v-1tgt6su`, J9ibkFNUj: `framer-v-12mqxh3` }),
      (Ae = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (je = ({ value: e, children: n }) => {
        let r = t(d),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(d.Provider, { value: s, children: n });
      }),
      (Me = { Desktop: `J9ibkFNUj`, Mobile: `aGYHcknGw` }),
      (Ne = m.create(r)),
      (Pe = ({ height: e, id: t, subtitle: n, subtitle2: r, width: i, ...a }) => ({
        ...a,
        oZ3FJ2ZY9: r ?? a.oZ3FJ2ZY9 ?? `Subtitle`,
        variant: Me[a.variant] ?? a.variant ?? `J9ibkFNUj`,
        Ve5UQw6hg: n ?? a.Ve5UQw6hg ?? `Subtitle`,
      })),
      (Fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = j(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = u(),
            { activeLocale: ee, setLocale: l } = I();
          k();
          let {
              style: d,
              className: p,
              layoutId: h,
              variant: _,
              Ve5UQw6hg: v,
              oZ3FJ2ZY9: y,
              ...b
            } = Pe(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: ne,
              setVariant: E,
              variants: D,
            } = P({
              cycleOrder: De,
              defaultVariant: `J9ibkFNUj`,
              ref: o,
              variant: _,
              variantClassNames: ke,
            }),
            O = Fe(e, D),
            A = g(Oe, ge);
          return i(f, {
            id: h ?? c,
            children: i(Ne, {
              animate: D,
              initial: !1,
              children: i(je, {
                value: Ae,
                children: i(m.div, {
                  ...b,
                  ...w,
                  className: g(A, `framer-12mqxh3`, p, S),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `J9ibkFNUj`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-f78da199-5853-4724-b941-a7b8656ff4db, rgba(255, 255, 255, 0.1))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...d,
                  },
                  ...Te({ aGYHcknGw: { "data-framer-name": `Mobile` } }, x, T),
                  children: s(Ee, {
                    __framer__spring: {
                      bounce: 0,
                      damping: 30,
                      delay: 0,
                      duration: 0.8,
                      durationBasedSpring: !1,
                      ease: [0.44, 0, 0.56, 1],
                      mass: 0.1,
                      stiffness: 130,
                      type: `spring`,
                    },
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
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
                          y: 40,
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
                    className: `framer-117ymok`,
                    "data-framer-name": `Container`,
                    layoutDependency: O,
                    layoutId: `TH0dLYNyp`,
                    children: [
                      i(z, {
                        __fromCanvasComponent: !0,
                        children: i(r, {
                          children: i(m.p, {
                            className: `framer-styles-preset-1qo2pdz`,
                            "data-styles-preset": `aYHAplX4I`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `justify`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.6)))`,
                            },
                            children: `Subtitle 2`,
                          }),
                        }),
                        className: `framer-qlfnu0`,
                        "data-framer-name": `Subtitle 2`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `cO7V4MIB1`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.6))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: y,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      i(z, {
                        __fromCanvasComponent: !0,
                        children: i(r, {
                          children: i(m.p, {
                            className: `framer-styles-preset-1qo2pdz`,
                            "data-styles-preset": `aYHAplX4I`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `justify`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.6)))`,
                            },
                            children: `Subtitle`,
                          }),
                        }),
                        className: `framer-j9a3s7`,
                        "data-framer-name": `Subtitle`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `wpuLpj6j7`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.6))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Te(
                          {
                            aGYHcknGw: {
                              children: i(r, {
                                children: i(m.p, {
                                  className: `framer-styles-preset-1qo2pdz`,
                                  "data-styles-preset": `aYHAplX4I`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.6)))`,
                                  },
                                  children: `Subtitle`,
                                }),
                              }),
                            },
                          },
                          x,
                          T
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Y7jnj.framer-10gzwoo, .framer-Y7jnj .framer-10gzwoo { display: block; }`,
          `.framer-Y7jnj.framer-12mqxh3 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 12px 0px; position: relative; width: 566px; }`,
          `.framer-Y7jnj .framer-117ymok { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Y7jnj .framer-qlfnu0, .framer-Y7jnj .framer-j9a3s7 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Y7jnj.framer-v-1tgt6su.framer-12mqxh3 { gap: 0px; }`,
          `.framer-Y7jnj.framer-v-1tgt6su .framer-117ymok { flex-direction: column; gap: 12px; }`,
          `.framer-Y7jnj.framer-v-1tgt6su .framer-qlfnu0 { flex: none; order: 0; width: 100%; }`,
          `.framer-Y7jnj.framer-v-1tgt6su .framer-j9a3s7 { flex: none; order: 1; width: 48%; }`,
          ...me,
          `.framer-Y7jnj[data-border="true"]::after, .framer-Y7jnj [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Y7jnj`
      )),
      (K.displayName = `Info list`),
      (K.defaultProps = { height: 36, width: 566 }),
      R(K, {
        variant: {
          options: [`J9ibkFNUj`, `aGYHcknGw`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: F.Enum,
        },
        Ve5UQw6hg: {
          defaultValue: `Subtitle`,
          displayTextArea: !1,
          title: `Subtitle`,
          type: F.String,
        },
        onVe5UQw6hgChange: { changes: `Ve5UQw6hg`, type: F.ChangeHandler },
        oZ3FJ2ZY9: { defaultValue: `Subtitle`, title: `Subtitle 2`, type: F.String },
        onoZ3FJ2ZY9Change: { changes: `oZ3FJ2ZY9`, type: F.ChangeHandler },
      }),
      h(
        K,
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
          ...y(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Le(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Re,
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
  Je = e(() => {
    (c(),
      v(),
      p(),
      l(),
      ye(),
      H(),
      (Re = w(m.div)),
      (ze = [`N2XDigEOP`, `Abceic0jm`]),
      (Be = `framer-o4BWw`),
      (Ve = { Abceic0jm: `framer-v-8n1ya3`, N2XDigEOP: `framer-v-38sxo5` }),
      (He = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ue = ({ value: e, children: n }) => {
        let r = t(d),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(d.Provider, { value: s, children: n });
      }),
      (We = m.create(r)),
      (Ge = { Desktop: `N2XDigEOP`, Mobile: `Abceic0jm` }),
      (Ke = ({ height: e, id: t, number: n, title: r, width: i, ...a }) => ({
        ...a,
        bvnJRpFbX: n ?? a.bvnJRpFbX ?? `00+`,
        rrQ1ahyZL: r ?? a.rrQ1ahyZL ?? `Title`,
        variant: Ge[a.variant] ?? a.variant ?? `N2XDigEOP`,
      })),
      (qe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = j(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = u(),
            { activeLocale: ee, setLocale: l } = I();
          k();
          let {
              style: d,
              className: p,
              layoutId: h,
              variant: _,
              bvnJRpFbX: v,
              rrQ1ahyZL: y,
              ...b
            } = Ke(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: te,
              setGestureState: ne,
              setVariant: E,
              variants: D,
            } = P({
              cycleOrder: ze,
              defaultVariant: `N2XDigEOP`,
              ref: o,
              variant: _,
              variantClassNames: Ve,
            }),
            O = qe(e, D),
            A = g(Be, Se, U);
          return i(f, {
            id: h ?? c,
            children: i(We, {
              animate: D,
              initial: !1,
              children: i(Ue, {
                value: He,
                children: s(Re, {
                  ...b,
                  ...w,
                  __framer__spring: {
                    bounce: 0,
                    damping: 30,
                    delay: 0,
                    duration: 0.8,
                    durationBasedSpring: !1,
                    ease: [0.44, 0, 0.56, 1],
                    mass: 0.1,
                    stiffness: 130,
                    type: `spring`,
                  },
                  __framer__styleTransformEffectEnabled: !0,
                  __framer__transformTargets: [
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
                        y: 40,
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
                  className: g(A, `framer-38sxo5`, p, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: O,
                  layoutId: `N2XDigEOP`,
                  ref: o,
                  style: { ...d },
                  ...Le({ Abceic0jm: { "data-framer-name": `Mobile` } }, x, T),
                  children: [
                    i(z, {
                      __fromCanvasComponent: !0,
                      children: i(r, {
                        children: i(m.h3, {
                          className: `framer-styles-preset-y8m40v`,
                          "data-styles-preset": `JapXF6IZs`,
                          children: `75+`,
                        }),
                      }),
                      className: `framer-1axrm2v`,
                      "data-framer-name": `Number`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `kFbXMPqys`,
                      style: { "--framer-paragraph-spacing": `0px` },
                      text: v,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    i(z, {
                      __fromCanvasComponent: !0,
                      children: i(r, {
                        children: i(m.p, {
                          className: `framer-styles-preset-fd9xae`,
                          "data-styles-preset": `Z8Dl3fozE`,
                          children: `Projects done`,
                        }),
                      }),
                      className: `framer-cfhtxn`,
                      "data-framer-name": `Title`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `X2PP3uGqA`,
                      style: { "--framer-paragraph-spacing": `0px`, opacity: 0.6 },
                      text: y,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-o4BWw.framer-cx3d04, .framer-o4BWw .framer-cx3d04 { display: block; }`,
          `.framer-o4BWw.framer-38sxo5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 175px; }`,
          `.framer-o4BWw .framer-1axrm2v, .framer-o4BWw .framer-cfhtxn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-o4BWw.framer-v-8n1ya3.framer-38sxo5 { align-content: center; align-items: center; flex-direction: row; gap: unset; justify-content: space-between; padding: 12px 0px 0px 0px; width: 380px; }`,
          `.framer-o4BWw.framer-v-8n1ya3 .framer-1axrm2v, .framer-o4BWw.framer-v-8n1ya3 .framer-cfhtxn { white-space: pre; width: auto; }`,
          ...be,
          ...B,
        ],
        `framer-o4BWw`
      )),
      (q.displayName = `Numbers`),
      (q.defaultProps = { height: 119, width: 175 }),
      R(q, {
        variant: {
          options: [`N2XDigEOP`, `Abceic0jm`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: F.Enum,
        },
        bvnJRpFbX: { defaultValue: `00+`, displayTextArea: !1, title: `Number`, type: F.String },
        rrQ1ahyZL: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: F.String },
      }),
      h(
        q,
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
          ...y(xe),
          ...y(V),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ye,
  Xe,
  Ze,
  Qe = e(() => {
    (v(),
      S.loadFonts([
        `GF;Roboto Condensed-regular`,
        `GF;Roboto Condensed-700`,
        `GF;Roboto Condensed-700italic`,
        `GF;Roboto Condensed-italic`,
      ]),
      (Ye = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Roboto Condensed`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `../../assets/fonts/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWyovBM731BKMSK.woff2`,
              weight: `400`,
            },
            {
              family: `Roboto Condensed`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/robotocondensed/v31/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyVVpfBM731BKMSK.woff2`,
              weight: `700`,
            },
            {
              family: `Roboto Condensed`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/robotocondensed/v31/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64f8N5XxjLdSK37o.woff2`,
              weight: `700`,
            },
            {
              family: `Roboto Condensed`,
              openType: !0,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/robotocondensed/v31/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64RgK5XxjLdSK37o.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Xe = [
        `.framer-y60wS .framer-styles-preset-1221qom:not(.rich-text-wrapper), .framer-y60wS .framer-styles-preset-1221qom.rich-text-wrapper h2 { --framer-font-family: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-bold: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-bold-italic: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-italic: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -1.3px; --framer-line-height: 100%; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-background-radius: 0px; --framer-text-color: var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
      ]),
      (Ze = `framer-y60wS`));
  });
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  J,
  ut = e(() => {
    (c(),
      v(),
      p(),
      l(),
      Qe(),
      H(),
      (et = w(m.div)),
      (tt = [`cmHZwc9Pi`, `se6BxZcP4`, `iqiG7nL2n`]),
      (nt = `framer-viIZ7`),
      (rt = {
        cmHZwc9Pi: `framer-v-1ignywr`,
        iqiG7nL2n: `framer-v-1npvnj6`,
        se6BxZcP4: `framer-v-o15mwq`,
      }),
      (it = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (at = ({ value: e, children: n }) => {
        let r = t(d),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(d.Provider, { value: s, children: n });
      }),
      (ot = m.create(r)),
      (st = {
        "Deliverables / Small": `iqiG7nL2n`,
        "Primary / 0.6 Opacity": `se6BxZcP4`,
        Primary: `cmHZwc9Pi`,
      }),
      (ct = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        elwBRh6vb: n ?? i.elwBRh6vb ?? `Deliverables`,
        variant: st[i.variant] ?? i.variant ?? `cmHZwc9Pi`,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = j(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            c = u(),
            { activeLocale: ee, setLocale: l } = I();
          k();
          let { style: d, className: p, layoutId: h, variant: _, elwBRh6vb: v, ...y } = ct(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: T,
              setGestureState: te,
              setVariant: ne,
              variants: E,
            } = P({
              cycleOrder: tt,
              defaultVariant: `cmHZwc9Pi`,
              ref: o,
              variant: _,
              variantClassNames: rt,
            }),
            D = lt(e, E),
            O = g(nt, Ze, U);
          return i(f, {
            id: h ?? c,
            children: i(ot, {
              animate: E,
              initial: !1,
              children: i(at, {
                value: it,
                children: i(m.div, {
                  ...y,
                  ...C,
                  className: g(O, `framer-1ignywr`, p, x),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: D,
                  layoutId: `cmHZwc9Pi`,
                  ref: o,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-f78da199-5853-4724-b941-a7b8656ff4db, rgba(255, 255, 255, 0.1))`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...d,
                  },
                  ...$e(
                    {
                      iqiG7nL2n: { "data-framer-name": `Deliverables / Small` },
                      se6BxZcP4: { "data-framer-name": `Primary / 0.6 Opacity` },
                    },
                    b,
                    w
                  ),
                  children: s(et, {
                    __framer__spring: {
                      bounce: 0,
                      damping: 30,
                      delay: 0,
                      duration: 0.8,
                      durationBasedSpring: !1,
                      ease: [0.44, 0, 0.56, 1],
                      mass: 0.1,
                      stiffness: 130,
                      type: `spring`,
                    },
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
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
                          y: 40,
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
                    className: `framer-t932f2`,
                    "data-framer-name": `Container`,
                    layoutDependency: D,
                    layoutId: `NU96qTZxY`,
                    children: [
                      i(z, {
                        __fromCanvasComponent: !0,
                        children: i(r, {
                          children: i(m.h4, {
                            className: `framer-styles-preset-1221qom`,
                            "data-styles-preset": `vFrosFeio`,
                            style: {
                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255)))`,
                            },
                            children: `website design`,
                          }),
                        }),
                        className: `framer-1uc7hfi`,
                        "data-framer-name": `website design`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `i68g_chqZ`,
                        style: {
                          "--extracted-1eung3n": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                          "--framer-paragraph-spacing": `0px`,
                          opacity: 1,
                        },
                        text: v,
                        variants: { iqiG7nL2n: { opacity: 1 }, se6BxZcP4: { opacity: 0.6 } },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...$e(
                          {
                            iqiG7nL2n: {
                              children: i(r, {
                                children: i(m.h4, {
                                  className: `framer-styles-preset-fd9xae`,
                                  "data-styles-preset": `Z8Dl3fozE`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255)))`,
                                  },
                                  children: `website design`,
                                }),
                              }),
                            },
                          },
                          b,
                          w
                        ),
                      }),
                      i(m.div, {
                        className: `framer-xeroxn`,
                        "data-framer-name": `Dot`,
                        layoutDependency: D,
                        layoutId: `lttzlMA3x`,
                        style: {
                          backgroundColor: `var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.7))`,
                          rotate: 45,
                        },
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
          `.framer-viIZ7.framer-dcep7g, .framer-viIZ7 .framer-dcep7g { display: block; }`,
          `.framer-viIZ7.framer-1ignywr { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 12px 0px; position: relative; width: 498px; }`,
          `.framer-viIZ7 .framer-t932f2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-viIZ7 .framer-1uc7hfi { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-viIZ7 .framer-xeroxn { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 3px); overflow: hidden; position: relative; width: 3px; }`,
          ...Xe,
          ...B,
          `.framer-viIZ7[data-border="true"]::after, .framer-viIZ7 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-viIZ7`
      )),
      (J.displayName = `Deliverables`),
      (J.defaultProps = { height: 52, width: 498 }),
      R(J, {
        variant: {
          options: [`cmHZwc9Pi`, `se6BxZcP4`, `iqiG7nL2n`],
          optionTitles: [`Primary`, `Primary / 0.6 Opacity`, `Deliverables / Small`],
          title: `Variant`,
          type: F.Enum,
        },
        elwBRh6vb: {
          defaultValue: `Deliverables`,
          displayTextArea: !1,
          title: `Title`,
          type: F.String,
        },
      }),
      h(
        J,
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
          ...y(Ye),
          ...y(V),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dt,
  ft,
  pt,
  mt,
  Y,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  X,
  Z,
  Tt,
  Q,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  $,
  Nt;
e(() => {
  (c(),
    v(),
    p(),
    l(),
    de(),
    _e(),
    Ie(),
    Je(),
    ut(),
    ve(),
    le(),
    he(),
    H(),
    we(),
    (dt = _(ue)),
    (ft = L(m.div)),
    (pt = _(G)),
    (mt = L(m.section)),
    (Y = w(se)),
    (ht = _(q)),
    (gt = _(J)),
    (_t = _(K)),
    (vt = _(W)),
    (yt = {
      ClLBCXNOz: `(max-width: 809.98px)`,
      GT_neXSpd: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (bt = () => typeof document < `u`),
    (xt = [`subtitle-2`]),
    (St = `framer-zcz3S`),
    (Ct = {
      ClLBCXNOz: `framer-v-qxr4l2`,
      GT_neXSpd: `framer-v-17zh6m6`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (wt = (e, t, n) => (e && t ? `position` : n)),
    (X = {
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
    (Z = {
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
    (Tt = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Et = () => ({
      from: { alias: `btrqDbS8y`, data: fe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 6 },
      select: [
        { collection: `btrqDbS8y`, name: `PY4p1EU9a`, type: `Identifier` },
        { collection: `btrqDbS8y`, name: `QLMqgvV2H`, type: `Identifier` },
        { collection: `btrqDbS8y`, name: `AljuCQ0zt`, type: `Identifier` },
        { collection: `btrqDbS8y`, name: `oYx4NddcW`, type: `Identifier` },
        { collection: `btrqDbS8y`, name: `wEXmHv4ec`, type: `Identifier` },
        { collection: `btrqDbS8y`, name: `id`, type: `Identifier` },
      ],
      where: { collection: `btrqDbS8y`, name: `VQnEXLrEB`, type: `Identifier` },
    })),
    (Dt = ({ query: e, pageSize: t, children: n }) => n(ce(e))),
    (Ot = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (kt = { damping: 30, delay: 0, mass: 0.1, stiffness: 130, type: `spring` }),
    (At = { Desktop: `WQLkyLRf1`, Phone: `ClLBCXNOz`, Tablet: `GT_neXSpd` }),
    (jt = ({ value: e }) =>
      te()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: At[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = j(
      a(function (e, a) {
        let c = n(null),
          l = a ?? c,
          p = u(),
          { activeLocale: h, setLocale: _ } = I(),
          v = k(),
          { style: y, className: b, layoutId: S, variant: w, ...te } = Mt(e);
        D(o(() => Ce({}, h), [h]));
        let [j, N] = ie(w, yt, !1),
          P = g(St, ge, U),
          F = t(E)?.isLayoutTemplate,
          se = !!t(d)?.transition?.layout,
          ce = wt(F, se),
          L = () => !bt() || j !== `ClLBCXNOz`;
        A();
        let R = O(`FdmBp3cc3`),
          le = n(null);
        return (
          oe({}),
          i(E.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: At,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Ct,
            },
            children: s(f, {
              id: S ?? p,
              children: [
                i(jt, { value: `html body { background: rgb(0, 0, 0); }` }),
                s(m.div, {
                  ...te,
                  className: g(P, `framer-72rtr7`, b),
                  ref: l,
                  style: { ...y },
                  children: [
                    i(M, {
                      children: i(T, {
                        className: `framer-94tzus-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: ce,
                        nodeId: `u5tEvIuad`,
                        scopeId: `augiA20Il`,
                        children: i(ue, {
                          height: `100%`,
                          id: `u5tEvIuad`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `u5tEvIuad`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                    s(m.main, {
                      className: `framer-948x06`,
                      "data-framer-name": `Main`,
                      layout: ce,
                      children: [
                        i(`section`, {
                          className: `framer-8dnhws`,
                          "data-framer-name": `Hero`,
                          children: s(`div`, {
                            className: `framer-11qr423`,
                            "data-framer-name": `Container`,
                            children: [
                              L() &&
                                i(`div`, {
                                  className: `framer-1xp83az hidden-qxr4l2`,
                                  "data-framer-name": `Spacer`,
                                }),
                              i(ft, {
                                animate: X,
                                className: `framer-1f6hdwa`,
                                "data-framer-appear-id": `1f6hdwa`,
                                "data-framer-name": `Intro`,
                                initial: Z,
                                optimized: !0,
                                children: i(z, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
                                    children: i(`p`, {
                                      className: `framer-styles-preset-1qo2pdz`,
                                      "data-styles-preset": `aYHAplX4I`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                                      },
                                      children: `Sou Rodrigo, graduando em estatística, com bagagem técnica e de mercado para ajudar a sua empresa a tomar decisões mais inteligentes utilizando dados`,
                                    }),
                                  }),
                                  className: `framer-2ss367`,
                                  "data-framer-name": `I’m Owen Parker, a passionate designer creating clean, modern digital experiences. I help brands tell their story through thoughtful design and purposeful solutions.`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                        i(mt, {
                          animate: X,
                          className: `framer-1art06g`,
                          "data-framer-appear-id": `1art06g`,
                          "data-framer-name": `Works`,
                          initial: Z,
                          optimized: !0,
                          children: i(`div`, {
                            className: `framer-iviv2q`,
                            id: `iviv2q`,
                            children: i(ae, {
                              children: i(Dt, {
                                query: Et(),
                                children: (e, t, n) =>
                                  i(ee, {
                                    children: e?.map(
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
                                            id: `btrqDbS8y-${t}`,
                                            children: i(re.Provider, {
                                              value: { wEXmHv4ec: o },
                                              children: i(ne, {
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
                                                  i(C, {
                                                    breakpoint: j,
                                                    overrides: {
                                                      ClLBCXNOz: {
                                                        width: `max(min(${v?.width || `100vw`}, 1920px) - 24px, 50px)`,
                                                        y:
                                                          (v?.y || 0) +
                                                          0 +
                                                          200 +
                                                          0 +
                                                          520 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      GT_neXSpd: {
                                                        y:
                                                          (v?.y || 0) +
                                                          0 +
                                                          200 +
                                                          0 +
                                                          380 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: i(M, {
                                                      height: 456,
                                                      width: `max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 50px)`,
                                                      y:
                                                        (v?.y || 0) +
                                                        0 +
                                                        200 +
                                                        0 +
                                                        420 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: i(T, {
                                                        className: `framer-1yi51jd-container`,
                                                        nodeId: `ykeSm_8Bk`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `augiA20Il`,
                                                        style: { transformPerspective: 1200 },
                                                        children: i(C, {
                                                          breakpoint: j,
                                                          overrides: {
                                                            ClLBCXNOz: {
                                                              QmPpMkHkN: t[2],
                                                              variant: Q(`TmKZ5po1Z`),
                                                            },
                                                            GT_neXSpd: { QmPpMkHkN: t[1] },
                                                          },
                                                          children: i(G, {
                                                            AsXZvQH2O: r,
                                                            eQN1z6K6Q: n,
                                                            F1ztRv87T: Tt(a),
                                                            height: `100%`,
                                                            id: `ykeSm_8Bk`,
                                                            layoutId: `ykeSm_8Bk`,
                                                            QmPpMkHkN: t[0],
                                                            style: { width: `100%` },
                                                            variant: Q(`AXLVp1gjZ`),
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
                                  }),
                              }),
                            }),
                          }),
                        }),
                        i(`section`, {
                          className: `framer-15qzulx`,
                          "data-border": !0,
                          "data-framer-name": `Logos Ticker`,
                        }),
                        s(`section`, {
                          className: `framer-1yga17g`,
                          "data-framer-name": `About`,
                          id: R,
                          ref: le,
                          children: [
                            L() &&
                              i(`div`, {
                                className: `framer-1g6cog8 hidden-qxr4l2`,
                                "data-framer-name": `Spacer`,
                              }),
                            s(`div`, {
                              className: `framer-1gmcr6t`,
                              "data-framer-name": `Container`,
                              children: [
                                s(`div`, {
                                  className: `framer-5owsih`,
                                  "data-framer-name": `Title and Description`,
                                  children: [
                                    i(z, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`h2`, {
                                          className: `framer-styles-preset-fd9xae`,
                                          "data-styles-preset": `Z8Dl3fozE`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-8b086d2c-448f-4b2a-9149-bcceb22f6456, rgba(255, 255, 255, 0.6))`,
                                          },
                                          children: `( Sobre mim )`,
                                        }),
                                      }),
                                      className: `framer-5ndv75`,
                                      "data-framer-name": `( About me )`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    i(z, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-1qo2pdz`,
                                          "data-styles-preset": `aYHAplX4I`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                                          },
                                          children: `                                Entrei para o curso de estatística da Universidade Federal de Minas Gerais em 2024, e desde então estou engajado tanto no meio acadêmico quanto no mercado de trabalho, entendendo como o conhecimento técnico conversa os problemas de negócio, já passei por diretoria de empresa júnior, setor público, mercado financeiro e consultoria, aprimorando minha capacidade de torcer os dados até obter respostas. Fora do mercado, sou fascinado por todo tipo de expressão artística, leio o tempo todo, assisto incontáveis filmes de horror, me arrisco na dança com o jazz funk e já tentei aprender diversos instrumentos, estou sempre em um show, num cinema, museu, set de dj ou fazendo uma sobremesa qualquer.`,
                                        }),
                                      }),
                                      className: `framer-15036hm`,
                                      "data-framer-name": ` I transform digital landscapes by crafting intuitive user experiences, building innovative brands, and developing seamless Webflow websites. My approach blends creativity with cutting-edge technology to push the boundaries of what's possible in the digital realm.  From startups to established brands, I collaborate closely to bring your vision to life, creating digital solutions that delight and inspire your audience.`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                s(`div`, {
                                  className: `framer-pd7lqk`,
                                  "data-framer-name": `Images`,
                                  children: [
                                    i(C, {
                                      breakpoint: j,
                                      overrides: {
                                        ClLBCXNOz: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2448,
                                            intrinsicWidth: 3264,
                                            loading: x(
                                              (v?.y || 0) +
                                                0 +
                                                200 +
                                                0 +
                                                1572 +
                                                80 +
                                                0 +
                                                0 +
                                                160 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 2448,
                                            pixelWidth: 3264,
                                            positionX: `58.4%`,
                                            positionY: `48.6%`,
                                            sizes: `max(min(min(${v?.width || `100vw`}, 1920px) - 24px, 850px), 1px)`,
                                            src: `../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?width=3264&height=2448`,
                                            srcSet: `../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg 512w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?scale-down-to=1024&width=3264&height=2448 1024w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?scale-down-to=2048&width=3264&height=2448 2048w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?width=3264&height=2448 3264w`,
                                          },
                                        },
                                        GT_neXSpd: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2448,
                                            intrinsicWidth: 3264,
                                            loading: x(
                                              (v?.y || 0) +
                                                0 +
                                                200 +
                                                0 +
                                                1432 +
                                                100 +
                                                0 +
                                                160 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 2448,
                                            pixelWidth: 3264,
                                            positionX: `58.4%`,
                                            positionY: `48.6%`,
                                            sizes: `max((min(max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px), 850px) - 20px) / 2, 1px)`,
                                            src: `../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?width=3264&height=2448`,
                                            srcSet: `../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg 512w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?scale-down-to=1024&width=3264&height=2448 1024w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?scale-down-to=2048&width=3264&height=2448 2048w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?width=3264&height=2448 3264w`,
                                          },
                                        },
                                      },
                                      children: i(Y, {
                                        __framer__animate: { transition: kt },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Ot,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2448,
                                          intrinsicWidth: 3264,
                                          loading: x(
                                            (v?.y || 0) + 0 + 200 + 0 + 1472 + 100 + 0 + 160 + 0 + 0
                                          ),
                                          pixelHeight: 2448,
                                          pixelWidth: 3264,
                                          positionX: `58.4%`,
                                          positionY: `48.6%`,
                                          sizes: `max((min(max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px), 850px) - 20px) / 2, 1px)`,
                                          src: `../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?width=3264&height=2448`,
                                          srcSet: `../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg 512w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?scale-down-to=1024&width=3264&height=2448 1024w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?scale-down-to=2048&width=3264&height=2448 2048w,../../assets/images/tubZ385rLX8dNnzo5h6PLjpSBI.jpg?width=3264&height=2448 3264w`,
                                        },
                                        className: `framer-9nx6s9`,
                                        "data-framer-name": `Image 1`,
                                        style: { scale: 1.18 },
                                      }),
                                    }),
                                    L() &&
                                      i(C, {
                                        breakpoint: j,
                                        overrides: {
                                          GT_neXSpd: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1280,
                                              intrinsicWidth: 960,
                                              loading: x(
                                                (v?.y || 0) +
                                                  0 +
                                                  200 +
                                                  0 +
                                                  1432 +
                                                  100 +
                                                  0 +
                                                  160 +
                                                  0 +
                                                  133
                                              ),
                                              pixelHeight: 1280,
                                              pixelWidth: 960,
                                              sizes: `max((min(max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px), 850px) - 20px) / 2, 1px)`,
                                              src: `../../assets/images/v9brHB2TQ4r7VhAKIqBAtLFwPg.jpeg?width=960&height=1280`,
                                              srcSet: `../../assets/images/v9brHB2TQ4r7VhAKIqBAtLFwPg.jpeg 768w,../../assets/images/v9brHB2TQ4r7VhAKIqBAtLFwPg.jpeg?width=960&height=1280 960w`,
                                            },
                                          },
                                        },
                                        children: i(Y, {
                                          __framer__animate: { transition: kt },
                                          __framer__animateOnce: !0,
                                          __framer__enter: Ot,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1280,
                                            intrinsicWidth: 960,
                                            loading: x(
                                              (v?.y || 0) +
                                                0 +
                                                200 +
                                                0 +
                                                1472 +
                                                100 +
                                                0 +
                                                160 +
                                                0 +
                                                133
                                            ),
                                            pixelHeight: 1280,
                                            pixelWidth: 960,
                                            sizes: `max((min(max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px), 850px) - 20px) / 2, 1px)`,
                                            src: `../../assets/images/v9brHB2TQ4r7VhAKIqBAtLFwPg.jpeg?width=960&height=1280`,
                                            srcSet: `../../assets/images/v9brHB2TQ4r7VhAKIqBAtLFwPg.jpeg 768w,../../assets/images/v9brHB2TQ4r7VhAKIqBAtLFwPg.jpeg?width=960&height=1280 960w`,
                                          },
                                          className: `framer-1xc375d hidden-qxr4l2`,
                                          "data-framer-name": `Image 2`,
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s(`section`, {
                          className: `framer-hhfa1z`,
                          "data-framer-name": `Numbers`,
                          children: [
                            L() &&
                              i(`div`, {
                                className: `framer-15j1dwf hidden-qxr4l2`,
                                "data-framer-name": `Spacer`,
                              }),
                            s(`div`, {
                              className: `framer-1qqbmss`,
                              "data-framer-name": `Container`,
                              children: [
                                i(C, {
                                  breakpoint: j,
                                  overrides: {
                                    ClLBCXNOz: {
                                      width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2029 + 80 + 0 + 0 + 0,
                                    },
                                    GT_neXSpd: {
                                      width: `max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2031 + 100 + 0 + 0,
                                    },
                                  },
                                  children: i(M, {
                                    height: 119,
                                    width: `max((max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px) - 20px) / 2, 1px)`,
                                    y: (v?.y || 0) + 0 + 200 + 0 + 2071 + 100 + 0,
                                    children: i(T, {
                                      className: `framer-ejqd0f-container`,
                                      nodeId: `SYneQY8AS`,
                                      scopeId: `augiA20Il`,
                                      children: i(C, {
                                        breakpoint: j,
                                        overrides: {
                                          ClLBCXNOz: { variant: Q(`Abceic0jm`) },
                                          GT_neXSpd: { variant: Q(`Abceic0jm`) },
                                        },
                                        children: i(q, {
                                          bvnJRpFbX: `5+`,
                                          height: `100%`,
                                          id: `SYneQY8AS`,
                                          layoutId: `SYneQY8AS`,
                                          rrQ1ahyZL: `Projetos`,
                                          style: { width: `100%` },
                                          variant: Q(`N2XDigEOP`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                i(C, {
                                  breakpoint: j,
                                  overrides: {
                                    ClLBCXNOz: {
                                      width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2029 + 80 + 0 + 0 + 159,
                                    },
                                    GT_neXSpd: {
                                      width: `max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2031 + 100 + 0 + 139,
                                    },
                                  },
                                  children: i(M, {
                                    height: 119,
                                    width: `max((max((min(${v?.width || `100vw`}, 1920px) - 60px) / 2, 1px) - 20px) / 2, 1px)`,
                                    y: (v?.y || 0) + 0 + 200 + 0 + 2071 + 100 + 0,
                                    children: i(T, {
                                      className: `framer-aj2sez-container`,
                                      nodeId: `rItM9askV`,
                                      scopeId: `augiA20Il`,
                                      children: i(C, {
                                        breakpoint: j,
                                        overrides: {
                                          ClLBCXNOz: { variant: Q(`Abceic0jm`) },
                                          GT_neXSpd: { variant: Q(`Abceic0jm`) },
                                        },
                                        children: i(q, {
                                          bvnJRpFbX: `2`,
                                          height: `100%`,
                                          id: `rItM9askV`,
                                          layoutId: `rItM9askV`,
                                          rrQ1ahyZL: `Anos de experiência`,
                                          style: { width: `100%` },
                                          variant: Q(`N2XDigEOP`),
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
                        i(`section`, {
                          className: `framer-1wddwwa`,
                          "data-framer-name": `Services`,
                          children: s(`div`, {
                            className: `framer-8tr6tj`,
                            "data-border": !0,
                            "data-framer-name": `Container`,
                            children: [
                              i(z, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(`h2`, {
                                    className: `framer-styles-preset-fd9xae`,
                                    "data-styles-preset": `Z8Dl3fozE`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                                    },
                                    children: `O que eu faço`,
                                  }),
                                }),
                                className: `framer-7847za`,
                                "data-framer-name": `What i do `,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(`div`, {
                                className: `framer-m03k0r`,
                                "data-framer-name": `Services `,
                                children: [
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2387 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          0,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2389 + 100 + 20 + 0 + 0,
                                      },
                                    },
                                    children: i(M, {
                                      height: 52,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2290 + 100 + 20 + 0 + 0,
                                      children: i(T, {
                                        className: `framer-15x168s-container`,
                                        nodeId: `myJtmpzRD`,
                                        scopeId: `augiA20Il`,
                                        children: i(J, {
                                          elwBRh6vb: `CONSULTORIA ESTATÍSTICA`,
                                          height: `100%`,
                                          id: `myJtmpzRD`,
                                          layoutId: `myJtmpzRD`,
                                          style: { width: `100%` },
                                          variant: Q(`cmHZwc9Pi`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2387 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          52,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2389 + 100 + 20 + 0 + 52,
                                      },
                                    },
                                    children: i(M, {
                                      height: 52,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2290 + 100 + 20 + 0 + 52,
                                      children: i(T, {
                                        className: `framer-e0tg39-container`,
                                        nodeId: `sLFgMGXG2`,
                                        scopeId: `augiA20Il`,
                                        children: i(J, {
                                          elwBRh6vb: `CRIAÇÃO DE DASHBOARDS`,
                                          height: `100%`,
                                          id: `sLFgMGXG2`,
                                          layoutId: `sLFgMGXG2`,
                                          style: { width: `100%` },
                                          variant: Q(`se6BxZcP4`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2387 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          104,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2389 + 100 + 20 + 0 + 104,
                                      },
                                    },
                                    children: i(M, {
                                      height: 52,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2290 + 100 + 20 + 0 + 104,
                                      children: i(T, {
                                        className: `framer-1bfajha-container`,
                                        nodeId: `Ku2z3A5cz`,
                                        scopeId: `augiA20Il`,
                                        children: i(J, {
                                          elwBRh6vb: `RELATÓRIOS EXECUTIVOS`,
                                          height: `100%`,
                                          id: `Ku2z3A5cz`,
                                          layoutId: `Ku2z3A5cz`,
                                          style: { width: `100%` },
                                          variant: Q(`cmHZwc9Pi`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2387 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          156,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2389 + 100 + 20 + 0 + 156,
                                      },
                                    },
                                    children: i(M, {
                                      height: 52,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2290 + 100 + 20 + 0 + 156,
                                      children: i(T, {
                                        className: `framer-mcldaf-container`,
                                        nodeId: `gIX9CwRPX`,
                                        scopeId: `augiA20Il`,
                                        children: i(J, {
                                          elwBRh6vb: `ANÁLISE EXPLORATÓRIA`,
                                          height: `100%`,
                                          id: `gIX9CwRPX`,
                                          layoutId: `gIX9CwRPX`,
                                          style: { width: `100%` },
                                          variant: Q(`se6BxZcP4`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2387 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          208,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2389 + 100 + 20 + 0 + 208,
                                      },
                                    },
                                    children: i(M, {
                                      height: 52,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2290 + 100 + 20 + 0 + 208,
                                      children: i(T, {
                                        className: `framer-1gfjnrp-container`,
                                        nodeId: `tAHHiPkmc`,
                                        scopeId: `augiA20Il`,
                                        children: i(J, {
                                          elwBRh6vb: `CRIAÇÃO DE GRÁFICOS`,
                                          height: `100%`,
                                          id: `tAHHiPkmc`,
                                          layoutId: `tAHHiPkmc`,
                                          style: { width: `100%` },
                                          variant: Q(`cmHZwc9Pi`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-148jl97`,
                          "data-framer-name": `Award`,
                          children: s(`div`, {
                            className: `framer-1wlu9qr`,
                            "data-border": !0,
                            "data-framer-name": `Container`,
                            children: [
                              i(z, {
                                __fromCanvasComponent: !0,
                                children: i(r, {
                                  children: i(`h2`, {
                                    className: `framer-styles-preset-fd9xae`,
                                    "data-styles-preset": `Z8Dl3fozE`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, rgb(255, 255, 255))`,
                                    },
                                    children: `Ferramentas`,
                                  }),
                                }),
                                className: `framer-196se9s`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(`div`, {
                                className: `framer-14lhaya`,
                                "data-framer-name": `List`,
                                children: [
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2803 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          0,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2769 + 100 + 20 + 0 + 0,
                                      },
                                    },
                                    children: i(M, {
                                      height: 36,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2670 + 100 + 20 + 0 + 0,
                                      children: i(T, {
                                        className: `framer-1jq0gci-container`,
                                        nodeId: `WfAeSTi0F`,
                                        scopeId: `augiA20Il`,
                                        children: i(C, {
                                          breakpoint: j,
                                          overrides: {
                                            ClLBCXNOz: { variant: Q(`aGYHcknGw`) },
                                            GT_neXSpd: { variant: Q(`aGYHcknGw`) },
                                          },
                                          children: i(K, {
                                            height: `100%`,
                                            id: `WfAeSTi0F`,
                                            layoutId: `WfAeSTi0F`,
                                            oZ3FJ2ZY9: `Python`,
                                            style: { width: `100%` },
                                            variant: Q(`J9ibkFNUj`),
                                            Ve5UQw6hg: `R`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2803 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          48,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2769 + 100 + 20 + 0 + 48,
                                      },
                                    },
                                    children: i(M, {
                                      height: 36,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2670 + 100 + 20 + 0 + 48,
                                      children: i(T, {
                                        className: `framer-185ru3c-container`,
                                        nodeId: `iNZ4WQ2LM`,
                                        scopeId: `augiA20Il`,
                                        children: i(C, {
                                          breakpoint: j,
                                          overrides: {
                                            ClLBCXNOz: { variant: Q(`aGYHcknGw`) },
                                            GT_neXSpd: { variant: Q(`aGYHcknGw`) },
                                          },
                                          children: i(K, {
                                            height: `100%`,
                                            id: `iNZ4WQ2LM`,
                                            layoutId: `iNZ4WQ2LM`,
                                            oZ3FJ2ZY9: `Power BI`,
                                            style: { width: `100%` },
                                            variant: Q(`J9ibkFNUj`),
                                            Ve5UQw6hg: `SQL`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2803 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          96,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2769 + 100 + 20 + 0 + 96,
                                      },
                                    },
                                    children: i(M, {
                                      height: 36,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2670 + 100 + 20 + 0 + 96,
                                      children: i(T, {
                                        className: `framer-12qs8hl-container`,
                                        nodeId: `y4W7XHMyX`,
                                        scopeId: `augiA20Il`,
                                        children: i(C, {
                                          breakpoint: j,
                                          overrides: {
                                            ClLBCXNOz: { variant: Q(`aGYHcknGw`) },
                                            GT_neXSpd: { variant: Q(`aGYHcknGw`) },
                                          },
                                          children: i(K, {
                                            height: `100%`,
                                            id: `y4W7XHMyX`,
                                            layoutId: `y4W7XHMyX`,
                                            oZ3FJ2ZY9: `Shiny`,
                                            style: { width: `100%` },
                                            variant: Q(`J9ibkFNUj`),
                                            Ve5UQw6hg: `Excel`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(C, {
                                    breakpoint: j,
                                    overrides: {
                                      ClLBCXNOz: {
                                        width: `calc(min(${v?.width || `100vw`}, 1920px) - 24px)`,
                                        y:
                                          (v?.y || 0) +
                                          0 +
                                          200 +
                                          0 +
                                          2803 +
                                          80 +
                                          0 +
                                          20 +
                                          56 +
                                          0 +
                                          144,
                                      },
                                      GT_neXSpd: {
                                        y: (v?.y || 0) + 0 + 200 + 0 + 2769 + 100 + 20 + 0 + 144,
                                      },
                                    },
                                    children: i(M, {
                                      height: 36,
                                      width: `max((max(min(${v?.width || `100vw`}, 1920px) - 40px, 1px) - 20px) / 2, 1px)`,
                                      y: (v?.y || 0) + 0 + 200 + 0 + 2670 + 100 + 20 + 0 + 144,
                                      children: i(T, {
                                        className: `framer-1mb1ki3-container`,
                                        nodeId: `ujkjWjt3S`,
                                        scopeId: `augiA20Il`,
                                        children: i(C, {
                                          breakpoint: j,
                                          overrides: {
                                            ClLBCXNOz: { variant: Q(`aGYHcknGw`) },
                                            GT_neXSpd: { variant: Q(`aGYHcknGw`) },
                                          },
                                          children: i(K, {
                                            height: `100%`,
                                            id: `ujkjWjt3S`,
                                            layoutId: `ujkjWjt3S`,
                                            oZ3FJ2ZY9: `Power Automate`,
                                            style: { width: `100%` },
                                            variant: Q(`J9ibkFNUj`),
                                            Ve5UQw6hg: ``,
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
                        }),
                        i(C, {
                          breakpoint: j,
                          overrides: {
                            ClLBCXNOz: { y: (v?.y || 0) + 0 + 200 + 0 + 3139 },
                            GT_neXSpd: { y: (v?.y || 0) + 0 + 200 + 0 + 3069 },
                          },
                          children: i(M, {
                            height: 504,
                            width: `min(${v?.width || `100vw`}, 1920px)`,
                            y: (v?.y || 0) + 0 + 200 + 0 + 2970,
                            children: i(T, {
                              className: `framer-3wgtta-container`,
                              nodeId: `vMYcvJtJ8`,
                              scopeId: `augiA20Il`,
                              children: i(C, {
                                breakpoint: j,
                                overrides: {
                                  ClLBCXNOz: { variant: Q(`V5hHX0kYx`) },
                                  GT_neXSpd: { variant: Q(`sp1nHP6fo`) },
                                },
                                children: i(W, {
                                  height: `100%`,
                                  id: `vMYcvJtJ8`,
                                  layoutId: `vMYcvJtJ8`,
                                  style: { width: `100%` },
                                  variant: Q(`skMoxZIno`),
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
        `.framer-zcz3S.framer-lux5qc, .framer-zcz3S .framer-lux5qc { display: block; }`,
        `.framer-zcz3S.framer-72rtr7 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-zcz3S .framer-94tzus-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-zcz3S .framer-948x06 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-8dnhws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 200px 20px 100px 20px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-11qr423 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-1xp83az, .framer-zcz3S .framer-1g6cog8, .framer-zcz3S .framer-15j1dwf { align-self: stretch; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-1f6hdwa { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zcz3S .framer-2ss367 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 560px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zcz3S .framer-1art06g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-zcz3S .framer-iviv2q { display: grid; flex: none; gap: 60px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-1yi51jd-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-15qzulx { --border-bottom-width: 1px; --border-color: var(--token-f78da199-5853-4724-b941-a7b8656ff4db, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 120px; overflow: hidden; padding: 40px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-1yga17g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 100px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-1gmcr6t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-5owsih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 740px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-5ndv75 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-zcz3S .framer-15036hm { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; max-width: 730px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zcz3S .framer-pd7lqk { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 850px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-9nx6s9 { aspect-ratio: 0.8112094395280236 / 1; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: 1 0 0px; gap: 20px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-zcz3S .framer-1xc375d { aspect-ratio: 1.3349514563106797 / 1; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-hhfa1z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-1qqbmss { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-ejqd0f-container, .framer-zcz3S .framer-aj2sez-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-1wddwwa, .framer-zcz3S .framer-148jl97 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-8tr6tj { --border-bottom-width: 0px; --border-color: var(--token-f78da199-5853-4724-b941-a7b8656ff4db, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 20px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-7847za { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-zcz3S .framer-m03k0r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-15x168s-container, .framer-zcz3S .framer-e0tg39-container, .framer-zcz3S .framer-1bfajha-container, .framer-zcz3S .framer-mcldaf-container, .framer-zcz3S .framer-1gfjnrp-container, .framer-zcz3S .framer-1jq0gci-container, .framer-zcz3S .framer-185ru3c-container, .framer-zcz3S .framer-12qs8hl-container, .framer-zcz3S .framer-1mb1ki3-container, .framer-zcz3S .framer-3wgtta-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-zcz3S .framer-1wlu9qr { --border-bottom-width: 0px; --border-color: var(--token-f78da199-5853-4724-b941-a7b8656ff4db, rgba(255, 255, 255, 0.1)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 0px 0px; position: relative; width: 1px; }`,
        `.framer-zcz3S .framer-196se9s { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-zcz3S .framer-14lhaya { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        ...me,
        ...B,
        `.framer-zcz3S[data-border="true"]::after, .framer-zcz3S [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-zcz3S.framer-72rtr7 { width: 810px; } .framer-zcz3S .framer-8dnhws { padding: 160px 20px 100px 20px; } .framer-zcz3S .framer-1qqbmss { flex-direction: column; } .framer-zcz3S .framer-ejqd0f-container, .framer-zcz3S .framer-aj2sez-container { flex: none; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-zcz3S.framer-72rtr7 { width: 390px; } .framer-zcz3S .framer-8dnhws { padding: 300px 12px 100px 12px; } .framer-zcz3S .framer-2ss367 { max-width: 343px; } .framer-zcz3S .framer-1art06g { gap: 20px; padding: 0px 12px 0px 12px; } .framer-zcz3S .framer-iviv2q { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-zcz3S .framer-15qzulx { min-height: 140px; } .framer-zcz3S .framer-1yga17g, .framer-zcz3S .framer-hhfa1z, .framer-zcz3S .framer-1wddwwa, .framer-zcz3S .framer-148jl97 { flex-direction: column; padding: 80px 12px 0px 12px; } .framer-zcz3S .framer-1gmcr6t, .framer-zcz3S .framer-ejqd0f-container, .framer-zcz3S .framer-aj2sez-container, .framer-zcz3S .framer-7847za, .framer-zcz3S .framer-m03k0r, .framer-zcz3S .framer-196se9s, .framer-zcz3S .framer-14lhaya { flex: none; width: 100%; } .framer-zcz3S .framer-9nx6s9 { aspect-ratio: 0.7511520737327189 / 1; } .framer-zcz3S .framer-1qqbmss { align-content: center; align-items: center; flex: none; flex-direction: column; gap: 40px; justify-content: center; width: 100%; } .framer-zcz3S .framer-8tr6tj, .framer-zcz3S .framer-1wlu9qr { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; flex: none; flex-direction: column; gap: 40px; width: 100%; }}`,
      ],
      `framer-zcz3S`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 4069, width: 1200 }),
    h(
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
        ...dt,
        ...pt,
        ...ht,
        ...gt,
        ..._t,
        ...vt,
        ...y(pe),
        ...y(V),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = b.get(Et(), n);
        return Promise.allSettled([
          r.preload(),
          N(q, {}, t),
          N(J, {}, t),
          N(K, {}, t),
          N(W, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => N(G, {}, t)));
          })(),
        ]);
      },
    }),
    (Nt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"FdmBp3cc3":{"pattern":":FdmBp3cc3","name":"info"}}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"GT_neXSpd":{"layout":["fixed","auto"]},"ClLBCXNOz":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `4069`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Nt as __FramerMetadata__, $ as default, xt as queryParamNames };
//# sourceMappingURL=3ismnjO-TXQdFmURJE7X682cx_Fx_rmwCSPjmzz9ATM.D2ufAnt9.mjs.map
