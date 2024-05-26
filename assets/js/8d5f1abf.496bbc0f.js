"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[748],{4891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var o=t(4848),a=t(8453);const r={title:"Spring Batch \ud30c\ud5e4\uce58\uae30 - JobLauncher",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Observer Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",authors:["woosuk"],tags:["design pattern","observer pattern"],date:new Date("2024-05-23T00:00:00.000Z")},i=void 0,c={permalink:"/spring-batch-job-launcher",source:"@site/blog/spring-batch-job-launcher.md",title:"Spring Batch \ud30c\ud5e4\uce58\uae30 - JobLauncher",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Observer Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",date:"2024-05-23T00:00:00.000Z",tags:[{label:"design pattern",permalink:"/tags/design-pattern"},{label:"observer pattern",permalink:"/tags/observer-pattern"}],readingTime:6.735,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"Spring Batch \ud30c\ud5e4\uce58\uae30 - JobLauncher",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Observer Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",authors:["woosuk"],tags:["design pattern","observer pattern"],date:"2024-05-23T00:00:00.000Z"},unlisted:!1,prevItem:{title:"\ub514\uc790\uc778 \ud328\ud134 - Factory Pattern",permalink:"/factory-pattern"},nextItem:{title:"\ub514\uc790\uc778 \ud328\ud134 - Decorator Pattern",permalink:"/decorator-pattern"}},s={authorsImageUrls:[void 0]},u=[{value:"JobLauncher",id:"joblauncher",level:2},{value:"Spring Boot AutoConfiguration",id:"spring-boot-autoconfiguration",level:3},{value:"\uadf8\ub798\uc11c TaskExecutorJobLauncher\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uac00?",id:"\uadf8\ub798\uc11c-taskexecutorjoblauncher\ub294-\uc5b4\ub5bb\uac8c-\ub3d9\uc791\ud558\ub294\uac00",level:2},{value:"\uacb0\uad6d\uc740 SimpleJobLauncher",id:"\uacb0\uad6d\uc740-simplejoblauncher",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}];function l(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["\u2705"," ChatGPT \uc694\uc57d"]}),(0,o.jsx)(n.br,{}),"\n","\uc774 \uae00\uc740 Spring Batch\uc758 JobLauncher\uc640 \uadf8 \uad6c\ud604\uccb4\ub4e4\uc5d0 \ub300\ud574 \uc124\uba85\ud569\ub2c8\ub2e4. JobLauncher\ub294 Job\uacfc JobParameters\ub97c \ubc1b\uc544 Job\uc744 \uc2e4\ud589\ud558\ub294 \uc5ed\ud560\uc744 \ud558\uba70, \uc774\ub97c \ud1b5\ud574 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \uad6c\uccb4\uc801\uc778 \uad6c\ud604\uccb4\uc5d0 \uc758\uc874\ud558\uc9c0 \uc54a\uace0 Batch \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, Spring Boot\uc758 AutoConfiguration\uc744 \ud1b5\ud574 TaskExecutorJobLauncher\uac00 \uc790\ub3d9\uc73c\ub85c Bean\uc73c\ub85c \ub4f1\ub85d\ub418\ub294 \uacfc\uc815\uc744 \uc0b4\ud3b4\ubd05\ub2c8\ub2e4. JobLauncher\uc758 \ub3d9\uc791 \uc6d0\ub9ac\uc640 SimpleJobLauncher\uc758 \uad6c\ud604 \uc138\ubd80\uc0ac\ud56d\uc744 \ud1b5\ud574 Batch\uc758 \ud575\uc2ec\uc801\uc778 \ub3d9\uc791 \ubc29\uc2dd\uc744 \uc774\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"joblauncher",children:"JobLauncher"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"batch-stereotypes.jpg",src:t(2491).A+"",width:"2252",height:"868"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"@FunctionalInterface  \npublic interface JobLauncher {  \n    JobExecution run(Job job, JobParameters jobParameters) throws JobExecutionAlreadyRunningException, JobRestartException, JobInstanceAlreadyCompleteException, JobParametersInvalidException;  \n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"JobLauncher\ub294 Functional Interface\ub85c Job\uacfc JobParameters\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \ubc1b\uc544 Job\uc744 \uc2e4\ud589\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4.\nspring-batch-core\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 JobLauncher \uad6c\ud604\uccb4\ub294 SimpleJobLauncher\uc640  TaskExecutorJobLauncher\uac00 \uc788\ub294\ub370 5.1.1 version \uae30\uc900 SimpleJobLauncher\ub294 Deprecated\ub41c \uc0c1\ud0dc\uc774\ub2e4."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"jobLauncher.jpg",src:t(8414).A+"",width:"2312",height:"218"}),"\n\ub2f9\uc5f0\ud788 \uba85\uc2dc\uc801\uc778 \uc124\uc815 \uc5c6\uc774 Batch Application\uc744 \uc2e4\ud589\ud558\uba74 TaskExecutorJobLauncher\uac00 Bean\uc73c\ub85c \ub4f1\ub85d\ub41c\ub2e4.\n\uadf8\ub7f0\ub370 TaskExecutorJobLauncher\ub294 \uc5b4\ub5bb\uac8c Bean\uc73c\ub85c \ub4f1\ub85d\ub41c \uac78\uae4c."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h3,{id:"spring-boot-autoconfiguration",children:"Spring Boot AutoConfiguration"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{alt:"auto-configuration.jpg",src:t(2479).A+"",width:"2352",height:"522"}),"\nSpring Boot\uc5d0\ub294 AutoConfiguration\uc774\ub77c\ub294 \uae30\ub2a5\uc774 \uc788\ub2e4. \ub9d0 \uadf8\ub300\ub85c \uc124\uc815\uc744 \uc790\ub3d9\uc73c\ub85c \uad6c\uc131\ud574\uc8fc\ub294 \uac83\uc774\ub2e4.\n\uadf8 \uc911 BatchAutoConfiguration\uc774 \uc874\uc7ac\ud558\ub294\ub370 Batch\ub97c \uc704\ud55c \uc124\uc815\ub4e4\uc744 \uc790\ub3d9\uc73c\ub85c \uad6c\uc131\ud574\uc900\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"package org.springframework.boot.autoconfigure.batch;\n\n@AutoConfiguration(  \n    after = {HibernateJpaAutoConfiguration.class, TransactionAutoConfiguration.class}  \n)  \n@ConditionalOnClass({JobLauncher.class, DataSource.class, DatabasePopulator.class})  \n@ConditionalOnBean({DataSource.class, PlatformTransactionManager.class})  \n@ConditionalOnMissingBean(  \n    value = {DefaultBatchConfiguration.class},  \n    annotation = {EnableBatchProcessing.class}  \n)  \n@EnableConfigurationProperties({BatchProperties.class})  \n@Import({DatabaseInitializationDependencyConfigurer.class})  \npublic class BatchAutoConfiguration {\n\n\n\t@Configuration(  \n\t    proxyBeanMethods = false  \n\t)  \n\tstatic class SpringBootBatchConfiguration extends DefaultBatchConfiguration {\n\t\t...\n\t}\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\ub2f9\uc5f0\ud788 \ubaa8\ub4e0 Spring Application\uc5d0\uc11c \uc801\uc6a9\ub418\uba74 \uc548 \ub418\uae30 \ub54c\ubb38\uc5d0 BatchAutoConfiguration\uac00 Bean\uc73c\ub85c \ub4f1\ub85d\ub418\uae30 \uc704\ud55c \uc870\uac74\ub4e4\uc774 Annotation\uc73c\ub85c \uc794\ub729 \uad6c\uc131\ub418\uc5b4 \uc788\ub2e4.\nBatchAutoConfiguration\uc5d0\ub294 \uc5ec\ub7ec Bean\uacfc Configuration class\ub4e4\uc774 \uc788\uc9c0\ub9cc JobLauncher\ub294 SpringBootBatchConfiguration\uc5d0 \uc758\ud574 \ub4f1\ub85d\ub41c\ub2e4."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'@Configuration(  \n    proxyBeanMethods = false  \n)  \n@Import({ScopeConfiguration.class})  \npublic class DefaultBatchConfiguration implements ApplicationContextAware {\n\n\t@Bean  \n\tpublic JobLauncher jobLauncher() throws BatchConfigurationException {  \n\t    TaskExecutorJobLauncher taskExecutorJobLauncher = new TaskExecutorJobLauncher();  \n\t    taskExecutorJobLauncher.setJobRepository(this.jobRepository());  \n\t    taskExecutorJobLauncher.setTaskExecutor(this.getTaskExecutor());  \n\t  \n\t    try {  \n\t        taskExecutorJobLauncher.afterPropertiesSet();  \n\t        return taskExecutorJobLauncher;  \n\t    } catch (Exception var3) {  \n\t        throw new BatchConfigurationException("Unable to configure the default job launcher", var3);  \n\t    }}\n\n\n\tprotected TaskExecutor getTaskExecutor() { return new SyncTaskExecutor(); }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"SpringBootBatchConfiguration\uac00 \uc0c1\uc18d\ud55c DefaultBatchConfiguration \ub0b4\ubd80\ub97c \ubcf4\uba74 TaskExecutorJobLauncher\ub85c \uad6c\ud604\ub41c JobLauncher\ub97c Bean\uc73c\ub85c \ub4f1\ub85d\ud55c \uac78 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\nTaskExecutorJobLauncher\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 JobRepository\uc640 TaskExecutor\uac00 \ud544\uc694\ud55c\ub370 JobRepository\ub294 \ub2e4\uc74c\uc5d0 \ub2e4\ub8f0 \uae30\ud68c\uac00 \uc788\uc744 \uac83 \uac19\uc544 \ub118\uc5b4\uac00\uc790.\nTaskExecutor\ub85c\ub294 SyncTaskExecutor()\ub97c \uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294\ub370 \ubcc4\ub3c4\uc758 Thread Pool\uc744 \uc0ac\uc6a9\ud558\ub294 \uac8c \uc544\ub2c8\ub77c execute(Runnable task) \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud55c Thread\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud55c\ub2e4. \uc774\ub984 \uadf8\ub300\ub85c \ub3d9\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \uac83\uc774\ub2e4."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"@Bean  \npublic ApplicationRunner runner() {  \n\treturn args -> {    \n\t\tTaskExecutor executor = new SyncTaskExecutor();  \n\t\t\n\t\texecutor.execute(() -> {  \n\t\t\ttry {  \n\t\t\t\tThread.sleep(10000);  \n\t\t\t} catch (InterruptedException e) {  \n\t\t\t\tthrow new RuntimeException(e);  \n\t\t\t}            \n\t\t\tSystem.out.println(Thread.currentThread());  \n\t\t\tSystem.out.println(1);  \n\t\t});  \n\t\t\n\t\texecutor.execute(() -> {  \n\t\t\tSystem.out.println(Thread.currentThread());  \n\t\t});\n\t};\n}\n\n// Thread[#1,main,5,main]\n// 1\n// Thread[#1,main,5,main]\n"})}),"\n",(0,o.jsx)(n.p,{children:"ApplicationRunner\ub97c \ud65c\uc6a9\ud574 \uac04\ub2e8\ud788 SyncTaskExecutor\uc758 \ub3d9\uc791\uc744 \ud655\uc778\ud574\ubd10\ub3c4 2\uac1c\uc758 Runnable\uc774 \ub3d9\uc77c\ud55c Thread(main)\ub85c \ud638\ucd9c\ub41c \uac78 \ud655\uc778\ud560 \uc218 \uc788\uace0 \ubaa8\ub450 2\uac1c\uc758 Task\uac00 \uc21c\uc11c\ub300\ub85c \ub3d9\uc791\ud55c \uac83\uc744 \ubcfc \uc218 \uc788\ub2e4."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"\uadf8\ub798\uc11c-taskexecutorjoblauncher\ub294-\uc5b4\ub5bb\uac8c-\ub3d9\uc791\ud558\ub294\uac00",children:"\uadf8\ub798\uc11c TaskExecutorJobLauncher\ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uac00?"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"public class TaskExecutorJobLauncher extends SimpleJobLauncher {  \n    public TaskExecutorJobLauncher() {  \n    }  \n    public JobExecution run(Job job, JobParameters jobParameters) throws JobExecutionAlreadyRunningException, JobRestartException, JobInstanceAlreadyCompleteException, JobParametersInvalidException {  \n        return super.run(job, jobParameters);  \n    }  \n    \n    public void setJobRepository(JobRepository jobRepository) {  \n        super.setJobRepository(jobRepository);  \n    } \n     \n    public void setTaskExecutor(TaskExecutor taskExecutor) {  \n        super.setTaskExecutor(taskExecutor);  \n    }  \n\n    public void afterPropertiesSet() throws Exception {  \n        super.afterPropertiesSet();  \n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\uad6c\ud604\uccb4\ub97c \ud655\uc778\ud574\ubcf4\ub2c8 SimpleJobLauncher\ub97c \uc0c1\uc18d\ud558\uace0 \uc788\ub2e4...? SimpleJobLauncher\ub294 Deprecated \uc0c1\ud0dc\uc778\ub370.. \uc544\ub9c8\ub3c4 Migration\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ud558\uae30 \uc704\ud568\uc774\ub77c \uc0dd\uac01\ud55c\ub2e4.\nSimpleJobLauncher \uae30\ubc18\uc73c\ub85c JobLauncher\ub97c \uc774\uc6a9\ud558\ub294 \uc0ac\ub78c\ub4e4\ub3c4 \uc9c0\uc6d0\uc744 \ud574\uc57c\ud558\ub2c8..."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"\uacb0\uad6d\uc740-simplejoblauncher",children:"\uacb0\uad6d\uc740 SimpleJobLauncher"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public class SimpleJobLauncher implements JobLauncher, InitializingBean {\n    public JobExecution run(final Job job, final JobParameters jobParameters) throws JobExecutionAlreadyRunningException, JobRestartException, JobInstanceAlreadyCompleteException, JobParametersInvalidException {\n        Assert.notNull(job, "The Job must not be null.");\n        Assert.notNull(jobParameters, "The JobParameters must not be null.");\n        if (this.jobLaunchCount != null) {\n            this.jobLaunchCount.increment();\n        }\n\n        JobExecution lastExecution = this.jobRepository.getLastJobExecution(job.getName(), jobParameters);\n        if (lastExecution != null) {\n            if (!job.isRestartable()) {\n                throw new JobRestartException("JobInstance already exists and is not restartable");\n            }\n\n            Iterator var5 = lastExecution.getStepExecutions().iterator();\n\n            while(var5.hasNext()) {\n                StepExecution execution = (StepExecution)var5.next();\n                BatchStatus status = execution.getStatus();\n                if (status.isRunning()) {\n                    throw new JobExecutionAlreadyRunningException("A job execution for this job is already running: " + lastExecution);\n                }\n\n                if (status == BatchStatus.UNKNOWN) {\n                    throw new JobRestartException("Cannot restart step [" + execution.getStepName() + "] from UNKNOWN status. The last execution ended with a failure that could not be rolled back, so it may be dangerous to proceed. Manual intervention is probably necessary.");\n                }\n            }\n        }\n\n        job.getJobParametersValidator().validate(jobParameters);\n        final JobExecution jobExecution = this.jobRepository.createJobExecution(job.getName(), jobParameters);\n\n        try {\n            this.taskExecutor.execute(new Runnable() {\n                public void run() {\n                    try {\n                        if (SimpleJobLauncher.logger.isInfoEnabled()) {\n                            SimpleJobLauncher.logger.info("Job: [" + job + "] launched with the following parameters: [" + jobParameters + "]");\n                        }\n\n                        job.execute(jobExecution);\n                        if (SimpleJobLauncher.logger.isInfoEnabled()) {\n                            Duration jobExecutionDuration = BatchMetrics.calculateDuration(jobExecution.getStartTime(), jobExecution.getEndTime());\n                            Job var10001 = job;\n                            SimpleJobLauncher.logger.info("Job: [" + var10001 + "] completed with the following parameters: [" + jobParameters + "] and the following status: [" + jobExecution.getStatus() + "]" + (jobExecutionDuration == null ? "" : " in " + BatchMetrics.formatDuration(jobExecutionDuration)));\n                        }\n                    } catch (Throwable var2) {\n                        if (SimpleJobLauncher.logger.isInfoEnabled()) {\n                            SimpleJobLauncher.logger.info("Job: [" + job + "] failed unexpectedly and fatally with the following parameters: [" + jobParameters + "]", var2);\n                        }\n\n                        this.rethrow(var2);\n                    }\n\n                }\n\n                private void rethrow(Throwable t) {\n                    if (t instanceof RuntimeException) {\n                        throw (RuntimeException)t;\n                    } else if (t instanceof Error) {\n                        throw (Error)t;\n                    } else {\n                        throw new IllegalStateException(t);\n                    }\n                }\n            });\n        } catch (TaskRejectedException var8) {\n            jobExecution.upgradeStatus(BatchStatus.FAILED);\n            if (jobExecution.getExitStatus().equals(ExitStatus.UNKNOWN)) {\n                jobExecution.setExitStatus(ExitStatus.FAILED.addExitDescription(var8));\n            }\n\n            this.jobRepository.update(jobExecution);\n        }\n\n        return jobExecution;\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"\ub85c\uc9c1\uc740 \uadf8\ub9ac \ubcf5\uc7a1\ud558\uc9c0 \uc54a\ub2e4. MetaData Table\uc5d0\uc11c \ucd5c\uadfc JobExecution \ub370\uc774\ud130\ub97c \uac00\uc838\uc640 \ud574\ub2f9 Job\uc774 \uc7ac\uc2dc\uc791 \uac00\ub2a5\ud55c\uc9c0\ub97c \uccb4\ud06c\ud55c\ub2e4.\n\uc774\ud6c4 JobParameter\ub97c \uac80\uc99d\ud55c \ud6c4 JobExecution\uc744 \uc0c8\ub85c \uc0dd\uc131\ud558\uace0 TaskExecutor\ub85c Job\uc744 \uc2e4\ud589\ud55c\ub2e4."}),"\n",(0,o.jsx)(n.h2,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"JobLauncher\uc640 \uad6c\ud604\uccb4\uc5d0 \ub300\ud574 \uc54c\uc544\ubd24\ub2e4. Batch\uac00 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uc9c0 \uc870\uae08\uc740 \uc774\ud574\uac00 \ub41c\ub2e4.\n\ub610 MetaData\ub97c \uadc0\ucc2e\uc740 \uc124\uc815 \uc815\ubcf4\ucbe4\uc73c\ub85c \uc608\uce21\ud588\ub294\ub370 MetaData\uc640 JobRepository\ub294 Batch\uc758 \ud575\uc2ec\uc801\uc740 \ubd80\ubd84\uc778 \uac83 \uac19\ub2e4.\n\ub098\uba38\uc9c0 \uc694\uc18c\ub4e4\ub3c4 \uc5bc\ub978 \uc54c\uc544\ubd10\uc57c\uaca0\ub2e4."})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},2479:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/auto-configuration-2385281e57c3218f75706b9358cd9421.jpg"},2491:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/batch-stereotypes-9499e8963f71055fe2f336945260b851.jpg"},8414:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/jobLauncher-2259e995148a3e05fcfaf41229f4c10f.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const a={},r=o.createContext(a);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);