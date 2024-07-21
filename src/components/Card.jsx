import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { typeColors } from "../utils/typeColors";

const Card = ({ img, name, types, onClick }) => {
  return (
    <Link
      href={`/${name}`}
      className="bg-white shadow-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center py-4">
        <Image src={img} width={200} height={200} alt={name} />
      </div>
      <div className="p-8">
        <h2 className="text-2xl capitalize">{name}</h2>

        <div className="flex items-center gap-4 mt-8">
          <h2 className="text-lg">Type:</h2>
          {types?.map((type, index) => (
            <span
              key={index}
              style={{ backgroundColor: typeColors[type] }}
              className="py-[2px] px-2 rounded text-white"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
