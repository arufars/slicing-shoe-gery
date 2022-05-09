import React from "react";

const Container = ({ children }) => {
  return (
    <div className='container px-10 2xl:px-0 font-raleway mx-auto md:max-w-6xl xl:max-w-7xl md:w-full py-9'>
      {children}
    </div>
  );
};

export default Container;
