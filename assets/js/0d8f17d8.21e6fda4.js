"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[94],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},f="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,s=f["".concat(o,".").concat(m)]||f[m]||v[m]||l;return n?r.createElement(s,i(i({ref:t},p),{},{components:n})):r.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uc704\ud55c Interface",tag:["java","interface"]},i=void 0,c={unversionedId:"language/java/InterfaceOnlyForOne",id:"language/java/InterfaceOnlyForOne",title:"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uc704\ud55c Interface",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/language/java/InterfaceOnlyForOne.md",sourceDirName:"language/java",slug:"/language/java/InterfaceOnlyForOne",permalink:"/lecture/language/java/InterfaceOnlyForOne",draft:!1,tags:[],version:"current",frontMatter:{title:"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uc704\ud55c Interface",tag:["java","interface"]},sidebar:"tutorialSidebar",previous:{title:"Datasource\ub780?",permalink:"/lecture/language/java/DataSource"},next:{title:"Java\uc758 \uc2e4\ud589\uc6d0\ub9ac Deep Dive",permalink:"/lecture/language/java/Java\uc758-\uc2e4\ud589\uc6d0\ub9ac-Deep-Dive"}},o={},u=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Interface\uc758 \ubaa9\uc801",id:"interface\uc758-\ubaa9\uc801",level:3},{value:"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uac00\uc9c4 Interface\ub97c \uc4f0\ub294 \uc774\uc73a",id:"1\uac1c\uc758-\uad6c\ud604\uccb4\ub97c-\uac00\uc9c4-interface\ub97c-\uc4f0\ub294-\uc774\uc73a",level:3},{value:"1. \uacb0\ud569\uc744 \ub290\uc2a8\ud558\uac8c \ub9cc\ub4e4\uc5ec \uc720\uc5f0\uc131\uc744 \ub192\uc778\ub2e4",id:"1-\uacb0\ud569\uc744-\ub290\uc2a8\ud558\uac8c-\ub9cc\ub4e4\uc5ec-\uc720\uc5f0\uc131\uc744-\ub192\uc778\ub2e4",level:4},{value:"2. \uad6c\uccb4\uc801\uc778 \ud589\ub3d9\uc744 \uac15\uc81c\ud560 \uc218 \uc788\ub2e4.",id:"2-\uad6c\uccb4\uc801\uc778-\ud589\ub3d9\uc744-\uac15\uc81c\ud560-\uc218-\uc788\ub2e4",level:4},{value:"3. \ud14c\uc2a4\ud2b8\ub97c \uc704\ud55c \uad6c\ud604\uccb4\ub97c \uadf8\ub54c \uadf8\ub54c \ub9cc\ub4e4 \uc218 \uc788\uc5b4 \ud14c\uc2a4\ud2b8\uc640 Mocking\uc5d0 \uc6a9\uc758\ud558\ub2e4",id:"3-\ud14c\uc2a4\ud2b8\ub97c-\uc704\ud55c-\uad6c\ud604\uccb4\ub97c-\uadf8\ub54c-\uadf8\ub54c-\ub9cc\ub4e4-\uc218-\uc788\uc5b4-\ud14c\uc2a4\ud2b8\uc640-mocking\uc5d0-\uc6a9\uc758\ud558\ub2e4",level:4},{value:"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uc704\ud55c Interface\uc758 \ub2e8\uc810",id:"1\uac1c\uc758-\uad6c\ud604\uccb4\ub97c-\uc704\ud55c-interface\uc758-\ub2e8\uc810",level:3}],p={toc:u},f="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.baeldung.com/java-interface-single-implementation"},"Should We Create an Interface for Only One Implementation?"))),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("h3",{id:"interface\uc758-\ubaa9\uc801"},"Interface\uc758 \ubaa9\uc801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \uad6c\ud604 \ub418\uc5c8\ub294\uac00\ub85c\ubd80\ud130 \ubb34\uc5c7\uc744 \uad6c\ud604\ud588\ub294\uac00\ub97c \ubd88\ub9ac\uc2dc\ucf1c \ucd94\uc0c1\ud654\uac00 \uac00\ub2a5\ud558\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\ubaa8\ub4c8\ud654\ub97c \ud1b5\ud574 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucf54\ub4dc\uc774\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\uad6c\ud604\uccb4\uac00 \uc5b4\ub5a4 \uc5ed\ud560\uc744 \ud560 \uc9c0 \uad6c\uccb4\ud654\ud55c\ub2e4")),(0,a.kt)("h3",{id:"1\uac1c\uc758-\uad6c\ud604\uccb4\ub97c-\uac00\uc9c4-interface\ub97c-\uc4f0\ub294-\uc774\uc73a"},"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uac00\uc9c4 Interface\ub97c \uc4f0\ub294 \uc774\uc73a"),(0,a.kt)("h4",{id:"1-\uacb0\ud569\uc744-\ub290\uc2a8\ud558\uac8c-\ub9cc\ub4e4\uc5ec-\uc720\uc5f0\uc131\uc744-\ub192\uc778\ub2e4"},"1. \uacb0\ud569\uc744 \ub290\uc2a8\ud558\uac8c \ub9cc\ub4e4\uc5ec \uc720\uc5f0\uc131\uc744 \ub192\uc778\ub2e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\ubd80\uc5d0\uc11c Interface\ub97c \uc758\uc874\ud558\uae30 \ub54c\ubb38\uc5d0 \uad6c\ud604\uccb4\uc640\uc758 \uc758\uc874\uc131\uc774 \ub290\uc2a8\ud574\uc9c4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub294 \uace7 \uad6c\ud604\uccb4\uac00 \uc5bc\ub9c8\ub4e0\uc9c0 \ucd94\uac00\ub420 \uc218 \uc788\uace0 \ucd94\uac00\ub418\uc5b4\ub3c4 \uc0ac\uc6a9\ubd80\uc758 \ubcc0\ud654\uac00 \uc5c6\ub2e4\ub294 \uc758\ubbf8"),(0,a.kt)("li",{parentName:"ul"},"\uc989, \ud655\uc7a5\uc5d0 \uc6a9\uc758\ud558\ub2e4")),(0,a.kt)("h4",{id:"2-\uad6c\uccb4\uc801\uc778-\ud589\ub3d9\uc744-\uac15\uc81c\ud560-\uc218-\uc788\ub2e4"},"2. \uad6c\uccb4\uc801\uc778 \ud589\ub3d9\uc744 \uac15\uc81c\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("h4",{id:"3-\ud14c\uc2a4\ud2b8\ub97c-\uc704\ud55c-\uad6c\ud604\uccb4\ub97c-\uadf8\ub54c-\uadf8\ub54c-\ub9cc\ub4e4-\uc218-\uc788\uc5b4-\ud14c\uc2a4\ud2b8\uc640-mocking\uc5d0-\uc6a9\uc758\ud558\ub2e4"},"3. \ud14c\uc2a4\ud2b8\ub97c \uc704\ud55c \uad6c\ud604\uccb4\ub97c \uadf8\ub54c \uadf8\ub54c \ub9cc\ub4e4 \uc218 \uc788\uc5b4 \ud14c\uc2a4\ud2b8\uc640 Mocking\uc5d0 \uc6a9\uc758\ud558\ub2e4"),(0,a.kt)("h3",{id:"1\uac1c\uc758-\uad6c\ud604\uccb4\ub97c-\uc704\ud55c-interface\uc758-\ub2e8\uc810"},"1\uac1c\uc758 \uad6c\ud604\uccb4\ub97c \uc704\ud55c Interface\uc758 \ub2e8\uc810"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ub3c4\ub97c \uc99d\uac00\uc2dc\ud0a4\uace0 \ucf54\ub4dc\ub97c \ub354 \ub9ce\uc774 \uc791\uc131\ud574\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uad6c\ud604\uccb4\uac00 \uc808\ub300 \ub298\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4\uba74 \ud070 \uc774\uc810\uc774 \uc5c6\uc744 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uad6c\ud604\uccb4\uac00 \ucd94\uac00\ub420 \ub54c Interface\ub97c \ub9cc\ub4dc\ub294 \uac8c \ub098\uc744 \uc218\ub3c4 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud0c0 \ubaa8\ub4c8\uc5d0 \ub300\ud55c \uc885\uc18d\uc131\uc774 \uc5c6\uc744 \uacbd\uc6b0 \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc774\uc810\uc774 \uc801\uc744 \uc218 \uc788\ub2e4.")))}v.isMDXComponent=!0}}]);