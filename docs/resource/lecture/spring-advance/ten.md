---
title: 10. AOP Pointcut
sidebar_position: 10
tag: [lecture, spring advance]
---
## Pointcut 지시자 (= AspectJ가 제공하는 포인트컷 표현식)

### 포인트컷 지시자의 종류
- execution : 메소드 실행 조인 포인트를 매칭한다. 스프링 AOP에서 가장 많이 사용하고, 기능도 복잡하다.
- within : 특정 타입 내의 조인 포인트를 매칭한다.
- args : 인자가 주어진 타입의 인스턴스인 조인 포인트
- this : 스프링 빈 객체(스프링 AOP 프록시)를 대상으로 하는 조인 포인트
- target : Target 객체(스프링 AOP 프록시가 가르키는 실제 대상)를 대상으로 하는 조인 포인트 
- @target : 실행 객체의 클래스에 주어진 타입의 애노테이션이 있는 조인 포인트
- @within : 주어진 애노테이션이 있는 타입 내 조인 포인트
- @annotation : 메서드가 주어진 애노테이션을 가지고 있는 조인 포인트를 매칭
- @args : 전달된 실제 인수의 런타임 타입이 주어진 타입의 애노테이션을 갖는 조인 포인트 
- bean : 스프링 전용 포인트컷 지시자, 빈의 이름으로 포인트컷을 지정한다.


## excution

### 매칭 조건

매칭 조건
- 접근제어자
- 반환타입 
- 선언타입
- 메서드이름
- 파라미터
- 예외

### 예시
```java
@Slf4j
public class ExecutionTest {

    AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
    Method helloMethod;

    @BeforeEach
    public void init() throws NoSuchMethodException {
        helloMethod = MemberServiceImpl.class.getMethod("hello", String.class);
    }

    @Test
    void printMethod() {
        //public java.lang.String hello.aop.member.MemberServiceImpl.hello(java.lang.String)
        log.info("helloMethod={}", helloMethod);
    }

    @Test
    void exactMatch() {
        //public java.lang.String hello.aop.member.MemberServiceImpl.hello(java.lang.String)
        pointcut.setExpression("execution(public String hello.aop.member.MemberServiceImpl.hello(String))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void allMatch() {
        pointcut.setExpression("execution(* *(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void nameMatch() {
        pointcut.setExpression("execution(* hello(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void nameMatchStar1() {
        pointcut.setExpression("execution(* hel*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void nameMatchStar2() {
        pointcut.setExpression("execution(* *el*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void nameMatchFalse() {
        pointcut.setExpression("execution(* nono(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();
    }

    @Test
    void packageExactMatch1() {
        pointcut.setExpression("execution(* hello.aop.member.MemberServiceImpl.hello(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void packageExactMatch2() {
        pointcut.setExpression("execution(* hello.aop.member.*.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void packageExactFalse() {
        pointcut.setExpression("execution(* hello.aop.*.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();
    }

    @Test
    void packageMatchSubPackage1() {
        pointcut.setExpression("execution(* hello.aop.member..*.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void packageMatchSubPackage2() {
        pointcut.setExpression("execution(* hello.aop..*.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void typeExactMatch() {
        pointcut.setExpression("execution(* hello.aop.member.MemberServiceImpl.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    // excution에서 MemberService를 선언해줘도 자식 타입인 MemberServiceImpl에도 적용된다.
    @Test
    void typeMatchSuperType() {
        pointcut.setExpression("execution(* hello.aop.member.MemberService.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }


    // internal 메서드는 MemberServiceImpl만 정의한 메서드이다.
    // 아래 2개의 테스트를 보면 MemberService로 명시했을 때는 internal 메서드를 찾을 수 없는 것을 확인할 수 있다
    @Test
    void typeMatchInternal() throws NoSuchMethodException {
        pointcut.setExpression("execution(* hello.aop.member.MemberServiceImpl.*(..))");

        Method internalMethod = MemberServiceImpl.class.getMethod("internal", String.class);
        assertThat(pointcut.matches(internalMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void typeMatchNoSuperTypeMethodFalse() throws NoSuchMethodException {
        pointcut.setExpression("execution(* hello.aop.member.MemberService.*(..))");

        Method internalMethod = MemberServiceImpl.class.getMethod("internal", String.class);
        assertThat(pointcut.matches(internalMethod, MemberServiceImpl.class)).isFalse();
    }

    //String 타입의 파라미터 허용
    //(String)
    @Test
    void argsMatch() {
        pointcut.setExpression("execution(* *(String))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    //파라미터가 없어야 함
    //()
    @Test
    void argsMatchNoArgs() {
        pointcut.setExpression("execution(* *())");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();
    }

    //정확히 하나의 파라미터 허용, 모든 타입 허용
    //(Xxx)
    @Test
    void argsMatchStar() {
        pointcut.setExpression("execution(* *(*))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    //숫자와 무관하게 모든 파라미터, 모든 타입 허용
    //(), (Xxx), (Xxx, Xxx)
    @Test
    void argsMatchAll() {
        pointcut.setExpression("execution(* *(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    //String 타입으로 시작, 숫자와 무관하게 모든 파라미터, 모든 타입 허용
    //(String), (String, Xxx), (String, Xxx, Xxx)
    @Test
    void argsMatchComplex() {
        pointcut.setExpression("execution(* *(String, ..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }
}
```
- `AspectJExpressionPointcut`: 포인트컷 표현식 처리 클래스. setExpression() 메서드로 설정


