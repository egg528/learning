"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5330],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>d});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function n(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):n(n({},t),e)),l},k=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},o="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),o=m(l),s=r,d=o["".concat(p,".").concat(s)]||o[s]||N[s]||i;return l?a.createElement(d,n(n({ref:t},k),{},{components:l})):a.createElement(d,n({ref:t},k))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=l.length,n=new Array(i);n[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[o]="string"==typeof e?e:r,n[1]=u;for(var m=2;m<i;m++)n[m]=l[m];return a.createElement.apply(null,n)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},9300:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>o,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=l(7462),r=(l(7294),l(3905));const i={title:"04. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",sidebar_position:4},n=void 0,u={unversionedId:"book/system-design-interview/five",id:"book/system-design-interview/five",title:"04. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",description:"1. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",source:"@site/docs/book/system-design-interview/five.md",sourceDirName:"book/system-design-interview",slug:"/book/system-design-interview/five",permalink:"/docs/book/system-design-interview/five",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/book/system-design-interview/five.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"04. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"03. \uc2dc\uc2a4\ud15c \uc124\uacc4 \uba74\uc811 \uacf5\ub7b5\ubc95",permalink:"/docs/book/system-design-interview/three"},next:{title:"04. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",permalink:"/docs/book/system-design-interview/four"}},p={},m=[{value:"1. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",id:"1-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uc124\uacc4",level:2},{value:"1\ub2e8\uacc4: \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815",id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815",level:2},{value:"2\ub2e8\uacc4: \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30",id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30",level:2},{value:"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub97c \uc5b4\ub514\uc5d0 \ub458 \uac83\uc778\uac00?",id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\ub97c-\uc5b4\ub514\uc5d0-\ub458-\uac83\uc778\uac00",level:3},{value:"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998",id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc54c\uace0\ub9ac\uc998",level:3},{value:"(1) \ud1a0\ud070 \ubc84\ud0b7 \uc54c\uace0\ub9ac\uc998",id:"1-\ud1a0\ud070-\ubc84\ud0b7-\uc54c\uace0\ub9ac\uc998",level:4},{value:"(2) \ub204\ucd9c \ubc84\ud0b7 \uc54c\uace0\ub9ac\uc998",id:"2-\ub204\ucd9c-\ubc84\ud0b7-\uc54c\uace0\ub9ac\uc998",level:4},{value:"(3) \uace0\uc815 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998",id:"3-\uace0\uc815-\uc708\ub3c4-\uce74\uc6b4\ud130-\uc54c\uace0\ub9ac\uc998",level:4},{value:"(4) \uc774\ub3d9 \uc708\ub3c4 \ub85c\uae45 \uc54c\uace0\ub9ac\uc998",id:"4-\uc774\ub3d9-\uc708\ub3c4-\ub85c\uae45-\uc54c\uace0\ub9ac\uc998",level:4},{value:"(5) \uc774\ub3d9 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998",id:"5-\uc774\ub3d9-\uc708\ub3c4-\uce74\uc6b4\ud130-\uc54c\uace0\ub9ac\uc998",level:4},{value:"3\ub2e8\uacc4: \uc0c1\uc138 \uc124\uacc4",id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4",level:2},{value:"\ucc98\ub9ac\uc728 \ud55c\ub3c4 \ucd08\uacfc \ud2b8\ub798\ud53d \ucc98\ub9ac \uc804\ub7b5",id:"\ucc98\ub9ac\uc728-\ud55c\ub3c4-\ucd08\uacfc-\ud2b8\ub798\ud53d-\ucc98\ub9ac-\uc804\ub7b5",level:3},{value:"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uad6c\ud604",id:"\ubd84\uc0b0-\ud658\uacbd\uc5d0\uc11c\uc758-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uad6c\ud604",level:3},{value:"\uc131\ub2a5 \ucd5c\uc801\ud654",id:"\uc131\ub2a5-\ucd5c\uc801\ud654",level:3},{value:"\ubaa8\ub2c8\ud130\ub9c1",id:"\ubaa8\ub2c8\ud130\ub9c1",level:3},{value:"4\ub2e8\uacc4: \ub9c8\ubb34\ub9ac, \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc885\ub958",id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uc885\ub958",level:2}],k={toc:m};function o(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uc124\uacc4"},"1. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub610\ub294 \uc11c\ube44\uc2a4\uac00 \ubcf4\ub0b4\ub294 \ud2b8\ub798\ud53d \ucc98\ub9ac\uc728\uc744 \uc81c\uc5b4\ud558\uae30 \uc704\ud55c \uc7a5\uce58",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uba74 HTTP \uc694\uccad \ud69f\uc218"),(0,r.kt)("li",{parentName:"ul"},"\uc784\uacc4\uce58(threshold)\ub97c \ub118\uc5b4\uac00\uba74 \ubaa8\ub4e0 \uc694\uccad\uc740 \uc911\ub2e8\ub418\ub294 \ubc29\uc2dd"))),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub294 \uc65c \ud544\uc694\ud560\uae4c?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DoS \uacf5\uaca9\uc5d0 \uc758\ud55c \uc790\uc6d0 \uace0\uac08 \ubc29\uc9c0"),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84 \ube44\uc6a9 \uc808\uac10(\uc0ac\uc6a9\uc131\uc740 \ub5a8\uc5b4\uc9d0), \ud2b9\ud788 \uc0ac\uc6a9\ub8cc\ub97c \uc9c0\ubd88\ud558\ub294 API\ub77c\uba74 \uc81c\ud55c\uc744 \uc911\uc694\ud558\uac8c \uace0\ub824\ud574\uc57c \ud568"),(0,r.kt)("li",{parentName:"ul"},"\ubd07\uacfc \uac19\uc740 \uc798\ubabb\ub41c \uc774\uc6a9 \ud328\ud134\uc73c\ub85c \uc720\ubc1c\ub41c \ud2b8\ub798\ud53d\uc744 \uac78\ub7ec\ub0bc \uc218 \uc788\ub2e4.")))),(0,r.kt)("h2",{id:"1\ub2e8\uacc4-\ubb38\uc81c-\uc774\ud574-\ubc0f-\uc124\uacc4-\ubc94\uc704-\ud655\uc815"},"1\ub2e8\uacc4: \ubb38\uc81c \uc774\ud574 \ubc0f \uc124\uacc4 \ubc94\uc704 \ud655\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uba74\uc811\uad00\uacfc \uc18c\ud1b5\uc744 \ud1b5\ud574 \uc5b4\ub5a4 \uc81c\ud55c \uc7a5\uce58\ub97c \uad6c\ud604\ud574\uc57c \ud558\ub294\uc9c0 \ud655\uc778\ud560 \uac83"),(0,r.kt)("li",{parentName:"ul"},"\uc54c\uace0\ub9ac\uc998\ub9c8\ub2e4 \uace0\uc720\uc758 \uc7a5\ub2e8\uc810\uc774 \uc788\ub294\ub370 \uc694\uad6c\uc0ac\ud56d\uc744 \ud30c\uc545\ud574\uc57c \uc801\uc808\ud55c \uc54c\uace0\ub9ac\uc998\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("h2",{id:"2\ub2e8\uacc4-\uac1c\ub7b5\uc801-\uc124\uacc4\uc548-\uc81c\uc2dc-\ubc0f-\ub3d9\uc758-\uad6c\ud558\uae30"},"2\ub2e8\uacc4: \uac1c\ub7b5\uc801 \uc124\uacc4\uc548 \uc81c\uc2dc \ubc0f \ub3d9\uc758 \uad6c\ud558\uae30"),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\ub97c-\uc5b4\ub514\uc5d0-\ub458-\uac83\uc778\uac00"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub97c \uc5b4\ub514\uc5d0 \ub458 \uac83\uc778\uac00?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8, \uc11c\ubc84\uc5d0 \ub458 \uc218 \uc788\uc744 \uac83\uc774\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8: \uc704\ubcc0\uc870\uac00 \uc26c\uc6cc \uc548\uc815\uc801\uc778 \ucc98\ub9ac\uc728 \uc81c\ud55c\uc744 \uac78\uae30\uc5d0\ub294 \ud55c\uacc4\uac00 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84: API \uc11c\ubc84 \ub0b4\ubd80\uc5d0 \ub458 \uc218\ub3c4 \uc788\uace0, \uc678\ubd80\uc5d0 middleware(\ub610\ub294 API Gateway)\ub85c \uad6c\uc131\ud560 \uc218\ub3c4 \uc788\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uc5d0 \ub458 \ub54c \uace0\ubbfc\ud574\ubcfc \uac83",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac \uc0ac\uc6a9\ud558\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4 \ub610\ub294 \ud504\ub808\uc784 \uc6cc\ud06c\uac00 \uc11c\ubc84\uce21 \uad6c\ud604\uae4c\uc9c0 \uc9c0\uc6d0\ud558\uae30\uc5d0 \ucda9\ubd84\ud788 \ud6a8\uc728\uc801\uc778\uac00?"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc54c\uace0\ub9ac\uc998\uc740 \ubb34\uc5c7\uc744 \uc120\ud0dd\ud560 \uac83\uc778\uac00?"),(0,r.kt)("li",{parentName:"ul"},"\uae30\uc874 \uc124\uacc4\uc5d0 API Gateway\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uac00?")))),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc54c\uace0\ub9ac\uc998"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("h4",{id:"1-\ud1a0\ud070-\ubc84\ud0b7-\uc54c\uace0\ub9ac\uc998"},"(1) \ud1a0\ud070 \ubc84\ud0b7 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc81c\ud55c\ub41c \uc6a9\ub7c9\uc774 \uc788\ub294 \ubc84\ud0b7\uc5d0 \uc9c0\uc815\ub41c \uc2dc\uac04\ub9c8\ub2e4 \uc9c0\uc815\ub41c \uac1c\uc218\uc758 \ud1a0\ud070\uc774 \uacf5\uae09\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uacf5\uae09\ub41c \ud1a0\ud070 \uc911 \uc6a9\ub7c9\uc744 \ucd08\uacfc\ud558\uace0 \ub0a8\uc740 \uac83\uc740 \ubc84\ub824\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub9e4 \uc694\uccad\uc740 \ubc84\ud0b7\uc5d0\uc11c \ud1a0\ud070\uc744 \uc5bb\uace0 \uc2e4\ud589\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc815\ud574\uc918\uc57c \ud558\ub294 \uac12",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \ud06c\uae30"),(0,r.kt)("li",{parentName:"ul"},"\ud1a0\ud070 \uacf5\uae09\ub960"),(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \uac1c\uc218"))),(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uad6c\ud604\uc774 \uc27d\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc5d0 \uc788\uc5b4 \ud6a8\uc728\uc801\uc774\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3\uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218\ub4e4\uc758 \ucd5c\uc801\ud654\uac00 \uae4c\ub2e4\ub86d\ub2e4.")))),(0,r.kt)("h4",{id:"2-\ub204\ucd9c-\ubc84\ud0b7-\uc54c\uace0\ub9ac\uc998"},"(2) \ub204\ucd9c \ubc84\ud0b7 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud050\ub97c \ub450\uace0 \uc694\uccad\uc744 \ub2f4\ub294\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud050\uac00 \uac00\ub4dd \ucc28\uc788\ub2e4\uba74 \uc694\uccad\uc740 \ubc84\ub824\uc9c0\uace0, \uc9c0\uc815\ub41c \uc2dc\uac04\ub9c8\ub2e4 \ud050\uc5d0\uc11c \uc694\uccad\uc744 \uaebc\ub0b4 \ucc98\ub9ac\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc9c0\uc815\ud574\uc918\uc57c \ud558\ub294 \uac12",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubc84\ud0b7 \ud06c\uae30: \ud050 \uc0ac\uc774\uc988\uc640 \uac19\uc740 \uac12"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728: \uc9c0\uc815\ub41c \uc2dc\uac04\uc5d0 \uba87 \uac1c\uc758 \ud56d\ubaa9\uc744 \ucc98\ub9ac\ud560 \uac83\uc778\uc9c0"))),(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud06c\uae30\uac00 \uc81c\ud55c\ub418\uc5b4 \uc788\uc5b4 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\uc5d0 \uc788\uc5b4 \ud6a8\uc728\uc801\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uace0\uc815\ub41c \ucc98\ub9ac\uc728\uc774 \uc788\uc5b4 \uc548\uc815\uc801\uc778 \ucd9c\ub825\uc774 \uac00\ub2a5\ud558\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc2dc\uac04\uc5d0 \ud2b8\ub798\ud53d\uc774 \ubab0\ub9b4 \uacbd\uc6b0 \ud050\uc5d0\ub294 \uc624\ub798\ub41c \uc694\uccad\ub4e4\ub9cc \uc313\uc774\uac8c \ub420 \uc218 \uc788\ub2e4.(\ucd5c\uc2e0 \uc694\uccad\ub4e4\uc740 \ubc84\ub824\uc9d0)"),(0,r.kt)("li",{parentName:"ul"},"2\uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218 \ucd5c\uc801\ud654\uac00 \uae4c\ub2e4\ub86d\ub2e4")))),(0,r.kt)("h4",{id:"3-\uace0\uc815-\uc708\ub3c4-\uce74\uc6b4\ud130-\uc54c\uace0\ub9ac\uc998"},"(3) \uace0\uc815 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud0c0\uc784 \ub77c\uc778\uc744 \uace0\uc815\ub41c \uac04\uaca9\uc778 \uc708\ub3c4(window)\ub85c \ub098\ub204\uace0 \uac01 \uc708\ub3c4\ub294 \uace0\uc815\ub41c \uce74\uc6b4\ud130(\ud5c8\uc6a9\ub41c \ucc98\ub9ac \uac1c\uc218)\ub97c \uac00\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \uc811\uc218\ub420 \ub54c\ub9c8\ub2e4 \uce74\uc6b4\ud130\ub294 1\uc529 \uc99d\uac00\ud558\uace0 \uc124\uc815\uac12\uc744 \ucd08\uacfc\ud558\uba74 \uc0c8 \uc708\ub3c4\uac00 \uc5f4\ub9b4 \ub54c\uae4c\uc9c0 \uc694\uccad\uc774 \ubc84\ub824\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ud6a8\uc728\uc774 \uc88b\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ud574\uac00 \uc27d\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud2b8\ub798\ud53d \ud328\ud134\uc744 \ucc98\ub9ac\ud558\uae30\uc5d0 \uc801\ud569\ud558\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc708\ub3c4 \uacbd\uacc4 \ubd80\uadfc\uc5d0\uc11c \uc77c\uc2dc\uc801\uc73c\ub85c \ub9ce\uc740 \ud2b8\ub798\ud53d\uc774 \ubab0\ub9ac\uba74 \uae30\ub300\ud588\ub358 \ucc98\ub9ac \ud55c\ub3c4\ub97c \ucd08\uacfc\ud558\ub294 \uc591\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4.")))),(0,r.kt)("h4",{id:"4-\uc774\ub3d9-\uc708\ub3c4-\ub85c\uae45-\uc54c\uace0\ub9ac\uc998"},"(4) \uc774\ub3d9 \uc708\ub3c4 \ub85c\uae45 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad \ucc98\ub9ac \uc2dc\uac04\uc744 \ub85c\uadf8\ub85c \uc313\ub294\ub2e4(\uc608\ub97c \ub4e4\uba74 redis\uc5d0)"),(0,r.kt)("li",{parentName:"ul"},"\uac01 \uc694\uccad\uc740 \uc124\uc815\ub41c \uc2dc\uac04\ub9cc\ud07c \uc800\uc7a5\ub418\uc5c8\ub2e4 \uc81c\uac70\ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \ub4e4\uc5b4\uc654\uc744 \ub54c \uc313\uc5ec\uc788\ub294 \ub85c\uadf8 \uc218\ub85c \ucc98\ub9ac \uac00\ub2a5 \uc5ec\ubd80\ub97c \ud310\ub2e8\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uace0\uc815 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998\uacfc \ub2ec\ub9ac \uc5b4\ub290 \uc2dc\uc810\uc5d0 \ucc98\ub9ac\uc728\uc744 \ubcf4\ub354\ub77c\ub3c4 \uc124\uc815\ud55c \uac12\uc744 \ub118\uc9c0 \uc54a\ub294\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub7c9\uc758 \uba54\ubaa8\ub9ac\ub97c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4.")))),(0,r.kt)("h4",{id:"5-\uc774\ub3d9-\uc708\ub3c4-\uce74\uc6b4\ud130-\uc54c\uace0\ub9ac\uc998"},"(5) \uc774\ub3d9 \uc708\ub3c4 \uce74\uc6b4\ud130 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6b0\uc120 (3)\uacfc \uac19\uc774 \uace0\uc815\ub41c \uc708\ub3c4\uc640 \uce74\uc6b4\ud130\ub97c \uac00\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub2e8, \ud604\uc7ac \ucc98\ub9ac\uc728\uc744 \uacc4\uc0b0\ud560 \ub54c \uc774\uc804 \uc708\ub3c4\uc640 \ud604\uc7ac \uc708\ub3c4\uc758 \ube44\uc728\uc744 \uace0\ub824\ud558\ub294\ub370"),(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \uc704\ub3c4 \ud06c\uae30\ub294 100\ucd08\uc774\uace0 \ud604\uc7ac \uc0c8\ub85c\uc6b4 \uc708\ub3c4\uc758 30\ucd08 \uc2dc\uc810\uc774\ub77c\uace0 \uac00\uc815\ud574\ubcf4\uc790"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\ub7c9 \uacc4\uc0b0 \uacf5\uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4 (\uc774\uc804 \uc708\ub3c4 \uc694\uccad \uc218 * 0.7 + \ud604\uc7ac \uc708\ub3c4 \uc694\uccad \uc218)"),(0,r.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"(3)\uc5d0 \ube44\ud574 \uc9e7\uc740 \uc2dc\uac04\uc5d0 \ubab0\ub9ac\ub294 \ud2b8\ub798\ud53d\uc5d0\ub3c4 \uc798 \ub3d9\uc791\ud55c\ub2e4"),(0,r.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac \ud6a8\uc728\uc774 \uc88b\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad\uc774 \uade0\ub4f1\ud558\uac8c \ubd84\ud3ec\ub418\uc5b4 \uc788\ub2e4\uace0 \uac00\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uac00 \ub2e4\uc18c \ub290\uc2a8\ud558\ub2e4.")))),(0,r.kt)("h2",{id:"3\ub2e8\uacc4-\uc0c1\uc138-\uc124\uacc4"},"3\ub2e8\uacc4: \uc0c1\uc138 \uc124\uacc4"),(0,r.kt)("h3",{id:"\ucc98\ub9ac\uc728-\ud55c\ub3c4-\ucd08\uacfc-\ud2b8\ub798\ud53d-\ucc98\ub9ac-\uc804\ub7b5"},"\ucc98\ub9ac\uc728 \ud55c\ub3c4 \ucd08\uacfc \ud2b8\ub798\ud53d \ucc98\ub9ac \uc804\ub7b5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP Header\ub97c \ud1b5\ud574 \ud604\uc7ac \uac00\ub2a5\ud55c \ucc98\ub9ac\uc728 \uc0c1\ud0dc\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc54c\ub9b4 \uc218 \uc788\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"X-Ratelimit-Remaining: \uc708\ub3c4 \ub0b4\uc5d0 \ub0a8\uc740 \ucc98\ub9ac \uac00\ub2a5 \uc694\uccad\uc758 \uc218"),(0,r.kt)("li",{parentName:"ul"},"X-Ratelimit-Limit: \ub9e4 \uc708\ub3c4\ub9c8\ub2e4 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uc804\uc1a1\ud560 \uc218 \uc788\ub294 \uc694\uccad\uc758 \uc218"),(0,r.kt)("li",{parentName:"ul"},"X-Ratelimit-Retry-After: \ud55c\ub3c4 \uc81c\ud55c\uc5d0 \uac78\ub9ac\uc9c0 \uc54a\uc73c\ub824\uba74 \uba87 \ucd08 \ub4a4\uc5d0 \uc694\uccad\uc744 \ub2e4\uc2dc \ubcf4\ub0b4\uc57c \ud558\ub294\uc9c0 \uc54c\ub9bc"),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \ub108\ubb34 \ub9ce\uc740 \uc694\uccad\uc744 \ubcf4\ub0b4\uba74 429 too many requests\uc640 \ud568\uaed8 X-Ratelimit-Retry-After\ub97c \ubcf4\ub0b4\uc790!")))),(0,r.kt)("h3",{id:"\ubd84\uc0b0-\ud658\uacbd\uc5d0\uc11c\uc758-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uad6c\ud604"},"\ubd84\uc0b0 \ud658\uacbd\uc5d0\uc11c\uc758 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uad6c\ud604"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\uacbd\uc7c1 \uc870\uac74"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"redis\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc740 \ub3d9\uc791\uc744 \uc218\ud589\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"(1) redis\uc5d0\uc11c \ucc98\ub9ac \uac12\uc744 \uac00\uc838\uc628\ub2e4 (2) \ucc98\ub9ac \uac12 + 1\uc774 \uc784\uacc4\uce58\ub97c \ub118\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4. (3) \ub808\ub514\uc2a4\uc5d0 \ubcf4\uad00\ub41c \uce74\uc6b4\ud130 \uac12\uc744 1\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0a8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub294 \uacbd\uc7c1 \uc870\uac74\uc744 \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub77d(Lock)\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc73c\ub098 \uc131\ub2a5\uc744 \uc0c1\ub2f9\ud788 \ub5a8\uc5b4\ub728\ub9b0\ub2e4..."),(0,r.kt)("li",{parentName:"ul"},"\ucc45\uc5d0\uc11c\ub294 \ub8e8\uc544 \uc2a4\ud06c\ub9bd\ud2b8/redis \uc815\ub82c \uc9d1\ud569\uc774\ub77c\ub294 \uac1c\ub150\ub9cc \ub358\uc838\uc900\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ub3d9\uae30\ud654 \uc774\uc288"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uac00 \ub298\uc5b4\ub098\uba74 \ub3d9\uae30\ud654\uac00 \ud544\uc694\ud574\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"redis\uc640 \uac19\uc740 \uc911\uc559 \uc9d1\uc911\ud615 \ub370\uc774\ud130 \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub3d9\uae30\ud654 \uc774\uc288\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub2e4.")))),(0,r.kt)("h3",{id:"\uc131\ub2a5-\ucd5c\uc801\ud654"},"\uc131\ub2a5 \ucd5c\uc801\ud654"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae00\ub85c\ubc8c \uc11c\ube44\uc2a4\uc758 \uacbd\uc6b0 \uc5ec\ub7ec\ub300\uc758 \uc5e3\uc9c0 \uc11c\ubc84\ub97c \ub450\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uac00\uc7a5 \uac00\uae4c\uc6b4 \uc11c\ubc84\ub85c \ud2b8\ub798\ud53d\uc774 \uc804\ub2ec\ub418\ub3c4\ub85d \uc131\ub2a5\uc744 \ucd5c\uc801\ud654\ud560 \uac83\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \uc5ec\ub7ec\ub300\uc758 \uc11c\ubc84\ub97c \ub450\uba74 \ub3d9\uae30\ud654 \ubb38\uc81c\ub97c \ub2e4\ub904\uc57c \ud558\ub294\ub370 \uc774\ub54c ",(0,r.kt)("inlineCode",{parentName:"li"},"\ucd5c\uc885 \uc77c\uad00\uc131 \ubaa8\ub378"),"\uc744 \uc0ac\uc6a9\ud558\ub77c\uace0 \uad8c\ud55c\ub2e4 (\ucd5c\uc885 \uc77c\uad00\uc131 \ubaa8\ub378\uc740 6\uc7a5\uc5d0\uc11c..)")),(0,r.kt)("h3",{id:"\ubaa8\ub2c8\ud130\ub9c1"},"\ubaa8\ub2c8\ud130\ub9c1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uac00 \uc798 \ub3d9\uc791\ud558\ub294\uc9c0 \ubaa8\ub2c8\ud130\ub9c1\uc744 \ud1b5\ud574 \ud655\uc778\ud560 \ubd80\ubd84\uc740 2\uac00\uc9c0\uc774\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucc44\ud0dd\ub41c \ucc98\ub9ac\uc728 \uc81c\ud55c \uc54c\uace0\ub9ac\uc998\uc774 \ud6a8\uacfc\uc801\uc778\uac00?"),(0,r.kt)("li",{parentName:"ul"},"\uc815\uc758\ud55c \ucc98\ub9ac\uc728 \uc81c\ud55c \uaddc\uce59\uc774 \ud6a8\uacfc\uc801\uc778\uac00?"))),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \uc704\ud574 \uc544\ub798 2\uac00\uc9c0 \ub370\uc774\ud130\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub3c4\ub85d \uc900\ube44\uac00 \ud544\uc694\ud558\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub108\ubb34 \ub9ce\uc740 \uc720\ud6a8 \uc694\uccad\uc774 \ubc84\ub824\uc9c0\uc9c0\ub294 \uc54a\uc558\ub294\uac00?"),(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8\uc131\uc73c\ub85c \ud2b8\ub798\ud53d\uc774 \uae09\uc99d\ud560 \ub54c\ub3c4 \uc694\uccad\uc744 \uc798 \ubc1b\uc544\ub0b4\ub294\uac00?")))),(0,r.kt)("h2",{id:"4\ub2e8\uacc4-\ub9c8\ubb34\ub9ac-\ucc98\ub9ac\uc728-\uc81c\ud55c-\uc7a5\uce58\uc758-\uc885\ub958"},"4\ub2e8\uacc4: \ub9c8\ubb34\ub9ac, \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc885\ub958"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uacbd\uc131 \ub610\ub294 \uc5f0\uc131",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uacbd\uc131: \uc784\uacc4\uce58\ub97c \uc808\ub300 \ub118\uc744 \uc218 \uc5c6\uc74c"),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uc131: \uc784\uacc4\uce58\ub97c \ub118\uc744 \uc218 \uc788\uc74c"))),(0,r.kt)("li",{parentName:"ul"},"\uacc4\uce35\ubcc4 \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58"),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c\uc744 \ud68c\ud53c\ud558\ub294 \ubc29\ubc95",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uce21 Cache \ud65c\uc6a9\ud558\uc5ec API \ud638\ucd9c \ud69f\uc218\ub97c \uc904\uc778\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucc98\ub9ac\uc728 \uc81c\ud55c \uc784\uacc4\uce58\ub97c \uc774\ud574\ud558\uace0 \uc774\uc5d0 \ub9de\uac8c \uc694\uccad\ud558\ub3c4\ub85d \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \uac1c\ubc1c\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc678\ub098 \uc5d0\ub7ec \ucc98\ub9ac \ucf54\ub4dc\ub97c \ub3c4\uc785\ud558\uc5ec \uc81c\ud55c\uc5d0 \uac78\ub824\ub3c4 \ubcf5\uad6c\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uac1c\ubc1c\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucda9\ubd84\ud55c \ubc31\uc624\ud504(back-off) \uc2dc\uac04\uc744 \ub450\uace0 \uc7ac\uc2dc\ub3c4 \ub85c\uc9c1\uc744 \uad6c\ud604\ud55c\ub2e4.")))))}o.isMDXComponent=!0}}]);