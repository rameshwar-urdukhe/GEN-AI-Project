import {createBrowserRouter} from 'react-router';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';

export const router = createBrowserRouter([

    {
       path: "/login",
       element: <Login /> 
    }, {
        path: "/register",
        element: <Register/>
    }, {
        path: "/",
        element: <h1 className='bg-gray-800 h-screen text-white'>This is a Daddy home</h1>
    }
])