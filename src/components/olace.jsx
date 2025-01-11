import React from "react";
import PlaceCardItem from "./PlaceCardItem";

export default function PlacesToVisit({ trip }) {
  // Log the trip prop to check its structure
  console.log("Trip data:", trip);

  // Check if the trip data and itinerary are correctly defined
  if (!trip || !trip.tripData || !trip.tripData.itinerary) {
    return (
      <div>
        No itinerary available.
        {/* Debugging message */}
        <pre>{JSON.stringify(trip, null, 2)}</pre>
      </div>
    );
  }

  const itinerary = trip.tripData.itinerary;

  // Add debugging logs
  console.log("Raw itinerary:", itinerary);

  // Sort the days based on their number (day1, day2, etc.)
  const sortedDays = Object.keys(itinerary)
    .sort((a, b) => {
      const numA = parseInt(a.replace("day", ""));
      const numB = parseInt(b.replace("day", ""));
      return numA - numB;
    })
    .map((dayKey) => itinerary[dayKey]);

  // Add debugging logs
  console.log("Sorted days:", sortedDays);

  return (
    <div>
      <h2 className="font-bold text-lg mt-10">Places to visit</h2>
      <div>
        {/* Iterate over the sorted days */}
        {sortedDays.map((day, index) => (
          <div key={index}>
            <h2 className="font-medium text-lg">{`Day ${index + 1}`}</h2>
            <p className="text-sm text-gray-400">
              Best Time to Visit: {day.bestTimeVisit}
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Render the places for each day */}
              {day.plan.map((place, placeIndex) => (
                <div key={placeIndex} className="my-3">
                  <PlaceCardItem place={place} />
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {place.placeDetails}
                    </p>
                    <p className="text-sm text-gray-400">
                      {place.ticketPricing}
                    </p>
                    <p className="text-sm text-gray-600">{place.timeTravel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}