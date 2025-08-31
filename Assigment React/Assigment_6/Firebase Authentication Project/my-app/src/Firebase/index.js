import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs , getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQ6Y8WYXMyx5eiSoJtGNJcbbooTcyDZbY",
  authDomain: "olx-clone-exms-22.firebaseapp.com",
  projectId: "olx-clone-exms-22",
  storageBucket: "olx-clone-exms-22.appspot.com",
  messagingSenderId: "305271152167",
  appId: "1:305271152167:web:ad4eb5d78a70a99171f802"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);



export const Registration = async (userInfo) => {
  try {
    const { email, password } = userInfo

    await createUserWithEmailAndPassword(auth, email, password)

    await addDoc(collection(db, "users"), {
      email,
      password,
    });
    alert('Register Succesfully')

    return true;

  }
  catch (e) {
    alert(e.message);
    throw e;

  }
}
export const AdsPost = async (userInfo) => {
  try {
    const { adname, model, description, price, img } = userInfo
    /*Step:1 Storage mei file ya images ko upload karna he*/
    const storageRef = ref(storage, `AdsPosted/${img.name}`);
    await uploadBytes(storageRef, img)
    /*Step:2 Us Images ka Url get karna he*/
   const url = await getDownloadURL(storageRef)
   /*Step:3 Phr db mei Data Add karna he*/
    await addDoc(collection(db, "AdsPOSts"), {
      adname,
      model,
      price,
      description,
      imgUrl :url,
    });
    alert('AdPost Succesfully')

    return true;

  }
  catch (e) {
    alert(e.message);
    throw e;

  }
}
export const getAdsData =async()=>{
  const querySnapshot = await getDocs(collection(db, "AdsPOSts"));
  const ads =[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const ad = doc.data()
    ad.id = doc.id
    ads.push(ad)

  });
  return ads
}

export const Loged = async (userInfo) => {

  try {
    const { email, password } = userInfo
    await signInWithEmailAndPassword(auth, email, password)

    alert('Login SuccessFully')
  }
  catch (e) {
    alert(e.message);
    throw e
  }

}
