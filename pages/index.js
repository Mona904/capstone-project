import PlantPage from '@/components/PlantPage';

export default function RegionPlants({plants}) {
  return (
    <div>
      <h1>Plants in my region</h1>
    <PlantPage plants={plants}/>
    </div>
  );
}
