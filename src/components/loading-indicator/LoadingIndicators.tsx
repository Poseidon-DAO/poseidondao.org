import { type FC } from "react";
import { Flex, CircularProgress } from "@chakra-ui/react";

interface ILoadingIndicatorProps {
  size?: string | number;
}

const LoadingIndicator: FC<ILoadingIndicatorProps> = ({ size = "60px" }) => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <CircularProgress thickness="5px" size={size} isIndeterminate />
    </Flex>
  );
};

export { LoadingIndicator };
