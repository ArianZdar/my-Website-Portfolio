import React from 'react'
import { projects } from '@/data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'


const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            Small selection of {''}
            <span className='text-purple'>Recent Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, img, des, iconLists, link})=>(
                <div key={id} className='lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] sm:w-[570px] flex 
                items-center justify-center w-[80vw]'>
                    
                    <PinContainer title={link} href={link}>
                        <div className='relative sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] mb-10 flex items-center justify-center'>
                            <div className='relative w-full h-full  overflow-hidden lg:rounded-3xl bg-[#13162D] opacity-20'>
                                <img src="/bg.png" alt="bg-img"/>
                            </div>
                            <img src={img} alt={title} className='absolute z-10 bottom-0'/>
                        </div>
                        <h1 className='font-bold text-base line-clamp-1 mb-2'>
                            {title}
                        </h1>

                        <p className='flex text-sm lg:text-m lg:font-normal font-light line-clamp-2 overflow-hidden'>
                            {des}
                        </p>

                        <div className='flex justify-between mt-7 mb-3 items-center'>
                            <div className='flex items-center'>
                                {iconLists.map((icon)=>(
                                    <div key={icon} className='border border-white[0.1] bg-black flex justify-center items-center rounded-full w-8 h-8 sm:w-10 sm:h-10'>
                                        <img src={icon} alt={icon} className='p-2'/>
                                    </div>
                                ))}  
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='text-purple text-sm md:text-sx lg:text-m'>
                                    Check Out Site
                                </p>
                                <FaLocationArrow className='ms-3 text-purple size-3'/>
                            </div>
                        </div>

                    </PinContainer>

                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects