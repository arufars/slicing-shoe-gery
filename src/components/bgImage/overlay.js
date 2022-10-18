import gsap from "gsap"
import React, { useEffect, useRef } from "react"

const Overlay = () => {
  const overlay = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1" } })
    const over = overlay.current
    tl.fromTo(
      over,
      { opacity: 0 },
      { opacity: 1, y: "-100%", duration: 2, delay: 1.8 }
    )
  }, [])

  return (
    <div
      ref={overlay}
      className='absolute bg-red-600 right-0 w-6/12 h-full z-50'>
      haeyy
    </div>
  )
}

export default Overlay
