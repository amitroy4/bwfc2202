import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import axios from 'axios';

const Finance = () => {
  const [finance, setFinance] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function finance() {
      const financeInfo = await axios.get('https://bwfc-api.vercel.app/finance');
      setFinance(financeInfo.data)
      console.log()
      setLoad(false)
    }
    finance()
  }, []);

  if (load) {
    return <h1>Loading...</h1>
  }
  return (
    <section>
      <Container>
        <div className='flex flex-row'>
          <div class="basis-1/2">
            <h4 className='text-primary manrope uppercase text-lg font-extrabold mb-6'>{finance.sunbTitle}</h4>
            <h1 className='manrope text-[50px] font-bold w-[550px] leading-[56px] mb-7'>{finance.heading}</h1>
            <p className='manrope text-[18px] font-regular w-[500px] text-[#757095]'>{finance.paragraph}</p>
            <button href={finance.button.text} className='inline-block text-center mt-7 w-[162px] rounded-lg bg-primary text-white py-[14px] font-bold text-base leading-[30px] border border-primary hover:bg-white hover:text-primary duration-300 drop-shadow-accbtn'>{finance.button.text}</button>
          </div>
          <div class="basis-1/2">
            <img className='w-full' src={finance.image} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Finance