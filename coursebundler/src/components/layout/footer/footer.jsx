import { Box, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import { DiGithub } from "react-icons/di";

export default function Footer() {
  return (
    <Box padding="4" bg="blackAlpha.900" minH="10vh">
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width="full">
          <Heading color="white">All Rights Reserved</Heading>
          <Heading fontFamily="body" size="sm" color="yellow.400">
            @bigyan_sapkota
          </Heading>
        </VStack>

        <HStack
          spacing={["2", "10"]}
          justifyContent="center"
          color="white"
          fontSize="50"
        >
          <a href="#" target="_blank">
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/bigyansapkota/" target="_blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/bigyan-sapkota" target="_blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
}
