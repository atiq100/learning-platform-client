import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Course from "../Pages/Course/Course";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login/Login";
import Register from "../Pages/LoginRegister/Register/Register";
import CourseSummary from "../Pages/Shared/CourseSummary/CourseSummary";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allcourses',
                element:<CourseSummary></CourseSummary>,
                loader: ()=> fetch('https://b610-lerning-platform-server-side-atiq100.vercel.app/allcourses')
            },
            {
                path:'/course/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-atiq100.vercel.app/courses/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://b610-lerning-platform-server-side-atiq100.vercel.app/courses/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])