import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { HeroSubtitle, HeroTitle } from "./hero";

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2" } });
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    tl.fromTo(
      title,
      {
        opacity: 0,
        y: "30%",
      },
      { opacity: 1, y: "0%", duration: 1.3, delay: .9 }
    );
    tl.fromTo(
      subtitle,
      {
        opacity: 0,
        y: "80%",
      },
      { opacity: 1, y: "0%", duration: .9 }
    );
    tl.fromTo(arrowRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });
  }, []);

  return (
    <>
      <section className='relative'>
        <div className='flex h-[530px] '>
          <div className='w-5/12 self-center 2xl:w-6/12 '>
            <HeroTitle nodeRef={titleRef}  className="will-change-transform"/>
            <HeroSubtitle nodeRef={subtitleRef}  className="will-change-transform"/>
          </div>
        </div>
        <section ref={arrowRef}>
          <div className='absolute top-[85%] w-fit 2xl:relative'>
            <Arrow className=' relative h-20 animate-bounce 2xl:h-auto' />
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
