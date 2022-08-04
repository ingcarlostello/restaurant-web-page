// @components
import Layout from "../components/Layout/Layout";
import Menu from "../components/Menu/Menu";
import { labels } from "../labels";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        <p>{labels.categorias}</p>
      </div>
      <Menu categories={categories} />
    </>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/categories`;
  const response = await fetch(url);
  const categories = await response.json();
  return {
    props: {
      categories: categories,
    },
  };
}

export default Categories;
