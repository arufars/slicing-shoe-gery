import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import {
  Footer,
  Hero,
  Image,
  Navbar,
  Overlay,
  SectionImage,
} from "./components";
import Container from "./config/Container";

const App = () => {
  const bodyRef = useRef(null);
  useEffect(() => {
    gsap.to(bodyRef.current, {
      visibility: "visible",
    });
  }, []);
  return (
    <div ref={bodyRef} className='body relative flex  h-screen'>
      <Container>
        <Navbar />
        <Hero />
        <SectionImage />
        <Footer />
      </Container>
      <Overlay />
      <Image />
    </div>
  );
};

export default App;
