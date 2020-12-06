import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCvPN8TiQV5faZ0n-lNgXz9iytFZQL273o",
  authDomain: "moyerweb-84ddb.firebaseapp.com",
  projectId: "moyerweb-84ddb",
  storageBucket: "moyerweb-84ddb.appspot.com",
  messagingSenderId: "65100341568",
  appId: "1:65100341568:web:bbe20f4fef61f428b65aa5",
  measurementId: "G-4RRSVZT2X7"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const fv = firebase.firestore.FieldValue

// collection references
const usersCollection = db.collection('users')
const employeesCollection = db.collection('employees')
const residentialGalleryCollection = db.collection('residentialGallery')
const residentialFiltersCollection = db.collection('residentialFilters')
const commercialGalleryCollection = db.collection('commercialGallery')
const commercialFiltersCollection = db.collection('commercialFilters')
const termsCollection = db.collection('terms')

// export utils/refs
export {
  db,
  auth,
  storage,
  usersCollection,
  employeesCollection,
  residentialGalleryCollection,
  residentialFiltersCollection,
  commercialGalleryCollection,
  commercialFiltersCollection,
  termsCollection,
  fv
}