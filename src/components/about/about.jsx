import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import introVideo from "../../assets/videos/intro.mp4";
import { RiSecurePaymentFill } from "react-icons/ri";
import data from "../../assets/docs/termsAndCondition";

export default function About() {
  return (
    <Container
      maxW="container.lg"
      marginY={["5", "10"]}
      padding="16"
      boxShadow="lg"
    >
      <Heading textAlign={["center", "left"]}>About Us</Heading>

      <Founder />

      <Stack m="8" direction={["column", "row"]} alignItems="center">
        <Text fontFamily="cursive" m="8" textAlign={["center", "left"]}>
          We are a video streaming platform with some premium courses available
          only fro premium user.s
        </Text>

        <Link to="/subscribe">
          <Button variant="ghost" colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={data} />

      <HStack my="4" p="4">
        <RiSecurePaymentFill />
        <Heading size="xs" fontFamily="sans-serif" textTransform="uppercase">
          Payment is secured by Razorpay
        </Heading>
      </HStack>
    </Container>
  );
}

function Founder() {
  return (
    <Stack direction={["column", "row"]} spacing={["4", "16"]} padding="8">
      <VStack>
        <Avatar
          boxSize={["40", "48"]}
          src="https://avatars.githubusercontent.com/u/147901228?v=4"
        />
        <Text opacity="0.7">Co-Founder</Text>
      </VStack>

      <VStack justifyContent="center" alignItems={["center", "flex-start"]}>
        <Heading size={["md", "xl"]}>Bigyan Sapkota</Heading>
        <Text textAlign={["center", "left"]}>
          Hi, I am a full-stack developer and a mentor. Our mission is to
          provide quality content at reasonable price
        </Text>
      </VStack>
    </Stack>
  );
}

function VideoPlayer() {
  return (
    <Box>
      <video
        autoPlay
        controls
        src={introVideo}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        muted
        loop
      ></video>
    </Box>
  );
}

function TandC({ termsAndCondition }) {
  return (
    <Box>
      <Heading size="md" my="4" textAlign={["center", "left"]}>
        Terms and Condition
      </Heading>

      <Box h="sm" p="4" overflowY="scroll">
        <Text
          textAlign={["center", "left"]}
          letterSpacing="widest"
          fontFamily="heading"
        >
          {termsAndCondition}
        </Text>

        <Heading my="4" size="xs">
          Refund only applicable for cancellation within 7 days
        </Heading>
      </Box>
    </Box>
  );
}
