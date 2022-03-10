import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Button, Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { auth } from "firebaseConfig";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({
      ...userForm,
      [e.target.id]: e.target.value,
    });
  };

  const signUp = () => {
    router.push("/signUp");
  };

  const signIn = async () => {
    try {
      const { email, password } = userForm;
      if (email && password) {
        const res = await auth.signInWithEmailAndPassword(email, password);
        if(res) {
          router.push('/');
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box className={styles.container}>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box className={styles.main}>
        <Container>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input id="password" type="password" onChange={handleChange} />
          </FormControl>
          <Box paddingTop={8} display="flex" justifyContent="space-between">
            <Button color={"Highlight"} backgroundColor={"blue.700"} onClick={signIn}>
              Sign In
            </Button>
            <Button onClick={signUp}>Sign Up</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;