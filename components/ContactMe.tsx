import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

type Props = {}



function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

 

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        
          
        window.location.href = `mailto:camilla.reppen88@gmail.com?subject=${formData.subject}&body=Hei, mitt navn er ${formData.name}. ${formData.message}`;
    };
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase text-gray-400 pb-2 tracking-[15px] text-sm'>Kontakt meg</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-3xl font-bold text-center'>Kontakt informasjon</h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#2272FF] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+47 467 48 737</p>
                    </div>


                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#2272FF] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>camilla.reppen88@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#2272FF] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Torggata 41, 2317 Hamar</p>
                    </div>
                </div>



                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[350px] md:w-fit mx-auto'>
                    <div className='flex space-x-1  md:space-x-2'>
                        <input {...register('name')} className='contactInput w-[173px]' placeholder='Name' type="text" />
                        <input {...register('email')} className='contactInput w-[173px]' placeholder='Email' type="email" />
                    </div>
                    <input {...register('subject')} className='contactInput' placeholder='Emne' type="text" />

                    <textarea {...register('message')} className='contactInput' placeholder='Melding' />
                    <button type="submit" className='bg-[#2272FF] py-5 px-10 rounded-md text-black font-bold text-lg'>Send</button>

                </form>

            </div>
        </div>
    )
}

export default ContactMe