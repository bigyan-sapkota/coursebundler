import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Subscribe() {
  return (
    <Container h="90vh" p="16">
      <Heading my="8" textAlign="center">
        Welcome
      </Heading>

      <VStack boxShadow="lg" alignItems="stretch" spacing="0" borderRadius="lg">
        <Box bg="yellow.400" p="4" css={{ borderRadius: "8px 8px 0 0" }}>
          <Text>Pro Pack - Rs. 299.0</Text>
        </Box>

        <Box p="4">
          <VStack textAlign="center" px="8" mt="4" spacing="8">
            <Text>Join Pro Pack and Get Access to all content</Text>
            <Heading size="md">Rs. 299 Only</Heading>
          </VStack>

          <Button my="8" w="full" colorScheme="yellow">
            Buy Now
          </Button>
        </Box>

        <Box bg="blackAlpha.600" p="4" css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading size="sm" textTransform="uppercase" color="white">
            100% refund at cancellation
          </Heading>

          <Text fontSize="xs" color="white">
            *Terms and Condition applied*
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
