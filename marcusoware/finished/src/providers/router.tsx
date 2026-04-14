import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'

export default function Router() {
  return (
    <div>
        <Routes>
                <Route element={<Home/>} path='/' />
        </Routes>
    </div>
  )
}
