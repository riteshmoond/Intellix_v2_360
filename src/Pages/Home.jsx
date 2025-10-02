import React from 'react'
import BookImage from '../assets/Hed.9b20b31ec2579a636c6c.png'
import Slider from '../component/Slider'

const Home = () => {
  return (
     <>
    <div className="flex flex-col md:flex-row justify-around items-center min-h-[80vh] rounded-2xl p-4 md:p-10 box-border">
      {/* Left Side: Text and Features */}
      <div className="w-full md:max-w-[50%] mb-8 md:mb-0">
        <h1 className="text-[#f90909] text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 md:mb-6">
          Say Hii, <b>To World’s First AI<br className="hidden md:block" />
          Powered Inclusive Solution</b> for<br className="hidden md:block" />
          your Educational Institute
        </h1>

        <div className="flex flex-col gap-2 md:gap-3 mb-2">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <span className="flex items-center bg-white rounded-xl px-3 py-2 text-sm md:text-base font-medium shadow-sm">
              <span className="text-green-500 mr-2">✔</span>
              Automatic Fees Collection system
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <span className="flex items-center bg-white rounded-xl px-3 py-2 text-sm md:text-base font-medium shadow-sm">
              <span className="text-green-500 mr-2">✔</span>
              Free To Use
            </span>
            <span className="flex items-center bg-white rounded-xl px-3 py-2 text-sm md:text-base font-medium shadow-sm">
              <span className="text-green-500 mr-2">✔</span>
              Real Time AI Powered Analytics
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
            <span className="flex items-center bg-white rounded-xl px-3 py-2 text-sm md:text-base font-medium shadow-sm">
              <span className="text-green-500 mr-2">✔</span>
              HR & Payroll Automation
            </span>
            <span className="flex items-center bg-white rounded-xl px-3 py-2 text-sm md:text-base font-medium shadow-sm">
              <span className="text-green-500 mr-2">✔</span>
              Automatic Attendance System
            </span>
          </div>
        </div>

        <div className="text-[#6b7280] mb-4 md:mb-6 mt-2 text-sm md:text-base">and much more...</div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <button className="bg-white text-black border border-black rounded-lg px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-gray-100 transition">
            View All Features
          </button>
          <button className="bg-black text-white rounded-lg px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium hover:bg-[#222] transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Side: Single Centered Image */}
      <div className="flex items-center justify-center w-full md:w-[420px] h-[280px] sm:h-[350px] md:h-[600px] flex-shrink-0">
        <img
          src={BookImage}
          alt="Book"
          className="max-w-full max-h-full h-[220px] sm:h-[320px] md:h-[470px] rounded-[20px] object-contain"
        />
      </div>
    </div>

   
      <Slider/>
    </>
  )
}

export default Home
