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
                            .NET, C#, Razor로 작성되어 있는 배송 추적창을 Front, Back 분리 작업
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>프론트 영역 분리하여 next.js, react로 개발</li>
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
                            상품 배송 출발 정보 API 개발
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>일 호출 수 약 2400만 건</li>
                            <li>99.99% 0.7 sec 내에 응답</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>TypeScript, Jest, Rollup</p>
                    </div>
                    <div className="project">
                        <h3>
                            배송 상태 알림톡 성능 개선<span className="period-mark">.</span>
                        </h3>
                        <span className="time">
                            <time dateTime="2020-08">2020. 08</time> - 현재
                        </span>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            상세 내용
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>한 일</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>TypeScript, Jest, Rollup</p>
                    </div>
                    <div className="project">
                        <h3>
                            해외 직구 배송 추적 외부 연동<span className="period-mark">.</span>
                        </h3>
                        <span className="time">
                            <time dateTime="2020-08">2020. 08</time> - 현재
                        </span>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            상세 내용
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>한 일</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>TypeScript, Jest, Rollup</p>
                    </div>
                    <div className="project">
                        <h3>
                            좌석 예약 시스템<span className="period-mark">.</span>
                        </h3>
                        <span className="time">
                            <time dateTime="2020-08">2020</time>
                        </span>

                        <h5>Description<span className="period-mark">.</span></h5>
                        <p>
                            상세 내용
                        </p>

                        <h5>What did I do<span className="period-mark">.</span></h5>

                        <ul>
                            <li>한 일</li>
                        </ul>

                        <h5>Tech Stack<span className="period-mark">.</span></h5>
                        <p>TypeScript, Jest, Rollup</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
