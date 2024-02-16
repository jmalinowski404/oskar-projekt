import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row justify-center items-center fixed gap-64 py-6 z-50 w-full bg-red-500 text-white text-semibold">
            <div id="logo-container">
                <Image 
                    src={'/next.svg'}
                    width={64}
                    height={64}
                    alt="Logo"
                />
            </div>
            <div id="nav-links">
                <ul id="navbar" className="flex flex-row gap-32 text-xl justify-center">
                    <li><a href="#" className="hover:underline hover:underline-offset-8 hover:transition-all">Strona Główna</a></li>
                    <li><a href="#oferta-container" className="hover:underline hover:underline-offset-8 hover:transition-all">Oferta</a></li>
                    <li><a href="#contact-container" className="hover:underline hover:underline-offset-8 hover:transition-all">Kontakt</a></li>
                </ul>
            </div>
        </header>
    )
}