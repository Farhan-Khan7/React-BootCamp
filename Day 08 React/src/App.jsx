import React, { useState } from "react";
import Navbaar from "./Component/Navbaar";
import Form from "./Component/Form";
import ProfileCard from "./Component/ProfileCard";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [cardData, setCardData] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || []
  });

  const [updateUser , setUpdateUser] = useState(null)

  


  const deleteuser = (userId) =>{
    let deletedUsers = cardData.filter((data, id) => {
      return userId !== id
    })
    setCardData(deletedUsers)
    localStorage.setItem('user', JSON.stringify(deletedUsers))
  }

  return (
    <div className="w-full h-300 bg-gray-800 p-3">
      <Navbaar
        showForm={showForm}
        setShowForm={setShowForm}
        setUpdateUser={setUpdateUser}
      />

      <div className="h-fit flex px-3 py-0 gap-5 mt-5 flex-wrap">
        {cardData.map((elem, idx) => (
          <ProfileCard users={elem} key={idx} deletedUsers={deleteuser} id={idx} setShowForm={setShowForm} setUpdateUser={setUpdateUser}/>
        ))}
      </div>

      <Form
        showForm={showForm}
        setShowForm={setShowForm}
        cardData={cardData}
        setCardData={setCardData}
        updateUser={updateUser}
      />
    </div>
  );
};

export default App;