import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 ' id='contact'>

        <div className='flex flex-col items-center'>
            <h1 className='text-2xl text-center font-bold md:text-4xl'>
                Let&apos;s Connect!
            </h1>
            <p className='text-white-100 md:mt-10 my-5 text-center'>Reach out now and let&apos;s chat about how I can help you achieve your <span className='text-purple'>Goal</span>.</p>

            <a href="mailto:ari.zaredar11@gmail.com">
                <MagicButton 
                title='Lets get in touch'
                icon={<FaLocationArrow/>}
                position='right'

                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='text-white-100 md:text-base text-sm md:font-normal font-light'>Copyright Ⓒ 2025 Arian Zare Dar</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <a key={profile.id} 
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-10 h-10 mt-5 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 border rounded-lg border-black-300 hover:bg-purple2 transition-colors duration-300'>
                        <img src={profile.img} width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>

    </footer>
  )
}

export default Footer