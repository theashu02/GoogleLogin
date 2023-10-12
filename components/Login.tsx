import Head from "next/head";
import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Center h="100vh">
        <Stack
          align="center"
          bgColor="gray.400"
          p={16}
          rounded="3xl"
          spacing={12}
          boxShadow="lg"
        >
          <Box
            bgColor="teal.300"
            w="fit-content"
            p={5}
            rounded="3xl"
            boxShadow="md"
          >
            <ChatIcon w="100px" h="100px" color="whitesmoke" />
          </Box>

          <Button
            boxShadow="md"
            onClick={() => signInWithGoogle()}
          >
            Sign In with Google
          </Button>
        </Stack>
      </Center>
    </>
  );
}
