import React, { useState } from 'react';
import './Login.css';
import googleImg from '../../assets/Icon/google.png';
import facebookImg from '../../assets/Icon/fb.png';

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase/firebaseConfig';
import Header from '../Header/Header';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    // user state
    const [user, setUser] = useState({
        isLoggedIn:false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    const updateUserName = name =>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        }).then(function() {
            console.log(user.displayName);
        }).catch(function(error) {
            console.log(error);
        });
    };
    // email password sign up 
    const handleEmailSignUp =(e) => {

        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                updateUserName(user.name)
            })
            .catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
          });
        }
        
    e.preventDefault();
    }
    // email password sign in
    const handelEmailSignIn =(e) => {
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(response =>  console.log(response))
            .catch(function(error) {
                var errorMessage = error.message;
                alert(errorMessage);
              });
        }
        e.preventDefault();
    }
    // google sign in
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            var user = result.user;
            console.log(user);
        }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    //facebook sign in
    const handleFacebookSignIn = () => {
        const facebookProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookProvider).then(function(result) {
            var user = result.user;
            console.log(user);
          }).catch(function(error) {
            var errorMessage = error.message;
            alert(errorMessage)
          });
    }
    const handleBlur = (e) => {
        let isFieldValid ;
        if (e.target.name === 'username') {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordLong = e.target.value.length > 6
            const isPasswordHasNumbers = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordLong && isPasswordHasNumbers;
        }
        if (isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const [newUser,setNewUser] = useState(true)
    const toggle = () => {
        setNewUser(!newUser);
    }
    return (
        <div className="container height">
            <Header></Header>
            <div className="login-box">
                {
                    newUser ? 
                    <form onSubmit={handelEmailSignIn}>
                    <h3>Login</h3>

                    <input onBlur={handleBlur} name="email" required className="input-border form-control" type="email" placeholder="Username or Email"/>
                    <br/>
                    <input onBlur={handleBlur} name="password" required className="input-border form-control" type="password" placeholder="Password"/>
                    <br/>
                        <div className="d-flex justify-content-between">
                            <div>
                            <input type="checkbox" id="remember"/>
                            <label htmlFor="remember"> Remember Me</label>
                            </div>
                            
                            <a href="/">Forgot Password</a>
                        </div>
                    <br/>
                    <input className="yellow-btn login-btn form-control" type="submit" value="Login"/>
                    <p>Don’t have an account? <span onClick={toggle}>Create an account</span></p>
                </form>
                :
                <form onSubmit={handleEmailSignUp}>
                    <h3>Create an account</h3>

                    <input onBlur={handleBlur} className="input-border form-control" name ="username" type="text" required placeholder="First Name"/>
                    <br/>
                    <input className="input-border form-control" type="text" required placeholder="Last Name"/>
                    <br/>
                    <input onBlur={handleBlur} className="input-border form-control" type="email" name="email" required placeholder="Username or Email"/>
                    <br/>
                    <input onBlur={handleBlur} className="input-border form-control" type="password" name="password" required placeholder="Password" />
                    <br/>
                    <input className="input-border form-control" type="password" required placeholder="Confrim Passowrd"/>
                    <br/>
                        
                    <br/>
                    <input className="yellow-btn login-btn form-control" type="submit" value="Create an account"/>
                    <p>Already have an account? <span onClick={toggle}>Login</span></p>
                </form>
                }
                
            </div>
            <hr/>
            <p style={{textAlign: 'center'}}>or</p>
            <hr/>
            <div onClick={handleGoogleSignIn} className="signinwith">
                <img className="icon" src={googleImg} alt=""/>
                <p>Continue with Google</p>
            </div>
            <div onClick={handleFacebookSignIn} className="signinwith">
                <img className="icon" src={facebookImg} alt=""/>
                <p>Continue with Facebook</p>
            </div>
        </div>
    );
};

export default Login;