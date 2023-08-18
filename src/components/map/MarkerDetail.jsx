import React from "react";

export default function MarkerDetail(props) {
  return (
    <div>
      <div className='h-[12rem] '>
        <img
          className='h-[100%] w-[100%] object-cover'
          src={props.product.properties?.image}
          alt={props.product.properties?.title}
        />
      </div>
      <div className='flex justify-center items-center w-full'>
        <h1 className='text-sm font-bold bg-default text-white w-full pl-8 py-1'>
          {props.product.properties?.title}
        </h1>
      </div>
      <div className='px-[2rem] text-xs my-10 flex flex-col gap-3'>
        <div className='flex flex-row flex-wrap'>
          <label htmlFor='address' className='text-[#796049]'>
            Endereço:
          </label>
          <p id='address'>{props.product.properties?.address}</p>
        </div>
        <div>
          <label htmlFor='working-days' className='text-[#796049]'>
            Dias de funcionamento:
          </label>
          {props.product.properties.days?.map((day) => (
            <span id='working-days'>{day}</span>
          ))}
        </div>
        <div>
          <label htmlFor='working-hours' className='text-[#796049]'>
            Horário de funcionamento:
          </label>
          <p id='working-hours'>
            {props.product.properties?.open_hour} às{" "}
            {props.product.properties?.close_hour}
          </p>
        </div>
        <div>
          <p>{props.product.properties?.description}</p>
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center w-full'>
          <h1 className='text-sm font-bold bg-default-light text-color-custom-dark w-full pl-8 py-1'>
            Principais produtos
          </h1>
        </div>
        <div className='flex flex-row flex-wrap justify-center items-center w-full gap-2 px-[2rem]'>
          {props.product.properties?.products?.map((product) => (
            <span className='w-[198px] h-[30px] bg-transparent text-[#796049] border-[#796049] border border-solid rounded-3xl'>
              {product}
            </span>
          ))}
        </div>
      </div>
      <div className='p-[2rem]'>
        <p className='text-xs'>
          Se este conteúdo foi útil ajude a manter o nosso site e{" "}
          <span>
            <a
              className='bg-default text-white border rounded px-2 py-1'
              href='/sobre-nos'
            >
              Faça uma doação
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

