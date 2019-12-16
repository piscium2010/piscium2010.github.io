(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{28:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class s extends l.a.Component{render(){const{children:e,className:t="",icon:n,...a}=this.props;return l.a.createElement("div",{className:`lime-textField-input ${t}`},n,l.a.createElement("input",r({type:"text"},a)))}}n(20);const c={lineHeight:"30px",padding:"0 10px",color:"#cdcdcd"};class o extends l.a.Component{render(){const e=l.a.createElement("i",{style:c,className:"fas fa-user"}),t=l.a.createElement("i",{style:c,className:"fas fa-lock"}),n=l.a.createElement("i",{style:c,className:"fas fa-phone-square"});return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(s,{placeholder:"username",icon:e})),l.a.createElement("p",null,l.a.createElement(s,{placeholder:"password",icon:t})),l.a.createElement("p",null,l.a.createElement(s,{placeholder:"phone",icon:n})))}}var i=n(61);var d="import React from 'react';\nimport TextField from '../../components/TextField'\nimport '@fortawesome/fontawesome-free/css/all.css'\n\nconst iconStyle = { lineHeight: '30px', padding: '0 10px', color: '#cdcdcd' }\n\nexport default class Basic extends React.Component {\n    render() {\n        const user = <i style={iconStyle} className=\"fas fa-user\"></i>\n        const password = <i style={iconStyle} className=\"fas fa-lock\"></i>\n        const mobile = <i style={iconStyle} className=\"fas fa-phone-square\"></i>\n        return (\n            <div>\n                <p>\n                    <TextField placeholder='username' icon={user} />\n                </p>\n                <p>\n                    <TextField placeholder='password' icon={password} />\n                </p>\n                <p>\n                    <TextField placeholder='phone' icon={mobile} />\n                </p>\n            </div>\n        )\n    }\n}";var m="import React from 'react'\n\nexport default class TextField extends React.Component {\n    render() {\n        const { children, className = '', icon, ...rest } = this.props\n\n        return (\n            <div className={`lime-textField-input ${className}`} >\n                {icon}\n                <input type=\"text\" {...rest} />\n            </div>\n        )\n    }\n}",p=n(57),u=n(60);n.d(t,"default",function(){return x});class x extends l.a.Component{render(){const e=l.a.createElement("span",null,"Typically used to capture a single line of text.");return l.a.createElement("div",null,l.a.createElement(u.a,{title:"Text Field",desc:e}),l.a.createElement("h2",null,"Usage"),l.a.createElement(i.a,{md:d},l.a.createElement(o,null)),l.a.createElement("h2",null,"Build it yourself"),l.a.createElement("section",{className:"implement"},l.a.createElement("h4",null,"TextField.jsx"),l.a.createElement(p.a,{md:m})))}}},57:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(0),l=n.n(a),r=n(58),s=n(12),c=n(64),o=n(62),i=n(63),d=n(59);c.a.registerLanguage("jsx",o.a);class m extends l.a.Component{constructor(...e){var t,n,a;super(...e),a=(e=>{Object(r.a)(this.props.md),d.a.show("Code Copied")}),(n="onClick")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}render(){return l.a.createElement("div",{className:"markdown",style:{position:"relative"}},l.a.createElement(c.a,{language:"jsx",style:i.a},this.props.md),l.a.createElement("div",{className:"copy"},l.a.createElement(s.a,{className:"lime-button primary",style:{margin:0},onClick:this.onClick},"Copy")))}}},58:function(e,t,n){"use strict";t.a=(e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))})},59:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(14),s=n.n(r);n(11);const c={display:"flex",justifyContent:"center",position:"fixed",bottom:0,width:"100%",pointerEvent:"none"},o={borderRadius:4,margin:15,padding:"14px 16px",background:"#323232",color:"rgba(255,255,255,.7)",fontSize:14,minWidth:200};class i extends l.a.Component{static show(e,t=1300){const n=document.createElement("div");document.body.appendChild(n),s.a.render(l.a.createElement(i,{text:e}),n),setTimeout(()=>{s.a.unmountComponentAtNode(n),document.body.removeChild(n)},t)}render(){return l.a.createElement("div",{style:c},l.a.createElement("div",{style:o,className:"lime-raised message-box"},this.props.text))}}n.d(t,"a",function(){return i})},60:function(e,t,n){"use strict";var a=n(0),l=n.n(a);const r={color:"#03121a",fontWeight:"bold",fontSize:"xx-large",margin:0};class s extends l.a.Component{render(){const{title:e,desc:t=""}=this.props;return l.a.createElement("div",{style:{margin:"60px 0 100px 0"}},l.a.createElement("h2",{style:r},e),l.a.createElement("p",null,t))}}n.d(t,"a",function(){return s})},61:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(0),l=n.n(a),r=n(13),s=n.n(r),c=n(57);class o extends l.a.Component{constructor(e){var t,n,a;super(e),a=(e=>{this.setState(e=>({expand:!e.expand}))}),(n="onClick")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,this.state={expand:!1}}render(){let{md:e,title:t=""}=this.props,{expand:n}=this.state;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",null,t),l.a.createElement("section",{className:"example-block"},l.a.createElement("div",{className:"example-block-header"},l.a.createElement("i",{className:"fas fa-code",onClick:this.onClick})),l.a.createElement(s.a,{expand:n},l.a.createElement("div",null,l.a.createElement(c.a,{md:e}))),l.a.createElement("div",{className:"example-block-content"},this.props.children)))}}}}]);