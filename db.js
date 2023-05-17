/*
export const plants = [
    { id: "1", name: 'Bigleaf Hydrangea', image: 'https://www.picturethisai.com/wiki-image/1080/154128268713263129.jpeg' },
    { id: "2", name: 'Common Foxglove', image: 'https://picturethisai.com/image-handle/website_cmsname/image/1080/153664794497384469.jpeg?x-oss-process=image/format,webp/quality,q_60&v=1.0' },
    { id: "3", name: 'Common Yarrow', image: 'https://www.picturethisai.com/image-handle/website_cmsname/image/1080/154244786881036288.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0' },
    { id: "4", name: 'Ground Ivy', image: 'https://www.picturethisai.com/image-handle/website_cmsname/image/1080/154235256348606476.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0'},
    { id: "5", name: 'Common Tansy', image: 'https://www.picturethisai.com/image-handle/website_cmsname/image/1080/154187663815999517.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0'},
    { id: "6", name: 'Elder', image: 'https://cdn11.bigcommerce.com/s-ih8o56kgor/images/stencil/1280x1280/products/4445/10243/American-Elderberry__47229.1627066332.png?c=2'},
    { id: "7", name: 'Herb Robert', image: 'https://www.picturethisai.com/image-handle/website_cmsname/image/1080/201211671562289152.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0'},
    { id: "8", name: 'English Oak', image: 'https://cdn.shopify.com/s/files/1/0557/0657/products/Quercus-robur.jpg'},
  ];
  */

 import mongoose, { model, models, Schema } from "mongoose";


 const { MONGODB_URL } = process.env;

 const PlantSchema = new Schema ({
  title: String,
  location: String,
 });

 const Plant = models.Plant || model("Plant", PlantSchema);



 async function connectDatabase() {
  await mongoose.connect(MONGODB_URL);
}

async function createPlant(plant) {
  await connectDatabase();
  const newPlant = await Plant.create(plant);
  return newPlant;
}

async function getPlant(id) {
  await connectDatabase();
  const plant = await Plant.findOne({ _id: id });
  return plant;
}

async function getAllPlants() {
  await connectDatabase();
  const elements = await Plant.find({});
  return elements;
}

async function deletePlant(id) {
  await connectDatabase();
  const plant = await Plant.findOne({ _id: id });
  await Plant.deleteOne({ _id: id });
  return plant;
}

async function updatePlant(id, plant) {
  await connectDatabase();
  await Plant.updateOne({ _id: id }, plant);
  const updatedPlant = await Plant.findOne({ _id: id });
  return updatedPlant;
}

export default Plant;

export {createPlant, updatePlant, deletePlant, getAllPlants, getPlant};