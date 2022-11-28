import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Div = styled.div`
  background-color: red;

  h1 {
    color: white;
  }
`;

export default function Home() {
  return (
    <Div>
      <h1>Hello World</h1>;
    </Div>
  );
}
