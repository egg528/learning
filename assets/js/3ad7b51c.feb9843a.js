"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6e3],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8502:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"react hydration error",tag:["frontend","next.js","react hydration error"]},i=void 0,l={unversionedId:"web/frontend/nextjs/react-hydration-error",id:"web/frontend/nextjs/react-hydration-error",title:"react hydration error",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/web/frontend/nextjs/react-hydration-error.md",sourceDirName:"web/frontend/nextjs",slug:"/web/frontend/nextjs/react-hydration-error",permalink:"/resource/web/frontend/nextjs/react-hydration-error",draft:!1,tags:[],version:"current",frontMatter:{title:"react hydration error",tag:["frontend","next.js","react hydration error"]},sidebar:"tutorialSidebar",previous:{title:"next.config.js",permalink:"/resource/web/frontend/nextjs/next-config"},next:{title:"\ube0c\ub77c\uc6b0\uc800 \ub80c\ub354\ub9ac \uacfc\uc815 \uc774\ud574\ud558\uae30",permalink:"/resource/web/frontend/\ube0c\ub77c\uc6b0\uc800-\ub80c\ub354\ub9c1-\uacfc\uc815-\uc774\ud574\ud558\uae30"}},c={},s=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"\uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c\ub294 6\uac00\uc9c0 \uc815\ub3c4\uc758 \uc6d0\uc778\uc744 \uc81c\uc2dc\ud55c\ub2e4.",id:"\uacf5\uc2dd-\ubb38\uc11c\uc5d0\uc11c\ub294-6\uac00\uc9c0-\uc815\ub3c4\uc758-\uc6d0\uc778\uc744-\uc81c\uc2dc\ud55c\ub2e4",level:3},{value:"\ud574\uacb0\ucc45",id:"\ud574\uacb0\ucc45",level:3},{value:"1. useEffect\ub97c \ud65c\uc6a9\ud558\uc5ec client\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\ub294 \uac83\uc744 \ubcf4\uc7a5\ud558\ub294 \ubc29\ubc95",id:"1-useeffect\ub97c-\ud65c\uc6a9\ud558\uc5ec-client\uc5d0\uc11c\ub9cc-\ub3d9\uc791\ud558\ub294-\uac83\uc744-\ubcf4\uc7a5\ud558\ub294-\ubc29\ubc95",level:4},{value:"2. \ud2b9\uc815 Component\ub97c CSR\ub85c \uac15\uc81c\ud55c\ub2e4.",id:"2-\ud2b9\uc815-component\ub97c-csr\ub85c-\uac15\uc81c\ud55c\ub2e4",level:4},{value:"3. \ud0dc\uadf8 \ub0b4\uc5d0 Hydration \uc624\ub958 \ud5c8\uc6a9 \ud45c\uc2dc",id:"3-\ud0dc\uadf8-\ub0b4\uc5d0-hydration-\uc624\ub958-\ud5c8\uc6a9-\ud45c\uc2dc",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/messages/react-hydration-error"},"Text content does not match server-rendered HTML"))),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server\uc5d0\uc11c pre-render\ub41c React tree\uc640 Browser\uc5d0\uc11c \ucc98\uc74c\uc73c\ub85c render\ub41c React tree\uac00 \ub2ec\ub77c\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Server\uc5d0\uc11c \uc0dd\uc131\ub41c pre-render HTML\uc744 interactive application\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uc2dc\uc810\uc744 Hydration\uc774\ub77c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \ub54c ",(0,a.kt)("inlineCode",{parentName:"li"},"hydration failed")," \ubb38\uad6c\uac00 \ub098\uc634")))),(0,a.kt)("h3",{id:"\uacf5\uc2dd-\ubb38\uc11c\uc5d0\uc11c\ub294-6\uac00\uc9c0-\uc815\ub3c4\uc758-\uc6d0\uc778\uc744-\uc81c\uc2dc\ud55c\ub2e4"},"\uacf5\uc2dd \ubb38\uc11c\uc5d0\uc11c\ub294 6\uac00\uc9c0 \uc815\ub3c4\uc758 \uc6d0\uc778\uc744 \uc81c\uc2dc\ud55c\ub2e4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\ubd80\uc801\uc808\ud55c HTML tag \uc911\ubcf5 (p tag \ub0b4\uc5d0 \ub610 \ub2e4\ub978 p tag \uc874\uc7ac, p tag \ub0b4\ubd80\uc5d0 div tag \uc874\uc7ac, Interactive Content\uc758 \uc911\ucca9)"),(0,a.kt)("li",{parentName:"ol"},"rendering \ub85c\uc9c1\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},"typeof window !== 'undefined'"),"\uc774 \ud3ec\ud568\ub41c \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"window")," \ub610\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"localStorage"),"\uc640 \uac19\uc740 browser-only API\uac00 \ub85c\uc9c1\uc5d0 \ud3ec\ud568\ub41c \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/issues/24430"},"Browser extensions\uac00 HTML\uc744 \ubcc0\uacbd\ud558\ub294 \uacbd\uc6b0")),(0,a.kt)("li",{parentName:"ol"},"CSS-in-JS libraries\uac00 \uc798\ubabb \uad6c\uc131\ub41c \uacbd\uc6b0"),(0,a.kt)("li",{parentName:"ol"},"\uc798\ubabb \uad6c\uc131\ub41c Edge/CDN\uc774 HTML response\ub97c \uc218\uc815\ud560 \uacbd\uc6b0")),(0,a.kt)("h3",{id:"\ud574\uacb0\ucc45"},"\ud574\uacb0\ucc45"),(0,a.kt)("h4",{id:"1-useeffect\ub97c-\ud65c\uc6a9\ud558\uc5ec-client\uc5d0\uc11c\ub9cc-\ub3d9\uc791\ud558\ub294-\uac83\uc744-\ubcf4\uc7a5\ud558\ub294-\ubc29\ubc95"},"1. useEffect\ub97c \ud65c\uc6a9\ud558\uc5ec client\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\ub294 \uac83\uc744 \ubcf4\uc7a5\ud558\ub294 \ubc29\ubc95"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useState, useEffect } from 'react'\n \nexport default function App() {\n  const [isClient, setIsClient] = useState(false)\n \n  useEffect(() => {\n    setIsClient(true)\n  }, [])\n \n  return <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774 \ubc29\uc2dd\uc740 client-side\uc758 \ucd08\uae30 render content\ub97c server-side\uc640 \uc77c\uce58\uc2dc\ucf1c \ubb38\uc81c\ub97c \ud574\uacb0\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"browser API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c")),(0,a.kt)("h4",{id:"2-\ud2b9\uc815-component\ub97c-csr\ub85c-\uac15\uc81c\ud55c\ub2e4"},"2. \ud2b9\uc815 Component\ub97c CSR\ub85c \uac15\uc81c\ud55c\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import dynamic from 'next/dynamic'\n \nconst NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })\n \nexport default function Page() {\n  return (\n    <div>\n      <NoSSR />\n    </div>\n  )\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"prerendering\uc774 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc124\uc815\ud558\uc5ec hydration \ubd88\uc77c\uce58\ub97c \ub9c9\ub294\ub2e4.")),(0,a.kt)("h4",{id:"3-\ud0dc\uadf8-\ub0b4\uc5d0-hydration-\uc624\ub958-\ud5c8\uc6a9-\ud45c\uc2dc"},"3. \ud0dc\uadf8 \ub0b4\uc5d0 Hydration \uc624\ub958 \ud5c8\uc6a9 \ud45c\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<time datetime="2016-10-25" suppressHydrationWarning={true} />\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"timestamp\uc640 \uac19\uc774 server\uc640 client\uc758 content\uac00 \ubd88\uc77c\uce58\uac00 \ubd88\uac00\ud53c\ud560 \uacbd\uc6b0 \uc624\ub958\ub97c \ubb34\uc2dc\ud558\ub3c4\ub85d \uc124\uc815\ud560 \uc218\ub3c4 \uc788\ub2e4.")))}d.isMDXComponent=!0}}]);