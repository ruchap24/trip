import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GetPlaceDetails, PHOTO_REF_URL } from '../services/GlobalApi';

const PLACEHOLDER_IMAGE = 'https://aitrip.tubeguruji.com/placeholder.jpg';

export default function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(place);

  useEffect(() => {
    if (place) GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    setIsLoading(true);
    try {
      const data = { textQuery: place.placeName };
      const resp = await GetPlaceDetails(data);
      const photoName = resp?.data?.places?.[0]?.photos?.[3]?.name;
      if (photoName) {
        const url = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotoUrl(url);
      } else {
        setPhotoUrl(PLACEHOLDER_IMAGE);
      }
    } catch (error) {
      console.error('Error fetching photo:', error);
      setPhotoUrl(PLACEHOLDER_IMAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="place-card-item">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={photoUrl} alt={place.placeName} />
      )}
      <h3>{place.placeName}</h3>
      <Link to={`/place/${place.id}`}>View Details</Link>
    </div>
  );
}

PlaceCardItem.propTypes = {
  place: PropTypes.shape({
    placeName: PropTypes.string.isRequired,
    placeDetails: PropTypes.string,
    ticketPricing: PropTypes.string,
    id: PropTypes.string.isRequired,
  }).isRequired,
};



// getting errors in this code so i have to comment this code and write new code for this file

// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { GetPlaceDetails, PHOTO_REF_URL } from '../services/GlobalApi';

// const PLACEHOLDER_IMAGE = 'https://aitrip.tubeguruji.com/placeholder.jpg';

// export default function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   console.log(place);

//   useEffect(() => {
//     if (place) GetPlacePhoto();
//   }, [place]);

//   const GetPlacePhoto = async () => {
//     setIsLoading(true);
//     try {
//       const data = { textQuery: place.placeName };
//       const resp = await GetPlaceDetails(data);
//       const photoName = resp?.data?.places?.[0]?.photos?.[3]?.name;
//       if (photoName) {
//         const photoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
//       }
      
//       PlaceCardItem.propTypes = {
//         place: PropTypes.shape({
//           placeName: PropTypes.string,
//           placeDetails: PropTypes.string,
//           ticketPricing: PropTypes.string,
//           timeTravel: PropTypes.string,
//         }).isRequired,
//       };
//       };
//      catch (error) {
//       console.error('Error fetching place photo:', error);
//     }; finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Link
//       to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//         place?.placeName
//       )}`}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md">
//         {isLoading ? (
//           <div className="w-[130px] h-[130px] bg-gray-200 rounded-xl flex items-center justify-center">
//             Loading...
//           </div>
//         ) : (
//           <img
//             src={photoUrl || PLACEHOLDER_IMAGE}
//             alt={place?.placeName || 'Place'}
//             className="w-[130px] object-cover h-[130px] rounded-xl"
//           />
//         )}
//         <div>
//           <h2 className="font-bold text-lg">{place?.placeName}</h2>
//           <p className="text-sm text-gray-400">{place?.placeDetails}</p>
//            <p className="text-sm text-gray-400">
//                       {place.ticketPricing}
//                     </p>
                  
//           <h2 className="mt-2">⌚ {place?.timeTravel}</h2>
//         </div>
//       </div>
//     </Link>
//   );

// }
// copoiler generated code

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { GetPlaceDetails, PHOTO_REF_URL } from '../services/GlobalApi';

// const PLACEHOLDER_IMAGE = 'https://aitrip.tubeguruji.com/placeholder.jpg';

// export default function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   console.log(place);

//   useEffect(() => {
//     if (place) {
//       GetPlacePhoto(place.photoReference)
//         .then((url) => {
//           setPhotoUrl(url);
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching photo:', error);
//           setPhotoUrl(PLACEHOLDER_IMAGE);
//           setIsLoading(false);
//         });
//     } else {
//       setPhotoUrl(PLACEHOLDER_IMAGE);
//       setIsLoading(false);
//     }
//   }, [place]);

//   const GetPlacePhoto = async (photoReference) => {
//     try {
//       const response = await GetPlaceDetails(photoReference);
//       return `${PHOTO_REF_URL}${response.data.photo_reference}`;
//     } catch (error) {
//       console.error('Error fetching place details:', error);
//       return PLACEHOLDER_IMAGE;
//     }
//   };

//   return (
//     <div className="place-card-item">
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <img src={photoUrl} alt={place.name} />
//       )}
//       <h3>{place.name}</h3>
//       <Link to={`/place/${place.id}`}>View Details</Link>
//     </div>
//   );
// }