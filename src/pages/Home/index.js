import React from 'react'
import { Link } from 'react-router-dom';


const Page = () => {
    return (<>
        <div>Pagina inicial</div>
        <Link to="/about">Go about</Link>    
    </>)
}

export default Page;