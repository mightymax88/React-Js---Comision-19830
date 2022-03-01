import React,{useState,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

// const {gamesInfo} = require('./Games.js');

// let is_ok = true;

function ItemDetailContainer(){
    const saludo="Este es el detalle de nuestros productos!";
    const [games, setGames] = useState([]);
    let {idGame} = useParams();

    // const getItem = (gamesInfo) => {
    //     return new Promise ((resolve, reject) => {
    //         if(is_ok){
    //             resolve(gamesInfo)
    //         } else {
    //             reject('KO')
    //         }
    //     });
    // };

    //componentDidMount - filter(item => item.key === idGameN)
    // useEffect(() => {
    //     setTimeout(() => {
    //         function getGames(){
    //             getItem(gamesInfo[idGameN-1])
    //                 .then (gamesInfo => setGames(gamesInfo))
    //                 .catch (error => alert ("Error en datos", error))
    //         }
    //         getGames();
    //     },1000);
    // },[idGameN]);

    useEffect(() => {
        const firestoreFetchOne = async (idGame) => {
            const docRef = doc(db, "games", idGame);
            const docSnap = await getDoc(docRef);
        
            if (docSnap.exists()){
                return{
                    id: idGame,
                    ...docSnap.data()
                }
            } else {
                // doc.data() will be undefined in this case
                console.log("No existe el documento")
            }
        }
        firestoreFetchOne(idGame)
            .then(result => setGames(result))
            .catch(error => console.log(error))
    },[idGame]);

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