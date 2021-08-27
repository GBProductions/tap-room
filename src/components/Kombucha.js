import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
    return (
        <React.Fragment>
            <h3>{props.name} - {props.brand}</h3>
            <p>{props.price} - {props.flavor}</p>
        </React.Fragment>
    );
}

Kombucha.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired
};

export default Kombucha;