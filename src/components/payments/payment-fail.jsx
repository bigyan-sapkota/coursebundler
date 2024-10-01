import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function PaymentFail() {
  return (
    <Container h="90vh">
      <VStack justifyContent="center" h="full" spacing="4">
        <RiErrorWarningFill size="5rem" />
        <Heading my="8" textAlign="center" textTransform="uppercase">
          Payment Fail
        </Heading>
        <Link to="/subscribe">
          <Button variant="ghost">Subscribe</Button>
        </Link>
      </VStack>
    </Container>
  );
}
