import Link from "next/link";
import "../app/globals.css";

import React from "react";

const Header = () => {
  return (
    <div className="bg-red-500 h-[15vh] w-full flex justify-center items-center">
      <div className="container">
        <Link href="/">
          <h2 className="text-white text-center text-3xl w-full flex justify-center">
            First Generation Pokedex!
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
