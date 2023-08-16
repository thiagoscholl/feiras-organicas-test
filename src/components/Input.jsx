import React from "react";

export default function Input(props) {
  return (
    <div className='flex flex-col w-[100%]'>
      <label className='text-color-custom font-bold'>{props.label}</label>
      <input
        className='border-2 border-color-custom rounded-md h-10 p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-color-custom'
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}

