(window.webpackJsonp=window.webpackJsonp||[]).push([[3,54,55,56,57],{129:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(1),g=n.n(o);function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],t=!0,c=!1,o=void 0;try{for(var g,l=e[Symbol.iterator]();!(t=(g=l.next()).done)&&(n.push(g.value),!a||n.length!==a);t=!0);}catch(e){c=!0,o=e}finally{try{t||null==l.return||l.return()}finally{if(c)throw o}}return n}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=[{name:"UnitedHealth Group Inc.",last:243.67,chg:6.68,chgp:2.82},{name:"Walgreens Boots Alliance Inc.",last:55.94,chg:1.28,chgp:2.34},{name:"Dow Inc.",last:47.81,chg:.69,chgp:1.46},{name:"Caterpillar Inc.",last:131.04,chg:1.88,chgp:1.46},{name:"American Express Co.",last:119.1,chg:1.69,chgp:1.44},{name:"Walt Disney Co.",last:132.37,chg:1.51,chgp:1.15},{name:"United Technologies Corp.",last:138.17,chg:1.46,chgp:1.07},{name:"3M Co.",last:163.54,chg:1.36,chgp:.84},{name:"Johnson & Johnson",last:136.17,chg:1,chgp:.74},{name:"Nike Inc. Cl B",last:95.56,chg:.68,chgp:.72},{name:"Coca-Cola Co.",last:53.79,chg:.3,chgp:.56},{name:"JPMorgan Chase & Co.",last:120.35,chg:.67,chgp:.56},{name:"Cisco Systems Inc.",last:47.03,chg:.24,chgp:.51},{name:"Apple Inc.",last:235.28,chg:.91,chgp:.39},{name:"Home Depot Inc.",last:236.77,chg:.87,chgp:.37},{name:"Walmart Inc.",last:119.84,chg:.42,chgp:.35},{name:"Pfizer Inc.",last:36.46,chg:.12,chgp:.33}],p=function(e,a){return new Promise((function(n){setTimeout((function(){var t=(e-1)*a,c=Math.min(h.length,t+a),o=h.slice(t,c);n({data:o,total:h.length})}),1e3)}))};a.default=function(){var e=s(Object(t.useState)(!0),2),a=e[0],n=e[1],o=s(Object(t.useState)({pageNo:1,pageSize:5,total:0,data:[]}),2),h=o[0],i=o[1];return Object(t.useEffect)((function(){p(h.pageNo,h.pageSize).then((function(e){var a=e.data,t=e.total;i(function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}({},h,{data:a,total:t})),n(!1)}))}),[]),c.a.createElement(g.a,{columns:[{Header:"COMPANY",dataKey:"name"},{Header:"LAST",dataKey:"last"},{Header:"CHG",dataKey:"chg"},{Header:"CHG%",dataKey:"chgp"}],data:h.data,pageSize:h.pageSize,pageSizeOptions:[5,10],pageNo:h.pageNo,total:h.total,loading:a,onChangePaging:function(e){var a=e.pageNo,t=e.pageSize;n(!0),p(a,t).then((function(e){var c=e.data,o=e.total;i({pageNo:a,pageSize:t,data:c,total:o}),n(!1)}))},style:{minHeight:300}})}},130:function(e,a,n){"use strict";n.r(a);a.default="import React, { useState, useEffect } from 'react'\nimport Table from 'designare-table'\n\nconst serverData = [\n    { name: 'UnitedHealth Group Inc.', last: 243.67, chg: 6.68, chgp: 2.82 },\n    { name: 'Walgreens Boots Alliance Inc.', last: 55.94, chg: 1.28, chgp: 2.34 },\n    { name: 'Dow Inc.', last: 47.81, chg: 0.69, chgp: 1.46 },\n    { name: 'Caterpillar Inc.', last: 131.04, chg: 1.88, chgp: 1.46 },\n    { name: 'American Express Co.', last: 119.10, chg: 1.69, chgp: 1.44 },\n    { name: 'Walt Disney Co.', last: 132.37, chg: 1.51, chgp: 1.15 },\n    { name: 'United Technologies Corp.', last: 138.17, chg: 1.46, chgp: 1.07 },\n    { name: '3M Co.', last: 163.54, chg: 1.36, chgp: 0.84 },\n    { name: 'Johnson & Johnson', last: 136.17, chg: 1.00, chgp: 0.74 },\n    { name: 'Nike Inc. Cl B', last: 95.56, chg: 0.68, chgp: 0.72 },\n    { name: 'Coca-Cola Co.', last: 53.79, chg: 0.30, chgp: 0.56 },\n    { name: 'JPMorgan Chase & Co.', last: 120.35, chg: 0.67, chgp: 0.56 },\n    { name: 'Cisco Systems Inc.', last: 47.03, chg: 0.24, chgp: 0.51 },\n    { name: 'Apple Inc.', last: 235.28, chg: 0.91, chgp: 0.39 },\n    { name: 'Home Depot Inc.', last: 236.77, chg: 0.87, chgp: 0.37 },\n    { name: 'Walmart Inc.', last: 119.84, chg: 0.42, chgp: 0.35 },\n    { name: 'Pfizer Inc.', last: 36.46, chg: 0.12, chgp: 0.33 }\n]\n\nconst fakeFetch = (pageNo, pageSize) => {\n    return new Promise(resolve => {\n        setTimeout(() => {\n            const start = (pageNo - 1) * pageSize\n            const end = Math.min(serverData.length, start + pageSize)\n            const data = serverData.slice(start, end)\n            resolve({ data, total: serverData.length })\n        }, 1000)\n    })\n}\n\nexport default function () {\n    const [loading, setLoading] = useState(true)\n    const [state, setState] = useState({\n        pageNo: 1,\n        pageSize: 5,\n        total: 0,\n        data: []\n    })\n\n    useEffect(() => {\n        // initial load\n        fakeFetch(state.pageNo, state.pageSize).then(({ data, total }) => {\n            setState({ ...state, data, total })\n            setLoading(false)\n        })\n    }, [])\n\n    return (\n        <Table\n            columns={[\n                {\n                    Header: 'COMPANY',\n                    dataKey: 'name'\n                },\n                {\n                    Header: 'LAST',\n                    dataKey: 'last'\n                },\n                {\n                    Header: 'CHG',\n                    dataKey: 'chg'\n                },\n                {\n                    Header: 'CHG%',\n                    dataKey: 'chgp'\n                }\n            ]}\n            data={state.data}\n            pageSize={state.pageSize}\n            pageSizeOptions={[5, 10]}\n            pageNo={state.pageNo}\n            total={state.total}\n            loading={loading}\n            onChangePaging={({ pageNo, pageSize }) => {\n                setLoading(true)\n                fakeFetch(pageNo, pageSize).then(({ data, total }) => {\n                    setState({ pageNo, pageSize, data, total })\n                    setLoading(false)\n                })\n            }}\n            style={{ minHeight: 300 }}\n        />\n    )\n}"},131:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(1),g=n.n(o),l=[{name:"UnitedHealth Group Inc.",last:243.67,chg:6.68,chgp:2.82},{name:"Walgreens Boots Alliance Inc.",last:55.94,chg:1.28,chgp:2.34},{name:"Dow Inc.",last:47.81,chg:.69,chgp:1.46},{name:"Caterpillar Inc.",last:131.04,chg:1.88,chgp:1.46},{name:"American Express Co.",last:119.1,chg:1.69,chgp:1.44},{name:"Walt Disney Co.",last:132.37,chg:1.51,chgp:1.15},{name:"United Technologies Corp.",last:138.17,chg:1.46,chgp:1.07},{name:"3M Co.",last:163.54,chg:1.36,chgp:.84},{name:"Johnson & Johnson",last:136.17,chg:1,chgp:.74},{name:"Nike Inc. Cl B",last:95.56,chg:.68,chgp:.72},{name:"Coca-Cola Co.",last:53.79,chg:.3,chgp:.56},{name:"JPMorgan Chase & Co.",last:120.35,chg:.67,chgp:.56},{name:"Cisco Systems Inc.",last:47.03,chg:.24,chgp:.51},{name:"Apple Inc.",last:235.28,chg:.91,chgp:.39},{name:"Home Depot Inc.",last:236.77,chg:.87,chgp:.37},{name:"Walmart Inc.",last:119.84,chg:.42,chgp:.35},{name:"Pfizer Inc.",last:36.46,chg:.12,chgp:.33}];a.default=function(){return c.a.createElement(g.a,{columns:[{Header:"COMPANY",dataKey:"name"},{Header:"LAST",dataKey:"last"},{Header:"CHG",dataKey:"chg"},{Header:"CHG%",dataKey:"chgp"}],data:l,defaultPageSize:5,pageSizeOptions:[5,10]})}},132:function(e,a,n){"use strict";n.r(a);a.default="import React from 'react'\nimport Table from 'designare-table'\n\nconst data = [\n    { name: 'UnitedHealth Group Inc.', last: 243.67, chg: 6.68, chgp: 2.82 },\n    { name: 'Walgreens Boots Alliance Inc.', last: 55.94, chg: 1.28, chgp: 2.34 },\n    { name: 'Dow Inc.', last: 47.81, chg: 0.69, chgp: 1.46 },\n    { name: 'Caterpillar Inc.', last: 131.04, chg: 1.88, chgp: 1.46 },\n    { name: 'American Express Co.', last: 119.10, chg: 1.69, chgp: 1.44 },\n    { name: 'Walt Disney Co.', last: 132.37, chg: 1.51, chgp: 1.15 },\n    { name: 'United Technologies Corp.', last: 138.17, chg: 1.46, chgp: 1.07 },\n    { name: '3M Co.', last: 163.54, chg: 1.36, chgp: 0.84 },\n    { name: 'Johnson & Johnson', last: 136.17, chg: 1.00, chgp: 0.74 },\n    { name: 'Nike Inc. Cl B', last: 95.56, chg: 0.68, chgp: 0.72 },\n    { name: 'Coca-Cola Co.', last: 53.79, chg: 0.30, chgp: 0.56 },\n    { name: 'JPMorgan Chase & Co.', last: 120.35, chg: 0.67, chgp: 0.56 },\n    { name: 'Cisco Systems Inc.', last: 47.03, chg: 0.24, chgp: 0.51 },\n    { name: 'Apple Inc.', last: 235.28, chg: 0.91, chgp: 0.39 },\n    { name: 'Home Depot Inc.', last: 236.77, chg: 0.87, chgp: 0.37 },\n    { name: 'Walmart Inc.', last: 119.84, chg: 0.42, chgp: 0.35 },\n    { name: 'Pfizer Inc.', last: 36.46, chg: 0.12, chgp: 0.33 }\n]\n\nexport default function () {\n    return (\n        <Table\n            columns={[\n                {\n                    Header: 'COMPANY',\n                    dataKey: 'name'\n                },\n                {\n                    Header: 'LAST',\n                    dataKey: 'last'\n                },\n                {\n                    Header: 'CHG',\n                    dataKey: 'chg'\n                },\n                {\n                    Header: 'CHG%',\n                    dataKey: 'chgp'\n                }\n            ]}\n            data={data}\n            defaultPageSize={5}\n            pageSizeOptions={[5,10]}\n        />\n    )\n}"},76:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),o=n(3),g=n(36),l=n(37),r=n(131),s=n(132),h=n(129),p=n(130),i=n(4);a.default={One:function(){return c.a.createElement(o.a,{md:l.default},c.a.createElement(g.default,null))},Two:function(){return c.a.createElement(o.a,{md:s.default},c.a.createElement(r.default,null),c.a.createElement(i.a,{zh:"pageSizeOptions 最好不要超过三个。"}))},Three:function(){return c.a.createElement(o.a,{md:p.default},c.a.createElement(h.default,null))}}}}]);