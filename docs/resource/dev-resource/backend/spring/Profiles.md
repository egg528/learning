---
title: Profiles
tag: [backend, spring, profiles]
---
## 글 링크
- [](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#features.profiles)
## 내용 정리
### Profiles란?
- application configuration을 분리하고 특정 환경에서만 적용할 수 있도록 만드는 기술

### 사용 방식
- `@Component`, `@Configuration`, `@ConfigurationProperties`에는 모두 `@Profile` 적용하여 제한을 걸 수 있음
- spring.profiles.active 값을 통해서 어떤 profile을 사용할 것인지 설정 가능
- --spring.profiles.active=dev,hsqldb 방식으로 command line에서 설정도 가능
- 우선 순위는 command line > spring.profiles.active 설정값
- spring.profiles.active값이 없다면 default가 자동으로 설정됨
    - spring.profiles.default=none이 기본이고 원하는 profiles를 적용해두면 됨
- `spring.profiles.active`, `spring.profiles.default` 값은 `spring.config.activate.on-profile`가 적용되지 않은 곳에서만 설정이 가능하다.
    - on-profile이 특정 profile에 종속적으로 적용하는 값이기 때문


### spring.config.activate.on-profile
- 특정 profile이 활성화되어야지만 활성화가 되도록 설정하는 값
- 예를 들어 spring.config.activate.on-profile = local이라면 spring.profiles.active=local일 때 적용됨


###  Adding Active Profiles
- 때로는 active profile 교체 보다도 active profile을 추가하는 게 필요할 때가 있다.
- spring.profiles.include를 활용해 active profile을 추가할 수 있다.


### Profile Groups
``` 
spring.profiles.group.production[0]=proddb spring.profiles.group.production[1]=prodmq
```
- 특정 profiles가 활성화되어 있을 때만 profile을 활성화하는 방법
- 위와 같이 설정 후 spring.profiles.active=production으로 app을 실행하면 production, proddb, prodmq가 모두 active profiles로 적용된다.


### Profile-specific Configuration Files
- `SpringApplication.setAdditionalProfiles(…​)`를 활용해 로직으로도 active profiles를 설정할 수 있다.
- `ConfigurableEnvironment` interface를 사용해서도 가능한데.. 사용하지는 않을 것 같다.

### Profile-specific Configuration Files
- `.properties`, `.yaml`, `@ConfigurationProperties`로 활성화된 profiles는 모두 파일로 간주되어 load된다.


### 사용 예시
```
# application.yml 파일

# default  
spring:  
	profiles:  
		default: local  
  
---  
# dev  
spring:  
	profiles:  
		group:  
			local: "infra"  
	  
---  
# dev  
spring:  
	profiles:  
		group:  
			dev: "infra"  
  
---  
# prod  
spring:  
	profiles:  
		group:  
			prod: "infra"
```

```
# application-infra.yml 파일

# local  
spring:  
	config:  
		activate:  
			on-profile: local  
  
# local 설정 정보들
  
---  
# dev  
spring:  
	config:  
		activate:  
			on-profile: dev  
  
# dev 설정 정보들
  
---  
# prod  
spring:  
	config:  
		activate:  
			on-profile: prod

# prod 설정 정보들
```
- 사내 대다수의 프로젝트가 멀티 모듈이기 때문에 설정 파일도 모듈마다 가지고 있게 됨
- local, dev, prod를 `spring.profiles.group`을 활용해서 각각 생성
- `spring.profiles.default`로 default profiles 지정
- application-infra.yml 파일에서 `spring.config.activate.on-profile`로 local, dev, prod 설정 분리