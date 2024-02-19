'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default function Hero() {
    return (
        <div id="whole-container" className="flex flex-column">
            <div className="flex flex-row gap-32 justify-center pt-16 pb-24" data-aos="fade-up">
                <div 
                id="portrait" 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="75"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                >
                    <img id="portrait-image" src="/portrait.jpg" alt="Edyta Sarnecka Portrait" className="w-72 h-96 object-cover rounded-4xl hover:scale-105 ease-in-out delay-150 duration-300 transition-all"/>
                </div>
                <div id="main-hero-text-container" className="w-4/12 px-6 py-2">
                    <h2 
                    className="py-4 font-semibold text-2xl"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="75"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    >
                        Moja Oferta
                    </h2>
                    <p 
                    className="py-4 tracking-wide"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="75"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                    >
                        Jako doświadczony agent ubezpieczeniowy, jestem gotowa dostarczyć Ci kompleksową ochronę w różnych obszarach życia. Moja oferta obejmuje ubezpieczenia komunikacyjne, majątkowe, na życie, turystyczne, dla firm oraz następstw nieszczęśliwych wypadków. Moja oferta opiera sie na współpracy z 18 wiodącymi firmami ubezpieczeniowymi, co umożliwia mi zapewnienie klientom różnorodnych opcji i konkurencyjnych cen. Bez względu na Twoje potrzeby ubezpieczeniowe, znajdziemy razem idealne rozwiązanie. Skontaktuj się ze mną, jeśli masz pytania lub chciałbyś skorzystać z mojej oferty.
                    </p>
                </div>
            </div>
        </div>
    )
}