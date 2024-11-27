import Client from "../models/Client.js";

const clientController = {
createClient: async(req,res,next) =>{
    try{
        const client = new Client(req.body)
        await client.save()
        res.status(201).json({ message: 'Client added successfully' });
    }catch(err){
        console.log("Error in create Book",err)
    }
},

listClients: async(req,res,next)=>{
    try{
        const clients = await Client.find();
        res.status(200).json(clients);
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Error fetching clients', error });
    }
},


updateClient: async(req, res, next) => {
    try{
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: 'Client updated successfully', updatedClient });
    }catch(err){
        console.log("Error in update Book", err);
        res.status(400).json({ message: 'Error updating client', error });
    }
},

deleteClient: async(req, res, next)=>{
    try{
        await Client.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Client deleted successfully' });
    }catch(err){
        res.status(500).json({ message: 'Error deleting client', error });
    }
},

generateSalarySlip: async(req,res,next)=>{
    try{
        const client = await Client.findById(req.params.id);
        if (!client) return res.status(404).json({ message: 'Client not found' });

        const tax = client.income * 0.1; // Example: 10% tax
        const netIncome = client.income - tax;

        res.status(200).json({
            name: client.name,
            income: client.income,
            tax,
            netIncome,
        });
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Error generating salary slip', error });
    }
},

getClientByID: async(req,res,next)=>{
    try{
        const client = await Client.findById(req.params.id)
        if(!client) return res.status(404).json({ message: 'Client not found' });
        res.status(200).json(client)
    }catch(err){
        console.error(err);
    }
}

    }

export default clientController
