import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Box, Container, Input } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { useAuthProtect } from "hook/useAuthProtect";
import Header from "components/Header";

const Home = () => {
  const inputRef = useRef(null);
  useAuthProtect();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    inputRef.current.changeValue(e.target.value);
  };

  return (
    <>
      <Header />
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container minH={"100vh"} centerContent>
        <Box className={styles.main} maxW={"90vw"}>
          <DynamicText ref={inputRef} />
          <Input onChange={onChange} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
