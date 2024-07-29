import { motion } from "framer-motion";
import { AbsoluteFill } from "remotion";

const Three = () => {
  return (
    <AbsoluteFill style={{backgroundColor: "purple"}}>
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

export default Three;