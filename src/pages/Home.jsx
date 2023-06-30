import MapboxMap from "../components/map/MapboxMap";
import MapFilter from "../components/map/MapFilter";

function Home() {
  return (
    <div className='flex'>
      <div className='w-2/5'>
        <MapFilter />
      </div>
      <div className='w-3/5'>
        <MapboxMap />
      </div>
    </div>
  );
}

export default Home;

