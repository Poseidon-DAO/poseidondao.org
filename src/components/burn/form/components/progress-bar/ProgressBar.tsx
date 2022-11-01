import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { motion, MotionValue } from "framer-motion";

interface IProgressBarProps {
  percentage: number | string | MotionValue;
}

const ProgressBar: FC<IProgressBarProps> = ({ percentage }) => {
  return (
    <Box
      as={motion.div}
      pos="fixed"
      top="10vh"
      left={0}
      right={0}
      h="5px"
      bg="brand.red"
      transformOrigin={0}
      style={{ scaleX: percentage }}
    />
  );
};

export { ProgressBar };
