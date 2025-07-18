import React from 'react'
import { BG_URL } from '../Utils/Constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img 
                    className='h-screen w-screen object-cover' 
                    src={BG_URL} 
                    alt='background' 
                />
            </div>
            <div className=''>
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch
