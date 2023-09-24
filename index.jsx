import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, 
          createRoutesFromElements, 
          Route, Link, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader} from "./pages/Van/Vans"
import VanDetail, { loader as vanDetailLoader } from './pages/Van/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans, { loader as hostVansLoader} from './pages/Host/HostVans';
import HostVanDetail, { loader as hostVanDetailLoader} from './pages/Host/HostVanDetail';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostLayout from './components/HostLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { requireAuth } from './pages/util';

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="login"
            element={<Login />}
          />
          <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader} />
          <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader}/>

          <Route path='host' element={<HostLayout />} >
            <Route 
              index 
              element={<Dashboard />} 
              loader={async () => {return await requireAuth()}}
            />
            <Route 
              path='income' 
              element={<Income />}
              loader={async () => {return await requireAuth()}} 
            />
            <Route 
              path='reviews' 
              element={<Reviews />} 
              loader={async () => {return await requireAuth()}}
            />
            <Route 
              path='vans' 
              element={<HostVans />}
              loader={hostVansLoader} 
            />

            <Route 
              path='vans/:id' 
              element={<HostVanDetail />}
              loader={hostVanDetailLoader}>
              <Route 
                index 
                element={<HostVanInfo />}
                loader={async () => {
                  return null
                }} />
              <Route 
                path='pricing' 
                element={<HostVanPricing />}
                loader={async () => {
                  return null
                }} />
              <Route 
                path='photos' 
                element={<HostVanPhotos />}
                loader={async () => {
                  return null
                }} />
            </Route>
          </Route >

          <Route path='*' element={<NotFound />} />
        </Route >
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);