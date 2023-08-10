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
                            프로젝트 1<span className="period-mark">.</span>
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
                    <div className="row-right">
                        <div className="project">
                            <h3>
                                프로젝트 2<span className="period-mark">.</span>
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
                    </div>
                </div>
            </div>

        </section>
    );
}
