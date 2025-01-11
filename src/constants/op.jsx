export const SelectTravelaList = [
    {
      id: 1,
      title: "Just Me",
      desc: "A sole travels in exploration",
      icon: "🛩️",
      people: "1",
    },
    {
      id: 2,
      title: "A Couple",
      desc: "Two travels in tandem",
      icon: "👫",
      people: "2 People",
    },
    {
      id: 3,
      title: "A Family",
      desc: "Three travels in one family",
      icon: "🏡",
      people: "3 to 5 People",
    },
  
    {
      id: 4,
      title: "Friends",
      desc: "A bunch of thrill-seekers",
      icon: "🔥",
      people: "5 to 10 People",
    },
  ];
  
  export const SelectBudgetOptions = [
    {
      id: 1,
      title: "Cheap",
      desc: "Stay conscious of cost ",
      icon: "💲",
    },
  
    {
      id: 2,
      title: "Moderate",
      desc: "keep cost on the average side",
      icon: "💰",
    },
  
    {
      id: 3,
      title: "Luxury",
      desc: "Stay on the high side",
      icon: "💸",
    },
  ];
  
  export const AI_PROMPT =
    "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";