import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import axios from 'axios';

const Residence = () => {

  const [residence, setResidence] = useState({});
  const [load, setLoad] = useState(true)

  useEffect(() => {
    async function pay() {
      const redInfo = await axios.get('https://bwfc-api.vercel.app/residence');
      setResidence(redInfo.data)
      setLoad(false)

    }
    pay()
  }, []);

  if (load) {
    return <h1>Loading...</h1>
  }


  return (
    <section className='mb-[100px] mt-[10px] font-manrope '>
      <Container>
        <div className='w-full drop-shadow-res'>
          <div className='pt-[36px] pr-[34px] pb-[30px] pl-[28px] rounded-[15px] border border-[#DEE1E6} flex justify-between items-center'>
            <h3 className='text-[22px] leading-[32px] font-normal w-[830px] text-[#757095]'>
              {residence.text}
            </h3>
            <a href={residence.button.link} className='inline-block text-center w-[215px] duration-300 bg-[#FF7F5C] font-bold text-base leading-[30px] border  border-[#FF7F5C] text-white rounded-[47px] pt-4 pb-[14px] hover:bg-white hover:border-primary hover:text-primary hover:border drop-shadow-paybtn'>{residence.button.text}</a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Residence