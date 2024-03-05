import React from "react";
import Link from "next/link";
export default function Benner() {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 3xl:bg-transparent 3xl:from-white/95 3xl:to-white/25 ltr:3xl:bg-gradient-to-r rtl:3xl:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          ร้านบังเซ็ม
            <strong className="block font-extrabold text-green-700">
              กระถางปูนเปลือย
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
          ผลิตขายมานานกว่า13 ปี เจ้าแรกๆในจังหวัดนครนายก <br/> ราคาส่งตั้งแต่ใบแรก!
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="https://www.facebook.com/profile.php?id=100063188441667&mibextid=ZbWKwL"
              className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              FaceBook
            </Link>

            <Link
              href="https://line.me/ti/p/S4nx1QSyPz"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Line
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
