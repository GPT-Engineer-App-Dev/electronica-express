import { Box, Container, VStack, Text, Image, Flex, Heading, Button, SimpleGrid, Link } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="outline">
          Cart
        </Button>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for all electronic needs</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Placeholder Products */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>Description of Product 1</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Description of Product 2</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Description of Product 3</Text>
              <Button colorScheme="teal">View Details</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6} textAlign="center">
        <Text>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
        <Flex justifyContent="center" mt={4}>
          <Link href="#" mx={2}>Privacy Policy</Link>
          <Link href="#" mx={2}>Terms of Service</Link>
          <Link href="#" mx={2}>Contact Us</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;