### Excution 파라미터 매칭 규칙
- execution 파라미터 매칭 규칙은 다음과 같다.
- (String) : 정확하게 String 타입 파라미터
- () : 파라미터가 없어야 한다.
- (*) : 정확히 하나의 파라미터, 단 모든 타입을 허용한다.
- (*, *) : 정확히 두 개의 파라미터, 단 모든 타입을 허용한다.
- (..) : 숫자와 무관하게 모든 파라미터, 모든 타입을 허용한다. 참고로 파라미터가 없어도 된다. 0..* 로 이해하면 된다.
- (String, ..) : String 타입으로 시작해야 한다. 숫자와 무관하게 모든 파라미터, 모든 타입을 허용한다. 예) (String) , (String, Xxx) , (String, Xxx, Xxx) 허용


## within
- 특정 타앱 내의 조인 포인트들로 매칭을 제한함
- 즉 타입을 기반으로 매칭 후 메서드에 자동 적용됨
- 기존 execution에서 타입 부분만 사용하는 형식
- 단, execution과 다르게 정확한 타입 명시가 필요함(부모 타입 != 자식 타입)


### 예제
```java
public class WithinTest {

    AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
    Method helloMethod;

    @BeforeEach
    public void init() throws NoSuchMethodException {
        helloMethod = MemberServiceImpl.class.getMethod("hello", String.class);
    }

    @Test
    void withinExact() {
        pointcut.setExpression("within(hello.aop.member.MemberServiceImpl)");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void withinStar() {
        pointcut.setExpression("within(hello.aop.member.*Service*)");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    void withinSubPackage() {
        pointcut.setExpression("within(hello.aop..*)");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    @Test
    @DisplayName("타켓의 타입에만 직접 적용, 인터페이스를 선정하면 안된다.")
    void withinSuperTypeFalse() {
        pointcut.setExpression("within(hello.aop.member.MemberService)");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();
    }

    @Test
    @DisplayName("execution은 타입 기반, 인터페이스 선정 가능")
    void executionSuperTypeTrue() {
        pointcut.setExpression("execution(* hello.aop.member.MemberService.*(..))");
        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }
}
```


## args
- 인자를 기준으로 메서드 매칭
- execution은 파라미터의 타입이 정확히 매칭되어야 한다. (클래스 선언 정보를 기반으로 판단하기에)
  - class 선언 정보에서는 impements, extends한 클래스/인터페이스를 알 수 없나보다...
- args는 파라미터 타입을 비교할 때 부모 타입을 허용한다. (파라미터로 넘어온 인스턴스를 보고 판단하기 때문)

### 예제
```java
public class ArgsTest {

    Method helloMethod;

    @BeforeEach
    public void init() throws NoSuchMethodException {
        helloMethod = MemberServiceImpl.class.getMethod("hello", String.class);
    }

    private AspectJExpressionPointcut pointcut(String expression) {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression(expression);
        return pointcut;
    }

    @Test
    void args() {
        //hello(String)과 매칭
        assertThat(pointcut("args(String)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("args(Object)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("args()")
                .matches(helloMethod, MemberServiceImpl.class)).isFalse();
        assertThat(pointcut("args(..)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("args(*)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("args(String,..)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
    }

    /**
     * execution(* *(java.io.Serializable)): 메서드의 시그니처로 판단 (정적)
     * args(java.io.Serializable): 런타임에 전달된 인수로 판단 (동적)
     */
    @Test
    void argsVsExecution() {
        //Args
        assertThat(pointcut("args(String)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("args(java.io.Serializable)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("args(Object)")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();

        //Execution
        assertThat(pointcut("execution(* *(String))")
                .matches(helloMethod, MemberServiceImpl.class)).isTrue();
        assertThat(pointcut("execution(* *(java.io.Serializable))") //매칭 실패
                .matches(helloMethod, MemberServiceImpl.class)).isFalse();
        assertThat(pointcut("execution(* *(Object))") //매칭 실패
                .matches(helloMethod, MemberServiceImpl.class)).isFalse();
    }
}
```


