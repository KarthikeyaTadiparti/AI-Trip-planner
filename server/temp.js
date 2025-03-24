import axios from "axios";
import * as cheerio from 'cheerio';

const SCRAPER_API_KEY = "faeb1803ec1d1e29b4a556d6b4e1183f"; // Replace with your actual key
const SEARCH_QUERY = "Novotel"; // Change as needed

async function fetchAndExtractImages() {
    try {
        // Fetch HTML content using ScraperAPI
        const response = await axios.get("http://api.scraperapi.com", {
            params: {
                api_key: SCRAPER_API_KEY,
                url: `https://duckduckgo.com/?q=${encodeURIComponent(
                    SEARCH_QUERY
                )}&iax=images&ia=images`,
            },
        });

        // Load HTML response into Cheerio
        const $ = cheerio.load(response.data);
        let imageUrls = [];

        // Extract image URLs
        $("img").each((index, element) => {
            const imageUrl = $(element).attr("src");
            if (imageUrl && imageUrl.startsWith("http")) {
                imageUrls.push(imageUrl);
            }
        });

        console.log("Extracted Image URLs:", imageUrls);

        // Now you can use these URLs in your frontend
    } catch (error) {
        console.error("Error extracting images:", error);
    }
}

fetchAndExtractImages();
