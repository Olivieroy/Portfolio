import { useState } from 'react'
import './assets/sass/master.scss'
import Header from './layouts/header'
import Title from './parts/Title'
import ChromTest from './layouts/chromatest'

function App() {

  return (
    <>
      <div>
        <Header />
        <Title />
        <ChromTest />
      </div>
    </>
  );
}

export default App
