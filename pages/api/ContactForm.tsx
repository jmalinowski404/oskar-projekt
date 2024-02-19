import type { NextApiRequest, NextApiResponse } from "next"
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || ''
const DOMAIN = process.env.MAILGUN_DOMAIN || ''

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Data', req.body)

    const mailgun = new Mailgun(FormData);
    const client = mailgun.client({username: 'api', key: API_KEY});

    const {name, surname, email, message} = req.body

    const messageData = {
        from: 'Formularz <contact@sandboxace5d72f1cc74ca58ca36794d1d4774d.mailgun.org>',
        to: 'sandboxace5d72f1cc74ca58ca36794d1d4774d.mailgun.org',
        subject: 'Nowe Zapytanie!',
        text: `Witaj,
        
        Masz nowy formularz z zapytaniem od: ${name} ${surname} ${email}.
        
        ${message}
        `,
    };

    client.messages.create(DOMAIN, messageData)
        .then((res) => {
        console.log(res);
    })
        .catch((err) => {
        console.error(err);
    });

    res.status(200).json({ name: 'John Doe'})
}