import React from 'react';

export default function OtherExperience(): JSX.Element {
    return (
        <section id={'other-experience'}>
            <h2>Other Experiences<span className="period-mark">.</span></h2>
            <div className="other">
                <h3>2022 지마켓 해커톤 1위<span className="period-mark">.</span></h3>
                <span className="role">Slack App 구성, 맛집 추천 기능 구현 및 발표 담당</span>
                <span className="time">
                    <time dateTime="2022-12-07">2022. 12. 07.</time> -
                    <time dateTime="2018-12-09">2022. 12. 09.</time>
                </span>
                <ul>
                    <li>자율 좌석제, 주 2일 출근 상황에서 출근 시 식사나 커피를 함께할 임직원을 매칭해주는 Slack App을 개발하여 해커톤 1위</li>
                    <li><a target="_blank"href="https://www.etnews.com/20221227000212">해커톤 1위 기사</a></li>
                </ul>
            </div>
            <div className="other">
                <h3>지마켓 테크 에디터<span className="period-mark">.</span></h3>
                <span className="role">글 기고</span>
                <span className="time">
                    <time dateTime="2022-06">2022. 06.</time> -
                    <time dateTime="2022-09">2022. 09.</time>
                </span>
                <ul>
                    <li>공부했던 내용들을 바탕으로 회사 기술 블로그에 Junior Level 글 기고</li>
                    <li><a target="_blank"href="https://dev.gmarket.com/45">인증/인가는 어디에 어떻게 구현해야 할까?</a></li>
                    <li><a target="_blank"href="https://dev.gmarket.com/36">객체는 어떻게 식별하고 구현해야 할까?</a></li>
                </ul>
            </div>
            <div className="other">
                <h3>소프트웨어학부 졸업 작품 1위<span className="period-mark">.</span></h3>
                <span className="role">
                    1인 프로젝트
                </span>
                <span className="time">
                    <time dateTime="2021-03">2021. 03.</time> -
                    <time dateTime="2021-11">2022. 11.</time>
                </span>
                <ul>
                    <li>기업의 재무 정보를 편리하게 확인할 수 있는 "재무제표 분석 및 시각화 웹 앱"을 개발하여 졸업 작품 1위</li>
                    <li><a target="_blank"href="https://blog.naver.com/rnjsdntjr26/222387156770">졸업 작품 개발 후기</a></li>
                </ul>
            </div>
            <div className="other">
                <h3>한양대 Erica 캠퍼스<span className="period-mark">.</span></h3>
                <span className="role">
                    주: 경영학부 (전공 4.16) / 복: 소프트웨어학부 (전공 4.05)
                </span>
                <span className="time">
                    <time dateTime="2016-03">2016. 03.</time> -
                    <time dateTime="2022-02">2022. 02.</time>
                </span>
                <ul>
                    <li>경영학부, 소프트웨어공학부에서 4년간 공부하며 컴퓨터구조, 자료구조, 컴퓨터네트워크, 웹 프로그래밍 등의 과목을 이수</li>
                    <li>사회공헌 활동 실적과 성적을 바탕으로 우수 학생 인문 100년 장학생으로 선정되어 4학기 전액 장학 혜택</li>
                </ul>
            </div>
        </section>
    );
}
