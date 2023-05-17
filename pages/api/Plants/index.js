import { getAllPlants, createPlant } from "@/db";

export default async function handler(req,res){
    if (req.method === "GET"){const plants = await getAllPlants();
    return res.status(200).json(plants);}
if (req.method === "POST") {const {title, location}= req.body; 
const plant= await createPlant({title,location}); 
return res.status(201).json(plant);}
return res.status(405).end({error:"method not allowed"})
}

