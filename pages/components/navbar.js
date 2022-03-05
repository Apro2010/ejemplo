import Link from "next/link";

export default function Navbar(){
    return (

        <nav>
            <Link href='/'> 
             <a>Home</a></Link>
            <Link href='/users'>
            <a>Users</a></Link>
            <Link href='/posts'>
            <a>Post</a></Link>

            <style jsx> {`
            
                 nav 
{
    padding-top: 10px;
    align-items : center;

}      
      a {
          padding: 0 10px;

      }

`}


            </style>
        </nav>
    )
}
