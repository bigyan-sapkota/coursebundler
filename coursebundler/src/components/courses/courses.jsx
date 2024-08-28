import { Container, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function Courses() {
  const [keyword, setKeyword] = useState("");
  return (
    <Container minH="95vh" maxW="container.lg" paddingY="8">
      <Heading m="8"> All Courses</Heading>
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course...."
        type="text"
        focusBorderColor="yellow.500"
      />
    </Container>
  );
}
