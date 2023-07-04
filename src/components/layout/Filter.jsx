import RadioFilter from "../inputs/RadioFilter";

export default function Filter() {
  const filters = [
    {
      id: 1,
      image: "/src/assets/servicos.svg",
    },
    {
      id: 2,
      image: "/src/assets/lojas.svg",
    },
    {
      id: 3,
      image: "/src/assets/feiras.svg",
    },
    {
      id: 4,
      image: "/src/assets/produtores.svg",
    },
    {
      id: 5,
      image: "/src/assets/restaurantes.svg",
    },
  ];
  return (
    <div className='h-3/4'>
      <div className='flex'>
        <div className='flex items-center gap-2 flex-wrap p-2 justify-center'>
          {filters.map((filter) => (
            <RadioFilter key={filter.id} image={filter.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
