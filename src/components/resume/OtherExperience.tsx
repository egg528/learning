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
                <a target="_blank"href="https://dev.gmarket.com/45">인증/인가는 어디에 어떻게 구현해야 할까?</a>
                <a target="_blank"href="https://dev.gmarket.com/36">객체는 어떻게 식별하고 구현해야 할까?</a>
            </div>
            <div className="other">
                <h3>2022 지마켓 해커톤 1위<span className="period-mark">.</span></h3>
                <span className="role">Slack App 구성, 맛집 추천 기능 구현 및 발표 담당</span>
                <span className="time"
                ><time dateTime="2016-09">2022. 09.</time> - 현재</span>
                <p>
                    자율 좌석제, 주 2일 출근 상황에서 출근 시 식사나 커피를 함께할 임직원을 매칭해주는 Slack App을 개발하여 해커톤 1위를 한 경험이 있습니다.
                </p>
                <a target="_blank"href="https://www.etnews.com/20221227000212">해커톤 1위 기사</a>
            </div>
            <div className="other">
                <h3>소프트웨어학부 졸업 작품 1위<span className="period-mark">.</span></h3>
                <span className="role">
                    1인 프로젝트
                </span>
                <span className="time"
                ><time dateTime="2010-03">2016. 03.</time> -
            <time dateTime="2018-02">2022. 02.</time></span>
                <p>
                    기업의 재무 정보를 보다 편리하게 확인할 수 있는 "재무제표 분석 및 시각화 웹 앱"을 개발하여 2021 한양대 Erica 소프트웨어학부 졸업 전시 1위를 차지하였습니다.
                </p>
                <a target="_blank"href="https://blog.naver.com/rnjsdntjr26/222387156770">졸업 작품 개발 후기</a>
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
                    졸업했습니다. 또한 사회공헌 활동 실적과 성적을 바탕으로
                    우수 학생 인문 100년 장학생으로 선정되어
                    4학기 전액 장학 혜택을 받았습니다.
                </p>
            </div>
        </section>
    );
}
