import React from 'react'
import Card from "../components/Card.jsx"


const Outreach = () => {
  return (
    <div>
      
      <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20">
        
         <Card img="/outreach-team/user3.jpg" name="Harshita Pandey " prof="Outreach Member"/>
         <Card img="/outreach-team/user2.jpg" name="Kanak Awadhiya " prof="Outreach Member"/>
         <Card img="/outreach-team/user1.jpg" name="Aashi Jain " prof="Outreach Member"/>
    </div>
    </div>
  )
}

export default Outreach
