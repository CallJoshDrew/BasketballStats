import React, { useEffect, useState } from "react";



export default function Ted() {
  
  const [score1, setScore1] = useState(1);
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('score'));
    setScore1(data)
  },[])

  return (
    <div>
      {score1}
    </div>
  );
}