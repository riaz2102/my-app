import Link from "next/link";


const page = async () => {
  const res = await fetch("http://localhost:3004/products");
  const data = await res.json();
  
  return (
    <div>
      <div className="text-center container mx-auto px-36 py-12">
        <h1 className="font-bold text-4xl text-pink-900">Get your Product</h1>
        <p className="font-light text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dicta
          corrupti eius! Nam aperiam sed fugiat perferendis non voluptatibus
          quia ex cum ad tenetur placeat quam, nesciunt ratione, consequuntur
          blanditiis.
        </p>
      </div>
      <div>
        <div className="flex items-center container mx-auto px-24 gap-3 justify-center mt-8 flex-wrap ">
          {data.map((data) => (
            <div
              className="border border-gray-200 w-120 h-60 shadow px-6 py-4 rounded-md flex flex-col justify-between pb-6"
              key={data.id}
            >
              <div>
                <h1 className="font-semibold text-3xl text-red-800">
                  {data.title}
                </h1>
                <p>{data.description}</p>
              </div>
              <div className="flex justify-between px-4 mt-4">
                <p className="font-semibold text-red-800">
                  {" "}
                  Price:{data.price}
                </p>
                <p className="font-semibold text-orange-800">
                  {" "}
                  rating: {data.rating}{" "}
                </p>
              </div>
              <div>
                <Link
                  href={`/product/${data.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition flex justify-center items-center cursor-pointer"
                >
                  See details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
