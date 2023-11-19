"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={title:"N+1 \ubb38\uc81c",tag:["backend","jpa","n+1"]},i=void 0,o={unversionedId:"web/backend/jpa/N1\ubb38\uc81c",id:"web/backend/jpa/N1\ubb38\uc81c",title:"N+1 \ubb38\uc81c",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/web/backend/jpa/N1\ubb38\uc81c.md",sourceDirName:"web/backend/jpa",slug:"/web/backend/jpa/N1\ubb38\uc81c",permalink:"/resource/web/backend/jpa/N1\ubb38\uc81c",draft:!1,tags:[],version:"current",frontMatter:{title:"N+1 \ubb38\uc81c",tag:["backend","jpa","n+1"]},sidebar:"tutorialSidebar",previous:{title:"JPA Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158 \uc0ac\uc6a9\ud558\uae30",permalink:"/resource/web/backend/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30"},next:{title:"Batch Performance \uadf9\ud55c\uc73c\ub85c \ub04c\uc5b4\uc62c\ub9ac\uae30",permalink:"/resource/web/backend/spring/Batch-Performance-\uadf9\ud55c\uc73c\ub85c-\ub04c\uc5b4\uc62c\ub9ac\uae30"}},p={},c=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2}],u={toc:c},m="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://incheol-jung.gitbook.io/docs/q-and-a/spring/n+1"},"JPA N+1 \ubb38\uc81c"))),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@OneToMany \uad00\uacc4\uc5d0\uc11c \uc0dd\uae30\ub294 \ubb38\uc81c"),(0,a.kt)("li",{parentName:"ul"},"\ub178\uc120(One) -- \uc5ed(Many) \uad00\uacc4\ub97c \uac00\uc815\ud574\ubcf4\uc790",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"jpaRepository\uc758 findAll()\uc744 \uc0ac\uc6a9\ud558\uba74 JPQL\uc744 \ud1b5\ud574 \uc5d4\ud2f0\ud2f0(\ub178\uc120)\uc640 \ud544\ub4dc\ub97c \ubc14\ud0d5\uc73c\ub85c \ucffc\ub9ac\ub97c \ub9cc\ub4e0\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub54c \ub178\uc120\uc744 \uc870\ud68c\ud558\ub294 \ucffc\ub9ac (1\uac1c)\uc640"),(0,a.kt)("li",{parentName:"ul"},"\uc870\ud68c\ub41c \ub178\uc120\uc774 \uac00\uc9c4 \uc5f4\ub4e4\uc744 \uc870\ud68c\ud558\ub294 \ucffc\ub9ac (N\uac1c)\uac00 \ubc1c\uc0dd\ud55c\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"\ud574\uacb0\ucc45",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FetchJoin"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2e8, FetchType\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4. \ubb34\uc870\uac74 EAGER"),(0,a.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9d5 \ucffc\ub9ac \ubd88\uac00\ub2a5"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EntityGraph")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FetchMode.SUBSELECT"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2\ubc88\uc758 \ucffc\ub9ac \uc0ac\uc6a9"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BatchSize \uc124\uc815"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IN\uc808\uc744 \uc0ac\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"EX) \ubc30\uce58 \uc0ac\uc774\uc988 5, \ub178\uc120 10\uac1c\ub77c\uba74",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub178\uc120 \uc870\ud68c \ucffc\ub9ac (1\uac1c)"),(0,a.kt)("li",{parentName:"ul"},"\uc5ed \uc870\ud68c \ucffc\ub9ac (1\uac1c - 5\uac1c \ub178\uc120\uc5d0 \ub300\ud55c)"),(0,a.kt)("li",{parentName:"ul"},"\uc5ed \uc870\ud68c \ucffc\ub9ac (1\uac1c - 5\uac1c \ub178\uc120\uc5d0 \ub300\ud55c)"),(0,a.kt)("li",{parentName:"ul"},"\ucd1d 3\uac1c \ucffc\ub9ac\uac00 \uc2e4\ud589\ub41c\ub2e4.")))))))))}k.isMDXComponent=!0}}]);