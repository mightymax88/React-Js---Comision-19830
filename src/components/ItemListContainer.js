import React from 'react';
import ItemList from './ItemList';

function ItemListContainer({saludo,games}){
    return(
        <div>
            <div className='tituloILC'>
                <h2>{saludo}</h2>
            </div>
            <div className='cuerpoILC'>
                <ItemList games={games}/>
            </div>
        </div>
    );
}

export default ItemListContainer;