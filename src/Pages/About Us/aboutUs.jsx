import React, { useState } from 'react';
  import './style.css'

  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/pagination'; 
  

  import Roof from './.././../assets/aboutUs/roof.png'
  import Image from './../../assets/aboutUs/image.jpg'
  import Checked from './../../assets/aboutUs/checked.png'
  import Family from './../../assets/aboutUs/family.jpg'
  import Person1 from './../../assets/aboutUs/person1.jpg'
  import Person2 from './../../assets/aboutUs/person2.jpg'
  import Person3 from './../../assets/aboutUs/person3.jpg'
import { useInView } from 'react-intersection-observer';
import TalkToPawn from '../../Components/TalkToPawn/talkToPawn';
 
  const AboutUs = () => {

    const [activeIndex, setActiveIndex] = useState(0); 

    const [ref_1,inView_1]=useInView({
      triggerOnce:true,
      threshold:0.1
    })

    const [ref_2,inView_2]=useInView({
      triggerOnce:true,
      threshold:0.1
    })

    const [ref_3,inView_3]=useInView({
      triggerOnce:true,
      threshold:0.1
    })

    const [ref_4,inView_4]=useInView({
      triggerOnce:true,
      threshold:0.1
    })

    const [ref_5,inView_5]=useInView({
      triggerOnce:true,
      threshold:0.1
    })

    const [ref_6,inView_6]=useInView({
      triggerOnce:true,
      threshold:0.1
    })

    const [ref_7,inView_7]=useInView({
      triggerOnce:true,
      threshold:0.1
    })


   return (
     <div className='greyBackground w-full '>
      {/* SECTION 1 */}
      <div className='w-11/12 mx-auto pt-5 '>
        <div className='text-5xl font-bold pb-36'>
          About Us 
        </div>

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col justify-center items-center w-full md:w-2/3 mx-auto'>
            <img src={Roof} width={60} height={30} alt="" />

            <div 
              ref={ref_1}
              className={`${inView_1?'downToUp':''} text-3xl font-bold text-center`}>
              We Believe You’re Bright
            </div>

          </div>

          {/* IMAGE */}
          <div 
            ref={ref_2}
            className={` ${inView_2?'leftToRight':''} aboutUsImageBorder rounded-2xl`}>
            <img src={Image}
              className='w-full rounded-2xl '
              alt="" 
              
              />
          </div>

          <div 
            ref={ref_3}
            className={`w-full ${inView_3?'rightToLeft':''}`}
          >
              <div className='w-full flex flex-col gap-5'>
              <div className='text-xl font-bold'>
                Our Mission
              </div>

              <div className='text-lg '>
                Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.            </div>
              </div>
              <div className='flex flex-col gap-5 mt-10'>
                <div className='flex flex-col gap-5 pl-4'>
                  <h1 className='text-xl font-bold '>Welcome to Alphaa Financial Solutions</h1>
                  <p className='leading-loose'>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.</p>
                </div>

                <div className='flex flex-col gap-5 pl-4'>
                  <h1 className='text-xl font-bold'>Our Story 🙂</h1>
                  <p className='leading-loose'> Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,<br />Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation. </p>
                </div>
              </div>

          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className='w-full' style={{backgroundColor:"#2a2c38"}}>
        <div className='w-11/12 py-10 mx-auto flex flex-col xl:flex-row gap-5 text-white'>

          <div 
            ref={ref_4}
            className={`flex-1 ${inView_4?'downToUp':''}`}> 
            <div className='flex flex-row gap-4'>
              <img src={Checked} width={30} height={30} alt="" />
              <h1 className='text-orange-400'>Why Choose Us</h1>
            </div>
          
            <div className='flex flex-col '>
              <h1 className='text-4xl font-bold'>Our Expertise</h1>
              <h1>
                Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table <br /> <br />
                Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions. <br /><br />
                Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients. <br /><br />  
                Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.
              </h1>
            </div>
          </div>

          <div 
            ref={ref_5}
            className={`aboutUsImageBorder_2 rounded-2xl flex-1  ${inView_5?'downToUp delay':''}`}
            >
            <img src={Family} className='rounded-2xl' alt="" />
          </div>
          
        </div>
      </div>


      {/* SECTION 3 */}

      <div 
        ref={ref_6}
        className={`w-full ${inView_6?'downToUp':''}`} >
          <div className='w-4/5 mx-auto mt-5'>
            <div className='w-2/3 mx-auto flex flex-row gap-2 items-center justify-center'>
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

      <TalkToPawn />
      

     </div>
   )
 }
 
 export default AboutUs