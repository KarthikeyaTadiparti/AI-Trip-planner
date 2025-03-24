const url = "https://places.googleapis.com/v1/places:searchText";

const config = {
    headers: {
        "Content-Type": "application/json",
        "X—Goog—Api—Key": process.env.GOOGLE_PLACE_API_KEY,
        "X—Goog—FieldMask": [
            "places.photos",
            "places.displayName",
            "places.id",
        ],
    },
};
