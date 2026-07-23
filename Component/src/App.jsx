import React from 'react'
import Card from './components/Card'
import SongCard from './components/SongCard'
const App = () => {
  return (
    <div className='w-full h-fit bg-amber-950 flex align-middle justify-center gap-7 p-7 flex-wrap'>
      <SongCard />
    </div>
  )
}

export default App
