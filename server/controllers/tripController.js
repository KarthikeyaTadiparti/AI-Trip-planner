import { chatSession } from "../utils/gemini.js";

export const createTrip = async (req, res) => {
    try {
        const { location, days, budget, people } = req.body;
        console.log(req.body);
        const prompt =
            `Generate Travel Plan for Location : ${location}, for ${days} Days for ${people} with a ${budget} budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for ${days} days with each day plan with best time to visit in JSON format.`;

        const result = await chatSession.sendMessage(prompt); 
        const response = result.response.text();
        console.log(response);
        res.json({ response });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
