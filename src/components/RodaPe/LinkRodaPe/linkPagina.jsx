import { Link } from "react-router-dom";

export default function LinkPage ({link, children}) {
    return <Link className='
    text-gray-400 
    hover:text-white 
    transition-colors 
    duration-300'
    to={link}>{children}</Link>
}