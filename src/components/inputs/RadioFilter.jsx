export default function RadioFilter() {
  return (
    <label
      htmlFor='filter-1'
      className='relative inline-block cursor-pointer w-[50px] h-[50px]'
    >
      <input
        type='radio'
        name='filter'
        id='filter-1'
        className='absolute opacity-0 cursor-pointer h-full w-full'
      />
      <span className="absolute bg-[url('/src/assets/servicos.svg')] bg-contain bg-center rounded-[100%] w-full h-full bg-no-repeat bg-[#FBD980]"></span>
    </label>
  );
}

