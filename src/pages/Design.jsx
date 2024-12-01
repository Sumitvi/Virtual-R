import React from 'react'
import Card from "../components/Card.jsx"

const Design = () => {
  return (
    <div>
        <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20 flex-wrap">
         <Card img="/design-team/yash.jpg" name="Yash Raikwar" prof="Design Member"/>
         <Card img="/design-team/ayush.jpg" name="Ayush Kushwaha" prof="Design Member"/>
         <Card img="/design-team/akansha.jpg" name="Akansha goswami " prof="Design Member"/>
         <Card img="/design-team/vaishnavi.jpg" name="Vaishnavi chouksey " prof="Design Member"/>
        </div>
      
    </div>
  )
}

export default Design
