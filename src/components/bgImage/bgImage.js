import gsap from "gsap"
import { useEffect, useRef } from "react"
import Sepatu from "../../assets/sepatu.png"

const Image = () => {
  const imageRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1" } })

    const image = imageRef.current
    tl.fromTo(image, { opacity: 0 }, { opacity: 1, duration: 2, delay: 3 })
  }, [])

  return (
    <div ref={imageRef}>
      <div className='absolute top-[30%] -right-5 lg:top-0 lg:right-0 lg:w-6/12 -z-10 lg:z-0  transform -rotate-6 lg:rotate-0'>
        <img src={Sepatu} alt='sepatu' className=' h-full w-full' />
      </div>
    </div>
  )
}

export default Image
