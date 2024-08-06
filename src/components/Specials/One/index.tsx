import { motion } from "framer-motion";
import { AbsoluteFill } from "remotion";

const One = () => {
  return (
    <AbsoluteFill>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1 }}
      >
        1
      </motion.div>
    </AbsoluteFill>
  )
}

export default One;