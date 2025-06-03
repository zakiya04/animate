"use client";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
  return(
    <header>
        <div>
            <Link href='/hero'>
                <Zap/>
                <span>ZenOps</span>
            </Link>
            <nav>
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
            <Button>Join WaitList</Button>
        </div>
    </header>
  )
}