## @target, @within
- 둘 다 애노테이션 기반 매칭
- 단,
  - @target: 인스턴스의 모든 메서드에 적용 (부모 클래스 메스도에도 적용됨)
  - @within: 해당 타입 내에 있는 메서드만 (부모 클래스 메서드에 적용 안됨)


### 예제
```java
@Slf4j
@Import({AtTargetAtWithinTest.Config.class})
@SpringBootTest
public class AtTargetAtWithinTest {

    @Autowired
    Child child;

    @Test
    void success() {
        log.info("child Proxy={}", child.getClass());
        child.childMethod(); //부모, 자식 모두 있는 메서드
        child.parentMethod(); //부모 클래스만 있는 메서드
    }

    static class Config {

        @Bean
        public Parent parent() {
            return new Parent();
        }
        @Bean
        public Child child() {
            return new Child();
        }
        @Bean
        public AtTargetAtWithinAspect atTargetAtWithinAspect() {
            return new AtTargetAtWithinAspect();
        }
    }

    static class Parent {
        public void parentMethod(){} //부모에만 있는 메서드
    }

    @ClassAop
    static class Child extends Parent {
        public void childMethod(){}
    }

    @Slf4j
    @Aspect
    static class AtTargetAtWithinAspect {

        //@target: 인스턴스 기준으로 모든 메서드의 조인 포인트를 선정, 부모 타입의 메서드도 적용
        @Around("execution(* hello.aop..*(..)) && @target(hello.aop.member.annotation.ClassAop)")
        public Object atTarget(ProceedingJoinPoint joinPoint) throws Throwable {
            log.info("[@target] {}", joinPoint.getSignature());
            return joinPoint.proceed();
        }

        //@within: 선택된 클래스 내부에 있는 메서드만 조인 포인트로 선정, 부모 타입의 메서드는 적용되지 않음
        @Around("execution(* hello.aop..*(..)) && @within(hello.aop.member.annotation.ClassAop)")
        public Object atWithin(ProceedingJoinPoint joinPoint) throws Throwable {
            log.info("[@within] {}", joinPoint.getSignature());
            return joinPoint.proceed();
        }
    }
}
```

##  args, @args, @target 주의할 점
- 실제 객체 인스턴스가 생성되고 실행될 때 advice 적용 여부를 확인할 수 있다.
- 즉, 일단 프록시 객체가 존재해야 실행 시점에 판단할 수 있기 때문에 프록시가 없으면 실행 시점에 판단 자체가 불가능하다.
- 때문에 예시를 보면 execution과 함께 사용하는 것을 확인할 수 있다.


## @annotation, @args
- `@annotation`: 메서드 애노테이션을 기반으로 조인 포인트 매칭
- `@args`: 전달된 실제 인수의 런타임 타입과 목표한 애노테이션을 기반으로 조인 포인트 매칭

## bean
- 스프링 전용 포인트컷 지시자, 빈의 이름으로 지정한다.


### 예제
```java
@Import(AspectV6Advice.class)
public class AopTest {

    @Autowired
    OrderService orderService;

    @Autowired
    OrderRepository orderRepository;

    @Test
    void aopInfo() {
        log.info("isAopProxy, orderService={}", AopUtils.isAopProxy(orderService));
        log.info("isAopProxy, orderRepository={}", AopUtils.isAopProxy(orderRepository));
    }

    @Test
    void success() {
        orderService.orderItem("itemA");
    }
}
```


## 매개변수 전달
- 포인트컷 표현식을 이용한 advice 매개변수 전달

