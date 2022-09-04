import { useEffect, useRef } from "react"
import { Content, DataSection, ImageSec, Subtitle } from "./sectionComponent"
import Section from "../../config/Section"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const SectionImage = () => {
  // Get Dom element
  const itemRef = useRef([])
  itemRef.current = []

  const imageSrc = useRef([])
  imageSrc.current = []

  // initialize gsap ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    // gsap in Content Section scrollTrigger animation
    itemRef.current.map((item, index) => {
      let time = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=150",
          end: () => "+=100%",
          scrub: 1,
          // markers: true,
        },
      })
      time.fromTo(
        item,
        { autoAlpha: 0, clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" },
        {
          duration: 10,
          autoAlpha: 1,
          ease: "power2",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }
      )
      time.fromTo(
        item.querySelectorAll(".image"),
        { x: 100, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 2, stagger: 0.3, delay: 2 }
      )

      return time
    })

    // gsap in image scale animation
    imageSrc.current.map((item, index) => {
      let time = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          // start: "top center+=10",
          start: "top center-=10%",
          end: "bottom-=20% center",
          // end: () => "+=100%",
          scrub: 1,
          toggleActions: "play none none reverse",
          // markers: true,
        },
      })
      time.fromTo(
        item,
        { scale: 2, autoAlpha: 0 },
        // {scale: 1,duration: 30,delay: 10,stagger: 0.3,autoAlpha: 1,ease: "power2",
        {
          scale: 1,
          duration: 3,
          delay: 0,
          stagger: 0.3,
          autoAlpha: 1,
          ease: "power2",
        }
      )
      return time
    })
  }, [itemRef])

  // Function untuk looping data refs
  const addRefs = item => {
    if (item) {
      itemRef.current.push(item)
    }
  }
  const addRefImg = item => {
    if (item) {
      imageSrc.current.push(item)
    }
  }

  return (
    <div className='relative z-20 my-96'>
      {/* my-96 */}
      {DataSection.map(({ id, src, subtitle, content }) => (
        <Section
          key={id}
          // nodeRef={(node) => { revealRef.current.push(node); }}
          nodeRef={addRefs}
          className={`.image flex flex-col items-center gap-y-20 gap-x-20 will-change-auto lg:flex-row lg:gap-y-0   ${
            id % 2 ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}>
          <article
            className={`lg:w-6/12 w-full   ${
              id % 2 ? "lg:text-right" : "lg:text-left"
            } text-center `}>
            <div className='mb-3 '>
              <Subtitle name={subtitle} />
            </div>
            <div
              className={`w-full lg:w-7/12  ${
                id % 2 ? "lg:ml-auto " : "lg:mr-auto"
              }`}>
              <Content name={content} />
            </div>
          </article>
          <picture className='lg:w-6/12 w-full'>
            <div className=' drop_shadow relative h-[304px] overflow-hidden 2xl:h-[350px] '>
              <ImageSec name={src} nodeRef={addRefImg} />
            </div>
          </picture>
        </Section>
      ))}
    </div>
  )
}

export default SectionImage
