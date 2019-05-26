try {
    ! function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : t.UIkit = e()
    }(this, function() {
        "use strict";

        function p(n, i) {
            return function(t) {
                var e = arguments.length;
                return e ? 1 < e ? n.apply(i, arguments) : n.call(i, t) : n.call(i)
            }
        }
        var e = Object.prototype,
            n = e.hasOwnProperty;

        function h(t, e) {
            return n.call(t, e)
        }
        var i = {},
            r = /([a-z\d])([A-Z])/g;

        function m(t) {
            return t in i || (i[t] = t.replace(r, "$1-$2").toLowerCase()), i[t]
        }
        var o = /-(\w)/g;

        function g(t) {
            return t.replace(o, s)
        }

        function s(t, e) {
            return e ? e.toUpperCase() : ""
        }

        function a(t) {
            return t.length ? s(0, t.charAt(0)) + t.slice(1) : ""
        }
        var t = String.prototype,
            l = t.startsWith || function(t) {
                return 0 === this.lastIndexOf(t, 0)
            };

        function v(t, e) {
            return l.call(t, e)
        }
        var c = t.endsWith || function(t) {
            return this.substr(-t.length) === t
        };

        function u(t, e) {
            return c.call(t, e)
        }
        var d = function(t) {
                return ~this.indexOf(t)
            },
            f = t.includes || d,
            w = Array.prototype.includes || d;

        function b(t, e) {
            return t && (N(t) ? f : w).call(t, e)
        }
        var y = Array.isArray;

        function x(t) {
            return "function" == typeof t
        }

        function k(t) {
            return null !== t && "object" == typeof t
        }

        function $(t) {
            return k(t) && Object.getPrototypeOf(t) === e
        }

        function I(t) {
            return k(t) && t === t.window
        }

        function S(t) {
            return k(t) && 9 === t.nodeType
        }

        function T(t) {
            return k(t) && !!t.jquery
        }

        function E(t) {
            return t instanceof Node || k(t) && 1 <= t.nodeType
        }
        var C = e.toString;

        function A(t) {
            return C.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)
        }

        function _(t) {
            return "boolean" == typeof t
        }

        function N(t) {
            return "string" == typeof t
        }

        function O(t) {
            return "number" == typeof t
        }

        function M(t) {
            return O(t) || N(t) && !isNaN(t - parseFloat(t))
        }

        function B(t) {
            return void 0 === t
        }

        function D(t) {
            return _(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
        }

        function z(t) {
            var e = Number(t);
            return !isNaN(e) && e
        }

        function P(t) {
            return parseFloat(t) || 0
        }

        function H(t) {
            return E(t) || I(t) || S(t) ? t : A(t) || T(t) ? t[0] : y(t) ? H(t[0]) : null
        }
        var L = Array.prototype;

        function j(t) {
            return E(t) ? [t] : A(t) ? L.slice.call(t) : y(t) ? t.map(H).filter(Boolean) : T(t) ? t.toArray() : []
        }

        function W(t) {
            return y(t) ? t : N(t) ? t.split(/,(?![^(]*\))/).map(function(t) {
                return M(t) ? z(t) : D(t.trim())
            }) : [t]
        }

        function F(t) {
            return t ? u(t, "ms") ? P(t) : 1e3 * P(t) : 0
        }

        function V(t, e, n) {
            return t.replace(new RegExp(e + "|" + n, "mg"), function(t) {
                return t === e ? n : e
            })
        }
        var Y = Object.assign || function(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            t = Object(t);
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                if (null !== r)
                    for (var o in r) h(r, o) && (t[o] = r[o])
            }
            return t
        };

        function R(t, e) {
            for (var n in t) e.call(t[n], t[n], n)
        }

        function q(t, r) {
            return t.sort(function(t, e) {
                var n = t[r];
                void 0 === n && (n = 0);
                var i = e[r];
                return void 0 === i && (i = 0), i < n ? 1 : n < i ? -1 : 0
            })
        }

        function U(t, e, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(z(t) || 0, e), n)
        }

        function X() {}

        function K(t, e) {
            return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top
        }

        function G(t, e) {
            return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
        }
        var J = {
            ratio: function(t, e, n) {
                var i, r = "width" === e ? "height" : "width";
                return (i = {})[r] = t[e] ? Math.round(n * t[r] / t[e]) : t[r], i[e] = n, i
            },
            contain: function(n, i) {
                var r = this;
                return R(n = Y({}, n), function(t, e) {
                    return n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n
                }), n
            },
            cover: function(n, i) {
                var r = this;
                return R(n = this.contain(n, i), function(t, e) {
                    return n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n
                }), n
            }
        };

        function Z(t, e, n) {
            if (k(e))
                for (var i in e) Z(t, i, e[i]);
            else {
                if (B(n)) return (t = H(t)) && t.getAttribute(e);
                j(t).forEach(function(t) {
                    x(n) && (n = n.call(t, Z(t, e))), null === n ? tt(t, e) : t.setAttribute(e, n)
                })
            }
        }

        function Q(t, e) {
            return j(t).some(function(t) {
                return t.hasAttribute(e)
            })
        }

        function tt(t, e) {
            t = j(t), e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                    return t.removeAttribute(e)
                })
            })
        }

        function et(t, e) {
            for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
                if (Q(t, i[n])) return Z(t, i[n])
        }

        function nt(t, e) {
            return H(t) || ot(t, rt(t, e))
        }

        function it(t, e) {
            var n = j(t);
            return n.length && n || st(t, rt(t, e))
        }

        function rt(t, e) {
            return void 0 === e && (e = document), ct(t) || S(e) ? e : e.ownerDocument
        }

        function ot(t, e) {
            return H(at(t, e, "querySelector"))
        }

        function st(t, e) {
            return j(at(t, e, "querySelectorAll"))
        }

        function at(t, s, e) {
            if (void 0 === s && (s = document), !t || !N(t)) return null;
            var a;
            ct(t = t.replace(ht, "$1 *")) && (a = [], t = t.split(",").map(function(t, e) {
                var n = s;
                if ("!" === (t = t.trim())[0]) {
                    var i = t.substr(1).trim().split(" ");
                    n = mt(s.parentNode, i[0]), t = i.slice(1).join(" ").trim()
                }
                if ("-" === t[0]) {
                    var r = t.substr(1).trim().split(" "),
                        o = (n || s).previousElementSibling;
                    n = ft(o, t.substr(1)) ? o : null, t = r.slice(1).join(" ")
                }
                return n ? (n.id || (n.id = "uk-" + Date.now() + e, a.push(function() {
                    return tt(n, "id")
                })), "#" + wt(n.id) + " " + t) : null
            }).filter(Boolean).join(","), s = document);
            try {
                return s[e](t)
            } catch (t) {
                return null
            } finally {
                a && a.forEach(function(t) {
                    return t()
                })
            }
        }
        var lt = /(^|,)\s*[!>+~-]/,
            ht = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

        function ct(t) {
            return N(t) && t.match(lt)
        }
        var ut = Element.prototype,
            dt = ut.matches || ut.webkitMatchesSelector || ut.msMatchesSelector;

        function ft(t, e) {
            return j(t).some(function(t) {
                return dt.call(t, e)
            })
        }
        var pt = ut.closest || function(t) {
            var e = this;
            do {
                if (ft(e, t)) return e;
                e = e.parentNode
            } while (e && 1 === e.nodeType)
        };

        function mt(t, e) {
            return v(e, ">") && (e = e.slice(1)), E(t) ? t.parentNode && pt.call(t, e) : j(t).map(function(t) {
                return t.parentNode && pt.call(t, e)
            }).filter(Boolean)
        }

        function gt(t, e) {
            for (var n = [], i = H(t).parentNode; i && 1 === i.nodeType;) ft(i, e) && n.push(i), i = i.parentNode;
            return n
        }
        var vt = window.CSS && CSS.escape || function(t) {
            return t.replace(/([^\x7f-\uFFFF\w-])/g, function(t) {
                return "\\" + t
            })
        };

        function wt(t) {
            return N(t) ? vt.call(null, t) : ""
        }
        var bt = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };

        function yt(t) {
            return j(t).some(function(t) {
                return bt[t.tagName.toLowerCase()]
            })
        }

        function xt(t) {
            return j(t).some(function(t) {
                return t.offsetWidth || t.offsetHeight || t.getClientRects().length
            })
        }
        var kt = "input,select,textarea,button";

        function $t(t) {
            return j(t).some(function(t) {
                return ft(t, kt)
            })
        }

        function It(t, e) {
            return j(t).filter(function(t) {
                return ft(t, e)
            })
        }

        function St(t, e) {
            return N(e) ? ft(t, e) || mt(t, e) : t === e || (S(e) ? e.documentElement : H(e)).contains(H(t))
        }

        function Tt() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n, i = Nt(t),
                r = i[0],
                o = i[1],
                s = i[2],
                a = i[3],
                l = i[4];
            return r = Bt(r), s && (a = function(t, i, r) {
                    var o = this;
                    return function(n) {
                        t.forEach(function(t) {
                            var e = ">" === i[0] ? st(i, t).reverse().filter(function(t) {
                                return St(n.target, t)
                            })[0] : mt(n.target, i);
                            e && (n.delegate = t, n.current = e, r.call(o, n))
                        })
                    }
                }(r, s, a)), 1 < a.length && (n = a, a = function(t) {
                    return y(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t)
                }), o.split(" ").forEach(function(e) {
                    return r.forEach(function(t) {
                        return t.addEventListener(e, a, l)
                    })
                }),
                function() {
                    return Et(r, o, a, l)
                }
        }

        function Et(t, e, n, i) {
            void 0 === i && (i = !1), t = Bt(t), e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                    return t.removeEventListener(e, n, i)
                })
            })
        }

        function Ct() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = Nt(t),
                i = n[0],
                r = n[1],
                o = n[2],
                s = n[3],
                a = n[4],
                l = n[5],
                h = Tt(i, r, o, function(t) {
                    var e = !l || l(t);
                    e && (h(), s(t, e))
                }, a);
            return h
        }

        function At(t, n, i) {
            return Bt(t).reduce(function(t, e) {
                return t && e.dispatchEvent(_t(n, !0, !0, i))
            }, !0)
        }

        function _t(t, e, n, i) {
            if (void 0 === e && (e = !0), void 0 === n && (n = !1), N(t)) {
                var r = document.createEvent("CustomEvent");
                r.initCustomEvent(t, e, n, i), t = r
            }
            return t
        }

        function Nt(t) {
            return x(t[2]) && t.splice(2, 0, !1), t
        }

        function Ot(t) {
            return t && "addEventListener" in t
        }

        function Mt(t) {
            return Ot(t) ? t : H(t)
        }

        function Bt(t) {
            return y(t) ? t.map(Mt).filter(Boolean) : N(t) ? st(t) : Ot(t) ? [t] : j(t)
        }

        function Dt() {
            var e = setTimeout(Ct(document, "click", function(t) {
                t.preventDefault(), t.stopImmediatePropagation(), clearTimeout(e)
            }, !0));
            At(document, "touchcancel")
        }
        var zt = "Promise" in window ? window.Promise : jt,
            Pt = function() {
                var n = this;
                this.promise = new zt(function(t, e) {
                    n.reject = e, n.resolve = t
                })
            },
            Ht = 2,
            Lt = "setImmediate" in window ? setImmediate : setTimeout;

        function jt(t) {
            this.state = Ht, this.value = void 0, this.deferred = [];
            var e = this;
            try {
                t(function(t) {
                    e.resolve(t)
                }, function(t) {
                    e.reject(t)
                })
            } catch (t) {
                e.reject(t)
            }
        }
        jt.reject = function(n) {
            return new jt(function(t, e) {
                e(n)
            })
        }, jt.resolve = function(n) {
            return new jt(function(t, e) {
                t(n)
            })
        }, jt.all = function(s) {
            return new jt(function(n, t) {
                var i = [],
                    r = 0;

                function e(e) {
                    return function(t) {
                        i[e] = t, (r += 1) === s.length && n(i)
                    }
                }
                0 === s.length && n(i);
                for (var o = 0; o < s.length; o += 1) jt.resolve(s[o]).then(e(o), t)
            })
        }, jt.race = function(i) {
            return new jt(function(t, e) {
                for (var n = 0; n < i.length; n += 1) jt.resolve(i[n]).then(t, e)
            })
        };
        var Wt = jt.prototype;

        function Ft(s, a) {
            return new zt(function(t, e) {
                var n = Y({
                    data: null,
                    method: "GET",
                    headers: {},
                    xhr: new XMLHttpRequest,
                    beforeSend: X,
                    responseType: ""
                }, a);
                n.beforeSend(n);
                var i = n.xhr;
                for (var r in n)
                    if (r in i) try {
                        i[r] = n[r]
                    } catch (t) {}
                    for (var o in i.open(n.method.toUpperCase(), s), n.headers) i.setRequestHeader(o, n.headers[o]);
                Tt(i, "load", function() {
                    0 === i.status || 200 <= i.status && i.status < 300 || 304 === i.status ? t(i) : e(Y(Error(i.statusText), {
                        xhr: i,
                        status: i.status
                    }))
                }), Tt(i, "error", function() {
                    return e(Y(Error("Network Error"), {
                        xhr: i
                    }))
                }), Tt(i, "timeout", function() {
                    return e(Y(Error("Network Timeout"), {
                        xhr: i
                    }))
                }), i.send(n.data)
            })
        }

        function Vt(i, r, o) {
            return new zt(function(t, e) {
                var n = new Image;
                n.onerror = e, n.onload = function() {
                    return t(n)
                }, o && (n.sizes = o), r && (n.srcset = r), n.src = i
            })
        }
        Wt.resolve = function(t) {
            var e = this;
            if (e.state === Ht) {
                if (t === e) throw new TypeError("Promise settled with itself.");
                var n = !1;
                try {
                    var i = t && t.then;
                    if (null !== t && k(t) && x(i)) return void i.call(t, function(t) {
                        n || e.resolve(t), n = !0
                    }, function(t) {
                        n || e.reject(t), n = !0
                    })
                } catch (t) {
                    return void(n || e.reject(t))
                }
                e.state = 0, e.value = t, e.notify()
            }
        }, Wt.reject = function(t) {
            var e = this;
            if (e.state === Ht) {
                if (t === e) throw new TypeError("Promise settled with itself.");
                e.state = 1, e.value = t, e.notify()
            }
        }, Wt.notify = function() {
            var o = this;
            Lt(function() {
                if (o.state !== Ht)
                    for (; o.deferred.length;) {
                        var t = o.deferred.shift(),
                            e = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3];
                        try {
                            0 === o.state ? x(e) ? i(e.call(void 0, o.value)) : i(o.value) : 1 === o.state && (x(n) ? i(n.call(void 0, o.value)) : r(o.value))
                        } catch (t) {
                            r(t)
                        }
                    }
            })
        }, Wt.then = function(n, i) {
            var r = this;
            return new jt(function(t, e) {
                r.deferred.push([n, i, t, e]), r.notify()
            })
        }, Wt.catch = function(t) {
            return this.then(void 0, t)
        };
        var Yt = /msie|trident/i.test(window.navigator.userAgent),
            Rt = "rtl" === Z(document.documentElement, "dir"),
            qt = "ontouchstart" in window,
            Ut = window.PointerEvent,
            Xt = qt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints,
            Kt = Xt ? "mousedown " + (qt ? "touchstart" : "pointerdown") : "mousedown",
            Gt = Xt ? "mousemove " + (qt ? "touchmove" : "pointermove") : "mousemove",
            Jt = Xt ? "mouseup " + (qt ? "touchend" : "pointerup") : "mouseup",
            Zt = Xt && Ut ? "pointerenter" : "mouseenter",
            Qt = Xt && Ut ? "pointerleave" : "mouseleave";

        function te() {
            return "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll
        }

        function ee(t) {
            if (te()) t();
            else var e = function() {
                    n(), i(), t()
                },
                n = Tt(document, "DOMContentLoaded", e),
                i = Tt(window, "load", e)
        }

        function ne(t, e) {
            return e ? j(t).indexOf(H(e)) : j((t = H(t)) && t.parentNode.children).indexOf(t)
        }

        function ie(t, e, n, i) {
            void 0 === n && (n = 0), void 0 === i && (i = !1);
            var r = (e = j(e)).length;
            return t = M(t) ? z(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : ne(e, t), i ? U(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
        }

        function re(t) {
            return (t = we(t)).innerHTML = "", t
        }

        function oe(t, e) {
            return t = we(t), B(e) ? t.innerHTML : se(t.hasChildNodes() ? re(t) : t, e)
        }

        function se(e, t) {
            return e = we(e), he(t, function(t) {
                return e.appendChild(t)
            })
        }

        function ae(e, t) {
            return e = we(e), he(t, function(t) {
                return e.parentNode.insertBefore(t, e)
            })
        }

        function le(e, t) {
            return e = we(e), he(t, function(t) {
                return e.nextSibling ? ae(e.nextSibling, t) : se(e.parentNode, t)
            })
        }

        function he(t, e) {
            return (t = N(t) ? ge(t) : t) ? "length" in t ? j(t).map(e) : e(t) : null
        }

        function ce(t) {
            j(t).map(function(t) {
                return t.parentNode && t.parentNode.removeChild(t)
            })
        }

        function ue(t, e) {
            for (e = H(ae(t, e)); e.firstChild;) e = e.firstChild;
            return se(e, t), e
        }

        function de(t, e) {
            return j(j(t).map(function(t) {
                return t.hasChildNodes ? ue(j(t.childNodes), e) : se(t, e)
            }))
        }

        function fe(t) {
            j(t).map(function(t) {
                return t.parentNode
            }).filter(function(t, e, n) {
                return n.indexOf(t) === e
            }).forEach(function(t) {
                ae(t, t.childNodes), ce(t)
            })
        }
        var pe = /^\s*<(\w+|!)[^>]*>/,
            me = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

        function ge(t) {
            var e = me.exec(t);
            if (e) return document.createElement(e[1]);
            var n = document.createElement("div");
            return pe.test(t) ? n.insertAdjacentHTML("beforeend", t.trim()) : n.textContent = t, 1 < n.childNodes.length ? j(n.childNodes) : n.firstChild
        }

        function ve(t, e) {
            if (t && 1 === t.nodeType)
                for (e(t), t = t.firstElementChild; t;) ve(t, e), t = t.nextElementSibling
        }

        function we(t, e) {
            return N(t) ? ye(t) ? H(ge(t)) : ot(t, e) : H(t)
        }

        function be(t, e) {
            return N(t) ? ye(t) ? j(ge(t)) : st(t, e) : j(t)
        }

        function ye(t) {
            return "<" === t[0] || t.match(/^\s*</)
        }

        function xe(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            Ee(t, e, "add")
        }

        function ke(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            Ee(t, e, "remove")
        }

        function $e(t, e) {
            Z(t, "class", function(t) {
                return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
            })
        }

        function Ie(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            e[0] && ke(t, e[0]), e[1] && xe(t, e[1])
        }

        function Se(t, e) {
            return j(t).some(function(t) {
                return t.classList.contains(e)
            })
        }

        function Te(t) {
            for (var i = [], e = arguments.length - 1; 0 < e--;) i[e] = arguments[e + 1];
            if (i.length) {
                var r = N((i = Ce(i))[i.length - 1]) ? [] : i.pop();
                i = i.filter(Boolean), j(t).forEach(function(t) {
                    for (var e = t.classList, n = 0; n < i.length; n++) _e.Force ? e.toggle.apply(e, [i[n]].concat(r)) : e[(B(r) ? !e.contains(i[n]) : r) ? "add" : "remove"](i[n])
                })
            }
        }

        function Ee(t, n, i) {
            (n = Ce(n).filter(Boolean)).length && j(t).forEach(function(t) {
                var e = t.classList;
                _e.Multiple ? e[i].apply(e, n) : n.forEach(function(t) {
                    return e[i](t)
                })
            })
        }

        function Ce(t) {
            return t.reduce(function(t, e) {
                return t.concat.call(t, N(e) && b(e, " ") ? e.trim().split(" ") : e)
            }, [])
        }
        var Ae, _e = {};
        (Ae = document.createElement("_").classList) && (Ae.add("a", "b"), Ae.toggle("c", !1), _e.Multiple = Ae.contains("b"), _e.Force = !Ae.contains("c"));
        var Ne = {
            "animation-iteration-count": !(Ae = null),
            "column-count": !0,
            "fill-opacity": !0,
            "flex-grow": !0,
            "flex-shrink": !0,
            "font-weight": !0,
            "line-height": !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            "z-index": !0,
            zoom: !0
        };

        function Oe(t, e, r) {
            return j(t).map(function(n) {
                if (N(e)) {
                    if (e = He(e), B(r)) return Be(n, e);
                    r || 0 === r ? n.style[e] = M(r) && !Ne[e] ? r + "px" : r : n.style.removeProperty(e)
                } else {
                    if (y(e)) {
                        var i = Me(n);
                        return e.reduce(function(t, e) {
                            return t[e] = i[He(e)], t
                        }, {})
                    }
                    k(e) && R(e, function(t, e) {
                        return Oe(n, e, t)
                    })
                }
                return n
            })[0]
        }

        function Me(t, e) {
            return (t = H(t)).ownerDocument.defaultView.getComputedStyle(t, e)
        }

        function Be(t, e, n) {
            return Me(t, n)[e]
        }
        var De = {};

        function ze(t) {
            var e = document.documentElement;
            if (!Yt) return Me(e).getPropertyValue("--uk-" + t);
            if (!(t in De)) {
                var n = se(e, document.createElement("div"));
                xe(n, "uk-" + t), De[t] = Be(n, "content", ":before").replace(/^["'](.*)["']$/, "$1"), ce(n)
            }
            return De[t]
        }
        var Pe = {};

        function He(t) {
            var e = Pe[t];
            return e || (e = Pe[t] = function(t) {
                if ((t = m(t)) in je) return t;
                var e, n = Le.length;
                for (; n--;)
                    if ((e = "-" + Le[n] + "-" + t) in je) return e
            }(t) || t), e
        }
        var Le = ["webkit", "moz", "ms"],
            je = document.createElement("_").style;

        function We(t, s, a, l) {
            return void 0 === a && (a = 400), void 0 === l && (l = "linear"), zt.all(j(t).map(function(o) {
                return new zt(function(n, i) {
                    for (var t in s) {
                        var e = Oe(o, t);
                        "" === e && Oe(o, t, e)
                    }
                    var r = setTimeout(function() {
                        return At(o, "transitionend")
                    }, a);
                    Ct(o, "transitionend transitioncanceled", function(t) {
                        var e = t.type;
                        clearTimeout(r), ke(o, "uk-transition"), Oe(o, {
                            "transition-property": "",
                            "transition-duration": "",
                            "transition-timing-function": ""
                        }), "transitioncanceled" === e ? i() : n()
                    }, !1, function(t) {
                        var e = t.target;
                        return o === e
                    }), xe(o, "uk-transition"), Oe(o, Y({
                        "transition-property": Object.keys(s).map(He).join(","),
                        "transition-duration": a + "ms",
                        "transition-timing-function": l
                    }, s))
                })
            }))
        }
        var Fe = {
                start: We,
                stop: function(t) {
                    return At(t, "transitionend"), zt.resolve()
                },
                cancel: function(t) {
                    At(t, "transitioncanceled")
                },
                inProgress: function(t) {
                    return Se(t, "uk-transition")
                }
            },
            Ve = "uk-animation-",
            Ye = "uk-cancel-animation";

        function Re(t, e, n, a, l) {
            var h = arguments;
            return void 0 === n && (n = 200), zt.all(j(t).map(function(s) {
                return new zt(function(i, r) {
                    if (Se(s, Ye)) requestAnimationFrame(function() {
                        return zt.resolve().then(function() {
                            return Re.apply(void 0, h).then(i, r)
                        })
                    });
                    else {
                        var t = e + " " + Ve + (l ? "leave" : "enter");
                        v(e, Ve) && (a && (t += " uk-transform-origin-" + a), l && (t += " " + Ve + "reverse")), o(), Ct(s, "animationend animationcancel", function(t) {
                            var e = t.type,
                                n = !1;
                            "animationcancel" === e ? (r(), o()) : (i(), zt.resolve().then(function() {
                                n = !0, o()
                            })), requestAnimationFrame(function() {
                                n || (xe(s, Ye), requestAnimationFrame(function() {
                                    return ke(s, Ye)
                                }))
                            })
                        }, !1, function(t) {
                            var e = t.target;
                            return s === e
                        }), Oe(s, "animationDuration", n + "ms"), xe(s, t)
                    }

                    function o() {
                        Oe(s, "animationDuration", ""), $e(s, Ve + "\\S*")
                    }
                })
            }))
        }
        var qe = new RegExp(Ve + "(enter|leave)"),
            Ue = { in : function(t, e, n, i) {
                    return Re(t, e, n, i, !1)
                }, out: function(t, e, n, i) {
                    return Re(t, e, n, i, !0)
                }, inProgress: function(t) {
                    return qe.test(Z(t, "class"))
                }, cancel: function(t) {
                    At(t, "animationcancel")
                }
            },
            Xe = {
                width: ["x", "left", "right"],
                height: ["y", "top", "bottom"]
            };

        function Ke(t, e, c, u, d, n, f, p) {
            c = on(c), u = on(u);
            var m = {
                element: c,
                target: u
            };
            if (!t || !e) return m;
            var g = Je(t),
                v = Je(e),
                w = v;
            return rn(w, c, g, -1), rn(w, u, v, 1), d = sn(d, g.width, g.height), n = sn(n, v.width, v.height), d.x += n.x, d.y += n.y, w.left += d.x, w.top += d.y, p = Je(p || dn(t)), f && R(Xe, function(t, i) {
                var r = t[0],
                    o = t[1],
                    s = t[2];
                if (!0 === f || b(f, r)) {
                    var e = c[r] === o ? -g[i] : c[r] === s ? g[i] : 0,
                        n = u[r] === o ? v[i] : u[r] === s ? -v[i] : 0;
                    if (w[o] < p[o] || w[o] + g[i] > p[s]) {
                        var a = g[i] / 2,
                            l = "center" === u[r] ? -v[i] / 2 : 0;
                        "center" === c[r] && (h(a, l) || h(-a, -l)) || h(e, n)
                    }
                }

                function h(e, t) {
                    var n = w[o] + e + t - 2 * d[r];
                    if (n >= p[o] && n + g[i] <= p[s]) return w[o] = n, ["element", "target"].forEach(function(t) {
                        m[t][r] = e ? m[t][r] === Xe[i][1] ? Xe[i][2] : Xe[i][1] : m[t][r]
                    }), !0
                }
            }), Ge(t, w), m
        }

        function Ge(n, i) {
            if (n = H(n), !i) return Je(n);
            var r = Ge(n),
                o = Oe(n, "position");
            ["left", "top"].forEach(function(t) {
                if (t in i) {
                    var e = Oe(n, t);
                    Oe(n, t, i[t] - r[t] + P("absolute" === o && "auto" === e ? Ze(n)[t] : e))
                }
            })
        }

        function Je(t) {
            var e, n, i = dn(t = H(t)),
                r = i.pageYOffset,
                o = i.pageXOffset;
            if (I(t)) {
                var s = t.innerHeight,
                    a = t.innerWidth;
                return {
                    top: r,
                    left: o,
                    height: s,
                    width: a,
                    bottom: r + s,
                    right: o + a
                }
            }
            xt(t) || (e = Z(t, "style"), n = Z(t, "hidden"), Z(t, {
                style: (e || "") + ";display:block !important;",
                hidden: null
            }));
            var l = t.getBoundingClientRect();
            return B(e) || Z(t, {
                style: e,
                hidden: n
            }), {
                height: l.height,
                width: l.width,
                top: l.top + r,
                left: l.left + o,
                bottom: l.bottom + r,
                right: l.right + o
            }
        }

        function Ze(i) {
            var r = (i = H(i)).offsetParent || fn(i).documentElement,
                o = Ge(r),
                t = ["top", "left"].reduce(function(t, e) {
                    var n = a(e);
                    return t[e] -= o[e] + P(Oe(i, "margin" + n)) + P(Oe(r, "border" + n + "Width")), t
                }, Ge(i));
            return {
                top: t.top,
                left: t.left
            }
        }
        var Qe = en("height"),
            tn = en("width");

        function en(i) {
            var r = a(i);
            return function(t, e) {
                if (t = H(t), B(e)) {
                    if (I(t)) return t["inner" + r];
                    if (S(t)) {
                        var n = t.documentElement;
                        return Math.max(n["offset" + r], n["scroll" + r])
                    }
                    return (e = "auto" === (e = Oe(t, i)) ? t["offset" + r] : P(e) || 0) - nn(i, t)
                }
                Oe(t, i, e || 0 === e ? +e + nn(i, t) + "px" : "")
            }
        }

        function nn(t, n, e) {
            return void 0 === e && (e = "border-box"), Oe(n, "boxSizing") === e ? Xe[t].slice(1).map(a).reduce(function(t, e) {
                return t + P(Oe(n, "padding" + e)) + P(Oe(n, "border" + e + "Width"))
            }, 0) : 0
        }

        function rn(o, s, a, l) {
            R(Xe, function(t, e) {
                var n = t[0],
                    i = t[1],
                    r = t[2];
                s[n] === r ? o[i] += a[e] * l : "center" === s[n] && (o[i] += a[e] * l / 2)
            })
        }

        function on(t) {
            var e = /left|center|right/,
                n = /top|center|bottom/;
            return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
                x: e.test(t[0]) ? t[0] : "center",
                y: n.test(t[1]) ? t[1] : "center"
            }
        }

        function sn(t, e, n) {
            var i = (t || "").split(" "),
                r = i[0],
                o = i[1];
            return {
                x: r ? P(r) * (u(r, "%") ? e / 100 : 1) : 0,
                y: o ? P(o) * (u(o, "%") ? n / 100 : 1) : 0
            }
        }

        function an(t) {
            switch (t) {
                case "left":
                    return "right";
                case "right":
                    return "left";
                case "top":
                    return "bottom";
                case "bottom":
                    return "top";
                default:
                    return t
            }
        }

        function ln(t, e, n, i) {
            if (void 0 === e && (e = 0), void 0 === n && (n = 0), !xt(t)) return !1;
            var r, o, s = dn(t = H(t));
            if (i) r = t.getBoundingClientRect(), o = {
                top: -e,
                left: -n,
                bottom: e + Qe(s),
                right: n + tn(s)
            };
            else {
                var a = un(t),
                    l = a[0],
                    h = a[1],
                    c = s.pageYOffset,
                    u = s.pageXOffset;
                r = {
                    top: l,
                    left: h,
                    bottom: l + t.offsetHeight,
                    right: l + t.offsetWidth
                }, o = {
                    top: c - e,
                    left: u - n,
                    bottom: c + e + Qe(s),
                    right: u + n + tn(s)
                }
            }
            return K(r, o) || G({
                x: r.left,
                y: r.top
            }, o)
        }

        function hn(t, e) {
            if (void 0 === e && (e = 0), !xt(t)) return 0;
            var n = dn(t = H(t)),
                i = fn(t),
                r = t.offsetHeight + e,
                o = un(t)[0],
                s = Qe(n),
                a = s + Math.min(0, o - s),
                l = Math.max(0, s - (Qe(i) + e - (o + r)));
            return U((a + n.pageYOffset - o) / ((a + (r - (l < s ? l : 0))) / 100) / 100)
        }

        function cn(t, e) {
            if (I(t = H(t)) || S(t)) {
                var n = dn(t);
                (0, n.scrollTo)(n.pageXOffset, e)
            } else t.scrollTop = e
        }

        function un(t) {
            var e = [0, 0];
            do {
                if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Oe(t, "position")) {
                    var n = dn(t);
                    return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e
                }
            } while (t = t.offsetParent);
            return e
        }

        function dn(t) {
            return I(t) ? t : fn(t).defaultView
        }

        function fn(t) {
            return H(t).ownerDocument
        }
        var pn = {
            reads: [],
            writes: [],
            read: function(t) {
                return this.reads.push(t), mn(), t
            },
            write: function(t) {
                return this.writes.push(t), mn(), t
            },
            clear: function(t) {
                return vn(this.reads, t) || vn(this.writes, t)
            },
            flush: function() {
                gn(this.reads), gn(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && mn()
            }
        };

        function mn() {
            pn.scheduled || (pn.scheduled = !0, requestAnimationFrame(pn.flush.bind(pn)))
        }

        function gn(t) {
            for (var e; e = t.shift();) e()
        }

        function vn(t, e) {
            var n = t.indexOf(e);
            return !!~n && !!t.splice(n, 1)
        }

        function wn() {}

        function bn(t, e) {
            return (e.y - t.y) / (e.x - t.x)
        }
        wn.prototype = {
            positions: [],
            position: null,
            init: function() {
                var i = this;
                this.positions = [], this.position = null;
                var r = !1;
                this.unbind = Tt(document, "mousemove", function(n) {
                    r || (setTimeout(function() {
                        var t = Date.now(),
                            e = i.positions.length;
                        e && 100 < t - i.positions[e - 1].time && i.positions.splice(0, e), i.positions.push({
                            time: t,
                            x: n.pageX,
                            y: n.pageY
                        }), 5 < i.positions.length && i.positions.shift(), r = !1
                    }, 5), r = !0)
                })
            },
            cancel: function() {
                this.unbind && this.unbind()
            },
            movesTo: function(t) {
                if (this.positions.length < 2) return !1;
                var e = Ge(t),
                    n = this.positions[this.positions.length - 1],
                    i = this.positions[0];
                if (e.left <= n.x && n.x <= e.right && e.top <= n.y && n.y <= e.bottom) return !1;
                var r = [
                    [{
                        x: e.left,
                        y: e.top
                    }, {
                        x: e.right,
                        y: e.bottom
                    }],
                    [{
                        x: e.right,
                        y: e.top
                    }, {
                        x: e.left,
                        y: e.bottom
                    }]
                ];
                return e.right <= n.x || (e.left >= n.x ? (r[0].reverse(), r[1].reverse()) : e.bottom <= n.y ? r[0].reverse() : e.top >= n.y && r[1].reverse()), !!r.reduce(function(t, e) {
                    return t + (bn(i, e[0]) < bn(n, e[0]) && bn(i, e[1]) > bn(n, e[1]))
                }, 0)
            }
        };
        var yn = {};

        function xn(t, e, n) {
            return yn.computed(x(t) ? t.call(n, n) : t, x(e) ? e.call(n, n) : e)
        }

        function kn(t, e) {
            return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t
        }

        function $n(e, n, i) {
            var r = {};
            if (x(n) && (n = n.options), n.extends && (e = $n(e, n.extends, i)), n.mixins)
                for (var t = 0, o = n.mixins.length; t < o; t++) e = $n(e, n.mixins[t], i);
            for (var s in e) l(s);
            for (var a in n) h(e, a) || l(a);

            function l(t) {
                r[t] = (yn[t] || function(t, e) {
                    return B(e) ? t : e
                })(e[t], n[t], i)
            }
            return r
        }

        function In(t, e) {
            var n;
            void 0 === e && (e = []);
            try {
                return t ? v(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function(t, e) {
                    var n = e.split(/:(.*)/),
                        i = n[0],
                        r = n[1];
                    return i && !B(r) && (t[i.trim()] = r.trim()), t
                }, {}) : {}
            } catch (t) {
                return {}
            }
        }
        yn.events = yn.created = yn.beforeConnect = yn.connected = yn.beforeDisconnect = yn.disconnected = yn.destroy = kn, yn.args = function(t, e) {
            return kn(e || t)
        }, yn.update = function(t, e) {
            return q(kn(t, x(e) ? {
                read: e
            } : e), "order")
        }, yn.props = function(t, e) {
            return y(e) && (e = e.reduce(function(t, e) {
                return t[e] = String, t
            }, {})), yn.methods(t, e)
        }, yn.computed = yn.methods = function(t, e) {
            return e ? t ? Y({}, t, e) : e : t
        }, yn.data = function(e, n, t) {
            return t ? xn(e, n, t) : n ? e ? function(t) {
                return xn(e, n, t)
            } : n : e
        };
        var Sn = 0,
            Tn = function(t) {
                this.id = ++Sn, this.el = H(t)
            };

        function En(t, e) {
            try {
                t.contentWindow.postMessage(JSON.stringify(Y({
                    event: "command"
                }, e)), "*")
            } catch (t) {}
        }
        Tn.prototype.isVideo = function() {
            return this.isYoutube() || this.isVimeo() || this.isHTML5()
        }, Tn.prototype.isHTML5 = function() {
            return "VIDEO" === this.el.tagName
        }, Tn.prototype.isIFrame = function() {
            return "IFRAME" === this.el.tagName
        }, Tn.prototype.isYoutube = function() {
            return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
        }, Tn.prototype.isVimeo = function() {
            return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
        }, Tn.prototype.enableApi = function() {
            var e = this;
            if (this.ready) return this.ready;
            var n, r = this.isYoutube(),
                o = this.isVimeo();
            return r || o ? this.ready = new zt(function(t) {
                var i;
                Ct(e.el, "load", function() {
                    if (r) {
                        var t = function() {
                            return En(e.el, {
                                event: "listening",
                                id: e.id
                            })
                        };
                        n = setInterval(t, 100), t()
                    }
                }), (i = function(t) {
                    return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id
                }, new zt(function(n) {
                    Ct(window, "message", function(t, e) {
                        return n(e)
                    }, !1, function(t) {
                        var e = t.data;
                        if (e && N(e)) {
                            try {
                                e = JSON.parse(e)
                            } catch (t) {
                                return
                            }
                            return e && i(e)
                        }
                    })
                })).then(function() {
                    t(), n && clearInterval(n)
                }), Z(e.el, "src", e.el.src + (b(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id))
            }) : zt.resolve()
        }, Tn.prototype.play = function() {
            var t = this;
            if (this.isVideo())
                if (this.isIFrame()) this.enableApi().then(function() {
                    return En(t.el, {
                        func: "playVideo",
                        method: "play"
                    })
                });
                else if (this.isHTML5()) try {
                var e = this.el.play();
                e && e.catch(X)
            } catch (t) {}
        }, Tn.prototype.pause = function() {
            var t = this;
            this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
                return En(t.el, {
                    func: "pauseVideo",
                    method: "pause"
                })
            }) : this.isHTML5() && this.el.pause())
        }, Tn.prototype.mute = function() {
            var t = this;
            this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
                return En(t.el, {
                    func: "mute",
                    method: "setVolume",
                    value: 0
                })
            }) : this.isHTML5() && (this.el.muted = !0, Z(this.el, "muted", "")))
        };
        var Cn, An, _n, Nn, On = {};

        function Mn() {
            Cn && clearTimeout(Cn), An && clearTimeout(An), _n && clearTimeout(_n), Cn = An = _n = null, On = {}
        }
        ee(function() {
            Tt(document, "click", function() {
                return Nn = !0
            }, !0), Tt(document, Kt, function(t) {
                var e = t.target,
                    n = zn(t),
                    i = n.x,
                    r = n.y,
                    o = Date.now(),
                    s = Pn(t.type);
                On.type && On.type !== s || (On.el = "tagName" in e ? e : e.parentNode, Cn && clearTimeout(Cn), On.x1 = i, On.y1 = r, On.last && o - On.last <= 250 && (On = {}), On.type = s, On.last = o, Nn = 0 < t.button)
            }), Tt(document, Gt, function(t) {
                if (!t.defaultPrevented) {
                    var e = zn(t),
                        n = e.x,
                        i = e.y;
                    On.x2 = n, On.y2 = i
                }
            }), Tt(document, Jt, function(t) {
                var e = t.type,
                    n = t.target;
                On.type === Pn(e) && (On.x2 && 30 < Math.abs(On.x1 - On.x2) || On.y2 && 30 < Math.abs(On.y1 - On.y2) ? An = setTimeout(function() {
                    var t, e, n, i, r;
                    On.el && (At(On.el, "swipe"), At(On.el, "swipe" + (e = (t = On).x1, n = t.x2, i = t.y1, r = t.y2, Math.abs(e - n) >= Math.abs(i - r) ? 0 < e - n ? "Left" : "Right" : 0 < i - r ? "Up" : "Down"))), On = {}
                }) : "last" in On ? (_n = setTimeout(function() {
                    return At(On.el, "tap")
                }), On.el && "mouseup" !== e && St(n, On.el) && (Cn = setTimeout(function() {
                    Cn = null, On.el && !Nn && At(On.el, "click"), On = {}
                }, 350))) : On = {})
            }), Tt(document, "touchcancel", Mn), Tt(window, "scroll", Mn)
        });
        var Bn = !1;

        function Dn(t) {
            return Bn || "touch" === t.pointerType
        }

        function zn(t) {
            var e = t.touches,
                n = t.changedTouches,
                i = e && e[0] || n && n[0] || t;
            return {
                x: i.pageX,
                y: i.pageY
            }
        }

        function Pn(t) {
            return t.slice(0, 5)
        }

        function Hn(t) {
            return !(!v(t, "uk-") && !v(t, "data-uk-")) && g(t.replace("data-uk-", "").replace("uk-", ""))
        }
        Tt(document, "touchstart", function() {
            return Bn = !0
        }, !0), Tt(document, "click", function() {
            Bn = !1
        }), Tt(document, "touchcancel", function() {
            return Bn = !1
        }, !0);
        var Ln, jn, Wn, Fn, Vn = function(t) {
            this._init(t)
        };
        Vn.util = Object.freeze({
                ajax: Ft,
                getImage: Vt,
                transition: We,
                Transition: Fe,
                animate: Re,
                Animation: Ue,
                attr: Z,
                hasAttr: Q,
                removeAttr: tt,
                data: et,
                addClass: xe,
                removeClass: ke,
                removeClasses: $e,
                replaceClass: Ie,
                hasClass: Se,
                toggleClass: Te,
                positionAt: Ke,
                offset: Ge,
                position: Ze,
                height: Qe,
                width: tn,
                boxModelAdjust: nn,
                flipPosition: an,
                isInView: ln,
                scrolledOver: hn,
                scrollTop: cn,
                offsetPosition: un,
                isReady: te,
                ready: ee,
                index: ne,
                getIndex: ie,
                empty: re,
                html: oe,
                prepend: function(e, t) {
                    return (e = we(e)).hasChildNodes() ? he(t, function(t) {
                        return e.insertBefore(t, e.firstChild)
                    }) : se(e, t)
                },
                append: se,
                before: ae,
                after: le,
                remove: ce,
                wrapAll: ue,
                wrapInner: de,
                unwrap: fe,
                fragment: ge,
                apply: ve,
                $: we,
                $$: be,
                isIE: Yt,
                isRtl: Rt,
                hasTouch: Xt,
                pointerDown: Kt,
                pointerMove: Gt,
                pointerUp: Jt,
                pointerEnter: Zt,
                pointerLeave: Qt,
                on: Tt,
                off: Et,
                once: Ct,
                trigger: At,
                createEvent: _t,
                toEventTargets: Bt,
                preventClick: Dt,
                fastdom: pn,
                isVoidElement: yt,
                isVisible: xt,
                selInput: kt,
                isInput: $t,
                filter: It,
                within: St,
                bind: p,
                hasOwn: h,
                hyphenate: m,
                camelize: g,
                ucfirst: a,
                startsWith: v,
                endsWith: u,
                includes: b,
                isArray: y,
                isFunction: x,
                isObject: k,
                isPlainObject: $,
                isWindow: I,
                isDocument: S,
                isJQuery: T,
                isNode: E,
                isNodeCollection: A,
                isBoolean: _,
                isString: N,
                isNumber: O,
                isNumeric: M,
                isUndefined: B,
                toBoolean: D,
                toNumber: z,
                toFloat: P,
                toNode: H,
                toNodes: j,
                toList: W,
                toMs: F,
                swap: V,
                assign: Y,
                each: R,
                sortBy: q,
                clamp: U,
                noop: X,
                intersectRect: K,
                pointInRect: G,
                Dimensions: J,
                MouseTracker: wn,
                mergeOptions: $n,
                parseOptions: In,
                Player: Tn,
                Promise: zt,
                Deferred: Pt,
                query: nt,
                queryAll: it,
                find: ot,
                findAll: st,
                matches: ft,
                closest: mt,
                parents: gt,
                escape: wt,
                css: Oe,
                getStyles: Me,
                getStyle: Be,
                getCssVar: ze,
                propName: He,
                isTouch: Dn,
                getPos: zn
            }), Vn.data = "__uikit__", Vn.prefix = "uk-", Vn.options = {},
            function(n) {
                var e, i = n.data;

                function r(t, e) {
                    if (t)
                        for (var n in t) t[n]._connected && t[n]._callUpdate(e)
                }
                n.use = function(t) {
                    if (!t.installed) return t.call(null, this), t.installed = !0, this
                }, n.mixin = function(t, e) {
                    (e = (N(e) ? n.component(e) : e) || this).options = $n(e.options, t)
                }, n.extend = function(t) {
                    t = t || {};
                    var e = function(t) {
                        this._init(t)
                    };
                    return ((e.prototype = Object.create(this.prototype)).constructor = e).options = $n(this.options, t), e.super = this, e.extend = this.extend, e
                }, n.update = function(t, e) {
                    e = _t(e || "update"),
                        function(t) {
                            for (var e = []; t && t !== document.body && t.parentNode;) t = t.parentNode, e.unshift(t);
                            return e
                        }(t = t ? H(t) : document.body).map(function(t) {
                            return r(t[i], e)
                        }), ve(t, function(t) {
                            return r(t[i], e)
                        })
                }, Object.defineProperty(n, "container", {
                    get: function() {
                        return e || document.body
                    },
                    set: function(t) {
                        e = we(t)
                    }
                })
            }(Vn), (Ln = Vn).prototype._callHook = function(t) {
                var e = this,
                    n = this.$options[t];
                n && n.forEach(function(t) {
                    return t.call(e)
                })
            }, Ln.prototype._callConnected = function() {
                this._connected || (this._data = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate())
            }, Ln.prototype._callDisconnected = function() {
                this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1)
            }, Ln.prototype._callUpdate = function(o) {
                var s = this,
                    a = (o = _t(o || "update")).type;
                b(["update", "load", "resize"], a) && this._resetComputeds();
                var t = this.$options.update,
                    e = this._frames,
                    l = e.reads,
                    h = e.writes;
                t && t.forEach(function(t, e) {
                    var n = t.read,
                        i = t.write,
                        r = t.events;
                    ("update" === a || b(r, a)) && (n && !b(pn.reads, l[e]) && (l[e] = pn.read(function() {
                        var t = s._connected && n.call(s, s._data, o);
                        !1 === t && i ? (pn.clear(h[e]), delete h[e]) : $(t) && Y(s._data, t), delete l[e]
                    })), i && !b(pn.writes, h[e]) && (h[e] = pn.write(function() {
                        s._connected && i.call(s, s._data, o), delete h[e]
                    })))
                })
            },
            function(t) {
                var e = 0;

                function s(t, e) {
                    var n = {},
                        i = t.args;
                    void 0 === i && (i = []);
                    var r = t.props;
                    void 0 === r && (r = {});
                    var o = t.el;
                    if (!r) return n;
                    for (var s in r) {
                        var a = m(s),
                            l = et(o, a);
                        if (!B(l)) {
                            if (l = r[s] === Boolean && "" === l || d(r[s], l), "target" === a && (!l || v(l, "_"))) continue;
                            n[s] = l
                        }
                    }
                    var h = In(et(o, e), i);
                    for (var c in h) {
                        var u = g(c);
                        void 0 !== r[u] && (n[u] = d(r[u], h[c]))
                    }
                    return n
                }

                function n(i, r, o) {
                    Object.defineProperty(i, r, {
                        enumerable: !0,
                        get: function() {
                            var t = i._computeds,
                                e = i.$props,
                                n = i.$el;
                            return h(t, r) || (t[r] = o.call(i, e, n)), t[r]
                        },
                        set: function(t) {
                            i._computeds[r] = t
                        }
                    })
                }

                function f(e, n, i) {
                    $(n) || (n = {
                        name: i,
                        handler: n
                    });
                    var r, o, t = n.name,
                        s = n.el,
                        a = n.handler,
                        l = n.capture,
                        h = n.passive,
                        c = n.delegate,
                        u = n.filter,
                        d = n.self;
                    s = x(s) ? s.call(e) : s || e.$el, y(s) ? s.forEach(function(t) {
                        return f(e, Y({}, n, {
                            el: t
                        }), i)
                    }) : !s || u && !u.call(e) || (r = N(a) ? e[a] : p(a, e), a = function(t) {
                        return y(t.detail) ? r.apply(void 0, [t].concat(t.detail)) : r(t)
                    }, d && (o = a, a = function(t) {
                        if (t.target === t.currentTarget || t.target === t.current) return o.call(null, t)
                    }), e._events.push(Tt(s, t, c ? N(c) ? c : c.call(e) : null, a, _(h) ? {
                        passive: h,
                        capture: l
                    } : l)))
                }

                function i(t, e) {
                    return t.every(function(t) {
                        return !t || !h(t, e)
                    })
                }

                function d(t, e) {
                    return t === Boolean ? D(e) : t === Number ? z(e) : "list" === t ? W(e) : t ? t(e) : e
                }
                t.prototype._init = function(t) {
                    (t = t || {}).data = function(t, e) {
                        var n = t.data,
                            i = (t.el, e.args),
                            r = e.props;
                        if (void 0 === r && (r = {}), n = y(n) ? i && i.length ? n.slice(0, i.length).reduce(function(t, e, n) {
                                return $(e) ? Y(t, e) : t[i[n]] = e, t
                            }, {}) : void 0 : n)
                            for (var o in n) B(n[o]) ? delete n[o] : n[o] = r[o] ? d(r[o], n[o]) : n[o];
                        return n
                    }(t, this.constructor.options), this.$options = $n(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._frames = {
                        reads: {},
                        writes: {}
                    }, this._events = [], this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
                }, t.prototype._initData = function() {
                    var t = this.$options.data;
                    for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e]
                }, t.prototype._initMethods = function() {
                    var t = this.$options.methods;
                    if (t)
                        for (var e in t) this[e] = p(t[e], this)
                }, t.prototype._initComputeds = function() {
                    var t = this.$options.computed;
                    if (this._resetComputeds(), t)
                        for (var e in t) n(this, e, t[e])
                }, t.prototype._resetComputeds = function() {
                    this._computeds = {}
                }, t.prototype._initProps = function(t) {
                    var e;
                    for (e in this._resetComputeds(), t = t || s(this.$options, this.$name)) B(t[e]) || (this.$props[e] = t[e]);
                    var n = [this.$options.computed, this.$options.methods];
                    for (e in this.$props) e in t && i(n, e) && (this[e] = this.$props[e])
                }, t.prototype._initEvents = function() {
                    var n = this,
                        t = this.$options.events;
                    t && t.forEach(function(t) {
                        if (h(t, "handler")) f(n, t);
                        else
                            for (var e in t) f(n, t[e], e)
                    })
                }, t.prototype._unbindEvents = function() {
                    this._events.forEach(function(t) {
                        return t()
                    }), this._events = []
                }, t.prototype._initObserver = function() {
                    var n = this,
                        t = this.$options,
                        i = t.attrs,
                        e = t.props,
                        r = t.el;
                    if (!this._observer && e && !1 !== i) {
                        i = y(i) ? i : Object.keys(e), this._observer = new MutationObserver(function() {
                            var e = s(n.$options, n.$name);
                            i.some(function(t) {
                                return !B(e[t]) && e[t] !== n.$props[t]
                            }) && n.$reset()
                        });
                        var o = i.map(function(t) {
                            return m(t)
                        }).concat(this.$name);
                        this._observer.observe(r, {
                            attributes: !0,
                            attributeFilter: o.concat(o.map(function(t) {
                                return "data-" + t
                            }))
                        })
                    }
                }
            }(Vn), Wn = (jn = Vn).data, Fn = {}, jn.component = function(s, t) {
                if (!t) return $(Fn[s]) && (Fn[s] = jn.extend(Fn[s])), Fn[s];
                jn[s] = function(t, n) {
                    for (var e = arguments.length, i = Array(e); e--;) i[e] = arguments[e];
                    var r = jn.component(s);
                    return $(t) ? new r({
                        data: t
                    }) : r.options.functional ? new r({
                        data: [].concat(i)
                    }) : t && t.nodeType ? o(t) : be(t).map(o)[0];

                    function o(t) {
                        var e = jn.getComponent(t, s);
                        if (e) {
                            if (!n) return e;
                            e.$destroy()
                        }
                        return new r({
                            el: t,
                            data: n
                        })
                    }
                };
                var e = $(t) ? Y({}, t) : t.options;
                if (e.name = s, e.install && e.install(jn, e, s), jn._initialized && !e.functional) {
                    var n = m(s);
                    pn.read(function() {
                        return jn[s]("[uk-" + n + "],[data-uk-" + n + "]")
                    })
                }
                return Fn[s] = $(t) ? e : t
            }, jn.getComponents = function(t) {
                return t && t[Wn] || {}
            }, jn.getComponent = function(t, e) {
                return jn.getComponents(t)[e]
            }, jn.connect = function(t) {
                if (t[Wn])
                    for (var e in t[Wn]) t[Wn][e]._callConnected();
                for (var n = 0; n < t.attributes.length; n++) {
                    var i = Hn(t.attributes[n].name);
                    i && i in Fn && jn[i](t)
                }
            }, jn.disconnect = function(t) {
                for (var e in t[Wn]) t[Wn][e]._callDisconnected()
            },
            function(i) {
                var r = i.data;
                i.prototype.$mount = function(t) {
                    var e = this.$options.name;
                    t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, St(t, document) && this._callConnected())
                }, i.prototype.$emit = function(t) {
                    this._callUpdate(t)
                }, i.prototype.$reset = function() {
                    this._callDisconnected(), this._callConnected()
                }, i.prototype.$destroy = function(t) {
                    void 0 === t && (t = !1);
                    var e = this.$options,
                        n = e.el,
                        i = e.name;
                    n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][i], Object.keys(n[r]).length || delete n[r], t && ce(this.$el))
                }, i.prototype.$create = function(t, e, n) {
                    return i[t](e, n)
                }, i.prototype.$update = i.update, i.prototype.$getComponent = i.getComponent;
                var e = {};
                Object.defineProperties(i.prototype, {
                    $container: Object.getOwnPropertyDescriptor(i, "container"),
                    $name: {
                        get: function() {
                            var t = this.$options.name;
                            return e[t] || (e[t] = i.prefix + m(t)), e[t]
                        }
                    }
                })
            }(Vn);
        var Yn = {
                connected: function() {
                    !Se(this.$el, this.$name) && xe(this.$el, this.$name)
                }
            },
            Rn = {
                props: {
                    cls: Boolean,
                    animation: "list",
                    duration: Number,
                    origin: String,
                    transition: String,
                    queued: Boolean
                },
                data: {
                    cls: !1,
                    animation: [!1],
                    duration: 200,
                    origin: !1,
                    transition: "linear",
                    queued: !1,
                    initProps: {
                        overflow: "",
                        height: "",
                        paddingTop: "",
                        paddingBottom: "",
                        marginTop: "",
                        marginBottom: ""
                    },
                    hideProps: {
                        overflow: "hidden",
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginTop: 0,
                        marginBottom: 0
                    }
                },
                computed: {
                    hasAnimation: function(t) {
                        return !!t.animation[0]
                    },
                    hasTransition: function(t) {
                        var e = t.animation;
                        return this.hasAnimation && !0 === e[0]
                    }
                },
                methods: {
                    toggleElement: function(h, c, u) {
                        var d = this;
                        return new zt(function(t) {
                            h = j(h);
                            var e, n = function(t) {
                                    return zt.all(t.map(function(t) {
                                        return d._toggleElement(t, c, u)
                                    }))
                                },
                                i = h.filter(function(t) {
                                    return d.isToggled(t)
                                }),
                                r = h.filter(function(t) {
                                    return !b(i, t)
                                });
                            if (d.queued && B(u) && B(c) && d.hasAnimation && !(h.length < 2)) {
                                var o = document.body,
                                    s = o.scrollTop,
                                    a = i[0],
                                    l = Ue.inProgress(a) && Se(a, "uk-animation-leave") || Fe.inProgress(a) && "0px" === a.style.height;
                                e = n(i), l || (e = e.then(function() {
                                    var t = n(r);
                                    return o.scrollTop = s, t
                                }))
                            } else e = n(r.concat(i));
                            e.then(t, X)
                        })
                    },
                    toggleNow: function(e, n) {
                        var i = this;
                        return new zt(function(t) {
                            return zt.all(j(e).map(function(t) {
                                return i._toggleElement(t, n, !1)
                            })).then(t, X)
                        })
                    },
                    isToggled: function(t) {
                        var e = j(t || this.$el);
                        return this.cls ? Se(e, this.cls.split(" ")[0]) : !Q(e, "hidden")
                    },
                    updateAria: function(t) {
                        !1 === this.cls && Z(t, "aria-hidden", !this.isToggled(t))
                    },
                    _toggleElement: function(t, e, n) {
                        var i = this;
                        if (e = _(e) ? e : Ue.inProgress(t) ? Se(t, "uk-animation-leave") : Fe.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !At(t, "before" + (e ? "show" : "hide"), [this])) return zt.reject();
                        var r, o, s, a, l, h, c, u, d, f, p, m, g = (x(n) ? n : !1 !== n && this.hasAnimation ? this.hasTransition ? (c = (h = this).isToggled, u = h.duration, d = h.initProps, f = h.hideProps, p = h.transition, m = h._toggle, function(t, e) {
                            var n = Fe.inProgress(t),
                                i = t.hasChildNodes ? P(Oe(t.firstElementChild, "marginTop")) + P(Oe(t.lastElementChild, "marginBottom")) : 0,
                                r = xt(t) ? Qe(t) + (n ? 0 : i) : 0;
                            Fe.cancel(t), c(t) || m(t, !0), Qe(t, ""), pn.flush();
                            var o = Qe(t) + (n ? 0 : i);
                            return Qe(t, r), (e ? Fe.start(t, Y({}, d, {
                                overflow: "hidden",
                                height: o
                            }), Math.round(u * (1 - r / o)), p) : Fe.start(t, f, Math.round(u * (r / o)), p).then(function() {
                                return m(t, !1)
                            })).then(function() {
                                return Oe(t, d)
                            })
                        }) : (o = (r = this).animation, s = r.duration, a = r.origin, l = r._toggle, function(t, e) {
                            return Ue.cancel(t), e ? (l(t, !0), Ue.in(t, o[0], s, a)) : Ue.out(t, o[1] || o[0], s, a).then(function() {
                                return l(t, !1)
                            })
                        }) : this._toggle)(t, e);
                        At(t, e ? "show" : "hide", [this]);
                        var v = function() {
                            At(t, e ? "shown" : "hidden", [i]), i.$update(t)
                        };
                        return g ? g.then(v) : zt.resolve(v())
                    },
                    _toggle: function(t, e) {
                        var n;
                        t && (this.cls ? (n = b(this.cls, " ") || Boolean(e) !== Se(t, this.cls)) && Te(t, this.cls, b(this.cls, " ") ? void 0 : e) : (n = Boolean(e) === Q(t, "hidden")) && Z(t, "hidden", e ? null : ""), be("[autofocus]", t).some(function(t) {
                            return xt(t) && (t.focus() || !0)
                        }), this.updateAria(t), n && this.$update(t))
                    }
                }
            };
        var qn = {
                mixins: [Yn, Rn],
                props: {
                    targets: String,
                    active: null,
                    collapsible: Boolean,
                    multiple: Boolean,
                    toggle: String,
                    content: String,
                    transition: String
                },
                data: {
                    targets: "> *",
                    active: !1,
                    animation: [!0],
                    collapsible: !0,
                    multiple: !1,
                    clsOpen: "uk-open",
                    toggle: "> .uk-accordion-title",
                    content: "> .uk-accordion-content",
                    transition: "ease"
                },
                computed: {
                    items: function(t, e) {
                        return be(t.targets, e)
                    }
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.targets + " " + this.$props.toggle
                    },
                    handler: function(t) {
                        t.preventDefault(), this.toggle(ne(be(this.targets + " " + this.$props.toggle, this.$el), t.current))
                    }
                }],
                connected: function() {
                    if (!1 !== this.active) {
                        var t = this.items[Number(this.active)];
                        t && !Se(t, this.clsOpen) && this.toggle(t, !1)
                    }
                },
                update: function() {
                    var e = this;
                    this.items.forEach(function(t) {
                        return e._toggle(we(e.content, t), Se(t, e.clsOpen))
                    });
                    var t = !this.collapsible && !Se(this.items, this.clsOpen) && this.items[0];
                    t && this.toggle(t, !1)
                },
                methods: {
                    toggle: function(r, o) {
                        var s = this,
                            t = ie(r, this.items),
                            a = It(this.items, "." + this.clsOpen);
                        (r = this.items[t]) && [r].concat(!this.multiple && !b(a, r) && a || []).forEach(function(t) {
                            var e = t === r,
                                n = e && !Se(t, s.clsOpen);
                            if (n || !e || s.collapsible || !(a.length < 2)) {
                                Te(t, s.clsOpen, n);
                                var i = t._wrapper ? t._wrapper.firstElementChild : we(s.content, t);
                                t._wrapper || (t._wrapper = ue(i, "<div>"), Z(t._wrapper, "hidden", n ? "" : null)), s._toggle(i, !0), s.toggleElement(t._wrapper, n, o).then(function() {
                                    Se(t, s.clsOpen) === n && (n || s._toggle(i, !1), t._wrapper = null, fe(i))
                                })
                            }
                        })
                    }
                }
            },
            Un = {
                mixins: [Yn, Rn],
                args: "animation",
                props: {
                    close: String
                },
                data: {
                    animation: [!0],
                    selClose: ".uk-alert-close",
                    duration: 150,
                    hideProps: Y({
                        opacity: 0
                    }, Rn.data.hideProps)
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.selClose
                    },
                    handler: function(t) {
                        t.preventDefault(), this.close()
                    }
                }],
                methods: {
                    close: function() {
                        var t = this;
                        this.toggleElement(this.$el).then(function() {
                            return t.$destroy(!0)
                        })
                    }
                }
            };

        function Xn(o) {
            ee(function() {
                o.update();
                var n = 0,
                    i = 0;
                if (Tt(window, "load resize", function(t) {
                        return o.update(null, t)
                    }), Tt(window, "scroll", function(t) {
                        var e = t.target;
                        t.dir = n <= window.pageYOffset ? "down" : "up", t.pageYOffset = n = window.pageYOffset, o.update(1 !== e.nodeType ? document.body : e, t)
                    }, {
                        passive: !0,
                        capture: !0
                    }), Tt(document, "loadedmetadata load", function(t) {
                        var e = t.target;
                        return o.update(e, "load")
                    }, !0), Tt(document, "animationstart", function(t) {
                        var e = t.target;
                        (Oe(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, Oe(document.body, "overflowX", "hidden"), setTimeout(function() {
                            --i || Oe(document.body, "overflowX", "")
                        }, F(Oe(e, "animationDuration")) + 100))
                    }, !0), Xt) {
                    var r = "uk-hover";
                    Tt(document, "tap", function(t) {
                        var e = t.target;
                        return be("." + r).forEach(function(t) {
                            return !St(e, t) && ke(t, r)
                        })
                    }), Object.defineProperty(o, "hoverSelector", {
                        set: function(t) {
                            Tt(document, "tap", t, function(t) {
                                return xe(t.current, r)
                            })
                        }
                    }), o.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]"
                }
            })
        }
        var Kn, Gn, Jn = {
                args: "autoplay",
                props: {
                    automute: Boolean,
                    autoplay: Boolean
                },
                data: {
                    automute: !1,
                    autoplay: !0
                },
                computed: {
                    inView: function(t) {
                        return "inview" === t.autoplay
                    }
                },
                connected: function() {
                    this.inView && !Q(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Tn(this.$el), this.automute && this.player.mute()
                },
                update: {
                    read: function(t, e) {
                        var n = e.type;
                        return !(!this.player || !("scroll" !== n && "resize" !== n || this.inView)) && {
                            visible: xt(this.$el) && "hidden" !== Oe(this.$el, "visibility"),
                            inView: this.inView && ln(this.$el)
                        }
                    },
                    write: function(t) {
                        var e = t.visible,
                            n = t.inView;
                        !e || this.inView && !n ? this.player.pause() : (!0 === this.autoplay || this.inView && n) && this.player.play()
                    },
                    events: ["load", "resize", "scroll"]
                }
            },
            Zn = {
                mixins: [Yn, Jn],
                props: {
                    width: Number,
                    height: Number
                },
                data: {
                    automute: !0
                },
                update: {
                    read: function() {
                        var t = this.$el;
                        if (!xt(t)) return !1;
                        var e = t.parentNode;
                        return {
                            height: e.offsetHeight,
                            width: e.offsetWidth
                        }
                    },
                    write: function(t) {
                        var e = t.height,
                            n = t.width,
                            i = this.$el,
                            r = this.width || i.naturalWidth || i.videoWidth || i.clientWidth,
                            o = this.height || i.naturalHeight || i.videoHeight || i.clientHeight;
                        r && o && Oe(i, J.cover({
                            width: r,
                            height: o
                        }, {
                            width: n + (n % 2 ? 1 : 0),
                            height: e + (e % 2 ? 1 : 0)
                        }))
                    },
                    events: ["load", "resize"]
                }
            },
            Qn = {
                props: {
                    pos: String,
                    offset: null,
                    flip: Boolean,
                    clsPos: String
                },
                data: {
                    pos: "bottom-" + (Rt ? "right" : "left"),
                    flip: !0,
                    offset: !1,
                    clsPos: ""
                },
                computed: {
                    pos: function(t) {
                        var e = t.pos;
                        return (e + (b(e, "-") ? "" : "-center")).split("-")
                    },
                    dir: function() {
                        return this.pos[0]
                    },
                    align: function() {
                        return this.pos[1]
                    }
                },
                methods: {
                    positionAt: function(t, e, n) {
                        var i;
                        $e(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), Oe(t, {
                            top: "",
                            left: ""
                        });
                        var r = this.offset,
                            o = this.getAxis();
                        r = M(r) ? r : (i = we(r)) ? Ge(i)["x" === o ? "left" : "top"] - Ge(e)["x" === o ? "right" : "bottom"] : 0;
                        var s = Ke(t, e, "x" === o ? an(this.dir) + " " + this.align : this.align + " " + an(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target,
                            a = s.x,
                            l = s.y;
                        this.dir = "x" === o ? a : l, this.align = "x" === o ? l : a, Te(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                    },
                    getAxis: function() {
                        return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                    }
                }
            },
            ti = {
                mixins: [Qn, Rn],
                args: "pos",
                props: {
                    mode: "list",
                    toggle: Boolean,
                    boundary: Boolean,
                    boundaryAlign: Boolean,
                    delayShow: Number,
                    delayHide: Number,
                    clsDrop: String
                },
                data: {
                    mode: ["click", "hover"],
                    toggle: "- *",
                    boundary: window,
                    boundaryAlign: !1,
                    delayShow: 0,
                    delayHide: 800,
                    clsDrop: !1,
                    hoverIdle: 200,
                    animation: ["uk-animation-fade"],
                    cls: "uk-open"
                },
                computed: {
                    boundary: function(t, e) {
                        return nt(t.boundary, e)
                    },
                    clsDrop: function(t) {
                        return t.clsDrop || "uk-" + this.$options.name
                    },
                    clsPos: function() {
                        return this.clsDrop
                    }
                },
                created: function() {
                    this.tracker = new wn
                },
                connected: function() {
                    xe(this.$el, this.clsDrop);
                    var t = this.$props.toggle;
                    this.toggle = t && this.$create("toggle", nt(t, this.$el), {
                        target: this.$el,
                        mode: this.mode
                    }), this.updateAria(this.$el)
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return "." + this.clsDrop + "-close"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide(!1)
                    }
                }, {
                    name: "click",
                    delegate: function() {
                        return 'a[href^="#"]'
                    },
                    handler: function(t) {
                        if (!t.defaultPrevented) {
                            var e = t.target.hash;
                            e || t.preventDefault(), e && St(e, this.$el) || this.hide(!1)
                        }
                    }
                }, {
                    name: "beforescroll",
                    handler: function() {
                        this.hide(!1)
                    }
                }, {
                    name: "toggle",
                    self: !0,
                    handler: function(t, e) {
                        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1)
                    }
                }, {
                    name: Zt,
                    filter: function() {
                        return b(this.mode, "hover")
                    },
                    handler: function(t) {
                        Dn(t) || (Kn && Kn !== this && Kn.toggle && b(Kn.toggle.mode, "hover") && !St(t.target, Kn.toggle.$el) && !G({
                            x: t.pageX,
                            y: t.pageY
                        }, Ge(Kn.$el)) && Kn.hide(!1), t.preventDefault(), this.show(this.toggle))
                    }
                }, {
                    name: "toggleshow",
                    handler: function(t, e) {
                        e && !b(e.target, this.$el) || (t.preventDefault(), this.show(e || this.toggle))
                    }
                }, {
                    name: "togglehide " + Qt,
                    handler: function(t, e) {
                        Dn(t) || e && !b(e.target, this.$el) || (t.preventDefault(), this.toggle && b(this.toggle.mode, "hover") && this.hide())
                    }
                }, {
                    name: "beforeshow",
                    self: !0,
                    handler: function() {
                        this.clearTimers(), Ue.cancel(this.$el), this.position()
                    }
                }, {
                    name: "show",
                    self: !0,
                    handler: function() {
                        this.tracker.init(), this.toggle && (xe(this.toggle.$el, this.cls), Z(this.toggle.$el, "aria-expanded", "true")),
                            function() {
                                if (Gn) return;
                                Gn = !0, Tt(document, "click", function(t) {
                                    var e, n = t.target,
                                        i = t.defaultPrevented;
                                    if (!i)
                                        for (; Kn && Kn !== e && !St(n, Kn.$el) && (!Kn.toggle || !St(n, Kn.toggle.$el));)(e = Kn).hide(!1)
                                })
                            }()
                    }
                }, {
                    name: "beforehide",
                    self: !0,
                    handler: function() {
                        this.clearTimers()
                    }
                }, {
                    name: "hide",
                    handler: function(t) {
                        var e = t.target;
                        this.$el === e ? (Kn = this.isActive() ? null : Kn, this.toggle && (ke(this.toggle.$el, this.cls), Z(this.toggle.$el, "aria-expanded", "false"), this.toggle.$el.blur(), be("a, button", this.toggle.$el).forEach(function(t) {
                            return t.blur()
                        })), this.tracker.cancel()) : Kn = null === Kn && St(e, this.$el) && this.isToggled() ? this : Kn
                    }
                }],
                update: {
                    write: function() {
                        this.isToggled() && !Ue.inProgress(this.$el) && this.position()
                    },
                    events: ["resize"]
                },
                methods: {
                    show: function(e, n) {
                        var i = this;
                        void 0 === n && (n = !0);
                        var r = function() {
                                return !i.isToggled() && i.toggleElement(i.$el, !0)
                            },
                            t = function() {
                                if (i.toggle = e || i.toggle, i.clearTimers(), !i.isActive())
                                    if (n && Kn && Kn !== i && Kn.isDelaying) i.showTimer = setTimeout(i.show, 10);
                                    else {
                                        if (i.isParentOf(Kn)) {
                                            if (!Kn.hideTimer) return;
                                            Kn.hide(!1)
                                        } else if (Kn && !i.isChildOf(Kn) && !i.isParentOf(Kn))
                                            for (var t; Kn && Kn !== t && !i.isChildOf(Kn);)(t = Kn).hide(!1);
                                        n && i.delayShow ? i.showTimer = setTimeout(r, i.delayShow) : r(), Kn = i
                                    }
                            };
                        e && this.toggle && e.$el !== this.toggle.$el ? (Ct(this.$el, "hide", t), this.hide(!1)) : t()
                    },
                    hide: function(t) {
                        var e = this;
                        void 0 === t && (t = !0);
                        var n = function() {
                            return e.toggleNow(e.$el, !1)
                        };
                        this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n()
                    },
                    clearTimers: function() {
                        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                    },
                    isActive: function() {
                        return Kn === this
                    },
                    isChildOf: function(t) {
                        return t && t !== this && St(this.$el, t.$el)
                    },
                    isParentOf: function(t) {
                        return t && t !== this && St(t.$el, this.$el)
                    },
                    position: function() {
                        $e(this.$el, this.clsDrop + "-(stack|boundary)"), Oe(this.$el, {
                            top: "",
                            left: "",
                            display: "block"
                        }), Te(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                        var t = Ge(this.boundary),
                            e = this.boundaryAlign ? t : Ge(this.toggle.$el);
                        if ("justify" === this.align) {
                            var n = "y" === this.getAxis() ? "width" : "height";
                            Oe(this.$el, n, e[n])
                        } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && xe(this.$el, this.clsDrop + "-stack");
                        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), Oe(this.$el, "display", "")
                    }
                }
            };
        var ei = {
                extends: ti
            },
            ni = {
                mixins: [Yn],
                args: "target",
                props: {
                    target: Boolean
                },
                data: {
                    target: !1
                },
                computed: {
                    input: function(t, e) {
                        return we(kt, e)
                    },
                    state: function() {
                        return this.input.nextElementSibling
                    },
                    target: function(t, e) {
                        var n = t.target;
                        return n && (!0 === n && this.input.parentNode === e && this.input.nextElementSibling || nt(n, e))
                    }
                },
                update: function() {
                    var t = this.target,
                        e = this.input;
                    if (t) {
                        var n, i = $t(t) ? "value" : "textContent",
                            r = t[i],
                            o = e.files && e.files[0] ? e.files[0].name : ft(e, "select") && (n = be("option", e).filter(function(t) {
                                return t.selected
                            })[0]) ? n.textContent : e.value;
                        r !== o && (t[i] = o)
                    }
                },
                events: [{
                    name: "focusin focusout mouseenter mouseleave",
                    delegate: kt,
                    handler: function(t) {
                        var e = t.type;
                        t.current === this.input && Te(this.state, "uk-" + (b(e, "focus") ? "focus" : "hover"), b(["focusin", "mouseenter"], e))
                    }
                }, {
                    name: "change",
                    handler: function() {
                        this.$emit()
                    }
                }]
            },
            ii = {
                update: {
                    read: function(t) {
                        var e = ln(this.$el);
                        if (!e || t.isInView === e) return !1;
                        t.isInView = e
                    },
                    write: function() {
                        this.$el.src = this.$el.src
                    },
                    events: ["scroll", "load", "resize"]
                }
            },
            ri = {
                props: {
                    margin: String,
                    firstColumn: Boolean
                },
                data: {
                    margin: "uk-margin-small-top",
                    firstColumn: "uk-first-column"
                },
                update: {
                    read: function(t) {
                        var e = this.$el.children;
                        if (!e.length || !xt(this.$el)) return t.rows = [
                            []
                        ];
                        t.rows = oi(e), t.stacks = !t.rows.some(function(t) {
                            return 1 < t.length
                        })
                    },
                    write: function(t) {
                        var i = this;
                        t.rows.forEach(function(t, n) {
                            return t.forEach(function(t, e) {
                                Te(t, i.margin, 0 !== n), Te(t, i.firstColumn, 0 === e)
                            })
                        })
                    },
                    events: ["load", "resize"]
                }
            };

        function oi(t) {
            for (var e = [
                    []
                ], n = 0; n < t.length; n++) {
                var i = t[n],
                    r = si(i);
                if (r.height)
                    for (var o = e.length - 1; 0 <= o; o--) {
                        var s = e[o];
                        if (!s[0]) {
                            s.push(i);
                            break
                        }
                        var a = void 0;
                        if (a = s[0].offsetParent === i.offsetParent ? si(s[0]) : (r = si(i, !0), si(s[0], !0)), r.top >= a.bottom - 1) {
                            e.push([i]);
                            break
                        }
                        if (r.bottom > a.top) {
                            if (r.left < a.left && !Rt) {
                                s.unshift(i);
                                break
                            }
                            s.push(i);
                            break
                        }
                        if (0 === o) {
                            e.unshift([i]);
                            break
                        }
                    }
            }
            return e
        }

        function si(t, e) {
            var n;
            void 0 === e && (e = !1);
            var i = t.offsetTop,
                r = t.offsetLeft,
                o = t.offsetHeight;
            return e && (i = (n = un(t))[0], r = n[1]), {
                top: i,
                left: r,
                height: o,
                bottom: i + o
            }
        }
        var ai = {
            extends: ri,
            mixins: [Yn],
            name: "grid",
            props: {
                masonry: Boolean,
                parallax: Number
            },
            data: {
                margin: "uk-grid-margin",
                clsStack: "uk-grid-stack",
                masonry: !1,
                parallax: 0
            },
            computed: {
                length: function(t, e) {
                    return e.children.length
                },
                parallax: function(t) {
                    var e = t.parallax;
                    return e && this.length ? Math.abs(e) : ""
                }
            },
            connected: function() {
                this.masonry && xe(this.$el, "uk-flex-top uk-flex-wrap-top")
            },
            update: [{
                read: function(t) {
                    var r = t.rows;
                    (this.masonry || this.parallax) && (r = r.map(function(t) {
                        return q(t, "offsetLeft")
                    }));
                    var e, n, i, o, s, a = r.some(function(t) {
                            return t.some(function(t) {
                                return "static" === t.style.position
                            })
                        }),
                        l = !1,
                        h = "";
                    if (this.masonry && this.length) {
                        var c = 0;
                        l = r.reduce(function(n, t, i) {
                            return n[i] = t.map(function(t, e) {
                                return 0 === i ? 0 : P(n[i - 1][e]) + (c - P(r[i - 1][e] && r[i - 1][e].offsetHeight))
                            }), c = t.reduce(function(t, e) {
                                return Math.max(t, e.offsetHeight)
                            }, 0), n
                        }, []), s = r, h = Math.max.apply(Math, s.reduce(function(n, t) {
                            return t.forEach(function(t, e) {
                                return n[e] = (n[e] || 0) + t.offsetHeight
                            }), n
                        }, [])) + (e = this.$el, n = this.margin, i = j(e.children), P((o = i.filter(function(t) {
                            return Se(t, n)
                        })[0]) ? Oe(o, "marginTop") : Oe(i[0], "paddingLeft")) * (r.length - 1))
                    }
                    return {
                        rows: r,
                        translates: l,
                        height: !!a && h
                    }
                },
                write: function(t) {
                    var e = t.stacks,
                        n = t.height;
                    Te(this.$el, this.clsStack, e), Oe(this.$el, "paddingBottom", this.parallax), !1 !== n && Oe(this.$el, "height", n)
                },
                events: ["load", "resize"]
            }, {
                read: function(t) {
                    var e = t.height;
                    return {
                        scrolled: !!this.parallax && hn(this.$el, e ? e - Qe(this.$el) : 0) * this.parallax
                    }
                },
                write: function(t) {
                    var e = t.rows,
                        i = t.scrolled,
                        r = t.translates;
                    (!1 !== i || r) && e.forEach(function(t, n) {
                        return t.forEach(function(t, e) {
                            return Oe(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? e % 2 ? i : i / 8 : 0)) + "px)" : "")
                        })
                    })
                },
                events: ["scroll", "load", "resize"]
            }]
        };
        var li = Yt ? {
                data: {
                    selMinHeight: !1,
                    forceHeight: !1
                },
                computed: {
                    elements: function(t, e) {
                        var n = t.selMinHeight;
                        return n ? be(n, e) : [e]
                    }
                },
                update: [{
                    read: function() {
                        Oe(this.elements, "height", "")
                    },
                    order: -5,
                    events: ["load", "resize"]
                }, {
                    write: function() {
                        var n = this;
                        this.elements.forEach(function(t) {
                            var e = P(Oe(t, "minHeight"));
                            e && (n.forceHeight || Math.round(e) >= Qe(t)) && Oe(t, "height", e)
                        })
                    },
                    order: 5,
                    events: ["load", "resize"]
                }]
            } : {},
            hi = {
                mixins: [li],
                args: "target",
                props: {
                    target: String,
                    row: Boolean
                },
                data: {
                    target: "> *",
                    row: !0,
                    forceHeight: !0
                },
                computed: {
                    elements: function(t, e) {
                        return be(t.target, e)
                    }
                },
                update: {
                    read: function() {
                        return {
                            rows: (this.row ? oi(this.elements) : [this.elements]).map(ci)
                        }
                    },
                    write: function(t) {
                        t.rows.forEach(function(t) {
                            var n = t.heights;
                            return t.elements.forEach(function(t, e) {
                                return Oe(t, "minHeight", n[e])
                            })
                        })
                    },
                    events: ["load", "resize"]
                }
            };

        function ci(t) {
            var e;
            if (t.length < 2) return {
                heights: [""],
                elements: t
            };
            var n = ui(t),
                i = n.heights,
                r = n.max,
                o = t.some(function(t) {
                    return t.style.minHeight
                }),
                s = t.some(function(t, e) {
                    return !t.style.minHeight && i[e] < r
                });
            return o && s && (Oe(t, "minHeight", ""), e = ui(t), i = e.heights, r = e.max), {
                heights: i = t.map(function(t, e) {
                    return i[e] === r && P(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r
                }),
                elements: t
            }
        }

        function ui(t) {
            var e = t.map(function(t) {
                return Ge(t).height - nn("height", t, "content-box")
            });
            return {
                heights: e,
                max: Math.max.apply(null, e)
            }
        }
        var di = {
            mixins: [li],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            update: {
                read: function() {
                    var t = "",
                        e = nn("height", this.$el, "content-box");
                    if (this.expand) t = Qe(window) - (fi(document.documentElement) - fi(this.$el)) - e || "";
                    else {
                        if (t = "calc(100vh", this.offsetTop) {
                            var n = Ge(this.$el).top;
                            t += n < Qe(window) / 2 ? " - " + n + "px" : ""
                        }!0 === this.offsetBottom ? t += " - " + fi(this.$el.nextElementSibling) + "px" : M(this.offsetBottom) ? t += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? t += " - " + P(this.offsetBottom) + "px" : N(this.offsetBottom) && (t += " - " + fi(nt(this.offsetBottom, this.$el)) + "px"), t += (e ? " - " + e + "px" : "") + ")"
                    }
                    return {
                        minHeight: t
                    }
                },
                write: function(t) {
                    var e = t.minHeight;
                    Oe(this.$el, {
                        minHeight: e
                    }), this.minHeight && P(Oe(this.$el, "minHeight")) < this.minHeight && Oe(this.$el, "minHeight", this.minHeight)
                },
                events: ["load", "resize"]
            }
        };

        function fi(t) {
            return t && t.offsetHeight || 0
        }
        var pi = {},
            mi = {
                args: "src",
                props: {
                    id: String,
                    icon: String,
                    src: String,
                    style: String,
                    width: Number,
                    height: Number,
                    ratio: Number,
                    class: String
                },
                data: {
                    ratio: 1,
                    id: !1,
                    exclude: ["ratio", "src", "icon"],
                    class: ""
                },
                connected: function() {
                    var t, a = this;
                    if (this.class += " uk-svg", !this.icon && b(this.src, "#")) {
                        var e = this.src.split("#");
                        1 < e.length && (t = e, this.src = t[0], this.icon = t[1])
                    }
                    this.svg = this.getSvg().then(function(t) {
                        var e;
                        if (!(e = N(t) ? (a.icon && b(t, "<symbol") && (t = function(t, e) {
                                if (!vi[t]) {
                                    var n;
                                    for (vi[t] = {}; n = gi.exec(t);) vi[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>";
                                    gi.lastIndex = 0
                                }
                                return vi[t][e]
                            }(t, a.icon) || t), we(t.substr(t.indexOf("<svg")))) : t.cloneNode(!0))) return zt.reject("SVG not found.");
                        var n = Z(e, "viewBox");
                        for (var i in n && (n = n.split(" "), a.width = a.$props.width || n[2], a.height = a.$props.height || n[3]), a.width *= a.ratio, a.height *= a.ratio, a.$options.props) a[i] && !b(a.exclude, i) && Z(e, i, a[i]);
                        a.id || tt(e, "id"), a.width && !a.height && tt(e, "height"), a.height && !a.width && tt(e, "width");
                        var r = a.$el;
                        if (yt(r) || "CANVAS" === r.tagName) {
                            Z(r, {
                                hidden: !0,
                                id: null
                            });
                            var o = r.nextElementSibling;
                            o && e.isEqualNode(o) ? e = o : le(r, e)
                        } else {
                            var s = r.lastElementChild;
                            s && e.isEqualNode(s) ? e = s : se(r, e)
                        }
                        return a.svgEl = e
                    }, X)
                },
                disconnected: function() {
                    var e = this;
                    yt(this.$el) && Z(this.$el, {
                        hidden: null,
                        id: this.id || null
                    }), this.svg && this.svg.then(function(t) {
                        return (!e._connected || t !== e.svgEl) && ce(t)
                    }, X), this.svg = this.svgEl = null
                },
                methods: {
                    getSvg: function() {
                        var n = this;
                        return this.src ? (pi[this.src] || (pi[this.src] = new zt(function(e, t) {
                            v(n.src, "data:") ? e(decodeURIComponent(n.src.split(",")[1])) : Ft(n.src).then(function(t) {
                                return e(t.response)
                            }, function() {
                                return t("SVG not found.")
                            })
                        })), pi[this.src]) : zt.reject()
                    }
                }
            },
            gi = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
            vi = {};
        var wi = {},
            bi = {
                spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
                totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
                marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
                "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
                "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
                "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
                "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
                "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
                "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
                "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
                "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
                "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
                "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
                "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
                "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
            },
            yi = {
                install: function(r) {
                    r.icon.add = function(t, e) {
                        var n, i = N(t) ? ((n = {})[t] = e, n) : t;
                        R(i, function(t, e) {
                            bi[e] = t, delete wi[e]
                        }), r._initialized && ve(document.body, function(t) {
                            return R(r.getComponents(t), function(t) {
                                return t.$options.isIcon && t.icon in i && t.$reset()
                            })
                        })
                    }
                },
                attrs: ["icon", "ratio"],
                mixins: [Yn, mi],
                args: "icon",
                props: ["icon"],
                data: {
                    exclude: ["id", "style", "class", "src", "icon", "ratio"]
                },
                isIcon: !0,
                connected: function() {
                    xe(this.$el, "uk-icon")
                },
                methods: {
                    getSvg: function() {
                        var t, e = function(t) {
                            if (!bi[t]) return null;
                            wi[t] || (wi[t] = we(bi[t].trim()));
                            return wi[t]
                        }((t = this.icon, Rt ? V(V(t, "left", "right"), "previous", "next") : t));
                        return e ? zt.resolve(e) : zt.reject("Icon not found.")
                    }
                }
            },
            xi = {
                extends: yi,
                data: function(t) {
                    return {
                        icon: m(t.constructor.options.name)
                    }
                }
            },
            ki = {
                extends: xi,
                connected: function() {
                    xe(this.$el, "uk-slidenav")
                },
                computed: {
                    icon: function(t, e) {
                        var n = t.icon;
                        return Se(e, "uk-slidenav-large") ? n + "-large" : n
                    }
                }
            },
            $i = {
                extends: xi,
                computed: {
                    icon: function(t, e) {
                        var n = t.icon;
                        return Se(e, "uk-search-icon") && gt(e, ".uk-search-large").length ? "search-large" : gt(e, ".uk-search-navbar").length ? "search-navbar" : n
                    }
                }
            },
            Ii = {
                extends: xi,
                computed: {
                    icon: function() {
                        return "close-" + (Se(this.$el, "uk-close-large") ? "large" : "icon")
                    }
                }
            },
            Si = {
                extends: xi,
                connected: function() {
                    var e = this;
                    this.svg.then(function(t) {
                        return 1 !== e.ratio && Oe(we("circle", t), "strokeWidth", 1 / e.ratio)
                    }, X)
                }
            };
        var Ti = {
            props: {
                dataSrc: String,
                dataSrcset: Boolean,
                sizes: String,
                width: Number,
                height: Number,
                offsetTop: String,
                offsetLeft: String,
                target: String
            },
            data: {
                dataSrc: "",
                dataSrcset: !1,
                sizes: !1,
                width: !1,
                height: !1,
                offsetTop: "50vh",
                offsetLeft: 0,
                target: !1
            },
            computed: {
                cacheKey: function(t) {
                    var e = t.dataSrc;
                    return this.$name + "." + e
                },
                width: function(t) {
                    var e = t.width,
                        n = t.dataWidth;
                    return e || n
                },
                height: function(t) {
                    var e = t.height,
                        n = t.dataHeight;
                    return e || n
                },
                sizes: function(t) {
                    var e = t.sizes,
                        n = t.dataSizes;
                    return e || n
                },
                isImg: function(t, e) {
                    return Bi(e)
                },
                target: function(t) {
                    var e = t.target;
                    return [this.$el].concat(it(e, this.$el))
                },
                offsetTop: function(t) {
                    return Ni(t.offsetTop, "height")
                },
                offsetLeft: function(t) {
                    return Ni(t.offsetLeft, "width")
                }
            },
            connected: function() {
                zi[this.cacheKey] ? Ei(this.$el, zi[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Ei(this.$el, function(t, e, n) {
                    var i;
                    if (n) {
                        for (var r; r = Ci.exec(n);)
                            if (!r[1] || window.matchMedia(r[1]).matches) {
                                o = r[2], r = v(o, "calc") ? o.substring(5, o.length - 1).replace(Ai, function(t) {
                                    return Ni(t)
                                }).replace(/ /g, "").match(_i).reduce(function(t, e) {
                                    return t + +e
                                }, 0) : o;
                                break
                            }
                        Ci.lastIndex = 0, i = J.ratio({
                            width: t,
                            height: e
                        }, "width", Ni(r || "100vw")), t = i.width, e = i.height
                    }
                    var o;
                    return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
                }(this.width, this.height, this.sizes))
            },
            update: {
                read: function(t) {
                    var e = this,
                        n = t.update,
                        i = t.image;
                    if (n) {
                        if (!i && this.target.some(function(t) {
                                return ln(t, e.offsetTop, e.offsetLeft, !0)
                            })) return {
                            image: Vt(this.dataSrc, this.dataSrcset, this.sizes).then(function(t) {
                                return Ei(e.$el, Di(t), t.srcset, t.sizes), zi[e.cacheKey] = Di(t), t
                            }, X)
                        };
                        !this.isImg && i && i.then(function(t) {
                            return t && Ei(e.$el, Di(t))
                        })
                    }
                },
                write: function(t) {
                    if (!t.update) return this.$emit(), t.update = !0
                },
                events: ["scroll", "load", "resize"]
            }
        };

        function Ei(t, e, n, i) {
            if (Bi(t)) i && (t.sizes = i), n && (t.srcset = n), e && (t.src = e);
            else if (e) {
                !b(t.style.backgroundImage, e) && (Oe(t, "backgroundImage", "url(" + e + ")"), At(t, _t("load", !1)))
            }
        }
        var Ci = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
        var Ai = /\d+(?:\w+|%)/g,
            _i = /[+-]?(\d+)/g;

        function Ni(t, e, n) {
            return void 0 === e && (e = "width"), void 0 === n && (n = window), M(t) ? +t : u(t, "vw") ? Mi(n, "width", t) : u(t, "vh") ? Mi(n, "height", t) : u(t, "%") ? Mi(n, e, t) : P(t)
        }
        var Oi = {
            height: Qe,
            width: tn
        };

        function Mi(t, e, n) {
            return Oi[e](t) * P(n) / 100
        }

        function Bi(t) {
            return "IMG" === t.tagName
        }

        function Di(t) {
            return t.currentSrc || t.src
        }
        var zi, Pi = "__test__";
        try {
            (zi = window.sessionStorage || {})[Pi] = 1, delete zi[Pi]
        } catch (t) {
            zi = {}
        }
        var Hi = {
            props: {
                media: Boolean
            },
            data: {
                media: !1
            },
            computed: {
                matchMedia: function() {
                    var t = function(t) {
                        if (N(t))
                            if ("@" === t[0]) {
                                var e = "breakpoint-" + t.substr(1);
                                t = P(ze(e))
                            } else if (isNaN(t)) return t;
                        return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                    }(this.media);
                    return !t || window.matchMedia(t).matches
                }
            }
        };
        var Li, ji, Wi = {
                mixins: [Yn, Hi],
                props: {
                    fill: String
                },
                data: {
                    fill: "",
                    clsWrapper: "uk-leader-fill",
                    clsHide: "uk-leader-hide",
                    attrFill: "data-fill"
                },
                computed: {
                    fill: function(t) {
                        return t.fill || ze("leader-fill-content")
                    }
                },
                connected: function() {
                    var t;
                    t = de(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]
                },
                disconnected: function() {
                    fe(this.wrapper.childNodes)
                },
                update: {
                    read: function(t) {
                        var e = t.changed,
                            n = t.width,
                            i = n;
                        return {
                            width: n = Math.floor(this.$el.offsetWidth / 2),
                            changed: e || i !== n,
                            hide: !this.matchMedia
                        }
                    },
                    write: function(t) {
                        Te(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, Z(this.wrapper, this.attrFill, new Array(t.width).join(this.fill)))
                    },
                    events: ["load", "resize"]
                }
            },
            Fi = {
                props: {
                    container: Boolean
                },
                data: {
                    container: !0
                },
                computed: {
                    container: function(t) {
                        var e = t.container;
                        return !0 === e && this.$container || e && we(e)
                    }
                }
            },
            Vi = {
                mixins: [Yn, Fi, Rn],
                props: {
                    selPanel: String,
                    selClose: String,
                    escClose: Boolean,
                    bgClose: Boolean,
                    stack: Boolean
                },
                data: {
                    cls: "uk-open",
                    escClose: !0,
                    bgClose: !0,
                    overlay: !0,
                    stack: !1
                },
                computed: {
                    panel: function(t, e) {
                        return we(t.selPanel, e)
                    },
                    transitionElement: function() {
                        return this.panel
                    },
                    bgClose: function(t) {
                        return t.bgClose && this.panel
                    }
                },
                beforeDisconnect: function() {
                    this.isToggled() && this.toggleNow(this.$el, !1)
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.selClose
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide()
                    }
                }, {
                    name: "toggle",
                    self: !0,
                    handler: function(t) {
                        t.defaultPrevented || (t.preventDefault(), this.toggle())
                    }
                }, {
                    name: "beforeshow",
                    self: !0,
                    handler: function(t) {
                        var e = Li && Li !== this && Li;
                        if (Li = this, e) {
                            if (!this.stack) return e.hide().then(this.show), void t.preventDefault();
                            this.prev = e
                        }! function() {
                            if (ji) return;
                            ji = [Tt(document, "click", function(t) {
                                var e = t.target,
                                    n = t.defaultPrevented;
                                !Li || !Li.bgClose || n || Li.overlay && !St(e, Li.$el) || St(e, Li.panel) || Li.hide()
                            }), Tt(document, "keydown", function(t) {
                                27 === t.keyCode && Li && Li.escClose && (t.preventDefault(), Li.hide())
                            })]
                        }()
                    }
                }, {
                    name: "beforehide",
                    self: !0,
                    handler: function() {
                        (Li = Li && Li !== this && Li || this.prev) || (ji && ji.forEach(function(t) {
                            return t()
                        }), ji = null)
                    }
                }, {
                    name: "show",
                    self: !0,
                    handler: function() {
                        Se(document.documentElement, this.clsPage) || (this.scrollbarWidth = tn(window) - tn(document), Oe(document.body, "overflowY", this.scrollbarWidth && this.overlay ? "scroll" : "")), xe(document.documentElement, this.clsPage)
                    }
                }, {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        for (var t, e = this.prev; e;) {
                            if (e.clsPage === this.clsPage) {
                                t = !0;
                                break
                            }
                            e = e.prev
                        }
                        t || ke(document.documentElement, this.clsPage), !this.prev && Oe(document.body, "overflowY", "")
                    }
                }],
                methods: {
                    toggle: function() {
                        return this.isToggled() ? this.hide() : this.show()
                    },
                    show: function() {
                        return this.isToggled() ? zt.resolve() : (this.container && this.$el.parentNode !== this.container && (se(this.container, this.$el), this._callConnected()), this.toggleElement(this.$el, !0, Yi(this)))
                    },
                    hide: function() {
                        return this.isToggled() ? this.toggleElement(this.$el, !1, Yi(this)) : zt.resolve()
                    },
                    getActive: function() {
                        return Li
                    }
                }
            };

        function Yi(t) {
            var i = t.transitionElement,
                r = t._toggle;
            return function(e, n) {
                return new zt(function(t) {
                    return requestAnimationFrame(function() {
                        r(e, n), F(Oe(i, "transitionDuration")) ? Ct(i, "transitionend", t, !1, function(t) {
                            return t.target === i
                        }) : t()
                    })
                })
            }
        }
        var Ri = {
            install: function(a) {
                a.modal.dialog = function(t, e) {
                    var i = a.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div> ", e);
                    return i.show(), Tt(i.$el, "hidden", function(t) {
                        var e = t.target,
                            n = t.currentTarget;
                        e === n && i.$destroy(!0)
                    }), i
                }, a.modal.alert = function(e, n) {
                    return n = Y({
                        bgClose: !1,
                        escClose: !1,
                        labels: a.modal.labels
                    }, n), new zt(function(t) {
                        return Tt(a.modal.dialog(' <div class="uk-modal-body">' + (N(e) ? e : oe(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + n.labels.ok + "</button> </div> ", n).$el, "hide", t)
                    })
                }, a.modal.confirm = function(r, o) {
                    return o = Y({
                        bgClose: !1,
                        escClose: !0,
                        labels: a.modal.labels
                    }, o), new zt(function(e, t) {
                        var n = a.modal.dialog(' <form> <div class="uk-modal-body">' + (N(r) ? r : oe(r)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.labels.ok + "</button> </div> </form> ", o),
                            i = !1;
                        Tt(n.$el, "submit", "form", function(t) {
                            t.preventDefault(), e(), i = !0, n.hide()
                        }), Tt(n.$el, "hide", function() {
                            i || t()
                        })
                    })
                }, a.modal.prompt = function(t, o, s) {
                    return s = Y({
                        bgClose: !1,
                        escClose: !0,
                        labels: a.modal.labels
                    }, s), new zt(function(e) {
                        var n = a.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (N(t) ? t : oe(t)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + s.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + s.labels.ok + "</button> </div> </form> ", s),
                            i = we("input", n.$el);
                        i.value = o;
                        var r = !1;
                        Tt(n.$el, "submit", "form", function(t) {
                            t.preventDefault(), e(i.value), r = !0, n.hide()
                        }), Tt(n.$el, "hide", function() {
                            r || e(null)
                        })
                    })
                }, a.modal.labels = {
                    ok: "Ok",
                    cancel: "Cancel"
                }
            },
            mixins: [Vi],
            data: {
                clsPage: "uk-modal-page",
                selPanel: ".uk-modal-dialog",
                selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
            },
            events: [{
                name: "show",
                self: !0,
                handler: function() {
                    Se(this.panel, "uk-margin-auto-vertical") ? xe(this.$el, "uk-flex") : Oe(this.$el, "display", "block"), Qe(this.$el)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    Oe(this.$el, "display", ""), ke(this.$el, "uk-flex")
                }
            }]
        };
        var qi, Ui = {
                extends: qn,
                data: {
                    targets: "> .uk-parent",
                    toggle: "> a",
                    content: "> ul"
                }
            },
            Xi = {
                mixins: [Yn, li],
                props: {
                    dropdown: String,
                    mode: "list",
                    align: String,
                    offset: Number,
                    boundary: Boolean,
                    boundaryAlign: Boolean,
                    clsDrop: String,
                    delayShow: Number,
                    delayHide: Number,
                    dropbar: Boolean,
                    dropbarMode: String,
                    dropbarAnchor: Boolean,
                    duration: Number
                },
                data: {
                    dropdown: ".uk-navbar-nav > li",
                    align: Rt ? "right" : "left",
                    clsDrop: "uk-navbar-dropdown",
                    mode: void 0,
                    offset: void 0,
                    delayShow: void 0,
                    delayHide: void 0,
                    boundaryAlign: void 0,
                    flip: "x",
                    boundary: !0,
                    dropbar: !1,
                    dropbarMode: "slide",
                    dropbarAnchor: !1,
                    duration: 200,
                    forceHeight: !0,
                    selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
                },
                computed: {
                    boundary: function(t, e) {
                        var n = t.boundary,
                            i = t.boundaryAlign;
                        return !0 === n || i ? e : n
                    },
                    dropbarAnchor: function(t, e) {
                        return nt(t.dropbarAnchor, e)
                    },
                    pos: function(t) {
                        return "bottom-" + t.align
                    },
                    dropdowns: function(t, e) {
                        return be(t.dropdown + " ." + t.clsDrop, e)
                    }
                },
                beforeConnect: function() {
                    var t = this.$props.dropbar;
                    this.dropbar = t && (nt(t, this.$el) || we("+ .uk-navbar-dropbar", this.$el) || we("<div></div>")), this.dropbar && (xe(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && xe(this.dropbar, "uk-navbar-dropbar-slide"))
                },
                disconnected: function() {
                    this.dropbar && ce(this.dropbar)
                },
                update: function() {
                    var e = this;
                    this.$create("drop", this.dropdowns.filter(function(t) {
                        return !e.getDropdown(t)
                    }), Y({}, this.$props, {
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset
                    }))
                },
                events: [{
                    name: "mouseover",
                    delegate: function() {
                        return this.dropdown
                    },
                    handler: function(t) {
                        var e = t.current,
                            n = this.getActive();
                        n && n.toggle && !St(n.toggle.$el, e) && !n.tracker.movesTo(n.$el) && n.hide(!1)
                    }
                }, {
                    name: "mouseleave",
                    el: function() {
                        return this.dropbar
                    },
                    handler: function() {
                        var t = this.getActive();
                        t && !ft(this.dropbar, ":hover") && t.hide()
                    }
                }, {
                    name: "beforeshow",
                    capture: !0,
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function() {
                        this.dropbar.parentNode || le(this.dropbarAnchor || this.$el, this.dropbar)
                    }
                }, {
                    name: "show",
                    capture: !0,
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function(t, e) {
                        var n = e.$el,
                            i = e.dir;
                        this.clsDrop && xe(n, this.clsDrop + "-dropbar"), "bottom" === i && this.transitionTo(n.offsetHeight + P(Oe(n, "marginTop")) + P(Oe(n, "marginBottom")), n)
                    }
                }, {
                    name: "beforehide",
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function(t, e) {
                        var n = e.$el,
                            i = this.getActive();
                        ft(this.dropbar, ":hover") && i && i.$el === n && t.preventDefault()
                    }
                }, {
                    name: "hide",
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function(t, e) {
                        var n = e.$el,
                            i = this.getActive();
                        (!i || i && i.$el === n) && this.transitionTo(0)
                    }
                }],
                methods: {
                    getActive: function() {
                        var t = this.dropdowns.map(this.getDropdown).filter(function(t) {
                            return t && t.isActive()
                        })[0];
                        return t && b(t.mode, "hover") && St(t.toggle.$el, this.$el) && t
                    },
                    transitionTo: function(t, e) {
                        var n = this,
                            i = this.dropbar,
                            r = xt(i) ? Qe(i) : 0;
                        return Oe(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), Qe(i, r), Fe.cancel([e, i]), zt.all([Fe.start(i, {
                            height: t
                        }, this.duration), Fe.start(e, {
                            clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                        }, this.duration)]).catch(X).then(function() {
                            Oe(e, {
                                clip: ""
                            }), n.$update(i)
                        })
                    },
                    getDropdown: function(t) {
                        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                    }
                }
            },
            Ki = {
                mixins: [Vi],
                args: "mode",
                props: {
                    content: String,
                    mode: String,
                    flip: Boolean,
                    overlay: Boolean
                },
                data: {
                    content: ".uk-offcanvas-content",
                    mode: "slide",
                    flip: !1,
                    overlay: !1,
                    clsPage: "uk-offcanvas-page",
                    clsContainer: "uk-offcanvas-container",
                    selPanel: ".uk-offcanvas-bar",
                    clsFlip: "uk-offcanvas-flip",
                    clsContent: "uk-offcanvas-content",
                    clsContentAnimation: "uk-offcanvas-content-animation",
                    clsSidebarAnimation: "uk-offcanvas-bar-animation",
                    clsMode: "uk-offcanvas",
                    clsOverlay: "uk-offcanvas-overlay",
                    selClose: ".uk-offcanvas-close"
                },
                computed: {
                    content: function(t) {
                        return we(t.content) || document.body
                    },
                    clsFlip: function(t) {
                        var e = t.flip,
                            n = t.clsFlip;
                        return e ? n : ""
                    },
                    clsOverlay: function(t) {
                        var e = t.overlay,
                            n = t.clsOverlay;
                        return e ? n : ""
                    },
                    clsMode: function(t) {
                        var e = t.mode;
                        return t.clsMode + "-" + e
                    },
                    clsSidebarAnimation: function(t) {
                        var e = t.mode,
                            n = t.clsSidebarAnimation;
                        return "none" === e || "reveal" === e ? "" : n
                    },
                    clsContentAnimation: function(t) {
                        var e = t.mode,
                            n = t.clsContentAnimation;
                        return "push" !== e && "reveal" !== e ? "" : n
                    },
                    transitionElement: function(t) {
                        return "reveal" === t.mode ? this.panel.parentNode : this.panel
                    }
                },
                update: {
                    write: function() {
                        this.getActive() === this && ((this.overlay || this.clsContentAnimation) && tn(this.content, tn(window) - this.scrollbarWidth), this.overlay && (Qe(this.content, Qe(window)), qi && (this.content.scrollTop = qi.y)))
                    },
                    events: ["resize"]
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return 'a[href^="#"]'
                    },
                    handler: function(t) {
                        var e = t.current;
                        e.hash && we(e.hash, this.content) && (qi = null, this.hide())
                    }
                }, {
                    name: "beforescroll",
                    filter: function() {
                        return this.overlay
                    },
                    handler: function(t, e, n) {
                        e && n && this.isToggled() && we(n, this.content) && (Ct(this.$el, "hidden", function() {
                            return e.scrollTo(n)
                        }), t.preventDefault())
                    }
                }, {
                    name: "show",
                    self: !0,
                    handler: function() {
                        qi = qi || {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }, "reveal" !== this.mode || Se(this.panel, this.clsMode) || (ue(this.panel, "<div>"), xe(this.panel.parentNode, this.clsMode)), Oe(document.documentElement, "overflowY", (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? "scroll" : ""), xe(document.body, this.clsContainer, this.clsFlip, this.clsOverlay), Qe(document.body), xe(this.content, this.clsContentAnimation), xe(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), xe(this.$el, this.clsOverlay), Oe(this.$el, "display", "block"), Qe(this.$el)
                    }
                }, {
                    name: "hide",
                    self: !0,
                    handler: function() {
                        ke(this.content, this.clsContentAnimation);
                        var t = this.getActive();
                        ("none" === this.mode || t && t !== this && t !== this.prev) && At(this.panel, "transitionend")
                    }
                }, {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        if ("reveal" === this.mode && fe(this.panel), this.overlay) {
                            if (!qi) {
                                var t = this.content,
                                    e = t.scrollLeft,
                                    n = t.scrollTop;
                                qi = {
                                    x: e,
                                    y: n
                                }
                            }
                        } else qi = {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        };
                        ke(this.panel, this.clsSidebarAnimation, this.clsMode), ke(this.$el, this.clsOverlay), Oe(this.$el, "display", ""), ke(document.body, this.clsContainer, this.clsFlip, this.clsOverlay), document.body.scrollTop = qi.y, Oe(document.documentElement, "overflowY", ""), tn(this.content, ""), Qe(this.content, ""), window.scroll(qi.x, qi.y), qi = null
                    }
                }, {
                    name: "swipeLeft swipeRight",
                    handler: function(t) {
                        this.isToggled() && Dn(t) && ("swipeLeft" === t.type && !this.flip || "swipeRight" === t.type && this.flip) && this.hide()
                    }
                }]
            },
            Gi = {
                mixins: [Yn],
                props: {
                    selContainer: String,
                    selContent: String
                },
                data: {
                    selContainer: ".uk-modal",
                    selContent: ".uk-modal-dialog"
                },
                computed: {
                    container: function(t, e) {
                        return mt(e, t.selContainer)
                    },
                    content: function(t, e) {
                        return mt(e, t.selContent)
                    }
                },
                connected: function() {
                    Oe(this.$el, "minHeight", 150)
                },
                update: {
                    read: function() {
                        return !(!this.content || !this.container) && {
                            current: P(Oe(this.$el, "maxHeight")),
                            max: Math.max(150, Qe(this.container) - (Ge(this.content).height - Qe(this.$el)))
                        }
                    },
                    write: function(t) {
                        var e = t.current,
                            n = t.max;
                        Oe(this.$el, "maxHeight", n), Math.round(e) !== Math.round(n) && At(this.$el, "resize")
                    },
                    events: ["load", "resize"]
                }
            },
            Ji = {
                props: ["width", "height"],
                connected: function() {
                    xe(this.$el, "uk-responsive-width")
                },
                update: {
                    read: function() {
                        return !!(xt(this.$el) && this.width && this.height) && {
                            width: tn(this.$el.parentNode),
                            height: this.height
                        }
                    },
                    write: function(t) {
                        Qe(this.$el, J.contain({
                            height: this.height,
                            width: this.width
                        }, t).height)
                    },
                    events: ["load", "resize"]
                }
            },
            Zi = {
                props: {
                    duration: Number,
                    offset: Number
                },
                data: {
                    duration: 1e3,
                    offset: 0
                },
                methods: {
                    scrollTo: function(n) {
                        var i = this;
                        n = n && we(n) || document.body;
                        var t = Qe(document),
                            e = Qe(window),
                            r = Ge(n).top - this.offset;
                        if (t < r + e && (r = t - e), At(this.$el, "beforescroll", [this, n])) {
                            var o = Date.now(),
                                s = window.pageYOffset,
                                a = function() {
                                    var t, e = s + (r - s) * (t = U((Date.now() - o) / i.duration), .5 * (1 - Math.cos(Math.PI * t)));
                                    cn(window, e), e !== r ? requestAnimationFrame(a) : At(i.$el, "scrolled", [i, n])
                                };
                            a()
                        }
                    }
                },
                events: {
                    click: function(t) {
                        t.defaultPrevented || (t.preventDefault(), this.scrollTo(wt(decodeURIComponent(this.$el.hash)).substr(1)))
                    }
                }
            };
        var Qi = {
                args: "cls",
                props: {
                    cls: "list",
                    target: String,
                    hidden: Boolean,
                    offsetTop: Number,
                    offsetLeft: Number,
                    repeat: Boolean,
                    delay: Number
                },
                data: function() {
                    return {
                        cls: [],
                        target: !1,
                        hidden: !0,
                        offsetTop: 0,
                        offsetLeft: 0,
                        repeat: !1,
                        delay: 0,
                        inViewClass: "uk-scrollspy-inview"
                    }
                },
                computed: {
                    elements: function(t, e) {
                        var n = t.target;
                        return n ? be(n, e) : [e]
                    }
                },
                update: [{
                    write: function() {
                        this.hidden && Oe(It(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                    }
                }, {
                    read: function(r) {
                        var o = this;
                        r.update && this.elements.forEach(function(t, e) {
                            var n = r[e];
                            if (!n || n.el !== t) {
                                var i = et(t, "uk-scrollspy-class");
                                n = {
                                    el: t,
                                    toggles: i && i.split(",") || o.cls
                                }
                            }
                            n.show = ln(t, o.offsetTop, o.offsetLeft), r[e] = n
                        })
                    },
                    write: function(o) {
                        var s = this;
                        if (!o.update) return this.$emit(), o.update = !0;
                        this.elements.forEach(function(t, e) {
                            var n = o[e],
                                i = n.toggles[e] || n.toggles[0];
                            if (!n.show || n.inview || n.queued) {
                                if (!n.show && (n.inview || n.queued) && s.repeat) {
                                    if (n.abort && n.abort(), !n.inview) return;
                                    Oe(t, "visibility", s.hidden ? "hidden" : ""), ke(t, s.inViewClass), Te(t, i), At(t, "outview"), s.$update(t), n.inview = !1
                                }
                            } else {
                                var r = function() {
                                    Oe(t, "visibility", ""), xe(t, s.inViewClass), Te(t, i), At(t, "inview"), s.$update(t), n.inview = !0, n.abort && n.abort()
                                };
                                s.delay ? (n.queued = !0, o.promise = (o.promise || zt.resolve()).then(function() {
                                    return !n.inview && new zt(function(t) {
                                        var e = setTimeout(function() {
                                            r(), t()
                                        }, o.promise || 1 === s.elements.length ? s.delay : 0);
                                        n.abort = function() {
                                            clearTimeout(e), t(), n.queued = !1
                                        }
                                    })
                                })) : r()
                            }
                        })
                    },
                    events: ["scroll", "load", "resize"]
                }]
            },
            tr = {
                props: {
                    cls: String,
                    closest: String,
                    scroll: Boolean,
                    overflow: Boolean,
                    offset: Number
                },
                data: {
                    cls: "uk-active",
                    closest: !1,
                    scroll: !1,
                    overflow: !0,
                    offset: 0
                },
                computed: {
                    links: function(t, e) {
                        return be('a[href^="#"]', e).filter(function(t) {
                            return t.hash
                        })
                    },
                    elements: function() {
                        return this.closest ? mt(this.links, this.closest) : this.links
                    },
                    targets: function() {
                        return be(this.links.map(function(t) {
                            return t.hash
                        }).join(","))
                    }
                },
                update: [{
                    read: function() {
                        this.scroll && this.$create("scroll", this.links, {
                            offset: this.offset || 0
                        })
                    }
                }, {
                    read: function(o) {
                        var s = this,
                            a = window.pageYOffset + this.offset + 1,
                            l = Qe(document) - Qe(window) + this.offset;
                        o.active = !1, this.targets.every(function(t, e) {
                            var n = Ge(t).top,
                                i = e + 1 === s.targets.length;
                            if (!s.overflow && (0 === e && a < n || i && n + t.offsetTop < a)) return !1;
                            if (!i && Ge(s.targets[e + 1]).top <= a) return !0;
                            if (l <= a)
                                for (var r = s.targets.length - 1; e < r; r--)
                                    if (ln(s.targets[r])) {
                                        t = s.targets[r];
                                        break
                                    }
                            return !(o.active = we(It(s.links, '[href="#' + t.id + '"]')))
                        })
                    },
                    write: function(t) {
                        var e = t.active;
                        this.links.forEach(function(t) {
                            return t.blur()
                        }), ke(this.elements, this.cls), e && At(this.$el, "active", [e, xe(this.closest ? mt(e, this.closest) : e, this.cls)])
                    },
                    events: ["scroll", "load", "resize"]
                }]
            },
            er = {
                mixins: [Yn, Hi],
                props: {
                    top: null,
                    bottom: Boolean,
                    offset: Number,
                    animation: String,
                    clsActive: String,
                    clsInactive: String,
                    clsFixed: String,
                    clsBelow: String,
                    selTarget: String,
                    widthElement: Boolean,
                    showOnUp: Boolean,
                    targetOffset: Number
                },
                data: {
                    top: 0,
                    bottom: !1,
                    offset: 0,
                    animation: "",
                    clsActive: "uk-active",
                    clsInactive: "",
                    clsFixed: "uk-sticky-fixed",
                    clsBelow: "uk-sticky-below",
                    selTarget: "",
                    widthElement: !1,
                    showOnUp: !1,
                    targetOffset: !1
                },
                computed: {
                    selTarget: function(t, e) {
                        var n = t.selTarget;
                        return n && we(n, e) || e
                    },
                    widthElement: function(t, e) {
                        return nt(t.widthElement, e) || this.placeholder
                    }
                },
                connected: function() {
                    this.placeholder = we("+ .uk-sticky-placeholder", this.$el) || we('<div class="uk-sticky-placeholder"></div>')
                },
                disconnected: function() {
                    this.isActive && (this.isActive = void 0, this.hide(), ke(this.selTarget, this.clsInactive)), ce(this.placeholder), this.placeholder = null, this.widthElement = null
                },
                events: [{
                    name: "active",
                    self: !0,
                    handler: function() {
                        Ie(this.selTarget, this.clsInactive, this.clsActive)
                    }
                }, {
                    name: "inactive",
                    self: !0,
                    handler: function() {
                        Ie(this.selTarget, this.clsActive, this.clsInactive)
                    }
                }, {
                    name: "load hashchange popstate",
                    el: window,
                    handler: function() {
                        var i = this;
                        if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) {
                            var r = we(location.hash);
                            r && pn.read(function() {
                                var t = Ge(r).top,
                                    e = Ge(i.$el).top,
                                    n = i.$el.offsetHeight;
                                i.isActive && t <= e + n && e <= t + r.offsetHeight && cn(window, t - n - (M(i.targetOffset) ? i.targetOffset : 0) - i.offset)
                            })
                        }
                    }
                }],
                update: [{
                    read: function(t, e) {
                        var n = t.height,
                            i = e.type;
                        n = this.isActive && "resize" !== i ? n : this.$el.offsetHeight, this.topOffset = Ge(this.isActive ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + n;
                        var r = nr("bottom", this);
                        return this.top = Math.max(P(nr("top", this)), this.topOffset) - this.offset, this.bottom = r && r - n, this.inactive = !this.matchMedia, {
                            height: n,
                            margins: Oe(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                        }
                    },
                    write: function(t) {
                        var e = t.height,
                            n = t.margins,
                            i = this.placeholder;
                        Oe(i, Y({
                            height: e
                        }, n)), St(i, document) || (le(this.$el, i), Z(i, "hidden", "")), B(this.isActive) && this.hide()
                    },
                    events: ["load", "resize"]
                }, {
                    read: function(t, e) {
                        var n = e.scrollY;
                        return void 0 === n && (n = window.pageYOffset), this.width = (xt(this.widthElement) ? this.widthElement : this.$el).offsetWidth, {
                            scroll: this.scroll = n,
                            visible: xt(this.$el)
                        }
                    },
                    write: function(t, e) {
                        var n = this,
                            i = t.visible,
                            r = t.scroll;
                        void 0 === e && (e = {});
                        var o = e.dir;
                        if (!(r < 0 || !i || this.disabled || this.showOnUp && !o))
                            if (this.inactive || r < this.top || this.showOnUp && (r <= this.top || "down" === o || "up" === o && !this.isActive && r <= this.bottomOffset)) {
                                if (!this.isActive) return;
                                this.isActive = !1, this.animation && r > this.topOffset ? (Ue.cancel(this.$el), Ue.out(this.$el, this.animation).then(function() {
                                    return n.hide()
                                }, X)) : this.hide()
                            } else this.isActive ? this.update() : this.animation ? (Ue.cancel(this.$el), this.show(), Ue.in(this.$el, this.animation).catch(X)) : this.show()
                    },
                    events: ["load", "resize", "scroll"]
                }],
                methods: {
                    show: function() {
                        this.isActive = !0, this.update(), Z(this.placeholder, "hidden", null)
                    },
                    hide: function() {
                        this.isActive && !Se(this.selTarget, this.clsActive) || At(this.$el, "inactive"), ke(this.$el, this.clsFixed, this.clsBelow), Oe(this.$el, {
                            position: "",
                            top: "",
                            width: ""
                        }), Z(this.placeholder, "hidden", "")
                    },
                    update: function() {
                        var t = 0 !== this.top || this.scroll > this.top,
                            e = Math.max(0, this.offset);
                        this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Oe(this.$el, {
                            position: "fixed",
                            top: e + "px",
                            width: this.width
                        }), Se(this.selTarget, this.clsActive) ? t || At(this.$el, "inactive") : t && At(this.$el, "active"), Te(this.$el, this.clsBelow, this.scroll > this.bottomOffset), xe(this.$el, this.clsFixed)
                    }
                }
            };

        function nr(t, e) {
            var n = e.$props,
                i = e.$el,
                r = e[t + "Offset"],
                o = n[t];
            if (o) {
                if (M(o)) return r + P(o);
                if (N(o) && o.match(/^-?\d+vh$/)) return Qe(window) * P(o) / 100;
                var s = !0 === o ? i.parentNode : nt(o, i);
                return s ? Ge(s).top + s.offsetHeight : void 0
            }
        }
        var ir, rr = {
                mixins: [Rn],
                args: "connect",
                props: {
                    connect: String,
                    toggle: String,
                    active: Number,
                    swiping: Boolean
                },
                data: {
                    connect: "~.uk-switcher",
                    toggle: "> *",
                    active: 0,
                    swiping: !0,
                    cls: "uk-active",
                    clsContainer: "uk-switcher",
                    attrItem: "uk-switcher-item",
                    queued: !0
                },
                computed: {
                    connects: function(t, e) {
                        return it(t.connect, e)
                    },
                    toggles: function(t, e) {
                        return be(t.toggle, e)
                    }
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.toggle + ":not(.uk-disabled)"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.show(t.current)
                    }
                }, {
                    name: "click",
                    el: function() {
                        return this.connects
                    },
                    delegate: function() {
                        return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.show(et(t.current, this.attrItem))
                    }
                }, {
                    name: "swipeRight swipeLeft",
                    filter: function() {
                        return this.swiping
                    },
                    el: function() {
                        return this.connects
                    },
                    handler: function(t) {
                        Dn(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous"))
                    }
                }],
                update: function() {
                    var e = this;
                    this.connects.forEach(function(t) {
                        return e.updateAria(t.children)
                    }), this.show(It(this.toggles, "." + this.cls)[0] || this.toggles[this.active] || this.toggles[0])
                },
                methods: {
                    index: function() {
                        return !!this.connects.length && ne(It(this.connects[0].children, "." + this.cls)[0])
                    },
                    show: function(t) {
                        for (var e, n = this, i = this.toggles.length, r = this.index(), o = 0 <= r, s = "previous" === t ? -1 : 1, a = ie(t, this.toggles, r), l = 0; l < i; l++, a = (a + s + i) % i)
                            if (!ft(n.toggles[a], ".uk-disabled, [disabled]")) {
                                e = n.toggles[a];
                                break
                            }!e || 0 <= r && Se(e, this.cls) || r === a || (ke(this.toggles, this.cls), Z(this.toggles, "aria-expanded", !1), xe(e, this.cls), Z(e, "aria-expanded", !0), this.connects.forEach(function(t) {
                            o ? n.toggleElement([t.children[r], t.children[a]]) : n.toggleNow(t.children[a])
                        }))
                    }
                }
            },
            or = {
                mixins: [Yn],
                extends: rr,
                props: {
                    media: Boolean
                },
                data: {
                    media: 960,
                    attrItem: "uk-tab-item"
                },
                connected: function() {
                    var t = Se(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Se(this.$el, "uk-tab-right") && "uk-tab-right";
                    t && this.$create("toggle", this.$el, {
                        cls: t,
                        mode: "media",
                        media: this.media
                    })
                }
            },
            sr = {
                mixins: [Hi, Rn],
                args: "target",
                props: {
                    href: String,
                    target: null,
                    mode: "list"
                },
                data: {
                    href: !1,
                    target: !1,
                    mode: "click",
                    queued: !0
                },
                computed: {
                    target: function(t, e) {
                        var n = t.href,
                            i = t.target;
                        return (i = it(i || n, e)).length && i || [e]
                    }
                },
                events: [{
                    name: Zt + " " + Qt,
                    filter: function() {
                        return b(this.mode, "hover")
                    },
                    handler: function(t) {
                        Dn(t) || this.toggle("toggle" + (t.type === Zt ? "show" : "hide"))
                    }
                }, {
                    name: "click",
                    filter: function() {
                        return b(this.mode, "click") || Xt && b(this.mode, "hover")
                    },
                    handler: function(t) {
                        var e;
                        (Dn(t) || b(this.mode, "click")) && ((mt(t.target, 'a[href="#"], button') || (e = mt(t.target, "a[href]")) && (this.cls || !xt(this.target) || e.hash && ft(this.target, e.hash))) && Ct(document, "click", function(t) {
                            return t.preventDefault()
                        }), this.toggle())
                    }
                }],
                update: {
                    write: function() {
                        if (b(this.mode, "media") && this.media) {
                            var t = this.isToggled(this.target);
                            (this.matchMedia ? !t : t) && this.toggle()
                        }
                    },
                    events: ["load", "resize"]
                },
                methods: {
                    toggle: function(t) {
                        At(this.target, t || "toggle", [this]) && this.toggleElement(this.target)
                    }
                }
            };
        Vn.version = "3.0.0-dev.dde90e8", (ir = Vn).component("accordion", qn), ir.component("alert", Un), ir.component("cover", Zn), ir.component("drop", ti), ir.component("dropdown", ei), ir.component("formCustom", ni), ir.component("gif", ii), ir.component("grid", ai), ir.component("heightMatch", hi), ir.component("heightViewport", di), ir.component("icon", yi), ir.component("img", Ti), ir.component("leader", Wi), ir.component("margin", ri), ir.component("modal", Ri), ir.component("nav", Ui), ir.component("navbar", Xi), ir.component("offcanvas", Ki), ir.component("overflowAuto", Gi), ir.component("responsive", Ji), ir.component("scroll", Zi), ir.component("scrollspy", Qi), ir.component("scrollspyNav", tr), ir.component("sticky", er), ir.component("svg", mi), ir.component("switcher", rr), ir.component("tab", or), ir.component("toggle", sr), ir.component("video", Jn), ir.component("close", Ii), ir.component("marker", xi), ir.component("navbarToggleIcon", xi), ir.component("overlayIcon", xi), ir.component("paginationNext", xi), ir.component("paginationPrevious", xi), ir.component("searchIcon", $i), ir.component("slidenavNext", ki), ir.component("slidenavPrevious", ki), ir.component("spinner", Si), ir.component("totop", xi), ir.use(Xn);
        var ar = {
            mixins: [Yn],
            props: {
                date: String,
                clsWrapper: String
            },
            data: {
                date: "",
                clsWrapper: ".uk-countdown-%unit%"
            },
            computed: {
                date: function(t) {
                    var e = t.date;
                    return Date.parse(e)
                },
                days: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "days"), e)
                },
                hours: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "hours"), e)
                },
                minutes: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "minutes"), e)
                },
                seconds: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "seconds"), e)
                },
                units: function() {
                    var e = this;
                    return ["days", "hours", "minutes", "seconds"].filter(function(t) {
                        return e[t]
                    })
                }
            },
            connected: function() {
                this.start()
            },
            disconnected: function() {
                var e = this;
                this.stop(), this.units.forEach(function(t) {
                    return re(e[t])
                })
            },
            events: [{
                name: "visibilitychange",
                el: document,
                handler: function() {
                    document.hidden ? this.stop() : this.start()
                }
            }],
            update: {
                write: function() {
                    var t, e, i = this,
                        r = (t = this.date, {
                            total: e = t - Date.now(),
                            seconds: e / 1e3 % 60,
                            minutes: e / 1e3 / 60 % 60,
                            hours: e / 1e3 / 60 / 60 % 24,
                            days: e / 1e3 / 60 / 60 / 24
                        });
                    r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function(t) {
                        var e = String(Math.floor(r[t]));
                        e = e.length < 2 ? "0" + e : e;
                        var n = i[t];
                        n.textContent !== e && ((e = e.split("")).length !== n.children.length && oe(n, e.map(function() {
                            return "<span></span>"
                        }).join("")), e.forEach(function(t, e) {
                            return n.children[e].textContent = t
                        }))
                    })
                }
            },
            methods: {
                start: function() {
                    var t = this;
                    this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function() {
                        return t.$emit()
                    }, 1e3))
                },
                stop: function() {
                    this.timer && (clearInterval(this.timer), this.timer = null)
                }
            }
        };
        var lr, hr = "uk-animation-target",
            cr = {
                props: {
                    animation: Number
                },
                data: {
                    animation: 150
                },
                computed: {
                    target: function() {
                        return this.$el
                    }
                },
                methods: {
                    animate: function(t) {
                        var i = this;
                        lr || (lr = se(document.head, "<style>").sheet).insertRule("." + hr + " > * {\n                    margin-top: 0 !important;\n                    transform: none !important;\n                }", 0);
                        var r = j(this.target.children),
                            o = r.map(function(t) {
                                return ur(t, !0)
                            }),
                            e = Qe(this.target),
                            n = window.pageYOffset;
                        t(), Fe.cancel(this.target), r.forEach(Fe.cancel), dr(this.target), this.$update(this.target), pn.flush();
                        var s = Qe(this.target),
                            a = (r = r.concat(j(this.target.children).filter(function(t) {
                                return !b(r, t)
                            }))).map(function(t, e) {
                                return !!(t.parentNode && e in o) && (o[e] ? xt(t) ? fr(t) : {
                                    opacity: 0
                                } : {
                                    opacity: xt(t) ? 1 : 0
                                })
                            });
                        return o = a.map(function(t, e) {
                            var n = r[e].parentNode === i.target && (o[e] || ur(r[e]));
                            if (n)
                                if (t) {
                                    if (!("opacity" in t)) {
                                        n.opacity % 1 ? t.opacity = 1 : delete n.opacity
                                    }
                                } else delete n.opacity;
                            return n
                        }), xe(this.target, hr), r.forEach(function(t, e) {
                            return o[e] && Oe(t, o[e])
                        }), Oe(this.target, "height", e), cn(window, n), zt.all(r.map(function(t, e) {
                            return o[e] && a[e] ? Fe.start(t, a[e], i.animation, "ease") : zt.resolve()
                        }).concat(Fe.start(this.target, {
                            height: s
                        }, this.animation, "ease"))).then(function() {
                            r.forEach(function(t, e) {
                                return Oe(t, {
                                    display: 0 === a[e].opacity ? "none" : "",
                                    zIndex: ""
                                })
                            }), dr(i.target), i.$update(i.target), pn.flush()
                        }, X)
                    }
                }
            };

        function ur(t, e) {
            var n = Oe(t, "zIndex");
            return !!xt(t) && Y({
                display: "",
                opacity: e ? Oe(t, "opacity") : "0",
                pointerEvents: "none",
                position: "absolute",
                zIndex: "auto" === n ? ne(t) : n
            }, fr(t))
        }

        function dr(t) {
            Oe(t.children, {
                height: "",
                left: "",
                opacity: "",
                pointerEvents: "",
                position: "",
                top: "",
                width: ""
            }), ke(t, hr), Oe(t, "height", "")
        }

        function fr(t) {
            var e = t.getBoundingClientRect(),
                n = e.height,
                i = e.width,
                r = Ze(t),
                o = r.top,
                s = r.left;
            return {
                top: o += P(Oe(t, "marginTop")),
                left: s,
                height: n,
                width: i
            }
        }
        var pr = {
            mixins: [cr],
            args: "target",
            props: {
                target: Boolean,
                selActive: Boolean
            },
            data: {
                target: null,
                selActive: !1,
                attrItem: "uk-filter-control",
                cls: "uk-active",
                animation: 250
            },
            computed: {
                toggles: function(t, e) {
                    t.attrItem;
                    return be("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
                },
                target: function(t, e) {
                    return we(t.target, e)
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler: function(t) {
                    t.preventDefault(), this.apply(t.current)
                }
            }],
            connected: function() {
                var e = this;
                if (!1 !== this.selActive) {
                    var n = be(this.selActive, this.$el);
                    this.toggles.forEach(function(t) {
                        return Te(t, e.cls, b(n, t))
                    })
                }
            },
            update: function(t) {
                var e = t.toggles,
                    n = t.children;
                vr(e, this.toggles, !1) && vr(n, this.target.children, !1) || (t.toggles = this.toggles, t.children = this.target.children, this.setState(this.getState(), !1))
            },
            methods: {
                apply: function(t) {
                    this.setState(gr(t, this.attrItem, this.getState()))
                },
                getState: function() {
                    var n = this;
                    return this.toggles.filter(function(t) {
                        return Se(t, n.cls)
                    }).reduce(function(t, e) {
                        return gr(e, n.attrItem, t)
                    }, {
                        filter: {
                            "": ""
                        },
                        sort: []
                    })
                },
                setState: function(h, t) {
                    var c = this;
                    void 0 === t && (t = !0), h = Y({
                        filter: {
                            "": ""
                        },
                        sort: []
                    }, h), At(this.$el, "beforeFilter", [this, h]);
                    var u = j(this.target.children);
                    this.toggles.forEach(function(t) {
                        return Te(t, c.cls, function(t, e, n) {
                            var i = n.filter,
                                r = n.sort,
                                o = r[0],
                                s = r[1],
                                a = mr(t, e),
                                l = a.filter,
                                h = a.group;
                            void 0 === h && (h = "");
                            var c = a.sort,
                                u = a.order;
                            void 0 === u && (u = "asc");
                            return Boolean((l || B(c)) && h in i && (l === i[h] || B(l) && !i[h]) || o && c && o === c && s === u)
                        }(t, c.attrItem, h))
                    });
                    var e = function() {
                        var t, e, n = (t = h.filter, e = "", R(t, function(t) {
                            return e += t || ""
                        }), e);
                        u.forEach(function(t) {
                            return Oe(t, "display", n && !ft(t, n) ? "none" : "")
                        });
                        var i, r, o = h.sort,
                            s = o[0],
                            a = o[1];
                        if (s) {
                            var l = (i = s, r = a, j(u).sort(function(t, e) {
                                return et(t, i).localeCompare(et(e, i), void 0, {
                                    numeric: !0
                                }) * ("asc" === r || -1)
                            }));
                            vr(l, u) || l.forEach(function(t) {
                                return se(c.target, t)
                            })
                        }
                    };
                    t ? this.animate(e).then(function() {
                        return At(c.$el, "afterFilter", [c])
                    }) : (e(), At(this.$el, "afterFilter", [this]))
                }
            }
        };

        function mr(t, e) {
            return In(et(t, e), ["filter"])
        }

        function gr(t, s, a) {
            return j(t).forEach(function(t) {
                var e = mr(t, s),
                    n = e.filter,
                    i = e.group,
                    r = e.sort,
                    o = e.order;
                void 0 === o && (o = "asc"), (n || B(r)) && (i ? (delete a.filter[""], a.filter[i] = n) : a.filter = {
                    "": n
                }), B(r) || (a.sort = [r, o])
            }), a
        }

        function vr(t, n, i) {
            return void 0 === i && (i = !0), t = j(t), n = j(n), t.length === n.length && t.every(function(t, e) {
                return i ? t === n[e] : ~n.indexOf(t)
            })
        }
        var wr = {
            slide: {
                show: function(t) {
                    return [{
                        transform: yr(-100 * t)
                    }, {
                        transform: yr()
                    }]
                },
                percent: function(t) {
                    return br(t)
                },
                translate: function(t, e) {
                    return [{
                        transform: yr(-100 * e * t)
                    }, {
                        transform: yr(100 * e * (1 - t))
                    }]
                }
            }
        };

        function br(t) {
            return Math.abs(Oe(t, "transform").split(",")[4] / t.offsetWidth) || 0
        }

        function yr(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = "%"), "translateX(" + t + (t ? e : "") + ")"
        }

        function xr(t) {
            return "scale3d(" + t + ", " + t + ", 1)"
        }
        var kr = Y({}, wr, {
            fade: {
                show: function() {
                    return [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }]
                },
                percent: function(t) {
                    return 1 - Oe(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t
                    }, {
                        opacity: t
                    }]
                }
            },
            scale: {
                show: function() {
                    return [{
                        opacity: 0,
                        transform: xr(.8)
                    }, {
                        opacity: 1,
                        transform: xr(1)
                    }]
                },
                percent: function(t) {
                    return 1 - Oe(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t,
                        transform: xr(1 - .2 * t)
                    }, {
                        opacity: t,
                        transform: xr(.8 + .2 * t)
                    }]
                }
            }
        });

        function $r(t, e, n) {
            At(t, _t(e, !1, !1, n))
        }
        var Ir = {
            mixins: [{
                props: {
                    autoplay: Boolean,
                    autoplayInterval: Number,
                    pauseOnHover: Boolean
                },
                data: {
                    autoplay: !1,
                    autoplayInterval: 7e3,
                    pauseOnHover: !0
                },
                connected: function() {
                    this.startAutoplay()
                },
                disconnected: function() {
                    this.stopAutoplay()
                },
                events: [{
                    name: "visibilitychange",
                    el: document,
                    handler: function() {
                        document.hidden ? this.stopAutoplay() : this.startAutoplay()
                    }
                }, {
                    name: Kt,
                    handler: "stopAutoplay"
                }, {
                    name: "mouseenter",
                    filter: function() {
                        return this.autoplay
                    },
                    handler: function() {
                        this.isHovering = !0
                    }
                }, {
                    name: "mouseleave",
                    filter: function() {
                        return this.autoplay
                    },
                    handler: function() {
                        this.isHovering = !1
                    }
                }],
                methods: {
                    startAutoplay: function() {
                        var t = this;
                        this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function() {
                            return !(t.isHovering && t.pauseOnHover) && !t.stack.length && t.show("next")
                        }, this.autoplayInterval))
                    },
                    stopAutoplay: function() {
                        this.interval && clearInterval(this.interval)
                    }
                }
            }, {
                data: {
                    threshold: 10,
                    preventCatch: !1
                },
                created: function() {
                    var i = this;
                    ["start", "move", "end"].forEach(function(t) {
                        var n = i[t];
                        i[t] = function(t) {
                            var e = zn(t).x * (Rt ? -1 : 1);
                            i.prevPos = e !== i.pos ? i.pos : i.prevPos, i.pos = e, n(t)
                        }
                    })
                },
                events: [{
                    name: Kt,
                    delegate: function() {
                        return this.slidesSelector
                    },
                    handler: function(t) {
                        var e;
                        !Dn(t) && (!(e = t.target).children.length && e.childNodes.length) || 0 < t.button || this.length < 2 || this.preventCatch || this.start(t)
                    }
                }, {
                    name: "touchmove",
                    passive: !1,
                    handler: "move",
                    delegate: function() {
                        return this.slidesSelector
                    }
                }, {
                    name: "dragstart",
                    handler: function(t) {
                        t.preventDefault()
                    }
                }],
                methods: {
                    start: function() {
                        var t = this;
                        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
                        var e = Tt(document, Gt.replace(" touchmove", ""), this.move, {
                            passive: !1
                        });
                        this.unbindMove = function() {
                            e(), t.unbindMove = null
                        }, Tt(window, "scroll", this.unbindMove), Tt(document, Jt, this.end, !0)
                    },
                    move: function(t) {
                        var e = this;
                        if (this.unbindMove) {
                            var n = this.pos - this.drag;
                            if (!(0 === n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                                t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                                for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) e.drag -= a * e.dir, r = s, o -= a, s = e.getIndex(r + e.dir, r), a = e._getDistance(r, s) || i[r].offsetWidth;
                                this.percent = o / a;
                                var l, h = i[r],
                                    c = i[s],
                                    u = this.index !== s,
                                    d = r === s;
                                [this.index, this.prevIndex].filter(function(t) {
                                    return !b([s, r], t)
                                }).forEach(function(t) {
                                    At(i[t], "itemhidden", [e]), d && (l = !0, e.prevIndex = r)
                                }), (this.index === r && this.prevIndex !== r || l) && At(i[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, !d && At(h, "beforeitemhide", [this]), At(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), h, !d && c), u && (!d && At(h, "itemhide", [this]), At(c, "itemshow", [this]))
                            }
                        }
                    },
                    end: function() {
                        if (Et(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), Et(document, Jt, this.end, !0), this.dragging) {
                            if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                            else {
                                var t = (Rt ? this.dir * (Rt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                                this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0)
                            }
                            Dt()
                        }
                        this.drag = this.percent = null
                    }
                }
            }, {
                data: {
                    selNav: !1
                },
                computed: {
                    nav: function(t, e) {
                        return we(t.selNav, e)
                    },
                    navItemSelector: function(t) {
                        var e = t.attrItem;
                        return "[" + e + "],[data-" + e + "]"
                    },
                    navItems: function(t, e) {
                        return be(this.navItemSelector, e)
                    }
                },
                update: {
                    write: function() {
                        var n = this;
                        this.nav && this.length !== this.nav.children.length && oe(this.nav, this.slides.map(function(t, e) {
                            return "<li " + n.attrItem + '="' + e + '"><a href="#"></a></li>'
                        }).join("")), Te(be(this.navItemSelector, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                    },
                    events: ["load", "resize"]
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.navItemSelector
                    },
                    handler: function(t) {
                        t.preventDefault(), t.current.blur(), this.show(et(t.current, this.attrItem))
                    }
                }, {
                    name: "itemshow",
                    handler: "updateNav"
                }],
                methods: {
                    updateNav: function() {
                        var n = this,
                            i = this.getValidIndex();
                        this.navItems.forEach(function(t) {
                            var e = et(t, n.attrItem);
                            Te(t, n.clsActive, z(e) === i), Te(t, "uk-invisible", n.finite && ("previous" === e && 0 === i || "next" === e && i >= n.maxIndex))
                        })
                    }
                }
            }],
            props: {
                clsActivated: Boolean,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number
            },
            data: function() {
                return {
                    easing: "ease",
                    finite: !1,
                    velocity: 1,
                    index: 0,
                    stack: [],
                    percent: 0,
                    clsActive: "uk-active",
                    clsActivated: !1,
                    Transitioner: !1,
                    transitionOptions: {}
                }
            },
            computed: {
                duration: function(t, e) {
                    var n = t.velocity;
                    return Sr(e.offsetWidth / n)
                },
                length: function() {
                    return this.slides.length
                },
                list: function(t, e) {
                    return we(t.selList, e)
                },
                maxIndex: function() {
                    return this.length - 1
                },
                slidesSelector: function(t) {
                    return t.selList + " > *"
                },
                slides: function() {
                    return j(this.list.children)
                }
            },
            events: {
                itemshown: function() {
                    this.$update(this.list)
                }
            },
            methods: {
                show: function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = !1), !this.dragging && this.length) {
                        var i = this.stack,
                            r = e ? 0 : i.length,
                            o = function() {
                                i.splice(r, 1), i.length && n.show(i.shift(), !0)
                            };
                        if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                        else {
                            var s = this.index,
                                a = Se(this.slides, this.clsActive) && this.slides[s],
                                l = this.getIndex(t, this.index),
                                h = this.slides[l];
                            if (a !== h) {
                                var c, u;
                                if (this.dir = (u = s, "next" === (c = t) ? 1 : "previous" === c ? -1 : c < u ? -1 : 1), this.prevIndex = s, this.index = l, a && At(a, "beforeitemhide", [this]), !At(h, "beforeitemshow", [this, a])) return this.index = this.prevIndex, void o();
                                var d = this._show(a, h, e).then(function() {
                                    return a && At(a, "itemhidden", [n]), At(h, "itemshown", [n]), new zt(function(t) {
                                        pn.write(function() {
                                            i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t()
                                        })
                                    })
                                });
                                return a && At(a, "itemhide", [this]), At(h, "itemshow", [this]), d
                            }
                            o()
                        }
                    }
                },
                getIndex: function(t, e) {
                    return void 0 === t && (t = this.index), void 0 === e && (e = this.index), U(ie(t, this.slides, e, this.finite), 0, this.maxIndex)
                },
                getValidIndex: function(t, e) {
                    return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
                },
                _show: function(t, e, n) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, Y({
                            easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
                        }, this.transitionOptions)), !n && !t) return this._transitioner.translate(1), zt.resolve();
                    var i = this.stack.length;
                    return this._transitioner[1 < i ? "forward" : "show"](1 < i ? Math.min(this.duration, 75 + 75 / (i - 1)) : this.duration, this.percent)
                },
                _getDistance: function(t, e) {
                    return new this._getTransitioner(t, t !== e && e).getDistance()
                },
                _translate: function(t, e, n) {
                    void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
                    var i = this._getTransitioner(e !== n && e, n);
                    return i.translate(t), i
                },
                _getTransitioner: function(t, e, n, i) {
                    return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(O(t) ? this.slides[t] : t, O(e) ? this.slides[e] : e, n * (Rt ? -1 : 1), i)
                }
            }
        };

        function Sr(t) {
            return .5 * t + 300
        }
        var Tr = {
                mixins: [Ir],
                props: {
                    animation: String
                },
                data: {
                    animation: "slide",
                    clsActivated: "uk-transition-active",
                    Animations: wr,
                    Transitioner: function(o, s, a, t) {
                        var e = t.animation,
                            l = t.easing,
                            n = e.percent,
                            i = e.translate,
                            r = e.show;
                        void 0 === r && (r = X);
                        var h = r(a),
                            c = new Pt;
                        return {
                            dir: a,
                            show: function(t, e, n) {
                                var i = this;
                                void 0 === e && (e = 0);
                                var r = n ? "linear" : l;
                                return t -= Math.round(t * U(e, -1, 1)), this.translate(e), $r(s, "itemin", {
                                    percent: e,
                                    duration: t,
                                    timing: r,
                                    dir: a
                                }), $r(o, "itemout", {
                                    percent: 1 - e,
                                    duration: t,
                                    timing: r,
                                    dir: a
                                }), zt.all([Fe.start(s, h[1], t, r), Fe.start(o, h[0], t, r)]).then(function() {
                                    i.reset(), c.resolve()
                                }, X), c.promise
                            },
                            stop: function() {
                                return Fe.stop([s, o])
                            },
                            cancel: function() {
                                Fe.cancel([s, o])
                            },
                            reset: function() {
                                for (var t in h[0]) Oe([s, o], t, "")
                            },
                            forward: function(t, e) {
                                return void 0 === e && (e = this.percent()), Fe.cancel([s, o]), this.show(t, e, !0)
                            },
                            translate: function(t) {
                                this.reset();
                                var e = i(t, a);
                                Oe(s, e[1]), Oe(o, e[0]), $r(s, "itemtranslatein", {
                                    percent: t,
                                    dir: a
                                }), $r(o, "itemtranslateout", {
                                    percent: 1 - t,
                                    dir: a
                                })
                            },
                            percent: function() {
                                return n(o || s, s, a)
                            },
                            getDistance: function() {
                                return o.offsetWidth
                            }
                        }
                    }
                },
                computed: {
                    animation: function(t) {
                        var e = t.animation,
                            n = t.Animations;
                        return Y(e in n ? n[e] : n.slide, {
                            name: e
                        })
                    },
                    transitionOptions: function() {
                        return {
                            animation: this.animation
                        }
                    }
                },
                events: {
                    "itemshow itemhide itemshown itemhidden": function(t) {
                        var e = t.target;
                        this.$update(e)
                    },
                    itemshow: function() {
                        O(this.prevIndex) && pn.flush()
                    },
                    beforeitemshow: function(t) {
                        xe(t.target, this.clsActive)
                    },
                    itemshown: function(t) {
                        xe(t.target, this.clsActivated)
                    },
                    itemhidden: function(t) {
                        ke(t.target, this.clsActive, this.clsActivated)
                    }
                }
            },
            Er = {
                mixins: [Fi, Vi, Rn, Tr],
                functional: !0,
                props: {
                    delayControls: Number,
                    preload: Number,
                    videoAutoplay: Boolean,
                    template: String
                },
                data: function() {
                    return {
                        preload: 1,
                        videoAutoplay: !1,
                        delayControls: 3e3,
                        items: [],
                        cls: "uk-open",
                        clsPage: "uk-lightbox-page",
                        selList: ".uk-lightbox-items",
                        attrItem: "uk-lightbox-item",
                        selClose: ".uk-close-large",
                        pauseOnHover: !1,
                        velocity: 2,
                        Animations: kr,
                        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                    }
                },
                created: function() {
                    var t = this;
                    this.$mount(se(this.container, this.template)), this.caption = we(".uk-lightbox-caption", this.$el), this.items.forEach(function() {
                        return se(t.list, "<li></li>")
                    })
                },
                events: [{
                    name: Gt + " " + Kt + " keydown",
                    handler: "showControls"
                }, {
                    name: "click",
                    self: !0,
                    delegate: function() {
                        return this.slidesSelector
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide()
                    }
                }, {
                    name: "shown",
                    self: !0,
                    handler: function() {
                        this.startAutoplay(), this.showControls()
                    }
                }, {
                    name: "hide",
                    self: !0,
                    handler: function() {
                        this.stopAutoplay(), this.hideControls(), ke(this.slides, this.clsActive), Fe.stop(this.slides)
                    }
                }, {
                    name: "keyup",
                    el: document,
                    handler: function(t) {
                        if (this.isToggled(this.$el)) switch (t.keyCode) {
                            case 37:
                                this.show("previous");
                                break;
                            case 39:
                                this.show("next")
                        }
                    }
                }, {
                    name: "beforeitemshow",
                    handler: function(t) {
                        this.isToggled() || (this.preventCatch = !0, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = kr.scale, ke(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                    }
                }, {
                    name: "itemshow",
                    handler: function(t) {
                        var e = ne(t.target),
                            n = this.getItem(e).caption;
                        Oe(this.caption, "display", n ? "" : "none"), oe(this.caption, n);
                        for (var i = 0; i <= this.preload; i++) this.loadItem(this.getIndex(e + i)), this.loadItem(this.getIndex(e - i))
                    }
                }, {
                    name: "itemshown",
                    handler: function() {
                        this.preventCatch = !1
                    }
                }, {
                    name: "itemload",
                    handler: function(t, r) {
                        var o, s = this,
                            e = r.source,
                            n = r.type,
                            i = r.alt;
                        if (this.setItem(r, "<span uk-spinner></span>"), e)
                            if ("image" === n || e.match(/\.(jp(e)?g|png|gif|svg)($|\?)/i)) Vt(e).then(function(t) {
                                return s.setItem(r, '<img width="' + t.width + '" height="' + t.height + '" src="' + e + '" alt="' + (i || "") + '">')
                            }, function() {
                                return s.setError(r)
                            });
                            else if ("video" === n || e.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                            var a = we("<video controls playsinline" + (r.poster ? ' poster="' + r.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>');
                            Z(a, "src", e), Tt(a, "error", function() {
                                return s.setError(r)
                            }), Tt(a, "loadedmetadata", function() {
                                Z(a, {
                                    width: a.videoWidth,
                                    height: a.videoHeight
                                }), s.setItem(r, a)
                            })
                        } else if ("iframe" === n || e.match(/\.(html|php)($|\?)/i)) this.setItem(r, '<iframe class="uk-lightbox-iframe" src="' + e + '" frameborder="0" allowfullscreen></iframe>');
                        else if (o = e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || e.match(/()youtu\.be\/(.*)/)) {
                            var l = o[2],
                                h = function(t, e) {
                                    return void 0 === t && (t = 640), void 0 === e && (e = 450), s.setItem(r, Cr("https://www.youtube" + (o[1] || "") + ".com/embed/" + l, t, e, s.videoAutoplay))
                                };
                            Vt("https://img.youtube.com/vi/" + l + "/maxresdefault.jpg").then(function(t) {
                                var e = t.width,
                                    n = t.height;
                                120 === e && 90 === n ? Vt("https://img.youtube.com/vi/" + l + "/0.jpg").then(function(t) {
                                    var e = t.width,
                                        n = t.height;
                                    return h(e, n)
                                }, h) : h(e, n)
                            }, h)
                        } else(o = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && Ft("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(e), {
                            responseType: "json",
                            withCredentials: !1
                        }).then(function(t) {
                            var e = t.response,
                                n = e.height,
                                i = e.width;
                            return s.setItem(r, Cr("https://player.vimeo.com/video/" + o[2], i, n, s.videoAutoplay))
                        }, function() {
                            return s.setError(r)
                        })
                    }
                }],
                methods: {
                    loadItem: function(t) {
                        void 0 === t && (t = this.index);
                        var e = this.getItem(t);
                        e.content || At(this.$el, "itemload", [e])
                    },
                    getItem: function(t) {
                        return void 0 === t && (t = this.index), this.items[t] || {}
                    },
                    setItem: function(t, e) {
                        Y(t, {
                            content: e
                        });
                        var n = oe(this.slides[this.items.indexOf(t)], e);
                        At(this.$el, "itemloaded", [this, n]), this.$update(n)
                    },
                    setError: function(t) {
                        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                    },
                    showControls: function() {
                        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), xe(this.$el, "uk-active", "uk-transition-active")
                    },
                    hideControls: function() {
                        ke(this.$el, "uk-active", "uk-transition-active")
                    }
                }
            };

        function Cr(t, e, n, i) {
            return '<iframe src="' + t + '" width="' + e + '" height="' + n + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + i + '" uk-responsive></iframe>'
        }
        var Ar, _r = {
            install: function(t, e) {
                t.lightboxPanel || t.component("lightboxPanel", Er);
                Y(e.props, t.component("lightboxPanel").options.props)
            },
            props: {
                toggle: String
            },
            data: {
                toggle: "a"
            },
            computed: {
                toggles: function(t, e) {
                    return be(t.toggle, e)
                }
            },
            disconnected: function() {
                this._destroy()
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.toggle + ":not(.uk-disabled)"
                },
                handler: function(t) {
                    t.preventDefault(), t.current.blur(), this.show(ne(this.toggles, t.current))
                }
            }],
            update: function(t) {
                var e, n;
                (t.toggles = this.panel && t.toggles || this.toggles, this.panel && (e = t.toggles, n = this.toggles, e.length !== n.length || !e.every(function(t, e) {
                    return t === n[e]
                }))) && (t.toggles = this.toggles, this._destroy(), this._init())
            },
            methods: {
                _init: function() {
                    return this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, {
                        items: this.toggles.reduce(function(t, n) {
                            return t.push(["href", "caption", "type", "poster", "alt"].reduce(function(t, e) {
                                return t["href" === e ? "source" : e] = et(n, e), t
                            }, {})), t
                        }, [])
                    }))
                },
                _destroy: function() {
                    this.panel && (this.panel.$destroy(!0), this.panel = null)
                },
                show: function(t) {
                    return this.panel || this._init(), this.panel.show(t)
                },
                hide: function() {
                    return this.panel && this.panel.hide()
                }
            }
        };
        var Nr = {},
            Or = {
                functional: !0,
                args: ["message", "status"],
                data: {
                    message: "",
                    status: "",
                    timeout: 5e3,
                    group: null,
                    pos: "top-center",
                    clsClose: "uk-notification-close",
                    clsMsg: "uk-notification-message"
                },
                install: function(r) {
                    r.notification.closeAll = function(n, i) {
                        ve(document.body, function(t) {
                            var e = r.getComponent(t, "notification");
                            !e || n && n !== e.group || e.close(i)
                        })
                    }
                },
                created: function() {
                    Nr[this.pos] || (Nr[this.pos] = se(this.$container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>'));
                    var t = Oe(Nr[this.pos], "display", "block");
                    this.$mount(se(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
                },
                connected: function() {
                    var t = this,
                        e = P(Oe(this.$el, "marginBottom"));
                    Fe.start(Oe(this.$el, {
                        opacity: 0,
                        marginTop: -this.$el.offsetHeight,
                        marginBottom: 0
                    }), {
                        opacity: 1,
                        marginTop: 0,
                        marginBottom: e
                    }).then(function() {
                        t.timeout && (t.timer = setTimeout(t.close, t.timeout))
                    })
                },
                events: (Ar = {
                    click: function(t) {
                        mt(t.target, 'a[href="#"]') && t.preventDefault(), this.close()
                    }
                }, Ar[Zt] = function() {
                    this.timer && clearTimeout(this.timer)
                }, Ar[Qt] = function() {
                    this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                }, Ar),
                methods: {
                    close: function(t) {
                        var e = this,
                            n = function() {
                                At(e.$el, "close", [e]), ce(e.$el), Nr[e.pos].children.length || Oe(Nr[e.pos], "display", "none")
                            };
                        this.timer && clearTimeout(this.timer), t ? n() : Fe.start(this.$el, {
                            opacity: 0,
                            marginTop: -this.$el.offsetHeight,
                            marginBottom: 0
                        }).then(n)
                    }
                }
            };
        var Mr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"],
            Br = {
                mixins: [Hi],
                props: Mr.reduce(function(t, e) {
                    return t[e] = "list", t
                }, {}),
                data: Mr.reduce(function(t, e) {
                    return t[e] = void 0, t
                }, {}),
                computed: {
                    props: function(f, p) {
                        var m = this;
                        return Mr.reduce(function(t, e) {
                            if (B(f[e])) return t;
                            var n, i, r, o = e.match(/color/i),
                                s = o || "opacity" === e,
                                a = f[e].slice(0);
                            s && Oe(p, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? Oe(p, e) : 0) || 0);
                            var l = b(a.join(""), "%") ? "%" : "px";
                            if (o) {
                                var h = p.style.color;
                                a = a.map(function(t) {
                                    return Oe(Oe(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function(t) {
                                        return P(t)
                                    })
                                }), p.style.color = h
                            } else a = a.map(P);
                            if (e.match(/^bg/))
                                if (Oe(p, "background-position-" + e[2], ""), i = Oe(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], m.covers) {
                                    var c = Math.min.apply(Math, a),
                                        u = Math.max.apply(Math, a),
                                        d = a.indexOf(c) < a.indexOf(u);
                                    r = u - c, a = a.map(function(t) {
                                        return t - (d ? c : u)
                                    }), n = (d ? -r : 0) + "px"
                                } else n = i;
                            return t[e] = {
                                steps: a,
                                unit: l,
                                pos: n,
                                bgPos: i,
                                diff: r
                            }, t
                        }, {})
                    },
                    bgProps: function() {
                        var e = this;
                        return ["bgx", "bgy"].filter(function(t) {
                            return t in e.props
                        })
                    },
                    covers: function(t, e) {
                        return i = (n = e).style.backgroundSize, r = "cover" === Oe(Oe(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, r;
                        var n, i, r
                    }
                },
                disconnected: function() {
                    delete this._image
                },
                update: {
                    read: function(t) {
                        var l = this;
                        if (t.active = this.matchMedia, t.active) {
                            if (!t.image && this.covers && this.bgProps.length) {
                                var e = Oe(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                                if (e) {
                                    var n = new Image;
                                    n.src = e, (t.image = n).naturalWidth || (n.onload = function() {
                                        return l.$emit()
                                    })
                                }
                            }
                            var i = t.image;
                            if (i && i.naturalWidth) {
                                var h = {
                                        width: this.$el.offsetWidth,
                                        height: this.$el.offsetHeight
                                    },
                                    c = {
                                        width: i.naturalWidth,
                                        height: i.naturalHeight
                                    },
                                    u = J.cover(c, h);
                                this.bgProps.forEach(function(t) {
                                    var e = l.props[t],
                                        n = e.diff,
                                        i = e.bgPos,
                                        r = e.steps,
                                        o = "bgy" === t ? "height" : "width",
                                        s = u[o] - h[o];
                                    if (i.match(/%$|0px/)) {
                                        if (s < n) h[o] = u[o] + n - s;
                                        else if (n < s) {
                                            var a = parseFloat(i);
                                            a && (l.props[t].steps = r.map(function(t) {
                                                return t - (s - n) / (100 / a)
                                            }))
                                        }
                                        u = J.cover(c, h)
                                    }
                                }), t.dim = u
                            }
                        }
                    },
                    write: function(t) {
                        var e = t.dim;
                        t.active ? e && Oe(this.$el, {
                            backgroundSize: e.width + "px " + e.height + "px",
                            backgroundRepeat: "no-repeat"
                        }) : Oe(this.$el, {
                            backgroundSize: "",
                            backgroundRepeat: ""
                        })
                    },
                    events: ["load", "resize"]
                },
                methods: {
                    reset: function() {
                        var n = this;
                        R(this.getCss(0), function(t, e) {
                            return Oe(n.$el, e, "")
                        })
                    },
                    getCss: function(p) {
                        var m = this.props,
                            g = !1;
                        return Object.keys(m).reduce(function(t, e) {
                            var n = m[e],
                                i = n.steps,
                                r = n.unit,
                                o = n.pos,
                                s = zr(i, p);
                            switch (e) {
                                case "x":
                                case "y":
                                    if (g) break;
                                    var a = ["x", "y"].map(function(t) {
                                            return e === t ? P(s).toFixed(0) + r : m[t] ? zr(m[t].steps, p, 0) + m[t].unit : 0
                                        }),
                                        l = a[0],
                                        h = a[1];
                                    g = t.transform += " translate3d(" + l + ", " + h + ", 0)";
                                    break;
                                case "rotate":
                                    t.transform += " rotate(" + s + "deg)";
                                    break;
                                case "scale":
                                    t.transform += " scale(" + s + ")";
                                    break;
                                case "bgy":
                                case "bgx":
                                    t["background-position-" + e[2]] = "calc(" + o + " + " + (s + r) + ")";
                                    break;
                                case "color":
                                case "backgroundColor":
                                case "borderColor":
                                    var c = Dr(i, p),
                                        u = c[0],
                                        d = c[1],
                                        f = c[2];
                                    t[e] = "rgba(" + u.map(function(t, e) {
                                        return t += f * (d[e] - t), 3 === e ? P(t) : parseInt(t, 10)
                                    }).join(",") + ")";
                                    break;
                                case "blur":
                                    t.filter += " blur(" + s + "px)";
                                    break;
                                case "hue":
                                    t.filter += " hue-rotate(" + s + "deg)";
                                    break;
                                case "fopacity":
                                    t.filter += " opacity(" + s + "%)";
                                    break;
                                case "grayscale":
                                case "invert":
                                case "saturate":
                                case "sepia":
                                    t.filter += " " + e + "(" + s + "%)";
                                    break;
                                default:
                                    t[e] = s
                            }
                            return t
                        }, {
                            transform: "",
                            filter: ""
                        })
                    }
                }
            };

        function Dr(t, e) {
            var n = t.length - 1,
                i = Math.min(Math.floor(n * e), n - 1),
                r = t.slice(i, i + 2);
            return r.push(1 === e ? 1 : e % (1 / n) * n), r
        }

        function zr(t, e, n) {
            void 0 === n && (n = 2);
            var i = Dr(t, e),
                r = i[0],
                o = i[1],
                s = i[2];
            return (O(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(n)
        }
        var Pr = {
            mixins: [Br],
            props: {
                target: String,
                viewport: Number,
                easing: Number
            },
            data: {
                target: !1,
                viewport: 1,
                easing: 1
            },
            computed: {
                target: function(t, e) {
                    var n = t.target;
                    return n && nt(n, e) || e
                }
            },
            update: {
                read: function(t, e) {
                    var n = t.percent,
                        i = t.active;
                    if ("scroll" !== e.type && (n = !1), i) {
                        var r, o, s = n;
                        return r = hn(this.target) / (this.viewport || 1), o = this.easing, {
                            percent: n = U(r * (1 - (o - o * r))),
                            style: s !== n && this.getCss(n)
                        }
                    }
                },
                write: function(t) {
                    var e = t.style;
                    t.active ? e && Oe(this.$el, e) : this.reset()
                },
                events: ["scroll", "load", "resize"]
            }
        };
        var Hr = {
            update: {
                write: function() {
                    if (!this.stack.length && !this.dragging) {
                        var t = this.getValidIndex();
                        delete this.index, ke(this.slides, this.clsActive, this.clsActivated), this.show(t)
                    }
                },
                events: ["load", "resize"]
            }
        };

        function Lr(t, e, n) {
            var i, r = Fr(t, e);
            return n ? r - (i = t, Vr(e).width / 2 - Vr(i).width / 2) : Math.min(r, jr(e))
        }

        function jr(t) {
            return Math.max(0, Wr(t) - Vr(t).width)
        }

        function Wr(t) {
            return Rr(t).reduce(function(t, e) {
                return Vr(e).width + t
            }, 0)
        }

        function Fr(t, e) {
            return (Ze(t).left + (Rt ? Vr(t).width - Vr(e).width : 0)) * (Rt ? -1 : 1)
        }

        function Vr(t) {
            return t.getBoundingClientRect()
        }

        function Yr(t, e, n) {
            At(t, _t(e, !1, !1, n))
        }

        function Rr(t) {
            return j(t.children)
        }
        var qr = {
                mixins: [Yn, Ir, Hr],
                props: {
                    center: Boolean,
                    sets: Boolean
                },
                data: {
                    center: !1,
                    sets: !1,
                    attrItem: "uk-slider-item",
                    selList: ".uk-slider-items",
                    selNav: ".uk-slider-nav",
                    clsContainer: "uk-slider-container",
                    Transitioner: function(r, i, o, t) {
                        var e = t.center,
                            s = t.easing,
                            a = t.list,
                            l = new Pt,
                            n = r ? Lr(r, a, e) : Lr(i, a, e) + Vr(i).width * o,
                            h = i ? Lr(i, a, e) : n + Vr(r).width * o * (Rt ? -1 : 1);
                        return {
                            dir: o,
                            show: function(t, e, n) {
                                void 0 === e && (e = 0);
                                var i = n ? "linear" : s;
                                return t -= Math.round(t * U(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : U(e, 0, 1), Yr(this.getItemIn(), "itemin", {
                                    percent: e,
                                    duration: t,
                                    timing: i,
                                    dir: o
                                }), r && Yr(this.getItemIn(!0), "itemout", {
                                    percent: 1 - e,
                                    duration: t,
                                    timing: i,
                                    dir: o
                                }), Fe.start(a, {
                                    transform: yr(-h * (Rt ? -1 : 1), "px")
                                }, t, i).then(l.resolve, X), l.promise
                            },
                            stop: function() {
                                return Fe.stop(a)
                            },
                            cancel: function() {
                                Fe.cancel(a)
                            },
                            reset: function() {
                                Oe(a, "transform", "")
                            },
                            forward: function(t, e) {
                                return void 0 === e && (e = this.percent()), Fe.cancel(a), this.show(t, e, !0)
                            },
                            translate: function(t) {
                                var e = this.getDistance() * o * (Rt ? -1 : 1);
                                Oe(a, "transform", yr(U(e - e * t - h, -Wr(a), Vr(a).width) * (Rt ? -1 : 1), "px")), this.updateTranslates(), r && (t = U(t, -1, 1), Yr(this.getItemIn(), "itemtranslatein", {
                                    percent: t,
                                    dir: o
                                }), Yr(this.getItemIn(!0), "itemtranslateout", {
                                    percent: 1 - t,
                                    dir: o
                                }))
                            },
                            percent: function() {
                                return Math.abs((Oe(a, "transform").split(",")[4] * (Rt ? -1 : 1) + n) / (h - n))
                            },
                            getDistance: function() {
                                return Math.abs(h - n)
                            },
                            getItemIn: function(t) {
                                void 0 === t && (t = !1);
                                var e = this.getActives(),
                                    n = q(Rr(a), "offsetLeft"),
                                    i = ne(n, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
                                return ~i && n[i + (r && !t ? o : 0)]
                            },
                            getActives: function() {
                                var n = Lr(r || i, a, e);
                                return q(Rr(a).filter(function(t) {
                                    var e = Fr(t, a);
                                    return n <= e && e + Vr(t).width <= Vr(a).width + n
                                }), "offsetLeft")
                            },
                            updateTranslates: function() {
                                var n = this.getActives();
                                Rr(a).forEach(function(t) {
                                    var e = b(n, t);
                                    Yr(t, "itemtranslate" + (e ? "in" : "out"), {
                                        percent: e ? 1 : 0,
                                        dir: t.offsetLeft <= i.offsetLeft ? 1 : -1
                                    })
                                })
                            }
                        }
                    }
                },
                computed: {
                    avgWidth: function() {
                        return Wr(this.list) / this.length
                    },
                    finite: function(t) {
                        return t.finite || Wr(this.list) < Vr(this.list).width + Rr(this.list).reduce(function(t, e) {
                            return Math.max(t, Vr(e).width)
                        }, 0) + this.center
                    },
                    maxIndex: function() {
                        if (!this.finite || this.center && !this.sets) return this.length - 1;
                        if (this.center) return this.sets[this.sets.length - 1];
                        Oe(this.slides, "order", "");
                        for (var t = jr(this.list), e = this.length; e--;)
                            if (Fr(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                        return 0
                    },
                    sets: function(t) {
                        var o = this,
                            e = t.sets,
                            s = Vr(this.list).width / (this.center ? 2 : 1),
                            a = 0,
                            l = s,
                            h = 0;
                        return (e = e && this.slides.reduce(function(t, e, n) {
                            var i = Vr(e).width;
                            if (a < h + i && (!o.center && n > o.maxIndex && (n = o.maxIndex), !b(t, n))) {
                                var r = o.slides[n + 1];
                                o.center && r && i < l - Vr(r).width / 2 ? l -= i : (l = s, t.push(n), a = h + s + (o.center ? i / 2 : 0))
                            }
                            return h += i, t
                        }, [])) && e.length && e
                    },
                    transitionOptions: function() {
                        return {
                            center: this.center,
                            list: this.list
                        }
                    }
                },
                connected: function() {
                    Te(this.$el, this.clsContainer, !we("." + this.clsContainer, this.$el))
                },
                update: {
                    write: function() {
                        var n = this;
                        be("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function(t) {
                            var e = et(t, n.attrItem);
                            n.maxIndex && Te(t, "uk-hidden", M(e) && (n.sets && !b(n.sets, P(e)) || e > n.maxIndex))
                        })
                    },
                    events: ["load", "resize"]
                },
                events: {
                    beforeitemshow: function(t) {
                        !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
                        var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                        if (!this.dragging && 1 < e) {
                            for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                            t.preventDefault()
                        } else this.duration = Sr(this.avgWidth / this.velocity) * (Vr(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
                    },
                    itemshow: function() {
                        !B(this.prevIndex) && xe(this._getTransitioner().getItemIn(), this.clsActive)
                    },
                    itemshown: function() {
                        var e = this,
                            n = this._getTransitioner(this.index).getActives();
                        this.slides.forEach(function(t) {
                            return Te(t, e.clsActive, b(n, t))
                        }), (!this.sets || b(this.sets, P(this.index))) && this.slides.forEach(function(t) {
                            return Te(t, e.clsActivated, b(n, t))
                        })
                    }
                },
                methods: {
                    reorder: function() {
                        var n = this;
                        if (Oe(this.slides, "order", ""), !this.finite) {
                            var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                            if (this.slides.forEach(function(t, e) {
                                    return Oe(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "")
                                }), this.center)
                                for (var t = this.slides[i], e = Vr(this.list).width / 2 - Vr(t).width / 2, r = 0; 0 < e;) {
                                    var o = n.getIndex(--r + i, i),
                                        s = n.slides[o];
                                    Oe(s, "order", i < o ? -2 : -1), e -= Vr(s).width
                                }
                        }
                    },
                    getValidIndex: function(t, e) {
                        var n;
                        if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                        do {
                            if (b(this.sets, t)) return t;
                            n = t, t = this.getIndex(t + this.dir, e)
                        } while (t !== n);
                        return t
                    }
                }
            },
            Ur = {
                mixins: [Br],
                data: {
                    selItem: "!li"
                },
                computed: {
                    item: function(t, e) {
                        return nt(t.selItem, e)
                    }
                },
                events: [{
                    name: "itemshown",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function() {
                        Oe(this.$el, this.getCss(.5))
                    }
                }, {
                    name: "itemin itemout",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function(t) {
                        var e = t.type,
                            n = t.detail,
                            i = n.percent,
                            r = n.duration,
                            o = n.timing,
                            s = n.dir;
                        Fe.cancel(this.$el), Oe(this.$el, this.getCss(Kr(e, s, i))), Fe.start(this.$el, this.getCss(Xr(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(X)
                    }
                }, {
                    name: "transitioncanceled transitionend",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function() {
                        Fe.cancel(this.$el)
                    }
                }, {
                    name: "itemtranslatein itemtranslateout",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function(t) {
                        var e = t.type,
                            n = t.detail,
                            i = n.percent,
                            r = n.dir;
                        Fe.cancel(this.$el), Oe(this.$el, this.getCss(Kr(e, r, i)))
                    }
                }]
            };

        function Xr(t) {
            return u(t, "in")
        }

        function Kr(t, e, n) {
            return n /= 2, Xr(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n
        }
        var Gr, Jr, Zr = Y({}, wr, {
                fade: {
                    show: function() {
                        return [{
                            opacity: 0,
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    },
                    percent: function(t) {
                        return 1 - Oe(t, "opacity")
                    },
                    translate: function(t) {
                        return [{
                            opacity: 1 - t,
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    }
                },
                scale: {
                    show: function() {
                        return [{
                            opacity: 0,
                            transform: xr(1.5),
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    },
                    percent: function(t) {
                        return 1 - Oe(t, "opacity")
                    },
                    translate: function(t) {
                        return [{
                            opacity: 1 - t,
                            transform: xr(1 + .5 * t),
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    }
                },
                pull: {
                    show: function(t) {
                        return t < 0 ? [{
                            transform: yr(30),
                            zIndex: -1
                        }, {
                            transform: yr(),
                            zIndex: 0
                        }] : [{
                            transform: yr(-100),
                            zIndex: 0
                        }, {
                            transform: yr(),
                            zIndex: -1
                        }]
                    },
                    percent: function(t, e, n) {
                        return n < 0 ? 1 - br(e) : br(t)
                    },
                    translate: function(t, e) {
                        return e < 0 ? [{
                            transform: yr(30 * t),
                            zIndex: -1
                        }, {
                            transform: yr(-100 * (1 - t)),
                            zIndex: 0
                        }] : [{
                            transform: yr(100 * -t),
                            zIndex: 0
                        }, {
                            transform: yr(30 * (1 - t)),
                            zIndex: -1
                        }]
                    }
                },
                push: {
                    show: function(t) {
                        return t < 0 ? [{
                            transform: yr(100),
                            zIndex: 0
                        }, {
                            transform: yr(),
                            zIndex: -1
                        }] : [{
                            transform: yr(-30),
                            zIndex: -1
                        }, {
                            transform: yr(),
                            zIndex: 0
                        }]
                    },
                    percent: function(t, e, n) {
                        return 0 < n ? 1 - br(e) : br(t)
                    },
                    translate: function(t, e) {
                        return e < 0 ? [{
                            transform: yr(100 * t),
                            zIndex: 0
                        }, {
                            transform: yr(-30 * (1 - t)),
                            zIndex: -1
                        }] : [{
                            transform: yr(-30 * t),
                            zIndex: -1
                        }, {
                            transform: yr(100 * (1 - t)),
                            zIndex: 0
                        }]
                    }
                }
            }),
            Qr = {
                mixins: [Yn, Tr, Hr],
                props: {
                    ratio: String,
                    minHeight: Boolean,
                    maxHeight: Boolean
                },
                data: {
                    ratio: "16:9",
                    minHeight: !1,
                    maxHeight: !1,
                    selList: ".uk-slideshow-items",
                    attrItem: "uk-slideshow-item",
                    selNav: ".uk-slideshow-nav",
                    Animations: Zr
                },
                update: {
                    read: function() {
                        var t = this.ratio.split(":").map(Number),
                            e = t[0],
                            n = t[1];
                        return n = n * this.list.offsetWidth / e, this.minHeight && (n = Math.max(this.minHeight, n)), this.maxHeight && (n = Math.min(this.maxHeight, n)), {
                            height: n - nn(this.list, "content-box")
                        }
                    },
                    write: function(t) {
                        var e = t.height;
                        Oe(this.list, "minHeight", e)
                    },
                    events: ["load", "resize"]
                }
            },
            to = {
                mixins: [Yn, cr],
                props: {
                    group: String,
                    threshold: Number,
                    clsItem: String,
                    clsPlaceholder: String,
                    clsDrag: String,
                    clsDragState: String,
                    clsBase: String,
                    clsNoDrag: String,
                    clsEmpty: String,
                    clsCustom: String,
                    handle: String
                },
                data: {
                    group: !1,
                    threshold: 5,
                    clsItem: "uk-sortable-item",
                    clsPlaceholder: "uk-sortable-placeholder",
                    clsDrag: "uk-sortable-drag",
                    clsDragState: "uk-drag",
                    clsBase: "uk-sortable",
                    clsNoDrag: "uk-sortable-nodrag",
                    clsEmpty: "uk-sortable-empty",
                    clsCustom: "",
                    handle: !1
                },
                created: function() {
                    var o = this;
                    ["init", "start", "move", "end"].forEach(function(t) {
                        var r = o[t];
                        o[t] = function(t) {
                            o.scrollY = window.pageYOffset;
                            var e = zn(t),
                                n = e.x,
                                i = e.y;
                            o.pos = {
                                x: n,
                                y: i
                            }, r(t)
                        }
                    })
                },
                events: (Gr = {}, Gr[Kt] = "init", Gr),
                update: {
                    write: function() {
                        if (this.clsEmpty && Te(this.$el, this.clsEmpty, !this.$el.children.length), Oe(this.handle ? be(this.handle, this.$el) : this.$el.children, "touchAction", "none"), this.drag) {
                            Ge(this.drag, {
                                top: this.pos.y + this.origin.top,
                                left: this.pos.x + this.origin.left
                            });
                            var t, e = Ge(this.drag),
                                n = e.top,
                                i = n + e.height;
                            0 < n && n < this.scrollY ? t = this.scrollY - 5 : i < Qe(document) && i > Qe(window) + this.scrollY && (t = this.scrollY + 5), t && setTimeout(function() {
                                return cn(window, t)
                            }, 5)
                        }
                    }
                },
                methods: {
                    init: function(t) {
                        var e = t.target,
                            n = t.button,
                            i = t.defaultPrevented,
                            r = j(this.$el.children).filter(function(t) {
                                return St(e, t)
                            })[0];
                        !r || $t(t.target) || this.handle && !St(e, this.handle) || 0 < n || St(e, "." + this.clsNoDrag) || i || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = Y({
                            target: e,
                            index: ne(r)
                        }, this.pos), Tt(document, Gt, this.move), Tt(document, Jt, this.end), Tt(window, "scroll", this.scroll), this.threshold || this.start(t))
                    },
                    start: function(t) {
                        this.drag = se(this.$container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), Oe(this.drag, Y({
                            boxSizing: "border-box",
                            width: this.placeholder.offsetWidth,
                            height: this.placeholder.offsetHeight
                        }, Oe(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), Z(this.drag, "uk-no-boot", ""), xe(this.drag, this.clsDrag, this.clsCustom), Qe(this.drag.firstElementChild, Qe(this.placeholder.firstElementChild));
                        var e = Ge(this.placeholder),
                            n = e.left,
                            i = e.top;
                        Y(this.origin, {
                            left: n - this.pos.x,
                            top: i - this.pos.y
                        }), xe(this.placeholder, this.clsPlaceholder), xe(this.$el.children, this.clsItem), xe(document.documentElement, this.clsDragState), At(this.$el, "start", [this, this.placeholder]), this.move(t)
                    },
                    move: function(t) {
                        if (this.drag) {
                            this.$emit();
                            var e = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset),
                                n = this.getSortable(e),
                                i = this.getSortable(this.placeholder),
                                r = n !== i;
                            if (n && !St(e, this.placeholder) && (!r || n.group && n.group === i.group)) {
                                if (e = n.$el === e.parentNode && e || j(n.$el.children).filter(function(t) {
                                        return St(e, t)
                                    })[0], r) i.remove(this.placeholder);
                                else if (!e) return;
                                n.insert(this.placeholder, e), b(this.touched, n) || this.touched.push(n)
                            }
                        } else(Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                    },
                    end: function(t) {
                        if (Et(document, Gt, this.move), Et(document, Jt, this.end), Et(window, "scroll", this.scroll), this.drag) {
                            Dt();
                            var e = this.getSortable(this.placeholder);
                            this === e ? this.origin.index !== ne(this.placeholder) && At(this.$el, "moved", [this, this.placeholder]) : (At(e.$el, "added", [e, this.placeholder]), At(this.$el, "removed", [this, this.placeholder])), At(this.$el, "stop", [this, this.placeholder]), ce(this.drag), this.drag = null;
                            var n = this.touched.map(function(t) {
                                return t.clsPlaceholder + " " + t.clsItem
                            }).join(" ");
                            this.touched.forEach(function(t) {
                                return ke(t.$el.children, n)
                            }), ke(document.documentElement, this.clsDragState)
                        } else "mouseup" !== t.type && St(t.target, "a[href]") && (location.href = mt(t.target, "a[href]").href)
                    },
                    scroll: function() {
                        var t = window.pageYOffset;
                        t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit())
                    },
                    insert: function(n, i) {
                        var r = this;
                        xe(this.$el.children, this.clsItem);
                        var t = function() {
                            var t, e;
                            i ? !St(n, r.$el) || (e = i, (t = n).parentNode === e.parentNode && ne(t) > ne(e)) ? ae(i, n) : le(i, n) : se(r.$el, n)
                        };
                        this.animation ? this.animate(t) : t()
                    },
                    remove: function(t) {
                        St(t, this.$el) && (this.animation ? this.animate(function() {
                            return ce(t)
                        }) : ce(t))
                    },
                    getSortable: function(t) {
                        return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode))
                    }
                }
            };
        var eo = [],
            no = {
                mixins: [Fi, Rn, Qn],
                args: "title",
                props: {
                    delay: Number,
                    title: String
                },
                data: {
                    pos: "top",
                    title: "",
                    delay: 0,
                    animation: ["uk-animation-scale-up"],
                    duration: 100,
                    cls: "uk-active",
                    clsPos: "uk-tooltip"
                },
                beforeConnect: function() {
                    this._hasTitle = Q(this.$el, "title"), Z(this.$el, {
                        title: "",
                        "aria-expanded": !1
                    })
                },
                disconnected: function() {
                    this.hide(), Z(this.$el, {
                        title: this._hasTitle ? this.title : null,
                        "aria-expanded": null
                    })
                },
                methods: {
                    show: function() {
                        var e = this;
                        b(eo, this) || (eo.forEach(function(t) {
                            return t.hide()
                        }), eo.push(this), this._unbind = Tt(document, "click", function(t) {
                            return !St(t.target, e.$el) && e.hide()
                        }), clearTimeout(this.showTimer), this.showTimer = setTimeout(function() {
                            e._show(), e.hideTimer = setInterval(function() {
                                xt(e.$el) || e.hide()
                            }, 150)
                        }, this.delay))
                    },
                    hide: function() {
                        var t = eo.indexOf(this);
                        !~t || ft(this.$el, "input") && this.$el === document.activeElement || (eo.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), Z(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && ce(this.tooltip), this.tooltip = !1, this._unbind())
                    },
                    _show: function() {
                        this.tooltip = se(this.container, '<div class="' + this.clsPos + '" aria-expanded="true" aria-hidden> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? an(this.dir) + "-" + this.align : this.align + "-" + an(this.dir), this.toggleElement(this.tooltip, !0)
                    }
                },
                events: (Jr = {}, Jr["focus " + Zt + " " + Kt] = function(t) {
                    t.type === Kt && Dn(t) || this.show()
                }, Jr.blur = "hide", Jr[Qt] = function(t) {
                    Dn(t) || this.hide()
                }, Jr)
            },
            io = {
                props: {
                    allow: String,
                    clsDragover: String,
                    concurrent: Number,
                    maxSize: Number,
                    method: String,
                    mime: String,
                    msgInvalidMime: String,
                    msgInvalidName: String,
                    msgInvalidSize: String,
                    multiple: Boolean,
                    name: String,
                    params: Object,
                    type: String,
                    url: String
                },
                data: {
                    allow: !1,
                    clsDragover: "uk-dragover",
                    concurrent: 1,
                    maxSize: 0,
                    method: "POST",
                    mime: !1,
                    msgInvalidMime: "Invalid File Type: %s",
                    msgInvalidName: "Invalid File Name: %s",
                    msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                    multiple: !1,
                    name: "files[]",
                    params: {},
                    type: "",
                    url: "",
                    abort: X,
                    beforeAll: X,
                    beforeSend: X,
                    complete: X,
                    completeAll: X,
                    error: X,
                    fail: X,
                    load: X,
                    loadEnd: X,
                    loadStart: X,
                    progress: X
                },
                events: {
                    change: function(t) {
                        ft(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                    },
                    drop: function(t) {
                        oo(t);
                        var e = t.dataTransfer;
                        e && e.files && (ke(this.$el, this.clsDragover), this.upload(e.files))
                    },
                    dragenter: function(t) {
                        oo(t)
                    },
                    dragover: function(t) {
                        oo(t), xe(this.$el, this.clsDragover)
                    },
                    dragleave: function(t) {
                        oo(t), ke(this.$el, this.clsDragover)
                    }
                },
                methods: {
                    upload: function(t) {
                        var i = this;
                        if (t.length) {
                            At(this.$el, "upload", [t]);
                            for (var e = 0; e < t.length; e++) {
                                if (i.maxSize && 1e3 * i.maxSize < t[e].size) return void i.fail(i.msgInvalidSize.replace("%s", i.maxSize));
                                if (i.allow && !ro(i.allow, t[e].name)) return void i.fail(i.msgInvalidName.replace("%s", i.allow));
                                if (i.mime && !ro(i.mime, t[e].type)) return void i.fail(i.msgInvalidMime.replace("%s", i.mime))
                            }
                            this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                            var r = function(t, e) {
                                    for (var n = [], i = 0; i < t.length; i += e) {
                                        for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                                        n.push(r)
                                    }
                                    return n
                                }(t, this.concurrent),
                                o = function(t) {
                                    var e = new FormData;
                                    for (var n in t.forEach(function(t) {
                                            return e.append(i.name, t)
                                        }), i.params) e.append(n, i.params[n]);
                                    Ft(i.url, {
                                        data: e,
                                        method: i.method,
                                        responseType: i.type,
                                        beforeSend: function(t) {
                                            var e = t.xhr;
                                            e.upload && Tt(e.upload, "progress", i.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function(t) {
                                                return Tt(e, t.toLowerCase(), i[t])
                                            }), i.beforeSend(t)
                                        }
                                    }).then(function(t) {
                                        i.complete(t), r.length ? o(r.shift()) : i.completeAll(t)
                                    }, function(t) {
                                        return i.error(t)
                                    })
                                };
                            o(r.shift())
                        }
                    }
                }
            };

        function ro(t, e) {
            return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
        }

        function oo(t) {
            t.preventDefault(), t.stopPropagation()
        }
        return Vn.component("countdown", ar), Vn.component("filter", pr), Vn.component("lightbox", _r), Vn.component("lightboxPanel", Er), Vn.component("notification", Or), Vn.component("parallax", Pr), Vn.component("slider", qr), Vn.component("sliderParallax", Ur), Vn.component("slideshow", Qr), Vn.component("slideshowParallax", Ur), Vn.component("sortable", to), Vn.component("tooltip", no), Vn.component("upload", io),
            function(o) {
                var s = o.connect,
                    a = o.disconnect;

                function t() {
                    l(document.body, s), pn.flush(), new MutationObserver(function(t) {
                        return t.forEach(e)
                    }).observe(document, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                        attributes: !0
                    }), o._initialized = !0
                }

                function e(t) {
                    var e = t.target;
                    ("attributes" !== t.type ? function(t) {
                        for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) l(e[i], s);
                        for (var r = 0; r < n.length; r++) l(n[r], a);
                        return !0
                    }(t) : function(t) {
                        var e = t.target,
                            n = t.attributeName;
                        if ("href" === n) return !0;
                        var i = Hn(n);
                        if (i && i in o) {
                            if (Q(e, n)) return o[i](e), !0;
                            var r = o.getComponent(e, i);
                            return r ? (r.$destroy(), !0) : void 0
                        }
                    }(t)) && o.update(e)
                }

                function l(t, e) {
                    if (1 === t.nodeType && !Q(t, "uk-no-boot"))
                        for (e(t), t = t.firstElementChild; t;) {
                            var n = t.nextElementSibling;
                            l(t, e), t = n
                        }
                }
                "MutationObserver" in window && (document.body ? t() : new MutationObserver(function() {
                    document.body && (this.disconnect(), t())
                }).observe(document, {
                    childList: !0,
                    subtree: !0
                }))
            }(Vn), Vn
    });
    ! function(t, i) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define("uikitflow", i) : t.UIkitFlow = i()
    }(this, function() {
        "use strict";

        function i(t) {
            i.installed || t.icon.add({
                "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z" /> <path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z" /> <path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z" /> <path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z" /></svg>',
                album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="2" width="10" height="1" /> <rect x="3" y="4" width="14" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11" /></svg>',
                "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" /> <line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15" /></svg>',
                "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5" /> <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52" /></svg>',
                "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14" /> <line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5" /></svg>',
                "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4" /> <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5" /></svg>',
                ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5" /></svg>',
                behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z" /> <path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z" /> <rect x="13" y="4" width="5" height="1.4" /></svg>',
                bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z" /> <path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16" /></svg>',
                bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z" /></svg>',
                bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z" /></svg>',
                bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5" /></svg>',
                calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z" /> <rect width="1" height="3" x="6" y="2" /> <rect width="1" height="3" x="13" y="2" /></svg>',
                camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8" /> <path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z" /></svg>',
                cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4" /> <circle cx="13.3" cy="17.3" r="1.4" /> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5" /></svg>',
                check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4" /></svg>',
                "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7" /></svg>',
                "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4" /></svg>',
                "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16" /></svg>',
                "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13" /></svg>',
                clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <rect x="9" y="4" width="1" height="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" /></svg>',
                close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4" /> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16" /></svg>',
                "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6" /> <polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16" /> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5" /></svg>',
                "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6" /> <polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75" /> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5" /></svg>',
                code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16" /></svg>',
                cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31" /> <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z" /></svg>',
                comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z" /></svg>',
                commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5" /> <circle cx="10" cy="8" r="1" /> <circle cx="6" cy="8" r="1" /> <circle cx="14" cy="8" r="1" /></svg>',
                comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13" /> <path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z" /></svg>',
                copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16" /> <polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17" /></svg>',
                "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12" /> <rect x="1" y="7" width="18" height="3" /></svg>',
                database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14" /> <path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11" /> <path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25" /> <path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64" /></svg>',
                desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="8" y="15" width="1" height="2" /> <rect x="11" y="15" width="1" height="2" /> <rect x="5" y="16" width="10" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11" /></svg>',
                download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10" /> <rect x="3" y="17" width="13" height="1" /> <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3" /></svg>',
                dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5" /> <path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6" /> <path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4" /> <circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9" /></svg>',
                expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13 2 18 2 18 7 17 7 17 3 13 3" /> <polygon points="2 13 3 13 3 17 7 17 7 18 2 18" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11" /></svg>',
                facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z" /></svg>',
                "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z" /> <polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5" /></svg>',
                file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17" /></svg>',
                flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="5.5" cy="9.5" r="3.5" /> <circle cx="14.5" cy="9.5" r="3.5" /></svg>',
                folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5" /></svg>',
                forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z" /></svg>',
                foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z" /></svg>',
                future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10" /> <rect x="9" y="4" width="1" height="7" /> <path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1" /></svg>',
                "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2" /> <path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5" /></svg>',
                "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79" /> <ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79" /> <path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57" /></svg>',
                "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z" /></svg>',
                github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z" /></svg>',
                gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3.5" y="1" width="1.531" height="11.471" /> <rect x="7.324" y="4.059" width="1.529" height="15.294" /> <rect x="11.148" y="4.059" width="1.527" height="15.294" /> <rect x="14.971" y="4.059" width="1.529" height="8.412" /></svg>',
                "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z" /> <polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 " /></svg>',
                google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z" /></svg>',
                grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="3" height="3" /> <rect x="8" y="2" width="3" height="3" /> <rect x="14" y="2" width="3" height="3" /> <rect x="2" y="8" width="3" height="3" /> <rect x="8" y="8" width="3" height="3" /> <rect x="14" y="8" width="3" height="3" /> <rect x="2" y="14" width="3" height="3" /> <rect x="8" y="14" width="3" height="3" /> <rect x="14" y="14" width="3" height="3" /></svg>',
                happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="13" cy="7" r="1" /> <circle cx="7" cy="7" r="1" /> <circle fill="none" stroke="#000" cx="10" cy="10" r="8.5" /> <path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4" /></svg>',
                hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z" /></svg>',
                heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z" /></svg>',
                history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10" /> <rect x="9" y="4" width="1" height="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" id="Shape" /></svg>',
                home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65" /> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5" /> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19" /></svg>',
                image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.1" cy="6.1" r="1.1" /> <rect fill="none" stroke="#000" x="0.5" y="2.5" width="19" height="15" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14" /></svg>',
                info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /></svg>',
                instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z" /> <circle cx="14.87" cy="5.26" r="1.09" /> <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z" /></svg>',
                italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z" /></svg>',
                joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z" /> <path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8" /> <path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8" /> <path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7" /></svg>',
                laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect y="16" width="20" height="1" /> <rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10" /></svg>',
                lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z" /></svg>',
                link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975" /></svg>',
                linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z" /> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z" /></svg>',
                list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="4" width="12" height="1" /> <rect x="6" y="9" width="12" height="1" /> <rect x="6" y="14" width="12" height="1" /> <rect x="2" y="4" width="2" height="1" /> <rect x="2" y="9" width="2" height="1" /> <rect x="2" y="14" width="2" height="1" /></svg>',
                location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z" /> <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3" /></svg>',
                lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5" /> <path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8" /></svg>',
                mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5" /> <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z" /></svg>',
                menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="4" width="16" height="1" /> <rect x="2" y="9" width="16" height="1" /> <rect x="2" y="14" width="16" height="1" /></svg>',
                "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg>',
                minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1" /></svg>',
                "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="3" r="2" /> <circle cx="10" cy="10" r="2" /> <circle cx="10" cy="17" r="2" /></svg>',
                more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3" cy="10" r="2" /> <circle cx="10" cy="10" r="2" /> <circle cx="17" cy="10" r="2" /></svg>',
                move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="4,5 1,5 1,9 2,9 2,6 4,6 " /> <polygon points="1,16 2,16 2,18 4,18 4,19 1,19 " /> <polygon points="14,16 14,19 11,19 11,18 13,18 13,16 " /> <rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13" /> <rect x="1" y="11" width="1" height="3" /> <rect x="6" y="18" width="3" height="1" /></svg>',
                nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3" /> <circle fill="none" stroke="#000" cx="10" cy="10" r="3.5" /></svg>',
                pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 " /></svg>',
                "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61" /> <path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z" /></svg>',
                pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z" /> <path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148" /></svg>',
                "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z" /> <circle cx="3.8" cy="10.5" r="0.8" /></svg>',
                phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z" /> <circle cx="10.5" cy="16.5" r="0.8" /></svg>',
                pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1" /></svg>',
                "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /></svg>',
                play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15" /></svg>',
                "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg>',
                plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17" /> <rect x="1" y="9" width="17" height="1" /></svg>',
                pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7" /> <line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2" /> <polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5" /></svg>',
                push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3" /> <line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1" /> <polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5" /></svg>',
                question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <circle cx="10.44" cy="14.42" r="1.05" /> <path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75" /></svg>',
                "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z" /> <path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z" /></svg>',
                receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611" /></svg>',
                refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5" /> <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9" /></svg>',
                reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z" /></svg>',
                rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3.12" cy="16.8" r="1.85" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5" /></svg>',
                search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z" /></svg>',
                server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3" y="3" width="1" height="2" /> <rect x="5" y="3" width="1" height="2" /> <rect x="7" y="3" width="1" height="2" /> <rect x="16" y="3" width="1" height="1" /> <rect x="16" y="10" width="1" height="1" /> <circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4" /> <rect x="3" y="10" width="1" height="2" /> <rect x="5" y="10" width="1" height="2" /> <rect x="9.5" y="14" width="1" height="2" /> <rect x="3" y="17" width="6" height="1" /> <rect x="11" y="17" width="6" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5" /> <rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5" /></svg>',
                settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15" /> <ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15" /> <circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15" /> <rect x="1" y="3" width="3" height="1" /> <rect x="10" y="3" width="8" height="1" /> <rect x="1" y="9" width="8" height="1" /> <rect x="15" y="9" width="3" height="1" /> <rect x="1" y="15" width="3" height="1" /> <rect x="10" y="15" width="8" height="1" /></svg>',
                shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="11 4 12 4 12 8 16 8 16 9 11 9" /> <polygon points="4 11 9 11 9 16 8 16 8 12 4 12" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12" /></svg>',
                "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3" /> <polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5" /></svg>',
                "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5" /> <polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3" /></svg>',
                social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7" /> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3" /></svg>',
                soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z" /> <rect x="6" y="6.5" width="1.5" height="8.5" /> <rect x="3" y="8" width="1.5" height="7" /> <rect y="10" width="1.5" height="5" /></svg>',
                star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27" /></svg>',
                strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z" /> <rect x="3" y="10" width="15" height="1" /></svg>',
                table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="3" width="18" height="1" /> <rect x="1" y="7" width="18" height="1" /> <rect x="1" y="11" width="18" height="1" /> <rect x="1" y="15" width="18" height="1" /></svg>',
                "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z" /> <circle cx="3.7" cy="10.5" r="0.8" /></svg>',
                tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z" /> <circle cx="10.5" cy="16.3" r="0.8" /></svg>',
                tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z" /> <circle cx="14" cy="6" r="1" /></svg>',
                thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5" /></svg>',
                trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3" /> <polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4" /> <rect x="8" y="7" width="1" height="9" /> <rect x="11" y="7" width="1" height="9" /> <rect x="2" y="3" width="16" height="1" /></svg>',
                "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 7 15 7 10 12" /></svg>',
                "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12 5 7 10 12 15" /></svg>',
                "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="8 5 13 10 8 15" /></svg>',
                "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 13 10 8 15 13" /></svg>',
                tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z" /></svg>',
                tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z" /></svg>',
                tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="7" y="16" width="6" height="1" /> <rect fill="none" stroke="#000" x="0.5" y="3.5" width="19" height="11" /></svg>',
                twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74" /></svg>',
                uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3" /> <polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3" /></svg>',
                unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10" /> <path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9" /></svg>',
                upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8 " /> <rect x="3" y="17" width="13" height="1" /> <line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4" /></svg>',
                user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2" /></svg>',
                users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1" /></svg>',
                "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18,6 18,14 12,10 " /> <rect x="2" y="5" width="12" height="10" /></svg>',
                vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z" /></svg>',
                warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="14" r="1" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z" /></svg>',
                whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9" /></svg>',
                wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z" /></svg>',
                world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1,10.5 L19,10.5" /> <path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5" /> <path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5" /> <path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z" /> <circle fill="none" stroke="#000" cx="10" cy="10.5" r="9" /></svg>',
                xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z" /> <path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z" /></svg>',
                yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z" /></svg>',
                youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z" /></svg>',
                marker: '<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"> <circle style="fill: #fff" cx="5.5" cy="5.5" r="5.5"/></svg>'
            })
        }
        return "undefined" != typeof window && window.UIkit && window.UIkit.use(i), i
    });
    (function(UIkit, util) {
        var $ = util.$,
            attr = util.attr,
            css = util.css,
            addClass = util.addClass;
        var selector = '.tm-header ~ [class*="uk-section"], .tm-header ~ * > [class*="uk-section"]';
        UIkit.component('header', {
            update: [{
                read: function(data) {
                    var section = $(selector);
                    var modifier = attr(section, 'tm-header-transparent');
                    if (!modifier || !section) {
                        return false;
                    }
                    data.prevHeight = this.height;
                    data.height = this.$el.offsetHeight;
                    var sticky = UIkit.getComponent($('[uk-sticky]', this.$el), 'sticky');
                    if (sticky) {
                        var dat = sticky.$options.data;
                        if (dat.animation !== 'uk-animation-slide-top') {
                            util.each({
                                animation: 'uk-animation-slide-top',
                                top: selector,
                                clsInactive: 'uk-navbar-transparent uk-' + modifier
                            }, function(value, key) {
                                dat[key] = sticky[key] = sticky.$props[key] = value;
                            });
                        }
                        sticky.$props.top = section.offsetHeight <= window.innerHeight ? selector : util.offset(section).top + 300;
                    }
                },
                write: function(data) {
                    if (!this.placeholder) {
                        var section = $(selector);
                        var modifier = attr(section, 'tm-header-transparent');
                        addClass(this.$el, 'tm-header-transparent');
                        addClass($('.tm-headerbar-top, .tm-headerbar-bottom'), 'uk-' + modifier);
                        this.placeholder = util.hasAttr(section, 'tm-header-transparent-placeholder') && util.before($('[uk-grid]', section), '<div class="tm-header-placeholder uk-margin-remove-adjacent"></div>');
                        var navbar = $('[uk-navbar]', this.$el);
                        if (attr(navbar, 'dropbar-mode') === 'push') {
                            attr(navbar, 'dropbar-mode', 'slide');
                        }
                        if (!$('[uk-sticky]', this.$el)) {
                            addClass($('.uk-navbar-container', this.$el), 'uk-navbar-transparent uk-' + modifier);
                        }
                    }
                    if (this.placeholder && data.prevHeight !== data.height) {
                        css(this.placeholder, {
                            height: data.height
                        });
                    }
                },
                events: ['load', 'resize']
            }]
        });
        if (util.isRtl) {
            var mixin = {
                init: function() {
                    this.$props.pos = util.swap(this.$props.pos, 'left', 'right');
                }
            };
            UIkit.mixin(mixin, 'drop');
            UIkit.mixin(mixin, 'tooltip');
        }
    })(UIkit, UIkit.util);
} catch (e) {
    console.error('Error in file:/templates/yootheme/cache/scripts-9bcd5267.js?v=1.15.7; Error:' + e.message);
};try {
    ! function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : t.UIkit = e()
    }(this, function() {
        "use strict";

        function p(n, i) {
            return function(t) {
                var e = arguments.length;
                return e ? 1 < e ? n.apply(i, arguments) : n.call(i, t) : n.call(i)
            }
        }
        var e = Object.prototype,
            n = e.hasOwnProperty;

        function h(t, e) {
            return n.call(t, e)
        }
        var i = {},
            r = /([a-z\d])([A-Z])/g;

        function m(t) {
            return t in i || (i[t] = t.replace(r, "$1-$2").toLowerCase()), i[t]
        }
        var o = /-(\w)/g;

        function g(t) {
            return t.replace(o, s)
        }

        function s(t, e) {
            return e ? e.toUpperCase() : ""
        }

        function a(t) {
            return t.length ? s(0, t.charAt(0)) + t.slice(1) : ""
        }
        var t = String.prototype,
            l = t.startsWith || function(t) {
                return 0 === this.lastIndexOf(t, 0)
            };

        function v(t, e) {
            return l.call(t, e)
        }
        var c = t.endsWith || function(t) {
            return this.substr(-t.length) === t
        };

        function u(t, e) {
            return c.call(t, e)
        }
        var d = function(t) {
                return ~this.indexOf(t)
            },
            f = t.includes || d,
            w = Array.prototype.includes || d;

        function b(t, e) {
            return t && (N(t) ? f : w).call(t, e)
        }
        var y = Array.isArray;

        function x(t) {
            return "function" == typeof t
        }

        function k(t) {
            return null !== t && "object" == typeof t
        }

        function $(t) {
            return k(t) && Object.getPrototypeOf(t) === e
        }

        function I(t) {
            return k(t) && t === t.window
        }

        function S(t) {
            return k(t) && 9 === t.nodeType
        }

        function T(t) {
            return k(t) && !!t.jquery
        }

        function E(t) {
            return t instanceof Node || k(t) && 1 <= t.nodeType
        }
        var C = e.toString;

        function A(t) {
            return C.call(t).match(/^\[object (NodeList|HTMLCollection)\]$/)
        }

        function _(t) {
            return "boolean" == typeof t
        }

        function N(t) {
            return "string" == typeof t
        }

        function O(t) {
            return "number" == typeof t
        }

        function M(t) {
            return O(t) || N(t) && !isNaN(t - parseFloat(t))
        }

        function B(t) {
            return void 0 === t
        }

        function D(t) {
            return _(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
        }

        function z(t) {
            var e = Number(t);
            return !isNaN(e) && e
        }

        function P(t) {
            return parseFloat(t) || 0
        }

        function H(t) {
            return E(t) || I(t) || S(t) ? t : A(t) || T(t) ? t[0] : y(t) ? H(t[0]) : null
        }
        var L = Array.prototype;

        function j(t) {
            return E(t) ? [t] : A(t) ? L.slice.call(t) : y(t) ? t.map(H).filter(Boolean) : T(t) ? t.toArray() : []
        }

        function W(t) {
            return y(t) ? t : N(t) ? t.split(/,(?![^(]*\))/).map(function(t) {
                return M(t) ? z(t) : D(t.trim())
            }) : [t]
        }

        function F(t) {
            return t ? u(t, "ms") ? P(t) : 1e3 * P(t) : 0
        }

        function V(t, e, n) {
            return t.replace(new RegExp(e + "|" + n, "mg"), function(t) {
                return t === e ? n : e
            })
        }
        var Y = Object.assign || function(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            t = Object(t);
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                if (null !== r)
                    for (var o in r) h(r, o) && (t[o] = r[o])
            }
            return t
        };

        function R(t, e) {
            for (var n in t) e.call(t[n], t[n], n)
        }

        function q(t, r) {
            return t.sort(function(t, e) {
                var n = t[r];
                void 0 === n && (n = 0);
                var i = e[r];
                return void 0 === i && (i = 0), i < n ? 1 : n < i ? -1 : 0
            })
        }

        function U(t, e, n) {
            return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(z(t) || 0, e), n)
        }

        function X() {}

        function K(t, e) {
            return t.left < e.right && t.right > e.left && t.top < e.bottom && t.bottom > e.top
        }

        function G(t, e) {
            return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
        }
        var J = {
            ratio: function(t, e, n) {
                var i, r = "width" === e ? "height" : "width";
                return (i = {})[r] = t[e] ? Math.round(n * t[r] / t[e]) : t[r], i[e] = n, i
            },
            contain: function(n, i) {
                var r = this;
                return R(n = Y({}, n), function(t, e) {
                    return n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n
                }), n
            },
            cover: function(n, i) {
                var r = this;
                return R(n = this.contain(n, i), function(t, e) {
                    return n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n
                }), n
            }
        };

        function Z(t, e, n) {
            if (k(e))
                for (var i in e) Z(t, i, e[i]);
            else {
                if (B(n)) return (t = H(t)) && t.getAttribute(e);
                j(t).forEach(function(t) {
                    x(n) && (n = n.call(t, Z(t, e))), null === n ? tt(t, e) : t.setAttribute(e, n)
                })
            }
        }

        function Q(t, e) {
            return j(t).some(function(t) {
                return t.hasAttribute(e)
            })
        }

        function tt(t, e) {
            t = j(t), e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                    return t.removeAttribute(e)
                })
            })
        }

        function et(t, e) {
            for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
                if (Q(t, i[n])) return Z(t, i[n])
        }

        function nt(t, e) {
            return H(t) || ot(t, rt(t, e))
        }

        function it(t, e) {
            var n = j(t);
            return n.length && n || st(t, rt(t, e))
        }

        function rt(t, e) {
            return void 0 === e && (e = document), ct(t) || S(e) ? e : e.ownerDocument
        }

        function ot(t, e) {
            return H(at(t, e, "querySelector"))
        }

        function st(t, e) {
            return j(at(t, e, "querySelectorAll"))
        }

        function at(t, s, e) {
            if (void 0 === s && (s = document), !t || !N(t)) return null;
            var a;
            ct(t = t.replace(ht, "$1 *")) && (a = [], t = t.split(",").map(function(t, e) {
                var n = s;
                if ("!" === (t = t.trim())[0]) {
                    var i = t.substr(1).trim().split(" ");
                    n = mt(s.parentNode, i[0]), t = i.slice(1).join(" ").trim()
                }
                if ("-" === t[0]) {
                    var r = t.substr(1).trim().split(" "),
                        o = (n || s).previousElementSibling;
                    n = ft(o, t.substr(1)) ? o : null, t = r.slice(1).join(" ")
                }
                return n ? (n.id || (n.id = "uk-" + Date.now() + e, a.push(function() {
                    return tt(n, "id")
                })), "#" + wt(n.id) + " " + t) : null
            }).filter(Boolean).join(","), s = document);
            try {
                return s[e](t)
            } catch (t) {
                return null
            } finally {
                a && a.forEach(function(t) {
                    return t()
                })
            }
        }
        var lt = /(^|,)\s*[!>+~-]/,
            ht = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

        function ct(t) {
            return N(t) && t.match(lt)
        }
        var ut = Element.prototype,
            dt = ut.matches || ut.webkitMatchesSelector || ut.msMatchesSelector;

        function ft(t, e) {
            return j(t).some(function(t) {
                return dt.call(t, e)
            })
        }
        var pt = ut.closest || function(t) {
            var e = this;
            do {
                if (ft(e, t)) return e;
                e = e.parentNode
            } while (e && 1 === e.nodeType)
        };

        function mt(t, e) {
            return v(e, ">") && (e = e.slice(1)), E(t) ? t.parentNode && pt.call(t, e) : j(t).map(function(t) {
                return t.parentNode && pt.call(t, e)
            }).filter(Boolean)
        }

        function gt(t, e) {
            for (var n = [], i = H(t).parentNode; i && 1 === i.nodeType;) ft(i, e) && n.push(i), i = i.parentNode;
            return n
        }
        var vt = window.CSS && CSS.escape || function(t) {
            return t.replace(/([^\x7f-\uFFFF\w-])/g, function(t) {
                return "\\" + t
            })
        };

        function wt(t) {
            return N(t) ? vt.call(null, t) : ""
        }
        var bt = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };

        function yt(t) {
            return j(t).some(function(t) {
                return bt[t.tagName.toLowerCase()]
            })
        }

        function xt(t) {
            return j(t).some(function(t) {
                return t.offsetWidth || t.offsetHeight || t.getClientRects().length
            })
        }
        var kt = "input,select,textarea,button";

        function $t(t) {
            return j(t).some(function(t) {
                return ft(t, kt)
            })
        }

        function It(t, e) {
            return j(t).filter(function(t) {
                return ft(t, e)
            })
        }

        function St(t, e) {
            return N(e) ? ft(t, e) || mt(t, e) : t === e || (S(e) ? e.documentElement : H(e)).contains(H(t))
        }

        function Tt() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n, i = Nt(t),
                r = i[0],
                o = i[1],
                s = i[2],
                a = i[3],
                l = i[4];
            return r = Bt(r), s && (a = function(t, i, r) {
                    var o = this;
                    return function(n) {
                        t.forEach(function(t) {
                            var e = ">" === i[0] ? st(i, t).reverse().filter(function(t) {
                                return St(n.target, t)
                            })[0] : mt(n.target, i);
                            e && (n.delegate = t, n.current = e, r.call(o, n))
                        })
                    }
                }(r, s, a)), 1 < a.length && (n = a, a = function(t) {
                    return y(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t)
                }), o.split(" ").forEach(function(e) {
                    return r.forEach(function(t) {
                        return t.addEventListener(e, a, l)
                    })
                }),
                function() {
                    return Et(r, o, a, l)
                }
        }

        function Et(t, e, n, i) {
            void 0 === i && (i = !1), t = Bt(t), e.split(" ").forEach(function(e) {
                return t.forEach(function(t) {
                    return t.removeEventListener(e, n, i)
                })
            })
        }

        function Ct() {
            for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
            var n = Nt(t),
                i = n[0],
                r = n[1],
                o = n[2],
                s = n[3],
                a = n[4],
                l = n[5],
                h = Tt(i, r, o, function(t) {
                    var e = !l || l(t);
                    e && (h(), s(t, e))
                }, a);
            return h
        }

        function At(t, n, i) {
            return Bt(t).reduce(function(t, e) {
                return t && e.dispatchEvent(_t(n, !0, !0, i))
            }, !0)
        }

        function _t(t, e, n, i) {
            if (void 0 === e && (e = !0), void 0 === n && (n = !1), N(t)) {
                var r = document.createEvent("CustomEvent");
                r.initCustomEvent(t, e, n, i), t = r
            }
            return t
        }

        function Nt(t) {
            return x(t[2]) && t.splice(2, 0, !1), t
        }

        function Ot(t) {
            return t && "addEventListener" in t
        }

        function Mt(t) {
            return Ot(t) ? t : H(t)
        }

        function Bt(t) {
            return y(t) ? t.map(Mt).filter(Boolean) : N(t) ? st(t) : Ot(t) ? [t] : j(t)
        }

        function Dt() {
            var e = setTimeout(Ct(document, "click", function(t) {
                t.preventDefault(), t.stopImmediatePropagation(), clearTimeout(e)
            }, !0));
            At(document, "touchcancel")
        }
        var zt = "Promise" in window ? window.Promise : jt,
            Pt = function() {
                var n = this;
                this.promise = new zt(function(t, e) {
                    n.reject = e, n.resolve = t
                })
            },
            Ht = 2,
            Lt = "setImmediate" in window ? setImmediate : setTimeout;

        function jt(t) {
            this.state = Ht, this.value = void 0, this.deferred = [];
            var e = this;
            try {
                t(function(t) {
                    e.resolve(t)
                }, function(t) {
                    e.reject(t)
                })
            } catch (t) {
                e.reject(t)
            }
        }
        jt.reject = function(n) {
            return new jt(function(t, e) {
                e(n)
            })
        }, jt.resolve = function(n) {
            return new jt(function(t, e) {
                t(n)
            })
        }, jt.all = function(s) {
            return new jt(function(n, t) {
                var i = [],
                    r = 0;

                function e(e) {
                    return function(t) {
                        i[e] = t, (r += 1) === s.length && n(i)
                    }
                }
                0 === s.length && n(i);
                for (var o = 0; o < s.length; o += 1) jt.resolve(s[o]).then(e(o), t)
            })
        }, jt.race = function(i) {
            return new jt(function(t, e) {
                for (var n = 0; n < i.length; n += 1) jt.resolve(i[n]).then(t, e)
            })
        };
        var Wt = jt.prototype;

        function Ft(s, a) {
            return new zt(function(t, e) {
                var n = Y({
                    data: null,
                    method: "GET",
                    headers: {},
                    xhr: new XMLHttpRequest,
                    beforeSend: X,
                    responseType: ""
                }, a);
                n.beforeSend(n);
                var i = n.xhr;
                for (var r in n)
                    if (r in i) try {
                        i[r] = n[r]
                    } catch (t) {}
                    for (var o in i.open(n.method.toUpperCase(), s), n.headers) i.setRequestHeader(o, n.headers[o]);
                Tt(i, "load", function() {
                    0 === i.status || 200 <= i.status && i.status < 300 || 304 === i.status ? t(i) : e(Y(Error(i.statusText), {
                        xhr: i,
                        status: i.status
                    }))
                }), Tt(i, "error", function() {
                    return e(Y(Error("Network Error"), {
                        xhr: i
                    }))
                }), Tt(i, "timeout", function() {
                    return e(Y(Error("Network Timeout"), {
                        xhr: i
                    }))
                }), i.send(n.data)
            })
        }

        function Vt(i, r, o) {
            return new zt(function(t, e) {
                var n = new Image;
                n.onerror = e, n.onload = function() {
                    return t(n)
                }, o && (n.sizes = o), r && (n.srcset = r), n.src = i
            })
        }
        Wt.resolve = function(t) {
            var e = this;
            if (e.state === Ht) {
                if (t === e) throw new TypeError("Promise settled with itself.");
                var n = !1;
                try {
                    var i = t && t.then;
                    if (null !== t && k(t) && x(i)) return void i.call(t, function(t) {
                        n || e.resolve(t), n = !0
                    }, function(t) {
                        n || e.reject(t), n = !0
                    })
                } catch (t) {
                    return void(n || e.reject(t))
                }
                e.state = 0, e.value = t, e.notify()
            }
        }, Wt.reject = function(t) {
            var e = this;
            if (e.state === Ht) {
                if (t === e) throw new TypeError("Promise settled with itself.");
                e.state = 1, e.value = t, e.notify()
            }
        }, Wt.notify = function() {
            var o = this;
            Lt(function() {
                if (o.state !== Ht)
                    for (; o.deferred.length;) {
                        var t = o.deferred.shift(),
                            e = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3];
                        try {
                            0 === o.state ? x(e) ? i(e.call(void 0, o.value)) : i(o.value) : 1 === o.state && (x(n) ? i(n.call(void 0, o.value)) : r(o.value))
                        } catch (t) {
                            r(t)
                        }
                    }
            })
        }, Wt.then = function(n, i) {
            var r = this;
            return new jt(function(t, e) {
                r.deferred.push([n, i, t, e]), r.notify()
            })
        }, Wt.catch = function(t) {
            return this.then(void 0, t)
        };
        var Yt = /msie|trident/i.test(window.navigator.userAgent),
            Rt = "rtl" === Z(document.documentElement, "dir"),
            qt = "ontouchstart" in window,
            Ut = window.PointerEvent,
            Xt = qt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints,
            Kt = Xt ? "mousedown " + (qt ? "touchstart" : "pointerdown") : "mousedown",
            Gt = Xt ? "mousemove " + (qt ? "touchmove" : "pointermove") : "mousemove",
            Jt = Xt ? "mouseup " + (qt ? "touchend" : "pointerup") : "mouseup",
            Zt = Xt && Ut ? "pointerenter" : "mouseenter",
            Qt = Xt && Ut ? "pointerleave" : "mouseleave";

        function te() {
            return "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll
        }

        function ee(t) {
            if (te()) t();
            else var e = function() {
                    n(), i(), t()
                },
                n = Tt(document, "DOMContentLoaded", e),
                i = Tt(window, "load", e)
        }

        function ne(t, e) {
            return e ? j(t).indexOf(H(e)) : j((t = H(t)) && t.parentNode.children).indexOf(t)
        }

        function ie(t, e, n, i) {
            void 0 === n && (n = 0), void 0 === i && (i = !1);
            var r = (e = j(e)).length;
            return t = M(t) ? z(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : ne(e, t), i ? U(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
        }

        function re(t) {
            return (t = we(t)).innerHTML = "", t
        }

        function oe(t, e) {
            return t = we(t), B(e) ? t.innerHTML : se(t.hasChildNodes() ? re(t) : t, e)
        }

        function se(e, t) {
            return e = we(e), he(t, function(t) {
                return e.appendChild(t)
            })
        }

        function ae(e, t) {
            return e = we(e), he(t, function(t) {
                return e.parentNode.insertBefore(t, e)
            })
        }

        function le(e, t) {
            return e = we(e), he(t, function(t) {
                return e.nextSibling ? ae(e.nextSibling, t) : se(e.parentNode, t)
            })
        }

        function he(t, e) {
            return (t = N(t) ? ge(t) : t) ? "length" in t ? j(t).map(e) : e(t) : null
        }

        function ce(t) {
            j(t).map(function(t) {
                return t.parentNode && t.parentNode.removeChild(t)
            })
        }

        function ue(t, e) {
            for (e = H(ae(t, e)); e.firstChild;) e = e.firstChild;
            return se(e, t), e
        }

        function de(t, e) {
            return j(j(t).map(function(t) {
                return t.hasChildNodes ? ue(j(t.childNodes), e) : se(t, e)
            }))
        }

        function fe(t) {
            j(t).map(function(t) {
                return t.parentNode
            }).filter(function(t, e, n) {
                return n.indexOf(t) === e
            }).forEach(function(t) {
                ae(t, t.childNodes), ce(t)
            })
        }
        var pe = /^\s*<(\w+|!)[^>]*>/,
            me = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

        function ge(t) {
            var e = me.exec(t);
            if (e) return document.createElement(e[1]);
            var n = document.createElement("div");
            return pe.test(t) ? n.insertAdjacentHTML("beforeend", t.trim()) : n.textContent = t, 1 < n.childNodes.length ? j(n.childNodes) : n.firstChild
        }

        function ve(t, e) {
            if (t && 1 === t.nodeType)
                for (e(t), t = t.firstElementChild; t;) ve(t, e), t = t.nextElementSibling
        }

        function we(t, e) {
            return N(t) ? ye(t) ? H(ge(t)) : ot(t, e) : H(t)
        }

        function be(t, e) {
            return N(t) ? ye(t) ? j(ge(t)) : st(t, e) : j(t)
        }

        function ye(t) {
            return "<" === t[0] || t.match(/^\s*</)
        }

        function xe(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            Ee(t, e, "add")
        }

        function ke(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            Ee(t, e, "remove")
        }

        function $e(t, e) {
            Z(t, "class", function(t) {
                return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
            })
        }

        function Ie(t) {
            for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
            e[0] && ke(t, e[0]), e[1] && xe(t, e[1])
        }

        function Se(t, e) {
            return j(t).some(function(t) {
                return t.classList.contains(e)
            })
        }

        function Te(t) {
            for (var i = [], e = arguments.length - 1; 0 < e--;) i[e] = arguments[e + 1];
            if (i.length) {
                var r = N((i = Ce(i))[i.length - 1]) ? [] : i.pop();
                i = i.filter(Boolean), j(t).forEach(function(t) {
                    for (var e = t.classList, n = 0; n < i.length; n++) _e.Force ? e.toggle.apply(e, [i[n]].concat(r)) : e[(B(r) ? !e.contains(i[n]) : r) ? "add" : "remove"](i[n])
                })
            }
        }

        function Ee(t, n, i) {
            (n = Ce(n).filter(Boolean)).length && j(t).forEach(function(t) {
                var e = t.classList;
                _e.Multiple ? e[i].apply(e, n) : n.forEach(function(t) {
                    return e[i](t)
                })
            })
        }

        function Ce(t) {
            return t.reduce(function(t, e) {
                return t.concat.call(t, N(e) && b(e, " ") ? e.trim().split(" ") : e)
            }, [])
        }
        var Ae, _e = {};
        (Ae = document.createElement("_").classList) && (Ae.add("a", "b"), Ae.toggle("c", !1), _e.Multiple = Ae.contains("b"), _e.Force = !Ae.contains("c"));
        var Ne = {
            "animation-iteration-count": !(Ae = null),
            "column-count": !0,
            "fill-opacity": !0,
            "flex-grow": !0,
            "flex-shrink": !0,
            "font-weight": !0,
            "line-height": !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            "z-index": !0,
            zoom: !0
        };

        function Oe(t, e, r) {
            return j(t).map(function(n) {
                if (N(e)) {
                    if (e = He(e), B(r)) return Be(n, e);
                    r || 0 === r ? n.style[e] = M(r) && !Ne[e] ? r + "px" : r : n.style.removeProperty(e)
                } else {
                    if (y(e)) {
                        var i = Me(n);
                        return e.reduce(function(t, e) {
                            return t[e] = i[He(e)], t
                        }, {})
                    }
                    k(e) && R(e, function(t, e) {
                        return Oe(n, e, t)
                    })
                }
                return n
            })[0]
        }

        function Me(t, e) {
            return (t = H(t)).ownerDocument.defaultView.getComputedStyle(t, e)
        }

        function Be(t, e, n) {
            return Me(t, n)[e]
        }
        var De = {};

        function ze(t) {
            var e = document.documentElement;
            if (!Yt) return Me(e).getPropertyValue("--uk-" + t);
            if (!(t in De)) {
                var n = se(e, document.createElement("div"));
                xe(n, "uk-" + t), De[t] = Be(n, "content", ":before").replace(/^["'](.*)["']$/, "$1"), ce(n)
            }
            return De[t]
        }
        var Pe = {};

        function He(t) {
            var e = Pe[t];
            return e || (e = Pe[t] = function(t) {
                if ((t = m(t)) in je) return t;
                var e, n = Le.length;
                for (; n--;)
                    if ((e = "-" + Le[n] + "-" + t) in je) return e
            }(t) || t), e
        }
        var Le = ["webkit", "moz", "ms"],
            je = document.createElement("_").style;

        function We(t, s, a, l) {
            return void 0 === a && (a = 400), void 0 === l && (l = "linear"), zt.all(j(t).map(function(o) {
                return new zt(function(n, i) {
                    for (var t in s) {
                        var e = Oe(o, t);
                        "" === e && Oe(o, t, e)
                    }
                    var r = setTimeout(function() {
                        return At(o, "transitionend")
                    }, a);
                    Ct(o, "transitionend transitioncanceled", function(t) {
                        var e = t.type;
                        clearTimeout(r), ke(o, "uk-transition"), Oe(o, {
                            "transition-property": "",
                            "transition-duration": "",
                            "transition-timing-function": ""
                        }), "transitioncanceled" === e ? i() : n()
                    }, !1, function(t) {
                        var e = t.target;
                        return o === e
                    }), xe(o, "uk-transition"), Oe(o, Y({
                        "transition-property": Object.keys(s).map(He).join(","),
                        "transition-duration": a + "ms",
                        "transition-timing-function": l
                    }, s))
                })
            }))
        }
        var Fe = {
                start: We,
                stop: function(t) {
                    return At(t, "transitionend"), zt.resolve()
                },
                cancel: function(t) {
                    At(t, "transitioncanceled")
                },
                inProgress: function(t) {
                    return Se(t, "uk-transition")
                }
            },
            Ve = "uk-animation-",
            Ye = "uk-cancel-animation";

        function Re(t, e, n, a, l) {
            var h = arguments;
            return void 0 === n && (n = 200), zt.all(j(t).map(function(s) {
                return new zt(function(i, r) {
                    if (Se(s, Ye)) requestAnimationFrame(function() {
                        return zt.resolve().then(function() {
                            return Re.apply(void 0, h).then(i, r)
                        })
                    });
                    else {
                        var t = e + " " + Ve + (l ? "leave" : "enter");
                        v(e, Ve) && (a && (t += " uk-transform-origin-" + a), l && (t += " " + Ve + "reverse")), o(), Ct(s, "animationend animationcancel", function(t) {
                            var e = t.type,
                                n = !1;
                            "animationcancel" === e ? (r(), o()) : (i(), zt.resolve().then(function() {
                                n = !0, o()
                            })), requestAnimationFrame(function() {
                                n || (xe(s, Ye), requestAnimationFrame(function() {
                                    return ke(s, Ye)
                                }))
                            })
                        }, !1, function(t) {
                            var e = t.target;
                            return s === e
                        }), Oe(s, "animationDuration", n + "ms"), xe(s, t)
                    }

                    function o() {
                        Oe(s, "animationDuration", ""), $e(s, Ve + "\\S*")
                    }
                })
            }))
        }
        var qe = new RegExp(Ve + "(enter|leave)"),
            Ue = { in : function(t, e, n, i) {
                    return Re(t, e, n, i, !1)
                }, out: function(t, e, n, i) {
                    return Re(t, e, n, i, !0)
                }, inProgress: function(t) {
                    return qe.test(Z(t, "class"))
                }, cancel: function(t) {
                    At(t, "animationcancel")
                }
            },
            Xe = {
                width: ["x", "left", "right"],
                height: ["y", "top", "bottom"]
            };

        function Ke(t, e, c, u, d, n, f, p) {
            c = on(c), u = on(u);
            var m = {
                element: c,
                target: u
            };
            if (!t || !e) return m;
            var g = Je(t),
                v = Je(e),
                w = v;
            return rn(w, c, g, -1), rn(w, u, v, 1), d = sn(d, g.width, g.height), n = sn(n, v.width, v.height), d.x += n.x, d.y += n.y, w.left += d.x, w.top += d.y, p = Je(p || dn(t)), f && R(Xe, function(t, i) {
                var r = t[0],
                    o = t[1],
                    s = t[2];
                if (!0 === f || b(f, r)) {
                    var e = c[r] === o ? -g[i] : c[r] === s ? g[i] : 0,
                        n = u[r] === o ? v[i] : u[r] === s ? -v[i] : 0;
                    if (w[o] < p[o] || w[o] + g[i] > p[s]) {
                        var a = g[i] / 2,
                            l = "center" === u[r] ? -v[i] / 2 : 0;
                        "center" === c[r] && (h(a, l) || h(-a, -l)) || h(e, n)
                    }
                }

                function h(e, t) {
                    var n = w[o] + e + t - 2 * d[r];
                    if (n >= p[o] && n + g[i] <= p[s]) return w[o] = n, ["element", "target"].forEach(function(t) {
                        m[t][r] = e ? m[t][r] === Xe[i][1] ? Xe[i][2] : Xe[i][1] : m[t][r]
                    }), !0
                }
            }), Ge(t, w), m
        }

        function Ge(n, i) {
            if (n = H(n), !i) return Je(n);
            var r = Ge(n),
                o = Oe(n, "position");
            ["left", "top"].forEach(function(t) {
                if (t in i) {
                    var e = Oe(n, t);
                    Oe(n, t, i[t] - r[t] + P("absolute" === o && "auto" === e ? Ze(n)[t] : e))
                }
            })
        }

        function Je(t) {
            var e, n, i = dn(t = H(t)),
                r = i.pageYOffset,
                o = i.pageXOffset;
            if (I(t)) {
                var s = t.innerHeight,
                    a = t.innerWidth;
                return {
                    top: r,
                    left: o,
                    height: s,
                    width: a,
                    bottom: r + s,
                    right: o + a
                }
            }
            xt(t) || (e = Z(t, "style"), n = Z(t, "hidden"), Z(t, {
                style: (e || "") + ";display:block !important;",
                hidden: null
            }));
            var l = t.getBoundingClientRect();
            return B(e) || Z(t, {
                style: e,
                hidden: n
            }), {
                height: l.height,
                width: l.width,
                top: l.top + r,
                left: l.left + o,
                bottom: l.bottom + r,
                right: l.right + o
            }
        }

        function Ze(i) {
            var r = (i = H(i)).offsetParent || fn(i).documentElement,
                o = Ge(r),
                t = ["top", "left"].reduce(function(t, e) {
                    var n = a(e);
                    return t[e] -= o[e] + P(Oe(i, "margin" + n)) + P(Oe(r, "border" + n + "Width")), t
                }, Ge(i));
            return {
                top: t.top,
                left: t.left
            }
        }
        var Qe = en("height"),
            tn = en("width");

        function en(i) {
            var r = a(i);
            return function(t, e) {
                if (t = H(t), B(e)) {
                    if (I(t)) return t["inner" + r];
                    if (S(t)) {
                        var n = t.documentElement;
                        return Math.max(n["offset" + r], n["scroll" + r])
                    }
                    return (e = "auto" === (e = Oe(t, i)) ? t["offset" + r] : P(e) || 0) - nn(i, t)
                }
                Oe(t, i, e || 0 === e ? +e + nn(i, t) + "px" : "")
            }
        }

        function nn(t, n, e) {
            return void 0 === e && (e = "border-box"), Oe(n, "boxSizing") === e ? Xe[t].slice(1).map(a).reduce(function(t, e) {
                return t + P(Oe(n, "padding" + e)) + P(Oe(n, "border" + e + "Width"))
            }, 0) : 0
        }

        function rn(o, s, a, l) {
            R(Xe, function(t, e) {
                var n = t[0],
                    i = t[1],
                    r = t[2];
                s[n] === r ? o[i] += a[e] * l : "center" === s[n] && (o[i] += a[e] * l / 2)
            })
        }

        function on(t) {
            var e = /left|center|right/,
                n = /top|center|bottom/;
            return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat(["center"]) : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
                x: e.test(t[0]) ? t[0] : "center",
                y: n.test(t[1]) ? t[1] : "center"
            }
        }

        function sn(t, e, n) {
            var i = (t || "").split(" "),
                r = i[0],
                o = i[1];
            return {
                x: r ? P(r) * (u(r, "%") ? e / 100 : 1) : 0,
                y: o ? P(o) * (u(o, "%") ? n / 100 : 1) : 0
            }
        }

        function an(t) {
            switch (t) {
                case "left":
                    return "right";
                case "right":
                    return "left";
                case "top":
                    return "bottom";
                case "bottom":
                    return "top";
                default:
                    return t
            }
        }

        function ln(t, e, n, i) {
            if (void 0 === e && (e = 0), void 0 === n && (n = 0), !xt(t)) return !1;
            var r, o, s = dn(t = H(t));
            if (i) r = t.getBoundingClientRect(), o = {
                top: -e,
                left: -n,
                bottom: e + Qe(s),
                right: n + tn(s)
            };
            else {
                var a = un(t),
                    l = a[0],
                    h = a[1],
                    c = s.pageYOffset,
                    u = s.pageXOffset;
                r = {
                    top: l,
                    left: h,
                    bottom: l + t.offsetHeight,
                    right: l + t.offsetWidth
                }, o = {
                    top: c - e,
                    left: u - n,
                    bottom: c + e + Qe(s),
                    right: u + n + tn(s)
                }
            }
            return K(r, o) || G({
                x: r.left,
                y: r.top
            }, o)
        }

        function hn(t, e) {
            if (void 0 === e && (e = 0), !xt(t)) return 0;
            var n = dn(t = H(t)),
                i = fn(t),
                r = t.offsetHeight + e,
                o = un(t)[0],
                s = Qe(n),
                a = s + Math.min(0, o - s),
                l = Math.max(0, s - (Qe(i) + e - (o + r)));
            return U((a + n.pageYOffset - o) / ((a + (r - (l < s ? l : 0))) / 100) / 100)
        }

        function cn(t, e) {
            if (I(t = H(t)) || S(t)) {
                var n = dn(t);
                (0, n.scrollTo)(n.pageXOffset, e)
            } else t.scrollTop = e
        }

        function un(t) {
            var e = [0, 0];
            do {
                if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Oe(t, "position")) {
                    var n = dn(t);
                    return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e
                }
            } while (t = t.offsetParent);
            return e
        }

        function dn(t) {
            return I(t) ? t : fn(t).defaultView
        }

        function fn(t) {
            return H(t).ownerDocument
        }
        var pn = {
            reads: [],
            writes: [],
            read: function(t) {
                return this.reads.push(t), mn(), t
            },
            write: function(t) {
                return this.writes.push(t), mn(), t
            },
            clear: function(t) {
                return vn(this.reads, t) || vn(this.writes, t)
            },
            flush: function() {
                gn(this.reads), gn(this.writes.splice(0, this.writes.length)), this.scheduled = !1, (this.reads.length || this.writes.length) && mn()
            }
        };

        function mn() {
            pn.scheduled || (pn.scheduled = !0, requestAnimationFrame(pn.flush.bind(pn)))
        }

        function gn(t) {
            for (var e; e = t.shift();) e()
        }

        function vn(t, e) {
            var n = t.indexOf(e);
            return !!~n && !!t.splice(n, 1)
        }

        function wn() {}

        function bn(t, e) {
            return (e.y - t.y) / (e.x - t.x)
        }
        wn.prototype = {
            positions: [],
            position: null,
            init: function() {
                var i = this;
                this.positions = [], this.position = null;
                var r = !1;
                this.unbind = Tt(document, "mousemove", function(n) {
                    r || (setTimeout(function() {
                        var t = Date.now(),
                            e = i.positions.length;
                        e && 100 < t - i.positions[e - 1].time && i.positions.splice(0, e), i.positions.push({
                            time: t,
                            x: n.pageX,
                            y: n.pageY
                        }), 5 < i.positions.length && i.positions.shift(), r = !1
                    }, 5), r = !0)
                })
            },
            cancel: function() {
                this.unbind && this.unbind()
            },
            movesTo: function(t) {
                if (this.positions.length < 2) return !1;
                var e = Ge(t),
                    n = this.positions[this.positions.length - 1],
                    i = this.positions[0];
                if (e.left <= n.x && n.x <= e.right && e.top <= n.y && n.y <= e.bottom) return !1;
                var r = [
                    [{
                        x: e.left,
                        y: e.top
                    }, {
                        x: e.right,
                        y: e.bottom
                    }],
                    [{
                        x: e.right,
                        y: e.top
                    }, {
                        x: e.left,
                        y: e.bottom
                    }]
                ];
                return e.right <= n.x || (e.left >= n.x ? (r[0].reverse(), r[1].reverse()) : e.bottom <= n.y ? r[0].reverse() : e.top >= n.y && r[1].reverse()), !!r.reduce(function(t, e) {
                    return t + (bn(i, e[0]) < bn(n, e[0]) && bn(i, e[1]) > bn(n, e[1]))
                }, 0)
            }
        };
        var yn = {};

        function xn(t, e, n) {
            return yn.computed(x(t) ? t.call(n, n) : t, x(e) ? e.call(n, n) : e)
        }

        function kn(t, e) {
            return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t
        }

        function $n(e, n, i) {
            var r = {};
            if (x(n) && (n = n.options), n.extends && (e = $n(e, n.extends, i)), n.mixins)
                for (var t = 0, o = n.mixins.length; t < o; t++) e = $n(e, n.mixins[t], i);
            for (var s in e) l(s);
            for (var a in n) h(e, a) || l(a);

            function l(t) {
                r[t] = (yn[t] || function(t, e) {
                    return B(e) ? t : e
                })(e[t], n[t], i)
            }
            return r
        }

        function In(t, e) {
            var n;
            void 0 === e && (e = []);
            try {
                return t ? v(t, "{") ? JSON.parse(t) : e.length && !b(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function(t, e) {
                    var n = e.split(/:(.*)/),
                        i = n[0],
                        r = n[1];
                    return i && !B(r) && (t[i.trim()] = r.trim()), t
                }, {}) : {}
            } catch (t) {
                return {}
            }
        }
        yn.events = yn.created = yn.beforeConnect = yn.connected = yn.beforeDisconnect = yn.disconnected = yn.destroy = kn, yn.args = function(t, e) {
            return kn(e || t)
        }, yn.update = function(t, e) {
            return q(kn(t, x(e) ? {
                read: e
            } : e), "order")
        }, yn.props = function(t, e) {
            return y(e) && (e = e.reduce(function(t, e) {
                return t[e] = String, t
            }, {})), yn.methods(t, e)
        }, yn.computed = yn.methods = function(t, e) {
            return e ? t ? Y({}, t, e) : e : t
        }, yn.data = function(e, n, t) {
            return t ? xn(e, n, t) : n ? e ? function(t) {
                return xn(e, n, t)
            } : n : e
        };
        var Sn = 0,
            Tn = function(t) {
                this.id = ++Sn, this.el = H(t)
            };

        function En(t, e) {
            try {
                t.contentWindow.postMessage(JSON.stringify(Y({
                    event: "command"
                }, e)), "*")
            } catch (t) {}
        }
        Tn.prototype.isVideo = function() {
            return this.isYoutube() || this.isVimeo() || this.isHTML5()
        }, Tn.prototype.isHTML5 = function() {
            return "VIDEO" === this.el.tagName
        }, Tn.prototype.isIFrame = function() {
            return "IFRAME" === this.el.tagName
        }, Tn.prototype.isYoutube = function() {
            return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
        }, Tn.prototype.isVimeo = function() {
            return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/)
        }, Tn.prototype.enableApi = function() {
            var e = this;
            if (this.ready) return this.ready;
            var n, r = this.isYoutube(),
                o = this.isVimeo();
            return r || o ? this.ready = new zt(function(t) {
                var i;
                Ct(e.el, "load", function() {
                    if (r) {
                        var t = function() {
                            return En(e.el, {
                                event: "listening",
                                id: e.id
                            })
                        };
                        n = setInterval(t, 100), t()
                    }
                }), (i = function(t) {
                    return r && t.id === e.id && "onReady" === t.event || o && Number(t.player_id) === e.id
                }, new zt(function(n) {
                    Ct(window, "message", function(t, e) {
                        return n(e)
                    }, !1, function(t) {
                        var e = t.data;
                        if (e && N(e)) {
                            try {
                                e = JSON.parse(e)
                            } catch (t) {
                                return
                            }
                            return e && i(e)
                        }
                    })
                })).then(function() {
                    t(), n && clearInterval(n)
                }), Z(e.el, "src", e.el.src + (b(e.el.src, "?") ? "&" : "?") + (r ? "enablejsapi=1" : "api=1&player_id=" + e.id))
            }) : zt.resolve()
        }, Tn.prototype.play = function() {
            var t = this;
            if (this.isVideo())
                if (this.isIFrame()) this.enableApi().then(function() {
                    return En(t.el, {
                        func: "playVideo",
                        method: "play"
                    })
                });
                else if (this.isHTML5()) try {
                var e = this.el.play();
                e && e.catch(X)
            } catch (t) {}
        }, Tn.prototype.pause = function() {
            var t = this;
            this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
                return En(t.el, {
                    func: "pauseVideo",
                    method: "pause"
                })
            }) : this.isHTML5() && this.el.pause())
        }, Tn.prototype.mute = function() {
            var t = this;
            this.isVideo() && (this.isIFrame() ? this.enableApi().then(function() {
                return En(t.el, {
                    func: "mute",
                    method: "setVolume",
                    value: 0
                })
            }) : this.isHTML5() && (this.el.muted = !0, Z(this.el, "muted", "")))
        };
        var Cn, An, _n, Nn, On = {};

        function Mn() {
            Cn && clearTimeout(Cn), An && clearTimeout(An), _n && clearTimeout(_n), Cn = An = _n = null, On = {}
        }
        ee(function() {
            Tt(document, "click", function() {
                return Nn = !0
            }, !0), Tt(document, Kt, function(t) {
                var e = t.target,
                    n = zn(t),
                    i = n.x,
                    r = n.y,
                    o = Date.now(),
                    s = Pn(t.type);
                On.type && On.type !== s || (On.el = "tagName" in e ? e : e.parentNode, Cn && clearTimeout(Cn), On.x1 = i, On.y1 = r, On.last && o - On.last <= 250 && (On = {}), On.type = s, On.last = o, Nn = 0 < t.button)
            }), Tt(document, Gt, function(t) {
                if (!t.defaultPrevented) {
                    var e = zn(t),
                        n = e.x,
                        i = e.y;
                    On.x2 = n, On.y2 = i
                }
            }), Tt(document, Jt, function(t) {
                var e = t.type,
                    n = t.target;
                On.type === Pn(e) && (On.x2 && 30 < Math.abs(On.x1 - On.x2) || On.y2 && 30 < Math.abs(On.y1 - On.y2) ? An = setTimeout(function() {
                    var t, e, n, i, r;
                    On.el && (At(On.el, "swipe"), At(On.el, "swipe" + (e = (t = On).x1, n = t.x2, i = t.y1, r = t.y2, Math.abs(e - n) >= Math.abs(i - r) ? 0 < e - n ? "Left" : "Right" : 0 < i - r ? "Up" : "Down"))), On = {}
                }) : "last" in On ? (_n = setTimeout(function() {
                    return At(On.el, "tap")
                }), On.el && "mouseup" !== e && St(n, On.el) && (Cn = setTimeout(function() {
                    Cn = null, On.el && !Nn && At(On.el, "click"), On = {}
                }, 350))) : On = {})
            }), Tt(document, "touchcancel", Mn), Tt(window, "scroll", Mn)
        });
        var Bn = !1;

        function Dn(t) {
            return Bn || "touch" === t.pointerType
        }

        function zn(t) {
            var e = t.touches,
                n = t.changedTouches,
                i = e && e[0] || n && n[0] || t;
            return {
                x: i.pageX,
                y: i.pageY
            }
        }

        function Pn(t) {
            return t.slice(0, 5)
        }

        function Hn(t) {
            return !(!v(t, "uk-") && !v(t, "data-uk-")) && g(t.replace("data-uk-", "").replace("uk-", ""))
        }
        Tt(document, "touchstart", function() {
            return Bn = !0
        }, !0), Tt(document, "click", function() {
            Bn = !1
        }), Tt(document, "touchcancel", function() {
            return Bn = !1
        }, !0);
        var Ln, jn, Wn, Fn, Vn = function(t) {
            this._init(t)
        };
        Vn.util = Object.freeze({
                ajax: Ft,
                getImage: Vt,
                transition: We,
                Transition: Fe,
                animate: Re,
                Animation: Ue,
                attr: Z,
                hasAttr: Q,
                removeAttr: tt,
                data: et,
                addClass: xe,
                removeClass: ke,
                removeClasses: $e,
                replaceClass: Ie,
                hasClass: Se,
                toggleClass: Te,
                positionAt: Ke,
                offset: Ge,
                position: Ze,
                height: Qe,
                width: tn,
                boxModelAdjust: nn,
                flipPosition: an,
                isInView: ln,
                scrolledOver: hn,
                scrollTop: cn,
                offsetPosition: un,
                isReady: te,
                ready: ee,
                index: ne,
                getIndex: ie,
                empty: re,
                html: oe,
                prepend: function(e, t) {
                    return (e = we(e)).hasChildNodes() ? he(t, function(t) {
                        return e.insertBefore(t, e.firstChild)
                    }) : se(e, t)
                },
                append: se,
                before: ae,
                after: le,
                remove: ce,
                wrapAll: ue,
                wrapInner: de,
                unwrap: fe,
                fragment: ge,
                apply: ve,
                $: we,
                $$: be,
                isIE: Yt,
                isRtl: Rt,
                hasTouch: Xt,
                pointerDown: Kt,
                pointerMove: Gt,
                pointerUp: Jt,
                pointerEnter: Zt,
                pointerLeave: Qt,
                on: Tt,
                off: Et,
                once: Ct,
                trigger: At,
                createEvent: _t,
                toEventTargets: Bt,
                preventClick: Dt,
                fastdom: pn,
                isVoidElement: yt,
                isVisible: xt,
                selInput: kt,
                isInput: $t,
                filter: It,
                within: St,
                bind: p,
                hasOwn: h,
                hyphenate: m,
                camelize: g,
                ucfirst: a,
                startsWith: v,
                endsWith: u,
                includes: b,
                isArray: y,
                isFunction: x,
                isObject: k,
                isPlainObject: $,
                isWindow: I,
                isDocument: S,
                isJQuery: T,
                isNode: E,
                isNodeCollection: A,
                isBoolean: _,
                isString: N,
                isNumber: O,
                isNumeric: M,
                isUndefined: B,
                toBoolean: D,
                toNumber: z,
                toFloat: P,
                toNode: H,
                toNodes: j,
                toList: W,
                toMs: F,
                swap: V,
                assign: Y,
                each: R,
                sortBy: q,
                clamp: U,
                noop: X,
                intersectRect: K,
                pointInRect: G,
                Dimensions: J,
                MouseTracker: wn,
                mergeOptions: $n,
                parseOptions: In,
                Player: Tn,
                Promise: zt,
                Deferred: Pt,
                query: nt,
                queryAll: it,
                find: ot,
                findAll: st,
                matches: ft,
                closest: mt,
                parents: gt,
                escape: wt,
                css: Oe,
                getStyles: Me,
                getStyle: Be,
                getCssVar: ze,
                propName: He,
                isTouch: Dn,
                getPos: zn
            }), Vn.data = "__uikit__", Vn.prefix = "uk-", Vn.options = {},
            function(n) {
                var e, i = n.data;

                function r(t, e) {
                    if (t)
                        for (var n in t) t[n]._connected && t[n]._callUpdate(e)
                }
                n.use = function(t) {
                    if (!t.installed) return t.call(null, this), t.installed = !0, this
                }, n.mixin = function(t, e) {
                    (e = (N(e) ? n.component(e) : e) || this).options = $n(e.options, t)
                }, n.extend = function(t) {
                    t = t || {};
                    var e = function(t) {
                        this._init(t)
                    };
                    return ((e.prototype = Object.create(this.prototype)).constructor = e).options = $n(this.options, t), e.super = this, e.extend = this.extend, e
                }, n.update = function(t, e) {
                    e = _t(e || "update"),
                        function(t) {
                            for (var e = []; t && t !== document.body && t.parentNode;) t = t.parentNode, e.unshift(t);
                            return e
                        }(t = t ? H(t) : document.body).map(function(t) {
                            return r(t[i], e)
                        }), ve(t, function(t) {
                            return r(t[i], e)
                        })
                }, Object.defineProperty(n, "container", {
                    get: function() {
                        return e || document.body
                    },
                    set: function(t) {
                        e = we(t)
                    }
                })
            }(Vn), (Ln = Vn).prototype._callHook = function(t) {
                var e = this,
                    n = this.$options[t];
                n && n.forEach(function(t) {
                    return t.call(e)
                })
            }, Ln.prototype._callConnected = function() {
                this._connected || (this._data = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObserver(), this._callHook("connected"), this._callUpdate())
            }, Ln.prototype._callDisconnected = function() {
                this._connected && (this._callHook("beforeDisconnect"), this._observer && (this._observer.disconnect(), this._observer = null), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1)
            }, Ln.prototype._callUpdate = function(o) {
                var s = this,
                    a = (o = _t(o || "update")).type;
                b(["update", "load", "resize"], a) && this._resetComputeds();
                var t = this.$options.update,
                    e = this._frames,
                    l = e.reads,
                    h = e.writes;
                t && t.forEach(function(t, e) {
                    var n = t.read,
                        i = t.write,
                        r = t.events;
                    ("update" === a || b(r, a)) && (n && !b(pn.reads, l[e]) && (l[e] = pn.read(function() {
                        var t = s._connected && n.call(s, s._data, o);
                        !1 === t && i ? (pn.clear(h[e]), delete h[e]) : $(t) && Y(s._data, t), delete l[e]
                    })), i && !b(pn.writes, h[e]) && (h[e] = pn.write(function() {
                        s._connected && i.call(s, s._data, o), delete h[e]
                    })))
                })
            },
            function(t) {
                var e = 0;

                function s(t, e) {
                    var n = {},
                        i = t.args;
                    void 0 === i && (i = []);
                    var r = t.props;
                    void 0 === r && (r = {});
                    var o = t.el;
                    if (!r) return n;
                    for (var s in r) {
                        var a = m(s),
                            l = et(o, a);
                        if (!B(l)) {
                            if (l = r[s] === Boolean && "" === l || d(r[s], l), "target" === a && (!l || v(l, "_"))) continue;
                            n[s] = l
                        }
                    }
                    var h = In(et(o, e), i);
                    for (var c in h) {
                        var u = g(c);
                        void 0 !== r[u] && (n[u] = d(r[u], h[c]))
                    }
                    return n
                }

                function n(i, r, o) {
                    Object.defineProperty(i, r, {
                        enumerable: !0,
                        get: function() {
                            var t = i._computeds,
                                e = i.$props,
                                n = i.$el;
                            return h(t, r) || (t[r] = o.call(i, e, n)), t[r]
                        },
                        set: function(t) {
                            i._computeds[r] = t
                        }
                    })
                }

                function f(e, n, i) {
                    $(n) || (n = {
                        name: i,
                        handler: n
                    });
                    var r, o, t = n.name,
                        s = n.el,
                        a = n.handler,
                        l = n.capture,
                        h = n.passive,
                        c = n.delegate,
                        u = n.filter,
                        d = n.self;
                    s = x(s) ? s.call(e) : s || e.$el, y(s) ? s.forEach(function(t) {
                        return f(e, Y({}, n, {
                            el: t
                        }), i)
                    }) : !s || u && !u.call(e) || (r = N(a) ? e[a] : p(a, e), a = function(t) {
                        return y(t.detail) ? r.apply(void 0, [t].concat(t.detail)) : r(t)
                    }, d && (o = a, a = function(t) {
                        if (t.target === t.currentTarget || t.target === t.current) return o.call(null, t)
                    }), e._events.push(Tt(s, t, c ? N(c) ? c : c.call(e) : null, a, _(h) ? {
                        passive: h,
                        capture: l
                    } : l)))
                }

                function i(t, e) {
                    return t.every(function(t) {
                        return !t || !h(t, e)
                    })
                }

                function d(t, e) {
                    return t === Boolean ? D(e) : t === Number ? z(e) : "list" === t ? W(e) : t ? t(e) : e
                }
                t.prototype._init = function(t) {
                    (t = t || {}).data = function(t, e) {
                        var n = t.data,
                            i = (t.el, e.args),
                            r = e.props;
                        if (void 0 === r && (r = {}), n = y(n) ? i && i.length ? n.slice(0, i.length).reduce(function(t, e, n) {
                                return $(e) ? Y(t, e) : t[i[n]] = e, t
                            }, {}) : void 0 : n)
                            for (var o in n) B(n[o]) ? delete n[o] : n[o] = r[o] ? d(r[o], n[o]) : n[o];
                        return n
                    }(t, this.constructor.options), this.$options = $n(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._frames = {
                        reads: {},
                        writes: {}
                    }, this._events = [], this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
                }, t.prototype._initData = function() {
                    var t = this.$options.data;
                    for (var e in void 0 === t && (t = {}), t) this.$props[e] = this[e] = t[e]
                }, t.prototype._initMethods = function() {
                    var t = this.$options.methods;
                    if (t)
                        for (var e in t) this[e] = p(t[e], this)
                }, t.prototype._initComputeds = function() {
                    var t = this.$options.computed;
                    if (this._resetComputeds(), t)
                        for (var e in t) n(this, e, t[e])
                }, t.prototype._resetComputeds = function() {
                    this._computeds = {}
                }, t.prototype._initProps = function(t) {
                    var e;
                    for (e in this._resetComputeds(), t = t || s(this.$options, this.$name)) B(t[e]) || (this.$props[e] = t[e]);
                    var n = [this.$options.computed, this.$options.methods];
                    for (e in this.$props) e in t && i(n, e) && (this[e] = this.$props[e])
                }, t.prototype._initEvents = function() {
                    var n = this,
                        t = this.$options.events;
                    t && t.forEach(function(t) {
                        if (h(t, "handler")) f(n, t);
                        else
                            for (var e in t) f(n, t[e], e)
                    })
                }, t.prototype._unbindEvents = function() {
                    this._events.forEach(function(t) {
                        return t()
                    }), this._events = []
                }, t.prototype._initObserver = function() {
                    var n = this,
                        t = this.$options,
                        i = t.attrs,
                        e = t.props,
                        r = t.el;
                    if (!this._observer && e && !1 !== i) {
                        i = y(i) ? i : Object.keys(e), this._observer = new MutationObserver(function() {
                            var e = s(n.$options, n.$name);
                            i.some(function(t) {
                                return !B(e[t]) && e[t] !== n.$props[t]
                            }) && n.$reset()
                        });
                        var o = i.map(function(t) {
                            return m(t)
                        }).concat(this.$name);
                        this._observer.observe(r, {
                            attributes: !0,
                            attributeFilter: o.concat(o.map(function(t) {
                                return "data-" + t
                            }))
                        })
                    }
                }
            }(Vn), Wn = (jn = Vn).data, Fn = {}, jn.component = function(s, t) {
                if (!t) return $(Fn[s]) && (Fn[s] = jn.extend(Fn[s])), Fn[s];
                jn[s] = function(t, n) {
                    for (var e = arguments.length, i = Array(e); e--;) i[e] = arguments[e];
                    var r = jn.component(s);
                    return $(t) ? new r({
                        data: t
                    }) : r.options.functional ? new r({
                        data: [].concat(i)
                    }) : t && t.nodeType ? o(t) : be(t).map(o)[0];

                    function o(t) {
                        var e = jn.getComponent(t, s);
                        if (e) {
                            if (!n) return e;
                            e.$destroy()
                        }
                        return new r({
                            el: t,
                            data: n
                        })
                    }
                };
                var e = $(t) ? Y({}, t) : t.options;
                if (e.name = s, e.install && e.install(jn, e, s), jn._initialized && !e.functional) {
                    var n = m(s);
                    pn.read(function() {
                        return jn[s]("[uk-" + n + "],[data-uk-" + n + "]")
                    })
                }
                return Fn[s] = $(t) ? e : t
            }, jn.getComponents = function(t) {
                return t && t[Wn] || {}
            }, jn.getComponent = function(t, e) {
                return jn.getComponents(t)[e]
            }, jn.connect = function(t) {
                if (t[Wn])
                    for (var e in t[Wn]) t[Wn][e]._callConnected();
                for (var n = 0; n < t.attributes.length; n++) {
                    var i = Hn(t.attributes[n].name);
                    i && i in Fn && jn[i](t)
                }
            }, jn.disconnect = function(t) {
                for (var e in t[Wn]) t[Wn][e]._callDisconnected()
            },
            function(i) {
                var r = i.data;
                i.prototype.$mount = function(t) {
                    var e = this.$options.name;
                    t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, St(t, document) && this._callConnected())
                }, i.prototype.$emit = function(t) {
                    this._callUpdate(t)
                }, i.prototype.$reset = function() {
                    this._callDisconnected(), this._callConnected()
                }, i.prototype.$destroy = function(t) {
                    void 0 === t && (t = !1);
                    var e = this.$options,
                        n = e.el,
                        i = e.name;
                    n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][i], Object.keys(n[r]).length || delete n[r], t && ce(this.$el))
                }, i.prototype.$create = function(t, e, n) {
                    return i[t](e, n)
                }, i.prototype.$update = i.update, i.prototype.$getComponent = i.getComponent;
                var e = {};
                Object.defineProperties(i.prototype, {
                    $container: Object.getOwnPropertyDescriptor(i, "container"),
                    $name: {
                        get: function() {
                            var t = this.$options.name;
                            return e[t] || (e[t] = i.prefix + m(t)), e[t]
                        }
                    }
                })
            }(Vn);
        var Yn = {
                connected: function() {
                    !Se(this.$el, this.$name) && xe(this.$el, this.$name)
                }
            },
            Rn = {
                props: {
                    cls: Boolean,
                    animation: "list",
                    duration: Number,
                    origin: String,
                    transition: String,
                    queued: Boolean
                },
                data: {
                    cls: !1,
                    animation: [!1],
                    duration: 200,
                    origin: !1,
                    transition: "linear",
                    queued: !1,
                    initProps: {
                        overflow: "",
                        height: "",
                        paddingTop: "",
                        paddingBottom: "",
                        marginTop: "",
                        marginBottom: ""
                    },
                    hideProps: {
                        overflow: "hidden",
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginTop: 0,
                        marginBottom: 0
                    }
                },
                computed: {
                    hasAnimation: function(t) {
                        return !!t.animation[0]
                    },
                    hasTransition: function(t) {
                        var e = t.animation;
                        return this.hasAnimation && !0 === e[0]
                    }
                },
                methods: {
                    toggleElement: function(h, c, u) {
                        var d = this;
                        return new zt(function(t) {
                            h = j(h);
                            var e, n = function(t) {
                                    return zt.all(t.map(function(t) {
                                        return d._toggleElement(t, c, u)
                                    }))
                                },
                                i = h.filter(function(t) {
                                    return d.isToggled(t)
                                }),
                                r = h.filter(function(t) {
                                    return !b(i, t)
                                });
                            if (d.queued && B(u) && B(c) && d.hasAnimation && !(h.length < 2)) {
                                var o = document.body,
                                    s = o.scrollTop,
                                    a = i[0],
                                    l = Ue.inProgress(a) && Se(a, "uk-animation-leave") || Fe.inProgress(a) && "0px" === a.style.height;
                                e = n(i), l || (e = e.then(function() {
                                    var t = n(r);
                                    return o.scrollTop = s, t
                                }))
                            } else e = n(r.concat(i));
                            e.then(t, X)
                        })
                    },
                    toggleNow: function(e, n) {
                        var i = this;
                        return new zt(function(t) {
                            return zt.all(j(e).map(function(t) {
                                return i._toggleElement(t, n, !1)
                            })).then(t, X)
                        })
                    },
                    isToggled: function(t) {
                        var e = j(t || this.$el);
                        return this.cls ? Se(e, this.cls.split(" ")[0]) : !Q(e, "hidden")
                    },
                    updateAria: function(t) {
                        !1 === this.cls && Z(t, "aria-hidden", !this.isToggled(t))
                    },
                    _toggleElement: function(t, e, n) {
                        var i = this;
                        if (e = _(e) ? e : Ue.inProgress(t) ? Se(t, "uk-animation-leave") : Fe.inProgress(t) ? "0px" === t.style.height : !this.isToggled(t), !At(t, "before" + (e ? "show" : "hide"), [this])) return zt.reject();
                        var r, o, s, a, l, h, c, u, d, f, p, m, g = (x(n) ? n : !1 !== n && this.hasAnimation ? this.hasTransition ? (c = (h = this).isToggled, u = h.duration, d = h.initProps, f = h.hideProps, p = h.transition, m = h._toggle, function(t, e) {
                            var n = Fe.inProgress(t),
                                i = t.hasChildNodes ? P(Oe(t.firstElementChild, "marginTop")) + P(Oe(t.lastElementChild, "marginBottom")) : 0,
                                r = xt(t) ? Qe(t) + (n ? 0 : i) : 0;
                            Fe.cancel(t), c(t) || m(t, !0), Qe(t, ""), pn.flush();
                            var o = Qe(t) + (n ? 0 : i);
                            return Qe(t, r), (e ? Fe.start(t, Y({}, d, {
                                overflow: "hidden",
                                height: o
                            }), Math.round(u * (1 - r / o)), p) : Fe.start(t, f, Math.round(u * (r / o)), p).then(function() {
                                return m(t, !1)
                            })).then(function() {
                                return Oe(t, d)
                            })
                        }) : (o = (r = this).animation, s = r.duration, a = r.origin, l = r._toggle, function(t, e) {
                            return Ue.cancel(t), e ? (l(t, !0), Ue.in(t, o[0], s, a)) : Ue.out(t, o[1] || o[0], s, a).then(function() {
                                return l(t, !1)
                            })
                        }) : this._toggle)(t, e);
                        At(t, e ? "show" : "hide", [this]);
                        var v = function() {
                            At(t, e ? "shown" : "hidden", [i]), i.$update(t)
                        };
                        return g ? g.then(v) : zt.resolve(v())
                    },
                    _toggle: function(t, e) {
                        var n;
                        t && (this.cls ? (n = b(this.cls, " ") || Boolean(e) !== Se(t, this.cls)) && Te(t, this.cls, b(this.cls, " ") ? void 0 : e) : (n = Boolean(e) === Q(t, "hidden")) && Z(t, "hidden", e ? null : ""), be("[autofocus]", t).some(function(t) {
                            return xt(t) && (t.focus() || !0)
                        }), this.updateAria(t), n && this.$update(t))
                    }
                }
            };
        var qn = {
                mixins: [Yn, Rn],
                props: {
                    targets: String,
                    active: null,
                    collapsible: Boolean,
                    multiple: Boolean,
                    toggle: String,
                    content: String,
                    transition: String
                },
                data: {
                    targets: "> *",
                    active: !1,
                    animation: [!0],
                    collapsible: !0,
                    multiple: !1,
                    clsOpen: "uk-open",
                    toggle: "> .uk-accordion-title",
                    content: "> .uk-accordion-content",
                    transition: "ease"
                },
                computed: {
                    items: function(t, e) {
                        return be(t.targets, e)
                    }
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.targets + " " + this.$props.toggle
                    },
                    handler: function(t) {
                        t.preventDefault(), this.toggle(ne(be(this.targets + " " + this.$props.toggle, this.$el), t.current))
                    }
                }],
                connected: function() {
                    if (!1 !== this.active) {
                        var t = this.items[Number(this.active)];
                        t && !Se(t, this.clsOpen) && this.toggle(t, !1)
                    }
                },
                update: function() {
                    var e = this;
                    this.items.forEach(function(t) {
                        return e._toggle(we(e.content, t), Se(t, e.clsOpen))
                    });
                    var t = !this.collapsible && !Se(this.items, this.clsOpen) && this.items[0];
                    t && this.toggle(t, !1)
                },
                methods: {
                    toggle: function(r, o) {
                        var s = this,
                            t = ie(r, this.items),
                            a = It(this.items, "." + this.clsOpen);
                        (r = this.items[t]) && [r].concat(!this.multiple && !b(a, r) && a || []).forEach(function(t) {
                            var e = t === r,
                                n = e && !Se(t, s.clsOpen);
                            if (n || !e || s.collapsible || !(a.length < 2)) {
                                Te(t, s.clsOpen, n);
                                var i = t._wrapper ? t._wrapper.firstElementChild : we(s.content, t);
                                t._wrapper || (t._wrapper = ue(i, "<div>"), Z(t._wrapper, "hidden", n ? "" : null)), s._toggle(i, !0), s.toggleElement(t._wrapper, n, o).then(function() {
                                    Se(t, s.clsOpen) === n && (n || s._toggle(i, !1), t._wrapper = null, fe(i))
                                })
                            }
                        })
                    }
                }
            },
            Un = {
                mixins: [Yn, Rn],
                args: "animation",
                props: {
                    close: String
                },
                data: {
                    animation: [!0],
                    selClose: ".uk-alert-close",
                    duration: 150,
                    hideProps: Y({
                        opacity: 0
                    }, Rn.data.hideProps)
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.selClose
                    },
                    handler: function(t) {
                        t.preventDefault(), this.close()
                    }
                }],
                methods: {
                    close: function() {
                        var t = this;
                        this.toggleElement(this.$el).then(function() {
                            return t.$destroy(!0)
                        })
                    }
                }
            };

        function Xn(o) {
            ee(function() {
                o.update();
                var n = 0,
                    i = 0;
                if (Tt(window, "load resize", function(t) {
                        return o.update(null, t)
                    }), Tt(window, "scroll", function(t) {
                        var e = t.target;
                        t.dir = n <= window.pageYOffset ? "down" : "up", t.pageYOffset = n = window.pageYOffset, o.update(1 !== e.nodeType ? document.body : e, t)
                    }, {
                        passive: !0,
                        capture: !0
                    }), Tt(document, "loadedmetadata load", function(t) {
                        var e = t.target;
                        return o.update(e, "load")
                    }, !0), Tt(document, "animationstart", function(t) {
                        var e = t.target;
                        (Oe(e, "animationName") || "").match(/^uk-.*(left|right)/) && (i++, Oe(document.body, "overflowX", "hidden"), setTimeout(function() {
                            --i || Oe(document.body, "overflowX", "")
                        }, F(Oe(e, "animationDuration")) + 100))
                    }, !0), Xt) {
                    var r = "uk-hover";
                    Tt(document, "tap", function(t) {
                        var e = t.target;
                        return be("." + r).forEach(function(t) {
                            return !St(e, t) && ke(t, r)
                        })
                    }), Object.defineProperty(o, "hoverSelector", {
                        set: function(t) {
                            Tt(document, "tap", t, function(t) {
                                return xe(t.current, r)
                            })
                        }
                    }), o.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]"
                }
            })
        }
        var Kn, Gn, Jn = {
                args: "autoplay",
                props: {
                    automute: Boolean,
                    autoplay: Boolean
                },
                data: {
                    automute: !1,
                    autoplay: !0
                },
                computed: {
                    inView: function(t) {
                        return "inview" === t.autoplay
                    }
                },
                connected: function() {
                    this.inView && !Q(this.$el, "preload") && (this.$el.preload = "none"), this.player = new Tn(this.$el), this.automute && this.player.mute()
                },
                update: {
                    read: function(t, e) {
                        var n = e.type;
                        return !(!this.player || !("scroll" !== n && "resize" !== n || this.inView)) && {
                            visible: xt(this.$el) && "hidden" !== Oe(this.$el, "visibility"),
                            inView: this.inView && ln(this.$el)
                        }
                    },
                    write: function(t) {
                        var e = t.visible,
                            n = t.inView;
                        !e || this.inView && !n ? this.player.pause() : (!0 === this.autoplay || this.inView && n) && this.player.play()
                    },
                    events: ["load", "resize", "scroll"]
                }
            },
            Zn = {
                mixins: [Yn, Jn],
                props: {
                    width: Number,
                    height: Number
                },
                data: {
                    automute: !0
                },
                update: {
                    read: function() {
                        var t = this.$el;
                        if (!xt(t)) return !1;
                        var e = t.parentNode;
                        return {
                            height: e.offsetHeight,
                            width: e.offsetWidth
                        }
                    },
                    write: function(t) {
                        var e = t.height,
                            n = t.width,
                            i = this.$el,
                            r = this.width || i.naturalWidth || i.videoWidth || i.clientWidth,
                            o = this.height || i.naturalHeight || i.videoHeight || i.clientHeight;
                        r && o && Oe(i, J.cover({
                            width: r,
                            height: o
                        }, {
                            width: n + (n % 2 ? 1 : 0),
                            height: e + (e % 2 ? 1 : 0)
                        }))
                    },
                    events: ["load", "resize"]
                }
            },
            Qn = {
                props: {
                    pos: String,
                    offset: null,
                    flip: Boolean,
                    clsPos: String
                },
                data: {
                    pos: "bottom-" + (Rt ? "right" : "left"),
                    flip: !0,
                    offset: !1,
                    clsPos: ""
                },
                computed: {
                    pos: function(t) {
                        var e = t.pos;
                        return (e + (b(e, "-") ? "" : "-center")).split("-")
                    },
                    dir: function() {
                        return this.pos[0]
                    },
                    align: function() {
                        return this.pos[1]
                    }
                },
                methods: {
                    positionAt: function(t, e, n) {
                        var i;
                        $e(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"), Oe(t, {
                            top: "",
                            left: ""
                        });
                        var r = this.offset,
                            o = this.getAxis();
                        r = M(r) ? r : (i = we(r)) ? Ge(i)["x" === o ? "left" : "top"] - Ge(e)["x" === o ? "right" : "bottom"] : 0;
                        var s = Ke(t, e, "x" === o ? an(this.dir) + " " + this.align : this.align + " " + an(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target,
                            a = s.x,
                            l = s.y;
                        this.dir = "x" === o ? a : l, this.align = "x" === o ? l : a, Te(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                    },
                    getAxis: function() {
                        return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                    }
                }
            },
            ti = {
                mixins: [Qn, Rn],
                args: "pos",
                props: {
                    mode: "list",
                    toggle: Boolean,
                    boundary: Boolean,
                    boundaryAlign: Boolean,
                    delayShow: Number,
                    delayHide: Number,
                    clsDrop: String
                },
                data: {
                    mode: ["click", "hover"],
                    toggle: "- *",
                    boundary: window,
                    boundaryAlign: !1,
                    delayShow: 0,
                    delayHide: 800,
                    clsDrop: !1,
                    hoverIdle: 200,
                    animation: ["uk-animation-fade"],
                    cls: "uk-open"
                },
                computed: {
                    boundary: function(t, e) {
                        return nt(t.boundary, e)
                    },
                    clsDrop: function(t) {
                        return t.clsDrop || "uk-" + this.$options.name
                    },
                    clsPos: function() {
                        return this.clsDrop
                    }
                },
                created: function() {
                    this.tracker = new wn
                },
                connected: function() {
                    xe(this.$el, this.clsDrop);
                    var t = this.$props.toggle;
                    this.toggle = t && this.$create("toggle", nt(t, this.$el), {
                        target: this.$el,
                        mode: this.mode
                    }), this.updateAria(this.$el)
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return "." + this.clsDrop + "-close"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide(!1)
                    }
                }, {
                    name: "click",
                    delegate: function() {
                        return 'a[href^="#"]'
                    },
                    handler: function(t) {
                        if (!t.defaultPrevented) {
                            var e = t.target.hash;
                            e || t.preventDefault(), e && St(e, this.$el) || this.hide(!1)
                        }
                    }
                }, {
                    name: "beforescroll",
                    handler: function() {
                        this.hide(!1)
                    }
                }, {
                    name: "toggle",
                    self: !0,
                    handler: function(t, e) {
                        t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e, !1)
                    }
                }, {
                    name: Zt,
                    filter: function() {
                        return b(this.mode, "hover")
                    },
                    handler: function(t) {
                        Dn(t) || (Kn && Kn !== this && Kn.toggle && b(Kn.toggle.mode, "hover") && !St(t.target, Kn.toggle.$el) && !G({
                            x: t.pageX,
                            y: t.pageY
                        }, Ge(Kn.$el)) && Kn.hide(!1), t.preventDefault(), this.show(this.toggle))
                    }
                }, {
                    name: "toggleshow",
                    handler: function(t, e) {
                        e && !b(e.target, this.$el) || (t.preventDefault(), this.show(e || this.toggle))
                    }
                }, {
                    name: "togglehide " + Qt,
                    handler: function(t, e) {
                        Dn(t) || e && !b(e.target, this.$el) || (t.preventDefault(), this.toggle && b(this.toggle.mode, "hover") && this.hide())
                    }
                }, {
                    name: "beforeshow",
                    self: !0,
                    handler: function() {
                        this.clearTimers(), Ue.cancel(this.$el), this.position()
                    }
                }, {
                    name: "show",
                    self: !0,
                    handler: function() {
                        this.tracker.init(), this.toggle && (xe(this.toggle.$el, this.cls), Z(this.toggle.$el, "aria-expanded", "true")),
                            function() {
                                if (Gn) return;
                                Gn = !0, Tt(document, "click", function(t) {
                                    var e, n = t.target,
                                        i = t.defaultPrevented;
                                    if (!i)
                                        for (; Kn && Kn !== e && !St(n, Kn.$el) && (!Kn.toggle || !St(n, Kn.toggle.$el));)(e = Kn).hide(!1)
                                })
                            }()
                    }
                }, {
                    name: "beforehide",
                    self: !0,
                    handler: function() {
                        this.clearTimers()
                    }
                }, {
                    name: "hide",
                    handler: function(t) {
                        var e = t.target;
                        this.$el === e ? (Kn = this.isActive() ? null : Kn, this.toggle && (ke(this.toggle.$el, this.cls), Z(this.toggle.$el, "aria-expanded", "false"), this.toggle.$el.blur(), be("a, button", this.toggle.$el).forEach(function(t) {
                            return t.blur()
                        })), this.tracker.cancel()) : Kn = null === Kn && St(e, this.$el) && this.isToggled() ? this : Kn
                    }
                }],
                update: {
                    write: function() {
                        this.isToggled() && !Ue.inProgress(this.$el) && this.position()
                    },
                    events: ["resize"]
                },
                methods: {
                    show: function(e, n) {
                        var i = this;
                        void 0 === n && (n = !0);
                        var r = function() {
                                return !i.isToggled() && i.toggleElement(i.$el, !0)
                            },
                            t = function() {
                                if (i.toggle = e || i.toggle, i.clearTimers(), !i.isActive())
                                    if (n && Kn && Kn !== i && Kn.isDelaying) i.showTimer = setTimeout(i.show, 10);
                                    else {
                                        if (i.isParentOf(Kn)) {
                                            if (!Kn.hideTimer) return;
                                            Kn.hide(!1)
                                        } else if (Kn && !i.isChildOf(Kn) && !i.isParentOf(Kn))
                                            for (var t; Kn && Kn !== t && !i.isChildOf(Kn);)(t = Kn).hide(!1);
                                        n && i.delayShow ? i.showTimer = setTimeout(r, i.delayShow) : r(), Kn = i
                                    }
                            };
                        e && this.toggle && e.$el !== this.toggle.$el ? (Ct(this.$el, "hide", t), this.hide(!1)) : t()
                    },
                    hide: function(t) {
                        var e = this;
                        void 0 === t && (t = !0);
                        var n = function() {
                            return e.toggleNow(e.$el, !1)
                        };
                        this.clearTimers(), this.isDelaying = this.tracker.movesTo(this.$el), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n()
                    },
                    clearTimers: function() {
                        clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                    },
                    isActive: function() {
                        return Kn === this
                    },
                    isChildOf: function(t) {
                        return t && t !== this && St(this.$el, t.$el)
                    },
                    isParentOf: function(t) {
                        return t && t !== this && St(t.$el, this.$el)
                    },
                    position: function() {
                        $e(this.$el, this.clsDrop + "-(stack|boundary)"), Oe(this.$el, {
                            top: "",
                            left: "",
                            display: "block"
                        }), Te(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                        var t = Ge(this.boundary),
                            e = this.boundaryAlign ? t : Ge(this.toggle.$el);
                        if ("justify" === this.align) {
                            var n = "y" === this.getAxis() ? "width" : "height";
                            Oe(this.$el, n, e[n])
                        } else this.$el.offsetWidth > Math.max(t.right - e.left, e.right - t.left) && xe(this.$el, this.clsDrop + "-stack");
                        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary), Oe(this.$el, "display", "")
                    }
                }
            };
        var ei = {
                extends: ti
            },
            ni = {
                mixins: [Yn],
                args: "target",
                props: {
                    target: Boolean
                },
                data: {
                    target: !1
                },
                computed: {
                    input: function(t, e) {
                        return we(kt, e)
                    },
                    state: function() {
                        return this.input.nextElementSibling
                    },
                    target: function(t, e) {
                        var n = t.target;
                        return n && (!0 === n && this.input.parentNode === e && this.input.nextElementSibling || nt(n, e))
                    }
                },
                update: function() {
                    var t = this.target,
                        e = this.input;
                    if (t) {
                        var n, i = $t(t) ? "value" : "textContent",
                            r = t[i],
                            o = e.files && e.files[0] ? e.files[0].name : ft(e, "select") && (n = be("option", e).filter(function(t) {
                                return t.selected
                            })[0]) ? n.textContent : e.value;
                        r !== o && (t[i] = o)
                    }
                },
                events: [{
                    name: "focusin focusout mouseenter mouseleave",
                    delegate: kt,
                    handler: function(t) {
                        var e = t.type;
                        t.current === this.input && Te(this.state, "uk-" + (b(e, "focus") ? "focus" : "hover"), b(["focusin", "mouseenter"], e))
                    }
                }, {
                    name: "change",
                    handler: function() {
                        this.$emit()
                    }
                }]
            },
            ii = {
                update: {
                    read: function(t) {
                        var e = ln(this.$el);
                        if (!e || t.isInView === e) return !1;
                        t.isInView = e
                    },
                    write: function() {
                        this.$el.src = this.$el.src
                    },
                    events: ["scroll", "load", "resize"]
                }
            },
            ri = {
                props: {
                    margin: String,
                    firstColumn: Boolean
                },
                data: {
                    margin: "uk-margin-small-top",
                    firstColumn: "uk-first-column"
                },
                update: {
                    read: function(t) {
                        var e = this.$el.children;
                        if (!e.length || !xt(this.$el)) return t.rows = [
                            []
                        ];
                        t.rows = oi(e), t.stacks = !t.rows.some(function(t) {
                            return 1 < t.length
                        })
                    },
                    write: function(t) {
                        var i = this;
                        t.rows.forEach(function(t, n) {
                            return t.forEach(function(t, e) {
                                Te(t, i.margin, 0 !== n), Te(t, i.firstColumn, 0 === e)
                            })
                        })
                    },
                    events: ["load", "resize"]
                }
            };

        function oi(t) {
            for (var e = [
                    []
                ], n = 0; n < t.length; n++) {
                var i = t[n],
                    r = si(i);
                if (r.height)
                    for (var o = e.length - 1; 0 <= o; o--) {
                        var s = e[o];
                        if (!s[0]) {
                            s.push(i);
                            break
                        }
                        var a = void 0;
                        if (a = s[0].offsetParent === i.offsetParent ? si(s[0]) : (r = si(i, !0), si(s[0], !0)), r.top >= a.bottom - 1) {
                            e.push([i]);
                            break
                        }
                        if (r.bottom > a.top) {
                            if (r.left < a.left && !Rt) {
                                s.unshift(i);
                                break
                            }
                            s.push(i);
                            break
                        }
                        if (0 === o) {
                            e.unshift([i]);
                            break
                        }
                    }
            }
            return e
        }

        function si(t, e) {
            var n;
            void 0 === e && (e = !1);
            var i = t.offsetTop,
                r = t.offsetLeft,
                o = t.offsetHeight;
            return e && (i = (n = un(t))[0], r = n[1]), {
                top: i,
                left: r,
                height: o,
                bottom: i + o
            }
        }
        var ai = {
            extends: ri,
            mixins: [Yn],
            name: "grid",
            props: {
                masonry: Boolean,
                parallax: Number
            },
            data: {
                margin: "uk-grid-margin",
                clsStack: "uk-grid-stack",
                masonry: !1,
                parallax: 0
            },
            computed: {
                length: function(t, e) {
                    return e.children.length
                },
                parallax: function(t) {
                    var e = t.parallax;
                    return e && this.length ? Math.abs(e) : ""
                }
            },
            connected: function() {
                this.masonry && xe(this.$el, "uk-flex-top uk-flex-wrap-top")
            },
            update: [{
                read: function(t) {
                    var r = t.rows;
                    (this.masonry || this.parallax) && (r = r.map(function(t) {
                        return q(t, "offsetLeft")
                    }));
                    var e, n, i, o, s, a = r.some(function(t) {
                            return t.some(function(t) {
                                return "static" === t.style.position
                            })
                        }),
                        l = !1,
                        h = "";
                    if (this.masonry && this.length) {
                        var c = 0;
                        l = r.reduce(function(n, t, i) {
                            return n[i] = t.map(function(t, e) {
                                return 0 === i ? 0 : P(n[i - 1][e]) + (c - P(r[i - 1][e] && r[i - 1][e].offsetHeight))
                            }), c = t.reduce(function(t, e) {
                                return Math.max(t, e.offsetHeight)
                            }, 0), n
                        }, []), s = r, h = Math.max.apply(Math, s.reduce(function(n, t) {
                            return t.forEach(function(t, e) {
                                return n[e] = (n[e] || 0) + t.offsetHeight
                            }), n
                        }, [])) + (e = this.$el, n = this.margin, i = j(e.children), P((o = i.filter(function(t) {
                            return Se(t, n)
                        })[0]) ? Oe(o, "marginTop") : Oe(i[0], "paddingLeft")) * (r.length - 1))
                    }
                    return {
                        rows: r,
                        translates: l,
                        height: !!a && h
                    }
                },
                write: function(t) {
                    var e = t.stacks,
                        n = t.height;
                    Te(this.$el, this.clsStack, e), Oe(this.$el, "paddingBottom", this.parallax), !1 !== n && Oe(this.$el, "height", n)
                },
                events: ["load", "resize"]
            }, {
                read: function(t) {
                    var e = t.height;
                    return {
                        scrolled: !!this.parallax && hn(this.$el, e ? e - Qe(this.$el) : 0) * this.parallax
                    }
                },
                write: function(t) {
                    var e = t.rows,
                        i = t.scrolled,
                        r = t.translates;
                    (!1 !== i || r) && e.forEach(function(t, n) {
                        return t.forEach(function(t, e) {
                            return Oe(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? e % 2 ? i : i / 8 : 0)) + "px)" : "")
                        })
                    })
                },
                events: ["scroll", "load", "resize"]
            }]
        };
        var li = Yt ? {
                data: {
                    selMinHeight: !1,
                    forceHeight: !1
                },
                computed: {
                    elements: function(t, e) {
                        var n = t.selMinHeight;
                        return n ? be(n, e) : [e]
                    }
                },
                update: [{
                    read: function() {
                        Oe(this.elements, "height", "")
                    },
                    order: -5,
                    events: ["load", "resize"]
                }, {
                    write: function() {
                        var n = this;
                        this.elements.forEach(function(t) {
                            var e = P(Oe(t, "minHeight"));
                            e && (n.forceHeight || Math.round(e) >= Qe(t)) && Oe(t, "height", e)
                        })
                    },
                    order: 5,
                    events: ["load", "resize"]
                }]
            } : {},
            hi = {
                mixins: [li],
                args: "target",
                props: {
                    target: String,
                    row: Boolean
                },
                data: {
                    target: "> *",
                    row: !0,
                    forceHeight: !0
                },
                computed: {
                    elements: function(t, e) {
                        return be(t.target, e)
                    }
                },
                update: {
                    read: function() {
                        return {
                            rows: (this.row ? oi(this.elements) : [this.elements]).map(ci)
                        }
                    },
                    write: function(t) {
                        t.rows.forEach(function(t) {
                            var n = t.heights;
                            return t.elements.forEach(function(t, e) {
                                return Oe(t, "minHeight", n[e])
                            })
                        })
                    },
                    events: ["load", "resize"]
                }
            };

        function ci(t) {
            var e;
            if (t.length < 2) return {
                heights: [""],
                elements: t
            };
            var n = ui(t),
                i = n.heights,
                r = n.max,
                o = t.some(function(t) {
                    return t.style.minHeight
                }),
                s = t.some(function(t, e) {
                    return !t.style.minHeight && i[e] < r
                });
            return o && s && (Oe(t, "minHeight", ""), e = ui(t), i = e.heights, r = e.max), {
                heights: i = t.map(function(t, e) {
                    return i[e] === r && P(t.style.minHeight).toFixed(2) !== r.toFixed(2) ? "" : r
                }),
                elements: t
            }
        }

        function ui(t) {
            var e = t.map(function(t) {
                return Ge(t).height - nn("height", t, "content-box")
            });
            return {
                heights: e,
                max: Math.max.apply(null, e)
            }
        }
        var di = {
            mixins: [li],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            update: {
                read: function() {
                    var t = "",
                        e = nn("height", this.$el, "content-box");
                    if (this.expand) t = Qe(window) - (fi(document.documentElement) - fi(this.$el)) - e || "";
                    else {
                        if (t = "calc(100vh", this.offsetTop) {
                            var n = Ge(this.$el).top;
                            t += n < Qe(window) / 2 ? " - " + n + "px" : ""
                        }!0 === this.offsetBottom ? t += " - " + fi(this.$el.nextElementSibling) + "px" : M(this.offsetBottom) ? t += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? t += " - " + P(this.offsetBottom) + "px" : N(this.offsetBottom) && (t += " - " + fi(nt(this.offsetBottom, this.$el)) + "px"), t += (e ? " - " + e + "px" : "") + ")"
                    }
                    return {
                        minHeight: t
                    }
                },
                write: function(t) {
                    var e = t.minHeight;
                    Oe(this.$el, {
                        minHeight: e
                    }), this.minHeight && P(Oe(this.$el, "minHeight")) < this.minHeight && Oe(this.$el, "minHeight", this.minHeight)
                },
                events: ["load", "resize"]
            }
        };

        function fi(t) {
            return t && t.offsetHeight || 0
        }
        var pi = {},
            mi = {
                args: "src",
                props: {
                    id: String,
                    icon: String,
                    src: String,
                    style: String,
                    width: Number,
                    height: Number,
                    ratio: Number,
                    class: String
                },
                data: {
                    ratio: 1,
                    id: !1,
                    exclude: ["ratio", "src", "icon"],
                    class: ""
                },
                connected: function() {
                    var t, a = this;
                    if (this.class += " uk-svg", !this.icon && b(this.src, "#")) {
                        var e = this.src.split("#");
                        1 < e.length && (t = e, this.src = t[0], this.icon = t[1])
                    }
                    this.svg = this.getSvg().then(function(t) {
                        var e;
                        if (!(e = N(t) ? (a.icon && b(t, "<symbol") && (t = function(t, e) {
                                if (!vi[t]) {
                                    var n;
                                    for (vi[t] = {}; n = gi.exec(t);) vi[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>";
                                    gi.lastIndex = 0
                                }
                                return vi[t][e]
                            }(t, a.icon) || t), we(t.substr(t.indexOf("<svg")))) : t.cloneNode(!0))) return zt.reject("SVG not found.");
                        var n = Z(e, "viewBox");
                        for (var i in n && (n = n.split(" "), a.width = a.$props.width || n[2], a.height = a.$props.height || n[3]), a.width *= a.ratio, a.height *= a.ratio, a.$options.props) a[i] && !b(a.exclude, i) && Z(e, i, a[i]);
                        a.id || tt(e, "id"), a.width && !a.height && tt(e, "height"), a.height && !a.width && tt(e, "width");
                        var r = a.$el;
                        if (yt(r) || "CANVAS" === r.tagName) {
                            Z(r, {
                                hidden: !0,
                                id: null
                            });
                            var o = r.nextElementSibling;
                            o && e.isEqualNode(o) ? e = o : le(r, e)
                        } else {
                            var s = r.lastElementChild;
                            s && e.isEqualNode(s) ? e = s : se(r, e)
                        }
                        return a.svgEl = e
                    }, X)
                },
                disconnected: function() {
                    var e = this;
                    yt(this.$el) && Z(this.$el, {
                        hidden: null,
                        id: this.id || null
                    }), this.svg && this.svg.then(function(t) {
                        return (!e._connected || t !== e.svgEl) && ce(t)
                    }, X), this.svg = this.svgEl = null
                },
                methods: {
                    getSvg: function() {
                        var n = this;
                        return this.src ? (pi[this.src] || (pi[this.src] = new zt(function(e, t) {
                            v(n.src, "data:") ? e(decodeURIComponent(n.src.split(",")[1])) : Ft(n.src).then(function(t) {
                                return e(t.response)
                            }, function() {
                                return t("SVG not found.")
                            })
                        })), pi[this.src]) : zt.reject()
                    }
                }
            },
            gi = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
            vi = {};
        var wi = {},
            bi = {
                spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
                totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
                marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
                "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
                "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
                "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
                "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
                "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
                "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
                "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
                "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
                "slidenav-next": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
                "slidenav-next-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
                "slidenav-previous": '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
                "slidenav-previous-large": '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
            },
            yi = {
                install: function(r) {
                    r.icon.add = function(t, e) {
                        var n, i = N(t) ? ((n = {})[t] = e, n) : t;
                        R(i, function(t, e) {
                            bi[e] = t, delete wi[e]
                        }), r._initialized && ve(document.body, function(t) {
                            return R(r.getComponents(t), function(t) {
                                return t.$options.isIcon && t.icon in i && t.$reset()
                            })
                        })
                    }
                },
                attrs: ["icon", "ratio"],
                mixins: [Yn, mi],
                args: "icon",
                props: ["icon"],
                data: {
                    exclude: ["id", "style", "class", "src", "icon", "ratio"]
                },
                isIcon: !0,
                connected: function() {
                    xe(this.$el, "uk-icon")
                },
                methods: {
                    getSvg: function() {
                        var t, e = function(t) {
                            if (!bi[t]) return null;
                            wi[t] || (wi[t] = we(bi[t].trim()));
                            return wi[t]
                        }((t = this.icon, Rt ? V(V(t, "left", "right"), "previous", "next") : t));
                        return e ? zt.resolve(e) : zt.reject("Icon not found.")
                    }
                }
            },
            xi = {
                extends: yi,
                data: function(t) {
                    return {
                        icon: m(t.constructor.options.name)
                    }
                }
            },
            ki = {
                extends: xi,
                connected: function() {
                    xe(this.$el, "uk-slidenav")
                },
                computed: {
                    icon: function(t, e) {
                        var n = t.icon;
                        return Se(e, "uk-slidenav-large") ? n + "-large" : n
                    }
                }
            },
            $i = {
                extends: xi,
                computed: {
                    icon: function(t, e) {
                        var n = t.icon;
                        return Se(e, "uk-search-icon") && gt(e, ".uk-search-large").length ? "search-large" : gt(e, ".uk-search-navbar").length ? "search-navbar" : n
                    }
                }
            },
            Ii = {
                extends: xi,
                computed: {
                    icon: function() {
                        return "close-" + (Se(this.$el, "uk-close-large") ? "large" : "icon")
                    }
                }
            },
            Si = {
                extends: xi,
                connected: function() {
                    var e = this;
                    this.svg.then(function(t) {
                        return 1 !== e.ratio && Oe(we("circle", t), "strokeWidth", 1 / e.ratio)
                    }, X)
                }
            };
        var Ti = {
            props: {
                dataSrc: String,
                dataSrcset: Boolean,
                sizes: String,
                width: Number,
                height: Number,
                offsetTop: String,
                offsetLeft: String,
                target: String
            },
            data: {
                dataSrc: "",
                dataSrcset: !1,
                sizes: !1,
                width: !1,
                height: !1,
                offsetTop: "50vh",
                offsetLeft: 0,
                target: !1
            },
            computed: {
                cacheKey: function(t) {
                    var e = t.dataSrc;
                    return this.$name + "." + e
                },
                width: function(t) {
                    var e = t.width,
                        n = t.dataWidth;
                    return e || n
                },
                height: function(t) {
                    var e = t.height,
                        n = t.dataHeight;
                    return e || n
                },
                sizes: function(t) {
                    var e = t.sizes,
                        n = t.dataSizes;
                    return e || n
                },
                isImg: function(t, e) {
                    return Bi(e)
                },
                target: function(t) {
                    var e = t.target;
                    return [this.$el].concat(it(e, this.$el))
                },
                offsetTop: function(t) {
                    return Ni(t.offsetTop, "height")
                },
                offsetLeft: function(t) {
                    return Ni(t.offsetLeft, "width")
                }
            },
            connected: function() {
                zi[this.cacheKey] ? Ei(this.$el, zi[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && Ei(this.$el, function(t, e, n) {
                    var i;
                    if (n) {
                        for (var r; r = Ci.exec(n);)
                            if (!r[1] || window.matchMedia(r[1]).matches) {
                                o = r[2], r = v(o, "calc") ? o.substring(5, o.length - 1).replace(Ai, function(t) {
                                    return Ni(t)
                                }).replace(/ /g, "").match(_i).reduce(function(t, e) {
                                    return t + +e
                                }, 0) : o;
                                break
                            }
                        Ci.lastIndex = 0, i = J.ratio({
                            width: t,
                            height: e
                        }, "width", Ni(r || "100vw")), t = i.width, e = i.height
                    }
                    var o;
                    return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
                }(this.width, this.height, this.sizes))
            },
            update: {
                read: function(t) {
                    var e = this,
                        n = t.update,
                        i = t.image;
                    if (n) {
                        if (!i && this.target.some(function(t) {
                                return ln(t, e.offsetTop, e.offsetLeft, !0)
                            })) return {
                            image: Vt(this.dataSrc, this.dataSrcset, this.sizes).then(function(t) {
                                return Ei(e.$el, Di(t), t.srcset, t.sizes), zi[e.cacheKey] = Di(t), t
                            }, X)
                        };
                        !this.isImg && i && i.then(function(t) {
                            return t && Ei(e.$el, Di(t))
                        })
                    }
                },
                write: function(t) {
                    if (!t.update) return this.$emit(), t.update = !0
                },
                events: ["scroll", "load", "resize"]
            }
        };

        function Ei(t, e, n, i) {
            if (Bi(t)) i && (t.sizes = i), n && (t.srcset = n), e && (t.src = e);
            else if (e) {
                !b(t.style.backgroundImage, e) && (Oe(t, "backgroundImage", "url(" + e + ")"), At(t, _t("load", !1)))
            }
        }
        var Ci = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
        var Ai = /\d+(?:\w+|%)/g,
            _i = /[+-]?(\d+)/g;

        function Ni(t, e, n) {
            return void 0 === e && (e = "width"), void 0 === n && (n = window), M(t) ? +t : u(t, "vw") ? Mi(n, "width", t) : u(t, "vh") ? Mi(n, "height", t) : u(t, "%") ? Mi(n, e, t) : P(t)
        }
        var Oi = {
            height: Qe,
            width: tn
        };

        function Mi(t, e, n) {
            return Oi[e](t) * P(n) / 100
        }

        function Bi(t) {
            return "IMG" === t.tagName
        }

        function Di(t) {
            return t.currentSrc || t.src
        }
        var zi, Pi = "__test__";
        try {
            (zi = window.sessionStorage || {})[Pi] = 1, delete zi[Pi]
        } catch (t) {
            zi = {}
        }
        var Hi = {
            props: {
                media: Boolean
            },
            data: {
                media: !1
            },
            computed: {
                matchMedia: function() {
                    var t = function(t) {
                        if (N(t))
                            if ("@" === t[0]) {
                                var e = "breakpoint-" + t.substr(1);
                                t = P(ze(e))
                            } else if (isNaN(t)) return t;
                        return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                    }(this.media);
                    return !t || window.matchMedia(t).matches
                }
            }
        };
        var Li, ji, Wi = {
                mixins: [Yn, Hi],
                props: {
                    fill: String
                },
                data: {
                    fill: "",
                    clsWrapper: "uk-leader-fill",
                    clsHide: "uk-leader-hide",
                    attrFill: "data-fill"
                },
                computed: {
                    fill: function(t) {
                        return t.fill || ze("leader-fill-content")
                    }
                },
                connected: function() {
                    var t;
                    t = de(this.$el, '<span class="' + this.clsWrapper + '">'), this.wrapper = t[0]
                },
                disconnected: function() {
                    fe(this.wrapper.childNodes)
                },
                update: {
                    read: function(t) {
                        var e = t.changed,
                            n = t.width,
                            i = n;
                        return {
                            width: n = Math.floor(this.$el.offsetWidth / 2),
                            changed: e || i !== n,
                            hide: !this.matchMedia
                        }
                    },
                    write: function(t) {
                        Te(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, Z(this.wrapper, this.attrFill, new Array(t.width).join(this.fill)))
                    },
                    events: ["load", "resize"]
                }
            },
            Fi = {
                props: {
                    container: Boolean
                },
                data: {
                    container: !0
                },
                computed: {
                    container: function(t) {
                        var e = t.container;
                        return !0 === e && this.$container || e && we(e)
                    }
                }
            },
            Vi = {
                mixins: [Yn, Fi, Rn],
                props: {
                    selPanel: String,
                    selClose: String,
                    escClose: Boolean,
                    bgClose: Boolean,
                    stack: Boolean
                },
                data: {
                    cls: "uk-open",
                    escClose: !0,
                    bgClose: !0,
                    overlay: !0,
                    stack: !1
                },
                computed: {
                    panel: function(t, e) {
                        return we(t.selPanel, e)
                    },
                    transitionElement: function() {
                        return this.panel
                    },
                    bgClose: function(t) {
                        return t.bgClose && this.panel
                    }
                },
                beforeDisconnect: function() {
                    this.isToggled() && this.toggleNow(this.$el, !1)
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.selClose
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide()
                    }
                }, {
                    name: "toggle",
                    self: !0,
                    handler: function(t) {
                        t.defaultPrevented || (t.preventDefault(), this.toggle())
                    }
                }, {
                    name: "beforeshow",
                    self: !0,
                    handler: function(t) {
                        var e = Li && Li !== this && Li;
                        if (Li = this, e) {
                            if (!this.stack) return e.hide().then(this.show), void t.preventDefault();
                            this.prev = e
                        }! function() {
                            if (ji) return;
                            ji = [Tt(document, "click", function(t) {
                                var e = t.target,
                                    n = t.defaultPrevented;
                                !Li || !Li.bgClose || n || Li.overlay && !St(e, Li.$el) || St(e, Li.panel) || Li.hide()
                            }), Tt(document, "keydown", function(t) {
                                27 === t.keyCode && Li && Li.escClose && (t.preventDefault(), Li.hide())
                            })]
                        }()
                    }
                }, {
                    name: "beforehide",
                    self: !0,
                    handler: function() {
                        (Li = Li && Li !== this && Li || this.prev) || (ji && ji.forEach(function(t) {
                            return t()
                        }), ji = null)
                    }
                }, {
                    name: "show",
                    self: !0,
                    handler: function() {
                        Se(document.documentElement, this.clsPage) || (this.scrollbarWidth = tn(window) - tn(document), Oe(document.body, "overflowY", this.scrollbarWidth && this.overlay ? "scroll" : "")), xe(document.documentElement, this.clsPage)
                    }
                }, {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        for (var t, e = this.prev; e;) {
                            if (e.clsPage === this.clsPage) {
                                t = !0;
                                break
                            }
                            e = e.prev
                        }
                        t || ke(document.documentElement, this.clsPage), !this.prev && Oe(document.body, "overflowY", "")
                    }
                }],
                methods: {
                    toggle: function() {
                        return this.isToggled() ? this.hide() : this.show()
                    },
                    show: function() {
                        return this.isToggled() ? zt.resolve() : (this.container && this.$el.parentNode !== this.container && (se(this.container, this.$el), this._callConnected()), this.toggleElement(this.$el, !0, Yi(this)))
                    },
                    hide: function() {
                        return this.isToggled() ? this.toggleElement(this.$el, !1, Yi(this)) : zt.resolve()
                    },
                    getActive: function() {
                        return Li
                    }
                }
            };

        function Yi(t) {
            var i = t.transitionElement,
                r = t._toggle;
            return function(e, n) {
                return new zt(function(t) {
                    return requestAnimationFrame(function() {
                        r(e, n), F(Oe(i, "transitionDuration")) ? Ct(i, "transitionend", t, !1, function(t) {
                            return t.target === i
                        }) : t()
                    })
                })
            }
        }
        var Ri = {
            install: function(a) {
                a.modal.dialog = function(t, e) {
                    var i = a.modal(' <div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div> ", e);
                    return i.show(), Tt(i.$el, "hidden", function(t) {
                        var e = t.target,
                            n = t.currentTarget;
                        e === n && i.$destroy(!0)
                    }), i
                }, a.modal.alert = function(e, n) {
                    return n = Y({
                        bgClose: !1,
                        escClose: !1,
                        labels: a.modal.labels
                    }, n), new zt(function(t) {
                        return Tt(a.modal.dialog(' <div class="uk-modal-body">' + (N(e) ? e : oe(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + n.labels.ok + "</button> </div> ", n).$el, "hide", t)
                    })
                }, a.modal.confirm = function(r, o) {
                    return o = Y({
                        bgClose: !1,
                        escClose: !0,
                        labels: a.modal.labels
                    }, o), new zt(function(e, t) {
                        var n = a.modal.dialog(' <form> <div class="uk-modal-body">' + (N(r) ? r : oe(r)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.labels.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + o.labels.ok + "</button> </div> </form> ", o),
                            i = !1;
                        Tt(n.$el, "submit", "form", function(t) {
                            t.preventDefault(), e(), i = !0, n.hide()
                        }), Tt(n.$el, "hide", function() {
                            i || t()
                        })
                    })
                }, a.modal.prompt = function(t, o, s) {
                    return s = Y({
                        bgClose: !1,
                        escClose: !0,
                        labels: a.modal.labels
                    }, s), new zt(function(e) {
                        var n = a.modal.dialog(' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (N(t) ? t : oe(t)) + '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + s.labels.cancel + '</button> <button class="uk-button uk-button-primary">' + s.labels.ok + "</button> </div> </form> ", s),
                            i = we("input", n.$el);
                        i.value = o;
                        var r = !1;
                        Tt(n.$el, "submit", "form", function(t) {
                            t.preventDefault(), e(i.value), r = !0, n.hide()
                        }), Tt(n.$el, "hide", function() {
                            r || e(null)
                        })
                    })
                }, a.modal.labels = {
                    ok: "Ok",
                    cancel: "Cancel"
                }
            },
            mixins: [Vi],
            data: {
                clsPage: "uk-modal-page",
                selPanel: ".uk-modal-dialog",
                selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
            },
            events: [{
                name: "show",
                self: !0,
                handler: function() {
                    Se(this.panel, "uk-margin-auto-vertical") ? xe(this.$el, "uk-flex") : Oe(this.$el, "display", "block"), Qe(this.$el)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function() {
                    Oe(this.$el, "display", ""), ke(this.$el, "uk-flex")
                }
            }]
        };
        var qi, Ui = {
                extends: qn,
                data: {
                    targets: "> .uk-parent",
                    toggle: "> a",
                    content: "> ul"
                }
            },
            Xi = {
                mixins: [Yn, li],
                props: {
                    dropdown: String,
                    mode: "list",
                    align: String,
                    offset: Number,
                    boundary: Boolean,
                    boundaryAlign: Boolean,
                    clsDrop: String,
                    delayShow: Number,
                    delayHide: Number,
                    dropbar: Boolean,
                    dropbarMode: String,
                    dropbarAnchor: Boolean,
                    duration: Number
                },
                data: {
                    dropdown: ".uk-navbar-nav > li",
                    align: Rt ? "right" : "left",
                    clsDrop: "uk-navbar-dropdown",
                    mode: void 0,
                    offset: void 0,
                    delayShow: void 0,
                    delayHide: void 0,
                    boundaryAlign: void 0,
                    flip: "x",
                    boundary: !0,
                    dropbar: !1,
                    dropbarMode: "slide",
                    dropbarAnchor: !1,
                    duration: 200,
                    forceHeight: !0,
                    selMinHeight: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
                },
                computed: {
                    boundary: function(t, e) {
                        var n = t.boundary,
                            i = t.boundaryAlign;
                        return !0 === n || i ? e : n
                    },
                    dropbarAnchor: function(t, e) {
                        return nt(t.dropbarAnchor, e)
                    },
                    pos: function(t) {
                        return "bottom-" + t.align
                    },
                    dropdowns: function(t, e) {
                        return be(t.dropdown + " ." + t.clsDrop, e)
                    }
                },
                beforeConnect: function() {
                    var t = this.$props.dropbar;
                    this.dropbar = t && (nt(t, this.$el) || we("+ .uk-navbar-dropbar", this.$el) || we("<div></div>")), this.dropbar && (xe(this.dropbar, "uk-navbar-dropbar"), "slide" === this.dropbarMode && xe(this.dropbar, "uk-navbar-dropbar-slide"))
                },
                disconnected: function() {
                    this.dropbar && ce(this.dropbar)
                },
                update: function() {
                    var e = this;
                    this.$create("drop", this.dropdowns.filter(function(t) {
                        return !e.getDropdown(t)
                    }), Y({}, this.$props, {
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset
                    }))
                },
                events: [{
                    name: "mouseover",
                    delegate: function() {
                        return this.dropdown
                    },
                    handler: function(t) {
                        var e = t.current,
                            n = this.getActive();
                        n && n.toggle && !St(n.toggle.$el, e) && !n.tracker.movesTo(n.$el) && n.hide(!1)
                    }
                }, {
                    name: "mouseleave",
                    el: function() {
                        return this.dropbar
                    },
                    handler: function() {
                        var t = this.getActive();
                        t && !ft(this.dropbar, ":hover") && t.hide()
                    }
                }, {
                    name: "beforeshow",
                    capture: !0,
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function() {
                        this.dropbar.parentNode || le(this.dropbarAnchor || this.$el, this.dropbar)
                    }
                }, {
                    name: "show",
                    capture: !0,
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function(t, e) {
                        var n = e.$el,
                            i = e.dir;
                        this.clsDrop && xe(n, this.clsDrop + "-dropbar"), "bottom" === i && this.transitionTo(n.offsetHeight + P(Oe(n, "marginTop")) + P(Oe(n, "marginBottom")), n)
                    }
                }, {
                    name: "beforehide",
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function(t, e) {
                        var n = e.$el,
                            i = this.getActive();
                        ft(this.dropbar, ":hover") && i && i.$el === n && t.preventDefault()
                    }
                }, {
                    name: "hide",
                    filter: function() {
                        return this.dropbar
                    },
                    handler: function(t, e) {
                        var n = e.$el,
                            i = this.getActive();
                        (!i || i && i.$el === n) && this.transitionTo(0)
                    }
                }],
                methods: {
                    getActive: function() {
                        var t = this.dropdowns.map(this.getDropdown).filter(function(t) {
                            return t && t.isActive()
                        })[0];
                        return t && b(t.mode, "hover") && St(t.toggle.$el, this.$el) && t
                    },
                    transitionTo: function(t, e) {
                        var n = this,
                            i = this.dropbar,
                            r = xt(i) ? Qe(i) : 0;
                        return Oe(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), Qe(i, r), Fe.cancel([e, i]), zt.all([Fe.start(i, {
                            height: t
                        }, this.duration), Fe.start(e, {
                            clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                        }, this.duration)]).catch(X).then(function() {
                            Oe(e, {
                                clip: ""
                            }), n.$update(i)
                        })
                    },
                    getDropdown: function(t) {
                        return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                    }
                }
            },
            Ki = {
                mixins: [Vi],
                args: "mode",
                props: {
                    content: String,
                    mode: String,
                    flip: Boolean,
                    overlay: Boolean
                },
                data: {
                    content: ".uk-offcanvas-content",
                    mode: "slide",
                    flip: !1,
                    overlay: !1,
                    clsPage: "uk-offcanvas-page",
                    clsContainer: "uk-offcanvas-container",
                    selPanel: ".uk-offcanvas-bar",
                    clsFlip: "uk-offcanvas-flip",
                    clsContent: "uk-offcanvas-content",
                    clsContentAnimation: "uk-offcanvas-content-animation",
                    clsSidebarAnimation: "uk-offcanvas-bar-animation",
                    clsMode: "uk-offcanvas",
                    clsOverlay: "uk-offcanvas-overlay",
                    selClose: ".uk-offcanvas-close"
                },
                computed: {
                    content: function(t) {
                        return we(t.content) || document.body
                    },
                    clsFlip: function(t) {
                        var e = t.flip,
                            n = t.clsFlip;
                        return e ? n : ""
                    },
                    clsOverlay: function(t) {
                        var e = t.overlay,
                            n = t.clsOverlay;
                        return e ? n : ""
                    },
                    clsMode: function(t) {
                        var e = t.mode;
                        return t.clsMode + "-" + e
                    },
                    clsSidebarAnimation: function(t) {
                        var e = t.mode,
                            n = t.clsSidebarAnimation;
                        return "none" === e || "reveal" === e ? "" : n
                    },
                    clsContentAnimation: function(t) {
                        var e = t.mode,
                            n = t.clsContentAnimation;
                        return "push" !== e && "reveal" !== e ? "" : n
                    },
                    transitionElement: function(t) {
                        return "reveal" === t.mode ? this.panel.parentNode : this.panel
                    }
                },
                update: {
                    write: function() {
                        this.getActive() === this && ((this.overlay || this.clsContentAnimation) && tn(this.content, tn(window) - this.scrollbarWidth), this.overlay && (Qe(this.content, Qe(window)), qi && (this.content.scrollTop = qi.y)))
                    },
                    events: ["resize"]
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return 'a[href^="#"]'
                    },
                    handler: function(t) {
                        var e = t.current;
                        e.hash && we(e.hash, this.content) && (qi = null, this.hide())
                    }
                }, {
                    name: "beforescroll",
                    filter: function() {
                        return this.overlay
                    },
                    handler: function(t, e, n) {
                        e && n && this.isToggled() && we(n, this.content) && (Ct(this.$el, "hidden", function() {
                            return e.scrollTo(n)
                        }), t.preventDefault())
                    }
                }, {
                    name: "show",
                    self: !0,
                    handler: function() {
                        qi = qi || {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }, "reveal" !== this.mode || Se(this.panel, this.clsMode) || (ue(this.panel, "<div>"), xe(this.panel.parentNode, this.clsMode)), Oe(document.documentElement, "overflowY", (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? "scroll" : ""), xe(document.body, this.clsContainer, this.clsFlip, this.clsOverlay), Qe(document.body), xe(this.content, this.clsContentAnimation), xe(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), xe(this.$el, this.clsOverlay), Oe(this.$el, "display", "block"), Qe(this.$el)
                    }
                }, {
                    name: "hide",
                    self: !0,
                    handler: function() {
                        ke(this.content, this.clsContentAnimation);
                        var t = this.getActive();
                        ("none" === this.mode || t && t !== this && t !== this.prev) && At(this.panel, "transitionend")
                    }
                }, {
                    name: "hidden",
                    self: !0,
                    handler: function() {
                        if ("reveal" === this.mode && fe(this.panel), this.overlay) {
                            if (!qi) {
                                var t = this.content,
                                    e = t.scrollLeft,
                                    n = t.scrollTop;
                                qi = {
                                    x: e,
                                    y: n
                                }
                            }
                        } else qi = {
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        };
                        ke(this.panel, this.clsSidebarAnimation, this.clsMode), ke(this.$el, this.clsOverlay), Oe(this.$el, "display", ""), ke(document.body, this.clsContainer, this.clsFlip, this.clsOverlay), document.body.scrollTop = qi.y, Oe(document.documentElement, "overflowY", ""), tn(this.content, ""), Qe(this.content, ""), window.scroll(qi.x, qi.y), qi = null
                    }
                }, {
                    name: "swipeLeft swipeRight",
                    handler: function(t) {
                        this.isToggled() && Dn(t) && ("swipeLeft" === t.type && !this.flip || "swipeRight" === t.type && this.flip) && this.hide()
                    }
                }]
            },
            Gi = {
                mixins: [Yn],
                props: {
                    selContainer: String,
                    selContent: String
                },
                data: {
                    selContainer: ".uk-modal",
                    selContent: ".uk-modal-dialog"
                },
                computed: {
                    container: function(t, e) {
                        return mt(e, t.selContainer)
                    },
                    content: function(t, e) {
                        return mt(e, t.selContent)
                    }
                },
                connected: function() {
                    Oe(this.$el, "minHeight", 150)
                },
                update: {
                    read: function() {
                        return !(!this.content || !this.container) && {
                            current: P(Oe(this.$el, "maxHeight")),
                            max: Math.max(150, Qe(this.container) - (Ge(this.content).height - Qe(this.$el)))
                        }
                    },
                    write: function(t) {
                        var e = t.current,
                            n = t.max;
                        Oe(this.$el, "maxHeight", n), Math.round(e) !== Math.round(n) && At(this.$el, "resize")
                    },
                    events: ["load", "resize"]
                }
            },
            Ji = {
                props: ["width", "height"],
                connected: function() {
                    xe(this.$el, "uk-responsive-width")
                },
                update: {
                    read: function() {
                        return !!(xt(this.$el) && this.width && this.height) && {
                            width: tn(this.$el.parentNode),
                            height: this.height
                        }
                    },
                    write: function(t) {
                        Qe(this.$el, J.contain({
                            height: this.height,
                            width: this.width
                        }, t).height)
                    },
                    events: ["load", "resize"]
                }
            },
            Zi = {
                props: {
                    duration: Number,
                    offset: Number
                },
                data: {
                    duration: 1e3,
                    offset: 0
                },
                methods: {
                    scrollTo: function(n) {
                        var i = this;
                        n = n && we(n) || document.body;
                        var t = Qe(document),
                            e = Qe(window),
                            r = Ge(n).top - this.offset;
                        if (t < r + e && (r = t - e), At(this.$el, "beforescroll", [this, n])) {
                            var o = Date.now(),
                                s = window.pageYOffset,
                                a = function() {
                                    var t, e = s + (r - s) * (t = U((Date.now() - o) / i.duration), .5 * (1 - Math.cos(Math.PI * t)));
                                    cn(window, e), e !== r ? requestAnimationFrame(a) : At(i.$el, "scrolled", [i, n])
                                };
                            a()
                        }
                    }
                },
                events: {
                    click: function(t) {
                        t.defaultPrevented || (t.preventDefault(), this.scrollTo(wt(decodeURIComponent(this.$el.hash)).substr(1)))
                    }
                }
            };
        var Qi = {
                args: "cls",
                props: {
                    cls: "list",
                    target: String,
                    hidden: Boolean,
                    offsetTop: Number,
                    offsetLeft: Number,
                    repeat: Boolean,
                    delay: Number
                },
                data: function() {
                    return {
                        cls: [],
                        target: !1,
                        hidden: !0,
                        offsetTop: 0,
                        offsetLeft: 0,
                        repeat: !1,
                        delay: 0,
                        inViewClass: "uk-scrollspy-inview"
                    }
                },
                computed: {
                    elements: function(t, e) {
                        var n = t.target;
                        return n ? be(n, e) : [e]
                    }
                },
                update: [{
                    write: function() {
                        this.hidden && Oe(It(this.elements, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                    }
                }, {
                    read: function(r) {
                        var o = this;
                        r.update && this.elements.forEach(function(t, e) {
                            var n = r[e];
                            if (!n || n.el !== t) {
                                var i = et(t, "uk-scrollspy-class");
                                n = {
                                    el: t,
                                    toggles: i && i.split(",") || o.cls
                                }
                            }
                            n.show = ln(t, o.offsetTop, o.offsetLeft), r[e] = n
                        })
                    },
                    write: function(o) {
                        var s = this;
                        if (!o.update) return this.$emit(), o.update = !0;
                        this.elements.forEach(function(t, e) {
                            var n = o[e],
                                i = n.toggles[e] || n.toggles[0];
                            if (!n.show || n.inview || n.queued) {
                                if (!n.show && (n.inview || n.queued) && s.repeat) {
                                    if (n.abort && n.abort(), !n.inview) return;
                                    Oe(t, "visibility", s.hidden ? "hidden" : ""), ke(t, s.inViewClass), Te(t, i), At(t, "outview"), s.$update(t), n.inview = !1
                                }
                            } else {
                                var r = function() {
                                    Oe(t, "visibility", ""), xe(t, s.inViewClass), Te(t, i), At(t, "inview"), s.$update(t), n.inview = !0, n.abort && n.abort()
                                };
                                s.delay ? (n.queued = !0, o.promise = (o.promise || zt.resolve()).then(function() {
                                    return !n.inview && new zt(function(t) {
                                        var e = setTimeout(function() {
                                            r(), t()
                                        }, o.promise || 1 === s.elements.length ? s.delay : 0);
                                        n.abort = function() {
                                            clearTimeout(e), t(), n.queued = !1
                                        }
                                    })
                                })) : r()
                            }
                        })
                    },
                    events: ["scroll", "load", "resize"]
                }]
            },
            tr = {
                props: {
                    cls: String,
                    closest: String,
                    scroll: Boolean,
                    overflow: Boolean,
                    offset: Number
                },
                data: {
                    cls: "uk-active",
                    closest: !1,
                    scroll: !1,
                    overflow: !0,
                    offset: 0
                },
                computed: {
                    links: function(t, e) {
                        return be('a[href^="#"]', e).filter(function(t) {
                            return t.hash
                        })
                    },
                    elements: function() {
                        return this.closest ? mt(this.links, this.closest) : this.links
                    },
                    targets: function() {
                        return be(this.links.map(function(t) {
                            return t.hash
                        }).join(","))
                    }
                },
                update: [{
                    read: function() {
                        this.scroll && this.$create("scroll", this.links, {
                            offset: this.offset || 0
                        })
                    }
                }, {
                    read: function(o) {
                        var s = this,
                            a = window.pageYOffset + this.offset + 1,
                            l = Qe(document) - Qe(window) + this.offset;
                        o.active = !1, this.targets.every(function(t, e) {
                            var n = Ge(t).top,
                                i = e + 1 === s.targets.length;
                            if (!s.overflow && (0 === e && a < n || i && n + t.offsetTop < a)) return !1;
                            if (!i && Ge(s.targets[e + 1]).top <= a) return !0;
                            if (l <= a)
                                for (var r = s.targets.length - 1; e < r; r--)
                                    if (ln(s.targets[r])) {
                                        t = s.targets[r];
                                        break
                                    }
                            return !(o.active = we(It(s.links, '[href="#' + t.id + '"]')))
                        })
                    },
                    write: function(t) {
                        var e = t.active;
                        this.links.forEach(function(t) {
                            return t.blur()
                        }), ke(this.elements, this.cls), e && At(this.$el, "active", [e, xe(this.closest ? mt(e, this.closest) : e, this.cls)])
                    },
                    events: ["scroll", "load", "resize"]
                }]
            },
            er = {
                mixins: [Yn, Hi],
                props: {
                    top: null,
                    bottom: Boolean,
                    offset: Number,
                    animation: String,
                    clsActive: String,
                    clsInactive: String,
                    clsFixed: String,
                    clsBelow: String,
                    selTarget: String,
                    widthElement: Boolean,
                    showOnUp: Boolean,
                    targetOffset: Number
                },
                data: {
                    top: 0,
                    bottom: !1,
                    offset: 0,
                    animation: "",
                    clsActive: "uk-active",
                    clsInactive: "",
                    clsFixed: "uk-sticky-fixed",
                    clsBelow: "uk-sticky-below",
                    selTarget: "",
                    widthElement: !1,
                    showOnUp: !1,
                    targetOffset: !1
                },
                computed: {
                    selTarget: function(t, e) {
                        var n = t.selTarget;
                        return n && we(n, e) || e
                    },
                    widthElement: function(t, e) {
                        return nt(t.widthElement, e) || this.placeholder
                    }
                },
                connected: function() {
                    this.placeholder = we("+ .uk-sticky-placeholder", this.$el) || we('<div class="uk-sticky-placeholder"></div>')
                },
                disconnected: function() {
                    this.isActive && (this.isActive = void 0, this.hide(), ke(this.selTarget, this.clsInactive)), ce(this.placeholder), this.placeholder = null, this.widthElement = null
                },
                events: [{
                    name: "active",
                    self: !0,
                    handler: function() {
                        Ie(this.selTarget, this.clsInactive, this.clsActive)
                    }
                }, {
                    name: "inactive",
                    self: !0,
                    handler: function() {
                        Ie(this.selTarget, this.clsActive, this.clsInactive)
                    }
                }, {
                    name: "load hashchange popstate",
                    el: window,
                    handler: function() {
                        var i = this;
                        if (!1 !== this.targetOffset && location.hash && 0 < window.pageYOffset) {
                            var r = we(location.hash);
                            r && pn.read(function() {
                                var t = Ge(r).top,
                                    e = Ge(i.$el).top,
                                    n = i.$el.offsetHeight;
                                i.isActive && t <= e + n && e <= t + r.offsetHeight && cn(window, t - n - (M(i.targetOffset) ? i.targetOffset : 0) - i.offset)
                            })
                        }
                    }
                }],
                update: [{
                    read: function(t, e) {
                        var n = t.height,
                            i = e.type;
                        n = this.isActive && "resize" !== i ? n : this.$el.offsetHeight, this.topOffset = Ge(this.isActive ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + n;
                        var r = nr("bottom", this);
                        return this.top = Math.max(P(nr("top", this)), this.topOffset) - this.offset, this.bottom = r && r - n, this.inactive = !this.matchMedia, {
                            height: n,
                            margins: Oe(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                        }
                    },
                    write: function(t) {
                        var e = t.height,
                            n = t.margins,
                            i = this.placeholder;
                        Oe(i, Y({
                            height: e
                        }, n)), St(i, document) || (le(this.$el, i), Z(i, "hidden", "")), B(this.isActive) && this.hide()
                    },
                    events: ["load", "resize"]
                }, {
                    read: function(t, e) {
                        var n = e.scrollY;
                        return void 0 === n && (n = window.pageYOffset), this.width = (xt(this.widthElement) ? this.widthElement : this.$el).offsetWidth, {
                            scroll: this.scroll = n,
                            visible: xt(this.$el)
                        }
                    },
                    write: function(t, e) {
                        var n = this,
                            i = t.visible,
                            r = t.scroll;
                        void 0 === e && (e = {});
                        var o = e.dir;
                        if (!(r < 0 || !i || this.disabled || this.showOnUp && !o))
                            if (this.inactive || r < this.top || this.showOnUp && (r <= this.top || "down" === o || "up" === o && !this.isActive && r <= this.bottomOffset)) {
                                if (!this.isActive) return;
                                this.isActive = !1, this.animation && r > this.topOffset ? (Ue.cancel(this.$el), Ue.out(this.$el, this.animation).then(function() {
                                    return n.hide()
                                }, X)) : this.hide()
                            } else this.isActive ? this.update() : this.animation ? (Ue.cancel(this.$el), this.show(), Ue.in(this.$el, this.animation).catch(X)) : this.show()
                    },
                    events: ["load", "resize", "scroll"]
                }],
                methods: {
                    show: function() {
                        this.isActive = !0, this.update(), Z(this.placeholder, "hidden", null)
                    },
                    hide: function() {
                        this.isActive && !Se(this.selTarget, this.clsActive) || At(this.$el, "inactive"), ke(this.$el, this.clsFixed, this.clsBelow), Oe(this.$el, {
                            position: "",
                            top: "",
                            width: ""
                        }), Z(this.placeholder, "hidden", "")
                    },
                    update: function() {
                        var t = 0 !== this.top || this.scroll > this.top,
                            e = Math.max(0, this.offset);
                        this.bottom && this.scroll > this.bottom - this.offset && (e = this.bottom - this.scroll), Oe(this.$el, {
                            position: "fixed",
                            top: e + "px",
                            width: this.width
                        }), Se(this.selTarget, this.clsActive) ? t || At(this.$el, "inactive") : t && At(this.$el, "active"), Te(this.$el, this.clsBelow, this.scroll > this.bottomOffset), xe(this.$el, this.clsFixed)
                    }
                }
            };

        function nr(t, e) {
            var n = e.$props,
                i = e.$el,
                r = e[t + "Offset"],
                o = n[t];
            if (o) {
                if (M(o)) return r + P(o);
                if (N(o) && o.match(/^-?\d+vh$/)) return Qe(window) * P(o) / 100;
                var s = !0 === o ? i.parentNode : nt(o, i);
                return s ? Ge(s).top + s.offsetHeight : void 0
            }
        }
        var ir, rr = {
                mixins: [Rn],
                args: "connect",
                props: {
                    connect: String,
                    toggle: String,
                    active: Number,
                    swiping: Boolean
                },
                data: {
                    connect: "~.uk-switcher",
                    toggle: "> *",
                    active: 0,
                    swiping: !0,
                    cls: "uk-active",
                    clsContainer: "uk-switcher",
                    attrItem: "uk-switcher-item",
                    queued: !0
                },
                computed: {
                    connects: function(t, e) {
                        return it(t.connect, e)
                    },
                    toggles: function(t, e) {
                        return be(t.toggle, e)
                    }
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.toggle + ":not(.uk-disabled)"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.show(t.current)
                    }
                }, {
                    name: "click",
                    el: function() {
                        return this.connects
                    },
                    delegate: function() {
                        return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.show(et(t.current, this.attrItem))
                    }
                }, {
                    name: "swipeRight swipeLeft",
                    filter: function() {
                        return this.swiping
                    },
                    el: function() {
                        return this.connects
                    },
                    handler: function(t) {
                        Dn(t) && (t.preventDefault(), window.getSelection().toString() || this.show("swipeLeft" === t.type ? "next" : "previous"))
                    }
                }],
                update: function() {
                    var e = this;
                    this.connects.forEach(function(t) {
                        return e.updateAria(t.children)
                    }), this.show(It(this.toggles, "." + this.cls)[0] || this.toggles[this.active] || this.toggles[0])
                },
                methods: {
                    index: function() {
                        return !!this.connects.length && ne(It(this.connects[0].children, "." + this.cls)[0])
                    },
                    show: function(t) {
                        for (var e, n = this, i = this.toggles.length, r = this.index(), o = 0 <= r, s = "previous" === t ? -1 : 1, a = ie(t, this.toggles, r), l = 0; l < i; l++, a = (a + s + i) % i)
                            if (!ft(n.toggles[a], ".uk-disabled, [disabled]")) {
                                e = n.toggles[a];
                                break
                            }!e || 0 <= r && Se(e, this.cls) || r === a || (ke(this.toggles, this.cls), Z(this.toggles, "aria-expanded", !1), xe(e, this.cls), Z(e, "aria-expanded", !0), this.connects.forEach(function(t) {
                            o ? n.toggleElement([t.children[r], t.children[a]]) : n.toggleNow(t.children[a])
                        }))
                    }
                }
            },
            or = {
                mixins: [Yn],
                extends: rr,
                props: {
                    media: Boolean
                },
                data: {
                    media: 960,
                    attrItem: "uk-tab-item"
                },
                connected: function() {
                    var t = Se(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Se(this.$el, "uk-tab-right") && "uk-tab-right";
                    t && this.$create("toggle", this.$el, {
                        cls: t,
                        mode: "media",
                        media: this.media
                    })
                }
            },
            sr = {
                mixins: [Hi, Rn],
                args: "target",
                props: {
                    href: String,
                    target: null,
                    mode: "list"
                },
                data: {
                    href: !1,
                    target: !1,
                    mode: "click",
                    queued: !0
                },
                computed: {
                    target: function(t, e) {
                        var n = t.href,
                            i = t.target;
                        return (i = it(i || n, e)).length && i || [e]
                    }
                },
                events: [{
                    name: Zt + " " + Qt,
                    filter: function() {
                        return b(this.mode, "hover")
                    },
                    handler: function(t) {
                        Dn(t) || this.toggle("toggle" + (t.type === Zt ? "show" : "hide"))
                    }
                }, {
                    name: "click",
                    filter: function() {
                        return b(this.mode, "click") || Xt && b(this.mode, "hover")
                    },
                    handler: function(t) {
                        var e;
                        (Dn(t) || b(this.mode, "click")) && ((mt(t.target, 'a[href="#"], button') || (e = mt(t.target, "a[href]")) && (this.cls || !xt(this.target) || e.hash && ft(this.target, e.hash))) && Ct(document, "click", function(t) {
                            return t.preventDefault()
                        }), this.toggle())
                    }
                }],
                update: {
                    write: function() {
                        if (b(this.mode, "media") && this.media) {
                            var t = this.isToggled(this.target);
                            (this.matchMedia ? !t : t) && this.toggle()
                        }
                    },
                    events: ["load", "resize"]
                },
                methods: {
                    toggle: function(t) {
                        At(this.target, t || "toggle", [this]) && this.toggleElement(this.target)
                    }
                }
            };
        Vn.version = "3.0.0-dev.dde90e8", (ir = Vn).component("accordion", qn), ir.component("alert", Un), ir.component("cover", Zn), ir.component("drop", ti), ir.component("dropdown", ei), ir.component("formCustom", ni), ir.component("gif", ii), ir.component("grid", ai), ir.component("heightMatch", hi), ir.component("heightViewport", di), ir.component("icon", yi), ir.component("img", Ti), ir.component("leader", Wi), ir.component("margin", ri), ir.component("modal", Ri), ir.component("nav", Ui), ir.component("navbar", Xi), ir.component("offcanvas", Ki), ir.component("overflowAuto", Gi), ir.component("responsive", Ji), ir.component("scroll", Zi), ir.component("scrollspy", Qi), ir.component("scrollspyNav", tr), ir.component("sticky", er), ir.component("svg", mi), ir.component("switcher", rr), ir.component("tab", or), ir.component("toggle", sr), ir.component("video", Jn), ir.component("close", Ii), ir.component("marker", xi), ir.component("navbarToggleIcon", xi), ir.component("overlayIcon", xi), ir.component("paginationNext", xi), ir.component("paginationPrevious", xi), ir.component("searchIcon", $i), ir.component("slidenavNext", ki), ir.component("slidenavPrevious", ki), ir.component("spinner", Si), ir.component("totop", xi), ir.use(Xn);
        var ar = {
            mixins: [Yn],
            props: {
                date: String,
                clsWrapper: String
            },
            data: {
                date: "",
                clsWrapper: ".uk-countdown-%unit%"
            },
            computed: {
                date: function(t) {
                    var e = t.date;
                    return Date.parse(e)
                },
                days: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "days"), e)
                },
                hours: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "hours"), e)
                },
                minutes: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "minutes"), e)
                },
                seconds: function(t, e) {
                    return we(t.clsWrapper.replace("%unit%", "seconds"), e)
                },
                units: function() {
                    var e = this;
                    return ["days", "hours", "minutes", "seconds"].filter(function(t) {
                        return e[t]
                    })
                }
            },
            connected: function() {
                this.start()
            },
            disconnected: function() {
                var e = this;
                this.stop(), this.units.forEach(function(t) {
                    return re(e[t])
                })
            },
            events: [{
                name: "visibilitychange",
                el: document,
                handler: function() {
                    document.hidden ? this.stop() : this.start()
                }
            }],
            update: {
                write: function() {
                    var t, e, i = this,
                        r = (t = this.date, {
                            total: e = t - Date.now(),
                            seconds: e / 1e3 % 60,
                            minutes: e / 1e3 / 60 % 60,
                            hours: e / 1e3 / 60 / 60 % 24,
                            days: e / 1e3 / 60 / 60 / 24
                        });
                    r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function(t) {
                        var e = String(Math.floor(r[t]));
                        e = e.length < 2 ? "0" + e : e;
                        var n = i[t];
                        n.textContent !== e && ((e = e.split("")).length !== n.children.length && oe(n, e.map(function() {
                            return "<span></span>"
                        }).join("")), e.forEach(function(t, e) {
                            return n.children[e].textContent = t
                        }))
                    })
                }
            },
            methods: {
                start: function() {
                    var t = this;
                    this.stop(), this.date && this.units.length && (this.$emit(), this.timer = setInterval(function() {
                        return t.$emit()
                    }, 1e3))
                },
                stop: function() {
                    this.timer && (clearInterval(this.timer), this.timer = null)
                }
            }
        };
        var lr, hr = "uk-animation-target",
            cr = {
                props: {
                    animation: Number
                },
                data: {
                    animation: 150
                },
                computed: {
                    target: function() {
                        return this.$el
                    }
                },
                methods: {
                    animate: function(t) {
                        var i = this;
                        lr || (lr = se(document.head, "<style>").sheet).insertRule("." + hr + " > * {\n                    margin-top: 0 !important;\n                    transform: none !important;\n                }", 0);
                        var r = j(this.target.children),
                            o = r.map(function(t) {
                                return ur(t, !0)
                            }),
                            e = Qe(this.target),
                            n = window.pageYOffset;
                        t(), Fe.cancel(this.target), r.forEach(Fe.cancel), dr(this.target), this.$update(this.target), pn.flush();
                        var s = Qe(this.target),
                            a = (r = r.concat(j(this.target.children).filter(function(t) {
                                return !b(r, t)
                            }))).map(function(t, e) {
                                return !!(t.parentNode && e in o) && (o[e] ? xt(t) ? fr(t) : {
                                    opacity: 0
                                } : {
                                    opacity: xt(t) ? 1 : 0
                                })
                            });
                        return o = a.map(function(t, e) {
                            var n = r[e].parentNode === i.target && (o[e] || ur(r[e]));
                            if (n)
                                if (t) {
                                    if (!("opacity" in t)) {
                                        n.opacity % 1 ? t.opacity = 1 : delete n.opacity
                                    }
                                } else delete n.opacity;
                            return n
                        }), xe(this.target, hr), r.forEach(function(t, e) {
                            return o[e] && Oe(t, o[e])
                        }), Oe(this.target, "height", e), cn(window, n), zt.all(r.map(function(t, e) {
                            return o[e] && a[e] ? Fe.start(t, a[e], i.animation, "ease") : zt.resolve()
                        }).concat(Fe.start(this.target, {
                            height: s
                        }, this.animation, "ease"))).then(function() {
                            r.forEach(function(t, e) {
                                return Oe(t, {
                                    display: 0 === a[e].opacity ? "none" : "",
                                    zIndex: ""
                                })
                            }), dr(i.target), i.$update(i.target), pn.flush()
                        }, X)
                    }
                }
            };

        function ur(t, e) {
            var n = Oe(t, "zIndex");
            return !!xt(t) && Y({
                display: "",
                opacity: e ? Oe(t, "opacity") : "0",
                pointerEvents: "none",
                position: "absolute",
                zIndex: "auto" === n ? ne(t) : n
            }, fr(t))
        }

        function dr(t) {
            Oe(t.children, {
                height: "",
                left: "",
                opacity: "",
                pointerEvents: "",
                position: "",
                top: "",
                width: ""
            }), ke(t, hr), Oe(t, "height", "")
        }

        function fr(t) {
            var e = t.getBoundingClientRect(),
                n = e.height,
                i = e.width,
                r = Ze(t),
                o = r.top,
                s = r.left;
            return {
                top: o += P(Oe(t, "marginTop")),
                left: s,
                height: n,
                width: i
            }
        }
        var pr = {
            mixins: [cr],
            args: "target",
            props: {
                target: Boolean,
                selActive: Boolean
            },
            data: {
                target: null,
                selActive: !1,
                attrItem: "uk-filter-control",
                cls: "uk-active",
                animation: 250
            },
            computed: {
                toggles: function(t, e) {
                    t.attrItem;
                    return be("[" + this.attrItem + "],[data-" + this.attrItem + "]", e)
                },
                target: function(t, e) {
                    return we(t.target, e)
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler: function(t) {
                    t.preventDefault(), this.apply(t.current)
                }
            }],
            connected: function() {
                var e = this;
                if (!1 !== this.selActive) {
                    var n = be(this.selActive, this.$el);
                    this.toggles.forEach(function(t) {
                        return Te(t, e.cls, b(n, t))
                    })
                }
            },
            update: function(t) {
                var e = t.toggles,
                    n = t.children;
                vr(e, this.toggles, !1) && vr(n, this.target.children, !1) || (t.toggles = this.toggles, t.children = this.target.children, this.setState(this.getState(), !1))
            },
            methods: {
                apply: function(t) {
                    this.setState(gr(t, this.attrItem, this.getState()))
                },
                getState: function() {
                    var n = this;
                    return this.toggles.filter(function(t) {
                        return Se(t, n.cls)
                    }).reduce(function(t, e) {
                        return gr(e, n.attrItem, t)
                    }, {
                        filter: {
                            "": ""
                        },
                        sort: []
                    })
                },
                setState: function(h, t) {
                    var c = this;
                    void 0 === t && (t = !0), h = Y({
                        filter: {
                            "": ""
                        },
                        sort: []
                    }, h), At(this.$el, "beforeFilter", [this, h]);
                    var u = j(this.target.children);
                    this.toggles.forEach(function(t) {
                        return Te(t, c.cls, function(t, e, n) {
                            var i = n.filter,
                                r = n.sort,
                                o = r[0],
                                s = r[1],
                                a = mr(t, e),
                                l = a.filter,
                                h = a.group;
                            void 0 === h && (h = "");
                            var c = a.sort,
                                u = a.order;
                            void 0 === u && (u = "asc");
                            return Boolean((l || B(c)) && h in i && (l === i[h] || B(l) && !i[h]) || o && c && o === c && s === u)
                        }(t, c.attrItem, h))
                    });
                    var e = function() {
                        var t, e, n = (t = h.filter, e = "", R(t, function(t) {
                            return e += t || ""
                        }), e);
                        u.forEach(function(t) {
                            return Oe(t, "display", n && !ft(t, n) ? "none" : "")
                        });
                        var i, r, o = h.sort,
                            s = o[0],
                            a = o[1];
                        if (s) {
                            var l = (i = s, r = a, j(u).sort(function(t, e) {
                                return et(t, i).localeCompare(et(e, i), void 0, {
                                    numeric: !0
                                }) * ("asc" === r || -1)
                            }));
                            vr(l, u) || l.forEach(function(t) {
                                return se(c.target, t)
                            })
                        }
                    };
                    t ? this.animate(e).then(function() {
                        return At(c.$el, "afterFilter", [c])
                    }) : (e(), At(this.$el, "afterFilter", [this]))
                }
            }
        };

        function mr(t, e) {
            return In(et(t, e), ["filter"])
        }

        function gr(t, s, a) {
            return j(t).forEach(function(t) {
                var e = mr(t, s),
                    n = e.filter,
                    i = e.group,
                    r = e.sort,
                    o = e.order;
                void 0 === o && (o = "asc"), (n || B(r)) && (i ? (delete a.filter[""], a.filter[i] = n) : a.filter = {
                    "": n
                }), B(r) || (a.sort = [r, o])
            }), a
        }

        function vr(t, n, i) {
            return void 0 === i && (i = !0), t = j(t), n = j(n), t.length === n.length && t.every(function(t, e) {
                return i ? t === n[e] : ~n.indexOf(t)
            })
        }
        var wr = {
            slide: {
                show: function(t) {
                    return [{
                        transform: yr(-100 * t)
                    }, {
                        transform: yr()
                    }]
                },
                percent: function(t) {
                    return br(t)
                },
                translate: function(t, e) {
                    return [{
                        transform: yr(-100 * e * t)
                    }, {
                        transform: yr(100 * e * (1 - t))
                    }]
                }
            }
        };

        function br(t) {
            return Math.abs(Oe(t, "transform").split(",")[4] / t.offsetWidth) || 0
        }

        function yr(t, e) {
            return void 0 === t && (t = 0), void 0 === e && (e = "%"), "translateX(" + t + (t ? e : "") + ")"
        }

        function xr(t) {
            return "scale3d(" + t + ", " + t + ", 1)"
        }
        var kr = Y({}, wr, {
            fade: {
                show: function() {
                    return [{
                        opacity: 0
                    }, {
                        opacity: 1
                    }]
                },
                percent: function(t) {
                    return 1 - Oe(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t
                    }, {
                        opacity: t
                    }]
                }
            },
            scale: {
                show: function() {
                    return [{
                        opacity: 0,
                        transform: xr(.8)
                    }, {
                        opacity: 1,
                        transform: xr(1)
                    }]
                },
                percent: function(t) {
                    return 1 - Oe(t, "opacity")
                },
                translate: function(t) {
                    return [{
                        opacity: 1 - t,
                        transform: xr(1 - .2 * t)
                    }, {
                        opacity: t,
                        transform: xr(.8 + .2 * t)
                    }]
                }
            }
        });

        function $r(t, e, n) {
            At(t, _t(e, !1, !1, n))
        }
        var Ir = {
            mixins: [{
                props: {
                    autoplay: Boolean,
                    autoplayInterval: Number,
                    pauseOnHover: Boolean
                },
                data: {
                    autoplay: !1,
                    autoplayInterval: 7e3,
                    pauseOnHover: !0
                },
                connected: function() {
                    this.startAutoplay()
                },
                disconnected: function() {
                    this.stopAutoplay()
                },
                events: [{
                    name: "visibilitychange",
                    el: document,
                    handler: function() {
                        document.hidden ? this.stopAutoplay() : this.startAutoplay()
                    }
                }, {
                    name: Kt,
                    handler: "stopAutoplay"
                }, {
                    name: "mouseenter",
                    filter: function() {
                        return this.autoplay
                    },
                    handler: function() {
                        this.isHovering = !0
                    }
                }, {
                    name: "mouseleave",
                    filter: function() {
                        return this.autoplay
                    },
                    handler: function() {
                        this.isHovering = !1
                    }
                }],
                methods: {
                    startAutoplay: function() {
                        var t = this;
                        this.stopAutoplay(), this.autoplay && (this.interval = setInterval(function() {
                            return !(t.isHovering && t.pauseOnHover) && !t.stack.length && t.show("next")
                        }, this.autoplayInterval))
                    },
                    stopAutoplay: function() {
                        this.interval && clearInterval(this.interval)
                    }
                }
            }, {
                data: {
                    threshold: 10,
                    preventCatch: !1
                },
                created: function() {
                    var i = this;
                    ["start", "move", "end"].forEach(function(t) {
                        var n = i[t];
                        i[t] = function(t) {
                            var e = zn(t).x * (Rt ? -1 : 1);
                            i.prevPos = e !== i.pos ? i.pos : i.prevPos, i.pos = e, n(t)
                        }
                    })
                },
                events: [{
                    name: Kt,
                    delegate: function() {
                        return this.slidesSelector
                    },
                    handler: function(t) {
                        var e;
                        !Dn(t) && (!(e = t.target).children.length && e.childNodes.length) || 0 < t.button || this.length < 2 || this.preventCatch || this.start(t)
                    }
                }, {
                    name: "touchmove",
                    passive: !1,
                    handler: "move",
                    delegate: function() {
                        return this.slidesSelector
                    }
                }, {
                    name: "dragstart",
                    handler: function(t) {
                        t.preventDefault()
                    }
                }],
                methods: {
                    start: function() {
                        var t = this;
                        this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index;
                        var e = Tt(document, Gt.replace(" touchmove", ""), this.move, {
                            passive: !1
                        });
                        this.unbindMove = function() {
                            e(), t.unbindMove = null
                        }, Tt(window, "scroll", this.unbindMove), Tt(document, Jt, this.end, !0)
                    },
                    move: function(t) {
                        var e = this;
                        if (this.unbindMove) {
                            var n = this.pos - this.drag;
                            if (!(0 === n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                                t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                                for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) e.drag -= a * e.dir, r = s, o -= a, s = e.getIndex(r + e.dir, r), a = e._getDistance(r, s) || i[r].offsetWidth;
                                this.percent = o / a;
                                var l, h = i[r],
                                    c = i[s],
                                    u = this.index !== s,
                                    d = r === s;
                                [this.index, this.prevIndex].filter(function(t) {
                                    return !b([s, r], t)
                                }).forEach(function(t) {
                                    At(i[t], "itemhidden", [e]), d && (l = !0, e.prevIndex = r)
                                }), (this.index === r && this.prevIndex !== r || l) && At(i[this.index], "itemshown", [this]), u && (this.prevIndex = r, this.index = s, !d && At(h, "beforeitemhide", [this]), At(c, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), h, !d && c), u && (!d && At(h, "itemhide", [this]), At(c, "itemshow", [this]))
                            }
                        }
                    },
                    end: function() {
                        if (Et(window, "scroll", this.unbindMove), this.unbindMove && this.unbindMove(), Et(document, Jt, this.end, !0), this.dragging) {
                            if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                            else {
                                var t = (Rt ? this.dir * (Rt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos;
                                this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0)
                            }
                            Dt()
                        }
                        this.drag = this.percent = null
                    }
                }
            }, {
                data: {
                    selNav: !1
                },
                computed: {
                    nav: function(t, e) {
                        return we(t.selNav, e)
                    },
                    navItemSelector: function(t) {
                        var e = t.attrItem;
                        return "[" + e + "],[data-" + e + "]"
                    },
                    navItems: function(t, e) {
                        return be(this.navItemSelector, e)
                    }
                },
                update: {
                    write: function() {
                        var n = this;
                        this.nav && this.length !== this.nav.children.length && oe(this.nav, this.slides.map(function(t, e) {
                            return "<li " + n.attrItem + '="' + e + '"><a href="#"></a></li>'
                        }).join("")), Te(be(this.navItemSelector, this.$el).concat(this.nav), "uk-hidden", !this.maxIndex), this.updateNav()
                    },
                    events: ["load", "resize"]
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.navItemSelector
                    },
                    handler: function(t) {
                        t.preventDefault(), t.current.blur(), this.show(et(t.current, this.attrItem))
                    }
                }, {
                    name: "itemshow",
                    handler: "updateNav"
                }],
                methods: {
                    updateNav: function() {
                        var n = this,
                            i = this.getValidIndex();
                        this.navItems.forEach(function(t) {
                            var e = et(t, n.attrItem);
                            Te(t, n.clsActive, z(e) === i), Te(t, "uk-invisible", n.finite && ("previous" === e && 0 === i || "next" === e && i >= n.maxIndex))
                        })
                    }
                }
            }],
            props: {
                clsActivated: Boolean,
                easing: String,
                index: Number,
                finite: Boolean,
                velocity: Number
            },
            data: function() {
                return {
                    easing: "ease",
                    finite: !1,
                    velocity: 1,
                    index: 0,
                    stack: [],
                    percent: 0,
                    clsActive: "uk-active",
                    clsActivated: !1,
                    Transitioner: !1,
                    transitionOptions: {}
                }
            },
            computed: {
                duration: function(t, e) {
                    var n = t.velocity;
                    return Sr(e.offsetWidth / n)
                },
                length: function() {
                    return this.slides.length
                },
                list: function(t, e) {
                    return we(t.selList, e)
                },
                maxIndex: function() {
                    return this.length - 1
                },
                slidesSelector: function(t) {
                    return t.selList + " > *"
                },
                slides: function() {
                    return j(this.list.children)
                }
            },
            events: {
                itemshown: function() {
                    this.$update(this.list)
                }
            },
            methods: {
                show: function(t, e) {
                    var n = this;
                    if (void 0 === e && (e = !1), !this.dragging && this.length) {
                        var i = this.stack,
                            r = e ? 0 : i.length,
                            o = function() {
                                i.splice(r, 1), i.length && n.show(i.shift(), !0)
                            };
                        if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                        else {
                            var s = this.index,
                                a = Se(this.slides, this.clsActive) && this.slides[s],
                                l = this.getIndex(t, this.index),
                                h = this.slides[l];
                            if (a !== h) {
                                var c, u;
                                if (this.dir = (u = s, "next" === (c = t) ? 1 : "previous" === c ? -1 : c < u ? -1 : 1), this.prevIndex = s, this.index = l, a && At(a, "beforeitemhide", [this]), !At(h, "beforeitemshow", [this, a])) return this.index = this.prevIndex, void o();
                                var d = this._show(a, h, e).then(function() {
                                    return a && At(a, "itemhidden", [n]), At(h, "itemshown", [n]), new zt(function(t) {
                                        pn.write(function() {
                                            i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t()
                                        })
                                    })
                                });
                                return a && At(a, "itemhide", [this]), At(h, "itemshow", [this]), d
                            }
                            o()
                        }
                    }
                },
                getIndex: function(t, e) {
                    return void 0 === t && (t = this.index), void 0 === e && (e = this.index), U(ie(t, this.slides, e, this.finite), 0, this.maxIndex)
                },
                getValidIndex: function(t, e) {
                    return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
                },
                _show: function(t, e, n) {
                    if (this._transitioner = this._getTransitioner(t, e, this.dir, Y({
                            easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
                        }, this.transitionOptions)), !n && !t) return this._transitioner.translate(1), zt.resolve();
                    var i = this.stack.length;
                    return this._transitioner[1 < i ? "forward" : "show"](1 < i ? Math.min(this.duration, 75 + 75 / (i - 1)) : this.duration, this.percent)
                },
                _getDistance: function(t, e) {
                    return new this._getTransitioner(t, t !== e && e).getDistance()
                },
                _translate: function(t, e, n) {
                    void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
                    var i = this._getTransitioner(e !== n && e, n);
                    return i.translate(t), i
                },
                _getTransitioner: function(t, e, n, i) {
                    return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(O(t) ? this.slides[t] : t, O(e) ? this.slides[e] : e, n * (Rt ? -1 : 1), i)
                }
            }
        };

        function Sr(t) {
            return .5 * t + 300
        }
        var Tr = {
                mixins: [Ir],
                props: {
                    animation: String
                },
                data: {
                    animation: "slide",
                    clsActivated: "uk-transition-active",
                    Animations: wr,
                    Transitioner: function(o, s, a, t) {
                        var e = t.animation,
                            l = t.easing,
                            n = e.percent,
                            i = e.translate,
                            r = e.show;
                        void 0 === r && (r = X);
                        var h = r(a),
                            c = new Pt;
                        return {
                            dir: a,
                            show: function(t, e, n) {
                                var i = this;
                                void 0 === e && (e = 0);
                                var r = n ? "linear" : l;
                                return t -= Math.round(t * U(e, -1, 1)), this.translate(e), $r(s, "itemin", {
                                    percent: e,
                                    duration: t,
                                    timing: r,
                                    dir: a
                                }), $r(o, "itemout", {
                                    percent: 1 - e,
                                    duration: t,
                                    timing: r,
                                    dir: a
                                }), zt.all([Fe.start(s, h[1], t, r), Fe.start(o, h[0], t, r)]).then(function() {
                                    i.reset(), c.resolve()
                                }, X), c.promise
                            },
                            stop: function() {
                                return Fe.stop([s, o])
                            },
                            cancel: function() {
                                Fe.cancel([s, o])
                            },
                            reset: function() {
                                for (var t in h[0]) Oe([s, o], t, "")
                            },
                            forward: function(t, e) {
                                return void 0 === e && (e = this.percent()), Fe.cancel([s, o]), this.show(t, e, !0)
                            },
                            translate: function(t) {
                                this.reset();
                                var e = i(t, a);
                                Oe(s, e[1]), Oe(o, e[0]), $r(s, "itemtranslatein", {
                                    percent: t,
                                    dir: a
                                }), $r(o, "itemtranslateout", {
                                    percent: 1 - t,
                                    dir: a
                                })
                            },
                            percent: function() {
                                return n(o || s, s, a)
                            },
                            getDistance: function() {
                                return o.offsetWidth
                            }
                        }
                    }
                },
                computed: {
                    animation: function(t) {
                        var e = t.animation,
                            n = t.Animations;
                        return Y(e in n ? n[e] : n.slide, {
                            name: e
                        })
                    },
                    transitionOptions: function() {
                        return {
                            animation: this.animation
                        }
                    }
                },
                events: {
                    "itemshow itemhide itemshown itemhidden": function(t) {
                        var e = t.target;
                        this.$update(e)
                    },
                    itemshow: function() {
                        O(this.prevIndex) && pn.flush()
                    },
                    beforeitemshow: function(t) {
                        xe(t.target, this.clsActive)
                    },
                    itemshown: function(t) {
                        xe(t.target, this.clsActivated)
                    },
                    itemhidden: function(t) {
                        ke(t.target, this.clsActive, this.clsActivated)
                    }
                }
            },
            Er = {
                mixins: [Fi, Vi, Rn, Tr],
                functional: !0,
                props: {
                    delayControls: Number,
                    preload: Number,
                    videoAutoplay: Boolean,
                    template: String
                },
                data: function() {
                    return {
                        preload: 1,
                        videoAutoplay: !1,
                        delayControls: 3e3,
                        items: [],
                        cls: "uk-open",
                        clsPage: "uk-lightbox-page",
                        selList: ".uk-lightbox-items",
                        attrItem: "uk-lightbox-item",
                        selClose: ".uk-close-large",
                        pauseOnHover: !1,
                        velocity: 2,
                        Animations: kr,
                        template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                    }
                },
                created: function() {
                    var t = this;
                    this.$mount(se(this.container, this.template)), this.caption = we(".uk-lightbox-caption", this.$el), this.items.forEach(function() {
                        return se(t.list, "<li></li>")
                    })
                },
                events: [{
                    name: Gt + " " + Kt + " keydown",
                    handler: "showControls"
                }, {
                    name: "click",
                    self: !0,
                    delegate: function() {
                        return this.slidesSelector
                    },
                    handler: function(t) {
                        t.preventDefault(), this.hide()
                    }
                }, {
                    name: "shown",
                    self: !0,
                    handler: function() {
                        this.startAutoplay(), this.showControls()
                    }
                }, {
                    name: "hide",
                    self: !0,
                    handler: function() {
                        this.stopAutoplay(), this.hideControls(), ke(this.slides, this.clsActive), Fe.stop(this.slides)
                    }
                }, {
                    name: "keyup",
                    el: document,
                    handler: function(t) {
                        if (this.isToggled(this.$el)) switch (t.keyCode) {
                            case 37:
                                this.show("previous");
                                break;
                            case 39:
                                this.show("next")
                        }
                    }
                }, {
                    name: "beforeitemshow",
                    handler: function(t) {
                        this.isToggled() || (this.preventCatch = !0, t.preventDefault(), this.toggleNow(this.$el, !0), this.animation = kr.scale, ke(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                    }
                }, {
                    name: "itemshow",
                    handler: function(t) {
                        var e = ne(t.target),
                            n = this.getItem(e).caption;
                        Oe(this.caption, "display", n ? "" : "none"), oe(this.caption, n);
                        for (var i = 0; i <= this.preload; i++) this.loadItem(this.getIndex(e + i)), this.loadItem(this.getIndex(e - i))
                    }
                }, {
                    name: "itemshown",
                    handler: function() {
                        this.preventCatch = !1
                    }
                }, {
                    name: "itemload",
                    handler: function(t, r) {
                        var o, s = this,
                            e = r.source,
                            n = r.type,
                            i = r.alt;
                        if (this.setItem(r, "<span uk-spinner></span>"), e)
                            if ("image" === n || e.match(/\.(jp(e)?g|png|gif|svg)($|\?)/i)) Vt(e).then(function(t) {
                                return s.setItem(r, '<img width="' + t.width + '" height="' + t.height + '" src="' + e + '" alt="' + (i || "") + '">')
                            }, function() {
                                return s.setError(r)
                            });
                            else if ("video" === n || e.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                            var a = we("<video controls playsinline" + (r.poster ? ' poster="' + r.poster + '"' : "") + ' uk-video="' + this.videoAutoplay + '"></video>');
                            Z(a, "src", e), Tt(a, "error", function() {
                                return s.setError(r)
                            }), Tt(a, "loadedmetadata", function() {
                                Z(a, {
                                    width: a.videoWidth,
                                    height: a.videoHeight
                                }), s.setItem(r, a)
                            })
                        } else if ("iframe" === n || e.match(/\.(html|php)($|\?)/i)) this.setItem(r, '<iframe class="uk-lightbox-iframe" src="' + e + '" frameborder="0" allowfullscreen></iframe>');
                        else if (o = e.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || e.match(/()youtu\.be\/(.*)/)) {
                            var l = o[2],
                                h = function(t, e) {
                                    return void 0 === t && (t = 640), void 0 === e && (e = 450), s.setItem(r, Cr("https://www.youtube" + (o[1] || "") + ".com/embed/" + l, t, e, s.videoAutoplay))
                                };
                            Vt("https://img.youtube.com/vi/" + l + "/maxresdefault.jpg").then(function(t) {
                                var e = t.width,
                                    n = t.height;
                                120 === e && 90 === n ? Vt("https://img.youtube.com/vi/" + l + "/0.jpg").then(function(t) {
                                    var e = t.width,
                                        n = t.height;
                                    return h(e, n)
                                }, h) : h(e, n)
                            }, h)
                        } else(o = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) && Ft("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(e), {
                            responseType: "json",
                            withCredentials: !1
                        }).then(function(t) {
                            var e = t.response,
                                n = e.height,
                                i = e.width;
                            return s.setItem(r, Cr("https://player.vimeo.com/video/" + o[2], i, n, s.videoAutoplay))
                        }, function() {
                            return s.setError(r)
                        })
                    }
                }],
                methods: {
                    loadItem: function(t) {
                        void 0 === t && (t = this.index);
                        var e = this.getItem(t);
                        e.content || At(this.$el, "itemload", [e])
                    },
                    getItem: function(t) {
                        return void 0 === t && (t = this.index), this.items[t] || {}
                    },
                    setItem: function(t, e) {
                        Y(t, {
                            content: e
                        });
                        var n = oe(this.slides[this.items.indexOf(t)], e);
                        At(this.$el, "itemloaded", [this, n]), this.$update(n)
                    },
                    setError: function(t) {
                        this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                    },
                    showControls: function() {
                        clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), xe(this.$el, "uk-active", "uk-transition-active")
                    },
                    hideControls: function() {
                        ke(this.$el, "uk-active", "uk-transition-active")
                    }
                }
            };

        function Cr(t, e, n, i) {
            return '<iframe src="' + t + '" width="' + e + '" height="' + n + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + i + '" uk-responsive></iframe>'
        }
        var Ar, _r = {
            install: function(t, e) {
                t.lightboxPanel || t.component("lightboxPanel", Er);
                Y(e.props, t.component("lightboxPanel").options.props)
            },
            props: {
                toggle: String
            },
            data: {
                toggle: "a"
            },
            computed: {
                toggles: function(t, e) {
                    return be(t.toggle, e)
                }
            },
            disconnected: function() {
                this._destroy()
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.toggle + ":not(.uk-disabled)"
                },
                handler: function(t) {
                    t.preventDefault(), t.current.blur(), this.show(ne(this.toggles, t.current))
                }
            }],
            update: function(t) {
                var e, n;
                (t.toggles = this.panel && t.toggles || this.toggles, this.panel && (e = t.toggles, n = this.toggles, e.length !== n.length || !e.every(function(t, e) {
                    return t === n[e]
                }))) && (t.toggles = this.toggles, this._destroy(), this._init())
            },
            methods: {
                _init: function() {
                    return this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, {
                        items: this.toggles.reduce(function(t, n) {
                            return t.push(["href", "caption", "type", "poster", "alt"].reduce(function(t, e) {
                                return t["href" === e ? "source" : e] = et(n, e), t
                            }, {})), t
                        }, [])
                    }))
                },
                _destroy: function() {
                    this.panel && (this.panel.$destroy(!0), this.panel = null)
                },
                show: function(t) {
                    return this.panel || this._init(), this.panel.show(t)
                },
                hide: function() {
                    return this.panel && this.panel.hide()
                }
            }
        };
        var Nr = {},
            Or = {
                functional: !0,
                args: ["message", "status"],
                data: {
                    message: "",
                    status: "",
                    timeout: 5e3,
                    group: null,
                    pos: "top-center",
                    clsClose: "uk-notification-close",
                    clsMsg: "uk-notification-message"
                },
                install: function(r) {
                    r.notification.closeAll = function(n, i) {
                        ve(document.body, function(t) {
                            var e = r.getComponent(t, "notification");
                            !e || n && n !== e.group || e.close(i)
                        })
                    }
                },
                created: function() {
                    Nr[this.pos] || (Nr[this.pos] = se(this.$container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>'));
                    var t = Oe(Nr[this.pos], "display", "block");
                    this.$mount(se(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href="#" class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
                },
                connected: function() {
                    var t = this,
                        e = P(Oe(this.$el, "marginBottom"));
                    Fe.start(Oe(this.$el, {
                        opacity: 0,
                        marginTop: -this.$el.offsetHeight,
                        marginBottom: 0
                    }), {
                        opacity: 1,
                        marginTop: 0,
                        marginBottom: e
                    }).then(function() {
                        t.timeout && (t.timer = setTimeout(t.close, t.timeout))
                    })
                },
                events: (Ar = {
                    click: function(t) {
                        mt(t.target, 'a[href="#"]') && t.preventDefault(), this.close()
                    }
                }, Ar[Zt] = function() {
                    this.timer && clearTimeout(this.timer)
                }, Ar[Qt] = function() {
                    this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                }, Ar),
                methods: {
                    close: function(t) {
                        var e = this,
                            n = function() {
                                At(e.$el, "close", [e]), ce(e.$el), Nr[e.pos].children.length || Oe(Nr[e.pos], "display", "none")
                            };
                        this.timer && clearTimeout(this.timer), t ? n() : Fe.start(this.$el, {
                            opacity: 0,
                            marginTop: -this.$el.offsetHeight,
                            marginBottom: 0
                        }).then(n)
                    }
                }
            };
        var Mr = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity"],
            Br = {
                mixins: [Hi],
                props: Mr.reduce(function(t, e) {
                    return t[e] = "list", t
                }, {}),
                data: Mr.reduce(function(t, e) {
                    return t[e] = void 0, t
                }, {}),
                computed: {
                    props: function(f, p) {
                        var m = this;
                        return Mr.reduce(function(t, e) {
                            if (B(f[e])) return t;
                            var n, i, r, o = e.match(/color/i),
                                s = o || "opacity" === e,
                                a = f[e].slice(0);
                            s && Oe(p, e, ""), a.length < 2 && a.unshift(("scale" === e ? 1 : s ? Oe(p, e) : 0) || 0);
                            var l = b(a.join(""), "%") ? "%" : "px";
                            if (o) {
                                var h = p.style.color;
                                a = a.map(function(t) {
                                    return Oe(Oe(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function(t) {
                                        return P(t)
                                    })
                                }), p.style.color = h
                            } else a = a.map(P);
                            if (e.match(/^bg/))
                                if (Oe(p, "background-position-" + e[2], ""), i = Oe(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], m.covers) {
                                    var c = Math.min.apply(Math, a),
                                        u = Math.max.apply(Math, a),
                                        d = a.indexOf(c) < a.indexOf(u);
                                    r = u - c, a = a.map(function(t) {
                                        return t - (d ? c : u)
                                    }), n = (d ? -r : 0) + "px"
                                } else n = i;
                            return t[e] = {
                                steps: a,
                                unit: l,
                                pos: n,
                                bgPos: i,
                                diff: r
                            }, t
                        }, {})
                    },
                    bgProps: function() {
                        var e = this;
                        return ["bgx", "bgy"].filter(function(t) {
                            return t in e.props
                        })
                    },
                    covers: function(t, e) {
                        return i = (n = e).style.backgroundSize, r = "cover" === Oe(Oe(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, r;
                        var n, i, r
                    }
                },
                disconnected: function() {
                    delete this._image
                },
                update: {
                    read: function(t) {
                        var l = this;
                        if (t.active = this.matchMedia, t.active) {
                            if (!t.image && this.covers && this.bgProps.length) {
                                var e = Oe(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                                if (e) {
                                    var n = new Image;
                                    n.src = e, (t.image = n).naturalWidth || (n.onload = function() {
                                        return l.$emit()
                                    })
                                }
                            }
                            var i = t.image;
                            if (i && i.naturalWidth) {
                                var h = {
                                        width: this.$el.offsetWidth,
                                        height: this.$el.offsetHeight
                                    },
                                    c = {
                                        width: i.naturalWidth,
                                        height: i.naturalHeight
                                    },
                                    u = J.cover(c, h);
                                this.bgProps.forEach(function(t) {
                                    var e = l.props[t],
                                        n = e.diff,
                                        i = e.bgPos,
                                        r = e.steps,
                                        o = "bgy" === t ? "height" : "width",
                                        s = u[o] - h[o];
                                    if (i.match(/%$|0px/)) {
                                        if (s < n) h[o] = u[o] + n - s;
                                        else if (n < s) {
                                            var a = parseFloat(i);
                                            a && (l.props[t].steps = r.map(function(t) {
                                                return t - (s - n) / (100 / a)
                                            }))
                                        }
                                        u = J.cover(c, h)
                                    }
                                }), t.dim = u
                            }
                        }
                    },
                    write: function(t) {
                        var e = t.dim;
                        t.active ? e && Oe(this.$el, {
                            backgroundSize: e.width + "px " + e.height + "px",
                            backgroundRepeat: "no-repeat"
                        }) : Oe(this.$el, {
                            backgroundSize: "",
                            backgroundRepeat: ""
                        })
                    },
                    events: ["load", "resize"]
                },
                methods: {
                    reset: function() {
                        var n = this;
                        R(this.getCss(0), function(t, e) {
                            return Oe(n.$el, e, "")
                        })
                    },
                    getCss: function(p) {
                        var m = this.props,
                            g = !1;
                        return Object.keys(m).reduce(function(t, e) {
                            var n = m[e],
                                i = n.steps,
                                r = n.unit,
                                o = n.pos,
                                s = zr(i, p);
                            switch (e) {
                                case "x":
                                case "y":
                                    if (g) break;
                                    var a = ["x", "y"].map(function(t) {
                                            return e === t ? P(s).toFixed(0) + r : m[t] ? zr(m[t].steps, p, 0) + m[t].unit : 0
                                        }),
                                        l = a[0],
                                        h = a[1];
                                    g = t.transform += " translate3d(" + l + ", " + h + ", 0)";
                                    break;
                                case "rotate":
                                    t.transform += " rotate(" + s + "deg)";
                                    break;
                                case "scale":
                                    t.transform += " scale(" + s + ")";
                                    break;
                                case "bgy":
                                case "bgx":
                                    t["background-position-" + e[2]] = "calc(" + o + " + " + (s + r) + ")";
                                    break;
                                case "color":
                                case "backgroundColor":
                                case "borderColor":
                                    var c = Dr(i, p),
                                        u = c[0],
                                        d = c[1],
                                        f = c[2];
                                    t[e] = "rgba(" + u.map(function(t, e) {
                                        return t += f * (d[e] - t), 3 === e ? P(t) : parseInt(t, 10)
                                    }).join(",") + ")";
                                    break;
                                case "blur":
                                    t.filter += " blur(" + s + "px)";
                                    break;
                                case "hue":
                                    t.filter += " hue-rotate(" + s + "deg)";
                                    break;
                                case "fopacity":
                                    t.filter += " opacity(" + s + "%)";
                                    break;
                                case "grayscale":
                                case "invert":
                                case "saturate":
                                case "sepia":
                                    t.filter += " " + e + "(" + s + "%)";
                                    break;
                                default:
                                    t[e] = s
                            }
                            return t
                        }, {
                            transform: "",
                            filter: ""
                        })
                    }
                }
            };

        function Dr(t, e) {
            var n = t.length - 1,
                i = Math.min(Math.floor(n * e), n - 1),
                r = t.slice(i, i + 2);
            return r.push(1 === e ? 1 : e % (1 / n) * n), r
        }

        function zr(t, e, n) {
            void 0 === n && (n = 2);
            var i = Dr(t, e),
                r = i[0],
                o = i[1],
                s = i[2];
            return (O(r) ? r + Math.abs(r - o) * s * (r < o ? 1 : -1) : +o).toFixed(n)
        }
        var Pr = {
            mixins: [Br],
            props: {
                target: String,
                viewport: Number,
                easing: Number
            },
            data: {
                target: !1,
                viewport: 1,
                easing: 1
            },
            computed: {
                target: function(t, e) {
                    var n = t.target;
                    return n && nt(n, e) || e
                }
            },
            update: {
                read: function(t, e) {
                    var n = t.percent,
                        i = t.active;
                    if ("scroll" !== e.type && (n = !1), i) {
                        var r, o, s = n;
                        return r = hn(this.target) / (this.viewport || 1), o = this.easing, {
                            percent: n = U(r * (1 - (o - o * r))),
                            style: s !== n && this.getCss(n)
                        }
                    }
                },
                write: function(t) {
                    var e = t.style;
                    t.active ? e && Oe(this.$el, e) : this.reset()
                },
                events: ["scroll", "load", "resize"]
            }
        };
        var Hr = {
            update: {
                write: function() {
                    if (!this.stack.length && !this.dragging) {
                        var t = this.getValidIndex();
                        delete this.index, ke(this.slides, this.clsActive, this.clsActivated), this.show(t)
                    }
                },
                events: ["load", "resize"]
            }
        };

        function Lr(t, e, n) {
            var i, r = Fr(t, e);
            return n ? r - (i = t, Vr(e).width / 2 - Vr(i).width / 2) : Math.min(r, jr(e))
        }

        function jr(t) {
            return Math.max(0, Wr(t) - Vr(t).width)
        }

        function Wr(t) {
            return Rr(t).reduce(function(t, e) {
                return Vr(e).width + t
            }, 0)
        }

        function Fr(t, e) {
            return (Ze(t).left + (Rt ? Vr(t).width - Vr(e).width : 0)) * (Rt ? -1 : 1)
        }

        function Vr(t) {
            return t.getBoundingClientRect()
        }

        function Yr(t, e, n) {
            At(t, _t(e, !1, !1, n))
        }

        function Rr(t) {
            return j(t.children)
        }
        var qr = {
                mixins: [Yn, Ir, Hr],
                props: {
                    center: Boolean,
                    sets: Boolean
                },
                data: {
                    center: !1,
                    sets: !1,
                    attrItem: "uk-slider-item",
                    selList: ".uk-slider-items",
                    selNav: ".uk-slider-nav",
                    clsContainer: "uk-slider-container",
                    Transitioner: function(r, i, o, t) {
                        var e = t.center,
                            s = t.easing,
                            a = t.list,
                            l = new Pt,
                            n = r ? Lr(r, a, e) : Lr(i, a, e) + Vr(i).width * o,
                            h = i ? Lr(i, a, e) : n + Vr(r).width * o * (Rt ? -1 : 1);
                        return {
                            dir: o,
                            show: function(t, e, n) {
                                void 0 === e && (e = 0);
                                var i = n ? "linear" : s;
                                return t -= Math.round(t * U(e, -1, 1)), this.translate(e), r && this.updateTranslates(), e = r ? e : U(e, 0, 1), Yr(this.getItemIn(), "itemin", {
                                    percent: e,
                                    duration: t,
                                    timing: i,
                                    dir: o
                                }), r && Yr(this.getItemIn(!0), "itemout", {
                                    percent: 1 - e,
                                    duration: t,
                                    timing: i,
                                    dir: o
                                }), Fe.start(a, {
                                    transform: yr(-h * (Rt ? -1 : 1), "px")
                                }, t, i).then(l.resolve, X), l.promise
                            },
                            stop: function() {
                                return Fe.stop(a)
                            },
                            cancel: function() {
                                Fe.cancel(a)
                            },
                            reset: function() {
                                Oe(a, "transform", "")
                            },
                            forward: function(t, e) {
                                return void 0 === e && (e = this.percent()), Fe.cancel(a), this.show(t, e, !0)
                            },
                            translate: function(t) {
                                var e = this.getDistance() * o * (Rt ? -1 : 1);
                                Oe(a, "transform", yr(U(e - e * t - h, -Wr(a), Vr(a).width) * (Rt ? -1 : 1), "px")), this.updateTranslates(), r && (t = U(t, -1, 1), Yr(this.getItemIn(), "itemtranslatein", {
                                    percent: t,
                                    dir: o
                                }), Yr(this.getItemIn(!0), "itemtranslateout", {
                                    percent: 1 - t,
                                    dir: o
                                }))
                            },
                            percent: function() {
                                return Math.abs((Oe(a, "transform").split(",")[4] * (Rt ? -1 : 1) + n) / (h - n))
                            },
                            getDistance: function() {
                                return Math.abs(h - n)
                            },
                            getItemIn: function(t) {
                                void 0 === t && (t = !1);
                                var e = this.getActives(),
                                    n = q(Rr(a), "offsetLeft"),
                                    i = ne(n, e[0 < o * (t ? -1 : 1) ? e.length - 1 : 0]);
                                return ~i && n[i + (r && !t ? o : 0)]
                            },
                            getActives: function() {
                                var n = Lr(r || i, a, e);
                                return q(Rr(a).filter(function(t) {
                                    var e = Fr(t, a);
                                    return n <= e && e + Vr(t).width <= Vr(a).width + n
                                }), "offsetLeft")
                            },
                            updateTranslates: function() {
                                var n = this.getActives();
                                Rr(a).forEach(function(t) {
                                    var e = b(n, t);
                                    Yr(t, "itemtranslate" + (e ? "in" : "out"), {
                                        percent: e ? 1 : 0,
                                        dir: t.offsetLeft <= i.offsetLeft ? 1 : -1
                                    })
                                })
                            }
                        }
                    }
                },
                computed: {
                    avgWidth: function() {
                        return Wr(this.list) / this.length
                    },
                    finite: function(t) {
                        return t.finite || Wr(this.list) < Vr(this.list).width + Rr(this.list).reduce(function(t, e) {
                            return Math.max(t, Vr(e).width)
                        }, 0) + this.center
                    },
                    maxIndex: function() {
                        if (!this.finite || this.center && !this.sets) return this.length - 1;
                        if (this.center) return this.sets[this.sets.length - 1];
                        Oe(this.slides, "order", "");
                        for (var t = jr(this.list), e = this.length; e--;)
                            if (Fr(this.list.children[e], this.list) < t) return Math.min(e + 1, this.length - 1);
                        return 0
                    },
                    sets: function(t) {
                        var o = this,
                            e = t.sets,
                            s = Vr(this.list).width / (this.center ? 2 : 1),
                            a = 0,
                            l = s,
                            h = 0;
                        return (e = e && this.slides.reduce(function(t, e, n) {
                            var i = Vr(e).width;
                            if (a < h + i && (!o.center && n > o.maxIndex && (n = o.maxIndex), !b(t, n))) {
                                var r = o.slides[n + 1];
                                o.center && r && i < l - Vr(r).width / 2 ? l -= i : (l = s, t.push(n), a = h + s + (o.center ? i / 2 : 0))
                            }
                            return h += i, t
                        }, [])) && e.length && e
                    },
                    transitionOptions: function() {
                        return {
                            center: this.center,
                            list: this.list
                        }
                    }
                },
                connected: function() {
                    Te(this.$el, this.clsContainer, !we("." + this.clsContainer, this.$el))
                },
                update: {
                    write: function() {
                        var n = this;
                        be("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function(t) {
                            var e = et(t, n.attrItem);
                            n.maxIndex && Te(t, "uk-hidden", M(e) && (n.sets && !b(n.sets, P(e)) || e > n.maxIndex))
                        })
                    },
                    events: ["load", "resize"]
                },
                events: {
                    beforeitemshow: function(t) {
                        !this.dragging && this.sets && this.stack.length < 2 && !b(this.sets, this.index) && (this.index = this.getValidIndex());
                        var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                        if (!this.dragging && 1 < e) {
                            for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                            t.preventDefault()
                        } else this.duration = Sr(this.avgWidth / this.velocity) * (Vr(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth), this.reorder()
                    },
                    itemshow: function() {
                        !B(this.prevIndex) && xe(this._getTransitioner().getItemIn(), this.clsActive)
                    },
                    itemshown: function() {
                        var e = this,
                            n = this._getTransitioner(this.index).getActives();
                        this.slides.forEach(function(t) {
                            return Te(t, e.clsActive, b(n, t))
                        }), (!this.sets || b(this.sets, P(this.index))) && this.slides.forEach(function(t) {
                            return Te(t, e.clsActivated, b(n, t))
                        })
                    }
                },
                methods: {
                    reorder: function() {
                        var n = this;
                        if (Oe(this.slides, "order", ""), !this.finite) {
                            var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                            if (this.slides.forEach(function(t, e) {
                                    return Oe(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "")
                                }), this.center)
                                for (var t = this.slides[i], e = Vr(this.list).width / 2 - Vr(t).width / 2, r = 0; 0 < e;) {
                                    var o = n.getIndex(--r + i, i),
                                        s = n.slides[o];
                                    Oe(s, "order", i < o ? -2 : -1), e -= Vr(s).width
                                }
                        }
                    },
                    getValidIndex: function(t, e) {
                        var n;
                        if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                        do {
                            if (b(this.sets, t)) return t;
                            n = t, t = this.getIndex(t + this.dir, e)
                        } while (t !== n);
                        return t
                    }
                }
            },
            Ur = {
                mixins: [Br],
                data: {
                    selItem: "!li"
                },
                computed: {
                    item: function(t, e) {
                        return nt(t.selItem, e)
                    }
                },
                events: [{
                    name: "itemshown",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function() {
                        Oe(this.$el, this.getCss(.5))
                    }
                }, {
                    name: "itemin itemout",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function(t) {
                        var e = t.type,
                            n = t.detail,
                            i = n.percent,
                            r = n.duration,
                            o = n.timing,
                            s = n.dir;
                        Fe.cancel(this.$el), Oe(this.$el, this.getCss(Kr(e, s, i))), Fe.start(this.$el, this.getCss(Xr(e) ? .5 : 0 < s ? 1 : 0), r, o).catch(X)
                    }
                }, {
                    name: "transitioncanceled transitionend",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function() {
                        Fe.cancel(this.$el)
                    }
                }, {
                    name: "itemtranslatein itemtranslateout",
                    self: !0,
                    el: function() {
                        return this.item
                    },
                    handler: function(t) {
                        var e = t.type,
                            n = t.detail,
                            i = n.percent,
                            r = n.dir;
                        Fe.cancel(this.$el), Oe(this.$el, this.getCss(Kr(e, r, i)))
                    }
                }]
            };

        function Xr(t) {
            return u(t, "in")
        }

        function Kr(t, e, n) {
            return n /= 2, Xr(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n
        }
        var Gr, Jr, Zr = Y({}, wr, {
                fade: {
                    show: function() {
                        return [{
                            opacity: 0,
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    },
                    percent: function(t) {
                        return 1 - Oe(t, "opacity")
                    },
                    translate: function(t) {
                        return [{
                            opacity: 1 - t,
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    }
                },
                scale: {
                    show: function() {
                        return [{
                            opacity: 0,
                            transform: xr(1.5),
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    },
                    percent: function(t) {
                        return 1 - Oe(t, "opacity")
                    },
                    translate: function(t) {
                        return [{
                            opacity: 1 - t,
                            transform: xr(1 + .5 * t),
                            zIndex: 0
                        }, {
                            zIndex: -1
                        }]
                    }
                },
                pull: {
                    show: function(t) {
                        return t < 0 ? [{
                            transform: yr(30),
                            zIndex: -1
                        }, {
                            transform: yr(),
                            zIndex: 0
                        }] : [{
                            transform: yr(-100),
                            zIndex: 0
                        }, {
                            transform: yr(),
                            zIndex: -1
                        }]
                    },
                    percent: function(t, e, n) {
                        return n < 0 ? 1 - br(e) : br(t)
                    },
                    translate: function(t, e) {
                        return e < 0 ? [{
                            transform: yr(30 * t),
                            zIndex: -1
                        }, {
                            transform: yr(-100 * (1 - t)),
                            zIndex: 0
                        }] : [{
                            transform: yr(100 * -t),
                            zIndex: 0
                        }, {
                            transform: yr(30 * (1 - t)),
                            zIndex: -1
                        }]
                    }
                },
                push: {
                    show: function(t) {
                        return t < 0 ? [{
                            transform: yr(100),
                            zIndex: 0
                        }, {
                            transform: yr(),
                            zIndex: -1
                        }] : [{
                            transform: yr(-30),
                            zIndex: -1
                        }, {
                            transform: yr(),
                            zIndex: 0
                        }]
                    },
                    percent: function(t, e, n) {
                        return 0 < n ? 1 - br(e) : br(t)
                    },
                    translate: function(t, e) {
                        return e < 0 ? [{
                            transform: yr(100 * t),
                            zIndex: 0
                        }, {
                            transform: yr(-30 * (1 - t)),
                            zIndex: -1
                        }] : [{
                            transform: yr(-30 * t),
                            zIndex: -1
                        }, {
                            transform: yr(100 * (1 - t)),
                            zIndex: 0
                        }]
                    }
                }
            }),
            Qr = {
                mixins: [Yn, Tr, Hr],
                props: {
                    ratio: String,
                    minHeight: Boolean,
                    maxHeight: Boolean
                },
                data: {
                    ratio: "16:9",
                    minHeight: !1,
                    maxHeight: !1,
                    selList: ".uk-slideshow-items",
                    attrItem: "uk-slideshow-item",
                    selNav: ".uk-slideshow-nav",
                    Animations: Zr
                },
                update: {
                    read: function() {
                        var t = this.ratio.split(":").map(Number),
                            e = t[0],
                            n = t[1];
                        return n = n * this.list.offsetWidth / e, this.minHeight && (n = Math.max(this.minHeight, n)), this.maxHeight && (n = Math.min(this.maxHeight, n)), {
                            height: n - nn(this.list, "content-box")
                        }
                    },
                    write: function(t) {
                        var e = t.height;
                        Oe(this.list, "minHeight", e)
                    },
                    events: ["load", "resize"]
                }
            },
            to = {
                mixins: [Yn, cr],
                props: {
                    group: String,
                    threshold: Number,
                    clsItem: String,
                    clsPlaceholder: String,
                    clsDrag: String,
                    clsDragState: String,
                    clsBase: String,
                    clsNoDrag: String,
                    clsEmpty: String,
                    clsCustom: String,
                    handle: String
                },
                data: {
                    group: !1,
                    threshold: 5,
                    clsItem: "uk-sortable-item",
                    clsPlaceholder: "uk-sortable-placeholder",
                    clsDrag: "uk-sortable-drag",
                    clsDragState: "uk-drag",
                    clsBase: "uk-sortable",
                    clsNoDrag: "uk-sortable-nodrag",
                    clsEmpty: "uk-sortable-empty",
                    clsCustom: "",
                    handle: !1
                },
                created: function() {
                    var o = this;
                    ["init", "start", "move", "end"].forEach(function(t) {
                        var r = o[t];
                        o[t] = function(t) {
                            o.scrollY = window.pageYOffset;
                            var e = zn(t),
                                n = e.x,
                                i = e.y;
                            o.pos = {
                                x: n,
                                y: i
                            }, r(t)
                        }
                    })
                },
                events: (Gr = {}, Gr[Kt] = "init", Gr),
                update: {
                    write: function() {
                        if (this.clsEmpty && Te(this.$el, this.clsEmpty, !this.$el.children.length), Oe(this.handle ? be(this.handle, this.$el) : this.$el.children, "touchAction", "none"), this.drag) {
                            Ge(this.drag, {
                                top: this.pos.y + this.origin.top,
                                left: this.pos.x + this.origin.left
                            });
                            var t, e = Ge(this.drag),
                                n = e.top,
                                i = n + e.height;
                            0 < n && n < this.scrollY ? t = this.scrollY - 5 : i < Qe(document) && i > Qe(window) + this.scrollY && (t = this.scrollY + 5), t && setTimeout(function() {
                                return cn(window, t)
                            }, 5)
                        }
                    }
                },
                methods: {
                    init: function(t) {
                        var e = t.target,
                            n = t.button,
                            i = t.defaultPrevented,
                            r = j(this.$el.children).filter(function(t) {
                                return St(e, t)
                            })[0];
                        !r || $t(t.target) || this.handle && !St(e, this.handle) || 0 < n || St(e, "." + this.clsNoDrag) || i || (t.preventDefault(), this.touched = [this], this.placeholder = r, this.origin = Y({
                            target: e,
                            index: ne(r)
                        }, this.pos), Tt(document, Gt, this.move), Tt(document, Jt, this.end), Tt(window, "scroll", this.scroll), this.threshold || this.start(t))
                    },
                    start: function(t) {
                        this.drag = se(this.$container, this.placeholder.outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")), Oe(this.drag, Y({
                            boxSizing: "border-box",
                            width: this.placeholder.offsetWidth,
                            height: this.placeholder.offsetHeight
                        }, Oe(this.placeholder, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), Z(this.drag, "uk-no-boot", ""), xe(this.drag, this.clsDrag, this.clsCustom), Qe(this.drag.firstElementChild, Qe(this.placeholder.firstElementChild));
                        var e = Ge(this.placeholder),
                            n = e.left,
                            i = e.top;
                        Y(this.origin, {
                            left: n - this.pos.x,
                            top: i - this.pos.y
                        }), xe(this.placeholder, this.clsPlaceholder), xe(this.$el.children, this.clsItem), xe(document.documentElement, this.clsDragState), At(this.$el, "start", [this, this.placeholder]), this.move(t)
                    },
                    move: function(t) {
                        if (this.drag) {
                            this.$emit();
                            var e = "mousemove" === t.type ? t.target : document.elementFromPoint(this.pos.x - window.pageXOffset, this.pos.y - window.pageYOffset),
                                n = this.getSortable(e),
                                i = this.getSortable(this.placeholder),
                                r = n !== i;
                            if (n && !St(e, this.placeholder) && (!r || n.group && n.group === i.group)) {
                                if (e = n.$el === e.parentNode && e || j(n.$el.children).filter(function(t) {
                                        return St(e, t)
                                    })[0], r) i.remove(this.placeholder);
                                else if (!e) return;
                                n.insert(this.placeholder, e), b(this.touched, n) || this.touched.push(n)
                            }
                        } else(Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                    },
                    end: function(t) {
                        if (Et(document, Gt, this.move), Et(document, Jt, this.end), Et(window, "scroll", this.scroll), this.drag) {
                            Dt();
                            var e = this.getSortable(this.placeholder);
                            this === e ? this.origin.index !== ne(this.placeholder) && At(this.$el, "moved", [this, this.placeholder]) : (At(e.$el, "added", [e, this.placeholder]), At(this.$el, "removed", [this, this.placeholder])), At(this.$el, "stop", [this, this.placeholder]), ce(this.drag), this.drag = null;
                            var n = this.touched.map(function(t) {
                                return t.clsPlaceholder + " " + t.clsItem
                            }).join(" ");
                            this.touched.forEach(function(t) {
                                return ke(t.$el.children, n)
                            }), ke(document.documentElement, this.clsDragState)
                        } else "mouseup" !== t.type && St(t.target, "a[href]") && (location.href = mt(t.target, "a[href]").href)
                    },
                    scroll: function() {
                        var t = window.pageYOffset;
                        t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit())
                    },
                    insert: function(n, i) {
                        var r = this;
                        xe(this.$el.children, this.clsItem);
                        var t = function() {
                            var t, e;
                            i ? !St(n, r.$el) || (e = i, (t = n).parentNode === e.parentNode && ne(t) > ne(e)) ? ae(i, n) : le(i, n) : se(r.$el, n)
                        };
                        this.animation ? this.animate(t) : t()
                    },
                    remove: function(t) {
                        St(t, this.$el) && (this.animation ? this.animate(function() {
                            return ce(t)
                        }) : ce(t))
                    },
                    getSortable: function(t) {
                        return t && (this.$getComponent(t, "sortable") || this.getSortable(t.parentNode))
                    }
                }
            };
        var eo = [],
            no = {
                mixins: [Fi, Rn, Qn],
                args: "title",
                props: {
                    delay: Number,
                    title: String
                },
                data: {
                    pos: "top",
                    title: "",
                    delay: 0,
                    animation: ["uk-animation-scale-up"],
                    duration: 100,
                    cls: "uk-active",
                    clsPos: "uk-tooltip"
                },
                beforeConnect: function() {
                    this._hasTitle = Q(this.$el, "title"), Z(this.$el, {
                        title: "",
                        "aria-expanded": !1
                    })
                },
                disconnected: function() {
                    this.hide(), Z(this.$el, {
                        title: this._hasTitle ? this.title : null,
                        "aria-expanded": null
                    })
                },
                methods: {
                    show: function() {
                        var e = this;
                        b(eo, this) || (eo.forEach(function(t) {
                            return t.hide()
                        }), eo.push(this), this._unbind = Tt(document, "click", function(t) {
                            return !St(t.target, e.$el) && e.hide()
                        }), clearTimeout(this.showTimer), this.showTimer = setTimeout(function() {
                            e._show(), e.hideTimer = setInterval(function() {
                                xt(e.$el) || e.hide()
                            }, 150)
                        }, this.delay))
                    },
                    hide: function() {
                        var t = eo.indexOf(this);
                        !~t || ft(this.$el, "input") && this.$el === document.activeElement || (eo.splice(t, 1), clearTimeout(this.showTimer), clearInterval(this.hideTimer), Z(this.$el, "aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && ce(this.tooltip), this.tooltip = !1, this._unbind())
                    },
                    _show: function() {
                        this.tooltip = se(this.container, '<div class="' + this.clsPos + '" aria-expanded="true" aria-hidden> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? an(this.dir) + "-" + this.align : this.align + "-" + an(this.dir), this.toggleElement(this.tooltip, !0)
                    }
                },
                events: (Jr = {}, Jr["focus " + Zt + " " + Kt] = function(t) {
                    t.type === Kt && Dn(t) || this.show()
                }, Jr.blur = "hide", Jr[Qt] = function(t) {
                    Dn(t) || this.hide()
                }, Jr)
            },
            io = {
                props: {
                    allow: String,
                    clsDragover: String,
                    concurrent: Number,
                    maxSize: Number,
                    method: String,
                    mime: String,
                    msgInvalidMime: String,
                    msgInvalidName: String,
                    msgInvalidSize: String,
                    multiple: Boolean,
                    name: String,
                    params: Object,
                    type: String,
                    url: String
                },
                data: {
                    allow: !1,
                    clsDragover: "uk-dragover",
                    concurrent: 1,
                    maxSize: 0,
                    method: "POST",
                    mime: !1,
                    msgInvalidMime: "Invalid File Type: %s",
                    msgInvalidName: "Invalid File Name: %s",
                    msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                    multiple: !1,
                    name: "files[]",
                    params: {},
                    type: "",
                    url: "",
                    abort: X,
                    beforeAll: X,
                    beforeSend: X,
                    complete: X,
                    completeAll: X,
                    error: X,
                    fail: X,
                    load: X,
                    loadEnd: X,
                    loadStart: X,
                    progress: X
                },
                events: {
                    change: function(t) {
                        ft(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                    },
                    drop: function(t) {
                        oo(t);
                        var e = t.dataTransfer;
                        e && e.files && (ke(this.$el, this.clsDragover), this.upload(e.files))
                    },
                    dragenter: function(t) {
                        oo(t)
                    },
                    dragover: function(t) {
                        oo(t), xe(this.$el, this.clsDragover)
                    },
                    dragleave: function(t) {
                        oo(t), ke(this.$el, this.clsDragover)
                    }
                },
                methods: {
                    upload: function(t) {
                        var i = this;
                        if (t.length) {
                            At(this.$el, "upload", [t]);
                            for (var e = 0; e < t.length; e++) {
                                if (i.maxSize && 1e3 * i.maxSize < t[e].size) return void i.fail(i.msgInvalidSize.replace("%s", i.maxSize));
                                if (i.allow && !ro(i.allow, t[e].name)) return void i.fail(i.msgInvalidName.replace("%s", i.allow));
                                if (i.mime && !ro(i.mime, t[e].type)) return void i.fail(i.msgInvalidMime.replace("%s", i.mime))
                            }
                            this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                            var r = function(t, e) {
                                    for (var n = [], i = 0; i < t.length; i += e) {
                                        for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                                        n.push(r)
                                    }
                                    return n
                                }(t, this.concurrent),
                                o = function(t) {
                                    var e = new FormData;
                                    for (var n in t.forEach(function(t) {
                                            return e.append(i.name, t)
                                        }), i.params) e.append(n, i.params[n]);
                                    Ft(i.url, {
                                        data: e,
                                        method: i.method,
                                        responseType: i.type,
                                        beforeSend: function(t) {
                                            var e = t.xhr;
                                            e.upload && Tt(e.upload, "progress", i.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function(t) {
                                                return Tt(e, t.toLowerCase(), i[t])
                                            }), i.beforeSend(t)
                                        }
                                    }).then(function(t) {
                                        i.complete(t), r.length ? o(r.shift()) : i.completeAll(t)
                                    }, function(t) {
                                        return i.error(t)
                                    })
                                };
                            o(r.shift())
                        }
                    }
                }
            };

        function ro(t, e) {
            return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
        }

        function oo(t) {
            t.preventDefault(), t.stopPropagation()
        }
        return Vn.component("countdown", ar), Vn.component("filter", pr), Vn.component("lightbox", _r), Vn.component("lightboxPanel", Er), Vn.component("notification", Or), Vn.component("parallax", Pr), Vn.component("slider", qr), Vn.component("sliderParallax", Ur), Vn.component("slideshow", Qr), Vn.component("slideshowParallax", Ur), Vn.component("sortable", to), Vn.component("tooltip", no), Vn.component("upload", io),
            function(o) {
                var s = o.connect,
                    a = o.disconnect;

                function t() {
                    l(document.body, s), pn.flush(), new MutationObserver(function(t) {
                        return t.forEach(e)
                    }).observe(document, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0,
                        attributes: !0
                    }), o._initialized = !0
                }

                function e(t) {
                    var e = t.target;
                    ("attributes" !== t.type ? function(t) {
                        for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) l(e[i], s);
                        for (var r = 0; r < n.length; r++) l(n[r], a);
                        return !0
                    }(t) : function(t) {
                        var e = t.target,
                            n = t.attributeName;
                        if ("href" === n) return !0;
                        var i = Hn(n);
                        if (i && i in o) {
                            if (Q(e, n)) return o[i](e), !0;
                            var r = o.getComponent(e, i);
                            return r ? (r.$destroy(), !0) : void 0
                        }
                    }(t)) && o.update(e)
                }

                function l(t, e) {
                    if (1 === t.nodeType && !Q(t, "uk-no-boot"))
                        for (e(t), t = t.firstElementChild; t;) {
                            var n = t.nextElementSibling;
                            l(t, e), t = n
                        }
                }
                "MutationObserver" in window && (document.body ? t() : new MutationObserver(function() {
                    document.body && (this.disconnect(), t())
                }).observe(document, {
                    childList: !0,
                    subtree: !0
                }))
            }(Vn), Vn
    });
    ! function(t, i) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define("uikitflow", i) : t.UIkitFlow = i()
    }(this, function() {
        "use strict";

        function i(t) {
            i.installed || t.icon.add({
                "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719\t\tc0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449\t\tc-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045\t\tc-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z" /> <path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066\t\tc0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564\t\tc0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271\t\tc0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z" /> <path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521\t\tc-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53\t\tc-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203\t\tc-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604\t\tc0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645\t\tc1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z" /> <path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461\t\tc0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882\t\tc0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881\t\tc-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461\t\tc-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915\t\tC5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0\t\tc0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408\t\tc0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406\t\tc-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799\t\tc0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468\t\tc-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607\t\tc0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038\t\tc-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113\t\tc-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z" /></svg>',
                album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="5" y="2" width="10" height="1" /> <rect x="3" y="4" width="14" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11" /></svg>',
                "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66" /> <line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15" /></svg>',
                "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5" /> <line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52" /></svg>',
                "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14" /> <line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5" /></svg>',
                "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4" /> <line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5" /></svg>',
                ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5" /></svg>',
                behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z" /> <path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z" /> <rect x="13" y="4" width="5" height="1.4" /></svg>',
                bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z" /> <path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16" /></svg>',
                bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z" /></svg>',
                bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z" /></svg>',
                bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5" /></svg>',
                calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z" /> <rect width="1" height="3" x="6" y="2" /> <rect width="1" height="3" x="13" y="2" /></svg>',
                camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8" /> <path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z" /></svg>',
                cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="7.3" cy="17.3" r="1.4" /> <circle cx="13.3" cy="17.3" r="1.4" /> <polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5" /></svg>',
                check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4" /></svg>',
                "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7" /></svg>',
                "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4" /></svg>',
                "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16" /></svg>',
                "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13" /></svg>',
                clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <rect x="9" y="4" width="1" height="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" /></svg>',
                close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4" /> <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16" /></svg>',
                "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6" /> <polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16" /> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5" /></svg>',
                "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6" /> <polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75" /> <path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5" /></svg>',
                code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16" /></svg>',
                cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31" /> <path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z" /></svg>',
                comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z" /></svg>',
                commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5" /> <circle cx="10" cy="8" r="1" /> <circle cx="6" cy="8" r="1" /> <circle cx="14" cy="8" r="1" /></svg>',
                comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13" /> <path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z" /></svg>',
                copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16" /> <polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17" /></svg>',
                "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12" /> <rect x="1" y="7" width="18" height="3" /></svg>',
                database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14" /> <path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11" /> <path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25" /> <path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64" /></svg>',
                desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="8" y="15" width="1" height="2" /> <rect x="11" y="15" width="1" height="2" /> <rect x="5" y="16" width="10" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11" /></svg>',
                download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10" /> <rect x="3" y="17" width="13" height="1" /> <line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3" /></svg>',
                dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5" /> <path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6" /> <path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4" /> <circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9" /></svg>',
                expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13 2 18 2 18 7 17 7 17 3 13 3" /> <polygon points="2 13 3 13 3 17 7 17 7 18 2 18" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11" /></svg>',
                facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z" /></svg>',
                "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z" /> <polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5" /></svg>',
                file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17" /></svg>',
                flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="5.5" cy="9.5" r="3.5" /> <circle cx="14.5" cy="9.5" r="3.5" /></svg>',
                folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5" /></svg>',
                forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z" /></svg>',
                foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z" /></svg>',
                future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10" /> <rect x="9" y="4" width="1" height="7" /> <path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1" /></svg>',
                "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2" /> <path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5" /></svg>',
                "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79" /> <circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79" /> <ellipse fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" rx="1.79" ry="1.79" /> <path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57" /></svg>',
                "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z" /></svg>',
                github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z" /></svg>',
                gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3.5" y="1" width="1.531" height="11.471" /> <rect x="7.324" y="4.059" width="1.529" height="15.294" /> <rect x="11.148" y="4.059" width="1.527" height="15.294" /> <rect x="14.971" y="4.059" width="1.529" height="8.412" /></svg>',
                "google-plus": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z" /> <polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9 " /></svg>',
                google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z" /></svg>',
                grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="2" width="3" height="3" /> <rect x="8" y="2" width="3" height="3" /> <rect x="14" y="2" width="3" height="3" /> <rect x="2" y="8" width="3" height="3" /> <rect x="8" y="8" width="3" height="3" /> <rect x="14" y="8" width="3" height="3" /> <rect x="2" y="14" width="3" height="3" /> <rect x="8" y="14" width="3" height="3" /> <rect x="14" y="14" width="3" height="3" /></svg>',
                happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="13" cy="7" r="1" /> <circle cx="7" cy="7" r="1" /> <circle fill="none" stroke="#000" cx="10" cy="10" r="8.5" /> <path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4" /></svg>',
                hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z" /></svg>',
                heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z" /></svg>',
                history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10" /> <rect x="9" y="4" width="1" height="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625" id="Shape" /></svg>',
                home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65" /> <polygon points="15 4 18 4 18 7 17 7 17 5 15 5" /> <polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19" /></svg>',
                image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="16.1" cy="6.1" r="1.1" /> <rect fill="none" stroke="#000" x="0.5" y="2.5" width="19" height="15" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14" /> <polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14" /></svg>',
                info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /></svg>',
                instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z" /> <circle cx="14.87" cy="5.26" r="1.09" /> <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z" /></svg>',
                italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z" /></svg>',
                joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z" /> <path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8" /> <path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8" /> <path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7" /></svg>',
                laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect y="16" width="20" height="1" /> <rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10" /></svg>',
                lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z" /></svg>',
                link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975" /></svg>',
                linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z" /> <path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z" /></svg>',
                list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="6" y="4" width="12" height="1" /> <rect x="6" y="9" width="12" height="1" /> <rect x="6" y="14" width="12" height="1" /> <rect x="2" y="4" width="2" height="1" /> <rect x="2" y="9" width="2" height="1" /> <rect x="2" y="14" width="2" height="1" /></svg>',
                location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z" /> <circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3" /></svg>',
                lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5" /> <path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8" /></svg>',
                mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5" /> <path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z" /></svg>',
                menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="2" y="4" width="16" height="1" /> <rect x="2" y="9" width="16" height="1" /> <rect x="2" y="14" width="16" height="1" /></svg>',
                "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg>',
                minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect height="1" width="18" y="9" x="1" /></svg>',
                "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="3" r="2" /> <circle cx="10" cy="10" r="2" /> <circle cx="10" cy="17" r="2" /></svg>',
                more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3" cy="10" r="2" /> <circle cx="10" cy="10" r="2" /> <circle cx="17" cy="10" r="2" /></svg>',
                move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="4,5 1,5 1,9 2,9 2,6 4,6 " /> <polygon points="1,16 2,16 2,18 4,18 4,19 1,19 " /> <polygon points="14,16 14,19 11,19 11,18 13,18 13,16 " /> <rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13" /> <rect x="1" y="11" width="1" height="3" /> <rect x="6" y="18" width="3" height="1" /></svg>',
                nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3" /> <circle fill="none" stroke="#000" cx="10" cy="10" r="3.5" /></svg>',
                pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19 " /></svg>',
                "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61" /> <path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z" /></svg>',
                pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z" /> <path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148" /></svg>',
                "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z" /> <circle cx="3.8" cy="10.5" r="0.8" /></svg>',
                phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z" /> <circle cx="10.5" cy="16.5" r="0.8" /></svg>',
                pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1" /></svg>',
                "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /></svg>',
                play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15" /></svg>',
                "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9" /> <line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14" /> <line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5" /></svg>',
                plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="9" y="1" width="1" height="17" /> <rect x="1" y="9" width="17" height="1" /></svg>',
                pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7" /> <line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2" /> <polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5" /></svg>',
                push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3" /> <line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1" /> <polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5" /></svg>',
                question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <circle cx="10.44" cy="14.42" r="1.05" /> <path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75" /></svg>',
                "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z" /> <path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z" /></svg>',
                receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611" /></svg>',
                refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5" /> <polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9" /></svg>',
                reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z" /></svg>',
                rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="3.12" cy="16.8" r="1.85" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5" /></svg>',
                search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z" /></svg>',
                server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="3" y="3" width="1" height="2" /> <rect x="5" y="3" width="1" height="2" /> <rect x="7" y="3" width="1" height="2" /> <rect x="16" y="3" width="1" height="1" /> <rect x="16" y="10" width="1" height="1" /> <circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4" /> <rect x="3" y="10" width="1" height="2" /> <rect x="5" y="10" width="1" height="2" /> <rect x="9.5" y="14" width="1" height="2" /> <rect x="3" y="17" width="6" height="1" /> <rect x="11" y="17" width="6" height="1" /> <rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5" /> <rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5" /></svg>',
                settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15" /> <ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15" /> <circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15" /> <rect x="1" y="3" width="3" height="1" /> <rect x="10" y="3" width="8" height="1" /> <rect x="1" y="9" width="8" height="1" /> <rect x="15" y="9" width="3" height="1" /> <rect x="1" y="15" width="3" height="1" /> <rect x="10" y="15" width="8" height="1" /></svg>',
                shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="11 4 12 4 12 8 16 8 16 9 11 9" /> <polygon points="4 11 9 11 9 16 8 16 8 12 4 12" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12" /></svg>',
                "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3" /> <polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5" /></svg>',
                "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5" /> <polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3" /></svg>',
                social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7" /> <line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3" /></svg>',
                soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z" /> <rect x="6" y="6.5" width="1.5" height="8.5" /> <rect x="3" y="8" width="1.5" height="7" /> <rect y="10" width="1.5" height="5" /></svg>',
                star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27" /></svg>',
                strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z" /> <rect x="3" y="10" width="15" height="1" /></svg>',
                table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="1" y="3" width="18" height="1" /> <rect x="1" y="7" width="18" height="1" /> <rect x="1" y="11" width="18" height="1" /> <rect x="1" y="15" width="18" height="1" /></svg>',
                "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z" /> <circle cx="3.7" cy="10.5" r="0.8" /></svg>',
                tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z" /> <circle cx="10.5" cy="16.3" r="0.8" /></svg>',
                tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z" /> <circle cx="14" cy="6" r="1" /></svg>',
                thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5" /> <rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5" /></svg>',
                trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3" /> <polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4" /> <rect x="8" y="7" width="1" height="9" /> <rect x="11" y="7" width="1" height="9" /> <rect x="2" y="3" width="16" height="1" /></svg>',
                "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 7 15 7 10 12" /></svg>',
                "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="12 5 7 10 12 15" /></svg>',
                "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="8 5 13 10 8 15" /></svg>',
                "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="5 13 10 8 15 13" /></svg>',
                tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z" /></svg>',
                tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z" /></svg>',
                tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect x="7" y="16" width="6" height="1" /> <rect fill="none" stroke="#000" x="0.5" y="3.5" width="19" height="11" /></svg>',
                twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74" /></svg>',
                uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3" /> <polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3" /></svg>',
                unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10" /> <path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9" /></svg>',
                upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8 " /> <rect x="3" y="17" width="13" height="1" /> <line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4" /></svg>',
                user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2" /></svg>',
                users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3" /> <path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1" /></svg>',
                "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <polygon points="18,6 18,14 12,10 " /> <rect x="2" y="5" width="12" height="10" /></svg>',
                vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z" /></svg>',
                warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle cx="10" cy="14" r="1" /> <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9" /> <path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z" /></svg>',
                whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9" /></svg>',
                wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z" /></svg>',
                world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#000" d="M1,10.5 L19,10.5" /> <path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5" /> <path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5" /> <path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z" /> <circle fill="none" stroke="#000" cx="10" cy="10.5" r="9" /></svg>',
                xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z" /> <path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z" /></svg>',
                yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z" /></svg>',
                youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z" /></svg>',
                marker: '<svg width="11" height="11" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg"> <circle style="fill: #fff" cx="5.5" cy="5.5" r="5.5"/></svg>'
            })
        }
        return "undefined" != typeof window && window.UIkit && window.UIkit.use(i), i
    });
    (function(UIkit, util) {
        var $ = util.$,
            attr = util.attr,
            css = util.css,
            addClass = util.addClass;
        var selector = '.tm-header ~ [class*="uk-section"], .tm-header ~ * > [class*="uk-section"]';
        UIkit.component('header', {
            update: [{
                read: function(data) {
                    var section = $(selector);
                    var modifier = attr(section, 'tm-header-transparent');
                    if (!modifier || !section) {
                        return false;
                    }
                    data.prevHeight = this.height;
                    data.height = this.$el.offsetHeight;
                    var sticky = UIkit.getComponent($('[uk-sticky]', this.$el), 'sticky');
                    if (sticky) {
                        var dat = sticky.$options.data;
                        if (dat.animation !== 'uk-animation-slide-top') {
                            util.each({
                                animation: 'uk-animation-slide-top',
                                top: selector,
                                clsInactive: 'uk-navbar-transparent uk-' + modifier
                            }, function(value, key) {
                                dat[key] = sticky[key] = sticky.$props[key] = value;
                            });
                        }
                        sticky.$props.top = section.offsetHeight <= window.innerHeight ? selector : util.offset(section).top + 300;
                    }
                },
                write: function(data) {
                    if (!this.placeholder) {
                        var section = $(selector);
                        var modifier = attr(section, 'tm-header-transparent');
                        addClass(this.$el, 'tm-header-transparent');
                        addClass($('.tm-headerbar-top, .tm-headerbar-bottom'), 'uk-' + modifier);
                        this.placeholder = util.hasAttr(section, 'tm-header-transparent-placeholder') && util.before($('[uk-grid]', section), '<div class="tm-header-placeholder uk-margin-remove-adjacent"></div>');
                        var navbar = $('[uk-navbar]', this.$el);
                        if (attr(navbar, 'dropbar-mode') === 'push') {
                            attr(navbar, 'dropbar-mode', 'slide');
                        }
                        if (!$('[uk-sticky]', this.$el)) {
                            addClass($('.uk-navbar-container', this.$el), 'uk-navbar-transparent uk-' + modifier);
                        }
                    }
                    if (this.placeholder && data.prevHeight !== data.height) {
                        css(this.placeholder, {
                            height: data.height
                        });
                    }
                },
                events: ['load', 'resize']
            }]
        });
        if (util.isRtl) {
            var mixin = {
                init: function() {
                    this.$props.pos = util.swap(this.$props.pos, 'left', 'right');
                }
            };
            UIkit.mixin(mixin, 'drop');
            UIkit.mixin(mixin, 'tooltip');
        }
    })(UIkit, UIkit.util);
} catch (e) {
    console.error('Error in file:/templates/yootheme/cache/scripts-9bcd5267.js?v=1.15.7; Error:' + e.message);
};
