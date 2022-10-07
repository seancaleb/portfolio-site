import { Divider } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { Section } from "../components";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Sean Caleb</title>
            </Head>
            <Section>
                <div className="min-h-[100vh] flex flex-col col-span-12 justify-center items-center">
                    <div className="flex flex-col items-center gap-4 mb-8">
                        <h1 className="text-[10vw] xs:text-4xl md:text-5xl tracking-[-.25px] font-medium text-white">
                            404 Not Found
                        </h1>

                        <p className="text-lg text-text max-w-[512px]">
                            This page could not be found.
                        </p>
                    </div>

                    <div>
                        <Link href="/">
                            <a className="btn btn-primary">Back to home</a>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default NotFound;
