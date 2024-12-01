import React from 'react'
import Card from "../components/Card.jsx"


const Event = () => {
  return (
    <div>
      <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20" >
        <Card img="/event/utsava.jpg" name="Utsav Srivastava" prof="Event Team Member"/>
        <Card img="/event/prachi.jpg" name="Prachi Soni" prof="Event Team Member"/>

     
    </div>
    </div>
  )
}

export default Event
