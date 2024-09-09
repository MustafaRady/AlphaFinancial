import React , {useState} from 'react'
import Person1 from './../../assets/faqs/person1.jpg'
import Person2 from './../../assets/faqs/person2.jpg'
import Person3 from './../../assets/faqs/person3.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const Swipper = () => {
    const [activeIndex, setActiveIndex] = useState(0); 
    
  return (
    <div>

        {/* SECTION 3 */}
        <div className='w-4/5 mx-auto mt-5'>
                <div className='w-2/3 mx-auto flex md:flex-row flex-col gap-2 items-center justify-center'>
                    <img src={Person1} className="w-24 h-24 aboutUsImageBorder rounded-xl" alt="" />
                    <img src={Person2} className="w-24 h-24 aboutUsImageBorder_2 rounded-xl" alt="" />
                    <img src={Person3} className="w-24 h-24 aboutUsImageBorder rounded-xl" alt="" />
                </div>
            </div>
   
            <Swiper
                className='mt-10'
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                speed={500}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use realIndex for looping
                autoplay={{ delay: 3000 }}
                >
                <SwiperSlide>
                    <div className='w-2/3 mx-auto text-center  flex flex-col gap-y-6'>
                        <div className='w-full bg-white p-4'>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                        </div>
                        
                        <div>
                        <h1>John Doe</h1>
                        <h1>CEO</h1>
                        </div>
        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-2/3 mx-auto text-center  flex flex-col gap-y-6'>
                        <div className='w-full bg-white p-4'>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                        </div>
                        
                        <div>
                        <h1>John Doe</h1>
                        <h1>CEO</h1>
                        </div>
        
                    </div>
                </SwiperSlide>            
                <SwiperSlide>
                    <div className='w-2/3 mx-auto text-center  flex flex-col gap-y-6'>
                        <div className='w-full bg-white p-4'>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
                        </div>
                        
                        <div>
                        <h1 className='font-bold'>John Doe</h1>
                        <h1 className='text-sm font-bold'>CEO</h1>
                        </div>
        
                    </div>
                </SwiperSlide>           
            </Swiper>
   
            {/* Displaying the current index */}
            <div className="text-center mt-4 pb-10">
                <p>{(activeIndex +1) } / 3 </p>
            </div>
    </div>
  )
}

export default Swipper