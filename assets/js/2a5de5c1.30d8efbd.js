"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5735],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},497:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={title:"Custom Server",tag:["frontend","next.js","custom server"]},a=void 0,l={unversionedId:"web/frontend/nextjs/Custom-Server",id:"web/frontend/nextjs/Custom-Server",title:"Custom Server",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/web/frontend/nextjs/Custom-Server.md",sourceDirName:"web/frontend/nextjs",slug:"/web/frontend/nextjs/Custom-Server",permalink:"/resource/web/frontend/nextjs/Custom-Server",draft:!1,tags:[],version:"current",frontMatter:{title:"Custom Server",tag:["frontend","next.js","custom server"]},sidebar:"tutorialSidebar",previous:{title:"Custom Errors",permalink:"/resource/web/frontend/nextjs/Custom-Errors"},next:{title:"Environment Variables",permalink:"/resource/web/frontend/nextjs/Environment-Variables"}},s={},u=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Custom Server \ub2e8\uc810",id:"custom-server-\ub2e8\uc810",level:3},{value:"1. important performance optimizations\uac00 \uc0ac\ub77c\uc9c4\ub2e4.",id:"1-important-performance-optimizations\uac00-\uc0ac\ub77c\uc9c4\ub2e4",level:4},{value:"2. Vercel \ubc30\ud3ec\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4.",id:"2-vercel-\ubc30\ud3ec\uac00-\ubd88\uac00\ub2a5\ud558\ub2e4",level:4}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/configuring/custom-server"},"Custom Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization"},"Automatic Static Optimization"))),(0,o.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c Next.js ",(0,o.kt)("inlineCode",{parentName:"li"},"next start"),"\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ub0b4\uc7a5 \uc11c\ubc84\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc Server \ucc98\ub9ac\ub97c \uc790\uc2e0\uc758 App\uc5d0 \ub9de\uac8c \uc0c1\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d Custom Server\ub3c4 \uc9c0\uc6d0\ud558\uace0 \uc788\ub2e4."),(0,o.kt)("li",{parentName:"ul"},"\uc790\uc2e0\uc758 \uc0c1\ud669\uc5d0 \ub9de\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc9c0\ub9cc, 2\uac00\uc9c0 \ub2e8\uc810\uc744 \uac00\uc9c4\ub2e4.")),(0,o.kt)("h3",{id:"custom-server-\ub2e8\uc810"},"Custom Server \ub2e8\uc810"),(0,o.kt)("h4",{id:"1-important-performance-optimizations\uac00-\uc0ac\ub77c\uc9c4\ub2e4"},"1. important performance optimizations\uac00 \uc0ac\ub77c\uc9c4\ub2e4."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c\ub294 performance optimizations \uc608\uc2dc\ub85c serverless function\uacfc Automatic Static Optimization\uc744 \uc81c\uc2dc\ud568.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getServerSideProps")," \ud639\uc740 ",(0,o.kt)("inlineCode",{parentName:"li"},"getInitialProps"),"\uac00 \uc5c6\ub294 \ud398\uc774\uc9c0\ub97c \uc790\ub3d9\uc73c\ub85c static \ud398\uc774\uc9c0\ub85c \ubcc0\ud658\ud558\ub2e4.")))),(0,o.kt)("h4",{id:"2-vercel-\ubc30\ud3ec\uac00-\ubd88\uac00\ub2a5\ud558\ub2e4"},"2. Vercel \ubc30\ud3ec\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4."))}m.isMDXComponent=!0}}]);