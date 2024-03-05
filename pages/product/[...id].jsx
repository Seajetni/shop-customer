import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/loading";
import Link from "next/link";
export default function Product() {
  const [productInfo, setProductInfo] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios
        .get("/api/getData?id=" + id)
        .then((res) => {
          setProductInfo(res.data.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [id]);
  console.log(productInfo);

  if (!productInfo) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className=" w-screen h-screen p-4 xl:flex xl:h-1/2">
        <div className="flex justify-center pt-5 pb-3">
          <Image
            src={productInfo.img}
            width={100}
            height={100}
            alt={productInfo.name}
            className=" w-full"
          />
        </div>

        <div className="flow-root px-12 pt-12  ">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl ">ชื่อสินค้า</dt>
              <dd className="text-gray-700 sm:col-span-2 text-lg">
                {productInfo.name}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">ราคา</dt>
              <dd className="text-gray-700 sm:col-span-2 text-lg">
                {productInfo.price} ฿
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">รายละเอียด</dt>
              <dd className="text-gray-700 sm:col-span-2 text-lg">
                {productInfo.details}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-4 sm:gap-4">
              <dt className="font-medium text-gray-900 text-xl">
                ติดต่อซื้อได้ที่นี่
              </dt>

              <Link
                href="https://www.facebook.com/profile.php?id=100063188441667&mibextid=ZbWKwL"
                class="flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-blue-800 dark:text-white"
              >
                <div class="m-auto">
                  <div class="flex items-center justify-start flex-1 space-x-4 ">
                    <svg width="25" height="25" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                      />
                    </svg>
                    <span class="font-medium mb-[-2px  group-hover:scale-105 ">
                      Facebook
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                href="https://line.me/ti/p/S4nx1QSyPz"
                class="flex break-inside bg-[#2ea44f] text-white border-2  border-black  rounded-3xl px-6 py-3 mb-4 w-full"
              >
                <div class="m-auto">
                  <div class="flex items-center justify-start flex-1 space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="s7bNhrkBpwUCoDDZerQ_xa_0ZWDaCvmIF4I_gr1"
                        x1="4.522"
                        x2="45.203"
                        y1="2.362"
                        y2="47.554"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33c481"></stop>
                        <stop offset="1" stop-color="#21a366"></stop>
                      </linearGradient>
                      <path
                        fill="url(#s7bNhrkBpwUCoDDZerQ_xa_0ZWDaCvmIF4I_gr1)"
                        d="M8,42h32c1.105,0,2-0.895,2-2V8c0-1.105-0.895-2-2-2H8C6.895,6,6,6.895,6,8v32	C6,41.105,6.895,42,8,42z"
                      ></path>
                      <path
                        d="M23.284,37.758c-0.454,0-0.851-0.175-1.118-0.493c-0.46-0.548-0.338-1.245-0.286-1.542l0.191-1.144	c0.036-0.277,0.036-0.451,0.028-0.549c-0.08-0.037-0.22-0.091-0.45-0.14c-6.792-0.895-11.751-5.723-11.751-11.473	c0-6.417,6.329-11.637,14.108-11.637c7.779,0,14.107,5.22,14.107,11.637c0,2.593-1.005,4.954-3.073,7.218	c-2.801,3.227-9.098,7.206-10.647,7.858C23.97,37.672,23.607,37.758,23.284,37.758z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M23.284,37.258c-0.389,0-0.615-0.171-0.735-0.315c-0.311-0.371-0.22-0.888-0.176-1.136l0.191-1.146	c0.075-0.578,0.024-0.824-0.013-0.918c-0.017-0.038-0.202-0.214-0.796-0.342c-6.564-0.866-11.357-5.489-11.357-10.984	c0-6.141,6.104-11.137,13.608-11.137c7.503,0,13.607,4.996,13.607,11.137c0,2.462-0.962,4.713-2.942,6.881	c-2.76,3.179-8.95,7.094-10.472,7.734C23.838,37.185,23.539,37.258,23.284,37.258z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M37.113,22.417c0-5.865-5.88-10.637-13.107-10.637s-13.108,4.772-13.108,10.637	c0,5.258,4.663,9.662,10.962,10.495c0.427,0.092,1.008,0.282,1.155,0.646c0.132,0.331,0.086,0.85,0.042,1.185	c0,0-0.153,0.925-0.187,1.122c-0.057,0.331-0.263,1.296,1.135,0.707c1.399-0.589,7.548-4.445,10.298-7.611h-0.001	C36.203,26.879,37.113,24.764,37.113,22.417z"
                      ></path>
                      <linearGradient
                        id="s7bNhrkBpwUCoDDZerQ_xb_0ZWDaCvmIF4I_gr2"
                        x1="18.372"
                        x2="36.968"
                        y1="13.013"
                        y2="27.439"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33c481"></stop>
                        <stop offset="1" stop-color="#21a366"></stop>
                      </linearGradient>
                      <path
                        fill="url(#s7bNhrkBpwUCoDDZerQ_xb_0ZWDaCvmIF4I_gr2)"
                        d="M32.052,20.698c0.38,0,0.688-0.308,0.688-0.687s-0.309-0.687-0.688-0.687h-2.604 c-0.379,0-0.687,0.308-0.687,0.687c0,0.001,0,0.001,0,0.002v2.602c0,0,0,0,0,0.001v2.603c0,0.38,0.309,0.688,0.687,0.688h2.604 c0.379,0,0.688-0.309,0.688-0.688c0-0.379-0.309-0.687-0.688-0.687h-1.917v-1.23h1.917c0.38,0,0.688-0.308,0.688-0.687 c0-0.38-0.309-0.688-0.688-0.688v0.001h-1.917v-1.23H32.052z"
                      ></path>
                      <linearGradient
                        id="s7bNhrkBpwUCoDDZerQ_xc_0ZWDaCvmIF4I_gr3"
                        x1="16.286"
                        x2="34.882"
                        y1="15.702"
                        y2="30.128"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33c481"></stop>
                        <stop offset="1" stop-color="#21a366"></stop>
                      </linearGradient>
                      <path
                        fill="url(#s7bNhrkBpwUCoDDZerQ_xc_0ZWDaCvmIF4I_gr3)"
                        d="M26.463,20.01v3.223l-2.67-3.635c-0.129-0.172-0.335-0.275-0.549-0.275 c-0.074,0-0.147,0.011-0.218,0.035c-0.281,0.094-0.47,0.356-0.47,0.652v5.209c0,0.38,0.309,0.688,0.688,0.688 c0.38,0,0.688-0.309,0.688-0.688v-3.222l2.669,3.635c0.129,0.172,0.334,0.275,0.549,0.275c0.073,0,0.147-0.012,0.218-0.036 c0.282-0.093,0.47-0.355,0.47-0.652V20.01c0-0.379-0.308-0.687-0.687-0.687S26.463,19.631,26.463,20.01z"
                      ></path>
                      <linearGradient
                        id="s7bNhrkBpwUCoDDZerQ_xd_0ZWDaCvmIF4I_gr4"
                        x1="12.933"
                        x2="31.529"
                        y1="20.025"
                        y2="34.451"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33c481"></stop>
                        <stop offset="1" stop-color="#21a366"></stop>
                      </linearGradient>
                      <path
                        fill="url(#s7bNhrkBpwUCoDDZerQ_xd_0ZWDaCvmIF4I_gr4)"
                        d="M16.271,19.323c-0.379,0-0.687,0.308-0.687,0.687v5.209c0,0.38,0.308,0.688,0.687,0.688 h2.604c0.379,0,0.687-0.309,0.687-0.689c0-0.379-0.308-0.687-0.687-0.687h-1.917V20.01C16.958,19.631,16.65,19.323,16.271,19.323z"
                      ></path>
                      <linearGradient
                        id="s7bNhrkBpwUCoDDZerQ_xe_0ZWDaCvmIF4I_gr5"
                        x1="14.665"
                        x2="33.26"
                        y1="17.793"
                        y2="32.218"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#33c481"></stop>
                        <stop offset="1" stop-color="#21a366"></stop>
                      </linearGradient>
                      <path
                        fill="url(#s7bNhrkBpwUCoDDZerQ_xe_0ZWDaCvmIF4I_gr5)"
                        d="M20.194,20.01v5.209c0,0.38,0.308,0.688,0.687,0.688c0.379,0,0.687-0.309,0.687-0.688V20.01 c0-0.379-0.308-0.687-0.687-0.687C20.502,19.323,20.194,19.631,20.194,20.01z"
                      ></path>
                    </svg>
                    <span class="font-medium">Line</span>
                  </div>
                </div>
              </Link>
              <Link
                href="tel:0961678500"
                class="flex break-inside bg-white text-black border-2 border-black rounded-3xl px-6 py-3 mb-4 w-full dark:bg-rose-400 dark:text-white"
              >
                <div class="m-auto">
                  <div class="flex items-center justify-start flex-1 space-x-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 18.048828 11.035156 C 16.003504 10.946776 14.45113 11.723922 13.474609 12.658203 C 12.986349 13.125343 12.633832 13.625179 12.392578 14.091797 C 12.151324 14.558415 11.998047 14.943108 11.998047 15.443359 C 11.998047 15.398799 11.987059 15.632684 11.980469 15.904297 C 11.973869 16.17591 11.97507 16.542045 12 16.984375 C 12.04996 17.869036 12.199897 19.065677 12.597656 20.484375 C 13.393174 23.321771 15.184446 27.043821 19.070312 30.929688 C 22.95618 34.815554 26.678014 36.606575 29.515625 37.402344 C 30.93443 37.800228 32.130881 37.949937 33.015625 38 C 33.457997 38.02503 33.822105 38.026091 34.09375 38.019531 C 34.365395 38.012931 34.601049 38.001953 34.556641 38.001953 C 35.056892 38.001953 35.441585 37.848676 35.908203 37.607422 C 36.374821 37.366168 36.874657 37.013651 37.341797 36.525391 C 38.276078 35.54887 39.053222 33.996496 38.964844 31.951172 C 38.922907 30.975693 38.381316 30.111858 37.582031 29.599609 C 36.96435 29.203814 36.005458 28.589415 34.753906 27.789062 C 33.301811 26.861299 31.44451 26.795029 29.929688 27.625 L 30.015625 27.582031 L 28.837891 28.087891 L 28.751953 28.148438 C 28.465693 28.349428 28.111154 28.386664 27.789062 28.251953 C 26.886813 27.874649 25.480985 27.133329 24.173828 25.826172 C 22.866671 24.519015 22.125351 23.113186 21.748047 22.210938 C 21.613336 21.888845 21.650568 21.534307 21.851562 21.248047 L 21.912109 21.162109 L 22.417969 19.984375 L 22.375 20.070312 C 23.204764 18.555868 23.140248 16.698619 22.210938 15.246094 C 21.410584 13.994542 20.796186 13.03565 20.400391 12.417969 C 19.888142 11.618684 19.02431 11.077096 18.048828 11.035156 z M 17.962891 13.033203 C 18.243409 13.045263 18.533045 13.209378 18.716797 13.496094 C 19.113001 14.114413 19.727696 15.07377 20.527344 16.324219 C 21.058033 17.153694 21.09533 18.243821 20.621094 19.109375 L 20.597656 19.152344 L 20.115234 20.279297 L 20.214844 20.097656 C 19.623835 20.939396 19.505055 22.032514 19.902344 22.982422 C 20.35304 24.060173 21.214923 25.695392 22.759766 27.240234 C 24.304608 28.785077 25.939827 29.64696 27.017578 30.097656 C 27.967486 30.494945 29.060604 30.376165 29.902344 29.785156 L 29.720703 29.884766 L 30.847656 29.402344 L 30.890625 29.378906 C 31.755801 28.904877 32.845877 28.944375 33.675781 29.474609 L 33.675781 29.472656 C 34.92623 30.272304 35.885587 30.886999 36.503906 31.283203 C 36.790622 31.466955 36.954736 31.756591 36.966797 32.037109 C 37.032417 33.555785 36.504954 34.506599 35.896484 35.142578 C 35.59225 35.460568 35.262335 35.691348 34.990234 35.832031 C 34.718133 35.972715 34.457889 36.001953 34.556641 36.001953 C 34.373232 36.001953 34.276633 36.013981 34.046875 36.019531 C 33.817117 36.025131 33.509144 36.025436 33.128906 36.003906 C 32.368431 35.960876 31.318757 35.831053 30.054688 35.476562 C 27.526547 34.767581 24.137509 33.168759 20.484375 29.515625 C 16.831241 25.862491 15.232169 22.473167 14.523438 19.945312 C 14.169071 18.681386 14.039037 17.631464 13.996094 16.871094 C 13.974624 16.490908 13.974899 16.18286 13.980469 15.953125 C 13.986069 15.72339 13.998047 15.626918 13.998047 15.443359 C 13.998047 15.542109 14.027287 15.281867 14.167969 15.009766 C 14.308652 14.737665 14.539432 14.40775 14.857422 14.103516 C 15.493401 13.495046 16.444215 12.967581 17.962891 13.033203 z"></path>
                    </svg>
                    <span class="font-medium mb-[-2px  group-hover:scale-105 ">
                      Cell New
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </dl>
        </div>
      </div>
    </Layout>
  );
}
