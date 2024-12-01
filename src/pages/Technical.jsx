import React from 'react'
import Card from "../components/Card.jsx"




const Technical = () => {
  return (


   
    <div>

        {/* <Card img = "/technical-team/shayan.jpg"name="Shayan Ansari" prof="Technical Member"/>
        <Card img = "/technical-team/prajjwal.jpg"name="Prajwal Deshmukh" prof="Technical Member"/>
        <Card img = "/technical-team/muskan.jpg"name="Muskan Hotwani" prof="Technical Member"/> */}
             <div className="relative mt-20 flex justify-center items-center flex-col lg:flex-row gap-20 flex-wrap" id='team'>
               <Card img = "/technical-team/shayan.jpg"name="Shayan Ansari" prof="Technical Member"/>
               <Card img = "/technical-team/prajjwal.jpg"name="Prajwal Deshmukh" prof="Technical Member"/>
               <Card img = "/technical-team/sudhanshu.jpg"name="Sudhanshu Singh" prof="Technical Member"/>
               <Card img = "/technical-team/muskan.jpg"name="Muskan Hotwani" prof="Technical Member"/>

               <Card img = "/project/ratneshwar.jpg"name="Ratneshwar Baghel " prof="Project Team Co-Leader"/>
               <Card img = "/project/richa.jpg"name="Richa Kushwaha " prof="Project Team Member"/>
               <Card img = "/project/tanvi.png"name="Tanvi Verma " prof="Project Team Member"/>
               
             

        
    </div>
    </div>
  )
}

export default Technical
