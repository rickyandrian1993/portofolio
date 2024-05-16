import { motion } from "framer-motion";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
  url: string;
};

function ButtonIcon(props: Props) {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      href={props.url}
      target="_blank"
      className="btn btn-circle btn-primary"
    >
      {props.children}
    </motion.a>
  );
}

export default ButtonIcon;
