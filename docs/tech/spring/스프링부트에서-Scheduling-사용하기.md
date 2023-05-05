---
title: Scheduler Thread Pool 구성하기
---
## 글 링크
- [스프링부트에서 Scheduling 사용하기](http://jmlim.github.io/spring/2018/11/27/spring-boot-schedule/)
- [Scheduler Thread Pool 구성](https://blog.naver.com/PostView.nhn?blogId=dg110&logNo=221589812687)
## 내용 정리
- SchedulingConfigurer를 implements하고, configureTasks 메서드에ㅓ ThreadPoolTaskScheduler을 등록하면 됨
  - ThreadPoolTaskScheduler의 Default Pool Size는 1
```java
@Configuration
public class SchedulerConfig implements SchedulingConfigurer {
    
    @Value("${scheduler.pool-size})
    private final int POOL_SIZE;

    @Override
    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {
        ThreadPoolTaskScheduler threadPoolTaskScheduler = new ThreadPoolTaskScheduler();

        threadPoolTaskScheduler.setPoolSize(POOL_SIZE);
        threadPoolTaskScheduler.setThreadNamePrefix("PREFIX - ");
        threadPoolTaskScheduler.initialize();

        scheduledTaskRegistrar.setTaskScheduler(threadPoolTaskScheduler);
    }
}
```

- 만약 2개의 스케줄러가 있고 각각의 스케줄러가 Thread를 공유하지 않기를 원한다면?
```java
  @Bean
    public ThreadPoolTaskScheduler schedulerA() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(POOL_SIZE);
        scheduler.setThreadNamePrefix("THREAD:A-");
        scheduler.initialize();

        scheduler.schedule(this::jobA, new CronTrigger(selectCron));

        return scheduler;
    }

    @Bean
    public ThreadPoolTaskScheduler schedulerB() {
        ThreadPoolTaskScheduler scheduler = new ThreadPoolTaskScheduler();
        scheduler.setPoolSize(POOL_SIZE);
        scheduler.setThreadNamePrefix("THREAD:B-"); 
        scheduler.initialize();

        scheduler.schedule(this::jobB, new CronTrigger(sendCrong));

        return scheduler;
    }
```
- ThreadPoolTaskScheduler를 2개 만들고 각각 작업 추가해야 한다