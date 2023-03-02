"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7854],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=l.createContext({}),u=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),k=r,g=s["".concat(c,".").concat(k)]||s[k]||m[k]||i;return t?l.createElement(g,a(a({ref:n},p),{},{components:t})):l.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=k;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const i={title:"\ucf54\ud2c0\ub9b0 \uc608\uc678 \ucc98\ub9ac",sidebar_position:1},a="\ucf54\ud2c0\ub9b0\uc758 \uc608\uc678 \ucc98\ub9ac",o={unversionedId:"tech/kotlin/one",id:"tech/kotlin/one",title:"\ucf54\ud2c0\ub9b0 \uc608\uc678 \ucc98\ub9ac",description:"exception.png",source:"@site/docs/tech/kotlin/one.md",sourceDirName:"tech/kotlin",slug:"/tech/kotlin/one",permalink:"/docs/tech/kotlin/one",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/kotlin/one.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\ucf54\ud2c0\ub9b0 \uc608\uc678 \ucc98\ub9ac",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"N+1 \ubb38\uc81c",permalink:"/docs/tech/jpa/one"},next:{title:"View",permalink:"/docs/tech/slack/one"}},c={},u=[{value:"Checked Exception vs Unchecked Exception(RuntimException)",id:"checked-exception-vs-unchecked-exceptionruntimexception",level:2},{value:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c Checked Exception\uc744 \ub2e4\ub8f0 \ub54c",id:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c-checked-exception\uc744-\ub2e4\ub8f0-\ub54c",level:2},{value:"Kotlin\uc5d0\uc11c try - catch\uc640 throw\ubb38\uc740 \ud45c\ud604\uc2dd",id:"kotlin\uc5d0\uc11c-try---catch\uc640-throw\ubb38\uc740-\ud45c\ud604\uc2dd",level:2},{value:"runCatching\uacfc Result\ud0c0\uc785",id:"runcatching\uacfc-result\ud0c0\uc785",level:2},{value:"runCatching \uc0ac\uc6a9 \uc608\uc2dc",id:"runcatching-\uc0ac\uc6a9-\uc608\uc2dc",level:3},{value:"\ud575\uc2ec\uc740 \uc608\uc678 \ucc98\ub9ac\ub97c \ub2e4\ub978 \ud074\ub798\uc2a4\uc5d0 \uc704\uc784\ud558\ub294 \uac83",id:"\ud575\uc2ec\uc740-\uc608\uc678-\ucc98\ub9ac\ub97c-\ub2e4\ub978-\ud074\ub798\uc2a4\uc5d0-\uc704\uc784\ud558\ub294-\uac83",level:3}],p={toc:u};function s(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\ucf54\ud2c0\ub9b0\uc758-\uc608\uc678-\ucc98\ub9ac"},"\ucf54\ud2c0\ub9b0\uc758 \uc608\uc678 \ucc98\ub9ac"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"exception.png",src:t(7961).Z,width:"1846",height:"996"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucf54\ud2c0\ub9b0\uc758 \ubaa8\ub4e0 \uc608\uc678 \ud074\ub798\uc2a4\ub294 Throwable\uc744 \uc0c1\uc18d\ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Error\ub294 \ubcf5\uad6c\uac00 \ubd88\uac00\ub2a5\ud55c \uc608\uc678"),(0,r.kt)("li",{parentName:"ul"},"Exception\uc740 \ubcf5\uad6c\uac00 \uac00\ub2a5\ud55c \uc608\uc678")))),(0,r.kt)("h2",{id:"checked-exception-vs-unchecked-exceptionruntimexception"},"Checked Exception vs Unchecked Exception(RuntimException)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Exception\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \ud3ec\ucc29\uc774 \uac00\ub2a5\ud558\uc5ec \ubcf5\uad6c\uac00 \uac00\ub2a5\ud558\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Checked\uc758 \uacbd\uc6b0 "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\uc2dc IOException, FileNotFoundException \ub4f1"),(0,r.kt)("li",{parentName:"ul"},"Java\uc5d0\uc11c\ub294 \uc608\uc678 \ucc98\ub9ac\ub97c \uac15\uc81c\ud558\uc9c0\ub9cc Kotlin\uc5d0\uc11c\ub294 \uac15\uc81c\ud558\uc9c0 \uc54a\ub294\ub2e4. try/catch",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Java \ud639\uc740 \ud0c0 \uc5b8\uc5b4\uc640\uc758 \ud638\ud658\uc744 \uc704\ud574 @Throws \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc81c\uacf5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Throws(NumberFormatException::class)\nfun convertStringToInt(str: String) {\n    ....\n}\n  \n// \uc790\ubc14\ub85c \ubcc0\ud658\ud558\uba74 \uc544\ub798\uc640 \uac19\uc74c\npublic static final void convertStringToInt(@NotNull String str) throws NumberFormatException {\n    ....\n}  \n"))))),(0,r.kt)("li",{parentName:"ul"},"@Transactional\uc5d0\uc11c \ub864\ubc31\ub418\uc9c0 \uc54a\uc74c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unchecked\uc758 \uacbd\uc6b0"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Java / Kotlin \ubaa8\ub450 \uc608\uc678 \ucc98\ub9ac\ub97c \uac15\uc81c\ud558\uc9c0 \uc54a\ub294\ub2e4.")))),(0,r.kt)("h2",{id:"\ucf54\ud2c0\ub9b0\uc5d0\uc11c-checked-exception\uc744-\ub2e4\ub8f0-\ub54c"},"\ucf54\ud2c0\ub9b0\uc5d0\uc11c Checked Exception\uc744 \ub2e4\ub8f0 \ub54c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Throws(NumberFormatException::class)\nfun convertStringToInt(str: String) {\n    throw NumberFormatException("\ubb34\uc870\uac74 Checked Exception \ubc1c\uc0dd")\n}\n\nfun main(){\n\n    // try  - catch\ub85c \uac10\uc2f8\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4.\n    var int = convertStringToInt("3");\n\n    // \uac10\uc2f8\ub3c4 \ub418\uace0\n    try {\n        int = convertStringToInt("3");\n    } catch (e : Exception){\n        println("\uc608\uc678 \ubc1c\uc0dd!")\n    } finally {\n        println("finally \uc2e4\ud589!")\n    }\n}\n')),(0,r.kt)("h2",{id:"kotlin\uc5d0\uc11c-try---catch\uc640-throw\ubb38\uc740-\ud45c\ud604\uc2dd"},"Kotlin\uc5d0\uc11c try - catch\uc640 throw\ubb38\uc740 \ud45c\ud604\uc2dd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun main(){\n    val int = try {\n        convertStringToInt("3");\n    } catch (e : Exception){\n        println("\uc608\uc678 \ubc1c\uc0dd")\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kotlin\uc5d0\uc11c try - catch\ubb38\uc740 \ud45c\ud604\uc2dd\uc774\uae30\uc5d0 \uc790\uccb4\ub85c \uac12\uc774 \ub420 \uc218 \uc788\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun illegalArgumentException() : Nothing {\n    throw IllegalArgumentException("\uc608\uc678 \ubc18\ud658")\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc608\uc678\ub294 Nothing\uc744 \ubc18\ud658\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud65c\uc6a9\ud574 \uc608\uc678\ub97c \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc\ub97c \ub9cc\ub4e4\uc5b4 \ud65c\uc6a9\ud560 \uc218 \uc788\uc74c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun main() {\n    val time = if (getCurrentTime() < 24) getCurrentTime() \n               else illegalArgumentException()\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun main() {\n    val b: String? = null\n    val c = b ?: illegalArgumentException()\n\n    c.length\n}\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5d8\ube44\uc2a4 \uc5f0\uc0b0\uc790\uc640 \uc0ac\uc6a9\ud558\uba74 nullable\ud0c0\uc785\uc744 \ub300\uc785\ud574\ub3c4 nonnull \ud0c0\uc785\uc73c\ub85c \uc778\uc2dd\ub41c\ub2e4.")))))),(0,r.kt)("h1",{id:"\ucf54\ud2c0\ub9b0\uc744-\ud65c\uc6a9\ud55c-\uc5d0\ub7ec-\ud578\ub4e4\ub9c1"},"\ucf54\ud2c0\ub9b0\uc744 \ud65c\uc6a9\ud55c \uc5d0\ub7ec \ud578\ub4e4\ub9c1"),(0,r.kt)("h2",{id:"runcatching\uacfc-result\ud0c0\uc785"},"runCatching\uacfc Result\ud0c0\uc785"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"runCatching\uc740 \ucf54\ud2c0\ub9b0\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uc5d0\ub7ec \ud578\ub4e4\ub9c1 \ubc29\uc2dd\uc774\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// runCatching\n\n@InlineOnly\n@SinceKotlin("1.3")\npublic inline fun <R> runCatching(block: () -> R): Result<R> {\n    return try {\n        Result.success(block())\n    } catch (e: Throwable) {\n        Result.failure(e)\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub0b4\ubd80\uc801\uc73c\ub85c try - catch\ubb38\uc744 \uc0ac\uc6a9\ud558\uc9c0\ub9cc"),(0,r.kt)("li",{parentName:"ul"},"Result \uac1d\uccb4\uc5d0 \uacb0\uacfc\ub97c \uac10\uc2f8\uc11c \ubc18\ud658\ud55c\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Result\npublic value class Result<out T> @PublishedApi internal constructor(\n    @PublishedApi\n    internal val value: Any?\n) : Serializable {\n\n    public val isSuccess: Boolean get() = value !is Failure\n\n    public val isFailure: Boolean get() = value is Failure\n\n    public companion object {\n\n        @Suppress("INAPPLICABLE_JVM_NAME")\n        @InlineOnly\n        @JvmName("success")\n        public inline fun <T> success(value: T): Result<T> =\n            Result(value)\n\n\n        @Suppress("INAPPLICABLE_JVM_NAME")\n        @InlineOnly\n        @JvmName("failure")\n        public inline fun <T> failure(exception: Throwable): Result<T> =\n            Result(createFailure(exception))\n    }\n    \n    internal class Failure(\n        @JvmField\n        val exception: Throwable\n    ) : Serializable {\n        override fun equals(other: Any?): Boolean = other is Failure && exception == other.exception\n        override fun hashCode(): Int = exception.hashCode()\n        override fun toString(): String = "Failure($exception)"\n    }\n    \n    // \ub4f1\ub4f1...\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc778 \uad6c\uc131\uc740",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc131\uacf5 \uc2dc \ub370\uc774\ud130\ub97c \ub2f4\uc744 value"),(0,r.kt)("li",{parentName:"ul"},"\uc2e4\ud328 \uc2dc Exception\uc744 \ub2f4\uc744 Failure \uac1d\uccb4"),(0,r.kt)("li",{parentName:"ul"},"\uc131\uacf5/\uc2e4\ud328 \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub294 \ubcc0\uc218"),(0,r.kt)("li",{parentName:"ul"},"\uc131\uacf5 / \uc2e4\ud328 \uc2dc \uac1d\uccb4\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \uba54\uc11c\ub4dc \ub4f1\uc774 \uc874\uc7ac\ud55c\ub2e4.")))),(0,r.kt)("h3",{id:"runcatching-\uc0ac\uc6a9-\uc608\uc2dc"},"runCatching \uc0ac\uc6a9 \uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \uc5d0\ub7ec \ubc1c\uc0dd \uc2dc null \ubc18\ud658\nval result = runCatching {\n  // \uc5d0\ub7ec \uac00\ub2a5\uc131 \uc788\ub294 \ub85c\uc9c1 \uc2e4\ud589\n}.getOrNull()\n\n\n// \uc5d0\ub7ec \ubc1c\uc0dd \uc2dc \ub2e4\ub978 \ub3d9\uc801 \uc218\ud589\nval response = runCatching {\n  // \uc5d0\ub7ec \uac00\ub2a5\uc131 \uc788\ub294 \ub85c\uc9c1 \uc2e4\ud589\n}.getOrElse { ex ->\n  logger.warn(ex) { "\uc5d0\ub7ec \ubc1c\uc0dd" }\n\n  // \uc5d0\ub7ec\ub97c \ub358\uc9c0\uace0 \uc2f6\ub2e4\uba74\n  throw ex\n}\n\n\ub4f1\ub4f1...\n')),(0,r.kt)("h3",{id:"\ud575\uc2ec\uc740-\uc608\uc678-\ucc98\ub9ac\ub97c-\ub2e4\ub978-\ud074\ub798\uc2a4\uc5d0-\uc704\uc784\ud558\ub294-\uac83"},"\ud575\uc2ec\uc740 \uc608\uc678 \ucc98\ub9ac\ub97c \ub2e4\ub978 \ud074\ub798\uc2a4\uc5d0 \uc704\uc784\ud558\ub294 \uac83"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// API client\n@FeignClient\ninternal interface LoginApi {\n  @PostMapping\n  fun login(\n    @RequestBody request: LoginRequestDto\n  ): OtherServiceResponse<LoginResponseDto>\n}\n\n@Component\nclass LoginApiClient internal constructor(\n  private val loginApi: LoginApi\n) {\n  fun login(request: LoginRequestDto): Result<LoginResult> {\n    return runCatching { \n      loginApi.login(request).result.toResult()\n    }\n  }\n}\n\n@Service\nclass LoginService(\n  private val loginApiClient: LoginApiClient\n) {\n  fun login(id: String, pw: String): LoginResult {\n    return loginApiClient.login(LoginRequestDto(id, pw))\n      .onFailure {\n        // \uc5d0\ub7ec \ud578\ub4e4\ub9c1\n      }\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc704 \ucf54\ub4dc\uc640 \uac19\uc774 LoginApiClient\uc5d0\uc11c \ub85c\uadf8\uc778 \uc694\uccad\uc5d0 \ub300\ud55c \uacb0\uacfc\ub97c Result\ub85c \ubc18\ud658\ud558\uba74"),(0,r.kt)("li",{parentName:"ul"},"LoginApiClient\ub97c \uc0ac\uc6a9\ud558\ub294 \uac01 Service\ub2e8\uc5d0\uc11c \uac01\uae30 \ub2e4\ub974\uac8c \uc5d0\ub7ec\ub97c \ud578\ub4e4\ub9c1\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"(\ucf54\ud2c0\ub9b0\uc758 \uc608\uc678 \ucc98\ub9ac)","[https://fastcampus.co.kr/dev_online_kopring]"),(0,r.kt)("li",{parentName:"ul"},"(\ucf54\ud2c0\ub9b0\uc744 \ud65c\uc6a9\ud55c \uc5d0\ub7ec \ud578\ub4e4\ub9c1)","[https://toss.tech/article/kotlin-result]"),(0,r.kt)("li",{parentName:"ul"},"\uc65c CheckedException\uc744 \uc5c6\uc574\uc744\uae4c?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.artima.com/articles/the-trouble-with-checked-exceptions"},"\ucc38\uace01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.artima.com/articles/the-trouble-with-checked-exceptions"},"\ucc38\uace02"))))))}s.isMDXComponent=!0},7961:(e,n,t)=>{t.d(n,{Z:()=>l});const l=t.p+"assets/images/exception-032b2fbad1104bf1841bd25501665337.png"}}]);