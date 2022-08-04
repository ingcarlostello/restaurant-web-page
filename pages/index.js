// @components
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Menu from "../components/Menu/Menu";
import Slides from "../components/Slides/Slides";

export default function Home({ categories }) {
  return (
    <>
      {/* <Slides /> */}

        <Slides />

      <Menu categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  const url = `${process.env.API_URL}/categories`;
  const response = await fetch(url);
  const categories = await response.json();
  return {
    props: {
      categories: categories,
    },
  };
}
