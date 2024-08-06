import { motion } from "framer-motion";
import { AbsoluteFill } from "remotion";

const Three = () => {
  return (
    <AbsoluteFill>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{duration: 1}}
      >
        3
      </motion.div>
    </AbsoluteFill>
  )
}

export default Three;