"use client";



import React, { useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import './style.css'

interface GridItemVariants {
  opacity: number;
  scale: number;
  x: number;
  y: number;
  borderRadius: number;
  transition: {
    duration: number;
    ease: string;
  };
}

interface ClickedGridItem extends Omit<GridItemVariants, 'transition'> {}

interface LargeItemVariants {
  opacity: number;
  scale: number;
  x: number;
  y: number;
  borderRadius: number;
  transition: {
    duration: number;
    ease: string;
  };
}

interface ClickedLargeItem extends Omit<LargeItemVariants, 'transition'> {}

const initialGridItem: GridItemVariants = {
  opacity: 1,
  scale: 1,
  x: 0,
  y: 0,
  borderRadius: 0,
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

const initialLargeItem: LargeItemVariants = {
  opacity: 1,
  scale: 1.2,
  x: 0,
  y: -100,
  borderRadius: 10,
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

const clickedGridItem: ClickedGridItem = {
  opacity: 0,
  scale: 0.5,
  x: 0,
  y: 100,
  borderRadius: 0,
};

const clickedLargeItem: ClickedLargeItem = {
  opacity: 1,
  scale: 1,
  x: 0,
  y: 0,
  borderRadius: 0,
};

const swappedGridItem: GridItemVariants = {
  opacity: 1,
  scale: 1.2,
  x: 0,
  y: -100,
  borderRadius: 10,
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

const swappedLargeItem: LargeItemVariants = {
  opacity: 0,
  scale: 0.5,
  x: 0,
  y: 100,
  borderRadius: 0,
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
};

interface CardSwappingProps {}

const CardSwapping: React.FC<CardSwappingProps> = () => {
  const [isCard2Expanded, setIsCard2Expanded] = useState(false);
  const animateGridItem = useAnimation();
  const animateLargeItem = useAnimation();

  const setGridItemVariants = (variants: GridItemVariants, itemIndex: number) => {
    if (itemIndex === 1) {
      animateGridItem.start({ ...variants });
    }
    // Add other conditions as needed for different items
  };

  const setLargeItemVariants = (variants: LargeItemVariants, itemIndex: number) => {
    if (itemIndex === 1) {
      animateLargeItem.start({ ...variants });
    }
    // Add other conditions as needed for different items
  };

  const handleClick = (itemIndex: number) => {
    // Update state based on clicked item index
    if (itemIndex === 1) {
      // Set clicked variants for item 1 and swapped variants for item 2
      setGridItemVariants(clickedGridItem, itemIndex);
      setLargeItemVariants(swappedLargeItem, 2);
    } else if (itemIndex === 2) {
      // Set clicked variants for item 2 and swapped variants for item 1
      setGridItemVariants(clickedGridItem, itemIndex);
      setLargeItemVariants(swappedLargeItem, 1);
    }
  };

  return (
    <div className="grid-container">
      <motion.div
        grid-area="span 3/span 1/span 3/span 1"
        variants={initialGridItem as Variants}
        animate={animateGridItem}
        onClick={() => handleClick(1)}
        className={`item1 bg-red-500`}
      >
        1
      </motion.div>
      <motion.div
        grid-area="span 1/span 1/span 1/span 1"
        variants={initialLargeItem as Variants}
        animate={animateLargeItem}
        onClick={() => handleClick(2)}
        className={`item2 bg-red-500`}
      >
        2
      </motion.div>
    </div>
  );
};

export default CardSwapping;

