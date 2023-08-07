import React from "react";


export default function Tech(): JSX.Element {

    const styles = {
        bold: {
            fontWeight: "bold",
        } as React.CSSProperties,
        boldAndSize: {
            fontWeight: "bold",
            fontSize: "1.5em"
        } as React.CSSProperties,
    }

    return (
        <div className="Tech" id="Tech">
            <div className="text-wrap">
                <br/>
                <h1>Tech<span className="logo-end">.</span></h1>
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