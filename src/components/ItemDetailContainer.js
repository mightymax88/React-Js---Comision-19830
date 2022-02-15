import React,{useState,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const {gamesInfo} = require('./Games.js');

let is_ok = true;

function ItemDetailContainer(){
    const saludo="Este es el detalle de nuestros productos!";
    const [games, setGames] = useState([]);
    let {idGame} = useParams();
    let idGameN = parseInt(idGame);

    const getItem = (gamesInfo) => {
        return new Promise ((resolve, reject) => {
            if(is_ok){
                resolve(gamesInfo)
            } else {
                reject('KO')
            }
        });
    };

    //componentDidMount - filter(item => item.key === idGameN)
    useEffect(() => {
        setTimeout(() => {
            function getGames(){
                getItem(gamesInfo[idGameN-1])
                    .then (gamesInfo => setGames(gamesInfo))
                    .catch (error => alert ("Error en datos", error))
            }
            getGames();
        },1000);
    },[idGameN]);

    return(
        <div>
            <div className='tituloILC'>
                <h2>{saludo}</h2>
            </div>
            <div className='cuerpoILC'>
                <ItemDetail games={games} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;