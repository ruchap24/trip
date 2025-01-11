import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { app, db } from "../firebase";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlaceToVisit";

function ViewTrip() {
  const { tripId } = useParams();
  const [trip,setTrip] = useState([])
useEffect(() => {
    tripId&&GetTripData();
  }, [tripId]);
  const  GetTripData = async () => {
    const docRef= doc(db, 'AITrips', tripId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      
      console.log("Document data:", docSnap.data());
       setTrip(docSnap.data())
    } else {
      console.log("No such document!");
       alert('No Trip found');
    }
  }
  return <div className="p-10 md:px-20 lg:px-44 xl:px-56">
    <InfoSection trip = {trip} />
    <Hotels trip = {trip}/>
    <PlacesToVisit trip = {trip}/>
  </div>;
}

export default ViewTrip;