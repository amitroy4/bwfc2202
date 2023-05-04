import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import axios from 'axios';

const Choose = () => {
  const [choose, setChoose] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function choose() {
      const chooseInfo = await axios.get('https://bwfc-api.vercel.app/choose')
      setChoose(chooseInfo.data)
      setLoad(false)
    }
    choose()
  }, []);

  if (load) {
    return <h1>Loading...</h1>
  }
  

  return (
    <section className='font-manrope'>
      <Container>
        <div className='w-full bg-secondary pt-[56px] rounded-[20px] pl-[81px] pr-[81px] pb-[58px] relative'>
          <h4 className='uppercase font-extrabold text-[18px] text-primary text-center'>{choose.subTitle}</h4>
          <h1 className='font-bold text-[50px] text-center pt-[14px]'>{choose.title}</h1>
          <div className='flex justify-between flex-wrap mt-[79px] gap-y-[40px]'>
            {choose.items.map((citems) => (
              citems.visibility && <div className='w-[48%] bg-white pt-[59px] pb-[37px] pl-[120px] pr-[47px] rounded-[20px] relative'>
                <h3 className='font-extrabold text-[24px]'>{citems.title}</h3>
                <p className='font-normal text-[18px] pt-[22px]'>{citems.details}</p>

                <div style={{backgroundColor: true ?  citems.circleColor: ' '}} className={`h-[58px] w-[58px] rounded-full  absolute top-[59px] left-[30px]`} ></div>
              </div>

            ))}
          </div>
          <div className='absolute left-[75px] -top-[31px] w-[100px]'>
            <img className='w-full' src='images/46.png' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Choose