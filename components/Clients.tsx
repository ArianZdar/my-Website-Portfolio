import React from 'react'
import { InfiniteMovingCards } from './ui/Infinite-moving-cards'
import { smallProjects } from '@/data'


const Clients = () => {
  return (

    <div className='py-20' id='other'>
        <h1 className='heading'>
            Some other projects
            <span className='text-purple'> in detail </span>
        </h1>
        <div className='flex flex-col items-center max-lg:mt-10'>
            <div className=' flex flex-col h-[50vh] md:h-[30rem] rounded-md relative antialiased overflow-hidden '>
                <InfiniteMovingCards 
                    items={smallProjects}
                    direction='right'
                    className='mt-10 '
                    speed='slow'
                />
            </div>
        </div>
    </div>


  )
}

export default Clients