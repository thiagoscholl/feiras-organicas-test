export default function RadioFilter(props) {
  return (
    <div className='flex items-center justify-center flex-col max-w-[100px] gap-y-2'>
      <label
        htmlFor={`filter-${props.id}`}
        className='relative inline-block cursor-pointer w-[50px] h-[50px] rounded-[100%]'
      >
        <input
          type='radio'
          name='filter'
          id={`filter-${props.id}`}
          className='rounded-[100%] absolute opacity-0 cursor-pointer h-full w-full checked:ring-4 checked:ring-offset-0 checked:ring-[#796049] checked:ring-opacity-100 checked:opacity-100 transition-all duration-300 ease-in-out'
        />
        <span
          className={`absolute bg-contain bg-center rounded-[100%] w-full h-full bg-no-repeat hover:opacity-80 transition-all duration-300 ease-in-out`}
          style={{ backgroundImage: `url(${props.image})` }}
        ></span>
        {/* add a title below the input */}
      </label>
      <span className='text-center text-xs text-[#796049] font-bold'>
        {props.title}
      </span>
    </div>
  );
}

