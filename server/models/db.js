import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    // console.log(process.env.MONGODB_URL);
}
main()
    .then(() => console.log("DataBase is connected successfully!"))
    .catch((err) => console.log(err));
