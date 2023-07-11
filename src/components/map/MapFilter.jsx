import Carousel from "../layout/Carousel";
import Filter from "../layout/Filter";

export default function MapFilter() {
  const slides = [
    // {
    //   link: "https://i.ibb.co/ncrXc2V/1.png",
    //   image: "https://i.ibb.co/ncrXc2V/1.png",
    //   title: "Slide 1",
    // },
    // {
    //   link: "https://i.ibb.co/B3s7v4h/2.png",
    //   image: "https://i.ibb.co/B3s7v4h/2.png",
    //   title: "Slide 2",
    // },
    // {
    //   link: "https://i.ibb.co/XXR8kzF/3.png",
    //   image: "https://i.ibb.co/XXR8kzF/3.png",
    //   title: "Slide 3",
    // },
  ];

  return (
    <div className='w-full h-full'>
      <Carousel autoSlide={true} autoSlideInterval={10000}>
        {slides?.map((slide, index) => (
          <img
            src={slide.image}
            alt={slide.title}
            key={index}
            className='w-fit'
            onClick={() => {
              window.open(slide.link, "_blank");
            }}
          />
        ))}
      </Carousel>
      <Filter />
    </div>
  );
}

