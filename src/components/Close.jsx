"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { searchState } from "@/atoms/SearchAtom";
import Search from "./Search";

const MainContent = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState);

  return (
    <>
      {children}
      {isPopupOpen && <Search />}
    </>
  );
};

export default MainContent;
