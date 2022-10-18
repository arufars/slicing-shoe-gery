export const HeroTitle = ({ title, className, nodeRef }) => {
  return (
    <div ref={nodeRef}>
      <h1
        className={`mb-4 text-5xl font-bold leading-[4rem] text-black 2xl:text-6xl 2xl:leading-[4.5rem] ${className}`}>
        {title || "Regain your confidence on the court."}
      </h1>
    </div>
  )
}

export const HeroSubtitle = ({ subtitle, nodeRef, className }) => {
  return (
    <div ref={nodeRef}>
      <p
        className={`w-4/5 text-xl font-lighttext-gray-900/80 2xl:text-2xl ${className}`}>
        {subtitle ||
          "A shoe built with purpose and to take your game to the next level."}
      </p>
    </div>
  )
}
