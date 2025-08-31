import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsB7EgfO6SDcQQdy1y9vihnjOXsd1LRNY",
    authDomain: "olx-smit8.firebaseapp.com",
    projectId: "olx-smit8",
    storageBucket: "olx-smit8.appspot.com",
    messagingSenderId: "201892631281",
    appId: "1:201892631281:web:17ad67ef72cf33ec0b8f50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function getAllProducts() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    const products = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        products.push({ id: doc.id, ...doc.data() })
    })

    return products
}

export async function getSingleProduct(adId) {
    const docRef = doc(db, "ads", adId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

export async function register(userInfo) {
    const { fullname, age, email, password } = userInfo
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, { email, age, fullname })

    alert('Registered Successfully!')
}

export async function login(userInfo) {
    const { email, password } = userInfo
    await signInWithEmailAndPassword(auth, email, password)

    alert('Logged In Successfully!')
}