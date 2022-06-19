/* eslint-disable @next/next/no-img-element */
// @ Nextjs
import Link from "next/link";
import Image from "next/image";

const Menu = ({ categories }) => {
  
  return (
    <>
      <div className="px-28 mt-40 gap-7 md:flex flex-wrap lg:flex flex-row flex-wrap justify-center content-start items-start">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`categories/${category.urlCategory}`}
            passHref
          >
            <div className=" cursor-pointer flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto mx-auto bg-gray-800 md:w-2/5 lg:w-1/4">
              <div className="z-10 absolute text-center align-baseline bg-red-600 py-2 px-3 rounded-md drop-shadow-md">
                <h1 className="text-white text-3xl font-bold font-nunito">
                  {category.categoryName}
                </h1>
              </div>
              <div className="opacity-75 transition-transform rounded-lg h-72 hover:ease-in duration-300 hover:scale-125">
                {/* <Image
                  width={900}
                  height={800}
                  objectFit="cover"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${category.FotoCategoria.url}`}
                  alt={category.FotoCategoria.name}
                /> */}
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${category.FotoCategoria.url}`}
                  alt={category.FotoCategoria.name}
                  className="object-cover h-72"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
