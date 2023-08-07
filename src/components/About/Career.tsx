import React from "react";

export default function Career(): JSX.Element {

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
        <div className="career" id="career">
            <div className="text-wrap">
                <h2 style={styles.bold}>Career<span className="logo-end">.</span></h2>


            </div>
        </div>
    );
}