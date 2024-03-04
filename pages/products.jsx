import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "@/components/loading";
import Image from 'next/image'
export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api-shop-murex.vercel.app/api/product");
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);
  console.log(data);
  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
            {data.length > 0 ? (
              data.map((item, index) =>
                item.name ? (
                  <li key={index} className='  bg-gray-100 rounded-3xl'>
                    <Link href={`/product/${item._id}`} className="group block overflow-hidden rounded-3xl">
                      <Image
                        src={item.img}
                        alt=""
                        width={100}
                        className="h-[350px] w-full  transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="relative  pt-2 px-4 pb-2" >
                        <h3 className="text-xl text-black  group-hover:underline-offset-4">
                          {item.name}
                        </h3>

                        <p className="mt-2">
                          <span className=" text-gray-900 text-lg">
                           ราคา {item.price}฿
                          </span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ) : null
              )
            ) : (
              <div className='flex justify-center'><Loading/></div>
            )}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
