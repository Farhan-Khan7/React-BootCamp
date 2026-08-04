import React, { useState } from "react";
import Navbaar from "./Component/Navbaar";
import Form from "./Component/Form";
import ProfileCard from "./Component/ProfileCard";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [cardData, setCardData] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || [];
  });

  return (
    <div className="w-full h-300 bg-gray-800 p-3">
      <Navbaar
        showForm={showForm}
        setShowForm={setShowForm}
      />

      <div className="h-fit flex px-3 py-0 gap-5 mt-5 flex-wrap">
        {cardData.map((elem, idx) => (
          <ProfileCard users={elem} key={idx} />
        ))}
      </div>

      <Form
        showForm={showForm}
        setShowForm={setShowForm}
        cardData={cardData}
        setCardData={setCardData}
      />
    </div>
  );
};

export default App;