import logo from './logo.svg'
import './App.scss'
import { Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes path="/" element={<Layout />}></Routes>
    </>
  )
}

export default App
