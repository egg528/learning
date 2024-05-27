"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3696],{3649:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var i=r(4848),t=r(8453);const c={title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30",tag:["backend","architecture","clean architecture"]},l=void 0,s={id:"web/backend/architecture/naver-financial-clean-architecture",title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30",description:"\ub808\uc774\uc5b4\ub4dc \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5",source:"@site/docs/resource/web/backend/architecture/naver-financial-clean-architecture.md",sourceDirName:"web/backend/architecture",slug:"/web/backend/architecture/naver-financial-clean-architecture",permalink:"/resource/web/backend/architecture/naver-financial-clean-architecture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30",tag:["backend","architecture","clean architecture"]},sidebar:"tutorialSidebar",previous:{title:"\uc778\uc218\ud14c\uc2a4\ud2b8\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ud558\uae30",permalink:"/resource/web/backend/test/test-isolation"},next:{title:"Gradle \uc758\uc874\uc131 \uc635\uc158",permalink:"/resource/web/backend/gradle/gradle-dependency-option"}},a={},d=[{value:"\ub808\uc774\uc5b4\ub4dc \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5",id:"\ub808\uc774\uc5b4\ub4dc-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5",level:2},{value:"\ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5?",id:"\ud074\ub9b0-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5",level:2},{value:"\ud5e5\uc0ac\uace0\ub0a0(\ud3ec\ud2b8 &amp; \uc5b4\ub311\ud130) \uc544\ud0a4\ud14d\ucc98\ub780?",id:"\ud5e5\uc0ac\uace0\ub0a0\ud3ec\ud2b8--\uc5b4\ub311\ud130-\uc544\ud0a4\ud14d\ucc98\ub780",level:2},{value:"\uc2e4\uc81c \uc801\uc6a9",id:"\uc2e4\uc81c-\uc801\uc6a9",level:2},{value:"Reference",id:"reference",level:2}];function u(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\ub808\uc774\uc5b4\ub4dc-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5",children:"\ub808\uc774\uc5b4\ub4dc \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Data Access \uacc4\uce35\uc774 \ucd5c\uc0c1\uc704\uc5d0 \uc874\uc7ac"}),"\n",(0,i.jsx)(n.li,{children:"Data Access \uacc4\uce35\uc758 \ubcc0\ud654\ub294 App \uc804\uccb4\uc5d0 \uc601\ud5a5\uc744 \uc900\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ub7ec\ud55c \ud2b9\uc9d5\uc740 \uacc4\uce35\uac00\ub2ac \uacb0\ud569\ub3c4\ub97c \ub0ae\ucdb0 \uacc4\uce35 \uac04\uc758 \uc601\ud5a5\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \ubc29\ud5a5\uc744 \uace0\ubbfc\ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ud074\ub9b0-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5",children:"\ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uad6c\ud604\ud55c \uacc4\uce35\uc740 \uc5b4\ub5a4 \uc758\uc874\uc131\ub3c4 \uac00\uc9c0\uc9c0 \uc54a\ub294 \ucd5c\uc0c1\uc704 \uacc4\uce35\uc73c\ub85c \ub454\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ud574\ub2f9 \uacc4\uce35\uc73c\ub85c\uc758 \uc785\ucd9c\ub825\uc744 \ucd94\uc0c1\ud654 \uacc4\uce35\uc73c\ub85c \uac10\uc2f8 \ubaa8\ub4e0 \uc678\ubd80 \uc758\uc874\uc131\uc758 \ubc29\ud5a5\uc744 \ub3c4\uba54\uc778 \uacc4\uce35\uc73c\ub85c \ud5a5\ud558\ub3c4\ub85d \ub9cc\ub4e0\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ub294 \uc678\ubd80 \uacc4\uce35(DB, REST API)\uc758 \uacb0\uc815\uc744 \ubbf8\ub8e8\uac70\ub098 \ubcc0\uacbd\uc744 \uc6a9\uc758\ud558\uac8c \ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\ud5e5\uc0ac\uace0\ub0a0\ud3ec\ud2b8--\uc5b4\ub311\ud130-\uc544\ud0a4\ud14d\ucc98\ub780",children:"\ud5e5\uc0ac\uace0\ub0a0(\ud3ec\ud2b8 & \uc5b4\ub311\ud130) \uc544\ud0a4\ud14d\ucc98\ub780?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ucd94\uc0c1\uc801\uc778 \uac1c\ub150\uc758 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098"}),"\n",(0,i.jsx)(n.li,{children:"\ub3c4\uba54\uc778 \uacc4\uce35\uc73c\ub85c \ub4e4\uc5b4\uc624\uac70\ub098 \ub098\uac00\ub294 \uacc4\uce35\uac04\uc758 \uc694\uccad/\uc751\ub2f5\uc740 Port\ub77c\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \uc815\uc758\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"Input Port\ub97c \uc774\uc6a9\ud558\ub294 \ub300\ud45c\uc801\uc778 Adapter\ub85c\ub294 REST API \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \uc5ed\ud560\uc744 \ud558\ub294 \uc6f9 \uc5b4\ub311\ud130\uac00 \uc788\uace0, \ud574\ub2f9 \uacc4\uce35\uc740 User Interface \uacc4\uce35\uc774\ub77c\uace0 \ud558\uba70 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc9c1\uc811 \ud638\ucd9c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc8fc\ub3c4\ud558\ub294(driving) \uc5b4\ub311\ud130\ub77c\uace0 \ubd80\ub978\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"Output Port\ub97c \uad6c\ud604\ud558\ub294 \ub300\ud45c\uc801\uc778 Adapter\ub85c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc624\ub294 \uc5ed\ud560\uc744 \ud558\ub294 \uc601\uc18d\uc131 \uc5b4\ub311\ud130\uac00 \uc788\uace0, \ud574\ub2f9 \uacc4\uce35\uc740 Infrastructure \uacc4\uce35\uc774\ub77c\uace0 \ud558\uba70 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc5d0 \uc758\ud574 \ud638\ucd9c\ub418\uae30 \ub54c\ubb38\uc5d0 \uc8fc\ub3c4\ub418\ub294(driven) \uc5b4\ub311\ud130\ub77c\uace0 \ubd80\ub978\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ud575\uc2ec\uc740 Input Port\uc640 Output Port \uba85\uc138\uac00 \uc788\ub2e4\uba74, \ud574\ub2f9 \uba85\uc138\uc5d0 \ub9de\uac8c \uad6c\ud604\ub41c \uc5b4\ub311\ud130\uc758 \ud615\ud0dc\uac00 \uc5b4\ub5bb\ub4e0 \ub3d9\uc77c\ud55c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub2e4\ub294 \uac83"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\uc2e4\uc81c-\uc801\uc6a9",children:"\uc2e4\uc81c \uc801\uc6a9"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"hexagonal-example.jpg",src:r(6497).A+"",width:"1488",height:"1750"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\uacfc \ub3d9\uc2dc\uc5d0 \uac00\uc7a5 \uba3c\uc800 \uc9c4\ud589\ud588\ub358 \uc77c\uc774 \uc678\ubd80 \uacc4\uce35\uc758 \uae30\uc220 \uc120\ud0dd\uc5d0\uc11c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \uad6c\ud604\uc73c\ub85c \ubc14\ub00c\uc5c8\ub2e4\uace0 \ud568."}),"\n",(0,i.jsxs)(n.li,{children:["\uad6c\ud604 \uc21c\uc11c","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\ub3c4\uba54\uc778 \ubaa8\ub378 \uad6c\ud604"}),"\n",(0,i.jsx)(n.li,{children:"UseCase\uc640 OutPort \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ub97c \ud65c\uc6a9\ud574 Service \ub85c\uc9c1\uc744 \uc791\uc131\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc774 \uc0c1\ud0dc\uc5d0\uc11c \ub85c\uc9c1\uc744 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4 (Mocking \ud65c\uc6a9)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uc7a5\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Input, Output Port\uc758 \ubaa8\ub4c8 \uad50\uccb4\uac00 \uc6a9\uc758\ud558\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\ub2e8\uc810","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uacc4\uce35 \ubcc4\ub85c \uc0ac\uc6a9\ud560 \ubaa8\ub378\uc744 \uad6c\ud604\ud574\uc918\uc57c \ud55c\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://medium.com/naverfinancial/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-99d70df6122b",children:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},6497:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/hexagonal-example-080e435770f00b69b74fd6d86579fabf.jpg"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(6540);const t={},c=i.createContext(t);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);