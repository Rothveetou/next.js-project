import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-blue-500 text-black p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default Navbar;
