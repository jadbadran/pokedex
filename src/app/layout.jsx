"use client";

import "../app/globals.css";
import { RecoilRoot } from "recoil";
import Header from "../components/Header";
import FirstPage from "../components/First-Page";
import Footer from "../components/Footer";
import Close from "../components/Close";

export default function RootLayout({ children }) {
  return (
    <RecoilRoot>
      <Header />
      <FirstPage />
      <Close>{children}</Close>
      <Footer />
    </RecoilRoot>
  );
}
