import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-row justify-center sticky py-10 bg-white-700">
            <div id="logo-container">
                {/*<Image />*/}
            </div>
            <div id="nav-links">
                <ul id="navbar" className="flex flex-row gap-32 text-xl justify-center">
                    <li><a href="">Strona Główna</a></li>
                    <li><a href="">Oferta</a></li>
                    <li><a href="">Kontakt</a></li>
                </ul>
            </div>
        </header>
    )
}