import React, { useRef, useState } from 'react'
import { checkValidData } from '../../ValidateForm';
import Header from './Header'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/UserSlice';
import { BG_URL } from '../Utils/Constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [ErrorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const HandleButtonClick = () => {
    const nameValue = isSignInForm ? null : name.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidData(nameValue, emailValue, passwordValue);
    setErrorMessage(message);

    if (!message) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            return updateProfile(user, {
              displayName: nameValue,
            });
          })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      } else {
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Signed in:", user);
            navigate("/browse");
          })
          .catch((error) => {
            setErrorMessage(error.code + " - " + error.message);
          });
      }
    }
  };

  return (
    <div className='relative h-screen w-screen'>
      <Header />

      {/* Background Image */}
      <img
        className='absolute h-full w-full object-cover'
        src={BG_URL}
        alt='background'
      />

      {/* Form Overlay */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className='absolute w-11/12 sm:w-2/3 md:w-1/3 lg:w-1/4 p-8 sm:p-10 md:p-12 bg-black bg-opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg'
      >
        <h1 className='font-bold text-2xl sm:text-3xl py-4'>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded"
            ref={name}
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded"
          ref={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded"
          ref={password}
        />

        <p className='text-red-500 font-bold text-lg py-2'>{ErrorMessage}</p>

        <button
          className='p-3 sm:p-4 my-4 bg-red-700 w-full rounded hover:bg-red-800 transition'
          onClick={HandleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className='py-4 cursor-pointer hover:underline text-center' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign up Now" : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  )
}

export default Login
