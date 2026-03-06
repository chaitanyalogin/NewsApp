import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [category, setCategory] = useState('general')

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Analytics />
    </div>
  )
}

export default App