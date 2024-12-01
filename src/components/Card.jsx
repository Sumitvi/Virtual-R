import React from 'react'

const Card = (props) => {
  return (
    <div>

    
    <div className="flex w-[300px] h-[350px]   rounded-sm bg-neutral-900 flex-col text-center flex-wrap lg:flex-row">
           <div className="flex flex-col mx-auto mt-5">
           <img src={props.img} alt="user1" className='w-[200px] h-[200px] rounded-md items-center mx-auto mt-4' />
            <h1 className='text-center mx-auto mt-4'>{props.name}</h1>
            <p className='mx-auto text-orange-400'>{props.prof}</p>
            
           </div>
        </div>




    </div>

  )
}

export default Card
