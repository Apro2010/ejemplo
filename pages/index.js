import Head from "next/head";
import Layout from "./components/layout";
import Title from "./components/title";


export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Garabato</title>
                <meta name="description" content="Garabato arte"/>
            </Head>
           
            <Title> Garabato </Title>
            <p> Pagina pata NTF</p>
        </Layout>
    )
}