import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-row gap-32 justify-center py-28 bg-red-500">
            <div id="portrait">
                <img src="/portrait.jpg" alt="Edyta Sarnecka Portrait" className="w-72 h-96 object-cover rounded-4xl hover:scale-110 transition-all"/>
            </div>
            <div id="main-hero-text-container" className="w-4/12 px-6 py-2">
                <h2 className="py-4 font-semibold text-2xl tracking-wider">
                    Moja Oferta
                </h2>
                <p className="py-4">
                    Jako doświadczony agent ubezpieczeniowy, jestem gotowa dostarczyć Ci kompleksową ochronę w różnych obszarach życia. Moja oferta obejmuje ubezpieczenia komunikacyjne, majątkowe, na życie, turystyczne, dla firm oraz następstw nieszczęśliwych wypadków. Moja oferta opiera sie na współpracy z 18 wiodącymi firmami ubezpieczeniowymi, co umożliwia mi zapewnienie klientom różnorodnych opcji i konkurencyjnych cen. Bez względu na Twoje potrzeby ubezpieczeniowe, znajdziemy razem idealne rozwiązanie. Skontaktuj się ze mną, jeśli masz pytania lub chciałbyś skorzystać z mojej oferty.
                </p>
            </div>
        </div>
    )
}