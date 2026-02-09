import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
    localCache: persistentLocalCache({
        tabManager: persistentMultipleTabManager(),
    }),
});

export const getProjects = async () => {
    try {
        const projectsRef = collection(db, "projects");
        const querySnapshot = await getDocs(projectsRef);
        const projectsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return projectsList;
    } catch (e) {
        console.error("Error fetching projects: ", e);
        throw e;
    }
};

export { auth, db };
