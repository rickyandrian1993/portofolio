import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className: string;
  el?: keyof JSX.IntrinsicElements;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function AnimatedText({
  text,
  className,
  el: Wrapper = "p",
}: AnimatedTextProps) {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
          <span className="inline-block" key={`word-${i}`}>
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

export default AnimatedText;
