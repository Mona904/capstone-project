import FavoritesPage from "@/components/FavoritesPage";

export default function Favorites({ plants, toggleFavorite }) {
  return <FavoritesPage plants={plants} toggleFavorite={toggleFavorite} />;
}
