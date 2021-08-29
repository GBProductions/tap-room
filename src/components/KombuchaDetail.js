import React from "react";
import PropTypes from "prop-types";

function KombuchaDetail(props){

    function handleBuyingKombucha(event) {
        event.preventDefault();
        if (props.kombucha.quantity === 1 || props.kombucha.quantity === 0) {
            return props.onClickingBuy(({name: props.kombucha.name, brand: props.kombucha.brand, price: props.kombucha.price, flavor: props.kombucha.flavor, quantity: 0, id: props.kombucha.id}));
        } else {
            return props.onClickingBuy(({name: props.kombucha.name, brand: props.kombucha.brand, price: props.kombucha.price, flavor: props.kombucha.flavor, quantity: (props.kombucha.quantity - 1), id: props.kombucha.id}));
        }
    }


    const { kombucha } = props;
    return (
        <React.Fragment>
            <h1>{kombucha.name} Details</h1>
            <h3>{kombucha.brand}</h3>
            <p>$ {kombucha.price} a pint.</p>
            <p>{kombucha.flavor}</p>
            <p>{kombucha.quantity} pints left in the keg.</p>
            < hr/>
            <button onClick={ handleBuyingKombucha}>Buy a Pint!</button>
        </React.Fragment>
    );
}


KombuchaDetail.propTypes = {
    kombucha: PropTypes.object,
    onClickingBuy: PropTypes.func
};

export default KombuchaDetail;