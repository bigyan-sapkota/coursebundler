import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  return (
    <Container py="16" h="90vh">
      <form>
        <Heading
          my="16"
          textTransform="uppercase"
          textAlign={["center", "left"]}
        >
          Forget Password
        </Heading>

        <VStack>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="abc@gmail.com"
            type="email"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" width="full" colorScheme="yellow">
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
}
