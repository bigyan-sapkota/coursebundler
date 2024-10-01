import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./home.css";
import { Link } from "react-router-dom";

import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";

import vg from "../../assets/images/bg.png";
import introVideo from "../../assets/videos/intro.mp4";

export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack width="full" alignItems={["center", "flex-end"]} spacing="8">
            <Heading size="xl">LEARN FROM THE EXPERTS</Heading>
            <Text textAlign={["center", "left"]} fontFamily="cursive">
              Find Valuable Content At Reasonable Price
            </Text>
            <Link to="/courses">
              <Button size="lg" colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize="md"
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={"8"} bg="blackAlpha.800">
        <Heading textAlign="center" fontFamily="body" color="yellow.400">
          OUR BRANDS
        </Heading>
        <HStack
          className="brandsBanner"
          justifyContent="space-evenly"
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          // autoPlay
          controls
          src={introVideo}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
}
