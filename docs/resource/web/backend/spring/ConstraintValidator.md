---
title: Custom Validation
tag: [backend, spring, custom validation]
---
## 글 링크
- [Custom Validation](https://www.baeldung.com/spring-mvc-custom-validator

## 내용 정리
- 일반적으로 @NotNull과 같이 미리 정의된 어노테이션 기반으로 INPUT값을 검증한다.
- 하지만 더 구체적인 검증을 원할 때 Custom Validation을 사용할 수 있다.


### Custom 어노테이션
```java
@Documented
@Constraint(validatedBy = ContactNumberValidator.class)
@Target( { ElementType.METHOD, ElementType.FIELD })
@Retention(RetentionPolicy.RUNTIME)
public @interface ContactNumberConstraint {
    String message() default "Invalid phone number";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
```
- message는 오류 메시지
- 다른 코드는 표준 양식에 맞추기 위한 코드들이다.

### Validator
```java
public class ContactNumberValidator implements 
  ConstraintValidator<ContactNumberConstraint, String> {
  
    @Override
    public void initialize(ContactNumberConstraint contactNumber) {
    }

    @Override
    public boolean isValid(String contactField,
      ConstraintValidatorContext cxt) {
        return contactField != null && contactField.matches("[0-9]+")
          && (contactField.length() > 8) && (contactField.length() < 14);
    }

}
```
- 어노테이션에서 정의했듯 검증에 사용할 검증 객체가 필요함
- ConstraintValidator를 implements하고 isValid()가 필수이다.
- ConstraintValidator에 위에서 구현한 어노테이션과 검증할 객체 타입을 정의해줘야 한다.
  - 범용적 사용을 원하면 Object를 넣어도 된다
- 즉, 특정 객체를 검증하는 로직을 포함하게 된다

### 사용부
```java
    @PostMapping("/addValidatePhone")
    public String submitForm(@Valid ValidatedPhone validatedPhone,
      BindingResult result, Model m) {
        if(result.hasErrors()) {
            return "phoneHome";
        }
        m.addAttribute("message", "Successfully saved phone: "
          + validatedPhone.toString());
        return "phoneHome";
    }  
```
- ValidatedPhone 내부에 String 필드가 있고 @ContactNumberConstraint가 적용되어 있다고 가정
- @Valid 어노테이션을 사용하면 검증이 적용됨