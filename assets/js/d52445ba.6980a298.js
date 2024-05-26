"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7198],{1606:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(4848),a=n(8453);const o={title:"\ub514\uc790\uc778 \ud328\ud134 - Strategy Pattern",description:"\uc774 \uae00\uc740 \ub514\uc790\uc778 \ud328\ud134 \uc911 \ud558\ub098\uc778 Strategy Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Strategy Pattern\uc740 \uc54c\uace0\ub9ac\uc998\uc744 \ucea1\uc290\ud654\ud558\uc5ec \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud328\ud134\uc73c\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc54c\uace0\ub9ac\uc998\uc744 \ubd84\ub9ac\ud558\uc5ec \uc720\uc5f0\uc131\uc744 \ub192\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc54c\uace0\ub9ac\uc998\uc758 \ud655\uc7a5\uacfc \ubcc0\ud615\uc774 \uc6a9\uc774\ud558\uace0, \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uba70, \uac1d\uccb4 \uac04\uc758 \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd94\uc5b4 \uc720\uc9c0\ubcf4\uc218\ub97c \uc27d\uac8c \ud569\ub2c8\ub2e4. \ucf54\ub4dc \uc608\uc2dc\uc640 \ud568\uaed8 Spring Framework\uc758 DispatcherServlet\uacfc HandlerMapping\uc744 \ud1b5\ud55c \uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840\ub97c \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["design pattern","strategy pattern"],date:new Date("2024-05-19T00:00:00.000Z")},s=void 0,i={permalink:"/strategy-pattern",source:"@site/blog/strategy-pattern.md",title:"\ub514\uc790\uc778 \ud328\ud134 - Strategy Pattern",description:"\uc774 \uae00\uc740 \ub514\uc790\uc778 \ud328\ud134 \uc911 \ud558\ub098\uc778 Strategy Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Strategy Pattern\uc740 \uc54c\uace0\ub9ac\uc998\uc744 \ucea1\uc290\ud654\ud558\uc5ec \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud328\ud134\uc73c\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc54c\uace0\ub9ac\uc998\uc744 \ubd84\ub9ac\ud558\uc5ec \uc720\uc5f0\uc131\uc744 \ub192\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc54c\uace0\ub9ac\uc998\uc758 \ud655\uc7a5\uacfc \ubcc0\ud615\uc774 \uc6a9\uc774\ud558\uace0, \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uba70, \uac1d\uccb4 \uac04\uc758 \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd94\uc5b4 \uc720\uc9c0\ubcf4\uc218\ub97c \uc27d\uac8c \ud569\ub2c8\ub2e4. \ucf54\ub4dc \uc608\uc2dc\uc640 \ud568\uaed8 Spring Framework\uc758 DispatcherServlet\uacfc HandlerMapping\uc744 \ud1b5\ud55c \uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840\ub97c \ub2e4\ub8f9\ub2c8\ub2e4.",date:"2024-05-19T00:00:00.000Z",tags:[{label:"design pattern",permalink:"/tags/design-pattern"},{label:"strategy pattern",permalink:"/tags/strategy-pattern"}],readingTime:8.42,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"\ub514\uc790\uc778 \ud328\ud134 - Strategy Pattern",description:"\uc774 \uae00\uc740 \ub514\uc790\uc778 \ud328\ud134 \uc911 \ud558\ub098\uc778 Strategy Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Strategy Pattern\uc740 \uc54c\uace0\ub9ac\uc998\uc744 \ucea1\uc290\ud654\ud558\uc5ec \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud328\ud134\uc73c\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc54c\uace0\ub9ac\uc998\uc744 \ubd84\ub9ac\ud558\uc5ec \uc720\uc5f0\uc131\uc744 \ub192\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc54c\uace0\ub9ac\uc998\uc758 \ud655\uc7a5\uacfc \ubcc0\ud615\uc774 \uc6a9\uc774\ud558\uace0, \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uba70, \uac1d\uccb4 \uac04\uc758 \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd94\uc5b4 \uc720\uc9c0\ubcf4\uc218\ub97c \uc27d\uac8c \ud569\ub2c8\ub2e4. \ucf54\ub4dc \uc608\uc2dc\uc640 \ud568\uaed8 Spring Framework\uc758 DispatcherServlet\uacfc HandlerMapping\uc744 \ud1b5\ud55c \uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840\ub97c \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["design pattern","strategy pattern"],date:"2024-05-19T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Annotation \uae30\ubc18\uc758 ApplicationContext Bean \ub4f1\ub85d \uacfc\uc815 \ud30c\ud5e4\uce58\uae30 (2)",permalink:"/annotation-config-application-context2"},nextItem:{title:"Annotation \uae30\ubc18\uc758 ApplicationContext Bean \ub4f1\ub85d \uacfc\uc815 \ud30c\ud5e4\uce58\uae30 (1)",permalink:"/annotation-config-application-context"}},p={authorsImageUrls:[void 0]},c=[];function g(t){const e={br:"br",p:"p",strong:"strong",...(0,a.R)(),...t.components};return(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:["\u2705"," ChatGPT \uc694\uc57d"]}),(0,r.jsx)(e.br,{}),"\n","\uc774 \uae00\uc740 \ub514\uc790\uc778 \ud328\ud134 \uc911 \ud558\ub098\uc778 Strategy Pattern\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. Strategy Pattern\uc740 \uc54c\uace0\ub9ac\uc998\uc744 \ucea1\uc290\ud654\ud558\uc5ec \ub3c5\ub9bd\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud328\ud134\uc73c\ub85c, \ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc54c\uace0\ub9ac\uc998\uc744 \ubd84\ub9ac\ud558\uc5ec \uc720\uc5f0\uc131\uc744 \ub192\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc54c\uace0\ub9ac\uc998\uc758 \ud655\uc7a5\uacfc \ubcc0\ud615\uc774 \uc6a9\uc774\ud558\uace0, \ucf54\ub4dc \uc7ac\uc0ac\uc6a9\uc131\uc744 \ub192\uc774\uba70, \uac1d\uccb4 \uac04\uc758 \uacb0\ud569\ub3c4\ub97c \ub0ae\ucd94\uc5b4 \uc720\uc9c0\ubcf4\uc218\ub97c \uc27d\uac8c \ud569\ub2c8\ub2e4. \ucf54\ub4dc \uc608\uc2dc\uc640 \ud568\uaed8 Spring Framework\uc758 DispatcherServlet\uacfc HandlerMapping\uc744 \ud1b5\ud55c \uc2e4\uc81c \uc801\uc6a9 \uc0ac\ub840\ub97c \ub2e4\ub8f9\ub2c8\ub2e4."]})}function l(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(g,{...t})}):g(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);