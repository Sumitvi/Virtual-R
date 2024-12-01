import React from 'react'
import Card from "../components/Card.jsx"


const Marketing = () => {
  return (

    <div>
             <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20" >
              <Card img="/marketing/aman.jpg" name="Aman Pandey " prof="Marketing Team Member"/>
              <Card img="/marketing/sourabh.jpg" name="Sourabh Yadav " prof="Marketing Team Member"/>
              <Card img="/marketing/siddhi.jpg" name="Siddhi Agrawal" prof="Marketing Team Member"/>
             
      
    </div>
    </div>
  )
}

export default Marketing
