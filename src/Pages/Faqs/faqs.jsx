import React, { useState } from 'react';
import './style.css'

import { useInView } from 'react-intersection-observer';

  
import Image1 from './../../assets/faqs/image1.jpg'

import Plus from './../../assets/faqs/plus.png'
import Minus from './../../assets/faqs/minus.png'   
import Image2 from './../../assets/faqs/image2.jpg'
import Play from './../../assets/faqs/play.png'
import Control from './../../assets/faqs/control.png'
import Image3 from './../../assets/faqs/image3.jpg'
import Swipper from '../../Components/Swipper/swipper';

const Faqs = () => {

    const [ref_1, inView_1] = useInView({
        triggerOnce: true,  
        threshold: 0.1,     
    });

    const [ref_2, inView_2] = useInView({
        triggerOnce: true,  
        threshold: 0.1,     
    });

    const [ref_3, inView_3] = useInView({
        triggerOnce: true,  
        threshold: 0.1,     
    });

    const [ref_4, inView_4] = useInView({
        triggerOnce: true,  
        threshold: 0.1,     
    });


    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='greyBackground w-full '>
         {/* SECTION 1 */}
            <div className='w-11/12 mx-auto pt-5 '>
                <div className='text-5xl font-bold pb-12'>
                    FAQ'S
                </div>
            </div>

            <div className='w-full relative'>
                {/* Image with reduced opacity */}
                <img src={Image1} className='w-full h-full object-cover opacity-65' alt="" />

                
                <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50' />
                
                
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                    <h1 
                        ref={ref_1}
                        className={`font-bold text-white text-6xl ${inView_1?'animate-moveUp':'opacity-0'}`}
                        
                    >FAQ'S</h1>
                </div>
            </div>

            <div 
                ref={ref_2}
                className={`${inView_2?'downToUp':''} flex flex-col xl:flex-row gap-6 w-11/12 mx-auto my-5`}>
                <div className='flex flex-col gap-5'>
                    <div className={`w-11/12 mx-auto mt-10 flex flex-col gap-4 '`}>
                        <h1 className='text-xl md:text-3xl font-bold'>
                            Learn about rates & mortgages
                        </h1>
                        <p className='text-sm md:text-lg'>
                            As someone who is interested in the world of finance and real estate, you may find it beneficial to dive deeper into the topic of rates and mortgages.
                        </p>

                    </div>

                    <div className={`flex flex-col w-11/12 mt-4 mx-auto bg-white `}>
                        <div className='flex flex-row  justify-between items-center p-4'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1 className={`text-sm md:text-xl font-bold ${expandedIndex === 0 ? 'text-orange-400':''} `}>What is a mortgage rate?</h1>
                                
                                {expandedIndex === 0 && (
                                <hr/>
                                )}
                            </div>
                            
                            <img 
                                src={`${expandedIndex === 0 ? Minus : Plus }`}  
                                alt="" 
                                onClick={() => handleToggle(0)} 
                                className={`cursor-pointer w-4 h-4 md:w-6 md:h-6`}
                            />
                        </div>
                        {expandedIndex === 0 && (
                            <div className='p-4 animation'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        )}
                        <hr />

                        <div className='flex flex-row justify-between p-4'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1 className={`text-sm md:text-xl font-bold ${expandedIndex === 1 ? 'text-orange-400':''} `}>Is a variable rate better than a fixed rate?</h1>
                                {expandedIndex === 1 && (
                                <hr/>
                                )}
                            </div>
                            <img 
                                src={`${expandedIndex === 1 ? Minus : Plus}`} 
                                alt="" 
                                onClick={() => handleToggle(1)} 
                                className={`cursor-pointer w-4 h-4 md:w-6 md:h-6`}
                            />
                        </div>
                        {expandedIndex === 1 && (
                            <div className='p-4 animation'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        )}
                        <hr />

                        <div className='flex flex-row justify-between p-4'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1 className={`text-sm md:text-xl font-bold ${expandedIndex === 2 ? 'text-orange-400':''} `}>How do I lock my mortgage rate?</h1>
                                {expandedIndex === 2 && (
                                <hr/>
                                )}
                            </div>
                            
                            <img 
                                src={`${expandedIndex === 2 ? Minus : Plus}`} 
                                alt="" 
                                onClick={() => handleToggle(2)} 
                                className={`cursor-pointer w-4 h-4 md:w-6 md:h-6`}
                            />
                        </div>
                        {expandedIndex === 2 && (
                            <div className='p-4 animation'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        )}
                        <hr />

                        <div className='flex flex-row justify-between p-4'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1 className={`text-sm md:text-xl font-bold ${expandedIndex === 3 ? 'text-orange-400':''} `}>What is a mortgage rate hold?</h1>
                                {expandedIndex === 3 && (
                                <hr/>
                                )}
                            </div>
                            
                            <img 
                                src={`${expandedIndex === 3 ? Minus : Plus}`} 
                                alt="" 
                                onClick={() => handleToggle(3)} 
                                className={`cursor-pointer w-4 h-4 md:w-6 md:h-6`}
                            />
                        </div>
                        {expandedIndex === 3 && (
                            <div className='p-4 animation'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        )}
                        <hr />

                        <div className='flex flex-row justify-between p-4'>
                            <div className='w-full flex flex-col gap-2'>
                                <h1 className={`text-sm md:text-xl font-bold ${expandedIndex === 4 ? 'text-orange-400':''} `}>How often do mortgage rates change?</h1>
                                {expandedIndex === 4 && (
                                <hr/>
                                )}
                            </div>
                            
                            <img 
                                src={`${expandedIndex === 4 ? Minus : Plus}`} 
                                alt="" 
                                onClick={() => handleToggle(4)} 
                                className={`cursor-pointer w-4 h-4 md:w-6 md:h-6`}
                            />
                        </div>
                        {expandedIndex === 4 && (
                            <div className='p-4 animation'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        )}
                        <hr />
                    </div>
                </div>

                {/* VideoSection */}
                <div className='relative rounded-xl w-11/12 mx-auto'>
                        <img 
                            className='rounded-xl h-full'
                            src={Image2} 
                            alt="" />
                        
                        <div className='absolute top-0 right-0 p-8 bg-orange-400 borderVideo flex flex-col justify-center items-center gap-5 hover:bg-white hover:text-black cursor-pointer'>
                            <img src={Play} width={30} height={30} alt="" />
                            <h1 className='font-bold'>
                                Watch Video
                            </h1>
                        </div>
                </div>
            </div>
   
            <div 
                ref={ref_3}
                className={`${inView_3?'downToUp':''} w-full backgroundColor py-6 `}>
                <div className=' w-11/12 mx-auto  flex flex-col gap-5 items-center'>
                    <div className='flex flex-col gap-3 items-center py-3'>
                        <div className='bg-orange-400 p-5 w-4'>

                        </div>
                        <h1 className={`text-orange-400 font-bold ${inView_3?'downToUp':''}`}>
                            Your Mortgage Down Payment
                        </h1>
                    </div>

                    <div className='text-white font-bold text-2xl'>
                            How To Navigate Our Mortgage Rates
                    </div>

                    <div className={`flex flex-col xl:flex-row gap-x-4 ${inView_3?'downToUp':''}`}>
                        <div className='flex flex-col gap-4 p-4 px-12 text-white items-center bocBackground rounded-lg'>
                            <div className='bg-orange-400 p-5 w-4 '>
                            </div>

                            <h1 className='text-2xl font-bold text-center'>
                                You Use Your Property
                            </h1>

                            <p className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4 p-4 px-12 text-white items-center bocBackground rounded-lg '>

                            <div className='bg-orange-400 p-4'>
                                <img 
                                    src={Control} 
                                    alt=""
                                    width={30}
                                    height={30} 
                                />
                            </div>
                        

                            <h1 className='text-2xl font-bold text-center'>
                                The Type Of Mortgage
                            </h1>

                            <p className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>

                        <div className='flex flex-col gap-4 p-4 px-12 text-white items-center bocBackground rounded-lg'>
                            <div className='bg-orange-400 p-5 w-4 '>
                            </div>

                            <h1 className='text-2xl font-bold text-center'>
                                With Fixed Mortgage
                            </h1>

                            <p className='text-center'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>

                    

                </div>
            </div>
            
            <div 
                ref={ref_4}
                className={`${inView_4?'downToUp':''} w-full mt-10 rounded-xl`}>
                <div className='w-2/3 rounded-lg flex flex-col  mx-auto'>
                    <img src={Image3} alt="" className='rounded-t-xl' />

                    <div className='bg-orange-400 p-5 rounded-b-xl'>
                        <div className='w-11/12 mx-auto flex flex-col gap-4 '>
                            <div className='flex flex-row gap-2'>
                                <div className='bocBackground p-3'>

                                </div>

                                <h1>
                                    Online Booking
                                </h1>
                            </div>

                            <div className='text-xl font-bold'>
                                Contact Us To Start Saving Time And Money
                            </div>

                            <form className='flex flex-col gap-4'>
                                <div className='w-full flex flex-col md:flex-row  gap-10 items-center font-bold '>
                                    <input type="text" placeholder='Name' className=' flex-1 rounded-sm p-2'  />
                                    <input type="text" placeholder='Email' className=' flex-1 rounded-sm p-2' />
                                </div>

                                <div className='w-full flex flex-col md:flex-row  gap-10 items-center font-bold '>
                                    <input type="text" placeholder='Subject' className='flex-1 rounded-sm p-2'  />
                                    <div className='buttonSubmit bocBackground text-white flex-1 p-2 rounded-sm'>
                                        MAKE AN APPOINTMENT
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Swipper/>
            
        </div>
      )
}

export default Faqs