import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Request() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent="center" spacing="16">
        <Heading>Request New Course</Heading>

        <form action="" style={{ width: "100%" }}>
          <Box my="4">
            <FormLabel htmlFor="name">Enter Name</FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              type="name"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my="4">
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my="4">
            <FormLabel htmlFor="course">Message</FormLabel>
            <Input
              required
              id="course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Your Message"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link to="/forgetpassword">
              <Button fontSize="sm" variant="link">
                Forget Password?
              </Button>
            </Link>
          </Box>

          <Button my="4" colorScheme="yellow" type="submit">
            Send Mail
          </Button>

          <Box my="4">
            See Available Courses.{" "}
            <Link to="/request">
              <Button colorScheme="yellow" variant="link">
                Click
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
}
