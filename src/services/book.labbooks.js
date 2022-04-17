import { db } from   '../firebase';
import {collection,
     getDocs,
      getDoc, 
      addDoc, 
      updateDoc, 
      deleteDoc,  
      doc,  
} from "firebase/firestore";

const bookCollectionRef = collection( db, "labbooks");
class BookDataLabbook {
    addBooks = ( newBook ) => {
        return addDoc(bookCollectionRef, newBook);

    }

    updateBook = (id, updateBook) => {
        const bookDoc = doc(db, "labbooks, id");
        return updateDoc(bookDoc, updateBook);

    };

    deleteBook = (id) => {
        const bookDoc = doc(db, "labbooks", id);
        return deleteDoc(bookDoc);
    };

    getAllBook = () => {
        return getDocs(bookCollectionRef);

    };

    getBook = (id) => {
        const bookDoc = doc(db, "labbooks", id);
        return getDoc(bookDoc);
    };


}

export default new BookDataLabbook();