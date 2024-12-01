import React from 'react'
import Card from "../components/Card.jsx"

const Operational = () => {
  return (
    <div>
      <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20" >

        <Card img="/operation-team/ankit.jpg" name="Ankit Vishwakarma" prof="Operation Team Member"/>
        <Card img="/operation-team/miti.jpg" name="Miti Jain" prof="Operation Team Member"/>
        <Card img="/operation-team/raksha.jpg" name="Raksha Sanodiya " prof="Operation Team Member"/>
      </div>

    </div>
  )
}

export default Operational
