import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  children: slides,
  autoSlide,
  autoSlideInterval,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='h-1/4 overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500 h-full'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          onClick={prev}
          className='p-1 rounded-full shadow bg-brown/80 text-white hover:bg-brown'
        >
          <ChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className='p-1 rounded-full shadow bg-brown/80 text-white hover:bg-brown'
        >
          <ChevronRight size={25} />
        </button>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-brown rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

