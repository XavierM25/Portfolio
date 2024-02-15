import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <div className="block py-2 pl-3 pr-4 text-[#121212] sm:text-xl rounded md:p-0 hover:text-[#d372dc]">
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
