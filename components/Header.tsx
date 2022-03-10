import React from "react";
import { Box, Stack, Heading, Flex, Button, useDisclosure, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useAuth } from "hook/useAuth";
import router from "next/router";
import { auth } from "firebaseConfig";

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { user } = useAuth();
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Coding Test
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <span>Menu</span>
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}>
        <NextLink href="/" passHref>
          <Text>
            <Link>Home</Link>
          </Text>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Text>
            <Link>Blog</Link>
          </Text>
        </NextLink>
      </Stack>

      <Box display={{ base: isOpen ? "block" : "none", md: "block" }} mt={{ base: 4, md: 0 }}>
        {user ? (
          <Button variant="outline" _hover={{ bg: "teal.700", borderColor: "teal.700" }} onClick={signOut}>
            Sign out
          </Button>
        ) : (
          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
            onClick={() => router.push("/signUp")}>
            Create account
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
