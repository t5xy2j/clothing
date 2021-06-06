import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
 {
    apiKey: "AIzaSyBMEK60V-RKDFqUbr_ZDM3lGLGM7ZBLBeU",
    // apiKey: "AIzaSyBMEK60V-RKDFqUbr_ZDM3lGLGM7ZBLBeU",
    authDomain: "clothing-2a87a.firebaseapp.com",
    // databaseURL: "https://clothing.firebaseio.com",
    projectId: "clothing-2a87a",
    storageBucket: "clothing-2a87a.appspot.com",
    messagingSenderId: "128539507514",
    appId: "1:128539507514:web:9002143ee66b54d5836e03",
    measurementId: "G-D7QPT51QHH"
};

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    // console.log(userAuth)
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.id}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(error.message)
        }
    }
    return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;