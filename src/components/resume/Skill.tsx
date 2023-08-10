import React from 'react';

export default function Skill(): JSX.Element {
    return (
        <section id={'skill'}>
            <h2>Skills<span className="period-mark">.</span></h2>
            <div className="other">
                <h3>Backend<span className="period-mark">.</span></h3>
                <ul>
                    <li>
                        기술1 / 기술2
                    </li>
                </ul>
            </div>
            <div className="other">
                <h3>Frontend<span className="period-mark">.</span></h3>
                <ul>
                    <li>기술1 / 기술2</li>
                </ul>
            </div>
        </section>

    );
}
