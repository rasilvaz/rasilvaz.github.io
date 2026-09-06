import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  L as t,
  N as n,
  O as r,
  P as i,
  T as a,
  c as o,
  f as s,
  k as c,
  l,
  o as u,
  s as d,
  u as f,
  w as p,
  z as m,
} from "./react.CWOg5Z1e.mjs";
import { x as h } from "./motion.D-FJ70EG.mjs";
import {
  H as g,
  O as _,
  f as v,
  o as y,
  r as b,
  t as x,
  v as S,
  w as C,
} from "./framer.C5e9eYQm.mjs";
var w,
  T,
  E,
  ee = e(() => {
    (g(),
      _.loadFonts([
        `GF;Roboto Condensed-500`,
        `GF;Roboto Condensed-700`,
        `GF;Roboto Condensed-700italic`,
        `GF;Roboto Condensed-500italic`,
      ]),
      (w = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Roboto Condensed`,
              openType: !0,
              source: `google`,
              style: `normal`,
              url: `../../assets/fonts/ieVo2ZhZI2eCN5jzbjEETS9weq8-_d6T_POl0fRJeyWAovBM731BKMSK.woff2`,
              weight: `500`,
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
              url: `https://fonts.gstatic.com/s/robotocondensed/v31/ieVW2ZhZI2eCN5jzbjEETS9weq8-19ehAyvMum7nfDB64SoK5XxjLdSK37o.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (T = [
        `.framer-QYnrz .framer-styles-preset-fd9xae:not(.rich-text-wrapper), .framer-QYnrz .framer-styles-preset-fd9xae.rich-text-wrapper p { --framer-font-family: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-bold: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-bold-italic: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-family-italic: "Roboto Condensed", "Roboto Condensed Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 100%; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-background-radius: 0px; --framer-text-color: var(--token-e54b7cfa-74b1-4f2f-a57f-e373ee4a0ca4, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (E = `framer-QYnrz`));
  });
function te(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function ne(e, t, n) {
  return (1 - n) * e + n * t;
}
function re(e, t, n, r) {
  return ne(e, t, 1 - Math.exp(-n * r));
}
function ie(e, t) {
  return ((e % t) + t) % t;
}
function ae(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function oe(e, t) {
  return e === 1 ? le : e === 2 ? t : 1;
}
var D,
  se,
  ce,
  O,
  le,
  k,
  ue,
  A,
  de,
  fe = e(() => {
    (t(),
      (D = `1.3.23`),
      (se = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(e) {
          if (!this.isRunning) return;
          let t = !1;
          if (this.duration && this.easing) {
            this.currentTime += e;
            let n = te(0, this.currentTime / this.duration, 1);
            t = n >= 1;
            let r = t ? 1 : this.easing(n);
            this.value = this.from + (this.to - this.from) * r;
          } else
            this.lerp
              ? ((this.value = re(this.value, this.to, this.lerp * 60, e)),
                Math.round(this.value) === Math.round(this.to) &&
                  ((this.value = this.to), (t = !0)))
              : ((this.value = this.to), (t = !0));
          (t && this.stop(), this.onUpdate?.(this.value, t));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
          ((this.from = this.value = e),
            (this.to = t),
            (this.lerp = n),
            (this.duration = r),
            (this.easing = i),
            (this.currentTime = 0),
            (this.isRunning = !0),
            a?.(),
            (this.onUpdate = o));
        }
      }),
      (ce = class {
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
          ((this.wrapper = e),
            (this.content = t),
            n &&
              ((this.debouncedResize = ae(this.resize, r)),
              this.wrapper instanceof Window
                ? m.addEventListener(`resize`, this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === m &&
              this.debouncedResize &&
              m.removeEventListener(`resize`, this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = m.innerWidth), (this.height = m.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
        }
      }),
      (O = class {
        events = {};
        emit(e, ...t) {
          let n = this.events[e] || [];
          for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
        }
        on(e, t) {
          return (
            this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
            () => {
              this.events[e] = this.events[e]?.filter((e) => t !== e);
            }
          );
        }
        off(e, t) {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
        destroy() {
          this.events = {};
        }
      }),
      (le = 100 / 6),
      (k = { passive: !1 }),
      (ue = class {
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new O();
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = e),
            (this.options = t),
            m.addEventListener(`resize`, this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener(`wheel`, this.onWheel, k),
            this.element.addEventListener(`touchstart`, this.onTouchStart, k),
            this.element.addEventListener(`touchmove`, this.onTouchMove, k),
            this.element.addEventListener(`touchend`, this.onTouchEnd, k));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          (this.emitter.destroy(),
            m.removeEventListener(`resize`, this.onWindowResize),
            this.element.removeEventListener(`wheel`, this.onWheel, k),
            this.element.removeEventListener(`touchstart`, this.onTouchStart, k),
            this.element.removeEventListener(`touchmove`, this.onTouchMove, k),
            this.element.removeEventListener(`touchend`, this.onTouchEnd, k));
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
            r = -(t - this.touchStart.x) * this.options.touchMultiplier,
            i = -(n - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = t),
            (this.touchStart.y = n),
            (this.lastDelta = { x: r, y: i }),
            this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
        };
        onTouchEnd = (e) => {
          this.emitter.emit(`scroll`, {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: n, deltaMode: r } = e,
            i = oe(r, this.window.width),
            a = oe(r, this.window.height);
          ((t *= i),
            (n *= a),
            (t *= this.options.wheelMultiplier),
            (n *= this.options.wheelMultiplier),
            this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
        };
        onWindowResize = () => {
          this.window = { width: m.innerWidth, height: m.innerHeight };
        };
      }),
      (A = (e) => Math.min(1, 1.001 - 2 ** (-10 * e))),
      (de = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new se();
        emitter = new O();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: e = m,
          content: t = document.documentElement,
          eventsTarget: n = e,
          smoothWheel: r = !0,
          syncTouch: i = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: o = 1.7,
          duration: s,
          easing: c,
          lerp: l = 0.1,
          infinite: u = !1,
          orientation: d = `vertical`,
          gestureOrientation: f = d === `horizontal` ? `both` : `vertical`,
          touchMultiplier: p = 1,
          wheelMultiplier: h = 1,
          autoResize: g = !0,
          prevent: _,
          virtualScroll: v,
          overscroll: y = !0,
          autoRaf: b = !1,
          anchors: x = !1,
          autoToggle: S = !1,
          allowNestedScroll: C = !1,
          __experimental__naiveDimensions: w = !1,
          naiveDimensions: T = w,
          stopInertiaOnNavigate: E = !1,
        } = {}) {
          ((m.lenisVersion = D),
            (m.lenis ||= {}),
            (m.lenis.version = D),
            d === `horizontal` && (m.lenis.horizontal = !0),
            i === !0 && (m.lenis.touch = !0),
            (!e || e === document.documentElement) && (e = m),
            typeof s == `number` && typeof c != `function`
              ? (c = A)
              : typeof c == `function` && typeof s != `number` && (s = 1),
            (this.options = {
              wrapper: e,
              content: t,
              eventsTarget: n,
              smoothWheel: r,
              syncTouch: i,
              syncTouchLerp: a,
              touchInertiaExponent: o,
              duration: s,
              easing: c,
              lerp: l,
              infinite: u,
              gestureOrientation: f,
              orientation: d,
              touchMultiplier: p,
              wheelMultiplier: h,
              autoResize: g,
              prevent: _,
              virtualScroll: v,
              overscroll: y,
              autoRaf: b,
              anchors: x,
              autoToggle: S,
              allowNestedScroll: C,
              naiveDimensions: T,
              stopInertiaOnNavigate: E,
            }),
            (this.dimensions = new ce(e, t, { autoResize: g })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener(`click`, this.onClick),
            this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
            (this.virtualScroll = new ue(n, { touchMultiplier: p, wheelMultiplier: h })),
            this.virtualScroll.on(`scroll`, this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
            this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, {
              capture: !0,
            }),
            this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener(`click`, this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        off(e, t) {
          return this.emitter.off(e, t);
        }
        onScrollEnd = (e) => {
          e instanceof CustomEvent ||
            ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent(`scrollend`, {
              bubbles: this.options.wrapper === m,
              detail: { lenisScrollEnd: !0 },
            })
          );
        };
        get overflow() {
          let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
          return getComputedStyle(this.rootElement)[e];
        }
        checkOverflow() {
          [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart();
        }
        onTransitionEnd = (e) => {
          e.propertyName?.includes(`overflow`) &&
            e.target === this.rootElement &&
            this.checkOverflow();
        };
        setScroll(e) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
            : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
        }
        onClick = (e) => {
          let t = e
              .composedPath()
              .filter((e) => e instanceof HTMLAnchorElement && e.href)
              .map((e) => new URL(e.href)),
            n = new URL(m.location.href);
          if (this.options.anchors) {
            let e = t.find((e) => n.host === e.host && n.pathname === e.pathname && e.hash);
            if (e) {
              let t =
                  typeof this.options.anchors == `object` && this.options.anchors
                    ? this.options.anchors
                    : void 0,
                n = `#${e.hash.split(`#`)[1]}`;
              this.scrollTo(n, t);
              return;
            }
          }
          if (
            this.options.stopInertiaOnNavigate &&
            t.some((e) => n.host === e.host && n.pathname !== e.pathname)
          ) {
            this.reset();
            return;
          }
        };
        onPointerDown = (e) => {
          e.button === 1 && this.reset();
        };
        onVirtualScroll = (e) => {
          if (
            typeof this.options.virtualScroll == `function` &&
            this.options.virtualScroll(e) === !1
          )
            return;
          let { deltaX: t, deltaY: n, event: r } = e;
          if (
            (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
            r.ctrlKey || r.lenisStopPropagation)
          )
            return;
          let i = r.type.includes(`touch`),
            a = r.type.includes(`wheel`);
          this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
          let o = t === 0 && n === 0;
          if (
            this.options.syncTouch &&
            i &&
            r.type === `touchstart` &&
            o &&
            !this.isStopped &&
            !this.isLocked
          ) {
            this.reset();
            return;
          }
          let s =
            (this.options.gestureOrientation === `vertical` && n === 0) ||
            (this.options.gestureOrientation === `horizontal` && t === 0);
          if (o || s) return;
          let c = r.composedPath();
          c = c.slice(0, c.indexOf(this.rootElement));
          let l = this.options.prevent,
            u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
          if (
            c.find(
              (e) =>
                e instanceof HTMLElement &&
                ((typeof l == `function` && l?.(e)) ||
                  e.hasAttribute?.(`data-lenis-prevent`) ||
                  (u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
                  (u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
                  (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
                  (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(e, { deltaX: t, deltaY: n })))
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            r.cancelable && r.preventDefault();
            return;
          }
          if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
            ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
            return;
          }
          let d = n;
          (this.options.gestureOrientation === `both`
            ? (d = Math.abs(n) > Math.abs(t) ? n : t)
            : this.options.gestureOrientation === `horizontal` && (d = t),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== m &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && n > 0) ||
                  (this.animatedScroll === this.limit && n < 0)))) &&
              (r.lenisStopPropagation = !0),
            r.cancelable && r.preventDefault());
          let f = i && this.options.syncTouch,
            p = i && r.type === `touchend`;
          (p && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + d, {
              programmatic: !1,
              ...(f
                ? { lerp: p ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit(`scroll`, this);
        }
        onNativeScroll = () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === `native`) {
            let e = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - e),
              (this.direction = Math.sign(this.animatedScroll - e)),
              this.isStopped || (this.isScrolling = `native`),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.removeProperty(`overflow`);
              return;
            }
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle) {
              this.rootElement.style.setProperty(`overflow`, `clip`);
              return;
            }
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (e) => {
          let t = e - (this.time || e);
          ((this.time = e),
            this.animate.advance(t * 0.001),
            this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          e,
          {
            offset: t = 0,
            immediate: n = !1,
            lock: r = !1,
            programmatic: i = !0,
            lerp: a = i ? this.options.lerp : void 0,
            duration: o = i ? this.options.duration : void 0,
            easing: s = i ? this.options.easing : void 0,
            onStart: c,
            onComplete: l,
            force: u = !1,
            userData: d,
          } = {}
        ) {
          if ((this.isStopped || this.isLocked) && !u) return;
          let f = e,
            p = t;
          if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f)) f = 0;
          else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f)) f = this.limit;
          else {
            let e = null;
            if (
              (typeof f == `string`
                ? ((e = document.querySelector(f)),
                  e || (f === `#top` ? (f = 0) : console.warn(`Lenis: Target not found`, f)))
                : f instanceof HTMLElement && f?.nodeType && (e = f),
              e)
            ) {
              if (this.options.wrapper !== m) {
                let e = this.rootElement.getBoundingClientRect();
                p -= this.isHorizontal ? e.left : e.top;
              }
              let t = e.getBoundingClientRect(),
                n = getComputedStyle(e),
                r = this.isHorizontal
                  ? Number.parseFloat(n.scrollMarginLeft)
                  : Number.parseFloat(n.scrollMarginTop),
                i = getComputedStyle(this.rootElement),
                a = this.isHorizontal
                  ? Number.parseFloat(i.scrollPaddingLeft)
                  : Number.parseFloat(i.scrollPaddingTop);
              f =
                (this.isHorizontal ? t.left : t.top) +
                this.animatedScroll -
                (Number.isNaN(r) ? 0 : r) -
                (Number.isNaN(a) ? 0 : a);
            }
          }
          if (typeof f == `number`) {
            if (((f += p), this.options.infinite)) {
              if (i) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let e = f - this.animatedScroll;
                e > this.limit / 2 ? (f -= this.limit) : e < -this.limit / 2 && (f += this.limit);
              }
            } else f = te(0, f, this.limit);
            if (f === this.targetScroll) {
              (c?.(this), l?.(this));
              return;
            }
            if (((this.userData = d ?? {}), n)) {
              ((this.animatedScroll = this.targetScroll = f),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (i || (this.targetScroll = f),
              typeof o == `number` && typeof s != `function`
                ? (s = A)
                : typeof s == `function` && typeof o != `number` && (o = 1),
              this.animate.fromTo(this.animatedScroll, f, {
                duration: o,
                easing: s,
                lerp: a,
                onStart: () => {
                  (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
                },
                onUpdate: (e, t) => {
                  ((this.isScrolling = `smooth`),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = e - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = e),
                    this.setScroll(this.scroll),
                    i && (this.targetScroll = e),
                    t || this.emit(),
                    t &&
                      (this.reset(),
                      this.emit(),
                      l?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(e, { deltaX: t, deltaY: n }) {
          let r = Date.now();
          e._lenis ||= {};
          let i = e._lenis,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            f,
            p,
            h;
          if (r - (i.time ?? 0) > 2e3) {
            i.time = Date.now();
            let t = m.getComputedStyle(e);
            if (
              ((i.computedStyle = t),
              (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
              (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
              (l = [`auto`].includes(t.overscrollBehaviorX)),
              (u = [`auto`].includes(t.overscrollBehaviorY)),
              (i.hasOverflowX = a),
              (i.hasOverflowY = o),
              !(a || o))
            )
              return !1;
            ((d = e.scrollWidth),
              (f = e.scrollHeight),
              (p = e.clientWidth),
              (h = e.clientHeight),
              (s = d > p),
              (c = f > h),
              (i.isScrollableX = s),
              (i.isScrollableY = c),
              (i.scrollWidth = d),
              (i.scrollHeight = f),
              (i.clientWidth = p),
              (i.clientHeight = h),
              (i.hasOverscrollBehaviorX = l),
              (i.hasOverscrollBehaviorY = u));
          } else
            ((s = i.isScrollableX),
              (c = i.isScrollableY),
              (a = i.hasOverflowX),
              (o = i.hasOverflowY),
              (d = i.scrollWidth),
              (f = i.scrollHeight),
              (p = i.clientWidth),
              (h = i.clientHeight),
              (l = i.hasOverscrollBehaviorX),
              (u = i.hasOverscrollBehaviorY));
          if (!((a && s) || (o && c))) return !1;
          let g = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
            _,
            v,
            y,
            b,
            x,
            S;
          if (g === `horizontal`)
            ((_ = Math.round(e.scrollLeft)), (v = d - p), (y = t), (b = a), (x = s), (S = l));
          else if (g === `vertical`)
            ((_ = Math.round(e.scrollTop)), (v = f - h), (y = n), (b = o), (x = c), (S = u));
          else return !1;
          return (!S && (_ >= v || _ <= 0)) || ((y > 0 ? _ < v : _ > 0) && b && x);
        }
        get rootElement() {
          return this.options.wrapper === m ? document.documentElement : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
        }
        get isHorizontal() {
          return this.options.orientation === `horizontal`;
        }
        get actualScroll() {
          let e = this.options.wrapper;
          return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
        }
        get scroll() {
          return this.options.infinite ? ie(this.animatedScroll, this.limit) : this.animatedScroll;
        }
        get progress() {
          return this.limit === 0 ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(e) {
          this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(e) {
          this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(e) {
          this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
        }
        get isSmooth() {
          return this.isScrolling === `smooth`;
        }
        get className() {
          let e = `lenis`;
          return (
            this.options.autoToggle && (e += ` lenis-autoToggle`),
            this.isStopped && (e += ` lenis-stopped`),
            this.isLocked && (e += ` lenis-locked`),
            this.isScrolling && (e += ` lenis-scrolling`),
            this.isScrolling === `smooth` && (e += ` lenis-smooth`),
            e
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            this.className.split(` `).forEach((e) => {
              this.rootElement.classList.add(e);
            }));
        }
        cleanUpClassName() {
          for (let e of Array.from(this.rootElement.classList))
            (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e);
        }
      }));
  });
function pe(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
function me(e) {
  (getComputedStyle(e).position === `sticky` &&
    (e.style.setProperty(`position`, `static`), (e.dataset.sticky = `true`)),
    e.offsetParent && me(e.offsetParent));
}
function he(e) {
  (e?.dataset?.sticky === `true` && (e.style.removeProperty(`position`), delete e.dataset.sticky),
    e.offsetParent && he(e.offsetParent));
}
function ge(e, t = 0) {
  let n = t + e.offsetTop;
  return e.offsetParent ? ge(e.offsetParent, n) : n;
}
function _e(e, t = 0) {
  let n = t + e.offsetLeft;
  return e.offsetParent ? _e(e.offsetParent, n) : n;
}
function ve(e, t = 0) {
  let n = t + e.scrollTop;
  return e.offsetParent ? ve(e.offsetParent, n) : n + m.scrollY;
}
function ye(e, t = 0) {
  let n = t + e.scrollLeft;
  return e.offsetParent ? ye(e.offsetParent, n) : n + m.scrollX;
}
function be() {
  return Se++;
}
var xe,
  Se,
  Ce,
  we = e(() => {
    (t(),
      (xe = class {
        element;
        options;
        align;
        rect = {};
        wrapperResizeObserver;
        resizeObserver;
        debouncedWrapperResize;
        constructor(
          e,
          { align: t = [`start`], ignoreSticky: n = !0, ignoreTransform: r = !1 } = {}
        ) {
          ((this.element = e),
            (this.options = { align: t, ignoreSticky: n, ignoreTransform: r }),
            (this.align = [t].flat()),
            (this.debouncedWrapperResize = pe(this.onWrapperResize, 500)),
            (this.wrapperResizeObserver = new ResizeObserver(this.debouncedWrapperResize)),
            this.wrapperResizeObserver.observe(document.body),
            this.onWrapperResize(),
            (this.resizeObserver = new ResizeObserver(this.onResize)),
            this.resizeObserver.observe(this.element),
            this.setRect({ width: this.element.offsetWidth, height: this.element.offsetHeight }));
        }
        destroy() {
          (this.wrapperResizeObserver.disconnect(), this.resizeObserver.disconnect());
        }
        setRect({ top: e, left: t, width: n, height: r, element: i } = {}) {
          ((e ??= this.rect.top),
            (t ??= this.rect.left),
            (n ??= this.rect.width),
            (r ??= this.rect.height),
            (i ??= this.rect.element),
            !(
              e === this.rect.top &&
              t === this.rect.left &&
              n === this.rect.width &&
              r === this.rect.height &&
              i === this.rect.element
            ) &&
              ((this.rect.top = e),
              (this.rect.y = e),
              (this.rect.width = n),
              (this.rect.height = r),
              (this.rect.left = t),
              (this.rect.x = t),
              (this.rect.bottom = e + r),
              (this.rect.right = t + n)));
        }
        onWrapperResize = () => {
          let e, t;
          if ((this.options.ignoreSticky && me(this.element), this.options.ignoreTransform))
            ((e = ge(this.element)), (t = _e(this.element)));
          else {
            let n = this.element.getBoundingClientRect();
            ((e = n.top + ve(this.element)), (t = n.left + ye(this.element)));
          }
          (this.options.ignoreSticky && he(this.element), this.setRect({ top: e, left: t }));
        };
        onResize = ([e]) => {
          if (!e?.borderBoxSize[0]) return;
          let t = e.borderBoxSize[0].inlineSize,
            n = e.borderBoxSize[0].blockSize;
          this.setRect({ width: t, height: n });
        };
      }),
      (Se = 0),
      (Ce = class {
        options;
        elements = new Map();
        snaps = new Map();
        viewport = { width: m.innerWidth, height: m.innerHeight };
        isStopped = !1;
        onSnapDebounced;
        currentSnapIndex;
        constructor(
          e,
          {
            type: t = `proximity`,
            lerp: n,
            easing: r,
            duration: i,
            distanceThreshold: a = `50%`,
            debounce: o = 500,
            onSnapStart: s,
            onSnapComplete: c,
          } = {}
        ) {
          ((this.lenis = e),
            (m.lenis ||= {}),
            (m.lenis.snap = !0),
            (this.options = {
              type: t,
              lerp: n,
              easing: r,
              duration: i,
              distanceThreshold: a,
              debounce: o,
              onSnapStart: s,
              onSnapComplete: c,
            }),
            this.onWindowResize(),
            m.addEventListener(`resize`, this.onWindowResize),
            (this.onSnapDebounced = pe(this.onSnap, this.options.debounce)),
            this.lenis.on(`virtual-scroll`, this.onSnapDebounced));
        }
        destroy() {
          (this.lenis.off(`virtual-scroll`, this.onSnapDebounced),
            m.removeEventListener(`resize`, this.onWindowResize),
            this.elements.forEach((e) => {
              e.destroy();
            }));
        }
        start() {
          this.isStopped = !1;
        }
        stop() {
          this.isStopped = !0;
        }
        add(e) {
          let t = be();
          return (this.snaps.set(t, { value: e }), () => this.snaps.delete(t));
        }
        addElement(e, t = {}) {
          let n = be();
          return (this.elements.set(n, new xe(e, t)), () => this.elements.delete(n));
        }
        addElements(e, t = {}) {
          let n = [...e].map((e) => this.addElement(e, t));
          return () => {
            n.forEach((e) => {
              e();
            });
          };
        }
        onWindowResize = () => {
          ((this.viewport.width = m.innerWidth), (this.viewport.height = m.innerHeight));
        };
        computeSnaps = () => {
          let { isHorizontal: e } = this.lenis,
            t = [...this.snaps.values()];
          return (
            this.elements.forEach(({ rect: n, align: r }) => {
              let i;
              r.forEach((r) => {
                (r === `start`
                  ? (i = n.top)
                  : r === `center`
                    ? (i = e
                        ? n.left + n.width / 2 - this.viewport.width / 2
                        : n.top + n.height / 2 - this.viewport.height / 2)
                    : r === `end` &&
                      (i = e
                        ? n.left + n.width - this.viewport.width
                        : n.top + n.height - this.viewport.height),
                  typeof i == `number` && t.push({ value: Math.ceil(i) }));
              });
            }),
            (t = t.sort((e, t) => Math.abs(e.value) - Math.abs(t.value))),
            t
          );
        };
        previous() {
          this.goTo((this.currentSnapIndex ?? 0) - 1);
        }
        next() {
          this.goTo((this.currentSnapIndex ?? 0) + 1);
        }
        goTo(e) {
          let t = this.computeSnaps();
          if (t.length === 0) return;
          this.currentSnapIndex = Math.max(0, Math.min(e, t.length - 1));
          let n = t[this.currentSnapIndex];
          n !== void 0 &&
            this.lenis.scrollTo(n.value, {
              duration: this.options.duration,
              easing: this.options.easing,
              lerp: this.options.lerp,
              lock: this.options.type === `lock`,
              userData: { initiator: `snap` },
              onStart: () => {
                this.options.onSnapStart?.({ index: this.currentSnapIndex, ...n });
              },
              onComplete: () => {
                this.options.onSnapComplete?.({ index: this.currentSnapIndex, ...n });
              },
            });
        }
        get distanceThreshold() {
          let e = 1 / 0;
          if (this.options.type === `mandatory`) return 1 / 0;
          let { isHorizontal: t } = this.lenis,
            n = t ? `width` : `height`;
          return (
            (e =
              typeof this.options.distanceThreshold == `string` &&
              this.options.distanceThreshold.endsWith(`%`)
                ? (Number(this.options.distanceThreshold.replace(`%`, ``)) / 100) * this.viewport[n]
                : typeof this.options.distanceThreshold == `number`
                  ? this.options.distanceThreshold
                  : this.viewport[n]),
            e
          );
        }
        onSnap = (e) => {
          if (
            this.isStopped ||
            e.event.type === `touchmove` ||
            (this.options.type === `lock` && this.lenis.userData?.initiator === `snap`)
          )
            return;
          let { scroll: t, isHorizontal: n } = this.lenis,
            r = n ? e.deltaX : e.deltaY;
          t = Math.ceil(this.lenis.scroll + r);
          let i = this.computeSnaps();
          if (i.length === 0) return;
          let a,
            o = i.findLastIndex(({ value: e }) => e < t),
            s = i.findIndex(({ value: e }) => e > t);
          if (this.options.type === `lock`) r > 0 ? (a = s) : r < 0 && (a = o);
          else {
            let e = i[o],
              n = e ? Math.abs(t - e.value) : 1 / 0,
              r = i[s];
            a = n < (r ? Math.abs(t - r.value) : 1 / 0) ? o : s;
          }
          if (a === void 0 || a === -1) return;
          a = Math.max(0, Math.min(a, i.length - 1));
          let c = i[a];
          Math.abs(t - c.value) <= this.distanceThreshold && this.goTo(a);
        };
        resize() {
          this.elements.forEach((e) => {
            e.onWrapperResize();
          });
        }
      }));
  });
function j({ smooth: e, infinite: t, orientation: i, intensity: u, children: f, snap: p }) {
  let h = r(),
    g = r(),
    _ = r();
  return (
    n(() => {
      if (f && (!h.current || !g.current)) return;
      h.current &&
        g.current &&
        (i === `horizontal`
          ? h.current.style.setProperty(`overflowX`, `auto`)
          : h.current.style.setProperty(`overflowY`, `auto`));
      let n = new de({
        smoothWheel: e,
        infinite: t,
        orientation: i,
        gestureOrientation: i === `horizontal` ? `both` : `vertical`,
        autoRaf: !0,
        autoToggle: !0,
        anchors: !0,
        allowNestedScroll: !0,
        wrapper: h.current,
        content: g.current,
        syncTouch: !!t || i === `horizontal`,
        stopInertiaOnNavigate: !0,
      });
      _.current = n;
      let r;
      return (
        p &&
          p.snaps.length > 0 &&
          ((r = new Ce(n, { type: p.type, distanceThreshold: p.threshold + `%` })),
          p.snaps.forEach((e) => {
            if (!e.target?.current) return;
            let t = e.target.current.id;
            document.querySelectorAll(`#${t}`).forEach((t) => {
              r.addElement(t, { align: e.align });
            });
          })),
        (m.lenis = n),
        (m.lenisSnap = p),
        () => {
          (n && n.destroy(), r && r.destroy());
        }
      );
    }, [e, t, i, u, f, p]),
    l(d, {
      children: [
        o(`link`, { href: `../../styles/lenis.css`, rel: `stylesheet` }),
        f &&
          o(d, {
            children: o(`div`, {
              ref: h,
              style:
                i === `horizontal`
                  ? { overflowX: `auto`, width: `100%` }
                  : { overflowY: `auto`, height: `100%` },
              children: o(`div`, {
                ref: g,
                style: { width: `100%` },
                children: a.map(f, (e) =>
                  s(e) ? c(e, { style: { ...e.props.style, width: `100%` } }) : e
                ),
              }),
            }),
          }),
      ],
    })
  );
}
var Te = e(() => {
  (t(),
    u(),
    g(),
    fe(),
    we(),
    p(),
    (j.displayName = `Lenis`),
    C(j, {
      smooth: { type: y.Boolean, title: `Smooth`, defaultValue: !0 },
      intensity: {
        type: y.Number,
        title: `Intensity`,
        defaultValue: 12,
        step: 1,
        min: 1,
        max: 100,
        hidden(e) {
          return e.smooth === !1;
        },
        description: `This will be ignored on mobile.`,
      },
      infinite: {
        type: y.Boolean,
        title: `Infinite`,
        defaultValue: !1,
        hidden(e) {
          return e.smooth === !1;
        },
      },
      orientation: {
        type: y.Enum,
        defaultValue: `Vertical`,
        displaySegmentedControl: !0,
        options: [`vertical`, `horizontal`],
        optionTitles: [`Vertical`, `Horizontal`],
        hidden(e) {
          return e.smooth === !1;
        },
      },
      children: { type: y.ComponentInstance, title: `Content` },
      snap: {
        type: y.Object,
        optional: !0,
        description: `Cooked and served by [darkroom.engineering](https://darkroom.engineering).`,
        controls: {
          type: {
            type: y.Enum,
            defaultValue: `proximity`,
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
            options: [`proximity`, `mandatory`, `lock`],
            optionTitles: [`Proximity`, `Mandatory`, `Lock`],
          },
          threshold: {
            type: y.Number,
            defaultValue: 50,
            min: 0,
            max: 100,
            unit: `%`,
            hidden: (e) => e.snap.type === `mandatory`,
          },
          snaps: {
            type: y.Array,
            control: {
              type: y.Object,
              controls: {
                target: { title: `Target`, type: y.ScrollSectionRef },
                align: {
                  type: y.Enum,
                  defaultValue: `center`,
                  displaySegmentedControl: !0,
                  segmentedControlDirection: `horizontal`,
                  options: [`start`, `center`, `end`],
                  optionIcons: [`align-top`, `align-middle`, `align-bottom`],
                },
              },
            },
          },
        },
      },
    }));
});
function M(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Ee(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function N(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function P(e) {
  throw Error(`Unexpected value: ${e}`);
}
function F(e) {
  return typeof e == `string`;
}
function I(e) {
  return Number.isFinite(e);
}
function L(e) {
  return e === null;
}
function R(e) {
  if (L(e)) return 0;
  switch (e.type) {
    case y.Array:
      return 1;
    case y.Boolean:
      return 2;
    case y.Color:
      return 3;
    case y.Date:
      return 4;
    case y.Enum:
      return 5;
    case y.File:
      return 6;
    case y.ResponsiveImage:
      return 10;
    case y.Link:
      return 7;
    case y.Number:
      return 8;
    case y.Object:
      return 9;
    case y.RichText:
      return 11;
    case y.String:
      return 12;
    case y.VectorSetItem:
      return 13;
    default:
      P(e);
  }
}
function De(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = B.read(e);
    n.push(t);
  }
  return { type: y.Array, value: n };
}
function Oe(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) B.write(e, n);
}
function ke(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = B.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Ae(e) {
  return { type: y.Boolean, value: e.readUint8() !== 0 };
}
function je(e, t) {
  e.writeUint8(+!!t.value);
}
function Me(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ne(e) {
  return { type: y.Color, value: e.readString() };
}
function Pe(e, t) {
  e.writeString(t.value);
}
function Fe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ie(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: y.Date, value: n.toISOString() };
}
function Le(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function Re(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ze(e) {
  return { type: y.Enum, value: e.readString() };
}
function Be(e, t) {
  e.writeString(t.value);
}
function Ve(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function He(e) {
  return { type: y.File, value: e.readString() };
}
function Ue(e, t) {
  e.writeString(t.value);
}
function We(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ge(e) {
  return { type: y.Link, value: e.readJson() };
}
function Ke(e, t) {
  e.writeJson(t.value);
}
function qe(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Je(e) {
  return { type: y.Number, value: e.readFloat64() };
}
function Ye(e, t) {
  e.writeFloat64(t.value);
}
function Xe(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ze(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = B.read(e);
  }
  return { type: y.Object, value: n };
}
function Qe(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), B.write(e, r));
}
function $e(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = B.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function et(e) {
  return { type: y.ResponsiveImage, value: e.readJson() };
}
function tt(e, t) {
  e.writeJson(t.value);
}
function nt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function rt(e) {
  let t = e.readInt8();
  if (t === 0) return { type: y.RichText, value: e.readUint32() };
  if (t === 1) return { type: y.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function it(e, t) {
  if (I(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (F(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function at(e, t) {
  let n = e.value,
    r = t.value;
  if ((I(n) && I(r)) || (F(n) && F(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function ot(e) {
  return { type: y.String, value: e.readString() };
}
function st(e, t) {
  e.writeString(t.value);
}
function ct(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function lt(e) {
  return { type: y.VectorSetItem, value: e.readUint32() };
}
function ut(e, t) {
  e.writeUint32(t.value);
}
function dt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function ft(e) {
  let t = Math.floor(Tt * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function pt(e, t) {
  let n = ht(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await X(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Dt(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function mt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function ht(e) {
  N(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
function gt(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = B.read(e);
  }
  return t;
}
var z,
  B,
  _t,
  V,
  vt,
  H,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  Tt,
  Et,
  X,
  Dt,
  Ot,
  kt,
  At = e(() => {
    (t(),
      g(),
      (_t = Object.create),
      (V = Object.defineProperty),
      (vt = Object.getOwnPropertyDescriptor),
      (H = Object.getOwnPropertyNames),
      (yt = Object.getPrototypeOf),
      (bt = Object.prototype.hasOwnProperty),
      (xt = (e, t) =>
        function () {
          try {
            return (t || (0, e[H(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (St = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of H(t))
            bt.call(e, i) ||
              i === n ||
              V(e, i, { get: () => t[i], enumerable: !(r = vt(t, i)) || r.enumerable });
        return e;
      }),
      (Ct = (e, t, n) => (
        (n = e == null ? {} : _t(yt(e))),
        St(!t && e && e.__esModule ? n : V(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (wt = Ct(
        xt({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (U = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (W =
        ((z = class e {
          getOffset() {
            return this.offset;
          }
          ensureLength(e) {
            let t = this.bytes.length;
            if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
          }
          readUint8() {
            let e = U.Uint8;
            this.ensureLength(e);
            let t = this.view.getUint8(this.offset);
            return ((this.offset += e), t);
          }
          readUint16() {
            let e = U.Uint16;
            this.ensureLength(e);
            let t = this.view.getUint16(this.offset);
            return ((this.offset += e), t);
          }
          readUint32() {
            let e = U.Uint32;
            this.ensureLength(e);
            let t = this.view.getUint32(this.offset);
            return ((this.offset += e), t);
          }
          readUint64() {
            let e = this.readBigUint64();
            return Number(e);
          }
          readBigUint64() {
            let e = U.BigUint64;
            this.ensureLength(e);
            let t = this.view.getBigUint64(this.offset);
            return ((this.offset += e), t);
          }
          readInt8() {
            let e = U.Int8;
            this.ensureLength(e);
            let t = this.view.getInt8(this.offset);
            return ((this.offset += e), t);
          }
          readInt16() {
            let e = U.Int16;
            this.ensureLength(e);
            let t = this.view.getInt16(this.offset);
            return ((this.offset += e), t);
          }
          readInt32() {
            let e = U.Int32;
            this.ensureLength(e);
            let t = this.view.getInt32(this.offset);
            return ((this.offset += e), t);
          }
          readInt64() {
            let e = this.readBigInt64();
            return Number(e);
          }
          readBigInt64() {
            let e = U.BigInt64;
            this.ensureLength(e);
            let t = this.view.getBigInt64(this.offset);
            return ((this.offset += e), t);
          }
          readFloat32() {
            let e = U.Float32;
            this.ensureLength(e);
            let t = this.view.getFloat32(this.offset);
            return ((this.offset += e), t);
          }
          readFloat64() {
            let e = U.Float64;
            this.ensureLength(e);
            let t = this.view.getFloat64(this.offset);
            return ((this.offset += e), t);
          }
          readBytes(e) {
            let t = this.offset,
              n = t + e,
              r = this.bytes.subarray(t, n);
            return ((this.offset = n), r);
          }
          readString() {
            let t = this.readUint32(),
              n = this.readBytes(t);
            return e.textDecoder.decode(n);
          }
          readJson() {
            let e = this.readString();
            return JSON.parse(e);
          }
          constructor(e) {
            (M(this, `bytes`, void 0),
              M(this, `offset`, 0),
              M(this, `view`, void 0),
              (this.bytes = e),
              (this.view = Ee(this.bytes)));
          }
        }),
        M(z, `textDecoder`, new TextDecoder()),
        z)),
      m !== void 0 && m.requestIdleCallback,
      (G = (e) => 2 ** e - 1),
      (K = (e) => -(2 ** (e - 1))),
      (q = (e) => 2 ** (e - 1) - 1),
      K(8),
      K(16),
      K(32),
      -(BigInt(2) ** BigInt(63)),
      G(8),
      G(16),
      G(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      q(8),
      q(16),
      q(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (J = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            N(I(n), `Invalid chunkId`),
            N(I(r), `Invalid offset`),
            N(I(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (N(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          (M(this, `chunkId`, void 0),
            M(this, `offset`, void 0),
            M(this, `length`, void 0),
            (this.chunkId = e),
            (this.offset = t),
            (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return De(e);
            case 2:
              return Ae(e);
            case 3:
              return Ne(e);
            case 4:
              return Ie(e);
            case 5:
              return ze(e);
            case 6:
              return He(e);
            case 7:
              return Ge(e);
            case 8:
              return Je(e);
            case 9:
              return Ze(e);
            case 10:
              return et(e);
            case 11:
              return rt(e);
            case 12:
              return ot(e);
            case 13:
              return lt(e);
            default:
              P(t);
          }
        }),
          (e.write = function (e, t) {
            let n = R(t);
            if ((e.writeUint8(n), !L(t)))
              switch (t.type) {
                case y.Array:
                  return Oe(e, t);
                case y.Boolean:
                  return je(e, t);
                case y.Color:
                  return Pe(e, t);
                case y.Date:
                  return Le(e, t);
                case y.Enum:
                  return Be(e, t);
                case y.File:
                  return Ue(e, t);
                case y.Link:
                  return Ke(e, t);
                case y.Number:
                  return Ye(e, t);
                case y.Object:
                  return Qe(e, t);
                case y.ResponsiveImage:
                  return tt(e, t);
                case y.RichText:
                  return it(e, t);
                case y.VectorSetItem:
                  return ut(e, t);
                case y.String:
                  return st(e, t);
                default:
                  P(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = R(e),
              i = R(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (L(e) || L(t)) return 0;
            switch (e.type) {
              case y.Array:
                return (N(t.type === y.Array), ke(e, t, n));
              case y.Boolean:
                return (N(t.type === y.Boolean), Me(e, t));
              case y.Color:
                return (N(t.type === y.Color), Fe(e, t));
              case y.Date:
                return (N(t.type === y.Date), Re(e, t));
              case y.Enum:
                return (N(t.type === y.Enum), Ve(e, t));
              case y.File:
                return (N(t.type === y.File), We(e, t));
              case y.Link:
                return (N(t.type === y.Link), qe(e, t));
              case y.Number:
                return (N(t.type === y.Number), Xe(e, t));
              case y.Object:
                return (N(t.type === y.Object), $e(e, t, n));
              case y.ResponsiveImage:
                return (N(t.type === y.ResponsiveImage), nt(e, t));
              case y.RichText:
                return (N(t.type === y.RichText), at(e, t));
              case y.VectorSetItem:
                return (N(t.type === y.VectorSetItem), dt(e, t));
              case y.String:
                return (N(t.type === y.String), ct(e, t, n));
              default:
                P(e);
            }
          }));
      })((B ||= {})),
      (Y = 3),
      (Tt = 250),
      (Et = [408, 429, 500, 502, 503, 504]),
      (X = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!Et.includes(r.status) || ++n > Y) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > Y) throw e;
          }
          await ft(n);
        }
      }),
      (Dt = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((N(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = mt(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((N(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = mt(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          M(this, `chunks`, []);
        }
      }),
      (Ot = class {
        scanItems() {
          return (
            (this.itemsPromise ??= X(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new W(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = gt(n),
                  i = n.getOffset() - e,
                  a = new J(this.id, e, i).toString(),
                  o = { pointer: a, data: t };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          (M(this, `id`, void 0),
            M(this, `url`, void 0),
            M(this, `itemsPromise`, void 0),
            M(
              this,
              `itemLoader`,
              new wt.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = J.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await pt(this.url, t)).map((t, n) => {
                    let r = gt(new W(t)),
                      i = e[n];
                    return (N(i, `Missing pointer`), { pointer: i, data: r });
                  });
                },
                { maxBatchSize: 250 }
              )
            ),
            (this.id = e),
            (this.url = t));
        }
      }),
      (kt = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = J.fromString(e),
                n = this.chunks[t.chunkId];
              return (N(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = J.fromString(e.pointer),
            r = J.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return B.compare(e, t, n);
        }
        constructor(e) {
          (M(this, `options`, void 0),
            M(this, `id`, void 0),
            M(this, `schema`, void 0),
            M(this, `indexes`, void 0),
            M(this, `resolveRichText`, void 0),
            M(this, `resolveVectorSetItem`, void 0),
            M(this, `chunks`, void 0),
            (this.options = e),
            (this.chunks = this.options.chunks.map((e, t) => new Ot(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function jt(e) {
  return typeof e == `object` && !!e && !s(e) && Pt in e;
}
function Mt(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Nt(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return f(i, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return f(v, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, s] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of s) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (jt(r) && r.preload(), (i[t] = r));
          }
          let c = e[r];
          return (
            Mt(c, `Module not found`),
            jt(c) && c.preload(),
            o(b, {
              componentIdentifier: r,
              children: (e) => o(x, { component: c, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return f(e === `a` ? h.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var Z,
  Pt,
  Ft,
  It = e(() => {
    (t(),
      u(),
      g(),
      p(),
      m !== void 0 && m.requestIdleCallback,
      (Pt = `preload`),
      (Ft =
        (((Z = Ft || {})[(Z.Fragment = 1)] = `Fragment`),
        (Z[(Z.Link = 2)] = `Link`),
        (Z[(Z.Module = 3)] = `Module`),
        (Z[(Z.Tag = 4)] = `Tag`),
        (Z[(Z.Text = 5)] = `Text`),
        Z)));
  }),
  Lt,
  Rt,
  zt,
  Bt,
  Q,
  $,
  Vt,
  Ht,
  Ut,
  Wt = e(() => {
    (g(),
      At(),
      It(),
      (Lt = {
        AljuCQ0zt: { isNullable: !0, type: y.String },
        CgoXtIKja: { isNullable: !0, type: y.String },
        Cl1SiX2vI: { isNullable: !0, type: y.String },
        createdAt: { isNullable: !0, type: y.Date },
        CVLPZQZko: { isNullable: !0, type: y.String },
        d6LMtvBbW: { isNullable: !0, type: y.ResponsiveImage },
        DHYCE4HN1: { isNullable: !0, type: y.String },
        fPlaGc_ua: { isNullable: !0, type: y.ResponsiveImage },
        GNCKYbpJB: { isNullable: !0, type: y.RichText },
        HAuISOO08: { isNullable: !0, type: y.String },
        HrX06D5z7: { isNullable: !0, type: y.Link },
        id: { isNullable: !1, type: y.String },
        LfzgYRZF0: {
          definition: {
            definitions: {
              C6w75Ewao: { isNullable: !0, type: y.ResponsiveImage },
              id: { isNullable: !1, type: y.String },
            },
            isNullable: !0,
            type: y.Object,
          },
          isNullable: !0,
          type: y.Array,
        },
        nextItemId: { isNullable: !0, type: y.String },
        oYx4NddcW: { isNullable: !0, type: y.String },
        pHA37_fvh: { isNullable: !0, type: y.ResponsiveImage },
        pqfP09Smc: { isNullable: !0, type: y.ResponsiveImage },
        previousItemId: { isNullable: !0, type: y.String },
        PY4p1EU9a: { isNullable: !0, type: y.String },
        QLMqgvV2H: { isNullable: !0, type: y.ResponsiveImage },
        SKNNMsKgv: { isNullable: !0, type: y.ResponsiveImage },
        sNMVExjiR: { isNullable: !0, type: y.ResponsiveImage },
        T8gvFHXbJ: { isNullable: !0, type: y.RichText },
        taH84Q8EW: { isNullable: !0, type: y.ResponsiveImage },
        TTZpcGXPs: { isNullable: !0, type: y.String },
        updatedAt: { isNullable: !0, type: y.Date },
        VQnEXLrEB: { isNullable: !0, type: y.Boolean },
        wEXmHv4ec: { isNullable: !0, type: y.String },
      }),
      (Rt = []),
      (zt = (e) => {
        let t = Rt[e];
        if (t) return t().then((e) => e.default);
      }),
      (Bt = Nt({})),
      (Q = new S()),
      ($ = {
        collectionByLocaleId: {
          default: new kt({
            chunks: [
              new URL(
                `./T9gdzTukW-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/p4kHgwk3sBVtmIokhGuP/M3yy2gDhIgZOpwmiqqeq/T9gdzTukW.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `7ffa061a-8d6a-4877-abf4-6cd736e3a3fbdefault`,
            indexes: [],
            resolveRichText: Bt,
            resolveVectorSetItem: zt,
            schema: Lt,
          }),
        },
        displayName: `Works`,
        id: `7ffa061a-8d6a-4877-abf4-6cd736e3a3fb`,
      }),
      C($, {
        PY4p1EU9a: { defaultValue: ``, title: `Title`, type: y.String },
        wEXmHv4ec: { preventLocalization: !1, title: `Slug`, type: y.String },
        VQnEXLrEB: { defaultValue: !1, title: `Home Featured`, type: y.Boolean },
        CgoXtIKja: {
          dataIdentifier: `local-module:collection/T9gdzTukW:default`,
          title: `Next Work`,
          type: y.CollectionReference,
        },
        QLMqgvV2H: { title: `Thumbnail`, type: y.ResponsiveImage },
        TTZpcGXPs: { defaultValue: ``, title: `Cliente`, type: y.String },
        AljuCQ0zt: { defaultValue: ``, title: `Ano`, type: y.String },
        oYx4NddcW: { defaultValue: ``, title: `Setor`, type: y.String },
        DHYCE4HN1: { defaultValue: ``, displayTextArea: !0, title: `Description`, type: y.String },
        HrX06D5z7: { title: `Live project link`, type: y.Link },
        T8gvFHXbJ: { defaultValue: ``, title: `Projetos`, type: y.RichText },
        sNMVExjiR: { title: `Image 2`, type: y.ResponsiveImage },
        taH84Q8EW: { title: `Image 3`, type: y.ResponsiveImage },
        pqfP09Smc: { title: `Image 4`, type: y.ResponsiveImage },
        pHA37_fvh: { title: `Image 5`, type: y.ResponsiveImage },
        fPlaGc_ua: { title: `Image 6`, type: y.ResponsiveImage },
        d6LMtvBbW: { title: `Image 7`, type: y.ResponsiveImage },
        LfzgYRZF0: {
          __vekterDefault: [],
          control: {
            controls: { C6w75Ewao: { title: `Image`, type: `responsiveimage` } },
            type: `object`,
          },
          title: `Gallery`,
          type: y.Array,
        },
        CVLPZQZko: { defaultValue: ``, displayTextArea: !0, title: `Testimonial`, type: y.String },
        HAuISOO08: { defaultValue: ``, title: `Client name`, type: y.String },
        Cl1SiX2vI: { defaultValue: ``, title: `Client role`, type: y.String },
        SKNNMsKgv: { title: `Client photo`, type: y.ResponsiveImage },
        GNCKYbpJB: {
          defaultValue: `<p dir="auto"><br class="trailing-break"></p>`,
          title: `Projetos 2`,
          type: y.RichText,
        },
        createdAt: { title: `Created`, type: y.Date },
        updatedAt: { title: `Updated`, type: y.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/T9gdzTukW:default`,
          title: `Previous`,
          type: y.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/T9gdzTukW:default`,
          title: `Next`,
          type: y.CollectionReference,
        },
      }),
      (Vt = {}),
      (Ht = {
        async getSlugByRecordId(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `wEXmHv4ec`, type: `Identifier` }],
              where: {
                left: { name: `id`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.wEXmHv4ec;
        },
        async getRecordIdBySlug(e, t) {
          let [n] = await Q.query(
            {
              from: { data: $, type: `Collection` },
              limit: { type: `LiteralValue`, value: 1 },
              select: [{ name: `id`, type: `Identifier` }],
              where: {
                left: { name: `wEXmHv4ec`, type: `Identifier` },
                operator: `==`,
                right: { type: `LiteralValue`, value: e },
                type: `BinaryOperation`,
              },
            },
            t
          );
          return n?.id;
        },
      }),
      (Ut = {
        exports: {
          enumToDisplayNameFunctions: {
            type: `variable`,
            annotations: { framerContractVersion: `1` },
          },
          utils: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `data`,
            name: `data`,
            annotations: {
              framerCollectionUtils: `1`,
              framerData: `true`,
              framerSlug: `wEXmHv4ec`,
              framerColorSyntax: `false`,
              framerCollectionId: `T9gdzTukW`,
              framerEnumToDisplayNameUtils: `2`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerRecordIdKey: `id`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Gt(e, t) {
  return {
    description: `A clean, modern portfolio template crafted for designers to showcase their work professionally.`,
    favicon: `https://framerusercontent.com/assets/BA4tt751TdyY5lwJDvzlnO3sMw.png`,
    robots: `max-image-preview:large`,
    socialImage: `https://framerusercontent.com/assets/6UyNgGkIkD7IxzEIb2rDR4AeCF0.png`,
    title: `Cole — Minimal Portfolio Template`,
  };
}
var Kt = e(() => {});
export {
  Wt as a,
  j as c,
  T as d,
  w as f,
  Vt as i,
  Te as l,
  Gt as n,
  Ht as o,
  ee as p,
  Ut as r,
  $ as s,
  Kt as t,
  E as u,
};
//# sourceMappingURL=shared-lib.DP-o-NQ_.mjs.map
