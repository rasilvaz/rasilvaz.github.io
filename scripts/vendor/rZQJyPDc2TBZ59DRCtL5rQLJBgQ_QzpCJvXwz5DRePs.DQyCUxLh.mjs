import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { H as t, R as n, v as r } from "./framer.C5e9eYQm.mjs";
import { a as i, s as a } from "./shared-lib.DP-o-NQ_.mjs";
function o(e, t) {
  let n = e?.PY4p1EU9a,
    r = e?.DHYCE4HN1;
  return {
    breakpoints: [
      { hash: `1rhvr6`, mediaQuery: `(min-width: 1200px)` },
      { hash: `u2wpwj`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `y6aimh`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{DHYCE4HN1}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-E06Ma`,
    title: `${n === void 0 ? `{{PY4p1EU9a}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new r(),
    s = {
      from: { alias: `GE_lMVaIM`, data: a, type: `Collection` },
      select: [
        { collection: `GE_lMVaIM`, name: `PY4p1EU9a`, type: `Identifier` },
        { collection: `GE_lMVaIM`, name: `DHYCE4HN1`, type: `Identifier` },
      ],
      where: n(e, `GE_lMVaIM`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `GE_lMVaIM`, data: a, type: `Collection` },
      select: [
        { collection: `GE_lMVaIM`, name: `PY4p1EU9a`, type: `Identifier` },
        { collection: `GE_lMVaIM`, name: `DHYCE4HN1`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `GE_lMVaIM`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (t(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
f();
export {
  d as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  u as metadataVersion,
  f as t,
};
//# sourceMappingURL=rZQJyPDc2TBZ59DRCtL5rQLJBgQ_QzpCJvXwz5DRePs.DQyCUxLh.mjs.map
