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
  
  export const AI_AI =
    "Generate {planType} for {contextType}: {contextDetail}, Location: {location}, for {duration} with a {budget} budget. Provide a list of options including OptionName, Address, Price, ImageURL, GeoCoordinates, Rating, and Description. Suggest a strategy in JSON format with PlanDetails outlining specific actions for each time unit, Trends showing expected trends for the specified context type, MitigationDetails for managing associated risks, and AccessibilityDetails explaining how and when resources can be accessed or utilized. Ensure the output includes clear, actionable recommendations tailored to the specified budget, location, and timeframe.";  