 import Link from "next/link";
 import { useEffect } from 'react';
import { useRouter } from 'next/router';
 
 const NavLink = ({ href, title}) => {
    return(
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#121212] sm:text-xl rounded md:p-0 hover:text-[#d372dc]">
            {title}
        </Link>
    );
 };

 export default NavLink;