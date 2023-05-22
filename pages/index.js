import Link from "next/link";
import styled from "styled-components";
import PlantList from "@/components/PlantList";

const ViewFavoritesButton = styled.button`
  background-color: #0f3610;
  color: #e5f7eb;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 1rem;
`;

export default function HomePage({ plants, toggleFavorite }) {
  return (
    <div>
      <h2>Plants in my region</h2>
      <Link href="/favorites">
        <ViewFavoritesButton>View Favorites</ViewFavoritesButton>
      </Link>
      <PlantList plants={plants} toggleFavorite={toggleFavorite} />
    </div>
  );
}
