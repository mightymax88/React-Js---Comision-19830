import { collection, getDocs } from "firebase/firestore";
import db from './firebaseConfig';

const firestoreFetch = async () => {
    let q;
    if (idCategory){
        q = query(collection(db, "games"), where('categoryID', '==', idCategory));
    } else {
        q = query(collection(db, "games"), orderBy('name'));
    }
    const querySnapshot = await getDocs(collection(db, "games"));
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore
}

export default firestoreFetch;