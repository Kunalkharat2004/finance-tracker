import { model, Schema } from "mongoose";

const clientSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    occupation: { type: String, required: true },
    income: { type: Number, required: true },
    maritalStatus: { type: String, enum: ['Single', 'Married'], required: true },
    dependents: { type: Number, required: true },
    financialGoal: { type: String, required: true },
},{timestamps: true});

const Client = new model("Client",clientSchema);

export default Client;