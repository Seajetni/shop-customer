import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Loading from "./loading";

export default function Featured() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/getData");
        setData(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
        <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
          <div className="mx-auto max-w-md text-center lg:text-left">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl"></h2>
              <p className="mt-4 text-gray-500">
              มีสินค้าให้เลือกหลากหลายรูปแบบ หลายไซส์  หลายขนาด และสามารถสั่งทำไซส์ตามต้องการของลูกค้าได้  มีบริการทำสีราคาย่อมเยาว์   คุยรายละเอียดทาง Facebook - Line !
              </p>
            </header>

            <Link
              href="/products"
              className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
            >
              สินค้าทั้งหมด
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 lg:py-8">
          {data.length > 0 ? (
            <div className="sm:flex">
              {data.map((item, index) => (
                <div key={index}>
                  {item.featured && (
                    <ul className="grid grid-cols-1 gap-4">
                      <li>
                        <Link
                          href={`/product/${item._id}`}
                          className="group block"
                        >
                          {item.img && (
                            <Image
                              src={item.img}
                              width={100}
                              height={100}
                              alt=""
                              className="aspect-square w-full rounded object-cover"
                            />
                          )}

                          <div className="mt-3">
                            {item.name && (
                              <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                {item.name}
                              </h3>
                            )}
                            {item.price && (
                              <p className="mt-1 text-sm text-gray-700">
                                {item.price} ฿
                              </p>
                            )}
                          </div>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div><Loading/></div>
          )}
        </div>
      </div>
    </div>
  );
}
