import NextLink from "next/link";
import { Flex, Link } from "@chakra-ui/react";
import { FaDiscord, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const SocialIcons = ({ size = 20 }: { size?: number }) => {
  return (
    <Flex textAlign="center">
      <Flex alignItems="center" justifyContent="center" px="5px">
        <NextLink
          href="https://twitter.com/Poseidon_SF/"
          passHref
          prefetch={false}
        >
          <Link target="_blank" aria-label="Twitter">
            <FaTwitter size={size} />
          </Link>
        </NextLink>
      </Flex>

      <Flex alignItems="center" justifyContent="center" px="5px">
        <NextLink
          href="https://discord.gg/H9jrvSwuRV"
          passHref
          prefetch={false}
        >
          <Link target="_blank" aria-label="Discord">
            <FaDiscord size={size} />
          </Link>
        </NextLink>
      </Flex>

      <Flex alignItems="center" justifyContent="center" px="5px">
        <NextLink
          href="https://instagram.com/poseidondao"
          passHref
          prefetch={false}
        >
          <Link target="_blank" aria-label="Instagram">
            <FaInstagram size={size} />
          </Link>
        </NextLink>
      </Flex>

      <Flex alignItems="center" justifyContent="center" px="5px">
        <NextLink
          href="https://github.com/Poseidon-DAO"
          passHref
          prefetch={false}
        >
          <Link target="_blank" aria-label="Github">
            <FaGithub size={size} />
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export { SocialIcons };
