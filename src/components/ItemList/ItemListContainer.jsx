import React from "react";
import Card from "../Card/Card";

function ItemListContainer() {
    return (
        <div>
            <Card 
                img="https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/croton-petra-41-76fbcc11ffe556056916342315708173-1024-1024.jpg"
                title="CROTÓN PETRA" 
                detail="Es un cultivar de Codiaeum variegatum, nativo del Sudeste Asiático y noreste de Australia." 
                price="1600" 
            />
            <Card 
                img="https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/21-dd152142cd74ecdf4815743484665400-1024-1024.png"
                title="DRACAENA MASSANGEANA" 
                detail="Es un cultivar de Dracaena fragrans, nativa de África Tropical." 
                price="150" 
            />
            <Card
                img="https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/sansevieria-71-fc65c5a4b5a8db030916342312862112-1024-1024.jpg"
                title="SANSEVIERIA" 
                detail="Lorem Ipsum" 
                price="Es nativa del este de África Central." 
            />
        </div>
    );
}

export default ItemListContainer;