### 예제
```java
@Slf4j
@Import(ParameterTest.ParameterAspect.class)
@SpringBootTest
public class ParameterTest {

    @Autowired
    MemberService memberService;

    @Test
    void success() {
        log.info("memberService Proxy={}", memberService.getClass());
        memberService.hello("helloA");
    }

    @Slf4j
    @Aspect
    static class ParameterAspect {

        @Pointcut("execution(* hello.aop.member..*.*(..))")
        private void allMember() {
        }

        @Around("allMember()")
        public Object logArgs1(ProceedingJoinPoint joinPoint) throws Throwable {
            Object arg1 = joinPoint.getArgs()[0];
            log.info("[logArgs1]{}, arg={}", joinPoint.getSignature(), arg1);
            return joinPoint.proceed();
        }

        // 매개변수 이름을 맞춰야 한다.
        @Around("allMember() && args(arg,..)")
        public Object logArgs2(ProceedingJoinPoint joinPoint, Object arg) throws Throwable {
            log.info("[logArgs2]{}, arg={}", joinPoint.getSignature(), arg);
            return joinPoint.proceed();
        }
        
        // 메서드에 지정한 타입으로 제한된다.
        // 여기서 arg는 String
        @Before("allMember() && args(arg,..)")
        public void logArgs3(String arg) {
            log.info("[logArgs3] arg={}", arg);
        }

        @Before("allMember() && this(obj)")
        public void thisArgs(JoinPoint joinPoint, MemberService obj) {
            log.info("[this]{}, obj={}", joinPoint.getSignature(), obj.getClass());
        }

        @Before("allMember() && target(obj)")
        public void targetArgs(JoinPoint joinPoint, MemberService obj) {
            log.info("[target]{}, obj={}", joinPoint.getSignature(), obj.getClass());
        }

        @Before("allMember() && @target(annotation)")
        public void atTarget(JoinPoint joinPoint, ClassAop annotation) {
            log.info("[@target]{}, obj={}", joinPoint.getSignature(), annotation);
        }

        @Before("allMember() && @within(annotation)")
        public void atWithin(JoinPoint joinPoint, ClassAop annotation) {
            log.info("[@within]{}, obj={}", joinPoint.getSignature(), annotation);
        }

        @Before("allMember() && @annotation(annotation)")
        public void atAnnotation(JoinPoint joinPoint, MethodAop annotation) {
            log.info("[@annotation]{}, annotationValue={}", joinPoint.getSignature(), annotation.value());
        }
    }
}
```
- `this`: 프록시 객체를 전달 받는다.
- `target`: 실제 대상 객체를 전달 받는다.
- `@target` , `@within` : 타입의 애노테이션을 전달 받는다.
- `@annotation` : 메서드의 애노테이션을 전달 받는다.


## this, target
- this: 스프링 빈 객체(프록시)를 대상으로 하는 Joinpoint
- target: Target(프록시가 가지는 실제 대상 객체)를 대상으로 하는 Joinpoint
- 부모 타입은 허용하되, 적용 타입 하나를 정확하게 지정해야 한다.

### 생성 방식
#### 1. JDK 동적 프록시
- hello.aop.member.MemberService
  - this: 프록시 객체를 보고 판단. this는 부모 타입을 허용하기에 AOP 적용됨
  - target: target 객체를 보고 판단. target도 부모 타입을 허용하기에 AOP 적용됨
- hello.aop.member.MemberServiceImpl
  - this: proxy 객체를 보고 판단. 하지만 proxy 객체는 MemberService 인터페이스를 기반으로 구현된 클래스라 AOP 적용 대상이 아니다.
  - target: target 객체를 보고 판단. target 객체는 언제나 MemberServiceImpl이기에 AOP 적용 대상이다.

#### 2. CGLIB 프록시
- hello.aop.member.MemberService
  - this: 프록시 객체를 보고 판단. this는 부모 타입을 허용하기에 AOP 적용됨
  - target: target 객체를 보고 판단. target도 부모 타입을 허용하기에 AOP 적용됨
- hello.aop.member.MemberServiceImpl
  - this: proxy 객체를 보고 판단. GCLIB으로 만들어진 proxy는 구체 클래스를 상속받아 만들어지기에 AOP가 적용된다.
  - target: target 객체를 보고 판단. target 객체는 언제나 MemberServiceImpl이기에 AOP 적용 대상이다.


`즉, 프록시를 대상으로 하는 this 의 경우 구체 클래스를 지정하면 프록시 생성 전략에 따라서 다른 결과가 나올 수 있다는 점을 알아두자.`