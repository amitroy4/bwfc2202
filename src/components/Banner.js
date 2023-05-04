import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../layout/Container'
import { AiFillPlayCircle } from "react-icons/ai";


const Banner = () => {

  let [BannerData, setBannerData] = useState({})
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    async function ban() {
      let banner = await axios.get("https://bwfc-api.vercel.app/banner")
      setBannerData(banner.data)
      setLoading(false)
    }
    ban()
  }, [])


  if (loading) {
    return <h1>Loading.....</h1>
  }

  return (
    <section>
      <div style={{ backgroundImage: `url(${BannerData.bannerbgshape}` }} className='w-full mt-[78px]'>
        <Container>
          <div className='flex justify-between'>
            <div className='w-[50%]'>
              <h1 className='font-manrope w-[646px] font-extrabold text-[60px] mt-[96px]'>{BannerData.bannerheading}</h1>
              <p className='font-manrope w-[465px] font-regular text-[20px]'>{BannerData.bannerparagraph}</p>
              <a href='#' className='inline-block text-center w-[162px] duration-300 bg-primary font-manrope font-bold text-base leading-[30px] border  border-primary text-white rounded-[50px] pt-4 pb-[14px] hover:bg-white hover:border-primary hover:text-primary hover:border drop-shadow-paybtn'>{BannerData.bannerButton.text}</a>
              <p className='inline-block text-center w-[210px] duration-300 font-manrope font-bold text-base leading-[30px]  text-primary pt-4 pb-[14px] ml-[50px]'><AiFillPlayCircle className='w-[60px] h-[60px] text-[#22D497] inline-block mr-[11px]' />{BannerData.video.text}</p>
            </div>
            <div className='w-[50%]'>
              <picture>
                <img className='w-full' src={BannerData.bannerrightimg} />
              </picture>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Banner