import React from 'react'
import Container from '../layout/Container'

const Footer = () => {
  return (
    <div >
      <section className='bg-[#1B1C31] border-b-2 border-[#404444]'>
        <Container>
          <div className='w-[100%] flex pt-[100px] '>
            <div className='w-[49%]'>
               <h3 className='text-white font-manrope font-bold text-xl mb-[18px]'>BWFC</h3>
               <p className='text-[#767783] font-manrope font-medium text-base w-[520px]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
            </div>
            <div className='w-[17%] h-[300px]'>
              <ul className='text-white font-manrope'>
                <li className='font-bold text-xl mb-[18px]'>Company</li>
                <li>About Us</li>
                <li className=' mt-[18px] mb-[18px]'>Careers</li>
                <li className=' mt-[18px] mb-[18px]'>Blog</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className='w-[17%] h-[300px]'>
                <ul className='text-white font-manrope gap-y-4'>
                  <li className='font-bold text-xl mb-[18px]'>Product</li>
                  <li>Invoicing Platform</li>
                  <li className=' mt-[18px] mb-[12px]'>Accounting Plateform</li>
                  <li className=' mt-[18px] mb-[12px]'>Create Proposal</li>
                  <li>Contracts</li>
                </ul>
            </div>
            <div className='w-[17%] h-[300px]'>
                  <ul className='text-white font-manrope'>
                    <li className='font-bold text-xl mb-[18px]'>Resources</li>
                    <li>Proposal Template</li>
                    <li className=' mt-[18px] mb-[12px]'>Invoice Template</li>
                    <li className=' mt-[18px] mb-[12px]'>Tuturoial</li>
                    <li>How to write a contract</li>
                  </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className='bg-[#1B1C31]'>
         <Container> 
          <div className='w-[100%] flex'>
          <div className=' w-[80%]'>
            <p className='text-white font-manrope pt-[19px] pb-[19px] '>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
          </div>
          <div className='w-[20%]'>
            <p className='text-white font-manrope pt-[19px] pb-[19px]'>Supported by Microsoft Startup</p>
          </div>
          </div>
         </Container>
      </section>
    </div>
  )
}

export default Footer