import React from 'react'
import './utils/App.css'
import Routes from './routes'
// import UserContext from './contexts/UserContext'

export const options = {
  baseURL: 'http://localhost:5001',
  responseType: 'application/json',
}

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function App() {
  return (
    <Routes />
  )
}
