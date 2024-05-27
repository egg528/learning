"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[4967],{100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(4848),s=r(8453);const a={title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",description:"\uc774 \uae00\uc740 Observer Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Observer Pattern\uc740 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc \ubcc0\ud654\uac00 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0\uac8c \uc790\ub3d9\uc73c\ub85c \ud1b5\ubcf4\ub418\ub294 \uad6c\uc870\ub85c, \uc8fc\ub85c Subject\uc640 Observer\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uae00\uc5d0\uc11c\ub294 Push \ubc29\uc2dd\uacfc Pull \ubc29\uc2dd\uc758 \uad6c\ud604 \ubc29\ubc95\uc744 \ucf54\ub4dc \uc608\uc81c\ub85c \uc124\uba85\ud558\uace0, Spring Framework\uc758 ApplicationEventPublisher\uc640 ApplicationListener\ub97c \uc2e4\uc81c \uc608\uc2dc\ub85c \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["design pattern","observer pattern"],date:new Date("2024-05-22T00:00:00.000Z")},o=void 0,i={permalink:"/observer-pattern",source:"@site/blog/observer-pattern.md",title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",description:"\uc774 \uae00\uc740 Observer Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Observer Pattern\uc740 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc \ubcc0\ud654\uac00 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0\uac8c \uc790\ub3d9\uc73c\ub85c \ud1b5\ubcf4\ub418\ub294 \uad6c\uc870\ub85c, \uc8fc\ub85c Subject\uc640 Observer\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uae00\uc5d0\uc11c\ub294 Push \ubc29\uc2dd\uacfc Pull \ubc29\uc2dd\uc758 \uad6c\ud604 \ubc29\ubc95\uc744 \ucf54\ub4dc \uc608\uc81c\ub85c \uc124\uba85\ud558\uace0, Spring Framework\uc758 ApplicationEventPublisher\uc640 ApplicationListener\ub97c \uc2e4\uc81c \uc608\uc2dc\ub85c \ub2e4\ub8f9\ub2c8\ub2e4.",date:"2024-05-22T00:00:00.000Z",tags:[{label:"design pattern",permalink:"/tags/design-pattern"},{label:"observer pattern",permalink:"/tags/observer-pattern"}],readingTime:11.345,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",description:"\uc774 \uae00\uc740 Observer Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Observer Pattern\uc740 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc \ubcc0\ud654\uac00 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0\uac8c \uc790\ub3d9\uc73c\ub85c \ud1b5\ubcf4\ub418\ub294 \uad6c\uc870\ub85c, \uc8fc\ub85c Subject\uc640 Observer\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uae00\uc5d0\uc11c\ub294 Push \ubc29\uc2dd\uacfc Pull \ubc29\uc2dd\uc758 \uad6c\ud604 \ubc29\ubc95\uc744 \ucf54\ub4dc \uc608\uc81c\ub85c \uc124\uba85\ud558\uace0, Spring Framework\uc758 ApplicationEventPublisher\uc640 ApplicationListener\ub97c \uc2e4\uc81c \uc608\uc2dc\ub85c \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["design pattern","observer pattern"],date:"2024-05-22T00:00:00.000Z"},unlisted:!1,prevItem:{title:"\ub514\uc790\uc778 \ud328\ud134 - Decorator Pattern",permalink:"/decorator-pattern"},nextItem:{title:"Annotation \uae30\ubc18\uc758 ApplicationContext Bean \ub4f1\ub85d \uacfc\uc815 \ud30c\ud5e4\uce58\uae30 (2)",permalink:"/annotation-config-application-context2"}},p={authorsImageUrls:[void 0]},c=[];function l(e){const t={br:"br",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["\u2705"," ChatGPT \uc694\uc57d"]}),(0,n.jsx)(t.br,{}),"\n","\uc774 \uae00\uc740 Observer Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Observer Pattern\uc740 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc \ubcc0\ud654\uac00 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0\uac8c \uc790\ub3d9\uc73c\ub85c \ud1b5\ubcf4\ub418\ub294 \uad6c\uc870\ub85c, \uc8fc\ub85c Subject\uc640 Observer\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4. \uae00\uc5d0\uc11c\ub294 Push \ubc29\uc2dd\uacfc Pull \ubc29\uc2dd\uc758 \uad6c\ud604 \ubc29\ubc95\uc744 \ucf54\ub4dc \uc608\uc81c\ub85c \uc124\uba85\ud558\uace0, Spring Framework\uc758 ApplicationEventPublisher\uc640 ApplicationListener\ub97c \uc2e4\uc81c \uc608\uc2dc\ub85c \ub2e4\ub8f9\ub2c8\ub2e4."]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);