import { useState } from 'react'
import './assets/sass/master.scss'
import Header from './layouts/header'
import Home from './pages/Home'

function App() {

  return (
    <>
      <div>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App
