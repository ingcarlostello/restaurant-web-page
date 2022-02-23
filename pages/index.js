// @components
import Menu from "../components/Menu/Menu";


export default function Home({ categories }) {
  return (
    <>
      {/* <Menu categories={categories} /> */}
    </>
  );
}

// export async function getStaticProps() {
//   const url = `${process.env.API_URL}/categories`;
//   const response = await fetch(url);
//   const categories = await response.json();
//   return {
//     props: {
//       categories: categories,
//     },
//   };
// }