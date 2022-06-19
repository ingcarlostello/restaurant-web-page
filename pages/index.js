// @components
import Head from "next/head";
import Menu from "../components/Menu/Menu";
import Slides from "../components/Slides/Slides";


export default function Home({ categories }) {
  return (
    <>
      <div className="bg-slate-50 pb-28 font-nunito">
        <Slides />
        <Menu categories={categories} />
      </div>
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