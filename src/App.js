import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Category from './Component/Category/Category';
import ProductPag from './Component/ProductPag/ProductPag';

function App() {
  useEffect(() => {
    AOS.init({
      once: true, // Animation will only trigger once
      duration: 1000, // Duration of the animation in milliseconds
    });
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/contact',
          element: <Contact></Contact>,
        },
        {
          path: '/category',
          element: <Category></Category>,
        },
        {
          path: '/Product',
          element: <ProductPag></ProductPag>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
