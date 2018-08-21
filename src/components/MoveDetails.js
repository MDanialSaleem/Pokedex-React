import React from "react";

export default function(props)
{
    const styles = {
        background: "white",
        height: "100px",
        position: "fixed",
        zIndex: "1",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };

    return (
        <div style={styles}>
            <h1>Move details here</h1>
        </div>
    );
}