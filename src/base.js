import Rebase from "re-base";
import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxWm81oujYItwrXtBQjIZ18T32pst1gJE",
    authDomain: "fish-store-eb279.firebaseapp.com",
    databaseURL: "https://fish-store-eb279.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;