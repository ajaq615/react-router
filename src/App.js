import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import Products from './pages/Products';

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
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <Products /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
