import { useEffect } from "react";

export default function RadioFilter(props) {
  useEffect(() => {
    console.log(props.image);
  }, []);

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
      <span
        className={`absolute bg-contain bg-center rounded-[100%] w-full h-full bg-no-repeat`}
        style={{ backgroundImage: require(`${props.image}`) }}
      ></span>
    </label>
  );
}
