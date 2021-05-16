import React from "react";
import { motion } from "framer-motion";

export default function GameCard({ game }) {
  return (
    <motion.div
      variants={scale}
      initial="initial"
      animate="animate"
      className="gameCard"
    >
      <div className="about">
        <h2>{game.name}</h2>
        <h3>{game.released}</h3>
      </div>
      <div className="image">
        <img className="gameImg" src={game.background_image} alt="" />
      </div>
    </motion.div>
  );
}

const scale = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
