import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import axios from 'axios';

const Payment = () => {
  
  const [payment, setPayment] = useState({});
  const [load,setLoad] = useState(true)

  useEffect(() => {
    async function pay(){
      const payInfo = await axios.get('https://bwfc-api.vercel.app/payment');
      setPayment(payInfo.data)
      setLoad(false)

    }
    pay()
  }, []);

  if (load){
    return <h1>Loading...</h1>
  }


  return (
    <section className='mt-9 mb-[100px] font-manrope box-border'>
      <Container>
        <div className=' relative pt-[75px] pr-28 pl-[70px] pb-[71px] bg-[#F3F7FA] rounded-[20px] flex flex-wrap justify-between'>
          <div className='absolute right-0 -top-[17px]'>
            <img src={payment.paymentShape}/>
          </div>
          <div>
            <h4 className='font-extrabold uppercase text-lg text-primary mb-6'>{payment.subTitle}</h4>
            <h2 className='font-bold text-[50px] leading-[56px] text-black w-[560px] mb-9'>{payment.title}</h2>
            <p className='w-[515px] text-[18px] leading-[26px] text-[#757095] font-normal'>{payment.paragraph}</p>
          </div>
          <div className='w-[360px]'>
            <h4 className='font-bold text-2xl leading-[30px] text-primary mb-6'>Get Started for Free</h4>
            <input className='block w-full pt-[18px] pl-5 pb-3 pr-4 rounded-md text-xl leading-[30px] font-normal text-[#292929] placeholder:text-lg placeholder:font-normal placeholder:text-[#C1BFCB] ' type='text' placeholder='Email Address'/>
            <input className='block w-full pt-[18px] mt-6 mb-6 pl-5 pb-3 pr-4 rounded-md text-xl leading-[30px] font-normal text-[#292929] placeholder:text-lg placeholder:font-normal placeholder:text-[#C1BFCB] ' type='password' placeholder='Password'/>
            <a href='#' className='inline-block text-center w-full duration-300 bg-[#FF7F5C] font-bold text-base leading-[30px] border  border-[#FF7F5C] uppercase text-white rounded-md pt-4 pb-[14px] hover:bg-white hover:border-primary hover:text-primary hover:border drop-shadow-paybtn'>Get Started</a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Payment