'use client'
import {motion} from 'motion/react';
import { BarChart2, Bell, Brain, LineChart, Search, Target } from 'lucide-react';
import FeatCard from './featCard';

const features = [
    {
      title: 'User-Friendly Dashboard',
      description: 'Perform complex SEO audits and optimizations with a single click.',
      icon: BarChart2,
    },
    {
      title: 'Visual Reports',
      description: "Visual insights into your site's performance.",
      icon: LineChart,
    },
    {
      title: 'SEO Goal Setting',
      description: 'Helps you set and achieve SEO goals with guided assistance.',
      icon: Target,
    },
    {
      title: 'Content Evaluation',
      description: 'Simple corrections for immediate improvements.',
      icon: Search,
    },
    {
      title: 'Smart Keyword Generator',
      description: 'Automatic suggestions and the best keywords to target.',
      icon: Brain,
    },
    {
      title: 'Automated Alerts',
      description: 'Automatic notifications about your SEO health, including quick fixes.',
      icon: Bell,
    },
  ];

export default function featGrid(){
   return(
    <div>
        <motion.h2
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 0.5}}
        className='text-3xl font-bold md:text-4xl text-center mb-4'
        >Elevate your SEO efforts.
        </motion.h2>
        <motion.p
        initial={{opacity:0 , y:20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duartion: 0.5}}
        className='text-gray-500 text-center'
        >
        Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
        </motion.p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
            {features.map((feature,index) => (
                <FeatCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                />
            ))}
        </div>
    </div>
   )
}