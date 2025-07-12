import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/UserSlice'
const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ])


    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;
