import React from "react";

const Card = () => {
  const data = [
    {
      img : "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Farhan khan",
      role: "Forward Deployed Engineer",
      company: "Black Rock",
    },
    {
      img : "https://media.istockphoto.com/id/507160491/photo/man-in-traditional-turkish-hat-and-dress-kabadayi.webp?a=1&b=1&s=612x612&w=0&k=20&c=M-BbPIhUNx6li8FnHimkysB_GxZi5olodtXgf7QCkTA=",
      name: "Abdur Rahman",
      role: "Forward Deployed Engineer",
      company: "Black Rock",
    },
    {
      img : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Areeb Sheikh",
      role: "Jaha se paisa aaye",
      company: "Jo paisa degi ye usse dega",
    },
    {
      img : "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
       name: "OP Farhan khan",
      role: "Hydrabad jata hu ",
      company: "Food Khaungaa ", 
    }
  ];

  return data.map((data, index) => (
    <div className="w-120 h-40 bg-cyan-200 rounded-xl flex justify-between align-middle px-3.5 py-3.5">
      <div className="w-30 h-30 rounded-full bg-amber-950 mt-2 ml-7 overflow-hidden">
        <img
          className="object-cover h-full "
          src={data.img}
          alt=""
        />
      </div>
      <div className="w-70 h-full px-7 py-3">
        <h3 className="text-black font-bold text-md mt-0">{index}</h3>
        <h1 className="text-black font-bold text-2xl">{data.name}</h1>
        <h3 className="text-black font-bold text-md mt-3">{data.role}</h3>
        <h3 className="text-black font-bold text-md mt-0">{data.company}</h3>
      </div>
    </div>
  ));
};
export default Card;
