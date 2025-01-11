import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../services/GlobalApi'

export default function UserTripCardItem({trip}) {

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
      <Link to={'/view-trip/'+trip.id}>
        
    <div className='hover:scale-105 translate-all ' >
      
      <img src={photoUrl?photoUrl:'https://aitrip.tubeguruji.com/placeholder.jpg' }  className='rounded-xl h-[180px] w-full object-cover'/>
      <div>
         <h2 className='font-bold text-lg'>{trip?.userSelections?.location}</h2>
          <div className='flex gap-5'>
             <h2 className='text-sm text-gray-500'>{trip?.userSelections?.noOfDays} Day with {trip?.userSelections?.budget} Budget </h2>
             
        </div>
      </div>

    </div>
     </Link>
  )
}