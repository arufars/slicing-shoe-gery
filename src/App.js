import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import {
  Hero,
  Image,
  Overlay,
  SectionImage,
} from "./components"
import Container from "./config/Container"

const App = () => {
  const bodyRef = useRef(null)
  useEffect(() => {
    gsap.to(bodyRef.current, {
      visibility: "visible",
    })
  }, [])
  return (
    <div ref={bodyRef} className='body relative  flex h-screen'>
      <Container>
        <Hero />
        <SectionImage />
      </Container>
      <Overlay />
      <Image />
    </div>
  )
}

export default App
