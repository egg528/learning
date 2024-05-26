"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6076],{568:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=t(4848),a=t(8453);const o={title:"\ub514\uc790\uc778 \ud328\ud134 - Decorator Pattern",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Decorator Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",authors:["woosuk"],tags:["design pattern","decorator pattern"],date:new Date("2024-05-22T00:00:00.000Z")},s=void 0,c={permalink:"/decorator-pattern",source:"@site/blog/decorator-pattern.md",title:"\ub514\uc790\uc778 \ud328\ud134 - Decorator Pattern",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Decorator Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",date:"2024-05-22T00:00:00.000Z",tags:[{label:"design pattern",permalink:"/tags/design-pattern"},{label:"decorator pattern",permalink:"/tags/decorator-pattern"}],readingTime:8.54,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"\ub514\uc790\uc778 \ud328\ud134 - Decorator Pattern",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Decorator Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",authors:["woosuk"],tags:["design pattern","decorator pattern"],date:"2024-05-22T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Spring Batch \ud30c\ud5e4\uce58\uae30 - JobLauncher",permalink:"/spring-batch-job-launcher"},nextItem:{title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",permalink:"/factory-pattern"}},i={authorsImageUrls:[void 0]},l=[{value:"Decorator Pattern\uc740 \ubb34\uc5c7\uc778\uac00?",id:"decorator-pattern\uc740-\ubb34\uc5c7\uc778\uac00",level:2},{value:"\ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\ub294 Decorator Pattern",id:"\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\ub294-decorator-pattern",level:3},{value:"Decorator \ud328\ud134\uc73c\ub85c \uc54c\uc544\ubcf4\ub294 \ub514\uc790\uc778 \uc6d0\uce59",id:"decorator-\ud328\ud134\uc73c\ub85c-\uc54c\uc544\ubcf4\ub294-\ub514\uc790\uc778-\uc6d0\uce59",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}];function d(e){const r={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Decorator Pattern\uc740 \ubb34\uc5c7\uc77c\uae4c?"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"decorator-pattern\uc740-\ubb34\uc5c7\uc778\uac00",children:"Decorator Pattern\uc740 \ubb34\uc5c7\uc778\uac00?"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"decorator-pattern.jpg",src:t(1981).A+"",width:"1638",height:"896"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Decorator Pattern\uc740 \uac1d\uccb4\uc5d0 \ucd94\uac00 \uc694\uc18c\ub97c \ub3d9\uc801\uc73c\ub85c \ub354\ud560 \uc218 \uc788\ub294 \ud328\ud134\uc744 \ub73b\ud55c\ub2e4."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Decorator Pattern\uc740 \uc6d0\ubcf8 \uac1d\uccb4\uc5d0 \ub3d9\uc801\uc73c\ub85c \ucd94\uac00 \uc694\uc18c(\uae30\ub2a5)\uc744 \ub354\ud560 \uc218 \uc788\ub294 \ud328\ud134\uc774\ub2e4.\n\uc704 \uadf8\ub9bc\uc740 \uc74c\ub8cc \uac00\uaca9\uc744 \uacc4\uc0b0\ud558\uae30 \uc704\ud55c \ub85c\uc9c1\uc5d0 Decorator \ud328\ud134\uc744 \uc801\uc6a9\ud55c \uc608\uc2dc\uc774\ub2e4.\n\uac00\uc7a5 \uc0c1\ub2e8\uc5d0 Beverage\ub77c\ub294 abstract class\uac00 \uc788\uace0 \uc774\ub97c \uc0c1\uc18d\ud55c CondimentDecorator\ub77c\ub294 abstractor class\uac00 \uc788\ub2e4.\n\uc774 \ub458\uc740 abstract class\uc77c \uc218\ub3c4 \uc788\uace0 interface\uc77c \uc218\ub3c4 \uc788\ub294\ub370 \ub458\uc740 \uc0c1\uc18d \uad00\uacc4\ub77c\ub294 \uc810\uc740 \ub3d9\uc77c\ud558\ub2e4.\nDecorator abstract class(CondimentDecorator)\uc758 \ud2b9\uc9d5\uc740 \ubd80\ubaa8 \uac1d\uccb4\ub97c \ud544\ub4dc\ub85c \uac00\uc9c0\uace0 \uc788\ub2e4\ub294 \uc810\uc778\ub370 \uc5ec\uae30\uae4c\uc9c0\ub9cc \ubd24\uc744 \ub54c Proxy Pattern\uc744 \ub5a0\uc62c\ub9b4 \uc218 \uc788\ub2e4.\nDecorator Pattern\uacfc Proxy Pattern\uc740 \ubaa8\ub450 Proxy\ub97c \uc774\uc6a9\ud55c\ub2e4. \ud558\uc9c0\ub9cc \ub458\uc740 Proxy\ub97c \uc0ac\uc6a9\ud558\ub294 \uc758\ub3c4\uac00 \ub2e4\ub978\ub370 Proxy Pattern\uc774 \uc811\uadfc\uc744 \uc81c\uc5b4\ub97c \ubaa9\uc801\uc73c\ub85c Proxy\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 Decorator Pattern\uc740 \uc0c8\ub85c\uc6b4 \uae30\ub2a5 \ucd94\uac00\ub97c \ubaa9\uc801\uc73c\ub85c Proxy\ub97c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.p,{children:"\uc774\uc81c \ub450 abstract class(interface)\uc758 \uad6c\ud604\uccb4\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uc790.\n\uae30\ubcf8 \uad6c\uc131 \uc694\uc18c\uc778 Beverage\ub97c \uad6c\ud604\ud55c \uc6d0\ubcf8 \uac1d\uccb4\ub4e4\uacfc Decorator \uad6c\uc131 \uc694\uc18c\uc778 CondimentDecorator\ub97c \uad6c\ud604\ud55c \ub370\ucf54\ub808\uc774\ud130 \uac1d\uccb4\ub4e4\uc774 \uc874\uc7ac\ud55c\ub2e4.\nDecorator \uad6c\ud604\uccb4\ub4e4\uc740 \ud544\ub4dc\ub85c \uc6d0\ubcf8 \uac1d\uccb4\ub97c \uac00\uc9c0\ub294\ub370 \uc774\ub54c \uc6d0\ubcf8 \uac1d\uccb4\ub294 Decorator\uc5d0 \uac10\uc2f8\uc9c4 \uac1d\uccb4\uc77c \uc218\ub3c4 \uc788\ub2e4. \ud558\uc9c0\ub9cc Decorator \uac1d\uccb4\uc758 \uc785\uc7a5\uc5d0\uc11c \ud544\ub4dc\ub85c \uac00\uc9c4 \uc6d0\ubcf8 \uac1d\uccb4\uac00 Decorator\uc5d0 \uac10\uc2f8\uc84c\ub294\uc9c0\ub294 \uc54c \uc218\ub3c4 \uc5c6\uace0 \uc54c \ud544\uc694\ub3c4 \uc5c6\ub2e4.\n\ub2e8\uc9c0 \uc804\ub2ec \ubc1b\uc740 \uacb0\uacfc\uc5d0 \ubb34\uc5b8\uac00\ub97c \ucd94\uac00\ud560 \ubfd0\uc774\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h3,{id:"\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\ub294-decorator-pattern",children:"\ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\ub294 Decorator Pattern"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"public abstract class Beverage {\n    private String description;\n\n    // for Decorator\n    protected Beverage() {}\n\n    // for Client\n    public Beverage(String description) {\n        this.description = description;\n    }\n\n    public String getDescription() {\n        return description;\n    }\n\n    abstract double cost();\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"\uc6b0\uc120 \uc6d0\ubcf8 \uac1d\uccb4\uc758 Abstract Class(Inteface)\uac00 \ud544\uc694\ud558\ub2e4. \uc74c\ub8cc \uac00\uaca9\uc744 \uacc4\uc0b0\ud558\ub824 \ud588\uc73c\ub2c8 \uc608\uc2dc\uc5d0\uc11c \uc6d0\ubcf8 \uac1d\uccb4\ub4e4\uc740 \uc74c\ub8cc\uc774\ub2e4. Beverage \uad6c\ud604\uccb4 \uc989, \uc6d0\ubcf8 \uac1d\uccb4\ub4e4\uc740 \uc9c1\uc811 \uc4f0\uc77c \uc218\ub3c4 \uc788\uc9c0\ub9cc Decorator\uc5d0 \uac10\uc2f8\uc838 \uc4f0\uc77c \uc218\ub3c4 \uc788\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"public abstract class CondimentDecorator extends Beverage {\n    Beverage beverage;\n\n    protected CondimentDecorator() {}\n\n    public CondimentDecorator(Beverage beverage) {\n        this.beverage = beverage;\n    }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"\ub2e4\uc74c\uc740 Decorator \uad6c\uc131 \uc694\uc18c\ub97c \uc704\ud55c Abstract Class(Interface)\uc774\ub2e4. \uc774\uc804\uc5d0\ub3c4 \ub9d0\ud588\uc9c0\ub9cc \uc774 \ucf54\ub4dc\uc758 \ud2b9\uc9d5\uc740 (1) \uc6d0\ubcf8 Abstract Class(Interface)\ub97c \uc0c1\uc18d\ud558\uba70 (2) \uc6d0\ubcf8 \uac1d\uccb4\ub97c \ud544\ub4dc\ub85c \uac00\uc9c0\uace0 \uc788\ub2e4\ub294 \uc810\uc774\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'public class Espresso extends Beverage {\n\n    public Espresso() {\n        super("\uc5d0\uc2a4\ud504\ub808\uc18c");\n    }\n\n    @Override\n    double cost() {\n        return 1.99;\n    }\n}\n'})}),"\n",(0,n.jsx)(r.p,{children:"\ub2e4\uc74c\uc740 \uc6d0\ubcf8 \uad6c\ud604\uccb4 \uc911 \ud558\ub098\uc778 Espresso \ud074\ub798\uc2a4\uc774\ub2e4. Espresso\ub294 Beverage\ub97c \uc0c1\uc18d\ud558\uae30 \ub54c\ubb38\uc5d0 cost()\ub97c \uad6c\ud604\ud55c\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub54c Espresso\uc758 \uac00\uaca9\ub9cc \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4. \ucd94\uac00 \uad6c\uc131 \uc694\uc18c\uc5d0 \uc758\ud55c \uac00\uaca9 \ucd94\uac00\ub294 \uace0\ub824\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'public class Mocha extends CondimentDecorator {\n    public Mocha(Beverage beverage) {\n        this.beverage = beverage;\n    }\n\n    @Override\n    public String getDescription() {\n        return beverage.getDescription() + ", \ubaa8\uce74";\n    }\n\n    @Override\n    double cost() {\n        return beverage.cost() + 0.20;\n    }\n}\n\n'})}),"\n",(0,n.jsx)(r.p,{children:"\uc6d0\ubcf8 \uad6c\ud604\uccb4\uc5d0\uc11c \ucd94\uac00 \uad6c\uc131 \uc694\uc18c\uc5d0 \uc758\ud55c \uac00\uaca9 \ucd94\uac00\ub97c \uace0\ub824\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294 \uc774\uc720\uc778 Mocha Decorator \uad6c\ud604\uccb4\uc774\ub2e4.\ncost() \uba54\uc11c\ub4dc\ub97c \ubcf4\uba74 \ud544\ub4dc\ub85c \uac00\uc9c4 \uc6d0\ubcf8 \uad6c\ud604\uccb4\uc758 \uac00\uaca9\uc5d0 0.20\uc744 \ub354\ud574 \uba54\uc11c\ub4dc\ub97c \ubc18\ud658\ud55c\ub2e4. (getDescription()\ub3c4 \ub9c8\ucc2c\uac00\uc9c0 \ubc29\uc2dd\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4.)"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"public static void main(String[] args) {\n    Beverage espressoWithMocha = new Mocha(new Espresso());\n    System.out.println(espressoWithMocha.getDescription());\n    System.out.println(espressoWithMocha.cost());\n}\n\n// \uc5d0\uc2a4\ud504\ub808\uc18c, \ubaa8\uce74\n// 2.19\n"})}),"\n",(0,n.jsx)(r.p,{children:"\uc774\ub807\uac8c \uad6c\uc131\ub41c \ucf54\ub4dc\ub97c \uc2e4\ud589\ud574\ubcf4\uba74 \uc6d0\ubcf8 \uad6c\ud604\uccb4\uc5d0 Decorator \uad6c\ud604\uccb4\uc758 \ub85c\uc9c1\ub4e4\uc774 \uc798 \ub354\ud574\uc9c4 \uac78\ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,n.jsx)(r.h3,{id:"decorator-\ud328\ud134\uc73c\ub85c-\uc54c\uc544\ubcf4\ub294-\ub514\uc790\uc778-\uc6d0\uce59",children:"Decorator \ud328\ud134\uc73c\ub85c \uc54c\uc544\ubcf4\ub294 \ub514\uc790\uc778 \uc6d0\uce59"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"(1) \ubcc0\ud558\ub294 \ubd80\ubd84\uacfc \ubcc0\ud558\uc9c0 \uc54a\ub294 \ubd80\ubd84\uc744 \ubd84\ub9ac\ud55c\ub2e4. (\ucea1\uc290\ud654)\n(2) \uad6c\ud604\ubcf4\ub2e4\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub9de\ucdb0\uc11c \ud504\ub85c\uadf8\ub798\ubc0d\ud55c\ub2e4.\n(3) \uc0c1\uc18d\ubcf4\ub2e4\ub294 \uad6c\uc131(Composition)\uc744 \ud65c\uc6a9\ud55c\ub2e4.\n(4) \uc0c1\ud638\uc791\uc6a9\ud558\ub294 \uac1d\uccb4 \uc0ac\uc774\uc5d0\uc11c\ub294 \uac00\ub2a5\ud55c \ub290\uc2a8\ud55c \uacb0\ud569\uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4.\n(5) \ud074\ub798\uc2a4\ub294 \ud655\uc7a5\uc5d0 \uc5f4\ub824 \uc788\uc5b4\uc57c \ud558\uc9c0\ub9cc \ubcc0\uacbd\uc5d0 \ub2eb\ud600 \uc788\uc5b4\uc57c \ud55c\ub2e4. (OCP)"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"3\uac00\uc9c0 \ub514\uc790\uc778 \ud328\ud134\uc744 \uacf5\ubd80\ud558\uba70 \uc801\ub9bd\ud55c \ub514\uc790\uc778 \uc6d0\uce59\uc774\ub2e4. \uae4c\uba39\uae30 \uc804\uc5d0 \ub514\uc790\uc778 \uc6d0\uce59\ub4e4\uc744 \ub2e4\uc2dc \ud55c\ubc88 \ub418\uc0c8\uae30\uc790. Decorator Pattern\uc5d0\ub294 4\uac00\uc9c0 \ub514\uc790\uc778 \uc6d0\uce59\uc774 \uc5b4\ub5bb\uac8c \uc801\uc6a9\ub418\uc5c8\uc744\uae4c?"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.p,{children:"\uc6b0\uc120 \uac00\uaca9\uc744 \uacc4\uc0b0\ud558\ub294 \ub85c\uc9c1\uc5d0\uc11c \ubcc0\ud558\ub294 \ubd80\ubd84\uc774 Beverage\uc77c \uac83\uc774\ub2e4. \uc8fc\ubb38\uc5d0 \ub530\ub77c \uc74c\ub8cc\ub294 \uacc4\uc18d \ubcc0\ud558\uace0 \uc774\uc5d0 \ub530\ub77c \uac00\uaca9\uc774 \ubcc0\ud558\ub2c8 \uc774\ub97c Beverage\ub97c \ub530\ub85c \ubd84\ub9ac\ud588\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4.\n\ub610\ud55c \ubaa8\ub4e0 \uc74c\ub8cc\ub4e4\uc740 Beverage Abstract Class(Interface)\ub97c \uad6c\ud604\ud558\uace0 \uc788\uc73c\ub2c8 \uc74c\ub8cc \uad6c\ud604\uccb4\ub97c \uc0ac\uc6a9\ud558\ub294 \ucabd\uc5d0\uc11c\ub294 Beverage \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub9de\uac8c \uad6c\ud604\uc774 \uac00\ub2a5\ud558\ub2e4.\n(3), (4)\ub294 Decorator Abstract Class(Interface)\uc5d0 \uc801\uc6a9\ub418\uc5c8\ub2e4.\nDecorator Abstract Class(Interface)\uc5d0\ub294 Beverage\uac00 \ud544\ub4dc\ub85c \uc874\uc7ac\ud558\uba70 \uac01 \uad6c\ud604\uccb4\uac00 \uc544\ub2cc Abstract Class(Interface)\ub97c \uc758\uc874\ud574 \ub290\uc2a8\ud55c \uad00\uacc4\ub97c \uc720\uc9c0\ud558\uc600\ub2e4.\n\ub355\ubd84\uc5d0 \ubaa8\ub4e0 Decorator\ub294 \ubaa8\ub4e0 Beverage\uc5d0 \uc801\uc6a9\ub420 \uc218 \uc788\uace0, \uc6d0\ubcf8 \uac1d\uccb4\ub4e4\uc740 Beverage\uc758 \uc694\uac74\ub4e4\ub9cc \ub9cc\uc871\ud558\uba74 \ub418\uae30 \ub54c\ubb38\uc5d0 \ubcc0\uacbd\uacfc \ud655\uc7a5\uc5d0 \uc6a9\uc774\ud574\uc9c4\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c OCP\uc6d0\uce59\uc740 main \uba54\uc11c\ub4dc\ub97c \ubcf4\uba74 \uc54c \uc218 \uc788\ub2e4. \uc6d0\ubcf8 \uad6c\ud604\uccb4(Espresso)\uc640 Decorator\ub97c \uc870\ud569\ud558\uc5ec \uc778\uc2a4\ud134\uc2a4\ub97c \ub9cc\ub4e4\uba74 \ud0c0\uc785\uc740 Beverage\uc774\ub2e4.\n\uc989, \uc0ac\uc6a9\ucc98\uc5d0\uc11c\ub294 Decorator\uac00 \uc5b4\ub5bb\uac8c \ubc14\ub00c\ub4e0 \uc6d0\ubcf8 \uad6c\ud604\uccb4\uac00 \uc5b4\ub5bb\uac8c \ubc14\ub00c\ub4e0 Beverage\ub97c \uc774\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ucf54\ub4dc\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294\ub2e4. \ud558\uc9c0\ub9cc Beverage\uc758 \uc694\uac74\uc5d0 \ub9de\ub294 \uc6d0\ubcf8 \uad6c\ud604\uccb4\uc640 Decorator \uad6c\ud604\uccb4\ub4e4\uc740 \uc5bc\ub9c8\ub4e0\uc9c0 \ucd94\uac00\ub418\uc5b4 \ud655\uc7a5\uc774 \uac00\ub2a5\ud574\uc9c4\ub2e4."}),"\n",(0,n.jsx)(r.h2,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,n.jsx)(r.p,{children:"Spring Framework\uc758 \uc801\uc6a9 \uc608\uc2dc\ub97c \ucc3e\uc544\ubcf4\uba74 \uc804\ubd80 Proxy \uc608\uc2dc\ub85c \uc124\uba85\uc774 \ub098\uc628\ub2e4. \ud558\uc9c0\ub9cc logging\uc744 \ubaa9\uc801\uc73c\ub85c Proxy \uac1d\uccb4\ub97c \ub450\ub294 \uac74 \uadf8 \ubaa9\uc801\uc774 Decorator\uac00 \uc544\ub2cc\uac00? \uadf8\ub798\ub3c4 Proxy\ub77c\ub294 \uc6a9\uc5b4\ub85c \uc124\uba85\ub418\ub294 \uae30\ub2a5\uc774\ub2e4 \ubcf4\ub2c8 Proxy\uc5d0\n\uc11c \uc815\ub9ac\ud558\ub294 \ud3b8\uc774 \uc88b\uc744 \uac83 \uac19\uc544 \uc608\uc2dc\ub294 \uc0dd\ub7b5\ud558\ub824 \ud55c\ub2e4. \ud328\ud134\uc744 3\uac1c \uc815\ub3c4 \uacf5\ubd80\ud558\ub2c8 \uc774\uc804\ubd80\ud130 \uc313\uc544\uac00\ub358 \ub514\uc790\uc778 \uc6d0\uce59\ub4e4\uc774 \uac00\ubb3c\uac00\ubb3c\ud574\uc9c4\ub2e4 \uc2f6\uc5b4 Decorator Pattern\uc744 \uae30\uc900\uc73c\ub85c \ub2e4\uc2dc \ub3cc\uc774\ucf1c\ubd10\uc11c \uc88b\uc558\ub2e4. \ud558\uc9c0\ub9cc \uc774 \uc6d0\uce59\ub4e4\uc740 \ub9cc\ub2a5 \uc5f4\uc1e0\uac00 \uc544\ub2c8\ub2e4.\n\uc5b4\uca4c\uba74 \ud504\ub85c\uadf8\ub7a8 \ucf54\ub4dc\ub97c \ub354 \ubcf5\uc791\ud558\uac8c \ub9cc\ub4e4 \uc218\ub3c4 \uc788\uace0, \ucf54\ub4dc \uc591\uc744 \ub354 \ub298\ub9b4 \uc218\ub3c4 \uc788\ub2e4. \ubcf5\uc7a1\ud558\uc9c0 \uc54a\uc740 \uacf3\uc5d0 \ubb34\uc870\uac74 \ub514\uc790\uc778 \ud328\ud134\uc744 \uc801\uc6a9\ud55c\ub2e4\uba74 \uadf8 \ub610\ud55c \uc798\ubabb\ub41c \ub514\uc790\uc778\uc77c \uac83\uc774\ub2e4. \uc774 \uc810\uc744 \uc720\uc758\ud558\uba74\uc11c \ub514\uc790\uc778 \ud328\ud134\uc744 \uacc4\uc18d \uacf5\ubd80\ud574\ubd10\uc57c\uaca0\ub2e4."})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1981:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/decorator-pattern-640effe009adf841271e98f21736d28e.jpg"},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(6540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);