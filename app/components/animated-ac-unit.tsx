"use client"

import { motion } from "framer-motion"

export  function AnimatedAcUnit() {
  return (
    <div className="relative w-full h-full">
      {/* AC Unit Base */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* AC Unit Body */}
          <motion.rect
            x="100"
            y="50"
            width="200"
            height="150"
            rx="10"
            fill="currentColor"
            className="text-primary"
            initial={{ filter: "brightness(0.8)" }}
            animate={{ filter: ["brightness(0.8)", "brightness(1.2)", "brightness(0.8)"] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Vents */}
          {[...Array(5)].map((_, i) => (
            <motion.rect
              key={i}
              x="120"
              y={70 + i * 25}
              width="160"
              height="10"
              rx="2"
              fill="currentColor"
              className="text-secondary"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
            />
          ))}

          {/* Fan Animation */}
          <motion.g
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ transformOrigin: "200px 125px" }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.path
                key={i}
                d={`M 200 125 L ${200 + Math.cos((i * Math.PI) / 2) * 50} ${125 + Math.sin((i * Math.PI) / 2) * 50}`}
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-primary-foreground"
              />
            ))}
          </motion.g>

          {/* Status Indicators */}
          <motion.circle
            cx="180"
            cy="180"
            r="5"
            className="text-green-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.circle
            cx="220"
            cy="180"
            r="5"
            className="text-red-500"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </motion.div>

      {/* Cool Air Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/50"
            initial={{ y: 50, x: 150 + i * 10, opacity: 0 }}
            animate={{ y: -50, opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

