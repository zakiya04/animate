'use client'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero(){
    return(
        <div className='h-screen w-full bg-background bg-grid'>
            <div className='absolute bg-background [mask-image:radial-gradient(transparent_20%,black)]'>
                <div className='relative h-screen w-screen'></div>
            </div>
        </div>
    )
}