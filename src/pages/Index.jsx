import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
              World
            </Link>
            <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Business
            </Link>
            <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Markets
            </Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Opinion
            </Link>
            <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Tech
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Featured Article Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>
            Featured Article
          </Heading>
          <Box bg="gray.100" p={4} borderRadius="md" mb={8}>
            <Heading as="h3" size="lg" mb={2}>
              The Impact of Global Markets on Local Economies
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
        </Box>

        {/* Sidebar with Trending Articles */}
        <Box flex="1" bg="gray.50" p={4} borderRadius="md">
          <Heading as="h2" size="lg" mb={4}>
            Trending Articles
          </Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h4" size="md">
                Article 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h4" size="md">
                Article 2
              </Heading>
              <Text>
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h4" size="md">
                Article 3
              </Heading>
              <Text>
                Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;