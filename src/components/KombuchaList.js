import React from "react";
import Kombucha from "./Kombucha";

const masterKombuchaList = [
    {
        name: "Rad Dreamz",
        brand: "2 Town Kombucha",
        price: "$5",
        flavor: "Coca-Cola"
    },
    {
        name: "Lion Hearts",
        brand: "2 Town Kombucha",
        price: "$5",
        flavor: "Rasberry"
    },
    {
        name: "Blueberry Delight",
        brand: "2 Town Kombucha",
        price: "$5",
        flavor: "Blueberry"
    },
];

function KombuchaList(){
    return (
        <React.Fragment>
            <hr/>
            {masterKombuchaList.map((kombucha, index) =>
                <Kombucha name={kombucha.name}
                brand={kombucha.name}
                price={kombucha.name}
                flavor={kombucha.name} />
            )}
        </React.Fragment>
    );
}

export default KombuchaList;