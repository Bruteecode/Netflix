import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { toggleGptSearchView } from '../Utils/GptSlice'
import { addUser, removeUser } from '../Utils/UserSlice'
import { LOGO, Supported_languages } from '../Utils/Constants'
import { changeLanguage } from '../Utils/ConfigSlice'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const HandleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    })
  }
  console.log("Header rendered")
  const HandleLanguageClick = (e) => {
    dispatch(changeLanguage(e.target.value))
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  
    return () => unSubscribe();
  }, []);
  

  const HandleGptClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
      <div className="flex justify-center md:justify-between items-center flex-col md:flex-row">
        <img className='w-44 mb-2 md:mb-0' src={LOGO} alt='logo' />

        {user && (
          <div className='flex flex-wrap justify-between md:justify-end items-center'>
            {showGptSearch && (
              <select className='p-2 m-2 bg-gray-900 text-white' onChange={HandleLanguageClick}>
                {Supported_languages.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}

            <button
              className='py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-600'
              onClick={HandleGptClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>

            <img className='hidden md:block w-10 h-10 mx-2' alt="user-icon" src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaGqAqHOxkkTTsMQIiaglAu0aPPapDflu3lUtemSna0q1fOq6i8eDrNH2nkRg52kJA90cTrTWuosHlljv9fk-iF-P2XR490.png?r=54c" />

            <div className='flex flex-col text-white items-center mx-2'>
               <button
                onClick={HandleSignOut}
                className='bg-red-600 text-white px-4 py-1 mt-1 rounded hover:bg-red-700 transition'
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
