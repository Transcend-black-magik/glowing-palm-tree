import React from "react";

function Greet({name}){
    return(
        <h1>
            {name ? `Hello, ${name}!` : "Hello, Guest!"}
            <br />
        </h1>
    );
}

export default Greet;