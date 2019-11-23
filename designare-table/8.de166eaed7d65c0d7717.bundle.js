(window.webpackJsonp=window.webpackJsonp||[]).push([[8,31,32],{221:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(2),o=a.n(r),i=[{name:"Johnson & Johnson",last:135.7,chg:2.33,chgp:1.75},{name:"Cisco Systems Inc.",last:46.79,chg:.43,chgp:.93},{name:"Walt Disney Co.",last:130.8,chg:1.1,chgp:.85},{name:"Coca-Cola Co.",last:53.49,chg:-.02,chgp:.04},{name:"Walmart Inc.",last:119.42,chg:-.11,chgp:.09}];n.default=function(){return l.a.createElement(o.a,{defaultFilters:[{dataKey:"name",filterValue:"c"}],columns:[{Header:l.a.createElement(r.Th,null,"COMPANY",l.a.createElement(r.Filter,{activeColor:"#9dd411",defaultColor:"#bfbfbf",by:function(e){var n=e.dataKey,a=e.row,t=e.filterValue;return a[n].toLowerCase().indexOf(t)>=0}},(function(e){var n=e.filterValue,a=void 0===n?"":n,t=e.trigger;return l.a.createElement("div",null,l.a.createElement("div",{style:{padding:10}},l.a.createElement("input",{value:a,onChange:function(e){return t(e.target.value||void 0)}})),l.a.createElement("div",{style:{padding:"0 10px",textAlign:"right",color:"#bfbfbf",borderTop:"1px dashed rgba(0,0,0,.12)"}},l.a.createElement("span",{role:"button",style:{lineHeight:"28px",fontSize:"small"},onClick:function(e){return t()}},"Reset")))}))),dataKey:"name"},{Header:"LAST",dataKey:"last"},{Header:"CHG",dataKey:"chg"},{Header:"CHG%",dataKey:"chgp"}],data:i})}},222:function(e,n,a){"use strict";a.r(n);n.default="import React, { useEffect } from 'react'\nimport Table, { Th, Filter } from 'designare-table'\n\nconst data = [\n    { name: 'Johnson & Johnson', last: 135.7, chg: 2.33, chgp: 1.75 },\n    { name: 'Cisco Systems Inc.', last: 46.79, chg: 0.43, chgp: 0.93 },\n    { name: 'Walt Disney Co.', last: 130.8, chg: 1.10, chgp: 0.85 },\n    { name: 'Coca-Cola Co.', last: 53.49, chg: -0.02, chgp: 0.04 },\n    { name: 'Walmart Inc.', last: 119.42, chg: -0.11, chgp: 0.09 }\n]\n\n\nexport default function () {\n    const by = ({ dataKey, row, filterValue }) => row[dataKey].toLowerCase().indexOf(filterValue) >= 0\n    \n    const companyFilter = ({ filterValue = '', trigger }) => (\n        <div>\n            <div style={{ padding: 10 }}>\n                <input\n                    value={filterValue}\n                    onChange={evt =>\n                        trigger(evt.target.value || undefined)\n                    }\n                />\n            </div>\n            <div\n                style={{\n                    padding: '0 10px',\n                    textAlign: 'right',\n                    color: '#bfbfbf',\n                    borderTop: '1px dashed rgba(0,0,0,.12)'\n                }}\n            >\n                <span\n                    role='button'\n                    style={{ lineHeight: '28px', fontSize: 'small' }}\n                    onClick={evt => trigger(/* pass undefined to cancel filter */)}\n                >\n                    Reset\n                </span>\n            </div>\n        </div>\n    )\n\n    return (\n        <Table\n            defaultFilters={[{ dataKey: 'name', filterValue: 'c' }]}\n            columns={[\n                {\n                    Header: (\n                        <Th>\n                            COMPANY\n                            <Filter\n                                activeColor='#9dd411'\n                                defaultColor='#bfbfbf'\n                                by={by}\n                            >\n                                {companyFilter}\n                            </Filter>\n                        </Th>\n                    ),\n                    dataKey: 'name'\n                },\n                {\n                    Header: 'LAST',\n                    dataKey: 'last'\n                },\n                {\n                    Header: 'CHG',\n                    dataKey: 'chg'\n                },\n                {\n                    Header: 'CHG%',\n                    dataKey: 'chgp'\n                }\n            ]}\n            data={data}\n        />\n    )\n}"},262:function(e,n,a){"use strict";a.r(n);var t=a(0),l=a.n(t),r=a(4),o=a(221),i=a(222),c=a(8);n.default=function(){return l.a.createElement(r.a,{md:i.default},l.a.createElement(o.default,null),l.a.createElement(c.a,{zh:"activeColor 和 defaultColor 可以传给Filter 也可以传给Table。 后者将同时作用于Sorter和Filter"}))}}}]);