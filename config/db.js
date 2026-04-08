import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rizarayhanw_db_user:170898@cluster0.wlmvwh5.mongodb.net/food-delivery",
    )
    .then(() => console.log("DB Connected"));
};
