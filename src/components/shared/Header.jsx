import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="bg-gray-200 shadow-2xl py-4  ">
        <div className="flex justify-between container mx-auto items-center ">
          <div className="font-light text-4xl ">
            <h1>Rs Group</h1>
          </div>

          <div className=" flex gap-12 font-semibold  ">
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="Product">Product</Link>
            <Link href="blog">Blog</Link>
            <Link href="Contact">Contact</Link>
          </div>
          <div>
            <button className="bg-blue-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
              Hired Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
