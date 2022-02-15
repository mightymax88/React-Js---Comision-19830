import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const {gamesInfo} = require('./Games.js');

let is_ok = true;

function ItemListContainer(){
    const saludo="Bienvenido a nuestro sitio web!";
    const {idSaga} = useParams();
    const [games, setGames] = useState([]);

    const customFetch = (gamesInfo) => {
        return new Promise ((resolve, reject) => {
            if(is_ok){
                resolve(gamesInfo)
            } else {
                reject('KO')
            }
        });
    };

    //componentDidMount
    useEffect(() => {
        setTimeout(() => {
            function getGames(){
                if (idSaga === undefined){
                    customFetch(gamesInfo)
                    .then (gamesInfo => setGames(gamesInfo))
                    .catch (error => alert ("Error en datos:", error))
                }
                else{
                    customFetch(gamesInfo.filter(item => item.saga === idSaga))
                    .then (gamesInfo => setGames(gamesInfo))
                    .catch (error => alert ("Error en datos:", error))
                }
            }
            getGames();
        },1000);
    },[idSaga]);

    return(
        <div>
            <div className='tituloILC'>
                <h2>{saludo}</h2>
            </div>
            <div className='cuerpoILC row'>
                <ItemList games={games}/>
            </div>
        </div>
    );
}

export default ItemListContainer;