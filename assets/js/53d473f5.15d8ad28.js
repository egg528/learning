"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Middleware",tag:["frontend","next.js","middleware"]},l=void 0,o={unversionedId:"web/frontend/nextjs/Middleware",id:"web/frontend/nextjs/Middleware",title:"Middleware",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/web/frontend/nextjs/Middleware.md",sourceDirName:"web/frontend/nextjs",slug:"/web/frontend/nextjs/Middleware",permalink:"/resource/web/frontend/nextjs/Middleware",draft:!1,tags:[],version:"current",frontMatter:{title:"Middleware",tag:["frontend","next.js","middleware"]},sidebar:"tutorialSidebar",previous:{title:"Internationalization (i18n) Routing",permalink:"/resource/web/frontend/nextjs/Internationalization-Routing"},next:{title:"next.config.js",permalink:"/resource/web/frontend/nextjs/next-config"}},s={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Middleware",id:"middleware",level:3},{value:"Convention",id:"convention",level:3},{value:"Matching Paths",id:"matching-paths",level:3},{value:"Matcher",id:"matcher",level:3},{value:"NextResponse",id:"nextresponse",level:3},{value:"\ud65c\uc6a9 \uc608\uc2dc",id:"\ud65c\uc6a9-\uc608\uc2dc",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/routing/middleware"},"Middleware"))),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("h3",{id:"middleware"},"Middleware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Middleware\ub294 \uc694\uccad\uc774 \uc644\ub8cc\ub418\uae30 \uc774\uc804\uc5d0 \uc6d0\ud558\ub294 \ucf54\ub4dc\ub97c \ub3d9\uc791\uc2dc\ud0ac \uc218 \uc788\ub294 \uae30\ub2a5\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"rewritting, redirecting, request or response header \ubcc0\uacbd, \uc989\uc2dc \uc751\ub2f5 \ub4f1\uc744 \ud65c\uc6a9\ud574 response\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Middleware\ub294 Cached Content\uac00 \ub3d9\uc791\ud558\uae30 \uc774\uc804, routing \uc2dc\uc2a4\ud15c\uc774 \ub3d9\uc791\ud558\uae30 \uc774\uc804\uc5d0 \uc218\ud589\ub41c\ub2e4")),(0,a.kt)("h3",{id:"convention"},"Convention"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// middleware.ts\nimport { NextResponse } from 'next/server'\nimport type { NextRequest } from 'next/server'\n \n// This function can be marked `async` if using `await` inside\nexport function middleware(request: NextRequest) {\n  return NextResponse.redirect(new URL('/home', request.url))\n}\n \n// See \"Matching Paths\" below to learn more\nexport const config = {\n  matcher: '/about/:path*',\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"root project\uc5d0 middleware.ts(js) \ud30c\uc77c\uc744 \ud1b5\ud574 \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"pages \ub610\ub294 app\uacfc deeps, src \ud3f4\ub354 \ub0b4\ubd80\uc5d0\uc11c \ub3d9\uc791\ud55c\ub2e4.")),(0,a.kt)("h3",{id:"matching-paths"},"Matching Paths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Middleware\ub294 \ud504\ub85c\uc81d\ud2b8 \ub0b4 \ubaa8\ub4e0 route\uc5d0\uc11c \uc2e4\ud589\ub41c\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc791 \uc21c\uc11c\ub294 \uc544\ub798\uc640 \uac19\ub2e4.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"headers from next.config.js"),(0,a.kt)("li",{parentName:"ol"},"redirects from next.config.js"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Middleware (rewrites, redirects, etc.)")),(0,a.kt)("li",{parentName:"ol"},"beforeFiles (rewrites) from next.config.js"),(0,a.kt)("li",{parentName:"ol"},"Filesystem routes (public/, _next/static/, pages/, app/, etc.)"),(0,a.kt)("li",{parentName:"ol"},"afterFiles (rewrites) from next.config.js"),(0,a.kt)("li",{parentName:"ol"},"Dynamic Routes (/blog/","[slug]",") "),(0,a.kt)("li",{parentName:"ol"},"fallback (rewrites) from next.config.js")),(0,a.kt)("h3",{id:"matcher"},"Matcher"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// middleware.ts\nexport const config = {\n  matcher: ['/about/:path*', '/dashboard/:path*'],\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Middleware\uac00 \ud2b9\uc815 path\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\ub3c4\ub85d \uc81c\ud55c\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud45c\ud604\uc2dd: ",(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/page"},"https://nextjs.org/docs/page")," s/building-your-application/routing/middleware#matcher")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { NextResponse } from 'next/server'\nimport type { NextRequest } from 'next/server'\n \nexport function middleware(request: NextRequest) {\n  if (request.nextUrl.pathname.startsWith('/about')) {\n    return NextResponse.rewrite(new URL('/about-2', request.url))\n  }\n \n  if (request.nextUrl.pathname.startsWith('/dashboard')) {\n    return NextResponse.rewrite(new URL('/dashboard/user', request.url))\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc704 \ucf54\ub4dc\ucc98\ub7fc request \uc815\ubcf4\ub97c \uae30\ubc18\uc73c\ub85c \ubd84\uae30\ub97c \ud0dc\uc6b8 \uc218\ub3c4 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"nextresponse"},"NextResponse"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub978 URL\ub85c redirect\uac00 \uac00\ub2a5\ud558\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"response\ub97c rewrite\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"header \uc815\ubcf4\ub97c \uc904 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"response cookies\uc640 header\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"\ud65c\uc6a9-\uc608\uc2dc"},"\ud65c\uc6a9 \uc608\uc2dc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/routing/middleware#using-cookies"},"Use Cookies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/routing/middleware#using-cookies"},"Setting Headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/pages/building-your-application/routing/middleware#producing-a-response"},"Producing a Resposne"))))}c.isMDXComponent=!0}}]);