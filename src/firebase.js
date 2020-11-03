import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCXSPdHCfIKXmjELqfQVeC7UVLduWDZJfc",
  authDomain: "tutorial-crud-app.firebaseapp.com",
  databaseURL: "https://tutorial-crud-app.firebaseio.com",
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
  usersCollection,
  employeesCollection,
  residentialGalleryCollection,
  residentialFiltersCollection,
  commercialGalleryCollection,
  commercialFiltersCollection,
  termsCollection
}