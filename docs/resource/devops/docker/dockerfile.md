---
title: 로그 설정하기
tag: [docker, dockerfile]
---
## Dockerfile 명령어 모음
| 명령어        | 역할                                     |
|------------|------------------------------------------|
| FROM       | 기본 이미지                                 |
| RUN        | 쉘 명령어 실행                               |
| CMD        | 컨테이너 기본 실행 명령어(Entrypoint 인자로 사용) |
| EXPOSE     | 오픈되는 포트 정보                           |
| ENV        | 환경변수 설정                               |
| ADD        | 파일 또는 디렉토리 추가                        |
| COPY       | 파일 또는 디렉토리 추가                        |
| ENTRYPOINT | 컨테이너 기본 실행 명령어                       |
| VOLUME     | 외부 마운트 포인트 생성                        |
| USER       | RUN, CMD, ENTRYPOINT를 실행하는 사용자        |
| WORKDIR    | 작업 디렉토리 설정                            |
| ARGS       | 빌드타임 환경변수 설정                         |
| LABEL      | key -value 데이터                           |
| ONBUILD    | 다른 빌드의 베이스로 사용될 때 사용하는 명령어       |


## Dockerfile로 이미지 빌드하기
```text
docker  build -t {네임 스페이스}:{이미지 명}:{이미지 태그} {빌드 컨텍스트}
$ docker build -t name:sample:1 .
```
- -f {Dockerfile} 옵션으로 다른 위치의 Dockerfile 파일 사용 가능
- -t 명령어로 도커 이미지 이름을 지정
- 빌드 컨텍스트에는 현재 디렉터리를 의미하는 . 주로 사용
- 필요한 경우 다른 디렉터리 지정 가능