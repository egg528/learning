"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[7471],{3023:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>C,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=e(4848),n=e(8453);const i={title:"JDBC, DataSource \uadf8\ub9ac\uace0 HikariCP",description:"\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["java","database"],date:new Date("2024-05-12T00:00:00.000Z")},o=void 0,s={permalink:"/jdbc-datasource-hikaricp",source:"@site/blog/jdbc-datasource-hikaricp.md",title:"JDBC, DataSource \uadf8\ub9ac\uace0 HikariCP",description:"\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4.",date:"2024-05-12T00:00:00.000Z",tags:[{label:"java",permalink:"/tags/java"},{label:"database",permalink:"/tags/database"}],readingTime:9.675,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"JDBC, DataSource \uadf8\ub9ac\uace0 HikariCP",description:"\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4.",authors:["woosuk"],tags:["java","database"],date:"2024-05-12T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Annotation \uae30\ubc18\uc758 ApplicationContext Bean \ub4f1\ub85d \uacfc\uc815 \ud30c\ud5e4\uce58\uae30 (1)",permalink:"/annotation-config-application-context"},nextItem:{title:"\uc138\uc0c1 \ub05d\uc758 \uce74\ud398",permalink:"/the-cafe-on-the-edge-of-the-world"}},c={authorsImageUrls:[void 0]},u=[];function D(a){const t={br:"br",p:"p",strong:"strong",...(0,n.R)(),...a.components};return(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:["\u2705"," ChatGPT \uc694\uc57d"]}),(0,r.jsx)(t.br,{}),"\n","\uc774 \uae00\uc740 Java \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uacfc \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uac04\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\ub294 JDBC (Java Database Connectivity)\uc640 \uc774\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130 \uc18c\uc2a4(DataSource) \ubc0f HikariCP\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JDBC\ub294 \ud45c\uc900 API\ub85c, DriverManager\ub97c \ud1b5\ud574 DB\uc640\uc758 \uc5f0\uacb0\uc744 \uad00\ub9ac\ud558\uc9c0\ub9cc, \uc131\ub2a5 \ubb38\uc81c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub370\uc774\ud130 \uc18c\uc2a4(DataSource)\uac00 \ub4f1\uc7a5\ud588\uc73c\uba70, \ud2b9\ud788 HikariCP\ub294 \uace0\uc131\ub2a5 JDBC \ucee4\ub125\uc158 \ud480\ub85c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \ud1b5\ud574 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc778 DB \uc5f0\uacb0\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. HikariCP\uc758 \uc7a5\uc810\uacfc \ub3d9\uc791 \ubc29\uc2dd\uc744 \ucf54\ub4dc \uc608\uc81c\uc640 \ud568\uaed8 \ub2e4\ub8f9\ub2c8\ub2e4."]})}function C(a={}){const{wrapper:t}={...(0,n.R)(),...a.components};return t?(0,r.jsx)(t,{...a,children:(0,r.jsx)(D,{...a})}):D(a)}},8453:(a,t,e)=>{e.d(t,{R:()=>o,x:()=>s});var r=e(6540);const n={},i=r.createContext(n);function o(a){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof a?a(t):{...t,...a}}),[t,a])}function s(a){let t;return t=a.disableParentContext?"function"==typeof a.components?a.components(n):a.components||n:o(a.components),r.createElement(i.Provider,{value:t},a.children)}}}]);