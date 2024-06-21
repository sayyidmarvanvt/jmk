import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      className="z-50 w-10 h-10 fixed top-2 right-0 bottom-0 border-none cursor-pointer"
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="26" height="26" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", transition: { duration: 0.5 } },
            open: { d: "M 3 16.5 L 17 2.5", transition: { duration: 0.5 } },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, transition: { duration: 0.5 } },
            open: { opacity: 0, transition: { duration: 0.5 } },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", transition: { duration: 0.5 } },
            open: { d: "M 3 2.5 L 17 16.346", transition: { duration: 0.5 } },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
