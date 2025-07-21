import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);
subscriberSchema.index({name: String});
export default mongoose.model("Subscriber", subscriberSchema, "subscribers");