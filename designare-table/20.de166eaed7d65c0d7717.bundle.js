(window.webpackJsonp=window.webpackJsonp||[]).push([[20,58,59],{245:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(2),c=n.n(l),o=[{name:"Johnson & Johnson",last:135.7,chg:2.33,chgp:"1.75%"},{name:"Cisco Systems Inc.",last:46.79,chg:.43,chgp:"0.93%"},{name:"Walt Disney Co.",last:130.86,chg:1.1,chgp:"0.85%"},{name:"Coca-Cola Co.",last:53.49,chg:-.02,chgp:"-0.04%"},{name:"Walmart Inc.",last:119.42,chg:-.11,chgp:"-0.09%"}];a.default=function(){var e={activeColor:"#9dd411",defaultColor:"#bfbfbf"};return r.a.createElement(c.a,{columns:[{Header:r.a.createElement(l.Th,null,r.a.createElement(l.Sorter,e),r.a.createElement("span",null,"COMPANY")),dataKey:"name",width:"*"},{Header:r.a.createElement(l.Th,null,r.a.createElement(l.Sorter,e),r.a.createElement("span",null,"LAST")),dataKey:"last"},{Header:r.a.createElement(l.Th,null,r.a.createElement(l.Sorter,e),r.a.createElement("span",null,"CHG")),dataKey:"chg"},{Header:r.a.createElement(l.Th,null,r.a.createElement(l.Sorter,e),r.a.createElement("span",null,"CHG %")),dataKey:"chgp"}],defaultSorter:{dataKey:"name",direction:"asc"},data:o})}},246:function(e,a,n){"use strict";n.r(a);a.default="import React from 'react'\nimport Table, { Th, Sorter } from 'designare-table'\n\nconst data = [\n    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: '1.75%' },\n    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: '0.93%' },\n    { name: 'Walt Disney Co.', last: 130.86, chg: 1.10, chgp: '0.85%' },\n    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: '-0.04%' },\n    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: '-0.09%' }\n]\n\nexport default function () {\n    const colors = { activeColor: '#9dd411', defaultColor: '#bfbfbf' }\n    return (\n        <Table\n            columns={[\n                {\n                    Header: <Th><Sorter {...colors}/><span>COMPANY</span></Th>,\n                    dataKey: 'name',\n                    width: '*'\n                },\n                {\n                    Header: <Th><Sorter {...colors}/><span>LAST</span></Th>,\n                    dataKey: 'last'\n                },\n                {\n                    Header: <Th><Sorter {...colors}/><span>CHG</span></Th>,\n                    dataKey: 'chg'\n                },\n                {\n                    Header: <Th><Sorter {...colors}/><span>CHG %</span></Th>,\n                    dataKey: 'chgp'\n                }\n            ]}\n            defaultSorter={{\n                dataKey: 'name',\n                direction: 'asc'\n            }}\n            data={data}\n        />\n    )\n}"},277:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(4),c=n(245),o=n(246),s=n(8);a.default=function(){return r.a.createElement(l.a,{md:o.default},r.a.createElement(c.default,null),r.a.createElement(s.a,{zh:"activeColor 和 defaultColor 可以传给Sorter 也可以传给Table。 后者将同时作用于Sorter和Filter"}))}}}]);