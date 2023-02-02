import React from "react";
import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";

export default function Pricing() {
  return (
    <Flex>
      <Box bg="#F0EAFB" p="60px">
        <Text fontSize="24px" fontWeight="800">
          Premium PRO
        </Text>
        <Heading as="h3" mt="16px" fontSize="60px">
          $329
        </Heading>
        <Text color="#171923" fontSize="18px" mt="8px" fontWeight="500">
          Billed just once
        </Text>
        <Button colorScheme="purple" size="lg" w="282px" mt="24px">
          Getting Started
        </Button>
      </Box>
      <Box></Box>
    </Flex>
  );
}
