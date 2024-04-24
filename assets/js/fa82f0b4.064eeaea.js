"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={title:"redis repositories",sidebar_position:1,tag:["backend","spring","spring data redis"]},o=void 0,l={unversionedId:"web/backend/spring/spring-data-redis/redis-repositories",id:"web/backend/spring/spring-data-redis/redis-repositories",title:"redis repositories",description:"01. \uc0ac\uc6a9 \ubc29\uc2dd",source:"@site/docs/resource/web/backend/spring/spring-data-redis/redis-repositories.md",sourceDirName:"web/backend/spring/spring-data-redis",slug:"/web/backend/spring/spring-data-redis/redis-repositories",permalink:"/resource/web/backend/spring/spring-data-redis/redis-repositories",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"redis repositories",sidebar_position:1,tag:["backend","spring","spring data redis"]},sidebar:"tutorialSidebar",previous:{title:"spring data redis",permalink:"/resource/category/spring-data-redis"},next:{title:"redis support",permalink:"/resource/web/backend/spring/spring-data-redis/redis-support"}},s={},p=[{value:"01. \uc0ac\uc6a9 \ubc29\uc2dd",id:"01-\uc0ac\uc6a9-\ubc29\uc2dd",level:2},{value:"Entity \uc815\uc758",id:"entity-\uc815\uc758",level:3},{value:"Repository interface \uc815\uc758",id:"repository-interface-\uc815\uc758",level:3},{value:"RedisTemplate \ubc0f EnableRedisRepositories \uc5b4\ub178\ud14c\uc774\uc158 \uc124\uc815",id:"redistemplate-\ubc0f-enableredisrepositories-\uc5b4\ub178\ud14c\uc774\uc158-\uc124\uc815",level:3},{value:"\uc2e4\ud589 \ucf54\ub4dc",id:"\uc2e4\ud589-\ucf54\ub4dc",level:3},{value:"02. Time To Live",id:"02-time-to-live",level:2},{value:"@TimeToLive \uc0ac\uc6a9 \ubc29\uc2dd",id:"timetolive-\uc0ac\uc6a9-\ubc29\uc2dd",level:3},{value:"Reference",id:"reference",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"01-\uc0ac\uc6a9-\ubc29\uc2dd"},"01. \uc0ac\uc6a9 \ubc29\uc2dd"),(0,i.kt)("h3",{id:"entity-\uc815\uc758"},"Entity \uc815\uc758"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@RedisHash("people")\npublic class Person {\n\n  @Id String id;\n  String firstname;\n  String lastname;\n  Address address;\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@RedisHash\uc640 @Id\ub97c \ud1b5\ud574 Domain Entity\ub97c \uc815\uc758\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"@Id\uac12\uacfc @RedisHash\uc758 value \uc870\ud569\uc73c\ub85c key\uac12\uc774 \uc0dd\uc131\ub41c\ub2e4.")),(0,i.kt)("h3",{id:"repository-interface-\uc815\uc758"},"Repository interface \uc815\uc758"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface PersonRepository extends CrudRepository<Person, String> {\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CrudRepository\ub97c extends\ud55c Repository interface\ub97c \uc815\uc758\ud558\uba74"),(0,i.kt)("li",{parentName:"ul"},"Redis Data\uc5d0 \ub300\ud55c crud \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface CrudRepository<T, ID> extends Repository<T, ID> {\n\n  <S extends T> S save(S entity);      \n\n  Optional<T> findById(ID primaryKey); \n\n  Iterable<T> findAll();               \n\n  long count();                        \n\n  void delete(T entity);               \n\n  boolean existsById(ID primaryKey);   \n\n  // \u2026 more functionality omitted.\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CrudRepository \uc81c\uacf5 \uae30\ub2a5\uc740 \uc704\uc640 \uac19\ub2e4"),(0,i.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uc9c1\uad00\uc801\uc774\ub77c \ub530\ub85c \ud544\uc694 \uc5c6\uc744\ub4ef"),(0,i.kt)("li",{parentName:"ul"},"ListCrudRepository\ub3c4 \uc788\ub294\ub370 CrudRepository\uc640 \ub2e4\ub978 \uc810\uc740 List\ub97c \ubc18\ud658\ud55c\ub2e4\ub294 \uc810 \ubfd0\uc774\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface PagingAndSortingRepository<T, ID>  {\n\n  Iterable<T> findAll(Sort sort);\n\n  Page<T> findAll(Pageable pageable);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud398\uc774\uc9d5\uc744 \ud65c\uc6a9\ud55c \uc811\uadfc\uc5d0 \ud544\uc694\ud55c \uba54\uc11c\ub4dc\ub97c \uac00\uc9c4 interface\ub3c4 \uc874\uc7ac\ud568"),(0,i.kt)("li",{parentName:"ul"},"Crud\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c ListPagingAndSortingRepository\ub3c4 \uc874\uc7ac\ud55c\ub2e4"),(0,i.kt)("li",{parentName:"ul"},"\uc678\uc5d0\ub3c4 PagingAndSortingRepository, ReactiveSortingRepository, RxJava3SortingRepository, or CoroutineSortingRepository \ub4f1\uc774 \uc874\uc7ac\ud568")),(0,i.kt)("h3",{id:"redistemplate-\ubc0f-enableredisrepositories-\uc5b4\ub178\ud14c\uc774\uc158-\uc124\uc815"},"RedisTemplate \ubc0f EnableRedisRepositories \uc5b4\ub178\ud14c\uc774\uc158 \uc124\uc815"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\n@EnableRedisRepositories\npublic class ApplicationConfig {\n\n  @Bean\n  public RedisConnectionFactory connectionFactory() {\n    return new LettuceConnectionFactory();\n  }\n\n  @Bean\n  public RedisTemplate<?, ?> redisTemplate(RedisConnectionFactory redisConnectionFactory) {\n\n    RedisTemplate<byte[], byte[]> template = new RedisTemplate<byte[], byte[]>();\n    template.setConnectionFactory(redisConnectionFactory);\n    return template;\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RedisConnectionFactory, RedisTemplate \ube48 \ub4f1\ub85d\uacfc @EnableRedisRepositories \ucd94\uac00\uac00 \ud544\uc694\ud568")),(0,i.kt)("h3",{id:"\uc2e4\ud589-\ucf54\ub4dc"},"\uc2e4\ud589 \ucf54\ub4dc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Autowired PersonRepository repo;\n\npublic void basicCrudOperations() {\n\n  Person rand = new Person("rand", "al\'thor");\n  rand.setAddress(new Address("emond\'s field", "andor"));\n\n  repo.save(rand);            // 1                             \n\n  repo.findOne(rand.getId()); // 2                         \n\n  repo.count();               // 3                         \n\n  repo.delete(rand);          // 4                         \n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(1) \ud604\uc7ac \uac12\uc778 null\uc778 \uacbd\uc6b0 \uc0c8\ub85c\uc6b4 id\ub97c \uc0dd\uc131\ud558\uac70\ub098 \uc774\ubbf8 \uc124\uc815\ub41c id \uac12\uc744 \uc7ac\uc0ac\uc6a9 (keyspace:id)"),(0,i.kt)("li",{parentName:"ul"},"(2) \uc870\ud68c\ub294 \uc124\uc815\ub41c id\uac12\uc744 \ubc14\ud0d5\uc73c\ub85c \uc870\ud68c\uac00 \uc9c4\ud589\ub41c\ub2e4 (keyspace:id)"),(0,i.kt)("li",{parentName:"ul"},"(3) keyspace\uc5d0 \uc874\uc7ac\ud558\ub294 \ubaa8\ub4e0 entity\uc758 \uac1c\uc218\ub97c \uc815\uc758\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"(4) \uc8fc\uc5b4\uc9c4 \uac1d\uccb4\ub97c Redis\uc5d0\uc11c \uc81c\uac70\ud55c\ub2e4")),(0,i.kt)("h2",{id:"02-time-to-live"},"02. Time To Live"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub9cc\ub8cc\uae30\ud55c \uc124\uc815\uc5d0\ub294 2\uac00\uc9c0 \ubc29\uc2dd\uc774 \uc788\ub2e4",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"@RedisHash(timeToLive=)\ub97c \ud65c\uc6a9\ud558\uc5ec \uc124\uc815\ud558\ub294 \ubc29\uc2dd"),(0,i.kt)("li",{parentName:"ol"},"@TimeToLive\ub97c \ud65c\uc6a9\ud558\ub294 \ubc29\uc2dd")))),(0,i.kt)("h3",{id:"timetolive-\uc0ac\uc6a9-\ubc29\uc2dd"},"@TimeToLive \uc0ac\uc6a9 \ubc29\uc2dd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class TimeToLiveOnProperty {\n\n  @Id\n  private String id;\n\n  @TimeToLive\n  private Long expiration;\n}\n\npublic class TimeToLiveOnMethod {\n\n  @Id\n  private String id;\n\n  @TimeToLive\n  public long getTimeToLive() {\n    return new Random().nextLong();\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@TimeToLive \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud65c\uc6a9\ud558\uba74 \ud544\ub4dc \ud639\uc740 \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ub9cc\ub8cc \uae30\ud55c\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub2e8, \ud544\ub4dc\uc640 \uba54\uc11c\ub4dc \ub450 \uacf3\uc5d0 \ubaa8\ub450 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc548 \ub41c\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"\ub2e8\uc704\ub294 Second\uc774\ub2e4")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data/redis/docs/3.0.12/reference/html/#redis.repositories"},"Spring Data - Redis - Repositories")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data-redis/reference/repositories.html"},"Spring Data Redis - Repositories"))))}u.isMDXComponent=!0}}]);