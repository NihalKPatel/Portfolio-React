import React from "react";
import Typewriter from "typewriter-effect";
import "../../style.css"

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Engineering",
                    "Software Developer",
                    "Web Developer",
                    "Product Manager",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
