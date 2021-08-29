import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
    return (
        <React.Fragment>
            <div onClick = {() => props.whenKombuchaClicked(props.id)}>
                <h3>{props.name}</h3>
                <h5>{props.brand}</h5>
                <p>{props.price}</p>
                <p>{props.flavor}</p>
                <p>{props.quantity}</p>

                < hr/>
            </div>
        </React.Fragment>
    );
}

Kombucha.propTypes = {
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string,
    whenKombuchaClicked: PropTypes.func
};

export default Kombucha;