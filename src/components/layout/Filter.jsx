import RadioFilter from "../inputs/RadioFilter";
import servicosSvg from "../../assets/servicos.svg";
import lojasSvg from "../../assets/lojas.svg";
import feirasSvg from "../../assets/feiras.svg";
import produtoresSvg from "../../assets/produtores.svg";
import restaurantesSvg from "../../assets/restaurantes.svg";

export default function Filter() {
  const filters = [
    {
      id: 1,
      title: "Serviços",
      image: servicosSvg,
    },
    {
      id: 2,
      title: "Lojas",
      image: lojasSvg,
    },
    {
      id: 3,
      title: "Feiras",
      image: feirasSvg,
    },
    {
      id: 4,
      title: "Produtores",
      image: produtoresSvg,
    },
    {
      id: 5,
      title: "Restaurantes e Lanchonetes",
      image: restaurantesSvg,
    },
  ];

  return (
    <div className='h-3/4 bg-[#fff]'>
      <div className='flex justify-center items-center w-full'>
        <h1 className='text-lg font-bold bg-default text-white w-full pl-8 py-1'>
          Categorias
        </h1>
      </div>
      <div className='mt-9 flex items-center gap-x-16 gap-y-4 flex-wrap p-2 justify-center'>
        {filters.map((filter, index) => (
          <RadioFilter
            key={index}
            image={filter.image}
            id={filter.id}
            title={filter.title}
          />
        ))}
      </div>
      <div className='flex justify-center items-center w-full flex-col gap-3 mt-9 bg-[#FF770014] pt-[32px] pb-[44px]'>
        <div className='flex justify-center items-center w-full gap-4'>
          <label htmlFor='myRange' className='text-[#796049]'>
            Proximidade
          </label>
          <input
            type='range'
            min='1'
            max='100'
            defaultValue={50}
            className='w-[190px] bg-[#796049] rounded-lg cursor-pointer dark:bg-brown accent-[#796049] '
            id='myRange'
          />
        </div>
        <div className='flex justify-center items-center w-full gap-4'>
          <button
            type='button'
            className='w-[198px] h-[30px] bg-transparent text-[#796049] border-[#796049] border border-solid rounded-3xl'
          >
            Minha localização atual
          </button>
          <input
            type='text'
            name='local'
            id='myLocal'
            placeholder='Digitar endereço'
            className='w-[198px] h-[30px] bg-transparent text-[#796049] border-[#796049] border border-solid rounded-3xl placeholder-[#796049] pl-4'
          />
        </div>
      </div>
      <div className='flex justify-center pt-4'>
        <button
          type='button'
          className='w-[198px] h-[30px] bg-transparent text-[#796049] border-[#796049] border border-solid rounded-3xl'
        >
          Está aberto agora
        </button>
      </div>
    </div>
  );
}

