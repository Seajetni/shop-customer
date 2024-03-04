
import Benner from "@/components/Benner";

import Featured from "@/components/Featured";

import Layout from "@/components/Layout";




import  axios  from "axios";
import { useEffect } from "react";

export default function Home() {



  return (
    <Layout>
      <div >
        <Benner/>
      </div>


      <div>
        <Featured/>
      </div>

    

    </Layout>
  );
}
