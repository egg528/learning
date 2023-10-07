"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8040],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,k=u["".concat(i,".").concat(f)]||u[f]||d[f]||c;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const c={title:"Socket Mode",sidebar_position:1},a=void 0,l={unversionedId:"etc/slack/Socket-Mode",id:"etc/slack/Socket-Mode",title:"Socket Mode",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/etc/slack/Socket-Mode.md",sourceDirName:"etc/slack",slug:"/etc/slack/Socket-Mode",permalink:"/lecture/etc/slack/Socket-Mode",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Socket Mode",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"fetch vs pull",permalink:"/lecture/etc/git/Fetch-vs-Pull"},next:{title:"View",permalink:"/lecture/etc/slack/View"}},i={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"Socket Mode",id:"socket-mode",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api.slack.com/apis/connections/socket"},"Socket Mode Intro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://slack.dev/java-slack-sdk/guides/getting-started-with-bolt-socket-mode"},"Getting Started with Bolt"))),(0,o.kt)("h2",{id:"socket-mode"},"Socket Mode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud604\uc7ac \ud68c\uc0ac \ub0b4\ubd80 \uac1c\ubc1c\ub9dd\uc5d0\uc11c\ub294 public endpoint\uac00 \uc81c\uacf5\ub418\uc9c0 \uc54a\uc74c."),(0,o.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ud560 \uc11c\ubc84\uac00 public endpoint\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc744 \uacbd\uc6b0 \ub300\uc548\uc774 \ub428.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc6455"},"WebSocket Protocol")),(0,o.kt)("li",{parentName:"ul"},"Slack Socket\uc740 \uc704 protocol\uc744 \uc774\uc6a9\ud55c\ub2e4.")))))}d.isMDXComponent=!0}}]);