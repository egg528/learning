import React from "react";

export default function Introduce(): JSX.Element {

    const styles = {
        bold: {
            fontWeight: "bold",
        } as React.CSSProperties,
        boldAndSize: {
            fontWeight: "bold",
            fontSize: "1.7em"
        } as React.CSSProperties,
    }

    return (
        <div className="about" id="about">
            <div className="text-wrap">
                <br/>
                <h1>Introduce<span className="logo-end">.</span></h1>
                <h2 style={styles.boldAndSize}>Strong</h2>
                <p>
                    Python / Django / TailwindCSS / MySQL / JAVA
                </p>
                <h2 style={styles.boldAndSize}>Knowledgeable</h2>
                <p>
                    Spring / jQuery Ajax / Chart.js / HighChart / AWS RDS / AWS EC2 / AWS Elastic Beanstalk /
                    HTML5 / CSS / JS(ES5+) / TensorFlow / Oracle / Pandas / Numpy / Pytorch
                </p>
            </div>
        </div>
    );
}