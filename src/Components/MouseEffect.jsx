import  { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../Components/useMousePosition.js';

const MouseFollower = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const circleSize = isHovered ? 40 : 20; // Adjust the size as needed

  return (
    <motion.div
      className="h-40 w-40 bg-purple-500 rounded-full absolute"
      style={{
        position: 'absolute',
        top: y - circleSize / 2,
        left: x - circleSize / 2,
      }}
      animate={{
        scale: isHovered ? 1.5 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  );
};

export default MouseFollower;


