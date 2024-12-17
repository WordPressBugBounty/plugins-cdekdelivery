(()=>{"use strict";var e={n:o=>{var t=o&&o.__esModule?()=>o.default:()=>o;return e.d(t,{a:t}),t},d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)};const o=window.jQuery;var t=e.n(o);const n=window.CDEKWidget;var i=e.n(n);const c=window.wp.i18n,d=window.lodash,a=t()("#billing_city"),l=t()("#shipping_city");let r,s=null;""===(a.val()||"")&&""===(l.val()||"")||(console.debug("[CDEK-MAP] City has value, initiating checkout update"),t()(document.body).trigger("update_checkout"));const p=(e,o=null)=>{if(console.debug("[CDEK-MAP] Removing selected office info"),t()(".cdek-office-info").remove(),e.find("a").html((0,c.__)("Choose pick-up","cdekdelivery")),t()(".cdek-office-code").val(""),null!==s&&s.clearSelection(),"string"==typeof o){console.debug("[CDEK-MAP] Rendering error message");const e=t()(".open-pvz-btn");e.prev().text(o),e.remove()}},u=(e,o,n)=>{t()(".cdek-office-code").val(n.code),r.find("a").html((0,c.__)("Re-select pick-up","cdekdelivery"));const i=r.parent().children(".cdek-office-info");0===i.length?r.before(t()('<div class="cdek-office-info"></div>').text(n.name)):i.text(n.name),window.cdek.close&&s.close()},g=(0,d.debounce)((()=>{""!==(t()("#ship-to-different-address-checkbox").is(":checked")?l.val():a.val())&&(console.debug("[CDEK-MAP] City or postcode changed, initiating checkout update"),t()(document.body).trigger("update_checkout"))}),500);t()(document.body).on("input","#billing_city, #billing_postcode, #shipping_city, #shipping_postcode",g).on("updated_checkout",(()=>{null!==s&&(console.debug("[CDEK-MAP] Clearing widget selection"),s.clearSelection())})).on("change",".shipping_method",(()=>t()(document.body).trigger("update_checkout"))).on("click",".open-pvz-btn",null,(e=>{r="A"===e.target.tagName?t()(e.target.parentElement):t()(e.target),p(r);try{const e=JSON.parse(r.find("script").text());if(console.debug("[CDEK-MAP] Got points from backend",e),!e.length)return console.warn("[CDEK-MAP] Backend points are empty"),void p(r,(0,c.__)("There are no CDEK pick-up points available in this direction, please select another delivery method","cdekdelivery"));null===s?s=new(i())({apiKey:window.cdek.key,popup:!0,debug:!0,lang:window.cdek.lang,defaultLocation:r.data("city"),officesRaw:e,hideDeliveryOptions:{door:!0},onChoose:u}):(s.updateOfficesRaw(e),s.updateLocation(r.data("city"))),s.open()}catch(e){console.error("[CDEK-MAP] SyntaxError during points parse"),p(r,(0,c.__)("There are no CDEK pick-up points available in this direction, please select another delivery method","cdekdelivery"))}}))})();