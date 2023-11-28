"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=l,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={title:"\ubbf8\uc815",tag:["backend","spring"]},o=void 0,i={unversionedId:"how-many-requests-can-spring-mvc-handle",id:"how-many-requests-can-spring-mvc-handle",title:"\ubbf8\uc815",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/project/how-many-requests-can-spring-mvc-handle.md",sourceDirName:".",slug:"/how-many-requests-can-spring-mvc-handle",permalink:"/project/how-many-requests-can-spring-mvc-handle",draft:!1,tags:[],version:"current",frontMatter:{title:"\ubbf8\uc815",tag:["backend","spring"]},sidebar:"tutorialSidebar",previous:{title:"2\uc7a5 \ud0c0\uc785 \uc2a4\ud06c\ub9bd\ud2b8\uc758 \ud0c0\uc785 \uc2dc\uc2a4\ud15c  (Item 6 ~ 18)",permalink:"/project/effective-typescript/two"},next:{title:"\uc2a4\ud504\ub9c1\uc73c\ub85c \uc2dc\uc791\ud558\ub294 \ub9ac\uc561\ud2f0\ube0c \ud504\ub85c\uadf8\ub798\ubc0d",permalink:"/project/category/\uc2a4\ud504\ub9c1\uc73c\ub85c-\uc2dc\uc791\ud558\ub294-\ub9ac\uc561\ud2f0\ube0c-\ud504\ub85c\uadf8\ub798\ubc0d"}},c={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Synchronous\uc640 Asynchronous, Blocking\uacfc Non-Blocking",id:"synchronous\uc640-asynchronous-blocking\uacfc-non-blocking",level:3},{value:"RestTemplate vs WebClient",id:"resttemplate-vs-webclient",level:3},{value:"RestTemplate",id:"resttemplate",level:4},{value:"WebClient",id:"webclient",level:4}],s={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://musma.github.io/2019/04/17/blocking-and-synchronous.html"},"\ub3d9\uae30\uc640 \ube44\ub3d9\uae30, Blocking\uacfc Non-Blocking")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://happycloud-lee.tistory.com/220"},"1\ub300\uc758 \uc11c\ubc84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ucd5c\ub300 \uba87 \uac1c\uc758 \ub3d9\uc2dc \uc694\uccad\uc744 \uac10\ub2f9\ud560 \uc218 \uc788\uc744\uae4c?")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://oliveyoung.tech/blog/2022-11-10/oliveyoung-discovery-premium-webclient/"},"\uc2e0\uaddc \uc804\uc2dc \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c WebClient \uc0ac\uc6a9\ud558\uae30")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/reference/web/webflux-webclient.html"},"WebClient Docs"))),(0,l.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,l.kt)("h3",{id:"synchronous\uc640-asynchronous-blocking\uacfc-non-blocking"},"Synchronous\uc640 Asynchronous, Blocking\uacfc Non-Blocking"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Synchronous\uc640 Asynchronous"),": \ud638\ucd9c\ud55c \ud568\uc218\uac00 \ud638\ucd9c\ub41c \ud568\uc218\uc758 \uc218\ud589 \uacb0\uacfc\ub97c \uc2e0\uacbd\uc4f0\ub294\uc9c0 \uc5ec\ubd80\ub97c \uc758\ubbf8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Synchronous: \ud638\ucd9c\ud55c \ud568\uc218\uac00 \ud638\ucd9c\ub41c \ud568\uc218\uc758 \uc218\ud589 \uacb0\uacfc\uc640 \uc885\ub8cc\ub97c \uc2e0\uacbd\uc500."),(0,l.kt)("li",{parentName:"ul"},"Asynchronous: \ud638\ucd9c\ud55c \ud568\uc218\uac00 \ud638\ucd9c\ub41c \ud568\uc218\uc758 \uc218\ud589 \uacb0\uacfc\uc640 \uc885\ub8cc\uc5d0 \uc2e0\uacbd\uc744 \uc4f0\uc9c0 \uc54a\uc74c. (\ud638\ucd9c\ub41c \ud568\uc218\uac00 \ud63c\uc790 \ucc98\ub9ac)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Blocking\uacfc Non-Blocking"),": \ud568\uc218\ub97c \ud638\ucd9c\ud558\uac8c \ub418\uba74 \uc81c\uc5b4\uad8c\uc774 \ud638\ucd9c\ub41c \ud568\uc218\ub85c \ub118\uc5b4\uac04\ub2e4. \uc774\ub54c \ud638\ucd9c\ud55c \ud568\uc218\uc5d0\uac8c \uc5b8\uc81c \uc81c\uc5b4\uad8c\uc744 \ub3cc\ub824\uc8fc\ub294\uc9c0\uc758 \ucc28\uc774",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Blocking: \ud638\ucd9c\ub41c \ud568\uc218\uac00 \uc790\uc2e0\uc758 \ub85c\uc9c1\uc744 \ub9c8\uce60 \ub54c\uae4c\uc9c0 \uc81c\uc5b4\uad8c\uc744 \uac00\uc9c0\uace0 \uc788\uc74c. (\ud638\ucd9c\ud55c \ud568\uc218\ub294 \ub2e4\ub978 \uc791\uc5c5\uc744 \ud560 \uc218 \uc5c6\uc74c)"),(0,l.kt)("li",{parentName:"ul"},"Non-Blocking: \ud638\ucd9c\ub41c \ud568\uc218\uac00 \uc790\uc2e0\uc758 \ub85c\uc9c1\uc744 \ub9c8\uce58\uc9c0 \uc54a\uc558\ub354\ub77c\ub3c4 \uc81c\uc5b4\uad8c\uc744 \ubc18\ud658. (\ud638\ucd9c\ud55c \ud568\uc218\ub294 \ub2e4\ub978 \uc791\uc5c5 \uc218\ud589\uc774 \uac00\ub2a5\ud568)")))),(0,l.kt)("h3",{id:"resttemplate-vs-webclient"},"RestTemplate vs WebClient"),(0,l.kt)("h4",{id:"resttemplate"},"RestTemplate"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"resttemplate.jpg",src:n(279).Z,width:"1158",height:"640"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RestTemplate\uc740 \uae30\ubcf8\uc801\uc73c\ub85c Multi-Thread & Blocking \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Thread Pool\uc744 \ubbf8\ub9ac \ub450\uc5b4 HTTP \uc694\uccad\uc774 \ud544\uc694\ud560 \ub54c Thread\ub97c \ud560\ub2f9\ubc1b\uac8c \ub41c\ub2e4 (1 \uc694\uccad - 1 Thread)"),(0,l.kt)("li",{parentName:"ul"},"\uac01 Thread\ub294 Blocking\ubc29\uc2dd\uc73c\ub85c \ucc98\ub9ac\ub418\uc5b4 \uc751\ub2f5\uc774 \uc62c \ub54c\uae4c\uc9c0 \ud574\ub2f9 Thread\ub294 \ub2e4\ub978 \uc694\uccad\uc5d0 \ud560\ub2f9\ub420 \uc218 \uc5c6\ub2e4.")),(0,l.kt)("h4",{id:"webclient"},"WebClient"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"webclient.jpg",src:n(2778).Z,width:"1282",height:"650"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"WebClient\ub294 \uae30\ubcf8\uc801\uc73c\ub85c Single Thread & Non-Blocking \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uac01 HTTP \uc694\uccad\uc740 Event Loop \ub0b4\uc758 Job\uc73c\ub85c \ub4f1\ub85d\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Event Loop\ub294 Job\uc744 \ucc98\ub9ac\ud55c \ud6c4 \uacb0\uacfc\ub97c \uae30\ub2e4\ub9ac\uc9c0 \uc54a\uace0 \ub2e4\ub978 Job\uc744 \ucc98\ub9ac\ud55c\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\uc81c\uacf5\uc790\ub85c\ubd80\ud130 callback\uc73c\ub85c \uc751\ub2f5\uc774 \uc624\uba74 \uadf8 \uacb0\uacfc\ub97c \uc694\uccad\uc790\uc5d0\uac8c \uc81c\uacf5\ud55c\ub2e4.")))}m.isMDXComponent=!0},279:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/resttemplate-d0a0a47453a44213117816490bef6419.jpg"},2778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/webclient-149f93fe5bed41c2c67757ccb3433b47.jpg"}}]);