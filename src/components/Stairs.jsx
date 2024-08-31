import { motion } from "framer-motion";

// !variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// TODO: calculate the reverse index fot staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs.
    Each div will have the same animation defined by the stairsAnimation object.
    The delay for each is calculated dynamically based on it's reversed index,
    creating a staggered effect with decreasing delay for each subsequent step.

        Indo Language:
        membuat 6 div gerakan, masing-masing mewakili satu anak tangga.
    Setiap div akan memiliki animasi yang sama yang ditentukan oleh objek staisrAnimation.
    Penundaan untuk setiap div dihitung secara dinamis berdasarkan indeks terbalik,
    menciptakan efek terhuyung-huyung dengan penundaan yang semakin lama semakin berkurang untuk setiap langkah berikutnya.
    */}
      {[...Array(6)].map((_, index) => {
        return (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-yellow-300 relative"
        />
        );
      })}
    </>
  );
};

export default Stairs;
