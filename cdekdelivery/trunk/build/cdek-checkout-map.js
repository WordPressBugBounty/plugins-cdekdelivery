(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.jQuery;var o=e.n(t);const n=window.CDEKWidget;var i=e.n(n);const c=window.wp.i18n,d=window.lodash,r=o()("#billing_city"),a=o()("#shipping_city"),l="aria-small";let s,p,u,g=null;""===(r.val()||"")&&""===(a.val()||"")||(console.debug("[CDEK-MAP] City has value, initiating checkout update"),o()(document.body).trigger("update_checkout"));const h=(e,t=null)=>{if(console.debug("[CDEK-MAP] Removing selected office info"),o()(".cdek-office-info").remove(),e.find("a").html((0,c.__)("Choose pick-up","cdekdelivery")),o()(".cdek-office-code").val(""),null!==g&&g.clearSelection(),"string"==typeof t){console.debug("[CDEK-MAP] Rendering error message");const e=o()(".open-pvz-btn");e.prev().text(t),e.remove()}},f=(e,t,n)=>{o()(".cdek-office-code").val(n.code),u.find("a").html((0,c.__)("Re-select pick-up","cdekdelivery"));const i=u.parent().children(".cdek-office-info");0===i.length?u.before(o()('<div class="cdek-office-info"></div>').text(n.name)):i.text(n.name),window.cdek.close&&g.close()},v=(0,d.debounce)((()=>{""!==(o()("#ship-to-different-address-checkbox").is(":checked")?a.val():r.val())&&(console.debug("[CDEK-MAP] City or postcode changed, initiating checkout update"),o()(document.body).trigger("update_checkout"))}),500),b=new ResizeObserver((e=>{for(const t of e)"contentRect"in t&&"target"in t&&(t.contentRect.width<160?p&&(p=!1,s=!0):p||(p=!0,s=!0),s&&(p?t.target.hasAttribute(l)&&t.target.removeAttribute(l):t.target.hasAttribute(l)||t.target.setAttribute(l,""),s=!1))}));o()(document.body).on("input","#billing_city, #billing_postcode, #shipping_city, #shipping_postcode",v).on("updated_checkout",(()=>{const e=document.querySelector(".open-pvz-btn");null!==g&&(console.debug("[CDEK-MAP] Clearing widget selection"),g.clearSelection()),e&&(s=!1,p=!0,b.observe(e))})).on("change",".shipping_method",(()=>o()(document.body).trigger("update_checkout"))).on("click",".open-pvz-btn",null,(e=>{u="A"===e.target.tagName?o()(e.target.parentElement):o()(e.target),h(u);try{const e=JSON.parse(u.find("script").text());if(console.debug("[CDEK-MAP] Got points from backend",e),!e.length)return console.warn("[CDEK-MAP] Backend points are empty"),void h(u,(0,c.__)("There are no CDEK pick-up points available in this direction, please select another delivery method","cdekdelivery"));null===g?g=new(i())({apiKey:window.cdek.key,popup:!0,debug:!0,lang:window.cdek.lang,defaultLocation:u.data("city"),officesRaw:e,hideDeliveryOptions:{door:!0},onChoose:f}):(g.updateOfficesRaw(e),g.updateLocation(u.data("city"))),g.open()}catch(e){console.error("[CDEK-MAP] SyntaxError during points parse"),h(u,(0,c.__)("There are no CDEK pick-up points available in this direction, please select another delivery method","cdekdelivery"))}}))})();