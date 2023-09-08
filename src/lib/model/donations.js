import mongoose from "mongoose";

const donationsModel = new mongoose.Schema({
    fullName: String,
    email: String,
    donationAmount: Number,
    donationCategory: String,

});

export const Volunteers = mongoose.models.volunteers || mongoose.model("volunteers", donationsModel);