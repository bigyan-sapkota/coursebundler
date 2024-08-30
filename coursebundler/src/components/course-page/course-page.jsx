import { Box, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import introVideo from "../../assets/videos/intro.mp4";
import { useState } from "react";

export default function CoursePage() {
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 1,
      title: "Sample Title",
      description: "Sample Description here I show you at this place in here.",
      video: {
        url: "hello",
      },
    },
    {
      _id: 2,
      title: "Sample Title",
      description: "Sample Description here I show you at this place in here.",
      video: {
        url: "hello",
      },
    },
    {
      _id: 3,
      title: "Sample Title",
      description: "Sample Description here I show you at this place in here.",
      video: {
        url: "hello",
      },
    },
  ];

  return (
    <Grid minH="90vh" templateColumns={["1fr", "3fr 1fr"]}>
      <Box>
        <video
          width="100%"
          // autoPlay
          controls
          src={introVideo}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>

        <Heading m="4">
          #{lectureNumber + 1} {lectures[lectureNumber].title}
        </Heading>

        <Heading m="4" size="lg">
          Description:
        </Heading>

        <Text m="4">{lectures[lectureNumber].description}</Text>
      </Box>

      <VStack>
        {lectures.map((element, i) => (
          <button
            key={i}
            onClick={() => setLectureNumber(i)}
            style={{
              width: "100%",
              padding: "1rem",
              textAlign: "center",
              margin: "0",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
            }}
          >
            <Text noOfLines="1">
              #{i + 1}
              {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
}
