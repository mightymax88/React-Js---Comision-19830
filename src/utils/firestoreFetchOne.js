import { collection, getDocs } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import db from './firebaseConfig';

const firestoreFetchOne = async (idItem) => {
    const docRef = doc(db, "games", idItem);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return{
            id: idItem,
            ...docSnap.data()
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No existe el documento")
    }
}

export default firestoreFetchOne;