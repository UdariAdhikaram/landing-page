import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

const Home = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden">

      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="/assets/Hero Section.png"
          alt="AT Digital Home"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Rectangle - Full Width on Mobile/Tablet */}
        <div className="absolute bg-gradient-to-r from-[#78BF91] to-[#1CBDDD] opacity-90 flex flex-col items-start p-6
               w-full md:w-[calc(100%-160px)] lg:max-w-[630px] 
               top-1/2 left-0 md:left-[80px] transform -translate-y-1/2 md:transform-none
               h-auto min-h-[200px] md:h-[306px] gap-4 md:gap-5">
          <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-[110%] tracking-tight capitalize px-4 md:px-0">
            We crush your competitors, goals, and sales records - without the B.S.
          </p>
          <button className="bg-[#F28D35] text-white text-sm md:text-base font-medium rounded w-[200px] md:w-[214px] h-[38px] ml-4 md:ml-0">
            Get free consultation
          </button>
        </div>
      </div>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center mx-auto px-4 sm:px-6 lg:px-0 
                      w-full lg:w-[1064px] gap-8 md:gap-12 my-12 md:my-20 lg:my-[100px]">
        <div className="w-full lg:flex-1 h-[300px] md:h-[350px] lg:h-[414px]">
          <img src="/assets/image 2.png" alt="Web Development" className="w-full h-full object-cover" />
        </div>
        <div className="w-full lg:flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1E1E1E] mb-4 md:mb-6">
            Web & Mobile App Development
          </h2>
          <p className="text-sm md:text-base text-[#4E4E4E] leading-relaxed md:leading-[25px] mb-6">
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
          </p>
          <button className="bg-[#F28D35] text-white text-sm md:text-base font-medium rounded w-full md:w-[214px] h-[38px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row items-center mx-auto px-4 sm:px-6 lg:px-0 
                      w-full lg:w-[1064px] gap-8 md:gap-12 mb-12 md:mb-20 lg:mb-[100px]">
        <div className="w-full lg:flex-1 order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#1E1E1E] mb-4 md:mb-6">
            Digital Strategy Consulting
          </h2>
          <p className="text-sm md:text-base text-[#4E4E4E] leading-relaxed md:leading-[25px] mb-6">
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
          </p>
          <button className="bg-[#F28D35] text-white text-sm md:text-base font-medium rounded w-full md:w-[214px] h-[38px]">
            Learn More
          </button>
        </div>
        <div className="w-full lg:flex-1 h-[300px] md:h-[350px] lg:h-[414px] order-1 lg:order-2">
          <img src="/assets/image 1.png" alt="Digital Strategy" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mx-auto px-4 sm:px-6 lg:px-0 w-full lg:w-[1064px] text-center mb-12 md:mb-20 lg:mb-[100px]">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#4F46E5] mb-8 md:mb-12">
          Frequently asked questions
        </h2>
        <div className="text-left space-y-4 md:space-y-6 lg:space-y-8">
          {/* FAQ Item 1 */}
          <div className='bg-[#FAF8FF] p-6 rounded-lg'>
            <div className="flex justify-between items-start">
              <h3 className="text-[24px] font-bold text-[#4F46E5] mb-3 flex-1">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              </h3>
              <span className="text-[24px] font-bold text-[#4F46E5] ml-4">-</span>
            </div>
            <p className="text-[16px] text-[#6F6C90] leading-[25px]">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className='bg-[#FAF8FF] p-6 rounded-lg'>
            <div className="flex justify-between items-center">
              <h3 className="text-[24px] font-bold text-[#1E1E1E] flex-1">
                Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
              </h3>
              <span className="text-[24px] font-bold text-[#1E1E1E] ml-4">+</span>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className='bg-[#FAF8FF] p-6 rounded-lg'>
            <div className="flex justify-between items-center">
              <h3 className="text-[24px] font-bold text-[#1E1E1E] flex-1">
                Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
              </h3>
              <span className="text-[24px] font-bold text-[#1E1E1E] ml-4">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home