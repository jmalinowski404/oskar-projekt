export default function Contact() {
    return (
        <div id="contact-container" className="py-32 px-12 flex flex-row justify-evenly items-center">
            <div id="left-container">
                <iframe
                    width={600}
                    height={450}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCi_Qn-tAjaevGF0J-Ahc05LlfNSWAgAKk
                    &q=Urago. Hurtownia materiałów budowlanych"
                    >
                </iframe>
            </div>
            <div id="right-container">
                <form className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <input type="text" placeholder="Imię" className="form-input rounded-md w-1/3"></input>
                        <input type="text" placeholder="Nazwisko" className="form-input rounded-md w-2/3"></input>
                    </div>
                    <input type="email" placeholder="E-Mail" className="form-input rounded-md"></input>
                    <textarea placeholder="Treść..." rows={5} className="form-textarea resize-none rounded-md"></textarea>
                </form>
            </div>
        </div>
    )
}