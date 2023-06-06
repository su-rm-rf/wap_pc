import React from 'react'
import { hydrate } from 'react-dom'
// import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

import router from './routers'
import App from './App'
import Routers from './routers'
// import Layout from './components/Layout'

// createRoot(document.querySelector('#root') as HTMLElement)
// .render(
//   <BrowserRouter>
//     <Layout />
//   </BrowserRouter>
//   // <RouterProvider router={ router } />
// )
// hydrateRoot(
//   document.querySelector('#root') as Element,
//   <BrowserRouter>
//     <Routers />
//   </BrowserRouter>
// )
hydrate(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,
document.querySelector('#root') as Element,
)