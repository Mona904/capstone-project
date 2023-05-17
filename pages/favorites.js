import FavoritesPage from "@/components/FavoritesPage";

export default function Favorites() {
  const plants = [
    { id: 1, name: "Plant 10", image: "https://www.picturethisai.com/wiki-image/1080/154128268713263129.jpeg" },
    { id: 2, name: "Plant 20", image: "https://www.picturethisai.com/image-handle/website_cmsname/image/1080/154244786881036288.jpeg?x-oss-process=image/format,webp/resize,s_422&v=1.0" },
    { id: 3, name: "Plant 30", image: "https://cdn.shopify.com/s/files/1/0557/0657/products/Quercus-robur.jpg" },
  ];

  return <FavoritesPage plants={plants} />;
}
