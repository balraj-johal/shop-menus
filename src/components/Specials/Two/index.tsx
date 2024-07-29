import { motion } from "framer-motion";
import { AbsoluteFill } from "remotion";

const Two = () => {
  return (
    <AbsoluteFill style={{backgroundColor: "yellow"}}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 1}}
      >
        Help
      </motion.div>
    </AbsoluteFill>
  )
}

export default Two;