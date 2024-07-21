import "../app/globals.css";
import Layout from "../app/layout";
import React, { useState, useEffect } from "react";

export default function App({ children }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
