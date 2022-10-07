import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer, Header, Main } from "../components";
import Head from "next/head";
import Image from "next/image";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Head>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Header />
            <Main>
                <Component {...pageProps} />
                <Footer />
            </Main>
        </ChakraProvider>
    );
}

export default MyApp;
