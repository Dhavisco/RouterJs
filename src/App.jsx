import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import HomePage from './pages/Home'
import Product from './pages/Product'
import RootLayout from './pages/Root'
import ProductDetailsPage from './pages/ProductDetails'
import ErrorPage from './pages/Error'

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {path: '/' , element: <RootLayout/>,
  errorElement: <ErrorPage/>,
   children: [
  { index: true, element:<HomePage/>},
  {path:'products', element: <Product/>},
  {path:'products/:productId', element:<ProductDetailsPage/>}
  ]}
  
])
function App() {
 

  return (
    <RouterProvider router={router}/>
     
    
  )
}

export default App
