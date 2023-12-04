"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2552],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),g=i,f=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7467:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const a={title:"redis repositories",sidebar_position:1,tag:["backend","spring","spring data redis"]},o=void 0,s={unversionedId:"web/backend/spring/spring-data-redis/redis-repositories",id:"web/backend/spring/spring-data-redis/redis-repositories",title:"redis repositories",description:"01. \uae30\ubcf8 \uac1c\ub150",source:"@site/docs/resource/web/backend/spring/spring-data-redis/redis-repositories.md",sourceDirName:"web/backend/spring/spring-data-redis",slug:"/web/backend/spring/spring-data-redis/redis-repositories",permalink:"/resource/web/backend/spring/spring-data-redis/redis-repositories",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"redis repositories",sidebar_position:1,tag:["backend","spring","spring data redis"]},sidebar:"tutorialSidebar",previous:{title:"spring data redis",permalink:"/resource/category/spring-data-redis"},next:{title:"redis support",permalink:"/resource/web/backend/spring/spring-data-redis/redis-support"}},p={},l=[{value:"01. \uae30\ubcf8 \uac1c\ub150",id:"01-\uae30\ubcf8-\uac1c\ub150",level:2},{value:"02. Repository \uc778\ud130\ud398\uc774\uc2a4 \uc815\uc758\ud558\uae30",id:"02-repository-\uc778\ud130\ud398\uc774\uc2a4-\uc815\uc758\ud558\uae30",level:2},{value:"Reference",id:"reference",level:2}],d={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"01-\uae30\ubcf8-\uac1c\ub150"},"01. \uae30\ubcf8 \uac1c\ub150"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface CrudRepository<T, ID> extends Repository<T, ID> {\n\n  <S extends T> S save(S entity);      \n\n  Optional<T> findById(ID primaryKey); \n\n  Iterable<T> findAll();               \n\n  long count();                        \n\n  void delete(T entity);               \n\n  boolean existsById(ID primaryKey);   \n\n  // \u2026 more functionality omitted.\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CrudRepository \uc81c\uacf5 \uae30\ub2a5\uc740 \uc704\uc640 \uac19\ub2e4"),(0,i.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uc9c1\uad00\uc801\uc774\ub77c \ub530\ub85c \ud544\uc694 \uc5c6\uc744\ub4ef"),(0,i.kt)("li",{parentName:"ul"},"ListCrudRepository\ub3c4 \uc788\ub294\ub370 CrudRepository\uc640 \ub2e4\ub978 \uc810\uc740 List\ub97c \ubc18\ud658\ud55c\ub2e4\ub294 \uc810 \ubfd0\uc774\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface PagingAndSortingRepository<T, ID>  {\n\n  Iterable<T> findAll(Sort sort);\n\n  Page<T> findAll(Pageable pageable);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9d5\uc744 \ud65c\uc6a9\ud55c \uc811\uadfc\uc5d0 \ud544\uc694\ud55c \uba54\uc11c\ub4dc\ub97c \uac00\uc9c4 interface\ub3c4 \uc874\uc7ac\ud568"),(0,i.kt)("li",{parentName:"ul"},"Crud\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c ListPagingAndSortingRepository\ub3c4 \uc874\uc7ac\ud55c\ub2e4")),(0,i.kt)("h2",{id:"02-repository-\uc778\ud130\ud398\uc774\uc2a4-\uc815\uc758\ud558\uae30"},"02. Repository \uc778\ud130\ud398\uc774\uc2a4 \uc815\uc758\ud558\uae30"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data/redis/docs/3.0.12/reference/html/#redis.repositories"},"Spring Data - Redis - Repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data-redis/reference/repositories.html"},"Spring Data Redis - Repositories"))))}u.isMDXComponent=!0}}]);