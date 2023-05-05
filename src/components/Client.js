import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import axios from 'axios';
import { BsArrowRight,BsArrowLeft } from "react-icons/bs";

const Client = () => {

  const [client, setClient] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function client() {
      const clientInfo = await axios.get('https://bwfc-api.vercel.app/client');
      setClient(clientInfo.data)
      setLoad(false)

    }
    client()
  }, []);

  if (load) {
    return <h1>Loading...</h1>
  }


  return (
    <section className='font-manrope pb-[80px]'>
      <Container>
        <div>
          <div>
            <h4 className='text-[14px] font-bold mb-[13px] uppercase'>{client.subTitle}</h4>
            <h2 className='text-[40px] font-extrabold leading-[48px] w-[400px] mb-[40px]'>{client.title}</h2>
          </div>
          <div className='flex justify-between'>
            <div className='w-[670px]'>
              <img className='w-full' src={client.sliderItem[0].image}/>
            </div>
            <div className='w-[460px]'>
              <img src='images/comma.png' />
              <h3 className='w-[290px] mt-[16px] text-[20px] leading-[30px] font-extrabold'>{client.sliderItem[0].heading}</h3>
              <p className='text-[16px] font-normal leading-[24px] text-[#757095 mt-[16px]'>{client.sliderItem[0].paragraph}</p>
              <ul className='flex gap-x-[5px] mt-[14px]'>
                  <li><img src='images/Star 7.png'/></li>
                  <li><img src='images/Star 7.png'/></li>
                  <li><img src='images/Star 7.png'/></li>
                  <li><img src='images/Star 7.png'/></li>
                  <li><img src='images/Star 7.png'/></li>
                  
              </ul>
              <h3 className='text-base font-extrabold leading-[30px] mt-[5px]'>{client.sliderItem[0].name}</h3>
              <h4 className='text-[14px] font-normal leading-[24px] mt-[1px] text-[#757095]'>{client.sliderItem[0].designation}</h4>
            </div>
          </div>
          <div className='ml-[43px] mt-[35px]'>
            <ul className='flex gap-x-[10px]'>
              <li className='w-[33px] h-[33px] rounded-full group hover:bg-primary duration-300 flex items-center justify-center cursor-pointer'><BsArrowLeft className='group-hover:text-white'/></li>
              <li className='w-[33px] h-[33px] rounded-full group hover:bg-primary duration-300 flex items-center justify-center cursor-pointer'><BsArrowRight className='group-hover:text-white'/></li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Client