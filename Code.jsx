import React from 'react';
import { motion } from "framer-motion";

const getRandomDelay = () => Math.random();

const BlinkingText = ({ text, className }) => {
  return (
    <p className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          whileInView={{ opacity: [0, 0.3, 0.5, 0.8, 1] }}
          transition={{
            duration: 1,
            delay: getRandomDelay(),
            repeat: 1,
            ease: "linear",
          }}
          viewport={{ once: true }}
          style={{
            display: "inline-block",
            whiteSpace: "pre",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
};

export default BlinkingText;



// import 
import BlinkingText from './BlinkingText'; // Adjust path 

<BlinkingText 
  text="“IT’S WHAT WE DO THAT DEFINES US”" 
  className="class-name" 
/>
