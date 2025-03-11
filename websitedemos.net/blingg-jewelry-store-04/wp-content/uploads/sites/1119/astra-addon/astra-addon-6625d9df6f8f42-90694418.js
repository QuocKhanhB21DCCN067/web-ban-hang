astraToggleSetupPro = function(e, t, a) {
    var n, l, o, s = !1;
    if (0 < (n = "off-canvas" === e || "full-width" === e ? (l = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"), (o = t.classList.contains("ast-header-break-point") ? document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle") : document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length) : t.classList.contains("ast-header-break-point") ? (l = document.querySelectorAll("#ast-mobile-header"), (s = !(0 < (n = (o = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : n) : (l = document.querySelectorAll("#ast-desktop-header"), (o = document.querySelectorAll("#ast-desktop-header .main-header-menu-toggle")).length)) || s)
        for (var r = 0; r < n; r++)
            if (s || (o[r].setAttribute("data-index", r), a[r]) || (a[r] = o[r], o[r].addEventListener("click", astraNavMenuToggle, !1)), void 0 !== l[r])
                for (var d, i = 0; i < l.length; i++)
                    if (0 < (d = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? l[i].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : l[i].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)
                        for (var c = 0; c < d.length; c++) d[c].addEventListener("click", AstraToggleSubMenu, !1)
}, astraNavMenuTogglePro = function(e, t, a, n) {
    e.preventDefault();
    var l = e.target.closest("#ast-desktop-header"),
        o = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"),
        s = (l = null != l && "" !== l ? l.querySelector(".main-header-menu-toggle") : document.querySelector("#masthead > #ast-desktop-header .main-header-menu-toggle"), document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content .main-header-bar-navigation"));
    if ("desktop" === e.currentTarget.trigger_type) null !== s && "" !== s && void 0 !== s && (astraToggleClass(s, "toggle-on"), s.classList.contains("toggle-on") ? s.style.display = "block" : s.style.display = ""), astraToggleClass(l, "toggled"), l.classList.contains("toggled") ? (t.classList.add("ast-main-header-nav-open"), "dropdown" === a && (o.style.display = "block")) : (t.classList.remove("ast-main-header-nav-open"), o.style.display = "none");
    else {
        e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"), s = (menu_toggle_all = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), "0"), l = !1;
        if (null !== n.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), menu_toggle_all = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), s = "0", l = !0), void 0 === e[s]) return !1;
        for (var r = e[s].querySelectorAll(".menu-item-has-children"), d = 0; d < r.length; d++) {
            r[d].classList.remove("ast-submenu-expanded");
            for (var i = r[d].querySelectorAll(".sub-menu"), c = 0; c < i.length; c++) i[c].style.display = "none"
        } - 1 !== (n.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[s], "toggle-on"), astraToggleClass(menu_toggle_all[s], "toggled"), l && 1 < menu_toggle_all.length && astraToggleClass(menu_toggle_all[1], "toggled"), e[s].classList.contains("toggle-on") ? (e[s].style.display = "block", t.classList.add("ast-main-header-nav-open")) : (e[s].style.display = "", t.classList.remove("ast-main-header-nav-open")))
    }
};
const accountMenuToggle = function() {
    const n = astraAddon.hf_account_action_type && "menu" === astraAddon.hf_account_action_type,
        l = n && astraAddon.hf_account_show_menu_on && "click" === astraAddon.hf_account_show_menu_on;
    var e = document.querySelectorAll(".ast-header-account-wrap");
    e && e.forEach(t => {
        const a = t.querySelector(".ast-account-nav-menu");
        document.addEventListener("pointerup", function(e) {
            (l || n && document.querySelector("body").classList.contains("ast-header-break-point")) && !t.contains(e.target) && (a.style.right = "", a.style.left = "")
        });
        var e = t.querySelector(".ast-header-account-link");
        e && e.addEventListener("click", function(e) {
            (l || n && document.querySelector("body").classList.contains("ast-header-break-point")) && (headerSelectionPosition = e.target.closest(".site-header-section")) && (headerSelectionPosition.classList.contains("site-header-section-left") ? (a.style.left = "" === a.style.left ? "-100%" : "", a.style.right = "" === a.style.right ? "auto" : "") : (a.style.right = "" === a.style.right ? "-100%" : "", a.style.left = "" === a.style.left ? "auto" : ""))
        })
    })
};
document.addEventListener("astPartialContentRendered", function() {
    accountMenuToggle()
}), window.addEventListener("load", function() {
    accountMenuToggle()
}), document.addEventListener("astLayoutWidthChanged", function() {
    accountMenuToggle()
});
! function() {
    if ("undefined" != typeof astra) {
        AstraProQuickView = {
            stick_add_to_cart: astra.shop_quick_view_stick_cart,
            auto_popup_height_by_image: astra.shop_quick_view_auto_height,
            init: function() {
                this._init_popup(), this._bind()
            },
            _init_popup: function() {
                var e = parseFloat(window.innerWidth) - 120,
                    t = parseFloat(window.innerHeight) - 120,
                    i = document.getElementById("ast-quick-view-content"),
                    e = (i && (i.style.maxWidth = e + "px", i.style.maxHeight = t + "px"), document.querySelectorAll(".ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link"));
                0 < e.length && e.forEach(e => {
                    e.setAttribute("href", "javascript:void(0)")
                })
            },
            _bind: function() {
                var e = document.querySelectorAll(".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link, .ast-quick-view-trigger"),
                    e = (0 < e.length && e.forEach(e => {
                        e.removeEventListener("click", AstraProQuickView._open_quick_view), e.addEventListener("click", AstraProQuickView._open_quick_view)
                    }), document.querySelector("#ast-quick-view-close")),
                    t = document.querySelector(".ast-content-main-wrapper");
                e && e.addEventListener("click", AstraProQuickView._close_quick_view), t && t.addEventListener("click", AstraProQuickView._close_quick_view_on_overlay_click), document.addEventListener("keyup", AstraProQuickView._close_quick_view_on_esc_keypress)
            },
            _open_quick_view: function(e) {
                e.preventDefault();
                var e = e.currentTarget,
                    t = e.closest("li.product"),
                    i = document.querySelector("#ast-quick-view-modal"),
                    a = document.querySelector(".ast-quick-view-bg");
                let o = e.getAttribute("data-product_id"),
                    c = (t && t.classList.contains("ast-qv-on-image-click") && (o = t.querySelector(".ast-quick-view-data").getAttribute("data-product_id")), i && !i.classList.contains("loading") && i.classList.add("loading"), a && !a.classList.contains("ast-quick-view-bg-ready") && a.classList.add("ast-quick-view-bg-ready"), document.dispatchEvent(new Event("ast_quick_view_loading")), new XMLHttpRequest);
                c.open("POST", astra.ajax_url, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), c.send("action=ast_load_product_quick_view&product_id= " + o), c.responseType = "text", c.onreadystatechange = function() {
                    var e = c.responseText;
                    c.readyState == XMLHttpRequest.DONE && (200 <= c.status || 400 <= c.status) && (document.querySelector("#ast-quick-view-modal").querySelector("#ast-quick-view-content").innerHTML = e, e = new CustomEvent("AstraQuickViewForModal", {
                        detail: {
                            class_name: ".uagb-modal-wrapper"
                        }
                    }), document.dispatchEvent(e), AstraProQuickView._after_markup_append_process())
                }, document.querySelector(".astra-cart-drawer-close") && astra.woo_cart_empty_featured_product && document.querySelector(".astra-cart-drawer-close").click()
            },
            _after_markup_append_process: function() {
                let e = document.querySelector("#ast-quick-view-modal"),
                    t = e.querySelector("#ast-quick-view-content");
                t.querySelectorAll(".variations_form");
                e && !e.classList.contains("open") && (o = t.outerHeight, a = window.innerHeight, i = document.querySelector("html"), a < o ? i.style.marginRight = AstraProQuickView._get_scrollbar_width() : (i.style.marginRight = "", i.querySelector(".ast-sticky-active") && (i.querySelector(".ast-sticky-active").style.maxWidth = "100%"), i.querySelector(".ast-header-sticky-active") && (i.querySelector(".ast-header-sticky-active").style.maxWidth = "100%"), i.querySelector(".ast-custom-footer") && (i.querySelector(".ast-custom-footer").style.maxWidth = "100%")), i.classList.add("ast-quick-view-is-open"));
                var i, a = jQuery(document).find("#ast-quick-view-modal");
                if (0 < a.length) {
                    a.find(".variations_form").trigger("check_variations"), a.find(".variations_form").trigger("reset_image"), a.find(".variations_form").wc_variation_form(), a.find(".variations_form select").change();
                    var o = a.find(".ast-qv-image-slider");
                    if (1 < o.find("li").length) {
                        o.flexslider();
                        try {
                            productVariation(o)
                        } catch (e) {}
                    }
                }
                setTimeout(function() {
                    AstraProQuickView._auto_set_content_height_by_image(), e.classList.remove("loading"), e.classList.add("open"), document.querySelector(".ast-quick-view-bg").classList.add("open")
                }, 100), document.dispatchEvent(new Event("ast_quick_view_loader_stop"))
            },
            _auto_set_content_height_by_image: function() {
                imagesLoaded(document.querySelector("#ast-quick-view-modal"), function() {
                    var t = document.getElementById("ast-quick-view-modal"),
                        i = t.querySelector(".woocommerce-product-gallery__image img").getBoundingClientRect().height,
                        a = t.querySelector(".product .summary.entry-summary"),
                        o = t.querySelectorAll(".woocommerce-product-gallery__image img, .ast-qv-slides img");
                    let c = parseFloat(window.innerHeight) - 120;
                    if (i = parseFloat(i), AstraProQuickView.auto_popup_height_by_image ? o.length ? i < c ? a.style.maxHeight = parseFloat(i) + "px" : a.style.maxHeight = c + "px" : a.style.width = "100%" : a.style.maxHeight = parseFloat(c) + "px", AstraProQuickView.stick_add_to_cart) {
                        t.classList.add("stick-add-to-cart");
                        o = t.querySelector(".cart").getBoundingClientRect().height;
                        let e = parseFloat(c) - parseFloat(o);
                        o < i ? (t.querySelector(".cart").classList.add("stick"), c = document.querySelector("#ast-quick-view-content").getBoundingClientRect().height, o = t.querySelector(".cart").getBoundingClientRect().height, e = parseFloat(c) - parseFloat(o), a.style.maxHeight = parseFloat(e) + "px") : c > e ? a.style.maxHeight = parseFloat(c) + "px" : a.style.maxHeight = ""
                    }
                })
            },
            _close_quick_view_on_esc_keypress: function(e) {
                27 === e.keyCode && AstraProQuickView._close_quick_view()
            },
            _close_quick_view: function(e) {
                e && e.preventDefault(), document.querySelector(".ast-quick-view-bg").classList.remove("ast-quick-view-bg-ready"), document.querySelector("#ast-quick-view-modal").classList.remove("open", "loading"), document.querySelector(".ast-quick-view-bg").classList.remove("open"), document.querySelector("html").classList.remove("ast-quick-view-is-open"), document.querySelector("html").style.marginRight = "", setTimeout(function() {
                    document.querySelector("#ast-quick-view-modal").querySelector("#ast-quick-view-content").innerHTML = ""
                }, 600)
            },
            _close_quick_view_on_overlay_click: function(e) {
                this === e.target && AstraProQuickView._close_quick_view()
            },
            _get_scrollbar_width: function() {
                var e = document.createElement("div"),
                    t = (e.classList.add("ast-get-scrollbar-width"), e.style.width = "50px", e.style.height = "50px", e.style.overflow = "hidden", e.style.position = "absolute", e.style.top = "-200px", e.style.left = "-200px", document.createElement("div")),
                    t = (t.style.height = "100px", e.appendChild(t), document.querySelector("body").appendChild(e), document.querySelector(".ast-get-scrollbar-width").clientWidth),
                    e = (e.style.overflowY = "scroll", document.querySelector(".ast-get-scrollbar-width").clientWidth);
                return document.querySelector(".ast-get-scrollbar-width").remove(), t - e
            }
        };
        var e;
        e = function() {
            AstraProQuickView.init()
        }, "interactive" === document.readyState || "complete" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", e);
        const t = document.getElementById("astra-mobile-cart-drawer");
        document.addEventListener("astra_on_slide_In_cart_open", function() {
            astra.woo_cart_empty_featured_product && t && t.classList.contains("active") && AstraProQuickView.init()
        }), document.addEventListener("astra_on_slide_in_cart_empty", function() {
            astra.woo_cart_empty_featured_product && t && t.classList.contains("active") && AstraProQuickView.init()
        }), document.addEventListener("astraInfinitePaginationLoaded", function() {
            AstraProQuickView.init()
        })
    }
}();

function dynamicImageResize(e, t) {
    var r = document.querySelector("#ast-vertical-thumbnail-wrapper"),
        a = t.getElementsByTagName("div")[0],
        e = (a && r && (e.rowHeight = a.offsetHeight, a = e.numVisible * e.rowHeight + "px", t.style.height = a, r.style.height = a, t.style.visibility = "visible"), document.querySelector(".woocommerce-product-gallery__wrapper"));
    if (e) {
        const i = r.clientHeight;
        a = e.querySelectorAll("a img");
        a && a.forEach(e => {
            e.style.height = i - 10 + "px"
        })
    }
}

function MoveSlide(t, r, a) {
    var i = document.querySelector("#ast-vertical-slider-inner");
    if (i) {
        var l = i.querySelector("img").clientHeight + 10;
        let e = parseInt(i.getAttribute("ast-translate"));
        l && ("next" === t ? enableDisableNavigationArrows(r, a, e += l, l) : 0 < e && enableDisableNavigationArrows(r, a, e -= l, l), i.setAttribute("ast-translate", e), i.style.transform = `translate3d( 0, -${e}px, 0 )`, i.style.transition = ".3s")
    }
}

function verticalSliderNavigationArrows(e, t) {
    e && (e.onclick = function() {
        MoveSlide("prev", e, t)
    }), t && (t.onclick = function() {
        MoveSlide("next", e, t)
    })
}

function focusSlideOnClick() {
    const r = document.querySelectorAll("#ast-vertical-slider-inner .ast-woocommerce-product-gallery__image");
    r.forEach(e => {
        e.addEventListener("click", function(e) {
            var t = e.currentTarget.getAttribute("data-slide-number");
            r.forEach(e => {
                e.classList.remove("flex-active-slide")
            }), e.currentTarget.classList.add("flex-active-slide"), jQuery(".woocommerce-product-gallery").data("flexslider").flexAnimate(parseInt(t))
        })
    })
}

function enableDisableNavigationArrows(e, t, r = 0, a = 0) {
    var i, l, s = document.querySelectorAll("#ast-vertical-slider-inner .ast-woocommerce-product-gallery__image");
    s && (i = (s = s.length) - 4, l = "flex-disabled", (parseInt(r) < 1 || parseInt(r) < parseInt(a * i)) && (t.classList.remove(l), e.classList.remove(l)), parseInt(r) === parseInt(a * i) && (t.classList.add(l), e.classList.remove(l)), 0 === parseInt(r) && (t.classList.remove(l), e.classList.add(l)), parseInt(s) <= 4) && (t.classList.add(l), e.classList.add(l))
}

function saleBadgeAlignment() {
    var e, t, r;
    document.querySelector("#ast-vertical-slider-inner > div") && (e = document.querySelector("#ast-gallery-thumbnails").clientWidth) && (t = document.querySelector(".woocommerce div.product.ast-product-gallery-layout-vertical-slider > span.onsale, .woocommerce div.product.ast-product-gallery-layout-vertical-slider > span.ast-onsale-card")) && (r = t.classList.contains("ast-onsale-card") ? 25 : 15, t.style.left = e + r + "px")
}

function scrollToSlideVariableProduct(i, l) {
    const s = document.querySelector(".woocommerce-product-gallery .woocommerce-product-gallery__image"),
        t = document.querySelectorAll(".woocommerce-product-gallery .ast-woocommerce-product-gallery__image img");
    s && t && (observer = new MutationObserver(e => {
        e.forEach(e => {
            e.attributeName && e.attributeName.includes("data-thumb") && t.forEach(e => {
                var t, r, a;
                e.getAttribute("srcset") && e.getAttribute("srcset").includes(s.getAttribute("data-thumb")) && (e.click(), t = document.querySelector("#ast-vertical-slider-inner")) && (r = t.querySelector("img").clientHeight + 10, e = e.closest(".ast-woocommerce-product-gallery__image").getAttribute("data-slide-number"), r) && e && (a = 4 * r, 4 < (e = parseInt(e) + 1) ? (t.style.transform = `translate3d( 0, -${e=r*e-a}px, 0 )`, t.setAttribute("ast-translate", e)) : (t.setAttribute("ast-translate", 0), t.style.transform = "translate3d( 0, 0px, 0 )"), enableDisableNavigationArrows(i, l, t.getAttribute("ast-translate"), r), t.style.transition = ".3s")
            })
        })
    })).observe(s, {
        attributes: !0
    })
}
document.addEventListener("DOMContentLoaded", function() {
    var e = document.querySelector("#ast-vertical-slider-inner"),
        e = (e && e.setAttribute("ast-translate", 0), document.querySelector("#ast-gallery-thumbnails")),
        t = document.querySelector(".ast-product-gallery-layout-vertical-slider");
    if (!e || t.classList.contains("ast-product-gallery-with-no-image")) return !1;
    const r = {
            width: e.clientWidth,
            numVisible: 4
        },
        a = r.carousel = document.querySelector("#ast-vertical-slider-inner");
    if (!a) return !1;
    var t = document.querySelector("#ast-vertical-navigation-prev"),
        e = document.querySelector("#ast-vertical-navigation-next"),
        i = (dynamicImageResize(r, a), verticalSliderNavigationArrows(t, e), focusSlideOnClick(), document.querySelector(".ast-article-single"));
    i && i.classList.contains("ast-product-single-variable") && scrollToSlideVariableProduct(t, e), enableDisableNavigationArrows(t, e), saleBadgeAlignment();
    let l;
    window.onresize = function() {
        clearTimeout(l), l = setTimeout(function() {
            dynamicImageResize(r, a), saleBadgeAlignment()
        }, 400)
    }
});

function triggerFirstSlide() {
    const t = document.querySelector(".woocommerce-product-gallery-thumbnails__wrapper div");
    var e = jQuery(".single_variation_wrap");
    e && t && e.on("show_variation", function(e, r) {
        t.click()
    })
}
document.addEventListener("DOMContentLoaded", function() {
    triggerFirstSlide()
});
const productVariation = i => {
    var t = document.querySelectorAll(".ast-single-variation"),
        e = document.querySelector(".reset_variations");
    e && e.addEventListener("click", t => {
        document.querySelectorAll(".ast-single-variation").forEach(t => {
            t.classList.remove("active"), t.style.opacity = "1", t.style.pointerEvents = "inherit"
        })
    }), t && t.forEach(t => {
        t.addEventListener("click", t => {
            var e = t.target.closest(".ast-variation-button-group"),
                e = (e && (e = e.querySelectorAll(".ast-single-variation")) && e.forEach(t => {
                    t.classList.remove("active")
                }), document.querySelector(".ast-product-single-variable form .variations")),
                e = (e && (allVariationSelector = e.querySelectorAll("select"), allVariationButton = e.querySelectorAll(".ast-variation-button-group"), allVariationSelector) && allVariationButton && setTimeout(() => {
                    allVariationSelector.forEach(t => {
                        var e = t.querySelectorAll("option");
                        const a = [];
                        e.forEach(t => {
                            a.push(t.getAttribute("value"))
                        });
                        e = t.nextElementSibling;
                        const i = null !== e ? e.querySelectorAll(".ast-single-variation") : null;
                        null !== i && i.forEach(t => {
                            i.forEach(t => {
                                a.includes(t.getAttribute("data-slug")) ? (t.style.opacity = "1", t.style.pointerEvents = "inherit") : (t.style.opacity = ".5", t.style.pointerEvents = "none")
                            })
                        })
                    })
                }, 100), t.target.getAttribute("data-slug")),
                a = t.target.closest("td").querySelector("select");
            e && a && (t.target.classList.add("active"), a.value = e, a.dispatchEvent(new Event("change", {
                bubbles: !0
            }))), null != i && i.flexslider(0)
        })
    })
};
document.addEventListener("DOMContentLoaded", function(t) {
    productVariation()
}), document.addEventListener("astUpdateSingleProductVariations", function() {
    productVariation()
}), jQuery(".composite_data").on("wc-composite-initializing", function(t, e) {
    e.actions.add_action("component_scripts_initialized", function() {
        productVariation()
    }, 100)
});
const getHeaderHeightIfSticky = () => {
    var e = document.querySelector("body"),
        o = document.querySelector(".ast-above-sticky-header-active"),
        c = document.querySelector(".ast-primary-sticky-header-active"),
        r = document.querySelector(".ast-below-sticky-header-active"),
        a = document.querySelector(".admin-bar"),
        s = document.querySelectorAll(".ast-sticky-active");
    let i, n;
    if (e && (e.classList.contains("woocommerce-shop") || e.classList.contains("ast-woo-shop-archive")) && (i = document.querySelector(".woocommerce-shop.ast-left-sidebar #content .ast-container, .woocommerce-shop.ast-right-sidebar #content .ast-container, .ast-woo-shop-archive.ast-left-sidebar #content .ast-container, .ast-woo-shop-archive.ast-right-sidebar #content .ast-container"), n = document.querySelector(".woocommerce-shop.ast-left-sidebar #content .ast-container > .widget-area, .woocommerce-shop.ast-right-sidebar #content .ast-container > .widget-area, .ast-woo-shop-archive.ast-left-sidebar #content .ast-container > .widget-area, .ast-woo-shop-archive.ast-right-sidebar #content .ast-container > .widget-area")), e && e.classList.contains("woocommerce-cart") && astraAddon.cart_sticky_cart_totals && (i = document.querySelector("#ast-cart-wrapper"), n = document.querySelector("#ast-cart-wrapper .cart-collaterals")), e && e.classList.contains("single-product") && (i = document.querySelector("#ast-sticky-row-summary"), n = document.querySelector("#ast-sticky-row-summary .summary")), e && e.classList.contains("woocommerce-checkout") && astraAddon.checkout_order_review_sticky && (i = document.querySelector(".woocommerce-checkout"), n = document.querySelector("#ast-order-review-wrapper")), s) {
        let t = 0;
        s.forEach(e => {
            t += e.clientHeight
        }), i && (o || c || r) && n && t ? (n.style.position = "sticky", n.style.top = a ? t + 50 + "px" : t + 20 + "px") : i && n && (n.style.position = "sticky", n.style.top = a ? "3em" : "1em")
    }
};
let desktopElement = document.querySelector(".ast-desktop");
desktopElement && (window.onscroll = function(e) {
    getHeaderHeightIfSticky()
});

function CartCrossSellsSummaryHeight() {
    var e = document.querySelector("body"),
        t = document.querySelector(".cross-sells");
    e.classList.contains("woocommerce-cart") && t && (e = t.querySelectorAll(".products > li")) && e.forEach(e => {
        e && (e = e.querySelectorAll(".astra-shop-summary-wrap")) && e.forEach(e => {
            var t = e.querySelector(".price"),
                r = e.querySelector("a.button"),
                o = e.querySelector("a.ast-quick-view-button");
            (t || r) && (t = (t ? t.clientHeight : 0) + (r ? r.clientHeight : 0) + (o ? o.clientHeight : 0) + 15) && (e.style.minHeight = t + "px")
        })
    })
}

function CartCrossSellsSummaryHeightResize() {
    let t;
    window.addEventListener("resize", function(e) {
        clearTimeout(t), t = setTimeout(function() {
            CartCrossSellsSummaryHeight()
        }, 500)
    })
}
window.addEventListener("DOMContentLoaded", e => {
    CartCrossSellsSummaryHeight()
}), CartCrossSellsSummaryHeightResize();

function customCoupon() {
    var e = document.querySelector("div.woocommerce"),
        o = document.querySelector("body");
    if (e && (o.classList.contains("woocommerce-checkout") || o.classList.contains("woocommerce-cart"))) {
        const t = e => {
            var o = document.querySelector("#coupon_code"),
                t = document.querySelector('button[name="apply_coupon"]'),
                c = document.querySelector("#ast-coupon-code"),
                n = document.querySelector("#ast-checkout-coupon .coupon");
            n && e.target && "ast-coupon-trigger" === e.target.id && (n.style.display = "flex", e.target.style.display = "none"), o && t && c && e.target && "ast-apply-coupon" === e.target.id && (o.value = c.value, t.click())
        };
        e.addEventListener("click", function(e) {
            t(e)
        }), e.addEventListener("keypress", function(e) {
            13 === (e.which || e.keyCode) && t(e)
        })
    }
}
window.addEventListener("DOMContentLoaded", e => {
    customCoupon()
});

function cartQuantityUpdater() {
    var e = document.querySelector("body");
    pageParentClass = document.querySelector("div.woocommerce");
    let t;
    e.classList.contains("woocommerce-cart") && pageParentClass && pageParentClass.addEventListener("change", function(e) {
        e.target && e.target.classList.contains("qty") && (null != t && clearTimeout(t), "" != e.target.value) && (t = setTimeout(function() {
            document.querySelector('[name="update_cart"]').click()
        }, 1e3))
    })
}
window.addEventListener("DOMContentLoaded", e => {
    cartQuantityUpdater()
});

function modernLayoutInputs() {
    var e = document.querySelectorAll(".woocommerce input, .woocommerce select, .woocommerce textarea");
    e && e.forEach(e => {
        e.addEventListener("input", function(e) {
            addAnimateClass(e.currentTarget)
        }), addPlaceholder(e), addRequiredFields(e), addAnimateClass(e)
    })
}

function addAnimateClass(e) {
    var t, a = "ast-animate-input",
        s = e.closest(".form-row");
    s && (("" !== (t = "select" === e.tagName || e.classList.contains("select2-hidden-accessible") ? e.querySelector(":selected").textContent : e.value) || " " !== t && "select" === e.tagName) && s.classList.add(a), "hidden" === t && s.classList.remove(a), "" === t ? s.classList.remove(a) : s.classList.add(a))
}

function addPlaceholder(e) {
    var t;
    e.closest(".form-row") && !e.getAttribute("placeholder") && (t = e.closest(".form-row").querySelector("label")) && e.setAttribute("placeholder", t.textContent)
}

function addRequiredFields(t) {
    var a = t.closest(".form-row");
    if (a) {
        a = a.classList.contains("validate-required");
        let e = t.getAttribute("placeholder");
        a && "" !== e && !e.includes("*") && (e += " *"), t.setAttribute("placeholder", e)
    }
}
document.addEventListener("DOMContentLoaded", function(e) {
    var t = document.querySelector("body");
    t && !t.classList.contains("cartflows_step-template") && modernLayoutInputs()
});

function slideInAndOutContent(e, s) {
    e = document.querySelector(e);
    const c = document.querySelector(".ast-order-review-toggle-text");
    e && e.addEventListener("click", function(e) {
        const t = document.querySelector(s);
        var o = t.querySelector("*");
        if (t)
            if (e.currentTarget.classList.contains("active")) e.currentTarget.classList.remove("active"), t.style.maxHeight = 0, setTimeout(() => {
                t.style.display = "none"
            }, 300), c && (c.textContent = astraAddon.order_review_toggle_texts.toggle_show_text);
            else if (o && (e.currentTarget.classList.add("active"), t.style.display = "block", t.style.maxHeight = o.clientHeight + "px", c)) {
            c.textContent = astraAddon.order_review_toggle_texts.toggle_hide_text;
            const n = document.querySelector("#ast-order-review-content"),
                a = document.querySelector("#order_review");
            ["change", 'select.shipping_method, input[name^="shipping_method"]'].forEach(e => n.addEventListener(e, function() {
                a.querySelectorAll('input[name^="shipping_method"][type="radio"]:checked').forEach(e => {
                    e.removeAttribute("checked")
                }), document.querySelector("body").dispatchEvent(new CustomEvent("update_checkout", {
                    detail: {
                        update_shipping_method: !0
                    }
                }))
            }))
        }
    })
}
let xhrCountEmail = 0,
    delayTimerEmail;

function validateInlineEmail() {
    const o = document.querySelector("#billing_email");
    if (o) {
        const n = o.value;
        if (void 0 === n || astraAddon.is_logged_in) return;
        const a = document.querySelector(".ast-create-account-section"),
            s = document.querySelector(".woocommerce-billing-fields__customer-login-label"),
            c = document.querySelector(".ast-email-validation-block"),
            i = document.querySelector("#ast-customer-login-url");
        if ("" !== n) {
            c && c.remove(), clearTimeout(delayTimerEmail);
            const r = ++xhrCountEmail;
            delayTimerEmail = setTimeout(async function() {
                let t = new XMLHttpRequest;
                t.open("POST", astra.ajax_url, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send("action=astra_woo_check_user_exist&user_name_email=" + n + "&security=" + astraAddon.check_user_exist_nonce), t.onload = function() {
                    var e;
                    t.readyState == XMLHttpRequest.DONE && (200 <= t.status || 400 <= t.status) && (document.cookie = "ast_modern_checkout_useremail=" + n, e = JSON.parse(t.responseText), r === xhrCountEmail) && (c && c.remove(), e.data.success && i && i.classList.contains("active") ? o.insertAdjacentHTML("afterend", '<span class="ast-email-validation-block success">' + astraAddon.user_validation_msgs.success_msg + "</span>") : e.data.success ? (e.data.is_login_allowed && (o.insertAdjacentHTML("afterend", '<span class="ast-email-validation-block success">' + astraAddon.user_validation_msgs.success_msg + "</span>"), i) && !i.classList.contains("active") && i.click(), a && (a.style.display = "none"), s && (s.style.display = "block")) : (i && i.classList.contains("active") && i.click(), a && ((e = a.querySelector(".create-account label.checkbox")) && (e.style.display = "block"), a.style.display = "block"), s && "" == n && (s.style.display = "none")))
                }
            }, 300)
        } else i && i.classList.contains("active") && i.click(), c && (c.style.display = "none"), s && (s.style.display = "block"), a && (a.style.display = "none")
    }
    return !1
}

function supportNativeEmailFunctionality() {
    var e = document.querySelector("#billing_email");
    if (e) {
        e = e.value;
        if (void 0 === e || astraAddon.is_logged_in) return;
        var t = document.querySelector(".ast-create-account-section");
        t && (t.style.display = "" !== e ? "block" : "none")
    }
    return !1
}

function woocommerceUserLogin() {
    var e = document.querySelector(".ast-customer-login-section__login-button");
    e && e.addEventListener("click", function() {
        var e = document.querySelector("#billing_email"),
            t = document.querySelector("#billing_password");
        if (e || !t) {
            let o = new XMLHttpRequest;
            o.open("POST", astra.ajax_url, !0), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send("action=astra_woocommerce_login_user&user_name_email=" + encodeURIComponent(e.value) + "&password=" + encodeURIComponent(t.value) + "&security=" + encodeURIComponent(astraAddon.woocommerce_login_nonce)), o.onload = function() {
                var e, t;
                o.readyState == XMLHttpRequest.DONE && (200 <= o.status || 400 <= o.status) && ((e = JSON.parse(o.responseText)).data.success ? location.reload() : (t = document.querySelector(".ast-customer-info__notice")) && (t.classList.add("active"), t.innerHTML = e.data.error))
            }
        }
    })
}
document.addEventListener("DOMContentLoaded", function(e) {
    var t, o, n = document.querySelector("body");
    !astraAddon.cartflows_version && n && n.classList.contains("woocommerce-checkout") && (t = astraAddon.is_complete_package, (o = document.querySelector("#billing_email")) && (t ? (o.addEventListener("input", validateInlineEmail), validateInlineEmail) : (o.addEventListener("input", supportNativeEmailFunctionality), supportNativeEmailFunctionality))(), n && !n.classList.contains("ast-woo-two-step-modern-checkout") && slideInAndOutContent("#ast-order-review-toggle", "#ast-order-review-content"), t) && (slideInAndOutContent("#ast-customer-login-url", "#ast-customer-login-section"), woocommerceUserLogin())
});
! function() {
    var e;

    function o(e) {
        var t = (t = document.body.className).replace(e, "");
        document.body.className = t
    }

    function d(e) {
        e.style.display = "block", setTimeout(function() {
            e.style.opacity = 1
        }, 1)
    }

    function n(e) {
        e.style.opacity = "", setTimeout(function() {
            e.style.display = ""
        }, 200)
    }
    r = "iPhone" == navigator.userAgent.match(/iPhone/i) ? "iphone" : "", e = "iPod" == navigator.userAgent.match(/iPod/i) ? "ipod" : "", document.body.className += " " + r, document.body.className += " " + e;
    for (var t = document.querySelectorAll("a.astra-search-icon:not(.slide-search)"), a = 0; t.length > a; a++) t[a].onclick = function(e) {
        var t, a, o, n;
        if (e.preventDefault(), e = e || window.event, this.classList.contains("header-cover"))
            for (var s = document.querySelectorAll(".ast-search-box.header-cover"), c = astraAddon.is_header_builder_active || !1, r = 0; r < s.length; r++)
                for (var l = s[r].parentNode.querySelectorAll("a.astra-search-icon"), i = 0; i < l.length; i++) l[i] == this && (d(s[r]), s[r].querySelector("input.search-field").focus(), c ? (t = s[r], n = o = a = void 0, document.body.classList.contains("ast-header-break-point") && (n = document.querySelector(".main-navigation"), a = document.querySelector(".main-header-bar"), o = document.querySelector(".ast-mobile-header-wrap"), null !== a) && null !== n && (n = n.offsetHeight, a = a.offsetHeight, o = o.offsetHeight, n = n && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(n) - parseFloat(a) : parseFloat(a), t.parentNode.classList.contains("ast-mobile-header-wrap") && (n = parseFloat(o)), t.style.maxHeight = Math.abs(n) + "px")) : (a = s[r], t = o = void 0, document.body.classList.contains("ast-header-break-point") && (t = document.querySelector(".main-navigation"), null !== (o = document.querySelector(".main-header-bar"))) && null !== t && (t = t.offsetHeight, o = o.offsetHeight, t = t && !document.body.classList.contains("ast-no-toggle-menu-enable") ? parseFloat(t) - parseFloat(o) : parseFloat(o), a.style.maxHeight = Math.abs(t) + "px")));
        else this.classList.contains("full-screen") && (e = document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen") && (d(e), document.body.className += " full-screen", e.querySelector("input.search-field").focus())
    };
    for (var s = document.querySelectorAll(".ast-search-box .close"), a = 0, c = s.length; a < c; ++a) s[a].onclick = function(e) {
        e = e || window.event;
        for (var t = this;;) {
            if (t.parentNode.classList.contains("ast-search-box")) {
                n(t.parentNode), o("full-screen");
                break
            }
            if (t.parentNode.classList.contains("site-header")) break;
            t = t.parentNode
        }
    };
    document.onkeydown = function(e) {
        if (27 == e.keyCode)
            for (var e = document.getElementById("ast-seach-full-screen-form"), t = (null != e && (n(e), o("full-screen")), document.querySelectorAll(".ast-search-box.header-cover")), a = 0; a < t.length; a++) n(t[a])
    }, window.addEventListener("resize", function() {
        if ("BODY" === document.activeElement.tagName && "INPUT" != document.activeElement.tagName) {
            var e = document.querySelectorAll(".ast-search-box.header-cover");
            if (!document.body.classList.contains("ast-header-break-point"))
                for (var t = 0; t < e.length; t++) e[t].style.maxHeight = "", e[t].style.opacity = "", e[t].style.display = ""
        }
    });
    var r = document.getElementById("close");
    r && r.addEventListener("keydown", function(e) {
        "Enter" === e.key ? (e.preventDefault(), this.click()) : "Tab" === e.key && e.preventDefault()
    })
}();