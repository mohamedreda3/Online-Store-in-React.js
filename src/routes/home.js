import React from "react";
import Header from "./../layouts/header";
import CardDetails from "../site/details";
import MinPrice from "../components/minPrice";
import Footer from "../layouts/footer";
function Home() {
  return (
    <>
      <Header />
      <CardDetails />
      <MinPrice />
      <Footer />
    </>
  );
}

export default Home;
