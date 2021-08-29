import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
    return (
        <React.Fragment>
            <div onClick = {() => props.whenKombuchaClicked(props.id)}>
                <h3>{props.name}</h3>
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