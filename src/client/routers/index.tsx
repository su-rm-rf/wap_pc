import React, { lazy } from 'react'
// import { createBrowserRouter } from 'react-router-dom'


// const routes:any = [
  //   {
    //     path: '/',
//     // element: lazy(() => import('../components/home/Index'))
//     // element: lazy(() => import('../App'))
//     element: <App />,
//   }
// ]
// export default createBrowserRouter(routes)

import { Routes, Route } from "react-router"
// const App = lazy(() => import('../App'))
// const Home = lazy(() => import('../components/home/Index'))
import App from '../App'
import Home from '../components/home/Index'

export default () => (
  <Routes>
    {/* <Route path="/" lazy={() => import('../App')} /> */}
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />} />
    </Route>
  </Routes>
)