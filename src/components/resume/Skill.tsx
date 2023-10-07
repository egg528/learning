import React from 'react';

function Skill(): JSX.Element {
    return (
        <section id={'skill'}>
            <h2>Skills<span className="period-mark">.</span></h2>
            <div className="other">
                <h3>Language<span className="period-mark">.</span></h3>
                <ul>
                    <li>Java, C#, TypeScript</li>
                </ul>
            </div>
            <div className="other">
                <h3>Backend<span className="period-mark">.</span></h3>
                <ul>
                    <li>Spring Boot, Spring MVC, .NET</li>
                    <li>JPA</li>
                    <li>Gradle, Maven</li>
                </ul>
            </div>
            <div className="other">
                <h3>Frontend<span className="period-mark">.</span></h3>
                <ul>
                    <li>Next.js</li>
                    <li>React</li>
                </ul>
            </div>
        </section>

    );
}

export default Skill