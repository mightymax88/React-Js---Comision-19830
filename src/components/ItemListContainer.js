import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { query, orderBy, where } from 'firebase/firestore';
// import firestoreFetch from '../utils/firestoreFetch';

// const {gamesInfo} = require('./Games.js');

// let is_ok = true;

function ItemListContainer(){
    const saludo="Bienvenido a nuestro sitio web!";
    const {idSaga} = useParams();
    const [games, setGames] = useState([]);

    // const customFetch = (gamesInfo) => {
    //     return new Promise ((resolve, reject) => {
    //         if(is_ok){
    //             resolve(gamesInfo)
    //         } else {
    //             reject('KO')
    //         }
    //     });
    // };

    // //componentDidMount
    // useEffect(() => {
    //     function getGames(){
    //         if (idSaga === undefined){
    //             customFetch(gamesInfo)
    //             .then (gamesInfo => setGames(gamesInfo))
    //             .catch (error => alert ("Error en datos:", error))
    //         }
    //         else{
    //             customFetch(gamesInfo.filter(item => item.saga === idSaga))
    //             .then (gamesInfo => setGames(gamesInfo))
    //             .catch (error => alert ("Error en datos:", error))
    //         }
    //     }
    //     getGames();
    // },[idSaga]);

    // useEffect(() => {
    //     const firestoreFetch = async () => {
    //         const querySnapshot = await getDocs(collection(db, "games"));
    //         const dataFromFirestore = querySnapshot.docs.map(document => ({
    //             id: document.id,
    //             ...document.data()
    //         }));
    //         return dataFromFirestore;
    //     }
    //     firestoreFetch()
    //         .then(result => setGames(result))
    //         .catch(error => console.log(error))
    // },[games,idSaga]);

    useEffect(() => {
        const firestoreFetch = async () => {
            let q;
            if (idSaga){
                q = query(collection(db, "games"), where("saga", "==", idSaga));
            } else {
                q = query(collection(db, "games"), orderBy("title"));
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }));
            return dataFromFirestore;
        }
        firestoreFetch()
            .then(result => setGames(result))
            .catch(error => console.log(error))
    },[games,idSaga]);

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