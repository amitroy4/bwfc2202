import axios from "axios"
import React, {useEffect,useState} from "react"

const Feature = () => {
  let [FeatureData , setFeatureData] = useState({})
  let [loading , SetLoading] = useState(true)

  useEffect(()=> {
    async function fea(){
      let feature = await axios.get("https://bwfc-api.vercel.app/feature")
      setFeatureData(feature.data)
      SetLoading(false)  
    } 
    fea()
  },[])

  if(loading){
    return
  }

  return (
    <div className='mt-24 p-[80px] bg-no-repeat bg-center bg-cover'style={{backgroundImage : `url(${FeatureData.featureShape}`}}>
    <div className='max-w-container mx-auto'>
        <div className='flex gap-x-[60px]'>
            <div className='w-2/4'>
            <img src={FeatureData.featureImage} className='max-w-none ml-[-71px]'/>
            </div>
            <div className='w-2/4 mt-[20px]'>
                <h3 className='font-manrope text-lg font-extrabold text-primary mb-6'>{FeatureData.subTitle}</h3>
                <h2 className='font-manrope text-[50px] font-bold leading-[56px] tracking-[-3px] mb-9'>{FeatureData.title}</h2>
                <p className='font-manrope text-lg text-[#757095] font-normal leading-[26px] tracking-[2px] mb-[27px] w-[638px]'>{FeatureData.paragraph}</p>
                  <a href="#" className='bg-primary py-[17px] px-[35px] inline-block ml-[10px] text-white font-manrope font-sm font-semibold rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition ease-in-out duration-300'>{FeatureData.button.text}</a>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Feature