'use client';

import AOS from 'aos';
import { FormEvent, useState } from 'react';
import 'aos/dist/aos.css';

AOS.init();

export default function Contact() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        try {
            const res = await fetch('/api/ContactForm', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    surname,
                    email,
                    message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })
        } catch (err: any) {
            console.error('Err', err)
        }
    }

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
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <label 
                        className="text-2xl font-semibold text-slate-700"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="false"
                        data-aos-once="false"
                    >Wyślij zapytanie</label>
                    <div className="flex flex-row gap-4">
                        <input type="text" placeholder="Imię" className="form-input rounded-md w-1/3" value={name} onChange={(e) => setName(e.target.value)}
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="false"
                        ></input>
                        <input type="text" placeholder="Nazwisko" className="form-input rounded-md w-2/3" value={surname} onChange={(e) => setSurname(e.target.value)}
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="false"
                        ></input>
                    </div>
                    <input type="email" placeholder="E-Mail" className="form-input rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="30"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="false"
                        data-aos-once="false"
                    ></input>
                    <textarea placeholder="Treść..." rows={5} className="form-textarea resize-none rounded-md" value={message} onChange={(e) => setMessage(e.target.value)}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="30"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="false"
                        data-aos-once="false"
                    ></textarea>
                    <button type="submit" className="transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 rounded-md py-2 text-white font-bold"
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="30"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="false"
                        data-aos-once="false"
                    >Wyślij</button>
                </form>
            </div>
        </div>
    )
}