const Section = ({ children, className, nodeRef }) => {
  return (
    <div ref={nodeRef}>
      <section className={`container mx-auto my-40 max-w-full md:max-w-5xl ${className}`}>
        {children}
      </section>
      ;
    </div>
  );
};

export default Section;
