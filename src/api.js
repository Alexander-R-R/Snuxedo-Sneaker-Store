import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
   } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBQ5xnjErpt-G5640oN-hsWSz6538nj8PY",
  authDomain: "snuxedo-sneaker-store.firebaseapp.com",
  projectId: "snuxedo-sneaker-store",
  storageBucket: "snuxedo-sneaker-store.appspot.com",
  messagingSenderId: "824455973930",
  appId: "1:824455973930:web:d8efab80c5cd21fedd4753"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const shoesCollectionRef = collection(db, "shoes")

export async function getShoes() {
  const querySnapshot = await getDocs(shoesCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  console.log(dataArr)
  return dataArr
}

//

export async function getShoes(id) {
  const docRef = doc(db, "shoes", id)
  const shoeSnapshot = await getDoc(docRef)
  return { 
    ...shoeSnapshot.data(),
    id: shoeSnapshot.id

  }
}

//

export async function getHostShoes() {
  const q = query(shoesCollectionRef, where("hostId", "==", "123"))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  console.log(dataArr)
  return dataArr
}





// export async function getHostVans(id) {
//   const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message:"Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json()
//   return data.vans
// }

export async function loginUser(creds) {
  const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
  )

  const data = await res.json()

  if (!res.ok) {
    throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
    }
  }
 return data
}


// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans"
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }