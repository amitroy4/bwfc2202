import React from 'react'
import Container from '../layout/Container'

const Track = () => {
  return (
    <div>
      <section>
        <Container>
          <div className='flex w-full justify-between pt-[91px] pb-[58px] pl-[124px] pr-[210px] bg-[#3734A9] '>
            <div className='' >
              <h4 className='text-white font-manrope font-bold text-sm uppercase'>Why Choose Us</h4>
              <h2 className='text-white font-manrope font-extrabold leading-[60px] text-5xl w-[528px] mt-[13px] mb-[29px]'>Track your crytpo portfolio on the best way possible</h2>
              <p className='text-white font-manrope font-regular text-lg w-[446px]'>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
            </div>
            <form className='' >
              <input className=' w-[371px] h-[60px] bg-[#5C5AB8] rounded-md mt-[35px] pl-[21px] placeholder:text-manrope placeholder:text-[#BBB5E0]' type='email' placeholder="Email Address"></input>
              <input className='placeholder:text-manrope placeholder:text-[#BBB5E0] w-[371px] h-[60px] bg-[#5C5AB8] rounded-md mt-[24px] mb-[24px] pl-[21px]' type='password' placeholder="Password "></input>
              <button className='w-[371px] h-[60px] font-manrope text-white bg-[#FF7F5C] rounded-md'>Get Started</button>
            </form>
          </div>
        </Container>
        
      </section>
    </div>
  )
}

export default Track