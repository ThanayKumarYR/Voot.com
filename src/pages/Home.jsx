import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <motion.div onClick={() => setSelectedId(1)}>
        <motion.h5>Suja</motion.h5>
        <motion.h2>tahaasjbdj</motion.h2>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div>
            <motion.h5>Suja</motion.h5>
            <motion.h2>tjsdfkjsd</motion.h2>
            <motion.button onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
