'use client';

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

export default function Slider() {

    return (
        <div className='relative z-0'>
            <Swiper 
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                draggable={false}
                speed={5000}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className='h-[45rem]'
                fadeEffect={{ crossFade: true }}
                effect='fade'
                style={{ }}
            >
                <SwiperSlide>
                    <img src='/slideshow1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/slideshow2.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='/slideshow3.jpg' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}