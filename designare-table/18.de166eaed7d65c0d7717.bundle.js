(window.webpackJsonp=window.webpackJsonp||[]).push([[18,54,55],{241:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(2),r=n.n(o);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,c=!1,o=void 0;try{for(var r,g=e[Symbol.iterator]();!(a=(r=g.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==g.return||g.return()}finally{if(c)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=[{name:"UnitedHealth Group Inc.",last:243.67,chg:6.68,chgp:2.82},{name:"Walgreens Boots Alliance Inc.",last:55.94,chg:1.28,chgp:2.34},{name:"Dow Inc.",last:47.81,chg:.69,chgp:1.46},{name:"Caterpillar Inc.",last:131.04,chg:1.88,chgp:1.46},{name:"American Express Co.",last:119.1,chg:1.69,chgp:1.44},{name:"Walt Disney Co.",last:132.37,chg:1.51,chgp:1.15},{name:"United Technologies Corp.",last:138.17,chg:1.46,chgp:1.07},{name:"3M Co.",last:163.54,chg:1.36,chgp:.84},{name:"Johnson & Johnson",last:136.17,chg:1,chgp:.74},{name:"Nike Inc. Cl B",last:95.56,chg:.68,chgp:.72},{name:"Coca-Cola Co.",last:53.79,chg:.3,chgp:.56},{name:"JPMorgan Chase & Co.",last:120.35,chg:.67,chgp:.56},{name:"Cisco Systems Inc.",last:47.03,chg:.24,chgp:.51},{name:"Apple Inc.",last:235.28,chg:.91,chgp:.39},{name:"Home Depot Inc.",last:236.77,chg:.87,chgp:.37},{name:"Walmart Inc.",last:119.84,chg:.42,chgp:.35},{name:"Pfizer Inc.",last:36.46,chg:.12,chgp:.33}],p=function(e,t){return new Promise((function(n){setTimeout((function(){var a=(e-1)*t,c=Math.min(i.length,a+t),o=i.slice(a,c);n({data:o,total:i.length})}),1e3)}))};t.default=function(){var e=l(Object(a.useState)(!0),2),t=e[0],n=e[1],o=l(Object(a.useState)({pageNo:1,pageSize:5,total:0,data:[]}),2),i=o[0],h=o[1];return Object(a.useEffect)((function(){p(i.pageNo,i.pageSize).then((function(e){var t=e.data,a=e.total;h(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i,{data:t,total:a})),n(!1)}))}),[]),c.a.createElement(r.a,{columns:[{Header:"COMPANY",dataKey:"name"},{Header:"LAST",dataKey:"last"},{Header:"CHG",dataKey:"chg"},{Header:"CHG%",dataKey:"chgp"}],data:i.data,pageSize:i.pageSize,pageSizeOptions:[5,10],pageNo:i.pageNo,total:i.total,loading:t,onChangePaging:function(e){var t=e.pageNo,a=e.pageSize;n(!0),p(t,a).then((function(e){var c=e.data,o=e.total;h({pageNo:t,pageSize:a,data:c,total:o}),n(!1)}))},style:{minHeight:300}})}},242:function(e,t,n){"use strict";n.r(t);t.default="import React, { useState, useEffect } from 'react'\nimport Table from 'designare-table'\n\nconst serverData = [\n    { name: 'UnitedHealth Group Inc.', last: 243.67, chg: 6.68, chgp: 2.82 },\n    { name: 'Walgreens Boots Alliance Inc.', last: 55.94, chg: 1.28, chgp: 2.34 },\n    { name: 'Dow Inc.', last: 47.81, chg: 0.69, chgp: 1.46 },\n    { name: 'Caterpillar Inc.', last: 131.04, chg: 1.88, chgp: 1.46 },\n    { name: 'American Express Co.', last: 119.10, chg: 1.69, chgp: 1.44 },\n    { name: 'Walt Disney Co.', last: 132.37, chg: 1.51, chgp: 1.15 },\n    { name: 'United Technologies Corp.', last: 138.17, chg: 1.46, chgp: 1.07 },\n    { name: '3M Co.', last: 163.54, chg: 1.36, chgp: 0.84 },\n    { name: 'Johnson & Johnson', last: 136.17, chg: 1.00, chgp: 0.74 },\n    { name: 'Nike Inc. Cl B', last: 95.56, chg: 0.68, chgp: 0.72 },\n    { name: 'Coca-Cola Co.', last: 53.79, chg: 0.30, chgp: 0.56 },\n    { name: 'JPMorgan Chase & Co.', last: 120.35, chg: 0.67, chgp: 0.56 },\n    { name: 'Cisco Systems Inc.', last: 47.03, chg: 0.24, chgp: 0.51 },\n    { name: 'Apple Inc.', last: 235.28, chg: 0.91, chgp: 0.39 },\n    { name: 'Home Depot Inc.', last: 236.77, chg: 0.87, chgp: 0.37 },\n    { name: 'Walmart Inc.', last: 119.84, chg: 0.42, chgp: 0.35 },\n    { name: 'Pfizer Inc.', last: 36.46, chg: 0.12, chgp: 0.33 }\n]\n\nconst fakeFetch = (pageNo, pageSize) => {\n    return new Promise(resolve => {\n        setTimeout(() => {\n            const start = (pageNo - 1) * pageSize\n            const end = Math.min(serverData.length, start + pageSize)\n            const data = serverData.slice(start, end)\n            resolve({ data, total: serverData.length })\n        }, 1000)\n    })\n}\n\nexport default function () {\n    const [loading, setLoading] = useState(true)\n    const [state, setState] = useState({\n        pageNo: 1,\n        pageSize: 5,\n        total: 0,\n        data: []\n    })\n\n    useEffect(() => {\n        // initial load\n        fakeFetch(state.pageNo, state.pageSize).then(({ data, total }) => {\n            setState({ ...state, data, total })\n            setLoading(false)\n        })\n    }, [])\n\n    return (\n        <Table\n            columns={[\n                {\n                    Header: 'COMPANY',\n                    dataKey: 'name'\n                },\n                {\n                    Header: 'LAST',\n                    dataKey: 'last'\n                },\n                {\n                    Header: 'CHG',\n                    dataKey: 'chg'\n                },\n                {\n                    Header: 'CHG%',\n                    dataKey: 'chgp'\n                }\n            ]}\n            data={state.data}\n            pageSize={state.pageSize}\n            pageSizeOptions={[5, 10]}\n            pageNo={state.pageNo}\n            total={state.total}\n            loading={loading}\n            onChangePaging={({ pageNo, pageSize }) => {\n                setLoading(true)\n                fakeFetch(pageNo, pageSize).then(({ data, total }) => {\n                    setState({ pageNo, pageSize, data, total })\n                    setLoading(false)\n                })\n            }}\n            style={{ minHeight: 300 }}\n        />\n    )\n}"},275:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n(241),g=n(242);t.default=function(){return c.a.createElement(o.a,{md:g.default},c.a.createElement(r.default,null))}}}]);