import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1, // Controls randomness; valid values are usually 0.1 to 1.0
  topP: 0.95, // Cumulative probability threshold
  topK: 40, // Updated to the maximum supported value within range (1–40)
  maxOutputTokens: 8192, // Maximum number of tokens in the response
  responseMimeType: "application/json", // Response format
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text:
            "Generate a detailed 3-day Travel Plan for Las Vegas for a couple with a budget-friendly focus. You MUST include EXACTLY 3 activities for EACH day.\n\n" +
            "1. Provide 4-5 budget-friendly hotel options. For each hotel include:\n" +
            "- HotelName\n" +
            "- Address\n" +
            "- Price range (budget-friendly, specify per night cost)\n" +
            "- Hotel image URL\n" +
            "- Coordinates\n" +
            "- Rating (out of 5 stars)\n" +
            "- Description\n" +
            "- Amenities available\n" +
            "- Distance from Strip\n\n" +
            "2. Create a daily itinerary where EACH DAY MUST HAVE 3 ACTIVITIES. For each activity include:\n" +
            "- Place name\n" +
            "- Place details\n" +
            "- Place image URL\n" +
            "- Geo coordinates\n" +
            "- Ticket pricing\n" +
            "- Rating\n" +
            "- Activities included\n" +
            "- Time required\n" +
            "- Suggested visit time (morning/afternoon/evening)\n\n" +
            "Structure the itinerary as follows:\n" +
            "Day 1: Morning activity, Afternoon activity, Evening activity\n" +
            "Day 2: Morning activity, Afternoon activity, Evening activity\n" +
            "Day 3: Morning activity, Afternoon activity, Evening activity\n\n" +
            "Focus on budget-friendly activities including city sightseeing, food exploration, and entertainment. Format the response in JSON.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50 - $100 per night",\n      "hotelImageUrl": "https://www.thedorleans.com/images/default-source/hotel-images/hotel-exterior-day.jpg?sfvrsn=8c5540f_2",\n      "geoCoordinates": {"latitude": 36.1699, "longitude": -115.1421},\n      "rating": "4 stars",\n      "description": "A budget-friendly hotel located in the heart of Fremont Street. It features a casino, several dining options, and a rooftop pool."\n    },\n    {\n      "hotelName": "Golden Nugget Las Vegas",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$75 - $150 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/las-vegas/images/hero-images/gn-lv-exterior-hero-desktop.jpg",\n      "geoCoordinates": {"latitude": 36.1698, "longitude": -115.1415},\n      "rating": "4.5 stars",\n      "description": "A historic hotel with a modern twist, featuring a casino, several restaurants, a pool complex, and a shark tank."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "plan": [\n        {\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian mall featuring a canopy of lights and free entertainment. Enjoy live music, street performers, and the Viva Vision light show.",\n          "placeImageUrl": "https://www.visitlasvegas.com/media/5127/freemont-street-experience-viva-vision.jpg",\n          "geoCoordinates": {"latitude": 36.1699, "longitude": -115.1421},\n          "ticketPricing": "Free",\n          "timeTravel": "Evening (7:00 PM - 10:00 PM)",\n          "activities": ["Live music", "Street performers"]\n        },\n        {\n          "placeName": "Neon Museum",\n          "placeDetails": "A museum showcasing historic neon signs from Las Vegas\'s past. Take a guided tour or stroll through the \'Neon Boneyard\'.",\n          "placeImageUrl": "https://www.neonmuseum.org/wp-content/uploads/2017/08/Neon-Museum-Sign-Photo-1.jpg",\n          "geoCoordinates": {"latitude": 36.1756, "longitude": -115.1368},\n          "ticketPricing": "$20 per person",\n          "timeTravel": "Afternoon (2:00 PM - 4:00 PM)",\n          "activities": ["Photography", "Guided tour"]\n        }\n      ],\n      "bestTimeVisit": "Evening"\n    },\n    {\n      "day": "Day 2",\n      "plan": [\n        {\n          "placeName": "Hoover Dam",\n          "placeDetails": "A massive dam and engineering marvel located just outside Las Vegas. Take a tour to learn about its history and significance.",\n          "placeImageUrl": "https://www.nps.gov/hoov/planyourvisit/images/hooverdam-1_30.jpg",\n          "geoCoordinates": {"latitude": 36.0017, "longitude": -114.9714},\n          "ticketPricing": "$30 per person",\n          "timeTravel": "Morning (9:00 AM - 12:00 PM)",\n          "activities": ["Guided tours", "Photography"]\n        }\n      ],\n      "bestTimeVisit": "Morning"\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});