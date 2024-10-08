import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container h="90vh">
      <VStack justifyContent="center" h="full" spacing="4">
        <RiErrorWarningFill size="5rem" />
        <Heading my="8" textAlign="center">
          Page Not Found
        </Heading>
        <Link to="/">
          <Button variant="ghost">Go to home</Button>
        </Link>
      </VStack>
    </Container>
  );
}
