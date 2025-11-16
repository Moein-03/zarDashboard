"use client"

import { motion } from "framer-motion";

const variants = {
     hidden: { opacity: 0 },
     visible: { opacity: 1 }
}

const Motion = ({ children, index }: { children: React.ReactNode, index: number }) => {
     return (
          <motion.div
               className="card card-side bg-base-100 shadow-sm" 
               variants={variants}
               initial="hidden"
               animate="visible"
               transition={{
                    delay: index * 0.3,
                    ease: "easeInOut",
                    duration: 0.5
               }}
          >
               {children}
          </motion.div>
     )
}

export default Motion