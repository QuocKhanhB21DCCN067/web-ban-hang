! function() {
    "use strict";
    var e, t = {
            462: function() {
                var e = window.wp.element,
                    t = window.wp.i18n;
                const a = e => {
                        window.postMessage({
                            call: "showcaseCTAPreviewDispatch",
                            value: e
                        }, "*")
                    },
                    n = [{
                        id: "0",
                        "body-font-family": "'Source Sans Pro', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Playfair Display', serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "1",
                        "body-font-family": "'Lato', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Poppins', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "2",
                        "body-font-family": "'Lato', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 17,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Montserrat', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "3",
                        "body-font-family": "'Karla', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 17,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Rubik', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "4",
                        "body-font-family": "'Roboto', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Roboto Condensed', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "5",
                        "body-font-family": "'Inter', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 17,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Merriweather', serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "6",
                        "body-font-family": "'Open Sans', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Vollkorn', serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }, {
                        id: "7",
                        "body-font-family": "'Work Sans', sans-serif",
                        "body-font-variant": "",
                        "body-font-weight": 400,
                        "font-size-body": {
                            desktop: 16,
                            tablet: "",
                            mobile: "",
                            "desktop-unit": "px",
                            "tablet-unit": "px",
                            "mobile-unit": "px"
                        },
                        "body-line-height": "",
                        "headings-font-family": "'Open Sans', sans-serif",
                        "headings-font-weight": 700,
                        "headings-line-height": "",
                        "headings-font-variant": ""
                    }],
                    s = JSON.parse(localStorage.getItem("showcase-cta-preview-data"));
                let o = "",
                    i = "";
                if (s && s.url === showcaseCTA.path) {
                    if (s.data.siteTypography) {
                        const e = n.find((e => e["headings-font-family"] === s.data.siteTypography["headings-font-family"]));
                        i = e && e.id
                    }
                    o = s.data.colorPalette && s.data.colorPalette.slug
                }
                const l = {
                    sidebarOpen: !1,
                    selectedTypographyIndex: i,
                    typography: {},
                    selectedColorPallete: o,
                    activePalette: {},
                    firstTimeShown: !1
                };
                const r = (0, e.createContext)(),
                    d = () => (0, e.useContext)(r),
                    c = [{
                        slug: "style-1",
                        title: (0, t.__)("Style 1", "astra-sites"),
                        colors: ["#8E43F0", "#7215EA", "#FFFFFF", "#EEEBF4", "#150E1F", "#494153", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-2",
                        title: (0, t.__)("Style 2", "astra-sites"),
                        colors: ["#EF4D48", "#D90700", "#FFFFFF", "#EEEAEC", "#2B161B", "#3C2F32", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-3",
                        title: (0, t.__)("Style 3", "astra-sites"),
                        colors: ["#FF42B3", "#FF0099", "#FFFFFF", "#EEEAEC", "#2B161B", "#3C2F32", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-4",
                        title: (0, t.__)("Style 4", "astra-sites"),
                        colors: ["#FF6A97", "#FA036B", "#FFFFFF", "#EEEAEC", "#2B161B", "#3C2F32", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-5",
                        title: (0, t.__)("Style 5", "astra-sites"),
                        colors: ["#FF7A3D", "#FF5100", "#FFFFFF", "#F1EDEB", "#1E1810", "#443D3A", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-6",
                        title: (0, t.__)("Style 6", "astra-sites"),
                        colors: ["#F9C349", "#FFB100", "#FFFFFF", "#F0EFEC", "#1E1810", "#4D4A46", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-7",
                        title: (0, t.__)("Style 7", "astra-sites"),
                        colors: ["#30C7B5", "#00AC97", "#FFFFFF", "#F0EFEC", "#1E1810", "#4D4A46", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-8",
                        title: (0, t.__)("Style 8", "astra-sites"),
                        colors: ["#1BAE70", "#06752E", "#FFFFFF", "#EBECEB", "#14261C", "#3D4641", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-9",
                        title: (0, t.__)("Style 9", "astra-sites"),
                        colors: ["#2FE6FF", "#00D0EC", "#FFFFFF", "#E8EBEC", "#101218", "#3B4244", "#000000", "#4B4F58", "#F6F7F8"]
                    }, {
                        slug: "style-10",
                        title: (0, t.__)("Style 10", "astra-sites"),
                        colors: ["#4175FC", "#084AF3", "#FFFFFF", "#E8EBEC", "#101218", "#3B4244", "#000000", "#4B4F58", "#F6F7F8"]
                    }],
                    m = [{
                        slug: "style-1",
                        title: (0, t.__)("Style 1", "astra-sites"),
                        colors: ["#0067FF", "#005EE9", "#0F172A", "#364151", "#E7F6FF", "#FFFFFF", "#D1DAE5", "#070614", "#222222"]
                    }, {
                        slug: "style-2",
                        title: (0, t.__)("Style 2", "astra-sites"),
                        colors: ["#54B435", "#379237", "#0F172A", "#2F3B40", "#EDFBE2", "#FFFFFF", "#D5EAD8", "#0C1406", "#222222"]
                    }, {
                        slug: "style-3",
                        title: (0, t.__)("Style 3", "astra-sites"),
                        colors: ["#DD183B", "#CC1939", "#0F172A", "#3A3A3A", "#FFEDE6", "#FFFFFF", "#FFD1BF", "#140609", "#222222"]
                    }, {
                        slug: "style-4",
                        title: (0, t.__)("Style 4", "astra-sites"),
                        colors: ["#FB5FAB", "#EA559D", "#0F172A", "#454F5E", "#FCEEF5", "#FFFFFF", "#FAD8E9", "#140610", "#222222"]
                    }, {
                        slug: "style-5",
                        title: (0, t.__)("Style 5", "astra-sites"),
                        colors: ["#FF6210", "#F15808", "#1C0D0A", "#353535", "#FEF1E4", "#FFFFFF", "#E5D7D1", "#140B06", "#222222"]
                    }, {
                        slug: "style-6",
                        title: (0, t.__)("Style 6", "astra-sites"),
                        colors: ["#6528F7", "#5511F8", "#0F172A", "#454F5E", "#F2F0FE", "#FFFFFF", "#D8D8F5", "#0D0614", "#222222"]
                    }, {
                        slug: "style-7",
                        title: (0, t.__)("Style 7", "astra-sites"),
                        colors: ["#FD9800", "#E98C00", "#0F172A", "#454F5E", "#FEF9E1", "#FFFFFF", "#F9F0C8", "#141006", "#222222"]
                    }, {
                        slug: "style-8",
                        title: (0, t.__)("Style 8", "astra-sites"),
                        colors: ["#1B9C85", "#178E79", "#0F172A", "#454F5E", "#EDF6EE", "#FFFFFF", "#D4F3D7", "#06140C", "#222222"]
                    }, {
                        slug: "style-9",
                        title: (0, t.__)("Style 9", "astra-sites"),
                        colors: ["#DCA54A", "#D09A40", "#0F172A", "#4A4A4A", "#FAF5E5", "#FFFFFF", "#F0E6C5", "#141004", "#222222"]
                    }, {
                        slug: "style-10",
                        title: (0, t.__)("Style 10", "astra-sites"),
                        colors: ["#3AA6B9", "#2997AA", "#0F172A", "#454F5E", "#E9F8F9", "#FFFFFF", "#CAE6E8", "#181823", "#222222"]
                    }];
                var f = window.React,
                    h = f.forwardRef((function({
                        title: e,
                        titleId: t,
                        ...a
                    }, n) {
                        return f.createElement("svg", Object.assign({
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: 1.5,
                            stroke: "currentColor",
                            "aria-hidden": "true",
                            ref: n,
                            "aria-labelledby": t
                        }, a), e ? f.createElement("title", {
                            id: t
                        }, e) : null, f.createElement("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        }))
                    })),
                    u = () => {
                        const [{
                            selectedColorPallete: n
                        }, s] = d(), [o, i] = (0, e.useState)([]), l = e => {
                            s({
                                type: "set",
                                selectedColorPallete: e.slug,
                                activePalette: e
                            }), a({
                                param: "colorPalette",
                                data: e
                            })
                        };
                        (0, e.useEffect)((() => {
                            const e = (e => {
                                let a = [];
                                if (e) {
                                    const n = e["astra-settings"]["global-color-palette"].palette || [];
                                    n && (a = [{
                                        slug: "default",
                                        title: (0, t.__)("DEFAULT COLORS", "astra-sites"),
                                        colors: n
                                    }])
                                }
                                return a
                            })(showcaseCTA.customizerData);
                            i(e)
                        }), []);
                        const r = "light" === showcaseCTA.templateColorScheme ? m : c,
                            f = (t, a) => (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                                className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === t.toLowerCase() ? "border border-gray-200" : ""),
                                style: {
                                    backgroundColor: t
                                }
                            }), (0, e.createElement)("div", {
                                className: "h-[16px] w-[16px] rounded-full " + ("#ffffff" === a.toLowerCase() ? "border border-gray-200" : ""),
                                style: {
                                    backgroundColor: a
                                }
                            }));
                        return (0, e.createElement)("div", {
                            className: "flex flex-col mt-4"
                        }, (0, e.createElement)("div", {
                            className: "flex align-center justify-between items-center mb-2"
                        }, (0, e.createElement)("p", {
                            className: "text-[14px] font-bold text-gray-800 m-0 leading-[27px]"
                        }, (0, t.__)("Try Other Colors", "astra-sites-server")), (0, e.createElement)("div", {
                            className: "text-[12px] text-gray-800 " + ("" === n || "default" === n ? "reset-btn opacity-40 cursor-not-allowed" : "reset-btn active cursor-pointer"),
                            onClick: () => {
                                s({
                                    type: "set",
                                    selectedColorPallete: "",
                                    activePalette: {}
                                }), a({
                                    param: "colorPalette",
                                    data: ""
                                })
                            }
                        }, (0, e.createElement)(h, {
                            className: "w-4"
                        }))), (0, e.createElement)("div", {
                            className: "grid grid-cols-4 pt-[5px] pb-[30px] gap-[10px] border-solid border-gray-300"
                        }, o.map(((t, a) => {
                            const s = t.colors[0] || "",
                                o = t.colors[1] || "";
                            return (0, e.createElement)("div", {
                                className: `flex justify-center items-center gap-3 text-body-text rounded-md border border-solid border-button-disabled h-9 w-full cursor-pointer\n                            ${""===n||"default"===n?"outline-1 outline outline-offset-2 outline-accent-st-secondary":""}\n\t\t\t\t\t\t\thover:transition-all hover:duration-300 hover:ease-linear`,
                                key: a,
                                onClick: () => l(t)
                            }, (0, e.createElement)("div", {
                                className: "flex gap-2"
                            }, f(s, o)))
                        })), r.map(((t, a) => {
                            const s = t.colors[0] || "",
                                o = t.colors[1] || "";
                            return (0, e.createElement)("div", {
                                className: `flex justify-center items-center gap-3 text-body-text rounded-md border border-solid border-button-disabled h-9 w-full cursor-pointer\n                            ${n===t.slug?"outline-1 outline outline-offset-2 outline-accent-st-secondary":""}\n\t\t\t\t\t\t\thover:transition-all hover:duration-300 hover:ease-linear`,
                                key: a,
                                onClick: () => l(t)
                            }, (0, e.createElement)("div", {
                                className: "flex gap-2"
                            }, f(s, o)))
                        }))))
                    };
                const p = {
                    customize: (0, e.createElement)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M7 0.25C3.2725 0.25 0.25 3.2725 0.25 7C0.25 10.7275 3.2725 13.75 7 13.75C7.6225 13.75 8.125 13.2475 8.125 12.625C8.125 12.3325 8.0125 12.07 7.8325 11.8675C7.66 11.6725 7.5475 11.41 7.5475 11.125C7.5475 10.5025 8.05 10 8.6725 10H10C12.07 10 13.75 8.32 13.75 6.25C13.75 2.935 10.7275 0.25 7 0.25ZM2.875 7C2.2525 7 1.75 6.4975 1.75 5.875C1.75 5.2525 2.2525 4.75 2.875 4.75C3.4975 4.75 4 5.2525 4 5.875C4 6.4975 3.4975 7 2.875 7ZM5.125 4C4.5025 4 4 3.4975 4 2.875C4 2.2525 4.5025 1.75 5.125 1.75C5.7475 1.75 6.25 2.2525 6.25 2.875C6.25 3.4975 5.7475 4 5.125 4ZM8.875 4C8.2525 4 7.75 3.4975 7.75 2.875C7.75 2.2525 8.2525 1.75 8.875 1.75C9.4975 1.75 10 2.2525 10 2.875C10 3.4975 9.4975 4 8.875 4ZM11.125 7C10.5025 7 10 6.4975 10 5.875C10 5.2525 10.5025 4.75 11.125 4.75C11.7475 4.75 12.25 5.2525 12.25 5.875C12.25 6.4975 11.7475 7 11.125 7Z",
                        fill: "#2563EB"
                    }), " "),
                    cart: (0, e.createElement)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M4.66666 11.0002C3.93332 11.0002 3.33999 11.6002 3.33999 12.3335C3.33999 13.0668 3.93332 13.6668 4.66666 13.6668C5.39999 13.6668 5.99999 13.0668 5.99999 12.3335C5.99999 11.6002 5.39999 11.0002 4.66666 11.0002ZM0.666656 0.333496V1.66683H1.99999L4.39999 6.72683L3.49999 8.36016C3.39332 8.54683 3.33332 8.76683 3.33332 9.00016C3.33332 9.7335 3.93332 10.3335 4.66666 10.3335H12.6667V9.00016H4.94666C4.85332 9.00016 4.77999 8.92683 4.77999 8.8335L4.79999 8.7535L5.39999 7.66683H10.3667C10.8667 7.66683 11.3067 7.3935 11.5333 6.98016L13.92 2.6535C13.9733 2.56016 14 2.44683 14 2.3335C14 1.96683 13.7 1.66683 13.3333 1.66683H3.47332L2.84666 0.333496H0.666656ZM11.3333 11.0002C10.6 11.0002 10.0067 11.6002 10.0067 12.3335C10.0067 13.0668 10.6 13.6668 11.3333 13.6668C12.0667 13.6668 12.6667 13.0668 12.6667 12.3335C12.6667 11.6002 12.0667 11.0002 11.3333 11.0002Z",
                        fill: "#2563EB"
                    }), " "),
                    questionMark: (0, e.createElement)("svg", {
                        width: "18",
                        height: "18",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8.75 13.25H7.25V11.75H8.75V13.25ZM10.3025 7.4375L9.6275 8.1275C9.0875 8.675 8.75 9.125 8.75 10.25H7.25V9.875C7.25 9.05 7.5875 8.3 8.1275 7.7525L9.0575 6.8075C9.335 6.5375 9.5 6.1625 9.5 5.75C9.5 4.925 8.825 4.25 8 4.25C7.175 4.25 6.5 4.925 6.5 5.75H5C5 4.0925 6.3425 2.75 8 2.75C9.6575 2.75 11 4.0925 11 5.75C11 6.41 10.73 7.01 10.3025 7.4375Z",
                        fill: "#2563EB"
                    }), " "),
                    reset: (0, e.createElement)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 10 10",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, " ", (0, e.createElement)("path", {
                        d: "M8.53033 1.46875C7.62351 0.5625 6.37899 0 4.99687 0C2.23265 0 0 2.2375 0 5C0 7.7625 2.23265 10 4.99687 10C7.32958 10 9.27455 8.40625 9.83114 6.25H8.53033C8.01751 7.70625 6.62914 8.75 4.99687 8.75C2.92683 8.75 1.24453 7.06875 1.24453 5C1.24453 2.93125 2.92683 1.25 4.99687 1.25C6.03502 1.25 6.9606 1.68125 7.63602 2.3625L5.62226 4.375H10V0L8.53033 1.46875Z",
                        fill: "black"
                    }), " "),
                    cross: (0, e.createElement)("svg", {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                        fill: "#6B7280"
                    }))
                };
                var g = () => {
                        const [{
                            sidebarOpen: t
                        }, a] = d(), n = {
                            customize: {
                                title: "Customize",
                                icon: p.customize,
                                onclick: () => {
                                    a({
                                        type: "set",
                                        sidebarOpen: !t
                                    })
                                }
                            }
                        };
                        return (0, e.createElement)("div", {
                            className: "flex flex-col shadow-customize-btn rounded-tl-sm rounded-bl-sm"
                        }, Object.keys(n).map(((a, s) => {
                            const {
                                title: o,
                                icon: i,
                                onclick: l,
                                className: r
                            } = n[a];
                            return (0, e.createElement)("div", {
                                key: s,
                                className: `${r||""} st-customize-btn-item relative flex align-center items-center rounded-tl-sm rounded-bl-sm bg-white p-4 border-none ${t?"text-white":"text-gray-800"} cursor-pointer`,
                                onClick: l
                            }, (0, e.createElement)("span", {
                                className: "flex items-center gap-3 pointer-events-none"
                            }, i, (0, e.createElement)("span", {
                                className: "text-[15px] normal-case leading-4 font-medium tracking-normal pointer-events-none font-DM-sans"
                            }, o)))
                        })))
                    },
                    y = ({
                        children: t,
                        content: a
                    }) => (0, e.createElement)("div", {
                        className: "stc-tooltip group relative"
                    }, t, a ? (0, e.createElement)("div", {
                        className: "text-[#ffffff] opacity-0 invisible group-hover:opacity-100 group-hover:visible stc-tooltip-content py-1.5 px-3 absolute right-0 top-[110%] z-100 bg-gray-800 font-normal leading-none text-center min-w-max rounded-sm text-xs shadow-typoTooltip "
                    }, a) : null);
                const F = (e, t) => {
                    if (!e) return "";
                    if (e) {
                        const a = e.match(/'([^']+)'/);
                        return a ? a[1] : "inherit" === e ? t : e
                    }
                    return t || void 0
                };
                var b = () => {
                        const [s] = (0, e.useState)(n), [o, i] = (0, e.useState)([]), [{
                            selectedTypographyIndex: l
                        }, r] = d(), c = (e => {
                            const t = {},
                                a = ["h1", "h2", "h3", "h4", "h5", "h6"];
                            if (e) {
                                const n = e["astra-settings"] || [];
                                a.forEach((e => {
                                    t["font-family-" + e] = n[`font-family-${e}`], t["font-weight-" + e] = n[`font-weight-${e}`], t["text-transform-" + e] = n[`text-transform-${e}`], t["line-height-" + e] = n[`line-height-${e}`]
                                }))
                            }
                            return t
                        })(showcaseCTA.customizerData), [m] = (0, e.useState)(c);
                        (0, e.useEffect)((() => {
                            const e = document.getElementById("google-fonts-url"),
                                t = [],
                                a = (e => {
                                    let t = {};
                                    if (e) {
                                        const a = e["astra-settings"] || [],
                                            n = a["headings-font-family"];
                                        t = {
                                            default: !0,
                                            "body-font-family": a["body-font-family"],
                                            "body-font-variant": a["body-font-variant"],
                                            "body-font-weight": a["body-font-weight"],
                                            "font-size-body": a["font-size-body"],
                                            "body-line-height": a["body-line-height"],
                                            "headings-font-family": n,
                                            "headings-font-weight": a["headings-font-weight"],
                                            "headings-line-height": a["headings-line-height"],
                                            "headings-font-variant": a["headings-font-variant"]
                                        }
                                    }
                                    return t
                                })(showcaseCTA.customizerData);
                            if (t.default = a, i(t), !document.getElementById("google-fonts-domain")) {
                                const e = document.createElement("link");
                                e.id = "google-fonts-domain", e.setAttribute("rel", "preconnect"), e.setAttribute("href", "https://fonts.gstatic.com"), document.head.appendChild(e)
                            }
                            e && e.remove();
                            const n = document.createElement("link");
                            n.id = "google-fonts-url", n.setAttribute("rel", "stylesheet");
                            const o = [];
                            let l = a["body-font-family"] || "",
                                r = parseInt(a["body-font-weight"]) || "";
                            r && (r = `:wght@${r}`), l && (l = F(l), l = l.replace(" ", "+"), o.push(`family=${l}${r}`));
                            let d = a["headings-font-family"] || "",
                                c = parseInt(a["headings-font-weight"]) || "";
                            c && (c = `:wght@${c}`), d && (d = F(d, l), d = d.replace(" ", "+"), o.push(`family=${d}${c}`));
                            let m = "";
                            if (s) {
                                for (const e of s) m += `&family=${F(e["headings-font-family"]).replaceAll(" ","+")}:wght@${e["headings-font-weight"]}&family=${F(e["body-font-family"]).replaceAll(" ","+")}:wght@${e["body-font-weight"]}`;
                                m = m.replace(/[&]{1}$/i, "")
                            }
                            if (o) {
                                const e = `https://fonts.googleapis.com/css2?${o.join("&")}${m}&display=swap`;
                                n.setAttribute("href", e), document.head.appendChild(n)
                            }
                        }), []);
                        const f = () => {
                            r({
                                type: "set",
                                selectedTypographyIndex: "",
                                typography: {}
                            }), a({
                                param: "siteTypography",
                                data: ""
                            })
                        };
                        return (0, e.createElement)("div", {
                            className: "flex flex-col border-b border-gray-200"
                        }, (0, e.createElement)("div", {
                            className: "flex align-center justify-between items-center mb-2"
                        }, (0, e.createElement)("p", {
                            className: "text-[14px] font-bold text-gray-800 m-0 leading-[27px]"
                        }, (0, t.__)("Try Other Fonts", "astra-sites-server")), (0, e.createElement)("div", {
                            className: "text-[12px] text-gray-800 " + ("" !== l ? "reset-btn active cursor-pointer" : "reset-btn opacity-40 cursor-not-allowed"),
                            onClick: f
                        }, (0, e.createElement)(h, {
                            className: "w-4"
                        }))), (0, e.createElement)("div", {
                            className: "flex flex-col pt-[5px] pb-[20px]"
                        }, (0, e.createElement)("ul", {
                            className: "grid grid-cols-4 gap-3 text-center list-none m-0 p-0"
                        }, Object.keys(o).map((a => {
                            const n = F(o[a]["body-font-family"]) || "",
                                s = F(o[a]["headings-font-family"], n) || "",
                                i = o[a]["body-font-weight"],
                                r = o[a]["headings-font-weight"];
                            return (0, e.createElement)(y, {
                                content: `${s} / ${n}`,
                                key: a
                            }, (0, e.createElement)("li", {
                                className: `border-solid border rounded border-gray-300 px-2 py-1 text-[20px] hover:border-blue-600 hover:cursor-pointer hover:text-blue-600 text-gray-800 transition duration-150 ease-in-out bg-st-background-secondary leading-[27px] ${""===l?"outline-1 outline outline-offset-2 outline-accent-st-secondary":""}\n\t\t\t\t\t\t\t\t\t\thover:transition-all hover:duration-200 hover:ease-linear flex place-content-center items-center`,
                                key: a,
                                tabIndex: "0",
                                title: `${s} / ${n}`,
                                onClick: f
                            }, (0, e.createElement)(e.Fragment, null, (0, e.createElement)("span", {
                                style: {
                                    fontFamily: s,
                                    fontWeight: r
                                },
                                className: "heading-font-preview"
                            }, (0, t.__)("A", "astra-sites-server")), (0, e.createElement)("span", {
                                style: {
                                    fontFamily: n,
                                    fontWeight: i
                                },
                                className: "body-font-preview"
                            }, (0, t.__)("a", "astra-sites-server")))))
                        })), Object.keys(n).map((s => {
                            const o = F(n[s]["body-font-family"]) || "",
                                i = F(n[s]["headings-font-family"], o) || "",
                                d = n[s]["body-font-weight"],
                                c = n[s]["headings-font-weight"],
                                f = n[s].id;
                            return (0, e.createElement)(y, {
                                content: `${i} / ${o}`,
                                key: f
                            }, (0, e.createElement)("li", {
                                className: `border-solid border rounded border-gray-300 px-2 py-1 text-[20px] hover:border-blue-600 hover:cursor-pointer hover:text-blue-600 text-gray-800 transition duration-150 ease-in-out bg-st-background-secondary leading-[27px] ${l===s?"outline-1 outline outline-offset-2 outline-accent-st-secondary":""}\n\t\t\t\t\t\t\t\t\thover:transition-all hover:duration-200 hover:ease-linear`,
                                key: f,
                                tabIndex: "0",
                                title: `${i} / ${o}`,
                                onClick: () => (e => {
                                    r({
                                        type: "set",
                                        selectedTypographyIndex: e,
                                        typography: n[e]
                                    });
                                    const t = m ? { ...n[e],
                                        ...m
                                    } : n[e];
                                    a({
                                        param: "siteTypography",
                                        data: JSON.parse(JSON.stringify(t))
                                    })
                                })(s)
                            }, (0, e.createElement)(e.Fragment, null, (0, e.createElement)("span", {
                                style: {
                                    fontFamily: i,
                                    fontWeight: c
                                },
                                className: "heading-font-preview"
                            }, (0, t.__)("A", "astra-sites-server")), (0, e.createElement)("span", {
                                style: {
                                    fontFamily: o,
                                    fontWeight: d
                                },
                                className: "body-font-preview"
                            }, (0, t.__)("a", "astra-sites-server")))))
                        })))))
                    },
                    v = () => {
                        const [{
                            sidebarOpen: a,
                            firstTimeShown: n
                        }, s] = d(), [o, i] = (0, e.useState)("translate-x-[101%]"), l = (0, e.useRef)();
                        (0, e.useEffect)((() => (document.addEventListener("click", r, !1), () => {
                            document.removeEventListener("click", r, !1)
                        })), [a]);
                        const r = e => {
                            l.current && !l.current.contains(e.target) && s({
                                type: "set",
                                sidebarOpen: !1
                            })
                        };
                        return (0, e.useEffect)((() => {
                            n || setTimeout((() => {
                                s({
                                    type: "set",
                                    firstTimeShown: !0
                                }), i("translate-x-0")
                            }), 1e3), n && (setTimeout((() => {
                                i("translate-x-[86px]")
                            }), 50), a || setTimeout((() => {
                                i("translate-x-0")
                            }), 500))
                        }), [a]), (0, e.createElement)("div", {
                            className: "fixed overflow-hidden z-100",
                            "aria-labelledby": "slide-over-title",
                            role: "dialog",
                            "aria-modal": "true",
                            ref: l
                        }, (0, e.createElement)("div", {
                            className: "absolute overflow-hidden"
                        }, (0, e.createElement)("div", {
                            className: "absolute",
                            "aria-hidden": "true"
                        }, (0, e.createElement)("div", {
                            className: `fixed inset-y-0 right-0 pl-[40px] flex w-screen max-w-[368px] transform transition ease-in-out duration-400 sm:duration-500 ${a?"translate-x-0":"translate-x-[101%]"} `
                        }, (0, e.createElement)("div", {
                            className: `absolute top-1/3 ${a?"left-[-90px]":"left-[-135px]"} z-1 bg-white rounded-tl-sm rounded-bl-sm hover:rounded-tl-sm hover:rounded-bl-sm transform transition linear duration-400 sm:duration-500 ${o}`
                        }, (0, e.createElement)(g, null)), (0, e.createElement)("div", {
                            className: "h-full flex flex-col bg-white overflow-y-auto shadow-sidebar"
                        }, (0, e.createElement)("div", {
                            className: "py-[20px] px-[25px] shadow-templateName flex items-center justify-between z-[3] leading-none"
                        }, (0, e.createElement)("div", {
                            className: "flex"
                        }, (0, e.createElement)("p", {
                            className: "text-[18px] font-semibold text-gray-600 m-0",
                            id: "slide-over-title"
                        }, showcaseCTA.templateName)), (0, e.createElement)("div", {
                            className: "close-sidebar-btn cursor-pointer border-solid border rounded-sm border-gray-300 p-[6px] hover:border-gray-800",
                            onClick: () => {
                                s({
                                    type: "set",
                                    sidebarOpen: !1
                                })
                            }
                        }, (0, e.createElement)("span", {
                            className: "flex items-center"
                        }, p.cross))), (0, e.createElement)("div", {
                            className: "flex justify-between flex-col h-full z-[2] bg-white"
                        }, (0, e.createElement)("div", {
                            className: "px-6 pt-6 main-content"
                        }, (0, e.createElement)("p", {
                            className: "text-[14px] text-gray-800 mb-[24px] leading-[27px]"
                        }, (0, t.__)("Use the template as-is or try different colors and fonts from the options below.", "astra-sites-server")), (0, e.createElement)(b, null), ["gutenberg", "elementor"].includes(showcaseCTA.pageBuilder[0]) && (0, e.createElement)(u, null)), "template" === ("customize", new URLSearchParams(window.location.search).get("customize") || "") && (0, e.createElement)("div", {
                            className: "px-5 py-3 shadow-show-templates-btn"
                        }, (0, e.createElement)("div", {
                            className: "flex place-content-center place-items-center bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium px-9 py-2.5 rounded text-[15px] mb-2.5 hover:transition-all hover:duration-100 hover:ease-linear leading-[27px]",
                            onClick: () => {
                                window.open(`https://wpastra.com/essential-toolkit-pricing/?utm_source=${showcaseCTA.templateName}&utm_medium=websitedemos&utm_campaign=templatecustomizer`, "_blank")
                            }
                        }, (0, t.__)("Buy Now", "astra-sites-server")), (0, e.createElement)("div", {
                            className: "flex place-content-center place-items-center bg-white cursor-pointer text-blue-600 hover:text-white hover:bg-blue-600 font-medium px-5 py-[0.525rem] rounded text-[13px] hover:transition-all hover:duration-100 hover:ease-linear border border-blue-600 leading-[27px]",
                            onClick: () => {
                                window.open(`https://wpastra.com/docs/getting-started-with-starter-templates/?utm_source=${showcaseCTA.templateName}&utm_medium=websitedemos&utm_campaign=templatecustomizer`, "_blank")
                            }
                        }, (0, t.__)("Learn how to use this template", "astra-sites-server")))))))))
                    };
                const E = document.getElementById("showcase-cta-entry-root"),
                    x = (0, e.createElement)((({
                        reducer: t,
                        initialState: a,
                        children: n
                    }) => (0, e.createElement)(r.Provider, {
                        value: (0, e.useReducer)(t, a)
                    }, n)), {
                        reducer: (e = l, {
                            type: t,
                            ...a
                        }) => "set" === t ? { ...e,
                            ...a
                        } : e,
                        initialState: l
                    }, (0, e.createElement)((() => ((0, e.useEffect)((() => {
                        if (showcaseCTA.isMainSite) {
                            document.querySelector("body").classList.remove("showcase-cta-preview-palette");
                            const e = document.getElementsByClassName("showcase-cta-preview-palette");
                            e.length > 0 && e[0].remove();
                            const t = document.getElementById("showcase-cta-typography");
                            t && t.remove(), localStorage.removeItem("showcase-cta-preview-data")
                        }
                    }), []), showcaseCTA.isMainSite ? null : (0, e.createElement)(v, null))), null));
                e.createRoot ? (0, e.createRoot)(E).render(x) : (0, e.render)(x, E)
            }
        },
        a = {};

    function n(e) {
        var s = a[e];
        if (void 0 !== s) return s.exports;
        var o = a[e] = {
            exports: {}
        };
        return t[e](o, o.exports, n), o.exports
    }
    n.m = t, e = [], n.O = function(t, a, s, o) {
            if (!a) {
                var i = 1 / 0;
                for (c = 0; c < e.length; c++) {
                    a = e[c][0], s = e[c][1], o = e[c][2];
                    for (var l = !0, r = 0; r < a.length; r++)(!1 & o || i >= o) && Object.keys(n.O).every((function(e) {
                        return n.O[e](a[r])
                    })) ? a.splice(r--, 1) : (l = !1, o < i && (i = o));
                    if (l) {
                        e.splice(c--, 1);
                        var d = s();
                        void 0 !== d && (t = d)
                    }
                }
                return t
            }
            o = o || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
            e[c] = [a, s, o]
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {
                179: 0,
                278: 0
            };
            n.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, a) {
                    var s, o, i = a[0],
                        l = a[1],
                        r = a[2],
                        d = 0;
                    if (i.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (s in l) n.o(l, s) && (n.m[s] = l[s]);
                        if (r) var c = r(n)
                    }
                    for (t && t(a); d < i.length; d++) o = i[d], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return n.O(c)
                },
                a = self.webpackChunkastra_sites_server = self.webpackChunkastra_sites_server || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        }();
    var s = n.O(void 0, [278], (function() {
        return n(462)
    }));
    s = n.O(s)
}();