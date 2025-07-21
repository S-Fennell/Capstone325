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
            unique: true,
            required: true
        }
    },
    {
        timestamps: true
    }
);
subscriberSchema.index({email: String});
export default mongoose.model("Subscriber", subscriberSchema, "subscribers");