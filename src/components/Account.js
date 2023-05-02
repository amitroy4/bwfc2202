import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Container from '../layout/Container';


const Account = () => {

  const [accountinfo, setAccountinfo] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {

    async function account() {
      const account = await axios.get('https://bwfc-api.vercel.app/account')
      setAccountinfo(account.data)
      setLoad(false)
    }
    account()

  }, []);

  if (load) {
    return <h1>Loading.....</h1>
  }


  return (
    <section className=' pb-3 box-border'>
      <Container>
        <div className='flex flex-wrap justify-between font-manrope'>
          <div>
            <h4 className='uppercase font-extrabold text-lg text-primary mb-6'>{accountinfo.subTitle}</h4>
            <h2 className='font-bold text-[50px] leading-[56px] text-black w-[550px] mb-7'>{accountinfo.title}</h2>
            <p className='w-[515px] text-[18px] leading-[26px] text-[#757095] font-normal'>{accountinfo.paragraph}</p>
            <a href={accountinfo.button.link} className='inline-block text-center mt-7 w-[162px] rounded-lg bg-primary text-white py-[14px] font-bold text-base leading-[30px] border border-primary hover:bg-white hover:text-primary duration-300 drop-shadow-accbtn'>{accountinfo.button.text}</a>
          </div>
          <div className='w-[590px]'>
            <img className='w-full' src={accountinfo.accountImage} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Account