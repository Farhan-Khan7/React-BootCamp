import React from 'react'
import { useState } from 'react'
import Props from './Component/Props.jsx'
import SongCard from './Component/SongCard.jsx'
import Navbar from './Component/Navbar.jsx'

const App = () => {

  // ye Props.jsx kaa data 

  // const raw = [
  //   {name : "Farhan Khan" , profession : "FDE" , image : "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends : false},
  //   {name : "Areeb Sheikh" , profession : "Software Engineer" , image : "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends : false},
  //   {name : "Abdur Rahim" , profession : "FDE" , image : "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friends : false},
  //   {name : "Farhan khan" , profession : "Java Backend Engineer" , image : "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends : false},
  // ]

  // const [data ,setData] = useState(raw);

  // function isFriend(cardIndex){
  //   setData((prev)=>{
  //     return prev.map((item,index) =>{
  //       if(index === cardIndex){
  //         return {...item , friends : !item.friends}
  //       }
  //       return item
  //     })
  //   })
  // }


  // ye hai SongCard ka data 

  const songs = [
  {
    songName: "Golden Hour",
    singerName: "JVKE",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900",
    isFavourite: true,
  },
  {
    songName: "Blinding Lights",
    singerName: "The Weeknd",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=900",
    isFavourite: false,
  },
  {
    songName: "Levitating",
    singerName: "Dua Lipa",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900",
    isFavourite: true,
  },
  {
    songName: "Sunflower",
    singerName: "Post Malone, Swae Lee",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900",
    isFavourite: false,
  },
  {
    songName: "Peaches",
    singerName: "Justin Bieber",
    image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=900",
    isFavourite: false,
  },
  {
    songName: "Save Your Tears",
    singerName: "The Weeknd, Ariana Grande",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900",
    isFavourite: true,
  },
  {
    songName: "As It Was",
    singerName: "Harry Styles",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=900",
    isFavourite: false,
  },
  {
    songName: "Stay",
    singerName: "The Kid LAROI, Justin Bieber",
    image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=900",
    isFavourite: false,
  },
  {
    songName: "Watermelon Sugar",
    singerName: "Harry Styles",
    image: "https://images.unsplash.com/photo-1441829266145-70d1e5c19a4d?w=900",
    isFavourite: true,
  },
  {
    songName: "Circles",
    singerName: "Post Malone",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900",
    isFavourite: false,
  },
];



const [song , setSongs] = useState(songs)

function isFavourite(songIndex){
  console.log("isFavourite clicked")
   setSongs((prev) => {
    return prev.map((item, index) => {
      if(index === songIndex){
         return {...item , isFavourite : !item.isFavourite}
      }
      return item;
    })
  })
}


  return (
    <div className='h-screen w-full flex flex-col'>
      {/* {data.map((item,idx) =>{
       return <Props key={idx} index={idx} values={item} isFriend={isFriend} />
      })} */}


        <Navbar />

        <div className="w-full h-fit flex flex-wrap gap-4 p-3" >
        {song.map((song , index)=> (
            <SongCard song={song} index={index} isFavourite={isFavourite}/>
          ))}
          </div>

    </div>
  )
}

export default App