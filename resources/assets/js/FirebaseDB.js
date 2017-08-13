import * as Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: 'AIzaSyC_3cOHnUQ54sfTSjnLg197qB7y9DfvgVg',
    authDomain: 'welfordian-60215.firebaseapp.com',
    databaseURL: 'https://welfordian-60215.firebaseio.com/',
    projectId: 'welfordian-60215',
    storageBucket: 'welfordian-60215.appspot.com',
    messagingSenderId: '64220932484'
});

export const db = firebaseApp.database();