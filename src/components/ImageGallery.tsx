import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

const ImageGallery = ({ images = [], prefix = '' }: { images?: string[], prefix?: string }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      className="w-full h-full align-center bg-[var(--dark-100)]"
      navigation
      centeredSlides
      loop
      autoplay={{
        delay: 2000,
      }}
      slidesPerView="auto"
      pagination={{ clickable: true }}>
      {images.map((img) => (
        <SwiperSlide key={img} className="w-full h-full flex items-center justify-center flex-col">
          <img loading="lazy" src={prefix + '/' + img} className="max-h-96 m-auto flex items-center justify-center flex-col" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageGallery;
