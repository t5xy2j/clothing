import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();
firestore.collection('users').doc('TL1tlA6LeT4TFk4VhZIl').collection('cartItems').doc('85bYB12eWOpcpCPXgtqR')
firestore.doc('users/TL1tlA6LeT4TFk4VhZIl/cartItems/85bYB12eWOpcpCPXgtqR')
firestore.collection('users/TL1tlA6LeT4TFk4VhZIl/cartItems')