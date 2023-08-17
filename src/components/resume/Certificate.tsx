import React from 'react';

export default function Certificate(): JSX.Element {
    return (
        <section id={'certificate'}>
            <h2>Certificate<span className="period-mark">.</span></h2>
            <div className="other">
                <h3>정보처리기사<span className="period-mark">.</span></h3>
                <span className="role">한국산업인력공단</span>
                <span className="time">
                    <time dateTime="2021-08-20">2021.08.20.</time> -
                    <time dateTime="">∞</time>
                </span>
            </div>

            <div className="other">
                <h3>TOPCIT 3수준 (소프트웨어 역량검정)<span className="period-mark">.</span></h3>
                <span className="role">정보통신기획평가원</span>
                <span className="time">
                    <time dateTime="2021-05-22">2021.05.22.</time> -
                    <time dateTime="">∞</time>
                </span>
            </div>
            <div className="other">
                <h3>ADSP(데이터분석준전문가)<span className="period-mark">.</span></h3>
                <span className="role">한국데이터산업진흥원</span>
                <span className="time">
                    <time dateTime="2020-09-29">2020.09.29.</time> -
                    <time dateTime="">∞</time>
                </span>
            </div>
        </section>
    );
}
