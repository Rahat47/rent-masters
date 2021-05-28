import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


//!SIGN UP WITH EMAIL AND PASSWORD.
export const fbaseSignUpWithEmailPass = async (email, password) => {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const user = userCredential.user
        return user
    } catch (error) {
        const errorMessage = error.message;
        throw new Error(errorMessage)
    }
}


//!SIGN IN EXISTING USER
export const fbaseSignInExistingUser = async (email, password) => {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password)
        const user = userCredential.user
        return user
    } catch (error) {
        const errorMessage = error.message;
        throw new Error(errorMessage)
    }
}

//!SIGN IN WITH GOOGLE
export const fbaseGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        return user
    } catch (error) {
        const errorMessage = error.message
        throw new Error(errorMessage)
    }
}
//!SIGN IN WITH Facebook
export const fbaseFacebookLogin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        return user
    } catch (error) {
        const errorMessage = error.message
        throw new Error(errorMessage)
    }
}
//!SIGN IN WITH Twitter
export const fbaseTwitterLogin = async () => {
    const provider = new firebase.auth.TwitterAuthProvider();

    try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        return user
    } catch (error) {
        const errorMessage = error.message
        throw new Error(errorMessage)
    }
}
//!SIGN IN WITH Github
export const fbaseGithubLogin = async () => {
    const provider = new firebase.auth.GithubAuthProvider()
    try {
        const result = await firebase.auth().signInWithPopup(provider)
        const user = result.user
        return user
    } catch (error) {
        const errorMessage = error.message
        throw new Error(errorMessage)
    }
}
//! Logout
export const fbaseLogout = async () => {
    try {
        await firebase.auth().signOut()
        console.log("User Logged Out Successfully.");
    } catch (error) {
        const errorMessage = error.message
        throw new Error(errorMessage)
    }

}