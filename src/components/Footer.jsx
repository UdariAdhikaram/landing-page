import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Brand Info */}
          <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
            <div className="flex items-center">
              <img src="/assets/logo.png" alt="AT Digital" className="h-6 md:h-8 mr-2" />
              <span className="text-xl md:text-2xl font-bold">AT Digital</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed">
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
            </p>
          </div>

          {/* Right Columns */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-start lg:justify-end gap-4 md:gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-6">Our Technologies</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>ReactJS</li>
                <li>Gatsby</li>
                <li>NextJS</li>
                <li>NodeJS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-6">Our Services</h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                <li>Social Media Marketing</li>
                <li>Web & Mobile App Development</li>
                <li>Data & Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-4 md:my-6 lg:my-8"></div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-6 text-xs md:text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer