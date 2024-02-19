'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export default function SliderPartners() {
    return (
        <div id="container" className="w-full h-fit">
            <Swiper
                spaceBetween={50}
                slidesPerView={5}
                draggable={false}
                speed={7500}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src='/Allianz_logo_logotype.png' alt='logo allianz' className='logo' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='/Compensa-logo.jpg' alt='logo compensa' className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='/generali.jpg' alt='logo generali' className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/interrisk-logo.svg" alt="logo interrisk" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/LINK4 LOGO RGB.png" alt="logo link4" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/logo_ergo_hestia_rgb_tlo_biale_12_2021.png" alt="logo ergo hestia" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/logo_wiener_thumb_0.png" alt="logo wiener" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/PZU_LOGO_gradient_a_tlem_RGB.png" alt="logo pzu" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/TRASTI Logo VECTOR 2020.png" alt="logo trasti" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/tuw.png" alt="logo tuw" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/tuz.jpg" alt="logo tuz" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/UNIQA_mainlogo_blue_V1_4c.png" alt="logo uniqa" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/vh-polska.png" alt="logo vh-polska" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/vienna life.jpg" alt="logo vienna life" className="logo" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/warta_logo_podstawowy_CMYK.jpg" alt="logo warta" className="logo" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}