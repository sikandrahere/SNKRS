import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Home,ProductCategory,videoMen,videoWomen,videoKid,bannerKid,bannerMen,bannerWomen,LoginSignUpForm, SingleProduct, Cart, Explore, FavouriteItems} from './components/index.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/men',
        element:<ProductCategory category="men" banner={bannerMen} video={videoMen} />
      },
      {
        path:'/women',
        element:<ProductCategory category="women" banner={bannerWomen} video={videoWomen} />
      },
      {
        path:'/kids',
        element:<ProductCategory category="kids" banner={bannerKid} video={videoKid} />
      },
      {
        path:'/login',
        element:<LoginSignUpForm/>
      },
      {
        path:'/product',
        element:<SingleProduct/>,
        children: [
          {
            path: '/product/:id',
            element:<SingleProduct/>
          }
        ]
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/explore',
        element:<Explore/>
      },
      {
        path:'/favourite',
        element:<FavouriteItems/>
      }
    ]
  }])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
