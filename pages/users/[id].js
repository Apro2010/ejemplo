import { useRouter } from "next/router"
import Head from "next/head";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import Layout from "../components/layout";
import Title from "../components/title";


export default function User({user}) {

     const router = useRouter ();

     if ( router.isFallback) {
         return <div>CARGANDO....</div>
     }

return (
<Layout>

<Head>
      <title>User {user.name}</title>
                <meta name="description" content="Garabato arte"/>
            </Head>
    
    <Title> User ID {user.id}</Title>
    <div className="card">
    <h3>User</h3>
    <p> Name: {user.name}</p>
    <p> Email: {user.email}</p>
    <p> Phone: {user.phone}</p>
    <p> Website: {user.wesite}</p>
    </div>
    <style jsx>
      {`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}
      </style>
    </Layout>
    )
}
export async function getStaticPaths() {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const users = await res.json();
    
  //  const paths = [
        
     //   {params: { id: '1' } },
       // {params: { id: '2' } },
     
   // ];

   const paths = users.map(user => {
    return {
      params: { id: `${user.id}` }
    }
  });

    return{
        paths,
        fallback: true
    }
}

 export async function getStaticProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {

        props: {
            user
        }
    }

 }