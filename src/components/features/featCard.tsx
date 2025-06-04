'use client'
import {motion} from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ftCardProps{
    title:string;
    description:string;
    icon: LucideIcon;
    className:string;

}


export default function featCard({title ,description ,icon: Icon ,className=''}:ftCardProps){
    return(
        <motion.div
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        className={`p-4 rounded-lg flex flex-col gap-2 border-border/50 ${className}`}
        >
          <Icon className='w-10 h-10 text-purple-400 mb-4'/>
          <h3 className='mb-4 text-xl font-semibold'>{title}</h3>
          <p className='text-gray-500 '>{description}</p>
        </motion.div>
    )
}