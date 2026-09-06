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
  O as v,
  et as y,
  f as b,
  ht as x,
  mt as S,
  o as C,
  st as w,
  w as T,
  x as E,
} from "./framer.C5e9eYQm.mjs";
import { d as D, f as O, p as k, u as A } from "./shared-lib.DP-o-NQ_.mjs";
var j,
  M,
  N,
  P = e(() => {
    (g(),
      v.loadFonts([
        `GF;Roboto Condensed-regular`,
        `GF;Roboto Condensed-700`,
        `GF;Roboto Condensed-700italic`,
        `GF;Roboto Condensed-italic`,
      ]),
      (j = [
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
      (M = [
        `.framer-jy5F2 .framer-styles-preset-1qo2pdz:not(.rich-text-wrapper), .framer-jy5F2 .framer-styles-preset-1qo2pdz.rich-text-wrapper p { --framer-font-family: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-bold: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-bold-italic: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-italic: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-radius: 0px; --framer-text-color: var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (N = `framer-jy5F2`));
  });
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (s(),
      g(),
      f(),
      c(),
      k(),
      (I = { q84xWAo5y: { hover: !0 } }),
      (L = `framer-R4PLo`),
      (R = { q84xWAo5y: `framer-v-lpibb8` }),
      (z = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (B = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (V = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: n }) => {
        let r = t(u),
          a = e ?? r.transition,
          s = o(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(u.Provider, { value: s, children: n });
      }),
      (U = p.create(r)),
      (W = ({
        height: e,
        id: t,
        link: n,
        newTab: r,
        padding: i,
        radius: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        EswQgB04a: i ?? c.EswQgB04a ?? `10px 20px 10px 20px`,
        N77i1gsbA: a ?? c.N77i1gsbA ?? `70px`,
        T928K1VAC: r ?? c.T928K1VAC,
        uEebyM5Gp: o ?? c.uEebyM5Gp ?? `Button`,
        x59Tl7bcL: n ?? c.x59Tl7bcL,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = x(
        a(function (e, t) {
          let a = n(null),
            o = t ?? a,
            s = l(),
            { activeLocale: c, setLocale: u } = w();
          y();
          let {
              style: f,
              className: m,
              layoutId: g,
              variant: _,
              uEebyM5Gp: v,
              x59Tl7bcL: x,
              T928K1VAC: C,
              N77i1gsbA: T,
              EswQgB04a: D,
              ...O
            } = W(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: K,
              setGestureState: q,
              setVariant: J,
              variants: Y,
            } = S({
              defaultVariant: `q84xWAo5y`,
              enabledGestures: I,
              ref: o,
              variant: _,
              variantClassNames: R,
            }),
            X = G(e, Y),
            Z = h(L, A);
          return i(d, {
            id: g ?? s,
            children: i(U, {
              animate: Y,
              initial: !1,
              children: i(H, {
                value: V,
                children: i(b, {
                  href: x,
                  motionChild: !0,
                  nodeId: `q84xWAo5y`,
                  openInNewTab: C,
                  scopeId: `we4cYbYfs`,
                  children: i(p.a, {
                    ...O,
                    ...N,
                    className: `${h(Z, `framer-lpibb8`, m, j)} framer-1b9c9yr`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: X,
                    layoutId: `q84xWAo5y`,
                    ref: o,
                    style: {
                      "--1rq5wuc": z(D),
                      "--border-bottom-width": `1px`,
                      "--border-color": `rgba(255, 255, 255, 0.2)`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: B(T, 3),
                      borderBottomRightRadius: B(T, 2),
                      borderTopLeftRadius: B(T, 0),
                      borderTopRightRadius: B(T, 1),
                      opacity: 1,
                      ...f,
                    },
                    variants: { "q84xWAo5y-hover": { opacity: 0.97 } },
                    ...F({ "q84xWAo5y-hover": { "data-framer-name": void 0 } }, k, P),
                    children: i(E, {
                      __fromCanvasComponent: !0,
                      children: i(r, {
                        children: i(p.p, {
                          className: `framer-styles-preset-fd9xae`,
                          "data-styles-preset": `Z8Dl3fozE`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-27c87ea9-0318-4b1a-ba07-a42c2b4de683, rgb(0, 0, 0)))`,
                          },
                          children: `Button`,
                        }),
                      }),
                      className: `framer-y2m2bo`,
                      "data-framer-name": `Tiltle`,
                      fonts: [`Inter`],
                      layoutDependency: X,
                      layoutId: `wyW85ggXw`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-27c87ea9-0318-4b1a-ba07-a42c2b4de683, rgb(0, 0, 0))`,
                        "--framer-paragraph-spacing": `0px`,
                        opacity: 1,
                      },
                      text: v,
                      variants: { "q84xWAo5y-hover": { opacity: 0.7 } },
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
          `.framer-R4PLo.framer-1b9c9yr, .framer-R4PLo .framer-1b9c9yr { display: block; }`,
          `.framer-R4PLo.framer-lpibb8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: var(--1rq5wuc); position: relative; text-decoration: none; width: min-content; }`,
          `.framer-R4PLo .framer-y2m2bo { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          ...D,
          `.framer-R4PLo[data-border="true"]::after, .framer-R4PLo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-R4PLo`
      )),
      (K.displayName = `Button Primary`),
      (K.defaultProps = { height: 36, width: 82 }),
      T(K, {
        uEebyM5Gp: { defaultValue: `Button`, displayTextArea: !1, title: `Title`, type: C.String },
        x59Tl7bcL: { title: `Link`, type: C.Link },
        T928K1VAC: { defaultValue: !1, title: `New Tab`, type: C.Boolean },
        N77i1gsbA: { defaultValue: `70px`, title: `Radius`, type: C.BorderRadius },
        EswQgB04a: { defaultValue: `10px 20px 10px 20px`, title: `Padding`, type: C.Padding },
      }),
      m(
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
          ..._(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { j as a, M as i, q as n, P as o, N as r, K as t };
//# sourceMappingURL=we4cYbYfs.CzcUxBQ2.mjs.map
