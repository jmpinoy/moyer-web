import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCXSPdHCfIKXmjELqfQVeC7UVLduWDZJfc",
  authDomain: "tutorial-crud-app.firebaseapp.com",
  projectId: "tutorial-crud-app",
  storageBucket: "tutorial-crud-app.appspot.com",
  messagingSenderId: "38204224427",
  appId: "1:38204224427:web:ae61723905d9af4fd358ee",
  measurementId: "G-J0BFEVJDXL"
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