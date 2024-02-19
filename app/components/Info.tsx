import { Card, Typography } from "@mui/joy"

export default function Info() {
    return (
        <div id="info-container" className="w-full flex flex-row justify-around py-4 px-8">
            <div id="left-container">
                <Card 
                    variant="outlined" 
                    color="primary"
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <Typography level="title-lg" color="neutral">Edyta Sarnecka</Typography>
                </Card>
            </div>
            <div id="right-container" className="flex flex-row space-x-6 justify-self-end">
                <Card 
                    variant="outlined" 
                    color="primary"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <Typography level="title-lg" color="neutral">123-456-789</Typography>
                </Card>
                <Card 
                    variant="outlined" 
                    color="primary"
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <Typography level="title-lg" color="neutral">edyta.sarnecka.budziszewice@gmail.com</Typography>
                </Card>
            </div>
        </div>
    )
}