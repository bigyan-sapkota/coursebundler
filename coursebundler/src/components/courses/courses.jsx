import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const categories = [
    "Web Development",
    "Artificial Intelligence",
    "Data Structure and Algorithms",
    "App Development",
    "Data Science",
  ];

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const addToPlaylistHandler = () => {
    console.log("Added to playlist");
  };

  return (
    <Container minH="95vh" maxW="container.lg" paddingY="20">
      <Heading mt="8" mb="8">
        {" "}
        All Courses
      </Heading>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course...."
        type="text"
        focusBorderColor="yellow.500"
      />

      <HStack
        overflowX={"auto"}
        paddingY="8"
        css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((item, i) => (
          <Button minW="60" key={i} onClick={() => setCategory(item)}>
            <Text>{item}</Text>
          </Button>
        ))}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <Course
          title="Sample"
          description="Sample"
          views="23"
          imageSrc="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_960_720.jpg"
          id="Sample"
          creator="Sample Boy"
          lectureCount="2"
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
}

function Course({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc} boxSize="60" objectFit="contain" />
      <Heading
        textAlign={["center", "left"]}
        maxW="200"
        fontFamily="sans-serif"
        noOfLines="3"
        size="sm"
      >
        {title}
      </Heading>

      <Text noOfLines="2">{description}</Text>

      <HStack>
        <Text noOfLines="2" fontWeight="bold" textTransform="uppercase">
          Creator
        </Text>
        <Text noOfLines="2" fontFamily="body" textTransform="uppercase">
          {creator}
        </Text>
      </HStack>

      <Heading textAlign="center" size="xs" textTransform="uppercase">
        Lectures - {lectureCount}
      </Heading>

      <Heading size="xs" textTransform="uppercase">
        Views - {views}
      </Heading>

      <Stack direction={["column", "row"]} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          colorScheme="yellow"
          variant="ghost"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
}
