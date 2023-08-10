import React from 'react';

export default function Certificate(): JSX.Element {
    return (
        <section id={'certificate'}>
            <h2>Certificate<span className="period-mark">.</span></h2>
            <div className="other">
                <h3>자격증 1<span className="period-mark">.</span></h3>
                <span className="role">Organizer</span>
                <span className="time"><time dateTime="2018-08">2018. 08.</time> - 현재</span>
                <p>
                    자격증 1
                </p>
            </div>

        </section>
    );
}
