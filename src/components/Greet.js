import React from "react";

// function Greet(){
//     return <h1>hello jack</h1>
// }
const Greet = props => {
    return (
        <div>
            <h1>hello man {props.name}</h1>
            {props.heroName}
             {props.children}
        </div>
    )
}


export default Greet;