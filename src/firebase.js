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
const employeesCollection = db.collection('employees')
const residentialGalleryCollection = db.collection('residentialGallery')
const residentialColorsCollection = db.collection('residentialColors')
const residentialRoomTypesCollection = db.collection('residentialRoomTypes')
const residentialStylesCollection = db.collection('residentialStyles')
const commercialGalleryCollection = db.collection('commercialGallery')
const commercialColorsCollection = db.collection('commercialColors')
const commercialRoomTypesCollection = db.collection('commercialRoomTypes')
const commercialStylesCollection = db.collection('commercialStyles')
const termsCollection = db.collection('terms')

// export utils/refs
export {
  db,
  auth,
  employeesCollection,
  residentialGalleryCollection,
  residentialColorsCollection,
  residentialRoomTypesCollection,
  residentialStylesCollection,
  commercialGalleryCollection,
  commercialColorsCollection,
  commercialRoomTypesCollection,
  commercialStylesCollection,
  termsCollection
}