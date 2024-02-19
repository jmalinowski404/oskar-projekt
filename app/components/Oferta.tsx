'use client';

import AOS from 'aos';
import Card from '@mui/joy/Card'

import 'aos/dist/aos.css';
import { Avatar, CardContent, Typography } from '@mui/joy';

AOS.init();

export default function Oferta() {
    return (
        <div id="oferta-container" className="flex flex-col items-center justify-center gap-24 pt-32 pb-16 px-16 h-fit">
            <div id="row" className="flex flex-row gap-24">
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                
            </div>
            <div id="row" className="flex flex-row gap-24">
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                
            </div>
            <div id="row" className="flex flex-row gap-24">
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                <Card
                    orientation='vertical'
                    size='lg'
                    color='primary'
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="false"
                    data-aos-once="false"
                >
                    <div id='image-container' className='h-3/6 w-full object-cover'>
                        <img src="/slideshow1.jpg" className='w-full h-full object-cover overflow-hidden'/>
                    </div>
                    <div id="text-container">
                        <h2 className="font-semibold text-black text-lg pb-3 pt-4">Ubezpieczenie Komunikacyjne</h2>
                        <p className='text-black font-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sem sed mollis malesuada. Aliquam elementum, lectus vel ultrices egestas.
                        </p>
                    </div>
                    <CardContent 
                        orientation='horizontal'
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Avatar src='/portrait.jpg' size='lg' />
                        <Typography level='h4'>Edyta Sarnecka</Typography>
                    </CardContent>
                </Card>
                
            </div>
        </div>
    )
}