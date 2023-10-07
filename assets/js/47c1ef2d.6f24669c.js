"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var l=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return r?l.createElement(m,o(o({ref:t},p),{},{components:r})):l.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=r(7462),n=(r(7294),r(3905));const a={title:"fetch vs pull",sidebar_position:1},o=void 0,i={unversionedId:"etc/git/Fetch-vs-Pull",id:"etc/git/Fetch-vs-Pull",title:"fetch vs pull",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/etc/git/Fetch-vs-Pull.md",sourceDirName:"etc/git",slug:"/etc/git/Fetch-vs-Pull",permalink:"/lecture/etc/git/Fetch-vs-Pull",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"fetch vs pull",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"nGrinder",permalink:"/lecture/test/nGrinder"},next:{title:"Socket Mode",permalink:"/lecture/etc/slack/Socket-Mode"}},c={},u=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"\uacf5\ud1b5\uc810",id:"\uacf5\ud1b5\uc810",level:4},{value:"Fetch",id:"fetch",level:4},{value:"Pull",id:"pull",level:4},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:4}],p={toc:u},s="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/korean/news/git-fetch-vs-pull/"},"Pull vs Fetch"))),(0,n.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,n.kt)("h4",{id:"\uacf5\ud1b5\uc810"},"\uacf5\ud1b5\uc810"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"remote \uc800\uc7a5\uc18c\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \uac00\uc838\uc640 local \uc800\uc7a5\uc18c\ub97c \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud574\uc900\ub2e4.")),(0,n.kt)("h4",{id:"fetch"},"Fetch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"remote \uc800\uc7a5\uc18c\uc758 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \uac00\uc838\uc624\uae30\ub9cc \ud55c\ub2e4. "),(0,n.kt)("li",{parentName:"ul"},"\uc989, \ubcc0\uacbd\ub41c \ucee4\ubc0b\uc744 \uac00\uc838\uc624\uae30\ub9cc \ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ubcc0\uacbd \uc0ac\ud56d\uc744 local\ub85c \uac00\uc838\uc624\uae30 \uc804 \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \ub54c \uc0ac\uc6a9")),(0,n.kt)("h4",{id:"pull"},"Pull"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubcc0\uacbd\ub0b4\uc6a9\uc744 \uac00\uc838\uc624\uace0 local \uc800\uc7a5\uc18c\uc5d0 \ubcd1\ud568\ud55c\ub2e4.")),(0,n.kt)("h4",{id:"\uc0ac\uc6a9\ubc95"},"\uc0ac\uc6a9\ubc95"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fetch\ub85c \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uace0"),(0,n.kt)("li",{parentName:"ul"},"local\uc5d0\uc11c \ubcc0\uacbd \ub0b4\uc6a9\uc744 \ubcd1\ud569\ud558\uba74 \ubd88\ud544\uc694\ud55c \ucda9\ub3cc\uc744 \uc904\uc77c \uc218 \uc788\ub2e4.")))}f.isMDXComponent=!0}}]);