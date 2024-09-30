"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[855],
	{
		8030: function (e, t, r) {
			r.d(t, {
				Z: function () {
					return s;
				},
			});
			var n = r(2265);
			/**
			 * @license lucide-react v0.408.0 - ISC
			 *
			 * This source code is licensed under the ISC license.
			 * See the LICENSE file in the root directory of this source tree.
			 */ let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
				i = function () {
					for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
						t[r] = arguments[r];
					return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
				};
			/**
			 * @license lucide-react v0.408.0 - ISC
			 *
			 * This source code is licensed under the ISC license.
			 * See the LICENSE file in the root directory of this source tree.
			 */ var l = {
				xmlns: "http://www.w3.org/2000/svg",
				width: 24,
				height: 24,
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
			};
			/**
			 * @license lucide-react v0.408.0 - ISC
			 *
			 * This source code is licensed under the ISC license.
			 * See the LICENSE file in the root directory of this source tree.
			 */ let a = (0, n.forwardRef)((e, t) => {
					let {
						color: r = "currentColor",
						size: o = 24,
						strokeWidth: a = 2,
						absoluteStrokeWidth: s,
						className: u = "",
						children: c,
						iconNode: d,
						...f
					} = e;
					return (0, n.createElement)(
						"svg",
						{
							ref: t,
							...l,
							width: o,
							height: o,
							stroke: r,
							strokeWidth: s ? (24 * Number(a)) / Number(o) : a,
							className: i("lucide", u),
							...f,
						},
						[
							...d.map((e) => {
								let [t, r] = e;
								return (0, n.createElement)(t, r);
							}),
							...(Array.isArray(c) ? c : [c]),
						],
					);
				}),
				s = (e, t) => {
					let r = (0, n.forwardRef)((r, l) => {
						let { className: s, ...u } = r;
						return (0, n.createElement)(a, {
							ref: l,
							iconNode: t,
							className: i("lucide-".concat(o(e)), s),
							...u,
						});
					});
					return (r.displayName = "".concat(e)), r;
				};
		},
		5489: function (e, t, r) {
			r.d(t, {
				Z: function () {
					return n;
				},
			});
			/**
			 * @license lucide-react v0.408.0 - ISC
			 *
			 * This source code is licensed under the ISC license.
			 * See the LICENSE file in the root directory of this source tree.
			 */ let n = (0, r(8030).Z)("Key", [
				[
					"path",
					{
						d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
						key: "g0fldk",
					},
				],
				["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
				["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
			]);
		},
		2022: function (e, t, r) {
			r.d(t, {
				Z: function () {
					return n;
				},
			});
			/**
			 * @license lucide-react v0.408.0 - ISC
			 *
			 * This source code is licensed under the ISC license.
			 * See the LICENSE file in the root directory of this source tree.
			 */ let n = (0, r(8030).Z)("User", [
				[
					"path",
					{ d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
				],
				["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
			]);
		},
		4697: function (e, t, r) {
			r.d(t, {
				Z: function () {
					return n;
				},
			});
			/**
			 * @license lucide-react v0.408.0 - ISC
			 *
			 * This source code is licensed under the ISC license.
			 * See the LICENSE file in the root directory of this source tree.
			 */ let n = (0, r(8030).Z)("X", [
				["path", { d: "M18 6 6 18", key: "1bl5f8" }],
				["path", { d: "m6 6 12 12", key: "d8bk6v" }],
			]);
		},
		8149: function (e, t, r) {
			r.d(t, {
				M: function () {
					return n;
				},
			});
			function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
				return function (n) {
					if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
				};
			}
		},
		976: function (e, t, r) {
			r.d(t, {
				B: function () {
					return s;
				},
			});
			var n = r(2265),
				o = r(8324),
				i = r(1584),
				l = r(1538),
				a = r(7437);
			function s(e) {
				let t = e + "CollectionProvider",
					[r, s] = (0, o.b)(t),
					[u, c] = r(t, {
						collectionRef: { current: null },
						itemMap: new Map(),
					}),
					d = (e) => {
						let { scope: t, children: r } = e,
							o = n.useRef(null),
							i = n.useRef(new Map()).current;
						return (0, a.jsx)(u, {
							scope: t,
							itemMap: i,
							collectionRef: o,
							children: r,
						});
					};
				d.displayName = t;
				let f = e + "CollectionSlot",
					p = n.forwardRef((e, t) => {
						let { scope: r, children: n } = e,
							o = c(f, r),
							s = (0, i.e)(t, o.collectionRef);
						return (0, a.jsx)(l.g7, { ref: s, children: n });
					});
				p.displayName = f;
				let m = e + "CollectionItemSlot",
					v = "data-radix-collection-item",
					b = n.forwardRef((e, t) => {
						let { scope: r, children: o, ...s } = e,
							u = n.useRef(null),
							d = (0, i.e)(t, u),
							f = c(m, r);
						return (
							n.useEffect(
								() => (
									f.itemMap.set(u, { ref: u, ...s }),
									() => void f.itemMap.delete(u)
								),
							),
							(0, a.jsx)(l.g7, { [v]: "", ref: d, children: o })
						);
					});
				return (
					(b.displayName = m),
					[
						{ Provider: d, Slot: p, ItemSlot: b },
						function (t) {
							let r = c(e + "CollectionConsumer", t);
							return n.useCallback(() => {
								let e = r.collectionRef.current;
								if (!e) return [];
								let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
								return Array.from(r.itemMap.values()).sort(
									(e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
								);
							}, [r.collectionRef, r.itemMap]);
						},
						s,
					]
				);
			}
		},
		1584: function (e, t, r) {
			r.d(t, {
				F: function () {
					return o;
				},
				e: function () {
					return i;
				},
			});
			var n = r(2265);
			function o(...e) {
				return (t) =>
					e.forEach((e) => {
						"function" == typeof e ? e(t) : null != e && (e.current = t);
					});
			}
			function i(...e) {
				return n.useCallback(o(...e), e);
			}
		},
		8324: function (e, t, r) {
			r.d(t, {
				b: function () {
					return l;
				},
				k: function () {
					return i;
				},
			});
			var n = r(2265),
				o = r(7437);
			function i(e, t) {
				let r = n.createContext(t);
				function i(e) {
					let { children: t, ...i } = e,
						l = n.useMemo(() => i, Object.values(i));
					return (0, o.jsx)(r.Provider, { value: l, children: t });
				}
				return (
					(i.displayName = e + "Provider"),
					[
						i,
						function (o) {
							let i = n.useContext(r);
							if (i) return i;
							if (void 0 !== t) return t;
							throw Error(`\`${o}\` must be used within \`${e}\``);
						},
					]
				);
			}
			function l(e, t = []) {
				let r = [],
					i = () => {
						let t = r.map((e) => n.createContext(e));
						return function (r) {
							let o = r?.[e] || t;
							return n.useMemo(
								() => ({ [`__scope${e}`]: { ...r, [e]: o } }),
								[r, o],
							);
						};
					};
				return (
					(i.scopeName = e),
					[
						function (t, i) {
							let l = n.createContext(i),
								a = r.length;
							function s(t) {
								let { scope: r, children: i, ...s } = t,
									u = r?.[e][a] || l,
									c = n.useMemo(() => s, Object.values(s));
								return (0, o.jsx)(u.Provider, { value: c, children: i });
							}
							return (
								(r = [...r, i]),
								(s.displayName = t + "Provider"),
								[
									s,
									function (r, o) {
										let s = o?.[e][a] || l,
											u = n.useContext(s);
										if (u) return u;
										if (void 0 !== i) return i;
										throw Error(`\`${r}\` must be used within \`${t}\``);
									},
								]
							);
						},
						(function (...e) {
							let t = e[0];
							if (1 === e.length) return t;
							let r = () => {
								let r = e.map((e) => ({
									useScope: e(),
									scopeName: e.scopeName,
								}));
								return function (e) {
									let o = r.reduce((t, { useScope: r, scopeName: n }) => {
										let o = r(e)[`__scope${n}`];
										return { ...t, ...o };
									}, {});
									return n.useMemo(
										() => ({ [`__scope${t.scopeName}`]: o }),
										[o],
									);
								};
							};
							return (r.scopeName = t.scopeName), r;
						})(i, ...t),
					]
				);
			}
		},
		3938: function (e, t, r) {
			r.d(t, {
				I0: function () {
					return g;
				},
				XB: function () {
					return f;
				},
				fC: function () {
					return b;
				},
			});
			var n,
				o = r(2265),
				i = r(8149),
				l = r(5171),
				a = r(1584),
				s = r(5137),
				u = r(7437),
				c = "dismissableLayer.update",
				d = o.createContext({
					layers: new Set(),
					layersWithOutsidePointerEventsDisabled: new Set(),
					branches: new Set(),
				}),
				f = o.forwardRef((e, t) => {
					var r, f;
					let {
							disableOutsidePointerEvents: p = !1,
							onEscapeKeyDown: b,
							onPointerDownOutside: g,
							onFocusOutside: y,
							onInteractOutside: h,
							onDismiss: w,
							...x
						} = e,
						E = o.useContext(d),
						[k, C] = o.useState(null),
						T =
							null !== (f = null == k ? void 0 : k.ownerDocument) &&
							void 0 !== f
								? f
								: null === (r = globalThis) || void 0 === r
									? void 0
									: r.document,
						[, N] = o.useState({}),
						P = (0, a.e)(t, (e) => C(e)),
						j = Array.from(E.layers),
						[R] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
						M = j.indexOf(R),
						S = k ? j.indexOf(k) : -1,
						L = E.layersWithOutsidePointerEventsDisabled.size > 0,
						z = S >= M,
						O = (function (e) {
							var t;
							let r =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: null === (t = globalThis) || void 0 === t
											? void 0
											: t.document,
								n = (0, s.W)(e),
								i = o.useRef(!1),
								l = o.useRef(() => {});
							return (
								o.useEffect(() => {
									let e = (e) => {
											if (e.target && !i.current) {
												let t = function () {
														v("dismissableLayer.pointerDownOutside", n, o, {
															discrete: !0,
														});
													},
													o = { originalEvent: e };
												"touch" === e.pointerType
													? (r.removeEventListener("click", l.current),
														(l.current = t),
														r.addEventListener("click", l.current, {
															once: !0,
														}))
													: t();
											} else r.removeEventListener("click", l.current);
											i.current = !1;
										},
										t = window.setTimeout(() => {
											r.addEventListener("pointerdown", e);
										}, 0);
									return () => {
										window.clearTimeout(t),
											r.removeEventListener("pointerdown", e),
											r.removeEventListener("click", l.current);
									};
								}, [r, n]),
								{ onPointerDownCapture: () => (i.current = !0) }
							);
						})((e) => {
							let t = e.target,
								r = [...E.branches].some((e) => e.contains(t));
							!z ||
								r ||
								(null == g || g(e),
								null == h || h(e),
								e.defaultPrevented || null == w || w());
						}, T),
						D = (function (e) {
							var t;
							let r =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: null === (t = globalThis) || void 0 === t
											? void 0
											: t.document,
								n = (0, s.W)(e),
								i = o.useRef(!1);
							return (
								o.useEffect(() => {
									let e = (e) => {
										e.target &&
											!i.current &&
											v(
												"dismissableLayer.focusOutside",
												n,
												{ originalEvent: e },
												{ discrete: !1 },
											);
									};
									return (
										r.addEventListener("focusin", e),
										() => r.removeEventListener("focusin", e)
									);
								}, [r, n]),
								{
									onFocusCapture: () => (i.current = !0),
									onBlurCapture: () => (i.current = !1),
								}
							);
						})((e) => {
							let t = e.target;
							[...E.branches].some((e) => e.contains(t)) ||
								(null == y || y(e),
								null == h || h(e),
								e.defaultPrevented || null == w || w());
						}, T);
					return (
						!(function (e, t = globalThis?.document) {
							let r = (0, s.W)(e);
							o.useEffect(() => {
								let e = (e) => {
									"Escape" === e.key && r(e);
								};
								return (
									t.addEventListener("keydown", e, { capture: !0 }),
									() => t.removeEventListener("keydown", e, { capture: !0 })
								);
							}, [r, t]);
						})((e) => {
							S !== E.layers.size - 1 ||
								(null == b || b(e),
								!e.defaultPrevented && w && (e.preventDefault(), w()));
						}, T),
						o.useEffect(() => {
							if (k)
								return (
									p &&
										(0 === E.layersWithOutsidePointerEventsDisabled.size &&
											((n = T.body.style.pointerEvents),
											(T.body.style.pointerEvents = "none")),
										E.layersWithOutsidePointerEventsDisabled.add(k)),
									E.layers.add(k),
									m(),
									() => {
										p &&
											1 === E.layersWithOutsidePointerEventsDisabled.size &&
											(T.body.style.pointerEvents = n);
									}
								);
						}, [k, T, p, E]),
						o.useEffect(
							() => () => {
								k &&
									(E.layers.delete(k),
									E.layersWithOutsidePointerEventsDisabled.delete(k),
									m());
							},
							[k, E],
						),
						o.useEffect(() => {
							let e = () => N({});
							return (
								document.addEventListener(c, e),
								() => document.removeEventListener(c, e)
							);
						}, []),
						(0, u.jsx)(l.WV.div, {
							...x,
							ref: P,
							style: {
								pointerEvents: L ? (z ? "auto" : "none") : void 0,
								...e.style,
							},
							onFocusCapture: (0, i.M)(e.onFocusCapture, D.onFocusCapture),
							onBlurCapture: (0, i.M)(e.onBlurCapture, D.onBlurCapture),
							onPointerDownCapture: (0, i.M)(
								e.onPointerDownCapture,
								O.onPointerDownCapture,
							),
						})
					);
				});
			f.displayName = "DismissableLayer";
			var p = o.forwardRef((e, t) => {
				let r = o.useContext(d),
					n = o.useRef(null),
					i = (0, a.e)(t, n);
				return (
					o.useEffect(() => {
						let e = n.current;
						if (e)
							return (
								r.branches.add(e),
								() => {
									r.branches.delete(e);
								}
							);
					}, [r.branches]),
					(0, u.jsx)(l.WV.div, { ...e, ref: i })
				);
			});
			function m() {
				let e = new CustomEvent(c);
				document.dispatchEvent(e);
			}
			function v(e, t, r, n) {
				let { discrete: o } = n,
					i = r.originalEvent.target,
					a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
				t && i.addEventListener(e, t, { once: !0 }),
					o ? (0, l.jH)(i, a) : i.dispatchEvent(a);
			}
			p.displayName = "DismissableLayerBranch";
			var b = f,
				g = p;
		},
		6935: function (e, t, r) {
			r.d(t, {
				h: function () {
					return s;
				},
			});
			var n = r(2265),
				o = r(4887),
				i = r(5171),
				l = r(1336),
				a = r(7437),
				s = n.forwardRef((e, t) => {
					var r, s;
					let { container: u, ...c } = e,
						[d, f] = n.useState(!1);
					(0, l.b)(() => f(!0), []);
					let p =
						u ||
						(d &&
							(null === (s = globalThis) || void 0 === s
								? void 0
								: null === (r = s.document) || void 0 === r
									? void 0
									: r.body));
					return p
						? o.createPortal((0, a.jsx)(i.WV.div, { ...c, ref: t }), p)
						: null;
				});
			s.displayName = "Portal";
		},
		1383: function (e, t, r) {
			r.d(t, {
				z: function () {
					return a;
				},
			});
			var n = r(2265),
				o = r(4887),
				i = r(1584),
				l = r(1336),
				a = (e) => {
					var t, r;
					let a, u;
					let { present: c, children: d } = e,
						f = (function (e) {
							var t, r;
							let [i, a] = n.useState(),
								u = n.useRef({}),
								c = n.useRef(e),
								d = n.useRef("none"),
								[f, p] =
									((t = e ? "mounted" : "unmounted"),
									(r = {
										mounted: {
											UNMOUNT: "unmounted",
											ANIMATION_OUT: "unmountSuspended",
										},
										unmountSuspended: {
											MOUNT: "mounted",
											ANIMATION_END: "unmounted",
										},
										unmounted: { MOUNT: "mounted" },
									}),
									n.useReducer((e, t) => {
										let n = r[e][t];
										return null != n ? n : e;
									}, t));
							return (
								n.useEffect(() => {
									let e = s(u.current);
									d.current = "mounted" === f ? e : "none";
								}, [f]),
								(0, l.b)(() => {
									let t = u.current,
										r = c.current;
									if (r !== e) {
										let n = d.current,
											o = s(t);
										e
											? p("MOUNT")
											: "none" === o ||
												  (null == t ? void 0 : t.display) === "none"
												? p("UNMOUNT")
												: r && n !== o
													? p("ANIMATION_OUT")
													: p("UNMOUNT"),
											(c.current = e);
									}
								}, [e, p]),
								(0, l.b)(() => {
									if (i) {
										let e = (e) => {
												let t = s(u.current).includes(e.animationName);
												e.target === i &&
													t &&
													o.flushSync(() => p("ANIMATION_END"));
											},
											t = (e) => {
												e.target === i && (d.current = s(u.current));
											};
										return (
											i.addEventListener("animationstart", t),
											i.addEventListener("animationcancel", e),
											i.addEventListener("animationend", e),
											() => {
												i.removeEventListener("animationstart", t),
													i.removeEventListener("animationcancel", e),
													i.removeEventListener("animationend", e);
											}
										);
									}
									p("ANIMATION_END");
								}, [i, p]),
								{
									isPresent: ["mounted", "unmountSuspended"].includes(f),
									ref: n.useCallback((e) => {
										e && (u.current = getComputedStyle(e)), a(e);
									}, []),
								}
							);
						})(c),
						p =
							"function" == typeof d
								? d({ present: f.isPresent })
								: n.Children.only(d),
						m = (0, i.e)(
							f.ref,
							(a =
								null ===
									(t = Object.getOwnPropertyDescriptor(p.props, "ref")) ||
								void 0 === t
									? void 0
									: t.get) &&
								"isReactWarning" in a &&
								a.isReactWarning
								? p.ref
								: (a =
											null ===
												(r = Object.getOwnPropertyDescriptor(p, "ref")) ||
											void 0 === r
												? void 0
												: r.get) &&
									  "isReactWarning" in a &&
									  a.isReactWarning
									? p.props.ref
									: p.props.ref || p.ref,
						);
					return "function" == typeof d || f.isPresent
						? n.cloneElement(p, { ref: m })
						: null;
				};
			function s(e) {
				return (null == e ? void 0 : e.animationName) || "none";
			}
			a.displayName = "Presence";
		},
		5171: function (e, t, r) {
			r.d(t, {
				WV: function () {
					return a;
				},
				jH: function () {
					return s;
				},
			});
			var n = r(2265),
				o = r(4887),
				i = r(1538),
				l = r(7437),
				a = [
					"a",
					"button",
					"div",
					"form",
					"h2",
					"h3",
					"img",
					"input",
					"label",
					"li",
					"nav",
					"ol",
					"p",
					"span",
					"svg",
					"ul",
				].reduce((e, t) => {
					let r = n.forwardRef((e, r) => {
						let { asChild: n, ...o } = e,
							a = n ? i.g7 : t;
						return (
							"undefined" != typeof window &&
								(window[Symbol.for("radix-ui")] = !0),
							(0, l.jsx)(a, { ...o, ref: r })
						);
					});
					return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
				}, {});
			function s(e, t) {
				e && o.flushSync(() => e.dispatchEvent(t));
			}
		},
		1538: function (e, t, r) {
			r.d(t, {
				A4: function () {
					return s;
				},
				g7: function () {
					return l;
				},
			});
			var n = r(2265),
				o = r(1584),
				i = r(7437),
				l = n.forwardRef((e, t) => {
					let { children: r, ...o } = e,
						l = n.Children.toArray(r),
						s = l.find(u);
					if (s) {
						let e = s.props.children,
							r = l.map((t) =>
								t !== s
									? t
									: n.Children.count(e) > 1
										? n.Children.only(null)
										: n.isValidElement(e)
											? e.props.children
											: null,
							);
						return (0, i.jsx)(a, {
							...o,
							ref: t,
							children: n.isValidElement(e)
								? n.cloneElement(e, void 0, r)
								: null,
						});
					}
					return (0, i.jsx)(a, { ...o, ref: t, children: r });
				});
			l.displayName = "Slot";
			var a = n.forwardRef((e, t) => {
				let { children: r, ...i } = e;
				if (n.isValidElement(r)) {
					let e, l;
					let a =
						(e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
						"isReactWarning" in e &&
						e.isReactWarning
							? r.ref
							: (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
								  "isReactWarning" in e &&
								  e.isReactWarning
								? r.props.ref
								: r.props.ref || r.ref;
					return n.cloneElement(r, {
						...(function (e, t) {
							let r = { ...t };
							for (let n in t) {
								let o = e[n],
									i = t[n];
								/^on[A-Z]/.test(n)
									? o && i
										? (r[n] = (...e) => {
												i(...e), o(...e);
											})
										: o && (r[n] = o)
									: "style" === n
										? (r[n] = { ...o, ...i })
										: "className" === n &&
											(r[n] = [o, i].filter(Boolean).join(" "));
							}
							return { ...e, ...r };
						})(i, r.props),
						ref: t ? (0, o.F)(t, a) : a,
					});
				}
				return n.Children.count(r) > 1 ? n.Children.only(null) : null;
			});
			a.displayName = "SlotClone";
			var s = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
			function u(e) {
				return n.isValidElement(e) && e.type === s;
			}
		},
		4504: function (e, t, r) {
			r.d(t, {
				Dx: function () {
					return Q;
				},
				aU: function () {
					return et;
				},
				dk: function () {
					return ee;
				},
				fC: function () {
					return J;
				},
				l_: function () {
					return Y;
				},
				x8: function () {
					return er;
				},
				zt: function () {
					return X;
				},
			});
			var n = r(2265),
				o = r(4887),
				i = r(8149),
				l = r(1584),
				a = r(976),
				s = r(8324),
				u = r(3938),
				c = r(6935),
				d = r(1383),
				f = r(5171),
				p = r(5137),
				m = r(1715),
				v = r(1336),
				b = r(1725),
				g = r(7437),
				y = "ToastProvider",
				[h, w, x] = (0, a.B)("Toast"),
				[E, k] = (0, s.b)("Toast", [x]),
				[C, T] = E(y),
				N = (e) => {
					let {
							__scopeToast: t,
							label: r = "Notification",
							duration: o = 5e3,
							swipeDirection: i = "right",
							swipeThreshold: l = 50,
							children: a,
						} = e,
						[s, u] = n.useState(null),
						[c, d] = n.useState(0),
						f = n.useRef(!1),
						p = n.useRef(!1);
					return (
						r.trim() ||
							console.error(
								"Invalid prop `label` supplied to `".concat(
									y,
									"`. Expected non-empty `string`.",
								),
							),
						(0, g.jsx)(h.Provider, {
							scope: t,
							children: (0, g.jsx)(C, {
								scope: t,
								label: r,
								duration: o,
								swipeDirection: i,
								swipeThreshold: l,
								toastCount: c,
								viewport: s,
								onViewportChange: u,
								onToastAdd: n.useCallback(() => d((e) => e + 1), []),
								onToastRemove: n.useCallback(() => d((e) => e - 1), []),
								isFocusedToastEscapeKeyDownRef: f,
								isClosePausedRef: p,
								children: a,
							}),
						})
					);
				};
			N.displayName = y;
			var P = "ToastViewport",
				j = ["F8"],
				R = "toast.viewportPause",
				M = "toast.viewportResume",
				S = n.forwardRef((e, t) => {
					let {
							__scopeToast: r,
							hotkey: o = j,
							label: i = "Notifications ({hotkey})",
							...a
						} = e,
						s = T(P, r),
						c = w(r),
						d = n.useRef(null),
						p = n.useRef(null),
						m = n.useRef(null),
						v = n.useRef(null),
						b = (0, l.e)(t, v, s.onViewportChange),
						y = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
						x = s.toastCount > 0;
					n.useEffect(() => {
						let e = (e) => {
							var t;
							o.every((t) => e[t] || e.code === t) &&
								(null === (t = v.current) || void 0 === t || t.focus());
						};
						return (
							document.addEventListener("keydown", e),
							() => document.removeEventListener("keydown", e)
						);
					}, [o]),
						n.useEffect(() => {
							let e = d.current,
								t = v.current;
							if (x && e && t) {
								let r = () => {
										if (!s.isClosePausedRef.current) {
											let e = new CustomEvent(R);
											t.dispatchEvent(e), (s.isClosePausedRef.current = !0);
										}
									},
									n = () => {
										if (s.isClosePausedRef.current) {
											let e = new CustomEvent(M);
											t.dispatchEvent(e), (s.isClosePausedRef.current = !1);
										}
									},
									o = (t) => {
										e.contains(t.relatedTarget) || n();
									},
									i = () => {
										e.contains(document.activeElement) || n();
									};
								return (
									e.addEventListener("focusin", r),
									e.addEventListener("focusout", o),
									e.addEventListener("pointermove", r),
									e.addEventListener("pointerleave", i),
									window.addEventListener("blur", r),
									window.addEventListener("focus", n),
									() => {
										e.removeEventListener("focusin", r),
											e.removeEventListener("focusout", o),
											e.removeEventListener("pointermove", r),
											e.removeEventListener("pointerleave", i),
											window.removeEventListener("blur", r),
											window.removeEventListener("focus", n);
									}
								);
							}
						}, [x, s.isClosePausedRef]);
					let E = n.useCallback(
						(e) => {
							let { tabbingDirection: t } = e,
								r = c().map((e) => {
									let r = e.ref.current,
										n = [
											r,
											...(function (e) {
												let t = [],
													r = document.createTreeWalker(
														e,
														NodeFilter.SHOW_ELEMENT,
														{
															acceptNode: (e) => {
																let t =
																	"INPUT" === e.tagName && "hidden" === e.type;
																return e.disabled || e.hidden || t
																	? NodeFilter.FILTER_SKIP
																	: e.tabIndex >= 0
																		? NodeFilter.FILTER_ACCEPT
																		: NodeFilter.FILTER_SKIP;
															},
														},
													);
												for (; r.nextNode(); ) t.push(r.currentNode);
												return t;
											})(r),
										];
									return "forwards" === t ? n : n.reverse();
								});
							return ("forwards" === t ? r.reverse() : r).flat();
						},
						[c],
					);
					return (
						n.useEffect(() => {
							let e = v.current;
							if (e) {
								let t = (t) => {
									let r = t.altKey || t.ctrlKey || t.metaKey;
									if ("Tab" === t.key && !r) {
										var n, o, i;
										let r = document.activeElement,
											l = t.shiftKey;
										if (t.target === e && l) {
											null === (n = p.current) || void 0 === n || n.focus();
											return;
										}
										let a = E({
												tabbingDirection: l ? "backwards" : "forwards",
											}),
											s = a.findIndex((e) => e === r);
										q(a.slice(s + 1))
											? t.preventDefault()
											: l
												? null === (o = p.current) || void 0 === o || o.focus()
												: null === (i = m.current) || void 0 === i || i.focus();
									}
								};
								return (
									e.addEventListener("keydown", t),
									() => e.removeEventListener("keydown", t)
								);
							}
						}, [c, E]),
						(0, g.jsxs)(u.I0, {
							ref: d,
							role: "region",
							"aria-label": i.replace("{hotkey}", y),
							tabIndex: -1,
							style: { pointerEvents: x ? void 0 : "none" },
							children: [
								x &&
									(0, g.jsx)(z, {
										ref: p,
										onFocusFromOutsideViewport: () => {
											q(E({ tabbingDirection: "forwards" }));
										},
									}),
								(0, g.jsx)(h.Slot, {
									scope: r,
									children: (0, g.jsx)(f.WV.ol, { tabIndex: -1, ...a, ref: b }),
								}),
								x &&
									(0, g.jsx)(z, {
										ref: m,
										onFocusFromOutsideViewport: () => {
											q(E({ tabbingDirection: "backwards" }));
										},
									}),
							],
						})
					);
				});
			S.displayName = P;
			var L = "ToastFocusProxy",
				z = n.forwardRef((e, t) => {
					let { __scopeToast: r, onFocusFromOutsideViewport: n, ...o } = e,
						i = T(L, r);
					return (0, g.jsx)(b.T, {
						"aria-hidden": !0,
						tabIndex: 0,
						...o,
						ref: t,
						style: { position: "fixed" },
						onFocus: (e) => {
							var t;
							let r = e.relatedTarget;
							(null === (t = i.viewport) || void 0 === t
								? void 0
								: t.contains(r)) || n();
						},
					});
				});
			z.displayName = L;
			var O = "Toast",
				D = n.forwardRef((e, t) => {
					let {
							forceMount: r,
							open: n,
							defaultOpen: o,
							onOpenChange: l,
							...a
						} = e,
						[s = !0, u] = (0, m.T)({ prop: n, defaultProp: o, onChange: l });
					return (0, g.jsx)(d.z, {
						present: r || s,
						children: (0, g.jsx)(I, {
							open: s,
							...a,
							ref: t,
							onClose: () => u(!1),
							onPause: (0, p.W)(e.onPause),
							onResume: (0, p.W)(e.onResume),
							onSwipeStart: (0, i.M)(e.onSwipeStart, (e) => {
								e.currentTarget.setAttribute("data-swipe", "start");
							}),
							onSwipeMove: (0, i.M)(e.onSwipeMove, (e) => {
								let { x: t, y: r } = e.detail.delta;
								e.currentTarget.setAttribute("data-swipe", "move"),
									e.currentTarget.style.setProperty(
										"--radix-toast-swipe-move-x",
										"".concat(t, "px"),
									),
									e.currentTarget.style.setProperty(
										"--radix-toast-swipe-move-y",
										"".concat(r, "px"),
									);
							}),
							onSwipeCancel: (0, i.M)(e.onSwipeCancel, (e) => {
								e.currentTarget.setAttribute("data-swipe", "cancel"),
									e.currentTarget.style.removeProperty(
										"--radix-toast-swipe-move-x",
									),
									e.currentTarget.style.removeProperty(
										"--radix-toast-swipe-move-y",
									),
									e.currentTarget.style.removeProperty(
										"--radix-toast-swipe-end-x",
									),
									e.currentTarget.style.removeProperty(
										"--radix-toast-swipe-end-y",
									);
							}),
							onSwipeEnd: (0, i.M)(e.onSwipeEnd, (e) => {
								let { x: t, y: r } = e.detail.delta;
								e.currentTarget.setAttribute("data-swipe", "end"),
									e.currentTarget.style.removeProperty(
										"--radix-toast-swipe-move-x",
									),
									e.currentTarget.style.removeProperty(
										"--radix-toast-swipe-move-y",
									),
									e.currentTarget.style.setProperty(
										"--radix-toast-swipe-end-x",
										"".concat(t, "px"),
									),
									e.currentTarget.style.setProperty(
										"--radix-toast-swipe-end-y",
										"".concat(r, "px"),
									),
									u(!1);
							}),
						}),
					});
				});
			D.displayName = O;
			var [W, A] = E(O, { onClose() {} }),
				I = n.forwardRef((e, t) => {
					let {
							__scopeToast: r,
							type: a = "foreground",
							duration: s,
							open: c,
							onClose: d,
							onEscapeKeyDown: m,
							onPause: v,
							onResume: b,
							onSwipeStart: y,
							onSwipeMove: w,
							onSwipeCancel: x,
							onSwipeEnd: E,
							...k
						} = e,
						C = T(O, r),
						[N, P] = n.useState(null),
						j = (0, l.e)(t, (e) => P(e)),
						S = n.useRef(null),
						L = n.useRef(null),
						z = s || C.duration,
						D = n.useRef(0),
						A = n.useRef(z),
						I = n.useRef(0),
						{ onToastAdd: _, onToastRemove: V } = C,
						$ = (0, p.W)(() => {
							var e;
							(null == N ? void 0 : N.contains(document.activeElement)) &&
								(null === (e = C.viewport) || void 0 === e || e.focus()),
								d();
						}),
						U = n.useCallback(
							(e) => {
								e &&
									e !== 1 / 0 &&
									(window.clearTimeout(I.current),
									(D.current = new Date().getTime()),
									(I.current = window.setTimeout($, e)));
							},
							[$],
						);
					n.useEffect(() => {
						let e = C.viewport;
						if (e) {
							let t = () => {
									U(A.current), null == b || b();
								},
								r = () => {
									let e = new Date().getTime() - D.current;
									(A.current = A.current - e),
										window.clearTimeout(I.current),
										null == v || v();
								};
							return (
								e.addEventListener(R, r),
								e.addEventListener(M, t),
								() => {
									e.removeEventListener(R, r), e.removeEventListener(M, t);
								}
							);
						}
					}, [C.viewport, z, v, b, U]),
						n.useEffect(() => {
							c && !C.isClosePausedRef.current && U(z);
						}, [c, z, C.isClosePausedRef, U]),
						n.useEffect(() => (_(), () => V()), [_, V]);
					let K = n.useMemo(
						() =>
							N
								? (function e(t) {
										let r = [];
										return (
											Array.from(t.childNodes).forEach((t) => {
												if (
													(t.nodeType === t.TEXT_NODE &&
														t.textContent &&
														r.push(t.textContent),
													t.nodeType === t.ELEMENT_NODE)
												) {
													let n =
															t.ariaHidden ||
															t.hidden ||
															"none" === t.style.display,
														o = "" === t.dataset.radixToastAnnounceExclude;
													if (!n) {
														if (o) {
															let e = t.dataset.radixToastAnnounceAlt;
															e && r.push(e);
														} else r.push(...e(t));
													}
												}
											}),
											r
										);
									})(N)
								: null,
						[N],
					);
					return C.viewport
						? (0, g.jsxs)(g.Fragment, {
								children: [
									K &&
										(0, g.jsx)(F, {
											__scopeToast: r,
											role: "status",
											"aria-live": "foreground" === a ? "assertive" : "polite",
											"aria-atomic": !0,
											children: K,
										}),
									(0, g.jsx)(W, {
										scope: r,
										onClose: $,
										children: o.createPortal(
											(0, g.jsx)(h.ItemSlot, {
												scope: r,
												children: (0, g.jsx)(u.fC, {
													asChild: !0,
													onEscapeKeyDown: (0, i.M)(m, () => {
														C.isFocusedToastEscapeKeyDownRef.current || $(),
															(C.isFocusedToastEscapeKeyDownRef.current = !1);
													}),
													children: (0, g.jsx)(f.WV.li, {
														role: "status",
														"aria-live": "off",
														"aria-atomic": !0,
														tabIndex: 0,
														"data-state": c ? "open" : "closed",
														"data-swipe-direction": C.swipeDirection,
														...k,
														ref: j,
														style: {
															userSelect: "none",
															touchAction: "none",
															...e.style,
														},
														onKeyDown: (0, i.M)(e.onKeyDown, (e) => {
															"Escape" !== e.key ||
																(null == m || m(e.nativeEvent),
																e.nativeEvent.defaultPrevented ||
																	((C.isFocusedToastEscapeKeyDownRef.current =
																		!0),
																	$()));
														}),
														onPointerDown: (0, i.M)(e.onPointerDown, (e) => {
															0 === e.button &&
																(S.current = { x: e.clientX, y: e.clientY });
														}),
														onPointerMove: (0, i.M)(e.onPointerMove, (e) => {
															if (!S.current) return;
															let t = e.clientX - S.current.x,
																r = e.clientY - S.current.y,
																n = !!L.current,
																o = ["left", "right"].includes(
																	C.swipeDirection,
																),
																i = ["left", "up"].includes(C.swipeDirection)
																	? Math.min
																	: Math.max,
																l = o ? i(0, t) : 0,
																a = o ? 0 : i(0, r),
																s = "touch" === e.pointerType ? 10 : 2,
																u = { x: l, y: a },
																c = { originalEvent: e, delta: u };
															n
																? ((L.current = u),
																	Z("toast.swipeMove", w, c, { discrete: !1 }))
																: H(u, C.swipeDirection, s)
																	? ((L.current = u),
																		Z("toast.swipeStart", y, c, {
																			discrete: !1,
																		}),
																		e.target.setPointerCapture(e.pointerId))
																	: (Math.abs(t) > s || Math.abs(r) > s) &&
																		(S.current = null);
														}),
														onPointerUp: (0, i.M)(e.onPointerUp, (e) => {
															let t = L.current,
																r = e.target;
															if (
																(r.hasPointerCapture(e.pointerId) &&
																	r.releasePointerCapture(e.pointerId),
																(L.current = null),
																(S.current = null),
																t)
															) {
																let r = e.currentTarget,
																	n = { originalEvent: e, delta: t };
																H(t, C.swipeDirection, C.swipeThreshold)
																	? Z("toast.swipeEnd", E, n, { discrete: !0 })
																	: Z("toast.swipeCancel", x, n, {
																			discrete: !0,
																		}),
																	r.addEventListener(
																		"click",
																		(e) => e.preventDefault(),
																		{ once: !0 },
																	);
															}
														}),
													}),
												}),
											}),
											C.viewport,
										),
									}),
								],
							})
						: null;
				}),
				F = (e) => {
					let { __scopeToast: t, children: r, ...o } = e,
						i = T(O, t),
						[l, a] = n.useState(!1),
						[s, u] = n.useState(!1);
					return (
						(function () {
							let e =
									arguments.length > 0 && void 0 !== arguments[0]
										? arguments[0]
										: () => {},
								t = (0, p.W)(e);
							(0, v.b)(() => {
								let e = 0,
									r = 0;
								return (
									(e = window.requestAnimationFrame(
										() => (r = window.requestAnimationFrame(t)),
									)),
									() => {
										window.cancelAnimationFrame(e),
											window.cancelAnimationFrame(r);
									}
								);
							}, [t]);
						})(() => a(!0)),
						n.useEffect(() => {
							let e = window.setTimeout(() => u(!0), 1e3);
							return () => window.clearTimeout(e);
						}, []),
						s
							? null
							: (0, g.jsx)(c.h, {
									asChild: !0,
									children: (0, g.jsx)(b.T, {
										...o,
										children:
											l &&
											(0, g.jsxs)(g.Fragment, { children: [i.label, " ", r] }),
									}),
								})
					);
				},
				_ = n.forwardRef((e, t) => {
					let { __scopeToast: r, ...n } = e;
					return (0, g.jsx)(f.WV.div, { ...n, ref: t });
				});
			_.displayName = "ToastTitle";
			var V = n.forwardRef((e, t) => {
				let { __scopeToast: r, ...n } = e;
				return (0, g.jsx)(f.WV.div, { ...n, ref: t });
			});
			V.displayName = "ToastDescription";
			var $ = "ToastAction",
				U = n.forwardRef((e, t) => {
					let { altText: r, ...n } = e;
					return r.trim()
						? (0, g.jsx)(B, {
								altText: r,
								asChild: !0,
								children: (0, g.jsx)(G, { ...n, ref: t }),
							})
						: (console.error(
								"Invalid prop `altText` supplied to `".concat(
									$,
									"`. Expected non-empty `string`.",
								),
							),
							null);
				});
			U.displayName = $;
			var K = "ToastClose",
				G = n.forwardRef((e, t) => {
					let { __scopeToast: r, ...n } = e,
						o = A(K, r);
					return (0, g.jsx)(B, {
						asChild: !0,
						children: (0, g.jsx)(f.WV.button, {
							type: "button",
							...n,
							ref: t,
							onClick: (0, i.M)(e.onClick, o.onClose),
						}),
					});
				});
			G.displayName = K;
			var B = n.forwardRef((e, t) => {
				let { __scopeToast: r, altText: n, ...o } = e;
				return (0, g.jsx)(f.WV.div, {
					"data-radix-toast-announce-exclude": "",
					"data-radix-toast-announce-alt": n || void 0,
					...o,
					ref: t,
				});
			});
			function Z(e, t, r, n) {
				let { discrete: o } = n,
					i = r.originalEvent.currentTarget,
					l = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: r });
				t && i.addEventListener(e, t, { once: !0 }),
					o ? (0, f.jH)(i, l) : i.dispatchEvent(l);
			}
			var H = function (e, t) {
				let r =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
					n = Math.abs(e.x),
					o = Math.abs(e.y),
					i = n > o;
				return "left" === t || "right" === t ? i && n > r : !i && o > r;
			};
			function q(e) {
				let t = document.activeElement;
				return e.some(
					(e) => e === t || (e.focus(), document.activeElement !== t),
				);
			}
			var X = N,
				Y = S,
				J = D,
				Q = _,
				ee = V,
				et = U,
				er = G;
		},
		5137: function (e, t, r) {
			r.d(t, {
				W: function () {
					return o;
				},
			});
			var n = r(2265);
			function o(e) {
				let t = n.useRef(e);
				return (
					n.useEffect(() => {
						t.current = e;
					}),
					n.useMemo(
						() =>
							(...e) =>
								t.current?.(...e),
						[],
					)
				);
			}
		},
		1715: function (e, t, r) {
			r.d(t, {
				T: function () {
					return i;
				},
			});
			var n = r(2265),
				o = r(5137);
			function i({ prop: e, defaultProp: t, onChange: r = () => {} }) {
				let [i, l] = (function ({ defaultProp: e, onChange: t }) {
						let r = n.useState(e),
							[i] = r,
							l = n.useRef(i),
							a = (0, o.W)(t);
						return (
							n.useEffect(() => {
								l.current !== i && (a(i), (l.current = i));
							}, [i, l, a]),
							r
						);
					})({ defaultProp: t, onChange: r }),
					a = void 0 !== e,
					s = a ? e : i,
					u = (0, o.W)(r);
				return [
					s,
					n.useCallback(
						(t) => {
							if (a) {
								let r = "function" == typeof t ? t(e) : t;
								r !== e && u(r);
							} else l(t);
						},
						[a, e, l, u],
					),
				];
			}
		},
		1336: function (e, t, r) {
			r.d(t, {
				b: function () {
					return o;
				},
			});
			var n = r(2265),
				o = globalThis?.document ? n.useLayoutEffect : () => {};
		},
		1725: function (e, t, r) {
			r.d(t, {
				T: function () {
					return l;
				},
			});
			var n = r(2265),
				o = r(5171),
				i = r(7437),
				l = n.forwardRef((e, t) =>
					(0, i.jsx)(o.WV.span, {
						...e,
						ref: t,
						style: {
							position: "absolute",
							border: 0,
							width: 1,
							height: 1,
							padding: 0,
							margin: -1,
							overflow: "hidden",
							clip: "rect(0, 0, 0, 0)",
							whiteSpace: "nowrap",
							wordWrap: "normal",
							...e.style,
						},
					}),
				);
			l.displayName = "VisuallyHidden";
		},
		2218: function (e, t, r) {
			r.d(t, {
				j: function () {
					return i;
				},
			});
			let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
				o = function () {
					for (var e, t, r = 0, n = ""; r < arguments.length; )
						(e = arguments[r++]) &&
							(t = (function e(t) {
								var r,
									n,
									o = "";
								if ("string" == typeof t || "number" == typeof t) o += t;
								else if ("object" == typeof t) {
									if (Array.isArray(t))
										for (r = 0; r < t.length; r++)
											t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
									else for (r in t) t[r] && (o && (o += " "), (o += r));
								}
								return o;
							})(e)) &&
							(n && (n += " "), (n += t));
					return n;
				},
				i = (e, t) => (r) => {
					var i;
					if ((null == t ? void 0 : t.variants) == null)
						return o(
							e,
							null == r ? void 0 : r.class,
							null == r ? void 0 : r.className,
						);
					let { variants: l, defaultVariants: a } = t,
						s = Object.keys(l).map((e) => {
							let t = null == r ? void 0 : r[e],
								o = null == a ? void 0 : a[e];
							if (null === t) return null;
							let i = n(t) || n(o);
							return l[e][i];
						}),
						u =
							r &&
							Object.entries(r).reduce((e, t) => {
								let [r, n] = t;
								return void 0 === n || (e[r] = n), e;
							}, {});
					return o(
						e,
						s,
						null == t
							? void 0
							: null === (i = t.compoundVariants) || void 0 === i
								? void 0
								: i.reduce((e, t) => {
										let { class: r, className: n, ...o } = t;
										return Object.entries(o).every((e) => {
											let [t, r] = e;
											return Array.isArray(r)
												? r.includes({ ...a, ...u }[t])
												: { ...a, ...u }[t] === r;
										})
											? [...e, r, n]
											: e;
									}, []),
						null == r ? void 0 : r.class,
						null == r ? void 0 : r.className,
					);
				};
		},
		4839: function (e, t, r) {
			r.d(t, {
				W: function () {
					return n;
				},
			});
			function n() {
				for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
					(e = arguments[r]) &&
						(t = (function e(t) {
							var r,
								n,
								o = "";
							if ("string" == typeof t || "number" == typeof t) o += t;
							else if ("object" == typeof t) {
								if (Array.isArray(t)) {
									var i = t.length;
									for (r = 0; r < i; r++)
										t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
								} else for (n in t) t[n] && (o && (o += " "), (o += n));
							}
							return o;
						})(e)) &&
						(n && (n += " "), (n += t));
				return n;
			}
		},
		6164: function (e, t, r) {
			r.d(t, {
				m6: function () {
					return W;
				},
			});
			let n = /^\[(.+)\]$/;
			function o(e, t) {
				let r = e;
				return (
					t.split("-").forEach((e) => {
						r.nextPart.has(e) ||
							r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
							(r = r.nextPart.get(e));
					}),
					r
				);
			}
			let i = /\s+/;
			function l() {
				let e,
					t,
					r = 0,
					n = "";
				for (; r < arguments.length; )
					(e = arguments[r++]) &&
						(t = (function e(t) {
							let r;
							if ("string" == typeof t) return t;
							let n = "";
							for (let o = 0; o < t.length; o++)
								t[o] && (r = e(t[o])) && (n && (n += " "), (n += r));
							return n;
						})(e)) &&
						(n && (n += " "), (n += t));
				return n;
			}
			function a(e) {
				let t = (t) => t[e] || [];
				return (t.isThemeGetter = !0), t;
			}
			let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
				u = /^\d+\/\d+$/,
				c = new Set(["px", "full", "screen"]),
				d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
				f =
					/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
				p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
				m = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
				v =
					/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
			function b(e) {
				return y(e) || c.has(e) || u.test(e);
			}
			function g(e) {
				return S(e, "length", L);
			}
			function y(e) {
				return !!e && !Number.isNaN(Number(e));
			}
			function h(e) {
				return S(e, "number", y);
			}
			function w(e) {
				return !!e && Number.isInteger(Number(e));
			}
			function x(e) {
				return e.endsWith("%") && y(e.slice(0, -1));
			}
			function E(e) {
				return s.test(e);
			}
			function k(e) {
				return d.test(e);
			}
			let C = new Set(["length", "size", "percentage"]);
			function T(e) {
				return S(e, C, z);
			}
			function N(e) {
				return S(e, "position", z);
			}
			let P = new Set(["image", "url"]);
			function j(e) {
				return S(e, P, D);
			}
			function R(e) {
				return S(e, "", O);
			}
			function M() {
				return !0;
			}
			function S(e, t, r) {
				let n = s.exec(e);
				return (
					!!n &&
					(n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
				);
			}
			function L(e) {
				return f.test(e) && !p.test(e);
			}
			function z() {
				return !1;
			}
			function O(e) {
				return m.test(e);
			}
			function D(e) {
				return v.test(e);
			}
			let W = (function (e, ...t) {
				let r, a, s;
				let u = function (i) {
					var l;
					return (
						(a = (r = {
							cache: (function (e) {
								if (e < 1) return { get: () => void 0, set: () => {} };
								let t = 0,
									r = new Map(),
									n = new Map();
								function o(o, i) {
									r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
								}
								return {
									get(e) {
										let t = r.get(e);
										return void 0 !== t
											? t
											: void 0 !== (t = n.get(e))
												? (o(e, t), t)
												: void 0;
									},
									set(e, t) {
										r.has(e) ? r.set(e, t) : o(e, t);
									},
								};
							})((l = t.reduce((e, t) => t(e), e())).cacheSize),
							parseClassName: (function (e) {
								let { separator: t, experimentalParseClassName: r } = e,
									n = 1 === t.length,
									o = t[0],
									i = t.length;
								function l(e) {
									let r;
									let l = [],
										a = 0,
										s = 0;
									for (let u = 0; u < e.length; u++) {
										let c = e[u];
										if (0 === a) {
											if (c === o && (n || e.slice(u, u + i) === t)) {
												l.push(e.slice(s, u)), (s = u + i);
												continue;
											}
											if ("/" === c) {
												r = u;
												continue;
											}
										}
										"[" === c ? a++ : "]" === c && a--;
									}
									let u = 0 === l.length ? e : e.substring(s),
										c = u.startsWith("!"),
										d = c ? u.substring(1) : u;
									return {
										modifiers: l,
										hasImportantModifier: c,
										baseClassName: d,
										maybePostfixModifierPosition: r && r > s ? r - s : void 0,
									};
								}
								return r
									? function (e) {
											return r({ className: e, parseClassName: l });
										}
									: l;
							})(l),
							...(function (e) {
								let t = (function (e) {
										var t;
										let { theme: r, prefix: n } = e,
											i = { nextPart: new Map(), validators: [] };
										return (
											((t = Object.entries(e.classGroups)),
											n
												? t.map(([e, t]) => [
														e,
														t.map((e) =>
															"string" == typeof e
																? n + e
																: "object" == typeof e
																	? Object.fromEntries(
																			Object.entries(e).map(([e, t]) => [
																				n + e,
																				t,
																			]),
																		)
																	: e,
														),
													])
												: t).forEach(([e, t]) => {
												(function e(t, r, n, i) {
													t.forEach((t) => {
														if ("string" == typeof t) {
															("" === t ? r : o(r, t)).classGroupId = n;
															return;
														}
														if ("function" == typeof t) {
															if (t.isThemeGetter) {
																e(t(i), r, n, i);
																return;
															}
															r.validators.push({
																validator: t,
																classGroupId: n,
															});
															return;
														}
														Object.entries(t).forEach(([t, l]) => {
															e(l, o(r, t), n, i);
														});
													});
												})(t, i, e, r);
											}),
											i
										);
									})(e),
									{
										conflictingClassGroups: r,
										conflictingClassGroupModifiers: i,
									} = e;
								return {
									getClassGroupId: function (e) {
										let r = e.split("-");
										return (
											"" === r[0] && 1 !== r.length && r.shift(),
											(function e(t, r) {
												if (0 === t.length) return r.classGroupId;
												let n = t[0],
													o = r.nextPart.get(n),
													i = o ? e(t.slice(1), o) : void 0;
												if (i) return i;
												if (0 === r.validators.length) return;
												let l = t.join("-");
												return r.validators.find(({ validator: e }) => e(l))
													?.classGroupId;
											})(r, t) ||
												(function (e) {
													if (n.test(e)) {
														let t = n.exec(e)[1],
															r = t?.substring(0, t.indexOf(":"));
														if (r) return "arbitrary.." + r;
													}
												})(e)
										);
									},
									getConflictingClassGroupIds: function (e, t) {
										let n = r[e] || [];
										return t && i[e] ? [...n, ...i[e]] : n;
									},
								};
							})(l),
						}).cache.get),
						(s = r.cache.set),
						(u = c),
						c(i)
					);
				};
				function c(e) {
					let t = a(e);
					if (t) return t;
					let n = (function (e, t) {
						let {
								parseClassName: r,
								getClassGroupId: n,
								getConflictingClassGroupIds: o,
							} = t,
							l = new Set();
						return e
							.trim()
							.split(i)
							.map((e) => {
								let {
										modifiers: t,
										hasImportantModifier: o,
										baseClassName: i,
										maybePostfixModifierPosition: l,
									} = r(e),
									a = !!l,
									s = n(a ? i.substring(0, l) : i);
								if (!s) {
									if (!a || !(s = n(i)))
										return { isTailwindClass: !1, originalClassName: e };
									a = !1;
								}
								let u = (function (e) {
									if (e.length <= 1) return e;
									let t = [],
										r = [];
									return (
										e.forEach((e) => {
											"[" === e[0]
												? (t.push(...r.sort(), e), (r = []))
												: r.push(e);
										}),
										t.push(...r.sort()),
										t
									);
								})(t).join(":");
								return {
									isTailwindClass: !0,
									modifierId: o ? u + "!" : u,
									classGroupId: s,
									originalClassName: e,
									hasPostfixModifier: a,
								};
							})
							.reverse()
							.filter((e) => {
								if (!e.isTailwindClass) return !0;
								let {
										modifierId: t,
										classGroupId: r,
										hasPostfixModifier: n,
									} = e,
									i = t + r;
								return (
									!l.has(i) &&
									(l.add(i), o(r, n).forEach((e) => l.add(t + e)), !0)
								);
							})
							.reverse()
							.map((e) => e.originalClassName)
							.join(" ");
					})(e, r);
					return s(e, n), n;
				}
				return function () {
					return u(l.apply(null, arguments));
				};
			})(function () {
				let e = a("colors"),
					t = a("spacing"),
					r = a("blur"),
					n = a("brightness"),
					o = a("borderColor"),
					i = a("borderRadius"),
					l = a("borderSpacing"),
					s = a("borderWidth"),
					u = a("contrast"),
					c = a("grayscale"),
					d = a("hueRotate"),
					f = a("invert"),
					p = a("gap"),
					m = a("gradientColorStops"),
					v = a("gradientColorStopPositions"),
					C = a("inset"),
					P = a("margin"),
					S = a("opacity"),
					L = a("padding"),
					z = a("saturate"),
					O = a("scale"),
					D = a("sepia"),
					W = a("skew"),
					A = a("space"),
					I = a("translate"),
					F = () => ["auto", "contain", "none"],
					_ = () => ["auto", "hidden", "clip", "visible", "scroll"],
					V = () => ["auto", E, t],
					$ = () => [E, t],
					U = () => ["", b, g],
					K = () => ["auto", y, E],
					G = () => [
						"bottom",
						"center",
						"left",
						"left-bottom",
						"left-top",
						"right",
						"right-bottom",
						"right-top",
						"top",
					],
					B = () => ["solid", "dashed", "dotted", "double", "none"],
					Z = () => [
						"normal",
						"multiply",
						"screen",
						"overlay",
						"darken",
						"lighten",
						"color-dodge",
						"color-burn",
						"hard-light",
						"soft-light",
						"difference",
						"exclusion",
						"hue",
						"saturation",
						"color",
						"luminosity",
					],
					H = () => [
						"start",
						"end",
						"center",
						"between",
						"around",
						"evenly",
						"stretch",
					],
					q = () => ["", "0", E],
					X = () => [
						"auto",
						"avoid",
						"all",
						"avoid-page",
						"page",
						"left",
						"right",
						"column",
					],
					Y = () => [y, h],
					J = () => [y, E];
				return {
					cacheSize: 500,
					separator: ":",
					theme: {
						colors: [M],
						spacing: [b, g],
						blur: ["none", "", k, E],
						brightness: Y(),
						borderColor: [e],
						borderRadius: ["none", "", "full", k, E],
						borderSpacing: $(),
						borderWidth: U(),
						contrast: Y(),
						grayscale: q(),
						hueRotate: J(),
						invert: q(),
						gap: $(),
						gradientColorStops: [e],
						gradientColorStopPositions: [x, g],
						inset: V(),
						margin: V(),
						opacity: Y(),
						padding: $(),
						saturate: Y(),
						scale: Y(),
						sepia: q(),
						skew: J(),
						space: $(),
						translate: $(),
					},
					classGroups: {
						aspect: [{ aspect: ["auto", "square", "video", E] }],
						container: ["container"],
						columns: [{ columns: [k] }],
						"break-after": [{ "break-after": X() }],
						"break-before": [{ "break-before": X() }],
						"break-inside": [
							{
								"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
							},
						],
						"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
						box: [{ box: ["border", "content"] }],
						display: [
							"block",
							"inline-block",
							"inline",
							"flex",
							"inline-flex",
							"table",
							"inline-table",
							"table-caption",
							"table-cell",
							"table-column",
							"table-column-group",
							"table-footer-group",
							"table-header-group",
							"table-row-group",
							"table-row",
							"flow-root",
							"grid",
							"inline-grid",
							"contents",
							"list-item",
							"hidden",
						],
						float: [{ float: ["right", "left", "none", "start", "end"] }],
						clear: [
							{ clear: ["left", "right", "both", "none", "start", "end"] },
						],
						isolation: ["isolate", "isolation-auto"],
						"object-fit": [
							{ object: ["contain", "cover", "fill", "none", "scale-down"] },
						],
						"object-position": [{ object: [...G(), E] }],
						overflow: [{ overflow: _() }],
						"overflow-x": [{ "overflow-x": _() }],
						"overflow-y": [{ "overflow-y": _() }],
						overscroll: [{ overscroll: F() }],
						"overscroll-x": [{ "overscroll-x": F() }],
						"overscroll-y": [{ "overscroll-y": F() }],
						position: ["static", "fixed", "absolute", "relative", "sticky"],
						inset: [{ inset: [C] }],
						"inset-x": [{ "inset-x": [C] }],
						"inset-y": [{ "inset-y": [C] }],
						start: [{ start: [C] }],
						end: [{ end: [C] }],
						top: [{ top: [C] }],
						right: [{ right: [C] }],
						bottom: [{ bottom: [C] }],
						left: [{ left: [C] }],
						visibility: ["visible", "invisible", "collapse"],
						z: [{ z: ["auto", w, E] }],
						basis: [{ basis: V() }],
						"flex-direction": [
							{ flex: ["row", "row-reverse", "col", "col-reverse"] },
						],
						"flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
						flex: [{ flex: ["1", "auto", "initial", "none", E] }],
						grow: [{ grow: q() }],
						shrink: [{ shrink: q() }],
						order: [{ order: ["first", "last", "none", w, E] }],
						"grid-cols": [{ "grid-cols": [M] }],
						"col-start-end": [{ col: ["auto", { span: ["full", w, E] }, E] }],
						"col-start": [{ "col-start": K() }],
						"col-end": [{ "col-end": K() }],
						"grid-rows": [{ "grid-rows": [M] }],
						"row-start-end": [{ row: ["auto", { span: [w, E] }, E] }],
						"row-start": [{ "row-start": K() }],
						"row-end": [{ "row-end": K() }],
						"grid-flow": [
							{
								"grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
							},
						],
						"auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", E] }],
						"auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", E] }],
						gap: [{ gap: [p] }],
						"gap-x": [{ "gap-x": [p] }],
						"gap-y": [{ "gap-y": [p] }],
						"justify-content": [{ justify: ["normal", ...H()] }],
						"justify-items": [
							{ "justify-items": ["start", "end", "center", "stretch"] },
						],
						"justify-self": [
							{ "justify-self": ["auto", "start", "end", "center", "stretch"] },
						],
						"align-content": [{ content: ["normal", ...H(), "baseline"] }],
						"align-items": [
							{ items: ["start", "end", "center", "baseline", "stretch"] },
						],
						"align-self": [
							{
								self: ["auto", "start", "end", "center", "stretch", "baseline"],
							},
						],
						"place-content": [{ "place-content": [...H(), "baseline"] }],
						"place-items": [
							{
								"place-items": [
									"start",
									"end",
									"center",
									"baseline",
									"stretch",
								],
							},
						],
						"place-self": [
							{ "place-self": ["auto", "start", "end", "center", "stretch"] },
						],
						p: [{ p: [L] }],
						px: [{ px: [L] }],
						py: [{ py: [L] }],
						ps: [{ ps: [L] }],
						pe: [{ pe: [L] }],
						pt: [{ pt: [L] }],
						pr: [{ pr: [L] }],
						pb: [{ pb: [L] }],
						pl: [{ pl: [L] }],
						m: [{ m: [P] }],
						mx: [{ mx: [P] }],
						my: [{ my: [P] }],
						ms: [{ ms: [P] }],
						me: [{ me: [P] }],
						mt: [{ mt: [P] }],
						mr: [{ mr: [P] }],
						mb: [{ mb: [P] }],
						ml: [{ ml: [P] }],
						"space-x": [{ "space-x": [A] }],
						"space-x-reverse": ["space-x-reverse"],
						"space-y": [{ "space-y": [A] }],
						"space-y-reverse": ["space-y-reverse"],
						w: [
							{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", E, t] },
						],
						"min-w": [{ "min-w": [E, t, "min", "max", "fit"] }],
						"max-w": [
							{
								"max-w": [
									E,
									t,
									"none",
									"full",
									"min",
									"max",
									"fit",
									"prose",
									{ screen: [k] },
									k,
								],
							},
						],
						h: [
							{ h: [E, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
						],
						"min-h": [
							{ "min-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
						],
						"max-h": [
							{ "max-h": [E, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
						],
						size: [{ size: [E, t, "auto", "min", "max", "fit"] }],
						"font-size": [{ text: ["base", k, g] }],
						"font-smoothing": ["antialiased", "subpixel-antialiased"],
						"font-style": ["italic", "not-italic"],
						"font-weight": [
							{
								font: [
									"thin",
									"extralight",
									"light",
									"normal",
									"medium",
									"semibold",
									"bold",
									"extrabold",
									"black",
									h,
								],
							},
						],
						"font-family": [{ font: [M] }],
						"fvn-normal": ["normal-nums"],
						"fvn-ordinal": ["ordinal"],
						"fvn-slashed-zero": ["slashed-zero"],
						"fvn-figure": ["lining-nums", "oldstyle-nums"],
						"fvn-spacing": ["proportional-nums", "tabular-nums"],
						"fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
						tracking: [
							{
								tracking: [
									"tighter",
									"tight",
									"normal",
									"wide",
									"wider",
									"widest",
									E,
								],
							},
						],
						"line-clamp": [{ "line-clamp": ["none", y, h] }],
						leading: [
							{
								leading: [
									"none",
									"tight",
									"snug",
									"normal",
									"relaxed",
									"loose",
									b,
									E,
								],
							},
						],
						"list-image": [{ "list-image": ["none", E] }],
						"list-style-type": [{ list: ["none", "disc", "decimal", E] }],
						"list-style-position": [{ list: ["inside", "outside"] }],
						"placeholder-color": [{ placeholder: [e] }],
						"placeholder-opacity": [{ "placeholder-opacity": [S] }],
						"text-alignment": [
							{ text: ["left", "center", "right", "justify", "start", "end"] },
						],
						"text-color": [{ text: [e] }],
						"text-opacity": [{ "text-opacity": [S] }],
						"text-decoration": [
							"underline",
							"overline",
							"line-through",
							"no-underline",
						],
						"text-decoration-style": [{ decoration: [...B(), "wavy"] }],
						"text-decoration-thickness": [
							{ decoration: ["auto", "from-font", b, g] },
						],
						"underline-offset": [{ "underline-offset": ["auto", b, E] }],
						"text-decoration-color": [{ decoration: [e] }],
						"text-transform": [
							"uppercase",
							"lowercase",
							"capitalize",
							"normal-case",
						],
						"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
						"text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
						indent: [{ indent: $() }],
						"vertical-align": [
							{
								align: [
									"baseline",
									"top",
									"middle",
									"bottom",
									"text-top",
									"text-bottom",
									"sub",
									"super",
									E,
								],
							},
						],
						whitespace: [
							{
								whitespace: [
									"normal",
									"nowrap",
									"pre",
									"pre-line",
									"pre-wrap",
									"break-spaces",
								],
							},
						],
						break: [{ break: ["normal", "words", "all", "keep"] }],
						hyphens: [{ hyphens: ["none", "manual", "auto"] }],
						content: [{ content: ["none", E] }],
						"bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
						"bg-clip": [
							{ "bg-clip": ["border", "padding", "content", "text"] },
						],
						"bg-opacity": [{ "bg-opacity": [S] }],
						"bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
						"bg-position": [{ bg: [...G(), N] }],
						"bg-repeat": [
							{
								bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
							},
						],
						"bg-size": [{ bg: ["auto", "cover", "contain", T] }],
						"bg-image": [
							{
								bg: [
									"none",
									{
										"gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
									},
									j,
								],
							},
						],
						"bg-color": [{ bg: [e] }],
						"gradient-from-pos": [{ from: [v] }],
						"gradient-via-pos": [{ via: [v] }],
						"gradient-to-pos": [{ to: [v] }],
						"gradient-from": [{ from: [m] }],
						"gradient-via": [{ via: [m] }],
						"gradient-to": [{ to: [m] }],
						rounded: [{ rounded: [i] }],
						"rounded-s": [{ "rounded-s": [i] }],
						"rounded-e": [{ "rounded-e": [i] }],
						"rounded-t": [{ "rounded-t": [i] }],
						"rounded-r": [{ "rounded-r": [i] }],
						"rounded-b": [{ "rounded-b": [i] }],
						"rounded-l": [{ "rounded-l": [i] }],
						"rounded-ss": [{ "rounded-ss": [i] }],
						"rounded-se": [{ "rounded-se": [i] }],
						"rounded-ee": [{ "rounded-ee": [i] }],
						"rounded-es": [{ "rounded-es": [i] }],
						"rounded-tl": [{ "rounded-tl": [i] }],
						"rounded-tr": [{ "rounded-tr": [i] }],
						"rounded-br": [{ "rounded-br": [i] }],
						"rounded-bl": [{ "rounded-bl": [i] }],
						"border-w": [{ border: [s] }],
						"border-w-x": [{ "border-x": [s] }],
						"border-w-y": [{ "border-y": [s] }],
						"border-w-s": [{ "border-s": [s] }],
						"border-w-e": [{ "border-e": [s] }],
						"border-w-t": [{ "border-t": [s] }],
						"border-w-r": [{ "border-r": [s] }],
						"border-w-b": [{ "border-b": [s] }],
						"border-w-l": [{ "border-l": [s] }],
						"border-opacity": [{ "border-opacity": [S] }],
						"border-style": [{ border: [...B(), "hidden"] }],
						"divide-x": [{ "divide-x": [s] }],
						"divide-x-reverse": ["divide-x-reverse"],
						"divide-y": [{ "divide-y": [s] }],
						"divide-y-reverse": ["divide-y-reverse"],
						"divide-opacity": [{ "divide-opacity": [S] }],
						"divide-style": [{ divide: B() }],
						"border-color": [{ border: [o] }],
						"border-color-x": [{ "border-x": [o] }],
						"border-color-y": [{ "border-y": [o] }],
						"border-color-t": [{ "border-t": [o] }],
						"border-color-r": [{ "border-r": [o] }],
						"border-color-b": [{ "border-b": [o] }],
						"border-color-l": [{ "border-l": [o] }],
						"divide-color": [{ divide: [o] }],
						"outline-style": [{ outline: ["", ...B()] }],
						"outline-offset": [{ "outline-offset": [b, E] }],
						"outline-w": [{ outline: [b, g] }],
						"outline-color": [{ outline: [e] }],
						"ring-w": [{ ring: U() }],
						"ring-w-inset": ["ring-inset"],
						"ring-color": [{ ring: [e] }],
						"ring-opacity": [{ "ring-opacity": [S] }],
						"ring-offset-w": [{ "ring-offset": [b, g] }],
						"ring-offset-color": [{ "ring-offset": [e] }],
						shadow: [{ shadow: ["", "inner", "none", k, R] }],
						"shadow-color": [{ shadow: [M] }],
						opacity: [{ opacity: [S] }],
						"mix-blend": [
							{ "mix-blend": [...Z(), "plus-lighter", "plus-darker"] },
						],
						"bg-blend": [{ "bg-blend": Z() }],
						filter: [{ filter: ["", "none"] }],
						blur: [{ blur: [r] }],
						brightness: [{ brightness: [n] }],
						contrast: [{ contrast: [u] }],
						"drop-shadow": [{ "drop-shadow": ["", "none", k, E] }],
						grayscale: [{ grayscale: [c] }],
						"hue-rotate": [{ "hue-rotate": [d] }],
						invert: [{ invert: [f] }],
						saturate: [{ saturate: [z] }],
						sepia: [{ sepia: [D] }],
						"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
						"backdrop-blur": [{ "backdrop-blur": [r] }],
						"backdrop-brightness": [{ "backdrop-brightness": [n] }],
						"backdrop-contrast": [{ "backdrop-contrast": [u] }],
						"backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
						"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
						"backdrop-invert": [{ "backdrop-invert": [f] }],
						"backdrop-opacity": [{ "backdrop-opacity": [S] }],
						"backdrop-saturate": [{ "backdrop-saturate": [z] }],
						"backdrop-sepia": [{ "backdrop-sepia": [D] }],
						"border-collapse": [{ border: ["collapse", "separate"] }],
						"border-spacing": [{ "border-spacing": [l] }],
						"border-spacing-x": [{ "border-spacing-x": [l] }],
						"border-spacing-y": [{ "border-spacing-y": [l] }],
						"table-layout": [{ table: ["auto", "fixed"] }],
						caption: [{ caption: ["top", "bottom"] }],
						transition: [
							{
								transition: [
									"none",
									"all",
									"",
									"colors",
									"opacity",
									"shadow",
									"transform",
									E,
								],
							},
						],
						duration: [{ duration: J() }],
						ease: [{ ease: ["linear", "in", "out", "in-out", E] }],
						delay: [{ delay: J() }],
						animate: [
							{ animate: ["none", "spin", "ping", "pulse", "bounce", E] },
						],
						transform: [{ transform: ["", "gpu", "none"] }],
						scale: [{ scale: [O] }],
						"scale-x": [{ "scale-x": [O] }],
						"scale-y": [{ "scale-y": [O] }],
						rotate: [{ rotate: [w, E] }],
						"translate-x": [{ "translate-x": [I] }],
						"translate-y": [{ "translate-y": [I] }],
						"skew-x": [{ "skew-x": [W] }],
						"skew-y": [{ "skew-y": [W] }],
						"transform-origin": [
							{
								origin: [
									"center",
									"top",
									"top-right",
									"right",
									"bottom-right",
									"bottom",
									"bottom-left",
									"left",
									"top-left",
									E,
								],
							},
						],
						accent: [{ accent: ["auto", e] }],
						appearance: [{ appearance: ["none", "auto"] }],
						cursor: [
							{
								cursor: [
									"auto",
									"default",
									"pointer",
									"wait",
									"text",
									"move",
									"help",
									"not-allowed",
									"none",
									"context-menu",
									"progress",
									"cell",
									"crosshair",
									"vertical-text",
									"alias",
									"copy",
									"no-drop",
									"grab",
									"grabbing",
									"all-scroll",
									"col-resize",
									"row-resize",
									"n-resize",
									"e-resize",
									"s-resize",
									"w-resize",
									"ne-resize",
									"nw-resize",
									"se-resize",
									"sw-resize",
									"ew-resize",
									"ns-resize",
									"nesw-resize",
									"nwse-resize",
									"zoom-in",
									"zoom-out",
									E,
								],
							},
						],
						"caret-color": [{ caret: [e] }],
						"pointer-events": [{ "pointer-events": ["none", "auto"] }],
						resize: [{ resize: ["none", "y", "x", ""] }],
						"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
						"scroll-m": [{ "scroll-m": $() }],
						"scroll-mx": [{ "scroll-mx": $() }],
						"scroll-my": [{ "scroll-my": $() }],
						"scroll-ms": [{ "scroll-ms": $() }],
						"scroll-me": [{ "scroll-me": $() }],
						"scroll-mt": [{ "scroll-mt": $() }],
						"scroll-mr": [{ "scroll-mr": $() }],
						"scroll-mb": [{ "scroll-mb": $() }],
						"scroll-ml": [{ "scroll-ml": $() }],
						"scroll-p": [{ "scroll-p": $() }],
						"scroll-px": [{ "scroll-px": $() }],
						"scroll-py": [{ "scroll-py": $() }],
						"scroll-ps": [{ "scroll-ps": $() }],
						"scroll-pe": [{ "scroll-pe": $() }],
						"scroll-pt": [{ "scroll-pt": $() }],
						"scroll-pr": [{ "scroll-pr": $() }],
						"scroll-pb": [{ "scroll-pb": $() }],
						"scroll-pl": [{ "scroll-pl": $() }],
						"snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
						"snap-stop": [{ snap: ["normal", "always"] }],
						"snap-type": [{ snap: ["none", "x", "y", "both"] }],
						"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
						touch: [{ touch: ["auto", "none", "manipulation"] }],
						"touch-x": [{ "touch-pan": ["x", "left", "right"] }],
						"touch-y": [{ "touch-pan": ["y", "up", "down"] }],
						"touch-pz": ["touch-pinch-zoom"],
						select: [{ select: ["none", "text", "all", "auto"] }],
						"will-change": [
							{ "will-change": ["auto", "scroll", "contents", "transform", E] },
						],
						fill: [{ fill: [e, "none"] }],
						"stroke-w": [{ stroke: [b, g, h] }],
						stroke: [{ stroke: [e, "none"] }],
						sr: ["sr-only", "not-sr-only"],
						"forced-color-adjust": [
							{ "forced-color-adjust": ["auto", "none"] },
						],
					},
					conflictingClassGroups: {
						overflow: ["overflow-x", "overflow-y"],
						overscroll: ["overscroll-x", "overscroll-y"],
						inset: [
							"inset-x",
							"inset-y",
							"start",
							"end",
							"top",
							"right",
							"bottom",
							"left",
						],
						"inset-x": ["right", "left"],
						"inset-y": ["top", "bottom"],
						flex: ["basis", "grow", "shrink"],
						gap: ["gap-x", "gap-y"],
						p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
						px: ["pr", "pl"],
						py: ["pt", "pb"],
						m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
						mx: ["mr", "ml"],
						my: ["mt", "mb"],
						size: ["w", "h"],
						"font-size": ["leading"],
						"fvn-normal": [
							"fvn-ordinal",
							"fvn-slashed-zero",
							"fvn-figure",
							"fvn-spacing",
							"fvn-fraction",
						],
						"fvn-ordinal": ["fvn-normal"],
						"fvn-slashed-zero": ["fvn-normal"],
						"fvn-figure": ["fvn-normal"],
						"fvn-spacing": ["fvn-normal"],
						"fvn-fraction": ["fvn-normal"],
						"line-clamp": ["display", "overflow"],
						rounded: [
							"rounded-s",
							"rounded-e",
							"rounded-t",
							"rounded-r",
							"rounded-b",
							"rounded-l",
							"rounded-ss",
							"rounded-se",
							"rounded-ee",
							"rounded-es",
							"rounded-tl",
							"rounded-tr",
							"rounded-br",
							"rounded-bl",
						],
						"rounded-s": ["rounded-ss", "rounded-es"],
						"rounded-e": ["rounded-se", "rounded-ee"],
						"rounded-t": ["rounded-tl", "rounded-tr"],
						"rounded-r": ["rounded-tr", "rounded-br"],
						"rounded-b": ["rounded-br", "rounded-bl"],
						"rounded-l": ["rounded-tl", "rounded-bl"],
						"border-spacing": ["border-spacing-x", "border-spacing-y"],
						"border-w": [
							"border-w-s",
							"border-w-e",
							"border-w-t",
							"border-w-r",
							"border-w-b",
							"border-w-l",
						],
						"border-w-x": ["border-w-r", "border-w-l"],
						"border-w-y": ["border-w-t", "border-w-b"],
						"border-color": [
							"border-color-t",
							"border-color-r",
							"border-color-b",
							"border-color-l",
						],
						"border-color-x": ["border-color-r", "border-color-l"],
						"border-color-y": ["border-color-t", "border-color-b"],
						"scroll-m": [
							"scroll-mx",
							"scroll-my",
							"scroll-ms",
							"scroll-me",
							"scroll-mt",
							"scroll-mr",
							"scroll-mb",
							"scroll-ml",
						],
						"scroll-mx": ["scroll-mr", "scroll-ml"],
						"scroll-my": ["scroll-mt", "scroll-mb"],
						"scroll-p": [
							"scroll-px",
							"scroll-py",
							"scroll-ps",
							"scroll-pe",
							"scroll-pt",
							"scroll-pr",
							"scroll-pb",
							"scroll-pl",
						],
						"scroll-px": ["scroll-pr", "scroll-pl"],
						"scroll-py": ["scroll-pt", "scroll-pb"],
						touch: ["touch-x", "touch-y", "touch-pz"],
						"touch-x": ["touch"],
						"touch-y": ["touch"],
						"touch-pz": ["touch"],
					},
					conflictingClassGroupModifiers: { "font-size": ["leading"] },
				};
			});
		},
	},
]);
