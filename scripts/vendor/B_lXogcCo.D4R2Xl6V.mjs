import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  j as o,
  o as s,
  w as c,
  y as l,
} from "./react.CWOg5Z1e.mjs";
import { a as u, r as d, t as f, x as p } from "./motion.D-FJ70EG.mjs";
import {
  C as m,
  D as h,
  H as g,
  I as _,
  et as v,
  f as y,
  ht as b,
  mt as x,
  o as S,
  st as C,
  w,
  x as T,
} from "./framer.C5e9eYQm.mjs";
import { d as E, f as D, p as O, u as k } from "./shared-lib.DP-o-NQ_.mjs";
function A(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H = e(() => {
    (s(),
      g(),
      f(),
      c(),
      O(),
      (j = { y6veoWTpm: { hover: !0 } }),
      (M = [`y6veoWTpm`, `JJMHNlgPa`]),
      (N = `framer-1nAg8`),
      (P = { JJMHNlgPa: `framer-v-dxwiq5`, y6veoWTpm: `framer-v-1beb105` }),
      (F = { damping: 30, delay: 0, mass: 0.1, stiffness: 130, type: `spring` }),
      (I = ({ value: e, children: n }) => {
        let r = t(u),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(u.Provider, { value: s, children: n });
      }),
      (L = p.create(r)),
      (R = { Desktop: `y6veoWTpm`, Mobile: `JJMHNlgPa` }),
      (z = ({ height: e, id: t, link: n, newTab: r, title: i, width: a, ...o }) => ({
        ...o,
        diqXIFWgT: i ?? o.diqXIFWgT ?? `Nav-Item`,
        emf17Ghk6: n ?? o.emf17Ghk6,
        tMzAyfqlM: r ?? o.tMzAyfqlM,
        variant: R[o.variant] ?? o.variant ?? `y6veoWTpm`,
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = b(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            s = l(),
            { activeLocale: c, setLocale: u } = C();
          v();
          let {
              style: f,
              className: m,
              layoutId: g,
              variant: _,
              diqXIFWgT: b,
              emf17Ghk6: S,
              tMzAyfqlM: w,
              ...E
            } = z(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: R,
              gestureHandlers: V,
              gestureVariant: H,
              isLoading: U,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = x({
              cycleOrder: M,
              defaultVariant: `y6veoWTpm`,
              enabledGestures: j,
              ref: o,
              variant: _,
              variantClassNames: P,
            }),
            q = B(e, K),
            J = h(N, k);
          return i(d, {
            id: g ?? s,
            children: i(L, {
              animate: K,
              initial: !1,
              children: i(I, {
                value: F,
                children: i(y, {
                  href: S,
                  motionChild: !0,
                  nodeId: `y6veoWTpm`,
                  openInNewTab: w,
                  scopeId: `B_lXogcCo`,
                  smoothScroll: !0,
                  children: i(p.a, {
                    ...E,
                    ...V,
                    className: `${h(J, `framer-1beb105`, m, O)} framer-1nf14it`,
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: q,
                    layoutId: `y6veoWTpm`,
                    ref: o,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-11144164-8802-4fdd-91a6-c0ce5547e6d2, rgb(255, 255, 255))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      borderBottomLeftRadius: 60,
                      borderBottomRightRadius: 60,
                      borderTopLeftRadius: 60,
                      borderTopRightRadius: 60,
                      ...f,
                    },
                    variants: {
                      "y6veoWTpm-hover": {
                        "--border-color": `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                      },
                      JJMHNlgPa: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                    },
                    ...A(
                      {
                        "y6veoWTpm-hover": { "data-framer-name": void 0 },
                        JJMHNlgPa: { "data-framer-name": `Mobile` },
                      },
                      D,
                      H
                    ),
                    children: i(T, {
                      __fromCanvasComponent: !0,
                      children: i(r, {
                        children: i(p.p, {
                          className: `framer-styles-preset-fd9xae`,
                          "data-styles-preset": `Z8Dl3fozE`,
                          children: `Menu-Item`,
                        }),
                      }),
                      className: `framer-fzc3mk`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `EOP9Zd4Rl`,
                      text: b,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1nAg8.framer-1nf14it, .framer-1nAg8 .framer-1nf14it { display: block; }`,
          `.framer-1nAg8.framer-1beb105 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px 16px 8px 16px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-1nAg8 .framer-fzc3mk { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-1nAg8.framer-v-dxwiq5.framer-1beb105 { padding: 4px; }`,
          ...E,
          `.framer-1nAg8[data-border="true"]::after, .framer-1nAg8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-1nAg8`
      )),
      (V.displayName = `Nav item`),
      (V.defaultProps = { height: 34, width: 91 }),
      w(V, {
        variant: {
          options: [`y6veoWTpm`, `JJMHNlgPa`],
          optionTitles: [`Desktop`, `Mobile`],
          title: `Variant`,
          type: S.Enum,
        },
        diqXIFWgT: {
          defaultValue: `Nav-Item`,
          displayTextArea: !1,
          title: `Title`,
          type: S.String,
        },
        emf17Ghk6: { title: `Link`, type: S.Link },
        tMzAyfqlM: { defaultValue: !1, title: `New Tab`, type: S.Boolean },
      }),
      m(
        V,
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
          ..._(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { H as n, V as t };
//# sourceMappingURL=B_lXogcCo.D4R2Xl6V.mjs.map
