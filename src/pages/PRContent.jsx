import React from 'react'
import Card from "../components/Card.jsx"

const PRContent = () => {
  return (
    <div>
             <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20" >
              <Card img="/content-team/mohan.jpg" name="Mohan Sahu " prof="PRContent Member"/>
              <Card img="/content-team/aswathi.jpg" name="Ashwathi A Nair  " prof="PRContent Member"/>
              </div>
      
    </div>
  )
}

export default PRContent
