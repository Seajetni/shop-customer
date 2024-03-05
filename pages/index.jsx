import Benner from "@/components/Benner";
import Featured from "@/components/Featured";
import Layout from "@/components/Layout";


export default function Home() {
  return (
    <Layout>
      <div>
        <Benner />
      </div>
      
      <div>
        <Featured />
      </div>

    </Layout>
  );
}
