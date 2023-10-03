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
                            배송 추적창 FE, BE 분리 작업<span className="period-mark">.</span>
                        </h3>
                        <span className="time">
                            <time dateTime="">현재 진행중</time>
                        </span>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            기존에 하나의 서비스로 동작하던 배송 추적창 FE, BE 서비스 분리
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>기존 코드를 분석하여 혼재되어 있던 FE,BE 로직을 분리</li>
                            <li>FE코드 Component화 및 Next.js를 활용하여 FE 서비스 구성</li>
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
                            판매자 설정 정보만으로 배송 시작일을 계산하던 API에 (Batch로 미리 계산된)실제 판매자 발송 데이터를 고려하도록 개선
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>배송 시작일 API에 오늘 출발 태그 데이터, 실제 발송 데이터, admin 예외 처리 고려하도록 수정</li>
                            <li>신규로 추가한 admin 예외 처리뿐 아니라 기존 로직에서도 변동성이 적은 데이터 Redis 적용</li>
                            <li>VIP 노출 API이기에 배포 이전 nGrinder를 활용한 부하 테스트 경험 (응답 시간을 중점적으로 확인)</li>
                            <li>일 호출 수 약 2400만 건 / 99.99% 0.7 sec 내에 응답</li>
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
                            <li>각 Scheduler ThreadPool 분리, 기존 For문 병렬 처리(CompletableFeature 활용)</li>
                            <li>CPU 사용률 60%가 넘지 않는 수준에서 Thread 최적화</li>
                            <li>알림톡 대상 설정 Secheduler 26 sec - 6.9 sec (2000건 기준, Thread 4개 활용)</li>
                            <li>알림톡 발송 Secheduler 150 sec - 27 sec (2000건 기준, Thread 8개 활용)</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>Java 8, Spring Boot</p>
                    </div>
                    <div className="project">
                        <h3>
                            해외 직구 배송 추적 외부 시스템 연동 작업<span className="period-mark">.</span>
                        </h3>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            해외 직구 주문 건 외부사 배송 추적 시스템 연동
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>해외 직구 건의 경우 배송 추적 시작 시 외부사 API 호출하는 로직 추가</li>
                            <li>외부 요청 로그 테이블 생성 및 로그 데이터 생성 및 실패 건 재처리 방안 수립</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>.NET Framework, C#</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
