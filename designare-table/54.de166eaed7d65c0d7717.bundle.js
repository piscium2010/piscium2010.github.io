(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=[{name:"UnitedHealth Group Inc.",last:243.67,chg:6.68,chgp:2.82},{name:"Walgreens Boots Alliance Inc.",last:55.94,chg:1.28,chgp:2.34},{name:"Dow Inc.",last:47.81,chg:.69,chgp:1.46},{name:"Caterpillar Inc.",last:131.04,chg:1.88,chgp:1.46},{name:"American Express Co.",last:119.1,chg:1.69,chgp:1.44},{name:"Walt Disney Co.",last:132.37,chg:1.51,chgp:1.15},{name:"United Technologies Corp.",last:138.17,chg:1.46,chgp:1.07},{name:"3M Co.",last:163.54,chg:1.36,chgp:.84},{name:"Johnson & Johnson",last:136.17,chg:1,chgp:.74},{name:"Nike Inc. Cl B",last:95.56,chg:.68,chgp:.72},{name:"Coca-Cola Co.",last:53.79,chg:.3,chgp:.56},{name:"JPMorgan Chase & Co.",last:120.35,chg:.67,chgp:.56},{name:"Cisco Systems Inc.",last:47.03,chg:.24,chgp:.51},{name:"Apple Inc.",last:235.28,chg:.91,chgp:.39},{name:"Home Depot Inc.",last:236.77,chg:.87,chgp:.37},{name:"Walmart Inc.",last:119.84,chg:.42,chgp:.35},{name:"Pfizer Inc.",last:36.46,chg:.12,chgp:.33}],s=function(e,t){return new Promise((function(a){setTimeout((function(){var n=(e-1)*t,r=Math.min(p.length,n+t),c=p.slice(n,r);a({data:c,total:p.length})}),1e3)}))};t.default=function(){var e=g(Object(n.useState)(!0),2),t=e[0],a=e[1],c=g(Object(n.useState)({pageNo:1,pageSize:5,total:0,data:[]}),2),p=c[0],h=c[1];return Object(n.useEffect)((function(){s(p.pageNo,p.pageSize).then((function(e){var t=e.data,n=e.total;h(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},p,{data:t,total:n})),a(!1)}))}),[]),r.a.createElement(o.a,{columns:[{Header:"COMPANY",dataKey:"name"},{Header:"LAST",dataKey:"last"},{Header:"CHG",dataKey:"chg"},{Header:"CHG%",dataKey:"chgp"}],data:p.data,pageSize:p.pageSize,pageSizeOptions:[5,10],pageNo:p.pageNo,total:p.total,loading:t,onChangePaging:function(e){var t=e.pageNo,n=e.pageSize;a(!0),s(t,n).then((function(e){var r=e.data,c=e.total;h({pageNo:t,pageSize:n,data:r,total:c}),a(!1)}))},style:{minHeight:300}})}}}]);