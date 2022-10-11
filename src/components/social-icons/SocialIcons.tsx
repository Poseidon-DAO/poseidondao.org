import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/react";

import { SocialIcon } from "react-social-icons";
import { FaDiscord } from "react-icons/fa";

const SocialIcons = ({ size = 50 }: { size?: number }) => {
  return (
    <Flex textAlign="center">
      <SocialIcon
        target="_blank"
        url="https://twitter.com/Poseidon_SF/"
        bgColor="transparent"
        fgColor="white"
        style={{ width: size, height: size }}
      />
      <Flex alignItems="center" justifyContent="center">
        <NextLink href="https://discord.gg/gUsX8MpTqk" passHref>
          <Link target="_blank">
            <FaDiscord size={size - 20} />
          </Link>
        </NextLink>
      </Flex>
      <SocialIcon
        target="_blank"
        url="https://instagram.com/poseidondao"
        bgColor="transparent"
        fgColor="white"
        style={{ width: size, height: size }}
      />
      <SocialIcon
        target="_blank"
        url="https://github.com/Poseidon-DAO"
        bgColor="transparent"
        fgColor="white"
        style={{ width: size, height: size }}
      />
    </Flex>
  );
};

export { SocialIcons };