import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewKombuchaForm(props){

    function handleNewKombuchaFormSubmission(event) {
        event.preventDefault();
        props.onNewKombuchaCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, id: v4()});
    }


    return (
        <React.Fragment>
            <form onSubmit={handleNewKombuchaFormSubmission}>
                <input
                    type="text"
                    name="name"
                    placeholder="Kombucha Name" />
                    <hr />
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand Name" />
                    <hr />
                <input
                    type="text"
                    name="price"
                    placeholder="Price" />
                    <hr />
                <input
                    type="text"
                    name="flavor"
                    placeholder="Flavor" />
                    <hr />
                <button type="submit">Add Kombucha!</button>
            </form>
        </React.Fragment>
    );
}

NewKombuchaForm.propTypes = {
    onNewKombuchaCreation: PropTypes.func
};


export default NewKombuchaForm;