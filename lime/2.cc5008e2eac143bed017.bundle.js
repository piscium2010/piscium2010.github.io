(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{37:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(66),s=n.n(r);n(11);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=["石原里美","新垣结衣","三上悠亚"],c={transform:"translate(-50%,-100%)"},u={background:"rgba(0,0,0,.56)",color:"white",fontSize:".8em",padding:10};class m extends a.a.Component{constructor(e){super(e),l(this,"onMouseOver",(e,t)=>{const{left:n,top:o,height:a,width:r}=e.target.getBoundingClientRect();this.setState({show:!0,left:n+r/2,top:o,text:i[t]})}),l(this,"onMouseLeave",()=>{this.setState({show:!1})}),this.state={left:0,top:0,show:!1}}render(){const{show:e,left:t,top:n,text:o}=this.state;return a.a.createElement("div",null,a.a.createElement("p",{style:{paddingLeft:10}},"Simulate a tooltip"),a.a.createElement("button",{className:"lime-button text",onMouseOver:e=>this.onMouseOver(e,0),onMouseLeave:this.onMouseLeave},"Satomi Ishihara"),a.a.createElement("button",{className:"lime-button text",onMouseOver:e=>this.onMouseOver(e,1),onMouseLeave:this.onMouseLeave},"Yui Aragaki"),a.a.createElement("button",{className:"lime-button text",onMouseOver:e=>this.onMouseOver(e,2),onMouseLeave:this.onMouseLeave},"Yua Mikami"),a.a.createElement(s.a,{show:e,left:t,top:n,style:c},a.a.createElement("div",{style:u},o)))}}var d=n(61);var p="import React from 'react'\nimport Layer from '@piscium2010/lime/Layer'\nimport '@piscium2010/lime/lime.css'\n\nconst translation = ['石原里美', '新垣结衣', '三上悠亚']\nconst layerStyle = { transform: 'translate(-50%,-100%)' }\nconst tooltipStyle = { background: 'rgba(0,0,0,.56)', color: 'white', fontSize: '.8em', padding: 10 }\n\nexport default class Basic extends React.Component {\n    constructor(props) {\n        super(props)\n        this.state = {\n            left: 0,\n            top: 0,\n            show: false\n        }\n    }\n\n    onMouseOver = (evt, i) => {\n        const { left, top, height, width } = evt.target.getBoundingClientRect()\n        this.setState({\n            show: true,\n            left: left + width / 2,\n            top,\n            text: translation[i]\n        })\n    }\n\n    onMouseLeave = () => {\n        this.setState({ show: false })\n    }\n\n    render() {\n        const { show, left, top, text } = this.state\n\n        return (\n            <div>\n                <p style={{paddingLeft:10}}>Simulate a tooltip</p>\n                <button\n                    className='lime-button text'\n                    onMouseOver={evt => this.onMouseOver(evt, 0)}\n                    onMouseLeave={this.onMouseLeave}\n                >\n                    Satomi Ishihara\n                </button>\n                <button\n                    className='lime-button text'\n                    onMouseOver={evt => this.onMouseOver(evt, 1)}\n                    onMouseLeave={this.onMouseLeave}\n                >\n                    Yui Aragaki\n                </button>\n                <button\n                    className='lime-button text'\n                    onMouseOver={evt => this.onMouseOver(evt, 2)}\n                    onMouseLeave={this.onMouseLeave}\n                >\n                    Yua Mikami\n                </button>\n                <Layer show={show} left={left} top={top} style={layerStyle}>\n                    <div style={tooltipStyle}>\n                        {text}\n                    </div>\n                </Layer>\n            </div>\n        )\n    }\n}",h=n(60),f=n(65);n(57);n.d(t,"default",function(){return v});class v extends a.a.Component{render(){const e=a.a.createElement("span",null,"Lime built-in overlay component. It can be used to build other UI components like ",a.a.createElement("i",null,"FloatMenu"),", ",a.a.createElement("i",null,"Tooltip")," or ",a.a.createElement("i",null,"Dropdown")," of ",a.a.createElement("i",null,"Select"));return a.a.createElement("div",null,a.a.createElement(h.a,{title:"Layer",desc:e}),a.a.createElement("h2",null,"Usage"),a.a.createElement("section",null,a.a.createElement(d.a,{md:p},a.a.createElement(m,null))),a.a.createElement("h2",null,"API"),a.a.createElement("section",null,a.a.createElement(f.a,{data:[{name:"left",desc:"distance to the left of window",type:"number"},{name:"top",desc:"distance to the top of window",type:"number"},{name:"width",desc:"optional",type:"number"},{name:"height",desc:"optional",type:"number"},{name:"show",desc:"show or hide",type:"bool",deft:"false"},{name:"onBlur",desc:"triggered when layer loses focus",type:"func",deft:""}]})))}}},57:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var o=n(0),a=n.n(o),r=n(58),s=n(12),l=n(64),i=n(62),c=n(63),u=n(59);l.a.registerLanguage("jsx",i.a);class m extends a.a.Component{constructor(...e){var t,n,o;super(...e),o=(e=>{Object(r.a)(this.props.md),u.a.show("Code Copied")}),(n="onClick")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}render(){return a.a.createElement("div",{className:"markdown",style:{position:"relative"}},a.a.createElement(l.a,{language:"jsx",style:c.a},this.props.md),a.a.createElement("div",{className:"copy"},a.a.createElement(s.a,{className:"lime-button primary",style:{margin:0},onClick:this.onClick},"Copy")))}}},58:function(e,t,n){"use strict";t.a=(e=>{const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),n&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n))})},59:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(14),s=n.n(r);n(11);const l={display:"flex",justifyContent:"center",position:"fixed",bottom:0,width:"100%",pointerEvent:"none"},i={borderRadius:4,margin:15,padding:"14px 16px",background:"#323232",color:"rgba(255,255,255,.7)",fontSize:14,minWidth:200};class c extends a.a.Component{static show(e,t=1300){const n=document.createElement("div");document.body.appendChild(n),s.a.render(a.a.createElement(c,{text:e}),n),setTimeout(()=>{s.a.unmountComponentAtNode(n),document.body.removeChild(n)},t)}render(){return a.a.createElement("div",{style:l},a.a.createElement("div",{style:i,className:"lime-raised message-box"},this.props.text))}}n.d(t,"a",function(){return c})},60:function(e,t,n){"use strict";var o=n(0),a=n.n(o);const r={color:"#03121a",fontWeight:"bold",fontSize:"xx-large",margin:0};class s extends a.a.Component{render(){const{title:e,desc:t=""}=this.props;return a.a.createElement("div",{style:{margin:"60px 0 100px 0"}},a.a.createElement("h2",{style:r},e),a.a.createElement("p",null,t))}}n.d(t,"a",function(){return s})},61:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n(0),a=n.n(o),r=n(13),s=n.n(r),l=n(57);class i extends a.a.Component{constructor(e){var t,n,o;super(e),o=(e=>{this.setState(e=>({expand:!e.expand}))}),(n="onClick")in(t=this)?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,this.state={expand:!1}}render(){let{md:e,title:t=""}=this.props,{expand:n}=this.state;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,t),a.a.createElement("section",{className:"example-block"},a.a.createElement("div",{className:"example-block-header"},a.a.createElement("i",{className:"fas fa-code",onClick:this.onClick})),a.a.createElement(s.a,{expand:n},a.a.createElement("div",null,a.a.createElement(l.a,{md:e}))),a.a.createElement("div",{className:"example-block-content"},this.props.children)))}}},65:function(e,t,n){"use strict";var o=n(0),a=n.n(o);n(11);class r extends a.a.Component{render(){const{data:e}=this.props;return a.a.createElement("table",{className:"lime-table light"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{scope:"col"},"Name"),a.a.createElement("th",{scope:"col",colSpan:"2"},"Desc"),a.a.createElement("th",{scope:"col"},"Type"),a.a.createElement("th",{scope:"col"},"Default"))),a.a.createElement("tbody",null,e.sort((e,t)=>e.name>t.name?1:-1).map(({name:e,desc:t,type:n,deft:o=""},r)=>a.a.createElement("tr",{key:r},a.a.createElement("td",null,e),a.a.createElement("td",{colSpan:"2"},t),a.a.createElement("td",null,n),a.a.createElement("td",null,o)))))}}n.d(t,"a",function(){return r})},66:function(e,t,n){"use strict";var o,a=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),r=this&&this.__assign||Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&(n[o[a]]=e[o[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var l=n(15),i=n(0),c=n(4),u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ref=i.createRef(),t.onWindowMouseDown=function(e){var n=e.target,o=t.props,a=o.show,r=o.onBlur,s=void 0===r?function(){}:r,l=o.onDismiss,i=void 0===l?function(){}:l;a&&t.ref.current&&!t.ref.current.contains(n)&&(i(e),s(e))},t}return a(t,e),Object.defineProperty(t.prototype,"style",{get:function(){var e=function(e){return null!=e||void 0},t=this.props,n=(t.boundingClientRect,t.left),o=t.top,a=t.right,r=t.bottom,l=t.style,i=void 0===l?{}:l,c=i.transform,u=s(i,["transform"]);return[Object.assign({},e(n)&&{left:n},e(a)&&{right:a},e(r)&&{bottom:r},e(o)&&{top:o},e(c)&&{transform:c}),u]},enumerable:!0,configurable:!0}),t.prototype.componentDidMount=function(){window.addEventListener("mousedown",this.onWindowMouseDown)},t.prototype.componentWillUnmount=function(){window.removeEventListener("mousedown",this.onWindowMouseDown)},t.prototype.render=function(){var e,t,n=this.props,o=n.animation,a=(n.boundingClientRect,n.children),u=n.className,m=(n.left,n.top,n.onBlur,n.style,n.show),d=(n.right,n.bottom,s(n,["animation","boundingClientRect","children","className","left","top","onBlur","style","show","right","bottom"])),p=l(c.prefixCls+"-layer",((e={})[c.prefixCls+"-layer-inactive"]=!m,e)),h=l(u,c.prefixCls+"-shadow",((t={})[c.prefixCls+"-animate-slide-down-in"]="slide-down"===o&&m,t[c.prefixCls+"-animate-slide-up-out"]="slide-down"===o&&!m,t[c.prefixCls+"-layer-out"]=!o&&!m,t[c.prefixCls+"-layer-active"]=m,t)),f=this.style,v=f[0],y=f[1];return i.createElement("div",r({ref:this.ref,className:p,style:v},d),i.createElement("div",{className:h,style:y},a))},t}(i.PureComponent);t.default=u}}]);