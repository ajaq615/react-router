import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route
} from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import RootLayout from './pages/Root';

//FOR JSX/COMPONENT-based way of defining routes (old version)
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions);

//OBJECT-based way of defining routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetails /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
