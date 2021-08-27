import React from "react";
import Kombucha from "./Kombucha";

function KombuchaList(){
    return (
        <React.Fragment>
            <Kombucha
                name="Rad Dreamz"
                brand="2 Town Kombucha"
                price="$5"
                flavor="Coca-Cola" />
            <Kombucha
                name="Lion Hearts"
                brand="2 Town Kombucha"
                price="$5"
                flavor="Rasberry" />
        </React.Fragment>
    );
}

export default KombuchaList;