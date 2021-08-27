import React from "react";

function Kombucha(props){
    return (
        <React.Fragment>
            <h3>{props.name} - {props.brand}</h3>
            <p>{props.price} - {props.flavor}</p>
        </React.Fragment>
    );
}

export default Kombucha;