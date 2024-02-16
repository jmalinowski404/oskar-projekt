export default function Footer() {
    return (
        <footer className="flex flex-row justify-between px-64 py-8 bg-red-500 text-white text-semibold">
            <div id="logo-container">
                <img src="/public/vercel.svg" alt="" />
                <p>&copy; Copyright 2024. All Rights Reserved</p>
            </div>
            <div id="socials">
                <h2>Zaobserwuj Nas: </h2>
                <ul>
                    <li><img /></li>
                    <li><img /></li>
                    <li><img /></li>
                    <li><img /></li>
                </ul>
            </div>
        </footer>
    )
}