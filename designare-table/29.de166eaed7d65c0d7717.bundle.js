(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=[{name:"Johnson & Johnson",last:135.7,chg:2.33,chgp:1.75},{name:"Cisco Systems Inc.",last:46.79,chg:.43,chgp:.93},{name:"Walt Disney Co.",last:130.86,chg:1.1,chgp:.85},{name:"Coca-Cola Co.",last:53.49,chg:-.02,chgp:-.04},{name:"Walmart Inc.",last:119.42,chg:-.11,chgp:-.09}];t.default=function(){var e=i(Object(n.useState)({}),1)[0],t=i(Object(n.useState)({i:void 0}),2),a=t[0],s=t[1],u=function(t){var n=t.currentTarget.dataset.i;console.log("over",a,n),s({i:n}),e.i=n},d=function(t){var a=t.currentTarget.dataset.i;console.log("leave",a),setTimeout((function(){a===(console.log("hoverIndex",e.i),e.i)&&s({i:void 0})}),100)};return r.a.createElement(c.a,{columns:[{Header:"COMPANY",dataKey:"name"},{Header:"LAST",dataKey:"last"},{Header:"CHG",dataKey:"chg"},{Header:"CHG%",dataKey:"chgp"}],data:l},r.a.createElement(o.Thead,null),r.a.createElement(o.Tbody,{tr:function(e){var t=e.cells,n=e.rowIndex;return r.a.createElement("tr",{className:"".concat(n==a.i?"designare-transition":""),style:{cursor:"pointer",backgroundColor:n==a.i?"aliceblue":""},"data-i":n,onMouseOver:u,onMouseLeave:d},t)}}))}}}]);