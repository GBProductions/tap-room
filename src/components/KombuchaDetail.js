import React from "react";
import PropTypes from "prop-types";

function KombuchaDetail(props){
    const { kombucha } = props;
    return (
        <React.Fragment>
            <h1>{kombucha.name} Details</h1>
            <h3>{kombucha.brand}</h3>
            <p>{kombucha.price}</p>
            <p>{kombucha.flavor}</p>
            < hr/>
        </React.Fragment>
    );
}

KombuchaDetail.propTypes = {
    kombucha: PropTypes.object
};

export default KombuchaDetail;