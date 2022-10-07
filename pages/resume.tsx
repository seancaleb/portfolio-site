import Head from "next/head";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Sean Caleb — Resume</title>
      </Head>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-50">
        <iframe src="static/Sean_Caleb_Ubias-Resume.pdf" width="100%" height="100%" frameBorder="0" />
      </div>
    </>
  );
};

export default Resume;
