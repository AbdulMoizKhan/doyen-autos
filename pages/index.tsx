import Link from "next/link";
import Layout from "../components/Layout";
import { HomePage } from "../views";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <HomePage/>
  </Layout>
);

export default IndexPage;
