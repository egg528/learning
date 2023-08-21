---
title: 04. 유스케이스 구현하기
sidebar_position: 4
---
## 유스케이스 구현하기

### 1. 도메인 모델 구현하기

- 예시에서는 입/출금이 가능한 Account 클래스를 만든다.
- Account클래스는 식별자/잔액/활동 필드를 가지고 출금/입금/이체 등의 메서드를 가진다.
- 추가로 출금/입금/이체가 가능한지를 확인하는 비즈니스 검증 로직도 Account 클래스 내에 존재한다.
- DDD의 도메인 모델 개념



### 2. 유스케이스 둘러보기

- 일반적인 유스케이스는 아래와 같은 절차를 거친다
    1. 입력을 받는다.
    2. 비즈니스 규칙을 검증한다.
        - 도메인 엔티티와 함께 검증을 진행한다.
    3. 모델 상태를 조작한다.
    4. 출력을 반환한다.
- 위 절차를 보면 `입력값 검증`에 대한 언급이 없다.
    - 저자는 유스 케이스는 비즈니스 규칙 검증에 집중해야 한다는 입장.
    - `그렇다면 입력값 검증 어디서 어떻게 하기를 원할까? `



### 3. 비즈니스 규칙 검증

- `비즈니스 규칙 검증의 특징은 도메인 모델의 현재 상태에 접근해야 한다는 것이다.`
- 유스 케이스는 비즈니스 규칙 검증이 필요함
- 도메인 엔티티와 함께 규칙 검증을 시행함
    - 만약 도메인 엔티티에서 규칙 검증 로직을 넣기 애매하다면 UseCase 구현체(Service)에서 도메인을 가져오기 이전에
    - 도메인을 가져와야 한다면 도메인 엔티티 내에 구현하는 것이 좋다.




### 4. 입력 유효성 검증

- 필자는 application 계층에서 유효성 검증이 필요하다고 말한다.

    - 이유 1: 하나 이상의 어댑터에서 UseCase가 호출될 건데.. 모든 어댑터에 검증을 구현하기는 힘들 것이다.
    - 이유2: 어댑터에서 제대로 검증했다고 믿을 수 있을까?

- UseCase는 비즈니스 규칙 검증에 집중해야 한다. 하지만 application 계층에서 입력 유효성 검증이 필요하다

- `입력 모델에서 입력 유효성을 검증하자!`

    - ``` java
    // 입력 모델
    
    import com.example.entity.Account.AccountId;
    import com.example.entity.Money;
    import lombok.Getter;
    import org.example.common.SelfValidating;
    
    import javax.validation.constraints.NotNull;
    
    @Getter
    public class SendMoneyCommand extends SelfValidating<SendMoneyCommand> {
    
        @NotNull
        private final AccountId sourceAccountId;
    
        @NotNull
        private final AccountId targetAccountId;
    
        @NotNull
        private final Money money;
    
        public SendMoneyCommand(AccountId sourceAccountId, AccountId targetAccountId, Money money) {
            this.sourceAccountId = sourceAccountId;
            this.targetAccountId = targetAccountId;
            this.money = money;
          	this.validateSelf()
        }
    }
    
    // 검증 객체
    import java.util.Set;
    import javax.validation.*;
    
    public abstract class SelfValidating<T> {
    
        private Validator validator;
    
        public SelfValidating() {
            ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
            validator = factory.getValidator();
        }
    
        /** Evaluates all Bean Validations on the attributes of this instance. */
        protected void validateSelf() {
            Set<ConstraintViolation<T>> violations = validator.validate((T) this);
            if (!violations.isEmpty()) {
                throw new ConstraintViolationException(violations);
            }
        }
    }
    ```

        - Bean Validation API를 활용하면 유효성 검증을 보다 쉽게 할 수 있다.
        - 필드에 표시한 어노테이션 기반으로 검증이 자동으로 이루어진다.
        - 빌더 패턴보다는 생상자가 효과적 (컴파일 에러를 사용할 수 있기 때문이다.)





### 5. 풍부한 도메인 모델 vs 빈약한 도메인 모델

- UseCase 클래스의 크기와 반비례하게 된다.



### 6. UseCase마다 다른 출력 모델

- UseCase마다 구체적인 출력 모델을 가지면 좋다.
    - 출력 모델을 공유하면 UseCase들은 강하게 결합됨
    - 원치 않는 부수효과를 줄일 수 있다.
- 고려할 것
    - 호출자가 필요로 하는 정보는 무엇일까?

