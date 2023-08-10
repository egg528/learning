import React from 'react';

export default function OtherExperience(): JSX.Element {
    return (
        <section id={'other-experience'}>
            <h2>Other Experiences<span className="period-mark">.</span></h2>
            <div className="other">
                <h3>지마켓 테크 에디터<span className="period-mark">.</span></h3>
                <span className="role">글 기고</span>
                <span className="time"><time dateTime="2018-08">2022. 08.</time> - 현재</span>
                <p>
                    상세 내용
                </p>
            </div>
            <div className="other">
                <h3>2022 지마켓 해커톤 1위<span className="period-mark">.</span></h3>
                <span className="role">Author, Maintainer</span>
                <span className="time"
                ><time dateTime="2016-09">2022. 09.</time> - 현재</span>
                <p>
                    자세한 내용
                </p>
            </div>
            <div className="other">
                <h3>한양대 Erica 캠퍼스<span className="period-mark">.</span></h3>
                <span className="role">
                    주: 경영학부 (4.16) <br/>
                    복: 소프트웨어학부 (4.05)
                </span>
                <span className="time"
                ><time dateTime="2010-03">2016. 03.</time> -
            <time dateTime="2018-02">2022. 02.</time></span>
                <p>
                    컴퓨터소프트웨어공학과에서 4년간 공부하며 컴퓨터구조, 자료구조,
                    컴퓨터네트워크, 웹 프로그래밍 등의 과목을 우수한 성적으로
                    이수하였습니다. 중간에 휴학을 하고 일을 하다가 다소 늦게
                    졸업했습니다.
                </p>
            </div>
        </section>
    );
}
