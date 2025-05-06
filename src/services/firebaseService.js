import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveUserResult(data) {
    try {
        await addDoc(collection(db, "results"), data);
        console.log("Resultado guardado en Firebase");
    } catch (error) {
        console.error("Error al guardar resultado:", error);
    }
}