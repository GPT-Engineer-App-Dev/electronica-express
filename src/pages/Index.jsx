import { useState } from "react";
import { Box, Container, VStack, Text, Image, Flex, Heading, Button, SimpleGrid, Link, Select, Input } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const [filters, setFilters] = useState({ category: "", minPrice: "", maxPrice: "" });
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", category: "Category 1", price: 100, description: "Description of Product 1" },
    { id: 2, name: "Product 2", category: "Category 2", price: 200, description: "Description of Product 2" },
    { id: 3, name: "Product 3", category: "Category 1", price: 300, description: "Description of Product 3" },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filterProducts = () => {
    let filtered = products;
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }
    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice));
    }
    setFilteredProducts(filtered);
  };

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

      {/* Filter Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Filter Products</Heading>
        <Flex justifyContent="center" mb={10}>
          <Select placeholder="Select category" name="category" onChange={handleFilterChange} value={filters.category} width="200px" mr={4}>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </Select>
          <Input placeholder="Min Price" name="minPrice" onChange={handleFilterChange} value={filters.minPrice} width="200px" mr={4} />
          <Input placeholder="Max Price" name="maxPrice" onChange={handleFilterChange} value={filters.maxPrice} width="200px" mr={4} />
          <Button colorScheme="teal" onClick={filterProducts}>Apply Filters</Button>
        </Flex>
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt={product.name} />
              <Box p={6}>
                <Heading size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text mb={4}>${product.price}</Text>
                <Button colorScheme="teal">View Details</Button>
              </Box>
            </Box>
          ))}
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