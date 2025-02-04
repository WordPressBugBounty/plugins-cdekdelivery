(()=>{"use strict";var e={698:(e,t)=>{var n=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function r(e,t,o){var r=null;if(void 0!==o&&(r=""+o),void 0!==t.key&&(r=""+t.key),"key"in t)for(var c in o={},t)"key"!==c&&(o[c]=t[c]);else o=t;return t=o.ref,{$$typeof:n,type:e,key:r,ref:void 0!==t?t:null,props:o}}t.Fragment=o,t.jsx=r,t.jsxs=r},848:(e,t,n)=>{e.exports=n(698)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const o=window.jQuery;var r=n.n(o);const c=window.wp.i18n,i=window.lodash,l=window.wp.element,s=window.wc.wcSettings;var a=n(848);const d=({rules:e,onRulesUpdate:t})=>{const n=(n,o)=>{e[o].to=parseInt(n.target.value),e.forEach(((t,n)=>{0!==n&&null!==t.to&&t.to<=e[n-1].to&&(e[n].to=e[n-1].to+1)})),t([...e])},o=(0,l.useCallback)((0,i.debounce)(n,4e3),[e]),r=(n,o)=>{e[o].value=n.target.value,t([...e])},d=(0,l.useCallback)((0,i.debounce)(r,4e3),[e]);return e.map(((i,l)=>(0,a.jsxs)("div",{children:[(0,c.__)("Order price","cdekdelivery")," ",e[l-1]&&(0,a.jsx)(a.Fragment,{children:(0,c.sprintf)((0,c.__)("from %s%s","cdekdelivery"),e[l-1].to,s.CURRENCY.symbol)})," ",i.to&&(0,a.jsxs)(a.Fragment,{children:[(0,c.__)("less or equal","cdekdelivery"),(0,a.jsx)("input",{defaultValue:i.to,min:e[l-1]?e[l-1].to+1:0,type:"number",onBlur:e=>n(e,l),onInput:e=>o(e,l)}),s.CURRENCY.symbol]})," ",1===e.length&&(0,a.jsx)(a.Fragment,{children:(0,c.__)("any","cdekdelivery")}),", ",(0,c.__)("delivery price","cdekdelivery"),(0,a.jsxs)("select",{onChange:n=>((n,o)=>{e[o].type=n.target.value,t([...e])})(n,l),className:"cdek-selector",defaultValue:i.type,children:[(0,a.jsx)("option",{value:"free",children:(0,c.__)("free","cdekdelivery")}),(0,a.jsx)("option",{value:"percentage",children:(0,c.__)("percentage","cdekdelivery")}),(0,a.jsx)("option",{value:"fixed",children:(0,c.__)("fixed on","cdekdelivery")}),(0,a.jsx)("option",{value:"amount",children:(0,c.__)("amount on","cdekdelivery")})]}),"free"!==i.type&&(0,a.jsx)("input",{defaultValue:i.value,type:"number",min:"amount"===i.type?null:0,onBlur:e=>r(e,l),onInput:e=>d(e,l)}),"percentage"===i.type&&(0,a.jsx)(a.Fragment,{children:"%"}),("amount"===i.type||"fixed"===i.type)&&(0,a.jsx)(a.Fragment,{children:s.CURRENCY.symbol}),0!==l&&(0,a.jsx)("span",{className:"button button-link-delete",onClick:()=>(n=>{n===e.length-1&&(e[n-1].to=null),t(e.filter(((e,t)=>t!==n)))})(l),children:"-"})]},i.to+i.value+i.type+l)))},u=({input:e})=>{const[t,n]=(0,l.useState)([]),[o,r]=(0,l.useState)([]),s=(0,l.useCallback)((0,i.debounce)(((t,n)=>{e.val(JSON.stringify({door:t,office:n}))}),300),[]);return(0,l.useEffect)((()=>{s(t,o)}),[t,o]),(0,l.useEffect)((()=>{try{const t=JSON.parse(e.val());n(t.door),r(t.office)}catch(e){n([{to:null,type:"percentage",value:100}]),r([{to:null,type:"percentage",value:100}])}}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"cdek-delivery-rules",children:[(0,a.jsxs)("div",{className:"cdek-header",children:[(0,a.jsx)("h4",{children:(0,c.__)("Rules for delivery by courier","cdekdelivery")}),(0,a.jsx)("span",{className:"button",onClick:()=>{t[t.length-1].to=(t[t.length-2]||{to:0}).to+1,n([...t,{to:null,type:"percentage",value:100}])},children:"+"})]}),(0,a.jsx)(d,{rules:t,onRulesUpdate:n}),(0,a.jsxs)("div",{className:"cdek-header",children:[(0,a.jsx)("h4",{children:(0,c.__)("Rules for delivery to pick-up","cdekdelivery")}),(0,a.jsx)("span",{className:"button",onClick:()=>{o[o.length-1].to=(o[o.length-2]||{to:0}).to+1,r([...o,{to:null,type:"percentage",value:100}])},children:"+"})]}),(0,a.jsx)(d,{rules:o,onRulesUpdate:r})]})})},p=window.wp.apiFetch;var v=n.n(p);const y=window.wp.url;(()=>{const e=(0,i.debounce)((e=>v()({url:(0,y.addQueryArgs)(ajaxurl,{action:`${window.cdek.prefix}-cities`,_wpnonce:window.cdek.nonce,q:e})}).then((e=>{0!==e.data.length?(r()(".city-suggest__404").remove(),r()(".city-suggest__item").remove(),e.data.forEach((e=>{r()(".city-suggest").append(r()('<div class="city-suggest__item"></div>').html(e.full_name).on("click",(()=>{r()("input#woocommerce_official_cdek_city").val(e.full_name.split(",",2)[0]),r()("input#woocommerce_official_cdek_city_code").val(e.code),r()(".city-suggest").remove()})))}))):r()(".city-suggest").append('<div class="city-suggest__404">'+(0,c.__)("Nothing found","cdekdelivery")+"</div>")})).catch((()=>{r()(".city-suggest__404").remove(),r()(".city-suggest__item").remove(),r()(".city-suggest").append('<div class="city-suggest__404">'+(0,c.__)("Temporal error, try again","cdekdelivery")+"</div>")})).finally((()=>r()(".city-loader").remove()))),900);r()("input#woocommerce_official_cdek_city").on("input",(function(){r()(".city-suggest").remove(),r()(".city-loader").remove(),r()(this).after('<div class="city-suggest"></div>').after('<span class="city-loader"></span>'),e(this.value)}));const t=r()("input#woocommerce_official_cdek_delivery_price_rules");if(t.length){const e=window.document.createElement("div");if(t.after(e),void 0!==l.createRoot){const n=(0,l.createRoot)(e);void 0!==n&&"function"==typeof n.render?n.render((0,a.jsx)(u,{input:t})):(0,l.render)((0,a.jsx)(u,{input:t}),e)}else(0,l.render)((0,a.jsx)(u,{input:t}),e)}const n=r()("#woocommerce_official_cdek_services_ban_attachment_inspection"),o=r()("#woocommerce_official_cdek_services_trying_on"),s=r()("#woocommerce_official_cdek_services_part_deliv");function d(e,t){e.prop("checked")?(t.prop("checked",!1),t.prop("disabled",!0)):t.prop("disabled",!1)}function p(e,t){e[0].prop("checked")||e[1].prop("checked")?(t.prop("checked",!1),t.prop("disabled",!0)):t.prop("disabled",!1)}d(n,o.add(s)),p([o,s],n),n.change((function(){d(r()(this),o.add(s))})),o.change((function(){p([r()(this),s],n)})),s.change((function(){p([r()(this),o],n)}))})()})();