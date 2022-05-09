import { useEffect, useRef } from "react";
import { Logo, NavLink, navItems } from "./navItems";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const ulRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1" } });
    const navbar = navbarRef.current;

    tl.fromTo(
      navbar,
      { opacity: 0, y: "50%" },
      { opacity: 1, y: "0%", duration: 0.8, zIndex: "1000" }
    );

    tl.fromTo(
      [ulRef.current.children],
      { opacity: 0, y: "100%" },
      { opacity: 1, y: "0%", duration: 1, stagger: 0.2, ease: "power2.Out" },
      "+=1"
    );
  }, []);

  return (
    <header className='px-8 text-white'>
      <div ref={navbarRef} className='relative'>
        <nav className='relative z-10 flex justify-between'>
          <div>
            <Logo className='logo text-2xl transition-all will-change-transform' />
          </div>
          <ul ref={ulRef} className='flex space-x-[3.875rem]'>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                {...item}
                className='transition-all hover:text-gray-800/50'
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
