import React from 'react';

export default function WorkExperience(): JSX.Element {
    return (
        <section id={'work-experience'}>
            <h2>Work Experience<span className="period-mark">.</span></h2>

            <div className="row">
                <div className="row-left">
                    <h3>지마켓<span className="period-mark">.</span>
                        <h6>(구 Ebay Korea)</h6>
                    </h3>
                    <span className="role">Backend Developer</span>
                    <span> <time dateTime="2022-01">2022. 01</time> - 현재 </span>
                </div>
                <div className="row-right">
                    <div className="project">
                        <h3>
                            배송 추적창 Migration<span className="period-mark">.</span>
                        </h3>
                        <span className="time">
                            <time dateTime="">현재 진행중</time>
                        </span>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            .NET, C#, Razor로 한 곳에 작성되어 있는 배송 추적창을 Front, Back 분리
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>프론트 영역 분리하여 next.js, react로 전환</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>TypeScript, Next.js, React</p>
                    </div>
                    <div className="project">
                        <h3>
                            배송 예고제 개선<span className="period-mark">.</span>
                        </h3>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            판매자 설정 배송 출발 정보와 실제 배송 출발 데이터 등을 고려하는 상품 배송 출발 정보 API 개발
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>일 호출 수 약 2400만 건 / 99.99% 0.7 sec 내에 응답 가능한 API 개발 (SP 7회, API 요청 1회)</li>
                            <li>Redis Cluster를 활용하여 변동이 적은 데이터는 최대한 Cache 적용</li>
                            <li>배포 이전 nGrinder를 활용한 부하 테스트 경험 (응답 시간을 중점적으로 확인)</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>.NET Framework, C#</p>
                    </div>
                    <div className="project">
                        <h3>
                            배송 상태 알림톡 성능 개선<span className="period-mark">.</span>
                        </h3>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            레거시 분석하여 배송 알림톡 Scheduler 병목 현상을 발견하고 성능 개선<br/>
                            원인1: 2개의 Scheduler가 1개 ThreadPool에서 1개의 Thread로  동작하여 서로에게 영향을 주는 상황<br/>
                            원인2: Read 이후 과정 단일 Thread로 For문  동작
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>각 Scheduler ThreadPool 분리</li>
                            <li>기존 For문 병렬 처리(CompletableFeature 활용)</li>
                            <li>Scheduler A 26 sec -> 6.9 sec (2000건 기준, Thread 4개 활용)</li>
                            <li>Scheduler B 150 sec -> 27 sec (2000건 기준, Thread 8개 활용)</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>Java 8, Spring Boot</p>
                    </div>
                    <div className="project">
                        <h3>
                            해외 직구 배송 추적 외부 연동<span className="period-mark">.</span>
                        </h3>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            해외 직구 배송 추적을 위한 외부사 연동
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>해외 직구 건의 경우 배송 추적 시작 시 외부사 API 호출하는 로직 추가</li>
                            <li>외부 요청 로그 테이블 생성 및 로그 데이터 생성</li>
                            <li>실패 건 재처리 방안 수립</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>.NET Framework, C#</p>
                    </div>
                    <div className="project">
                        <h3>
                            좌석 예약 시스템<span className="period-mark">.</span>
                        </h3>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            사내 좌석 예약 시스템 API 개발
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>예약 가능 좌석 조회 API 개발</li>
                            <li>Memory Cache 적용 (서버 1대)</li>
                            <li>서버 모니터링 환경 구성 (Spring Actuator - Prometheus - Grafana)</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>Java 11, Spring Boot, Spring MVC, Spring Actuator, Prometheus, Grafana</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
