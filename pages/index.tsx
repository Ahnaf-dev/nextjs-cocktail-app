import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import cocktailsAPI from "../api/apiConfig";
import Header from "../components/Header";
import cocktailsOverview from "../types/cocktailOverview";

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
