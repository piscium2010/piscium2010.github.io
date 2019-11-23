(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{248:function(n,a,e){"use strict";e.r(a);a.default="import React, { useState } from 'react'\nimport Table, { Th, Sorter } from 'designare-table'\n\nconst data = [\n    { name: 'Johnson & Johnson', last: '135.7', chg: 2.33, chgp: 1.75 },\n    { name: 'Cisco Systems Inc.', last: '46.79', chg: 0.43, chgp: 0.93 },\n    { name: 'Walt Disney Co.', last: '130.86', chg: 1.10, chgp: 0.85 },\n    { name: 'Coca-Cola Co.', last: '53.49', chg: -0.02, chgp: -0.04 },\n    { name: 'Walmart Inc.', last: '119.42', chg: -0.11, chgp: -0.09 }\n]\n\nexport default function () {\n    const [sorter, setSorter] = useState({ dataKey: 'name', direction: 'asc' })\n\n    return (\n        <Table\n            columns={[\n                {\n                    Header: <Th><span>COMPANY</span><Sorter directions={['asc']} /></Th>,\n                    dataKey: 'name',\n                    width: '*'\n                },\n                {\n                    Header: <Th><span>LAST</span><Sorter directions={['des']} by='number' /></Th>,\n                    dataKey: 'last'\n                },\n                {\n                    Header: <Th><span>CHG</span><Sorter directions={['asc', 'des']} /></Th>,\n                    dataKey: 'chg'\n                },\n                {\n                    Header: <Th><span>CHG %</span><Sorter directions={['asc', 'des']} /></Th>,\n                    dataKey: 'chgp'\n                }\n            ]}\n            data={data}\n            sorter={sorter}\n            onChangeSorter={({ dataKey, direction }) => {\n                setSorter({ dataKey, direction })\n            }}\n        />\n    )\n}"}}]);