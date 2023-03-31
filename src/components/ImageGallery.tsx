import React from 'react'
import { Navigation, Pagination, A11y, EffectCards, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/a11y'

const ImageGallery = ({ images = [], prefix = '' }: { images?: string[], prefix?: string }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      effect="coverflow"
      className="w-full h-full align-center bg-[var(--dark-100)]"
      navigation
      centeredSlides
      slidesPerView="auto"
      pagination={{ clickable: true }}>
      {images.map((img) => (
        <SwiperSlide className="w-full h-full">
          <img loading="lazy" key={img} src={prefix + '/' + img} className="max-h-96 m-auto" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageGallery;
