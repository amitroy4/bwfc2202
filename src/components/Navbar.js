import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';


const Navbar = () => {

    let [navinfo, setNavinfo] = useState({});
    let [loading,setLoading]=useState(true)


    useEffect(() => {
        async function nav(){
            let navbar = await axios.get("https://bwfc-api.vercel.app/navbar")
            console.log(navbar)
            setNavinfo(navbar.data)
            setLoading(false)
        } 
        nav()
    }, []);

    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <>
        <div className="max-w-container mx-auto my-[28px] flex items-center ">
            <div className='w-3/12'>
                <img src={navinfo.logo}/>
            </div>

            <ul className='w-2/5 flex justify-center gap-x-7 '>
                {navinfo.navItems.map(nitem=>(
                    <li className='group'><a className='text-sm font-normal font-man inline-block group-hover:text-primary transition duration-300 ease-in-out flex gap-x-1.5' href="#">{nitem.item}
                    { nitem.dropDown && <FaAngleDown className='group-hover:rotate-180 transition duration-300 ease-in-out'/>}</a>
                        <ul className='absolute hidden group-hover:block'>
                            { nitem.dropDown && nitem.dropDownItem.map(ditem=>(
                                <li className='hover:text-primary transition duration-300 ease-in-out py-0.5'><a className='text-sm font-man font-normal' href='#'>{ditem.dropItem}</a></li>
                            ))}
                        </ul>
                    
                    </li>
                ))}
            </ul>

            <div className='w-[35%] flex justify-end gap-x-2.5 items-center'>
                { navinfo.buttonOne.visibility && <a className='inline-block text-sm font-normal font-man py-4 px-9 rounded-lg border border-transparent hover:border-primary transition duration-300 ease-in-out hover:text-primary' href='#'>{navinfo.buttonOne.text}</a>}
                { navinfo.buttonTwo.visibility && <a className='inline-block text-sm text-semibold text-white rounded-lg font-man py-4 px-9 bg-primary border border-primary transition duration-300 ease-in-out hover:text-primary hover:bg-transparent hover:border-primary' href='#'>{navinfo.buttonTwo.text}</a>}
                { navinfo.buttonThree.visibility && <a className='inline-block text-sm text-semibold text-white rounded-lg font-man py-4 px-9 bg-primary border border-primary transition duration-300 ease-in-out hover:text-primary hover:bg-transparent hover:border-primary' href='#'>{navinfo.buttonThree.text}</a>}
            </div>
        </div>
    </>
  )
}

export default Navbar