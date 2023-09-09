"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"8. @AspectAOP",sidebar_position:8},o=void 0,l={unversionedId:"lecture/spring-advance/eight",id:"lecture/spring-advance/eight",title:"8. @AspectAOP",description:"Spring @Aspect \uc560\ub178\ud14c\uc774\uc158",source:"@site/docs/lecture/spring-advance/eight.md",sourceDirName:"lecture/spring-advance",slug:"/lecture/spring-advance/eight",permalink:"/docs/lecture/spring-advance/eight",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lecture/spring-advance/eight.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"8. @AspectAOP",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"7. \ube48 \ud6c4\ucc98\ub9ac\uae30",permalink:"/docs/lecture/spring-advance/seven"},next:{title:"9. AOP",permalink:"/docs/lecture/spring-advance/nine"}},c={},p=[{value:"Spring @Aspect \uc560\ub178\ud14c\uc774\uc158",id:"spring-aspect-\uc560\ub178\ud14c\uc774\uc158",level:2},{value:"\uc6d0\ub9ac",id:"\uc6d0\ub9ac",level:3},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"spring-aspect-\uc560\ub178\ud14c\uc774\uc158"},"Spring @Aspect \uc560\ub178\ud14c\uc774\uc158"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud3b8\ub9ac\ud558\uac8c Pointcut\uacfc Advice\ub85c \uad6c\uc131\ub41c Advisor\ub97c \uc0dd\uc131\ud574\uc900\ub2e4")),(0,a.kt)("h3",{id:"\uc6d0\ub9ac"},"\uc6d0\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"spring-boot-starter-aop \uc801\uc6a9 \uc2dc \ucd94\uac00\ub41c AnnotationAwareAspectJAutoProxyCreator\uac00 @Aspect\ub97c Advisor\ub85c \ub9cc\ub4e4\uc5b4\uc900\ub2e4"),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \ub9cc\ub4e4\uc5b4\uc9c4 Advisor\ub85c\ub3c4 Proxy\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uac8c \ub428\n",(0,a.kt)("img",{alt:"aspect.png",src:n(8760).Z,width:"1416",height:"630"}))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"App \uc2e4\ud589"),(0,a.kt)("li",{parentName:"ol"},"@Aspect \ube48 \uc870\ud68c"),(0,a.kt)("li",{parentName:"ol"},"Advisor \uc0dd\uc131: @Aspect \uc5b4\ub4dc\ubc14\uc774\uc800 \ube4c\ub354\ub97c \ud1b5\ud574"),(0,a.kt)("li",{parentName:"ol"},"Advisor \uc800\uc7a5: @Aspect \uc5b4\ub4dc\ubc14\uc774\uc800 \ube4c\ub354 \ub0b4\ubd80\uc5d0")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"aspect.png",src:n(1971).Z,width:"1676",height:"800"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Bean \uc0dd\uc131"),(0,a.kt)("li",{parentName:"ol"},"\ube48 \ud6c4\ucc98\ub9ac\uae30\uc5d0 Bean \uc804\ub2ec"),(0,a.kt)("li",{parentName:"ol"},"Advisor\uc640 @Aspect \uc5b4\ub4dc\ubc14\uc774\uc800 \ube4c\ub354 \ub0b4\ubd80\uc758 Advisor \uc870\ud68c"),(0,a.kt)("li",{parentName:"ol"},"\ud504\ub85d\uc2dc \uc801\uc6a9 \ub300\uc0c1 \uccb4\ud06c"),(0,a.kt)("li",{parentName:"ol"},"\ud504\ub85d\uc2dc \uc0dd\uc131"),(0,a.kt)("li",{parentName:"ol"},"\ube48 \ub4f1\ub85d")),(0,a.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Aspect\npublic class LogTraceAspect {\n\n    private final LogTrace logTrace;\n\n    public LogTraceAspect(LogTrace logTrace) {\n        this.logTrace = logTrace;\n    }\n\n    @Around("execution(* hello.proxy.app..*(..))")\n    public Object execute(ProceedingJoinPoint joinPoint) throws Throwable {\n        TraceStatus status = null;\n        try {\n            String message = joinPoint.getSignature().toShortString();\n            status = logTrace.begin(message);\n\n            //\ub85c\uc9c1 \ud638\ucd9c\n            Object result = joinPoint.proceed();\n\n            logTrace.end(status);\n            return result;\n        } catch (Exception e) {\n            logTrace.exception(status, e);\n            throw e;\n        }\n    }\n}\n\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Aspect"),": \uc560\ub178\ud14c\uc774\uc158 \uae30\ubc18 \ud504\ub85d\uc2dc\ub97c \uc801\uc6a9\ud560 \ub54c \uc0ac\uc6a9 / \uc560\ub178\ud14c\uc774\uc158\uc774 \uc788\uc5b4\ub3c4 \uba85\uc2dc\uc801\uc73c\ub85c Bean \ub4f1\ub85d\uc774 \ud544\uc694\ud568"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@Around"),": \uac12 = pointcut / \uba54\uc11c\ub4dc = advice"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ProceedingJoinPoint joinPoint"),": advice\uc758 MethodInvocation\uacfc \uc720\uc0ac. \uc2e4\uc81c \ud638\ucd9c \ub300\uc0c1 / \uc778\uc790 / \uba54\ud0c0 \uc815\ubcf4 \ub4f1\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proceed()"),": \uc2e4\uc81c Target \ud638\ucd9c")),(0,a.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cross-cutting-concerns.png",src:n(9161).Z,width:"1428",height:"618"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc9c0\uae08\uae4c\uc9c0 \ub2e4\uc591\ud55c \ubc29\uc2dd\uc73c\ub85c \uad6c\ud604\ud55c \ud504\ub85d\uc2dc / \ub370\ucf54\ub808\uc774\ud130 \ud328\ud134\uc744 \uc54c\uc544\ubd24\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85d\uc2dc \ud328\ud134: \uc811\uadfc \uc81c\uc5b4\uac00 \ubaa9\uc801"),(0,a.kt)("li",{parentName:"ul"},"\ub370\ucf54\ub808\uc774\ud130 \ud328\ud134: \ubd80\uac00 \uae30\ub2a5 \ucd94\uac00\uac00 \ubaa9\uc801"))),(0,a.kt)("li",{parentName:"ul"},"\uacb0\uad6d \uc6b0\ub9ac\uac00 \ud558\uace0 \uc2f6\uc740 \uac83\uc740 ",(0,a.kt)("inlineCode",{parentName:"li"},"\uc5ec\ub7ec \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \uacf5\ud1b5 \ub85c\uc9c1\uc744 \ud55c \uacf3\uc73c\ub85c \ubaa8\uc73c\ub294 \uac83!")),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uae30\ub2a5\uc744 \ud6a1\ub2e8 \uad00\uc2ec\uc0ac\ub77c \ubd80\ub978\ub2e4.")))}u.isMDXComponent=!0},8760:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aspect1-a1d59dd59da30a2f527099f155a3a7cb.png"},1971:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/aspect2-c626d99053e02c2d0a60ff3f53268315.png"},9161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cross-cutting-concerns-b3e0044346261bd16eff47362ddb8dc4.png"}}]);