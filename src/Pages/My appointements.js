
import React ,{useContext, useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { assets } from '../assets/assets';

const Myappointement= () =>{
const {docId}=useParams()
const {Doctors}=useContext(AppContext)
const[docInfo,setDocInfo]=useState(null)

const fetchDocInfo=async ()=>{

    const docInfo=Doctors.find(doc =>doc._id===docId)
    setDocInfo(docInfo)
console.log(docInfo)

}
useEffect(()=>{
    fetchDocInfo()
},[Doctors,docId])
    return docInfo&&(
<div>

    {}
    <div className='flex flex-col sm:flex-row gap-4'>
        <div>
        <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt=''/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            {}
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                {docInfo.name}
                <img className ="w-5"src={assets.verfied_icon} alt=''/>
            </p>
            <div className='flex items-center gap-2 text-2xl font-medium text-gray-600'>
                <p >{docInfo.degree}-{docInfo.Speciality}</p>
                <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
            </div>
            {}
            <div>
                <p  className=' flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={assets.info_icon} alt='' /></p>
            </div>
            <p className=' text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
        </div>
    </div>
</div>
    );
}
export default Myappointement;