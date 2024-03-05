import React from "react";

export default function FAQComponents() {
  return (
    <div className="space-y- p-4 h-1/2">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">สินค้ามีไซส์อะไรบ้าง?</h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
        สินค้ามีหลากหลายไซส์ให้เลือก รับชมภาพแล้วไซส์เพิ่มเติมได้ทางแชตเพจเฟสบุ๊ค และไลน์
        </p>
      </details>

      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
          มีบริการขนส่งไหม?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
        ร้านเราไม่มีบริการขนส่ง แต่สามารถดีลรถส่งสินค้าให้ลูกค้าได้ โดยมีค่าใช้จ่ายแตกต่างกันไปแต่ละจังหวัด คุยรายละเอียดเพิ่มเติมได้ทางแชต
        </p>
      </details>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
          <h2 className="font-medium">
          สินค้าทนทานไหม?
          </h2>

          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p className="mt-4 px-4 leading-relaxed text-gray-700">
        สินค้าร้านเราผลิต และจำหน่ายเองมานานกว่า 13 ปี เป็นเจ้าแรกๆในนครนายก คัดเลือกวัสดุทุกชนิด ก่อนจะสั่งผลิต เป็นงานปั้นมือ ฝีมือคนไทย  จึงมีความทนทาน ผิวสวย เก็บงานก่อนส่งต่อให้ลูกค้าทุกใบ
        </p>
      </details>
    </div>
  );
}
