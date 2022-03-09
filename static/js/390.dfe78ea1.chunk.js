"use strict";(self.webpackChunkmysite_dev=self.webpackChunkmysite_dev||[]).push([[390,6403,4638,7930,2471,9649,8409,1862],{56403:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});n(72791),n(54638);var r=n(80184);function a(e){var t=e.code,n=e.iconClassName,a=void 0===n?"":n,o=e.wrapperClassName,u=void 0===o?"":o;return(0,r.jsx)("span",{className:u,children:(0,r.jsx)("i",{className:"countryFlagSprite countryFlag-".concat(t.toLowerCase()," ").concat(a)})})}},92471:function(e,t,n){n.r(t),n.d(t,{currencyAllUnitsMap:function(){return r},defaultInputCode:function(){return a},defaultTargetCode:function(){return o},defaultFavorites:function(){return u},defaults:function(){return s}});var r={INR:{name:"Indian Rupee",symbol:"\u20b9",altCode:"IN"},USD:{name:"US Dollar",symbol:"$",altCode:"US"},EUR:{name:"Euro",symbol:"\u20ac",altCode:"EU"},NZD:{name:"New Zealand Dollar",symbol:"$",altCode:"NZ"},AED:{name:"UAE Dirham",symbol:"\u062f.\u0625",altCode:"AE"},QAR:{name:"Qatari Riyal",symbol:"\u0631.\u0642",altCode:"QA"},JPY:{name:"Japanese Yen",symbol:"\xa5",altCode:"JP"},GBP:{name:"Great British Pound",symbol:"\xa3",altCode:"GB"},RUB:{name:"Russian Ruble",symbol:"\u20bd",altCode:"RU"},CNY:{name:"Chinese Yuan",symbol:"\u5143",altCode:"CN"},AUD:{name:"Australian Dollar",symbol:"$",altCode:"AU"},CAD:{name:"Canadian Dollar",symbol:"$",altCode:"CA"}},a="INR",o="USD",u=Object.keys(r),s={inputCode:"INR",targetCode:"USD",favoriteCodes:Object.keys(r)}},90930:function(e,t,n){n.r(t),n.d(t,{fetchCurrencyExData:function(){return d}});var r=n(15861),a=n(87757),o=n.n(a),u=n(7370),s=n(98409),c=n(89352),i=n(1862),l=n(59649);function d(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=JSON.parse(null!==(t=c.LocalStorage.getItem(u.webStorage.currencyExData))&&void 0!==t?t:"null"))&&!((0,s.getTimetamp)()>r.timeNextUpdate)){e.next=6;break}return e.next=4,(0,l.default)({method:l.T_HTTPMethod.GET,endpoint:u.API.currencyEx});case 4:(a=e.sent).result&&(r=(0,i.mapCurrencyExRateResponse)(a.result),c.LocalStorage.setItem(u.webStorage.currencyExData,JSON.stringify(r)));case 6:return e.abrupt("return",null===(n=r)||void 0===n?void 0:n.conversionRates);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},59649:function(e,t,n){n.r(t),n.d(t,{T_HTTPMethod:function(){return r},getQueryParams:function(){return s},default:function(){return c}});var r,a=n(15861),o=n(87757),u=n.n(o);!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.PATCH="PATCH",e.DELETE="DELETE"}(r||(r={}));var s=function(e){return Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")};function c(e){return i.apply(this,arguments)}function i(){return(i=(0,a.Z)(u().mark((function e(t){var n,a,o,c,i,l,d,f,p,m;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.method,a=t.endpoint,o=t.params,c=t.headers,i=t.body,l=t.rawBody,d=a,o&&(d+=(-1===d.indexOf("?")?"?":"&")+s(o)),f={headers:c,method:n,credentials:"same-origin",mode:"cors"},n!==r.GET&&(l||i)&&(f.body=l||JSON.stringify(i)),e.prev=5,e.next=8,fetch(d,f);case 8:if(p=e.sent,!(p.headers.get("Content-Type")||"").includes("application/json")){e.next=16;break}return e.next=13,p.json();case 13:m=e.sent,e.next=17;break;case 16:m=p;case 17:if(!(p.status>=400)){e.next=24;break}if(e.t0=m,e.t0){e.next=23;break}return e.next=22,p.text();case 22:e.t0=e.sent;case 23:throw e.t0;case 24:return e.abrupt("return",{result:m});case 27:return e.prev=27,e.t1=e.catch(5),e.abrupt("return",{error:e.t1 instanceof Error?e.t1.message:e.t1});case 30:case"end":return e.stop()}}),e,null,[[5,27]])})))).apply(this,arguments)}},98409:function(e,t,n){function r(){return Math.floor(+Date.now()/1e3)}n.r(t),n.d(t,{getTimetamp:function(){return r}})},1862:function(e,t,n){function r(e){return{baseCode:e.base_code,conversionRates:e.conversion_rates,timeLastUpdate:e.time_last_update_unix,timeNextUpdate:e.time_next_update_unix}}n.r(t),n.d(t,{mapCurrencyExRateResponse:function(){return r}})},23715:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(15861),a=n(29439),o=n(87757),u=n.n(o),s=n(72791),c=n(15260),i=n(92471),l=n(90930),d=n(56403),f=n(80184);function p(){var e=(0,s.useState)(),t=(0,a.Z)(e,2),n=t[0],o=t[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.fetchCurrencyExData)();case 2:(t=e.sent)&&o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),n?(0,f.jsx)(c.default,{allUnitsMap:i.currencyAllUnitsMap,conversionRates:n,defaults:i.defaults,UnitIconComponent:d.default}):null}},54638:function(e,t,n){n.r(t),t.default={}}}]);
//# sourceMappingURL=390.dfe78ea1.chunk.js.map