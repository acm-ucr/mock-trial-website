"use client";
// import { motion } from "motion/react";

const Demo = () => {
  //   const values = [{ name: "Item 1" }, { name: "Item 2" }, { name: "Item 3" }];
  //   const sampleAnimation = {
  //     initial: { scale: 0 },
  //     whileInView: { scale: 1, transition: { duration: 4.0 } },
  //   };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-20 text-3xl">
      {/* <motion.div animate={{ rotate: 360 }}>
        Some Text
      </motion.div> */}
      {/* <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        Some Text
      </motion.div> */}
      {/* <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
        Some Text
      </motion.div> */}
      {/* <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}>
        Some Text
      </motion.div> */}
      {/* {values.map(({ name }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {name}
        </motion.div>
      ))} */}
      {/* <motion.div whileHover={{ scale: 1.05 }}>
        Some Text
      </motion.div> */}
      {/* <motion.div variants={sampleAnimation} initial="initial" whileInView="whileInView">
        Some Text
      </motion.div> */}
      hello
    </div>
  );
};

export default Demo;
