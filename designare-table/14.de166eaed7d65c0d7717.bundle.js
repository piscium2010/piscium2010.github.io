(window.webpackJsonp=window.webpackJsonp||[]).push([[14,43,44],{233:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),d=a(2),o=a.n(d);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],t=!0,r=!1,d=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done)&&(a.push(o.value),!n||a.length!==n);t=!0);}catch(e){r=!0,d=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw d}}return a}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u={exg:"NASDAQ",sec:"Consumer Services",instry:"Catalog","1YT":"$2,250.00",sv:"5,123,142","50DAvg":"2,984,212",Prev:"$1,762.17",MC:"880,873,538,392",PE:"73.89","FPE1.":"74.66822033898305",EPS:"$24.10",AD:"N/A",Ex:"N/A",Dividend:"N/A",CYield:"0%"},s=function(){for(var e=[],n=0;n<5;n++)e.push(u);return e}();n.default=function(){var e=i(Object(t.useState)({}),1)[0],n=i(Object(t.useState)(),2),a=n[0],u=n[1],l=function(n){var a=n.currentTarget.dataset.i;u(a),e.i=a},c=function(n){var a=n.currentTarget.dataset.i;setTimeout((function(){a===e.i&&u(null)}),100)};return r.a.createElement(o.a,{columns:[{Header:"Exchange",dataKey:"exg"},{Header:"Sector",dataKey:"sec",width:200,fixed:"left"},{Header:"Industry",dataKey:"instry",fixed:"right"},{Header:"1 Year Target",dataKey:"1YT",fixed:"left"},{Header:"Share Volume",dataKey:"sv"},{Header:"50 Day Average Vol.",dataKey:"50DAvg"},{Header:"Previous Close",dataKey:"Prev"},{Header:"Market Cap",dataKey:"MC"},{Header:"P/E Ratio",dataKey:"PE",fixed:"right"},{Header:"Forward P/E 1 Yr",dataKey:"FPE1."},{Header:"Earnings Per Share",dataKey:"EPS"},{Header:"Annualized Dividend",dataKey:"AD"},{Header:"Ex Dividend Date",dataKey:"Ex"},{Header:"Dividend Pay Date",dataKey:"Dividend"},{Header:"Current Yield",dataKey:"CYield"}],data:s},r.a.createElement(d.Thead,null),r.a.createElement(d.Tbody,{tr:function(e){var n=e.cells,t=e.rowIndex;return r.a.createElement("tr",{style:{backgroundColor:t==a?"#f0f8ff":""},"data-i":t,onMouseOver:l,onMouseLeave:c},n)}}))}},234:function(e,n,a){"use strict";a.r(n);n.default="import React, { useState } from 'react'\nimport Table, { Thead, Tbody } from 'designare-table'\n\nconst one = {\n    'exg': 'NASDAQ',\n    'sec': 'Consumer Services',\n    'instry': 'Catalog',\n    '1YT': '$2,250.00',\n    'sv': '5,123,142',\n    '50DAvg': '2,984,212',\n    'Prev': '$1,762.17',\n    'MC': '880,873,538,392',\n    'PE': '73.89',\n    'FPE1.': '74.66822033898305',\n    'EPS': '$24.10',\n    'AD': 'N/A',\n    'Ex': 'N/A',\n    'Dividend': 'N/A',\n    'CYield': '0%'\n}\n\nconst data = (function () {\n    const r = []\n    for (let i = 0; i < 5; i++) r.push(one)\n    return r\n})()\n\nexport default function () {\n    const [store] = useState({})\n    const [hoverIndex, setHoverIndex] = useState()\n    const onMouseOver = evt => {\n        const rowIndex = evt.currentTarget.dataset['i']\n        setHoverIndex(rowIndex)\n        store.i = rowIndex\n    }\n    const onMouseLeave = evt => {\n        const rowIndex = evt.currentTarget.dataset['i']\n        setTimeout(() => {\n            rowIndex === store.i\n                ? setHoverIndex(null)\n                : undefined\n        }, 100)\n    }\n\n    const tr = ({ cells, rowIndex }) => (\n        <tr\n            style={{ backgroundColor: rowIndex == hoverIndex ? '#f0f8ff' : '' }}\n            data-i={rowIndex}\n            onMouseOver={onMouseOver}\n            onMouseLeave={onMouseLeave}\n        >\n            {cells}\n        </tr>\n    )\n\n    return (\n        <Table\n            columns={[\n                { Header: 'Exchange', dataKey: 'exg' },\n                { Header: 'Sector', dataKey: 'sec', width: 200, fixed: 'left' },\n                { Header: 'Industry', dataKey: 'instry', fixed: 'right' },\n                { Header: '1 Year Target', dataKey: '1YT', fixed: 'left' },\n                { Header: 'Share Volume', dataKey: 'sv' },\n                { Header: '50 Day Average Vol.', dataKey: '50DAvg' },\n                { Header: 'Previous Close', dataKey: 'Prev' },\n                { Header: 'Market Cap', dataKey: 'MC' },\n                { Header: 'P/E Ratio', dataKey: 'PE', fixed: 'right' },\n                { Header: 'Forward P/E 1 Yr', dataKey: 'FPE1.' },\n                { Header: 'Earnings Per Share', dataKey: 'EPS' },\n                { Header: 'Annualized Dividend', dataKey: 'AD' },\n                { Header: 'Ex Dividend Date', dataKey: 'Ex' },\n                { Header: 'Dividend Pay Date', dataKey: 'Dividend' },\n                { Header: 'Current Yield', dataKey: 'CYield' }\n            ]}\n            data={data}\n        >\n            <Thead />\n            <Tbody tr={tr} />\n        </Table >\n    )\n}"},267:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),d=a(4),o=a(233),i=a(234),u=a(8);n.default=function(){return r.a.createElement(d.a,{md:i.default},r.a.createElement(o.default,null),r.a.createElement(u.a,{zh:"让固定列也响应hover事件，需要借助js。"}))}}}]);