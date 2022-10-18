export const Logo = ({ name, sub, className, ref }) => {
  return (
    <h1 ref={ref} className={`font-bold leading-7 text-black ${className}`}>
      {name || "Shoe"}
      <span className='text-red-600'>{sub || "Brand"}</span>
    </h1>
  )
}

export const NavLink = ({ id, link, name, className, nodeRef }) => {
  return (
    <>
      <div ref={nodeRef}>
        <li key={id} className={`leading-5 will-change-transform ${className}`}>
          <a href={link}>{name}</a>
        </li>
      </div>
    </>
  )
}

export const navItems = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "SNEAKERS",
    link: "/sneakers",
  },
  {
    id: 3,
    name: "PLAYERS",
    link: "/players",
  },
]

export const navFooter = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT US",
    link: "/about",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact",
  },
]
