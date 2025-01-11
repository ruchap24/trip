import React, { useEffect, useState } from 'react'
import {IoIosSend} from "react-icons/io"
import { GetPlaceDetails, PHOTO_REF_URL } from '../services/GlobalApi'
import { useActionData } from 'react-router-dom'


export default function InfoSection({trip}) {

  const [photoUrl, setPhotoUrl]=useState()
    useEffect(() => {
    trip&&GetPlacePhoto();
    
}, [trip]);

const GetPlacePhoto = async () => {
 const data = {
  textQuery:trip?.userSelections?.location
 }
 const result =  await GetPlaceDetails(data).then(resp =>{
 console.log(resp.data.places[0].photos[3].name)
 
 const photoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)

 setPhotoUrl(photoUrl)

 })
};

  return (
    <div>
      <img src={photoUrl} className='h-[340px] w-full object-cover rounded-xl' />

       <div className='flex justify-between items-center'> 
        <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{trip?.userSelections?.location}</h2>
        <div className='flex gap-5'>
             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>📆 {trip?.userSelections?.noOfDays} Day</h2>
             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰 {trip?.userSelections?.budget} Budget</h2>
             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🥂  No. Of Traveler: {trip?.userSelections?.traveler} </h2>
             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>🎉  Activities: {trip?.userSelections?.activities} </h2>
        </div>
      </div>

      <button className='0 text-xl rounded-lg p-3'><IoIosSend/></button>
       </div>
      

    </div>
  )
}