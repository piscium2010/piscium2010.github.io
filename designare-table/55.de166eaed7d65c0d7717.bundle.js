(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{242:function(n,a,e){"use strict";e.r(a);a.default="import React, { useState, useEffect } from 'react'\nimport Table from 'designare-table'\n\nconst serverData = [\n    { name: 'UnitedHealth Group Inc.', last: 243.67, chg: 6.68, chgp: 2.82 },\n    { name: 'Walgreens Boots Alliance Inc.', last: 55.94, chg: 1.28, chgp: 2.34 },\n    { name: 'Dow Inc.', last: 47.81, chg: 0.69, chgp: 1.46 },\n    { name: 'Caterpillar Inc.', last: 131.04, chg: 1.88, chgp: 1.46 },\n    { name: 'American Express Co.', last: 119.10, chg: 1.69, chgp: 1.44 },\n    { name: 'Walt Disney Co.', last: 132.37, chg: 1.51, chgp: 1.15 },\n    { name: 'United Technologies Corp.', last: 138.17, chg: 1.46, chgp: 1.07 },\n    { name: '3M Co.', last: 163.54, chg: 1.36, chgp: 0.84 },\n    { name: 'Johnson & Johnson', last: 136.17, chg: 1.00, chgp: 0.74 },\n    { name: 'Nike Inc. Cl B', last: 95.56, chg: 0.68, chgp: 0.72 },\n    { name: 'Coca-Cola Co.', last: 53.79, chg: 0.30, chgp: 0.56 },\n    { name: 'JPMorgan Chase & Co.', last: 120.35, chg: 0.67, chgp: 0.56 },\n    { name: 'Cisco Systems Inc.', last: 47.03, chg: 0.24, chgp: 0.51 },\n    { name: 'Apple Inc.', last: 235.28, chg: 0.91, chgp: 0.39 },\n    { name: 'Home Depot Inc.', last: 236.77, chg: 0.87, chgp: 0.37 },\n    { name: 'Walmart Inc.', last: 119.84, chg: 0.42, chgp: 0.35 },\n    { name: 'Pfizer Inc.', last: 36.46, chg: 0.12, chgp: 0.33 }\n]\n\nconst fakeFetch = (pageNo, pageSize) => {\n    return new Promise(resolve => {\n        setTimeout(() => {\n            const start = (pageNo - 1) * pageSize\n            const end = Math.min(serverData.length, start + pageSize)\n            const data = serverData.slice(start, end)\n            resolve({ data, total: serverData.length })\n        }, 1000)\n    })\n}\n\nexport default function () {\n    const [loading, setLoading] = useState(true)\n    const [state, setState] = useState({\n        pageNo: 1,\n        pageSize: 5,\n        total: 0,\n        data: []\n    })\n\n    useEffect(() => {\n        // initial load\n        fakeFetch(state.pageNo, state.pageSize).then(({ data, total }) => {\n            setState({ ...state, data, total })\n            setLoading(false)\n        })\n    }, [])\n\n    return (\n        <Table\n            columns={[\n                {\n                    Header: 'COMPANY',\n                    dataKey: 'name'\n                },\n                {\n                    Header: 'LAST',\n                    dataKey: 'last'\n                },\n                {\n                    Header: 'CHG',\n                    dataKey: 'chg'\n                },\n                {\n                    Header: 'CHG%',\n                    dataKey: 'chgp'\n                }\n            ]}\n            data={state.data}\n            pageSize={state.pageSize}\n            pageSizeOptions={[5, 10]}\n            pageNo={state.pageNo}\n            total={state.total}\n            loading={loading}\n            onChangePaging={({ pageNo, pageSize }) => {\n                setLoading(true)\n                fakeFetch(pageNo, pageSize).then(({ data, total }) => {\n                    setState({ pageNo, pageSize, data, total })\n                    setLoading(false)\n                })\n            }}\n            style={{ minHeight: 300 }}\n        />\n    )\n}"}}]);