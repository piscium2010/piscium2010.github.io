!function(e){function t(t){for(var n,r,o=t[0],c=t[1],s=t[2],u=0,p=[];u<o.length;u++)r=o[u],i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(m&&m(t);p.length;)p.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(l.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={21:0},l=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=i[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=n);var l,o=document.createElement("script");o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.src=function(e){return r.p+""+({}[e]||e)+".b9f1589d72374cd945ea.bundle.js"}(e),l=function(t){o.onerror=o.onload=null,clearTimeout(c);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+n+": "+l+")");r.type=n,r.request=l,a[1](r)}i[e]=void 0}};var c=setTimeout(function(){l({type:"timeout",target:o})},12e4);o.onerror=o.onload=l,document.head.appendChild(o)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="./",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var m=c;l.push([51,22]),a()}({0:function(e,t){e.exports=React},13:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(5),r=a.n(l);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class c extends i.a.Component{render(){let{children:e,style:t,...a}=this.props,n={position:"relative",...t};return i.a.createElement("button",o({},a,{style:n}),e,i.a.createElement(r.a,null)," ")}}a.d(t,"a",function(){return c})},15:function(e,t){e.exports=ReactDOM},18:function(e,t,a){"use strict";var n,i,l,r=a(0),o=a.n(r);a(12);class c extends o.a.Component{constructor(e){super(e),this.state={show:e.show}}componentDidUpdate(){const{show:e,threshold:t}=this.props,a=e===this.state.show;window.clearTimeout(this.timer),a||(this.timer=setTimeout(()=>{this.setState({show:e})},!0===e?t:0))}componentWillUnmount(){window.clearTimeout(this.timer)}render(){const{text:e,size:t}=this.props,{show:a}=this.state;return a?o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},o.a.createElement("div",null,o.a.createElement("div",{className:"lime-spin",style:{width:t,height:t,margin:"auto"}}),e&&o.a.createElement("div",{style:{textAlign:"center"}},e))):null}}l={text:"",size:30,show:!1,threshold:1e3},(i="defaultProps")in(n=c)?Object.defineProperty(n,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[i]=l,a.d(t,"a",function(){return c})},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){var n={"./AccordionPage":[25,0,9],"./AccordionPage.jsx":[25,0,9],"./ButtonPage":[28,0,10],"./ButtonPage.jsx":[28,0,10],"./CardPage":[36,0,11],"./CardPage.jsx":[36,0,11],"./CheckBoxPage":[35,0,12],"./CheckBoxPage.jsx":[35,0,12],"./ChoiceGroupPage":[26,0,13],"./ChoiceGroupPage.jsx":[26,0,13],"./CollapsiblePage":[42,0,6],"./CollapsiblePage.jsx":[42,0,6],"./DialogPage":[29,0,14],"./DialogPage.jsx":[29,0,14],"./GetStartedPage":[6],"./GetStartedPage.jsx":[6],"./LayerPage":[38,0,2],"./LayerPage.jsx":[38,0,2],"./ListPage":[39,0,3],"./ListPage.jsx":[39,0,3],"./QuickStartPage":[23,20],"./QuickStartPage.jsx":[23,20],"./RipplePage":[40,0,7],"./RipplePage.jsx":[40,0,7],"./ScrollPage":[41,0,8],"./ScrollPage.jsx":[41,0,8],"./SearchPage":[34,0,4],"./SearchPage.jsx":[34,0,4],"./SelectPage":[24,0,1],"./SelectPage.jsx":[24,0,1],"./ShimmerPage":[30,0,15],"./ShimmerPage.jsx":[30,0,15],"./SpinPage":[27,0,16],"./SpinPage.jsx":[27,0,16],"./TextFieldPage":[33,0,17],"./TextFieldPage.jsx":[33,0,17],"./TogglePage":[32,0,18],"./TogglePage.jsx":[32,0,18],"./menu/FloatMenuPage":[31,0,5],"./menu/FloatMenuPage.jsx":[31,0,5],"./menu/InlineMenuPage":[37,0,19],"./menu/InlineMenuPage.jsx":[37,0,19]};function i(e){if(!a.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],i=t[0];return Promise.all(t.slice(1).map(a.e)).then(function(){return a(i)})}i.keys=function(){return Object.keys(n)},i.id=50,e.exports=i},51:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(57),r=a(58),o=a(56),c=a(15),s=a.n(c),m=a(6),u=a(7),p=a(55);class h extends i.a.Component{render(){return i.a.createElement("a",{href:"https://github.com/piscium2010/lime",target:"_blank"},i.a.createElement("i",{className:"fab fa-github"}))}}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class g extends i.a.Component{constructor(e){super(e),d(this,"onClick",e=>{this.setState({activeK:e})}),d(this,"onScroll",e=>{if(e.target===document){const e=document.scrollingElement.scrollTop/1;e>60?this.ref.current.classList.add("hide"):e<10&&this.ref.current.classList.remove("hide")}}),this.ref=i.a.createRef(),this.logoRef=i.a.createRef(),this.state={activeK:-1}}componentDidMount(){window.addEventListener("scroll",this.onScroll,!0)}componentWillUnmount(){window.removeEventListener("scroll",this.onScroll,!0)}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"git-fixed-link"},i.a.createElement(h,null)),i.a.createElement("div",{ref:this.ref,className:"nav lime-raised"},i.a.createElement("div",{ref:this.logoRef,className:"lime-logo"},i.a.createElement(p.a,{to:"/"},"{Lime}")),i.a.createElement("div",{style:{margin:"0 18px 0",cursor:"pointer",flex:"0 0 29px"}},i.a.createElement(h,null),"Í")))}}var f=a(17),v=a.n(f);function E(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const x=({title:e,to:t,children:a,k:n,activeK:l,onClick:r=(()=>{}),...o})=>{const c=n==l?"lime-active-text lime-ribbon-right":"",s=i.a.createElement(u.a,k({title:e,className:c},o),a);return t?i.a.createElement(p.a,{to:t,onClick:r},s):s};class C extends i.a.Component{constructor(...e){super(...e),E(this,"logoTextRef",i.a.createRef()),E(this,"onClick",()=>{this.forceUpdate()})}get activeK(){let e=-1;const t=window.location.search.match(/activeK=\d+/);return t&&t.length>0&&(e=t[0].match(/\d+/)[0]),e}render(){let e=0;const t=this.activeK;return i.a.createElement("div",{className:"side-nav"},i.a.createElement("div",{className:"lime-logo"},i.a.createElement("span",{ref:this.logoTextRef,className:"lime-logo-text lime-active-text"},i.a.createElement(p.a,{to:"/"},"{Lime}"))),i.a.createElement(v.a,{style:{height:"100vh"}},i.a.createElement("div",{className:"mask"}),i.a.createElement("div",{className:"top shadow"}),i.a.createElement("ul",null,i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Quick Start",to:`/lime/quickStart?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Accordian",to:`/lime/accordion?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Button",to:`/lime/button?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Card",to:`/lime/card?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Checkbox",to:`/lime/checkbox?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"ChoiceGroup",to:`/lime/choiceGroup?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Collapsible",to:`/lime/collapsible?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Dialog",to:`/lime/dialog?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Layer",to:`/lime/layer?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"List",to:`/lime/list?activeK=${e++}`}),i.a.createElement(x,{k:e++,activeK:t,title:"Menu",defaultExpand:!0},i.a.createElement("ul",null,i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Inline",to:`/lime/menu/inlineMenu?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Float",to:`/lime/menu/floatMenu?activeK=${e++}`}))),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Ripple",to:`/lime/ripple?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Scroll",to:`/lime/scroll?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Select",to:`/lime/select?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Search",to:`/lime/search?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Shimmer",to:`/lime/shimmer?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Spin",to:`/lime/spin?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"TextField",to:`/lime/textField?activeK=${e++}`}),i.a.createElement(x,{k:e,activeK:t,onClick:this.onClick,title:"Toggle",to:`/lime/toggle?activeK=${e++}`}),i.a.createElement("div",{className:"placeholder"}))))}}var P=a(18);class b extends i.a.Component{render(){return i.a.createElement("div",{className:"footer"},i.a.createElement("div",{className:"lime-active-text desc"},"by piscium2010"))}}a(12),a(48),a(49);function y(e){return class extends i.a.Component{constructor(...e){var t,a,n;super(...e),n={loading:!1,component:null},(a="state")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}componentDidMount(){this.setState({loading:!0}),a(50)("./"+e).then(e=>{this.setState({loading:!1,component:e.default})})}render(){const{loading:e,component:t}=this.state;return t?i.a.createElement(t,this.props):i.a.createElement("div",{style:{position:"absolute",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement(P.a,{show:e,threshold:1e3}))}}}s.a.render(i.a.createElement(class extends i.a.Component{render(){return i.a.createElement(l.a,null,i.a.createElement(r.a,null,i.a.createElement(o.a,{path:"/lime/",exact:!0,component:m.default}),i.a.createElement(o.a,{path:"/lime/",component:()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{path:"/lime/",component:C}),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"main-content"},i.a.createElement(o.a,{path:"/lime/quickStart",component:y("QuickStartPage")}),i.a.createElement(o.a,{path:"/lime/button",component:y("ButtonPage")}),i.a.createElement(o.a,{path:"/lime/card",component:y("CardPage")}),i.a.createElement(o.a,{path:"/lime/accordion",component:y("AccordionPage")}),i.a.createElement(o.a,{path:"/lime/checkbox",component:y("CheckBoxPage")}),i.a.createElement(o.a,{path:"/lime/collapsible",component:y("CollapsiblePage")}),i.a.createElement(o.a,{path:"/lime/choiceGroup",component:y("ChoiceGroupPage")}),i.a.createElement(o.a,{path:"/lime/dialog",component:y("DialogPage")}),i.a.createElement(o.a,{path:"/lime/list",component:y("ListPage")}),i.a.createElement(o.a,{path:"/lime/layer",component:y("LayerPage")}),i.a.createElement(o.a,{path:"/lime/menu/inlineMenu",component:y("menu/InlineMenuPage")}),i.a.createElement(o.a,{path:"/lime/menu/floatMenu",component:y("menu/FloatMenuPage")}),i.a.createElement(o.a,{path:"/lime/ripple",component:y("RipplePage")}),i.a.createElement(o.a,{path:"/lime/scroll",component:y("ScrollPage")}),i.a.createElement(o.a,{path:"/lime/select",component:y("SelectPage")}),i.a.createElement(o.a,{path:"/lime/search",component:y("SearchPage")}),i.a.createElement(o.a,{path:"/lime/spin",component:y("SpinPage")}),i.a.createElement(o.a,{path:"/lime/start",component:y("GetStartedPage")}),i.a.createElement(o.a,{path:"/lime/shimmer",component:y("ShimmerPage")}),i.a.createElement(o.a,{path:"/lime/toggle",component:y("TogglePage")}),i.a.createElement(o.a,{path:"/lime/textField",component:y("TextFieldPage")}),i.a.createElement(b,null))),i.a.createElement(o.a,{path:"/lime/",strict:!0,component:g}))})))}},null),document.getElementById("app"))},6:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var n,i=a(0),l=a.n(i),r=a(13),o=a(52);let c=Object(o.a)(n=class extends l.a.Component{constructor(...e){var t,a,n;super(...e),n=(e=>{setTimeout(()=>{this.props.history.push("/lime/quickStart?activeK=0")},800)}),(a="onClick")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"lime-raised card"},l.a.createElement("div",{className:"lime-logo"},l.a.createElement("span",{className:"lime-logo-text"},"{Lime}")),l.a.createElement("p",{className:"desc"},"An extremly light weight react UI kit used for building your own UI component"),l.a.createElement("div",{className:"lime-flex-center start"},l.a.createElement(r.a,{className:"lime-button primary",onClick:this.onClick},"Get Started"))))}})||n},7:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(14),r=a.n(l),o=a(5),c=a.n(o);a(21);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class u extends i.a.Component{constructor(e){super(e),m(this,"onClick",e=>{if(e.target!==e.currentTarget)return;const{children:t,onClick:a=(()=>{})}=this.props,{expand:n}=this.state;this.setState({expand:!!t&&!n}),a(e)}),this.state={expand:e.defaultExpand||!1}}get expand(){return"expand"in this.props?this.props.expand:this.state.expand}render(){const{children:e,className:t="",defaultExpand:a,title:n,onClick:l,...o}=this.props,m=this.expand?i.a.createElement("i",{className:"fas fa-angle-up",style:u.arrowStyle}):i.a.createElement("i",{className:"fas fa-angle-down",style:u.arrowStyle});return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",s({className:`lime-menu-item lime-hover-text ${t}`,onClick:this.onClick},o),i.a.createElement("span",null,n),e&&m,i.a.createElement(c.a,{dark:!0})," "),i.a.createElement(r.a,{expand:this.expand},e))}}m(u,"arrowStyle",{lineHeight:"40px",float:"right",color:"currentColor"}),a.d(t,"a",function(){return u})}});