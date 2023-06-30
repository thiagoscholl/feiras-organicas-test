import MapboxMap from "../components/map/MapboxMap";

function Home() {
  return (
    <div className='flex min-h-full w-full'>
      <div className='w-2/5'>
        <h3 className='text-white'>Esquerda</h3>Esquerda
      </div>
      <div className='w-3/5'>
        <MapboxMap />
      </div>
    </div>
  );
}

export default Home;

