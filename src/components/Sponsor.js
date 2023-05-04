
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Sponsor = () => {
  let [companyData , setCompanyData] = useState({})
    let [loading , SetLoading] = useState(true)

    useEffect(()=>{ 
        async function com(){
            let company = await axios.get("https://bwfc-api.vercel.app/sponsor")
            setCompanyData(company.data)
            SetLoading(false)
        }
        com()
    },[])

    if(loading){
        return
    }
  return (
    <div className='max-w-container mx-auto'>
      <h2 className='font-manrope text-[22px] text-[#000] font-normal text-center mt-[71px]'>{companyData.title}</h2>
      <div className='flex justify-center gap-x-12 mt-9'>
        {companyData.logos.map(pass=>(
          <img src={pass.src}/>
        ))}
     </div>
    </div>
   
  )
}

export default Sponsor