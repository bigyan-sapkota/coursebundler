import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const { token } = useParams();
  return (
    <Container py="16" h="90vh">
      <form>
        <Heading
          my="16"
          textTransform="uppercase"
          textAlign={["center", "left"]}
        >
          Reset Password
        </Heading>

        <VStack>
          <Input
            required
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Button type="submit" width="full" colorScheme="yellow" my="4">
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
}
