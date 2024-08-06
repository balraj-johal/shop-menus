import { motion } from "framer-motion";
import { AbsoluteFill } from "remotion";

const Two = () => {
  return (
    <AbsoluteFill>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{duration: 1}}
      >
        2
      </motion.div>
    </AbsoluteFill>
  )
}

export default Two;