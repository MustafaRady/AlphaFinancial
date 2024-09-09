import React from 'react'
import './style.css'
import location from '../../assets/footer/location.png'
import phone from '../../assets/footer/phone.png'
import telegram from '../../assets/social Media/telegram.png'
import twitter from '../../assets/social Media/twitter.png'
import whatsapp from '../../assets/social Media/whatsapp.png'
import wordpress from '../../assets/social Media/wordpress.png'
import gitlab from '../../assets/social Media/gitlab.png'

const Footer = () => {
  return (

    <div className='w-full'>
        

        <div className='w-full p-3 footer-background text-white'>

            <div className='w-4/5 mx-auto flex flex-col xl:flex-row gap-y-5 items-start justify-between gap-6'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-orange-400 font-bold'>
                        Quick Contact
                    </h1>

                    <h2>
                        At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. 
                    </h2>

                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-col gap-5 '>
                            <div className=' flex flex-row gap-5'>
                                <img src={location} height={30} width={30} alt="" />
                                <h1>Sydney, Austrailia</h1>
                            </div>

                            <div className=' flex flex-row gap-5'>
                                <img src={phone} height={30} width={30} alt="" />
                                <h1>0468328227</h1>
                            </div>
                            
                    </div>

                        
                    </div>
                </div>
                

                <div className='flex flex-col gap-3 p-4 rounded-xl black-box text-white text-sm'>
                        <h1 className='text-base font-bold '>Opening Hours</h1>
                        <div className='flex flex-col gap-4'>
                            <h1><span className='text-orange-400'>MON TO FRI</span> <span style={{
                                color:'#585855'
                            }}>........................</span> 9:00 AM | 5:00 PM</h1>
                            <h1> <span className='text-orange-400'>SAT TO SUN </span> <span style={{
                                color:'#585855'
                            }}>........................</span>  APPOINTMENTS ONLY </h1>
                            <div className='schedule-button text-center p-2 font-semibold rounded-md cursor-pointer'>
                                SCHEDULE A VISIT
                            </div>
                        </div>

                </div>
                
                
            </div>

                    
            <div className='flex flex-col gap-2 pt-3'>
                <hr className='bg-black h-0.5' />
                <hr className='bg-black h-0.5' />
            </div>
            
            <div className='w-full flex flex-col gap-5 md:flex-row p-4 justify-between items-center'>
                <div className='flex flex-row gap-3'>
                    <div className='p-2 socialMedia rounded-md'>
                        <img src={twitter} className='w-16' alt="" />
                    </div>
                    
                    <div className='p-2 socialMedia rounded-md'>
                        <img src={telegram} className='w-16' alt="" />
                    </div>

                    <div className='p-2 socialMedia rounded-md'>
                        <img src={wordpress} className='w-16' alt="" />
                    </div>

                    <div className='p-2 socialMedia rounded-md'>
                        <img src={whatsapp} className='w-16' alt="" />
                    </div>
                    <div className='p-2 socialMedia rounded-md'>
                        <img src={gitlab} className='w-16' alt="" />
                    </div>
                </div>

                <div className=''>
                    <h1 className='text-xs'>
                    2024 © All Rights Reserved | Developed with by Psyber Inc                    </h1>
                </div>
            </div>
        </div>  
    </div>
    
  )
}


export default Footer