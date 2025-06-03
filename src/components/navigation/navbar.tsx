"use client";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  return(
    <header className="w-full h-[80px] bg-amber-400">
        <div className='flex justify-between w-full h-full z-50'>
            <Link href='/hero' className='bg-blue-300 flex items-center justify-center'>
                <Zap/>
                <span>ZenOps</span>
            </Link>
            <nav className="flex justify-center items-center bg-pink-300 gap-8">
                <motion.div>
                  <Link href='features'>Features</Link>
                </motion.div>
                <motion.div>
                  <Link href='features'>Dashboard</Link>
                </motion.div>
                <motion.div>
                  <Link href='features'>Testimonials</Link>
                </motion.div>
                <motion.div>
                  <Link href='features'>Pricing</Link>
                </motion.div>
            </nav>
            <div className="items-center flex justify-center m-2">
            <Button>Join WaitList</Button>

            </div>
           
        </div>
    </header>
  )
}
