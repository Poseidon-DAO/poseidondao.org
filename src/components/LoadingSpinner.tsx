import { Flex, CircularProgress } from "@chakra-ui/react";

export default function LoadingSpinner({ size }: { size?: number }) {
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
      <CircularProgress
        isIndeterminate
        thickness="5px"
        color="brand.blue"
        size={size || 110}
      />
    </Flex>
  );
}
